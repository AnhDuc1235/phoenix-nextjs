'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Typography() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Typography
    </h2>

    <p className="text-body-tertiary lead mb-2">
Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/utilities/text/" className="btn btn-link p-0"  target="_blank">
Spacing on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="mb-9">
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Text alignment
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Easily realign text to components with text alignment classes. For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#text-alignment-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="text-alignment-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="text-alignment-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p class=\\\"text-start\\\">Start aligned text on all viewport sizes.</p> <p class=\\\"text-center\\\">Center aligned text on all viewport sizes.</p> <p class=\\\"text-end\\\">End aligned text on all viewport sizes.</p> <p class=\\\"text-sm-start\\\">Start aligned text on viewports sized SM (small) or wider.</p> <p class=\\\"text-md-start\\\">Start aligned text on viewports sized MD (medium) or wider.</p> <p class=\\\"text-lg-start\\\">Start aligned text on viewports sized LG (large) or wider.</p> <p class=\\\"text-xl-start\\\">Start aligned text on viewports sized XL (extra-large) or wider.</p></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <p className="text-start">
Start aligned text on all viewport sizes.
                  </p>
                  <p className="text-center">
Center aligned text on all viewport sizes.
                  </p>
                  <p className="text-end">
End aligned text on all viewport sizes.
                  </p>
                  <p className="text-sm-start">
Start aligned text on viewports sized SM (small) or wider.
                  </p>
                  <p className="text-md-start">
Start aligned text on viewports sized MD (medium) or wider.
                  </p>
                  <p className="text-lg-start">
Start aligned text on viewports sized LG (large) or wider.
                  </p>
                  <p className="text-xl-start">
Start aligned text on viewports sized XL (extra-large) or wider.
                  </p>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Text wrapping and overflow
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Wrap text with a 
                      <code>
.text-wrap
                      </code>
 class. Prevent text from wrapping with a 
                      <code>
.text-nowrap
                      </code>
 class.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#text-wrapping-and-overflow-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="text-wrapping-and-overflow-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="text-wrapping-and-overflow-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"badge text-bg-primary text-wrap mb-3\\\" style=\\\"width: 6rem;\\\">This text should wrap.</div> <div class=\\\"text-nowrap bg-body-tertiary\\\" style=\\\"width: 8rem;\\\">This text should overflow the parent.</div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="badge text-bg-primary text-wrap mb-3" style={{"width":"6rem"} as CSSProperties}>
This text should wrap.
                  </div>
                  <div className="text-nowrap bg-body-tertiary" style={{"width":"8rem"} as CSSProperties}>
This text should overflow the parent.
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Word break
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Prevent long strings of text from breaking your component's layout by using 
                      <code>
.text-break
                      </code>
 to set 
                      <code>
word-wrap: break-word
                      </code>
 and 
                      <code>
word-break: break-word
                      </code>
. We use 
                      <code>
word-wrap
                      </code>
 instead of the more common 
                      <code>
overflow-wrap
                      </code>
 for wider browser support, and add the deprecated 
                      <code>
word-break: break-word
                      </code>
 to avoid issues with flex containers.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#word-break-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="word-break-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="word-break-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p class=\\\"text-break\\\">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <p className="text-break">
mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
                  </p>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Text transform
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Transform text in components with text capitalization classes.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#text-transform-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="text-transform-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="text-transform-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p class=\\\"text-lowercase\\\">Lowercased text.</p> <p class=\\\"text-uppercase\\\">Uppercased text.</p> <p class=\\\"text-capitalize\\\">CapiTaliZed text.</p></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <p className="text-lowercase">
Lowercased text.
                  </p>
                  <p className="text-uppercase">
Uppercased text.
                  </p>
                  <p className="text-capitalize">
CapiTaliZed text.
                  </p>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Font size
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Quickly change the 
                      <code>
font-size
                      </code>
 of text. While our heading classes (e.g., 
                      <code>
.h1
                      </code>
–
                      <code>
.h6
                      </code>
) apply 
                      <code>
font-size
                      </code>
, 
                      <code>
font-weight
                      </code>
, and 
                      <code>
line-height
                      </code>
, these utilities 
                      <em>
only
                      </em>
 apply 
                      <code>
font-size
                      </code>
