'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Card() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Cards
    </h2>

    <p className="text-body-tertiary lead mb-2">
Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/components/card/" className="btn btn-link p-0"  target="_blank">
Cards on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="row mb-9">
            <div className="col-lg-6">
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
                          <span className="fas fa-copy me-1">                          </span>
Copy Code
                        </button>
                        <a href="#basic-example-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="basic-example-code" aria-expanded="false">
                          <span className="me-2" data-feather={"code"}>                          </span>View code
                        </a>
                        <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                          <span className="me-2" data-feather={"eye"}>                          </span>Hide code
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="collapse code-collapse" id="basic-example-code">
                    <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"card\\\" style=\\\"max-width:20rem;\\\"> <img class=\\\"card-img-top\\\" src=\\\"../../assets/img/generic/66.jpg\\\" alt=\\\"...\\\" /> <div class=\\\"card-body\\\"> <h5 class=\\\"card-title\\\">Title goes here</h5> <p class=\\\"card-text\\\">Here is the example of the Multiple Container Sortable feature of the </p> <button class=\\\"btn btn-primary\\\">Go somewhere</button> </div> </div></code>"}
                    </pre>
                  </div>
                  <div className="p-4 code-to-copy">
                    <div className="card" style={{"maxWidth":"20rem"} as CSSProperties}>
                      <PhoenixImage src="/assets/img/generic/66.jpg" alt="..." className="card-img-top" />
                      <div className="card-body">
                        <h5 className="card-title">
Title goes here
                        </h5>
                        <p className="card-text">
Here is the example of the Multiple Container Sortable feature of the 
                        </p>
                        <button className="btn btn-primary">
Go somewhere
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card shadow-none border my-4" data-component-card>
                <div className="card-header p-4 border-bottom bg-body">
                  <div className="row g-3 justify-content-between align-items-center">
                    <div className="col-12 col-md">
                      <h4 className="text-body mb-0" data-anchor>
Card with list
                      </h4>
                    </div>
                    <div className="col col-md-auto">
                      <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                        <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                          <span className="fas fa-copy me-1">                          </span>
Copy Code
                        </button>
                        <a href="#card-with-list-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="card-with-list-code" aria-expanded="false">
                          <span className="me-2" data-feather={"code"}>                          </span>View code
                        </a>
                        <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                          <span className="me-2" data-feather={"eye"}>                          </span>Hide code
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="collapse code-collapse" id="card-with-list-code">
                    <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"card p-3\\\" style=\\\"max-width:20rem;\\\"> <a class=\\\"dropdown-item fw-bold text-warning\\\" href=\\\"#!\\\"> <span class=\\\"fas fa-crown me-1\\\"></span> <span>Go Pro</span> </a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Set status</a> <a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Profile &amp; account</a> <a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Feedback</a> <div class=\\\"dropdown-divider\\\"></div> <a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Settings</a> <a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Logout</a> </div></code>"}
                    </pre>
                  </div>
                  <div className="p-4 code-to-copy">
                    <div className="card p-3" style={{"maxWidth":"20rem"} as CSSProperties}>
                      <a href="#!" className="dropdown-item fw-bold text-warning">
                        <span className="fas fa-crown me-1">                        </span>                        <span>
Go Pro
                        </span>
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#!" className="dropdown-item">
Set status
                      </a>
                      <a href="#!" className="dropdown-item">
{"Profile & account"}
                      </a>
                      <a href="#!" className="dropdown-item">
Feedback
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#!" className="dropdown-item">
Settings
                      </a>
                      <a href="#!" className="dropdown-item">
Logout
                      </a>
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
Image overlays
                  </h4>
                </div>
                <div className="col col-md-auto">
                  <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                    <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                      <span className="fas fa-copy me-1">                      </span>
