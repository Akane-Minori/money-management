type Kind = "out" | "in";
type TabName = "input" | "history" | "settings";

interface Entry {
  id: string;
  date: string; // YYYY-MM-DD
  kind: Kind;
  amount: number;
  memo: string; // 内訳
  category: string; // 種類
}

interface Settings {
  catOut: string[]; // 出費の種類
  catIn: string[]; // 収入の種類
}

type ListKey = keyof Settings;

interface ListDef {
  key: ListKey;
  title: string;
  note: string;
  kind: Kind;
}

const ENTRIES_KEY = "okozukai-entries";
const SETTINGS_KEY = "okozukai-settings";

const DEFAULT_CAT_OUT = [
  "ゲーセン",
  "ゲームソフト",
  "ゲーム課金",
  "交際費(カラオケとか)",
  "映画",
  "その他趣味(グッズとか)",
  "食べ物",
  "日用品(文房具とか)",
  "その他",
  "プラグイン",
  "創作用(素材集、ツクールなど)",
];

const DEFAULT_CAT_IN = ["毎月分お小遣い", "臨時お小遣い", "その他収入", "引き継ぎ"];

const LIST_DEFS: ListDef[] = [
  {
    key: "catOut",
    title: "出費の種類",
    note: "名前を変えると、過去の記録の種類名も一緒に変わります。削除しても、過去の記録はそのまま残ります。",
    kind: "out",
  },
  {
    key: "catIn",
    title: "収入の種類",
    note: "「引き継ぎ」は、残高を自動で計算するようになったので、毎年入力する必要はありません。",
    kind: "in",
  },
];

// ---------- helpers ----------

function $<T extends HTMLElement = HTMLElement>(id: string): T {
  return document.getElementById(id) as T;
}

