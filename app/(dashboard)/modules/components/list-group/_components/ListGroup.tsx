'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function ListGroup() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
List group
    </h2>

    <p className="text-body-tertiary lead mb-2">
List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/components/list-group/" className="btn btn-link p-0"  target="_blank">
List group on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="row g-3 mt-3 mb-9">
            <div className="col-12 col-lg-6">
              <div className="card shadow-none border" data-component-card>
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
{"<code class=\"language-html\"><ul class=\\\"list-group\\\"> <li class=\\\"list-group-item\\\">News Feed</li> <li class=\\\"list-group-item\\\">Messages</li> <li class=\\\"list-group-item\\\">Events</li> <li class=\\\"list-group-item\\\">Groups</li> <li class=\\\"list-group-item\\\">Pages</li> </ul></code>"}
                    </pre>
                  </div>
                  <div className="p-4 code-to-copy">
                    <ul className="list-group">
                      <li className="list-group-item">
News Feed
                      </li>
                      <li className="list-group-item">
Messages
                      </li>
                      <li className="list-group-item">
Events
                      </li>
                      <li className="list-group-item">
Groups
                      </li>
                      <li className="list-group-item">
Pages
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card shadow-none border" data-component-card>
                <div className="card-header p-4 border-bottom bg-body">
                  <div className="row g-3 justify-content-between align-items-center">
                    <div className="col-12 col-md">
                      <h4 className="text-body mb-0" data-anchor>
Active Item
                      </h4>
                    </div>
                    <div className="col col-md-auto">
                      <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                        <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                          <span className="fas fa-copy me-1">                          </span>
Copy Code
                        </button>
                        <a href="#active-item-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="active-item-code" aria-expanded="false">
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
                  <div className="collapse code-collapse" id="active-item-code">
                    <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"list-group\\\"><a class=\\\"list-group-item list-group-item-action active\\\" href=\\\"#!\\\">News Feed</a> <a class=\\\"list-group-item list-group-item-action\\\" href=\\\"#!\\\">Messages</a> <a class=\\\"list-group-item list-group-item-action\\\" href=\\\"#!\\\">Events</a> <a class=\\\"list-group-item list-group-item-action\\\" href=\\\"#!\\\">Groups</a> <a class=\\\"list-group-item list-group-item-action disabled\\\" href=\\\"#!\\\">Pages</a> </div></code>"}
                    </pre>
                  </div>
                  <div className="p-4 code-to-copy">
                    <div className="list-group">
                      <a href="#!" className="list-group-item list-group-item-action active">
News Feed
                      </a>
                      <a href="#!" className="list-group-item list-group-item-action">
Messages
                      </a>
                      <a href="#!" className="list-group-item list-group-item-action">
Events
                      </a>
                      <a href="#!" className="list-group-item list-group-item-action">
Groups
                      </a>
                      <a href="#!" className="list-group-item list-group-item-action disabled">
Pages
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card shadow-none border" data-component-card>
                <div className="card-header p-4 border-bottom bg-body">
                  <div className="row g-3 justify-content-between align-items-center">
                    <div className="col-12 col-md">
                      <h4 className="text-body mb-0" data-anchor>
List group flush
                      </h4>
                    </div>
                    <div className="col col-md-auto">
                      <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                        <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                          <span className="fas fa-copy me-1">                          </span>
Copy Code
                        </button>
                        <a href="#list-group-flush-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="list-group-flush-code" aria-expanded="false">
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
                  <div className="collapse code-collapse" id="list-group-flush-code">
                    <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><ul class=\\\"list-group list-group-flush\\\"> <li class=\\\"list-group-item\\\">Messages</li> <li class=\\\"list-group-item\\\">Events</li> <li class=\\\"list-group-item\\\">Groups</li> <li class=\\\"list-group-item\\\">Pages</li> </ul></code>"}
                    </pre>
                  </div>
                  <div className="p-4 code-to-copy">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
Messages
                      </li>
                      <li className="list-group-item">
Events
                      </li>
                      <li className="list-group-item">
Groups
                      </li>
                      <li className="list-group-item">
Pages
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card shadow-none border" data-component-card>
                <div className="card-header p-4 border-bottom bg-body">
                  <div className="row g-3 justify-content-between align-items-center">
                    <div className="col-12 col-md">
                      <h4 className="text-body mb-0" data-anchor>
List group with badge
                      </h4>
                    </div>
                    <div className="col col-md-auto">
                      <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                        <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                          <span className="fas fa-copy me-1">                          </span>
