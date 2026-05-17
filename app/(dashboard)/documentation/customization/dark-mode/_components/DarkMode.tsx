'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function DarkMode() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Dark Mode
    </h2>

    <p className="text-body-tertiary lead mb-2">
It’s effortless to switch Dark Mode in Phoenix. You can enable Dark Mode by default or create a Dark/Light switch if you want. To set the default mode "Dark",you can also set system default theme in Phoenix. Please see the 
      <PhoenixLink href="/documentation/customization/configuration">
configuration page
      </PhoenixLink>
.
    </p>

    <div className="card shadow-none border my-5" data-component-card>
      <div className="card-header p-4 border-bottom bg-body">
        <div className="row g-3 justify-content-between align-items-end">
          <div className="col-12 col-md">
            <h4 className="text-body mb-0">
Toggle Dark Mode
            </h4>
            <p className="mb-0 mt-2 text-body-secondary">
Toggling dark mode is very easy in Phoenix. You can toggle dark, light or auto mode by using checkbox, radio input, switch input and custom icon component.
            </p>
          </div>
          <div className="col col-md-auto">
            <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
              <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                <span className="fas fa-copy me-1">                </span>
Copy Code
              </button>
              <a href="#toggle-dark-mode-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="toggle-dark-mode-code" aria-expanded="false">
                <span className="me-2" data-feather={"code"}>                </span>View code
              </a>
              <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                <span className="me-2" data-feather={"eye"}>                </span>Hide code
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="card-body p-0">
        <div className="collapse code-collapse" id="toggle-dark-mode-code">
          <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"row g-3\\\"> <div class=\\\"col\\\"> <h5 class=\\\"fs-8 mb-2\\\">Checkbox </h5> <div class=\\\"form-check\\\"> <input class=\\\"form-check-input\\\" id=\\\"flexCheckDefault\\\" type=\\\"checkbox\\\" data-theme-control=\\\"phoenixTheme\\\" /> <label class=\\\"form-check-label\\\" for=\\\"flexCheckDefault\\\">Dark mode</label> </div> </div> <div class=\\\"col\\\"> <h5 class=\\\"fs-8 mb-2\\\">Switch Input</h5> <div class=\\\"form-check form-switch ps-0\\\"> <input class=\\\"form-check-input ms-0 me-2\\\" id=\\\"switchDarkModeExample\\\" type=\\\"checkbox\\\" data-theme-control=\\\"phoenixTheme\\\" /> <label for=\\\"switchDarkModeExample\\\">Dark Mode</label> </div> </div> <div class=\\\"col\\\"> <h5 class=\\\"fs-8 mb-2\\\">Custom icon</h5> <div class=\\\"theme-control-toggle fa-ion-wait pe-2\\\"> <input class=\\\"form-check-input ms-0 theme-control-toggle-input\\\" id=\\\"themeControlToggleDoc\\\" type=\\\"checkbox\\\" data-theme-control=\\\"phoenixTheme\\\" value=\\\"dark\\\" /> <label class=\\\"mb-0 theme-control-toggle-label theme-control-toggle-light\\\" for=\\\"themeControlToggleDoc\\\" data-bs-toggle=\\\"tooltip\\\" data-bs-placement=\\\"left\\\" title=\\\"Switch theme\\\"><span class=\\\"icon\\\" data-feather=\\\"moon\\\"></span></label> <label class=\\\"mb-0 theme-control-toggle-label theme-control-toggle-dark\\\" for=\\\"themeControlToggleDoc\\\" data-bs-toggle=\\\"tooltip\\\" data-bs-placement=\\\"left\\\" title=\\\"Switch theme\\\"><span class=\\\"icon\\\" data-feather=\\\"sun\\\"></span></label> </div> </div> <div class=\\\"col\\\"> <h5 class=\\\"fs-9 mb-2\\\">Dropdown</h5> <div class=\\\"dropdown theme-control-dropdown\\\"> <button class=\\\"btn btn-sm btn-phoenix-secondary dropdown-toggle dropdown-caret-none\\\" type=\\\"button\\\" id=\\\"themeSwitchDropdown\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\"><span class=\\\"fas fa-sun\\\" data-theme-dropdown-toggle-icon=\\\"light\\\"></span><span class=\\\"fas fa-moon\\\" data-theme-dropdown-toggle-icon=\\\"dark\\\"></span><span class=\\\"fas fa-adjust\\\" data-theme-dropdown-toggle-icon=\\\"auto\\\"></span></button> <div class=\\\"dropdown-menu dropdown-caret border py-0 mt-2\\\" aria-labelledby=\\\"themeSwitchDropdown\\\"> <div class=\\\"rounded-2 py-2\\\"> <button class=\\\"dropdown-item d-flex align-items-center gap-2\\\" type=\\\"button\\\" value=\\\"light\\\" data-theme-control=\\\"phoenixTheme\\\"><span class=\\\"fas fa-sun\\\"></span>Light<span class=\\\"fas fa-check dropdown-check-icon ms-auto text-body-quaternray\\\"></span></button> <button class=\\\"dropdown-item d-flex align-items-center gap-2\\\" type=\\\"button\\\" value=\\\"dark\\\" data-theme-control=\\\"phoenixTheme\\\"><span class=\\\"fas fa-moon\\\" data-fa-transform=\\\"\\\"></span>Dark<span class=\\\"fas fa-check dropdown-check-icon ms-auto text-body-quaternray\\\"></span></button> <button class=\\\"dropdown-item d-flex align-items-center gap-2\\\" type=\\\"button\\\" value=\\\"auto\\\" data-theme-control=\\\"phoenixTheme\\\"><span class=\\\"fas fa-adjust\\\" data-fa-transform=\\\"\\\"></span>Auto<span class=\\\"fas fa-check dropdown-check-icon ms-auto text-body-quaternray\\\"></span></button> </div> </div> </div> </div> <div class=\\\"col-12\\\"> <h5 class=\\\"fs-8 mb-2\\\">Radio button</h5> <div class=\\\"form-check form-check-inline\\\"> <input class=\\\"form-check-input\\\" id=\\\"flexRadioDefault1\\\" type=\\\"radio\\\" value=\\\"light\\\" data-theme-control=\\\"phoenixTheme\\\" /> <label class=\\\"form-check-label\\\" for=\\\"flexRadioDefault1\\\">Light</label> </div> <div class=\\\"form-check form-check-inline\\\"> <input class=\\\"form-check-input\\\" id=\\\"flexRadioDefault2\\\" type=\\\"radio\\\" value=\\\"dark\\\" data-theme-control=\\\"phoenixTheme\\\" /> <label class=\\\"form-check-label\\\" for=\\\"flexRadioDefault2\\\">Dark</label> </div> <div class=\\\"form-check form-check-inline\\\"> <input class=\\\"form-check-input\\\" id=\\\"flexRadioDefault3\\\" type=\\\"radio\\\" value=\\\"auto\\\" data-theme-control=\\\"phoenixTheme\\\" /> <label class=\\\"form-check-label\\\" for=\\\"flexRadioDefault3\\\">Auto</label> </div> </div> </div></code>"}
          </pre>
        </div>
        <div className="p-4 code-to-copy">
          <div className="row g-3">
            <div className="col">
              <h5 className="fs-8 mb-2">
