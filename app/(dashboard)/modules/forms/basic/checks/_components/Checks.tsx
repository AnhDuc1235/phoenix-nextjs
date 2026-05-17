'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Checks() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Checks
    </h2>

    <p className="text-body-tertiary lead mb-2">
Create consistent cross-browser and cross-device checkboxes and radios with our completely rewritten checks component.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/forms/checks-radios/" className="btn btn-link p-0"  target="_blank">
Checks on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="mb-9">
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Checks
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#checks-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="checks-code" aria-expanded="false">
                        <span className="me-2" data-feather={"code"}>                        </span>View code
                      </a>
                      <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                        <span className="me-2" data-feather={"eye"}>                        </span>Hide code
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="checks-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"form-check\\\"> <input class=\\\"form-check-input\\\" id=\\\"flexCheckDefault\\\" type=\\\"checkbox\\\" value=\\\"\\\" /> <label class=\\\"form-check-label\\\" for=\\\"flexCheckDefault\\\">Default checkbox</label> </div> <div class=\\\"form-check\\\"> <input class=\\\"form-check-input\\\" id=\\\"flexCheckChecked\\\" type=\\\"checkbox\\\" value=\\\"\\\" checked=\\\"\\\" /> <label class=\\\"form-check-label\\\" for=\\\"flexCheckChecked\\\">Checked checkbox</label> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="form-check">
                    <input className="form-check-input" id="flexCheckDefault" type="checkbox" defaultValue="" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
Default checkbox
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" id="flexCheckChecked" type="checkbox" defaultValue="" defaultChecked />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
Checked checkbox
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Radios
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#radios-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="radios-code" aria-expanded="false">
                        <span className="me-2" data-feather={"code"}>                        </span>View code
                      </a>
                      <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                        <span className="me-2" data-feather={"eye"}>                        </span>Hide code
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="radios-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"form-check\\\"> <input class=\\\"form-check-input\\\" id=\\\"flexRadioDefault1\\\" type=\\\"radio\\\" name=\\\"flexRadioDefault\\\" /> <label class=\\\"form-check-label\\\" for=\\\"flexRadioDefault1\\\">Default radio</label> </div> <div class=\\\"form-check\\\"> <input class=\\\"form-check-input\\\" id=\\\"flexRadioDefault2\\\" type=\\\"radio\\\" name=\\\"flexRadioDefault\\\" checked=\\\"\\\" /> <label class=\\\"form-check-label\\\" for=\\\"flexRadioDefault2\\\">Default checked radio</label> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="form-check">
                    <input className="form-check-input" id="flexRadioDefault1" type="radio" name="flexRadioDefault" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
Default radio
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" id="flexRadioDefault2" type="radio" name="flexRadioDefault" defaultChecked />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
Default checked radio
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Switches
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#switches-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="switches-code" aria-expanded="false">
                        <span className="me-2" data-feather={"code"}>                        </span>View code
                      </a>
                      <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                        <span className="me-2" data-feather={"eye"}>                        </span>Hide code
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="switches-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"form-check form-switch\\\"> <input class=\\\"form-check-input\\\" id=\\\"flexSwitchCheckDefault\\\" type=\\\"checkbox\\\" /> <label class=\\\"form-check-label\\\" for=\\\"flexSwitchCheckDefault\\\">Default switch checkbox input</label> </div> <div class=\\\"form-check form-switch\\\"> <input class=\\\"form-check-input\\\" id=\\\"flexSwitchCheckChecked\\\" type=\\\"checkbox\\\" checked=\\\"\\\" /> <label class=\\\"form-check-label\\\" for=\\\"flexSwitchCheckChecked\\\">Checked switch checkbox input</label> </div> <div class=\\\"form-check form-switch\\\"> <input class=\\\"form-check-input\\\" id=\\\"flexSwitchCheckDisabled\\\" type=\\\"checkbox\\\" disabled=\\\"\\\" /> <label class=\\\"form-check-label\\\" for=\\\"flexSwitchCheckDisabled\\\">Disabled switch checkbox input</label> </div> <div class=\\\"form-check form-switch\\\"> <input class=\\\"form-check-input\\\" id=\\\"flexSwitchCheckCheckedDisabled\\\" type=\\\"checkbox\\\" checked=\\\"\\\" disabled=\\\"\\\" /> <label class=\\\"form-check-label\\\" for=\\\"flexSwitchCheckCheckedDisabled\\\">Disabled checked switch checkbox input</label> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="form-check form-switch">
                    <input className="form-check-input" id="flexSwitchCheckDefault" type="checkbox" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
Default switch checkbox input
                    </label>
                  </div>
                  <div className="form-check form-switch">
                    <input className="form-check-input" id="flexSwitchCheckChecked" type="checkbox" defaultChecked />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
