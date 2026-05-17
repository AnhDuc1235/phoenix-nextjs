'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Interactions() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Interactions
    </h2>

    <p className="text-body-tertiary lead mb-2">
Utility classes that change how users interact with contents of a website.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/utilities/interactions/" className="btn btn-link p-0"  target="_blank">
Interactions on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
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
Text selection
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Change the way in which the content is selected when the user interacts with it.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#text-selection-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="text-selection-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="text-selection-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p class=\\\"user-select-all\\\">This paragraph will be entirely selected when clicked by the user.</p> <p class=\\\"user-select-auto\\\">This paragraph has default select behavior.</p> <p class=\\\"user-select-none\\\">This paragraph will not be selectable when clicked by the user.</p></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <p className="user-select-all">
This paragraph will be entirely selected when clicked by the user.
                  </p>
                  <p className="user-select-auto">
This paragraph has default select behavior.
                  </p>
                  <p className="user-select-none">
This paragraph will not be selectable when clicked by the user.
                  </p>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Pointer events
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Bootstrap provides 
                      <code>
.pe-none
                      </code>
 and 
                      <code>
.pe-auto
                      </code>
 classes to prevent or add element interactions.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#pointer-events-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="pointer-events-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="pointer-events-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p><a class=\\\"pe-none\\\" href=\\\"#\\\" tabindex=\\\"-1\\\" aria-disabled=\\\"true\\\">This link</a> can not be clicked.</p> <p><a class=\\\"pe-auto\\\" href=\\\"#\\\">This link</a> can be clicked (this is default behavior).</p> <p class=\\\"pe-none\\\"><a href=\\\"#\\\" tabindex=\\\"-1\\\" aria-disabled=\\\"true\\\">This link</a> can not be clicked because the <code>pointer-events</code> property is inherited from its parent. However, <a class=\\\"pe-auto\\\" href=\\\"#\\\">this link</a> has a <code>pe-auto</code> class and can be clicked.</p></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <p>
                    <a href="#" className="pe-none"  tabIndex={-1} aria-disabled="true">
This link
                    </a>
 can not be clicked.
                  </p>
                  <p>
                    <a href="#" className="pe-auto">
This link
                    </a>
 can be clicked (this is default behavior).
                  </p>
                  <p className="pe-none">
                    <a href="#" tabIndex={-1} aria-disabled="true">
This link
                    </a>
 can not be clicked because the 
                    <code>
pointer-events
                    </code>
 property is inherited from its parent. However, 
                    <a href="#" className="pe-auto">
this link
                    </a>
 has a 
                    <code>
pe-auto
                    </code>
 class and can be clicked.
                  </p>
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
                <a href="#text-selection" className="nav-link">
Text selection
                </a>
              </li>
              <li className="nav-item">
                <a href="#pointer-events" className="nav-link">
Pointer events
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
