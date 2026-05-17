'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Colors() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Color
    </h2>

    <p className="text-body-tertiary lead mb-2">
Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/utilities/colors/" className="btn btn-link p-0"  target="_blank">
Color on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="mb-9">
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Colors
                    </h4>
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
{"<code class=\"language-html\"><p class=\\\"text-primary\\\">text-primary</p> <p class=\\\"text-secondary\\\">text-secondary</p> <p class=\\\"text-success\\\">text-success</p> <p class=\\\"text-info\\\">text-info</p> <p class=\\\"text-warning\\\">text-warning</p> <p class=\\\"text-danger\\\">text-danger</p> <p class=\\\"text-body\\\">text-body</p> <p class=\\\"text-body-highlight\\\">text-body-highlight</p> <p class=\\\"text-body-secondary\\\">text-body-secondary</p> <p class=\\\"text-body-tertiary\\\">text-body-tertiary</p> <p class=\\\"text-body-quaternary\\\">text-body-quaternary</p> <p class=\\\"text-body-emphasis\\\">text-body-emphasis</p><span class=\\\"pe-3 text-primary-subtle bg-dark dark__bg-gray-400 \\\">text-primary-subtle</span><br /><span class=\\\"pe-3 text-primary-light \\\">text-primary-light</span><br /><span class=\\\"pe-3 text-primary-lighter \\\">text-primary-lighter</span><br /><span class=\\\"pe-3 text-primary-dark \\\">text-primary-dark</span><br /><span class=\\\"pe-3 text-primary-darker \\\">text-primary-darker</span><br /><span class=\\\"pe-3 text-primary-emphasis \\\">text-primary-emphasis</span><br /><span class=\\\"pe-3 text-secondary-subtle bg-dark dark__bg-gray-400 \\\">text-secondary-subtle</span><br /><span class=\\\"pe-3 text-secondary-light \\\">text-secondary-light</span><br /><span class=\\\"pe-3 text-secondary-lighter \\\">text-secondary-lighter</span><br /><span class=\\\"pe-3 text-secondary-dark bg-white\\\">text-secondary-dark</span><br /><span class=\\\"pe-3 text-secondary-darker \\\">text-secondary-darker</span><br /><span class=\\\"pe-3 text-secondary-emphasis \\\">text-secondary-emphasis</span><br /><span class=\\\"pe-3 text-success-subtle bg-dark dark__bg-gray-400 \\\">text-success-subtle</span><br /><span class=\\\"pe-3 text-success-light \\\">text-success-light</span><br /><span class=\\\"pe-3 text-success-lighter \\\">text-success-lighter</span><br /><span class=\\\"pe-3 text-success-dark \\\">text-success-dark</span><br /><span class=\\\"pe-3 text-success-darker \\\">text-success-darker</span><br /><span class=\\\"pe-3 text-success-emphasis \\\">text-success-emphasis</span><br /><span class=\\\"pe-3 text-info-subtle bg-dark dark__bg-gray-400 \\\">text-info-subtle</span><br /><span class=\\\"pe-3 text-info-light \\\">text-info-light</span><br /><span class=\\\"pe-3 text-info-lighter \\\">text-info-lighter</span><br /><span class=\\\"pe-3 text-info-dark \\\">text-info-dark</span><br /><span class=\\\"pe-3 text-info-darker \\\">text-info-darker</span><br /><span class=\\\"pe-3 text-info-emphasis \\\">text-info-emphasis</span><br /><span class=\\\"pe-3 text-warning-subtle bg-dark dark__bg-gray-400 \\\">text-warning-subtle</span><br /><span class=\\\"pe-3 text-warning-light \\\">text-warning-light</span><br /><span class=\\\"pe-3 text-warning-lighter \\\">text-warning-lighter</span><br /><span class=\\\"pe-3 text-warning-dark \\\">text-warning-dark</span><br /><span class=\\\"pe-3 text-warning-darker \\\">text-warning-darker</span><br /><span class=\\\"pe-3 text-warning-emphasis \\\">text-warning-emphasis</span><br /><span class=\\\"pe-3 text-danger-subtle bg-dark dark__bg-gray-400 \\\">text-danger-subtle</span><br /><span class=\\\"pe-3 text-danger-light \\\">text-danger-light</span><br /><span class=\\\"pe-3 text-danger-lighter \\\">text-danger-lighter</span><br /><span class=\\\"pe-3 text-danger-dark \\\">text-danger-dark</span><br /><span class=\\\"pe-3 text-danger-darker \\\">text-danger-darker</span><br /><span class=\\\"pe-3 text-danger-emphasis \\\">text-danger-emphasis</span><br /></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <p className="text-primary">
text-primary
                  </p>
                  <p className="text-secondary">
text-secondary
                  </p>
                  <p className="text-success">
text-success
                  </p>
                  <p className="text-info">
text-info
                  </p>
                  <p className="text-warning">
text-warning
                  </p>
                  <p className="text-danger">
text-danger
                  </p>
                  <p className="text-body">
text-body
                  </p>
                  <p className="text-body-highlight">
text-body-highlight
                  </p>
                  <p className="text-body-secondary">
text-body-secondary
                  </p>
                  <p className="text-body-tertiary">
text-body-tertiary
                  </p>
                  <p className="text-body-quaternary">
text-body-quaternary
                  </p>
                  <p className="text-body-emphasis">
text-body-emphasis
                  </p>
                  <span className="pe-3 text-primary-subtle  bg-dark dark__bg-gray-400 ">
text-primary-subtle
                  </span>
                  <br />
                  <span className="pe-3 text-primary-light  ">
text-primary-light
                  </span>
                  <br />
                  <span className="pe-3 text-primary-lighter  ">
text-primary-lighter
                  </span>
                  <br />
                  <span className="pe-3 text-primary-dark  ">
text-primary-dark
                  </span>
                  <br />
                  <span className="pe-3 text-primary-darker  ">
text-primary-darker
                  </span>
                  <br />
                  <span className="pe-3 text-primary-emphasis  ">
text-primary-emphasis
                  </span>
                  <br />
                  <span className="pe-3 text-secondary-subtle  bg-dark dark__bg-gray-400 ">
text-secondary-subtle
                  </span>
                  <br />
                  <span className="pe-3 text-secondary-light  ">
text-secondary-light
                  </span>
                  <br />
                  <span className="pe-3 text-secondary-lighter  ">
text-secondary-lighter
                  </span>
                  <br />
                  <span className="pe-3 text-secondary-dark   bg-white">
text-secondary-dark
                  </span>
                  <br />
                  <span className="pe-3 text-secondary-darker  ">
text-secondary-darker
                  </span>
                  <br />
                  <span className="pe-3 text-secondary-emphasis  ">
text-secondary-emphasis
                  </span>
                  <br />
                  <span className="pe-3 text-success-subtle  bg-dark dark__bg-gray-400 ">
text-success-subtle
                  </span>
                  <br />
                  <span className="pe-3 text-success-light  ">
text-success-light
                  </span>
                  <br />
                  <span className="pe-3 text-success-lighter  ">
text-success-lighter
                  </span>
                  <br />
                  <span className="pe-3 text-success-dark  ">
text-success-dark
                  </span>
                  <br />
                  <span className="pe-3 text-success-darker  ">
text-success-darker
                  </span>
                  <br />
                  <span className="pe-3 text-success-emphasis  ">
text-success-emphasis
                  </span>
                  <br />
                  <span className="pe-3 text-info-subtle  bg-dark dark__bg-gray-400 ">
text-info-subtle
                  </span>
                  <br />
                  <span className="pe-3 text-info-light  ">
text-info-light
                  </span>
                  <br />
                  <span className="pe-3 text-info-lighter  ">
text-info-lighter
                  </span>
                  <br />
                  <span className="pe-3 text-info-dark  ">
text-info-dark
                  </span>
                  <br />
                  <span className="pe-3 text-info-darker  ">
text-info-darker
                  </span>
                  <br />
                  <span className="pe-3 text-info-emphasis  ">
text-info-emphasis
                  </span>
                  <br />
                  <span className="pe-3 text-warning-subtle  bg-dark dark__bg-gray-400 ">
text-warning-subtle
                  </span>
                  <br />
                  <span className="pe-3 text-warning-light  ">
text-warning-light
                  </span>
                  <br />
                  <span className="pe-3 text-warning-lighter  ">
text-warning-lighter
                  </span>
                  <br />
                  <span className="pe-3 text-warning-dark  ">
text-warning-dark
                  </span>
                  <br />
                  <span className="pe-3 text-warning-darker  ">
text-warning-darker
                  </span>
                  <br />
                  <span className="pe-3 text-warning-emphasis  ">
text-warning-emphasis
                  </span>
                  <br />
                  <span className="pe-3 text-danger-subtle  bg-dark dark__bg-gray-400 ">
text-danger-subtle
                  </span>
                  <br />
                  <span className="pe-3 text-danger-light  ">
text-danger-light
                  </span>
                  <br />
                  <span className="pe-3 text-danger-lighter  ">
text-danger-lighter
                  </span>
                  <br />
                  <span className="pe-3 text-danger-dark  ">
text-danger-dark
                  </span>
                  <br />
                  <span className="pe-3 text-danger-darker  ">
text-danger-darker
                  </span>
                  <br />
                  <span className="pe-3 text-danger-emphasis  ">
text-danger-emphasis
                  </span>
                  <br />
                </div>
              </div>
            </div>
            <h3 data-anchor>
Opacity
            </h3>
            <p className="text-body-tertiary">
Color opacity allows for real-time color changes without compilation and dynamic alpha transparency changes.
            </p>
            <div className="card border overflow-hidden my-5">
              <div className="card-header border-bottom">
                <h3 className="mb-1" data-anchor>
How it works 
                </h3>
                <p className="text-body-tertiary mb-0">
Consider our default 
                  <code>
.text-primary 
                  </code>
utility.
                </p>
              </div>
              <div className="card-body p-0">
                <pre>
{"<code class=\"language-css\">.text-primary { --phoenix-text-opacity: 1; color: rgba(var(--phoenix-primary-rgb), var(--phoenix-text-opacity)) !important; }</code>"}
                </pre>
              </div>
            </div>
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
{"<code class=\"language-html\"> <div class=\\\"text-primary mb-1\\\">This is default primary text</div> <div class=\\\"text-primary mb-1\\\" style=\\\"--bs-text-opacity: .5;\\\">This is 50% opacity primary text using inline css</div> <div class=\\\"text-primary text-opacity-75 mb-1\\\">This is 75% opacity primary text using utility class</div> <div class=\\\"text-primary text-opacity-50 mb-1\\\">This is 50% opacity primary text using utility class</div> <div class=\\\"text-primary text-opacity-25 mb-1\\\">This is 25% opacity primary text using utility class</div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="text-primary mb-1">
This is default primary text
                  </div>
                  <div className="text-primary mb-1" style={{"--bs-text-opacity":".5"} as CSSProperties}>
This is 50% opacity primary text using inline css
                  </div>
                  <div className="text-primary text-opacity-75 mb-1">
This is 75% opacity primary text using utility class
                  </div>
                  <div className="text-primary text-opacity-50 mb-1">
This is 50% opacity primary text using utility class
                  </div>
                  <div className="text-primary text-opacity-25 mb-1">
This is 25% opacity primary text using utility class
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
                <a href="#colors" className="nav-link">
Colors
                </a>
              </li>
              <li className="nav-item">
                <a href="#opacity" className="nav-link">
Opacity
                </a>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a href="#how-it-works" className="nav-link">
How it works
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#example" className="nav-link">
Example
                    </a>
                  </li>
                </ul>
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
