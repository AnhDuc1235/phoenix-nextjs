'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Borders() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Borders
    </h2>

    <p className="text-body-tertiary lead mb-2">
Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/utilities/borders/" className="btn btn-link p-0"  target="_blank">
Borders on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
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
Border
                    </h4>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="border-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p>The classes are named using the format <code>border-{side}</code> for <code>xs</code> and <code>border-{side}-{breakpoint}</code> for <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, and <code>xxl</code>.</p> <p>Where<em> side</em> is one of:</p> <ul> <li><code>top</code> - for classes that set style for <code>border-top</code></li> <li><code>bottom</code> - for classes that set style for <code>border-bottom</code></li> <li><code>left</code> - for classes that set style for <code>border-start</code></li> <li><code>right</code> - for classes that set style for <code>border-right</code></li> <li><code>x</code> - for classes that set both<code>*-left</code> and <code>*-right</code></li> <li><code>y</code> - for classes that set both<code>*-top</code> and <code>*-bottom</code></li> <li>blank - for classes that set the<code>border</code> style on all 4 side of the element.</li> </ul> <p class=\\\"mb-0\\\">Use border utilities to quickly style the<code>border </code> of an element. Great for images, buttons, or any other element.</p></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <p>
The classes are named using the format 
                    <code>
{"border-{side}"}
                    </code>
 for 
                    <code>
xs
                    </code>
 and 
                    <code>
{"border-{side}-{breakpoint}"}
                    </code>
 for 
                    <code>
sm
                    </code>
, 
                    <code>
md
                    </code>
, 
                    <code>
lg
                    </code>
, 
                    <code>
xl
                    </code>
, and 
                    <code>
xxl
                    </code>
.
                  </p>
                  <p>
Where
                    <em>
 side
                    </em>
 is one of:
                  </p>
                  <ul>
                    <li>
                      <code>
top
                      </code>
 - for classes that set style for 
                      <code>
border-top
                      </code>
                    </li>
                    <li>
                      <code>
bottom
                      </code>
 - for classes that set style for 
                      <code>
border-bottom
                      </code>
                    </li>
                    <li>
                      <code>
left
                      </code>
 - for classes that set style for 
                      <code>
border-start
                      </code>
                    </li>
                    <li>
                      <code>
right
                      </code>
 - for classes that set style for 
                      <code>
border-right
                      </code>
                    </li>
                    <li>
                      <code>
x
                      </code>
 - for classes that set both
                      <code>
*-left
                      </code>
 and 
                      <code>
*-right
                      </code>
                    </li>
                    <li>
                      <code>
y
                      </code>
 - for classes that set both
                      <code>
*-top
                      </code>
 and 
                      <code>
*-bottom
                      </code>
                    </li>
                    <li>
blank - for classes that set the
                      <code>
border
                      </code>
 style on all 4 side of the element.
                    </li>
                  </ul>
                  <p className="mb-0">
Use border utilities to quickly style the
                    <code>
border 
                    </code>
 of an element. Great for images, buttons, or any other element.
                  </p>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5 border-component" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Additive
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#additive-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="additive-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="additive-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><span class=\\\"border\\\"></span> <span class=\\\"border-top\\\"></span> <span class=\\\"border-end\\\"></span> <span class=\\\"border-bottom\\\"></span> <span class=\\\"border-start\\\"></span></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <span className="border">                  </span>
                  <span className="border-top">                  </span>
                  <span className="border-end">                  </span>
                  <span className="border-bottom">                  </span>
                  <span className="border-start">                  </span>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5 border-component" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Subtractive
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#subtractive-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="subtractive-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="subtractive-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><span class=\\\"border border-0\\\"></span> <span class=\\\"border border-top-0\\\"></span> <span class=\\\"border border-end-0\\\"></span> <span class=\\\"border border-bottom-0\\\"></span> <span class=\\\"border border-start-0\\\"></span></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <span className="border border-0">                  </span>
                  <span className="border border-top-0">                  </span>
                  <span className="border border-end-0">                  </span>
                  <span className="border border-bottom-0">                  </span>
                  <span className="border border-start-0">                  </span>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5 border-component" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Border Color
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Change the border color using utilities built on our theme colors. The most used border colors utility class of this themes are 
                      <code>
.border
                      </code>
 and 
                      <code>
