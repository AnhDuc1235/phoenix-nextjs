'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Button() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Buttons
    </h2>

    <p className="text-body-tertiary lead mb-2">
Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/components/buttons/" className="btn btn-link p-0"  target="_blank">
Buttons on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
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
Phoenix Buttons
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#phoenix-buttons-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="phoenix-buttons-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="phoenix-buttons-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><button class=\\\"btn btn-phoenix-primary me-1 mb-1\\\" type=\\\"button\\\">Primary</button> <button class=\\\"btn btn-phoenix-secondary me-1 mb-1\\\" type=\\\"button\\\">Secondary</button> <button class=\\\"btn btn-phoenix-success me-1 mb-1\\\" type=\\\"button\\\">Success</button> <button class=\\\"btn btn-phoenix-danger me-1 mb-1\\\" type=\\\"button\\\">Danger</button> <button class=\\\"btn btn-phoenix-warning me-1 mb-1\\\" type=\\\"button\\\">Warning</button> <button class=\\\"btn btn-phoenix-info me-1 mb-1\\\" type=\\\"button\\\">Info</button></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <button className="btn btn-phoenix-primary me-1 mb-1" type="button">
Primary
                  </button>
                  <button className="btn btn-phoenix-secondary me-1 mb-1" type="button">
Secondary
                  </button>
                  <button className="btn btn-phoenix-success me-1 mb-1" type="button">
Success
                  </button>
                  <button className="btn btn-phoenix-danger me-1 mb-1" type="button">
Danger
                  </button>
                  <button className="btn btn-phoenix-warning me-1 mb-1" type="button">
Warning
                  </button>
                  <button className="btn btn-phoenix-info me-1 mb-1" type="button">
Info
                  </button>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Solid Buttons
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#solid-buttons-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="solid-buttons-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="solid-buttons-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><button class=\\\"btn btn-primary me-1 mb-1\\\" type=\\\"button\\\">Primary</button> <button class=\\\"btn btn-secondary me-1 mb-1\\\" type=\\\"button\\\">Secondary</button> <button class=\\\"btn btn-success me-1 mb-1\\\" type=\\\"button\\\">Success</button> <button class=\\\"btn btn-danger me-1 mb-1\\\" type=\\\"button\\\">Danger</button> <button class=\\\"btn btn-warning me-1 mb-1\\\" type=\\\"button\\\">Warning</button> <button class=\\\"btn btn-info me-1 mb-1\\\" type=\\\"button\\\">Info</button> <button class=\\\"btn btn-link me-1 mb-1\\\" type=\\\"button\\\">Link</button></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <button className="btn btn-primary me-1 mb-1" type="button">
Primary
                  </button>
                  <button className="btn btn-secondary me-1 mb-1" type="button">
Secondary
                  </button>
                  <button className="btn btn-success me-1 mb-1" type="button">
Success
                  </button>
                  <button className="btn btn-danger me-1 mb-1" type="button">
Danger
                  </button>
                  <button className="btn btn-warning me-1 mb-1" type="button">
Warning
                  </button>
                  <button className="btn btn-info me-1 mb-1" type="button">
Info
                  </button>
                  <button className="btn btn-link me-1 mb-1" type="button">
Link
                  </button>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Subtle Buttons
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#subtle-buttons-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="subtle-buttons-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="subtle-buttons-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><button class=\\\"btn btn-subtle-primary me-1 mb-1\\\" type=\\\"button\\\">Primary</button> <button class=\\\"btn btn-subtle-secondary me-1 mb-1\\\" type=\\\"button\\\">Secondary</button> <button class=\\\"btn btn-subtle-success me-1 mb-1\\\" type=\\\"button\\\">Success</button> <button class=\\\"btn btn-subtle-danger me-1 mb-1\\\" type=\\\"button\\\">Danger</button> <button class=\\\"btn btn-subtle-warning me-1 mb-1\\\" type=\\\"button\\\">Warning</button> <button class=\\\"btn btn-subtle-info me-1 mb-1\\\" type=\\\"button\\\">Info</button></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <button className="btn btn-subtle-primary me-1 mb-1" type="button">
Primary
                  </button>
                  <button className="btn btn-subtle-secondary me-1 mb-1" type="button">
