'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Toast() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Toasts
    </h2>

    <p className="text-body-tertiary lead mb-2">
Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/components/toasts/" className="btn btn-link p-0"  target="_blank">
Toasts on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
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
Basic Example
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#basic-example-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="basic-example-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="basic-example-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"toast show\\\" role=\\\"alert\\\" aria-live=\\\"assertive\\\" aria-atomic=\\\"true\\\" data-bs-autohide=\\\"false\\\"> <div class=\\\"toast-header\\\"> <strong class=\\\"me-auto\\\">Bootstrap</strong><small class=\\\"text-body-secondary\\\">11 mins ago</small> <button class=\\\"btn ms-2 p-0\\\" type=\\\"button\\\" data-bs-dismiss=\\\"toast\\\" aria-label=\\\"Close\\\"><span class=\\\"uil uil-times fs-7\\\"></span></button> </div> <div class=\\\"toast-body\\\">Hello, world! This is a toast message.</div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide={"false"}>
                    <div className="toast-header">
                      <strong className="me-auto">
Bootstrap
                      </strong>
                      <small className="text-body-secondary">
11 mins ago
                      </small>
                      <button className="btn ms-2 p-0" type="button" data-bs-dismiss={"toast"} aria-label="Close">
                        <span className="uil uil-times fs-7">                        </span>
                      </button>
                    </div>
                    <div className="toast-body">
Hello, world! This is a toast message.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border mt-4 rounded-bottom-0" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Placement
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Place toasts with the helper classes as you need them. The top right is often used for notifications, as is the top middle. If you’re only ever going to show one toast at a time, put the positioning styles right on the 
                      <code>
.toast
                      </code>
