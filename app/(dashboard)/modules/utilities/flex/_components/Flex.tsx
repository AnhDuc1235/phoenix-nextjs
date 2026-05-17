'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Flex() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Flex
    </h2>

    <p className="text-body-tertiary lead mb-2">
Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/utilities/flex/" className="btn btn-link p-0"  target="_blank">
Flex on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
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
Flex Behaviors
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Apply 
                      <code>
 display 
                      </code>
 utilities to create a flexbox container and transform direct children elements into flex items. Flex containers and items are able to be modified further with additional flex properties.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#flex-behaviors-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="flex-behaviors-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="flex-behaviors-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"d-flex p-2 bg-body-secondary mb-2\\\">Flexbox container!</div> <div class=\\\"d-inline-flex p-2 bg-body-secondary\\\">Inline flexbox container!</div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="d-flex p-2 bg-body-secondary mb-2">
Flexbox container!
                  </div>
                  <div className="d-inline-flex p-2 bg-body-secondary">
Inline flexbox container!
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Direction Row
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Use 
                      <code>
 .flex-row 
                      </code>
 to set a horizontal direction (the browser default), or .flex-row-reverse to start the horizontal direction from the opposite side.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#direction-row-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="direction-row-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="direction-row-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"d-flex bg-body-secondary mb-3 flex-row\\\"> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item 1</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item 2</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item 3</div> </div> <div class=\\\"d-flex bg-body-secondary mb-3 flex-row-reverse\\\"> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item 1</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item 2</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item 3</div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="d-flex bg-body-secondary mb-3 flex-row">
                    <div className="p-2 bg-body-secondary border">
Flex item 1
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item 2
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item 3
                    </div>
                  </div>
                  <div className="d-flex bg-body-secondary mb-3 flex-row-reverse">
                    <div className="p-2 bg-body-secondary border">
Flex item 1
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item 2
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item 3
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Direction Column
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Use 
                      <code>
 .flex-column 
                      </code>
 to set a vertical direction, or 
                      <code>
 .flex-column-reverse 
                      </code>
 to start the vertical direction from the opposite side 
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#direction-column-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="direction-column-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="direction-column-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"d-flex bg-body-secondary mb-3 flex-column\\\"> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item 1</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item 2</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item 3</div> </div> <div class=\\\"d-flex bg-body-secondary mb-3 flex-column-reverse\\\"> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item 1</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item 2</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item 3</div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="d-flex bg-body-secondary mb-3 flex-column">
                    <div className="p-2 bg-body-secondary border">
Flex item 1
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item 2
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item 3
                    </div>
                  </div>
                  <div className="d-flex bg-body-secondary mb-3 flex-column-reverse">
                    <div className="p-2 bg-body-secondary border">
Flex item 1
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item 2
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item 3
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Justify Content
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
justify-content
                      <code>
justify-content 
                      </code>
utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if 
                      <code>
flex-direction: column 
                      </code>
). Choose from start (browser default), 
                      <code>
end 
                      </code>
,
                      <code>
center 
                      </code>
,
                      <code>
between 
                      </code>
, or
                      <code>
around.
                      </code>
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#justify-content-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="justify-content-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="justify-content-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"d-flex justify-content-start bg-body-secondary mb-2\\\"> <div class=\\\"p-2 bg-body-secondary border\\\">Flex Item</div> </div> <div class=\\\"d-flex justify-content-end bg-body-secondary mb-2\\\"> <div class=\\\"p-2 bg-body-secondary border\\\">Flex Item</div> </div> <div class=\\\"d-flex justify-content-center bg-body-secondary mb-2\\\"> <div class=\\\"p-2 bg-body-secondary border\\\">Flex Item</div> </div> <div class=\\\"d-flex justify-content-between bg-body-secondary mb-2\\\"> <div class=\\\"p-2 bg-body-secondary border\\\">Flex Item</div> </div> <div class=\\\"d-flex justify-content-around bg-body-secondary mb-2\\\"> <div class=\\\"p-2 bg-body-secondary border\\\">Flex Item</div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="d-flex justify-content-start bg-body-secondary mb-2">
                    <div className="p-2 bg-body-secondary border">
Flex Item
                    </div>
                  </div>
                  <div className="d-flex justify-content-end bg-body-secondary mb-2">
                    <div className="p-2 bg-body-secondary border">
