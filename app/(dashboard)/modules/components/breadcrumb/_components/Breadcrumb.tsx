'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Breadcrumb() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Breadcrumb
    </h2>

    <p className="text-body-tertiary lead mb-2">
Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/components/breadcrumb/" className="btn btn-link p-0"  target="_blank">
Breadcrumb on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
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
Breadcrumb Example
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#breadcrumb-example-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="breadcrumb-example-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="breadcrumb-example-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><nav aria-label=\\\"breadcrumb\\\"> <ol class=\\\"breadcrumb mb-0\\\"> <li class=\\\"breadcrumb-item\\\"><a href=\\\"#\\\">Item 1</a></li> <li class=\\\"breadcrumb-item\\\"><a href=\\\"#\\\">Item 2</a></li> <li class=\\\"breadcrumb-item\\\"><a href=\\\"#\\\">Item 3</a></li> <li class=\\\"breadcrumb-item active\\\" aria-current=\\\"page\\\">Item 4</li> </ol> </nav></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="#">
Item 1
                        </a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">
Item 2
                        </a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">
Item 3
                        </a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
Item 4
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Dividers
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#dividers-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="dividers-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="dividers-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><nav style=\\\"--phoenix-breadcrumb-divider: '&gt;&gt;';\\\" aria-label=\\\"breadcrumb\\\"> <ol class=\\\"breadcrumb mb-0\\\"> <li class=\\\"breadcrumb-item\\\"><a href=\\\"#\\\">Home</a></li> <li class=\\\"breadcrumb-item active\\\" aria-current=\\\"page\\\">Library</li> </ol> </nav></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <nav style={{"--phoenix-breadcrumb-divider":"'&gt"} as CSSProperties} aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="#">
Home
                        </a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
Library
                      </li>
                    </ol>
                  </nav>
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
                <a href="#breadcrumb-example" className="nav-link">
Breadcrumb Example
                </a>
              </li>
              <li className="nav-item">
                <a href="#dividers" className="nav-link">
Dividers
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
