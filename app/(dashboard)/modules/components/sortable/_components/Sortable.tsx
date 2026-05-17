'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Sortable() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Sortable
    </h2>

    <p className="text-body-tertiary lead mb-2">
Reorderable drag-and-drop lists for modern browsers and touch devices. No jQuery or framework required.
    </p>
    <a href="https://sortablejs.github.io/Sortable/" className="btn btn-link p-0"  target="_blank">
Sortable      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="card shadow-none border my-4" data-component-card>
            <div className="card-header p-4 border-bottom bg-body">
              <div className="row g-3 justify-content-between align-items-end">
                <div className="col-12 col-md">
                  <h4 className="text-body mb-0" data-anchor>
Basic Example
                  </h4>
                  <p className="mb-0 mt-2 text-body-secondary">
Hare is the basic example of sortableJs. You can drag sortable items between the same group. Use 
                    <code>
data-sortable
                    </code>
 attribute to get default behavior. We have also designed our 
                    <a href="#!">
Kanban Board
                    </a>
 usign SortableJS libarary.
                  </p>
                </div>
                <div className="col col-md-auto">
                  <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                    <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                      <span className="fas fa-copy me-1">                      </span>
Copy Code
                    </button>
                    <a href="#basic-example-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="basic-example-code" aria-expanded="false">
                      <span className="me-2" data-feather={"code"}>                      </span>View code
                    </a>
                    <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                      <span className="me-2" data-feather={"eye"}>                      </span>Hide code
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="collapse code-collapse" id="basic-example-code">
                <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"row\\\"> <div class=\\\"col-6\\\" data-sortable=\\\"data-sortable\\\"> <div class=\\\"sortable-item-wrapper mb-3\\\"> <p class=\\\"mb-0 sortable-item bg-body-highlight p-3 rounded-3\\\">Item1</p> </div> <div class=\\\"sortable-item-wrapper mb-3\\\"> <p class=\\\"mb-0 sortable-item bg-body-highlight p-3 rounded-3\\\">Item2</p> </div> <div class=\\\"sortable-item-wrapper mb-3\\\"> <p class=\\\"mb-0 sortable-item bg-body-highlight p-3 rounded-3\\\">Item3</p> </div> </div> <div class=\\\"col-6\\\" data-sortable=\\\"data-sortable\\\"> <div class=\\\"sortable-item-wrapper mb-3\\\"> <p class=\\\"mb-0 sortable-item bg-body-highlight p-3 rounded-3\\\">Item4</p> </div> <div class=\\\"sortable-item-wrapper mb-3\\\"> <p class=\\\"mb-0 sortable-item bg-body-highlight p-3 rounded-3\\\">Item5</p> </div> </div> </div></code>"}
                </pre>
              </div>
              <div className="p-4 code-to-copy">
                <div className="row">
                  <div className="col-6" data-sortable>
                    <div className="sortable-item-wrapper mb-3">
                      <p className="mb-0 sortable-item bg-body-highlight p-3 rounded-3">
Item1
                      </p>
                    </div>
                    <div className="sortable-item-wrapper mb-3">
                      <p className="mb-0 sortable-item bg-body-highlight p-3 rounded-3">
Item2
                      </p>
                    </div>
                    <div className="sortable-item-wrapper mb-3">
                      <p className="mb-0 sortable-item bg-body-highlight p-3 rounded-3">
Item3
                      </p>
                    </div>
                  </div>
                  <div className="col-6" data-sortable>
                    <div className="sortable-item-wrapper mb-3">
                      <p className="mb-0 sortable-item bg-body-highlight p-3 rounded-3">
Item4
                      </p>
                    </div>
                    <div className="sortable-item-wrapper mb-3">
                      <p className="mb-0 sortable-item bg-body-highlight p-3 rounded-3">
Item5
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card shadow-none border my-4" data-component-card>
            <div className="card-header p-4 border-bottom bg-body">
              <div className="row g-3 justify-content-between align-items-end">
                <div className="col-12 col-md">
                  <h4 className="text-body mb-0" data-anchor>