Copy Code
                    </button>
                    <a href="#image-overlays-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="image-overlays-code" aria-expanded="false">
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
              <div className="collapse code-collapse" id="image-overlays-code">
                <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"card text-white overflow-hidden\\\" style=\\\"max-width:30rem;\\\"> <img class=\\\"card-img-top\\\" src=\\\"../../assets/img/generic/46.png\\\" alt=\\\"...\\\" /> <div class=\\\"card-img-overlay d-flex align-items-end\\\"> <div> <h4 class=\\\"card-title text-white\\\">Card title</h4> <p class=\\\"card-text\\\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> </div> </div> </div></code>"}
                </pre>
              </div>
              <div className="p-4 code-to-copy">
                <div className="card text-white overflow-hidden" style={{"maxWidth":"30rem"} as CSSProperties}>
                  <PhoenixImage src="/assets/img/generic/46.png" alt="..." className="card-img-top" />
                  <div className="card-img-overlay d-flex align-items-end">
                    <div>
                      <h4 className="card-title text-white">
Card title
                      </h4>
                      <p className="card-text">
This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
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
Horizontal
                  </h4>
                </div>
                <div className="col col-md-auto">
                  <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                    <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                      <span className="fas fa-copy me-1">                      </span>
Copy Code
                    </button>
                    <a href="#horizontal-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="horizontal-code" aria-expanded="false">
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
              <div className="collapse code-collapse" id="horizontal-code">
                <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"card\\\" style=\\\"max-width:32rem;\\\"> <div class=\\\"row g-0\\\"> <div class=\\\"col-md-4\\\"> <img class=\\\"img-fluid h-100 rounded-start\\\" src=\\\"../../assets/img/generic/36.png\\\" alt=\\\"...\\\" /> </div> <div class=\\\"col-md-8\\\"> <div class=\\\"card-body\\\"> <h4 class=\\\"card-title\\\">Card Title</h4> <p class=\\\"card-text\\\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> <p class=\\\"card-text\\\"> <small class=\\\"text-muted\\\">Last updated 3 mins ago</small></p> </div> </div> </div> </div></code>"}
                </pre>
              </div>
              <div className="p-4 code-to-copy">
                <div className="card" style={{"maxWidth":"32rem"} as CSSProperties}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <PhoenixImage src="/assets/img/generic/36.png" alt="..." className="img-fluid h-100 rounded-start" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h4 className="card-title">
Card Title
                        </h4>
                        <p className="card-text">
This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
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
Card Groups
                  </h4>
                </div>
                <div className="col col-md-auto">
                  <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                    <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                      <span className="fas fa-copy me-1">                      </span>
Copy Code
                    </button>
                    <a href="#card-groups-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="card-groups-code" aria-expanded="false">
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
              <div className="collapse code-collapse" id="card-groups-code">
                <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"card-group\\\"> <div class=\\\"card\\\"> <img class=\\\"card-img-top\\\" src=\\\"../../assets/img/generic/54.png\\\" alt=\\\"...\\\" /> <div class=\\\"card-body\\\"> <h4 class=\\\"card-title\\\">First card title</h4> <p class=\\\"card-text\\\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> <p class=\\\"card-text\\\"> <small class=\\\"text-muted\\\">Last updated 45 mins ago</small> </p> </div> </div> <div class=\\\"card\\\"> <img class=\\\"card-img-top\\\" src=\\\"../../assets/img/generic/44.png\\\" alt=\\\"...\\\" /> <div class=\\\"card-body\\\"> <h4 class=\\\"card-title\\\">First card title</h4> <p class=\\\"card-text\\\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> <p class=\\\"card-text\\\"> <small class=\\\"text-muted\\\">Last updated 45 mins ago</small> </p> </div> </div> <div class=\\\"card\\\"> <img class=\\\"card-img-top\\\" src=\\\"../../assets/img/generic/46.png\\\" alt=\\\"...\\\" /> <div class=\\\"card-body\\\"> <h4 class=\\\"card-title\\\">First card title</h4> <p class=\\\"card-text\\\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> <p class=\\\"card-text\\\"> <small class=\\\"text-muted\\\">Last updated 45 mins ago</small> </p> </div> </div> <div class=\\\"card\\\"> <img class=\\\"card-img-top\\\" src=\\\"../../assets/img/generic/45.png\\\" alt=\\\"...\\\" /> <div class=\\\"card-body\\\"> <h4 class=\\\"card-title\\\">First card title</h4> <p class=\\\"card-text\\\">This is a wider card with supporting text below as a natural lead-in a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> <p class=\\\"card-text\\\"> <small class=\\\"text-muted\\\">Last updated 45 mins ago</small> </p> </div> </div> </div></code>"}
                </pre>
              </div>
              <div className="p-4 code-to-copy">
                <div className="card-group">
                  <div className="card">
                    <PhoenixImage src="/assets/img/generic/54.png" alt="..." className="card-img-top" />
                    <div className="card-body">
                      <h4 className="card-title">