function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className = "",
  text = "",
): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (text) e.textContent = text;
  return e;
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function todayString(): string {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function yen(n: number): string {
  return n.toLocaleString("ja-JP");
}

function total(items: Entry[], kind: Kind): number {
  return items
    .filter((e) => e.kind === kind)
    .reduce((s, e) => s + e.amount, 0);
}

// その月の終わりまでの残高(収入 - 出費)。"9999-12" を渡すと全期間
function balanceUntil(month: string): number {
  return entries
    .filter((e) => e.date.slice(0, 7) <= month)
    .reduce((s, e) => s + (e.kind === "in" ? e.amount : -e.amount), 0);
}

// ---------- storage ----------

function loadEntries(): Entry[] {
  try {
    const data = JSON.parse(localStorage.getItem(ENTRIES_KEY) ?? "[]");
    return Array.isArray(data) ? (data as Entry[]) : [];
  } catch {
    return [];
  }
}

function loadSettings(): Settings {
  const base: Settings = {
    catOut: [...DEFAULT_CAT_OUT],
    catIn: [...DEFAULT_CAT_IN],
  };
  try {
    const raw = JSON.parse(
      localStorage.getItem(SETTINGS_KEY) ?? "{}",
    ) as Partial<Settings>;
    return {
      catOut: Array.isArray(raw.catOut) ? raw.catOut : base.catOut,
      catIn: Array.isArray(raw.catIn) ? raw.catIn : base.catIn,
    };
  } catch {
    return base;
  }
}

let entries: Entry[] = loadEntries();
let settings: Settings = loadSettings();

function saveEntries(): void {
  localStorage.setItem(ENTRIES_KEY, JSON.stringify(entries));
}

function saveSettings(): void {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

// ---------- state ----------

let editingId: string | null = null;
let returnTab: TabName = "input";
let histYear = new Date().getFullYear();
let histMonth: string | null = null; // "YYYY-MM"
let renaming: { key: ListKey; index: number } | null = null;

// ---------- elements ----------

const dateInput = $<HTMLInputElement>("date");
const amountInput = $<HTMLInputElement>("amount");
const memoInput = $<HTMLInputElement>("memo");
const categorySelect = $<HTMLSelectElement>("category");
const addMsg = $("add-msg");

// ---------- tabs ----------

function showTab(name: TabName): void {
  document.querySelectorAll<HTMLElement>(".page").forEach((p) => {
    p.hidden = p.id !== `page-${name}`;
  });
  document.querySelectorAll<HTMLButtonElement>(".tab").forEach((t) => {
    t.classList.toggle("tab--active", t.dataset.tab === name);
  });
  if (name === "history") renderHistory();
  if (name === "settings") renderSettings();
  window.scrollTo(0, 0);
}

// ---------- form ----------

function currentKind(): Kind {
  const checked = document.querySelector<HTMLInputElement>(
    'input[name="kind"]:checked',
  );
  return checked?.value === "in" ? "in" : "out";
}

function setKind(kind: Kind): void {
  document
    .querySelectorAll<HTMLInputElement>('input[name="kind"]')
    .forEach((r) => {
      r.checked = r.value === kind;
    });
  fillCategories();
}

function fillCategories(selected?: string): void {
  const base = currentKind() === "out" ? settings.catOut : settings.catIn;
  const cats =
    selected && !base.includes(selected) ? [...base, selected] : base;
  categorySelect.replaceChildren(
    ...cats.map((c) => {
      const opt = el("option", "", c);
      opt.value = c;
      return opt;
    }),
  );
  if (selected) categorySelect.value = selected;
}

function updateFormMode(): void {
  const editing = editingId !== null;
  $("add").hidden = editing;
  $("update").hidden = !editing;
  $("cancel").hidden = !editing;
  $("delete").hidden = !editing;
  $("form-title").textContent = editing ? "編集" : "入力";
}

function readForm(): Omit<Entry, "id"> | null {
  const amount = Number(amountInput.value);
  if (!dateInput.value || !Number.isFinite(amount) || amount <= 0) {
    amountInput.focus();
    return null;
  }
  return {
    date: dateInput.value,
    kind: currentKind(),
    amount: Math.round(amount),
    memo: memoInput.value.trim(),
    category: categorySelect.value,
  };
}

function addEntry(): void {
  const f = readForm();
  if (!f) return;
  entries.push({ id: crypto.randomUUID(), ...f });
  saveEntries();
  addMsg.textContent = `${f.date.replace(/-/g, "/")} に追加しました`;
  amountInput.value = "";
  memoInput.value = "";
  renderAll();
  amountInput.focus();
}

function startEdit(id: string): void {
  const e = entries.find((x) => x.id === id);
  if (!e) return;

  // 履歴から来た場合は、終わったら履歴に戻る
  const active = document.querySelector<HTMLButtonElement>(".tab--active");
  returnTab = active?.dataset.tab === "history" ? "history" : "input";

  editingId = id;
  addMsg.textContent = "";
  setKind(e.kind);
  fillCategories(e.category);
  dateInput.value = e.date;
  amountInput.value = String(e.amount);
  memoInput.value = e.memo;
  updateFormMode();
  showTab("input");
}

// 履歴で開いている月に、記録を追加する(日付はその月の1日。今月なら今日)
function addToMonth(): void {
  if (!histMonth) return;
  editingId = null;
  returnTab = "input";
  amountInput.value = "";
  memoInput.value = "";
  fillCategories();
  updateFormMode();
  dateInput.value =
    histMonth === todayString().slice(0, 7) ? todayString() : `${histMonth}-01`;
  addMsg.textContent = "";
  showTab("input");
  amountInput.focus();
}

function finishEdit(): void {
  editingId = null;
  addMsg.textContent = "";
  amountInput.value = "";
  memoInput.value = "";
  dateInput.value = todayString();
  fillCategories();
  updateFormMode();
  renderAll();
  const back = returnTab;
  returnTab = "input";
  showTab(back);
}

function updateEntry(): void {
  if (editingId === null) return;
  const f = readForm();
  if (!f) return;
  const i = entries.findIndex((x) => x.id === editingId);
  if (i < 0) return;
  entries[i] = { id: editingId, ...f };
  saveEntries();
  finishEdit();
}

function deleteEntry(): void {
  if (editingId === null) return;
  if (!confirm("この記録を削除しますか?")) return;
  entries = entries.filter((x) => x.id !== editingId);
  saveEntries();
  finishEdit();
}

// ---------- lists ----------

function entryItem(e: Entry): HTMLLIElement {
  const li = el("li");
  const btn = el("button", "entry");
  btn.type = "button";

  const main = el("div", "entry__main");
  main.append(
    el("div", "entry__title", e.memo || e.category),
    el(
      "div",
      "entry__meta",
      `${e.date.slice(5).replace("-", "/")} ・ ${e.category}`,
    ),
  );

  btn.append(
    main,
    el(
      "div",
      `entry__amount entry__amount--${e.kind}`,
      `${e.kind === "out" ? "-" : "+"}${yen(e.amount)}`,
    ),
  );
  btn.addEventListener("click", () => startEdit(e.id));
  li.append(btn);
  return li;
}

function fillList(ul: HTMLUListElement, items: Entry[]): void {
  if (items.length === 0) {
    ul.replaceChildren(el("li", "empty", "記録はありません"));
    return;
  }
  // 日付の新しい順。同じ日は、あとから入れたものが上
  const sorted = [...items]
    .reverse()
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  ul.replaceChildren(...sorted.map((e) => entryItem(e)));
}

function renderSummary(prefix: string, items: Entry[]): void {
  const out = total(items, "out");
  const inc = total(items, "in");
  $(`${prefix}-out`).textContent = yen(out);
  $(`${prefix}-in`).textContent = yen(inc);
  $(`${prefix}-total`).textContent = yen(inc - out);
}

function renderRecent(): void {
  const month = todayString().slice(0, 7);
  const items = entries.filter((e) => e.date.startsWith(month));
  renderSummary("sum", items);
  $("sum-balance").textContent = yen(balanceUntil("9999-12"));
  fillList($<HTMLUListElement>("recent-list"), items);
}

// ---------- history ----------

function availableYears(): number[] {
  const set = new Set<number>([new Date().getFullYear(), histYear]);
  entries.forEach((e) => {
    const y = Number(e.date.slice(0, 4));
    if (Number.isFinite(y) && y > 0) set.add(y);
  });
  return Array.from(set).sort((a, b) => b - a);
}

function renderHistory(): void {
  const yearSelect = $<HTMLSelectElement>("year");
  yearSelect.replaceChildren(
    ...availableYears().map((y) => {
      const opt = el("option", "", `${y}年`);
      opt.value = String(y);
      return opt;
    }),
  );
  yearSelect.value = String(histYear);

  const yearItems = entries.filter((e) => e.date.startsWith(`${histYear}-`));
  renderSummary("year", yearItems);

  const head = el("li", "month-head");
  ["月", "出費", "収入", "差引", "残高"].forEach((t) => head.append(el("span", "", t)));

  const thisMonth = todayString().slice(0, 7);
  const rows = Array.from({ length: 12 }, (_, i) => {
    const key = `${histYear}-${pad(i + 1)}`;
    const items = entries.filter((e) => e.date.startsWith(key));
    const out = total(items, "out");
    const inc = total(items, "in");

    let cls = "month-row";
    if (items.length === 0) cls += " month-row--empty";
    if (key === histMonth) cls += " month-row--active";

    const li = el("li");
    const btn = el("button", cls);
    btn.type = "button";
    btn.append(
      el("span", "", `${i + 1}月`),
      el("span", "month-row__out", yen(out)),
      el("span", "month-row__in", yen(inc)),
      el("span", "", yen(inc - out)),
      el("span", "", key > thisMonth ? "-" : yen(balanceUntil(key))),
    );
    btn.addEventListener("click", () => {
      histMonth = key;
      renderHistory();
      $("month-detail").scrollIntoView({ behavior: "smooth" });
    });
    li.append(btn);
    return li;
  });

  $<HTMLUListElement>("month-list").replaceChildren(head, ...rows);

  const detail = $("month-detail");
  const key = histMonth;
  if (key && key.startsWith(`${histYear}-`)) {
    detail.hidden = false;
    $("month-title").textContent = `${histYear}年${Number(key.slice(5))}月`;
    fillList(
      $<HTMLUListElement>("month-entries"),
      entries.filter((e) => e.date.startsWith(key)),
    );
  } else {
    detail.hidden = true;
  }
}

// ---------- settings ----------

function smallBtn(
  label: string,
  disabled: boolean,
  onClick: () => void,
  danger = false,
): HTMLButtonElement {
  const b = el(
    "button",
    danger ? "btn btn--small btn--danger" : "btn btn--small",
    label,
  );
  b.type = "button";
  b.disabled = disabled;
  b.addEventListener("click", onClick);
  return b;
}

function refreshAfterSettings(): void {
  renderSettings();
  fillCategories(editingId !== null ? categorySelect.value : undefined);
}

function moveItem(key: ListKey, index: number, delta: number): void {
  const list = settings[key];
  const j = index + delta;
  if (j < 0 || j >= list.length) return;
  const tmp = list[index];
  list[index] = list[j];
  list[j] = tmp;
  saveSettings();
  refreshAfterSettings();
}

function renameItem(def: ListDef, index: number, newName: string): void {
  const name = newName.trim();
  if (!name) return;
  const list = settings[def.key];
  const old = list[index];

  if (name === old) {
    renaming = null;
    renderSettings();
    return;
  }
  if (list.includes(name)) {
    alert("同じ名前がすでにあります");
    return;
  }

  list[index] = name;
  entries.forEach((e) => {
    if (e.kind === def.kind && e.category === old) e.category = name;
  });
  saveEntries();
  renaming = null;
  saveSettings();
  refreshAfterSettings();
  renderAll();
}

function removeItem(key: ListKey, index: number): void {
  settings[key].splice(index, 1);
  saveSettings();
  refreshAfterSettings();
}

function addItem(def: ListDef, newName: string): void {
  const name = newName.trim();
  if (!name) return;
  const list = settings[def.key];
  if (list.includes(name)) {
    alert("同じ名前がすでにあります");
    return;
  }
  list.push(name);
  saveSettings();
  refreshAfterSettings();
}

function settingsPanel(def: ListDef): HTMLElement {
  const panel = el("div", "panel");
  panel.append(el("h2", "panel__title", def.title));
  if (def.note) panel.append(el("p", "note", def.note));

  const list = settings[def.key];
  const ul = el("ul", "order-list");

  list.forEach((name, i) => {
    const li = el("li", "order-item");
    const isRenaming =
      renaming !== null && renaming.key === def.key && renaming.index === i;

    if (isRenaming) {
      const input = el("input");
      input.type = "text";
      input.value = name;
      li.append(
        input,
        smallBtn("保存", false, () => renameItem(def, i, input.value)),
        smallBtn("キャンセル", false, () => {
          renaming = null;
          renderSettings();
        }),
      );
    } else {
      li.append(
        el("span", "order-item__title", name),
        smallBtn("↑", i === 0, () => moveItem(def.key, i, -1)),
        smallBtn("↓", i === list.length - 1, () => moveItem(def.key, i, 1)),
        smallBtn("名前変更", false, () => {
          renaming = { key: def.key, index: i };
          renderSettings();
        }),
        smallBtn("削除", false, () => removeItem(def.key, i), true),
      );
    }
    ul.append(li);
  });
  panel.append(ul);

  const addRow = el("div", "add-row");
  const addInput = el("input");
  addInput.type = "text";
  addRow.append(
    addInput,
    smallBtn("追加", false, () => addItem(def, addInput.value)),
  );
  panel.append(addRow);

  return panel;
}

function renderSettings(): void {
  $("settings-lists").replaceChildren(...LIST_DEFS.map((d) => settingsPanel(d)));
}

// ---------- xlsx import ----------

function cellText(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

function ymd(d: Date): string {
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
}

// 日付セル(Excelのシリアル値か文字列)を YYYY-MM-DD にする。
// 「～2020/12/31」のような繰り越し行は、その翌日(年の最初の日)にする。
function parseCellDate(v: unknown): string | null {
  if (typeof v === "number") {
    if (v < 40000 || v > 80000) return null;
    return ymd(new Date(Math.round((Math.floor(v) - 25569) * 86400000)));
  }
  if (typeof v !== "string") return null;
  const m = v.match(/(\d{4})\D+(\d{1,2})\D+(\d{1,2})/);
  if (!m) return null;
  const y = Number(m[1]);
  const mo = Number(m[2]);
  const d = Number(m[3]);
  if (/^\s*[～〜~]/.test(v)) {
    return ymd(new Date(Date.UTC(y, mo - 1, d + 1)));
  }
  return `${y}-${pad(mo)}-${pad(d)}`;
}

// 1シート分。列: A日付 B出費(合計) C出費内訳(金額) D出費種類 E収入(合計) F収入内訳(金額) G収入種類 I=メモ
// 日付は次の日付が出るまで下の行に引き継ぐ。合計(B/E)は使わず、内訳(C/F)を1件ずつ取り込む。
function parseSheet(sheet: string, rows: unknown[][]): Entry[] {
  const result: Entry[] = [];
  let date: string | null = null;

  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    const d = parseCellDate(r[0]);
    if (d) date = d;
    const day = date ?? `${sheet}-01-01`;
    const note = cellText(r[8]).replace(/\s*\n+\s*/g, " / ");

    let noteUsed = false;
    const out = r[2];
    if (typeof out === "number" && out > 0) {
      result.push({
        id: `x-${sheet}-${i + 1}-o`,
        date: day,
        kind: "out",
        amount: Math.round(out),
        memo: note,
        category: cellText(r[3]) || "その他",
      });
      noteUsed = true;
    }
    const inc = r[5];
    if (typeof inc === "number" && inc > 0) {
      result.push({
        id: `x-${sheet}-${i + 1}-i`,
        date: day,
        kind: "in",
        amount: Math.round(inc),
        memo: noteUsed ? "" : note,
        category: cellText(r[6]) || "その他収入",
      });
    }
  }
  return result;
}

async function importXlsx(file: File): Promise<void> {
  const result = $("import-result");
  result.textContent = "読み込み中…";
  try {
    const XLSX = await import("xlsx");
    const wb = XLSX.read(await file.arrayBuffer(), { type: "array" });

    const imported: Entry[] = [];
    const lines: string[] = [];
    wb.SheetNames.filter((n) => /^\d{4}$/.test(n))
      .sort()
      .forEach((name, index) => {
        const rows = XLSX.utils.sheet_to_json<unknown[]>(wb.Sheets[name], {
          header: 1,
          raw: true,
          defval: null,
        });
        const all = parseSheet(name, rows);
        // 前年からの繰り越し(各年の最初の「引き継ぎ」)は、残高を自動計算するので取り込まない。
        // 最初の年のぶんだけは、開始時の残高として取り込む。
        let items = all;
        if (index > 0) {
          const k = all.findIndex(
            (e) => e.kind === "in" && e.category === "引き継ぎ",
          );
          if (k >= 0) items = all.filter((_, j) => j !== k);
        }
        imported.push(...items);
        lines.push(
          `${name}年: ${items.length}件 / 出費 ${yen(total(items, "out"))} / 収入 ${yen(total(items, "in"))}`,
        );
      });

    if (imported.length === 0) {
      result.textContent = "年のシート(2019 など)が見つかりませんでした";
      return;
    }

    const old = entries.filter((e) => e.id.startsWith("x-")).length;
    if (
      !confirm(
        `${imported.length}件を取り込みます。前回の取り込み分(${old}件)は入れ替わります。`,
      )
    ) {
      result.textContent = "";
      return;
    }

    entries = entries.filter((e) => !e.id.startsWith("x-")).concat(imported);
    imported.forEach((e) => {
      const list = e.kind === "out" ? settings.catOut : settings.catIn;
      if (!list.includes(e.category)) list.push(e.category);
    });
    saveEntries();
    saveSettings();
    renderAll();
    refreshAfterSettings();
    result.textContent = `取り込みました\n${lines.join("\n")}\n※各年の最初の「引き継ぎ」(前年からの繰り越し)は、最初の年のぶん以外は取り込みません`;
  } catch {
    result.textContent = "読み込みに失敗しました。.xlsxファイルか確認してください";
  }
}

// ---------- init ----------

function renderAll(): void {
  renderRecent();
  renderHistory();
}

document.querySelectorAll<HTMLButtonElement>(".tab").forEach((t) => {
  t.addEventListener("click", () => {
    showTab((t.dataset.tab ?? "input") as TabName);
  });
});

document
  .querySelectorAll<HTMLInputElement>('input[name="kind"]')
  .forEach((r) =>
    r.addEventListener("change", () => {
      fillCategories();
    }),
  );

$("add").addEventListener("click", addEntry);
$("update").addEventListener("click", updateEntry);
$("cancel").addEventListener("click", finishEdit);
$("delete").addEventListener("click", deleteEntry);
$("add-to-month").addEventListener("click", addToMonth);
$("import-btn").addEventListener("click", () => {
  $<HTMLInputElement>("xlsx-file").click();
});
$<HTMLInputElement>("xlsx-file").addEventListener("change", (ev) => {
  const input = ev.target as HTMLInputElement;
  const file = input.files?.[0];
  if (file) {
    void importXlsx(file).finally(() => {
      input.value = "";
    });
  }
});

$<HTMLSelectElement>("year").addEventListener("change", (ev) => {
  histYear = Number((ev.target as HTMLSelectElement).value);
  histMonth = null;
  renderHistory();
});

dateInput.value = todayString();
fillCategories();
updateFormMode();
renderAll();
