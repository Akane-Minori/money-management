Project Path: money-management

Source Tree:

```txt
money-management
├── LICENSE.txt
├── README.md
├── index.html
├── package.json
├── pnpm-lock.yaml
├── src
│   ├── main.ts
│   └── styles.css
├── src-tauri
│   ├── Cargo.lock
│   ├── Cargo.toml
│   ├── build.rs
│   ├── capabilities
│   │   └── default.json
│   ├── icons
│   │   ├── 128x128.png
│   │   ├── 128x128@2x.png
│   │   ├── 32x32.png
│   │   ├── Square107x107Logo.png
│   │   ├── Square142x142Logo.png
│   │   ├── Square150x150Logo.png
│   │   ├── Square284x284Logo.png
│   │   ├── Square30x30Logo.png
│   │   ├── Square310x310Logo.png
│   │   ├── Square44x44Logo.png
│   │   ├── Square71x71Logo.png
│   │   ├── Square89x89Logo.png
│   │   ├── StoreLogo.png
│   │   ├── icon.icns
│   │   ├── icon.ico
│   │   └── icon.png
│   ├── src
│   │   ├── lib.rs
│   │   └── main.rs
│   └── tauri.conf.json
├── tsconfig.json
└── vite.config.ts

```

`LICENSE.txt`:

