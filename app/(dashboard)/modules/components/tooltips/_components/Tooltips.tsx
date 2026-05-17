'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Tooltips() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Tooltips
    </h2>

    <p className="text-body-tertiary lead mb-2">
Documentation and examples for adding custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and data-bs-attributes for local title storage.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/components/tooltips/" className="btn btn-link p-0"  target="_blank">
Tooltips on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="mb-9">
            <div className="card shadow-none border my-6" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Example
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Hover over the links below to see tooltips:
                      <br />
Tight pants next level keffiyeh 
                      <a href="#" data-bs-toggle={"tooltip"} title="Default tooltip">
you probably
                      </a>
 haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel 
                      <a href="#" data-bs-toggle={"tooltip"} title="" data-original-title={"Another tooltip"}>
have a
                      </a>
 terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's cleanse vegan chambray. A really ironic artisan 
                      <a href="#" data-bs-toggle={"tooltip"} title="" data-original-title={"Another one here too"}>
whatever keytar
                      </a>
, scenester farm-to-table banksy Austin 
                      <a href="#" data-bs-toggle={"tooltip"} title="The last tip!">
twitter handle
                      </a>
 freegan cred raw denim single-origin coffee viral.
                    </p>
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
{"<code class=\"language-html\"><button class=\\\"btn btn-secondary btn-sm m-1\\\" type=\\\"button\\\" data-bs-toggle=\\\"tooltip\\\" data-bs-placement=\\\"top\\\" title=\\\"Tooltip on top\\\"> Tooltip on top </button> <button class=\\\"btn btn-secondary btn-sm m-1\\\" type=\\\"button\\\" data-bs-toggle=\\\"tooltip\\\" data-bs-placement=\\\"right\\\" title=\\\"Tooltip on right\\\"> Tooltip on right </button> <button class=\\\"btn btn-secondary btn-sm m-1\\\" type=\\\"button\\\" data-bs-toggle=\\\"tooltip\\\" data-bs-placement=\\\"bottom\\\" title=\\\"Tooltip on bottom\\\"> Tooltip on bottom </button> <button class=\\\"btn btn-secondary btn-sm m-1\\\" type=\\\"button\\\" data-bs-toggle=\\\"tooltip\\\" data-bs-placement=\\\"left\\\" title=\\\"Tooltip on left\\\"> Tooltip on left </button> <button class=\\\"btn btn-secondary btn-sm m-1\\\" type=\\\"button\\\" data-bs-toggle=\\\"tooltip\\\" data-bs-placement=\\\"top\\\" title=\\\"&lt;em&gt;Tooltip&lt;/em&gt; &lt;u&gt;with&lt;/u&gt; &lt;b&gt;HTML&lt;/b&gt;\\\" data-bs-html=\\\"true\\\"> Tooltip with HTML </button></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <button className="btn btn-secondary btn-sm m-1" type="button" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Tooltip on top">
 Tooltip on top 
                  </button>
                  <button className="btn btn-secondary btn-sm m-1" type="button" data-bs-toggle={"tooltip"} data-bs-placement={"right"} title="Tooltip on right">
 Tooltip on right 
                  </button>
                  <button className="btn btn-secondary btn-sm m-1" type="button" data-bs-toggle={"tooltip"} data-bs-placement={"bottom"} title="Tooltip on bottom">
 Tooltip on bottom 
                  </button>
                  <button className="btn btn-secondary btn-sm m-1" type="button" data-bs-toggle={"tooltip"} data-bs-placement={"left"} title="Tooltip on left">
 Tooltip on left 
                  </button>
                  <button className="btn btn-secondary btn-sm m-1" type="button" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title={"&lt;em&gt;Tooltip&lt;/em&gt; &lt;u&gt;with&lt;/u&gt; &lt;b&gt;HTML&lt;/b&gt;"} data-bs-html={"true"}>
 Tooltip with HTML 
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
                <a href="#example" className="nav-link">
Example
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
