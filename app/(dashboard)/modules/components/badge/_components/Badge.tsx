'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Badge() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Badges
    </h2>

    <p className="text-body-tertiary lead mb-2">
Documentation and examples for badges, our small count and labeling component.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/components/badge/" className="btn btn-link p-0"  target="_blank">
Badges on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
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
Phoenix Badges
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#phoenix-badges-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="phoenix-badges-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="phoenix-badges-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><span class=\\\"badge badge-phoenix badge-phoenix-primary\\\">Primary</span> <span class=\\\"badge badge-phoenix badge-phoenix-secondary\\\">Secondary</span> <span class=\\\"badge badge-phoenix badge-phoenix-success\\\">Success</span> <span class=\\\"badge badge-phoenix badge-phoenix-info\\\">Info</span> <span class=\\\"badge badge-phoenix badge-phoenix-warning\\\">Warning</span> <span class=\\\"badge badge-phoenix badge-phoenix-danger\\\">Danger</span></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <span className="badge badge-phoenix badge-phoenix-primary">
Primary
                  </span>
                  <span className="badge badge-phoenix badge-phoenix-secondary">
Secondary
                  </span>
                  <span className="badge badge-phoenix badge-phoenix-success">
Success
                  </span>
                  <span className="badge badge-phoenix badge-phoenix-info">
Info
                  </span>
                  <span className="badge badge-phoenix badge-phoenix-warning">
Warning
                  </span>
                  <span className="badge badge-phoenix badge-phoenix-danger">
Danger
                  </span>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Phoenix Badge with icons
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#phoenix-badge-with-icons-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="phoenix-badge-with-icons-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="phoenix-badge-with-icons-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><span class=\\\"badge badge-phoenix fs-10 badge-phoenix-primary\\\"><span class=\\\"badge-label\\\">Primary</span><span class=\\\"ms-1\\\" data-feather=\\\"package\\\" style=\\\"height:12.8px;width:12.8px;\\\"></span></span> <span class=\\\"badge badge-phoenix fs-10 badge-phoenix-secondary\\\"><span class=\\\"badge-label\\\">Secondary</span><span class=\\\"ms-1\\\" data-feather=\\\"plus\\\" style=\\\"height:12.8px;width:12.8px;\\\"></span></span> <span class=\\\"badge badge-phoenix fs-10 badge-phoenix-success\\\"><span class=\\\"badge-label\\\">Success</span><span class=\\\"ms-1\\\" data-feather=\\\"check\\\" style=\\\"height:12.8px;width:12.8px;\\\"></span></span> <span class=\\\"badge badge-phoenix fs-10 badge-phoenix-info\\\"><span class=\\\"badge-label\\\">Info</span><span class=\\\"ms-1\\\" data-feather=\\\"info\\\" style=\\\"height:12.8px;width:12.8px;\\\"></span></span> <span class=\\\"badge badge-phoenix fs-10 badge-phoenix-warning\\\"><span class=\\\"badge-label\\\">Warning</span><span class=\\\"ms-1\\\" data-feather=\\\"alert-octagon\\\" style=\\\"height:12.8px;width:12.8px;\\\"></span></span> <span class=\\\"badge badge-phoenix fs-10 badge-phoenix-danger\\\"><span class=\\\"badge-label\\\">Danger</span><span class=\\\"ms-1\\\" data-feather=\\\"x\\\" style=\\\"height:12.8px;width:12.8px;\\\"></span></span></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <span className="badge badge-phoenix fs-10 badge-phoenix-primary">
                    <span className="badge-label">