Copy Code
                        </button>
                        <a href="#list-group-with-badge-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="list-group-with-badge-code" aria-expanded="false">
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
                  <div className="collapse code-collapse" id="list-group-with-badge-code">
                    <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><ul class=\\\"list-group\\\"> <li class=\\\"list-group-item d-flex justify-content-between align-items-center\\\">Messages<span class=\\\"badge badge-phoenix badge-phoenix-primary rounded-pill\\\">14</span></li> <li class=\\\"list-group-item d-flex justify-content-between align-items-center\\\">Events<span class=\\\"badge badge-phoenix badge-phoenix-primary rounded-pill\\\">2</span></li> <li class=\\\"list-group-item d-flex justify-content-between align-items-center\\\">Groups<span class=\\\"badge badge-phoenix badge-phoenix-primary rounded-pill\\\">1</span></li> <li class=\\\"list-group-item d-flex justify-content-between align-items-center\\\">Pages<span class=\\\"badge badge-phoenix badge-phoenix-primary rounded-pill\\\">9</span></li> </ul></code>"}
                    </pre>
                  </div>
                  <div className="p-4 code-to-copy">
                    <ul className="list-group">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
Messages
                        <span className="badge badge-phoenix badge-phoenix-primary rounded-pill">
14
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
Events
                        <span className="badge badge-phoenix badge-phoenix-primary rounded-pill">
2
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
Groups
                        <span className="badge badge-phoenix badge-phoenix-primary rounded-pill">
1
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
Pages
                        <span className="badge badge-phoenix badge-phoenix-primary rounded-pill">
9
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card shadow-none border" data-component-card>
                <div className="card-header p-4 border-bottom bg-body">
                  <div className="row g-3 justify-content-between align-items-center">
                    <div className="col-12 col-md">
                      <h4 className="text-body mb-0" data-anchor>
List group background
                      </h4>
                    </div>
                    <div className="col col-md-auto">
                      <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                        <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                          <span className="fas fa-copy me-1">                          </span>
Copy Code
                        </button>
                        <a href="#list-group-background-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="list-group-background-code" aria-expanded="false">
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
                  <div className="collapse code-collapse" id="list-group-background-code">
                    <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><ul class=\\\"list-group\\\"> <li class=\\\"list-group-item py-3\\\">Example with background</li> <li class=\\\"list-group-item list-group-item-primary py-3\\\">A simple primary list group item</li> <li class=\\\"list-group-item list-group-item-secondary py-3\\\">A simple secondary list group item</li> <li class=\\\"list-group-item list-group-item-success py-3\\\">A simple success list group item</li> <li class=\\\"list-group-item list-group-item-danger py-3\\\">A simple danger list group item</li> <li class=\\\"list-group-item list-group-item-warning py-3\\\">A simple warning list group item</li> <li class=\\\"list-group-item list-group-item-info py-3\\\">A simple info list group item</li> <li class=\\\"list-group-item list-group-item-light py-3\\\">A simple light list group item</li> <li class=\\\"list-group-item list-group-item-dark py-3\\\">A simple dark list group item</li> </ul></code>"}
                    </pre>
                  </div>
                  <div className="p-4 code-to-copy">
                    <ul className="list-group">
                      <li className="list-group-item py-3">
Example with background
                      </li>
                      <li className="list-group-item list-group-item-primary py-3">
A simple primary list group item
                      </li>
                      <li className="list-group-item list-group-item-secondary py-3">
A simple secondary list group item
                      </li>
                      <li className="list-group-item list-group-item-success py-3">
A simple success list group item
                      </li>
                      <li className="list-group-item list-group-item-danger py-3">
A simple danger list group item
                      </li>
                      <li className="list-group-item list-group-item-warning py-3">
A simple warning list group item
                      </li>
                      <li className="list-group-item list-group-item-info py-3">
A simple info list group item
                      </li>
                      <li className="list-group-item list-group-item-light py-3">
A simple light list group item
                      </li>
                      <li className="list-group-item list-group-item-dark py-3">
A simple dark list group item
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card shadow-none border" data-component-card>
                <div className="card-header p-4 border-bottom bg-body">
                  <div className="row g-3 justify-content-between align-items-center">
                    <div className="col-12 col-md">
                      <h4 className="text-body mb-0" data-anchor>
List group with Link
                      </h4>
                    </div>
                    <div className="col col-md-auto">
                      <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                        <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                          <span className="fas fa-copy me-1">                          </span>