User Options
                  </h4>
                  <p className="mb-0 mt-2 text-body-secondary">
You can pass sortable options through 
                    <code>
data-sortable
                    </code>
 attribute like 
                    <code>
{"data-sortable=\"{\"group\":\"example\",\"animation\":150}\""}
                    </code>
                  </p>
                </div>
                <div className="col col-md-auto">
                  <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                    <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                      <span className="fas fa-copy me-1">                      </span>
Copy Code
                    </button>
                    <a href="#user-options-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="user-options-code" aria-expanded="false">
                      <span className="me-2" data-feather={"code"}>                      </span>View code
                    </a>
                    <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                      <span className="me-2" data-feather={"eye"}>                      </span>Hide code
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="collapse code-collapse" id="user-options-code">
                <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"row\\\"> <div class=\\\"col-6\\\" data-sortable='{\\\"group\\\":\\\"example\\\",\\\"animation\\\":150}'> <div class=\\\"sortable-item-wrapper mb-3\\\"> <p class=\\\"mb-0 sortable-item bg-body-highlight p-3 rounded-3\\\">Item1</p> </div> <div class=\\\"sortable-item-wrapper mb-3\\\"> <p class=\\\"mb-0 sortable-item bg-body-highlight p-3 rounded-3\\\">Item2</p> </div> <div class=\\\"sortable-item-wrapper mb-3\\\"> <p class=\\\"mb-0 sortable-item bg-body-highlight p-3 rounded-3\\\">Item3</p> </div> </div> <div class=\\\"col-6\\\" data-sortable='{\\\"group\\\":\\\"example\\\",\\\"animation\\\":150}'> <div class=\\\"sortable-item-wrapper mb-3\\\"> <p class=\\\"mb-0 sortable-item bg-body-highlight p-3 rounded-3\\\">Item4</p> </div> <div class=\\\"sortable-item-wrapper mb-3\\\"> <p class=\\\"mb-0 sortable-item bg-body-highlight p-3 rounded-3\\\">Item5</p> </div> </div> </div></code>"}
                </pre>
              </div>
              <div className="p-4 code-to-copy">
                <div className="row">
                  <div className="col-6" data-sortable={"{\"group\":\"example\",\"animation\":150}"}>
                    <div className="sortable-item-wrapper mb-3">
                      <p className="mb-0 sortable-item bg-body-highlight p-3 rounded-3">
Item1
                      </p>
                    </div>
                    <div className="sortable-item-wrapper mb-3">
                      <p className="mb-0 sortable-item bg-body-highlight p-3 rounded-3">
Item2
                      </p>
                    </div>
                    <div className="sortable-item-wrapper mb-3">
                      <p className="mb-0 sortable-item bg-body-highlight p-3 rounded-3">
Item3
                      </p>
                    </div>
                  </div>
                  <div className="col-6" data-sortable={"{\"group\":\"example\",\"animation\":150}"}>
                    <div className="sortable-item-wrapper mb-3">
                      <p className="mb-0 sortable-item bg-body-highlight p-3 rounded-3">
Item4
                      </p>
                    </div>
                    <div className="sortable-item-wrapper mb-3">
                      <p className="mb-0 sortable-item bg-body-highlight p-3 rounded-3">
Item5
                      </p>
                    </div>
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
Javascript
                  </h4>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="collapse code-collapse" id="javascript-code">
                <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><pre><code class=\\\"language-html\\\"> &lt;script src=&quot;vendors/sortablejs/Sortable.min.js&quot;&gt;&lt;/script&gt;</code></pre></code>"}
                </pre>
              </div>
              <div className="p-4 code-to-copy">
                <pre>
{"<code class=\"language-html\"> <script src=\\\"vendors/sortablejs/Sortable.min.js\\\"></script></code>"}
                </pre>
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
                <a href="#user-options" className="nav-link">
User Options
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
