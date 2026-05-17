'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function ProgressBar() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Progress
    </h2>

    <p className="text-body-tertiary lead mb-2">
Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/components/progress/" className="btn btn-link p-0"  target="_blank">
Progress on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
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
{"<code class=\"language-html\"><div class=\\\"progress\\\" style=\\\"height:15px\\\"> <div class=\\\"progress-bar\\\" role=\\\"progressbar\\\" style=\\\"width: 70%\\\" aria-valuenow=\\\"25\\\" aria-valuemin=\\\"0\\\" aria-valuemax=\\\"100\\\"></div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="progress" style={{"height":"15px"} as CSSProperties}>
                    <div className="progress-bar" role="progressbar" style={{"width":"70%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Label
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#label-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="label-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="label-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"progress\\\" style=\\\"height:15px\\\"> <div class=\\\"progress-bar rounded-3\\\" role=\\\"progressbar\\\" style=\\\"width: 50%\\\" aria-valuenow=\\\"25\\\" aria-valuemin=\\\"0\\\" aria-valuemax=\\\"100\\\">50%</div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="progress" style={{"height":"15px"} as CSSProperties}>
                    <div className="progress-bar rounded-3" role="progressbar" style={{"width":"50%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
50%
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
Height
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#height-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="height-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="height-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"progress mb-3\\\" style=\\\"height:1px\\\"> <div class=\\\"progress-bar\\\" role=\\\"progressbar\\\" style=\\\"width: 70%\\\" aria-valuenow=\\\"25\\\" aria-valuemin=\\\"0\\\" aria-valuemax=\\\"100\\\"></div> </div> <div class=\\\"progress mb-3\\\" style=\\\"height:10px\\\"> <div class=\\\"progress-bar\\\" role=\\\"progressbar\\\" style=\\\"width: 70%\\\" aria-valuenow=\\\"25\\\" aria-valuemin=\\\"0\\\" aria-valuemax=\\\"100\\\"></div> </div> <div class=\\\"progress mb-3\\\" style=\\\"height:20px\\\"> <div class=\\\"progress-bar\\\" role=\\\"progressbar\\\" style=\\\"width: 70%\\\" aria-valuenow=\\\"25\\\" aria-valuemin=\\\"0\\\" aria-valuemax=\\\"100\\\"></div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="progress mb-3" style={{"height":"1px"} as CSSProperties}>
                    <div className="progress-bar" role="progressbar" style={{"width":"70%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>                    </div>
                  </div>
                  <div className="progress mb-3" style={{"height":"10px"} as CSSProperties}>
                    <div className="progress-bar" role="progressbar" style={{"width":"70%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>                    </div>
                  </div>
                  <div className="progress mb-3" style={{"height":"20px"} as CSSProperties}>
                    <div className="progress-bar" role="progressbar" style={{"width":"70%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Background
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#background-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="background-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="background-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"progress mb-3\\\" style=\\\"height:15px\\\"> <div class=\\\"progress-bar bg-success\\\" role=\\\"progressbar\\\" style=\\\"width: 30%\\\" aria-valuenow=\\\"25\\\" aria-valuemin=\\\"0\\\" aria-valuemax=\\\"100\\\"></div> </div> <div class=\\\"progress mb-3\\\" style=\\\"height:15px\\\"> <div class=\\\"progress-bar bg-info\\\" role=\\\"progressbar\\\" style=\\\"width: 40%\\\" aria-valuenow=\\\"25\\\" aria-valuemin=\\\"0\\\" aria-valuemax=\\\"100\\\"></div> </div> <div class=\\\"progress mb-3\\\" style=\\\"height:15px\\\"> <div class=\\\"progress-bar bg-warning\\\" role=\\\"progressbar\\\" style=\\\"width: 50%\\\" aria-valuenow=\\\"25\\\" aria-valuemin=\\\"0\\\" aria-valuemax=\\\"100\\\"></div> </div> <div class=\\\"progress mb-3\\\" style=\\\"height:15px\\\"> <div class=\\\"progress-bar bg-danger\\\" role=\\\"progressbar\\\" style=\\\"width: 60%\\\" aria-valuenow=\\\"25\\\" aria-valuemin=\\\"0\\\" aria-valuemax=\\\"100\\\"></div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="progress mb-3" style={{"height":"15px"} as CSSProperties}>
                    <div className="progress-bar bg-success" role="progressbar" style={{"width":"30%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>                    </div>
                  </div>
                  <div className="progress mb-3" style={{"height":"15px"} as CSSProperties}>
                    <div className="progress-bar bg-info" role="progressbar" style={{"width":"40%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>                    </div>
                  </div>
                  <div className="progress mb-3" style={{"height":"15px"} as CSSProperties}>
                    <div className="progress-bar bg-warning" role="progressbar" style={{"width":"50%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>                    </div>
                  </div>
                  <div className="progress mb-3" style={{"height":"15px"} as CSSProperties}>
                    <div className="progress-bar bg-danger" role="progressbar" style={{"width":"60%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>                    </div>
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
                <a href="#basic-example" className="nav-link">
Basic Example
                </a>
              </li>
              <li className="nav-item">
                <a href="#label" className="nav-link">
Label
                </a>
              </li>
              <li className="nav-item">
                <a href="#height" className="nav-link">
Height
                </a>
              </li>
              <li className="nav-item">
                <a href="#background" className="nav-link">
Background
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