Copy Code
                        </button>
                        <a href="#list-group-with-link-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="list-group-with-link-code" aria-expanded="false">
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
                  <div className="collapse code-collapse" id="list-group-with-link-code">
                    <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"list-group\\\"> <a class=\\\"list-group-item list-group-item-action flex-column align-items-start p-3 p-sm-4 active\\\" href=\\\"#!\\\"> <div class=\\\"d-flex flex-column flex-sm-row justify-content-between mb-1 mb-md-0\\\"> <h5 class=\\\"mb-1\\\">List group · Bootstrap</h5> <small>3 days ago</small> </div> <p class=\\\"mb-1\\\">The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed. </p> <small> The most basic list group</small> </a> <a class=\\\"list-group-item list-group-item-action flex-column align-items-start p-3 p-sm-4\\\" href=\\\"#!\\\"> <div class=\\\"d-flex flex-column flex-sm-row justify-content-between mb-1 mb-md-0\\\"> <h5 class=\\\"mb-1\\\">What is list group?</h5> <small class=\\\"text-body-tertiary text-opacity-85\\\">3 days ago</small> </div> <p class=\\\"mb-1\\\">Creating List Groups with Bootstrap. The list groups are very useful and flexible component for displaying lists of elements in a beautiful manner.</p> <small class=\\\"text-body-tertiary text-opacity-85\\\">Donec id elit non mi porta.</small> </a> <a class=\\\"list-group-item list-group-item-action flex-column align-items-start p-3 p-sm-4\\\" href=\\\"#!\\\"> <div class=\\\"d-flex flex-column flex-sm-row justify-content-between mb-1 mb-md-0\\\"> <h5 class=\\\"mb-1\\\">What is ordered list?</h5> <small class=\\\"text-body-tertiary text-opacity-85\\\">3 days ago</small> </div> <p class=\\\"mb-1\\\">An ordered list typically is a numbered list of items. HTML 3.0 gives you the ability to control the sequence number - to continue where the previous list left off, or to start at a particular number.</p> <small class=\\\"text-body-tertiary text-opacity-85\\\">An ordered list</small> </a> </div></code>"}
                    </pre>
                  </div>
                  <div className="p-4 code-to-copy">
                    <div className="list-group">
                      <a href="#!" className="list-group-item list-group-item-action flex-column align-items-start p-3 p-sm-4 active">
                        <div className="d-flex flex-column flex-sm-row justify-content-between mb-1 mb-md-0">
                          <h5 className="mb-1">
List group · Bootstrap
                          </h5>
                          <small>
3 days ago
                          </small>
                        </div>                        <p className="mb-1">
The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed. 
                        </p>                        <small>
 The most basic list group
                        </small>
                      </a>
                      <a href="#!" className="list-group-item list-group-item-action flex-column align-items-start p-3 p-sm-4">
                        <div className="d-flex flex-column flex-sm-row justify-content-between mb-1 mb-md-0">
                          <h5 className="mb-1">
What is list group?
                          </h5>
                          <small className="text-body-tertiary text-opacity-85">
3 days ago
                          </small>
                        </div>                        <p className="mb-1">
Creating List Groups with Bootstrap. The list groups are very useful and flexible component for displaying lists of elements in a beautiful manner.
                        </p>                        <small className="text-body-tertiary text-opacity-85">
Donec id elit non mi porta.
                        </small>
                      </a>
                      <a href="#!" className="list-group-item list-group-item-action flex-column align-items-start p-3 p-sm-4">
                        <div className="d-flex flex-column flex-sm-row justify-content-between mb-1 mb-md-0">
                          <h5 className="mb-1">
What is ordered list?
                          </h5>
                          <small className="text-body-tertiary text-opacity-85">
3 days ago
                          </small>
                        </div>                        <p className="mb-1">
An ordered list typically is a numbered list of items. HTML 3.0 gives you the ability to control the sequence number - to continue where the previous list left off, or to start at a particular number.
                        </p>                        <small className="text-body-tertiary text-opacity-85">
An ordered list
                        </small>
                      </a>
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
                <a href="#active-item" className="nav-link">
Active Item
                </a>
              </li>
              <li className="nav-item">
                <a href="#list-group-flush" className="nav-link">
List group flush
                </a>
              </li>
              <li className="nav-item">
                <a href="#list-group-with-badge" className="nav-link">
List group with badge
                </a>
              </li>
              <li className="nav-item">
                <a href="#list-group-background" className="nav-link">
List group background
                </a>
              </li>
              <li className="nav-item">
                <a href="#list-group-with-link" className="nav-link">
List group with Link
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