```txt
=== Rust dependencies ===

--------------------------------------------------
Apache License 2.0
  - dpi 0.1.2
  - tao 0.37.2

Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "{}"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright {yyyy} {name of copyright owner}

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

--------------------------------------------------
Apache License 2.0
  - dunce 1.0.5
  - sync_wrapper 1.0.2

Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

1. Definitions.

"License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.

"Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.

"Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.

"You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.

"Source" form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.

"Object" form shall mean any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types.

"Work" shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work (an example is provided in the Appendix below).

"Derivative Works" shall mean any work, whether in Source or Object form, that is based on (or derived from) the Work and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. For the purposes of this License, Derivative Works shall not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Work and Derivative Works thereof.

"Contribution" shall mean any work of authorship, including the original version of the Work and any modifications or additions to that Work or Derivative Works thereof, that is intentionally submitted to Licensor for inclusion in the Work by the copyright owner or by an individual or Legal Entity authorized to submit on behalf of the copyright owner. For the purposes of this definition, "submitted" means any form of electronic, verbal, or written communication sent to the Licensor or its representatives, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Work, but excluding communication that is conspicuously marked or otherwise designated in writing by the copyright owner as "Not a Contribution."

"Contributor" shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution has been received by Licensor and subsequently incorporated within the Work.

2. Grant of Copyright License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.

3. Grant of Patent License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed.

4. Redistribution. You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:

     (a) You must give any other recipients of the Work or Derivative Works a copy of this License; and

     (b) You must cause any modified files to carry prominent notices stating that You changed the files; and

     (c) You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Derivative Works; and

     (d) If the Work includes a "NOTICE" text file as part of its distribution, then any Derivative Works that You distribute must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; within the Source form or documentation, if provided along with the Derivative Works; or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the License. You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License.

     You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions stated in this License.

5. Submission of Contributions. Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by You to the Licensor shall be under the terms and conditions of this License, without any additional terms or conditions. Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate license agreement you may have executed with Licensor regarding such Contributions.

6. Trademarks. This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file.

7. Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License.

8. Limitation of Liability. In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.

9. Accepting Warranty or Additional Liability. While redistributing the Work or Derivative Works thereof, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability.

END OF TERMS AND CONDITIONS

APPENDIX: How to apply the Apache License to your work.

To apply the Apache License to your work, attach the following boilerplate notice, with the fields enclosed by brackets "[]" replaced with your own identifying information. (Don't include the brackets!)  The text should be enclosed in the appropriate comment syntax for the file format. We also recommend that a file or class name and description of purpose be included on the same "printed page" as the copyright notice for easier identification within third-party archives.

Copyright [yyyy] [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.


--------------------------------------------------
BSD 3-Clause &quot;New&quot; or &quot;Revised&quot; License
  - alloc-no-stdlib 3.0.0
  - brotli 9.1.2

Copyright (c) 2016 Dropbox, Inc.
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------
BSD 3-Clause &quot;New&quot; or &quot;Revised&quot; License
  - alloc-stdlib 0.3.0

Copyright (c) <year> <owner>. 

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------
MIT License
  - uds_windows 1.2.1

    MIT License

    Copyright (c) Microsoft Corporation. All rights reserved.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE


--------------------------------------------------
MIT License
  - schemars_derive 0.8.22

#![allow(clippy::all)]
// Copied from regex_syntax crate to avoid pulling in the whole crate just for a utility function
// https://github.com/rust-lang/regex/blob/431c4e4867e1eb33eb39b23ed47c9934b2672f8f/regex-syntax/src/lib.rs
//
// Copyright (c) 2014 The Rust Project Developers
//
// Permission is hereby granted, free of charge, to any
// person obtaining a copy of this software and associated
// documentation files (the "Software"), to deal in the
// Software without restriction, including without
// limitation the rights to use, copy, modify, merge,
// publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software
// is furnished to do so, subject to the following
// conditions:
//
// The above copyright notice and this permission notice
// shall be included in all copies or substantial portions
// of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
// ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
// TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
// PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
// SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
// CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
// IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
// DEALINGS IN THE SOFTWARE.

pub fn escape(text: &str) -> String {
    let mut quoted = String::new();
    escape_into(text, &mut quoted);
    quoted
}

fn escape_into(text: &str, buf: &mut String) {
    buf.reserve(text.len());
    for c in text.chars() {
        if is_meta_character(c) {
            buf.push('\\');
        }
        buf.push(c);
    }
}

fn is_meta_character(c: char) -> bool {
    match c {
        '\\' | '.' | '+' | '*' | '?' | '(' | ')' | '|' | '[' | ']' | '{' | '}' | '^' | '$'
        | '#' | '&' | '-' | '~' => true,
        _ => false,
    }
}


--------------------------------------------------
MIT License
  - libdbus-sys 0.2.7

/* dbus-server-launchd.h Server methods for interacting with launchd.
* Copyright (C) 2008, Benjamin Reed <rangerrick@befunk.com>
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use, copy,
* modify, merge, publish, distribute, sublicense, and/or sell copies
* of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
* DEALINGS IN THE SOFTWARE.
*/

#ifndef DBUS_SERVER_LAUNCHD_H
#define DBUS_SERVER_LAUNCHD_H

#include <dbus/dbus-internals.h>
#include <dbus/dbus-server-protected.h>

DBUS_BEGIN_DECLS

DBusServer * _dbus_server_new_for_launchd (const char *launchd_env_var, DBusError * error);

DBUS_END_DECLS
#endif /* DBUS_SERVER_LAUNCHD_H */


--------------------------------------------------
MIT License
  - atomic-waker 1.1.2
  - futures-lite 2.6.1

===============================================================================

Copyright (c) 2016 Alex Crichton
Copyright (c) 2017 The Tokio Authors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

===============================================================================

Copyright (c) 2016 Alex Crichton
Copyright (c) 2017 The Tokio Authors

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - sha2 0.10.9

Copyright (c) 2006-2009 Graydon Hoare
Copyright (c) 2009-2013 Mozilla Foundation
Copyright (c) 2016 Artyom Pavlov

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - brotli 9.1.2

Copyright (c) 2009, 2010, 2013-2016 by the Brotli Authors.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


--------------------------------------------------
MIT License
  - core-foundation-sys 0.8.7
  - core-foundation 0.10.1
  - core-graphics-types 0.2.0
  - core-graphics 0.25.0
  - string_cache 0.11.0
  - string_cache 0.9.0

Copyright (c) 2012-2013 Mozilla Foundation

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - hex 0.4.3

Copyright (c) 2013-2014 The Rust Project Developers.
Copyright (c) 2015-2020 The rust-hex Developers

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - form_urlencoded 1.2.2

Copyright (c) 2013-2016 The rust-url developers

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - idna 1.1.0
  - percent-encoding 2.3.2
  - url 2.5.8

Copyright (c) 2013-2025 The rust-url developers

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - cfg-if 1.0.5
  - js-sys 0.3.107
  - socket2 0.6.5
  - toml_datetime 0.6.3
  - wasm-bindgen-futures 0.4.80
  - wasm-bindgen-macro-support 0.2.130
  - wasm-bindgen-macro 0.2.130
  - wasm-bindgen-shared 0.2.130
  - wasm-bindgen 0.2.130
  - web-sys 0.3.107

Copyright (c) 2014 Alex Crichton

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - mio 1.2.5

Copyright (c) 2014 Carl Lerche and other MIO contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


--------------------------------------------------
MIT License
  - errno 0.3.15

Copyright (c) 2014 Chris Wong

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - mime 0.3.18

Copyright (c) 2014 Sean McArthur

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



--------------------------------------------------
MIT License
  - bitflags 1.3.2
  - bitflags 2.13.2
  - glob 0.3.4
  - log 0.4.35
  - regex-automata 0.4.18
  - regex-syntax 0.8.11
  - regex 1.13.1

Copyright (c) 2014 The Rust Project Developers

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - uuid 1.29.2

Copyright (c) 2014 The Rust Project Developers
Copyright (c) 2018 Ashley Mannix, Christopher Armstrong, Dylan DPC, Hunar Roop Kahlon

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - html5ever 0.39.0
  - html5ever 0.40.1
  - markup5ever 0.39.0
  - markup5ever 0.40.0
  - web_atoms 0.2.6
  - web_atoms 0.3.0

Copyright (c) 2014 The html5ever Project Developers

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - dbus 0.9.12
  - libdbus-sys 0.2.7

Copyright (c) 2014-2018 David Henningsson <diwic@ubuntu.com> and other contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

--------------------------------------------------
MIT License
  - flate2 1.1.11

Copyright (c) 2014-2026 Alex Crichton

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - hyper 1.12.0

Copyright (c) 2014-2026 Sean McArthur

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


--------------------------------------------------
MIT License
  - serde_with 3.24.0
  - serde_with_macros 3.24.0

Copyright (c) 2015

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - plist 1.10.3

Copyright (c) 2015 Edward Barnard

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

--------------------------------------------------
MIT License
  - new_debug_unreachable 1.0.6

Copyright (c) 2015 Jonathan Reem

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - tendril 0.5.1

Copyright (c) 2015 Keegan McAllister

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - tempfile 3.27.0

Copyright (c) 2015 Steven Allen

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - heck 0.4.1
  - heck 0.5.0
  - unicode-segmentation 1.13.3

Copyright (c) 2015 The Rust Project Developers

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - jni-sys 0.3.1
  - jni-sys 0.4.1

Copyright (c) 2015 The rust-jni-sys Developers

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - png 0.18.1

Copyright (c) 2015 nwin

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - winapi 0.3.9

Copyright (c) 2015-2018 The winapi-rs Developers

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - httparse 1.10.1

Copyright (c) 2015-2025 Sean McArthur

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



--------------------------------------------------
MIT License
  - futures-channel 0.3.34
  - futures-core 0.3.34
  - futures-executor 0.3.34
  - futures-io 0.3.34
  - futures-macro 0.3.34
  - futures-sink 0.3.34
  - futures-task 0.3.34
  - futures-util 0.3.34

Copyright (c) 2016 Alex Crichton
Copyright (c) 2017 The Tokio Authors

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - hashbrown 0.17.1

Copyright (c) 2016 Amanieu d'Antras

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - webkit2gtk-sys 2.0.2

Copyright (c) 2016 Boucher, Antoni <bouanto@zoho.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - webkit2gtk 2.0.2

Copyright (c) 2016 Boucher, Antoni <bouanto@zoho.com>
Copyright (c) 2017-2021, The Gtk-rs Project Developers.
Copyright (c) 2021, Tauri Programme within The Commons Conservancy

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - lock_api 0.4.14
  - parking_lot 0.12.5
  - parking_lot_core 0.9.12

Copyright (c) 2016 The Rust Project Developers

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - indexmap 2.14.2

Copyright (c) 2016--2017

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - equivalent 1.0.3

Copyright (c) 2016--2023

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - scopeguard 1.2.0

Copyright (c) 2016-2019 Ulrik Sverdrup "bluss" and scopeguard developers

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - reqwest 0.13.5

Copyright (c) 2016-2026 Sean McArthur

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



--------------------------------------------------
MIT License
  - digest 0.10.7

Copyright (c) 2017 Artyom Pavlov

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - fnv 1.0.7

Copyright (c) 2017 Contributors

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - memoffset 0.9.1

Copyright (c) 2017 Gilad Naaman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

--------------------------------------------------
MIT License
  - enumflags2_derive 0.7.12

Copyright (c) 2017 Maik Klein

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - keyboard-types 0.8.3

Copyright (c) 2017 Pyfisch

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

--------------------------------------------------
MIT License
  - redox_syscall 0.5.18

Copyright (c) 2017 Redox OS Developers

MIT License

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - stable_deref_trait 1.2.1

Copyright (c) 2017 Robert Grosse

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.

--------------------------------------------------
MIT License
  - cookie 0.18.2

Copyright (c) 2017 Sergio Benitez
Copyright (c) 2014 Alex Crichton

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - foreign-types-macros 0.2.4
  - foreign-types-shared 0.3.1
  - foreign-types 0.5.0

Copyright (c) 2017 The foreign-types Developers

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - http 1.5.0

Copyright (c) 2017 http-rs authors

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - signal-hook-registry 1.4.8

Copyright (c) 2017 tokio-jsonrpc developers

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - enumflags2 0.7.12

Copyright (c) 2017-2023 Maik Klein, Maja Kądziołka

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - bytes 1.12.1

Copyright (c) 2018 Carl Lerche

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - smallvec 1.16.5

Copyright (c) 2018 The Servo Project Developers

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - want 0.3.2

Copyright (c) 2018-2019 Sean McArthur

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



--------------------------------------------------
MIT License
  - block-buffer 0.10.4

Copyright (c) 2018-2019 The RustCrypto Project Developers

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - dirs-sys 0.5.0
  - dirs 7.0.0

Copyright (c) 2018-2019 dirs-rs contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - try-lock 0.2.5

Copyright (c) 2018-2023 Sean McArthur
Copyright (c) 2016 Alex Crichton

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



--------------------------------------------------
MIT License
  - getrandom 0.3.4

Copyright (c) 2018-2025 The rust-random Project Developers
Copyright (c) 2014 The Rust Project Developers

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - getrandom 0.4.3

Copyright (c) 2018-2026 The rust-random Project Developers
Copyright (c) 2014 The Rust Project Developers

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - slab 0.4.12

Copyright (c) 2019 Carl Lerche

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - bumpalo 3.20.4

Copyright (c) 2019 Nick Fitzgerald

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - tracing-attributes 0.1.31
  - tracing-core 0.1.36
  - tracing 0.1.44

Copyright (c) 2019 Tokio Contributors

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - tower-layer 0.3.3
  - tower-service 0.3.3
  - tower 0.5.3

Copyright (c) 2019 Tower Contributors

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - tower-http 0.6.11

Copyright (c) 2019-2021 Tower Contributors

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - http-body-util 0.1.5
  - http-body 1.1.0

Copyright (c) 2019-2026 Sean McArthur & Hyper Contributors

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - cpufeatures 0.2.17

Copyright (c) 2020-2025 The RustCrypto Project Developers

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - crypto-common 0.1.7

Copyright (c) 2021 RustCrypto Developers

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - powerfmt 0.2.1

Copyright (c) 2023 Jacob Pratt et al.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - bit-set 0.11.1
  - bit-set 0.8.0
  - bit-vec 0.10.2
  - bit-vec 0.8.0

Copyright (c) 2023 The Rust Project Developers

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - swift-rs 1.0.9

Copyright (c) 2023 The swift-rs Developers

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - hyper-util 0.1.21

Copyright (c) 2023-2025 Sean McArthur

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


--------------------------------------------------
MIT License
  - deranged 0.5.9

Copyright (c) 2024 Jacob Pratt et al.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - zbus 5.19.0
  - zbus_macros 5.19.0
  - zbus_names 4.3.5
  - zvariant 5.15.1
  - zvariant_derive 5.15.1

Copyright (c) 2024 Zeeshan Ali Khan & zbus contributors

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - zcheapstr 1.2.0

Copyright (c) 2026 Zeeshan Ali Khan & zcheapstr contributors

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - serde_spanned 1.1.3
  - toml 1.2.1+spec-1.1.0
  - toml_datetime 1.1.3+spec-1.1.0
  - toml_edit 0.19.15
  - toml_edit 0.20.2
  - toml_edit 0.25.19+spec-1.1.0
  - toml_parser 1.1.5+spec-1.1.0
  - toml_writer 1.2.0+spec-1.1.0

Copyright (c) Individual contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - num-conv 0.2.2

Copyright (c) Jacob Pratt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - time-core 0.1.9
  - time-macros 0.2.32
  - time 0.3.55

Copyright (c) Jacob Pratt et al.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - libc 0.2.191

Copyright (c) The Rust Project Developers

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - idna_adapter 1.2.2

Copyright (c) The rust-url developers

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - synstructure 0.14.0

Copyright 2016 Nika Layzell

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - ipnet 2.12.2

Copyright 2017 Juniper Networks, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - softbuffer 0.4.8

Copyright 2022 Kirill Chibisov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



--------------------------------------------------
MIT License
  - utf8_iter 1.1.0
  - utf_types 1.0.0

Copyright Mozilla Foundation

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - field-offset 0.3.6

MIT License

Copyright (c) 2016-2021 Diggory Blake, and other contributors.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - tauri-codegen 2.7.4
  - tauri-macros 2.7.4
  - tauri-runtime-wry 2.12.3
  - tauri-runtime 2.12.2
  - tauri-utils 2.10.2
  - tauri 2.12.5

MIT License

Copyright (c) 2017 - Present Tauri Apps Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - precomputed-hash 0.1.1

MIT License

Copyright (c) 2017 Emilio Cobos Álvarez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - json-patch 4.2.0

MIT License

Copyright (c) 2017 Ivan Dubrov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - cfb 0.14.0

MIT License

Copyright (c) 2017 Matthew D. Steele

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - darling 0.24.1
  - darling_core 0.24.1
  - darling_macro 0.24.1

MIT License

Copyright (c) 2017 Ted Driggs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - ico 0.6.0

MIT License

Copyright (c) 2018 Matthew D. Steele

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - crc32fast 1.5.5

MIT License

Copyright (c) 2018 Sam Rijs, Alex Crichton and contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - infer 0.22.0

MIT License

Copyright (c) 2019 Bojan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - bytemuck 1.25.2

MIT License

Copyright (c) 2019 Daniel "Lokathor" Gee.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - schemars 0.8.22
  - schemars_derive 0.8.22

MIT License

Copyright (c) 2019 Graham Esau

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - raw-window-handle 0.6.2

MIT License

Copyright (c) 2019 Osspial

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - proc-macro-error-attr 1.0.4
  - proc-macro-error 1.0.4

MIT License

Copyright (c) 2019-2020 CreepySkeleton

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - embed_plist 1.2.2

MIT License

Copyright (c) 2020 Nikolai Vazquez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - window-vibrancy 0.8.1

MIT License

Copyright (c) 2020-2022 Tauri Programme within The Commons Conservancy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - wry 0.57.2

MIT License

Copyright (c) 2020-2023 Ngo Iok Ui & Tauri Programme within The Commons Conservancy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - serialize-to-javascript-impl 0.1.2
  - serialize-to-javascript 0.1.2

MIT License

Copyright (c) 2021 Chip Reed

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - urlpattern 0.6.0

MIT License

Copyright (c) 2021 the Deno authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - tao-macros 0.1.4

MIT License

Copyright (c) 2022 - Present Tauri Apps Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - jsonptr 0.7.1

MIT License

Copyright (c) 2022 Chance Dinkins

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - muda 0.20.0

MIT License

Copyright (c) 2022-2022 Tauri Programme within The Commons Conservancy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - libredox 0.1.25

MIT License

Copyright (c) 2023 4lDO2

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - dom_query 0.28.0
  - dom_query 0.29.0

MIT License

Copyright (c) 2023 Mykola Humanov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

This project contains portions of code and architectural concepts originally 
derived from the "nipper" project (https://github.com/importcjj/nipper), 
developed by Chen Jiaju, licensed under the MIT License and the Apache License 2.0 (dual licensed).

--------------------------------------------------
MIT License
  - is-docker 0.2.0
  - is-wsl 0.4.0

MIT License

Copyright (c) 2023 Sean Larkin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - web-time 1.1.0

MIT License

Copyright (c) 2023 dAxpeDDa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - block2 0.6.2
  - brotli-decompressor 6.3.1
  - cesu8 1.1.0
  - dispatch2 0.3.1
  - dlopen2 0.8.2
  - dlopen2_derive 0.4.3
  - dpi 0.1.2
  - jni-sys-macros 0.4.1
  - ndk-context 0.1.1
  - ndk-sys 0.6.0+11769913
  - ndk 0.9.0
  - objc2-app-kit 0.3.2
  - objc2-cloud-kit 0.3.2
  - objc2-core-data 0.3.2
  - objc2-core-foundation 0.3.2
  - objc2-core-graphics 0.3.2
  - objc2-core-image 0.3.2
  - objc2-core-location 0.3.2
  - objc2-core-text 0.3.2
  - objc2-encode 4.1.0
  - objc2-exception-helper 0.1.1
  - objc2-foundation 0.3.2
  - objc2-quartz-core 0.3.2
  - objc2-ui-kit 0.3.2
  - objc2-user-notifications 0.3.2
  - objc2-web-kit 0.3.2
  - objc2 0.6.5
  - r-efi 5.3.0
  - r-efi 6.0.0
  - tauri-plugin-opener 2.7.3
  - webview2-com-macros 0.8.1
  - webview2-com-sys 0.39.1
  - webview2-com 0.39.1
  - winapi-i686-pc-windows-gnu 0.4.0
  - winapi-x86_64-pc-windows-gnu 0.4.0
  - windows-collections 0.3.2
  - windows-core 0.62.2
  - windows-future 0.3.2
  - windows-implement 0.60.2
  - windows-interface 0.59.3
  - windows-link 0.2.1
  - windows-numerics 0.3.1
  - windows-result 0.4.1
  - windows-strings 0.5.1
  - windows-sys 0.45.0
  - windows-sys 0.61.2
  - windows-targets 0.42.2
  - windows-threading 0.2.1
  - windows-version 0.1.7
  - windows 0.62.2
  - windows_aarch64_gnullvm 0.42.2
  - windows_aarch64_msvc 0.42.2
  - windows_i686_gnu 0.42.2
  - windows_i686_msvc 0.42.2
  - windows_x86_64_gnu 0.42.2
  - windows_x86_64_gnullvm 0.42.2
  - windows_x86_64_msvc 0.42.2

MIT License

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
USE OR OTHER DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - tokio-util 0.7.20
  - tokio 1.54.1

MIT License

Copyright (c) Tokio Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - simd-adler32 0.3.10

MIT License

Copyright (c) [2021] [Marvin Countryman]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - miniz_oxide 0.8.9
  - miniz_oxide 0.9.1

MIT License

Copyright 2013-2014 RAD Game Tools and Valve Software
Copyright 2010-2014 Rich Geldreich and Tenacious Software LLC
Copyright (c) 2017 Frommi
Copyright (c) 2017-2024 oyvindln


Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - miniz_oxide 0.8.9
  - miniz_oxide 0.9.1

MIT License

Copyright 2013-2014 RAD Game Tools and Valve Software
Copyright 2010-2014 Rich Geldreich and Tenacious Software LLC
Copyright (c) 2017 Frommi
Copyright (c) 2017-2024 oyvindln

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - fdeflate 0.3.7

MIT License

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - ident_case 1.0.1

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - rustc-hash 2.1.3

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.

--------------------------------------------------
MIT License
  - adler2 2.0.1
  - anyhow 1.0.104
  - async-channel 2.5.0
  - async-executor 1.14.1
  - async-io 2.6.0
  - async-lock 3.5.0
  - async-process 2.5.0
  - async-signal 0.2.14
  - async-task 4.7.1
  - async-trait 0.1.92
  - atomic-waker 1.1.2
  - blocking 1.7.0
  - camino 1.2.6
  - cargo-platform 0.1.9
  - cargo_metadata 0.19.2
  - concurrent-queue 2.5.0
  - displaydoc 0.2.7
  - dtoa 1.0.11
  - dyn-clone 1.0.20
  - endi 1.1.1
  - erased-serde 0.4.11
  - event-listener-strategy 0.5.4
  - event-listener 5.4.2
  - fastrand 2.5.0
  - futures-lite 2.6.1
  - hermit-abi 0.5.3
  - itoa 1.0.19
  - linux-raw-sys 0.12.1
  - num_enum 0.7.6
  - num_enum_derive 0.7.6
  - once_cell 1.21.4
  - ordered-stream 0.2.0
  - parking 2.2.1
  - pin-project-lite 0.2.17
  - piper 0.2.5
  - polling 3.11.0
  - proc-macro-crate 1.3.1
  - proc-macro-crate 2.0.2
  - proc-macro-crate 3.5.0
  - proc-macro2 1.0.107
  - quote 1.0.47
  - rustix 1.1.6
  - rustversion 1.0.23
  - semver 1.0.28
  - serde-untagged 0.1.9
  - serde 1.0.229
  - serde_core 1.0.229
  - serde_derive 1.0.229
  - serde_derive_internals 0.29.1
  - serde_json 1.0.154
  - serde_repr 0.1.21
  - servo_arc 0.4.3
  - servo_arc 0.5.0
  - syn 1.0.109
  - syn 2.0.119
  - syn 3.0.10
  - thiserror-impl 1.0.69
  - thiserror-impl 2.0.21
  - thiserror 1.0.69
  - thiserror 2.0.21
  - typeid 1.0.3
  - unicode-ident 1.0.27
  - wasi 0.11.1+wasi-snapshot-preview1
  - wasip2 1.0.4+wasi-0.2.12
  - wasm-streams 0.5.0
  - wit-bindgen 0.57.1
  - x11-dl 2.21.0
  - x11 2.21.0
  - zmij 1.0.23
  - zvariant_utils 4.2.0

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - async-recursion 1.2.0

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.

--------------------------------------------------
MIT License
  - winnow 0.5.40
  - winnow 1.0.5

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - siphasher 1.0.4

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - atk-sys 0.18.2
  - atk 0.18.2
  - cairo-rs 0.18.5
  - cairo-sys-rs 0.18.2
  - gdk-pixbuf-sys 0.18.0
  - gdk-pixbuf 0.18.5
  - gdk-sys 0.18.2
  - gdk 0.18.2
  - gdkwayland-sys 0.18.2
  - gdkx11-sys 0.18.2
  - gdkx11 0.18.2
  - gio-sys 0.18.1
  - gio 0.18.4
  - glib-macros 0.18.5
  - glib-sys 0.18.1
  - glib 0.18.5
  - gobject-sys 0.18.0
  - gtk-sys 0.18.2
  - gtk3-macros 0.18.2
  - gtk 0.18.2
  - pango-sys 0.18.0
  - pango 0.18.3

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



--------------------------------------------------
MIT License
  - ctor 1.0.14
  - link-section 0.19.4

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

--------------------------------------------------
MIT License
  - javascriptcore-rs-sys 1.1.1
  - soup3-sys 0.5.0
  - soup3 0.5.0

The MIT License (MIT)

Copyright (c) 2013-2017, The Gtk-rs Project Developers.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



--------------------------------------------------
MIT License
  - javascriptcore-rs 1.1.2

The MIT License (MIT)

Copyright (c) 2013-2021, The Gtk-rs Project Developers.
Copyright (c) 2021, Tauri Programme within The Commons Conservancy.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



--------------------------------------------------
MIT License
  - tracing-core 0.1.36

The MIT License (MIT)

Copyright (c) 2014 Mathijs van de Nes

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - typenum 1.20.1

The MIT License (MIT)

Copyright (c) 2014 Paho Lurie-Gregg

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - phf 0.13.1
  - phf 0.14.0
  - phf_generator 0.13.1
  - phf_generator 0.14.0
  - phf_macros 0.13.1
  - phf_macros 0.14.0
  - phf_shared 0.13.1
  - phf_shared 0.14.0

The MIT License (MIT)

Copyright (c) 2014-2022 Steven Fackler, Yuki Okushi

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - base64 0.21.7

The MIT License (MIT)

Copyright (c) 2015 Alice Maz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


--------------------------------------------------
MIT License
  - aho-corasick 1.1.5
  - byteorder 1.5.0
  - memchr 2.8.3
  - walkdir 2.5.0

The MIT License (MIT)

Copyright (c) 2015 Andrew Gallant

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


--------------------------------------------------
MIT License
  - strsim 0.11.1

The MIT License (MIT)

Copyright (c) 2015 Danny Guo
Copyright (c) 2016 Titus Wormer <tituswormer@gmail.com>
Copyright (c) 2018 Akash Kurdekar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - combine 4.6.9

The MIT License (MIT)

Copyright (c) 2015 Markus Westerlind

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



--------------------------------------------------
MIT License
  - derive_more-impl 2.1.1
  - derive_more 2.1.1

The MIT License (MIT)

Copyright (c) 2016 Jelte Fennema

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - quick-xml 0.42.0

The MIT License (MIT)

Copyright (c) 2016 Johann Tuffe

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:


The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


--------------------------------------------------
MIT License
  - jni 0.21.1

The MIT License (MIT)

Copyright (c) 2016 Prevoty, Inc. and jni-rs contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - same-file 1.0.6
  - winapi-util 0.1.11

The MIT License (MIT)

Copyright (c) 2017 Andrew Gallant

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


--------------------------------------------------
MIT License
  - redox_users 0.5.3

The MIT License (MIT)

Copyright (c) 2017 Jose Narvaez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



--------------------------------------------------
MIT License
  - crossbeam-channel 0.5.17
  - crossbeam-utils 0.8.23

The MIT License (MIT)

Copyright (c) 2019 The Crossbeam Project Developers

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without
limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software
is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - async-broadcast 0.7.2

The MIT License (MIT)

Copyright (c) 2020 Yoshua Wuyts

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------
MIT License
  - base64 0.23.1

The MIT License (MIT)

Copyright (c) 2025 Alice Maz, Marshall Pierce

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


--------------------------------------------------
MIT License
  - open 5.4.5

The MIT License (MIT)
=====================

Copyright © `2015` `Sebastian Thiel`

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.


--------------------------------------------------
MIT License
  - generic-array 0.14.7

The MIT License (MIT)

Copyright (c) 2015 Bartłomiej Kamiński

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

--------------------------------------------------
Mozilla Public License 2.0
  - dtoa-short 0.3.5

Mozilla Public License Version 2.0
==================================

1. Definitions
--------------

1.1. "Contributor"
    means each individual or legal entity that creates, contributes to
    the creation of, or owns Covered Software.

1.2. "Contributor Version"
    means the combination of the Contributions of others (if any) used
    by a Contributor and that particular Contributor's Contribution.

1.3. "Contribution"
    means Covered Software of a particular Contributor.

1.4. "Covered Software"
    means Source Code Form to which the initial Contributor has attached
    the notice in Exhibit A, the Executable Form of such Source Code
    Form, and Modifications of such Source Code Form, in each case
    including portions thereof.

1.5. "Incompatible With Secondary Licenses"
    means

    (a) that the initial Contributor has attached the notice described
        in Exhibit B to the Covered Software; or

    (b) that the Covered Software was made available under the terms of
        version 1.1 or earlier of the License, but not also under the
        terms of a Secondary License.

1.6. "Executable Form"
    means any form of the work other than Source Code Form.

1.7. "Larger Work"
    means a work that combines Covered Software with other material, in
    a separate file or files, that is not Covered Software.

1.8. "License"
    means this document.

1.9. "Licensable"
    means having the right to grant, to the maximum extent possible,
    whether at the time of the initial grant or subsequently, any and
    all of the rights conveyed by this License.

1.10. "Modifications"
    means any of the following:

    (a) any file in Source Code Form that results from an addition to,
        deletion from, or modification of the contents of Covered
        Software; or

    (b) any new file in Source Code Form that contains any Covered
        Software.

1.11. "Patent Claims" of a Contributor
    means any patent claim(s), including without limitation, method,
    process, and apparatus claims, in any patent Licensable by such
    Contributor that would be infringed, but for the grant of the
    License, by the making, using, selling, offering for sale, having
    made, import, or transfer of either its Contributions or its
    Contributor Version.

1.12. "Secondary License"
    means either the GNU General Public License, Version 2.0, the GNU
    Lesser General Public License, Version 2.1, the GNU Affero General
    Public License, Version 3.0, or any later versions of those
    licenses.

1.13. "Source Code Form"
    means the form of the work preferred for making modifications.

1.14. "You" (or "Your")
    means an individual or a legal entity exercising rights under this
    License. For legal entities, "You" includes any entity that
    controls, is controlled by, or is under common control with You. For
    purposes of this definition, "control" means (a) the power, direct
    or indirect, to cause the direction or management of such entity,
    whether by contract or otherwise, or (b) ownership of more than
    fifty percent (50%) of the outstanding shares or beneficial
    ownership of such entity.

2. License Grants and Conditions
--------------------------------

2.1. Grants

Each Contributor hereby grants You a world-wide, royalty-free,
non-exclusive license:

(a) under intellectual property rights (other than patent or trademark)
    Licensable by such Contributor to use, reproduce, make available,
    modify, display, perform, distribute, and otherwise exploit its
    Contributions, either on an unmodified basis, with Modifications, or
    as part of a Larger Work; and

(b) under Patent Claims of such Contributor to make, use, sell, offer
    for sale, have made, import, and otherwise transfer either its
    Contributions or its Contributor Version.

2.2. Effective Date

The licenses granted in Section 2.1 with respect to any Contribution
become effective for each Contribution on the date the Contributor first
distributes such Contribution.

2.3. Limitations on Grant Scope

The licenses granted in this Section 2 are the only rights granted under
this License. No additional rights or licenses will be implied from the
distribution or licensing of Covered Software under this License.
Notwithstanding Section 2.1(b) above, no patent license is granted by a
Contributor:

(a) for any code that a Contributor has removed from Covered Software;
    or

(b) for infringements caused by: (i) Your and any other third party's
    modifications of Covered Software, or (ii) the combination of its
    Contributions with other software (except as part of its Contributor
    Version); or

(c) under Patent Claims infringed by Covered Software in the absence of
    its Contributions.

This License does not grant any rights in the trademarks, service marks,
or logos of any Contributor (except as may be necessary to comply with
the notice requirements in Section 3.4).

2.4. Subsequent Licenses

No Contributor makes additional grants as a result of Your choice to
distribute the Covered Software under a subsequent version of this
License (see Section 10.2) or under the terms of a Secondary License (if
permitted under the terms of Section 3.3).

2.5. Representation

Each Contributor represents that the Contributor believes its
Contributions are its original creation(s) or it has sufficient rights
to grant the rights to its Contributions conveyed by this License.

2.6. Fair Use

This License is not intended to limit any rights You have under
applicable copyright doctrines of fair use, fair dealing, or other
equivalents.

2.7. Conditions

Sections 3.1, 3.2, 3.3, and 3.4 are conditions of the licenses granted
in Section 2.1.

3. Responsibilities
-------------------

3.1. Distribution of Source Form

All distribution of Covered Software in Source Code Form, including any
Modifications that You create or to which You contribute, must be under
the terms of this License. You must inform recipients that the Source
Code Form of the Covered Software is governed by the terms of this
License, and how they can obtain a copy of this License. You may not
attempt to alter or restrict the recipients' rights in the Source Code
Form.

3.2. Distribution of Executable Form

If You distribute Covered Software in Executable Form then:

(a) such Covered Software must also be made available in Source Code
    Form, as described in Section 3.1, and You must inform recipients of
    the Executable Form how they can obtain a copy of such Source Code
    Form by reasonable means in a timely manner, at a charge no more
    than the cost of distribution to the recipient; and

(b) You may distribute such Executable Form under the terms of this
    License, or sublicense it under different terms, provided that the
    license for the Executable Form does not attempt to limit or alter
    the recipients' rights in the Source Code Form under this License.

3.3. Distribution of a Larger Work

You may create and distribute a Larger Work under terms of Your choice,
provided that You also comply with the requirements of this License for
the Covered Software. If the Larger Work is a combination of Covered
Software with a work governed by one or more Secondary Licenses, and the
Covered Software is not Incompatible With Secondary Licenses, this
License permits You to additionally distribute such Covered Software
under the terms of such Secondary License(s), so that the recipient of
the Larger Work may, at their option, further distribute the Covered
Software under the terms of either this License or such Secondary
License(s).

3.4. Notices

You may not remove or alter the substance of any license notices
(including copyright notices, patent notices, disclaimers of warranty,
or limitations of liability) contained within the Source Code Form of
the Covered Software, except that You may alter any license notices to
the extent required to remedy known factual inaccuracies.

3.5. Application of Additional Terms

You may choose to offer, and to charge a fee for, warranty, support,
indemnity or liability obligations to one or more recipients of Covered
Software. However, You may do so only on Your own behalf, and not on
behalf of any Contributor. You must make it absolutely clear that any
such warranty, support, indemnity, or liability obligation is offered by
You alone, and You hereby agree to indemnify every Contributor for any
liability incurred by such Contributor as a result of warranty, support,
indemnity or liability terms You offer. You may include additional
disclaimers of warranty and limitations of liability specific to any
jurisdiction.

4. Inability to Comply Due to Statute or Regulation
---------------------------------------------------

If it is impossible for You to comply with any of the terms of this
License with respect to some or all of the Covered Software due to
statute, judicial order, or regulation then You must: (a) comply with
the terms of this License to the maximum extent possible; and (b)
describe the limitations and the code they affect. Such description must
be placed in a text file included with all distributions of the Covered
Software under this License. Except to the extent prohibited by statute
or regulation, such description must be sufficiently detailed for a
recipient of ordinary skill to be able to understand it.

5. Termination
--------------

5.1. The rights granted under this License will terminate automatically
if You fail to comply with any of its terms. However, if You become
compliant, then the rights granted under this License from a particular
Contributor are reinstated (a) provisionally, unless and until such
Contributor explicitly and finally terminates Your grants, and (b) on an
ongoing basis, if such Contributor fails to notify You of the
non-compliance by some reasonable means prior to 60 days after You have
come back into compliance. Moreover, Your grants from a particular
Contributor are reinstated on an ongoing basis if such Contributor
notifies You of the non-compliance by some reasonable means, this is the
first time You have received notice of non-compliance with this License
from such Contributor, and You become compliant prior to 30 days after
Your receipt of the notice.

5.2. If You initiate litigation against any entity by asserting a patent
infringement claim (excluding declaratory judgment actions,
counter-claims, and cross-claims) alleging that a Contributor Version
directly or indirectly infringes any patent, then the rights granted to
You by any and all Contributors for the Covered Software under Section
2.1 of this License shall terminate.

5.3. In the event of termination under Sections 5.1 or 5.2 above, all
end user license agreements (excluding distributors and resellers) which
have been validly granted by You or Your distributors under this License
prior to termination shall survive termination.

************************************************************************
*                                                                      *
*  6. Disclaimer of Warranty                                           *
*  -------------------------                                           *
*                                                                      *
*  Covered Software is provided under this License on an "as is"       *
*  basis, without warranty of any kind, either expressed, implied, or  *
*  statutory, including, without limitation, warranties that the       *
*  Covered Software is free of defects, merchantable, fit for a        *
*  particular purpose or non-infringing. The entire risk as to the     *
*  quality and performance of the Covered Software is with You.        *
*  Should any Covered Software prove defective in any respect, You     *
*  (not any Contributor) assume the cost of any necessary servicing,   *
*  repair, or correction. This disclaimer of warranty constitutes an   *
*  essential part of this License. No use of any Covered Software is   *
*  authorized under this License except under this disclaimer.         *
*                                                                      *
************************************************************************

************************************************************************
*                                                                      *
*  7. Limitation of Liability                                          *
*  --------------------------                                          *
*                                                                      *
*  Under no circumstances and under no legal theory, whether tort      *
*  (including negligence), contract, or otherwise, shall any           *
*  Contributor, or anyone who distributes Covered Software as          *
*  permitted above, be liable to You for any direct, indirect,         *
*  special, incidental, or consequential damages of any character      *
*  including, without limitation, damages for lost profits, loss of    *
*  goodwill, work stoppage, computer failure or malfunction, or any    *
*  and all other commercial damages or losses, even if such party      *
*  shall have been informed of the possibility of such damages. This   *
*  limitation of liability shall not apply to liability for death or   *
*  personal injury resulting from such party's negligence to the       *
*  extent applicable law prohibits such limitation. Some               *
*  jurisdictions do not allow the exclusion or limitation of           *
*  incidental or consequential damages, so this exclusion and          *
*  limitation may not apply to You.                                    *
*                                                                      *
************************************************************************

8. Litigation
-------------

Any litigation relating to this License may be brought only in the
courts of a jurisdiction where the defendant maintains its principal
place of business and such litigation shall be governed by laws of that
jurisdiction, without reference to its conflict-of-law provisions.
Nothing in this Section shall prevent a party's ability to bring
cross-claims or counter-claims.

9. Miscellaneous
----------------

This License represents the complete agreement concerning the subject
matter hereof. If any provision of this License is held to be
unenforceable, such provision shall be reformed only to the extent
necessary to make it enforceable. Any law or regulation which provides
that the language of a contract shall be construed against the drafter
shall not be used to construe this License against a Contributor.

10. Versions of the License
---------------------------

10.1. New Versions

Mozilla Foundation is the license steward. Except as provided in Section
10.3, no one other than the license steward has the right to modify or
publish new versions of this License. Each version will be given a
distinguishing version number.

10.2. Effect of New Versions

You may distribute the Covered Software under the terms of the version
of the License under which You originally received the Covered Software,
or under the terms of any subsequent version published by the license
steward.

10.3. Modified Versions

If you create software not governed by this License, and you want to
create a new license for such software, you may create and use a
modified version of this License if you rename the license and remove
any references to the name of the license steward (except to note that
such modified license differs from this License).

10.4. Distributing Source Code Form that is Incompatible With Secondary
Licenses

If You choose to distribute Source Code Form that is Incompatible With
Secondary Licenses under the terms of this version of the License, the
notice described in Exhibit B of this License must be attached.

Exhibit A - Source Code Form License Notice
-------------------------------------------

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

If it is not possible or desirable to put the notice in a particular
file, then You may include the notice in a location (such as a LICENSE
file in a relevant directory) where a recipient would be likely to look
for such a notice.

You may add additional accurate notices of copyright ownership.

Exhibit B - "Incompatible With Secondary Licenses" Notice
---------------------------------------------------------

  This Source Code Form is "Incompatible With Secondary Licenses", as
  defined by the Mozilla Public License, v. 2.0.


--------------------------------------------------
Mozilla Public License 2.0
  - cssparser-macros 0.7.1
  - cssparser 0.37.0
  - cssparser 0.38.0

Mozilla Public License Version 2.0
==================================

1. Definitions
--------------

1.1. "Contributor"
    means each individual or legal entity that creates, contributes to
    the creation of, or owns Covered Software.

1.2. "Contributor Version"
    means the combination of the Contributions of others (if any) used
    by a Contributor and that particular Contributor's Contribution.

1.3. "Contribution"
    means Covered Software of a particular Contributor.

1.4. "Covered Software"
    means Source Code Form to which the initial Contributor has attached
    the notice in Exhibit A, the Executable Form of such Source Code
    Form, and Modifications of such Source Code Form, in each case
    including portions thereof.

1.5. "Incompatible With Secondary Licenses"
    means

    (a) that the initial Contributor has attached the notice described
        in Exhibit B to the Covered Software; or

    (b) that the Covered Software was made available under the terms of
        version 1.1 or earlier of the License, but not also under the
        terms of a Secondary License.

1.6. "Executable Form"
    means any form of the work other than Source Code Form.

1.7. "Larger Work"
    means a work that combines Covered Software with other material, in 
    a separate file or files, that is not Covered Software.

1.8. "License"
    means this document.

1.9. "Licensable"
    means having the right to grant, to the maximum extent possible,
    whether at the time of the initial grant or subsequently, any and
    all of the rights conveyed by this License.

1.10. "Modifications"
    means any of the following:

    (a) any file in Source Code Form that results from an addition to,
        deletion from, or modification of the contents of Covered
        Software; or

    (b) any new file in Source Code Form that contains any Covered
        Software.

1.11. "Patent Claims" of a Contributor
    means any patent claim(s), including without limitation, method,
    process, and apparatus claims, in any patent Licensable by such
    Contributor that would be infringed, but for the grant of the
    License, by the making, using, selling, offering for sale, having
    made, import, or transfer of either its Contributions or its
    Contributor Version.

1.12. "Secondary License"
    means either the GNU General Public License, Version 2.0, the GNU
    Lesser General Public License, Version 2.1, the GNU Affero General
    Public License, Version 3.0, or any later versions of those
    licenses.

1.13. "Source Code Form"
    means the form of the work preferred for making modifications.

1.14. "You" (or "Your")
    means an individual or a legal entity exercising rights under this
    License. For legal entities, "You" includes any entity that
    controls, is controlled by, or is under common control with You. For
    purposes of this definition, "control" means (a) the power, direct
    or indirect, to cause the direction or management of such entity,
    whether by contract or otherwise, or (b) ownership of more than
    fifty percent (50%) of the outstanding shares or beneficial
    ownership of such entity.

2. License Grants and Conditions
--------------------------------

2.1. Grants

Each Contributor hereby grants You a world-wide, royalty-free,
non-exclusive license:

(a) under intellectual property rights (other than patent or trademark)
    Licensable by such Contributor to use, reproduce, make available,
    modify, display, perform, distribute, and otherwise exploit its
    Contributions, either on an unmodified basis, with Modifications, or
    as part of a Larger Work; and

(b) under Patent Claims of such Contributor to make, use, sell, offer
    for sale, have made, import, and otherwise transfer either its
    Contributions or its Contributor Version.

2.2. Effective Date

The licenses granted in Section 2.1 with respect to any Contribution
become effective for each Contribution on the date the Contributor first
distributes such Contribution.

2.3. Limitations on Grant Scope

The licenses granted in this Section 2 are the only rights granted under
this License. No additional rights or licenses will be implied from the
distribution or licensing of Covered Software under this License.
Notwithstanding Section 2.1(b) above, no patent license is granted by a
Contributor:

(a) for any code that a Contributor has removed from Covered Software;
    or

(b) for infringements caused by: (i) Your and any other third party's
    modifications of Covered Software, or (ii) the combination of its
    Contributions with other software (except as part of its Contributor
    Version); or

(c) under Patent Claims infringed by Covered Software in the absence of
    its Contributions.

This License does not grant any rights in the trademarks, service marks,
or logos of any Contributor (except as may be necessary to comply with
the notice requirements in Section 3.4).

2.4. Subsequent Licenses

No Contributor makes additional grants as a result of Your choice to
distribute the Covered Software under a subsequent version of this
License (see Section 10.2) or under the terms of a Secondary License (if
permitted under the terms of Section 3.3).

2.5. Representation

Each Contributor represents that the Contributor believes its
Contributions are its original creation(s) or it has sufficient rights
to grant the rights to its Contributions conveyed by this License.

2.6. Fair Use

This License is not intended to limit any rights You have under
applicable copyright doctrines of fair use, fair dealing, or other
equivalents.

2.7. Conditions

Sections 3.1, 3.2, 3.3, and 3.4 are conditions of the licenses granted
in Section 2.1.

3. Responsibilities
-------------------

3.1. Distribution of Source Form

All distribution of Covered Software in Source Code Form, including any
Modifications that You create or to which You contribute, must be under
the terms of this License. You must inform recipients that the Source
Code Form of the Covered Software is governed by the terms of this
License, and how they can obtain a copy of this License. You may not
attempt to alter or restrict the recipients' rights in the Source Code
Form.

3.2. Distribution of Executable Form

If You distribute Covered Software in Executable Form then:

(a) such Covered Software must also be made available in Source Code
    Form, as described in Section 3.1, and You must inform recipients of
    the Executable Form how they can obtain a copy of such Source Code
    Form by reasonable means in a timely manner, at a charge no more
    than the cost of distribution to the recipient; and

(b) You may distribute such Executable Form under the terms of this
    License, or sublicense it under different terms, provided that the
    license for the Executable Form does not attempt to limit or alter
    the recipients' rights in the Source Code Form under this License.

3.3. Distribution of a Larger Work

You may create and distribute a Larger Work under terms of Your choice,
provided that You also comply with the requirements of this License for
the Covered Software. If the Larger Work is a combination of Covered
Software with a work governed by one or more Secondary Licenses, and the
Covered Software is not Incompatible With Secondary Licenses, this
License permits You to additionally distribute such Covered Software
under the terms of such Secondary License(s), so that the recipient of
the Larger Work may, at their option, further distribute the Covered
Software under the terms of either this License or such Secondary
License(s).

3.4. Notices

You may not remove or alter the substance of any license notices
(including copyright notices, patent notices, disclaimers of warranty,
or limitations of liability) contained within the Source Code Form of
the Covered Software, except that You may alter any license notices to
the extent required to remedy known factual inaccuracies.

3.5. Application of Additional Terms

You may choose to offer, and to charge a fee for, warranty, support,
indemnity or liability obligations to one or more recipients of Covered
Software. However, You may do so only on Your own behalf, and not on
behalf of any Contributor. You must make it absolutely clear that any
such warranty, support, indemnity, or liability obligation is offered by
You alone, and You hereby agree to indemnify every Contributor for any
liability incurred by such Contributor as a result of warranty, support,
indemnity or liability terms You offer. You may include additional
disclaimers of warranty and limitations of liability specific to any
jurisdiction.

4. Inability to Comply Due to Statute or Regulation
---------------------------------------------------

If it is impossible for You to comply with any of the terms of this
License with respect to some or all of the Covered Software due to
statute, judicial order, or regulation then You must: (a) comply with
the terms of this License to the maximum extent possible; and (b)
describe the limitations and the code they affect. Such description must
be placed in a text file included with all distributions of the Covered
Software under this License. Except to the extent prohibited by statute
or regulation, such description must be sufficiently detailed for a
recipient of ordinary skill to be able to understand it.

5. Termination
--------------

5.1. The rights granted under this License will terminate automatically
if You fail to comply with any of its terms. However, if You become
compliant, then the rights granted under this License from a particular
Contributor are reinstated (a) provisionally, unless and until such
Contributor explicitly and finally terminates Your grants, and (b) on an
ongoing basis, if such Contributor fails to notify You of the
non-compliance by some reasonable means prior to 60 days after You have
come back into compliance. Moreover, Your grants from a particular
Contributor are reinstated on an ongoing basis if such Contributor
notifies You of the non-compliance by some reasonable means, this is the
first time You have received notice of non-compliance with this License
from such Contributor, and You become compliant prior to 30 days after
Your receipt of the notice.

5.2. If You initiate litigation against any entity by asserting a patent
infringement claim (excluding declaratory judgment actions,
counter-claims, and cross-claims) alleging that a Contributor Version
directly or indirectly infringes any patent, then the rights granted to
You by any and all Contributors for the Covered Software under Section
2.1 of this License shall terminate.

5.3. In the event of termination under Sections 5.1 or 5.2 above, all
end user license agreements (excluding distributors and resellers) which
have been validly granted by You or Your distributors under this License
prior to termination shall survive termination.

************************************************************************
*                                                                      *
*  6. Disclaimer of Warranty                                           *
*  -------------------------                                           *
*                                                                      *
*  Covered Software is provided under this License on an "as is"       *
*  basis, without warranty of any kind, either expressed, implied, or  *
*  statutory, including, without limitation, warranties that the       *
*  Covered Software is free of defects, merchantable, fit for a        *
*  particular purpose or non-infringing. The entire risk as to the     *
*  quality and performance of the Covered Software is with You.        *
*  Should any Covered Software prove defective in any respect, You     *
*  (not any Contributor) assume the cost of any necessary servicing,   *
*  repair, or correction. This disclaimer of warranty constitutes an   *
*  essential part of this License. No use of any Covered Software is   *
*  authorized under this License except under this disclaimer.         *
*                                                                      *
************************************************************************

************************************************************************
*                                                                      *
*  7. Limitation of Liability                                          *
*  --------------------------                                          *
*                                                                      *
*  Under no circumstances and under no legal theory, whether tort      *
*  (including negligence), contract, or otherwise, shall any           *
*  Contributor, or anyone who distributes Covered Software as          *
*  permitted above, be liable to You for any direct, indirect,         *
*  special, incidental, or consequential damages of any character      *
*  including, without limitation, damages for lost profits, loss of    *
*  goodwill, work stoppage, computer failure or malfunction, or any    *
*  and all other commercial damages or losses, even if such party      *
*  shall have been informed of the possibility of such damages. This   *
*  limitation of liability shall not apply to liability for death or   *
*  personal injury resulting from such party's negligence to the       *
*  extent applicable law prohibits such limitation. Some               *
*  jurisdictions do not allow the exclusion or limitation of           *
*  incidental or consequential damages, so this exclusion and          *
*  limitation may not apply to You.                                    *
*                                                                      *
************************************************************************

8. Litigation
-------------

Any litigation relating to this License may be brought only in the
courts of a jurisdiction where the defendant maintains its principal
place of business and such litigation shall be governed by laws of that
jurisdiction, without reference to its conflict-of-law provisions.
Nothing in this Section shall prevent a party's ability to bring
cross-claims or counter-claims.

9. Miscellaneous
----------------

This License represents the complete agreement concerning the subject
matter hereof. If any provision of this License is held to be
unenforceable, such provision shall be reformed only to the extent
necessary to make it enforceable. Any law or regulation which provides
that the language of a contract shall be construed against the drafter
shall not be used to construe this License against a Contributor.

10. Versions of the License
---------------------------

10.1. New Versions

Mozilla Foundation is the license steward. Except as provided in Section
10.3, no one other than the license steward has the right to modify or
publish new versions of this License. Each version will be given a
distinguishing version number.

10.2. Effect of New Versions

You may distribute the Covered Software under the terms of the version
of the License under which You originally received the Covered Software,
or under the terms of any subsequent version published by the license
steward.

10.3. Modified Versions

If you create software not governed by this License, and you want to
create a new license for such software, you may create and use a
modified version of this License if you rename the license and remove
any references to the name of the license steward (except to note that
such modified license differs from this License).

10.4. Distributing Source Code Form that is Incompatible With Secondary
Licenses

If You choose to distribute Source Code Form that is Incompatible With
Secondary Licenses under the terms of this version of the License, the
notice described in Exhibit B of this License must be attached.

Exhibit A - Source Code Form License Notice
-------------------------------------------

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

If it is not possible or desirable to put the notice in a particular
file, then You may include the notice in a location (such as a LICENSE
file in a relevant directory) where a recipient would be likely to look
for such a notice.

You may add additional accurate notices of copyright ownership.

Exhibit B - "Incompatible With Secondary Licenses" Notice
---------------------------------------------------------

  This Source Code Form is "Incompatible With Secondary Licenses", as
  defined by the Mozilla Public License, v. 2.0.


--------------------------------------------------
Mozilla Public License 2.0
  - option-ext 0.2.0
  - selectors 0.38.0
  - selectors 0.41.0

Mozilla Public License Version 2.0
==================================

1. Definitions
--------------

1.1. "Contributor"
    means each individual or legal entity that creates, contributes to
    the creation of, or owns Covered Software.

1.2. "Contributor Version"
    means the combination of the Contributions of others (if any) used
    by a Contributor and that particular Contributor's Contribution.

1.3. "Contribution"
    means Covered Software of a particular Contributor.

1.4. "Covered Software"
    means Source Code Form to which the initial Contributor has attached
    the notice in Exhibit A, the Executable Form of such Source Code
    Form, and Modifications of such Source Code Form, in each case
    including portions thereof.

1.5. "Incompatible With Secondary Licenses"
    means

    (a) that the initial Contributor has attached the notice described
        in Exhibit B to the Covered Software; or

    (b) that the Covered Software was made available under the terms of
        version 1.1 or earlier of the License, but not also under the
        terms of a Secondary License.

1.6. "Executable Form"
    means any form of the work other than Source Code Form.

1.7. "Larger Work"
    means a work that combines Covered Software with other material, in 
    a separate file or files, that is not Covered Software.

1.8. "License"
    means this document.

1.9. "Licensable"
    means having the right to grant, to the maximum extent possible,
    whether at the time of the initial grant or subsequently, any and
    all of the rights conveyed by this License.

1.10. "Modifications"
    means any of the following:

    (a) any file in Source Code Form that results from an addition to,
        deletion from, or modification of the contents of Covered
        Software; or

    (b) any new file in Source Code Form that contains any Covered
        Software.

1.11. "Patent Claims" of a Contributor
    means any patent claim(s), including without limitation, method,
    process, and apparatus claims, in any patent Licensable by such
    Contributor that would be infringed, but for the grant of the
    License, by the making, using, selling, offering for sale, having
    made, import, or transfer of either its Contributions or its
    Contributor Version.

1.12. "Secondary License"
    means either the GNU General Public License, Version 2.0, the GNU
    Lesser General Public License, Version 2.1, the GNU Affero General
    Public License, Version 3.0, or any later versions of those
    licenses.

1.13. "Source Code Form"
    means the form of the work preferred for making modifications.

1.14. "You" (or "Your")
    means an individual or a legal entity exercising rights under this
    License. For legal entities, "You" includes any entity that
    controls, is controlled by, or is under common control with You. For
    purposes of this definition, "control" means (a) the power, direct
    or indirect, to cause the direction or management of such entity,
    whether by contract or otherwise, or (b) ownership of more than
    fifty percent (50%) of the outstanding shares or beneficial
    ownership of such entity.

2. License Grants and Conditions
--------------------------------

2.1. Grants

Each Contributor hereby grants You a world-wide, royalty-free,
non-exclusive license:

(a) under intellectual property rights (other than patent or trademark)
    Licensable by such Contributor to use, reproduce, make available,
    modify, display, perform, distribute, and otherwise exploit its
    Contributions, either on an unmodified basis, with Modifications, or
    as part of a Larger Work; and

(b) under Patent Claims of such Contributor to make, use, sell, offer
    for sale, have made, import, and otherwise transfer either its
    Contributions or its Contributor Version.

2.2. Effective Date

The licenses granted in Section 2.1 with respect to any Contribution
become effective for each Contribution on the date the Contributor first
distributes such Contribution.

2.3. Limitations on Grant Scope

The licenses granted in this Section 2 are the only rights granted under
this License. No additional rights or licenses will be implied from the
distribution or licensing of Covered Software under this License.
Notwithstanding Section 2.1(b) above, no patent license is granted by a
Contributor:

(a) for any code that a Contributor has removed from Covered Software;
    or

(b) for infringements caused by: (i) Your and any other third party's
    modifications of Covered Software, or (ii) the combination of its
    Contributions with other software (except as part of its Contributor
    Version); or

(c) under Patent Claims infringed by Covered Software in the absence of
    its Contributions.

This License does not grant any rights in the trademarks, service marks,
or logos of any Contributor (except as may be necessary to comply with
the notice requirements in Section 3.4).

2.4. Subsequent Licenses

No Contributor makes additional grants as a result of Your choice to
distribute the Covered Software under a subsequent version of this
License (see Section 10.2) or under the terms of a Secondary License (if
permitted under the terms of Section 3.3).

2.5. Representation

Each Contributor represents that the Contributor believes its
Contributions are its original creation(s) or it has sufficient rights
to grant the rights to its Contributions conveyed by this License.

2.6. Fair Use

This License is not intended to limit any rights You have under
applicable copyright doctrines of fair use, fair dealing, or other
equivalents.

2.7. Conditions

Sections 3.1, 3.2, 3.3, and 3.4 are conditions of the licenses granted
in Section 2.1.

3. Responsibilities
-------------------

3.1. Distribution of Source Form

All distribution of Covered Software in Source Code Form, including any
Modifications that You create or to which You contribute, must be under
the terms of this License. You must inform recipients that the Source
Code Form of the Covered Software is governed by the terms of this
License, and how they can obtain a copy of this License. You may not
attempt to alter or restrict the recipients' rights in the Source Code
Form.

3.2. Distribution of Executable Form

If You distribute Covered Software in Executable Form then:

(a) such Covered Software must also be made available in Source Code
    Form, as described in Section 3.1, and You must inform recipients of
    the Executable Form how they can obtain a copy of such Source Code
    Form by reasonable means in a timely manner, at a charge no more
    than the cost of distribution to the recipient; and

(b) You may distribute such Executable Form under the terms of this
    License, or sublicense it under different terms, provided that the
    license for the Executable Form does not attempt to limit or alter
    the recipients' rights in the Source Code Form under this License.

3.3. Distribution of a Larger Work

You may create and distribute a Larger Work under terms of Your choice,
provided that You also comply with the requirements of this License for
the Covered Software. If the Larger Work is a combination of Covered
Software with a work governed by one or more Secondary Licenses, and the
Covered Software is not Incompatible With Secondary Licenses, this
License permits You to additionally distribute such Covered Software
under the terms of such Secondary License(s), so that the recipient of
the Larger Work may, at their option, further distribute the Covered
Software under the terms of either this License or such Secondary
License(s).

3.4. Notices

You may not remove or alter the substance of any license notices
(including copyright notices, patent notices, disclaimers of warranty,
or limitations of liability) contained within the Source Code Form of
the Covered Software, except that You may alter any license notices to
the extent required to remedy known factual inaccuracies.

3.5. Application of Additional Terms

You may choose to offer, and to charge a fee for, warranty, support,
indemnity or liability obligations to one or more recipients of Covered
Software. However, You may do so only on Your own behalf, and not on
behalf of any Contributor. You must make it absolutely clear that any
such warranty, support, indemnity, or liability obligation is offered by
You alone, and You hereby agree to indemnify every Contributor for any
liability incurred by such Contributor as a result of warranty, support,
indemnity or liability terms You offer. You may include additional
disclaimers of warranty and limitations of liability specific to any
jurisdiction.

4. Inability to Comply Due to Statute or Regulation
---------------------------------------------------

If it is impossible for You to comply with any of the terms of this
License with respect to some or all of the Covered Software due to
statute, judicial order, or regulation then You must: (a) comply with
the terms of this License to the maximum extent possible; and (b)
describe the limitations and the code they affect. Such description must
be placed in a text file included with all distributions of the Covered
Software under this License. Except to the extent prohibited by statute
or regulation, such description must be sufficiently detailed for a
recipient of ordinary skill to be able to understand it.

5. Termination
--------------

5.1. The rights granted under this License will terminate automatically
if You fail to comply with any of its terms. However, if You become
compliant, then the rights granted under this License from a particular
Contributor are reinstated (a) provisionally, unless and until such
Contributor explicitly and finally terminates Your grants, and (b) on an
ongoing basis, if such Contributor fails to notify You of the
non-compliance by some reasonable means prior to 60 days after You have
come back into compliance. Moreover, Your grants from a particular
Contributor are reinstated on an ongoing basis if such Contributor
notifies You of the non-compliance by some reasonable means, this is the
first time You have received notice of non-compliance with this License
from such Contributor, and You become compliant prior to 30 days after
Your receipt of the notice.

5.2. If You initiate litigation against any entity by asserting a patent
infringement claim (excluding declaratory judgment actions,
counter-claims, and cross-claims) alleging that a Contributor Version
directly or indirectly infringes any patent, then the rights granted to
You by any and all Contributors for the Covered Software under Section
2.1 of this License shall terminate.

5.3. In the event of termination under Sections 5.1 or 5.2 above, all
end user license agreements (excluding distributors and resellers) which
have been validly granted by You or Your distributors under this License
prior to termination shall survive termination.

************************************************************************
*                                                                      *
*  6. Disclaimer of Warranty                                           *
*  -------------------------                                           *
*                                                                      *
*  Covered Software is provided under this License on an "as is"       *
*  basis, without warranty of any kind, either expressed, implied, or  *
*  statutory, including, without limitation, warranties that the       *
*  Covered Software is free of defects, merchantable, fit for a        *
*  particular purpose or non-infringing. The entire risk as to the     *
*  quality and performance of the Covered Software is with You.        *
*  Should any Covered Software prove defective in any respect, You     *
*  (not any Contributor) assume the cost of any necessary servicing,   *
*  repair, or correction. This disclaimer of warranty constitutes an   *
*  essential part of this License. No use of any Covered Software is   *
*  authorized under this License except under this disclaimer.         *
*                                                                      *
************************************************************************

************************************************************************
*                                                                      *
*  7. Limitation of Liability                                          *
*  --------------------------                                          *
*                                                                      *
*  Under no circumstances and under no legal theory, whether tort      *
*  (including negligence), contract, or otherwise, shall any           *
*  Contributor, or anyone who distributes Covered Software as          *
*  permitted above, be liable to You for any direct, indirect,         *
*  special, incidental, or consequential damages of any character      *
*  including, without limitation, damages for lost profits, loss of    *
*  goodwill, work stoppage, computer failure or malfunction, or any    *
*  and all other commercial damages or losses, even if such party      *
*  shall have been informed of the possibility of such damages. This   *
*  limitation of liability shall not apply to liability for death or   *
*  personal injury resulting from such party's negligence to the       *
*  extent applicable law prohibits such limitation. Some               *
*  jurisdictions do not allow the exclusion or limitation of           *
*  incidental or consequential damages, so this exclusion and          *
*  limitation may not apply to You.                                    *
*                                                                      *
************************************************************************

8. Litigation
-------------

Any litigation relating to this License may be brought only in the
courts of a jurisdiction where the defendant maintains its principal
place of business and such litigation shall be governed by laws of that
jurisdiction, without reference to its conflict-of-law provisions.
Nothing in this Section shall prevent a party's ability to bring
cross-claims or counter-claims.

9. Miscellaneous
----------------

This License represents the complete agreement concerning the subject
matter hereof. If any provision of this License is held to be
unenforceable, such provision shall be reformed only to the extent
necessary to make it enforceable. Any law or regulation which provides
that the language of a contract shall be construed against the drafter
shall not be used to construe this License against a Contributor.

10. Versions of the License
---------------------------

10.1. New Versions

Mozilla Foundation is the license steward. Except as provided in Section
10.3, no one other than the license steward has the right to modify or
publish new versions of this License. Each version will be given a
distinguishing version number.

10.2. Effect of New Versions

You may distribute the Covered Software under the terms of the version
of the License under which You originally received the Covered Software,
or under the terms of any subsequent version published by the license
steward.

10.3. Modified Versions

If you create software not governed by this License, and you want to
create a new license for such software, you may create and use a
modified version of this License if you rename the license and remove
any references to the name of the license steward (except to note that
such modified license differs from this License).

10.4. Distributing Source Code Form that is Incompatible With Secondary
Licenses

If You choose to distribute Source Code Form that is Incompatible With
Secondary Licenses under the terms of this version of the License, the
notice described in Exhibit B of this License must be attached.

Exhibit A - Source Code Form License Notice
-------------------------------------------

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at https://mozilla.org/MPL/2.0/.

If it is not possible or desirable to put the notice in a particular
file, then You may include the notice in a location (such as a LICENSE
file in a relevant directory) where a recipient would be likely to look
for such a notice.

You may add additional accurate notices of copyright ownership.

Exhibit B - "Incompatible With Secondary Licenses" Notice
---------------------------------------------------------

  This Source Code Form is "Incompatible With Secondary Licenses", as
  defined by the Mozilla Public License, v. 2.0.


--------------------------------------------------
Unicode License v3
  - unicode-ident 1.0.27

UNICODE LICENSE V3

COPYRIGHT AND PERMISSION NOTICE

Copyright © 1991-2023 Unicode, Inc.

NOTICE TO USER: Carefully read the following legal agreement. BY
DOWNLOADING, INSTALLING, COPYING OR OTHERWISE USING DATA FILES, AND/OR
SOFTWARE, YOU UNEQUIVOCALLY ACCEPT, AND AGREE TO BE BOUND BY, ALL OF THE
TERMS AND CONDITIONS OF THIS AGREEMENT. IF YOU DO NOT AGREE, DO NOT
DOWNLOAD, INSTALL, COPY, DISTRIBUTE OR USE THE DATA FILES OR SOFTWARE.

Permission is hereby granted, free of charge, to any person obtaining a
copy of data files and any associated documentation (the "Data Files") or
software and any associated documentation (the "Software") to deal in the
Data Files or Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, and/or sell
copies of the Data Files or Software, and to permit persons to whom the
Data Files or Software are furnished to do so, provided that either (a)
this copyright and permission notice appear with all copies of the Data
Files or Software, or (b) this copyright and permission notice appear in
associated Documentation.

THE DATA FILES AND SOFTWARE ARE PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF
THIRD PARTY RIGHTS.

IN NO EVENT SHALL THE COPYRIGHT HOLDER OR HOLDERS INCLUDED IN THIS NOTICE
BE LIABLE FOR ANY CLAIM, OR ANY SPECIAL INDIRECT OR CONSEQUENTIAL DAMAGES,
OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS,
WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION,
ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THE DATA
FILES OR SOFTWARE.

Except as contained in this notice, the name of a copyright holder shall
not be used in advertising or otherwise to promote the sale, use or other
dealings in these Data Files or Software without prior written
authorization of the copyright holder.


--------------------------------------------------
Unicode License v3
  - icu_collections 2.4.0
  - icu_locale_core 2.4.0
  - icu_normalizer 2.4.0
  - icu_normalizer_data 2.4.0
  - icu_properties 2.4.0
  - icu_properties_data 2.4.0
  - icu_provider 2.4.0
  - litemap 0.8.3
  - potential_utf 0.1.6
  - tinystr 0.8.5
  - writeable 0.6.4
  - yoke-derive 0.8.4
  - yoke 0.8.4
  - zerofrom-derive 0.1.8
  - zerofrom 0.1.8
  - zerotrie 0.2.5
  - zerovec-derive 0.11.7
  - zerovec 0.11.9

UNICODE LICENSE V3

COPYRIGHT AND PERMISSION NOTICE

Copyright © 2020-2024 Unicode, Inc.

NOTICE TO USER: Carefully read the following legal agreement. BY
DOWNLOADING, INSTALLING, COPYING OR OTHERWISE USING DATA FILES, AND/OR
SOFTWARE, YOU UNEQUIVOCALLY ACCEPT, AND AGREE TO BE BOUND BY, ALL OF THE
TERMS AND CONDITIONS OF THIS AGREEMENT. IF YOU DO NOT AGREE, DO NOT
DOWNLOAD, INSTALL, COPY, DISTRIBUTE OR USE THE DATA FILES OR SOFTWARE.

Permission is hereby granted, free of charge, to any person obtaining a
copy of data files and any associated documentation (the "Data Files") or
software and any associated documentation (the "Software") to deal in the
Data Files or Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, and/or sell
copies of the Data Files or Software, and to permit persons to whom the
Data Files or Software are furnished to do so, provided that either (a)
this copyright and permission notice appear with all copies of the Data
Files or Software, or (b) this copyright and permission notice appear in
associated Documentation.

THE DATA FILES AND SOFTWARE ARE PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF
THIRD PARTY RIGHTS.

IN NO EVENT SHALL THE COPYRIGHT HOLDER OR HOLDERS INCLUDED IN THIS NOTICE
BE LIABLE FOR ANY CLAIM, OR ANY SPECIAL INDIRECT OR CONSEQUENTIAL DAMAGES,
OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS,
WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION,
ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THE DATA
FILES OR SOFTWARE.

Except as contained in this notice, the name of a copyright holder shall
not be used in advertising or otherwise to promote the sale, use or other
dealings in these Data Files or Software without prior written
authorization of the copyright holder.

SPDX-License-Identifier: Unicode-3.0

—

Portions of ICU4X may have been adapted from ICU4C and/or ICU4J.
ICU 1.8.1 to ICU 57.1 © 1995-2016 International Business Machines Corporation and others.


--------------------------------------------------
zlib License
  - foldhash 0.2.0

Copyright (c) 2024 Orson Peters

This software is provided 'as-is', without any express or implied warranty. In
no event will the authors be held liable for any damages arising from the use of
this software.

Permission is granted to anyone to use this software for any purpose, including
commercial applications, and to alter it and redistribute it freely, subject to
the following restrictions:

1. The origin of this software must not be misrepresented; you must not claim
    that you wrote the original software. If you use this software in a product,
    an acknowledgment in the product documentation would be appreciated but is
    not required.

2. Altered source versions must be plainly marked as such, and must not be
    misrepresented as being the original software.

3. This notice may not be removed or altered from any source distribution.


=== npm dependencies ===

--------------------------------------------------
@tauri-apps/api 2.12.4 (Apache-2.0 OR MIT)


                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS


--------------------------------------------------
@tauri-apps/plugin-opener 2.7.3 (MIT OR Apache-2.0)

SPDXVersion: SPDX-2.1
DataLicense: CC0-1.0
PackageName: tauri
DataFormat: SPDXRef-1
PackageSupplier: Organization: The Tauri Programme in the Commons Conservancy
PackageHomePage: https://tauri.app
PackageLicenseDeclared: Apache-2.0
PackageLicenseDeclared: MIT
PackageCopyrightText: 2019-2022, The Tauri Programme in the Commons Conservancy
PackageSummary: <text>Tauri is a rust project that enables developers to make secure
and small desktop applications using a web frontend.
                </text>
PackageComment: <text>The package includes the following libraries; see
Relationship information.
                </text>
Created: 2019-05-20T09:00:00Z
PackageDownloadLocation: git://github.com/tauri-apps/tauri
PackageDownloadLocation: git+https://github.com/tauri-apps/tauri.git
PackageDownloadLocation: git+ssh://github.com/tauri-apps/tauri.git
Creator: Person: Daniel Thompson-Yvetot

--------------------------------------------------
adler-32 1.3.1 (Apache-2.0)

                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "{}"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright (C) 2014-present   SheetJS LLC

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


--------------------------------------------------
cfb 1.2.2 (Apache-2.0)

                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "{}"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright (C) 2013-present   SheetJS LLC

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


--------------------------------------------------
codepage 1.15.0 (Apache-2.0)

                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "{}"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright (C) 2013-present   SheetJS LLC

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


--------------------------------------------------
crc-32 1.2.2 (Apache-2.0)

                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "{}"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright (C) 2014-present   SheetJS LLC

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


--------------------------------------------------
frac 1.1.2 (Apache-2.0)

Copyright (C) 2012-present   SheetJS

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


--------------------------------------------------
ssf 0.11.2 (Apache-2.0)

                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "{}"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright (C) 2013-present   SheetJS LLC

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


--------------------------------------------------
wmf 1.0.2 (Apache-2.0)

                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "{}"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright (C) 2020-present   SheetJS LLC

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


--------------------------------------------------
word 0.3.0 (Apache-2.0)

                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "{}"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright (C) 2020-present   SheetJS LLC

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


--------------------------------------------------
xlsx 0.18.5 (Apache-2.0)

                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "{}"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright (C) 2012-present   SheetJS LLC

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


```
`README.md`:

