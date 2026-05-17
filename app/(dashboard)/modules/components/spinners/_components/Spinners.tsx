'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Spinners() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Spinners
    </h2>

    <p className="text-body-tertiary lead mb-2">
Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/components/spinners/" className="btn btn-link p-0"  target="_blank">
Spinners on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
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
{"<code class=\"language-html\"><div class=\\\"spinner-border\\\" role=\\\"status\\\"><span class=\\\"visually-hidden\\\">Loading...</span></div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">
Loading...
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Colors
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
The border spinner uses 
                      <code>
currentColor 
                      </code>
for its 
                      <code>
border-color
                      </code>
, meaning you can customize the color with text color utilities. You can use any of our text color utilities on the standard spinner.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#colors-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="colors-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="colors-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"spinner-border text-primary\\\" role=\\\"status\\\"> <span class=\\\"visually-hidden\\\">Loading...</span> </div> <div class=\\\"spinner-border text-secondary\\\" role=\\\"status\\\"> <span class=\\\"visually-hidden\\\">Loading...</span> </div> <div class=\\\"spinner-border text-success\\\" role=\\\"status\\\"> <span class=\\\"visually-hidden\\\">Loading...</span> </div> <div class=\\\"spinner-border text-info\\\" role=\\\"status\\\"> <span class=\\\"visually-hidden\\\">Loading...</span> </div> <div class=\\\"spinner-border text-warning\\\" role=\\\"status\\\"> <span class=\\\"visually-hidden\\\">Loading...</span> </div> <div class=\\\"spinner-border text-danger\\\" role=\\\"status\\\"> <span class=\\\"visually-hidden\\\">Loading...</span> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">
Loading...
                    </span>
                  </div>
                  <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">
Loading...
                    </span>
                  </div>
                  <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">
Loading...
                    </span>
                  </div>
                  <div className="spinner-border text-info" role="status">
                    <span className="visually-hidden">
Loading...
                    </span>
                  </div>
                  <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">
Loading...
                    </span>
                  </div>
                  <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">
Loading...
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Growing spinner
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#growing-spinner-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="growing-spinner-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="growing-spinner-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"spinner-grow\\\" role=\\\"status\\\"> <span class=\\\"visually-hidden\\\">Loading...</span> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="spinner-grow" role="status">
                    <span className="visually-hidden">
Loading...
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Growing colors
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#growing-colors-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="growing-colors-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="growing-colors-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"spinner-grow text-primary\\\" role=\\\"status\\\"> <span class=\\\"visually-hidden\\\">Loading...</span> </div> <div class=\\\"spinner-grow text-secondary\\\" role=\\\"status\\\"> <span class=\\\"visually-hidden\\\">Loading...</span> </div> <div class=\\\"spinner-grow text-success\\\" role=\\\"status\\\"> <span class=\\\"visually-hidden\\\">Loading...</span> </div> <div class=\\\"spinner-grow text-info\\\" role=\\\"status\\\"> <span class=\\\"visually-hidden\\\">Loading...</span> </div> <div class=\\\"spinner-grow text-warning\\\" role=\\\"status\\\"> <span class=\\\"visually-hidden\\\">Loading...</span> </div> <div class=\\\"spinner-grow text-danger\\\" role=\\\"status\\\"> <span class=\\\"visually-hidden\\\">Loading...</span> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">
Loading...
                    </span>
                  </div>
                  <div className="spinner-grow text-secondary" role="status">
                    <span className="visually-hidden">
Loading...
                    </span>
                  </div>
                  <div className="spinner-grow text-success" role="status">
                    <span className="visually-hidden">
Loading...
                    </span>
                  </div>
                  <div className="spinner-grow text-info" role="status">
                    <span className="visually-hidden">
Loading...
                    </span>
                  </div>
                  <div className="spinner-grow text-warning" role="status">
                    <span className="visually-hidden">
Loading...
                    </span>
                  </div>
                  <div className="spinner-grow text-danger" role="status">
                    <span className="visually-hidden">
Loading...
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Size
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#size-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="size-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="size-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"spinner-border spinner-border-sm\\\" role=\\\"status\\\"> <span class=\\\"visually-hidden\\\">Loading...</span> </div> <div class=\\\"spinner-border\\\" role=\\\"status\\\"> <span class=\\\"visually-hidden\\\">Loading...</span> </div> <div class=\\\"spinner-grow spinner-grow-sm\\\" role=\\\"status\\\"> <span class=\\\"visually-hidden\\\">Loading...</span> </div> <div class=\\\"spinner-grow\\\" role=\\\"status\\\"> <span class=\\\"visually-hidden\\\">Loading...</span> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="spinner-border spinner-border-sm" role="status">
                    <span className="visually-hidden">
Loading...
                    </span>
                  </div>
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">
Loading...
                    </span>
                  </div>
                  <div className="spinner-grow spinner-grow-sm" role="status">
                    <span className="visually-hidden">
Loading...
                    </span>
                  </div>
                  <div className="spinner-grow" role="status">
                    <span className="visually-hidden">
Loading...
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Buttons
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#buttons-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="buttons-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="buttons-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><button class=\\\"btn btn-primary me-1\\\" type=\\\"button\\\" disabled=\\\"\\\"> <span class=\\\"spinner-border spinner-border-sm\\\" role=\\\"status\\\" aria-hidden=\\\"true\\\"></span> <span class=\\\"visually-hidden\\\">Loading...</span> </button> <button class=\\\"btn btn-primary\\\" type=\\\"button\\\" disabled=\\\"\\\"> <span class=\\\"spinner-border spinner-border-sm\\\" role=\\\"status\\\" aria-hidden=\\\"true\\\"></span> Loading... </button></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <button className="btn btn-primary me-1" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true">                    </span>
                    <span className="visually-hidden">
Loading...
                    </span>
                  </button>
                  <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true">                    </span>
 Loading... 
                  </button>
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
                <a href="#colors" className="nav-link">
Colors
                </a>
              </li>
              <li className="nav-item">
                <a href="#growing-spinner" className="nav-link">
Growing spinner
                </a>
              </li>
              <li className="nav-item">
                <a href="#growing-colors" className="nav-link">
Growing colors
                </a>
              </li>
              <li className="nav-item">
                <a href="#size" className="nav-link">
Size
                </a>
              </li>
              <li className="nav-item">
                <a href="#buttons" className="nav-link">
Buttons
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