Checked switch checkbox input
                    </label>
                  </div>
                  <div className="form-check form-switch">
                    <input className="form-check-input" id="flexSwitchCheckDisabled" type="checkbox" disabled />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">
Disabled switch checkbox input
                    </label>
                  </div>
                  <div className="form-check form-switch">
                    <input className="form-check-input" id="flexSwitchCheckCheckedDisabled" type="checkbox" defaultChecked disabled />
                    <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">
Disabled checked switch checkbox input
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Check Inline
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#check-inline-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="check-inline-code" aria-expanded="false">
                        <span className="me-2" data-feather={"code"}>                        </span>View code
                      </a>
                      <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                        <span className="me-2" data-feather={"eye"}>                        </span>Hide code
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="check-inline-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"form-check form-check-inline\\\"> <input class=\\\"form-check-input\\\" id=\\\"inlineCheckbox1\\\" type=\\\"checkbox\\\" value=\\\"option1\\\" /> <label class=\\\"form-check-label\\\" for=\\\"inlineCheckbox1\\\">Item 1</label> </div> <div class=\\\"form-check form-check-inline\\\"> <input class=\\\"form-check-input\\\" id=\\\"inlineCheckbox2\\\" type=\\\"checkbox\\\" value=\\\"option2\\\" /> <label class=\\\"form-check-label\\\" for=\\\"inlineCheckbox2\\\">Item 2</label> </div> <div class=\\\"form-check form-check-inline\\\"> <input class=\\\"form-check-input\\\" id=\\\"inlineCheckbox3\\\" type=\\\"checkbox\\\" value=\\\"option3\\\" disabled=\\\"\\\" /> <label class=\\\"form-check-label\\\" for=\\\"inlineCheckbox3\\\">Item 3 (disabled)</label> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" id="inlineCheckbox1" type="checkbox" defaultValue="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">
Item 1
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" id="inlineCheckbox2" type="checkbox" defaultValue="option2" />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">
Item 2
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" id="inlineCheckbox3" type="checkbox" defaultValue="option3" disabled />
                    <label className="form-check-label" htmlFor="inlineCheckbox3">
Item 3 (disabled)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Radio Inline
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#radio-inline-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="radio-inline-code" aria-expanded="false">
                        <span className="me-2" data-feather={"code"}>                        </span>View code
                      </a>
                      <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                        <span className="me-2" data-feather={"eye"}>                        </span>Hide code
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="radio-inline-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"form-check form-check-inline\\\"> <input class=\\\"form-check-input\\\" id=\\\"inlineRadio1\\\" type=\\\"radio\\\" name=\\\"inlineRadioOptions\\\" value=\\\"option1\\\" /> <label class=\\\"form-check-label\\\" for=\\\"inlineRadio1\\\">Item 1</label> </div> <div class=\\\"form-check form-check-inline\\\"> <input class=\\\"form-check-input\\\" id=\\\"inlineRadio2\\\" type=\\\"radio\\\" name=\\\"inlineRadioOptions\\\" value=\\\"option2\\\" /> <label class=\\\"form-check-label\\\" for=\\\"inlineRadio2\\\">item 2</label> </div> <div class=\\\"form-check form-check-inline\\\"> <input class=\\\"form-check-input\\\" id=\\\"inlineRadio3\\\" type=\\\"radio\\\" name=\\\"inlineRadioOptions\\\" value=\\\"option3\\\" disabled=\\\"\\\" /> <label class=\\\"form-check-label\\\" for=\\\"inlineRadio3\\\">Item 3 (disabled)</label> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" id="inlineRadio1" type="radio" name="inlineRadioOptions" defaultValue="option1" />
                    <label className="form-check-label" htmlFor="inlineRadio1">
Item 1
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" id="inlineRadio2" type="radio" name="inlineRadioOptions" defaultValue="option2" />
                    <label className="form-check-label" htmlFor="inlineRadio2">
item 2
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" id="inlineRadio3" type="radio" name="inlineRadioOptions" defaultValue="option3" disabled />
                    <label className="form-check-label" htmlFor="inlineRadio3">
Item 3 (disabled)
                    </label>
                  </div>
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
                <a href="#checks" className="nav-link">
Checks
                </a>
              </li>
              <li className="nav-item">
                <a href="#radios" className="nav-link">
Radios
                </a>
              </li>
              <li className="nav-item">
                <a href="#switches" className="nav-link">
Switches
                </a>
              </li>
              <li className="nav-item">
                <a href="#check-inline" className="nav-link">
Check Inline
                </a>
              </li>
              <li className="nav-item">
                <a href="#radio-inline" className="nav-link">
Radio Inline
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
