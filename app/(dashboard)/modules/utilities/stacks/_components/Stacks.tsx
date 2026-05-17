'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Stacks() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Stacks
    </h2>

    <p className="text-body-tertiary lead mb-2">
Shorthand helpers that build on top of our flexbox utilities to make component layout faster and easier than ever.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/helpers/stacks/" className="btn btn-link p-0"  target="_blank">
Stacks on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
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
Vertical
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Use 
                      <code>
.vstack
                      </code>
 to create vertical layouts. Stacked items are full-width by default. Use 
                      <code>
.gap-*
                      </code>
 utilities to add space between items.
                    </p>
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
{"<code class=\"language-html\"><div class=\\\"vstack gap-3\\\"> <div class=\\\"border border-translucent bg-body-secondary px-3\\\">First item</div> <div class=\\\"border border-translucent bg-body-secondary px-3\\\">Second item</div> <div class=\\\"border border-translucent bg-body-secondary px-3\\\">Third item</div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="vstack gap-3">
                    <div className="border border-translucent bg-body-secondary px-3">
First item
                    </div>
                    <div className="border border-translucent bg-body-secondary px-3">
Second item
                    </div>
                    <div className="border border-translucent bg-body-secondary px-3">
Third item
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
Horizontal
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Use 
                      <code>
.hstack
                      </code>
 for horizontal layouts. Stacked items are vertically centered by default and only take up their necessary width. Use 
                      <code>
.gap-*
                      </code>
 utilities to add space between items.
                    </p>
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
{"<code class=\"language-html\"><div class=\\\"hstack gap-3\\\"> <div class=\\\"border border-translucent bg-body-secondary px-3\\\">First item</div> <div class=\\\"border border-translucent bg-body-secondary px-3\\\">Second item</div> <div class=\\\"border border-translucent bg-body-secondary px-3\\\">Third item</div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="hstack gap-3">
                    <div className="border border-translucent bg-body-secondary px-3">
First item
                    </div>
                    <div className="border border-translucent bg-body-secondary px-3">
Second item
                    </div>
                    <div className="border border-translucent bg-body-secondary px-3">
Third item
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
Margin utilities
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Using horizontal margin utilities like 
                      <code>
.ms-auto
                      </code>
 as spacers:
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#margin-utilities-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="margin-utilities-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="margin-utilities-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"hstack gap-3\\\"> <div class=\\\"border border-translucent bg-body-secondary px-3\\\">First item</div> <div class=\\\"border border-translucent bg-body-secondary px-3 ms-auto\\\">Second item</div> <div class=\\\"border border-translucent bg-body-secondary px-3\\\">Third item</div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="hstack gap-3">
                    <div className="border border-translucent bg-body-secondary px-3">
First item
                    </div>
                    <div className="border border-translucent bg-body-secondary px-3 ms-auto">
Second item
                    </div>
                    <div className="border border-translucent bg-body-secondary px-3">
Third item
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
Vertical rules
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
allowing you to create vertical dividers in common layouts
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#vertical-rules-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="vertical-rules-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="vertical-rules-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"hstack gap-3\\\"> <div class=\\\"border border-translucent bg-body-secondary px-3\\\">First item</div> <div class=\\\"border border-translucent bg-body-secondary px-3 ms-auto\\\">Second item</div> <div class=\\\"vr bg-body-secondary\\\"></div> <div class=\\\"border border-translucent bg-body-secondary px-3\\\">Third item</div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="hstack gap-3">
                    <div className="border border-translucent bg-body-secondary px-3">
First item
                    </div>
                    <div className="border border-translucent bg-body-secondary px-3 ms-auto">
Second item
                    </div>
                    <div className="vr bg-body-secondary">                    </div>
                    <div className="border border-translucent bg-body-secondary px-3">
Third item
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
Stack buttons
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Use 
                      <code>
.vstack
                      </code>
 to stack buttons and other elements:
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#stack-buttons-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="stack-buttons-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="stack-buttons-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"vstack gap-2 col-md-5 mx-auto\\\"> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">Save changes</button> <button class=\\\"btn btn-outline-secondary\\\" type=\\\"button\\\">Cancel</button> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="vstack gap-2 col-md-5 mx-auto">
                    <button className="btn btn-secondary" type="button">
Save changes
                    </button>
                    <button className="btn btn-outline-secondary" type="button">
Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Inline form
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Create an inline form with 
                      <code>
.hstack:
                      </code>
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#inline-form-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="inline-form-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="inline-form-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"hstack gap-3\\\"> <input class=\\\"form-control me-auto\\\" type=\\\"text\\\" placeholder=\\\"Add your item here...\\\" aria-label=\\\"Add your item here...\\\" /> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">Submit</button> <div class=\\\"vr bg-body-secondary\\\"></div> <button class=\\\"btn btn-outline-danger\\\" type=\\\"button\\\">Reset</button> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="hstack gap-3">
                    <input className="form-control me-auto" type="text" placeholder="Add your item here..." aria-label="Add your item here..." />
                    <button className="btn btn-secondary" type="button">
Submit
                    </button>
                    <div className="vr bg-body-secondary">                    </div>
                    <button className="btn btn-outline-danger" type="button">
Reset
                    </button>
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
                <a href="#vertical" className="nav-link">
Vertical
                </a>
              </li>
              <li className="nav-item">
                <a href="#horizontal" className="nav-link">
Horizontal
                </a>
              </li>
              <li className="nav-item">
                <a href="#margin-utilities" className="nav-link">
Margin utilities
                </a>
              </li>
              <li className="nav-item">
                <a href="#vertical-rules" className="nav-link">
Vertical rules
                </a>
              </li>
              <li className="nav-item">
                <a href="#stack-buttons" className="nav-link">
Stack buttons
                </a>
              </li>
              <li className="nav-item">
                <a href="#inline-form" className="nav-link">
Inline form
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
