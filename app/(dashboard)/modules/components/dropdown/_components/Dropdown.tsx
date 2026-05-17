'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Dropdown() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Dropdowns
    </h2>

    <p className="text-body-tertiary lead mb-2">
Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/components/dropdowns/" className="btn btn-link p-0"  target="_blank">
Dropdowns on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="mb-9">
            <h2 className="mt-5" data-anchor>
Overview
            </h2>
            <p>
 Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included Bootstrap dropdown JavaScript plugin. They’re toggled by clicking, not by hovering; this is 
              <a href="https://markdotto.com/2012/02/27/bootstrap-explained-dropdowns/">
an intentional design decision
              </a>
.
            </p>
            <p>
Dropdowns are built on a third party library, 
              <a href="https://popper.js.org/">
Popper
              </a>
, which provides dynamic positioning and viewport detection. Be sure to include 
              <a href="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js">
popper.min.js
              </a>
 before Bootstrap’s JavaScript or use 
              <code>
bootstrap.bundle.min.js
              </code>
 / 
              <code>
bootstrap.bundle.js
              </code>
 which contains Popper. Popper isn’t used to position dropdowns in navbars though as dynamic positioning isn’t required.
            </p>
            <div className="card shadow-none border my-5" data-component-card>
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
{"<code class=\"language-html\"><div class=\\\"dropdown d-inline-block\\\"> <button class=\\\"btn btn-phoenix-secondary dropdown-toggle\\\" id=\\\"dropdownMenuButton\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\">Dropdown button</button><span class=\\\"caret\\\"> </span> <div class=\\\"dropdown-menu dropdown-menu-end py-0\\\" aria-labelledby=\\\"dropdownMenuButton\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="dropdown d-inline-block">
                    <button className="btn btn-phoenix-secondary dropdown-toggle" id="dropdownMenuButton" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
Dropdown button
                    </button>
                    <span className="caret">                    </span>
                    <div className="dropdown-menu dropdown-menu-end py-0" aria-labelledby="dropdownMenuButton">
                      <a href="#" className="dropdown-item">
Action
                      </a>
                      <a href="#" className="dropdown-item">
Another action
                      </a>
                      <a href="#" className="dropdown-item">
Something else here
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#" className="dropdown-item">
Separated link
                      </a>
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
Dropdown Link
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#dropdown-link-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="dropdown-link-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="dropdown-link-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"dropdown\\\"> <a class=\\\"btn btn-link dropdown-toggle\\\" id=\\\"dropdownMenuLink\\\" href=\\\"#\\\" role=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\">Dropdown link</a> <div class=\\\"dropdown-menu dropdown-menu-end py-0\\\" aria-labelledby=\\\"dropdownMenuLink\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="dropdown">
                    <a href="#" className="btn btn-link dropdown-toggle" id="dropdownMenuLink"  role="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
Dropdown link
                    </a>
                    <div className="dropdown-menu dropdown-menu-end py-0" aria-labelledby="dropdownMenuLink">
                      <a href="#" className="dropdown-item">
Action
                      </a>
                      <a href="#" className="dropdown-item">
Another action
                      </a>
                      <a href="#" className="dropdown-item">
Something else here
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#" className="dropdown-item">
Separated link
                      </a>
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
Button Variant
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#button-variant-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="button-variant-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="button-variant-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"btn-group me-1\\\"> <button class=\\\"btn dropdown-toggle mb-1 btn-primary\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\">Primary </button> <div class=\\\"dropdown-menu\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div> <div class=\\\"btn-group me-1\\\"> <button class=\\\"btn dropdown-toggle mb-1 btn-secondary\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\">Secondary </button> <div class=\\\"dropdown-menu\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div> <div class=\\\"btn-group me-1\\\"> <button class=\\\"btn dropdown-toggle mb-1 btn-success\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\">Success </button> <div class=\\\"dropdown-menu\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div> <div class=\\\"btn-group me-1\\\"> <button class=\\\"btn dropdown-toggle mb-1 btn-info\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\">Info </button> <div class=\\\"dropdown-menu\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div> <div class=\\\"btn-group me-1\\\"> <button class=\\\"btn dropdown-toggle mb-1 btn-warning\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\">Warning </button> <div class=\\\"dropdown-menu\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div> <div class=\\\"btn-group me-1\\\"> <button class=\\\"btn dropdown-toggle mb-1 btn-danger\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\">Danger </button> <div class=\\\"dropdown-menu\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="btn-group me-1">
                    <button className="btn dropdown-toggle mb-1 btn-primary" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
Primary 
                    </button>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
Action
                      </a>
                      <a href="#" className="dropdown-item">
Another action
                      </a>
                      <a href="#" className="dropdown-item">
Something else here
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#" className="dropdown-item">
Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group me-1">
                    <button className="btn dropdown-toggle mb-1 btn-secondary" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
Secondary 
                    </button>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
Action
                      </a>
                      <a href="#" className="dropdown-item">
Another action
                      </a>
                      <a href="#" className="dropdown-item">
Something else here
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#" className="dropdown-item">
Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group me-1">
                    <button className="btn dropdown-toggle mb-1 btn-success" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
Success 
                    </button>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
Action
                      </a>
                      <a href="#" className="dropdown-item">
Another action
                      </a>
                      <a href="#" className="dropdown-item">
Something else here
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#" className="dropdown-item">
Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group me-1">
                    <button className="btn dropdown-toggle mb-1 btn-info" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
Info 
                    </button>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
Action
                      </a>
                      <a href="#" className="dropdown-item">
Another action
                      </a>
                      <a href="#" className="dropdown-item">
Something else here
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#" className="dropdown-item">
Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group me-1">
                    <button className="btn dropdown-toggle mb-1 btn-warning" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
Warning 
                    </button>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
Action
                      </a>
                      <a href="#" className="dropdown-item">
Another action
                      </a>
                      <a href="#" className="dropdown-item">
Something else here
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#" className="dropdown-item">
Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group me-1">
                    <button className="btn dropdown-toggle mb-1 btn-danger" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
Danger 
                    </button>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
Action
                      </a>
                      <a href="#" className="dropdown-item">
Another action
                      </a>
                      <a href="#" className="dropdown-item">
Something else here
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#" className="dropdown-item">
Separated link
                      </a>
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
Button Split
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#button-split-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="button-split-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="button-split-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"btn-group mb-1 me-1\\\"> <button class=\\\"btn btn-primary\\\" type=\\\"button\\\">Primary </button> <button class=\\\"btn dropdown-toggle dropdown-toggle-split btn-primary\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\"><span class=\\\"sr-only\\\">Toggle Dropdown</span></button> <div class=\\\"dropdown-menu\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div> <div class=\\\"btn-group mb-1 me-1\\\"> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">Secondary </button> <button class=\\\"btn dropdown-toggle dropdown-toggle-split btn-secondary\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\"><span class=\\\"sr-only\\\">Toggle Dropdown</span></button> <div class=\\\"dropdown-menu\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div> <div class=\\\"btn-group mb-1 me-1\\\"> <button class=\\\"btn btn-success\\\" type=\\\"button\\\">Success </button> <button class=\\\"btn dropdown-toggle dropdown-toggle-split btn-success\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\"><span class=\\\"sr-only\\\">Toggle Dropdown</span></button> <div class=\\\"dropdown-menu\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div> <div class=\\\"btn-group mb-1 me-1\\\"> <button class=\\\"btn btn-info\\\" type=\\\"button\\\">Info </button> <button class=\\\"btn dropdown-toggle dropdown-toggle-split btn-info\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\"><span class=\\\"sr-only\\\">Toggle Dropdown</span></button> <div class=\\\"dropdown-menu\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div> <div class=\\\"btn-group mb-1 me-1\\\"> <button class=\\\"btn btn-warning\\\" type=\\\"button\\\">Warning </button> <button class=\\\"btn dropdown-toggle dropdown-toggle-split btn-warning\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\"><span class=\\\"sr-only\\\">Toggle Dropdown</span></button> <div class=\\\"dropdown-menu\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div> <div class=\\\"btn-group mb-1 me-1\\\"> <button class=\\\"btn btn-danger\\\" type=\\\"button\\\">Danger </button> <button class=\\\"btn dropdown-toggle dropdown-toggle-split btn-danger\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\"><span class=\\\"sr-only\\\">Toggle Dropdown</span></button> <div class=\\\"dropdown-menu\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="btn-group mb-1 me-1">
                    <button className="btn btn-primary" type="button">
Primary 
                    </button>
                    <button className="btn dropdown-toggle dropdown-toggle-split btn-primary" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                      <span className="sr-only">
Toggle Dropdown
                      </span>
                    </button>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
Action
                      </a>
                      <a href="#" className="dropdown-item">
Another action
                      </a>
                      <a href="#" className="dropdown-item">
Something else here
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#" className="dropdown-item">
Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group mb-1 me-1">
                    <button className="btn btn-secondary" type="button">
Secondary 
                    </button>
                    <button className="btn dropdown-toggle dropdown-toggle-split btn-secondary" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                      <span className="sr-only">
Toggle Dropdown
                      </span>
                    </button>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
Action
                      </a>
                      <a href="#" className="dropdown-item">
Another action
                      </a>
                      <a href="#" className="dropdown-item">
Something else here
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#" className="dropdown-item">
Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group mb-1 me-1">
                    <button className="btn btn-success" type="button">
Success 
                    </button>
                    <button className="btn dropdown-toggle dropdown-toggle-split btn-success" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                      <span className="sr-only">
Toggle Dropdown
                      </span>
                    </button>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
Action
                      </a>
                      <a href="#" className="dropdown-item">
Another action
                      </a>
                      <a href="#" className="dropdown-item">
Something else here
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#" className="dropdown-item">
Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group mb-1 me-1">
                    <button className="btn btn-info" type="button">
Info 
                    </button>
                    <button className="btn dropdown-toggle dropdown-toggle-split btn-info" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                      <span className="sr-only">
Toggle Dropdown
                      </span>
                    </button>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
Action
                      </a>
                      <a href="#" className="dropdown-item">
Another action
                      </a>
                      <a href="#" className="dropdown-item">
Something else here
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#" className="dropdown-item">
Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group mb-1 me-1">
                    <button className="btn btn-warning" type="button">
Warning 
                    </button>
                    <button className="btn dropdown-toggle dropdown-toggle-split btn-warning" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                      <span className="sr-only">
Toggle Dropdown
                      </span>
                    </button>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
Action
                      </a>
                      <a href="#" className="dropdown-item">
Another action
                      </a>
                      <a href="#" className="dropdown-item">
Something else here
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#" className="dropdown-item">
Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group mb-1 me-1">
                    <button className="btn btn-danger" type="button">
Danger 
                    </button>
                    <button className="btn dropdown-toggle dropdown-toggle-split btn-danger" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                      <span className="sr-only">
Toggle Dropdown
                      </span>
                    </button>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
Action
                      </a>
                      <a href="#" className="dropdown-item">
Another action
                      </a>
                      <a href="#" className="dropdown-item">
Something else here
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#" className="dropdown-item">
Separated link
                      </a>
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
Sizing
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#sizing-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="sizing-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="sizing-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"btn-group mb-1 mb-md-0 me-1\\\"> <button class=\\\"btn btn-primary btn-lg dropdown-toggle\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\">Large button</button> <div class=\\\"dropdown-menu\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div> <div class=\\\"btn-group mb-1 mb-md-0 me-1\\\"> <button class=\\\"btn btn-primary btn-md dropdown-toggle\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\">Regular button</button> <div class=\\\"dropdown-menu\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div> <div class=\\\"btn-group mb-1 mb-md-0 me-1\\\"> <button class=\\\"btn btn-primary btn-sm dropdown-toggle\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\">Small button</button> <div class=\\\"dropdown-menu\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div> <hr /> <div class=\\\"btn-group mb-1 me-1\\\"> <button class=\\\"btn btn-primary btn-lg\\\" type=\\\"button\\\">Large split button</button> <button class=\\\"btn btn-lg btn-primary dropdown-toggle dropdown-toggle-split\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\"><span class=\\\"sr-only\\\">Toggle Dropdown</span></button> <div class=\\\"dropdown-menu\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div> <div class=\\\"btn-group mb-1 me-1\\\"> <button class=\\\"btn btn-primary btn-md\\\" type=\\\"button\\\">Regular split button</button> <button class=\\\"btn btn-md btn-primary dropdown-toggle dropdown-toggle-split\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\"><span class=\\\"sr-only\\\">Toggle Dropdown</span></button> <div class=\\\"dropdown-menu\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div> <div class=\\\"btn-group mb-1 me-1\\\"> <button class=\\\"btn btn-primary btn-sm\\\" type=\\\"button\\\">Small split button</button> <button class=\\\"btn btn-sm btn-primary dropdown-toggle dropdown-toggle-split\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\"><span class=\\\"sr-only\\\">Toggle Dropdown</span></button> <div class=\\\"dropdown-menu\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="btn-group mb-1 mb-md-0 me-1">
                    <button className="btn btn-primary btn-lg dropdown-toggle" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
Large button
                    </button>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
Action
                      </a>
                      <a href="#" className="dropdown-item">
Another action
                      </a>
                      <a href="#" className="dropdown-item">
Something else here
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#" className="dropdown-item">
Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group mb-1 mb-md-0 me-1">
                    <button className="btn btn-primary btn-md dropdown-toggle" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
Regular button
                    </button>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
Action
                      </a>
                      <a href="#" className="dropdown-item">
Another action
                      </a>
                      <a href="#" className="dropdown-item">
Something else here
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#" className="dropdown-item">
Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group mb-1 mb-md-0 me-1">
                    <button className="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
Small button
                    </button>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
Action
                      </a>
                      <a href="#" className="dropdown-item">
Another action
                      </a>
                      <a href="#" className="dropdown-item">
Something else here
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#" className="dropdown-item">
Separated link
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="btn-group mb-1 me-1">
                    <button className="btn btn-primary btn-lg" type="button">
Large split button
                    </button>
                    <button className="btn btn-lg btn-primary dropdown-toggle dropdown-toggle-split" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                      <span className="sr-only">
Toggle Dropdown
                      </span>
                    </button>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
Action
                      </a>
                      <a href="#" className="dropdown-item">
Another action
                      </a>
                      <a href="#" className="dropdown-item">
Something else here
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#" className="dropdown-item">
Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group mb-1 me-1">
                    <button className="btn btn-primary btn-md" type="button">
Regular split button
                    </button>
                    <button className="btn btn-md btn-primary dropdown-toggle dropdown-toggle-split" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                      <span className="sr-only">
Toggle Dropdown
                      </span>
                    </button>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
Action
                      </a>
                      <a href="#" className="dropdown-item">
Another action
                      </a>
                      <a href="#" className="dropdown-item">
Something else here
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#" className="dropdown-item">
Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group mb-1 me-1">
                    <button className="btn btn-primary btn-sm" type="button">
Small split button
                    </button>
                    <button className="btn btn-sm btn-primary dropdown-toggle dropdown-toggle-split" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                      <span className="sr-only">
Toggle Dropdown
                      </span>
                    </button>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
Action
                      </a>
                      <a href="#" className="dropdown-item">
Another action
                      </a>
                      <a href="#" className="dropdown-item">
Something else here
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#" className="dropdown-item">
Separated link
                      </a>
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
Directions
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#directions-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="directions-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="directions-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><!-- Default dropup button--> <div class=\\\"d-flex flex-column flex-sm-row justify-content-between\\\"> <div class=\\\"btn-group dropend mt-2\\\"> <button class=\\\"btn btn-primary dropdown-toggle\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\">Dropend</button> <div class=\\\"dropdown-menu\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div> <div class=\\\"btn-group dropup mt-2\\\"> <button class=\\\"btn btn-primary dropdown-toggle\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\">Dropup</button> <div class=\\\"dropdown-menu\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div> <div class=\\\"btn-group dropstart mt-2\\\"> <button class=\\\"btn btn-primary dropdown-toggle\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\">Dropstart</button> <div class=\\\"dropdown-menu\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div> </div> <hr /> <div class=\\\"d-flex flex-column flex-md-row justify-content-between\\\"> <div class=\\\"btn-group dropend mt-2\\\"> <button class=\\\"btn btn-primary\\\" type=\\\"button\\\">Split dropend</button> <button class=\\\"btn btn-primary dropdown-toggle dropdown-toggle-split\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\"><span class=\\\"sr-only\\\">Toggle Dropdown</span></button> <div class=\\\"dropdown-menu\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div> <div class=\\\"btn-group dropup mt-2\\\"> <button class=\\\"btn btn-primary\\\" type=\\\"button\\\">Split dropup</button> <button class=\\\"btn btn-primary dropdown-toggle dropdown-toggle-split\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\"><span class=\\\"sr-only\\\">Toggle Dropdown</span></button> <div class=\\\"dropdown-menu\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div> <div class=\\\"btn-group mt-2\\\"> <div class=\\\"btn-group dropstart\\\" role=\\\"group\\\"> <button class=\\\"btn btn-primary dropdown-toggle dropdown-toggle-split\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\"><span class=\\\"sr-only\\\">Toggle Dropstart</span></button> <div class=\\\"dropdown-menu\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div> <button class=\\\"btn btn-primary\\\" type=\\\"button\\\">Split dropstart</button> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="d-flex flex-column flex-sm-row justify-content-between">
                    <div className="btn-group dropend mt-2">
                      <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
Dropend
                      </button>
                      <div className="dropdown-menu">
                        <a href="#" className="dropdown-item">
Action
                        </a>
                        <a href="#" className="dropdown-item">
Another action
                        </a>
                        <a href="#" className="dropdown-item">
Something else here
                        </a>
                        <div className="dropdown-divider">                        </div>
                        <a href="#" className="dropdown-item">
Separated link
                        </a>
                      </div>
                    </div>
                    <div className="btn-group dropup mt-2">
                      <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
Dropup
                      </button>
                      <div className="dropdown-menu">
                        <a href="#" className="dropdown-item">
Action
                        </a>
                        <a href="#" className="dropdown-item">
Another action
                        </a>
                        <a href="#" className="dropdown-item">
Something else here
                        </a>
                        <div className="dropdown-divider">                        </div>
                        <a href="#" className="dropdown-item">
Separated link
                        </a>
                      </div>
                    </div>
                    <div className="btn-group dropstart mt-2">
                      <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
Dropstart
                      </button>
                      <div className="dropdown-menu">
                        <a href="#" className="dropdown-item">
Action
                        </a>
                        <a href="#" className="dropdown-item">
Another action
                        </a>
                        <a href="#" className="dropdown-item">
Something else here
                        </a>
                        <div className="dropdown-divider">                        </div>
                        <a href="#" className="dropdown-item">
Separated link
                        </a>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="btn-group dropend mt-2">
                      <button className="btn btn-primary" type="button">
Split dropend
                      </button>
                      <button className="btn btn-primary dropdown-toggle dropdown-toggle-split" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">
Toggle Dropdown
                        </span>
                      </button>
                      <div className="dropdown-menu">
                        <a href="#" className="dropdown-item">
Action
                        </a>
                        <a href="#" className="dropdown-item">
Another action
                        </a>
                        <a href="#" className="dropdown-item">
Something else here
                        </a>
                        <div className="dropdown-divider">                        </div>
                        <a href="#" className="dropdown-item">
Separated link
                        </a>
                      </div>
                    </div>
                    <div className="btn-group dropup mt-2">
                      <button className="btn btn-primary" type="button">
Split dropup
                      </button>
                      <button className="btn btn-primary dropdown-toggle dropdown-toggle-split" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">
Toggle Dropdown
                        </span>
                      </button>
                      <div className="dropdown-menu">
                        <a href="#" className="dropdown-item">
Action
                        </a>
                        <a href="#" className="dropdown-item">
Another action
                        </a>
                        <a href="#" className="dropdown-item">
Something else here
                        </a>
                        <div className="dropdown-divider">                        </div>
                        <a href="#" className="dropdown-item">
Separated link
                        </a>
                      </div>
                    </div>
                    <div className="btn-group mt-2">
                      <div className="btn-group dropstart" role="group">
                        <button className="btn btn-primary dropdown-toggle dropdown-toggle-split" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                          <span className="sr-only">
Toggle Dropstart
                          </span>
                        </button>
                        <div className="dropdown-menu">
                          <a href="#" className="dropdown-item">
Action
                          </a>
                          <a href="#" className="dropdown-item">
Another action
                          </a>
                          <a href="#" className="dropdown-item">
Something else here
                          </a>
                          <div className="dropdown-divider">                          </div>
                          <a href="#" className="dropdown-item">
Separated link
                          </a>
                        </div>
                      </div>
                      <button className="btn btn-primary" type="button">
Split dropstart
                      </button>
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
Menu Items
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#menu-items-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="menu-items-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="menu-items-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"dropdown\\\"> <button class=\\\"btn btn-primary dropdown-toggle\\\" id=\\\"dropdownMenu2\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\">Dropdown</button> <div class=\\\"dropdown-menu\\\" aria-labelledby=\\\"dropdownMenu2\\\"> <button class=\\\"dropdown-item\\\" type=\\\"button\\\">Action</button> <button class=\\\"dropdown-item\\\" type=\\\"button\\\">Another action</button> <button class=\\\"dropdown-item\\\" type=\\\"button\\\">Something else here</button> </div> </div> <p class=\\\"mt-3\\\">You can also create non-interactive dropdown items with <code>.dropdown-item-text</code>. Feel free to style further with custom CSS or text utilities.</p> <button class=\\\"btn btn-primary dropdown-toggle\\\" id=\\\"dropdownMenu3\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\">Dropdown with text</button> <div class=\\\"dropdown-menu\\\" aria-labelledby=\\\"dropdownMenu3\\\"> <span class=\\\"dropdown-item-text\\\">Dropdown item text</span> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" id="dropdownMenu2" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
Dropdown
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                      <button className="dropdown-item" type="button">
Action
                      </button>
                      <button className="dropdown-item" type="button">
Another action
                      </button>
                      <button className="dropdown-item" type="button">
Something else here
                      </button>
                    </div>
                  </div>
                  <p className="mt-3">
You can also create non-interactive dropdown items with 
                    <code>
.dropdown-item-text
                    </code>
. Feel free to style further with custom CSS or text utilities.
                  </p>
                  <button className="btn btn-primary dropdown-toggle" id="dropdownMenu3" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
Dropdown with text
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenu3">
                    <span className="dropdown-item-text">
Dropdown item text
                    </span>
                    <a href="#" className="dropdown-item">
Action
                    </a>
                    <a href="#" className="dropdown-item">
Another action
                    </a>
                    <a href="#" className="dropdown-item">
Something else here
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Active Link
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#active-link-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="active-link-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="active-link-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><button class=\\\"btn btn-primary dropdown-toggle\\\" id=\\\"activeLinkExample\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\">Dropdown</button> <div class=\\\"dropdown-menu\\\" aria-labelledby=\\\"activeLinkExample\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Regular link</a> <a class=\\\"dropdown-item active\\\" href=\\\"#\\\">Active link</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another link</a> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <button className="btn btn-primary dropdown-toggle" id="activeLinkExample" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
Dropdown
                  </button>
                  <div className="dropdown-menu" aria-labelledby="activeLinkExample">
                    <a href="#" className="dropdown-item">
Regular link
                    </a>
                    <a href="#" className="dropdown-item active">
Active link
                    </a>
                    <a href="#" className="dropdown-item">
Another link
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Disabled Link
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#disabled-link-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="disabled-link-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="disabled-link-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><button class=\\\"btn btn-primary dropdown-toggle\\\" id=\\\"disabledLinkExample\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\">Dropdown</button> <div class=\\\"dropdown-menu\\\" aria-labelledby=\\\"disabledLinkExample\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Regular link</a> <a class=\\\"dropdown-item disabled\\\" href=\\\"#\\\">Disabled link</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another link</a> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <button className="btn btn-primary dropdown-toggle" id="disabledLinkExample" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
Dropdown
                  </button>
                  <div className="dropdown-menu" aria-labelledby="disabledLinkExample">
                    <a href="#" className="dropdown-item">
Regular link
                    </a>
                    <a href="#" className="dropdown-item disabled">
Disabled link
                    </a>
                    <a href="#" className="dropdown-item">
Another link
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Alignment
                    </h4>
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
{"<code class=\"language-html\"><div class=\\\"btn-group\\\"> <button class=\\\"btn btn-primary dropdown-toggle\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-display=\\\"static\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\">Right-aligned menu</button> <div class=\\\"dropdown-menu dropdown-menu-end\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="btn-group">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle={"dropdown"} data-display={"static"} aria-haspopup="true" aria-expanded="false">
Right-aligned menu
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="#" className="dropdown-item">
Action
                      </a>
                      <a href="#" className="dropdown-item">
Another action
                      </a>
                      <a href="#" className="dropdown-item">
Something else here
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#" className="dropdown-item">
Separated link
                      </a>
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
Headers
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#headers-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="headers-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="headers-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><button class=\\\"btn btn-primary dropdown-toggle\\\" id=\\\"headerExample\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\">Dropdown</button> <div class=\\\"dropdown-menu\\\" aria-labelledby=\\\"headerExample\\\"> <h6 class=\\\"dropdown-header\\\">Dropdown Header</h6> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Regular link</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action link</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another link</a> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <button className="btn btn-primary dropdown-toggle" id="headerExample" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
Dropdown
                  </button>
                  <div className="dropdown-menu" aria-labelledby="headerExample">
                    <h6 className="dropdown-header">
Dropdown Header
                    </h6>
                    <a href="#" className="dropdown-item">
Regular link
                    </a>
                    <a href="#" className="dropdown-item">
Another action link
                    </a>
                    <div className="dropdown-divider">                    </div>
                    <a href="#" className="dropdown-item">
Another link
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
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
{"<code class=\"language-html\"><button class=\\\"btn btn-primary dropdown-toggle\\\" id=\\\"dividerExample\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\">Dropdown</button> <div class=\\\"dropdown-menu\\\" aria-labelledby=\\\"dividerExample\\\"> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#\\\">Separated link</a> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <button className="btn btn-primary dropdown-toggle" id="dividerExample" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
Dropdown
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dividerExample">
                    <a href="#" className="dropdown-item">
Action
                    </a>
                    <a href="#" className="dropdown-item">
Another action
                    </a>
                    <a href="#" className="dropdown-item">
Something else here
                    </a>
                    <div className="dropdown-divider">                    </div>
                    <a href="#" className="dropdown-item">
Separated link
                    </a>
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
                <a href="#dropdown-link" className="nav-link">
Dropdown Link
                </a>
              </li>
              <li className="nav-item">
                <a href="#button-variant" className="nav-link">
Button Variant
                </a>
              </li>
              <li className="nav-item">
                <a href="#button-split" className="nav-link">
Button Split
                </a>
              </li>
              <li className="nav-item">
                <a href="#sizing" className="nav-link">
Sizing
                </a>
              </li>
              <li className="nav-item">
                <a href="#directions" className="nav-link">
Directions
                </a>
              </li>
              <li className="nav-item">
                <a href="#menu-items" className="nav-link">
Menu Items
                </a>
              </li>
              <li className="nav-item">
                <a href="#active-link" className="nav-link">
Active Link
                </a>
              </li>
              <li className="nav-item">
                <a href="#disabled-link" className="nav-link">
Disabled Link
                </a>
              </li>
              <li className="nav-item">
                <a href="#headers" className="nav-link">
Headers
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
