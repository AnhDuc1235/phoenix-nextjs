'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Validation() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Validation
    </h2>

    <p className="text-body-tertiary lead mb-2">
Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and JavaScript.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/forms/validation/" className="btn btn-link p-0"  target="_blank">
Forms validation on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
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
Custom styles Example
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#custom-styles-example-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="custom-styles-example-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="custom-styles-example-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><form class=\\\"row g-3 needs-validation\\\" novalidate=\\\"\\\"> <div class=\\\"col-md-4\\\"> <label class=\\\"form-label\\\" for=\\\"validationCustom01\\\">First name</label> <input class=\\\"form-control\\\" id=\\\"validationCustom01\\\" type=\\\"text\\\" value=\\\"Mark\\\" required=\\\"\\\" /> <div class=\\\"valid-feedback\\\">Looks good!</div> </div> <div class=\\\"col-md-4\\\"> <label class=\\\"form-label\\\" for=\\\"validationCustom02\\\">Last name</label> <input class=\\\"form-control\\\" id=\\\"validationCustom02\\\" type=\\\"text\\\" value=\\\"Otto\\\" required=\\\"\\\" /> <div class=\\\"valid-feedback\\\">Looks good!</div> </div> <div class=\\\"col-md-4\\\"> <label class=\\\"form-label\\\" for=\\\"validationCustomUsername\\\">Username</label> <div class=\\\"input-group has-validation\\\"> <span class=\\\"input-group-text\\\" id=\\\"inputGroupPrepend\\\">@</span> <input class=\\\"form-control\\\" id=\\\"validationCustomUsername\\\" type=\\\"text\\\" aria-describedby=\\\"inputGroupPrepend\\\" required=\\\"\\\" /> <div class=\\\"invalid-feedback\\\">Please choose a username.</div> </div> </div> <div class=\\\"col-md-6\\\"> <label class=\\\"form-label\\\" for=\\\"validationCustom03\\\">City</label> <input class=\\\"form-control\\\" id=\\\"validationCustom03\\\" type=\\\"text\\\" required=\\\"\\\" /> <div class=\\\"invalid-feedback\\\">Please provide a valid city.</div> </div> <div class=\\\"col-md-3\\\"> <label class=\\\"form-label\\\" for=\\\"validationCustom04\\\">State</label> <select class=\\\"form-select\\\" id=\\\"validationCustom04\\\" required=\\\"\\\"> <option selected=\\\"\\\" disabled=\\\"\\\" value=\\\"\\\">Choose...</option> <option>...</option> </select> <div class=\\\"invalid-feedback\\\">Please select a valid state.</div> </div> <div class=\\\"col-md-3\\\"> <label class=\\\"form-label\\\" for=\\\"validationCustom05\\\">Zip</label> <input class=\\\"form-control\\\" id=\\\"validationCustom05\\\" type=\\\"text\\\" required=\\\"\\\" /> <div class=\\\"invalid-feedback\\\">Please provide a valid zip.</div> </div> <div class=\\\"col-12\\\"> <div class=\\\"form-check\\\"> <input class=\\\"form-check-input\\\" id=\\\"invalidCheck\\\" type=\\\"checkbox\\\" value=\\\"\\\" required=\\\"\\\" /> <label class=\\\"form-check-label mb-0\\\" for=\\\"invalidCheck\\\">Agree to terms and conditions</label> <div class=\\\"invalid-feedback mt-0\\\">You must agree before submitting.</div> </div> </div> <div class=\\\"col-12\\\"> <button class=\\\"btn btn-primary\\\" type=\\\"submit\\\">Submit form</button> </div> </form></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <form className="row g-3 needs-validation" noValidate>
                    <div className="col-md-4">
                      <label className="form-label" htmlFor="validationCustom01">
First name
                      </label>
                      <input className="form-control" id="validationCustom01" type="text" defaultValue="Mark" required />
                      <div className="valid-feedback">
Looks good!
                      </div>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label" htmlFor="validationCustom02">
Last name
                      </label>
                      <input className="form-control" id="validationCustom02" type="text" defaultValue="Otto" required />
                      <div className="valid-feedback">
Looks good!
                      </div>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label" htmlFor="validationCustomUsername">
Username
                      </label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">
@
                        </span>
                        <input className="form-control" id="validationCustomUsername" type="text" aria-describedby="inputGroupPrepend" required />
                        <div className="invalid-feedback">
Please choose a username.
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="validationCustom03">
City
                      </label>
                      <input className="form-control" id="validationCustom03" type="text" required />
                      <div className="invalid-feedback">
Please provide a valid city.
                      </div>
                    </div>
                    <div className="col-md-3">
                      <label className="form-label" htmlFor="validationCustom04">
State
                      </label>
                      <select className="form-select" id="validationCustom04" required>
                        <option disabled value="">
Choose...
                        </option>
                        <option>
...
                        </option>
                      </select>
                      <div className="invalid-feedback">
Please select a valid state.
                      </div>
                    </div>
                    <div className="col-md-3">
                      <label className="form-label" htmlFor="validationCustom05">
Zip
                      </label>
                      <input className="form-control" id="validationCustom05" type="text" required />
                      <div className="invalid-feedback">