First card title
                      </h4>
                      <p className="card-text">
This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
Last updated 45 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <PhoenixImage src="/assets/img/generic/44.png" alt="..." className="card-img-top" />
                    <div className="card-body">
                      <h4 className="card-title">
First card title
                      </h4>
                      <p className="card-text">
This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
Last updated 45 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <PhoenixImage src="/assets/img/generic/46.png" alt="..." className="card-img-top" />
                    <div className="card-body">
                      <h4 className="card-title">
First card title
                      </h4>
                      <p className="card-text">
This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
Last updated 45 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <PhoenixImage src="/assets/img/generic/45.png" alt="..." className="card-img-top" />
                    <div className="card-body">
                      <h4 className="card-title">
First card title
                      </h4>
                      <p className="card-text">
This is a wider card with supporting text below as a natural lead-in a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
Last updated 45 mins ago
                        </small>
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
Card Background Styles
                  </h4>
                </div>
                <div className="col col-md-auto">
                  <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                    <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                      <span className="fas fa-copy me-1">                      </span>
Copy Code
                    </button>
                    <a href="#card-background-styles-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="card-background-styles-code" aria-expanded="false">
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
              <div className="collapse code-collapse" id="card-background-styles-code">
                <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"row g-4\\\"> <div class=\\\"col-sm-6 col-md-4 col-lg-3\\\"> <div class=\\\"card text-white bg-primary\\\"> <div class=\\\"card-body\\\"> <h4 class=\\\"card-title text-white\\\">Primary Card </h4> <p class=\\\"card-text\\\">Some quick example text to build on the card title and make up the bulk of the card's content.</p> </div> </div> </div> <div class=\\\"col-sm-6 col-md-4 col-lg-3\\\"> <div class=\\\"card text-white bg-secondary\\\"> <div class=\\\"card-body\\\"> <h4 class=\\\"card-title text-white\\\">Secondary Card </h4> <p class=\\\"card-text\\\">Some quick example text to build on the card title and make up the bulk of the card's content.</p> </div> </div> </div> <div class=\\\"col-sm-6 col-md-4 col-lg-3\\\"> <div class=\\\"card text-white bg-success\\\"> <div class=\\\"card-body\\\"> <h4 class=\\\"card-title text-white\\\">Success Card </h4> <p class=\\\"card-text\\\">Some quick example text to build on the card title and make up the bulk of the card's content.</p> </div> </div> </div> <div class=\\\"col-sm-6 col-md-4 col-lg-3\\\"> <div class=\\\"card text-white bg-danger\\\"> <div class=\\\"card-body\\\"> <h4 class=\\\"card-title text-white\\\">Danger Card </h4> <p class=\\\"card-text\\\">Some quick example text to build on the card title and make up the bulk of the card's content.</p> </div> </div> </div> <div class=\\\"col-sm-6 col-md-4 col-lg-3\\\"> <div class=\\\"card text-white bg-warning\\\"> <div class=\\\"card-body\\\"> <h4 class=\\\"card-title text-white\\\">Warning Card </h4> <p class=\\\"card-text\\\">Some quick example text to build on the card title and make up the bulk of the card's content.</p> </div> </div> </div> <div class=\\\"col-sm-6 col-md-4 col-lg-3\\\"> <div class=\\\"card text-white bg-info\\\"> <div class=\\\"card-body\\\"> <h4 class=\\\"card-title text-white\\\">Info Card </h4> <p class=\\\"card-text\\\">Some quick example text to build on the card title and make up the bulk of the card's content.</p> </div> </div> </div> <div class=\\\"col-sm-6 col-md-4 col-lg-3\\\"> <div class=\\\"card text-dark bg-light\\\"> <div class=\\\"card-body\\\"> <h4 class=\\\"card-title text-dark\\\">Light Card </h4> <p class=\\\"card-text\\\">Some quick example text to build on the card title and make up the bulk of the card's content.</p> </div> </div> </div> <div class=\\\"col-sm-6 col-md-4 col-lg-3\\\"> <div class=\\\"card text-white bg-dark\\\"> <div class=\\\"card-body\\\"> <h4 class=\\\"card-title text-white\\\">Dark Card </h4> <p class=\\\"card-text\\\">Some quick example text to build on the card title and make up the bulk of the card's content.</p> </div> </div> </div> </div></code>"}
                </pre>
              </div>
              <div className="p-4 code-to-copy">
                <div className="row g-4">
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card text-white bg-primary">
                      <div className="card-body">
                        <h4 className="card-title text-white">
