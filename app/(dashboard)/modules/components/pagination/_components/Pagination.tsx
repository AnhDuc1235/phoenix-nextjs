'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Pagination() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Pagination
    </h2>

    <p className="text-body-tertiary lead mb-2">
Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/components/pagination/" className="btn btn-link p-0"  target="_blank">
Pagination on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="mb-9">
            <div className="card shadow-none border my-6" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Example
                    </h4>
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
{"<code class=\"language-html\"><nav aria-label=\\\"Page navigation example\\\"> <ul class=\\\"pagination mb-0\\\"> <li class=\\\"page-item\\\"> <a class=\\\"page-link\\\" href=\\\"#\\\"> <span class=\\\"fas fa-chevron-left\\\"> </span> </a> </li> <li class=\\\"page-item\\\"> <a class=\\\"page-link\\\" href=\\\"#\\\">1</a> </li> <li class=\\\"page-item\\\"> <a class=\\\"page-link\\\" href=\\\"#\\\">2</a> </li> <li class=\\\"page-item\\\"> <a class=\\\"page-link\\\" href=\\\"#\\\">3</a> </li> <li class=\\\"page-item active\\\" aria-current=\\\"page\\\"> <a class=\\\"page-link\\\" href=\\\"#\\\">4</a> </li> <li class=\\\"page-item\\\"> <a class=\\\"page-link\\\" href=\\\"#\\\">5</a> </li> <li class=\\\"page-item\\\"> <a class=\\\"page-link\\\" href=\\\"#\\\"> <span class=\\\"fas fa-chevron-right\\\"></span></a> </li> </ul> </nav></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination mb-0">
                      <li className="page-item">
                        <a href="#" className="page-link">
                          <span className="fas fa-chevron-left">                          </span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
1
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
2
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
3
                        </a>
                      </li>
                      <li className="page-item active" aria-current="page">
                        <a href="#" className="page-link">
4
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
5
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          <span className="fas fa-chevron-right">                          </span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-6" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Alignment
                    </h4>
                    <div className="mt-2 text-body-secondary">
                      <p>
Change the alignment of pagination components with 
                        <PhoenixLink href="/modules/components/modules/utilities/flex">
flexbox utilities
                        </PhoenixLink>
.
                      </p>
                    </div>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#alignment-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="alignment-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="alignment-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><!-- Center--> <nav aria-label=\\\"Page navigation example\\\"> <ul class=\\\"pagination justify-content-center\\\"> <li class=\\\"page-item\\\"><a class=\\\"page-link\\\" href=\\\"#\\\" tabindex=\\\"-1\\\" aria-disabled=\\\"true\\\">Previous</a></li> <li class=\\\"page-item\\\"><a class=\\\"page-link\\\" href=\\\"#\\\">1</a></li> <li class=\\\"page-item\\\"><a class=\\\"page-link\\\" href=\\\"#\\\">2</a></li> <li class=\\\"page-item\\\"><a class=\\\"page-link\\\" href=\\\"#\\\">3</a></li> <li class=\\\"page-item active\\\" aria-current=\\\"page\\\"><a class=\\\"page-link\\\" href=\\\"#\\\">4</a></li> <li class=\\\"page-item\\\"><a class=\\\"page-link\\\" href=\\\"#\\\">5</a></li> <li class=\\\"page-item\\\"><a class=\\\"page-link\\\" href=\\\"#\\\">Next</a></li> </ul> </nav> <!-- End--> <nav aria-label=\\\"Page navigation example\\\"> <ul class=\\\"pagination justify-content-end\\\"> <li class=\\\"page-item\\\"><a class=\\\"page-link\\\" href=\\\"#\\\" tabindex=\\\"-1\\\" aria-disabled=\\\"true\\\">Previous</a></li> <li class=\\\"page-item\\\"><a class=\\\"page-link\\\" href=\\\"#\\\">1</a></li> <li class=\\\"page-item\\\"><a class=\\\"page-link\\\" href=\\\"#\\\">2</a></li> <li class=\\\"page-item\\\"><a class=\\\"page-link\\\" href=\\\"#\\\">3</a></li> <li class=\\\"page-item active\\\" aria-current=\\\"page\\\"><a class=\\\"page-link\\\" href=\\\"#\\\">4</a></li> <li class=\\\"page-item\\\"><a class=\\\"page-link\\\" href=\\\"#\\\">5</a></li> <li class=\\\"page-item\\\"><a class=\\\"page-link\\\" href=\\\"#\\\">Next</a></li> </ul> </nav></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <a href="#" className="page-link"  tabIndex={-1} aria-disabled="true">
Previous
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
1
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
2
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
3
                        </a>
                      </li>
                      <li className="page-item active" aria-current="page">
                        <a href="#" className="page-link">
4
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
5
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-end">
                      <li className="page-item">
                        <a href="#" className="page-link"  tabIndex={-1} aria-disabled="true">
Previous
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
1
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
2
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
3
                        </a>
                      </li>
                      <li className="page-item active" aria-current="page">
                        <a href="#" className="page-link">
4
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
5
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
Next
                        </a>
                      </li>
                    </ul>
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
                <a href="#example" className="nav-link">
Example
                </a>
              </li>
              <li className="nav-item">
                <a href="#alignment" className="nav-link">
Alignment
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
