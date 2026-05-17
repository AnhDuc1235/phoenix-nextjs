'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function InputGroup() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Input group
    </h2>

    <p className="text-body-tertiary lead mb-2">
Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/forms/input-group/" className="btn btn-link p-0"  target="_blank">
Input group on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
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
Basic example
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#basic-example-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="basic-example-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="basic-example-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"input-group mb-3\\\"> <span class=\\\"input-group-text\\\" id=\\\"basic-addon1\\\">@</span> <input class=\\\"form-control\\\" type=\\\"text\\\" placeholder=\\\"Username\\\" aria-label=\\\"Username\\\" aria-describedby=\\\"basic-addon1\\\" /> </div> <div class=\\\"input-group mb-3\\\"> <input class=\\\"form-control\\\" type=\\\"text\\\" placeholder=\\\"Recipient's username\\\" aria-label=\\\"Recipient's username\\\" aria-describedby=\\\"basic-addon2\\\" /> <span class=\\\"input-group-text\\\" id=\\\"basic-addon2\\\">@example.com</span> </div> <label class=\\\"form-label\\\" for=\\\"basic-url\\\">Your vanity URL</label> <div class=\\\"input-group mb-3\\\"> <span class=\\\"input-group-text\\\" id=\\\"basic-addon3\\\">https://example.com/users/</span> <input class=\\\"form-control\\\" id=\\\"basic-url\\\" type=\\\"text\\\" aria-describedby=\\\"basic-addon3\\\" /> </div> <div class=\\\"input-group mb-3\\\"> <span class=\\\"input-group-text\\\">$</span> <input class=\\\"form-control\\\" type=\\\"text\\\" aria-label=\\\"Amount (to the nearest dollar)\\\" /> <span class=\\\"input-group-text\\\">.00</span> </div> <div class=\\\"input-group\\\"> <span class=\\\"input-group-text\\\">With textarea</span> <textarea class=\\\"form-control\\\" aria-label=\\\"With textarea\\\" defaultValue=\"\" />. </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
@
                    </span>
                    <input className="form-control" type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                  <div className="input-group mb-3">
                    <input className="form-control" type="text" placeholder={"Recipient's username"} aria-label={"Recipient's username"} aria-describedby="basic-addon2" />
                    <span className="input-group-text" id="basic-addon2">
@example.com
                    </span>
                  </div>
                  <label className="form-label" htmlFor="basic-url">
Your vanity URL
                  </label>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">
https://example.com/users/
                    </span>
                    <input className="form-control" id="basic-url" type="text" aria-describedby="basic-addon3" />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
$
                    </span>
                    <input className="form-control" type="text" aria-label="Amount (to the nearest dollar)" />
                    <span className="input-group-text">
.00
                    </span>
                  </div>
                  <div className="input-group">
                    <span className="input-group-text">
With textarea
                    </span>
                    <textarea className="form-control" aria-label="With textarea" defaultValue="" />
. 
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Wrapping
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#wrapping-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="wrapping-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="wrapping-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"input-group flex-nowrap\\\"> <span class=\\\"input-group-text\\\" id=\\\"addon-wrapping\\\">@</span> <input class=\\\"form-control\\\" type=\\\"text\\\" placeholder=\\\"Username\\\" aria-label=\\\"Username\\\" aria-describedby=\\\"addon-wrapping\\\" /> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">
@
                    </span>
                    <input className="form-control" type="text" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Sizing
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#sizing-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="sizing-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="sizing-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"input-group input-group-sm mb-3\\\"> <span class=\\\"input-group-text\\\" id=\\\"inputGroup-sizing-sm\\\">Small</span> <input class=\\\"form-control\\\" type=\\\"text\\\" aria-label=\\\"Sizing example input\\\" aria-describedby=\\\"inputGroup-sizing-sm\\\" /> </div> <div class=\\\"input-group mb-3\\\"> <span class=\\\"input-group-text\\\" id=\\\"inputGroup-sizing-default\\\">Default</span> <input class=\\\"form-control\\\" type=\\\"text\\\" aria-label=\\\"Sizing example input\\\" aria-describedby=\\\"inputGroup-sizing-default\\\" /> </div> <div class=\\\"input-group input-group-lg\\\"> <span class=\\\"input-group-text\\\" id=\\\"inputGroup-sizing-lg\\\">Large</span> <input class=\\\"form-control\\\" type=\\\"text\\\" aria-label=\\\"Sizing example input\\\" aria-describedby=\\\"inputGroup-sizing-lg\\\" /> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">
Small
                    </span>
                    <input className="form-control" type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">
