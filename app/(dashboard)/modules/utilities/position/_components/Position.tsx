'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Position() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Position
    </h2>

    <p className="text-body-tertiary lead mb-2">
Use these shorthand utilities for quickly configuring the position of an element.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/utilities/position/" className="btn btn-link p-0"  target="_blank">
Position on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="mb-9">
            <div className="card border my-5">
              <div className="card-header border-bottom">
                <h3 className="mb-2" data-anchor>
Position values 
                </h3>
                <p className="text-body-tertiary">
Quick positioning classes are available, though they are not responsive.
                </p>
              </div>
              <div className="card-body">
                <pre className="rounded-3">
{"<code class=\"lang-css\">.position-static .position-relative .position-absolute .position-sticky .fixed-top .fixed-bottom</code>"}
                </pre>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Arrange Elements
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Arrange elements easily with the edge positioning utilities. The format is 
                      <code>
{"{property}-{position}. "}
                      </code>
 has special utility class 
                      <code>
.all-0 
                      </code>
to give full height/width to child element of parent element.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#arrange-elements-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="arrange-elements-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="arrange-elements-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"position-relative bg-body-secondary mb-4\\\" style=\\\"height: 200px;\\\"> <div class=\\\"p-3 bg-body-quaternary rounded-1 position-absolute top-0 start-0\\\"></div> <div class=\\\"p-3 bg-body-quaternary rounded-1 position-absolute top-0 end-0\\\"></div> <div class=\\\"p-3 bg-body-quaternary rounded-1 position-absolute top-50 start-50\\\"></div> <div class=\\\"p-3 bg-body-quaternary rounded-1 position-absolute bottom-50 end-50\\\"></div> <div class=\\\"p-3 bg-body-quaternary rounded-1 position-absolute bottom-0 start-0\\\"></div> <div class=\\\"p-3 bg-body-quaternary rounded-1 position-absolute bottom-0 end-0\\\"></div> </div> <div class=\\\"position-relative\\\" style=\\\"height: 100px; width: 100px\\\"> <div class=\\\"bg-body-quaternary rounded-1 text-white d-flex flex-center position-absolute all-0\\\">.all-0</div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="position-relative bg-body-secondary mb-4" style={{"height":"200px"} as CSSProperties}>
                    <div className="p-3 bg-body-quaternary rounded-1 position-absolute top-0 start-0">                    </div>
                    <div className="p-3 bg-body-quaternary rounded-1 position-absolute top-0 end-0">                    </div>
                    <div className="p-3 bg-body-quaternary rounded-1 position-absolute top-50 start-50">                    </div>
                    <div className="p-3 bg-body-quaternary rounded-1 position-absolute bottom-50 end-50">                    </div>
                    <div className="p-3 bg-body-quaternary rounded-1 position-absolute bottom-0 start-0">                    </div>
                    <div className="p-3 bg-body-quaternary rounded-1 position-absolute bottom-0 end-0">                    </div>
                  </div>
                  <div className="position-relative" style={{"height":"100px","width":"100px"} as CSSProperties}>
                    <div className="bg-body-quaternary rounded-1 text-white d-flex flex-center position-absolute all-0">
.all-0
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Center Elements
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
In addition, you can also center the elements with the transform utility classes 
                      <code>
.translate-middle
                      </code>
, 
                      <code>
.translate-middle-x 
                      </code>
, 
                      <code>
.translate-middle-y
                      </code>
. Responsive variations also exist for 
                      <code>
transform-middle
                      </code>
, For example: 
                      <code>
{"transform-{xxl|xl|lg|md|sm}-middle-{x|y}"}
                      </code>
.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#center-elements-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="center-elements-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="center-elements-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"position-relative bg-body-secondary\\\" style=\\\"height: 200px;\\\"> <div class=\\\"p-3 bg-body-quaternary rounded-1 position-absolute top-0 start-50 translate-middle-x\\\"></div> <div class=\\\"p-3 bg-body-quaternary rounded-1 position-absolute top-50 start-0 translate-middle-y\\\"></div> <div class=\\\"p-3 bg-body-quaternary rounded-1 position-absolute top-50 start-50 translate-middle\\\"></div> <div class=\\\"p-3 bg-body-quaternary rounded-1 position-absolute top-50 end-0 translate-middle-y\\\"></div> <div class=\\\"p-3 bg-body-quaternary rounded-1 position-absolute bottom-0 start-50 translate-middle-x\\\"></div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="position-relative bg-body-secondary" style={{"height":"200px"} as CSSProperties}>
                    <div className="p-3 bg-body-quaternary rounded-1 position-absolute top-0 start-50 translate-middle-x">                    </div>
                    <div className="p-3 bg-body-quaternary rounded-1 position-absolute top-50 start-0 translate-middle-y">                    </div>
                    <div className="p-3 bg-body-quaternary rounded-1 position-absolute top-50 start-50 translate-middle">                    </div>
                    <div className="p-3 bg-body-quaternary rounded-1 position-absolute top-50 end-0 translate-middle-y">                    </div>
                    <div className="p-3 bg-body-quaternary rounded-1 position-absolute bottom-0 start-50 translate-middle-x">                    </div>
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
                <a href="#position-values" className="nav-link">
Position values
                </a>
              </li>
              <li className="nav-item">
                <a href="#arrange-elements" className="nav-link">
Arrange elements
                </a>
              </li>
              <li className="nav-item">
                <a href="#center-elements" className="nav-link">
Center elements
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