Primary Card 
                        </h4>
                        <p className="card-text">
Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card text-white bg-secondary">
                      <div className="card-body">
                        <h4 className="card-title text-white">
Secondary Card 
                        </h4>
                        <p className="card-text">
Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card text-white bg-success">
                      <div className="card-body">
                        <h4 className="card-title text-white">
Success Card 
                        </h4>
                        <p className="card-text">
Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card text-white bg-danger">
                      <div className="card-body">
                        <h4 className="card-title text-white">
Danger Card 
                        </h4>
                        <p className="card-text">
Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card text-white bg-warning">
                      <div className="card-body">
                        <h4 className="card-title text-white">
Warning Card 
                        </h4>
                        <p className="card-text">
Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card text-white bg-info">
                      <div className="card-body">
                        <h4 className="card-title text-white">
Info Card 
                        </h4>
                        <p className="card-text">
Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card text-dark bg-light">
                      <div className="card-body">
                        <h4 className="card-title text-dark">
Light Card 
                        </h4>
                        <p className="card-text">
Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card text-white bg-dark">
                      <div className="card-body">
                        <h4 className="card-title text-white">
Dark Card 
                        </h4>
                        <p className="card-text">
Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                      </div>
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
Card Border Styles
                  </h4>
                </div>
                <div className="col col-md-auto">
                  <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                    <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                      <span className="fas fa-copy me-1">                      </span>