. Sizing for these utilities matches HTML’s heading elements, so as the number increases, their size decreases.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#font-size-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="font-size-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="font-size-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><h6 class=\\\"fs-10\\\">.fs-10</h6> <h6 class=\\\"fs-9\\\">.fs-9</h6> <h6 class=\\\"fs-8\\\">.fs-8</h6> <h6 class=\\\"fs-7\\\">.fs-7</h6> <h6 class=\\\"fs-6\\\">.fs-6</h6> <h6 class=\\\"fs-5\\\">.fs-5</h6> <h6 class=\\\"fs-4\\\">.fs-4</h6> <h6 class=\\\"fs-3\\\">.fs-3</h6> <h6 class=\\\"fs-2\\\">.fs-2</h6> <h6 class=\\\"fs-1\\\">.fs-1</h6> <h6 class=\\\"fs-8\\\">.fs-8</h6> <div class=\\\"mt-3\\\"> <h6 class=\\\"fs-sm-8\\\">.fs-sm-8</h6> <h6 class=\\\"fs-md-7\\\">.fs-md-7</h6> <h6 class=\\\"fs-lg-7\\\">.fs-lg-7</h6> <h6 class=\\\"fs-xl-5\\\">.fs-xl-5</h6> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <h6 className="fs-10">
.fs-10
                  </h6>
                  <h6 className="fs-9">
.fs-9
                  </h6>
                  <h6 className="fs-8">
.fs-8
                  </h6>
                  <h6 className="fs-7">
.fs-7
                  </h6>
                  <h6 className="fs-6">
.fs-6
                  </h6>
                  <h6 className="fs-5">
.fs-5
                  </h6>
                  <h6 className="fs-4">
.fs-4
                  </h6>
                  <h6 className="fs-3">
.fs-3
                  </h6>
                  <h6 className="fs-2">
.fs-2
                  </h6>
                  <h6 className="fs-1">
.fs-1
                  </h6>
                  <h6 className="fs-8">
.fs-8
                  </h6>
                  <div className="mt-3">
                    <h6 className="fs-sm-8">
.fs-sm-8
                    </h6>
                    <h6 className="fs-md-7">
.fs-md-7
                    </h6>
                    <h6 className="fs-lg-7">
.fs-lg-7
                    </h6>
                    <h6 className="fs-xl-5">
.fs-xl-5
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Font weight
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Quickly change the 
                      <code>
font-weight
                      </code>
 or 
                      <code>
font-style
                      </code>
 of text with these utilities. 
                      <code>
font-style
                      </code>
 utilities are abbreviated as 
                      <code>
.fst-*
                      </code>
 and 
                      <code>
font-weight
                      </code>
 utilities are abbreviated as 
                      <code>
.fw-*
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
                      <a href="#font-weight-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="font-weight-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="font-weight-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"fw-light\\\">Font weight 300</div> <div class=\\\"fw-normal\\\">Font weight 400</div> <div class=\\\"fw-medium\\\">Font weight 500</div> <div class=\\\"fw-semibold\\\">Font weight 600</div> <div class=\\\"fw-bold\\\">Font weight 700</div> <div class=\\\"fw-bolder\\\">Font weight 800</div> <div class=\\\"fw-black\\\">Font weight 900</div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="fw-light">
Font weight 300
                  </div>
                  <div className="fw-normal">
Font weight 400
                  </div>
                  <div className="fw-medium">
Font weight 500
                  </div>
                  <div className="fw-semibold">
Font weight 600
                  </div>
                  <div className="fw-bold">
Font weight 700
                  </div>
                  <div className="fw-bolder">
Font weight 800
                  </div>
                  <div className="fw-black">
Font weight 900
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Line height
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Change the line height with 
                      <code>
.lh-*
                      </code>
 utilities.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#line-height-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="line-height-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="line-height-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p class=\\\"lh-1\\\">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API. </p> <p class=\\\"lh-sm\\\">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p> <p class=\\\"lh-base\\\">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p> <p class=\\\"lh-lg\\\">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <p className="lh-1">
This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API. 
                  </p>
                  <p className="lh-sm">
This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.
                  </p>
                  <p className="lh-base">
This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.
                  </p>
                  <p className="lh-lg">
This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.
                  </p>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Heading
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#heading-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="heading-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="heading-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><h1>h1. Heading</h1> <h2>h2. Heading</h2> <h3>h3. Heading</h3> <h4>h4. Heading</h4> <h5>h5. Heading</h5> <h6>h6. Heading</h6></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <h1>
h1. Heading
                  </h1>
                  <h2>
h2. Heading
                  </h2>
                  <h3>
h3. Heading
                  </h3>
                  <h4>
h4. Heading
                  </h4>
                  <h5>
h5. Heading
                  </h5>
                  <h6>