Please provide a valid zip.
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" id="invalidCheck" type="checkbox" defaultValue="" required />
                        <label className="form-check-label mb-0" htmlFor="invalidCheck">
Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback mt-0">
You must agree before submitting.
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary" type="submit">
Submit form
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Tooltips
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#tooltips-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="tooltips-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="tooltips-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><form class=\\\"row g-3 needs-validation\\\" novalidate=\\\"\\\"> <div class=\\\"col-md-4 position-relative\\\"> <label class=\\\"form-label\\\" for=\\\"validationTooltip01\\\">First name</label> <input class=\\\"form-control\\\" id=\\\"validationTooltip01\\\" type=\\\"text\\\" value=\\\"Mark\\\" required=\\\"\\\" /> <div class=\\\"valid-tooltip\\\">Looks good!</div> </div> <div class=\\\"col-md-4 position-relative\\\"> <label class=\\\"form-label\\\" for=\\\"validationTooltip02\\\">Last name</label> <input class=\\\"form-control\\\" id=\\\"validationTooltip02\\\" type=\\\"text\\\" value=\\\"Otto\\\" required=\\\"\\\" /> <div class=\\\"valid-tooltip\\\">Looks good!</div> </div> <div class=\\\"col-md-4 position-relative\\\"> <label class=\\\"form-label\\\" for=\\\"validationTooltipUsername\\\">Username</label> <div class=\\\"input-group\\\"> <span class=\\\"input-group-text\\\" id=\\\"validationTooltipUsernamePrepend\\\">@</span> <input class=\\\"form-control\\\" id=\\\"validationTooltipUsername\\\" type=\\\"text\\\" aria-describedby=\\\"validationTooltipUsernamePrepend\\\" required=\\\"\\\" /> <div class=\\\"invalid-tooltip\\\">Please choose a unique and valid username.</div> </div> </div> <div class=\\\"col-md-6 position-relative\\\"> <label class=\\\"form-label\\\" for=\\\"validationTooltip03\\\">City</label> <input class=\\\"form-control\\\" id=\\\"validationTooltip03\\\" type=\\\"text\\\" required=\\\"\\\" /> <div class=\\\"invalid-tooltip\\\">Please provide a valid city.</div> </div> <div class=\\\"col-md-3 position-relative\\\"> <label class=\\\"form-label\\\" for=\\\"validationTooltip04\\\">State</label> <select class=\\\"form-select\\\" id=\\\"validationTooltip04\\\" required=\\\"\\\"> <option selected=\\\"\\\" disabled=\\\"\\\" value=\\\"\\\">Choose...</option> <option>...</option> </select> <div class=\\\"invalid-tooltip\\\">Please select a valid state.</div> </div> <div class=\\\"col-md-3 position-relative\\\"> <label class=\\\"form-label\\\" for=\\\"validationTooltip05\\\">Zip</label> <input class=\\\"form-control\\\" id=\\\"validationTooltip05\\\" type=\\\"text\\\" required=\\\"\\\" /> <div class=\\\"invalid-tooltip\\\">Please provide a valid zip.</div> </div> <div class=\\\"col-12\\\"> <button class=\\\"btn btn-primary\\\" type=\\\"submit\\\">Submit form</button> </div> </form></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <form className="row g-3 needs-validation" noValidate>
                    <div className="col-md-4 position-relative">
                      <label className="form-label" htmlFor="validationTooltip01">
First name
                      </label>
                      <input className="form-control" id="validationTooltip01" type="text" defaultValue="Mark" required />
                      <div className="valid-tooltip">
Looks good!
                      </div>
                    </div>
                    <div className="col-md-4 position-relative">
                      <label className="form-label" htmlFor="validationTooltip02">
Last name
                      </label>
                      <input className="form-control" id="validationTooltip02" type="text" defaultValue="Otto" required />
                      <div className="valid-tooltip">
Looks good!
                      </div>
                    </div>
                    <div className="col-md-4 position-relative">
                      <label className="form-label" htmlFor="validationTooltipUsername">
Username
                      </label>
                      <div className="input-group">
                        <span className="input-group-text" id="validationTooltipUsernamePrepend">
@
                        </span>
                        <input className="form-control" id="validationTooltipUsername" type="text" aria-describedby="validationTooltipUsernamePrepend" required />
                        <div className="invalid-tooltip">
Please choose a unique and valid username.
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 position-relative">
                      <label className="form-label" htmlFor="validationTooltip03">
City
                      </label>
                      <input className="form-control" id="validationTooltip03" type="text" required />
                      <div className="invalid-tooltip">
Please provide a valid city.
                      </div>
                    </div>
                    <div className="col-md-3 position-relative">
                      <label className="form-label" htmlFor="validationTooltip04">
State
                      </label>
                      <select className="form-select" id="validationTooltip04" required>
                        <option disabled value="">
Choose...
                        </option>
                        <option>
...
                        </option>
                      </select>
                      <div className="invalid-tooltip">
Please select a valid state.
                      </div>
                    </div>
                    <div className="col-md-3 position-relative">
                      <label className="form-label" htmlFor="validationTooltip05">
Zip
                      </label>
                      <input className="form-control" id="validationTooltip05" type="text" required />
                      <div className="invalid-tooltip">
Please provide a valid zip.
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary" type="submit">
Submit form
                      </button>
                    </div>
                  </form>
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
                <a href="#custom-styles-example" className="nav-link">
Custom styles Example
                </a>
              </li>
              <li className="nav-item">
                <a href="#tooltips" className="nav-link">
Tooltips
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