Copy Code
                    </button>
                    <a href="#card-border-styles-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="card-border-styles-code" aria-expanded="false">
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
              <div className="collapse code-collapse" id="card-border-styles-code">
                <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"row g-4\\\"> <div class=\\\"col-sm-6 col-md-4 col-lg-3\\\"> <div class=\\\"card border border-primary\\\"> <div class=\\\"card-body\\\"> <h4 class=\\\"card-title\\\">Primary Border Card </h4> <p class=\\\"card-text\\\">Some quick example text to build on the card title and make up the bulk of the card's content.</p> </div> </div> </div> <div class=\\\"col-sm-6 col-md-4 col-lg-3\\\"> <div class=\\\"card border border-secondary\\\"> <div class=\\\"card-body\\\"> <h4 class=\\\"card-title\\\">Secondary Border Card </h4> <p class=\\\"card-text\\\">Some quick example text to build on the card title and make up the bulk of the card's content.</p> </div> </div> </div> <div class=\\\"col-sm-6 col-md-4 col-lg-3\\\"> <div class=\\\"card border border-success\\\"> <div class=\\\"card-body\\\"> <h4 class=\\\"card-title\\\">Success Border Card </h4> <p class=\\\"card-text\\\">Some quick example text to build on the card title and make up the bulk of the card's content.</p> </div> </div> </div> <div class=\\\"col-sm-6 col-md-4 col-lg-3\\\"> <div class=\\\"card border border-danger\\\"> <div class=\\\"card-body\\\"> <h4 class=\\\"card-title\\\">Danger Border Card </h4> <p class=\\\"card-text\\\">Some quick example text to build on the card title and make up the bulk of the card's content.</p> </div> </div> </div> <div class=\\\"col-sm-6 col-md-4 col-lg-3\\\"> <div class=\\\"card border border-warning\\\"> <div class=\\\"card-body\\\"> <h4 class=\\\"card-title\\\">Warning Border Card </h4> <p class=\\\"card-text\\\">Some quick example text to build on the card title and make up the bulk of the card's content.</p> </div> </div> </div> <div class=\\\"col-sm-6 col-md-4 col-lg-3\\\"> <div class=\\\"card border border-info\\\"> <div class=\\\"card-body\\\"> <h4 class=\\\"card-title\\\">Info Border Card </h4> <p class=\\\"card-text\\\">Some quick example text to build on the card title and make up the bulk of the card's content.</p> </div> </div> </div> <div class=\\\"col-sm-6 col-md-4 col-lg-3\\\"> <div class=\\\"card border border-light\\\"> <div class=\\\"card-body\\\"> <h4 class=\\\"card-title\\\">Light Border Card </h4> <p class=\\\"card-text\\\">Some quick example text to build on the card title and make up the bulk of the card's content.</p> </div> </div> </div> <div class=\\\"col-sm-6 col-md-4 col-lg-3\\\"> <div class=\\\"card border border-dark\\\"> <div class=\\\"card-body\\\"> <h4 class=\\\"card-title\\\">Dark Border Card </h4> <p class=\\\"card-text\\\">Some quick example text to build on the card title and make up the bulk of the card's content.</p> </div> </div> </div> </div></code>"}
                </pre>
              </div>
              <div className="p-4 code-to-copy">
                <div className="row g-4">
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card border border-primary">
                      <div className="card-body">
                        <h4 className="card-title">
Primary Border Card 
                        </h4>
                        <p className="card-text">
Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card border border-secondary">
                      <div className="card-body">
                        <h4 className="card-title">
Secondary Border Card 
                        </h4>
                        <p className="card-text">
Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card border border-success">
                      <div className="card-body">
                        <h4 className="card-title">
Success Border Card 
                        </h4>
                        <p className="card-text">
Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card border border-danger">
                      <div className="card-body">
                        <h4 className="card-title">
Danger Border Card 
                        </h4>
                        <p className="card-text">
Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card border border-warning">
                      <div className="card-body">
                        <h4 className="card-title">
Warning Border Card 
                        </h4>
                        <p className="card-text">
Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card border border-info">
                      <div className="card-body">
                        <h4 className="card-title">
Info Border Card 
                        </h4>
                        <p className="card-text">
Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card border border-light">
                      <div className="card-body">
                        <h4 className="card-title">
Light Border Card 
                        </h4>
                        <p className="card-text">
Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card border border-dark">
                      <div className="card-body">
                        <h4 className="card-title">
Dark Border Card 
                        </h4>
                        <p className="card-text">
Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                      </div>
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
                <a href="#basic-example" className="nav-link">
Basic Example
                </a>
              </li>
              <li className="nav-item">
                <a href="#card-with-list" className="nav-link">
Card with list
                </a>
              </li>
              <li className="nav-item">
                <a href="#image-overlays" className="nav-link">
Image overlays
                </a>
              </li>
              <li className="nav-item">
                <a href="#horizontal" className="nav-link">
Horizontal
                </a>
              </li>
              <li className="nav-item">
                <a href="#card-groups" className="nav-link">
Card Groups
                </a>
              </li>
              <li className="nav-item">
                <a href="#card-background-styles" className="nav-link">
Card Background Styles
                </a>
              </li>
              <li className="nav-item">
                <a href="#card-border-styles" className="nav-link">
Card Border Styles
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