Checkbox 
              </h5>
              <div className="form-check">
                <input className="form-check-input" id="flexCheckDefault" type="checkbox" data-theme-control={"phoenixTheme"} />
                <label className="form-check-label" htmlFor="flexCheckDefault">
Dark mode
                </label>
              </div>
            </div>
            <div className="col">
              <h5 className="fs-8 mb-2">
Switch Input
              </h5>
              <div className="form-check form-switch ps-0">
                <input className="form-check-input ms-0 me-2" id="switchDarkModeExample" type="checkbox" data-theme-control={"phoenixTheme"} />
                <label htmlFor="switchDarkModeExample">
Dark Mode
                </label>
              </div>
            </div>
            <div className="col">
              <h5 className="fs-8 mb-2">
Custom icon
              </h5>
              <div className="theme-control-toggle fa-ion-wait pe-2">
                <input className="form-check-input ms-0 theme-control-toggle-input" id="themeControlToggleDoc" type="checkbox" data-theme-control={"phoenixTheme"} defaultValue="dark" />
                <label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggleDoc" data-bs-toggle={"tooltip"} data-bs-placement={"left"} title="Switch theme">
                  <span className="icon" data-feather={"moon"}>                  </span>
                </label>
                <label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggleDoc" data-bs-toggle={"tooltip"} data-bs-placement={"left"} title="Switch theme">
                  <span className="icon" data-feather={"sun"}>                  </span>
                </label>
              </div>
            </div>
            <div className="col">
              <h5 className="fs-9 mb-2">