```md
# Tauri + Vanilla TS

This template should help get you started developing with Tauri in vanilla HTML, CSS and Typescript.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

```
`index.html`:

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, viewport-fit=cover"
    />
    <link rel="stylesheet" href="/src/styles.css" />
    <title>お小遣い帳</title>
    <script type="module" src="/src/main.ts" defer></script>
  </head>

  <body>
    <div id="app">
      <header class="header">
        <div class="header__inner">お小遣い帳</div>
      </header>

      <main id="main">
        <nav class="tabs">
          <button type="button" class="tab tab--active" data-tab="input">入力</button>
          <button type="button" class="tab" data-tab="history">履歴</button>
          <button type="button" class="tab" data-tab="settings">設定</button>
        </nav>

        <!-- 入力 -->
        <section id="page-input" class="page">
          <div class="panel">
            <h2 class="panel__title" id="form-title">入力</h2>

            <div class="kind">
              <label><input type="radio" name="kind" value="out" checked /><span>出費</span></label>
              <label><input type="radio" name="kind" value="in" /><span>収入</span></label>
            </div>

            <label class="form__row">
              <span class="form__label">日付</span>
              <input id="date" type="date" />
            </label>

            <label class="form__row">
              <span class="form__label">金額(円)</span>
              <input id="amount" type="number" inputmode="numeric" min="0" />
            </label>

            <label class="form__row">
              <span class="form__label">内訳</span>
              <input id="memo" type="text" />
            </label>

            <label class="form__row">
              <span class="form__label">種類</span>
              <select id="category"></select>
            </label>

            <div class="form__buttons">
              <button id="add" type="button" class="btn btn--primary">追加</button>
              <button id="update" type="button" class="btn btn--primary" hidden>更新</button>
              <button id="cancel" type="button" class="btn" hidden>キャンセル</button>
              <button id="delete" type="button" class="btn btn--danger" hidden>削除</button>
            </div>
            <p id="add-msg" class="note"></p>
          </div>

          <div class="panel">
            <h2 class="panel__title">今月</h2>
            <div class="summary summary--4">
              <div><span>出費</span><strong id="sum-out">0</strong></div>
              <div><span>収入</span><strong id="sum-in">0</strong></div>
              <div><span>差引</span><strong id="sum-total">0</strong></div>
              <div><span>残高</span><strong id="sum-balance">0</strong></div>
            </div>
            <p class="note">残高は、全期間の収入から出費を引いた額です。</p>
            <ul id="recent-list" class="entry-list"></ul>
          </div>
        </section>

        <!-- 履歴 -->
        <section id="page-history" class="page" hidden>
          <div class="panel">
            <h2 class="panel__title">履歴</h2>

            <label class="form__row">
              <span class="form__label">年</span>
              <select id="year"></select>
            </label>

            <div class="summary">
              <div><span>年の出費</span><strong id="year-out">0</strong></div>
              <div><span>年の収入</span><strong id="year-in">0</strong></div>
              <div><span>年の差引</span><strong id="year-total">0</strong></div>
            </div>

            <ul id="month-list" class="month-list"></ul>
            <p class="note">月をタップすると、その月の明細が出ます。</p>
          </div>

          <div class="panel" id="month-detail" hidden>
            <h2 class="panel__title" id="month-title"></h2>
            <ul id="month-entries" class="entry-list"></ul>
            <div class="form__buttons">
              <button id="add-to-month" type="button" class="btn">この月に記録を追加</button>
            </div>
          </div>
        </section>

        <!-- 設定 -->
        <section id="page-settings" class="page" hidden>
          <div id="settings-lists"></div>

          <div class="panel">
            <h2 class="panel__title">xlsxの取り込み</h2>
            <p class="note">
              年ごとのシート(2019 など)を読み込みます。前回取り込んだ分は入れ替わります。手入力した分はそのまま残ります。
            </p>
            <div class="form__buttons">
              <button id="import-btn" type="button" class="btn">xlsxファイルを選ぶ</button>
            </div>
            <input
              id="xlsx-file"
              type="file"
              accept=".xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              hidden
            />
            <p id="import-result" class="note note--pre"></p>
          </div>
        </section>
      </main>
    </div>
  </body>
</html>

```
`package.json`:

```json
{
  "name": "money-management",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "tauri": "tauri"
  },
  "dependencies": {
    "@tauri-apps/api": "^2",
    "@tauri-apps/plugin-opener": "^2",
    "xlsx": "^0.18.5"
  },
  "devDependencies": {
    "@tauri-apps/cli": "^2",
    "typescript": "~6.0.3",
    "vite": "^8.0.16"
  }
}

```
`pnpm-lock.yaml`:

```yaml
lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

importers:

  .:
    dependencies:
      '@tauri-apps/api':
        specifier: ^2
        version: 2.12.4
      '@tauri-apps/plugin-opener':
        specifier: ^2
        version: 2.7.3
      xlsx:
        specifier: ^0.18.5
        version: 0.18.5
    devDependencies:
      '@tauri-apps/cli':
        specifier: ^2
        version: 2.12.4
      typescript:
        specifier: ~6.0.3
        version: 6.0.3
      vite:
        specifier: ^8.0.16
        version: 8.3.8