Secondary
                  </button>
                  <button className="btn btn-subtle-success me-1 mb-1" type="button">
Success
                  </button>
                  <button className="btn btn-subtle-danger me-1 mb-1" type="button">
Danger
                  </button>
                  <button className="btn btn-subtle-warning me-1 mb-1" type="button">
Warning
                  </button>
                  <button className="btn btn-subtle-info me-1 mb-1" type="button">
Info
                  </button>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Outline Buttons
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the 
                      <code>
.btn-outline-*
                      </code>
 ones to remove all background images and colors on any button.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#outline-buttons-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="outline-buttons-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="outline-buttons-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><button class=\\\"btn btn-outline-primary me-1 mb-1\\\" type=\\\"button\\\">Primary</button> <button class=\\\"btn btn-outline-secondary me-1 mb-1\\\" type=\\\"button\\\">Secondary</button> <button class=\\\"btn btn-outline-success me-1 mb-1\\\" type=\\\"button\\\">Success</button> <button class=\\\"btn btn-outline-danger me-1 mb-1\\\" type=\\\"button\\\">Danger</button> <button class=\\\"btn btn-outline-warning me-1 mb-1\\\" type=\\\"button\\\">Warning</button> <button class=\\\"btn btn-outline-info me-1 mb-1\\\" type=\\\"button\\\">Info</button></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <button className="btn btn-outline-primary me-1 mb-1" type="button">
Primary
                  </button>
                  <button className="btn btn-outline-secondary me-1 mb-1" type="button">
Secondary
                  </button>
                  <button className="btn btn-outline-success me-1 mb-1" type="button">
Success
                  </button>
                  <button className="btn btn-outline-danger me-1 mb-1" type="button">
Danger
                  </button>
                  <button className="btn btn-outline-warning me-1 mb-1" type="button">
Warning
                  </button>
                  <button className="btn btn-outline-info me-1 mb-1" type="button">
Info
                  </button>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Close Buttons
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Provide an option to dismiss or close a component with 
                      <code>
.btn-close
                      </code>
. Default styling is limited, but highly customizable. Modify the Sass variables to replace the default 
                      <code>
background-image
                      </code>
. 
                      <strong>
Be sure to include text for screen readers
                      </strong>
, as we’ve done with 
                      <code>
aria-label
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
                      <a href="#close-buttons-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="close-buttons-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="close-buttons-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><button class=\\\"btn-close\\\" type=\\\"button\\\" aria-label=\\\"Close\\\"></button> <button class=\\\"btn-close\\\" type=\\\"button\\\" disabled=\\\"\\\" aria-label=\\\"Close\\\"></button></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <button className="btn-close" type="button" aria-label="Close">                  </button>
                  <button className="btn-close" type="button" disabled aria-label="Close">                  </button>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Close buttons white variant
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Add 
                      <code>
data-bs-theme="dark"
                      </code>
 to the 
                      <code>
.btn-close
                      </code>
 class, or to its parent element to invert the close button. This uses 
                      <code>
filter
                      </code>
 property to invert the 
                      <code>
background-image
                      </code>
 without overriding its value..
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#close-buttons-white-variant-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="close-buttons-white-variant-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="close-buttons-white-variant-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"bg-body-highlight rounded-1 p-3\\\" data-bs-theme=\\\"dark\\\"> <button class=\\\"btn-close\\\" type=\\\"button\\\" aria-label=\\\"Close\\\"></button> <button class=\\\"btn-close\\\" type=\\\"button\\\" disabled=\\\"\\\" aria-label=\\\"Close\\\"></button> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="bg-body-highlight rounded-1 p-3" data-bs-theme={"dark"}>
                    <button className="btn-close" type="button" aria-label="Close">                    </button>
                    <button className="btn-close" type="button" disabled aria-label="Close">                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Button Sizes
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Fancy larger or smaller buttons? Add 
                      <code>
.btn-lg
                      </code>
 or 
                      <code>
.btn-sm
                      </code>
 for additional sizes.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#button-sizes-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="button-sizes-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="button-sizes-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><button class=\\\"btn btn-primary btn-sm me-1 mb-1\\\" type=\\\"button\\\">Request Payout</button> <button class=\\\"btn btn-primary me-1 mb-1\\\" type=\\\"button\\\">Request Payout</button> <button class=\\\"btn btn-primary btn-lg me-1 mb-1\\\" type=\\\"button\\\">Request Payout</button></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <button className="btn btn-primary btn-sm me-1 mb-1" type="button">
