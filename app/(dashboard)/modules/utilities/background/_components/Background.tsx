'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Background() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Background
    </h2>

    <p className="text-body-tertiary lead mb-2">
Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/utilities/background/" className="btn btn-link p-0"  target="_blank">
Background on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="mb-9">
            <div className="card shadow-none border my-5" data-component-card id="doc-bg-color">
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Solid colors
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#solid-colors-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="solid-colors-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="solid-colors-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"row g-0\\\"> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 d-flex flex-center bg-primary false\\\" style=\\\"height: 180px\\\"> <pre class=\\\"text-center\\\"><code class=\\\"text-white\\\">.bg-primary </code><br/><code class=\\\"mt-2 d-dark-none text-white\\\">#3874ff</code></pre> </div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 d-flex flex-center bg-secondary false\\\" style=\\\"height: 180px\\\"> <pre class=\\\"text-center\\\"><code class=\\\"text-white\\\">.bg-secondary </code><br/><code class=\\\"mt-2 d-dark-none text-white\\\">#49525d</code></pre> </div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 d-flex flex-center bg-success false\\\" style=\\\"height: 180px\\\"> <pre class=\\\"text-center\\\"><code class=\\\"text-white\\\">.bg-success </code><br/><code class=\\\"mt-2 d-dark-none text-white\\\">#25b003</code></pre> </div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 d-flex flex-center bg-info false\\\" style=\\\"height: 180px\\\"> <pre class=\\\"text-center\\\"><code class=\\\"text-white\\\">.bg-info </code><br/><code class=\\\"mt-2 d-dark-none text-white\\\">#0097eb</code></pre> </div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 d-flex flex-center bg-warning false\\\" style=\\\"height: 180px\\\"> <pre class=\\\"text-center\\\"><code class=\\\"text-white\\\">.bg-warning </code><br/><code class=\\\"mt-2 d-dark-none text-white\\\">#e5780b</code></pre> </div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 d-flex flex-center bg-danger false\\\" style=\\\"height: 180px\\\"> <pre class=\\\"text-center\\\"><code class=\\\"text-white\\\">.bg-danger </code><br/><code class=\\\"mt-2 d-dark-none text-white\\\">#ec1f00</code></pre> </div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="row g-0">
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 d-flex flex-center bg-primary  false" style={{"height":"180px"} as CSSProperties}>
                        <pre className="text-center">
{"<code class=\"text-white\">.bg-primary </code><br/><code class=\"mt-2 d-dark-none text-white\">#3874ff</code>"}
                        </pre>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 d-flex flex-center bg-secondary  false" style={{"height":"180px"} as CSSProperties}>
                        <pre className="text-center">
{"<code class=\"text-white\">.bg-secondary </code><br/><code class=\"mt-2 d-dark-none text-white\">#49525d</code>"}
                        </pre>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 d-flex flex-center bg-success  false" style={{"height":"180px"} as CSSProperties}>
                        <pre className="text-center">
{"<code class=\"text-white\">.bg-success </code><br/><code class=\"mt-2 d-dark-none text-white\">#25b003</code>"}
                        </pre>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 d-flex flex-center bg-info  false" style={{"height":"180px"} as CSSProperties}>
                        <pre className="text-center">
{"<code class=\"text-white\">.bg-info </code><br/><code class=\"mt-2 d-dark-none text-white\">#0097eb</code>"}
                        </pre>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 d-flex flex-center bg-warning  false" style={{"height":"180px"} as CSSProperties}>
                        <pre className="text-center">
{"<code class=\"text-white\">.bg-warning </code><br/><code class=\"mt-2 d-dark-none text-white\">#e5780b</code>"}
                        </pre>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 d-flex flex-center bg-danger  false" style={{"height":"180px"} as CSSProperties}>
                        <pre className="text-center">
{"<code class=\"text-white\">.bg-danger </code><br/><code class=\"mt-2 d-dark-none text-white\">#ec1f00</code>"}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card id="doc-bg-body">
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Body colors
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#body-colors-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="body-colors-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="body-colors-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"row g-0\\\"> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 bg-body\\\" style=\\\"height: 180px\\\"><code class=\\\"text-body\\\">.bg-body</code></div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 bg-body-highlight\\\" style=\\\"height: 180px\\\"><code class=\\\"text-body\\\">.bg-body-highlight</code></div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 bg-body-secondary\\\" style=\\\"height: 180px\\\"><code class=\\\"text-body\\\">.bg-body-secondary</code></div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 bg-body-tertiary\\\" style=\\\"height: 180px\\\"><code class=\\\"text-body\\\">.bg-body-tertiary</code></div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 bg-body-quaternary\\\" style=\\\"height: 180px\\\"><code class=\\\"text-body\\\">.bg-body-quaternary</code></div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="row g-0">
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 bg-body" style={{"height":"180px"} as CSSProperties}>
                        <code className="text-body">