Flex Item
                    </div>
                  </div>
                  <div className="d-flex justify-content-center bg-body-secondary mb-2">
                    <div className="p-2 bg-body-secondary border">
Flex Item
                    </div>
                  </div>
                  <div className="d-flex justify-content-between bg-body-secondary mb-2">
                    <div className="p-2 bg-body-secondary border">
Flex Item
                    </div>
                  </div>
                  <div className="d-flex justify-content-around bg-body-secondary mb-2">
                    <div className="p-2 bg-body-secondary border">
Flex Item
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Align items
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Use 
                      <code>
align-items 
                      </code>
utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if 
                      <code>
flex-direction: column 
                      </code>
). Choose from 
                      <code>
start 
                      </code>
,
                      <code>
end 
                      </code>
,
                      <code>
center 
                      </code>
,
                      <code>
baseline 
                      </code>
, or 
                      <code>
stretch (browser default). 
                      </code>
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#align-items-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="align-items-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="align-items-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"d-flex align-items-start bg-body-secondary mb-2\\\" style=\\\"height: 5rem;\\\"> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> </div> <div class=\\\"d-flex align-items-end bg-body-secondary mb-2\\\" style=\\\"height: 5rem;\\\"> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> </div> <div class=\\\"d-flex align-items-center bg-body-secondary mb-2\\\" style=\\\"height: 5rem;\\\"> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> </div> <div class=\\\"d-flex align-items-baseline bg-body-secondary mb-2\\\" style=\\\"height: 5rem;\\\"> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> </div> <div class=\\\"d-flex align-items-stretch bg-body-secondary mb-2\\\" style=\\\"height: 5rem;\\\"> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="d-flex align-items-start bg-body-secondary mb-2" style={{"height":"5rem"} as CSSProperties}>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                  </div>
                  <div className="d-flex align-items-end bg-body-secondary mb-2" style={{"height":"5rem"} as CSSProperties}>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                  </div>
                  <div className="d-flex align-items-center bg-body-secondary mb-2" style={{"height":"5rem"} as CSSProperties}>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                  </div>
                  <div className="d-flex align-items-baseline bg-body-secondary mb-2" style={{"height":"5rem"} as CSSProperties}>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                  </div>
                  <div className="d-flex align-items-stretch bg-body-secondary mb-2" style={{"height":"5rem"} as CSSProperties}>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Align self
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Use 
                      <code>
align-self 
                      </code>
utilities on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if 
                      <code>
flex-direction: column 
                      </code>
). Choose from the same options as 
                      <code>
align-items: start, 
                      </code>
                      <code>
end 
                      </code>
,
                      <code>
center 
                      </code>
,
                      <code>
baseline 
                      </code>
, or 
                      <code>
stretch (browser default).
                      </code>
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#align-self-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="align-self-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="align-self-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"d-flex bg-body-secondary mb-2\\\" style=\\\"height: 5rem;\\\"> <div class=\\\"border p-2 bg-body-secondary\\\">Flex Item</div> <div class=\\\"border p-2 bg-body-secondary align-self-start\\\">Align self start</div> <div class=\\\"border p-2 bg-body-secondary\\\">Flex Item</div> </div> <div class=\\\"d-flex bg-body-secondary mb-2\\\" style=\\\"height: 5rem;\\\"> <div class=\\\"border p-2 bg-body-secondary\\\">Flex Item</div> <div class=\\\"border p-2 bg-body-secondary align-self-end\\\">Align self end</div> <div class=\\\"border p-2 bg-body-secondary\\\">Flex Item</div> </div> <div class=\\\"d-flex bg-body-secondary mb-2\\\" style=\\\"height: 5rem;\\\"> <div class=\\\"border p-2 bg-body-secondary\\\">Flex Item</div> <div class=\\\"border p-2 bg-body-secondary align-self-center\\\">Align self center</div> <div class=\\\"border p-2 bg-body-secondary\\\">Flex Item</div> </div> <div class=\\\"d-flex bg-body-secondary mb-2\\\" style=\\\"height: 5rem;\\\"> <div class=\\\"border p-2 bg-body-secondary\\\">Flex Item</div> <div class=\\\"border p-2 bg-body-secondary align-self-baseline\\\">Align self baseline</div> <div class=\\\"border p-2 bg-body-secondary\\\">Flex Item</div> </div> <div class=\\\"d-flex bg-body-secondary mb-2\\\" style=\\\"height: 5rem;\\\"> <div class=\\\"border p-2 bg-body-secondary\\\">Flex Item</div> <div class=\\\"border p-2 bg-body-secondary align-self-stretch\\\">Align self stretch</div> <div class=\\\"border p-2 bg-body-secondary\\\">Flex Item</div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="d-flex bg-body-secondary mb-2" style={{"height":"5rem"} as CSSProperties}>
                    <div className="border p-2 bg-body-secondary">