.
                    </p>
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
{"<code class=\"language-html\"><div class=\\\"position-relative mb-4\\\" aria-live=\\\"polite\\\" aria-atomic=\\\"true\\\" style=\\\"min-height: 130px;\\\"> <div class=\\\"toast show position-absolute top-0 end-0\\\"> <div class=\\\"toast-header\\\"> <strong class=\\\"me-auto\\\">Bootstrap</strong> <small class=\\\"text-body-secondary\\\">11 mins ago</small> <button class=\\\"btn ms-2 p-0\\\" type=\\\"button\\\" data-bs-dismiss=\\\"toast\\\" aria-label=\\\"Close\\\"><span class=\\\"uil uil-times fs-7\\\"></span></button> </div> <div class=\\\"toast-body\\\">Hello, world! This is a toast message.</div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="position-relative mb-4" aria-live="polite" aria-atomic="true" style={{"minHeight":"130px"} as CSSProperties}>
                    <div className="toast show position-absolute top-0 end-0">
                      <div className="toast-header">
                        <strong className="me-auto">
Bootstrap
                        </strong>
                        <small className="text-body-secondary">
11 mins ago
                        </small>
                        <button className="btn ms-2 p-0" type="button" data-bs-dismiss={"toast"} aria-label="Close">
                          <span className="uil uil-times fs-7">                          </span>
                        </button>
                      </div>
                      <div className="toast-body">
Hello, world! This is a toast message.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border border-top-0 rounded-top-0 mb-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <p className="mb-0 mt-2 text-body-secondary">
You can also get fancy with flexbox utilities to align toasts horizontally and/or vertically.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"d-flex flex-center\\\" aria-live=\\\"polite\\\" aria-atomic=\\\"true\\\" style=\\\"min-height: 300px;\\\"> <div class=\\\"toast show\\\" role=\\\"alert\\\" data-bs-autohide=\\\"false\\\" aria-live=\\\"assertive\\\" aria-atomic=\\\"true\\\"> <div class=\\\"toast-header\\\"><strong class=\\\"me-auto\\\">Bootstrap</strong> <small class=\\\"text-body-secondary\\\">11 mins ago</small> <button class=\\\"btn ms-2 p-0\\\" type=\\\"button\\\" data-bs-dismiss=\\\"toast\\\" aria-label=\\\"Close\\\"><span class=\\\"uil uil-times fs-7\\\"></span></button> </div> <div class=\\\"toast-body\\\">Hello, world! This is a toast message.</div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="d-flex flex-center" aria-live="polite" aria-atomic="true" style={{"minHeight":"300px"} as CSSProperties}>
                    <div className="toast show" role="alert" data-bs-autohide={"false"} aria-live="assertive" aria-atomic="true">
                      <div className="toast-header">
                        <strong className="me-auto">
Bootstrap
                        </strong>
                        <small className="text-body-secondary">
11 mins ago
                        </small>
                        <button className="btn ms-2 p-0" type="button" data-bs-dismiss={"toast"} aria-label="Close">
                          <span className="uil uil-times fs-7">                          </span>
                        </button>
                      </div>
                      <div className="toast-body">
Hello, world! This is a toast message.
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
Live Toast
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#live-toast-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="live-toast-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="live-toast-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><button class=\\\"btn btn-primary\\\" id=\\\"liveToastBtn\\\" type=\\\"button\\\">Show live toast</button> <div class=\\\"position-fixed bottom-0 end-0 p-3\\\" style=\\\"z-index: 5\\\"> <div class=\\\"toast fade\\\" id=\\\"liveToast\\\" role=\\\"alert\\\" aria-live=\\\"assertive\\\" aria-atomic=\\\"true\\\"> <div class=\\\"toast-header\\\"> <strong class=\\\"me-auto\\\">Bootstrap</strong> <small class=\\\"text-body-secondary\\\">11 mins ago</small> <button class=\\\"btn ms-2 p-0\\\" type=\\\"button\\\" data-bs-dismiss=\\\"toast\\\" aria-label=\\\"Close\\\"><span class=\\\"uil uil-times fs-7\\\"></span></button> </div> <div class=\\\"toast-body\\\">Hello, world! This is a toast message.</div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <button className="btn btn-primary" id="liveToastBtn" type="button">
Show live toast
                  </button>
                  <div className="position-fixed bottom-0 end-0 p-3" style={{"zIndex":"5"} as CSSProperties}>
                    <div className="toast fade" id="liveToast" role="alert" aria-live="assertive" aria-atomic="true">
                      <div className="toast-header">
                        <strong className="me-auto">
Bootstrap
                        </strong>
                        <small className="text-body-secondary">
11 mins ago
                        </small>
                        <button className="btn ms-2 p-0" type="button" data-bs-dismiss={"toast"} aria-label="Close">
                          <span className="uil uil-times fs-7">                          </span>
                        </button>
                      </div>
                      <div className="toast-body">
Hello, world! This is a toast message.
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
Translucent
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Toasts are slightly translucent, too, so they blend over whatever they might appear over.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#translucent-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="translucent-code" aria-expanded="false">
                        <span className="me-2" data-feather={"code"}>                        </span>View code
                      </a>
                      <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                        <span className="me-2" data-feather={"eye"}>                        </span>Hide code
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="card-body p-0 bg-dark">
                <div className="collapse code-collapse" id="translucent-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"toast show\\\" role=\\\"alert\\\" data-bs-autohide=\\\"false\\\" aria-live=\\\"assertive\\\" aria-atomic=\\\"true\\\"> <div class=\\\"toast-header\\\"> <strong class=\\\"me-auto\\\">Bootstrap</strong> <small class=\\\"text-body-secondary\\\">11 mins ago</small> <button class=\\\"btn ms-2 p-0\\\" type=\\\"button\\\" data-bs-dismiss=\\\"toast\\\" data-bs-theme=\\\"dark\\\" aria-label=\\\"Close\\\"><span class=\\\"uil uil-times fs-7\\\"></span></button> </div> <div class=\\\"toast-body\\\">Hello, world! This is a toast message.</div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="toast show" role="alert" data-bs-autohide={"false"} aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                      <strong className="me-auto">
Bootstrap
                      </strong>
                      <small className="text-body-secondary">
11 mins ago
                      </small>
                      <button className="btn ms-2 p-0" type="button" data-bs-dismiss={"toast"} data-bs-theme={"dark"} aria-label="Close">
                        <span className="uil uil-times fs-7">                        </span>
                      </button>
                    </div>
                    <div className="toast-body">
Hello, world! This is a toast message.
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
Color schemes
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#color-schemes-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="color-schemes-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="color-schemes-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"d-flex\\\"> <div class=\\\"toast show align-items-center text-white dark__text-gray-1100 bg-primary border-0\\\" role=\\\"alert\\\" data-bs-autohide=\\\"false\\\" aria-live=\\\"assertive\\\" aria-atomic=\\\"true\\\"> <div class=\\\"d-flex\\\"> <div class=\\\"toast-body\\\"> Hello, world! This is a toast message. </div> <button class=\\\"btn ms-2 p-0\\\" type=\\\"button\\\" data-bs-dismiss=\\\"toast\\\" aria-label=\\\"Close\\\"><span class=\\\"uil uil-times fs-7 text-white\\\"></span></button> </div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="d-flex">
                    <div className="toast show align-items-center text-white dark__text-gray-1100 bg-primary border-0" role="alert" data-bs-autohide={"false"} aria-live="assertive" aria-atomic="true">
                      <div className="d-flex">
                        <div className="toast-body">
 Hello, world! This is a toast message. 
                        </div>
                        <button className="btn ms-2 p-0" type="button" data-bs-dismiss={"toast"} aria-label="Close">
                          <span className="uil uil-times fs-7 text-white">                          </span>
                        </button>
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
Custom Content
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
You can also add additional controls and components to toasts.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#custom-content-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="custom-content-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="custom-content-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"toast show align-items-center\\\" role=\\\"alert\\\" data-bs-autohide=\\\"false\\\" aria-live=\\\"assertive\\\" aria-atomic=\\\"true\\\"> <div class=\\\"d-flex\\\"> <div class=\\\"toast-body\\\">Hello, world! This is a toast message.</div> <button class=\\\"btn ms-2 p-0\\\" type=\\\"button\\\" data-bs-dismiss=\\\"toast\\\" aria-label=\\\"Close\\\"><span class=\\\"uil uil-times fs-7\\\"></span></button> </div> <div class=\\\"py-3 border-top border-translucent\\\"> <button class=\\\"btn btn-primary btn-sm\\\" type=\\\"button\\\">Take action</button> <button class=\\\"btn btn-secondary btn-sm ms-2\\\" type=\\\"button\\\" data-bs-dismiss=\\\"toast\\\">Close</button> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="toast show align-items-center" role="alert" data-bs-autohide={"false"} aria-live="assertive" aria-atomic="true">
                    <div className="d-flex">
                      <div className="toast-body">
Hello, world! This is a toast message.
                      </div>
                      <button className="btn ms-2 p-0" type="button" data-bs-dismiss={"toast"} aria-label="Close">
                        <span className="uil uil-times fs-7">                        </span>
                      </button>
                    </div>
                    <div className="py-3 border-top border-translucent">
                      <button className="btn btn-primary btn-sm" type="button">
Take action
                      </button>
                      <button className="btn btn-secondary btn-sm ms-2" type="button" data-bs-dismiss={"toast"}>
Close
                      </button>
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
                <a href="#placement" className="nav-link">
Placement
                </a>
              </li>
              <li className="nav-item">
                <a href="#live-toast" className="nav-link">
Live Toast
                </a>
              </li>
              <li className="nav-item">
                <a href="#translucent" className="nav-link">
Translucent
                </a>
              </li>
              <li className="nav-item">
                <a href="#color-schemes" className="nav-link">
Color schemes
                </a>
              </li>
              <li className="nav-item">
                <a href="#custom-content" className="nav-link">
Custom Content
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