.bg-body
                        </code>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 bg-body-highlight" style={{"height":"180px"} as CSSProperties}>
                        <code className="text-body">
.bg-body-highlight
                        </code>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 bg-body-secondary" style={{"height":"180px"} as CSSProperties}>
                        <code className="text-body">
.bg-body-secondary
                        </code>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 bg-body-tertiary" style={{"height":"180px"} as CSSProperties}>
                        <code className="text-body">
.bg-body-tertiary
                        </code>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 bg-body-quaternary" style={{"height":"180px"} as CSSProperties}>
                        <code className="text-body">
.bg-body-quaternary
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card id="doc-bg-subtle">
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Subtle colors
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#subtle-colors-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="subtle-colors-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="subtle-colors-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"row g-0\\\"> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 bg-primary-subtle\\\" style=\\\"height: 180px\\\"><code class=\\\"text-primary-emphasis\\\">.text-primary-emphasis</code><br /><code class=\\\"text-primary-emphasis\\\">.bg-primary-subtle</code></div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 bg-secondary-subtle\\\" style=\\\"height: 180px\\\"><code class=\\\"text-secondary-emphasis\\\">.text-secondary-emphasis</code><br /><code class=\\\"text-secondary-emphasis\\\">.bg-secondary-subtle</code></div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 bg-success-subtle\\\" style=\\\"height: 180px\\\"><code class=\\\"text-success-emphasis\\\">.text-success-emphasis</code><br /><code class=\\\"text-success-emphasis\\\">.bg-success-subtle</code></div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 bg-info-subtle\\\" style=\\\"height: 180px\\\"><code class=\\\"text-info-emphasis\\\">.text-info-emphasis</code><br /><code class=\\\"text-info-emphasis\\\">.bg-info-subtle</code></div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 bg-warning-subtle\\\" style=\\\"height: 180px\\\"><code class=\\\"text-warning-emphasis\\\">.text-warning-emphasis</code><br /><code class=\\\"text-warning-emphasis\\\">.bg-warning-subtle</code></div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 bg-danger-subtle\\\" style=\\\"height: 180px\\\"><code class=\\\"text-danger-emphasis\\\">.text-danger-emphasis</code><br /><code class=\\\"text-danger-emphasis\\\">.bg-danger-subtle</code></div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="row g-0">
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 bg-primary-subtle" style={{"height":"180px"} as CSSProperties}>
                        <code className="text-primary-emphasis">
.text-primary-emphasis
                        </code>
                        <br />
                        <code className="text-primary-emphasis">
.bg-primary-subtle
                        </code>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 bg-secondary-subtle" style={{"height":"180px"} as CSSProperties}>
                        <code className="text-secondary-emphasis">
.text-secondary-emphasis
                        </code>
                        <br />
                        <code className="text-secondary-emphasis">
.bg-secondary-subtle
                        </code>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 bg-success-subtle" style={{"height":"180px"} as CSSProperties}>
                        <code className="text-success-emphasis">
.text-success-emphasis
                        </code>
                        <br />
                        <code className="text-success-emphasis">
.bg-success-subtle
                        </code>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 bg-info-subtle" style={{"height":"180px"} as CSSProperties}>
                        <code className="text-info-emphasis">
