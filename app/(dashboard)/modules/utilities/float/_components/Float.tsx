'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Float() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Float
    </h2>

    <p className="text-body-tertiary lead mb-2">
Toggle floats on any element, across any breakpoint, using our responsive float utilities
    </p>
    <a href="https://getbootstrap.com/docs/5.3/utilities/float/" className="btn btn-link p-0"  target="_blank">
Float on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="mb-9">
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Overview
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
These utility classes float an element to the left or right, or disable floating, based on the current viewport size using the 
                      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/float">
CSS                         <code>
float
                        </code> property
                      </a>
. 
                      <code>
!important
                      </code>
 is included to avoid specificity issues. These use the same viewport breakpoints as our grid system. Please be aware float utilities have no effect on flex items. 
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#overview-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="overview-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="overview-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"float-start\\\">Float left on all viewport sizes</div><br /> <div class=\\\"float-end\\\">Float right on all viewport sizes</div><br /> <div class=\\\"float-none\\\">Don't float on all viewport sizes</div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="float-start">
Float left on all viewport sizes
                  </div>
                  <br />
                  <div className="float-end">
Float right on all viewport sizes
                  </div>
                  <br />
                  <div className="float-none">
Don't float on all viewport sizes
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Responsive
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Responsive variations also exist for each 
                      <code>
float
                      </code>
 value
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#responsive-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="responsive-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="responsive-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"float-sm-start\\\">Float start on viewports sized SM (small) or wider</div><br /> <div class=\\\"float-md-start\\\">Float start on viewports sized MD (medium) or wider</div><br /> <div class=\\\"float-lg-start\\\">Float start on viewports sized LG (large) or wider</div><br /> <div class=\\\"float-xl-start\\\">Float start on viewports sized XL (extra-large) or wider</div><br /></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="float-sm-start">
Float start on viewports sized SM (small) or wider
                  </div>
                  <br />
                  <div className="float-md-start">
Float start on viewports sized MD (medium) or wider
                  </div>
                  <br />
                  <div className="float-lg-start">
Float start on viewports sized LG (large) or wider
                  </div>
                  <br />
                  <div className="float-xl-start">
Float start on viewports sized XL (extra-large) or wider
                  </div>
                  <br />
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
                <a href="#overview" className="nav-link">
Overview
                </a>
              </li>
              <li className="nav-item">
                <a href="#responsive" className="nav-link">
Responsive
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
