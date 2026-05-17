'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Popovers() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Popovers
    </h2>

    <p className="text-body-tertiary lead mb-2">
Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/components/popovers/" className="btn btn-link p-0"  target="_blank">
Popovers on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
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
Basic Example
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
{"<code class=\"language-html\"><div class=\\\"row g-1\\\"> <div class=\\\"col-auto\\\"> <button class=\\\"btn btn-secondary m-1\\\" type=\\\"button\\\" data-bs-container=\\\"body\\\" data-bs-toggle=\\\"popover\\\" data-bs-placement=\\\"top\\\" data-bs-content=\\\"Top Popover\\\">Top Popover</button> </div> <div class=\\\"col-auto\\\"> <button class=\\\"btn btn-secondary m-1\\\" type=\\\"button\\\" data-bs-container=\\\"body\\\" data-bs-toggle=\\\"popover\\\" data-bs-placement=\\\"left\\\" data-bs-content=\\\"Left Popover\\\">Left Popover</button> </div> <div class=\\\"col-auto\\\"> <button class=\\\"btn btn-secondary m-1\\\" type=\\\"button\\\" data-bs-container=\\\"body\\\" data-bs-toggle=\\\"popover\\\" data-bs-placement=\\\"right\\\" data-bs-content=\\\"Right Popover\\\">Right Popover</button> </div> <div class=\\\"col-auto\\\"> <button class=\\\"btn btn-secondary m-1\\\" type=\\\"button\\\" data-bs-container=\\\"body\\\" data-bs-toggle=\\\"popover\\\" data-bs-placement=\\\"bottom\\\" data-bs-content=\\\"Bottom Popover\\\">Bottom Popover</button> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="row g-1">
                    <div className="col-auto">
                      <button className="btn btn-secondary m-1" type="button" data-bs-container={"body"} data-bs-toggle={"popover"} data-bs-placement={"top"} data-bs-content={"Top Popover"}>
Top Popover
                      </button>
                    </div>
                    <div className="col-auto">
                      <button className="btn btn-secondary m-1" type="button" data-bs-container={"body"} data-bs-toggle={"popover"} data-bs-placement={"left"} data-bs-content={"Left Popover"}>
Left Popover
                      </button>
                    </div>
                    <div className="col-auto">
                      <button className="btn btn-secondary m-1" type="button" data-bs-container={"body"} data-bs-toggle={"popover"} data-bs-placement={"right"} data-bs-content={"Right Popover"}>
Right Popover
                      </button>
                    </div>
                    <div className="col-auto">
                      <button className="btn btn-secondary m-1" type="button" data-bs-container={"body"} data-bs-toggle={"popover"} data-bs-placement={"bottom"} data-bs-content={"Bottom Popover"}>
Bottom Popover
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-6" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Dismissible Example
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Use the 
                      <code>
data-bs-trigger="focus"
                      </code>
 to dismiss popovers on the user’s next click of a different element than the toggle element.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#dismissible-example-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="dismissible-example-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="dismissible-example-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><a class=\\\"btn btn-lg btn-danger\\\" tabindex=\\\"0\\\" role=\\\"button\\\" data-bs-toggle=\\\"popover\\\" data-bs-trigger=\\\"focus\\\" title=\\\"Dismissible popover\\\" data-bs-content=\\\"And here's some amazing content. It's very engaging. Right?\\\">Dismissible popover</a></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <a href="#" className="btn btn-lg btn-danger" tabIndex={0} role="button" data-bs-toggle={"popover"} data-bs-trigger={"focus"} title="Dismissible popover" data-bs-content={"And here's some amazing content. It's very engaging. Right?"}>
Dismissible popover
                  </a>
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
Basic Example
                </a>
              </li>
              <li className="nav-item">
                <a href="#dismissible-example" className="nav-link">
Dismissible Example
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