.border-translucent
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
                      <a href="#border-color-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="border-color-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="border-color-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><span class=\\\"border border-info\\\"></span> <span class=\\\"border border-success\\\"></span> <span class=\\\"border border-warning\\\"></span> <span class=\\\"border border-danger\\\"></span> <span class=\\\"border border-cake\\\"></span> <span class=\\\"border border-facebook\\\"></span> <span class=\\\"border border-twitter\\\"></span> <span class=\\\"border border-google-plus\\\"></span> <span class=\\\"border border-github\\\"></span> <div class=\\\"w-100\\\"></div> <span class=\\\"border border-black\\\"></span> <span class=\\\"border border-dark\\\"></span> <span class=\\\"border border-gray-1100\\\"></span> <span class=\\\"border border-gray-1000\\\"></span> <span class=\\\"border border-gray-900\\\"></span> <span class=\\\"border border-gray-800\\\"></span> <span class=\\\"border border-gray-700\\\"></span> <span class=\\\"border border-gray-600\\\"></span> <span class=\\\"border border-gray-500\\\"></span> <span class=\\\"border border-gray-400\\\"></span> <span class=\\\"border\\\"></span> <span class=\\\"border border-translucent\\\"></span> <span class=\\\"border border-gray-100\\\"></span> <span class=\\\"border border-light\\\"></span> <span class=\\\"border border-white\\\"></span> <span class=\\\"border border-2\\\"></span> <span class=\\\"border-top border-top-2\\\"></span> <span class=\\\"border-end border-end-2\\\"></span> <span class=\\\"border-bottom border-bottom-2\\\"></span> <span class=\\\"border-start border-start-2\\\"></span></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <span className="border border-info">                  </span>
                  <span className="border border-success">                  </span>
                  <span className="border border-warning">                  </span>
                  <span className="border border-danger">                  </span>
                  <span className="border border-cake">                  </span>
                  <span className="border border-facebook">                  </span>
                  <span className="border border-twitter">                  </span>
                  <span className="border border-google-plus">                  </span>
                  <span className="border border-github">                  </span>
                  <div className="w-100">                  </div>
                  <span className="border border-black">                  </span>
                  <span className="border border-dark">                  </span>
                  <span className="border border-gray-1100">                  </span>
                  <span className="border border-gray-1000">                  </span>
                  <span className="border border-gray-900">                  </span>
                  <span className="border border-gray-800">                  </span>
                  <span className="border border-gray-700">                  </span>
                  <span className="border border-gray-600">                  </span>
                  <span className="border border-gray-500">                  </span>
                  <span className="border border-gray-400">                  </span>
                  <span className="border">                  </span>
                  <span className="border border-translucent">                  </span>
                  <span className="border border-gray-100">                  </span>
                  <span className="border border-light">                  </span>
                  <span className="border border-white">                  </span>
                  <span className="border border-2">                  </span>
                  <span className="border-top border-top-2">                  </span>
                  <span className="border-end border-end-2">                  </span>
                  <span className="border-bottom border-bottom-2">                  </span>
                  <span className="border-start border-start-2">                  </span>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5 border-component" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Border Width
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
You can control border width using helper classes 
                      <code>
{"border-{1|2|3|4|5}"}
                      </code>
. In addition, you can also use 
                      <code>
 border-top-2
                      </code>
, 
                      <code>
 border-end-2
                      </code>
, 
                      <code>
 border-bottom-2
                      </code>
, 
                      <code>
 border-start-2
                      </code>
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#border-width-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="border-width-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="border-width-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><span class=\\\"border border-1\\\"></span> <span class=\\\"border border-2\\\"></span> <span class=\\\"border border-3\\\"></span> <span class=\\\"border border-4\\\"></span> <span class=\\\"border border-5\\\"></span> <hr /> <span class=\\\"border border-top-2\\\"></span> <span class=\\\"border border-end-2\\\"></span> <span class=\\\"border border-bottom-2\\\"></span> <span class=\\\"border border-start-2\\\"></span></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <span className="border border-1">                  </span>
                  <span className="border border-2">                  </span>
                  <span className="border border-3">                  </span>
                  <span className="border border-4">                  </span>
                  <span className="border border-5">                  </span>
                  <hr />
                  <span className="border border-top-2">                  </span>
                  <span className="border border-end-2">                  </span>
                  <span className="border border-bottom-2">                  </span>
                  <span className="border border-start-2">                  </span>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5 border-component" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Border Radius
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Add classes to an element to easily round its corners.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#border-radius-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="border-radius-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="border-radius-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><span class=\\\"rounded-0\\\"></span> <span class=\\\"rounded-1\\\"></span> <span class=\\\"rounded-2\\\"></span> <span class=\\\"rounded-3\\\"></span> <span class=\\\"rounded-4\\\"></span> <span class=\\\"rounded-5\\\"></span> <span class=\\\"rounded-circle\\\"></span> <span class=\\\"rounded-pill\\\" style=\\\"width:150px; height:75px;\\\"></span></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <span className="rounded-0">                  </span>
                  <span className="rounded-1">                  </span>
                  <span className="rounded-2">                  </span>
                  <span className="rounded-3">                  </span>
                  <span className="rounded-4">                  </span>
                  <span className="rounded-5">                  </span>
                  <span className="rounded-circle">                  </span>
                  <span className="rounded-pill" style={{"width":"150px","height":"75px"} as CSSProperties}>                  </span>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5 border-component" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Border Sizes
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Use the scaling classes for larger or smaller rounded corners. Sizes range from 
                      <code>
0
                      </code>
 to 
                      <code>
3
                      </code>
, and can be configured by modifying the utilities API.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#border-sizes-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="border-sizes-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="border-sizes-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><span class=\\\"rounded-top\\\"></span> <span class=\\\"rounded-top-lg\\\"></span> <span class=\\\"rounded-end\\\"></span> <span class=\\\"rounded-end-lg\\\"></span> <span class=\\\"rounded-bottom\\\"></span> <span class=\\\"rounded-bottom-lg\\\"></span> <span class=\\\"rounded-start\\\"></span> <span class=\\\"rounded-start-lg\\\"></span></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <span className="rounded-top">                  </span>
                  <span className="rounded-top-lg">                  </span>
                  <span className="rounded-end">                  </span>
                  <span className="rounded-end-lg">                  </span>
                  <span className="rounded-bottom">                  </span>
                  <span className="rounded-bottom-lg">                  </span>
                  <span className="rounded-start">                  </span>
                  <span className="rounded-start-lg">                  </span>
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
                <a href="#border" className="nav-link">
Border
                </a>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a href="#additive" className="nav-link">
Additive
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#subtractive" className="nav-link">
Subtractive
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#border-color" className="nav-link">
Border color
                </a>
              </li>
              <li className="nav-item">
                <a href="#border-width" className="nav-link">
Border width
                </a>
              </li>
              <li className="nav-item">
                <a href="#border-radius" className="nav-link">
Border radius
                </a>
              </li>
              <li className="nav-item">
                <a href="#border-sizes" className="nav-link">
Border sizes
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
