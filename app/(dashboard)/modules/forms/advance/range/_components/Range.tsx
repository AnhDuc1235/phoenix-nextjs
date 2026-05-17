'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Range() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Range Slider
    </h2>

    <p className="text-body-tertiary lead mb-2">
A lightweight, ARIA-accessible JavaScript range slider with multi-touch and keyboard support. Fast and has no dependencies.
    </p>
    <a href="https://refreshless.com/nouislider/" className="btn btn-link p-0"  target="_blank">
Documentation for noUiSlider      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="mb-9">
            <div className="card shadow-none border mb-3 mt-6" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Default
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#default-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="default-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="default-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div data-nouislider=\\\"data-nouislider\\\"></div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div data-nouislider>                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border mb-3" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Range Connect
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#range-connect-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="range-connect-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="range-connect-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div data-nouislider='{\\\"start\\\":[20,80],\\\"connect\\\":true}'></div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div data-nouislider={"{\"start\":[20,80],\"connect\":true}"}>                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border mb-3" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Colored Sliders
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#colored-sliders-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="colored-sliders-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="colored-sliders-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"noUi-primary mb-4\\\" data-nouislider='{\\\"start\\\":[45]}'></div> <div class=\\\"noUi-success mb-4\\\" data-nouislider='{\\\"start\\\":[35]}'></div> <div class=\\\"noUi-info mb-4\\\" data-nouislider='{\\\"start\\\":[40]}'></div> <div class=\\\"noUi-warning mb-4\\\" data-nouislider='{\\\"start\\\":[70]}'></div> <div class=\\\"noUi-danger\\\" data-nouislider='{\\\"start\\\":[65]}'></div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="noUi-primary mb-4" data-nouislider={"{\"start\":[45]}"}>                  </div>
                  <div className="noUi-success mb-4" data-nouislider={"{\"start\":[35]}"}>                  </div>
                  <div className="noUi-info mb-4" data-nouislider={"{\"start\":[40]}"}>                  </div>
                  <div className="noUi-warning mb-4" data-nouislider={"{\"start\":[70]}"}>                  </div>
                  <div className="noUi-danger" data-nouislider={"{\"start\":[65]}"}>                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border mb-3" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Styling
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#styling-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="styling-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="styling-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"noUi-target-primary noUi-handle-primary noUi-slider-slim noUi-handle-circle px-0 mb-4\\\" data-nouislider='{\\\"start\\\":[45]}'></div> <div class=\\\"noUi-primary-lighter noUi-handle-primary noUi-slider-medium noUi-handle-circle px-1 mb-4\\\" data-nouislider='{\\\"start\\\":[45]}'></div> <div class=\\\"noUi-primary-lighter noUi-slider-large noUi-handle-primary noUi-handle-circle ps-5 pe-3\\\" data-nouislider='{\\\"range\\\":{\\\"min\\\":0,\\\"max\\\":250},\\\"start\\\":[20,150],\\\"connect\\\":true}'></div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="noUi-target-primary noUi-handle-primary noUi-slider-slim noUi-handle-circle px-0 mb-4" data-nouislider={"{\"start\":[45]}"}>                  </div>
                  <div className="noUi-primary-lighter noUi-handle-primary noUi-slider-medium noUi-handle-circle px-1 mb-4" data-nouislider={"{\"start\":[45]}"}>                  </div>
                  <div className="noUi-primary-lighter noUi-slider-large noUi-handle-primary noUi-handle-circle ps-5 pe-3" data-nouislider={"{\"range\":{\"min\":0,\"max\":250},\"start\":[20,150],\"connect\":true}"}>                  </div>
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
{"<code class=\"language-html\"><pre><code class=\\\"language-html\\\">&lt;link href=&quot;vendors/nouislider/nouislider.min.css&quot; rel=&quot;stylesheet&quot; /&gt;</code></pre></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <pre>
{"<code class=\"language-html\"><link href=\\\"vendors/nouislider/nouislider.min.css\\\" rel=\\\"stylesheet\\\" /></code>"}
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
{"<code class=\"language-html\"><pre><code class=\\\"language-html\\\">&lt;script src=&quot;vendors/nouislider/nouislider.min.js&quot;&gt;&lt;/script&gt;</code></pre></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <pre>
{"<code class=\"language-html\"><script src=\\\"vendors/nouislider/nouislider.min.js\\\"></script></code>"}
                  </pre>
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
                <a href="#default" className="nav-link">
Default
                </a>
              </li>
              <li className="nav-item">
                <a href="#range-connect" className="nav-link">
Range Connect
                </a>
              </li>
              <li className="nav-item">
                <a href="#colored-sliders" className="nav-link">
Colored Sliders
                </a>
              </li>
              <li className="nav-item">
                <a href="#styling" className="nav-link">
Styling
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
