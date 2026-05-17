'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function FormControl() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Form Control
    </h2>

    <p className="text-body-tertiary lead mb-2">
Give textual form controls like 
      <code>
{"<input>"}
      </code>
s and 
      <code>
{"<textarea>"}
      </code>
s an upgrade with custom styles, sizing, focus states, and more.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/forms/form-control/" className="btn btn-link p-0"  target="_blank">
Form Controls on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
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
{"<code class=\"language-html\"><div class=\\\"mb-3\\\"> <label class=\\\"form-label\\\" for=\\\"exampleFormControlInput\\\">Email address </label> <input class=\\\"form-control\\\" id=\\\"exampleFormControlInput\\\" type=\\\"email\\\" placeholder=\\\"name@example.com\\\" /> </div> <div class=\\\"mb-0\\\"> <label class=\\\"form-label\\\" for=\\\"exampleTextarea\\\">Example Textarea </label> <textarea class=\\\"form-control\\\" id=\\\"exampleTextarea\\\" rows=\\\"3\\\" defaultValue=\"\" /> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="exampleFormControlInput">
Email address 
                    </label>
                    <input className="form-control" id="exampleFormControlInput" type="email" placeholder="name@example.com" />
                  </div>
                  <div className="mb-0">
                    <label className="form-label" htmlFor="exampleTextarea">
Example Textarea 
                    </label>
                    <textarea className="form-control" id="exampleTextarea" rows={3} defaultValue="" />
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
{"<code class=\"language-html\"><div class=\\\"mb-3\\\"> <input class=\\\"form-control form-control-lg\\\" id=\\\"sizingInputLg\\\" type=\\\"text\\\" placeholder=\\\".form-control-lg\\\" /> </div> <div class=\\\"mb-3\\\"> <input class=\\\"form-control form-control\\\" id=\\\"sizingInput\\\" type=\\\"text\\\" placeholder=\\\".form-control\\\" /> </div> <div class=\\\"mb-0\\\"> <input class=\\\"form-control form-control-sm\\\" id=\\\"sizingInputSm\\\" type=\\\"text\\\" placeholder=\\\".form-control-sm\\\" /> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="mb-3">
                    <input className="form-control form-control-lg" id="sizingInputLg" type="text" placeholder=".form-control-lg" />
                  </div>
                  <div className="mb-3">
                    <input className="form-control form-control" id="sizingInput" type="text" placeholder=".form-control" />
                  </div>
                  <div className="mb-0">
                    <input className="form-control form-control-sm" id="sizingInputSm" type="text" placeholder=".form-control-sm" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Readonly plain text
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#readonly-plain-text-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="readonly-plain-text-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="readonly-plain-text-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"mb-3 row\\\"> <label class=\\\"col-sm-2 col-form-label\\\" for=\\\"staticEmail\\\">Email</label> <div class=\\\"col-sm-10\\\"> <input class=\\\"form-control-plaintext outline-none\\\" id=\\\"staticEmail\\\" type=\\\"text\\\" readonly=\\\"\\\" value=\\\"email@example.com\\\" /> <div class=\\\"mb-3 row\\\"> </div> </div> <label class=\\\"col-sm-2 col-form-label\\\" for=\\\"inputPassword\\\">Password</label> <div class=\\\"col-sm-10\\\"> <input class=\\\"form-control\\\" id=\\\"inputPassword\\\" type=\\\"password\\\" /> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label" htmlFor="staticEmail">
Email
                    </label>
                    <div className="col-sm-10">
                      <input className="form-control-plaintext outline-none" id="staticEmail" type="text" readOnly defaultValue="email@example.com" />
                      <div className="mb-3 row">                      </div>
                    </div>
                    <label className="col-sm-2 col-form-label" htmlFor="inputPassword">
Password
                    </label>
                    <div className="col-sm-10">
                      <input className="form-control" id="inputPassword" type="password" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
File Input
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#file-input-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="file-input-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="file-input-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"mb-3\\\"> <label class=\\\"form-label\\\" for=\\\"customFile\\\">File input example</label> <input class=\\\"form-control\\\" id=\\\"customFile\\\" type=\\\"file\\\" /> </div> <div class=\\\"mb-3\\\"> <label class=\\\"form-label\\\" for=\\\"formFileDisabled\\\">Disabled file input example</label> <input class=\\\"form-control\\\" id=\\\"formFileDisabled\\\" type=\\\"file\\\" disabled=\\\"disabled\\\" /> </div> <div class=\\\"mb-3\\\"> <label class=\\\"form-label\\\" for=\\\"formFileMultiple\\\">Multiple files input example</label> <input class=\\\"form-control\\\" id=\\\"formFileMultiple\\\" type=\\\"file\\\" multiple=\\\"multiple\\\" /> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="customFile">
File input example
                    </label>
                    <input className="form-control" id="customFile" type="file" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="formFileDisabled">
Disabled file input example
                    </label>
                    <input className="form-control" id="formFileDisabled" type="file" disabled />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="formFileMultiple">
Multiple files input example
                    </label>
                    <input className="form-control" id="formFileMultiple" type="file" multiple />
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
File Input Sizing
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#file-input-sizing-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="file-input-sizing-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="file-input-sizing-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"mb-3\\\"> <label class=\\\"form-label\\\" for=\\\"customFileSm\\\">Small file input example</label> <input class=\\\"form-control form-control-sm\\\" id=\\\"customFileSm\\\" type=\\\"file\\\" /> </div> <div class=\\\"mb-3\\\"> <label class=\\\"form-label\\\" for=\\\"customFileLg\\\">Large file input example</label> <input class=\\\"form-control form-control-lg\\\" id=\\\"customFileLg\\\" type=\\\"file\\\" /> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="customFileSm">
Small file input example
                    </label>
                    <input className="form-control form-control-sm" id="customFileSm" type="file" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="customFileLg">
Large file input example
                    </label>
                    <input className="form-control form-control-lg" id="customFileLg" type="file" />
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
                <a href="#sizing" className="nav-link">
Sizing
                </a>
              </li>
              <li className="nav-item">
                <a href="#readonly-plain-text" className="nav-link">
Readonly plain text
                </a>
              </li>
              <li className="nav-item">
                <a href="#file-input" className="nav-link">
File Input
                </a>
              </li>
              <li className="nav-item">
                <a href="#file-input-sizing" className="nav-link">
File Input Sizing
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