Dropdown
              </h5>
              <div className="dropdown theme-control-dropdown">
                <button className="btn btn-sm btn-phoenix-secondary dropdown-toggle dropdown-caret-none" type="button" id="themeSwitchDropdown" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                  <span className="fas fa-sun" data-theme-dropdown-toggle-icon={"light"}>                  </span>
                  <span className="fas fa-moon" data-theme-dropdown-toggle-icon={"dark"}>                  </span>
                  <span className="fas fa-adjust" data-theme-dropdown-toggle-icon={"auto"}>                  </span>
                </button>
                <div className="dropdown-menu dropdown-caret border py-0 mt-2" aria-labelledby="themeSwitchDropdown">
                  <div className="rounded-2 py-2">
                    <button className="dropdown-item d-flex align-items-center gap-2" type="button" value="light" data-theme-control={"phoenixTheme"}>
                      <span className="fas fa-sun">                      </span>
Light
                      <span className="fas fa-check dropdown-check-icon ms-auto text-body-quaternray">                      </span>
                    </button>
                    <button className="dropdown-item d-flex align-items-center gap-2" type="button" value="dark" data-theme-control={"phoenixTheme"}>
                      <span className="fas fa-moon" data-fa-transform={""}>                      </span>
Dark
                      <span className="fas fa-check dropdown-check-icon ms-auto text-body-quaternray">                      </span>
                    </button>
                    <button className="dropdown-item d-flex align-items-center gap-2" type="button" value="auto" data-theme-control={"phoenixTheme"}>
                      <span className="fas fa-adjust" data-fa-transform={""}>                      </span>
Auto
                      <span className="fas fa-check dropdown-check-icon ms-auto text-body-quaternray">                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <h5 className="fs-8 mb-2">
Radio button
              </h5>
              <div className="form-check form-check-inline">
                <input className="form-check-input" id="flexRadioDefault1" type="radio" defaultValue="light" data-theme-control={"phoenixTheme"} />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
Light
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" id="flexRadioDefault2" type="radio" defaultValue="dark" data-theme-control={"phoenixTheme"} />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
Dark
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" id="flexRadioDefault3" type="radio" defaultValue="auto" data-theme-control={"phoenixTheme"} />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
Auto
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="card shadow-none border my-5" data-component-card>
      <div className="card-header p-4 border-bottom bg-body">
        <div className="row g-3 justify-content-between align-items-center">
          <div className="col-12 col-md">
            <h4 className="text-body mb-0">
If you are using gulp based workflow
            </h4>
          </div>
        </div>
      </div>
      <div className="card-body p-0">
        <div className="collapse code-collapse" id="if-you-are-using-gulp-based-workflow-code">
          <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><h5 class=\\\"mb-2\\\">Modify Dark colors using SCSS</h5> <p class=\\\"mb-0\\\">You can find all the variables used to create the dark mode in <code>/src/scss/theme/root/_dark.scss</code> file. If you want to override a variable, copy that variable to your <code>/src/scss/user.scss</code> file and update it as you see fit. When you change the variable with scss, make sure that the gulp is running.</p></code>"}
          </pre>
        </div>
        <div className="p-4 code-to-copy">
          <h5 className="mb-2">
Modify Dark colors using SCSS
          </h5>
          <p className="mb-0">
You can find all the variables used to create the dark mode in 
            <code>
