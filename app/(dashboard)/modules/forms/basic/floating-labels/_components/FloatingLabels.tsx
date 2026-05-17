'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function FloatingLabels() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Floating labels
    </h2>

    <p className="text-body-tertiary lead mb-2">
Create beautifully simple form labels that float over your input fields.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/forms/floating-labels/" className="btn btn-link p-0"  target="_blank">
Floating labels on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
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
Example
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#example-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="example-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="example-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"form-floating mb-3\\\"> <input class=\\\"form-control\\\" id=\\\"floatingInput\\\" type=\\\"email\\\" placeholder=\\\"name@example.com\\\" /> <label for=\\\"floatingInput\\\">Email address</label> </div> <div class=\\\"form-floating\\\"> <input class=\\\"form-control\\\" id=\\\"floatingPassword\\\" type=\\\"password\\\" placeholder=\\\"Password\\\" /> <label for=\\\"floatingPassword\\\">Password</label> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="form-floating mb-3">
                    <input className="form-control" id="floatingInput" type="email" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">
Email address
                    </label>
                  </div>
                  <div className="form-floating">
                    <input className="form-control" id="floatingPassword" type="password" placeholder="Password" />
                    <label htmlFor="floatingPassword">
Password
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
Icon example
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#icon-example-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="icon-example-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="icon-example-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"form-icon-container\\\"> <div class=\\\"form-floating mb-3\\\"> <input class=\\\"form-control form-icon-input\\\" id=\\\"floatingInputIconExample\\\" type=\\\"email\\\" placeholder=\\\"name@example.com\\\" /> <label class=\\\"form-icon-label\\\" for=\\\"floatingInputIconExample\\\">Email address</label> </div> <span class=\\\"fa-solid fa-envelope text-body fs-9 form-icon\\\"></span> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="form-icon-container">
                    <div className="form-floating mb-3">
                      <input className="form-control form-icon-input" id="floatingInputIconExample" type="email" placeholder="name@example.com" />
                      <label className="form-icon-label" htmlFor="floatingInputIconExample">
Email address
                      </label>
                    </div>
                    <span className="fa-solid fa-envelope text-body fs-9 form-icon">                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Validation
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#validation-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="validation-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="validation-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"form-floating mb-3\\\"> <input class=\\\"form-control is-valid\\\" id=\\\"floatingInputValid\\\" type=\\\"email\\\" placeholder=\\\"name@example.com\\\" value=\\\"test@example.com\\\" /> <label for=\\\"floatingInputValid\\\">Valid input</label> </div> <div class=\\\"form-floating\\\"> <input class=\\\"form-control is-invalid\\\" id=\\\"floatingInputInvalid\\\" type=\\\"email\\\" placeholder=\\\"name@example.com\\\" value=\\\"test@example.com\\\" /> <label for=\\\"floatingInputInvalid\\\">Invalid input</label> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="form-floating mb-3">
                    <input className="form-control is-valid" id="floatingInputValid" type="email" placeholder="name@example.com" defaultValue="test@example.com" />
                    <label htmlFor="floatingInputValid">
Valid input
                    </label>
                  </div>
                  <div className="form-floating">
                    <input className="form-control is-invalid" id="floatingInputInvalid" type="email" placeholder="name@example.com" defaultValue="test@example.com" />
                    <label htmlFor="floatingInputInvalid">
Invalid input
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
Textareas
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#textareas-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="textareas-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="textareas-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"form-floating\\\"> <textarea class=\\\"form-control\\\" id=\\\"floatingTextarea2\\\" placeholder=\\\"Leave a comment here\\\" style=\\\"height: 100px\\\" defaultValue=\"\" /> <label for=\\\"floatingTextarea2\\\">Comments</label> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="form-floating">
                    <textarea className="form-control" id="floatingTextarea2" placeholder="Leave a comment here" style={{"height":"100px"} as CSSProperties} defaultValue="" />
                    <label htmlFor="floatingTextarea2">
Comments
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
Selects
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#selects-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="selects-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="selects-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"form-floating\\\"> <select class=\\\"form-select\\\" id=\\\"floatingSelect\\\" aria-label=\\\"Floating label select example\\\"> <option selected=\\\"\\\">Open this select menu</option> <option value=\\\"1\\\">One</option> <option value=\\\"2\\\">Two</option> <option value=\\\"3\\\">Three</option> </select> <label for=\\\"floatingSelect\\\">Works with selects</label> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="form-floating">
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                      <option>
Open this select menu
                      </option>
                      <option value="1">
One
                      </option>
                      <option value="2">
Two
                      </option>
                      <option value="3">
Three
                      </option>
                    </select>
                    <label htmlFor="floatingSelect">
Works with selects
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
                <a href="#example" className="nav-link">
Example
                </a>
              </li>
              <li className="nav-item">
                <a href="#icon-example" className="nav-link">
Icon example
                </a>
              </li>
              <li className="nav-item">
                <a href="#validation " className="nav-link">
Validation 
                </a>
              </li>
              <li className="nav-item">
                <a href="#textareas" className="nav-link">
Textareas
                </a>
              </li>
              <li className="nav-item">
                <a href="#selects" className="nav-link">
Selects
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
