'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Placeholder() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Placeholders
    </h2>

    <p className="text-body-tertiary lead mb-2">
Use loading placeholders for your components or pages to indicate something may still be loading.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/components/placeholders/" className="btn btn-link p-0"  target="_blank">
Placeholders on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
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
Examples
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
In the example below, we take a typical card component and recreate it with placeholders applied to create a “loading card”. Size and proportions are the same between the two.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#examples-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="examples-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="examples-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"d-flex justify-content-center\\\"> <div class=\\\"card overflow-hidden\\\" style=\\\"max-width: 20rem;\\\"> <div class=\\\"card-img-top jhj\\\"> <img class=\\\"img-fluid\\\" src=\\\"../../assets/img/generic/1.jpg\\\" alt=\\\"Card image cap\\\" /> </div> <div class=\\\"card-body\\\"> <h5 class=\\\"card-title\\\">Card title</h5> <p class=\\\"card-text\\\">Some quick example text to build on the card title and make up the bulk of the card's content.</p> <a class=\\\"btn btn-primary btn-sm\\\" href=\\\"#!\\\">Go somewhere</a> </div> </div> <div class=\\\"card overflow-hidden ms-3\\\" style=\\\"width: 20rem;\\\" aria-hidden=\\\"true\\\"> <div class=\\\"card-img-top\\\" style=\\\"width: 320px;height: 180px\\\"><span class=\\\"placeholder w-100 h-100\\\"></span></div> <div class=\\\"card-body\\\"> <h5 class=\\\"card-title placeholder-glow\\\"><span class=\\\"placeholder col-6\\\"></span></h5> <p class=\\\"card-text placeholder-glow\\\"> <span class=\\\"placeholder col-7\\\"></span> <span class=\\\"placeholder col-4\\\"></span> <span class=\\\"placeholder col-4\\\"></span> <span class=\\\"placeholder col-6\\\"></span> <span class=\\\"placeholder col-8\\\"></span> </p> <a class=\\\"btn btn-primary disabled placeholder col-6\\\" href=\\\"#\\\" tabindex=\\\"-1\\\"></a> </div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="d-flex justify-content-center">
                    <div className="card overflow-hidden" style={{"maxWidth":"20rem"} as CSSProperties}>
                      <div className="card-img-top jhj">
                        <PhoenixImage src="/assets/img/generic/1.jpg" alt="Card image cap" className="img-fluid" />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">
Card title
                        </h5>
                        <p className="card-text">
Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <a href="#!" className="btn btn-primary btn-sm">
Go somewhere
                        </a>
                      </div>
                    </div>
                    <div className="card overflow-hidden ms-3" style={{"width":"20rem"} as CSSProperties} aria-hidden="true">
                      <div className="card-img-top" style={{"width":"320px","height":"180px"} as CSSProperties}>
                        <span className="placeholder w-100 h-100">                        </span>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                          <span className="placeholder col-6">                          </span>
                        </h5>
                        <p className="card-text placeholder-glow">
                          <span className="placeholder col-7">                          </span>
                          <span className="placeholder col-4">                          </span>
                          <span className="placeholder col-4">                          </span>
                          <span className="placeholder col-6">                          </span>
                          <span className="placeholder col-8">                          </span>
                        </p>
                        <a href="#" className="btn btn-primary disabled placeholder col-6"  tabIndex={-1}>

                        </a>
                      </div>
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
Width
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
You can change the 
                      <code>
width
                      </code>
 through grid column classes, width utilities, or inline styles.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#width-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="width-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="width-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><span class=\\\"placeholder bg-quaternary col-6\\\"></span> <span class=\\\"placeholder bg-quaternary w-75\\\"></span> <span class=\\\"placeholder bg-quaternary\\\" style=\\\"width: 25%;\\\"></span></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <span className="placeholder bg-quaternary col-6">                  </span>
                  <span className="placeholder bg-quaternary w-75">                  </span>
                  <span className="placeholder bg-quaternary" style={{"width":"25%"} as CSSProperties}>                  </span>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-6" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Color
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
By default, the 
                      <code>
placeholder
                      </code>
 uses 
                      <code>
currentColor
                      </code>
. This can be overriden with a custom color or utility class.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#color-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="color-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="color-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><span class=\\\"placeholder col-12 bg-primary\\\"></span> <span class=\\\"placeholder col-12 bg-secondary\\\"></span> <span class=\\\"placeholder col-12 bg-success\\\"></span> <span class=\\\"placeholder col-12 bg-danger\\\"></span> <span class=\\\"placeholder col-12 bg-warning\\\"></span> <span class=\\\"placeholder col-12 bg-info\\\"></span> <span class=\\\"placeholder col-12 bg-body-highlight\\\"></span> <span class=\\\"placeholder col-12 bg-dark\\\"></span></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <span className="placeholder col-12 bg-primary">                  </span>
                  <span className="placeholder col-12 bg-secondary">                  </span>
                  <span className="placeholder col-12 bg-success">                  </span>
                  <span className="placeholder col-12 bg-danger">                  </span>
                  <span className="placeholder col-12 bg-warning">                  </span>
                  <span className="placeholder col-12 bg-info">                  </span>
                  <span className="placeholder col-12 bg-body-highlight">                  </span>
                  <span className="placeholder col-12 bg-dark">                  </span>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-6" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Sizing
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
The size of 
                      <code>
.placeholder
                      </code>
s are based on the typographic style of the parent element. Customize them with sizing modifiers: 
                      <code>
.placeholder-lg
                      </code>
, 
                      <code>
.placeholder-sm
                      </code>
, or 
                      <code>
.placeholder-xs
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
{"<code class=\"language-html\"><span class=\\\"placeholder bg-quaternary col-12 placeholder-lg\\\"></span> <span class=\\\"placeholder bg-quaternary col-12\\\"></span> <span class=\\\"placeholder bg-quaternary col-12 placeholder-sm\\\"></span> <span class=\\\"placeholder bg-quaternary col-12 placeholder-xs\\\"></span></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <span className="placeholder bg-quaternary col-12 placeholder-lg">                  </span>
                  <span className="placeholder bg-quaternary col-12">                  </span>
                  <span className="placeholder bg-quaternary col-12 placeholder-sm">                  </span>
                  <span className="placeholder bg-quaternary col-12 placeholder-xs">                  </span>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-6" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Animation
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Animate placeholders with 
                      <code>
.placeholder-glow
                      </code>
 or 
                      <code>
.placeholder-wave
                      </code>
 to better convey the perception of something being 
                      <em>
actively
                      </em>
 loaded.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#animation-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="animation-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="animation-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p class=\\\"placeholder-glow\\\"><span class=\\\"placeholder col-12\\\"></span></p> <p class=\\\"placeholder-wave\\\"><span class=\\\"placeholder col-12\\\"></span></p></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <p className="placeholder-glow">
                    <span className="placeholder col-12">                    </span>
                  </p>
                  <p className="placeholder-wave">
                    <span className="placeholder col-12">                    </span>
                  </p>
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
                <a href="#examples" className="nav-link">
Examples
                </a>
              </li>
              <li className="nav-item">
                <a href="#label" className="nav-link">
Width
                </a>
              </li>
              <li className="nav-item">
                <a href="#color" className="nav-link">
Color
                </a>
              </li>
              <li className="nav-item">
                <a href="#sizing" className="nav-link">
Sizing
                </a>
              </li>
              <li className="nav-item">
                <a href="#animation" className="nav-link">
Animation
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
