'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Configuration() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Setting up configuration
    </h2>

    <p className="text-body-tertiary lead mb-2">
Phoenix has a global configuration system. You can change the theme settings with a single global javascript object.
    </p>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="card shadow-none border my-5" data-component-card>
            <div className="card-header p-4 border-bottom bg-body">
              <div className="row g-3 justify-content-between align-items-center">
                <div className="col-12 col-md">
                  <h4 className="text-body mb-0" data-anchor>
Setting configuration
                  </h4>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="collapse code-collapse" id="setting-configuration-code">
                <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><h5>For Gulp based workflow</h5> <p>Edit the <code>src/js/config.js</code> file.</p> <h5>If you are not using Gulp based workflow</h5> <p>Edit the <code>public/assets/js/config.js</code> file.</p> <h5 class=\\\"fs-8\\\">Configuration object:</h5> <pre><code class=\\\"lang-js\\\">const initialConfig = { phoenixIsNavbarVerticalCollapsed: false, phoenixTheme: 'light', phoenixNavbarTopStyle: 'default', phoenixNavbarVerticalStyle: 'default', phoenixNavbarPosition: 'vertical', phoenixNavbarTopShape: 'default', phoenixIsRTL: false, phoenixSupportChat: true }; </code></pre></code>"}
                </pre>
              </div>
              <div className="p-4 code-to-copy">
                <h5>
For Gulp based workflow
                </h5>
                <p>
Edit the 
                  <code>
src/js/config.js
                  </code>
 file.
                </p>
                <h5>
If you are not using Gulp based workflow
                </h5>
                <p>
Edit the 
                  <code>
public/assets/js/config.js
                  </code>
 file.
                </p>
                <h5 className="fs-8">
Configuration object:
                </h5>
                <pre>
{"<code class=\"lang-js\">const initialConfig = { phoenixIsNavbarVerticalCollapsed: false, phoenixTheme: 'light', phoenixNavbarTopStyle: 'default', phoenixNavbarVerticalStyle: 'default', phoenixNavbarPosition: 'vertical', phoenixNavbarTopShape: 'default', phoenixIsRTL: false, phoenixSupportChat: true }; </code>"}
                </pre>
              </div>
            </div>
          </div>
          <div className="card shadow-none border my-5" data-component-card>
            <div className="card-header p-4 border-bottom bg-body">
              <div className="row g-3 justify-content-between align-items-center">
                <div className="col-12 col-md">
                  <h4 className="text-body mb-0" data-anchor>