Request Payout
                  </button>
                  <button className="btn btn-primary me-1 mb-1" type="button">
Request Payout
                  </button>
                  <button className="btn btn-primary btn-lg me-1 mb-1" type="button">
Request Payout
                  </button>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Button Capsule
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#button-capsule-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="button-capsule-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="button-capsule-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><button class=\\\"btn btn-phoenix-secondary rounded-pill me-1 mb-1\\\" type=\\\"button\\\">Example </button> <button class=\\\"btn btn-phoenix-secondary rounded-pill me-1 mb-1\\\" type=\\\"button\\\"> <span class=\\\"fas fa-align-left me-2\\\" data-fa-transform=\\\"shrink-3\\\"></span>Icon Left </button> <button class=\\\"btn btn-phoenix-secondary rounded-pill me-1 mb-1\\\" type=\\\"button\\\"> Icon Right <span class=\\\"fas fa-align-right ms-2\\\" data-fa-transform=\\\"shrink-3\\\"></span> </button> <button class=\\\"btn btn-outline-primary rounded-pill me-1 mb-1\\\" type=\\\"button\\\">Outline</button> <hr /> <button class=\\\"btn btn-sm btn-phoenix-secondary rounded-pill me-1 mb-1\\\" type=\\\"button\\\">Capsule Small</button> <button class=\\\"btn btn-phoenix-secondary rounded-pill me-1 mb-1\\\" type=\\\"button\\\">Capsule Regular</button> <button class=\\\"btn btn-lg btn-phoenix-secondary rounded-pill me-1 mb-1\\\" type=\\\"button\\\">Capsule Large</button></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <button className="btn btn-phoenix-secondary rounded-pill me-1 mb-1" type="button">
Example 
                  </button>
                  <button className="btn btn-phoenix-secondary rounded-pill me-1 mb-1" type="button">
                    <span className="fas fa-align-left me-2" data-fa-transform={"shrink-3"}>                    </span>
Icon Left 
                  </button>
                  <button className="btn btn-phoenix-secondary rounded-pill me-1 mb-1" type="button">
 Icon Right 
                    <span className="fas fa-align-right ms-2" data-fa-transform={"shrink-3"}>                    </span>
                  </button>
                  <button className="btn btn-outline-primary rounded-pill me-1 mb-1" type="button">
Outline
                  </button>
                  <hr />
                  <button className="btn btn-sm btn-phoenix-secondary rounded-pill me-1 mb-1" type="button">
Capsule Small
                  </button>
                  <button className="btn btn-phoenix-secondary rounded-pill me-1 mb-1" type="button">
Capsule Regular
                  </button>
                  <button className="btn btn-lg btn-phoenix-secondary rounded-pill me-1 mb-1" type="button">
Capsule Large
                  </button>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Button Group
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#button-group-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="button-group-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="button-group-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"btn-group\\\" role=\\\"group\\\" aria-label=\\\"Basic example\\\"> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">Left</button> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">Middle</button> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">Right</button> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="btn-group" role="group" aria-label="Basic example">
                    <button className="btn btn-secondary" type="button">
Left
                    </button>
                    <button className="btn btn-secondary" type="button">
Middle
                    </button>
                    <button className="btn btn-secondary" type="button">
Right
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Button Toolbar
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#button-toolbar-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="button-toolbar-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="button-toolbar-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"btn-toolbar\\\" role=\\\"toolbar\\\" aria-label=\\\"Toolbar with button groups\\\"> <div class=\\\"btn-group me-2 mb-2\\\" role=\\\"group\\\" aria-label=\\\"First group\\\"> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">1</button> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">2</button> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">3</button> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">4</button> </div> <div class=\\\"btn-group mb-2 me-2\\\" role=\\\"group\\\" aria-label=\\\"Second group\\\"> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">5</button> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">6</button> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">7</button> </div> <div class=\\\"btn-group mb-2\\\" role=\\\"group\\\" aria-label=\\\"Third group\\\"> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">8</button> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group me-2 mb-2" role="group" aria-label="First group">
                      <button className="btn btn-secondary" type="button">
