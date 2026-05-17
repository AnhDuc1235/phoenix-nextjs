'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function VerticalAlign() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Vertical Align
    </h2>

    <p className="text-body-tertiary lead mb-2">
Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/utilities/vertical-align/" className="btn btn-link p-0"  target="_blank">
Vertical align on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="mb-9">
            <div className="card shadow-none border mb-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Example
                    </h4>
                    <div className="mt-2 text-body-secondary">
                      <p className="mb-0 pt-1 mt-2">
Change the alignment of elements with the vertical-alignment utilities. Please note that vertical-align only affects inline, inline-block, inline-table, and table cell elements. 
                        <br />
 Choose from 
                        <code>
.align-baseline,
                        </code>
                        <code>
.align-top,
                        </code>
                        <code>
.align-middle,
                        </code>
                        <code>
.align-bottom,
                        </code>
                        <code>
.align-text-bottom,
                        </code>
 and 
                        <code>
.align-text-top
                        </code>
 as needed. 
                        <br />
Multiple links and tap targets are not recommended with stretched links. However, some 
                        <code>
position 
                        </code>
and 
                        <code>
z-index 
                        </code>
styles can help should this be required. 
                      </p>
                    </div>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#example-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="example-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="example-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><span class=\\\"align-baseline\\\">baseline</span> <span class=\\\"align-top\\\">top</span> <span class=\\\"align-middle\\\">middle</span> <span class=\\\"align-bottom\\\">bottom</span> <span class=\\\"align-text-top\\\">text-top</span> <span class=\\\"align-text-bottom\\\">text-bottom</span></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <span className="align-baseline">
baseline
                  </span>
                  <span className="align-top">
top
                  </span>
                  <span className="align-middle">
middle
                  </span>
                  <span className="align-bottom">
bottom
                  </span>
                  <span className="align-text-top">
text-top
                  </span>
                  <span className="align-text-bottom">
text-bottom
                  </span>
                </div>
              </div>
            </div>
            <div className="card shadow-none border mb-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Vertical Alignment With Table Cells
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#vertical-alignment-with-table-cells-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="vertical-alignment-with-table-cells-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="vertical-alignment-with-table-cells-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"table-responsive scrollbar\\\"> <table class=\\\"table table-bordered\\\" style=\\\"height: 100px;\\\"> <tbody> <tr> <td class=\\\"align-baseline\\\">baseline</td> <td class=\\\"align-top\\\">top</td> <td class=\\\"align-middle\\\">middle</td> <td class=\\\"align-bottom\\\">bottom</td> <td class=\\\"align-text-top\\\">text-top</td> <td class=\\\"align-text-bottom\\\">text-bottom</td> </tr> </tbody> </table> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="table-responsive scrollbar">
                    <table className="table table-bordered" style={{"height":"100px"} as CSSProperties}>
                      <tbody>
                        <tr>
                          <td className="align-baseline">
baseline
                          </td>
                          <td className="align-top">
top
                          </td>
                          <td className="align-middle">
middle
                          </td>
                          <td className="align-bottom">
bottom
                          </td>
                          <td className="align-text-top">
text-top
                          </td>
                          <td className="align-text-bottom">
text-bottom
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
                <a href="#example" className="nav-link">
Example
                </a>
              </li>
              <li className="nav-item">
                <a href="#vertical-alignment-with-table-cells" className="nav-link">
Vertical Alignment With Table Cells example
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
