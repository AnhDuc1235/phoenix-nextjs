'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Sizing() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Sizing
    </h2>

    <p className="text-body-tertiary lead mb-2">
Easily make an element as wide or as tall with our width and height utilities.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/utilities/sizing/" className="btn btn-link p-0"  target="_blank">
Sizing on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
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
Width (relative to parent)
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#width-relative-to-parent-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="width-relative-to-parent-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="width-relative-to-parent-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"bg-body-highlight p-2 border-dashed mb-3 w-100\\\"><code>.w-100</code></div> <div class=\\\"bg-body-highlight p-2 border-dashed mb-3 w-75\\\"><code>.w-75</code></div> <div class=\\\"bg-body-highlight p-2 border-dashed mb-3 w-50\\\"><code>.w-50</code></div> <div class=\\\"bg-body-highlight p-2 border-dashed mb-3 w-25\\\"><code>.w-25</code></div> <div class=\\\"bg-body-highlight p-2 border-dashed mb-3 w-auto\\\"><code>.w-auto</code></div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="bg-body-highlight p-2 border-dashed mb-3 w-100">
                    <code>
.w-100
                    </code>
                  </div>
                  <div className="bg-body-highlight p-2 border-dashed mb-3 w-75">
                    <code>
.w-75
                    </code>
                  </div>
                  <div className="bg-body-highlight p-2 border-dashed mb-3 w-50">
                    <code>
.w-50
                    </code>
                  </div>
                  <div className="bg-body-highlight p-2 border-dashed mb-3 w-25">
                    <code>
.w-25
                    </code>
                  </div>
                  <div className="bg-body-highlight p-2 border-dashed mb-3 w-auto">
                    <code>
.w-auto
                    </code>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Height (relative to parent)
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#height-relative-to-parent-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="height-relative-to-parent-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="height-relative-to-parent-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"vh-50 py-3\\\"> <div class=\\\"row h-100\\\"> <div class=\\\"col\\\"> <div class=\\\"bg-body-highlight p-2 border-dashed mb-3 h-100\\\"><code>.h-100</code></div> </div> <div class=\\\"col\\\"> <div class=\\\"bg-body-highlight p-2 border-dashed mb-3 h-75\\\"><code>.h-75</code></div> </div> <div class=\\\"col\\\"> <div class=\\\"bg-body-highlight p-2 border-dashed mb-3 h-50\\\"><code>.h-50</code></div> </div> <div class=\\\"col\\\"> <div class=\\\"bg-body-highlight p-2 border-dashed mb-3 h-25\\\"><code>.h-25</code></div> </div> <div class=\\\"col\\\"> <div class=\\\"bg-body-highlight p-2 border-dashed mb-3 h-auto\\\"><code>.h-auto</code></div> </div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="vh-50 py-3">
                    <div className="row h-100">
                      <div className="col">
                        <div className="bg-body-highlight p-2 border-dashed mb-3 h-100">
                          <code>
.h-100
                          </code>
                        </div>
                      </div>
                      <div className="col">
                        <div className="bg-body-highlight p-2 border-dashed mb-3 h-75">
                          <code>
.h-75
                          </code>
                        </div>
                      </div>
                      <div className="col">
                        <div className="bg-body-highlight p-2 border-dashed mb-3 h-50">
                          <code>
.h-50
                          </code>
                        </div>
                      </div>
                      <div className="col">
                        <div className="bg-body-highlight p-2 border-dashed mb-3 h-25">
                          <code>
.h-25
                          </code>
                        </div>
                      </div>
                      <div className="col">
                        <div className="bg-body-highlight p-2 border-dashed mb-3 h-auto">
                          <code>
