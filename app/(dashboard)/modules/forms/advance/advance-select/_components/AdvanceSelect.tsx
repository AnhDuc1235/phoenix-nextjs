'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function AdvanceSelect() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Advance Select
    </h2>

    <p className="text-body-tertiary lead mb-2">
Phoenix uses 
      <b>
Choices.js
      </b>
 for advance select. Choices.js is a lightweight, configurable select box/text input plugin. Similar to Select2 and Selectize but without the jQuery dependency
    </p>
    <a href="https://github.com/Choices-js/Choices" className="btn btn-link p-0"  target="_blank">
Documentation for Choices      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="mb-9">
            <div className="card shadow-none border mb-4 mt-6" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Multiple Select Example
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#multiple-select-example-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="multiple-select-example-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="multiple-select-example-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><label for=\\\"organizerMultiple\\\">Multiple</label> <select class=\\\"form-select\\\" id=\\\"organizerMultiple\\\" data-choices=\\\"data-choices\\\" multiple=\\\"multiple\\\" data-options='{\\\"removeItemButton\\\":true,\\\"placeholder\\\":true}'> <option value=\\\"\\\">Select organizer...</option> <option>Massachusetts Institute of Technology</option> <option>University of Chicago</option> <option>GSAS Open Labs At Harvard</option> <option>California Institute of Technology</option> </select></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <label htmlFor="organizerMultiple">
Multiple
                  </label>
                  <select className="form-select" id="organizerMultiple" data-choices multiple data-options={"{\"removeItemButton\":true,\"placeholder\":true}"}>
                    <option value="">
Select organizer...
                    </option>
                    <option>
Massachusetts Institute of Technology
                    </option>
                    <option>
University of Chicago
                    </option>
                    <option>
GSAS Open Labs At Harvard
                    </option>
                    <option>
California Institute of Technology
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="card shadow-none border mb-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Single Select Example
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#single-select-example-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="single-select-example-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="single-select-example-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><label for=\\\"organizerSingle\\\">Single</label> <select class=\\\"form-select\\\" id=\\\"organizerSingle\\\" data-choices=\\\"data-choices\\\" data-options='{\\\"removeItemButton\\\":true,\\\"placeholder\\\":true}'> <option value=\\\"\\\">Select organizer...</option> <option>Massachusetts Institute of Technology</option> <option>University of Chicago</option> <option>GSAS Open Labs At Harvard</option> <option>California Institute of Technology</option> </select></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <label htmlFor="organizerSingle">
Single
                  </label>
                  <select className="form-select" id="organizerSingle" data-choices data-options={"{\"removeItemButton\":true,\"placeholder\":true}"}>
                    <option value="">
Select organizer...
                    </option>
                    <option>
Massachusetts Institute of Technology
                    </option>
                    <option>
University of Chicago
                    </option>
                    <option>
GSAS Open Labs At Harvard
                    </option>
                    <option>
California Institute of Technology
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="card shadow-none border mb-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Floating label Example
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#floating-label-example-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="floating-label-example-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="floating-label-example-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"form-floating form-floating-advance-select mb-3\\\"> <label for=\\\"floaTingLabelSingleSelect\\\">Single</label> <select class=\\\"form-select\\\" id=\\\"floaTingLabelSingleSelect\\\" data-choices=\\\"data-choices\\\" data-options='{\\\"removeItemButton\\\":true,\\\"placeholder\\\":true}'> <option>Massachusetts Institute of Technology</option> <option>University of Chicago</option> <option>GSAS Open Labs At Harvard</option> <option>California Institute of Technology</option> </select> </div> <div class=\\\"form-floating form-floating-advance-select\\\"> <label for=\\\"floaTingLabelMultipleSelect\\\">Multiple</label> <select class=\\\"form-select\\\" id=\\\"floaTingLabelMultipleSelect\\\" data-choices=\\\"data-choices\\\" multiple=\\\"multiple\\\" data-options='{\\\"removeItemButton\\\":true,\\\"placeholder\\\":true}'> <option selected=\\\"selected\\\">Massachusetts Institute of Technology</option> <option>University of Chicago</option> <option>GSAS Open Labs At Harvard</option> <option>California Institute of Technology</option> </select> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="form-floating form-floating-advance-select mb-3">
                    <label htmlFor="floaTingLabelSingleSelect">
Single
                    </label>
                    <select className="form-select" id="floaTingLabelSingleSelect" data-choices data-options={"{\"removeItemButton\":true,\"placeholder\":true}"}>
                      <option>
Massachusetts Institute of Technology
                      </option>
                      <option>
University of Chicago
                      </option>
                      <option>
GSAS Open Labs At Harvard
                      </option>
                      <option>
California Institute of Technology
                      </option>
                    </select>
                  </div>
                  <div className="form-floating form-floating-advance-select">
                    <label htmlFor="floaTingLabelMultipleSelect">
Multiple
                    </label>
                    <select className="form-select" id="floaTingLabelMultipleSelect" data-choices multiple data-options={"{\"removeItemButton\":true,\"placeholder\":true}"}>
                      <option>
Massachusetts Institute of Technology
                      </option>
                      <option>
University of Chicago
                      </option>
                      <option>
GSAS Open Labs At Harvard
                      </option>
                      <option>
California Institute of Technology
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card shadow-none border mb-3" data-component-card>
            <div className="card-header p-4 border-bottom bg-body">
              <div className="row g-3 justify-content-between align-items-center">
                <div className="col-12 col-md">
                  <h4 className="text-body mb-0" data-anchor>
