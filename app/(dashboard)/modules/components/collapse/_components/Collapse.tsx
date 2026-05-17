'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Collapse() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Collapse
    </h2>

    <p className="text-body-tertiary lead mb-2">
Toggle the visibility of content across your project with a few classes and our JavaScript plugins.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/components/collapse/" className="btn btn-link p-0"  target="_blank">
Collapse on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
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
{"<code class=\"language-html\"><p> <a class=\\\"btn btn-phoenix-secondary mt-2\\\" data-bs-toggle=\\\"collapse\\\" href=\\\"#collapseExample\\\" role=\\\"button\\\" aria-expanded=\\\"false\\\" aria-controls=\\\"collapseExample\\\">Link with href</a> <button class=\\\"btn btn-phoenix-secondary ms-sm-2 mt-2\\\" type=\\\"button\\\" data-bs-toggle=\\\"collapse\\\" data-bs-target=\\\"#collapseExample\\\" aria-expanded=\\\"false\\\" aria-controls=\\\"collapseExample\\\">Button with data-bs-target</button> </p> <div class=\\\"collapse\\\" id=\\\"collapseExample\\\"> <div class=\\\"border border-translucent p-3 rounded\\\">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <p>
                    <a href="#collapseExample" className="btn btn-phoenix-secondary mt-2" data-bs-toggle={"collapse"}  role="button" aria-expanded="false" aria-controls="collapseExample">
Link with href
                    </a>
                    <button className="btn btn-phoenix-secondary ms-sm-2 mt-2" type="button" data-bs-toggle={"collapse"} data-bs-target={"#collapseExample"} aria-expanded="false" aria-controls="collapseExample">
Button with data-bs-target
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample">
                    <div className="border border-translucent p-3 rounded">
Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-6" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Multiple Targets
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
A 
                      <code>
{"<button>"}
                      </code>
 or 
                      <code>
{"<a>"}
                      </code>
 can show and hide multiple elements by referencing them with a selector in its 
                      <code>
href
                      </code>
 or 
                      <code>
data-bs-target
                      </code>
 attribute.Multiple 
                      <code>
{"<button>"}
                      </code>
 or 
                      <code>
{"<a>"}
                      </code>
 can show and hide an element if they each reference it with their 
                      <code>
href
                      </code>
 or 
                      <code>
data-bs-target
                      </code>
 attribute.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#multiple-targets-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="multiple-targets-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="multiple-targets-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p> <a class=\\\"btn btn-phoenix-secondary mt-2 me-2\\\" data-bs-toggle=\\\"collapse\\\" href=\\\"#multiCollapseExample1\\\" role=\\\"button\\\" aria-expanded=\\\"false\\\" aria-controls=\\\"multiCollapseExample1\\\">Toggle first element</a> <button class=\\\"btn btn-phoenix-secondary mt-2 me-2\\\" type=\\\"button\\\" data-bs-toggle=\\\"collapse\\\" data-bs-target=\\\"#multiCollapseExample2\\\" aria-expanded=\\\"false\\\" aria-controls=\\\"multiCollapseExample2\\\">Toggle second element</button> <button class=\\\"btn btn-phoenix-secondary mt-2\\\" type=\\\"button\\\" data-bs-toggle=\\\"collapse\\\" data-bs-target=\\\".multi-collapse\\\" aria-expanded=\\\"false\\\" aria-controls=\\\"multiCollapseExample1 multiCollapseExample2\\\">Toggle both elements</button> </p> <div class=\\\"row\\\"> <div class=\\\"col-sm-6\\\"> <div class=\\\"collapse multi-collapse mb-3 mb-sm-0\\\" id=\\\"multiCollapseExample1\\\"> <div class=\\\"card border border-translucent\\\"> <div class=\\\"card-body\\\">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</div> </div> </div> </div> <div class=\\\"col-sm-6\\\"> <div class=\\\"collapse multi-collapse\\\" id=\\\"multiCollapseExample2\\\"> <div class=\\\"card border border-translucent\\\"> <div class=\\\"card-body\\\">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</div> </div> </div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <p>
                    <a href="#multiCollapseExample1" className="btn btn-phoenix-secondary mt-2 me-2" data-bs-toggle={"collapse"}  role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
Toggle first element
                    </a>
                    <button className="btn btn-phoenix-secondary mt-2 me-2" type="button" data-bs-toggle={"collapse"} data-bs-target={"#multiCollapseExample2"} aria-expanded="false" aria-controls="multiCollapseExample2">
Toggle second element
                    </button>
                    <button className="btn btn-phoenix-secondary mt-2" type="button" data-bs-toggle={"collapse"} data-bs-target={".multi-collapse"} aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">
Toggle both elements
                    </button>
                  </p>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="collapse multi-collapse mb-3 mb-sm-0" id="multiCollapseExample1">
                        <div className="card border border-translucent">
                          <div className="card-body">
Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="collapse multi-collapse" id="multiCollapseExample2">
                        <div className="card border border-translucent">
                          <div className="card-body">
Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                          </div>
                        </div>
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
                <a href="#multiple-targets" className="nav-link">
Multiple Targets
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