Flex Item
                    </div>
                    <div className="border p-2 bg-body-secondary align-self-start">
Align self start
                    </div>
                    <div className="border p-2 bg-body-secondary">
Flex Item
                    </div>
                  </div>
                  <div className="d-flex bg-body-secondary mb-2" style={{"height":"5rem"} as CSSProperties}>
                    <div className="border p-2 bg-body-secondary">
Flex Item
                    </div>
                    <div className="border p-2 bg-body-secondary align-self-end">
Align self end
                    </div>
                    <div className="border p-2 bg-body-secondary">
Flex Item
                    </div>
                  </div>
                  <div className="d-flex bg-body-secondary mb-2" style={{"height":"5rem"} as CSSProperties}>
                    <div className="border p-2 bg-body-secondary">
Flex Item
                    </div>
                    <div className="border p-2 bg-body-secondary align-self-center">
Align self center
                    </div>
                    <div className="border p-2 bg-body-secondary">
Flex Item
                    </div>
                  </div>
                  <div className="d-flex bg-body-secondary mb-2" style={{"height":"5rem"} as CSSProperties}>
                    <div className="border p-2 bg-body-secondary">
Flex Item
                    </div>
                    <div className="border p-2 bg-body-secondary align-self-baseline">
Align self baseline
                    </div>
                    <div className="border p-2 bg-body-secondary">
Flex Item
                    </div>
                  </div>
                  <div className="d-flex bg-body-secondary mb-2" style={{"height":"5rem"} as CSSProperties}>
                    <div className="border p-2 bg-body-secondary">
Flex Item
                    </div>
                    <div className="border p-2 bg-body-secondary align-self-stretch">
Align self stretch
                    </div>
                    <div className="border p-2 bg-body-secondary">
Flex Item
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Fill
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Use the 
                      <code>
.flex-fill 
                      </code>
class on a series of sibling elements to force them into widths equal to their content (or equal widths if their content does not surpass their border-boxes) while taking up all available horizontal space.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#fill-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="fill-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="fill-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"d-flex bg-body-secondary\\\"> <div class=\\\"p-2 flex-fill bg-body-secondary border\\\">Flex item with a lot of content</div> <div class=\\\"p-2 flex-fill bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 flex-fill bg-body-secondary border\\\">Flex item</div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="d-flex bg-body-secondary">
                    <div className="p-2 flex-fill bg-body-secondary border">
Flex item with a lot of content
                    </div>
                    <div className="p-2 flex-fill bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 flex-fill bg-body-secondary border">
Flex item
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Flex Grow
                    </h4>
                    <div className="mt-2 text-body-secondary">
                      <p className="mt-2">
Use 
                        <code>
.flex-grow-* 
                        </code>
utilities to toggle a flex item’s ability to grow to fill available space. In the example below, the
                        <code>
.flex-grow-1 
                        </code>
elements uses all available space it can, while allowing the remaining two flex items their necessary space.
                      </p>
                    </div>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#flex-grow-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="flex-grow-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="flex-grow-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"d-flex bg-body-secondary\\\"> <div class=\\\"p-2 flex-grow-1 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Third flex item</div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="d-flex bg-body-secondary">
                    <div className="p-2 flex-grow-1 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Third flex item
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Flex Shrink
                    </h4>
                    <div className="mt-2 text-body-secondary">
                      <p className="mt-2">
Use 
                        <code>
.flex-shrink-*
                        </code>
 utilities to toggle a flex item’s ability to shrink if necessary. In the example below, the second flex item with 
                        <code>
.flex-shrink-1
                        </code>
 is forced to wrap its contents to a new line, “shrinking” to allow more space for the previous flex item with 
                        <code>
