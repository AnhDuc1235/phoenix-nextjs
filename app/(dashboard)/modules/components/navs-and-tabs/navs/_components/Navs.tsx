'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Navs() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Navs
    </h2>

    <p className="text-body-tertiary lead mb-2">
Documentation and examples of how to use Bootstrap’s included navigation components.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/components/navs-tabs/" className="btn btn-link p-0"  target="_blank">
Navs on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
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
Horizontal
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#horizontal-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="horizontal-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="horizontal-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><ul class=\\\"nav\\\"> <li class=\\\"nav-item\\\"><a class=\\\"nav-link active\\\" aria-current=\\\"page\\\" href=\\\"#\\\">Active</a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link\\\" href=\\\"#\\\">Link</a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link\\\" href=\\\"#\\\">Link</a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link disabled\\\">Disabled</a></li> </ul></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <ul className="nav">
                    <li className="nav-item">
                      <a href="#" className="nav-link" aria-current="page">
Active
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
Link
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
Link
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link disabled">
Disabled
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Vertical
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#vertical-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="vertical-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="vertical-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><ul class=\\\"nav flex-column\\\"> <li class=\\\"nav-item\\\"><a class=\\\"nav-link active\\\" aria-current=\\\"page\\\" href=\\\"#\\\">Active</a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link\\\" href=\\\"#\\\">Link</a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link\\\" href=\\\"#\\\">Link</a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link disabled\\\">Disabled</a></li> </ul></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a href="#" className="nav-link" aria-current="page">
Active
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
Link
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
Link
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link disabled">
Disabled
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Pills
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#pills-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="pills-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="pills-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><ul class=\\\"nav nav-pills\\\"> <li class=\\\"nav-item\\\"><a class=\\\"nav-link active\\\" aria-current=\\\"page\\\" href=\\\"#\\\">Active</a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link\\\" href=\\\"#\\\">Link</a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link\\\" href=\\\"#\\\">Link</a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link disabled\\\">Disabled</a></li> </ul></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <ul className="nav nav-pills">
                    <li className="nav-item">
                      <a href="#" className="nav-link" aria-current="page">
Active
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
Link
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
Link
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link disabled">
Disabled
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Fill and justify
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#fill-and-justify-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="fill-and-justify-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="fill-and-justify-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><ul class=\\\"nav nav-pills nav-fill mb-4\\\"> <li class=\\\"nav-item\\\"><a class=\\\"nav-link active\\\" aria-current=\\\"page\\\" href=\\\"#\\\">Active</a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link\\\" href=\\\"#\\\">Much longer nav link</a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link\\\" href=\\\"#\\\">Link</a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link disabled\\\">Disabled</a></li> </ul> <ul class=\\\"nav nav-pills nav-justified\\\"> <li class=\\\"nav-item\\\"><a class=\\\"nav-link active\\\" aria-current=\\\"page\\\" href=\\\"#\\\">Active</a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link\\\" href=\\\"#\\\">Much longer nav link</a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link\\\" href=\\\"#\\\">Link</a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link disabled\\\">Disabled</a></li> </ul></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <ul className="nav nav-pills nav-fill mb-4">
                    <li className="nav-item">
                      <a href="#" className="nav-link" aria-current="page">
Active
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
Much longer nav link
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
Link
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link disabled">
Disabled
                      </a>
                    </li>
                  </ul>
                  <ul className="nav nav-pills nav-justified">
                    <li className="nav-item">
                      <a href="#" className="nav-link" aria-current="page">
Active
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
Much longer nav link
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
Link
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link disabled">
Disabled
                      </a>
                    </li>
                  </ul>
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
                <a href="#horizontal" className="nav-link">
Horizontal
                </a>
              </li>
              <li className="nav-item">
                <a href="#vertical" className="nav-link">
Vertical
                </a>
              </li>
              <li className="nav-item">
                <a href="#pills" className="nav-link">
Pills
                </a>
              </li>
              <li className="nav-item">
                <a href="#fill-and-justify" className="nav-link">
Fill and justify
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