Default
                    </span>
                    <input className="form-control" type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                  </div>
                  <div className="input-group input-group-lg">
                    <span className="input-group-text" id="inputGroup-sizing-lg">
Large
                    </span>
                    <input className="form-control" type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Checkboxes and Radios
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#checkboxes-and-radios-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="checkboxes-and-radios-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="checkboxes-and-radios-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"input-group mb-3\\\"> <div class=\\\"input-group-text\\\"> <input class=\\\"form-check-input\\\" type=\\\"checkbox\\\" value=\\\"\\\" aria-label=\\\"Checkbox for following text input\\\" /> </div> <input class=\\\"form-control\\\" type=\\\"text\\\" aria-label=\\\"Text input with checkbox\\\" /> </div> <div class=\\\"input-group\\\"> <div class=\\\"input-group-text\\\"> <input class=\\\"form-check-input\\\" type=\\\"radio\\\" value=\\\"\\\" aria-label=\\\"Radio button for following text input\\\" /> </div> <input class=\\\"form-control\\\" type=\\\"text\\\" aria-label=\\\"Text input with radio button\\\" /> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="input-group mb-3">
                    <div className="input-group-text">
                      <input className="form-check-input" type="checkbox" defaultValue="" aria-label="Checkbox for following text input" />
                    </div>
                    <input className="form-control" type="text" aria-label="Text input with checkbox" />
                  </div>
                  <div className="input-group">
                    <div className="input-group-text">
                      <input className="form-check-input" type="radio" defaultValue="" aria-label="Radio button for following text input" />
                    </div>
                    <input className="form-control" type="text" aria-label="Text input with radio button" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Multiple inputs
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#multiple-inputs-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="multiple-inputs-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="multiple-inputs-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"input-group\\\"> <span class=\\\"input-group-text\\\">First and last name</span> <input class=\\\"form-control\\\" type=\\\"text\\\" aria-label=\\\"First name\\\" /> <input class=\\\"form-control\\\" type=\\\"text\\\" aria-label=\\\"Last name\\\" /> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="input-group">
                    <span className="input-group-text">
First and last name
                    </span>
                    <input className="form-control" type="text" aria-label="First name" />
                    <input className="form-control" type="text" aria-label="Last name" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Multiple Addons
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#multiple-addons-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="multiple-addons-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="multiple-addons-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"input-group mb-3\\\"> <span class=\\\"input-group-text\\\">$</span> <span class=\\\"input-group-text\\\">0.00</span> <input class=\\\"form-control\\\" type=\\\"text\\\" aria-label=\\\"Dollar amount (with dot and two decimal places)\\\" /> </div> <div class=\\\"input-group\\\"> <input class=\\\"form-control\\\" type=\\\"text\\\" aria-label=\\\"Dollar amount (with dot and two decimal places)\\\" /> <span class=\\\"input-group-text\\\">$</span> <span class=\\\"input-group-text\\\">0.00</span> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="input-group mb-3">
                    <span className="input-group-text">
$
                    </span>
                    <span className="input-group-text">
0.00
                    </span>
                    <input className="form-control" type="text" aria-label="Dollar amount (with dot and two decimal places)" />
                  </div>
                  <div className="input-group">
                    <input className="form-control" type="text" aria-label="Dollar amount (with dot and two decimal places)" />
                    <span className="input-group-text">
$
                    </span>
                    <span className="input-group-text">
0.00
                    </span>
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
                <a href="#basic-example" className="nav-link">
Basic example
                </a>
              </li>
              <li className="nav-item">
                <a href="#wrapping" className="nav-link">
Wrapping
                </a>
              </li>
              <li className="nav-item">
                <a href="#sizing" className="nav-link">
Sizing
                </a>
              </li>
              <li className="nav-item">
                <a href="#checkboxes-and-radios" className="nav-link">
Checkboxes and Radios
                </a>
              </li>
              <li className="nav-item">
                <a href="#multiple-inputs" className="nav-link">
Multiple inputs
                </a>
              </li>
              <li className="nav-item">
                <a href="#multiple-addons" className="nav-link">
Multiple Addons
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