/src/scss/theme/root/_dark.scss
            </code>
 file. If you want to override a variable, copy that variable to your 
            <code>
/src/scss/user.scss
            </code>
 file and update it as you see fit. When you change the variable with scss, make sure that the gulp is running.
          </p>
        </div>
      </div>
    </div>

    <div className="card shadow-none border my-5" data-component-card>
      <div className="card-header p-4 border-bottom bg-body">
        <div className="row g-3 justify-content-between align-items-center">
          <div className="col-12 col-md">
            <h4 className="text-body mb-0">
If you are not using gulp based workflow
            </h4>
          </div>
        </div>
      </div>
      <div className="card-body p-0">
        <div className="collapse code-collapse" id="if-you-are-not-using-gulp-based-workflow-code">
          <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><h5 class=\\\"mb-2\\\">Modify Dark colors using CSS</h5> <p>You can find all the CSS variables used to create the dark mode in <code>/public/assets/css/theme.css</code> file. Look for the class <code>:root.dark</code> and you will see all the available variables. If you want to override a variable, copy that variable to your <code>/public/assets/css/user.css</code> file and update it as you see fit.</p> <pre class=\\\"language-css\\\"><code class=\\\"lang-css\\\">/*----------------------------------------------- Theme Styles -----------------------------------------------*/ :root, [data-bs-theme=\\\"light\\\"] { --phoenix-body-color: #31374a; --phoenix-body-color-rgb: 49, 55, 74; --phoenix-body-bg: #e3e6ed; --phoenix-body-bg-rgb: 245, 247, 250; } [data-bs-theme=\\\"dark\\\"] { --phoenix-body-color: #9fa6bc; --phoenix-body-color-rgb: 159, 166, 188; --phoenix-body-bg: #0f111a; --phoenix-body-bg-rgb: 15, 17, 26; } </code></pre></code>"}
          </pre>
        </div>
        <div className="p-4 code-to-copy">
          <h5 className="mb-2">
Modify Dark colors using CSS
          </h5>
          <p>
You can find all the CSS variables used to create the dark mode in 
            <code>
/public/assets/css/theme.css
            </code>
 file. Look for the class 
            <code>
:root.dark
            </code>
 and you will see all the available variables. If you want to override a variable, copy that variable to your 
            <code>
/public/assets/css/user.css
            </code>
 file and update it as you see fit.
          </p>
          <pre className="language-css">
{"<code class=\"lang-css\">/*----------------------------------------------- Theme Styles -----------------------------------------------*/ :root, [data-bs-theme=\"light\"] { --phoenix-body-color: #31374a; --phoenix-body-color-rgb: 49, 55, 74; --phoenix-body-bg: #e3e6ed; --phoenix-body-bg-rgb: 245, 247, 250; } [data-bs-theme=\"dark\"] { --phoenix-body-color: #9fa6bc; --phoenix-body-color-rgb: 159, 166, 188; --phoenix-body-bg: #0f111a; --phoenix-body-bg-rgb: 15, 17, 26; } </code>"}
          </pre>
        </div>
      </div>
    </div>

    <div className="card shadow-none border my-5" data-component-card>
      <div className="card-header p-4 border-bottom bg-body">
        <div className="row g-3 justify-content-between align-items-center">
          <div className="col-12 col-md">
            <h4 className="text-body mb-0">
