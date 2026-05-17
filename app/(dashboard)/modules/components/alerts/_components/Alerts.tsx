'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Alerts() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Alert
    </h2>

    <p className="text-body-tertiary lead mb-2">
Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/components/alerts/" className="btn btn-link p-0"  target="_blank">
Alerts on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="mb-9">
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Alert Subtle Examples
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#alert-subtle-examples-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="alert-subtle-examples-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="alert-subtle-examples-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"alert alert-subtle-primary\\\" role=\\\"alert\\\">A simple primary alert—check it out!</div> <div class=\\\"alert alert-subtle-success\\\" role=\\\"alert\\\">A simple primary alert—check it out!</div> <div class=\\\"alert alert-subtle-danger\\\" role=\\\"alert\\\">A simple primary alert—check it out!</div> <div class=\\\"alert alert-subtle-warning\\\" role=\\\"alert\\\">A simple primary alert—check it out!</div> <div class=\\\"alert alert-subtle-info\\\" role=\\\"alert\\\">A simple primary alert—check it out!</div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="alert alert-subtle-primary" role="alert">
A simple primary alert—check it out!
                  </div>
                  <div className="alert alert-subtle-success" role="alert">
A simple primary alert—check it out!
                  </div>
                  <div className="alert alert-subtle-danger" role="alert">
A simple primary alert—check it out!
                  </div>
                  <div className="alert alert-subtle-warning" role="alert">
A simple primary alert—check it out!
                  </div>
                  <div className="alert alert-subtle-info" role="alert">
A simple primary alert—check it out!
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Alert Outline Examples
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#alert-outline-examples-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="alert-outline-examples-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="alert-outline-examples-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"alert alert-outline-primary\\\" role=\\\"alert\\\">A simple primary alert—check it out!</div> <div class=\\\"alert alert-outline-success\\\" role=\\\"alert\\\">A simple primary alert—check it out!</div> <div class=\\\"alert alert-outline-danger\\\" role=\\\"alert\\\">A simple primary alert—check it out!</div> <div class=\\\"alert alert-outline-warning\\\" role=\\\"alert\\\">A simple primary alert—check it out!</div> <div class=\\\"alert alert-outline-info\\\" role=\\\"alert\\\">A simple primary alert—check it out!</div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="alert alert-outline-primary" role="alert">
A simple primary alert—check it out!
                  </div>
                  <div className="alert alert-outline-success" role="alert">
A simple primary alert—check it out!
                  </div>
                  <div className="alert alert-outline-danger" role="alert">
A simple primary alert—check it out!
                  </div>
                  <div className="alert alert-outline-warning" role="alert">
A simple primary alert—check it out!
                  </div>
                  <div className="alert alert-outline-info" role="alert">
A simple primary alert—check it out!
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Phoenix Alert Examples
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#phoenix-alert-examples-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="phoenix-alert-examples-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="phoenix-alert-examples-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"alert alert-phoenix-primary\\\" role=\\\"alert\\\">A simple primary alert—check it out!</div> <div class=\\\"alert alert-phoenix-success\\\" role=\\\"alert\\\">A simple primary alert—check it out!</div> <div class=\\\"alert alert-phoenix-danger\\\" role=\\\"alert\\\">A simple primary alert—check it out!</div> <div class=\\\"alert alert-phoenix-warning\\\" role=\\\"alert\\\">A simple primary alert—check it out!</div> <div class=\\\"alert alert-phoenix-info\\\" role=\\\"alert\\\">A simple primary alert—check it out!</div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="alert alert-phoenix-primary" role="alert">
A simple primary alert—check it out!
                  </div>
                  <div className="alert alert-phoenix-success" role="alert">
A simple primary alert—check it out!
                  </div>
                  <div className="alert alert-phoenix-danger" role="alert">
A simple primary alert—check it out!
                  </div>
                  <div className="alert alert-phoenix-warning" role="alert">
A simple primary alert—check it out!
                  </div>
                  <div className="alert alert-phoenix-info" role="alert">
A simple primary alert—check it out!
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Solid Alert Examples
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#solid-alert-examples-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="solid-alert-examples-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="solid-alert-examples-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"alert alert-primary\\\" role=\\\"alert\\\">A simple primary alert—check it out!</div> <div class=\\\"alert alert-success\\\" role=\\\"alert\\\">A simple primary alert—check it out!</div> <div class=\\\"alert alert-danger\\\" role=\\\"alert\\\">A simple primary alert—check it out!</div> <div class=\\\"alert alert-warning\\\" role=\\\"alert\\\">A simple primary alert—check it out!</div> <div class=\\\"alert alert-info\\\" role=\\\"alert\\\">A simple primary alert—check it out!</div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="alert alert-primary" role="alert">
A simple primary alert—check it out!
                  </div>
                  <div className="alert alert-success" role="alert">
A simple primary alert—check it out!
                  </div>
                  <div className="alert alert-danger" role="alert">