h6. Heading
                  </h6>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Heading classes
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#heading-classes-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="heading-classes-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="heading-classes-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p class=\\\"h1\\\">h1. Heading</p> <p class=\\\"h2\\\">h2. Heading</p> <p class=\\\"h3\\\">h3. Heading</p> <p class=\\\"h4\\\">h4. Heading</p> <p class=\\\"h5\\\">h5. Heading</p> <p class=\\\"h6\\\">h6. Heading</p></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <p className="h1">
h1. Heading
                  </p>
                  <p className="h2">
h2. Heading
                  </p>
                  <p className="h3">
h3. Heading
                  </p>
                  <p className="h4">
h4. Heading
                  </p>
                  <p className="h5">
h5. Heading
                  </p>
                  <p className="h6">
h6. Heading
                  </p>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Display
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#display-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="display-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="display-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><h1 class=\\\"display-1 mb-3\\\">Display 1</h1> <h1 class=\\\"display-2 mb-3\\\">Display 2</h1> <h1 class=\\\"display-3 mb-3\\\">Display 3</h1> <h1 class=\\\"display-4 mb-3\\\">Display 4</h1> <h1 class=\\\"display-5 mb-3\\\">Display 5</h1> <h1 class=\\\"display-6 mb-3\\\">Display 6</h1></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <h1 className="display-1 mb-3">
Display 1
                  </h1>
                  <h1 className="display-2 mb-3">
Display 2
                  </h1>
                  <h1 className="display-3 mb-3">
Display 3
                  </h1>
                  <h1 className="display-4 mb-3">
Display 4
                  </h1>
                  <h1 className="display-5 mb-3">
Display 5
                  </h1>
                  <h1 className="display-6 mb-3">
Display 6
                  </h1>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Font family
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
You have three font-family helper classes available to use.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#font-family-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="font-family-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="font-family-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p>Nunito sans</p> <code class=\\\"text-monospace\\\">Monospace</code></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <p>
Nunito sans
                  </p>
                  <code className="text-monospace">
Monospace
                  </code>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Reset color
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Reset a text or link's color with 
                      <code>
.text-reset
                      </code>
, so that it inherits the color from its parent.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#reset-color-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="reset-color-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="reset-color-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p class=\\\"text-muted\\\">Muted text with a <a class=\\\"text-reset\\\" href=\\\"#\\\">reset link</a>.</p></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <p className="text-muted">
Muted text with a 
                    <a href="#" className="text-reset">
reset link
                    </a>
.
                  </p>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Text decoration
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Decorate text in components with text decoration classes.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#text-decoration-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="text-decoration-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="text-decoration-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p class=\\\"text-decoration-underline\\\">This text has a line underneath it.</p> <p class=\\\"text-decoration-line-through\\\">This text has a line going through it.</p> <a class=\\\"text-decoration-none\\\" href=\\\"#\\\">This link has its text decoration removed</a></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <p className="text-decoration-underline">
This text has a line underneath it.
                  </p>
                  <p className="text-decoration-line-through">
This text has a line going through it.
                  </p>
                  <a href="#" className="text-decoration-none">
This link has its text decoration removed
                  </a>
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
                <a href="#text-alignment" className="nav-link">
Text alignment
                </a>
              </li>
              <li className="nav-item">
                <a href="#text-wrapping-and-overflow" className="nav-link">
Text wrapping and overflow
                </a>
              </li>
              <li className="nav-item">
                <a href="#word-break" className="nav-link">
Word break
                </a>
              </li>
              <li className="nav-item">
                <a href="#text-transform" className="nav-link">
Text transform
                </a>
              </li>
              <li className="nav-item">
                <a href="#font-size" className="nav-link">
Font size
                </a>
              </li>
              <li className="nav-item">
                <a href="#font-weight-and-italics" className="nav-link">
Font weight and italics
                </a>
              </li>
              <li className="nav-item">
                <a href="#line-height" className="nav-link">
Line height
                </a>
              </li>
              <li className="nav-item">
                <a href="#heading" className="nav-link">
Heading
                </a>
              </li>
              <li className="nav-item">
                <a href="#heading-classes" className="nav-link">
Heading classes
                </a>
              </li>
              <li className="nav-item">
                <a href="#display" className="nav-link">
Display
                </a>
              </li>
              <li className="nav-item">
                <a href="#font-family" className="nav-link">
Font family
                </a>
              </li>
              <li className="nav-item">
                <a href="#reset-color" className="nav-link">
Reset color
                </a>
              </li>
              <li className="nav-item">
                <a href="#text-decoration" className="nav-link">
Text decoration
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