.w-100
                        </code>
.
                      </p>
                    </div>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#flex-shrink-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="flex-shrink-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="flex-shrink-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"d-flex bg-body-secondary\\\"> <div class=\\\"p-2 w-100 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 flex-shrink-1 bg-body-secondary border\\\">Flex item</div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="d-flex bg-body-secondary">
                    <div className="p-2 w-100 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 flex-shrink-1 bg-body-secondary border">
Flex item
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Auto margins
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Flexbox can do some pretty awesome things when you mix flex alignments with auto margins. Shown below are three examples of controlling flex items via auto margins: default (no auto margin), pushing two items to the right ( 
                      <code>
.me-auto 
                      </code>
), and pushing two items to the left (
                      <code>
.ms-auto 
                      </code>
).
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#auto-margins-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="auto-margins-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="auto-margins-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"d-flex bg-body-secondary mb-2\\\"> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> </div> <div class=\\\"d-flex bg-body-secondary mb-2\\\"> <div class=\\\"me-auto p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> </div> <div class=\\\"d-flex bg-body-secondary mb-2\\\"> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"ms-auto p-2 bg-body-secondary border\\\">Flex item</div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="d-flex bg-body-secondary mb-2">
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                  </div>
                  <div className="d-flex bg-body-secondary mb-2">
                    <div className="me-auto p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                  </div>
                  <div className="d-flex bg-body-secondary mb-2">
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="ms-auto p-2 bg-body-secondary border">
Flex item
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
With align-items
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Vertically move one flex item to the top or bottom of a container by mixing 
                      <code>
 align-items 
                      </code>
, 
                      <code>
 flex-direction: column 
                      </code>
, and 
                      <code>
 margin-top: auto or margin-bottom: auto. 
                      </code>
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#with-align-items-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="with-align-items-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="with-align-items-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"d-flex flex-column bg-body-secondary mb-3 align-items-start\\\" style=\\\"height: 200px;\\\"> <div class=\\\"mb-auto p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> </div> <div class=\\\"d-flex flex-column bg-body-secondary mb-3 align-items-end\\\" style=\\\"height: 200px;\\\"> <div class=\\\"mb-auto p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="d-flex flex-column bg-body-secondary mb-3 align-items-start" style={{"height":"200px"} as CSSProperties}>
                    <div className="mb-auto p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                  </div>
                  <div className="d-flex flex-column bg-body-secondary mb-3 align-items-end" style={{"height":"200px"} as CSSProperties}>
                    <div className="mb-auto p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Wrap
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default) with 
                      <code>
.flex-nowrap 
                      </code>
, wrapping with
                      <code>
.flex-wrap 
                      </code>
, or reverse wrapping with
                      <code>
.flex-wrap-reverse 
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
                      <a href="#wrap-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="wrap-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="wrap-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"d-flex flex-nowrap mb-3 bg-body-secondary border py-3\\\" style=\\\"width: 8rem\\\"> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> </div> <div class=\\\"d-flex mb-3 bg-body-secondary border flex-wrap\\\"> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> </div> <div class=\\\"d-flex mb-3 bg-body-secondary border flex-wrap-reverse\\\"> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="d-flex flex-nowrap mb-3 bg-body-secondary border py-3" style={{"width":"8rem"} as CSSProperties}>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                  </div>
                  <div className="d-flex mb-3 bg-body-secondary border flex-wrap">
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                  </div>
                  <div className="d-flex mb-3 bg-body-secondary border flex-wrap-reverse">
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Order
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Change the 
                      <em>
visual
                      </em>
order of specific flex items with a handful of 
                      <code>
order 
                      </code>
utilities. We only provide options for making an item first or last, as well as a reset to use the DOM order. As 
                      <code>
order 
                      </code>
takes any integer value (e.g., 
                      <code>
5 
                      </code>
), add custom CSS for any additional values needed.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#order-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="order-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="order-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"d-flex flex-nowrap bg-body-secondary\\\"> <div class=\\\"order-3 p-2 bg-body-secondary border\\\">First flex item</div> <div class=\\\"order-2 p-2 bg-body-secondary border\\\">Second flex item</div> <div class=\\\"order-1 p-2 bg-body-secondary border\\\">Third flex item</div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="d-flex flex-nowrap bg-body-secondary">
                    <div className="order-3 p-2 bg-body-secondary border">