.text-info-emphasis
                        </code>
                        <br />
                        <code className="text-info-emphasis">
.bg-info-subtle
                        </code>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 bg-warning-subtle" style={{"height":"180px"} as CSSProperties}>
                        <code className="text-warning-emphasis">
.text-warning-emphasis
                        </code>
                        <br />
                        <code className="text-warning-emphasis">
.bg-warning-subtle
                        </code>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 bg-danger-subtle" style={{"height":"180px"} as CSSProperties}>
                        <code className="text-danger-emphasis">
.text-danger-emphasis
                        </code>
                        <br />
                        <code className="text-danger-emphasis">
.bg-danger-subtle
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card id="doc-bg-gradients">
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Gradients
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#gradients-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="gradients-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="gradients-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"row g-0\\\"> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 d-flex flex-center bg-primary bg-gradient false\\\" style=\\\"height: 180px\\\"> <pre class=\\\"text-center\\\"><code class=\\\"text-white\\\">.bg-gradient</code><br/><code class=\\\"text-white\\\">.bg-primary </code><br/></pre> </div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 d-flex flex-center bg-secondary bg-gradient false\\\" style=\\\"height: 180px\\\"> <pre class=\\\"text-center\\\"><code class=\\\"text-white\\\">.bg-gradient</code><br/><code class=\\\"text-white\\\">.bg-secondary </code><br/></pre> </div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 d-flex flex-center bg-success bg-gradient false\\\" style=\\\"height: 180px\\\"> <pre class=\\\"text-center\\\"><code class=\\\"text-white\\\">.bg-gradient</code><br/><code class=\\\"text-white\\\">.bg-success </code><br/></pre> </div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 d-flex flex-center bg-info bg-gradient false\\\" style=\\\"height: 180px\\\"> <pre class=\\\"text-center\\\"><code class=\\\"text-white\\\">.bg-gradient</code><br/><code class=\\\"text-white\\\">.bg-info </code><br/></pre> </div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 d-flex flex-center bg-warning bg-gradient false\\\" style=\\\"height: 180px\\\"> <pre class=\\\"text-center\\\"><code class=\\\"text-white\\\">.bg-gradient</code><br/><code class=\\\"text-white\\\">.bg-warning </code><br/></pre> </div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 d-flex flex-center bg-danger bg-gradient false\\\" style=\\\"height: 180px\\\"> <pre class=\\\"text-center\\\"><code class=\\\"text-white\\\">.bg-gradient</code><br/><code class=\\\"text-white\\\">.bg-danger </code><br/></pre> </div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="row g-0">
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 d-flex flex-center bg-primary bg-gradient false" style={{"height":"180px"} as CSSProperties}>
                        <pre className="text-center">
{"<code class=\"text-white\">.bg-gradient</code><br/><code class=\"text-white\">.bg-primary </code><br/>"}
                        </pre>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 d-flex flex-center bg-secondary bg-gradient false" style={{"height":"180px"} as CSSProperties}>
                        <pre className="text-center">
{"<code class=\"text-white\">.bg-gradient</code><br/><code class=\"text-white\">.bg-secondary </code><br/>"}
                        </pre>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 d-flex flex-center bg-success bg-gradient false" style={{"height":"180px"} as CSSProperties}>
                        <pre className="text-center">
{"<code class=\"text-white\">.bg-gradient</code><br/><code class=\"text-white\">.bg-success </code><br/>"}
                        </pre>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 d-flex flex-center bg-info bg-gradient false" style={{"height":"180px"} as CSSProperties}>
                        <pre className="text-center">
{"<code class=\"text-white\">.bg-gradient</code><br/><code class=\"text-white\">.bg-info </code><br/>"}
                        </pre>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 d-flex flex-center bg-warning bg-gradient false" style={{"height":"180px"} as CSSProperties}>
                        <pre className="text-center">
{"<code class=\"text-white\">.bg-gradient</code><br/><code class=\"text-white\">.bg-warning </code><br/>"}
                        </pre>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 d-flex flex-center bg-danger bg-gradient false" style={{"height":"180px"} as CSSProperties}>
                        <pre className="text-center">
{"<code class=\"text-white\">.bg-gradient</code><br/><code class=\"text-white\">.bg-danger </code><br/>"}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card id="doc-bg-grays">
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Grays
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#grays-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="grays-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="grays-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"row g-0\\\"> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 d-flex flex-center bg-gray-1100 false\\\" style=\\\"height: 180px\\\"> <pre class=\\\"text-center\\\"><code class=\\\"text-gray-100\\\">.bg-gray-1100 </code><br/><code class=\\\"mt-2 d-dark-none text-gray-100\\\">#15181b</code></pre> </div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 d-flex flex-center bg-gray-1000 false\\\" style=\\\"height: 180px\\\"> <pre class=\\\"text-center\\\"><code class=\\\"text-gray-100\\\">.bg-gray-1000 </code><br/><code class=\\\"mt-2 d-dark-none text-gray-100\\\">#2b3036</code></pre> </div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 d-flex flex-center bg-gray-900 false\\\" style=\\\"height: 180px\\\"> <pre class=\\\"text-center\\\"><code class=\\\"text-gray-100\\\">.bg-gray-900 </code><br/><code class=\\\"mt-2 d-dark-none text-gray-100\\\">#49525d</code></pre> </div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 d-flex flex-center bg-gray-800 false\\\" style=\\\"height: 180px\\\"> <pre class=\\\"text-center\\\"><code class=\\\"text-gray-100\\\">.bg-gray-800 </code><br/><code class=\\\"mt-2 d-dark-none text-gray-100\\\">#5a6573</code></pre> </div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 d-flex flex-center bg-gray-700 false\\\" style=\\\"height: 180px\\\"> <pre class=\\\"text-center\\\"><code class=\\\"text-gray-100\\\">.bg-gray-700 </code><br/><code class=\\\"mt-2 d-dark-none text-gray-100\\\">#6d7a8a</code></pre> </div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 d-flex flex-center bg-gray-600 false\\\" style=\\\"height: 180px\\\"> <pre class=\\\"text-center\\\"><code class=\\\"text-gray-100\\\">.bg-gray-600 </code><br/><code class=\\\"mt-2 d-dark-none text-gray-100\\\">#84909e</code></pre> </div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 d-flex flex-center bg-gray-500 false\\\" style=\\\"height: 180px\\\"> <pre class=\\\"text-center\\\"><code class=\\\"text-gray-100\\\">.bg-gray-500 </code><br/><code class=\\\"mt-2 d-dark-none text-gray-100\\\">#9aa3af</code></pre> </div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 d-flex flex-center bg-gray-400 false\\\" style=\\\"height: 180px\\\"> <pre class=\\\"text-center\\\"><code class=\\\"text-gray-100\\\">.bg-gray-400 </code><br/><code class=\\\"mt-2 d-dark-none text-gray-100\\\">#b1b9c2</code></pre> </div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 d-flex flex-center bg-gray-300 false\\\" style=\\\"height: 180px\\\"> <pre class=\\\"text-center\\\"><code class=\\\"text-body-emphasis\\\">.bg-gray-300 </code><br/><code class=\\\"mt-2 d-dark-none text-body-emphasis\\\">#e2e5e9</code></pre> </div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 d-flex flex-center bg-gray-200 border\\\" style=\\\"height: 180px\\\"> <pre class=\\\"text-center\\\"><code class=\\\"text-body-emphasis\\\">.bg-gray-200 </code><br/><code class=\\\"mt-2 d-dark-none text-body-emphasis\\\">#f1f2f4</code></pre> </div> </div> <div class=\\\"col-6 col-sm-4 col-lg-3\\\"> <div class=\\\"p-3 d-flex flex-center bg-gray-100 border\\\" style=\\\"height: 180px\\\"> <pre class=\\\"text-center\\\"><code class=\\\"text-body-emphasis\\\">.bg-gray-100 </code><br/><code class=\\\"mt-2 d-dark-none text-body-emphasis\\\">#f6f7f8</code></pre> </div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="row g-0">
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 d-flex flex-center bg-gray-1100  false" style={{"height":"180px"} as CSSProperties}>
                        <pre className="text-center">
{"<code class=\"text-gray-100\">.bg-gray-1100 </code><br/><code class=\"mt-2 d-dark-none text-gray-100\">#15181b</code>"}
                        </pre>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 d-flex flex-center bg-gray-1000  false" style={{"height":"180px"} as CSSProperties}>
                        <pre className="text-center">
{"<code class=\"text-gray-100\">.bg-gray-1000 </code><br/><code class=\"mt-2 d-dark-none text-gray-100\">#2b3036</code>"}
                        </pre>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 d-flex flex-center bg-gray-900  false" style={{"height":"180px"} as CSSProperties}>
                        <pre className="text-center">
{"<code class=\"text-gray-100\">.bg-gray-900 </code><br/><code class=\"mt-2 d-dark-none text-gray-100\">#49525d</code>"}
                        </pre>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 d-flex flex-center bg-gray-800  false" style={{"height":"180px"} as CSSProperties}>
                        <pre className="text-center">
{"<code class=\"text-gray-100\">.bg-gray-800 </code><br/><code class=\"mt-2 d-dark-none text-gray-100\">#5a6573</code>"}
                        </pre>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 d-flex flex-center bg-gray-700  false" style={{"height":"180px"} as CSSProperties}>
                        <pre className="text-center">
{"<code class=\"text-gray-100\">.bg-gray-700 </code><br/><code class=\"mt-2 d-dark-none text-gray-100\">#6d7a8a</code>"}
                        </pre>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 d-flex flex-center bg-gray-600  false" style={{"height":"180px"} as CSSProperties}>
                        <pre className="text-center">
{"<code class=\"text-gray-100\">.bg-gray-600 </code><br/><code class=\"mt-2 d-dark-none text-gray-100\">#84909e</code>"}
                        </pre>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 d-flex flex-center bg-gray-500  false" style={{"height":"180px"} as CSSProperties}>
                        <pre className="text-center">
{"<code class=\"text-gray-100\">.bg-gray-500 </code><br/><code class=\"mt-2 d-dark-none text-gray-100\">#9aa3af</code>"}
                        </pre>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 d-flex flex-center bg-gray-400  false" style={{"height":"180px"} as CSSProperties}>
                        <pre className="text-center">
{"<code class=\"text-gray-100\">.bg-gray-400 </code><br/><code class=\"mt-2 d-dark-none text-gray-100\">#b1b9c2</code>"}
                        </pre>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 d-flex flex-center bg-gray-300  false" style={{"height":"180px"} as CSSProperties}>
                        <pre className="text-center">
{"<code class=\"text-body-emphasis\">.bg-gray-300 </code><br/><code class=\"mt-2 d-dark-none text-body-emphasis\">#e2e5e9</code>"}
                        </pre>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 d-flex flex-center bg-gray-200  border" style={{"height":"180px"} as CSSProperties}>
                        <pre className="text-center">
{"<code class=\"text-body-emphasis\">.bg-gray-200 </code><br/><code class=\"mt-2 d-dark-none text-body-emphasis\">#f1f2f4</code>"}
                        </pre>
                      </div>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3">
                      <div className="p-3 d-flex flex-center bg-gray-100  border" style={{"height":"180px"} as CSSProperties}>
                        <pre className="text-center">
{"<code class=\"text-body-emphasis\">.bg-gray-100 </code><br/><code class=\"mt-2 d-dark-none text-body-emphasis\">#f6f7f8</code>"}
                        </pre>
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
                <a href="#solid-colors" className="nav-link">
Solid colors
                </a>
              </li>
              <li className="nav-item">
                <a href="#grays" className="nav-link">
Grays
                </a>
              </li>
              <li className="nav-item">
                <a href="#gradients" className="nav-link">
Gradients
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