Using the Dark CSS classes in HTML
            </h4>
          </div>
        </div>
      </div>
      <div className="card-body p-0">
        <div className="collapse code-collapse" id="using-the-dark-css-classes-in-html-code">
          <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><h5 class=\\\"mb-3\\\">You can keep a style constant regardless of current (light or dark) mode</h5> <p>If you want a component to retain it’s color (light or dark) as it is regardless of the current mode, you can use the following classes -</p> <p> <code>[data-bs-theme=\\\"light\\\"]</code> - It will keep the color light even if the current mode is dark</p> <p> <code>[data-bs-theme=\\\"dark\\\"]</code> - It will keep the color dark even if the current mode is light</p> <p>The following two examples illustrate the color persistency -</p> <div class=\\\"row gx-3\\\"> <div class=\\\"col-lg-6\\\"> <h5>Keep the color light even if the current mode is dark</h5> <div class=\\\"card bg-body-highlight\\\" data-bs-theme=\\\"light\\\"> <div class=\\\"card-body\\\"> <p class=\\\"mb-0 text-body-tertiary\\\"><b>This element will retain its color if you switch between light and dark modes.</b></p> </div> </div> <pre class=\\\"mt-2\\\"><code class=\\\"language-html\\\">&lt;div class=&quot;card bg-body-highlight&quot; data-bs-theme=&quot;light&quot;&gt; &lt;div class=&quot;card-body&quot;&gt; &lt;p class=&quot;mb-0 text-body-tertiary&quot;&gt;&lt;b&gt;This element will retain its color if you switch between light and dark modes.&lt;/b&gt;&lt;/p&gt; &lt;/div&gt; &lt;/div&gt;</code></pre> </div> <div class=\\\"col-lg-6\\\"> <h5>Keep the color dark even if the current mode is light</h5> <div class=\\\"card bg-body-highlight\\\" data-bs-theme=\\\"dark\\\"> <div class=\\\"card-body\\\"> <p class=\\\"mb-0 text-body-tertiary\\\"><b>This element will retain its color if you switch between light and dark modes.</b></p> </div> </div> <pre class=\\\"mt-2\\\"><code class=\\\"language-html\\\">&lt;div class=&quot;card bg-body-highlight&quot; data-bs-theme=&quot;dark&quot;&gt; &lt;div class=&quot;card-body&quot;&gt; &lt;p class=&quot;mb-0 text-body-tertiary&quot;&gt;&lt;b&gt;This element will retain its color if you switch between light and dark modes.&lt;/b&gt;&lt;/p&gt; &lt;/div&gt; &lt;/div&gt;</code></pre> </div> </div> <h6 class=\\\"fs-8 mt-4\\\">Override Background and Text color only for dark mode</h6> <p>If you want to use a different text color or background color rather than the default dark theme color for any element, you can use the special \\\"dark\\\" classes: </p> <ul> <li> <code>dark__bg-* </code></li> <li><code>dark__text-* </code></li> </ul> <p>The following element illustrates the example:</p> <div class=\\\"card bg-light dark__bg-primary\\\"> <div class=\\\"card-body\\\"> <p class=\\\"mb-0\\\"><span class=\\\"fw-bold\\\">This element will get different bg color rather than the default dark theme color.</span></p> </div> </div> <pre class=\\\"mt-2\\\"><code class=\\\"language-html\\\">&lt;div class=&quot;card bg-light dark__bg-primary&quot;&gt; &lt;div class=&quot;card-body&quot;&gt; &lt;p class=&quot;mb-0&quot;&gt;&lt;span class=&quot;fw-bold&quot;&gt;This element will get different bg color rather than the default dark theme color.&lt;/span&gt;&lt;/p&gt; &lt;/div&gt; &lt;/div&gt;</code></pre></code>"}
          </pre>
        </div>
        <div className="p-4 code-to-copy">
          <h5 className="mb-3">
You can keep a style constant regardless of current (light or dark) mode
          </h5>
          <p>
If you want a component to retain it’s color (light or dark) as it is regardless of the current mode, you can use the following classes -
          </p>
          <p>
            <code>
[data-bs-theme="light"]
            </code>
 - It will keep the color light even if the current mode is dark
          </p>
          <p>
            <code>
[data-bs-theme="dark"]
            </code>
 - It will keep the color dark even if the current mode is light
          </p>
          <p>
The following two examples illustrate the color persistency -
          </p>
          <div className="row gx-3">
            <div className="col-lg-6">
              <h5>
Keep the color light even if the current mode is dark
              </h5>
              <div className="card bg-body-highlight" data-bs-theme={"light"}>
                <div className="card-body">
                  <p className="mb-0 text-body-tertiary">
                    <b>