Available Options
                  </h4>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="collapse code-collapse" id="available-options-code">
                <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"table-responsive scrollbar\\\"> <table class=\\\"table table-bordered border border-translucent fs-9 mb-0\\\"> <thead class=\\\"bg-body-secondary text-body\\\"><tr> <th class=\\\"white-space-nowrap\\\">Option</th> <th class=\\\"white-space-nowrap\\\">Type</th> <th class=\\\"white-space-nowrap\\\">Defaults</th> <th class=\\\"white-space-nowrap\\\" style=\\\"min-width: 20rem\\\">Description</th> </tr> </thead> <tbody> <tr> <td class=\\\"ps-2 white-space-nowrap\\\">phoenixIsNavbarVerticalCollapsed</td> <td class=\\\"white-space-nowrap\\\" style=\\\"min-width: 7rem\\\"><code>Boolean</code></td> <td class=\\\"white-space-nowrap\\\" style=\\\"min-width: 7rem\\\"><code>false</code></td> <td class=\\\"pe-2\\\">Set <code>true</code> to make the vertical navbar stay collapsed when the page loads. </td> </tr> <tr> <td class=\\\"ps-2 white-space-nowrap\\\">phoenixTheme</td> <td><code>string </code></td> <td class=\\\"white-space-nowrap\\\"> <code>light </code></td> <td class=\\\"pe-2\\\">This option is for setting up the default color mode (<code>light</code>, <code>dark</code> or <code>auto</code>) for your project. Set <code>dark</code> to make the default color mode dark.</td> </tr> <tr> <td class=\\\"ps-2 white-space-nowrap\\\">phoenixNavbarTopStyle</td> <td><code>string </code></td> <td class=\\\"white-space-nowrap\\\"> <code>default </code></td> <td class=\\\"pe-2\\\">Set <code>darker </code>to make the top navbar darker when the page loads.</td> </tr> <tr> <td class=\\\"ps-2 white-space-nowrap\\\">phoenixNavbarVerticalStyle</td> <td><code>string </code></td> <td class=\\\"white-space-nowrap\\\"> <code>default </code></td> <td class=\\\"pe-2\\\">Set <code>darker </code>to make the vertical navbar darker when the page loads.</td> </tr> <tr> <td class=\\\"ps-2 white-space-nowrap\\\">phoenixNavbarPosition</td> <td><code>string </code></td> <td class=\\\"white-space-nowrap\\\"> <code>vertical </code></td> <td class=\\\"pe-2\\\">This option is for changing the navigation type. Available values: <ul class=\\\"mb-0\\\"> <li><code>vertical</code></li> <li><code>horizontal</code></li> <li><code>combo</code></li> </ul> </td> </tr> <tr> <td class=\\\"ps-2 white-space-nowrap\\\">phoenixNavbarTopShape</td> <td><code>string </code></td> <td class=\\\"white-space-nowrap\\\"> <code>default </code></td> <td class=\\\"pe-2\\\">Set <code>slim </code>to make the top navbar slim when the page loads.</td> </tr> <tr> <td class=\\\"ps-2 white-space-nowrap\\\">phoenixIsRTL</td> <td><code>Boolean</code></td> <td><code>false</code></td> <td class=\\\"pe-2\\\">Use <code>true</code> to make the whole layout RTL (Right to Left). Recommended for languages such as Arabic, Hebrew, or other RTL languages.</td> </tr> <tr> <td class=\\\"ps-2 white-space-nowrap\\\">phoenixSupportChat</td> <td class=\\\"white-space-nowrap\\\"> <code>Boolean </code></td> <td class=\\\"white-space-nowrap\\\"> <code>true</code></td> <td class=\\\"pe-2\\\">This option is for showing the chat widget. Set <code>false </code>to hide the chat widget when the page loads.</td> </tr> </tbody> </table> </div></code>"}
                </pre>
              </div>
              <div className="p-4 code-to-copy">
                <div className="table-responsive scrollbar">
                  <table className="table table-bordered border border-translucent fs-9 mb-0">
                    <thead className="bg-body-secondary text-body"><tr>
                        <th className="white-space-nowrap">
Option
                        </th>
                        <th className="white-space-nowrap">
Type
                        </th>
                        <th className="white-space-nowrap">
Defaults
                        </th>
                        <th className="white-space-nowrap" style={{"minWidth":"20rem"} as CSSProperties}>
Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="ps-2 white-space-nowrap">
phoenixIsNavbarVerticalCollapsed
                        </td>
                        <td className="white-space-nowrap" style={{"minWidth":"7rem"} as CSSProperties}>
                          <code>
Boolean
                          </code>
                        </td>
                        <td className="white-space-nowrap" style={{"minWidth":"7rem"} as CSSProperties}>
                          <code>
false
                          </code>
                        </td>
                        <td className="pe-2">
Set 
                          <code>
true
                          </code>
 to make the vertical navbar stay collapsed when the page loads. 
                        </td>
                      </tr>
                      <tr>
                        <td className="ps-2 white-space-nowrap">
phoenixTheme
                        </td>
                        <td>
                          <code>
string 
                          </code>
                        </td>
                        <td className="white-space-nowrap">
                          <code>
light 
                          </code>
                        </td>
                        <td className="pe-2">
This option is for setting up the default color mode (
                          <code>
light
                          </code>
, 
                          <code>
dark
                          </code>
 or 
                          <code>
auto
                          </code>
) for your project. Set 
                          <code>
dark
                          </code>
 to make the default color mode dark.
                        </td>
                      </tr>
                      <tr>
                        <td className="ps-2 white-space-nowrap">
phoenixNavbarTopStyle
                        </td>
                        <td>
                          <code>
string 
                          </code>
                        </td>
                        <td className="white-space-nowrap">
                          <code>
default 
                          </code>
                        </td>
                        <td className="pe-2">