Validation Example
                  </h4>
                </div>
                <div className="col col-md-auto">
                  <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                    <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                      <span className="fas fa-copy me-1">                      </span>
Copy Code
                    </button>
                    <a href="#validation-example-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="validation-example-code" aria-expanded="false">
                      <span className="me-2" data-feather={"code"}>                      </span>View code
                    </a>
                    <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                      <span className="me-2" data-feather={"eye"}>                      </span>Hide code
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="collapse code-collapse" id="validation-example-code">
                <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><form class=\\\"needs-validation\\\" novalidate=\\\"novalidate\\\"> <div class=\\\"mb-3\\\"> <label for=\\\"organizerMultiple2\\\">Multiple</label> <select class=\\\"form-select\\\" id=\\\"organizerMultiple2\\\" data-choices=\\\"data-choices\\\" multiple=\\\"multiple\\\" size=\\\"1\\\" name=\\\"organizerMultiple\\\" required=\\\"required\\\" data-options='{\\\"removeItemButton\\\":true,\\\"placeholder\\\":true}'> <option value=\\\"\\\">Select organizer...</option> <option>Massachusetts Institute of Technology</option> <option>University of Chicago</option> <option>GSAS Open Labs At Harvard</option> <option>California Institute of Technology</option> </select> <div class=\\\"invalid-feedback\\\">Please select one or multiple</div> </div> <div class=\\\"mb-3\\\"> <label for=\\\"organizerSingle2\\\">Single</label> <select class=\\\"form-select\\\" id=\\\"organizerSingle2\\\" data-choices=\\\"data-choices\\\" size=\\\"1\\\" required=\\\"required\\\" name=\\\"organizerSingle\\\" data-options='{\\\"removeItemButton\\\":true,\\\"placeholder\\\":true}'> <option value=\\\"\\\">Select organizer...</option> <option>Massachusetts Institute of Technology</option> <option>University of Chicago</option> <option>GSAS Open Labs At Harvard</option> <option>California Institute of Technology </option> </select> <div class=\\\"invalid-feedback\\\">Please select one</div> </div> <button class=\\\"btn btn-primary\\\" type=\\\"submit\\\">Submit form</button> </form></code>"}
                </pre>
              </div>
              <div className="p-4 code-to-copy">
                <form className="needs-validation" noValidate>
                  <div className="mb-3">
                    <label htmlFor="organizerMultiple2">
Multiple
                    </label>
                    <select className="form-select" id="organizerMultiple2" data-choices multiple size={1} name="organizerMultiple" required data-options={"{\"removeItemButton\":true,\"placeholder\":true}"}>
                      <option value="">
Select organizer...
                      </option>
                      <option>
Massachusetts Institute of Technology
                      </option>
                      <option>
University of Chicago
                      </option>
                      <option>
GSAS Open Labs At Harvard
                      </option>
                      <option>
California Institute of Technology
                      </option>
                    </select>
                    <div className="invalid-feedback">
Please select one or multiple
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="organizerSingle2">
Single
                    </label>
                    <select className="form-select" id="organizerSingle2" data-choices size={1} required name="organizerSingle" data-options={"{\"removeItemButton\":true,\"placeholder\":true}"}>
                      <option value="">
Select organizer...
                      </option>
                      <option>
Massachusetts Institute of Technology
                      </option>
                      <option>
University of Chicago
                      </option>
                      <option>
GSAS Open Labs At Harvard
                      </option>
                      <option>
California Institute of Technology 
                      </option>
                    </select>
                    <div className="invalid-feedback">
Please select one
                    </div>
                  </div>
                  <button className="btn btn-primary" type="submit">
Submit form
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="card shadow-none border my-4" data-component-card>
            <div className="card-header p-4 border-bottom bg-body">
              <div className="row g-3 justify-content-between align-items-center">
                <div className="col-12 col-md">
                  <h4 className="text-body mb-0" data-anchor>
Stylesheet
                  </h4>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="collapse code-collapse" id="stylesheet-code">
                <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><pre><code class=\\\"language-html\\\">&lt;link href=&quot;vendors/choices/choices.min.css&quot; rel=&quot;stylesheet&quot; /&gt;</code></pre></code>"}
                </pre>
              </div>
              <div className="p-4 code-to-copy">
                <pre>
{"<code class=\"language-html\"><link href=\\\"vendors/choices/choices.min.css\\\" rel=\\\"stylesheet\\\" /></code>"}
                </pre>
              </div>
            </div>
          </div>
          <div className="card shadow-none border my-4" data-component-card>
            <div className="card-header p-4 border-bottom bg-body">
              <div className="row g-3 justify-content-between align-items-center">
                <div className="col-12 col-md">
                  <h4 className="text-body mb-0" data-anchor>
Javascript
                  </h4>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="collapse code-collapse" id="javascript-code">
                <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><pre><code class=\\\"language-html\\\">&lt;script src=&quot;vendors/choices/choices.min.js&quot;&gt;&lt;/script&gt;</code></pre></code>"}
                </pre>
              </div>
              <div className="p-4 code-to-copy">
                <pre>
{"<code class=\"language-html\"><script src=\\\"vendors/choices/choices.min.js\\\"></script></code>"}
                </pre>
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
                <a href="#multiple-select-example" className="nav-link">
Multiple Select Example
                </a>
              </li>
              <li className="nav-item">
                <a href="#single-select-example" className="nav-link">
Single Select Example
                </a>
              </li>
              <li className="nav-item">
                <a href="#floating-label-example" className="nav-link">
Floating label Example
                </a>
              </li>
              <li className="nav-item">
                <a href="#validation-example" className="nav-link">
Validation Example
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