.h-auto
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Special classes (relative to viewport)
                    </h4>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="special-classes-relative-to-viewport-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><pre class=\\\"rounded-3\\\"><code class=\\\"lang-css\\\">.mw-100 { max-width: 100%; } .min-vw-100 { min-width: 100vw; } .vw-100 { width: 100vw; } .min-vh-100 { min-height: 100vh; } .min-vh-75 { min-height: 75vh; } .min-vh-50 { min-height: 50vh; } .min-vh-25 { min-height: 25vh; } .vh-100 { height: 100vh !important; } .vh-75 { height: 75vh !important; } .vh-50 { height: 50vh !important; } .vh-25 { height: 25vh !important; } .min-vh-sm-75 { min-height: 75vh; } .min-vh-sm-50 { min-height: 50vh; } .min-vh-sm-25 { min-height: 25vh; } .vh-sm-100 { height: 100vh !important; } .vh-sm-75 { height: 75vh !important; } .vh-sm-50 { height: 50vh !important; } .vh-sm-25 { height: 25vh !important; } .min-vh-md-100 { min-height: 100vh; } .min-vh-md-75 { min-height: 75vh; } .min-vh-md-50 { min-height: 50vh; } .min-vh-md-25 { min-height: 25vh; } .vh-md-100 { height: 100vh !important; } .vh-md-75 { height: 75vh !important; } .vh-md-50 { height: 50vh !important; } .vh-md-25 { height: 25vh !important; } .min-vh-lg-100 { min-height: 100vh; } .min-vh-lg-75 { min-height: 75vh; } .min-vh-lg-50 { min-height: 50vh; } .min-vh-lg-25 { min-height: 25vh; } .vh-lg-100 { height: 100vh !important; } .vh-lg-75 { height: 75vh !important; } .vh-lg-50 { height: 50vh !important; } .vh-lg-25 { height: 25vh !important; } .min-vh-xl-100 { min-height: 100vh; } .min-vh-xl-75 { min-height: 75vh; } .min-vh-xl-50 { min-height: 50vh; } .min-vh-xl-25 { min-height: 25vh; } .vh-xl-100 { height: 100vh !important; } .vh-xl-75 { height: 75vh !important; } .vh-xl-50 { height: 50vh !important; } .vh-xl-25 { height: 25vh !important; } .min-vh-xxl-100 { min-height: 100vh; } .min-vh-xxl-75 { min-height: 75vh; } .min-vh-xxl-50 { min-height: 50vh; } .min-vh-xxl-25 { min-height: 25vh; } .vh-xxl-100 { height: 100vh !important; } .vh-xxl-75 { height: 75vh !important; } .vh-xxl-50 { height: 50vh !important; } .vh-xxl-25 { height: 25vh !important; }</code></pre></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <pre className="rounded-3">
{"<code class=\"lang-css\">.mw-100 { max-width: 100%; } .min-vw-100 { min-width: 100vw; } .vw-100 { width: 100vw; } .min-vh-100 { min-height: 100vh; } .min-vh-75 { min-height: 75vh; } .min-vh-50 { min-height: 50vh; } .min-vh-25 { min-height: 25vh; } .vh-100 { height: 100vh !important; } .vh-75 { height: 75vh !important; } .vh-50 { height: 50vh !important; } .vh-25 { height: 25vh !important; } .min-vh-sm-75 { min-height: 75vh; } .min-vh-sm-50 { min-height: 50vh; } .min-vh-sm-25 { min-height: 25vh; } .vh-sm-100 { height: 100vh !important; } .vh-sm-75 { height: 75vh !important; } .vh-sm-50 { height: 50vh !important; } .vh-sm-25 { height: 25vh !important; } .min-vh-md-100 { min-height: 100vh; } .min-vh-md-75 { min-height: 75vh; } .min-vh-md-50 { min-height: 50vh; } .min-vh-md-25 { min-height: 25vh; } .vh-md-100 { height: 100vh !important; } .vh-md-75 { height: 75vh !important; } .vh-md-50 { height: 50vh !important; } .vh-md-25 { height: 25vh !important; } .min-vh-lg-100 { min-height: 100vh; } .min-vh-lg-75 { min-height: 75vh; } .min-vh-lg-50 { min-height: 50vh; } .min-vh-lg-25 { min-height: 25vh; } .vh-lg-100 { height: 100vh !important; } .vh-lg-75 { height: 75vh !important; } .vh-lg-50 { height: 50vh !important; } .vh-lg-25 { height: 25vh !important; } .min-vh-xl-100 { min-height: 100vh; } .min-vh-xl-75 { min-height: 75vh; } .min-vh-xl-50 { min-height: 50vh; } .min-vh-xl-25 { min-height: 25vh; } .vh-xl-100 { height: 100vh !important; } .vh-xl-75 { height: 75vh !important; } .vh-xl-50 { height: 50vh !important; } .vh-xl-25 { height: 25vh !important; } .min-vh-xxl-100 { min-height: 100vh; } .min-vh-xxl-75 { min-height: 75vh; } .min-vh-xxl-50 { min-height: 50vh; } .min-vh-xxl-25 { min-height: 25vh; } .vh-xxl-100 { height: 100vh !important; } .vh-xxl-75 { height: 75vh !important; } .vh-xxl-50 { height: 50vh !important; } .vh-xxl-25 { height: 25vh !important; }</code>"}
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
                <a href="#width-relative-to-parent" className="nav-link">
Width
                </a>
              </li>
              <li className="nav-item">
                <a href="#height-relative-to-parent" className="nav-link">
Height
                </a>
              </li>
              <li className="nav-item">
                <a href="#special-classes-relative-to-viewport" className="nav-link">
Special classes
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
