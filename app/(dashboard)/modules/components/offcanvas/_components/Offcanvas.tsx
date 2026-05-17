'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Offcanvas() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Offcanvas
    </h2>

    <p className="text-body-tertiary lead mb-2">
Build hidden sidebars into your project for navigation, shopping carts, and more with a few classes and our JavaScript plugin.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/components/offcanvas/" className="btn btn-link p-0"  target="_blank">
Offcanvas on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
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
Example
                    </h4>
                    <div className="mt-2 text-body-secondary">
Use the buttons below to show and hide an offcanvas element via JavaScript that toggles the 
                      <code>
.show
                      </code>
 class on an element with the 
                      <code>
.offcanvas
                      </code>
 class.
                      <ul className="mb-2">
                        <li>
                          <code>
.offcanvas
                          </code>
 hides content (default)
                        </li>
                        <li>
                          <code>
.offcanvas.show
                          </code>
 shows content
                        </li>
                      </ul>
You can use a link with the 
                      <code>
href
                      </code>
 attribute, or a button with the 
                      <code>
data-bs-target
                      </code>
 attribute. In both cases, the 
                      <code>
data-bs-toggle="offcanvas"
                      </code>
 is required.
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
{"<code class=\"language-html\"><a class=\\\"btn btn-primary me-1\\\" data-bs-toggle=\\\"offcanvas\\\" href=\\\"#offcanvasExample\\\" role=\\\"button\\\" aria-controls=\\\"offcanvasExample\\\">Link with href</a> <button class=\\\"btn btn-primary\\\" type=\\\"button\\\" data-bs-toggle=\\\"offcanvas\\\" data-bs-target=\\\"#offcanvasExample\\\" aria-controls=\\\"offcanvasExample\\\">Button with data-bs-target</button> <div class=\\\"offcanvas offcanvas-start\\\" id=\\\"offcanvasExample\\\" tabindex=\\\"-1\\\"> <div class=\\\"offcanvas-header\\\"> <h5 class=\\\"offcanvas-title\\\" id=\\\"offcanvasExampleLabel\\\">Offcanvas</h5> <button class=\\\"btn-close text-reset\\\" type=\\\"button\\\" data-bs-dismiss=\\\"offcanvas\\\" aria-label=\\\"Close\\\"></button> </div> <div class=\\\"offcanvas-body\\\"> <div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</div> <div class=\\\"dropdown mt-3\\\"> <button class=\\\"btn btn-secondary dropdown-toggle\\\" id=\\\"dropdownMenuButton\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\">Dropdown button</button> <ul class=\\\"dropdown-menu\\\" aria-labelledby=\\\"dropdownMenuButton\\\"> <li><a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a></li> <li><a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a></li> <li><a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a></li> </ul> </div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <a href="#offcanvasExample" className="btn btn-primary me-1" data-bs-toggle={"offcanvas"}  role="button" aria-controls="offcanvasExample">
Link with href
                  </a>
                  <button className="btn btn-primary" type="button" data-bs-toggle={"offcanvas"} data-bs-target={"#offcanvasExample"} aria-controls="offcanvasExample">
Button with data-bs-target
                  </button>
                  <div className="offcanvas offcanvas-start" id="offcanvasExample" tabIndex={-1}>
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasExampleLabel">
Offcanvas
                      </h5>
                      <button className="btn-close text-reset" type="button" data-bs-dismiss={"offcanvas"} aria-label="Close">                      </button>
                    </div>
                    <div className="offcanvas-body">
                      <div>
Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                      </div>
                      <div className="dropdown mt-3">
                        <button className="btn btn-secondary dropdown-toggle" id="dropdownMenuButton" type="button" data-bs-toggle={"dropdown"}>
Dropdown button
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <li>
                            <a href="#" className="dropdown-item">
Action
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
Another action
                            </a>
                          </li>
                          <li>
                            <a href="#" className="dropdown-item">
Something else here
                            </a>
                          </li>
                        </ul>
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
Placement
                    </h4>
                    <div className="mt-2 text-body-secondary">
There’s no default placement for offcanvas components, so you must add one of the modifier classes below: 
                      <ul>
                        <li>
                          <code>
.offcanvas-top
                          </code>
 places offcanvas on the top of the viewport
                        </li>
                        <li>
                          <code>
.offcanvas-end
                          </code>
 places offcanvas on the right of the viewport
                        </li>
                        <li>
                          <code>
.offcanvas-start
                          </code>
 places offcanvas on the left of the viewport (shown above)
                        </li>
                        <li>
                          <code>
.offcanvas-bottom
                          </code>
 places offcanvas on the bottom of the viewport
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#placement-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="placement-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="placement-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><!-- Top Offcanvas--> <button class=\\\"btn btn-primary mb-1\\\" type=\\\"button\\\" data-bs-toggle=\\\"offcanvas\\\" data-bs-target=\\\"#offcanvasTop\\\" aria-controls=\\\"offcanvasTop\\\">Top Offcanvas</button> <div class=\\\"offcanvas offcanvas-top\\\" id=\\\"offcanvasTop\\\" tabindex=\\\"-1\\\" aria-labelledby=\\\"offcanvasTopLabel\\\"> <div class=\\\"offcanvas-header\\\"> <h5 id=\\\"offcanvasTopLabel\\\">Offcanvas top</h5> <button class=\\\"btn-close text-reset\\\" type=\\\"button\\\" data-bs-dismiss=\\\"offcanvas\\\" aria-label=\\\"Close\\\"></button> </div> <div class=\\\"offcanvas-body\\\">...</div> </div> <!-- Right Offcanvas--> <button class=\\\"btn btn-primary mb-1\\\" type=\\\"button\\\" data-bs-toggle=\\\"offcanvas\\\" data-bs-target=\\\"#offcanvasRight\\\" aria-controls=\\\"offcanvasRight\\\">Right Offcanvas</button> <div class=\\\"offcanvas offcanvas-end\\\" id=\\\"offcanvasRight\\\" tabindex=\\\"-1\\\" aria-labelledby=\\\"offcanvasRightLabel\\\"> <div class=\\\"offcanvas-header\\\"> <h5 id=\\\"offcanvasRightLabel\\\">Offcanvas right</h5> <button class=\\\"btn-close text-reset\\\" type=\\\"button\\\" data-bs-dismiss=\\\"offcanvas\\\" aria-label=\\\"Close\\\"></button> </div> <div class=\\\"offcanvas-body\\\">...</div> </div> <!-- Left Offcanvas--> <button class=\\\"btn btn-primary mb-1\\\" type=\\\"button\\\" data-bs-toggle=\\\"offcanvas\\\" data-bs-target=\\\"#offcanvasLeft\\\" aria-controls=\\\"offcanvasLeft\\\">Left Offcanvas</button> <div class=\\\"offcanvas offcanvas-start\\\" id=\\\"offcanvasLeft\\\" tabindex=\\\"-1\\\" aria-labelledby=\\\"offcanvasLeftLabel\\\"> <div class=\\\"offcanvas-header\\\"> <h5 id=\\\"offcanvasLeftLabel\\\">Offcanvas left</h5> <button class=\\\"btn-close text-reset\\\" type=\\\"button\\\" data-bs-dismiss=\\\"offcanvas\\\" aria-label=\\\"Close\\\"></button> </div> <div class=\\\"offcanvas-body\\\">...</div> </div> <!-- Bottom Offcanvas--> <button class=\\\"btn btn-primary mb-1\\\" type=\\\"button\\\" data-bs-toggle=\\\"offcanvas\\\" data-bs-target=\\\"#offcanvasBottom\\\" aria-controls=\\\"offcanvasBottom\\\">Bottom offcanvas</button> <div class=\\\"offcanvas offcanvas-bottom\\\" id=\\\"offcanvasBottom\\\" tabindex=\\\"-1\\\" aria-labelledby=\\\"offcanvasBottomLabel\\\"> <div class=\\\"offcanvas-header\\\"> <h5 class=\\\"offcanvas-title\\\" id=\\\"offcanvasBottomLabel\\\">Offcanvas bottom</h5> <button class=\\\"btn-close text-reset\\\" type=\\\"button\\\" data-bs-dismiss=\\\"offcanvas\\\" aria-label=\\\"Close\\\"></button> </div> <div class=\\\"offcanvas-body small\\\">...</div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <button className="btn btn-primary mb-1" type="button" data-bs-toggle={"offcanvas"} data-bs-target={"#offcanvasTop"} aria-controls="offcanvasTop">
Top Offcanvas
                  </button>
                  <div className="offcanvas offcanvas-top" id="offcanvasTop" tabIndex={-1} aria-labelledby="offcanvasTopLabel">
                    <div className="offcanvas-header">
                      <h5 id="offcanvasTopLabel">
Offcanvas top
                      </h5>
                      <button className="btn-close text-reset" type="button" data-bs-dismiss={"offcanvas"} aria-label="Close">                      </button>
                    </div>
                    <div className="offcanvas-body">
...
                    </div>
                  </div>
                  <button className="btn btn-primary mb-1" type="button" data-bs-toggle={"offcanvas"} data-bs-target={"#offcanvasRight"} aria-controls="offcanvasRight">
Right Offcanvas
                  </button>
                  <div className="offcanvas offcanvas-end" id="offcanvasRight" tabIndex={-1} aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                      <h5 id="offcanvasRightLabel">
Offcanvas right
                      </h5>
                      <button className="btn-close text-reset" type="button" data-bs-dismiss={"offcanvas"} aria-label="Close">                      </button>
                    </div>
                    <div className="offcanvas-body">
...
                    </div>
                  </div>
                  <button className="btn btn-primary mb-1" type="button" data-bs-toggle={"offcanvas"} data-bs-target={"#offcanvasLeft"} aria-controls="offcanvasLeft">
Left Offcanvas
                  </button>
                  <div className="offcanvas offcanvas-start" id="offcanvasLeft" tabIndex={-1} aria-labelledby="offcanvasLeftLabel">
                    <div className="offcanvas-header">
                      <h5 id="offcanvasLeftLabel">
Offcanvas left
                      </h5>
                      <button className="btn-close text-reset" type="button" data-bs-dismiss={"offcanvas"} aria-label="Close">                      </button>
                    </div>
                    <div className="offcanvas-body">
...
                    </div>
                  </div>
                  <button className="btn btn-primary mb-1" type="button" data-bs-toggle={"offcanvas"} data-bs-target={"#offcanvasBottom"} aria-controls="offcanvasBottom">
Bottom offcanvas
                  </button>
                  <div className="offcanvas offcanvas-bottom" id="offcanvasBottom" tabIndex={-1} aria-labelledby="offcanvasBottomLabel">
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasBottomLabel">
Offcanvas bottom
                      </h5>
                      <button className="btn-close text-reset" type="button" data-bs-dismiss={"offcanvas"} aria-label="Close">                      </button>
                    </div>
                    <div className="offcanvas-body small">
...
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
Backdrop
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Scrolling the 
                      <code>
{"<body>"}
                      </code>
 element is disabled when an offcanvas and its backdrop are visible. Use the 
                      <code>
data-bs-scroll
                      </code>
 attribute to toggle 
                      <code>
{"<body>"}
                      </code>
 scrolling and 
                      <code>
data-bs-backdrop
                      </code>
 to toggle the backdrop.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#backdrop-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="backdrop-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="backdrop-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><!-- Enable body scrolling--> <button class=\\\"btn btn-primary mb-1\\\" type=\\\"button\\\" data-bs-toggle=\\\"offcanvas\\\" data-bs-target=\\\"#offcanvasScrolling\\\" aria-controls=\\\"offcanvasScrolling\\\">Enable body scrolling</button> <div class=\\\"offcanvas offcanvas-start\\\" id=\\\"offcanvasScrolling\\\" data-bs-scroll=\\\"true\\\" data-bs-backdrop=\\\"false\\\" tabindex=\\\"-1\\\" aria-labelledby=\\\"offcanvasScrollingLabel\\\"> <div class=\\\"offcanvas-header\\\"> <h5 class=\\\"offcanvas-title\\\" id=\\\"offcanvasScrollingLabel\\\">Colored with scrolling</h5> <button class=\\\"btn-close text-reset\\\" type=\\\"button\\\" data-bs-dismiss=\\\"offcanvas\\\" aria-label=\\\"Close\\\"></button> </div> <div class=\\\"offcanvas-body\\\"> <p>Try scrolling the rest of the page to see this option in action.</p> </div> </div> <!-- Enable backdrop --> <button class=\\\"btn btn-primary mb-1\\\" type=\\\"button\\\" data-bs-toggle=\\\"offcanvas\\\" data-bs-target=\\\"#offcanvasWithBackdrop\\\" aria-controls=\\\"offcanvasWithBackdrop\\\">Enable backdrop (default)</button> <div class=\\\"offcanvas offcanvas-start\\\" id=\\\"offcanvasWithBackdrop\\\" tabindex=\\\"-1\\\" aria-labelledby=\\\"offcanvasWithBackdropLabel\\\"> <div class=\\\"offcanvas-header\\\"> <h5 class=\\\"offcanvas-title\\\" id=\\\"offcanvasWithBackdropLabel\\\">Offcanvas with backdrop</h5> <button class=\\\"btn-close text-reset\\\" type=\\\"button\\\" data-bs-dismiss=\\\"offcanvas\\\" aria-label=\\\"Close\\\"></button> </div> <div class=\\\"offcanvas-body\\\"> <p>.....</p> </div> </div> <!-- Enable both scrolling & backdrop--> <button class=\\\"btn btn-primary mb-1\\\" type=\\\"button\\\" data-bs-toggle=\\\"offcanvas\\\" data-bs-target=\\\"#offcanvasWithBothOptions\\\" aria-controls=\\\"offcanvasWithBothOptions\\\">Enable both scrolling & backdrop</button> <div class=\\\"offcanvas offcanvas-start\\\" id=\\\"offcanvasWithBothOptions\\\" data-bs-scroll=\\\"true\\\" tabindex=\\\"-1\\\" aria-labelledby=\\\"offcanvasWithBothOptionsLabel\\\"> <div class=\\\"offcanvas-header\\\"> <h5 class=\\\"offcanvas-title\\\" id=\\\"offcanvasWithBothOptionsLabel\\\">Backdroped with scrolling</h5> <button class=\\\"btn-close text-reset\\\" type=\\\"button\\\" data-bs-dismiss=\\\"offcanvas\\\" aria-label=\\\"Close\\\"></button> </div> <div class=\\\"offcanvas-body\\\"> <p>Try scrolling the rest of the page to see this option in action.</p> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <button className="btn btn-primary mb-1" type="button" data-bs-toggle={"offcanvas"} data-bs-target={"#offcanvasScrolling"} aria-controls="offcanvasScrolling">
Enable body scrolling
                  </button>
                  <div className="offcanvas offcanvas-start" id="offcanvasScrolling" data-bs-scroll={"true"} data-bs-backdrop={"false"} tabIndex={-1} aria-labelledby="offcanvasScrollingLabel">
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
Colored with scrolling
                      </h5>
                      <button className="btn-close text-reset" type="button" data-bs-dismiss={"offcanvas"} aria-label="Close">                      </button>
                    </div>
                    <div className="offcanvas-body">
                      <p>
Try scrolling the rest of the page to see this option in action.
                      </p>
                    </div>
                  </div>
                  <button className="btn btn-primary mb-1" type="button" data-bs-toggle={"offcanvas"} data-bs-target={"#offcanvasWithBackdrop"} aria-controls="offcanvasWithBackdrop">
Enable backdrop (default)
                  </button>
                  <div className="offcanvas offcanvas-start" id="offcanvasWithBackdrop" tabIndex={-1} aria-labelledby="offcanvasWithBackdropLabel">
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasWithBackdropLabel">
Offcanvas with backdrop
                      </h5>
                      <button className="btn-close text-reset" type="button" data-bs-dismiss={"offcanvas"} aria-label="Close">                      </button>
                    </div>
                    <div className="offcanvas-body">
                      <p>
.....
                      </p>
                    </div>
                  </div>
                  <button className="btn btn-primary mb-1" type="button" data-bs-toggle={"offcanvas"} data-bs-target={"#offcanvasWithBothOptions"} aria-controls="offcanvasWithBothOptions">
{"Enable both scrolling & backdrop"}
                  </button>
                  <div className="offcanvas offcanvas-start" id="offcanvasWithBothOptions" data-bs-scroll={"true"} tabIndex={-1} aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
Backdroped with scrolling
                      </h5>
                      <button className="btn-close text-reset" type="button" data-bs-dismiss={"offcanvas"} aria-label="Close">                      </button>
                    </div>
                    <div className="offcanvas-body">
                      <p>
Try scrolling the rest of the page to see this option in action.
                      </p>
                    </div>
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
                <a href="#placement" className="nav-link">
Placement
                </a>
              </li>
              <li className="nav-item">
                <a href="#backdrop" className="nav-link">
Backdrop
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
