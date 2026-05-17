'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Navbar() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Navbar
    </h2>

    <p className="text-body-tertiary lead mb-2">
Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for Bootstrap collapse plugin.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/components/navbar/" className="btn btn-link p-0"  target="_blank">
Navbar on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
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
Navbar Light
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#navbar-light-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="navbar-light-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="navbar-light-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><nav class=\\\"navbar navbar-expand-lg bg-light\\\" data-bs-theme=\\\"light\\\"> <div class=\\\"container-fluid\\\"><a class=\\\"navbar-brand\\\" href=\\\"#\\\">Navbar</a> <button class=\\\"navbar-toggler\\\" type=\\\"button\\\" data-bs-toggle=\\\"collapse\\\" data-bs-target=\\\"#navbarLightExample\\\" aria-controls=\\\"navbarLightExample\\\" aria-expanded=\\\"false\\\" aria-label=\\\"Toggle navigation\\\"><span class=\\\"navbar-toggler-icon\\\"></span></button> <div class=\\\"collapse navbar-collapse\\\" id=\\\"navbarLightExample\\\"> <ul class=\\\"navbar-nav me-auto mb-2 mb-lg-0\\\"> <li class=\\\"nav-item\\\"><a class=\\\"nav-link active\\\" aria-current=\\\"page\\\" href=\\\"#\\\">Home</a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link\\\" href=\\\"#\\\">Link</a></li> <li class=\\\"nav-item dropdown\\\"><a class=\\\"nav-link dropdown-toggle\\\" id=\\\"navbarLightExampleDropdown\\\" href=\\\"#\\\" role=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-expanded=\\\"false\\\">Dropdown</a> <div class=\\\"dropdown-menu py-0\\\" aria-labelledby=\\\"navbarLightExampleDropdown\\\"> <div class=\\\"py-2 rounded-3\\\"><a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a><a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <hr class=\\\"dropdown-divider\\\" /><a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> </div> </div> </li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link disabled\\\" href=\\\"#\\\" tabindex=\\\"-1\\\" aria-disabled=\\\"true\\\">Disabled</a></li> </ul> <form class=\\\"d-flex\\\"> <input class=\\\"form-control me-2\\\" type=\\\"search\\\" placeholder=\\\"Search\\\" aria-label=\\\"Search\\\" /> <button class=\\\"btn btn-outline-primary\\\" type=\\\"submit\\\">Search</button> </form> </div> </div> </nav></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <nav className="navbar navbar-expand-lg bg-light" data-bs-theme={"light"}>
                    <div className="container-fluid">
                      <a href="#" className="navbar-brand">
Navbar
                      </a>
                      <button className="navbar-toggler" type="button" data-bs-toggle={"collapse"} data-bs-target={"#navbarLightExample"} aria-controls="navbarLightExample" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">                        </span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarLightExample">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                            <a href="#" className="nav-link" aria-current="page">
Home
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
Link
                            </a>
                          </li>
                          <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" id="navbarLightExampleDropdown"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false">
Dropdown
                            </a>
                            <div className="dropdown-menu py-0" aria-labelledby="navbarLightExampleDropdown">
                              <div className="py-2 rounded-3">
                                <a href="#" className="dropdown-item">
Action
                                </a>
                                <a href="#" className="dropdown-item">
Another action
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
Something else here
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link disabled"  tabIndex={-1} aria-disabled="true">
Disabled
                            </a>
                          </li>
                        </ul>
                        <form className="d-flex">
                          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                          <button className="btn btn-outline-primary" type="submit">
Search
                          </button>
                        </form>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Navbar Dark
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#navbar-dark-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="navbar-dark-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="navbar-dark-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><nav class=\\\"navbar navbar-expand-lg bg-dark\\\" data-bs-theme=\\\"dark\\\"> <div class=\\\"container-fluid\\\"><a class=\\\"navbar-brand\\\" href=\\\"#\\\">Navbar</a> <button class=\\\"navbar-toggler\\\" type=\\\"button\\\" data-bs-toggle=\\\"collapse\\\" data-bs-target=\\\"#navbarSuccessExample\\\" aria-controls=\\\"navbarSuccessExample\\\" aria-expanded=\\\"false\\\" aria-label=\\\"Toggle navigation\\\"><span class=\\\"navbar-toggler-icon\\\"></span></button> <div class=\\\"collapse navbar-collapse\\\" id=\\\"navbarSuccessExample\\\"> <ul class=\\\"navbar-nav me-auto mb-2 mb-lg-0 text-white\\\"> <li class=\\\"nav-item\\\"><a class=\\\"nav-link active\\\" aria-current=\\\"page\\\" href=\\\"#\\\">Home</a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link\\\" href=\\\"#\\\">Link</a></li> <li class=\\\"nav-item dropdown\\\"><a class=\\\"nav-link dropdown-toggle\\\" id=\\\"navbarSuccessExampleDropdown\\\" href=\\\"#\\\" role=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-expanded=\\\"false\\\">Dropdown</a> <div class=\\\"dropdown-menu py-0\\\" aria-labelledby=\\\"navbarSuccessExampleDropdown\\\"> <div class=\\\"py-2 rounded-3\\\"><a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a><a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a> <hr class=\\\"dropdown-divider\\\" /><a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a> </div> </div> </li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link disabled\\\" href=\\\"#\\\" tabindex=\\\"-1\\\" aria-disabled=\\\"true\\\">Disabled</a></li> </ul> <form class=\\\"d-flex\\\"> <input class=\\\"form-control me-2\\\" type=\\\"search\\\" placeholder=\\\"Search\\\" aria-label=\\\"Search\\\" /> <button class=\\\"btn btn-phoenix-primary\\\" type=\\\"submit\\\">Search</button> </form> </div> </div> </nav></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme={"dark"}>
                    <div className="container-fluid">
                      <a href="#" className="navbar-brand">
Navbar
                      </a>
                      <button className="navbar-toggler" type="button" data-bs-toggle={"collapse"} data-bs-target={"#navbarSuccessExample"} aria-controls="navbarSuccessExample" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">                        </span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSuccessExample">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
                          <li className="nav-item">
                            <a href="#" className="nav-link" aria-current="page">
Home
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
Link
                            </a>
                          </li>
                          <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" id="navbarSuccessExampleDropdown"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false">
Dropdown
                            </a>
                            <div className="dropdown-menu py-0" aria-labelledby="navbarSuccessExampleDropdown">
                              <div className="py-2 rounded-3">
                                <a href="#" className="dropdown-item">
Action
                                </a>
                                <a href="#" className="dropdown-item">
Another action
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item">
Something else here
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link disabled"  tabIndex={-1} aria-disabled="true">
Disabled
                            </a>
                          </li>
                        </ul>
                        <form className="d-flex">
                          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                          <button className="btn btn-phoenix-primary" type="submit">
Search
                          </button>
                        </form>
                      </div>
                    </div>
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
                <a href="#navbar-light" className="nav-link">
Navbar Light
                </a>
              </li>
              <li className="nav-item">
                <a href="#navbar-dark" className="nav-link">
Navbar Dark
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