packages:

  '@emnapi/core@2.0.0-beta.2':
    resolution: {integrity: sha512-MzCVoWtcg4Pm2B3je5mMvYMvj3MmBKw+fU7vbsJc9/iT8ip6/eYIHo/Dsm/mr+wsHB6SEyJDuxB09Yy6r/8+4A==}

  '@emnapi/runtime@2.0.0-beta.2':
    resolution: {integrity: sha512-JcrSPzPvZuNZvJqPTF9Fw25LbOJ8avzFVlaf2grmH4Cku0oGP47tRgqPZadcfj3YoZMHkFVnCYFbQM8I+i5QEw==}

  '@emnapi/wasi-threads@2.2.0':
    resolution: {integrity: sha512-JP7OYH38Q7+pyTAe14raZHLQIK7BDKbdwji+Xi3pcd/6QkJYQH3SX4wu6EplGrGJWRepoNzedfm0G3B9Z4e9Rw==}

  '@napi-rs/wasm-runtime@1.2.6':
    resolution: {integrity: sha512-mRyDmEw9/fCDXCGfL1sbgIw/GUK0PVxRW4YwgPN61F3LQ+fSyoBFarJVzgGyhF6kRzEQZ0FejDqm4WLXSeqQmw==}
    engines: {node: ^20.19.0 || ^22.13.0 || >=23.5.0}
    peerDependencies:
      '@emnapi/core': ^1.7.1 || 2.0.0-beta.2
      '@emnapi/runtime': ^1.7.1 || 2.0.0-beta.2

  '@oxc-project/types@0.156.0':
    resolution: {integrity: sha512-1Duyg48TdJNdyhEB8Xn1L36bT9Pv6GUtlKjHxOys8xkaF/rQq3XJE+bAurSK/AgIz5mGFsb77cn9Pb20+WCScw==}

  '@rolldown/binding-android-arm-eabi@1.2.19':
    resolution: {integrity: sha512-e+Ebe0WT+9tbXmNKPIiC8YrWAHYwug3m6i4p3rZGGulfZri1jtI4HslT+OZnFf/OIHowWF71DTlHwXBP2SiA7A==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm]
    os: [android]

  '@rolldown/binding-android-arm64@1.2.19':
    resolution: {integrity: sha512-hOombrTJ+szt2ciEzS7oCA78lMPBgF5UMQWCJIyNfnrI7GLl8HYoFqCnpL2gcPOaXMqryGCU5ExdQKyDDcC+yA==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [android]

  '@rolldown/binding-darwin-arm64@1.2.19':
    resolution: {integrity: sha512-XoMA2pwCKGTQzUjPgtRwkedH4WmXhdIPKT6l6oOxd1PUbNodGI6DcBekgN7EC//+x3pfBYX/qL1gNmZAqivw5g==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [darwin]

  '@rolldown/binding-darwin-x64@1.2.19':
    resolution: {integrity: sha512-zo8EsSSwMZCY/e+fRnGaX02YGgvJD0yvhNi/9hpGPA2MJ9ZF8dPCw75UGfpI6OpQ/myR/dIYmogRvqiZD0TrXg==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [darwin]

  '@rolldown/binding-freebsd-x64@1.2.19':
    resolution: {integrity: sha512-O8ISAOfI1nj7AuBPd30FSF47z7f7lzlk5poQVGgiikvQuGEBFYvW8ki+UEnT+YJPnNGjQzn304klt4O9FUE7mA==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [freebsd]

  '@rolldown/binding-linux-arm-gnueabihf@1.2.19':
    resolution: {integrity: sha512-/lYCba5NO0yq4S0jGMH8QTBtkvQxoXjoQWzF5BcWp9MjB9jxVRD1GQDNofkVjcOj30DWyhLIN/4Oe60JKzaONw==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm]
    os: [linux]

  '@rolldown/binding-linux-arm64-gnu@1.2.19':
    resolution: {integrity: sha512-pm/apFMBnSbFb3O6nG5pHO1iqHhZrjGDFEjSm+ot9J17XXPvH9L90y5h+jgfHCE+Qdlsvy8qKEcU4VKxgjD+vA==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  '@rolldown/binding-linux-arm64-musl@1.2.19':
    resolution: {integrity: sha512-K1SmQp3FFichn8oqrNIwvFoZ5wcvjC7goBzpaMNvLf9FZc+QB/QvLmnpJZgAAGHiD980tP8FZZnXk2K94rvlxg==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  '@rolldown/binding-linux-ppc64-gnu@1.2.19':
    resolution: {integrity: sha512-I0xwD57jP/3A7+5UPZin2w8Y7XHEmEM5zqpYZOcQ45MlNW6tUJUziymV3yRr7rL4vwyfEcRsRksC4a7Kc08p5Q==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [ppc64]
    os: [linux]
    libc: [glibc]

  '@rolldown/binding-linux-s390x-gnu@1.2.19':
    resolution: {integrity: sha512-BrtEHT24SNXj9HiXqy+s/kXiSiQGt6EKCPUlRirAoIioVxKGnbXBUEkbZASAei7iZJB0/Ynm+0JP00Ipx7AnSw==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [s390x]
    os: [linux]
    libc: [glibc]

  '@rolldown/binding-linux-x64-gnu@1.2.19':
    resolution: {integrity: sha512-rm75/9DkHKeU2WnA8w4X94WGYgLlDCFCfkQC+4bguVJmC/jvDRv2B+2wLOYhyE0fVuv7//Ckk39OoOufyCu76Q==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  '@rolldown/binding-linux-x64-musl@1.2.19':
    resolution: {integrity: sha512-irh/4+iYFM4GAzpluDErgjz89bj6NDtqqMAG/6O1LG38Ed3NpyebzCpcVNkFW8uhy+/3/BocUvnXDR33CXWe9A==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  '@rolldown/binding-openharmony-arm64@1.2.19':
    resolution: {integrity: sha512-+KWTWNoPt+CfSq94CiceWu3yPE+QzkaG+phPyz9G60tmZLwfQkcA4AeksafzvJAw4pvg1mcd5a1TkUqVv0s4JA==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [openharmony]

  '@rolldown/binding-wasm32-wasi@1.2.19':
    resolution: {integrity: sha512-7EH+skOsl5qpWnK0vzamgJFhOv1cwxQpsxm8tI883K9fur5c27p8q87fzEO6BbBPabA2/+s/zR63/pLc137iOg==}
    engines: {node: ^20.19.0 || ^22.13.0 || >=23.5.0}
    cpu: [wasm32]

  '@rolldown/binding-win32-arm64-msvc@1.2.19':
    resolution: {integrity: sha512-3Q1Yg1Q7tEvBWoZf5rFvG/GKZQPgwfru+p4wBajDfJFBs0SHCpL++dfTjW9gyAKd1T7ZpIYvdaUax7Pa/IhFVQ==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [win32]

  '@rolldown/binding-win32-x64-msvc@1.2.19':
    resolution: {integrity: sha512-y/sqRRc6d7hECzOFc5n3LSeqctmIp9mMjY1Kq4s14uLPd/LZ4z7i1zrW6fMtp2mPeuQIC4e6ULMcwQzMomqQag==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [win32]

  '@rolldown/pluginutils@1.1.1':
    resolution: {integrity: sha512-glFIJDvLNDtJhT9qrMFWLPbvS+skxgt4L0K8Ei2YtnhPysAJnsI7nyxSJxKj4ADeKX0OLjC4ntRkwpLOoS3rwA==}

  '@tauri-apps/api@2.12.4':
    resolution: {integrity: sha512-pVmfis+4zT8H0Qhp3xPZx9Ju7kpzvA6rr/PSJPyuwfvucTQ8sVt61NYU9KMkK703UFlYadFmjKA4HhybOtN0gg==}

  '@tauri-apps/cli-darwin-arm64@2.12.4':
    resolution: {integrity: sha512-OxqKSckIkoJ6vX2AjifIJpTasFC0Hbdoo7gEiCmAjauABO3U8m2MRsLWe+QTiBwDx1mIrvgA+rvI7tvDnbnHVg==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [darwin]

  '@tauri-apps/cli-darwin-x64@2.12.4':
    resolution: {integrity: sha512-fz76/77wMMJOaaUN6n3CybRG0P/MTEjjqYk81mGPyhi9m6Ue5T+LWBnJP/AkPooNatBPI2vtulGqomyMJ44lCQ==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [darwin]

  '@tauri-apps/cli-linux-arm-gnueabihf@2.12.4':
    resolution: {integrity: sha512-K0w8Bof6Lt8QKLAYhRy0yy36ZH5iA/35VuSOvnxyjvCUZ+A3JKsUTlALviH/sVgAlisaPzzmeJSH8XOn4Q2HBA==}
    engines: {node: '>= 10'}
    cpu: [arm]
    os: [linux]

  '@tauri-apps/cli-linux-arm64-gnu@2.12.4':
    resolution: {integrity: sha512-j5rOnjmRUwWrm1oosf0zBYl4D+fqydgUROFCk0hvKZxvbTT8SOERes0QB7rBV/XWNy+kM6pCKzb3oSm2sRglzg==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  '@tauri-apps/cli-linux-arm64-musl@2.12.4':
    resolution: {integrity: sha512-aOue3Fy6Jb7+oWcfAVUsVHfeTybSCt2CZoU06aO4jv4d2Ks/KnaTPwMAK3CLEduGOvBLY1lbBBrIyomqLLH5Sg==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  '@tauri-apps/cli-linux-riscv64-gnu@2.12.4':
    resolution: {integrity: sha512-Fx6GShY/RvST+t6LMlTHAwd66+1tEaAAGrnU7cysVfaiRP1BKng5Vl6rVmO6rSLOA1Sp1dRzNYM4f0OWQGb7qA==}
    engines: {node: '>= 10'}
    cpu: [riscv64]
    os: [linux]
    libc: [glibc]

  '@tauri-apps/cli-linux-x64-gnu@2.12.4':
    resolution: {integrity: sha512-tNzZSa79Z1nRpHxEpQ38lsAFpKlFlYvoXzjTV+lRRn/zSf3wrdUC3wnLcq2XEadchPu4ttK0zivhYzr+XGD19Q==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  '@tauri-apps/cli-linux-x64-musl@2.12.4':
    resolution: {integrity: sha512-jmZ1pr0xEqUhuEusWtt9Yt+GF6lCnGHUmIL+KIknpbjK/XQ2qkhDBhaxK/JMHM2A8dAacVXCxXJk2EXpwhQUfA==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  '@tauri-apps/cli-win32-arm64-msvc@2.12.4':
    resolution: {integrity: sha512-fGo8pgEHZxdSYgZ/J98m1usJ7NHKmKbq7k6uT0x1rpOq6Bg2YVzzpaAblWk710f5LHYBJIL5QIFS5IrD+4gmTg==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [win32]

  '@tauri-apps/cli-win32-ia32-msvc@2.12.4':
    resolution: {integrity: sha512-ezl8sQIcjYsye3TUnTH5VcWmWzccZASlQm7hlZt0dYyj1XD0qpVW47u2xYVrIKui0F8uQv/7QGZixdWiClBsbg==}
    engines: {node: '>= 10'}
    cpu: [ia32]
    os: [win32]

  '@tauri-apps/cli-win32-x64-msvc@2.12.4':
    resolution: {integrity: sha512-DJhDeCqjLDNMWYFy7ZS8cfeAHX2RK0RbQMLiA3bMVVkXRDJ4NBYiHriGqsUhsr9iG41aTb+dJGkFPmPw1gWwVw==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [win32]

  '@tauri-apps/cli@2.12.4':
    resolution: {integrity: sha512-JI9bHfudSRJikGOrjbXEm6RjzzvmKuLc+JixB1NE8hNzQkNlCCIC3pTES3uypkR9lxHrsbxzcnSwhI2IxBQphw==}
    engines: {node: '>= 10'}
    hasBin: true

  '@tauri-apps/plugin-opener@2.7.3':
    resolution: {integrity: sha512-Nm+v7vLBCDzYZxrmCJhpMgtPsPsKt5myMs7SMU/aBjPOmAFI1RrHfhMz7t5KlxjMOzRcelyNq1/j0pmC9SmBVA==}

  '@tybys/wasm-util@0.10.4':
    resolution: {integrity: sha512-W3c4gRigFS0T/Ma4qIYF3GDAc5AQdHb1yL5znJT1Zv1YaD9Kitx656wBjvr19qbiosmZT8lWDM5BEMynUqX65A==}

  adler-32@1.3.1:
    resolution: {integrity: sha512-ynZ4w/nUUv5rrsR8UUGoe1VC9hZj6V5hU9Qw1HlMDJGEJw5S7TfTErWTjMys6M7vr0YWcPqs3qAr4ss0nDfP+A==}
    engines: {node: '>=0.8'}

  cfb@1.2.2:
    resolution: {integrity: sha512-KfdUZsSOw19/ObEWasvBP/Ac4reZvAGauZhs6S/gqNhXhI7cKwvlH7ulj+dOEYnca4bm4SGo8C1bTAQvnTjgQA==}
    engines: {node: '>=0.8'}

  codepage@1.15.0:
    resolution: {integrity: sha512-3g6NUTPd/YtuuGrhMnOMRjFc+LJw/bnMp3+0r/Wcz3IXUuCosKRJvMphm5+Q+bvTVGcJJuRvVLuYba+WojaFaA==}
    engines: {node: '>=0.8'}

  crc-32@1.2.2:
    resolution: {integrity: sha512-ROmzCKrTnOwybPcJApAA6WBWij23HVfGVNKqqrZpuyZOHqK2CwHSvpGuyt/UNNvaIjEd8X5IFGp4Mh+Ie1IHJQ==}
    engines: {node: '>=0.8'}
    hasBin: true

  detect-libc@2.1.2:
    resolution: {integrity: sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==}
    engines: {node: '>=8'}

  fdir@6.5.0:
    resolution: {integrity: sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==}
    engines: {node: '>=12.0.0'}
    peerDependencies:
      picomatch: ^3 || ^4
    peerDependenciesMeta:
      picomatch:
        optional: true

  frac@1.1.2:
    resolution: {integrity: sha512-w/XBfkibaTl3YDqASwfDUqkna4Z2p9cFSr1aHDt0WoMTECnRfBOv2WArlZILlqgWlmdIlALXGpM2AOhEk5W3IA==}
    engines: {node: '>=0.8'}

  fsevents@2.3.3:
    resolution: {integrity: sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==}
    engines: {node: ^8.16.0 || ^10.6.0 || >=11.0.0}
    os: [darwin]

  lightningcss-android-arm64@1.33.0:
    resolution: {integrity: sha512-gEpRTalKdosp4Bb8qWtc2iOgE5SeIHlpS1up9bFq2wAyYhl1UdTObYiHe98zEM9SQvSoqQZ1IQD0JNpg3Ml5pg==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [android]

  lightningcss-darwin-arm64@1.33.0:
    resolution: {integrity: sha512-Sciaz8eenNTKn9b3t7+xr0ipTp9YxKQY4npwQ3mrRuL0BAVHBLyZxofhaKBAVtzmtRZ/zTyo0/to4B1uWG/Djg==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [darwin]

  lightningcss-darwin-x64@1.33.0:
    resolution: {integrity: sha512-Z5UPAxzrjlWNNyGy6i65cJzzvgJ5D3T6wMvs+gWpY9d7qRhANrxqAp6LhxIgZhWEw18RfJTGcRxjuLIBr+m8XQ==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [darwin]

  lightningcss-freebsd-x64@1.33.0:
    resolution: {integrity: sha512-QQM/Ti/hQajJwCY+RiWuCZ9sdtI/XQk7nDK5vC8kkdwixezOlDgvDx7+RT+QjK6FcFT4MpsuoBnHIo/O3StRRg==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [freebsd]

  lightningcss-linux-arm-gnueabihf@1.33.0:
    resolution: {integrity: sha512-N7FVBe6iS24MlM6R/4RBTxGhQheZGs7tiQ9U32UtF75NzP5Q7xWPRqLBCKxlRQRk3rY1jCIPLzx7WzOhuUIRLQ==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm]
    os: [linux]

  lightningcss-linux-arm64-gnu@1.33.0:
    resolution: {integrity: sha512-j2v/itmy4HlNxlc6voKXYgBqNi0Ng2LShg4z7GufpEgs05P+2suBVyi9I6YHq5uoVFx9ETin3eCEhLVyXGQnKg==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  lightningcss-linux-arm64-musl@1.33.0:
    resolution: {integrity: sha512-yiO5ROMuYQgXbC60yjZU5CYSFZGKXL0HFATXt9mHJn1+zW55oCtMI9NfcVhYLMFDL7gV7oBPon/EmMMGg2OvtQ==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  lightningcss-linux-x64-gnu@1.33.0:
    resolution: {integrity: sha512-ar+Ju7LmcN0Jo4FpL4hpFybwNG9/3A/Br5KW2n2jyODg3MEZXaDYADdemoNS+BDNfMgKvylJLj4S5tyRActuAg==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  lightningcss-linux-x64-musl@1.33.0:
    resolution: {integrity: sha512-RYiYbkokw0trfKqqzfF55lginwEPrD3OJDfTuJzFs1MK6iFnDenaz1fqLLtX4ITG3OktJQXOeTaw1awrBAlZPw==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  lightningcss-win32-arm64-msvc@1.33.0:
    resolution: {integrity: sha512-1K+MPfLSFVpphzpdbfkhlWk6wBrTObBzS2T6db10PNOZgR9GoVsAWzwNyuhUYYbTp23j+4RrncfujZ4uAzXvwA==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [win32]

  lightningcss-win32-x64-msvc@1.33.0:
    resolution: {integrity: sha512-OlEICDx/Xl0FqSp4bry8zFnCvGpig3Gl4gCquvYwHuqJKEC1+n9NgDniFvqHGmMv1ZkqDJrDqKKSykTDX+ehuA==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [win32]

  lightningcss@1.33.0:
    resolution: {integrity: sha512-WkUDrojuJs0xkgGf2udWxa3yGBRxPtxUkB79i6aCZLRgc7PM8fZe9TosfPDcvEpQZbuFASnHYmRLBLUbmLOIIA==}
    engines: {node: '>= 12.0.0'}

  nanoid@3.3.20:
    resolution: {integrity: sha512-uKdg2G3GNCKQn9byYOpxbGqrT2fGO5KRt5J/8b3pok8rT6qxGWF6hxMyJiEYtAf+FVyYuD9hRaDqX5uPFYJ4ZQ==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true

  picocolors@1.1.1:
    resolution: {integrity: sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==}

  picomatch@4.0.7:
    resolution: {integrity: sha512-qcJu88Q2IWqJsDD529JKMdwGm/dvInW4HvQnRwiH9JtihJvzGOscDtHE3x1pBKeUOTysQ8kVmLnJ2kJu7yhcGA==}
    engines: {node: '>=12'}

  postcss@8.5.33:
    resolution: {integrity: sha512-RVHEU9/Pp1Fnjr/MpAJsZoADukCKhfIi15OunEYiGktIkYLkPVvC1sioWolGDS7XByMTx9m/IGbro0Js13zhnQ==}
    engines: {node: ^10 || ^12 || >=14}

  rolldown@1.2.19:
    resolution: {integrity: sha512-QIiV1J9d0pzN4jeeTH4sjPy0AZ6cAy2cG0ExeoE1+U8Rvj+hR3gYkokx0YbeUNGlZqiQJJ2utcETe0oKXwzsuA==}
    engines: {node: ^20.19.0 || >=22.12.0}
    hasBin: true

  source-map-js@1.2.2:
    resolution: {integrity: sha512-KGj/8Y43x35aZVDtt+J4mK1hoLGHULMYfSkODJNQjNDC3oW1PqPoxMwo0pLUsWM/UEGzON/NxeHywEfNXNP3Vw==}
    engines: {node: '>=0.10.0'}

  ssf@0.11.2:
    resolution: {integrity: sha512-+idbmIXoYET47hH+d7dfm2epdOMUDjqcB4648sTZ+t2JwoyBFL/insLfB/racrDmsKB3diwsDA696pZMieAC5g==}
    engines: {node: '>=0.8'}

  tinyglobby@0.2.17:
    resolution: {integrity: sha512-wXR/dYpcqKmfWpEdZjiKJOwCNFndD0DMnrW/cYjVGttEkBfVgcLFHoNrlj47mjOVic9yyNu65alsgF4NQyTa2g==}
    engines: {node: '>=12.0.0'}

  tslib@2.9.1:
    resolution: {integrity: sha512-a4Ux9VKuIMHsOS7ENbEq6hK2ZGYIT27Rtl0E4eD9KqwxhKiQeMZE/9xb3IdYwWaSOyIBQLExhQgXDTYoiCxnWA==}

  typescript@6.0.3:
    resolution: {integrity: sha512-y2TvuxSZPDyQakkFRPZHKFm+KKVqIisdg9/CZwm9ftvKXLP8NRWj38/ODjNbr43SsoXqNuAisEf1GdCxqWcdBw==}
    engines: {node: '>=14.17'}
    hasBin: true

  vite@8.3.8:
    resolution: {integrity: sha512-LzOn3h9rG/0vhLdXrV4yJ4QFA9eEoqCl+Yx+kGJd7aB9w6nfNgVHKSYwLPZUHrz4ZGa+t+kXjV9itvcHDLQouA==}
    engines: {node: ^20.19.0 || >=22.12.0}
    hasBin: true
    peerDependencies:
      '@types/node': ^20.19.0 || >=22.12.0
      '@vitejs/devtools': ^0.7.1 || ^0.8.0
      esbuild: ^0.27.0 || ^0.28.0
      jiti: '>=1.21.0'
      less: ^4.0.0
      sass: ^1.70.0
      sass-embedded: ^1.70.0
      stylus: '>=0.54.8'
      sugarss: ^5.0.0
      terser: ^5.16.0
      tsx: ^4.8.1
      yaml: ^2.4.2
    peerDependenciesMeta:
      '@types/node':
        optional: true
      '@vitejs/devtools':
        optional: true
      esbuild:
        optional: true
      jiti:
        optional: true
      less:
        optional: true
      sass:
        optional: true
      sass-embedded:
        optional: true
      stylus:
        optional: true
      sugarss:
        optional: true
      terser:
        optional: true
      tsx:
        optional: true
      yaml:
        optional: true

  wmf@1.0.2:
    resolution: {integrity: sha512-/p9K7bEh0Dj6WbXg4JG0xvLQmIadrner1bi45VMJTfnbVHsc7yIajZyoSoK60/dtVBs12Fm6WkUI5/3WAVsNMw==}
    engines: {node: '>=0.8'}

  word@0.3.0:
    resolution: {integrity: sha512-OELeY0Q61OXpdUfTp+oweA/vtLVg5VDOXh+3he3PNzLGG/y0oylSOC1xRVj0+l4vQ3tj/bB1HVHv1ocXkQceFA==}
    engines: {node: '>=0.8'}

  xlsx@0.18.5:
    resolution: {integrity: sha512-dmg3LCjBPHZnQp5/F/+nnTa+miPJxUXB6vtk42YjBBKayDNagxGEeIdWApkYPOf3Z3pm3k62Knjzp7lMeTEtFQ==}
    engines: {node: '>=0.8'}
    hasBin: true

snapshots:

  '@emnapi/core@2.0.0-beta.2':
    dependencies:
      '@emnapi/wasi-threads': 2.2.0
      tslib: 2.9.1
    optional: true

  '@emnapi/runtime@2.0.0-beta.2':
    dependencies:
      tslib: 2.9.1
    optional: true

  '@emnapi/wasi-threads@2.2.0':
    dependencies:
      tslib: 2.9.1
    optional: true

  '@napi-rs/wasm-runtime@1.2.6(@emnapi/core@2.0.0-beta.2)(@emnapi/runtime@2.0.0-beta.2)':
    dependencies:
      '@emnapi/core': 2.0.0-beta.2
      '@emnapi/runtime': 2.0.0-beta.2
      '@tybys/wasm-util': 0.10.4
    optional: true

  '@oxc-project/types@0.156.0': {}

  '@rolldown/binding-android-arm-eabi@1.2.19':
    optional: true

  '@rolldown/binding-android-arm64@1.2.19':
    optional: true

  '@rolldown/binding-darwin-arm64@1.2.19':
    optional: true

  '@rolldown/binding-darwin-x64@1.2.19':
    optional: true

  '@rolldown/binding-freebsd-x64@1.2.19':
    optional: true

  '@rolldown/binding-linux-arm-gnueabihf@1.2.19':
    optional: true

  '@rolldown/binding-linux-arm64-gnu@1.2.19':
    optional: true

  '@rolldown/binding-linux-arm64-musl@1.2.19':
    optional: true

  '@rolldown/binding-linux-ppc64-gnu@1.2.19':
    optional: true

  '@rolldown/binding-linux-s390x-gnu@1.2.19':
    optional: true

  '@rolldown/binding-linux-x64-gnu@1.2.19':
    optional: true

  '@rolldown/binding-linux-x64-musl@1.2.19':
    optional: true

  '@rolldown/binding-openharmony-arm64@1.2.19':
    optional: true

  '@rolldown/binding-wasm32-wasi@1.2.19':
    dependencies:
      '@emnapi/core': 2.0.0-beta.2
      '@emnapi/runtime': 2.0.0-beta.2
      '@napi-rs/wasm-runtime': 1.2.6(@emnapi/core@2.0.0-beta.2)(@emnapi/runtime@2.0.0-beta.2)
    optional: true

  '@rolldown/binding-win32-arm64-msvc@1.2.19':
    optional: true

  '@rolldown/binding-win32-x64-msvc@1.2.19':
    optional: true

  '@rolldown/pluginutils@1.1.1': {}

  '@tauri-apps/api@2.12.4': {}

  '@tauri-apps/cli-darwin-arm64@2.12.4':
    optional: true

  '@tauri-apps/cli-darwin-x64@2.12.4':
    optional: true

  '@tauri-apps/cli-linux-arm-gnueabihf@2.12.4':
    optional: true

  '@tauri-apps/cli-linux-arm64-gnu@2.12.4':
    optional: true

  '@tauri-apps/cli-linux-arm64-musl@2.12.4':
    optional: true

  '@tauri-apps/cli-linux-riscv64-gnu@2.12.4':
    optional: true

  '@tauri-apps/cli-linux-x64-gnu@2.12.4':
    optional: true

  '@tauri-apps/cli-linux-x64-musl@2.12.4':
    optional: true

  '@tauri-apps/cli-win32-arm64-msvc@2.12.4':
    optional: true

  '@tauri-apps/cli-win32-ia32-msvc@2.12.4':
    optional: true

  '@tauri-apps/cli-win32-x64-msvc@2.12.4':
    optional: true

  '@tauri-apps/cli@2.12.4':
    optionalDependencies:
      '@tauri-apps/cli-darwin-arm64': 2.12.4
      '@tauri-apps/cli-darwin-x64': 2.12.4
      '@tauri-apps/cli-linux-arm-gnueabihf': 2.12.4
      '@tauri-apps/cli-linux-arm64-gnu': 2.12.4
      '@tauri-apps/cli-linux-arm64-musl': 2.12.4
      '@tauri-apps/cli-linux-riscv64-gnu': 2.12.4
      '@tauri-apps/cli-linux-x64-gnu': 2.12.4
      '@tauri-apps/cli-linux-x64-musl': 2.12.4
      '@tauri-apps/cli-win32-arm64-msvc': 2.12.4
      '@tauri-apps/cli-win32-ia32-msvc': 2.12.4
      '@tauri-apps/cli-win32-x64-msvc': 2.12.4

  '@tauri-apps/plugin-opener@2.7.3':
    dependencies:
      '@tauri-apps/api': 2.12.4

  '@tybys/wasm-util@0.10.4':
    dependencies:
      tslib: 2.9.1
    optional: true

  adler-32@1.3.1: {}

  cfb@1.2.2:
    dependencies:
      adler-32: 1.3.1
      crc-32: 1.2.2

  codepage@1.15.0: {}

  crc-32@1.2.2: {}

  detect-libc@2.1.2: {}

  fdir@6.5.0(picomatch@4.0.7):
    optionalDependencies:
      picomatch: 4.0.7

  frac@1.1.2: {}

  fsevents@2.3.3:
    optional: true

  lightningcss-android-arm64@1.33.0:
    optional: true

  lightningcss-darwin-arm64@1.33.0:
    optional: true

  lightningcss-darwin-x64@1.33.0:
    optional: true

  lightningcss-freebsd-x64@1.33.0:
    optional: true

  lightningcss-linux-arm-gnueabihf@1.33.0:
    optional: true

  lightningcss-linux-arm64-gnu@1.33.0:
    optional: true

  lightningcss-linux-arm64-musl@1.33.0:
    optional: true

  lightningcss-linux-x64-gnu@1.33.0:
    optional: true

  lightningcss-linux-x64-musl@1.33.0:
    optional: true

  lightningcss-win32-arm64-msvc@1.33.0:
    optional: true

  lightningcss-win32-x64-msvc@1.33.0:
    optional: true

  lightningcss@1.33.0:
    dependencies:
      detect-libc: 2.1.2
    optionalDependencies:
      lightningcss-android-arm64: 1.33.0
      lightningcss-darwin-arm64: 1.33.0
      lightningcss-darwin-x64: 1.33.0
      lightningcss-freebsd-x64: 1.33.0
      lightningcss-linux-arm-gnueabihf: 1.33.0
      lightningcss-linux-arm64-gnu: 1.33.0
      lightningcss-linux-arm64-musl: 1.33.0
      lightningcss-linux-x64-gnu: 1.33.0
      lightningcss-linux-x64-musl: 1.33.0
      lightningcss-win32-arm64-msvc: 1.33.0
      lightningcss-win32-x64-msvc: 1.33.0

  nanoid@3.3.20: {}

  picocolors@1.1.1: {}

  picomatch@4.0.7: {}

  postcss@8.5.33:
    dependencies:
      nanoid: 3.3.20
      picocolors: 1.1.1
      source-map-js: 1.2.2

  rolldown@1.2.19:
    dependencies:
      '@oxc-project/types': 0.156.0
      '@rolldown/pluginutils': 1.1.1
    optionalDependencies:
      '@rolldown/binding-android-arm-eabi': 1.2.19
      '@rolldown/binding-android-arm64': 1.2.19
      '@rolldown/binding-darwin-arm64': 1.2.19
      '@rolldown/binding-darwin-x64': 1.2.19
      '@rolldown/binding-freebsd-x64': 1.2.19
      '@rolldown/binding-linux-arm-gnueabihf': 1.2.19
      '@rolldown/binding-linux-arm64-gnu': 1.2.19
      '@rolldown/binding-linux-arm64-musl': 1.2.19
      '@rolldown/binding-linux-ppc64-gnu': 1.2.19
      '@rolldown/binding-linux-s390x-gnu': 1.2.19
      '@rolldown/binding-linux-x64-gnu': 1.2.19
      '@rolldown/binding-linux-x64-musl': 1.2.19
      '@rolldown/binding-openharmony-arm64': 1.2.19
      '@rolldown/binding-wasm32-wasi': 1.2.19
      '@rolldown/binding-win32-arm64-msvc': 1.2.19
      '@rolldown/binding-win32-x64-msvc': 1.2.19

  source-map-js@1.2.2: {}

  ssf@0.11.2:
    dependencies:
      frac: 1.1.2

  tinyglobby@0.2.17:
    dependencies:
      fdir: 6.5.0(picomatch@4.0.7)
      picomatch: 4.0.7

  tslib@2.9.1:
    optional: true

  typescript@6.0.3: {}

  vite@8.3.8:
    dependencies:
      lightningcss: 1.33.0
      picomatch: 4.0.7
      postcss: 8.5.33
      rolldown: 1.2.19
      tinyglobby: 0.2.17
    optionalDependencies:
      fsevents: 2.3.3

  wmf@1.0.2: {}

  word@0.3.0: {}

  xlsx@0.18.5:
    dependencies:
      adler-32: 1.3.1
      cfb: 1.2.2
      codepage: 1.15.0
      crc-32: 1.2.2
      ssf: 0.11.2
      wmf: 1.0.2
      word: 0.3.0

```
`src-tauri\Cargo.lock`:

```lock
# This file is automatically @generated by Cargo.
# It is not intended for manual editing.
version = 4

[[package]]
name = "adler2"
version = "2.0.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "320119579fcad9c21884f5c4861d16174d0e06250625266f50fe6898340abefa"

[[package]]
name = "aho-corasick"
version = "1.1.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c982642fa9e8606056828ee9a8505737230110bb1099153c79efe865c59d12ba"
dependencies = [
 "memchr",
]

[[package]]
name = "alloc-no-stdlib"
version = "3.0.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c2fb6cfd47bf496ff64095c20eaba0c201404ee38714d4142fcfa1dc334fcc7a"

[[package]]
name = "alloc-stdlib"
version = "0.3.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0b5c1865780388bfa186411ab5f247819487fc4864c6e9c3106611fa347586e1"
dependencies = [
 "alloc-no-stdlib",
]

[[package]]
name = "android_system_properties"
version = "0.1.6"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ae221649c9976a6f6c56ae1facf410f3ddb33cc661c4b7b61020a912d4237fbc"
dependencies = [
 "libc",
]

[[package]]
name = "anyhow"
version = "1.0.104"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "330a5ed07fa54e4702c9d6c4174f74427fc0ef6e214bbd677ae50a5099946470"

[[package]]
name = "async-broadcast"
version = "0.7.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "435a87a52755b8f27fcf321ac4f04b2802e337c8c4872923137471ec39c37532"
dependencies = [
 "event-listener",
 "event-listener-strategy",
 "futures-core",
 "pin-project-lite",
]

[[package]]
name = "async-channel"
version = "2.5.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "924ed96dd52d1b75e9c1a3e6275715fd320f5f9439fb5a4a11fa51f4221158d2"
dependencies = [
 "concurrent-queue",
 "event-listener-strategy",
 "futures-core",
 "pin-project-lite",
]

[[package]]
name = "async-executor"
version = "1.14.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f426a31126c735126297bc5ea7a521263c9faff4f63ca415267ee625651c4f37"
dependencies = [
 "async-task",
 "concurrent-queue",
 "fastrand",
 "futures-lite",
 "pin-project-lite",
 "slab",
]

[[package]]
name = "async-io"
version = "2.6.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "456b8a8feb6f42d237746d4b3e9a178494627745c3c56c6ea55d92ba50d026fc"
dependencies = [
 "autocfg",
 "cfg-if",
 "concurrent-queue",
 "futures-io",
 "futures-lite",
 "parking",
 "polling",
 "rustix",
 "slab",
 "windows-sys 0.61.2",
]

[[package]]
name = "async-lock"
version = "3.5.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0876700b0d007ad25d5508865a4259c3af9af6d296bf663a0d586d0bc3369f6f"
dependencies = [
 "event-listener",
 "event-listener-strategy",
 "pin-project-lite",
]

[[package]]
name = "async-process"
version = "2.5.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "fc50921ec0055cdd8a16de48773bfeec5c972598674347252c0399676be7da75"
dependencies = [
 "async-channel",
 "async-io",
 "async-lock",
 "async-signal",
 "async-task",
 "blocking",
 "cfg-if",
 "event-listener",
 "futures-lite",
 "rustix",
]

[[package]]
name = "async-recursion"
version = "1.2.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4f8abc12baad266b1c8cec146854c195b5864b4221d4b2ca7296a7ae82d9e451"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 3.0.10",
]

[[package]]
name = "async-signal"
version = "0.2.14"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "52b5aaafa020cf5053a01f2a60e8ff5dccf550f0f77ec54a4e47285ac2bab485"
dependencies = [
 "async-io",
 "async-lock",
 "atomic-waker",
 "cfg-if",
 "futures-core",
 "futures-io",
 "rustix",
 "signal-hook-registry",
 "slab",
 "windows-sys 0.61.2",
]

[[package]]
name = "async-task"
version = "4.7.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8b75356056920673b02621b35afd0f7dda9306d03c79a30f5c56c44cf256e3de"

[[package]]
name = "async-trait"
version = "0.1.92"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "82f6aeea286b8eb4dd3431a1be1b59d290ace00f5bfd8e2a159bc2a05e2c1667"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 3.0.10",
]

[[package]]
name = "atk"
version = "0.18.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "241b621213072e993be4f6f3a9e4b45f65b7e6faad43001be957184b7bb1824b"
dependencies = [
 "atk-sys",
 "glib",
 "libc",
]

[[package]]
name = "atk-sys"
version = "0.18.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c5e48b684b0ca77d2bbadeef17424c2ea3c897d44d566a1617e7e8f30614d086"
dependencies = [
 "glib-sys",
 "gobject-sys",
 "libc",
 "system-deps",
]

[[package]]
name = "atomic-waker"
version = "1.1.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1505bd5d3d116872e7271a6d4e16d81d0c8570876c8de68093a09ac269d8aac0"

[[package]]
name = "autocfg"
version = "1.5.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f2032f911046de80f0a198e0901378627c33f59ea0ac00e363d481118bd70a53"

[[package]]
name = "base64"
version = "0.21.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9d297deb1925b89f2ccc13d7635fa0714f12c87adce1c75356b39ca9b7178567"

[[package]]
name = "base64"
version = "0.23.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ac07cdecf99051d9a5238b80f35af32cdeba5b336e55d957b318b50137e18da5"

[[package]]
name = "bit-set"
version = "0.8.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "08807e080ed7f9d5433fa9b275196cfc35414f66a0c79d864dc51a0d825231a3"
dependencies = [
 "bit-vec 0.8.0",
]

[[package]]
name = "bit-set"
version = "0.11.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "56d87354e4229f54a44f7bf2435906a4656dba36026ab6eaca629a2c436a691c"
dependencies = [
 "bit-vec 0.10.2",
]

[[package]]
name = "bit-vec"
version = "0.8.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "5e764a1d40d510daf35e07be9eb06e75770908c27d411ee6c92109c9840eaaf7"

[[package]]
name = "bit-vec"
version = "0.10.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "72503af1e72be411d74ca45cd6b309878fcb35354e252fc2a3a8bda3a97082a0"

[[package]]
name = "bitflags"
version = "1.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "bef38d45163c2f1dde094a7dfd33ccf595c92905c8f8f4fdc18d06fb1037718a"

[[package]]
name = "bitflags"
version = "2.13.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3ded4057c258ba199e2d26386d3af3780957ecaee6c4ef4041c6b4b8b97c0b06"
dependencies = [
 "serde_core",
]

[[package]]
name = "block-buffer"
version = "0.10.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3078c7629b62d3f0439517fa394996acacc5cbc91c5a20d8c658e77abd503a71"
dependencies = [
 "generic-array",
]

[[package]]
name = "block2"
version = "0.6.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cdeb9d870516001442e364c5220d3574d2da8dc765554b4a617230d33fa58ef5"
dependencies = [
 "objc2",
]

[[package]]
name = "blocking"
version = "1.7.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a70e4329df6cb94385eed412ec92375c3cdd8a6e502493d1229b6414e4036dfa"
dependencies = [
 "async-channel",
 "async-task",
 "futures-io",
 "futures-lite",
 "piper",
]

[[package]]
name = "brotli"
version = "9.1.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "05e0144f854f7cfbc157229554c4a9580b8a653448e2bab608022ee0398a07dc"
dependencies = [
 "alloc-no-stdlib",
 "alloc-stdlib",
 "brotli-decompressor",
]

[[package]]
name = "brotli-decompressor"
version = "6.3.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "75c74c9c51b9140663e196b5fb88bc94c334d7a497c8311cb759d8557874747f"
dependencies = [
 "alloc-no-stdlib",
 "alloc-stdlib",
]

[[package]]
name = "bs58"
version = "0.5.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "bf88ba1141d185c399bee5288d850d63b8369520c1eafc32a0430b5b6c287bf4"
dependencies = [
 "tinyvec",
]

[[package]]
name = "bumpalo"
version = "3.20.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "87a0cf66fd1eb2fb7b822cb78370d82303750809bc6ba855f3f58e517d3238db"

[[package]]
name = "bytemuck"
version = "1.25.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "95832e849adfb21180ccb6826a99da14e5d266ae5c2e668e1602cf234f153797"

[[package]]
name = "byteorder"
version = "1.5.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1fd0f2584146f6f2ef48085050886acf353beff7305ebd1ae69500e27c67f64b"

[[package]]
name = "bytes"
version = "1.12.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "fc652a48c352aef3ea3aed32080501cf3ef6ed5da78602a020c991775b0aff04"
dependencies = [
 "serde",
]

[[package]]
name = "cairo-rs"
version = "0.18.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8ca26ef0159422fb77631dc9d17b102f253b876fe1586b03b803e63a309b4ee2"
dependencies = [
 "bitflags 2.13.2",
 "cairo-sys-rs",
 "glib",
 "libc",
 "once_cell",
 "thiserror 1.0.69",
]

[[package]]
name = "cairo-sys-rs"
version = "0.18.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "685c9fa8e590b8b3d678873528d83411db17242a73fccaed827770ea0fedda51"
dependencies = [
 "glib-sys",
 "libc",
 "system-deps",
]

[[package]]
name = "camino"
version = "1.2.6"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "bbbad30e4b4c14a39e3cc8aed085a12a327257c316619c93581e017bc52be591"
dependencies = [
 "serde_core",
]

[[package]]
name = "cargo-platform"
version = "0.1.9"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e35af189006b9c0f00a064685c727031e3ed2d8020f7ba284d78cc2671bd36ea"
dependencies = [
 "serde",
]

[[package]]
name = "cargo_metadata"
version = "0.19.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "dd5eb614ed4c27c5d706420e4320fbe3216ab31fa1c33cd8246ac36dae4479ba"
dependencies = [
 "camino",
 "cargo-platform",
 "semver",
 "serde",
 "serde_json",
 "thiserror 2.0.21",
]

[[package]]
name = "cargo_toml"
version = "1.0.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "82f4b26e751e711a5302649417f2da046dce6391b2ea30a4820f37462314f0b9"
dependencies = [
 "semver",
 "serde",
 "toml 1.2.1+spec-1.1.0",
]

[[package]]
name = "cc"
version = "1.11.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "33ef9e3e8154a45c7a95cff4c1299702106ad94062d7bb85fdc5d3a5afd91d45"
dependencies = [
 "find-msvc-tools",
 "shlex",
]

[[package]]
name = "cesu8"
version = "1.1.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "6d43a04d8753f35258c91f8ec639f792891f748a1edbd759cf1dcea3382ad83c"

[[package]]
name = "cfb"
version = "0.14.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a347dcabdae9c31b0825fd6a8bed285ec9c2acb89c47827126d52fa4f59cece3"
dependencies = [
 "fnv",
 "uuid",
 "web-time",
]

[[package]]
name = "cfg-expr"
version = "0.15.8"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d067ad48b8650848b989a59a86c6c36a995d02d2bf778d45c3c5d57bc2718f02"
dependencies = [
 "smallvec",
 "target-lexicon",
]

[[package]]
name = "cfg-if"
version = "1.0.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4e7648175b45a9a48536d676f68d918270699102aa8dab5496df06904c914600"

[[package]]
name = "chrono"
version = "0.4.45"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1aa79e62e7697b8e29b513a68abacf485adcd1fe8284a4316c5ae868e6633327"
dependencies = [
 "iana-time-zone",
 "num-traits",
 "serde",
 "windows-link",
]

[[package]]
name = "combine"
version = "4.6.9"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4356eba6976435498d05a311ee9fc486da3bc81c200d3f0d7dd9703b41913f92"
dependencies = [
 "bytes",
 "memchr",
]

[[package]]
name = "concurrent-queue"
version = "2.5.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4ca0197aee26d1ae37445ee532fefce43251d24cc7c166799f4d46817f1d3973"
dependencies = [
 "crossbeam-utils",
]

[[package]]
name = "cookie"
version = "0.18.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1a373e3602691c3cdea496d2f0ee5935151e6168fe87739483c463db1b2f2f87"
dependencies = [
 "time",
 "version_check",
]

[[package]]
name = "core-foundation"
version = "0.10.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b2a6cd9ae233e7f62ba4e9353e81a88df7fc8a5987b8d445b4d90c879bd156f6"
dependencies = [
 "core-foundation-sys",
 "libc",
]

[[package]]
name = "core-foundation-sys"
version = "0.8.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "773648b94d0e5d620f64f280777445740e61fe701025087ec8b57f45c791888b"

[[package]]
name = "core-graphics"
version = "0.25.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "064badf302c3194842cf2c5d61f56cc88e54a759313879cdf03abdd27d0c3b97"
dependencies = [
 "bitflags 2.13.2",
 "core-foundation",
 "core-graphics-types",
 "foreign-types",
 "libc",
]

[[package]]
name = "core-graphics-types"
version = "0.2.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3d44a101f213f6c4cdc1853d4b78aef6db6bdfa3468798cc1d9912f4735013eb"
dependencies = [
 "bitflags 2.13.2",
 "core-foundation",
 "libc",
]

[[package]]
name = "cpufeatures"
version = "0.2.17"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "59ed5838eebb26a2bb2e58f6d5b5316989ae9d08bab10e0e6d103e656d1b0280"
dependencies = [
 "libc",
]

[[package]]
name = "crc32fast"
version = "1.5.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "2b929dd2a135771f40afabd1073f85eed59c800b7c61901e5c254270497dad64"
dependencies = [
 "cfg-if",
]

[[package]]
name = "crossbeam-channel"
version = "0.5.17"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "98b0cc327b5bc766e7fda9c9260cc0fa81b43a8e240440422dff70788e3f9ef1"
dependencies = [
 "crossbeam-utils",
]

[[package]]
name = "crossbeam-utils"
version = "0.8.23"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a31eee39dddec8330830986fcd7625edb5a24ec90ea038215273bbc3adb08ac6"

[[package]]
name = "crypto-common"
version = "0.1.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "78c8292055d1c1df0cce5d180393dc8cce0abec0a7102adb6c7b1eef6016d60a"
dependencies = [
 "generic-array",
 "typenum",
]

[[package]]
name = "cssparser"
version = "0.37.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8c9cdaae01d5ed7882b04d795e7f752f46ff52d2fa3b50a20d28c464510bba98"
dependencies = [
 "cssparser-macros",
 "dtoa-short",
 "itoa",
 "phf 0.13.1",
 "smallvec",
]

[[package]]
name = "cssparser"
version = "0.38.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "11119743ad110e8c1bdccd930d7f5c30c99e5fc76a7b63ec9807e84eef0c5f59"
dependencies = [
 "cssparser-macros",
 "dtoa-short",
 "itoa",
 "phf 0.14.0",
 "smallvec",
]

[[package]]
name = "cssparser-macros"
version = "0.7.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d045de693cb712d0b22c6a64be5b953f67b3ce00ab5ad3dd5d8b441886ab8e1a"
dependencies = [
 "quote",
 "syn 3.0.10",
]

[[package]]
name = "ctor"
version = "1.0.14"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ea691ed9f36489d087419b8b2ba3ef27d89621380b4178c73e2445a379e4e0f4"
dependencies = [
 "link-section",
]

[[package]]
name = "darling"
version = "0.24.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ed17f5901b6630b993ca003def43f2f8ef4014fc13b047b57aad617ff32bc2ec"
dependencies = [
 "darling_core",
 "darling_macro",
]

[[package]]
name = "darling_core"
version = "0.24.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "6837e2cf7485aaae18f86181d2f0e9a7ed297a025e220aeabf63fdebd3a2ddff"
dependencies = [
 "ident_case",
 "proc-macro2",
 "quote",
 "strsim",
 "syn 3.0.10",
]

[[package]]
name = "darling_macro"
version = "0.24.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "2ac7135c3ef02b2f7833bbeb1be5ba7f966dcde8a87c6b87f65a778d71a02785"
dependencies = [
 "darling_core",
 "quote",
 "syn 3.0.10",
]

[[package]]
name = "dbus"
version = "0.9.12"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3ab69f03cc8c4340c9c8e315114e1658e6775a9b16a04357973aa21cec22b32e"
dependencies = [
 "libc",
 "libdbus-sys",
 "windows-sys 0.61.2",
]

[[package]]
name = "deranged"
version = "0.5.9"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9e9de72ce2ad1f90dc62fa25f0f430ef85eb4b0d8fa0be4f30373bc40a21d28e"
dependencies = [
 "serde_core",
]

[[package]]
name = "derive_more"
version = "2.1.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d751e9e49156b02b44f9c1815bcb94b984cdcc4396ecc32521c739452808b134"
dependencies = [
 "derive_more-impl",
]

[[package]]
name = "derive_more-impl"
version = "2.1.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "799a97264921d8623a957f6c3b9011f3b5492f557bbb7a5a19b7fa6d06ba8dcb"
dependencies = [
 "proc-macro2",
 "quote",
 "rustc_version",
 "syn 2.0.119",
]

[[package]]
name = "digest"
version = "0.10.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9ed9a281f7bc9b7576e61468ba615a66a5c8cfdff42420a70aa82701a3b1e292"
dependencies = [
 "block-buffer",
 "crypto-common",
]

[[package]]
name = "dirs"
version = "7.0.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8d57d423b3c82e89b9a24ca3091fee61f456a26edbd28d26c65906f4bc1dcd8f"
dependencies = [
 "dirs-sys",
]

[[package]]
name = "dirs-sys"
version = "0.5.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e01a3366d27ee9890022452ee61b2b63a67e6f13f58900b651ff5665f0bb1fab"
dependencies = [
 "libc",
 "option-ext",
 "redox_users",
 "windows-sys 0.61.2",
]

[[package]]
name = "dispatch2"
version = "0.3.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1e0e367e4e7da84520dedcac1901e4da967309406d1e51017ae1abfb97adbd38"
dependencies = [
 "bitflags 2.13.2",
 "block2",
 "libc",
 "objc2",
]

[[package]]
name = "displaydoc"
version = "0.2.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c6232dd377dcc64799954cbd3a9bb882e9cdc1308ccd87b1c098f1fb2eaf82a8"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 3.0.10",
]

[[package]]
name = "dlopen2"
version = "0.8.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "5e2c5bd4158e66d1e215c49b837e11d62f3267b30c92f1d171c4d3105e3dc4d4"
dependencies = [
 "dlopen2_derive",
 "libc",
 "once_cell",
 "winapi",
]

[[package]]
name = "dlopen2_derive"
version = "0.4.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0fbbb781877580993a8707ec48672673ec7b81eeba04cfd2310bd28c08e47c8f"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "dom_query"
version = "0.28.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "fac5fca71e65e94cc718a6e2af65d6e0f9c6027751c2aa562fbb5087fda639bc"
dependencies = [
 "bit-set 0.8.0",
 "cssparser 0.37.0",
 "foldhash",
 "html5ever 0.39.0",
 "precomputed-hash",
 "selectors 0.38.0",
 "tendril",
]

[[package]]
name = "dom_query"
version = "0.29.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "498c698ac51127148a3984450e51fca7f01805a91d7a1f7a24af0a5f761e3385"
dependencies = [
 "bit-set 0.11.1",
 "cssparser 0.38.0",
 "foldhash",
 "html5ever 0.40.1",
 "precomputed-hash",
 "selectors 0.41.0",
 "tendril",
]

[[package]]
name = "dpi"
version = "0.1.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d8b14ccef22fc6f5a8f4d7d768562a182c04ce9a3b3157b91390b52ddfdf1a76"
dependencies = [
 "serde",
]

[[package]]
name = "dtoa"
version = "1.0.11"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4c3cf4824e2d5f025c7b531afcb2325364084a16806f6d47fbc1f5fbd9960590"

[[package]]
name = "dtoa-short"
version = "0.3.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cd1511a7b6a56299bd043a9c167a6d2bfb37bf84a6dfceaba651168adfb43c87"
dependencies = [
 "dtoa",
]

[[package]]
name = "dunce"
version = "1.0.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "92773504d58c093f6de2459af4af33faa518c13451eb8f2b5698ed3d36e7c813"

[[package]]
name = "dyn-clone"
version = "1.0.20"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d0881ea181b1df73ff77ffaaf9c7544ecc11e82fba9b5f27b262a3c73a332555"

[[package]]
name = "embed-resource"
version = "3.0.12"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "6168487b5e7eb2673e6efe1200b1848016e436a6ca0b8031bf04bd9d493a249f"
dependencies = [
 "cc",
 "memchr",
 "rustc_version",
 "toml 1.2.1+spec-1.1.0",
 "vswhom",
 "winreg",
]

[[package]]
name = "embed_plist"
version = "1.2.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4ef6b89e5b37196644d8796de5268852ff179b44e96276cf4290264843743bb7"

[[package]]
name = "endi"
version = "1.1.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "66b7e2430c6dff6a955451e2cfc438f09cea1965a9d6f87f7e3b90decc014099"

[[package]]
name = "enumflags2"
version = "0.7.12"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1027f7680c853e056ebcec683615fb6fbbc07dbaa13b4d5d9442b146ded4ecef"
dependencies = [
 "enumflags2_derive",
 "serde",
]

[[package]]
name = "enumflags2_derive"
version = "0.7.12"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "67c78a4d8fdf9953a5c9d458f9efe940fd97a0cab0941c075a813ac594733827"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "equivalent"
version = "1.0.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "00d174d5400e5e8fd687ad1049e2f578285fa914201b1af7e8b112a4546bd826"

[[package]]
name = "erased-serde"
version = "0.4.11"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1e59b668157f32d3459d4bd634861a06ffa2503a461ca5f0916b9f0252605e66"
dependencies = [
 "serde",
 "serde_core",
 "typeid",
]

[[package]]
name = "errno"
version = "0.3.15"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e35d6e78f4cebb90e51d543db8fe41528851d6deeef6ef21ebd4bfdc1e784776"
dependencies = [
 "libc",
 "windows-sys 0.61.2",
]

[[package]]
name = "event-listener"
version = "5.4.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "5a23add41df1562121a9393cb065eab5146a1242410f23a644851e90cfd669d2"
dependencies = [
 "parking",
 "pin-project-lite",
]

[[package]]
name = "event-listener-strategy"
version = "0.5.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8be9f3dfaaffdae2972880079a491a1a8bb7cbed0b8dd7a347f668b4150a3b93"
dependencies = [
 "event-listener",
 "pin-project-lite",
]

[[package]]
name = "fastrand"
version = "2.5.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "da7c62ceae207dd37ea5b845da6a0696c799f85e97da1ab5b7910be3c1c80223"

[[package]]
name = "fdeflate"
version = "0.3.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1e6853b52649d4ac5c0bd02320cddc5ba956bdb407c4b75a2c6b75bf51500f8c"
dependencies = [
 "simd-adler32",
]

[[package]]
name = "field-offset"
version = "0.3.6"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "38e2275cc4e4fc009b0669731a1e5ab7ebf11f469eaede2bab9309a5b4d6057f"
dependencies = [
 "memoffset",
 "rustc_version",
]

[[package]]
name = "find-msvc-tools"
version = "0.1.15"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1c66915cc5391097de7a2b0b972e8505aa33c0df401fd3a6811dbdb32881ba48"

[[package]]
name = "flate2"
version = "1.1.11"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "626d4928326b646e70f65ed36fc7cf9f206bdb68a0019ee7c6b4709da4e084c4"
dependencies = [
 "crc32fast",
 "miniz_oxide 0.9.1",
 "zlib-rs",
]

[[package]]
name = "fnv"
version = "1.0.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3f9eec918d3f24069decb9af1554cad7c880e2da24a9afd88aca000531ab82c1"

[[package]]
name = "foldhash"
version = "0.2.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "77ce24cb58228fbb8aa041425bb1050850ac19177686ea6e0f41a70416f56fdb"

[[package]]
name = "foreign-types"
version = "0.5.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d737d9aa519fb7b749cbc3b962edcf310a8dd1f4b67c91c4f83975dbdd17d965"
dependencies = [
 "foreign-types-macros",
 "foreign-types-shared",
]

[[package]]
name = "foreign-types-macros"
version = "0.2.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ea5190182e6915eb873ddbc16e23b711b6eb1f9c00a0d0a3a91b5f6228475225"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 3.0.10",
]

[[package]]
name = "foreign-types-shared"
version = "0.3.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "aa9a19cbb55df58761df49b23516a86d432839add4af60fc256da840f66ed35b"

[[package]]
name = "form_urlencoded"
version = "1.2.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cb4cb245038516f5f85277875cdaa4f7d2c9a0fa0468de06ed190163b1581fcf"
dependencies = [
 "percent-encoding",
]

[[package]]
name = "futures-channel"
version = "0.3.34"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b1f9e3d69d39e4862ffed03ed071a76f9a13ba1d9109d355b0f0aa6b15e393c4"
dependencies = [
 "futures-core",
]

[[package]]
name = "futures-core"
version = "0.3.34"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "92d699e522242e69e3003b94ecc1f960f3a5e015aa7c5d7486e65ad01dd94f5e"

[[package]]
name = "futures-executor"
version = "0.3.34"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "031b47cf1a3c6cc8bc2fc76cd437f521619387907d469316e7c0bc278f1f5432"
dependencies = [
 "futures-core",
 "futures-task",
 "futures-util",
]

[[package]]
name = "futures-io"
version = "0.3.34"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "53c0fa8157de1303bfffdaa1cc2a673bfffb60102f76b0ef4441659124373fed"

[[package]]
name = "futures-lite"
version = "2.6.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f78e10609fe0e0b3f4157ffab1876319b5b0db102a2c60dc4626306dc46b44ad"
dependencies = [
 "fastrand",
 "futures-core",
 "futures-io",
 "parking",
 "pin-project-lite",
]

[[package]]
name = "futures-macro"
version = "0.3.34"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9fb9654ba8355388abeb8dcb4fc62f511300867002afc858860463bdd9fe0c44"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 3.0.10",
]

[[package]]
name = "futures-sink"
version = "0.3.34"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1944426bf7d03f1d14f708785e4b33efd750b36d48a157b836b3efc15ede8e1d"

[[package]]
name = "futures-task"
version = "0.3.34"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cd417de3d1d015fc3bfd2b1ea46dfc7bab72ef86f1cc7cc9c78e728b34a6d1fd"

[[package]]
name = "futures-util"
version = "0.3.34"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0d50a92467f8ba5dd6e3ee5d4bd04d73ab2e4e1c44474a0674821dfce14b79bc"
dependencies = [
 "futures-core",
 "futures-io",
 "futures-macro",
 "futures-sink",
 "futures-task",
 "memchr",
 "pin-project-lite",
 "slab",
]

[[package]]
name = "gdk"
version = "0.18.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d9f245958c627ac99d8e529166f9823fb3b838d1d41fd2b297af3075093c2691"
dependencies = [
 "cairo-rs",
 "gdk-pixbuf",
 "gdk-sys",
 "gio",
 "glib",
 "libc",
 "pango",
]

[[package]]
name = "gdk-pixbuf"
version = "0.18.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "50e1f5f1b0bfb830d6ccc8066d18db35c487b1b2b1e8589b5dfe9f07e8defaec"
dependencies = [
 "gdk-pixbuf-sys",
 "gio",
 "glib",
 "libc",
 "once_cell",
]

[[package]]
name = "gdk-pixbuf-sys"
version = "0.18.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3f9839ea644ed9c97a34d129ad56d38a25e6756f99f3a88e15cd39c20629caf7"
dependencies = [
 "gio-sys",
 "glib-sys",
 "gobject-sys",
 "libc",
 "system-deps",
]

[[package]]
name = "gdk-sys"
version = "0.18.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "5c2d13f38594ac1e66619e188c6d5a1adb98d11b2fcf7894fc416ad76aa2f3f7"
dependencies = [
 "cairo-sys-rs",
 "gdk-pixbuf-sys",
 "gio-sys",
 "glib-sys",
 "gobject-sys",
 "libc",
 "pango-sys",
 "pkg-config",
 "system-deps",
]

[[package]]
name = "gdkwayland-sys"
version = "0.18.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "140071d506d223f7572b9f09b5e155afbd77428cd5cc7af8f2694c41d98dfe69"
dependencies = [
 "gdk-sys",
 "glib-sys",
 "gobject-sys",
 "libc",
 "pkg-config",
 "system-deps",
]

[[package]]
name = "gdkx11"
version = "0.18.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3caa00e14351bebbc8183b3c36690327eb77c49abc2268dd4bd36b856db3fbfe"
dependencies = [
 "gdk",
 "gdkx11-sys",
 "gio",
 "glib",
 "libc",
 "x11",
]

[[package]]
name = "gdkx11-sys"
version = "0.18.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "6e2e7445fe01ac26f11601db260dd8608fe172514eb63b3b5e261ea6b0f4428d"
dependencies = [
 "gdk-sys",
 "glib-sys",
 "libc",
 "system-deps",
 "x11",
]

[[package]]
name = "generic-array"
version = "0.14.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "85649ca51fd72272d7821adaf274ad91c288277713d9c18820d8499a7ff69e9a"
dependencies = [
 "typenum",
 "version_check",
]

[[package]]
name = "getrandom"
version = "0.3.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "899def5c37c4fd7b2664648c28120ecec138e4d395b459e5ca34f9cce2dd77fd"
dependencies = [
 "cfg-if",
 "libc",
 "r-efi 5.3.0",
 "wasip2",
]

[[package]]
name = "getrandom"
version = "0.4.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "300e883d756b2e4ec94e02791f39b04b522276138852cfc41d9fb7e904106099"
dependencies = [
 "cfg-if",
 "libc",
 "r-efi 6.0.0",
]

[[package]]
name = "gio"
version = "0.18.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d4fc8f532f87b79cbc51a79748f16a6828fb784be93145a322fa14d06d354c73"
dependencies = [
 "futures-channel",
 "futures-core",
 "futures-io",
 "futures-util",
 "gio-sys",
 "glib",
 "libc",
 "once_cell",
 "pin-project-lite",
 "smallvec",
 "thiserror 1.0.69",
]

[[package]]
name = "gio-sys"
version = "0.18.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "37566df850baf5e4cb0dfb78af2e4b9898d817ed9263d1090a2df958c64737d2"
dependencies = [
 "glib-sys",
 "gobject-sys",
 "libc",
 "system-deps",
 "winapi",
]

[[package]]
name = "glib"
version = "0.18.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "233daaf6e83ae6a12a52055f568f9d7cf4671dabb78ff9560ab6da230ce00ee5"
dependencies = [
 "bitflags 2.13.2",
 "futures-channel",
 "futures-core",
 "futures-executor",
 "futures-task",
 "futures-util",
 "gio-sys",
 "glib-macros",
 "glib-sys",
 "gobject-sys",
 "libc",
 "memchr",
 "once_cell",
 "smallvec",
 "thiserror 1.0.69",
]

[[package]]
name = "glib-macros"
version = "0.18.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0bb0228f477c0900c880fd78c8759b95c7636dbd7842707f49e132378aa2acdc"
dependencies = [
 "heck 0.4.1",
 "proc-macro-crate 2.0.2",
 "proc-macro-error",
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "glib-sys"
version = "0.18.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "063ce2eb6a8d0ea93d2bf8ba1957e78dbab6be1c2220dd3daca57d5a9d869898"
dependencies = [
 "libc",
 "system-deps",
]

[[package]]
name = "glob"
version = "0.3.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e4eba85ea1d0a966a983acd07deee566e67395d2d96b6fb39e62b5a833f1eb0b"

[[package]]
name = "gobject-sys"
version = "0.18.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0850127b514d1c4a4654ead6dedadb18198999985908e6ffe4436f53c785ce44"
dependencies = [
 "glib-sys",
 "libc",
 "system-deps",
]

[[package]]
name = "gtk"
version = "0.18.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "fd56fb197bfc42bd5d2751f4f017d44ff59fbb58140c6b49f9b3b2bdab08506a"
dependencies = [
 "atk",
 "cairo-rs",
 "field-offset",
 "futures-channel",
 "gdk",
 "gdk-pixbuf",
 "gio",
 "glib",
 "gtk-sys",
 "gtk3-macros",
 "libc",
 "pango",
 "pkg-config",
]

[[package]]
name = "gtk-sys"
version = "0.18.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8f29a1c21c59553eb7dd40e918be54dccd60c52b049b75119d5d96ce6b624414"
dependencies = [
 "atk-sys",
 "cairo-sys-rs",
 "gdk-pixbuf-sys",
 "gdk-sys",
 "gio-sys",
 "glib-sys",
 "gobject-sys",
 "libc",
 "pango-sys",
 "system-deps",
]

[[package]]
name = "gtk3-macros"
version = "0.18.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "52ff3c5b21f14f0736fed6dcfc0bfb4225ebf5725f3c0209edeec181e4d73e9d"
dependencies = [
 "proc-macro-crate 1.3.1",
 "proc-macro-error",
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "hashbrown"
version = "0.12.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8a9ee70c43aaf417c914396645a0fa852624801b24ebb7ae78fe8272889ac888"

[[package]]
name = "hashbrown"
version = "0.17.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ed5909b6e89a2db4456e54cd5f673791d7eca6732202bbf2a9cc504fe2f9b84a"

[[package]]
name = "heck"
version = "0.4.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "95505c38b4572b2d910cecb0281560f54b440a19336cbbcb27bf6ce6adc6f5a8"

[[package]]
name = "heck"
version = "0.5.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "2304e00983f87ffb38b55b444b5e3b60a884b5d30c0fca7d82fe33449bbe55ea"

[[package]]
name = "hermit-abi"
version = "0.5.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e17592d60ebacc7d5e169f4663c5f84f9161cc90328abcfe8456f41e4dfcb284"

[[package]]
name = "hex"
version = "0.4.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7f24254aa9a54b5c858eaee2f5bccdb46aaf0e486a595ed5fd8f86ba55232a70"

[[package]]
name = "html5ever"
version = "0.39.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "46a1761807faccc9a19e86944bbf40610014066306f96edcdedc2fb714bcb7b8"
dependencies = [
 "log",
 "markup5ever 0.39.0",
]

[[package]]
name = "html5ever"
version = "0.40.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "456a1a377e608e555d22ddab27ac0114bc7a7b4199078108e34c2aeae6c9b130"
dependencies = [
 "log",
 "markup5ever 0.40.0",
 "memchr",
]

[[package]]
name = "http"
version = "1.5.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "918d3568bebf352712bc2ef3d46a8bcf1a75b373be6539de198e9105cbbf9ce0"
dependencies = [
 "bytes",
 "itoa",
]

[[package]]
name = "http-body"
version = "1.1.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ca2a8f2913ee65f60facd6a5905613afaa448497a0230cc41ce022d93290bc2c"
dependencies = [
 "bytes",
 "http",
]

[[package]]
name = "http-body-util"
version = "0.1.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "23169fe34a5fbcdd3f3862e78fb9b6fccd5f02a6dc6f732547005d45631ce71c"
dependencies = [
 "bytes",
 "futures-core",
 "http",
 "http-body",
 "pin-project-lite",
]

[[package]]
name = "httparse"
version = "1.10.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "6dbf3de79e51f3d586ab4cb9d5c3e2c14aa28ed23d180cf89b4df0454a69cc87"

[[package]]
name = "hyper"
version = "1.12.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "2c3e324da4c95177d6291d4c8730197c0d1822f8a9766814a4a44fa5ab797c9c"
dependencies = [
 "atomic-waker",
 "bytes",
 "futures-core",
 "http",
 "http-body",
 "httparse",
 "itoa",
 "pin-project-lite",
 "smallvec",
 "tokio",
 "want",
]

[[package]]
name = "hyper-util"
version = "0.1.21"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ddc03d96684f9226b8a787cdb71488417b53ab5ea8fdb1dac946cb9431cc8bff"
dependencies = [
 "base64 0.23.1",
 "bytes",
 "futures-channel",
 "futures-util",
 "http",
 "http-body",
 "httparse",
 "hyper",
 "ipnet",
 "libc",
 "percent-encoding",
 "pin-project-lite",
 "socket2",
 "tokio",
 "tower-service",
 "tracing",
]

[[package]]
name = "iana-time-zone"
version = "0.1.65"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e31bc9ad994ba00e440a8aa5c9ef0ec67d5cb5e5cb0cc7f8b744a35b389cc470"
dependencies = [
 "android_system_properties",
 "core-foundation-sys",
 "iana-time-zone-haiku",
 "js-sys",
 "log",
 "wasm-bindgen",
 "windows-core",
]

[[package]]
name = "iana-time-zone-haiku"
version = "0.1.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f31827a206f56af32e590ba56d5d2d085f558508192593743f16b2306495269f"
dependencies = [
 "cc",
]

[[package]]
name = "ico"
version = "0.6.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d75e94d66081e4d8dcd098bd8dc5254800fea14a26389b298410158d834de167"
dependencies = [
 "byteorder",
 "png",
]

[[package]]
name = "icu_collections"
version = "2.4.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "fe090a42a0d3140fed8c63263ed1fecc02422cb2f4bfe55cd8de2de1b8e105dd"
dependencies = [
 "displaydoc",
 "potential_utf",
 "utf8_iter",
 "yoke",
 "zerofrom",
 "zerovec",
]

[[package]]
name = "icu_locale_core"
version = "2.4.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "25d29b57c17c6528d0dc4c2141cfa2d08200465acb537a3909c8b9b8a4a984c0"
dependencies = [
 "displaydoc",
 "litemap",
 "tinystr",
 "writeable",
 "zerovec",
]

[[package]]
name = "icu_normalizer"
version = "2.4.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "404a3b8c486f205c87fe7f23ab6894d84a4ad76d6e4671ae1981ba7def87c599"
dependencies = [
 "icu_collections",
 "icu_normalizer_data",
 "icu_properties",
 "icu_provider",
 "smallvec",
 "zerovec",
]

[[package]]
name = "icu_normalizer_data"
version = "2.4.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "20f0088bfb7441f7a37fa0c9e20cb1e9cba1cac6b9ce8cd2a6dc44294f8e8cbc"

[[package]]
name = "icu_properties"
version = "2.4.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "2ea83d991c56158f7cf898bf86436c1dfe7c07ee82fe88951f2695c9f37a379f"
dependencies = [
 "displaydoc",
 "icu_collections",
 "icu_locale_core",
 "icu_properties_data",
 "icu_provider",
 "zerotrie",
 "zerovec",
]

[[package]]
name = "icu_properties_data"
version = "2.4.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b98f29af82d02b163fe50161388350e743bb3107cc8e8c2f7314cb505faddfcf"

[[package]]
name = "icu_provider"
version = "2.4.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "413099315636c588ee8f011190b329b971a09a8fae9d157e01dcae8379468514"
dependencies = [
 "displaydoc",
 "icu_locale_core",
 "writeable",
 "yoke",
 "zerofrom",
 "zerotrie",
 "zerovec",
]

[[package]]
name = "ident_case"
version = "1.0.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b9e0384b61958566e926dc50660321d12159025e767c18e043daf26b70104c39"

[[package]]
name = "idna"
version = "1.1.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3b0875f23caa03898994f6ddc501886a45c7d3d62d04d2d90788d47be1b1e4de"
dependencies = [
 "idna_adapter",
 "smallvec",
 "utf8_iter",
]

[[package]]
name = "idna_adapter"
version = "1.2.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cb68373c0d6620ef8105e855e7745e18b0d00d3bdb07fb532e434244cdb9a714"
dependencies = [
 "icu_normalizer",
 "icu_properties",
]

[[package]]
name = "indexmap"
version = "1.9.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "bd070e393353796e801d209ad339e89596eb4c8d430d18ede6a1cced8fafbd99"
dependencies = [
 "autocfg",
 "hashbrown 0.12.3",
 "serde",
]

[[package]]
name = "indexmap"
version = "2.14.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cc4e190f5d26ca7051642629da2c52fc03bde85a03197c99408dcd291734c855"
dependencies = [
 "equivalent",
 "hashbrown 0.17.1",
 "serde",
 "serde_core",
]

[[package]]
name = "infer"
version = "0.22.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f4200d433cbd5178df7797c9c2e75b348b728e39631cf14520d1e2fc424201f4"
dependencies = [
 "cfb",
]

[[package]]
name = "ipnet"
version = "2.12.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "791930b43c0d5973160d90a8f3894509f2b273430f5c5c73b668636d0287c5c0"

[[package]]
name = "is-docker"
version = "0.2.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "928bae27f42bc99b60d9ac7334e3a21d10ad8f1835a4e12ec3ec0464765ed1b3"
dependencies = [
 "once_cell",
]

[[package]]
name = "is-wsl"
version = "0.4.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "173609498df190136aa7dea1a91db051746d339e18476eed5ca40521f02d7aa5"
dependencies = [
 "is-docker",
 "once_cell",
]

[[package]]
name = "itoa"
version = "1.0.19"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3bd1574e617a9a6c1f8f8181bd7e841e1f20e4277607ef28945765188d6284d4"

[[package]]
name = "javascriptcore-rs"
version = "1.1.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ca5671e9ffce8ffba57afc24070e906da7fc4b1ba66f2cabebf61bf2ea257fcc"
dependencies = [
 "bitflags 1.3.2",
 "glib",
 "javascriptcore-rs-sys",
]

[[package]]
name = "javascriptcore-rs-sys"
version = "1.1.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "af1be78d14ffa4b75b66df31840478fef72b51f8c2465d4ca7c194da9f7a5124"
dependencies = [
 "glib-sys",
 "gobject-sys",
 "libc",
 "system-deps",
]

[[package]]
name = "jiff"
version = "0.2.45"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "34e6d07feb763c647199bd9072192b9639da3b5ffde49afd73c08b1d5ceb1469"
dependencies = [
 "jiff-core",
 "jiff-static",
 "jiff-tzdb-platform",
 "log",
 "portable-atomic",
 "portable-atomic-util",
 "serde_core",
 "windows-link",
]

[[package]]
name = "jiff-core"
version = "0.1.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3c0dfb57e3485bee979b355302992ea9c38331a94f6ccce72c2bf0077d6c9310"
dependencies = [
 "log",
]

[[package]]
name = "jiff-static"
version = "0.2.45"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d93b8289f811027d18f228ae410cbadc766419d50b79185fa0084b10cc172d03"
dependencies = [
 "jiff-core",
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "jiff-tzdb"
version = "0.1.10"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0980fca2cc272465bd60e82397607ba9f33add9e48defd77923301bbd03808f2"

[[package]]
name = "jiff-tzdb-platform"
version = "0.1.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "875a5a69ac2bab1a891711cf5eccbec1ce0341ea805560dcd90b7a2e925132e8"
dependencies = [
 "jiff-tzdb",
]

[[package]]
name = "jni"
version = "0.21.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1a87aa2bb7d2af34197c04845522473242e1aa17c12f4935d5856491a7fb8c97"
dependencies = [
 "cesu8",
 "cfg-if",
 "combine",
 "jni-sys 0.3.1",
 "log",
 "thiserror 1.0.69",
 "walkdir",
 "windows-sys 0.45.0",
]

[[package]]
name = "jni-sys"
version = "0.3.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "41a652e1f9b6e0275df1f15b32661cf0d4b78d4d87ddec5e0c3c20f097433258"
dependencies = [
 "jni-sys 0.4.1",
]

[[package]]
name = "jni-sys"
version = "0.4.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c6377a88cb3910bee9b0fa88d4f42e1d2da8e79915598f65fb0c7ee14c878af2"
dependencies = [
 "jni-sys-macros",
]

[[package]]
name = "jni-sys-macros"
version = "0.4.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "38c0b942f458fe50cdac086d2f946512305e5631e720728f2a61aabcd47a6264"
dependencies = [
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "js-sys"
version = "0.3.107"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8dc09d2154098bbf4ef54eab6b117a3c24cbbffe94046b16ee6d6d4510584d3a"
dependencies = [
 "cfg-if",
 "futures-util",
 "wasm-bindgen",
]

[[package]]
name = "json-patch"
version = "4.2.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7421438de105a0827e44fadd05377727847d717c80ce29a229f85fd04c427b72"
dependencies = [
 "jsonptr",
 "serde",
 "serde_json",
 "thiserror 2.0.21",
]

[[package]]
name = "jsonptr"
version = "0.7.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a5a3cc660ba5d72bce0b3bb295bf20847ccbb40fd423f3f05b61273672e561fe"
dependencies = [
 "serde",
 "serde_json",
]

[[package]]
name = "keyboard-types"
version = "0.8.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0fbe853b403ae61a04233030ae8a79d94975281ed9770a1f9e246732b534b28d"
dependencies = [
 "bitflags 2.13.2",
 "serde",
]

[[package]]
name = "libappindicator"
version = "0.9.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "03589b9607c868cc7ae54c0b2a22c8dc03dd41692d48f2d7df73615c6a95dc0a"
dependencies = [
 "glib",
 "gtk",
 "gtk-sys",
 "libappindicator-sys",
 "log",
]

[[package]]
name = "libappindicator-sys"
version = "0.9.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "6e9ec52138abedcc58dc17a7c6c0c00a2bdb4f3427c7f63fa97fd0d859155caf"
dependencies = [
 "gtk-sys",
 "libloading",
 "once_cell",
]

[[package]]
name = "libc"
version = "0.2.191"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "65cd87c9a6d60536580b316ad985726104730a5151c99845f2490428ef91240a"

[[package]]
name = "libdbus-sys"
version = "0.2.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "328c4789d42200f1eeec05bd86c9c13c7f091d2ba9a6ea35acdf51f31bc0f043"
dependencies = [
 "pkg-config",
]

[[package]]
name = "libloading"
version = "0.7.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b67380fd3b2fbe7527a606e18729d21c6f3951633d0500574c4dc22d2d638b9f"
dependencies = [
 "cfg-if",
 "winapi",
]

[[package]]
name = "libredox"
version = "0.1.25"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "61ff90caf6077a803a240f62fdbe88645a890bbca49ef8174c3cb0404362171d"
dependencies = [
 "libc",
]

[[package]]
name = "link-section"
version = "0.19.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4d9aae57673c1a235149777a74d152f3210ebd3e3b13346d2cdb6809e566bd3c"

[[package]]
name = "linux-raw-sys"
version = "0.12.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "32a66949e030da00e8c7d4434b251670a91556f4144941d37452769c25d58a53"

[[package]]
name = "litemap"
version = "0.8.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "47d9d19d1d6efa0109d2f65ff4c85cddd50bd572e5a00127ab10987290bcefae"

[[package]]
name = "lock_api"
version = "0.4.14"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "224399e74b87b5f3557511d98dff8b14089b3dadafcab6bb93eab67d3aace965"
dependencies = [
 "scopeguard",
]

[[package]]
name = "log"
version = "0.4.35"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "5d15f86d12da44cd8d4ec3c73984537eb7f4cadcb9776a575a0a8a05ca11005c"

[[package]]
name = "markup5ever"
version = "0.39.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7122d987ec5f704ee56f6e5b41a7d93722e9aae27ae07cafa4036c4d3f9757de"
dependencies = [
 "log",
 "tendril",
 "web_atoms 0.2.6",
]

[[package]]
name = "markup5ever"
version = "0.40.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0ab3dc68ac4a0f5719e560136778c1ee716e296030d75dbd4484e37e39e3a842"
dependencies = [
 "log",
 "tendril",
 "web_atoms 0.3.0",
]

[[package]]
name = "memchr"
version = "2.8.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cf8baf1c55e62ffcace7a9f06f4bd9cd3f0c4beb022d3b367256b91b87513d98"

[[package]]
name = "memoffset"
version = "0.9.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "488016bfae457b036d996092f6cb448677611ce4449e970ceaf42695203f218a"
dependencies = [
 "autocfg",
]

[[package]]
name = "mime"
version = "0.3.18"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d5848f5a9e8117cf94f2f90faac24a87ff81600ff8628c1e3deaab572e76bfa1"

[[package]]
name = "miniz_oxide"
version = "0.8.9"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1fa76a2c86f704bdb222d66965fb3d63269ce38518b83cb0575fca855ebb6316"
dependencies = [
 "adler2",
 "simd-adler32",
]

[[package]]
name = "miniz_oxide"
version = "0.9.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b63fbc4a50860e98e7b2aa7804ded1db5cbc3aff9193adaff57a6931bf7c4b4c"
dependencies = [
 "adler2",
 "simd-adler32",
]

[[package]]
name = "mio"
version = "1.2.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "20521a903f02b0a573cd6840e9d0a5a0cc043d361fe924092cd70f8556cc9c4a"
dependencies = [
 "libc",
 "wasi",
 "windows-sys 0.61.2",
]

[[package]]
name = "money-management"
version = "0.1.0"
dependencies = [
 "serde",
 "serde_json",
 "tauri",
 "tauri-build",
 "tauri-plugin-opener",
]

[[package]]
name = "muda"
version = "0.20.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cca139e57da4383727f189e43e66e84fa372347027fc996f9f1a007ec0a37996"
dependencies = [
 "crossbeam-channel",
 "dpi",
 "gtk",
 "keyboard-types",
 "objc2",
 "objc2-app-kit",
 "objc2-core-foundation",
 "objc2-foundation",
 "once_cell",
 "png",
 "serde",
 "thiserror 2.0.21",
 "windows-sys 0.61.2",
]

[[package]]
name = "ndk"
version = "0.9.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c3f42e7bbe13d351b6bead8286a43aac9534b82bd3cc43e47037f012ebfd62d4"
dependencies = [
 "bitflags 2.13.2",
 "jni-sys 0.3.1",
 "log",
 "ndk-sys",
 "num_enum",
 "raw-window-handle",
 "thiserror 1.0.69",
]

[[package]]
name = "ndk-context"
version = "0.1.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "27b02d87554356db9e9a873add8782d4ea6e3e58ea071a9adb9a2e8ddb884a8b"

[[package]]
name = "ndk-sys"
version = "0.6.0+11769913"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ee6cda3051665f1fb8d9e08fc35c96d5a244fb1be711a03b71118828afc9a873"
dependencies = [
 "jni-sys 0.3.1",
]

[[package]]
name = "new_debug_unreachable"
version = "1.0.6"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "650eef8c711430f1a879fdd01d4745a7deea475becfb90269c06775983bbf086"

[[package]]
name = "num-conv"
version = "0.2.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "521739c6d2bac4aa25192232afe6841231376b2b26d4d9fae5ecf8ca5772e441"

[[package]]
name = "num-traits"
version = "0.2.19"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "071dfc062690e90b734c0b2273ce72ad0ffa95f0c74596bc250dcfd960262841"
dependencies = [
 "autocfg",
]

[[package]]
name = "num_enum"
version = "0.7.6"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "5d0bca838442ec211fa11de3a8b0e0e8f3a4522575b5c4c06ed722e005036f26"
dependencies = [
 "num_enum_derive",
 "rustversion",
]

[[package]]
name = "num_enum_derive"
version = "0.7.6"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "680998035259dcfcafe653688bf2aa6d3e2dc05e98be6ab46afb089dc84f1df8"
dependencies = [
 "proc-macro-crate 3.5.0",
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "objc2"
version = "0.6.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "08849bbd4767dfae9457696856ae1c84fe4e0281bbe4a7abff2d0e06fb7981f8"
dependencies = [
 "objc2-encode",
 "objc2-exception-helper",
]

[[package]]
name = "objc2-app-kit"
version = "0.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d49e936b501e5c5bf01fda3a9452ff86dc3ea98ad5f283e1455153142d97518c"
dependencies = [
 "bitflags 2.13.2",
 "block2",
 "objc2",
 "objc2-core-foundation",
 "objc2-foundation",
 "objc2-quartz-core",
]

[[package]]
name = "objc2-cloud-kit"
version = "0.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "73ad74d880bb43877038da939b7427bba67e9dd42004a18b809ba7d87cee241c"
dependencies = [
 "bitflags 2.13.2",
 "objc2",
 "objc2-foundation",
]

[[package]]
name = "objc2-core-data"
version = "0.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0b402a653efbb5e82ce4df10683b6b28027616a2715e90009947d50b8dd298fa"
dependencies = [
 "objc2",
 "objc2-foundation",
]

[[package]]
name = "objc2-core-foundation"
version = "0.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "2a180dd8642fa45cdb7dd721cd4c11b1cadd4929ce112ebd8b9f5803cc79d536"
dependencies = [
 "bitflags 2.13.2",
 "dispatch2",
 "objc2",
]

[[package]]
name = "objc2-core-graphics"
version = "0.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e022c9d066895efa1345f8e33e584b9f958da2fd4cd116792e15e07e4720a807"
dependencies = [
 "bitflags 2.13.2",
 "dispatch2",
 "objc2",
 "objc2-core-foundation",
 "objc2-io-surface",
]

[[package]]
name = "objc2-core-image"
version = "0.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e5d563b38d2b97209f8e861173de434bd0214cf020e3423a52624cd1d989f006"
dependencies = [
 "objc2",
 "objc2-foundation",
]

[[package]]
name = "objc2-core-location"
version = "0.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ca347214e24bc973fc025fd0d36ebb179ff30536ed1f80252706db19ee452009"
dependencies = [
 "objc2",
 "objc2-foundation",
]

[[package]]
name = "objc2-core-text"
version = "0.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0cde0dfb48d25d2b4862161a4d5fcc0e3c24367869ad306b0c9ec0073bfed92d"
dependencies = [
 "bitflags 2.13.2",
 "objc2",
 "objc2-core-foundation",
 "objc2-core-graphics",
]

[[package]]
name = "objc2-encode"
version = "4.1.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ef25abbcd74fb2609453eb695bd2f860d389e457f67dc17cafc8b8cbc89d0c33"

[[package]]
name = "objc2-exception-helper"
version = "0.1.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c7a1c5fbb72d7735b076bb47b578523aedc40f3c439bea6dfd595c089d79d98a"
dependencies = [
 "cc",
]

[[package]]
name = "objc2-foundation"
version = "0.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e3e0adef53c21f888deb4fa59fc59f7eb17404926ee8a6f59f5df0fd7f9f3272"
dependencies = [
 "bitflags 2.13.2",
 "block2",
 "objc2",
 "objc2-core-foundation",
]

[[package]]
name = "objc2-io-surface"
version = "0.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "180788110936d59bab6bd83b6060ffdfffb3b922ba1396b312ae795e1de9d81d"
dependencies = [
 "bitflags 2.13.2",
 "objc2",
 "objc2-core-foundation",
]

[[package]]
name = "objc2-quartz-core"
version = "0.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "96c1358452b371bf9f104e21ec536d37a650eb10f7ee379fff67d2e08d537f1f"
dependencies = [
 "bitflags 2.13.2",
 "objc2",
 "objc2-core-foundation",
 "objc2-foundation",
]

[[package]]
name = "objc2-ui-kit"
version = "0.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d87d638e33c06f577498cbcc50491496a3ed4246998a7fbba7ccb98b1e7eab22"
dependencies = [
 "bitflags 2.13.2",
 "block2",
 "objc2",
 "objc2-cloud-kit",
 "objc2-core-data",
 "objc2-core-foundation",
 "objc2-core-graphics",
 "objc2-core-image",
 "objc2-core-location",
 "objc2-core-text",
 "objc2-foundation",
 "objc2-quartz-core",
 "objc2-user-notifications",
]

[[package]]
name = "objc2-user-notifications"
version = "0.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9df9128cbbfef73cda168416ccf7f837b62737d748333bfe9ab71c245d76613e"
dependencies = [
 "objc2",
 "objc2-foundation",
]

[[package]]
name = "objc2-web-kit"
version = "0.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b2e5aaab980c433cf470df9d7af96a7b46a9d892d521a2cbbb2f8a4c16751e7f"
dependencies = [
 "bitflags 2.13.2",
 "block2",
 "objc2",
 "objc2-app-kit",
 "objc2-core-foundation",
 "objc2-foundation",
]

[[package]]
name = "once_cell"
version = "1.21.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9f7c3e4beb33f85d45ae3e3a1792185706c8e16d043238c593331cc7cd313b50"

[[package]]
name = "open"
version = "5.4.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8d8c8b8e725ad26404d6896eb2f064294a0a7b4f1d9120210d85544684c4ca95"
dependencies = [
 "dunce",
 "is-wsl",
 "libc",
]

[[package]]
name = "option-ext"
version = "0.2.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "04744f49eae99ab78e0d5c0b603ab218f515ea8cfe5a456d7629ad883a3b6e7d"

[[package]]
name = "ordered-stream"
version = "0.2.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9aa2b01e1d916879f73a53d01d1d6cee68adbb31d6d9177a8cfce093cced1d50"
dependencies = [
 "futures-core",
 "pin-project-lite",
]

[[package]]
name = "pango"
version = "0.18.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7ca27ec1eb0457ab26f3036ea52229edbdb74dee1edd29063f5b9b010e7ebee4"
dependencies = [
 "gio",
 "glib",
 "libc",
 "once_cell",
 "pango-sys",
]

[[package]]
name = "pango-sys"
version = "0.18.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "436737e391a843e5933d6d9aa102cb126d501e815b83601365a948a518555dc5"
dependencies = [
 "glib-sys",
 "gobject-sys",
 "libc",
 "system-deps",
]

[[package]]
name = "parking"
version = "2.2.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f38d5652c16fde515bb1ecef450ab0f6a219d619a7274976324d5e377f7dceba"

[[package]]
name = "parking_lot"
version = "0.12.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "93857453250e3077bd71ff98b6a65ea6621a19bb0f559a85248955ac12c45a1a"
dependencies = [
 "lock_api",
 "parking_lot_core",
]

[[package]]
name = "parking_lot_core"
version = "0.9.12"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "2621685985a2ebf1c516881c026032ac7deafcda1a2c9b7850dc81e3dfcb64c1"
dependencies = [
 "cfg-if",
 "libc",
 "redox_syscall",
 "smallvec",
 "windows-link",
]

[[package]]
name = "percent-encoding"
version = "2.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9b4f627cb1b25917193a259e49bdad08f671f8d9708acfd5fe0a8c1455d87220"

[[package]]
name = "phf"
version = "0.13.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c1562dc717473dbaa4c1f85a36410e03c047b2e7df7f45ee938fbef64ae7fadf"
dependencies = [
 "phf_macros 0.13.1",
 "phf_shared 0.13.1",
 "serde",
]

[[package]]
name = "phf"
version = "0.14.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "010378780309880b08997fae13be7834dba947d36393bd372f2b1556deb2a2f6"
dependencies = [
 "phf_macros 0.14.0",
 "phf_shared 0.14.0",
 "serde",
]

[[package]]
name = "phf_codegen"
version = "0.13.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "49aa7f9d80421bca176ca8dbfebe668cc7a2684708594ec9f3c0db0805d5d6e1"
dependencies = [
 "phf_generator 0.13.1",
 "phf_shared 0.13.1",
]

[[package]]
name = "phf_codegen"
version = "0.14.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "41b585a510fb76fdebead6897982ef2a03a21d8e6cbcca904999742a4afc6ffe"
dependencies = [
 "phf_generator 0.14.0",
 "phf_shared 0.14.0",
]

[[package]]
name = "phf_generator"
version = "0.13.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "135ace3a761e564ec88c03a77317a7c6b80bb7f7135ef2544dbe054243b89737"
dependencies = [
 "fastrand",
 "phf_shared 0.13.1",
]

[[package]]
name = "phf_generator"
version = "0.14.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "aeb62e0959d5a1bebc965f4d15d9e2b7cea002b6b0f5ba8cde6cc26738467100"
dependencies = [
 "fastrand",
 "phf_shared 0.14.0",
]

[[package]]
name = "phf_macros"
version = "0.13.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "812f032b54b1e759ccd5f8b6677695d5268c588701effba24601f6932f8269ef"
dependencies = [
 "phf_generator 0.13.1",
 "phf_shared 0.13.1",
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "phf_macros"
version = "0.14.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "5fa8d0ca26d424d27630da600c6624696e7dec8bf7b3b492b383c5dc49e5e085"
dependencies = [
 "phf_generator 0.14.0",
 "phf_shared 0.14.0",
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "phf_shared"
version = "0.13.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e57fef6bc5981e38c2ce2d63bfa546861309f875b8a75f092d1d54ae2d64f266"
dependencies = [
 "siphasher",
]

[[package]]
name = "phf_shared"
version = "0.14.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c6fd9027e2d9319be6349febd1db4e8d02aa544921200c9b777720ac34a3aa89"
dependencies = [
 "siphasher",
]

[[package]]
name = "pin-project-lite"
version = "0.2.17"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a89322df9ebe1c1578d689c92318e070967d1042b512afbe49518723f4e6d5cd"

[[package]]
name = "piper"
version = "0.2.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c835479a4443ded371d6c535cbfd8d31ad92c5d23ae9770a61bc155e4992a3c1"
dependencies = [
 "atomic-waker",
 "fastrand",
 "futures-io",
]

[[package]]
name = "pkg-config"
version = "0.3.34"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f6b464fbc74e149a392436b17d523f769e057cb6877f6a5c4618bc6f11800548"

[[package]]
name = "plist"
version = "1.10.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "327a4cb2ad49dc48adfdc9da89e22c64d488b508c67a044d71ba729e4521a285"
dependencies = [
 "base64 0.23.1",
 "indexmap 2.14.2",
 "quick-xml",
 "serde",
 "time",
]

[[package]]
name = "png"
version = "0.18.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "60769b8b31b2a9f263dae2776c37b1b28ae246943cf719eb6946a1db05128a61"
dependencies = [
 "bitflags 2.13.2",
 "crc32fast",
 "fdeflate",
 "flate2",
 "miniz_oxide 0.8.9",
]

[[package]]
name = "polling"
version = "3.11.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "5d0e4f59085d47d8241c88ead0f274e8a0cb551f3625263c05eb8dd897c34218"
dependencies = [
 "cfg-if",
 "concurrent-queue",
 "hermit-abi",
 "pin-project-lite",
 "rustix",
 "windows-sys 0.61.2",
]

[[package]]
name = "portable-atomic"
version = "1.15.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "05c8b63e8d9609db387f0324918f81d68fe27748f084ef092fb35954d0539a85"

[[package]]
name = "portable-atomic-util"
version = "0.2.8"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "10ab3eb7f3becc3a1cbc4f2c6f20267996cfc1a6467a873763411b136a122715"
dependencies = [
 "portable-atomic",
]

[[package]]
name = "potential_utf"
version = "0.1.6"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d83eb9bc6d8e5cf568e7a1101d60ee05e81ed50ea106026f3d18deeb046d7661"
dependencies = [
 "zerovec",
]

[[package]]
name = "powerfmt"
version = "0.2.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4a6394b9e965e73d0a289ee54f589087e2c676aedf60885baf52c76b771e4958"

[[package]]
name = "precomputed-hash"
version = "0.1.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "925383efa346730478fb4838dbe9137d2a47675ad789c546d150a6e1dd4ab31c"

[[package]]
name = "proc-macro-crate"
version = "1.3.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7f4c021e1093a56626774e81216a4ce732a735e5bad4868a03f3ed65ca0c3919"
dependencies = [
 "once_cell",
 "toml_edit 0.19.15",
]

[[package]]
name = "proc-macro-crate"
version = "2.0.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b00f26d3400549137f92511a46ac1cd8ce37cb5598a96d382381458b992a5d24"
dependencies = [
 "toml_datetime 0.6.3",
 "toml_edit 0.20.2",
]

[[package]]
name = "proc-macro-crate"
version = "3.5.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e67ba7e9b2b56446f1d419b1d807906278ffa1a658a8a5d8a39dcb1f5a78614f"
dependencies = [
 "toml_edit 0.25.19+spec-1.1.0",
]

[[package]]
name = "proc-macro-error"
version = "1.0.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "da25490ff9892aab3fcf7c36f08cfb902dd3e71ca0f9f9517bea02a73a5ce38c"
dependencies = [
 "proc-macro-error-attr",
 "proc-macro2",
 "quote",
 "syn 1.0.109",
 "version_check",
]

[[package]]
name = "proc-macro-error-attr"
version = "1.0.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a1be40180e52ecc98ad80b184934baf3d0d29f979574e439af5a55274b35f869"
dependencies = [
 "proc-macro2",
 "quote",
 "version_check",
]

[[package]]
name = "proc-macro2"
version = "1.0.107"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "985e7ec9bb745e6ce6535b544d84d6cd6f7ad8bd711c398938ae983b91a766d9"
dependencies = [
 "unicode-ident",
]

[[package]]
name = "quick-xml"
version = "0.42.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "41b1177fdf999d2321d3fb46ff47159d9c1fb9ad66a4879f8c50a0b504615e9b"
dependencies = [
 "memchr",
]

[[package]]
name = "quote"
version = "1.0.47"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1fbf4db142a473a8d80c26bbf18454ed458bf8d26c8219c331daecfdbd079001"
dependencies = [
 "proc-macro2",
]

[[package]]
name = "r-efi"
version = "5.3.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "69cdb34c158ceb288df11e18b4bd39de994f6657d83847bdffdbd7f346754b0f"

[[package]]
name = "r-efi"
version = "6.0.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f8dcc9c7d52a811697d2151c701e0d08956f92b0e24136cf4cf27b57a6a0d9bf"

[[package]]
name = "raw-window-handle"
version = "0.6.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "20675572f6f24e9e76ef639bc5552774ed45f1c30e2951e1e99c59888861c539"

[[package]]
name = "redox_syscall"
version = "0.5.18"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ed2bf2547551a7053d6fdfafda3f938979645c44812fbfcda098faae3f1a362d"
dependencies = [
 "bitflags 2.13.2",
]

[[package]]
name = "redox_users"
version = "0.5.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "60dc65c0ff1a7ae1294b0c67b9f14baf70b644404010370171787bfac1038fc0"
dependencies = [
 "libredox",
 "thiserror 2.0.21",
]

[[package]]
name = "ref-cast"
version = "1.0.27"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7e440fb4e4b4147295338efb76001ab9e4efc0e5839df2c47fc5ac2381d365c3"
dependencies = [
 "ref-cast-impl",
]

[[package]]
name = "ref-cast-impl"
version = "1.0.27"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "92ecd8964f8453721699a1ed72037b0db49ce2f5a5138486ee89bed6f67cdf3a"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 3.0.10",
]

[[package]]
name = "regex"
version = "1.13.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f020237b6c8eed93db2e2cb53c00c60a8e1bc73da7d073199a1180401450218d"
dependencies = [
 "aho-corasick",
 "memchr",
 "regex-automata",
 "regex-syntax",
]

[[package]]
name = "regex-automata"
version = "0.4.18"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ad8553b9b26413251cbf30e620595c7a41b3887f03da04579c0e6b0d6a06b4b2"
dependencies = [
 "aho-corasick",
 "memchr",
 "regex-syntax",
]

[[package]]
name = "regex-syntax"
version = "0.8.11"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d6f6ff9a378485b298a5286656da665ba74413d36db0979633275d2e708145d4"

[[package]]
name = "reqwest"
version = "0.13.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "16a1cfa75cc186dd73d5818e510e042e40927bccc9c236b061cea97e1eb08029"
dependencies = [
 "base64 0.23.1",
 "bytes",
 "futures-core",
 "futures-util",
 "http",
 "http-body",
 "http-body-util",
 "hyper",
 "hyper-util",
 "js-sys",
 "log",
 "percent-encoding",
 "pin-project-lite",
 "serde",
 "serde_json",
 "sync_wrapper",
 "tokio",
 "tokio-util",
 "tower",
 "tower-http",
 "tower-service",
 "url",
 "wasm-bindgen",
 "wasm-bindgen-futures",
 "wasm-streams",
 "web-sys",
]

[[package]]
name = "rustc-hash"
version = "2.1.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "6b1e7f9a428571be2dc5bc0505c13fb6bf936822b894ec87abf8a08a4e51742d"

[[package]]
name = "rustc_version"
version = "0.4.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cfcb3a22ef46e85b45de6ee7e79d063319ebb6594faafcf1c225ea92ab6e9b92"
dependencies = [
 "semver",
]

[[package]]
name = "rustix"
version = "1.1.6"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e5e76742e5294153d4dde1207dbec5bdd81eef6fabdc0d2118babadabfd858aa"
dependencies = [
 "bitflags 2.13.2",
 "errno",
 "libc",
 "linux-raw-sys",
 "windows-sys 0.61.2",
]

[[package]]
name = "rustversion"
version = "1.0.23"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cf54715a573b99ac80df0bc206da022bcd442c974952c7b9720069370852e21f"

[[package]]
name = "same-file"
version = "1.0.6"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "93fc1dc3aaa9bfed95e02e6eadabb4baf7e3078b0bd1b4d7b6b0b68378900502"
dependencies = [
 "winapi-util",
]

[[package]]
name = "schemars"
version = "0.8.22"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3fbf2ae1b8bc8e02df939598064d22402220cd5bbcca1c76f7d6a310974d5615"
dependencies = [
 "dyn-clone",
 "indexmap 1.9.3",
 "schemars_derive",
 "serde",
 "serde_json",
 "url",
 "uuid",
]

[[package]]
name = "schemars"
version = "0.9.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4cd191f9397d57d581cddd31014772520aa448f65ef991055d7f61582c65165f"
dependencies = [
 "dyn-clone",
 "ref-cast",
 "serde",
 "serde_json",
]

[[package]]
name = "schemars"
version = "1.2.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ab508826f74a77ca9d5aba6ff19b522583ee3eaf28a19384ff3d0e5835fadf6e"
dependencies = [
 "dyn-clone",
 "ref-cast",
 "serde",
 "serde_json",
]

[[package]]
name = "schemars_derive"
version = "0.8.22"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "32e265784ad618884abaea0600a9adf15393368d840e0222d101a072f3f7534d"
dependencies = [
 "proc-macro2",
 "quote",
 "serde_derive_internals",
 "syn 2.0.119",
]

[[package]]
name = "scopeguard"
version = "1.2.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "94143f37725109f92c262ed2cf5e59bce7498c01bcc1502d7b9afe439a4e9f49"

[[package]]
name = "selectors"
version = "0.38.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8adfa1c298912827b8a28b223b3b874357397ae706e6190acd9bf28cee99114d"
dependencies = [
 "bitflags 2.13.2",
 "cssparser 0.37.0",
 "derive_more",
 "log",
 "new_debug_unreachable",
 "phf 0.13.1",
 "phf_codegen 0.13.1",
 "precomputed-hash",
 "rustc-hash",
 "servo_arc 0.4.3",
 "smallvec",
]

[[package]]
name = "selectors"
version = "0.41.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8322aebea94a6cc288ff884e8a49bdbceef60206c400c6c46d22e62fc4fd91a6"
dependencies = [
 "bitflags 2.13.2",
 "cssparser 0.38.0",
 "derive_more",
 "log",
 "new_debug_unreachable",
 "precomputed-hash",
 "rustc-hash",
 "servo_arc 0.5.0",
 "smallvec",
]

[[package]]
name = "semver"
version = "1.0.28"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8a7852d02fc848982e0c167ef163aaff9cd91dc640ba85e263cb1ce46fae51cd"
dependencies = [
 "serde",
 "serde_core",
]

[[package]]
name = "serde"
version = "1.0.229"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4148590afebada386688f18773da617792bf2ef03ffc1e4cbd2b1d45b023e0ba"
dependencies = [
 "serde_core",
 "serde_derive",
]

[[package]]
name = "serde-untagged"
version = "0.1.9"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f9faf48a4a2d2693be24c6289dbe26552776eb7737074e6722891fadbe6c5058"
dependencies = [
 "erased-serde",
 "serde",
 "serde_core",
 "typeid",
]

[[package]]
name = "serde_core"
version = "1.0.229"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "67dca2c9c51e58a4791a4b1ed58308b39c64224d349a935ab5039aa360942a48"
dependencies = [
 "serde_derive",
]

[[package]]
name = "serde_derive"
version = "1.0.229"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e7a5d71263a5a7d47b41f6b3f06ba276f10cc18b0931f1799f710578e2309348"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 3.0.10",
]

[[package]]
name = "serde_derive_internals"
version = "0.29.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "18d26a20a969b9e3fdf2fc2d9f21eda6c40e2de84c9408bb5d3b05d499aae711"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "serde_json"
version = "1.0.154"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e7e9cc8b1b85264074fbcc02a88680c4096b1e47df8f739dceb03bf482f04bd6"
dependencies = [
 "itoa",
 "memchr",
 "serde",
 "serde_core",
 "zmij",
]

[[package]]
name = "serde_repr"
version = "0.1.21"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8d3b1629de253c70a0508c3899572da79ca359fdab27c7920ff00406df418906"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 3.0.10",
]

[[package]]
name = "serde_spanned"
version = "0.6.9"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "bf41e0cfaf7226dca15e8197172c295a782857fcb97fad1808a166870dee75a3"
dependencies = [
 "serde",
]

[[package]]
name = "serde_spanned"
version = "1.1.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9c187e0a369471c550af028cba56d4f4fa2a489ad28151ae95a4d340a2a8b782"
dependencies = [
 "serde_core",
]

[[package]]
name = "serde_with"
version = "3.24.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "df9adc193c780ef8f159aee8b61e2d5801aaa555e6eb0947fe45530ec506296f"
dependencies = [
 "base64 0.23.1",
 "bs58",
 "chrono",
 "hex",
 "indexmap 1.9.3",
 "indexmap 2.14.2",
 "jiff",
 "schemars 0.9.0",
 "schemars 1.2.3",
 "serde_core",
 "serde_json",
 "serde_with_macros",
 "time",
]

[[package]]
name = "serde_with_macros"
version = "3.24.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3e17bbc68e28663bbbb90df47e058aa7eda4fb445b89fe70457bb94fbccf6e49"
dependencies = [
 "darling",
 "proc-macro2",
 "quote",
 "syn 3.0.10",
]

[[package]]
name = "serialize-to-javascript"
version = "0.1.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "04f3666a07a197cdb77cdf306c32be9b7f598d7060d50cfd4d5aa04bfd92f6c5"
dependencies = [
 "serde",
 "serde_json",
 "serialize-to-javascript-impl",
]

[[package]]
name = "serialize-to-javascript-impl"
version = "0.1.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "772ee033c0916d670af7860b6e1ef7d658a4629a6d0b4c8c3e67f09b3765b75d"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "servo_arc"
version = "0.4.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "170fb83ab34de17dc69aa7c67482b22218ddb85da56546f9bd6b929e32a05930"
dependencies = [
 "stable_deref_trait",
]

[[package]]
name = "servo_arc"
version = "0.5.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b4eceb519ec34d8290aaf6e46f435102f2bfa63f22b05a144fb16ab266d3b198"
dependencies = [
 "stable_deref_trait",
]

[[package]]
name = "sha2"
version = "0.10.9"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a7507d819769d01a365ab707794a4084392c824f54a7a6a7862f8c3d0892b283"
dependencies = [
 "cfg-if",
 "cpufeatures",
 "digest",
]

[[package]]
name = "shlex"
version = "2.0.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f8fadd59c855ef2080decdef8ff161eb6661b86933c9d82e5ba29dc602a55aba"

[[package]]
name = "signal-hook-registry"
version = "1.4.8"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c4db69cba1110affc0e9f7bcd48bbf87b3f4fc7c61fc9155afd4c469eb3d6c1b"
dependencies = [
 "errno",
 "libc",
]

[[package]]
name = "simd-adler32"
version = "0.3.10"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3a219298ac11a56ea9a6d2120044824d6f01aeb034955e7af7bc16858527deea"

[[package]]
name = "siphasher"
version = "1.0.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "33f4fe9184a62d842c9ef383018f3306d8ba224fd9d836f56d7288308847c256"

[[package]]
name = "slab"
version = "0.4.12"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0c790de23124f9ab44544d7ac05d60440adc586479ce501c1d6d7da3cd8c9cf5"

[[package]]
name = "smallvec"
version = "1.16.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "149309498a5f7334b12ddae0cad8aba81ce785fe91755068867e017cf98fee46"

[[package]]
name = "socket2"
version = "0.6.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c3d1e2c7f27f8d4cb10542a02c49005dbd6e93095799d6f3be745fae9f8fedd4"
dependencies = [
 "libc",
 "windows-sys 0.61.2",
]

[[package]]
name = "softbuffer"
version = "0.4.8"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "aac18da81ebbf05109ab275b157c22a653bb3c12cf884450179942f81bcbf6c3"
dependencies = [
 "bytemuck",
 "js-sys",
 "ndk",
 "objc2",
 "objc2-core-foundation",
 "objc2-core-graphics",
 "objc2-foundation",
 "objc2-quartz-core",
 "raw-window-handle",
 "redox_syscall",
 "tracing",
 "wasm-bindgen",
 "web-sys",
 "windows-sys 0.61.2",
]

[[package]]
name = "soup3"
version = "0.5.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "471f924a40f31251afc77450e781cb26d55c0b650842efafc9c6cbd2f7cc4f9f"
dependencies = [
 "futures-channel",
 "gio",
 "glib",
 "libc",
 "soup3-sys",
]

[[package]]
name = "soup3-sys"
version = "0.5.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7ebe8950a680a12f24f15ebe1bf70db7af98ad242d9db43596ad3108aab86c27"
dependencies = [
 "gio-sys",
 "glib-sys",
 "gobject-sys",
 "libc",
 "system-deps",
]

[[package]]
name = "stable_deref_trait"
version = "1.2.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "6ce2be8dc25455e1f91df71bfa12ad37d7af1092ae736f3a6cd0e37bc7810596"

[[package]]
name = "static_vcruntime"
version = "3.0.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ff7589a1859b09232522bb9edf076ca7fcf14ded96685d3fa629db73023ffbb7"

[[package]]
name = "string_cache"
version = "0.9.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a18596f8c785a729f2819c0f6a7eae6ebeebdfffbfe4214ae6b087f690e31901"
dependencies = [
 "new_debug_unreachable",
 "parking_lot",
 "phf_shared 0.13.1",
 "precomputed-hash",
]

[[package]]
name = "string_cache"
version = "0.11.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ffa8a5dbe8b3f0bbe29d4c3225daafaeead63afdc1b65fc4c01a1384166038e6"
dependencies = [
 "new_debug_unreachable",
 "parking_lot",
 "phf_shared 0.14.0",
 "precomputed-hash",
]

[[package]]
name = "string_cache_codegen"
version = "0.6.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "585635e46db231059f76c5849798146164652513eb9e8ab2685939dd90f29b69"
dependencies = [
 "phf_generator 0.13.1",
 "phf_shared 0.13.1",
 "proc-macro2",
 "quote",
]

[[package]]
name = "string_cache_codegen"
version = "0.11.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "928dcdf75e47626b3617a976ec205d9f057584c371c1f23b782129268d0e6edc"
dependencies = [
 "phf_generator 0.14.0",
 "phf_shared 0.14.0",
 "proc-macro2",
 "quote",
]

[[package]]
name = "strsim"
version = "0.11.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7da8b5736845d9f2fcb837ea5d9e2628564b3b043a70948a3f0b778838c5fb4f"

[[package]]
name = "swift-rs"
version = "1.0.9"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cefd87076fd385308ee4aff597256c902f1fbb4d031de1558efc12f8ffefadd9"
dependencies = [
 "base64 0.21.7",
 "serde",
 "serde_json",
]

[[package]]
name = "syn"
version = "1.0.109"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "72b64191b275b66ffe2469e8af2c1cfe3bafa67b529ead792a6d0160888b4237"
dependencies = [
 "proc-macro2",
 "unicode-ident",
]

[[package]]
name = "syn"
version = "2.0.119"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "872831b642d1a07999a962a351ed35b955ea2cfc8f3862091e2a240a84f17297"
dependencies = [
 "proc-macro2",
 "quote",
 "unicode-ident",
]

[[package]]
name = "syn"
version = "3.0.10"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4ae9ccbea3a7b0b09443036490c8f34a8b1b760fd345e5c0dae0aac718faea79"
dependencies = [
 "proc-macro2",
 "quote",
 "unicode-ident",
]

[[package]]
name = "sync_wrapper"
version = "1.0.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0bf256ce5efdfa370213c1dabab5935a12e49f2c58d15e9eac2870d3b4f27263"
dependencies = [
 "futures-core",
]

[[package]]
name = "synstructure"
version = "0.14.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "901704edd0dfe137f1987838ee4f259e4e063c31371bdb423f7ae38ec6f77f02"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 3.0.10",
]

[[package]]
name = "system-deps"
version = "6.2.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a3e535eb8dded36d55ec13eddacd30dec501792ff23a0b1682c38601b8cf2349"
dependencies = [
 "cfg-expr",
 "heck 0.5.0",
 "pkg-config",
 "toml 0.8.2",
 "version-compare",
]

[[package]]
name = "tao"
version = "0.37.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d5777b06fe6435126ae8d816eba269e050e1e10d302cf5461e9c49eccabc3548"
dependencies = [
 "bitflags 2.13.2",
 "block2",
 "core-foundation",
 "core-graphics",
 "crossbeam-channel",
 "dbus",
 "dispatch2",
 "dlopen2",
 "dpi",
 "gdkwayland-sys",
 "gdkx11-sys",
 "gtk",
 "jni",
 "libc",
 "log",
 "ndk",
 "ndk-context",
 "ndk-sys",
 "objc2",
 "objc2-app-kit",
 "objc2-foundation",
 "objc2-ui-kit",
 "parking_lot",
 "percent-encoding",
 "raw-window-handle",
 "tao-macros",
 "unicode-segmentation",
 "url",
 "windows",
 "windows-core",
 "windows-version",
 "x11-dl",
]

[[package]]
name = "tao-macros"
version = "0.1.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "5f7eeb6d99155545da6150a1795945f16ac9c178deb2a5f2e74d776107bd5849"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "target-lexicon"
version = "0.12.16"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "61c41af27dd6d1e27b1b16b489db798443478cef1f06a660c96db617ba5de3b1"

[[package]]
name = "tauri"
version = "2.12.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "5fb0244332cfb9cee7e2a568bf5da29a36ed8fdbd717f6f47a66b6b7b358c072"
dependencies = [
 "anyhow",
 "bytes",
 "cookie",
 "dirs",
 "dunce",
 "embed_plist",
 "getrandom 0.3.4",
 "glob",
 "gtk",
 "heck 0.5.0",
 "http",
 "jni",
 "libc",
 "log",
 "mime",
 "muda",
 "objc2",
 "objc2-app-kit",
 "objc2-foundation",
 "objc2-ui-kit",
 "objc2-web-kit",
 "percent-encoding",
 "plist",
 "raw-window-handle",
 "reqwest",
 "serde",
 "serde_json",
 "serde_repr",
 "serialize-to-javascript",
 "swift-rs",
 "tauri-build",
 "tauri-macros",
 "tauri-runtime",
 "tauri-runtime-wry",
 "tauri-utils",
 "thiserror 2.0.21",
 "tokio",
 "tray-icon",
 "url",
 "webkit2gtk",
 "webview2-com",
 "window-vibrancy",
 "windows",
]

[[package]]
name = "tauri-build"
version = "2.7.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "adddb0e648752aaac5da9c3c3c6a68e1e87cab55e3b757b18a9441ef8c3ac614"
dependencies = [
 "anyhow",
 "cargo_toml",
 "dirs",
 "glob",
 "heck 0.5.0",
 "json-patch",
 "schemars 0.8.22",
 "semver",
 "serde",
 "serde_json",
 "static_vcruntime",
 "strsim",
 "tauri-utils",
 "tauri-winres",
 "walkdir",
]

[[package]]
name = "tauri-codegen"
version = "2.7.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "fb37631cf71dab5e8ab55e1bdd701e18a52653d90b78e71d0e5598b1e0a61316"
dependencies = [
 "base64 0.23.1",
 "brotli",
 "ico",
 "json-patch",
 "plist",
 "png",
 "proc-macro2",
 "quote",
 "semver",
 "serde",
 "serde_json",
 "sha2",
 "syn 2.0.119",
 "tauri-utils",
 "thiserror 2.0.21",
 "time",
 "url",
 "uuid",
 "walkdir",
]

[[package]]
name = "tauri-macros"
version = "2.7.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0cc38db58854c10fb5f91a887ed8bf82d3239bb92b5d8db86eda09e96d9963d1"
dependencies = [
 "heck 0.5.0",
 "proc-macro2",
 "quote",
 "syn 2.0.119",
 "tauri-codegen",
 "tauri-utils",
]

[[package]]
name = "tauri-plugin"
version = "2.7.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "67fb21a77e8f94e8beb3325e583102488659365af0a3948b7ea244c5b779c291"
dependencies = [
 "anyhow",
 "glob",
 "plist",
 "schemars 0.8.22",
 "serde",
 "serde_json",
 "tauri-utils",
 "walkdir",
]

[[package]]
name = "tauri-plugin-opener"
version = "2.7.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "54592c6718b42ab198bf11bda6a428a3553ca2f2f8e506df56f6a063ec328331"
dependencies = [
 "dunce",
 "glob",
 "objc2-app-kit",
 "objc2-foundation",
 "open",
 "schemars 0.8.22",
 "serde",
 "serde_json",
 "tauri",
 "tauri-plugin",
 "thiserror 2.0.21",
 "url",
 "windows",
 "zbus",
]

[[package]]
name = "tauri-runtime"
version = "2.12.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7c55766d99cea69055904d1735b93c2049302b2e09effd462120deb5581d78e9"
dependencies = [
 "cookie",
 "dpi",
 "gtk",
 "http",
 "jni",
 "objc2",
 "objc2-ui-kit",
 "objc2-web-kit",
 "raw-window-handle",
 "serde",
 "serde_json",
 "tauri-utils",
 "thiserror 2.0.21",
 "url",
 "webkit2gtk",
 "webview2-com",
 "windows",
]

[[package]]
name = "tauri-runtime-wry"
version = "2.12.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e1aa9d8b7a120f879f44fdc1053f7b7dbf416bf0bbc6a72b714dec46b782b52f"
dependencies = [
 "gtk",
 "http",
 "jni",
 "log",
 "objc2",
 "objc2-app-kit",
 "percent-encoding",
 "raw-window-handle",
 "softbuffer",
 "tao",
 "tauri-runtime",
 "tauri-utils",
 "url",
 "webkit2gtk",
 "webview2-com",
 "windows",
 "wry",
]

[[package]]
name = "tauri-utils"
version = "2.10.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "362ab21cd4cc713f2a02b1a9b5688198b1541cfb6907c4281e9190e0f0ef4aa3"
dependencies = [
 "anyhow",
 "brotli",
 "cargo_metadata",
 "ctor",
 "dom_query 0.28.0",
 "dunce",
 "glob",
 "http",
 "infer",
 "json-patch",
 "log",
 "memchr",
 "phf 0.13.1",
 "plist",
 "proc-macro2",
 "quote",
 "regex",
 "schemars 0.8.22",
 "semver",
 "serde",
 "serde-untagged",
 "serde_json",
 "serde_with",
 "swift-rs",
 "thiserror 2.0.21",
 "toml 1.2.1+spec-1.1.0",
 "url",
 "urlpattern",
 "uuid",
 "walkdir",
]

[[package]]
name = "tauri-winres"
version = "0.3.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c52bb6904475a6ca662f15ef787f18ade61d5740a1ee12c45d3b748efdb6f796"
dependencies = [
 "dunce",
 "embed-resource",
 "toml 1.2.1+spec-1.1.0",
]

[[package]]
name = "tempfile"
version = "3.27.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "32497e9a4c7b38532efcdebeef879707aa9f794296a4f0244f6f69e9bc8574bd"
dependencies = [
 "fastrand",
 "getrandom 0.4.3",
 "once_cell",
 "rustix",
 "windows-sys 0.61.2",
]

[[package]]
name = "tendril"
version = "0.5.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "5fed54709c5b3a53d09bb1c113ea4f5ceafd1e772ddcb0030a82e1d56c087b08"
dependencies = [
 "new_debug_unreachable",
]

[[package]]
name = "thiserror"
version = "1.0.69"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b6aaf5339b578ea85b50e080feb250a3e8ae8cfcdff9a461c9ec2904bc923f52"
dependencies = [
 "thiserror-impl 1.0.69",
]

[[package]]
name = "thiserror"
version = "2.0.21"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "09e52cb86a36cede5cb101bf8908837b3e4c6e5e59fe7fd85c23fb56200d189e"
dependencies = [
 "thiserror-impl 2.0.21",
]

[[package]]
name = "thiserror-impl"
version = "1.0.69"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4fee6c4efc90059e10f81e6d42c60a18f76588c3d74cb83a0b242a2b6c7504c1"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "thiserror-impl"
version = "2.0.21"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "fe5197923287db20a58125f0bc85c062f7f2c892de97b18c356f9efb14b28524"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 3.0.10",
]

[[package]]
name = "time"
version = "0.3.55"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cdb87b95ec50ddfa440816d227a17b2ccbdda963a316a727fda0fc4334f7d134"
dependencies = [
 "deranged",
 "num-conv",
 "powerfmt",
 "serde_core",
 "time-core",
 "time-macros",
]

[[package]]
name = "time-core"
version = "0.1.9"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9e1c906769ad99c88eaa54e728060edef082f8e358ff32030cb7c7d315e81109"

[[package]]
name = "time-macros"
version = "0.2.32"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7e689342a48d2ea927c87ea50cabf8594854bf940e9310208848d680d668ed85"
dependencies = [
 "num-conv",
 "time-core",
]

[[package]]
name = "tinystr"
version = "0.8.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "abc840c238154d58f9e86b2792261edfde565a17696e1cda1a449de27979801a"
dependencies = [
 "displaydoc",
 "zerovec",
]

[[package]]
name = "tinyvec"
version = "1.13.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "fd3ca314f692efd6c868f8408f53fe444634a845f96c028b97d35f6a1f79f0ee"

[[package]]
name = "tokio"
version = "1.54.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b52fd3255258d26fac7264ab5a76b53c13367136dc011d3d6ad4f8ed070396a3"
dependencies = [
 "bytes",
 "libc",
 "mio",
 "pin-project-lite",
 "socket2",
 "windows-sys 0.61.2",
]

[[package]]
name = "tokio-util"
version = "0.7.20"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e464cf451ba96ebfc6f9b6542f17ee8b8956e33f1e40d9690624e59d7a7f8a4b"
dependencies = [
 "bytes",
 "futures-core",
 "futures-sink",
 "pin-project-lite",
 "tokio",
]

[[package]]
name = "toml"
version = "0.8.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "185d8ab0dfbb35cf1399a6344d8484209c088f75f8f68230da55d48d95d43e3d"
dependencies = [
 "serde",
 "serde_spanned 0.6.9",
 "toml_datetime 0.6.3",
 "toml_edit 0.20.2",
]

[[package]]
name = "toml"
version = "1.2.1+spec-1.1.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d5755c51863cdac711f1956baf8eb9588e060755f7d3c4c979e70ea1e1f32cd7"
dependencies = [
 "indexmap 2.14.2",
 "serde_core",
 "serde_spanned 1.1.3",
 "toml_datetime 1.1.3+spec-1.1.0",
 "toml_parser",
 "toml_writer",
 "winnow 1.0.5",
]

[[package]]
name = "toml_datetime"
version = "0.6.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7cda73e2f1397b1262d6dfdcef8aafae14d1de7748d66822d3bfeeb6d03e5e4b"
dependencies = [
 "serde",
]

[[package]]
name = "toml_datetime"
version = "1.1.3+spec-1.1.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "173f25c883cd2176a2d8212155638c0a60d484a9d84546d270866f40f56b6e49"
dependencies = [
 "serde_core",
]

[[package]]
name = "toml_edit"
version = "0.19.15"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1b5bb770da30e5cbfde35a2d7b9b8a2c4b8ef89548a7a6aeab5c9a576e3e7421"
dependencies = [
 "indexmap 2.14.2",
 "toml_datetime 0.6.3",
 "winnow 0.5.40",
]

[[package]]
name = "toml_edit"
version = "0.20.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "396e4d48bbb2b7554c944bde63101b5ae446cff6ec4a24227428f15eb72ef338"
dependencies = [
 "indexmap 2.14.2",
 "serde",
 "serde_spanned 0.6.9",
 "toml_datetime 0.6.3",
 "winnow 0.5.40",
]

[[package]]
name = "toml_edit"
version = "0.25.19+spec-1.1.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "dd43688c4858d7264ae1cf9a9f874a67c3feb74a883b1cd7bebd6a4ea8307218"
dependencies = [
 "indexmap 2.14.2",
 "toml_datetime 1.1.3+spec-1.1.0",
 "toml_parser",
 "winnow 1.0.5",
]

[[package]]
name = "toml_parser"
version = "1.1.5+spec-1.1.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "baa693a8032d7e1cada7d0041e96126df243179ff061456783ac7f12bda4744c"
dependencies = [
 "winnow 1.0.5",
]

[[package]]
name = "toml_writer"
version = "1.2.0+spec-1.1.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "009dbb7700f11c55ef83aebbe4c0e9cf1f1ac0844bd8d6f00dc38f302026e13a"

[[package]]
name = "tower"
version = "0.5.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ebe5ef63511595f1344e2d5cfa636d973292adc0eec1f0ad45fae9f0851ab1d4"
dependencies = [
 "futures-core",
 "futures-util",
 "pin-project-lite",
 "sync_wrapper",
 "tokio",
 "tower-layer",
 "tower-service",
]

[[package]]
name = "tower-http"
version = "0.6.11"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4cfcf7e2740e6fc6d4d688b4ef00650406bb94adf4731e43c096c3a19fe40840"
dependencies = [
 "bitflags 2.13.2",
 "bytes",
 "futures-util",
 "http",
 "http-body",
 "pin-project-lite",
 "tower",
 "tower-layer",
 "tower-service",
 "url",
]

[[package]]
name = "tower-layer"
version = "0.3.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "121c2a6cda46980bb0fcd1647ffaf6cd3fc79a013de288782836f6df9c48780e"

[[package]]
name = "tower-service"
version = "0.3.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8df9b6e13f2d32c91b9bd719c00d1958837bc7dec474d94952798cc8e69eeec3"

[[package]]
name = "tracing"
version = "0.1.44"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "63e71662fa4b2a2c3a26f570f037eb95bb1f85397f3cd8076caed2f026a6d100"
dependencies = [
 "pin-project-lite",
 "tracing-attributes",
 "tracing-core",
]

[[package]]
name = "tracing-attributes"
version = "0.1.31"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7490cfa5ec963746568740651ac6781f701c9c5ea257c58e057f3ba8cf69e8da"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "tracing-core"
version = "0.1.36"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "db97caf9d906fbde555dd62fa95ddba9eecfd14cb388e4f491a66d74cd5fb79a"
dependencies = [
 "once_cell",
]

[[package]]
name = "tray-icon"
version = "0.25.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b2b9c52859a94554803ccd4a24b98f74148ebc73b90676d783f3490b1bff9d72"
dependencies = [
 "crossbeam-channel",
 "dirs",
 "libappindicator",
 "muda",
 "objc2",
 "objc2-app-kit",
 "objc2-core-foundation",
 "objc2-core-graphics",
 "objc2-foundation",
 "once_cell",
 "png",
 "serde",
 "thiserror 2.0.21",
 "windows-sys 0.61.2",
]

[[package]]
name = "try-lock"
version = "0.2.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e421abadd41a4225275504ea4d6566923418b7f05506fbc9c0fe86ba7396114b"

[[package]]
name = "typeid"
version = "1.0.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "bc7d623258602320d5c55d1bc22793b57daff0ec7efc270ea7d55ce1d5f5471c"

[[package]]
name = "typenum"
version = "1.20.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b6f5e870be6c3b371b77fe0ee0bafb859fa4964b4404c27de1d380043c4dda20"

[[package]]
name = "uds_windows"
version = "1.2.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f2f6fb2847f6742cd76af783a2a2c49e9375d0a111c7bef6f71cd9e738c72d6e"
dependencies = [
 "memoffset",
 "tempfile",
 "windows-sys 0.61.2",
]

[[package]]
name = "unicode-ident"
version = "1.0.27"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a2c754d6c33795a1c324727428e5a7dedb5b06195f9890bdbcba760d3e246563"

[[package]]
name = "unicode-segmentation"
version = "1.13.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c6f5d3c3b1bf09027a88a6bc961fc00497d651009560b5463668dc81b0fa87a8"

[[package]]
name = "url"
version = "2.5.8"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ff67a8a4397373c3ef660812acab3268222035010ab8680ec4215f38ba3d0eed"
dependencies = [
 "form_urlencoded",
 "idna",
 "percent-encoding",
 "serde",
 "serde_derive",
]

[[package]]
name = "urlpattern"
version = "0.6.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "df16f50ef4cc145211879a3867ba757076b25dfee812040dcb0658bd9ae7904b"
dependencies = [
 "icu_properties",
 "regex",
 "serde",
 "url",
]

[[package]]
name = "utf8_iter"
version = "1.1.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "af3bd9d3e571c26fcce9d033b87ea5ab061b8d2ffe9b7a5675d810d68f03edf0"
dependencies = [
 "utf_types",
]

[[package]]
name = "utf_types"
version = "1.0.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3a3b425286980a367278453f3b6d28cdcb134b574e5a35824a6ff5eebad50bb6"

[[package]]
name = "uuid"
version = "1.29.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "bed99139f7dac9b5cfe5f17be4d66dc7079a34dee1d74bcc77217119240e267c"
dependencies = [
 "getrandom 0.4.3",
 "js-sys",
 "serde_core",
 "wasm-bindgen",
]

[[package]]
name = "version-compare"
version = "0.2.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "03c2856837ef78f57382f06b2b8563a2f512f7185d732608fd9176cb3b8edf0e"

[[package]]
name = "version_check"
version = "0.9.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0b928f33d975fc6ad9f86c8f283853ad26bdd5b10b7f1542aa2fa15e2289105a"

[[package]]
name = "vswhom"
version = "0.1.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "be979b7f07507105799e854203b470ff7c78a1639e330a58f183b5fea574608b"
dependencies = [
 "libc",
 "vswhom-sys",
]

[[package]]
name = "vswhom-sys"
version = "0.1.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "fb067e4cbd1ff067d1df46c9194b5de0e98efd2810bbc95c5d5e5f25a3231150"
dependencies = [
 "cc",
 "libc",
]

[[package]]
name = "walkdir"
version = "2.5.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "29790946404f91d9c5d06f9874efddea1dc06c5efe94541a7d6863108e3a5e4b"
dependencies = [
 "same-file",
 "winapi-util",
]

[[package]]
name = "want"
version = "0.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ec4cdd0dd910afe868b7ef477227d8d538b46b3075031afee8a9f2acb0a2ed0b"
dependencies = [
 "try-lock",
]

[[package]]
name = "wasi"
version = "0.11.1+wasi-snapshot-preview1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ccf3ec651a847eb01de73ccad15eb7d99f80485de043efb2f370cd654f4ea44b"

[[package]]
name = "wasip2"
version = "1.0.4+wasi-0.2.12"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b67efb37e106e55ce722a510d6b5f9c17f083e5fc79afc2badeb12cc313d9487"
dependencies = [
 "wit-bindgen",
]

[[package]]
name = "wasm-bindgen"
version = "0.2.130"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a0181c14ddd6c7b8b0b0132a5f1ea2f32be0d893cd3ea97b6e3b28886b8a3d1c"
dependencies = [
 "cfg-if",
 "rustversion",
 "wasm-bindgen-macro",
 "wasm-bindgen-shared",
]

[[package]]
name = "wasm-bindgen-futures"
version = "0.4.80"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "5e14e0327cb5368ad60ccb22d04a9827a693c95a926d8d125e9fa39e0baec501"
dependencies = [
 "js-sys",
 "tokio",
 "wasm-bindgen",
]

[[package]]
name = "wasm-bindgen-macro"
version = "0.2.130"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "6e931a02a39abdbf66966fc35902b5ed58344750a70885bed4ebb3d8eaf28ed9"
dependencies = [
 "quote",
 "wasm-bindgen-macro-support",
]

[[package]]
name = "wasm-bindgen-macro-support"
version = "0.2.130"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "2ca4b54280e455bd831e33a6b8e734baf432fe63fbc35c42ac14ce67a043a53a"
dependencies = [
 "bumpalo",
 "proc-macro2",
 "quote",
 "syn 3.0.10",
 "wasm-bindgen-shared",
]

[[package]]
name = "wasm-bindgen-shared"
version = "0.2.130"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3b1f9c3798725016c6ee5f2f57869ec0831e8bbc0ab0310a86e787e97f41389e"
dependencies = [
 "unicode-ident",
]

[[package]]
name = "wasm-streams"
version = "0.5.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9d1ec4f6517c9e11ae630e200b2b65d193279042e28edd4a2cda233e46670bbb"
dependencies = [
 "futures-util",
 "js-sys",
 "wasm-bindgen",
 "wasm-bindgen-futures",
 "web-sys",
]

[[package]]
name = "web-sys"
version = "0.3.107"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d7d179596ff5ec0f6de4db64d54011bde6289cc49603d3a6e4ce3f329207ab88"
dependencies = [
 "js-sys",
 "wasm-bindgen",
]

[[package]]
name = "web-time"
version = "1.1.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "5a6580f308b1fad9207618087a65c04e7a10bc77e02c8e84e9b00dd4b12fa0bb"
dependencies = [
 "js-sys",
 "wasm-bindgen",
]

[[package]]
name = "web_atoms"
version = "0.2.6"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ba8b815c1b593dc0baf78dd0f4fc8fdb2de53198fb1163738093e9a311c33fb3"
dependencies = [
 "phf 0.13.1",
 "phf_codegen 0.13.1",
 "string_cache 0.9.0",
 "string_cache_codegen 0.6.1",
]

[[package]]
name = "web_atoms"
version = "0.3.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7572660c8890448ba236b7376f27e389c6a7e1c70195622faced601f855c0ada"
dependencies = [
 "phf 0.14.0",
 "phf_codegen 0.14.0",
 "string_cache 0.11.0",
 "string_cache_codegen 0.11.2",
]

[[package]]
name = "webkit2gtk"
version = "2.0.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a1027150013530fb2eaf806408df88461ae4815a45c541c8975e61d6f2fc4793"
dependencies = [
 "bitflags 1.3.2",
 "cairo-rs",
 "gdk",
 "gdk-sys",
 "gio",
 "gio-sys",
 "glib",
 "glib-sys",
 "gobject-sys",
 "gtk",
 "gtk-sys",
 "javascriptcore-rs",
 "libc",
 "once_cell",
 "soup3",
 "webkit2gtk-sys",
]

[[package]]
name = "webkit2gtk-sys"
version = "2.0.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "916a5f65c2ef0dfe12fff695960a2ec3d4565359fdbb2e9943c974e06c734ea5"
dependencies = [
 "bitflags 1.3.2",
 "cairo-sys-rs",
 "gdk-sys",
 "gio-sys",
 "glib-sys",
 "gobject-sys",
 "gtk-sys",
 "javascriptcore-rs-sys",
 "libc",
 "pkg-config",
 "soup3-sys",
 "system-deps",
]

[[package]]
name = "webview2-com"
version = "0.39.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3f89fca7a704cee10dcb3654c1dbb8941d1783132f1917358af75bec37a7d7e6"
dependencies = [
 "webview2-com-macros",
 "webview2-com-sys",
 "windows",
 "windows-core",
]

[[package]]
name = "webview2-com-macros"
version = "0.8.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "67a921c1b6914c367b2b823cd4cde6f96beec77d30a939c8199bb377cf9b9b54"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "webview2-com-sys"
version = "0.39.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b3a07132775117d6065853d9d1178157b8c90e228de47129d6bce2c7edebedfb"
dependencies = [
 "thiserror 2.0.21",
 "windows",
 "windows-core",
]

[[package]]
name = "winapi"
version = "0.3.9"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "5c839a674fcd7a98952e593242ea400abe93992746761e38641405d28b00f419"
dependencies = [
 "winapi-i686-pc-windows-gnu",
 "winapi-x86_64-pc-windows-gnu",
]

[[package]]
name = "winapi-i686-pc-windows-gnu"
version = "0.4.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ac3b87c63620426dd9b991e5ce0329eff545bccbbb34f3be09ff6fb6ab51b7b6"

[[package]]
name = "winapi-util"
version = "0.1.11"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c2a7b1c03c876122aa43f3020e6c3c3ee5c05081c9a00739faf7503aeba10d22"
dependencies = [
 "windows-sys 0.61.2",
]

[[package]]
name = "winapi-x86_64-pc-windows-gnu"
version = "0.4.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "712e227841d057c1ee1cd2fb22fa7e5a5461ae8e48fa2ca79ec42cfc1931183f"

[[package]]
name = "window-vibrancy"
version = "0.8.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "111e51caca442cafd9bab396628ac4d814880eaea4e63dfd76a12e9f342b5580"
dependencies = [
 "objc2",
 "objc2-app-kit",
 "objc2-core-foundation",
 "objc2-foundation",
 "objc2-quartz-core",
 "raw-window-handle",
 "windows-sys 0.61.2",
 "windows-version",
]

[[package]]
name = "windows"
version = "0.62.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "527fadee13e0c05939a6a05d5bd6eec6cd2e3dbd648b9f8e447c6518133d8580"
dependencies = [
 "windows-collections",
 "windows-core",
 "windows-future",
 "windows-numerics",
]

[[package]]
name = "windows-collections"
version = "0.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "23b2d95af1a8a14a3c7367e1ed4fc9c20e0a26e79551b1454d72583c97cc6610"
dependencies = [
 "windows-core",
]

[[package]]
name = "windows-core"
version = "0.62.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b8e83a14d34d0623b51dce9581199302a221863196a1dde71a7663a4c2be9deb"
dependencies = [
 "windows-implement",
 "windows-interface",
 "windows-link",
 "windows-result",
 "windows-strings",
]

[[package]]
name = "windows-future"
version = "0.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e1d6f90251fe18a279739e78025bd6ddc52a7e22f921070ccdc67dde84c605cb"
dependencies = [
 "windows-core",
 "windows-link",
 "windows-threading",
]

[[package]]
name = "windows-implement"
version = "0.60.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "053e2e040ab57b9dc951b72c264860db7eb3b0200ba345b4e4c3b14f67855ddf"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "windows-interface"
version = "0.59.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3f316c4a2570ba26bbec722032c4099d8c8bc095efccdc15688708623367e358"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 2.0.119",
]

[[package]]
name = "windows-link"
version = "0.2.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f0805222e57f7521d6a62e36fa9163bc891acd422f971defe97d64e70d0a4fe5"

[[package]]
name = "windows-numerics"
version = "0.3.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "6e2e40844ac143cdb44aead537bbf727de9b044e107a0f1220392177d15b0f26"
dependencies = [
 "windows-core",
 "windows-link",
]

[[package]]
name = "windows-result"
version = "0.4.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7781fa89eaf60850ac3d2da7af8e5242a5ea78d1a11c49bf2910bb5a73853eb5"
dependencies = [
 "windows-link",
]

[[package]]
name = "windows-strings"
version = "0.5.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7837d08f69c77cf6b07689544538e017c1bfcf57e34b4c0ff58e6c2cd3b37091"
dependencies = [
 "windows-link",
]

[[package]]
name = "windows-sys"
version = "0.45.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "75283be5efb2831d37ea142365f009c02ec203cd29a3ebecbc093d52315b66d0"
dependencies = [
 "windows-targets",
]

[[package]]
name = "windows-sys"
version = "0.61.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ae137229bcbd6cdf0f7b80a31df61766145077ddf49416a728b02cb3921ff3fc"
dependencies = [
 "windows-link",
]

[[package]]
name = "windows-targets"
version = "0.42.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8e5180c00cd44c9b1c88adb3693291f1cd93605ded80c250a75d472756b4d071"
dependencies = [
 "windows_aarch64_gnullvm",
 "windows_aarch64_msvc",
 "windows_i686_gnu",
 "windows_i686_msvc",
 "windows_x86_64_gnu",
 "windows_x86_64_gnullvm",
 "windows_x86_64_msvc",
]

[[package]]
name = "windows-threading"
version = "0.2.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3949bd5b99cafdf1c7ca86b43ca564028dfe27d66958f2470940f73d86d75b37"
dependencies = [
 "windows-link",
]

[[package]]
name = "windows-version"
version = "0.1.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e4060a1da109b9d0326b7262c8e12c84df67cc0dbc9e33cf49e01ccc2eb63631"
dependencies = [
 "windows-link",
]

[[package]]
name = "windows_aarch64_gnullvm"
version = "0.42.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "597a5118570b68bc08d8d59125332c54f1ba9d9adeedeef5b99b02ba2b0698f8"

[[package]]
name = "windows_aarch64_msvc"
version = "0.42.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e08e8864a60f06ef0d0ff4ba04124db8b0fb3be5776a5cd47641e942e58c4d43"

[[package]]
name = "windows_i686_gnu"
version = "0.42.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c61d927d8da41da96a81f029489353e68739737d3beca43145c8afec9a31a84f"

[[package]]
name = "windows_i686_msvc"
version = "0.42.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "44d840b6ec649f480a41c8d80f9c65108b92d89345dd94027bfe06ac444d1060"

[[package]]
name = "windows_x86_64_gnu"
version = "0.42.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8de912b8b8feb55c064867cf047dda097f92d51efad5b491dfb98f6bbb70cb36"

[[package]]
name = "windows_x86_64_gnullvm"
version = "0.42.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "26d41b46a36d453748aedef1486d5c7a85db22e56aff34643984ea85514e94a3"

[[package]]
name = "windows_x86_64_msvc"
version = "0.42.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9aec5da331524158c6d1a4ac0ab1541149c0b9505fde06423b02f5ef0106b9f0"

[[package]]
name = "winnow"
version = "0.5.40"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f593a95398737aeed53e489c785df13f3618e41dbcd6718c6addbf1395aa6876"
dependencies = [
 "memchr",
]

[[package]]
name = "winnow"
version = "1.0.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8c3b93199df0ab874cdf0c6a94f0a0dc3423fe41f1cafb62b8bd7b1deb277aef"
dependencies = [
 "memchr",
]

[[package]]
name = "winreg"
version = "0.56.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7d6f32a0ff4a9f6f01231eb2059cc85479330739333e0e58cadf03b6af2cca10"
dependencies = [
 "cfg-if",
 "windows-sys 0.61.2",
]

[[package]]
name = "wit-bindgen"
version = "0.57.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1ebf944e87a7c253233ad6766e082e3cd714b5d03812acc24c318f549614536e"

[[package]]
name = "writeable"
version = "0.6.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3ad82d2a33cdc9674dc7465672f271e096168fcdbe0f799d9e6db8c5892679dc"

[[package]]
name = "wry"
version = "0.57.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a490119196d02a51d0871df7b9119a1f3e46d75b7e90053a801454d5c6b3491c"
dependencies = [
 "base64 0.23.1",
 "block2",
 "cookie",
 "crossbeam-channel",
 "dirs",
 "dom_query 0.29.0",
 "dpi",
 "dunce",
 "gdkx11",
 "gtk",
 "http",
 "javascriptcore-rs",
 "jni",
 "libc",
 "ndk",
 "objc2",
 "objc2-app-kit",
 "objc2-core-foundation",
 "objc2-foundation",
 "objc2-ui-kit",
 "objc2-web-kit",
 "percent-encoding",
 "raw-window-handle",
 "sha2",
 "soup3",
 "tao-macros",
 "thiserror 2.0.21",
 "url",
 "webkit2gtk",
 "webkit2gtk-sys",
 "webview2-com",
 "windows",
 "windows-core",
 "windows-version",
 "x11-dl",
]

[[package]]
name = "x11"
version = "2.21.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "502da5464ccd04011667b11c435cb992822c2c0dbde1770c988480d312a0db2e"
dependencies = [
 "libc",
 "pkg-config",
]

[[package]]
name = "x11-dl"
version = "2.21.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "38735924fedd5314a6e548792904ed8c6de6636285cb9fec04d5b1db85c1516f"
dependencies = [
 "libc",
 "once_cell",
 "pkg-config",
]

[[package]]
name = "yoke"
version = "0.8.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "417ef3fcf6c300b7dbd25c85531a746931c02ad536f3cf4786ed1e88223340b3"
dependencies = [
 "stable_deref_trait",
 "yoke-derive",
 "zerofrom",
]

[[package]]
name = "yoke-derive"
version = "0.8.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ec8ebde2db3681e8c9980cc27822030e68752690ddfa9473e739aeb4dbde6d71"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 3.0.10",
 "synstructure",
]

[[package]]
name = "zbus"
version = "5.19.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "5db4be7c075cb421e4b7ee645541604239bd243ba7c357511f4ff3a74b555907"
dependencies = [
 "async-broadcast",
 "async-executor",
 "async-io",
 "async-lock",
 "async-process",
 "async-recursion",
 "async-task",
 "async-trait",
 "blocking",
 "enumflags2",
 "event-listener",
 "futures-core",
 "futures-lite",
 "hex",
 "libc",
 "ordered-stream",
 "rustix",
 "serde",
 "serde_repr",
 "tracing",
 "uds_windows",
 "uuid",
 "windows-sys 0.61.2",
 "winnow 1.0.5",
 "zbus_macros",
 "zbus_names",
 "zvariant",
]

[[package]]
name = "zbus_macros"
version = "5.19.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "2990635d09ade6df1868f72f8cac69a876a90981e8bd3c40b1be413f8dc88f40"
dependencies = [
 "proc-macro-crate 3.5.0",
 "proc-macro2",
 "quote",
 "syn 3.0.10",
 "zbus_names",
 "zvariant",
 "zvariant_utils",
]

[[package]]
name = "zbus_names"
version = "4.3.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "812a12be4ead7a59e18ea8f047d08add0066b73bc62fc1467066a2472ae088dd"
dependencies = [
 "serde",
 "winnow 1.0.5",
 "zvariant",
]

[[package]]
name = "zcheapstr"
version = "1.2.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "939f186d9ecebe044315a5cb6d6f78568bbc21152adc954d5a0c2f58bdbc9920"
dependencies = [
 "serde",
]

[[package]]
name = "zerofrom"
version = "0.1.8"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0ec05a11813ea801ff6d75110ad09cd0824ddba17dfe17128ea0d5f68e6c5272"
dependencies = [
 "zerofrom-derive",
]

[[package]]
name = "zerofrom-derive"
version = "0.1.8"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f75b4683f6c7f45248d4d64056a24298c6281e0993356d7d1b4a1a962ef10d4a"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 3.0.10",
 "synstructure",
]

[[package]]
name = "zerotrie"
version = "0.2.5"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4ea269c3bd32f0a32c321907a2ae912ba6f4649bb0fc764a15627e99a7095a3f"
dependencies = [
 "displaydoc",
 "yoke",
 "zerofrom",
]

[[package]]
name = "zerovec"
version = "0.11.9"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f58a2799cfe9a1670c7ea8edbd52ef8edb93cb37a7f83bf31ba9e35d9dae6a40"
dependencies = [
 "yoke",
 "zerofrom",
 "zerovec-derive",
]

[[package]]
name = "zerovec-derive"
version = "0.11.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c3743ddbf47738d929cd1ae2e199d40d0162979dfe31aef8ae646d2bf00bf97a"
dependencies = [
 "proc-macro2",
 "quote",
 "syn 3.0.10",
]

[[package]]
name = "zlib-rs"
version = "0.6.8"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b268e58e7c693d7c271f93ffc4ba3b380412554231c85bf61ca7af91042a4112"

[[package]]
name = "zmij"
version = "1.0.23"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "29666d0abbfad1e3dc4dcf6144730dd3a3ab225bbbdac83319345b1b44ccfc1b"

[[package]]
name = "zvariant"
version = "5.15.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "80bf6d6cd6a4b601acb64cfb8284cdc643fcfa75ef26ae3c46ec8aa4e8a1fbb7"
dependencies = [
 "endi",
 "enumflags2",
 "serde",
 "winnow 1.0.5",
 "zcheapstr",
 "zvariant_derive",
 "zvariant_utils",
]

[[package]]
name = "zvariant_derive"
version = "5.15.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "ef2672456ba1cb54b5eaec136e63135b3c7495fb938e53b28a62e633496d486d"
dependencies = [
 "proc-macro-crate 3.5.0",
 "proc-macro2",
 "quote",
 "syn 3.0.10",
 "zvariant_utils",
]

[[package]]
name = "zvariant_utils"
version = "4.2.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "bad0294361a320b694a328460dc73add56c306150f5cb6bfafc44446120008a3"
dependencies = [
 "proc-macro2",
 "quote",
 "serde",
 "syn 3.0.10",
 "winnow 1.0.5",
]

```
`src-tauri\Cargo.toml`:

```toml
[package]
name = "money-management"
version = "0.1.0"
description = "A Tauri App"
authors = ["you"]
edition = "2024"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[lib]
# The `_lib` suffix may seem redundant but it is necessary
# to make the lib name unique and wouldn't conflict with the bin name.
# This seems to be only an issue on Windows, see https://github.com/rust-lang/cargo/issues/8519
name = "money_management_lib"
crate-type = ["staticlib", "cdylib", "rlib"]

[build-dependencies]
tauri-build = { version = "2", features = [] }

[dependencies]
tauri = { version = "2", features = [] }
tauri-plugin-opener = "2"
serde = { version = "1", features = ["derive"] }
serde_json = "1"


# Read the optimization guideline for more details: https://tauri.app/concept/size/#cargo-configuration
[profile.release]
codegen-units = 1
lto = true
opt-level = 3
panic = "abort"
strip = true

```
`src-tauri\build.rs`:

```rs
fn main() {
    tauri_build::build()
}

```
`src-tauri\capabilities\default.json`:

```json
{
  "$schema": "../gen/schemas/desktop-schema.json",
  "identifier": "default",
  "description": "Capability for the main window",
  "windows": ["main"],
  "permissions": [
    "core:default",
    "opener:default"
  ]
}

```
`src-tauri\src\lib.rs`:

```rs
// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

```
`src-tauri\src\main.rs`:

```rs
// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    money_management_lib::run()
}

```
`src-tauri\tauri.conf.json`:

```json
{
  "$schema": "https://schema.tauri.app/config/2",
  "productName": "money-management",
  "version": "0.1.0",
  "identifier": "com.admin.money-management",
  "build": {
    "beforeDevCommand": "pnpm dev",
    "devUrl": "http://localhost:1420",
    "beforeBuildCommand": "pnpm build",
    "frontendDist": "../dist"
  },
  "app": {
    "withGlobalTauri": true,
    "windows": [
      {
        "title": "money-management",
        "width": 800,
        "height": 600
      }
    ],
    "security": {
      "csp": null
    }
  },
  "bundle": {
    "active": true,
    "targets": "all",
    "icon": [
      "icons/32x32.png",
      "icons/128x128.png",
      "icons/128x128@2x.png",
      "icons/icon.icns",
      "icons/icon.ico"
    ]
  }
}

```
`src\main.ts`:

```ts
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

```
`src\styles.css`:

```css
:root {
  /* 地の色 */
  --bg: #f5f7f9;
  --card-bg: #ffffff;
  --text: #333333;
  --text-muted: #6b6b6b;
  --border: #e1e5e9;

  /* 部品ごとに固定して使うカラー(ランチャーと同じ) */
  --c-green: #1aff1a; /* 見出しの下線・メインボタン */
  --c-yellow: #ffd400;
  --c-blue: #19c8ff; /* 入力欄のフォーカス・ホバー */
  --c-orange: #ff8a1f; /* 削除 */
  --c-purple: #a855ff;

  --out: #d96500; /* 出費の金額 */
  --in: #1a9f1a; /* 収入の金額 */

  --radius: 16px;
  --radius-sm: 8px;
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  --content-width: 640px;
}

* {
  box-sizing: border-box;
}

html,
body {
  overscroll-behavior: none;
}

body {
  margin: 0;
  overflow-x: hidden;
  background: var(--bg);
  color: var(--text);
  font-family: "Meiryo", "Hiragino Kaku Gothic ProN", "Noto Sans JP", system-ui,
    sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#main {
  flex: 1;
  width: 100%;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 14px 12px calc(32px + env(safe-area-inset-bottom, 0px));
}

/* ---- ヘッダー ---- */
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  padding-top: env(safe-area-inset-top, 0px);
  background: #272727;
  color: #ffffff;
  user-select: none;
}

.header__inner {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 0 16px;
  height: 40px;
  line-height: 40px;
  font-size: 0.95rem;
  font-weight: 700;
}

/* ---- タブ ---- */
.tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 14px;
}

.tab {
  flex: 1;
  padding: 10px 0;
  border: none;
  border-radius: 14px;
  background: #ffffff;
  color: var(--text);
  box-shadow: inset 0 0 0 2px var(--border);
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
}

.tab--active {
  background: var(--c-green);
  box-shadow: none;
}

.page[hidden] {
  display: none;
}

/* ---- パネル ---- */
.panel {
  background: var(--card-bg);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 16px 16px 18px;
  margin-bottom: 16px;
}

.panel[hidden] {
  display: none;
}

.panel__title {
  margin: 0 0 14px;
  padding-bottom: 4px;
  font-size: 1.25rem;
  font-weight: 700;
  border-bottom: 4px solid var(--c-green);
}

.note {
  margin: 8px 0;
  font-size: 0.82rem;
  color: var(--text-muted);
  overflow-wrap: anywhere;
}

.note--pre {
  white-space: pre-wrap;
}

/* ---- フォーム ---- */
.form__row {
  display: block;
  margin-bottom: 12px;
}

.form__label {
  display: block;
  margin-bottom: 4px;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--text-muted);
}

input:not([type="file"]):not([type="radio"]),
select,
textarea {
  width: 100%;
  min-height: 44px;
  padding: 7px 14px;
  border: 2px solid var(--border);
  border-radius: 17px;
  background: #ffffff;
  color: var(--text);
  font: inherit;
  font-size: 1rem;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--c-blue);
}

.form__buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

/* ---- 出費/収入の切り替え ---- */
.kind {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 14px;
}

.kind label {
  display: block;
}

.kind input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.kind span {
  display: block;
  padding: 10px 0;
  text-align: center;
  border-radius: 14px;
  background: #ffffff;
  box-shadow: inset 0 0 0 2px var(--border);
  font-weight: 700;
}

.kind input:checked + span {
  background: var(--c-green);
  box-shadow: none;
}

/* ---- ボタン ---- */
.btn {
  padding: 10px 18px;
  min-height: 44px;
  border: none;
  border-radius: 14px;
  background: #ffffff;
  color: var(--text);
  box-shadow: inset 0 0 0 2px var(--c-green);
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
}

.btn:hover:not(:disabled) {
  background: #f0fff0;
}

.btn:disabled {
  opacity: 0.4;
  cursor: default;
}

.btn[hidden] {
  display: none;
}

.btn--primary {
  background: var(--c-green);
  box-shadow: none;
}

.btn--primary:hover:not(:disabled) {
  background: #66ff66;
}

.btn--danger {
  color: #d96500;
  box-shadow: inset 0 0 0 2px var(--c-orange);
}

.btn--danger:hover:not(:disabled) {
  background: #fff4e8;
}

.btn--small {
  padding: 4px 12px;
  min-height: 36px;
  font-size: 0.8rem;
}

/* ---- 合計 ---- */
.summary {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 8px;
  text-align: center;
}

.summary span {
  display: block;
  font-size: 0.72rem;
  color: var(--text-muted);
}

.summary--4 {
  grid-template-columns: repeat(4, 1fr);
}

.summary strong {
  font-size: 1.05rem;
}

/* ---- 明細の一覧 ---- */
.entry-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.entry-list li {
  border-bottom: 1px solid var(--border);
}

.entry {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 4px;
  border: none;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.entry:active {
  background: #f0fff0;
}

.entry__main {
  min-width: 0;
}

.entry__title {
  font-size: 0.95rem;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.entry__meta {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.entry__amount {
  font-weight: 700;
}

.entry__amount--out {
  color: var(--out);
}

.entry__amount--in {
  color: var(--in);
}

.empty {
  padding: 14px 0;
  text-align: center;
  color: var(--text-muted);
  border-bottom: none !important;
}

/* ---- 月ごとの一覧(履歴) ---- */
.month-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.month-head,
.month-row {
  display: grid;
  grid-template-columns: 40px repeat(4, minmax(0, 1fr));
  gap: 6px;
  align-items: center;
  text-align: right;
}

.month-head {
  padding: 4px 8px;
  font-size: 0.72rem;
  color: var(--text-muted);
}

.month-head span:first-child,
.month-row span:first-child {
  text-align: left;
}

.month-row {
  width: 100%;
  padding: 10px 8px;
  border: none;
  border-top: 1px solid var(--border);
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 0.78rem;
  cursor: pointer;
}

.month-row--active {
  background: #f0fff0;
  box-shadow: inset 4px 0 0 var(--c-green);
}

.month-row--empty {
  color: #b0b5ba;
}

.month-row__out {
  color: var(--out);
}

.month-row__in {
  color: var(--in);
}

.month-row--empty .month-row__out,
.month-row--empty .month-row__in {
  color: #b0b5ba;
}

/* ---- 設定(並べ替えリスト) ---- */
.order-list {
  margin: 0 0 12px;
  padding: 0;
  list-style: none;
}

.order-item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
}

.order-item__title {
  flex: 1 1 100%;
  min-width: 0;
  font-size: 0.9rem;
  overflow-wrap: anywhere;
}

.order-item input {
  flex: 1 1 100%;
}

.add-row {
  display: flex;
  gap: 8px;
}

.add-row input {
  flex: 1;
}

```
`tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}

```
`vite.config.ts`:

```ts
import { defineConfig } from "vite";
// @ts-expect-error type error without @types/node package
import process from "node:process";
const host = process.env.TAURI_DEV_HOST;

// https://vite.dev/config/
export default defineConfig(() => ({

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent Vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell Vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
}));

```