First flex item
                    </div>
                    <div className="order-2 p-2 bg-body-secondary border">
Second flex item
                    </div>
                    <div className="order-1 p-2 bg-body-secondary border">
Third flex item
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Aligh content
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Use 
                      <code>
align-content 
                      </code>
utilities on flexbox containers to align flex items
                      <em>
together
                      </em>
on the cross axis. Choose from 
                      <code>
start (browser default) 
                      </code>
,
                      <code>
end 
                      </code>
,
                      <code>
center 
                      </code>
,
                      <code>
between 
                      </code>
,
                      <code>
around 
                      </code>
, or 
                      <code>
stretch. To demonstrate these utilities, we’ve enforced 
                      </code>
                      <code>
flex-wrap: wrap 
                      </code>
and increased the number of flex items.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#aligh-content-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="aligh-content-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="aligh-content-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"d-flex flex-wrap bg-body-secondary mb-3 align-content-start\\\" style=\\\"height: 300px;\\\"> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> </div> <div class=\\\"d-flex flex-wrap bg-body-secondary mb-3 align-content-center\\\" style=\\\"height: 300px;\\\"> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> </div> <div class=\\\"d-flex flex-wrap bg-body-secondary mb-3 align-content-end\\\" style=\\\"height: 300px;\\\"> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> </div> <div class=\\\"d-flex flex-wrap bg-body-secondary mb-3 align-content-between\\\" style=\\\"height: 300px;\\\"> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> </div> <div class=\\\"d-flex flex-wrap bg-body-secondary mb-3 align-content-around\\\" style=\\\"height: 300px;\\\"> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> </div> <div class=\\\"d-flex flex-wrap bg-body-secondary mb-3 align-content-stretch\\\" style=\\\"height: 300px;\\\"> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> <div class=\\\"p-2 bg-body-secondary border\\\">Flex item</div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="d-flex flex-wrap bg-body-secondary mb-3 align-content-start" style={{"height":"300px"} as CSSProperties}>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                  </div>
                  <div className="d-flex flex-wrap bg-body-secondary mb-3 align-content-center" style={{"height":"300px"} as CSSProperties}>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                  </div>
                  <div className="d-flex flex-wrap bg-body-secondary mb-3 align-content-end" style={{"height":"300px"} as CSSProperties}>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                  </div>
                  <div className="d-flex flex-wrap bg-body-secondary mb-3 align-content-between" style={{"height":"300px"} as CSSProperties}>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                  </div>
                  <div className="d-flex flex-wrap bg-body-secondary mb-3 align-content-around" style={{"height":"300px"} as CSSProperties}>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                  </div>
                  <div className="d-flex flex-wrap bg-body-secondary mb-3 align-content-stretch" style={{"height":"300px"} as CSSProperties}>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
                    </div>
                    <div className="p-2 bg-body-secondary border">
Flex item
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
                <a href="#flex-behaviors" className="nav-link">
Flex behaviors
                </a>
              </li>
              <li className="nav-item">
                <a href="#direction-row" className="nav-link">
Direction row
                </a>
              </li>
              <li className="nav-item">
                <a href="#direction-column" className="nav-link">
Direction column
                </a>
              </li>
              <li className="nav-item">
                <a href="#justify-content" className="nav-link">
Justify content
                </a>
              </li>
              <li className="nav-item">
                <a href="#align-items" className="nav-link">
Align items
                </a>
              </li>
              <li className="nav-item">
                <a href="#align-self" className="nav-link">
Align self
                </a>
              </li>
              <li className="nav-item">
                <a href="#fill" className="nav-link">
Fill
                </a>
              </li>
              <li className="nav-item">
                <a href="#flex-grow" className="nav-link">
Flex grow
                </a>
              </li>
              <li className="nav-item">
                <a href="#flex-shrink" className="nav-link">
Flex shrink
                </a>
              </li>
              <li className="nav-item">
                <a href="#auto-margins" className="nav-link">
Auto margins
                </a>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a href="#align-items" className="nav-link">
Align items
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#wrap" className="nav-link">
Wrap
                </a>
              </li>
              <li className="nav-item">
                <a href="#order" className="nav-link">
Order
                </a>
              </li>
              <li className="nav-item">
                <a href="#align-content" className="nav-link">
Align content
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