This element will retain its color if you switch between light and dark modes.
                    </b>
                  </p>
                </div>
              </div>
              <pre className="mt-2">
{"<code class=\"language-html\"><div class=\\\"card bg-body-highlight\\\" data-bs-theme=\\\"light\\\"> <div class=\\\"card-body\\\"> <p class=\\\"mb-0 text-body-tertiary\\\"><b>This element will retain its color if you switch between light and dark modes.</b></p> </div> </div></code>"}
              </pre>
            </div>
            <div className="col-lg-6">
              <h5>
Keep the color dark even if the current mode is light
              </h5>
              <div className="card bg-body-highlight" data-bs-theme={"dark"}>
                <div className="card-body">
                  <p className="mb-0 text-body-tertiary">
                    <b>
This element will retain its color if you switch between light and dark modes.
                    </b>
                  </p>
                </div>
              </div>
              <pre className="mt-2">
{"<code class=\"language-html\"><div class=\\\"card bg-body-highlight\\\" data-bs-theme=\\\"dark\\\"> <div class=\\\"card-body\\\"> <p class=\\\"mb-0 text-body-tertiary\\\"><b>This element will retain its color if you switch between light and dark modes.</b></p> </div> </div></code>"}
              </pre>
            </div>
          </div>
          <h6 className="fs-8 mt-4">
Override Background and Text color only for dark mode
          </h6>
          <p>
If you want to use a different text color or background color rather than the default dark theme color for any element, you can use the special "dark" classes: 
          </p>
          <ul>
            <li>
              <code>
dark__bg-* 
              </code>
            </li>
            <li>
              <code>
dark__text-* 
              </code>
            </li>
          </ul>
          <p>
The following element illustrates the example:
          </p>
          <div className="card bg-light dark__bg-primary">
            <div className="card-body">
              <p className="mb-0">
                <span className="fw-bold">
This element will get different bg color rather than the default dark theme color.
                </span>
              </p>
            </div>
          </div>
          <pre className="mt-2">
{"<code class=\"language-html\"><div class=\\\"card bg-light dark__bg-primary\\\"> <div class=\\\"card-body\\\"> <p class=\\\"mb-0\\\"><span class=\\\"fw-bold\\\">This element will get different bg color rather than the default dark theme color.</span></p> </div> </div></code>"}
          </pre>
        </div>
      </div>
    </div>

    <div className="card shadow-none border my-5" data-component-card>
      <div className="card-header p-4 border-bottom bg-body">
        <div className="row g-3 justify-content-between align-items-center">
          <div className="col-12 col-md">
            <h4 className="text-body mb-0">
Emit JavaScript event on color scheme change
            </h4>
          </div>
        </div>
      </div>
      <div className="card-body p-0">
        <div className="collapse code-collapse" id="emit-javascript-event-on-color-scheme-change-code">
          <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p>When you switch between the dark and light mode, or change any settings from the global theme config at runtime, we emit an event <code>clickControl</code>.<br />We used this event to update colors using JavaScript. For example, the charts change their colors using this event. You can catch and use this event with the following code snippet:</p> <pre><code class=\\\"lang-js\\\">const themeController = document.body; themeController.addEventListener( \\\"clickControl\\\", ({ detail: { control, value } }) => { if (control === \\\"phoenixTheme\\\") { // value will be localStorage theme value (dark/light/auto) const mode = value === 'auto' ? window.phoenix.utils.getSystemTheme() : value; console.log(mode) // your code here } } );</code></pre></code>"}
          </pre>
        </div>
        <div className="p-4 code-to-copy">
          <p>
When you switch between the dark and light mode, or change any settings from the global theme config at runtime, we emit an event 
            <code>
clickControl
            </code>
.
            <br />
We used this event to update colors using JavaScript. For example, the charts change their colors using this event. You can catch and use this event with the following code snippet:
          </p>
          <pre>
{"<code class=\"lang-js\">const themeController = document.body; themeController.addEventListener( \"clickControl\", ({ detail: { control, value } }) => { if (control === \"phoenixTheme\") { // value will be localStorage theme value (dark/light/auto) const mode = value === 'auto' ? window.phoenix.utils.getSystemTheme() : value; console.log(mode) // your code here } } );</code>"}
          </pre>
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