A simple primary alert—check it out!
                  </div>
                  <div className="alert alert-warning" role="alert">
A simple primary alert—check it out!
                  </div>
                  <div className="alert alert-info" role="alert">
A simple primary alert—check it out!
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Alerts with icon
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#alerts-with-icon-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="alerts-with-icon-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="alerts-with-icon-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"alert alert-outline-warning d-flex align-items-center\\\" role=\\\"alert\\\"> <span class=\\\"fas fa-info-circle text-warning fs-5 me-3\\\"></span> <p class=\\\"mb-0 flex-1\\\">A simple primary alert—check it out!</p> <button class=\\\"btn-close\\\" type=\\\"button\\\" data-bs-dismiss=\\\"alert\\\" aria-label=\\\"Close\\\"></button> </div> <div class=\\\"alert alert-outline-success d-flex align-items-center\\\" role=\\\"alert\\\"> <span class=\\\"fas fa-check-circle text-success fs-5 me-3\\\"></span> <p class=\\\"mb-0 flex-1\\\">A simple primary alert—check it out!</p> <button class=\\\"btn-close\\\" type=\\\"button\\\" data-bs-dismiss=\\\"alert\\\" aria-label=\\\"Close\\\"></button> </div> <div class=\\\"alert alert-outline-danger d-flex align-items-center\\\" role=\\\"alert\\\"> <span class=\\\"fas fa-times-circle text-danger fs-5 me-3\\\"></span> <p class=\\\"mb-0 flex-1\\\">A simple danger alert—check it out!</p> <button class=\\\"btn-close\\\" type=\\\"button\\\" data-bs-dismiss=\\\"alert\\\" aria-label=\\\"Close\\\"></button> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="alert alert-outline-warning d-flex align-items-center" role="alert">
                    <span className="fas fa-info-circle text-warning fs-5 me-3">                    </span>
                    <p className="mb-0 flex-1">
A simple primary alert—check it out!
                    </p>
                    <button className="btn-close" type="button" data-bs-dismiss={"alert"} aria-label="Close">                    </button>
                  </div>
                  <div className="alert alert-outline-success d-flex align-items-center" role="alert">
                    <span className="fas fa-check-circle text-success fs-5 me-3">                    </span>
                    <p className="mb-0 flex-1">
A simple primary alert—check it out!
                    </p>
                    <button className="btn-close" type="button" data-bs-dismiss={"alert"} aria-label="Close">                    </button>
                  </div>
                  <div className="alert alert-outline-danger d-flex align-items-center" role="alert">
                    <span className="fas fa-times-circle text-danger fs-5 me-3">                    </span>
                    <p className="mb-0 flex-1">
A simple danger alert—check it out!
                    </p>
                    <button className="btn-close" type="button" data-bs-dismiss={"alert"} aria-label="Close">                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Additional Content
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#additional-content-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="additional-content-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="additional-content-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"alert alert-subtle-success\\\" role=\\\"alert\\\"> <h4 class=\\\"alert-heading fw-semibold\\\">Well done!</h4> <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p> <hr class=\\\"bg-body-tertiary\\\" /> <p class=\\\"mb-0\\\">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="alert alert-subtle-success" role="alert">
                    <h4 className="alert-heading fw-semibold">
Well done!
                    </h4>
                    <p>
Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                    </p>
                    <hr className="bg-body-tertiary" />
                    <p className="mb-0">
Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Dismissing
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#dismissing-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="dismissing-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="dismissing-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"alert alert-subtle-warning alert-dismissible fade show\\\" role=\\\"alert\\\"> <strong>Holy guacamole!</strong> You should check in on some of those fields below. <button class=\\\"btn-close\\\" type=\\\"button\\\" data-bs-dismiss=\\\"alert\\\" aria-label=\\\"Close\\\"></button> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="alert alert-subtle-warning alert-dismissible fade show" role="alert">
                    <strong>
Holy guacamole!
                    </strong>
 You should check in on some of those fields below. 
                    <button className="btn-close" type="button" data-bs-dismiss={"alert"} aria-label="Close">                    </button>
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
                <a href="#alert-subtle-examples" className="nav-link">
Alert Subtle Examples
                </a>
              </li>
              <li className="nav-item">
                <a href="#alert-outline-examples" className="nav-link">
Alert Outline Examples
                </a>
              </li>
              <li className="nav-item">
                <a href="#phoenix-alert-examples" className="nav-link">
Phoenix Alert Examples
                </a>
              </li>
              <li className="nav-item">
                <a href="#solid-alert-examples" className="nav-link">
Solid Alert Examples
                </a>
              </li>
              <li className="nav-item">
                <a href="#alerts-with-icon" className="nav-link">
Alerts with icon
                </a>
              </li>
              <li className="nav-item">
                <a href="#additional-content" className="nav-link">
Additional Content
                </a>
              </li>
              <li className="nav-item">
                <a href="#dismissing" className="nav-link">
Dismissing
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