1
                      </button>
                      <button className="btn btn-secondary" type="button">
2
                      </button>
                      <button className="btn btn-secondary" type="button">
3
                      </button>
                      <button className="btn btn-secondary" type="button">
4
                      </button>
                    </div>
                    <div className="btn-group mb-2 me-2" role="group" aria-label="Second group">
                      <button className="btn btn-secondary" type="button">
5
                      </button>
                      <button className="btn btn-secondary" type="button">
6
                      </button>
                      <button className="btn btn-secondary" type="button">
7
                      </button>
                    </div>
                    <div className="btn-group mb-2" role="group" aria-label="Third group">
                      <button className="btn btn-secondary" type="button">
8
                      </button>
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
Button toolbar with input group
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#button-toolbar-with-input-group-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="button-toolbar-with-input-group-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="button-toolbar-with-input-group-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"btn-toolbar mb-3\\\" role=\\\"toolbar\\\" aria-label=\\\"Toolbar with button groups\\\"> <div class=\\\"btn-group mb-2 me-2\\\" role=\\\"group\\\" aria-label=\\\"First group\\\"> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">1</button> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">2</button> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">3</button> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">4</button> </div> <div class=\\\"input-group mb-2\\\"> <div class=\\\"input-group-text\\\" id=\\\"btnGroupAddon\\\">@</div> <input class=\\\"form-control\\\" type=\\\"text\\\" placeholder=\\\"Input group example\\\" aria-label=\\\"Input group example\\\" aria-describedby=\\\"btnGroupAddon\\\" /> </div> </div> <div class=\\\"btn-toolbar justify-content-between\\\" role=\\\"toolbar\\\" aria-label=\\\"Toolbar with button groups\\\"> <div class=\\\"btn-group mb-2\\\" role=\\\"group\\\" aria-label=\\\"First group\\\"> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">1</button> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">2</button> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">3</button> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">4</button> </div> <div class=\\\"input-group mb-2\\\"> <div class=\\\"input-group-text\\\" id=\\\"btnGroupAddon2\\\">@</div> <input class=\\\"form-control\\\" type=\\\"text\\\" placeholder=\\\"Input group example\\\" aria-label=\\\"Input group example\\\" aria-describedby=\\\"btnGroupAddon2\\\" /> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group mb-2 me-2" role="group" aria-label="First group">
                      <button className="btn btn-secondary" type="button">
1
                      </button>
                      <button className="btn btn-secondary" type="button">
2
                      </button>
                      <button className="btn btn-secondary" type="button">
3
                      </button>
                      <button className="btn btn-secondary" type="button">
4
                      </button>
                    </div>
                    <div className="input-group mb-2">
                      <div className="input-group-text" id="btnGroupAddon">
@
                      </div>
                      <input className="form-control" type="text" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon" />
                    </div>
                  </div>
                  <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group mb-2" role="group" aria-label="First group">
                      <button className="btn btn-secondary" type="button">
1
                      </button>
                      <button className="btn btn-secondary" type="button">
2
                      </button>
                      <button className="btn btn-secondary" type="button">
3
                      </button>
                      <button className="btn btn-secondary" type="button">
4
                      </button>
                    </div>
                    <div className="input-group mb-2">
                      <div className="input-group-text" id="btnGroupAddon2">
@
                      </div>
                      <input className="form-control" type="text" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2" />
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
Button group sizing
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#button-group-sizing-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="button-group-sizing-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="button-group-sizing-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"btn-group btn-group-lg me-2\\\" role=\\\"group\\\" aria-label=\\\"...\\\"> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">Left</button> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">Middle</button> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">Right</button> </div> <div class=\\\"btn-group mt-2 me-2\\\" role=\\\"group\\\" aria-label=\\\"...\\\"> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">Left</button> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">Middle</button> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">Right</button> </div> <div class=\\\"btn-group btn-group-sm mt-2\\\" role=\\\"group\\\" aria-label=\\\"...\\\"> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">Left</button> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">Middle</button> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">Right</button> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="btn-group btn-group-lg me-2" role="group" aria-label="...">
                    <button className="btn btn-secondary" type="button">
Left
                    </button>
                    <button className="btn btn-secondary" type="button">
Middle
                    </button>
                    <button className="btn btn-secondary" type="button">