Set 
                          <code>
darker 
                          </code>
to make the top navbar darker when the page loads.
                        </td>
                      </tr>
                      <tr>
                        <td className="ps-2 white-space-nowrap">
phoenixNavbarVerticalStyle
                        </td>
                        <td>
                          <code>
string 
                          </code>
                        </td>
                        <td className="white-space-nowrap">
                          <code>
default 
                          </code>
                        </td>
                        <td className="pe-2">
Set 
                          <code>
darker 
                          </code>
to make the vertical navbar darker when the page loads.
                        </td>
                      </tr>
                      <tr>
                        <td className="ps-2 white-space-nowrap">
phoenixNavbarPosition
                        </td>
                        <td>
                          <code>
string 
                          </code>
                        </td>
                        <td className="white-space-nowrap">
                          <code>
vertical 
                          </code>
                        </td>
                        <td className="pe-2">
This option is for changing the navigation type. Available values: 
                          <ul className="mb-0">
                            <li>
                              <code>
vertical
                              </code>
                            </li>
                            <li>
                              <code>
horizontal
                              </code>
                            </li>
                            <li>
                              <code>
combo
                              </code>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="ps-2 white-space-nowrap">
phoenixNavbarTopShape
                        </td>
                        <td>
                          <code>
string 
                          </code>
                        </td>
                        <td className="white-space-nowrap">
                          <code>
default 
                          </code>
                        </td>
                        <td className="pe-2">
Set 
                          <code>
slim 
                          </code>
to make the top navbar slim when the page loads.
                        </td>
                      </tr>
                      <tr>
                        <td className="ps-2 white-space-nowrap">
phoenixIsRTL
                        </td>
                        <td>
                          <code>
Boolean
                          </code>
                        </td>
                        <td>
                          <code>
false
                          </code>
                        </td>
                        <td className="pe-2">
Use 
                          <code>
true
                          </code>
 to make the whole layout RTL (Right to Left). Recommended for languages such as Arabic, Hebrew, or other RTL languages.
                        </td>
                      </tr>
                      <tr>
                        <td className="ps-2 white-space-nowrap">
phoenixSupportChat
                        </td>
                        <td className="white-space-nowrap">
                          <code>
Boolean 
                          </code>
                        </td>
                        <td className="white-space-nowrap">
                          <code>
true
                          </code>
                        </td>
                        <td className="pe-2">
This option is for showing the chat widget. Set 
                          <code>
false 
                          </code>
to hide the chat widget when the page loads.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-2">
          <div className="position-sticky mt-xl-4" style={{"top":"80px"} as CSSProperties}>
            <h5 className="lh-1">
On this page 
            </h5>
            <hr />
            <ul className="nav nav-vertical flex-column doc-nav" data-doc-nav>
              <li className="nav-item">
                <a href="#setting-configuration" className="nav-link">
Setting configuration
                </a>
              </li>
              <li className="nav-item">
                <a href="#available-options" className="nav-link">
Available Options
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="position-fixed bottom-0 end-0 p-3" style={{"zIndex":"1050"} as CSSProperties}>
      <div className="toast align-items-center text-white bg-dark border-0" id="icon-copied-toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="d-flex" data-bs-theme={"dark"}>
          <div className="toast-body p-3">          </div>
          <button className="btn-close me-2 m-auto" type="button" data-bs-dismiss={"toast"} aria-label="Close">          </button>
        </div>
      </div>
    </div>

    <footer className="footer position-absolute">
      <div className="row g-0 justify-content-between align-items-center h-100">
        <div className="col-12 col-sm-auto text-center">
          <p className="mb-0 mt-2 mt-sm-0 text-body">
Thank you for creating with Phoenix
            <span className="d-none d-sm-inline-block">            </span>
            <span className="d-none d-sm-inline-block mx-1">
|
            </span>
            <br className="d-sm-none" />
2025 ©
            <a href="https://themewagon.com" className="mx-1">
Themewagon
            </a>
          </p>
        </div>
        <div className="col-12 col-sm-auto text-center">
          <p className="mb-0 text-body-tertiary text-opacity-85">
v1.22.0
          </p>
        </div>
      </div>
    </footer>

    </div>
  );
}