Primary
                    </span>
                    <span className="ms-1" data-feather={"package"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                    </span>
                  </span>
                  <span className="badge badge-phoenix fs-10 badge-phoenix-secondary">
                    <span className="badge-label">
Secondary
                    </span>
                    <span className="ms-1" data-feather={"plus"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                    </span>
                  </span>
                  <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                    <span className="badge-label">
Success
                    </span>
                    <span className="ms-1" data-feather={"check"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                    </span>
                  </span>
                  <span className="badge badge-phoenix fs-10 badge-phoenix-info">
                    <span className="badge-label">
Info
                    </span>
                    <span className="ms-1" data-feather={"info"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                    </span>
                  </span>
                  <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                    <span className="badge-label">
Warning
                    </span>
                    <span className="ms-1" data-feather={"alert-octagon"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                    </span>
                  </span>
                  <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
                    <span className="badge-label">
Danger
                    </span>
                    <span className="ms-1" data-feather={"x"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Background Color
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Use our background utility classes to quickly change the appearance of a badge. Please note that when using Bootstrap’s default 
                      <code>
.bg-body-highlight
                      </code>
, you’ll likely need a text color utility like 
                      <code>
.text-dark
                      </code>
 for proper styling. This is because background utilities do not set anything but 
                      <code>
background-color
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
                      <a href="#background-color-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="background-color-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="background-color-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><span class=\\\"badge text-bg-primary\\\">Primary</span> <span class=\\\"badge text-bg-secondary\\\">Secondary</span> <span class=\\\"badge text-bg-success\\\">Success</span> <span class=\\\"badge text-bg-info\\\">Info</span> <span class=\\\"badge text-bg-warning\\\">Warning</span> <span class=\\\"badge text-bg-danger\\\">Danger</span></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <span className="badge text-bg-primary">
Primary
                  </span>
                  <span className="badge text-bg-secondary">
Secondary
                  </span>
                  <span className="badge text-bg-success">
Success
                  </span>
                  <span className="badge text-bg-info">
Info
                  </span>
                  <span className="badge text-bg-warning">
Warning
                  </span>
                  <span className="badge text-bg-danger">
Danger
                  </span>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Buttons
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Badges scale to match the size of the immediate parent element by using relative font sizing and em units. As of v5, badges no longer have focus or hover styles for links.
                    </p>
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
{"<code class=\"language-html\"><button class=\\\"btn btn-primary d-flex align-items-center\\\" type=\\\"button\\\">Notifications <span class=\\\"badge bg-primary-dark ms-2\\\">4</span></button></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <button className="btn btn-primary d-flex align-items-center" type="button">
Notifications 
                    <span className="badge bg-primary-dark ms-2">
4
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Positioned
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Use utilities to modify a 
                      <code>
.badge
                      </code>
 and position it in the corner of a link or button.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#positioned-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="positioned-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="positioned-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><button class=\\\"btn btn-primary position-relative\\\" type=\\\"button\\\"> Inbox<span class=\\\"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary-dark\\\">99+<span class=\\\"visually-hidden\\\">unread messages</span></span> </button></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <button className="btn btn-primary position-relative" type="button">
 Inbox
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary-dark">
99+
                      <span className="visually-hidden">
unread messages
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Examples
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Badges scale to match the size of the immediate parent element by using relative font sizing and em units. As of v5, badges no longer have focus or hover styles for links.
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
{"<code class=\"language-html\"><h1>Example heading <span class=\\\"badge text-bg-secondary\\\">New</span></h1> <h2>Example heading <span class=\\\"badge text-bg-secondary\\\">New</span></h2> <h3>Example heading <span class=\\\"badge text-bg-secondary\\\">New</span></h3> <h4>Example heading <span class=\\\"badge text-bg-secondary\\\">New</span></h4> <h5>Example heading <span class=\\\"badge text-bg-secondary\\\">New</span></h5> <h6>Example heading <span class=\\\"badge text-bg-secondary\\\">New</span></h6></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <h1>
Example heading 
                    <span className="badge text-bg-secondary">
New
                    </span>
                  </h1>
                  <h2>
Example heading 
                    <span className="badge text-bg-secondary">
New
                    </span>
                  </h2>
                  <h3>
Example heading 
                    <span className="badge text-bg-secondary">
New
                    </span>
                  </h3>
                  <h4>
Example heading 
                    <span className="badge text-bg-secondary">
New
                    </span>
                  </h4>
                  <h5>
Example heading 
                    <span className="badge text-bg-secondary">
New
                    </span>
                  </h5>
                  <h6>
Example heading 
                    <span className="badge text-bg-secondary">
New
                    </span>
                  </h6>
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
                <a href="#buttons" className="nav-link">
Buttons
                </a>
              </li>
              <li className="nav-item">
                <a href="#positioned" className="nav-link">
Positioned
                </a>
              </li>
              <li className="nav-item">
                <a href="#background-color" className="nav-link">
Background Color
                </a>
              </li>
              <li className="nav-item">
                <a href="#pill-badges" className="nav-link">
Pill Badges
                </a>
              </li>
              <li className="nav-item">
                <a href="#badge-with-icons" className="nav-link">
Badge with icons
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