Right
                    </button>
                  </div>
                  <div className="btn-group mt-2 me-2" role="group" aria-label="...">
                    <button className="btn btn-secondary" type="button">
Left
                    </button>
                    <button className="btn btn-secondary" type="button">
Middle
                    </button>
                    <button className="btn btn-secondary" type="button">
Right
                    </button>
                  </div>
                  <div className="btn-group btn-group-sm mt-2" role="group" aria-label="...">
                    <button className="btn btn-secondary" type="button">
Left
                    </button>
                    <button className="btn btn-secondary" type="button">
Middle
                    </button>
                    <button className="btn btn-secondary" type="button">
Right
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Button group vertical variation
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#button-group-vertical-variation-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="button-group-vertical-variation-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="button-group-vertical-variation-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"btn-group-vertical\\\" role=\\\"group\\\" aria-label=\\\"Vertical button group\\\"> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">Button</button> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">Button</button> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">Button</button> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">Button</button> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">Button</button> <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\">Button</button> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                    <button className="btn btn-secondary" type="button">
Button
                    </button>
                    <button className="btn btn-secondary" type="button">
Button
                    </button>
                    <button className="btn btn-secondary" type="button">
Button
                    </button>
                    <button className="btn btn-secondary" type="button">
Button
                    </button>
                    <button className="btn btn-secondary" type="button">
Button
                    </button>
                    <button className="btn btn-secondary" type="button">
Button
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Disabled state
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#disabled-state-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="disabled-state-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="disabled-state-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><button class=\\\"btn btn-lg btn-primary\\\" type=\\\"button\\\" disabled=\\\"disabled\\\">Primary button</button> <button class=\\\"btn btn-secondary btn-lg ms-2\\\" type=\\\"button\\\" disabled=\\\"disabled\\\">Button</button></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <button className="btn btn-lg btn-primary" type="button" disabled>
Primary button
                  </button>
                  <button className="btn btn-secondary btn-lg ms-2" type="button" disabled>
Button
                  </button>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Block buttons
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#block-buttons-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="block-buttons-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="block-buttons-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"d-grid gap-2\\\"> <button class=\\\"btn btn-primary\\\" type=\\\"button\\\">Button</button> <button class=\\\"btn btn-primary\\\" type=\\\"button\\\">Button</button> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="button">
Button
                    </button>
                    <button className="btn btn-primary" type="button">
Button
                    </button>
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
                <a href="#phoenix-buttons" className="nav-link">
Phoenix Buttons
                </a>
              </li>
              <li className="nav-item">
                <a href="#solid-buttons" className="nav-link">
Solid Buttons
                </a>
              </li>
              <li className="nav-item">
                <a href="#subtle-buttons" className="nav-link">
Subtle Buttons
                </a>
              </li>
              <li className="nav-item">
                <a href="#outline-buttons" className="nav-link">
Outline Buttons
                </a>
              </li>
              <li className="nav-item">
                <a href="#close-buttons" className="nav-link">
Close Buttons
                </a>
              </li>
              <li className="nav-item">
                <a href="#close-buttons-white-variant" className="nav-link">
Close buttons white variant
                </a>
              </li>
              <li className="nav-item">
                <a href="#button-sizes" className="nav-link">
Button Sizes
                </a>
              </li>
              <li className="nav-item">
                <a href="#button-capsule" className="nav-link">
Button Capsule
                </a>
              </li>
              <li className="nav-item">
                <a href="#button-group" className="nav-link">
Button Group
                </a>
              </li>
              <li className="nav-item">
                <a href="#button-toolbar" className="nav-link">
Button Toolbar
                </a>
              </li>
              <li className="nav-item">
                <a href="#button-toolbar-with-input-group" className="nav-link">
Button toolbar with input group
                </a>
              </li>
              <li className="nav-item">
                <a href="#button-group-sizing" className="nav-link">
Button group sizing
                </a>
              </li>
              <li className="nav-item">
                <a href="#button-group-vertical-variation" className="nav-link">
Button group vertical variation
                </a>
              </li>
              <li className="nav-item">
                <a href="#disabled-state" className="nav-link">
Disabled state
                </a>
              </li>
              <li className="nav-item">
                <a href="#block-buttons" className="nav-link">
Block buttons
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
