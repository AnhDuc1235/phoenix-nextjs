'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function BasicTables() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Tables
    </h2>

    <p className="text-body-tertiary lead mb-2">
Documentation and examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Bootstrap.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/content/tables/" className="btn btn-link p-0"  target="_blank">
Tables on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
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
Overview
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Due to the widespread use of 
                      <code>
{"<table>"}
                      </code>
 elements across third-party widgets like calendars and date pickers, Bootstrap’s tables are 
                      <strong>
opt-in
                      </strong>
. Add the base class 
                      <code>
.table
                      </code>
 to any 
                      <code>
{"<table>"}
                      </code>
, then extend with our optional modifier classes or custom styles. All table styles are not inherited in Bootstrap, meaning any nested tables can be styled independent from the parent.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#overview-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="overview-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="overview-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><table class=\\\"table\\\"> <thead> <tr> <th scope=\\\"col\\\">#</th> <th scope=\\\"col\\\">First</th> <th scope=\\\"col\\\">Last</th> <th scope=\\\"col\\\">Handle</th> </tr> </thead> <tbody> <tr> <th scope=\\\"row\\\">1</th> <td> <div class=\\\"progress\\\" style=\\\"height:15px\\\"> <div class=\\\"progress-bar\\\" role=\\\"progressbar\\\" style=\\\"width: 70%\\\" aria-valuenow=\\\"25\\\" aria-valuemin=\\\"0\\\" aria-valuemax=\\\"100\\\" data-bs-toggle=\\\"tooltip\\\" data-bs-placement=\\\"top\\\" data-bs-title=\\\"Tooltip on top\\\"></div> </div> </td> <td>Otto</td> <td>@mdo</td> </tr> <tr> <th scope=\\\"row\\\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td> </tr> <tr> <th scope=\\\"row\\\">3</th> <td colspan=\\\"2\\\">Larry the Bird</td> <td>@twitter</td> </tr> </tbody> </table></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">
#
                        </th>
                        <th scope="col">
First
                        </th>
                        <th scope="col">
Last
                        </th>
                        <th scope="col">
Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
1
                        </th>
                        <td>
                          <div className="progress" style={{"height":"15px"} as CSSProperties}>
                            <div className="progress-bar" role="progressbar" style={{"width":"70%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} data-bs-title={"Tooltip on top"}>                            </div>
                          </div>
                        </td>
                        <td>
Otto
                        </td>
                        <td>
@mdo
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
2
                        </th>
                        <td>
Jacob
                        </td>
                        <td>
Thornton
                        </td>
                        <td>
@fat
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
3
                        </th>
                        <td colSpan={2}>
Larry the Bird
                        </td>
                        <td>
@twitter
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Variants
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Use contextual classes to color tables, table rows or individual cells.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#variants-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="variants-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="variants-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><table class=\\\"table\\\"> <thead> <tr> <th scope=\\\"col\\\">Class</th> <th scope=\\\"col\\\">Heading</th> <th scope=\\\"col\\\">Heading</th> </tr> </thead> <tbody> <tr> <th scope=\\\"row\\\">Default</th> <td>Cell</td> <td>Cell</td> </tr> <tr class=\\\"table-primary\\\"><th scope=\\\"row\\\">Primary</th> <td>Cell</td> <td>Cell</td> </tr> <tr class=\\\"table-secondary\\\"><th scope=\\\"row\\\">Secondary</th> <td>Cell</td> <td>Cell</td> </tr> <tr class=\\\"table-success\\\"><th scope=\\\"row\\\">Success</th> <td>Cell</td> <td>Cell</td> </tr> <tr class=\\\"table-danger\\\"><th scope=\\\"row\\\">Danger</th> <td>Cell</td> <td>Cell</td> </tr> <tr class=\\\"table-warning\\\"><th scope=\\\"row\\\">Warning</th> <td>Cell</td> <td>Cell</td> </tr> <tr class=\\\"table-info\\\"><th scope=\\\"row\\\">Info</th> <td>Cell</td> <td>Cell</td> </tr> <tr class=\\\"table-light\\\"><th scope=\\\"row\\\">Light</th> <td>Cell</td> <td>Cell</td> </tr> <tr class=\\\"table-dark\\\"><th scope=\\\"row\\\">Dark</th> <td>Cell</td> <td>Cell</td> </tr> </tbody> </table></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">
Class
                        </th>
                        <th scope="col">
Heading
                        </th>
                        <th scope="col">
Heading
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
Default
                        </th>
                        <td>
Cell
                        </td>
                        <td>
Cell
                        </td>
                      </tr>
                      <tr className="table-primary"><th scope="row">
Primary
                        </th>
                        <td>
Cell
                        </td>
                        <td>
Cell
                        </td>
                      </tr>
                      <tr className="table-secondary"><th scope="row">
Secondary
                        </th>
                        <td>
Cell
                        </td>
                        <td>
Cell
                        </td>
                      </tr>
                      <tr className="table-success"><th scope="row">
Success
                        </th>
                        <td>
Cell
                        </td>
                        <td>
Cell
                        </td>
                      </tr>
                      <tr className="table-danger"><th scope="row">
Danger
                        </th>
                        <td>
Cell
                        </td>
                        <td>
Cell
                        </td>
                      </tr>
                      <tr className="table-warning"><th scope="row">
Warning
                        </th>
                        <td>
Cell
                        </td>
                        <td>
Cell
                        </td>
                      </tr>
                      <tr className="table-info"><th scope="row">
Info
                        </th>
                        <td>
Cell
                        </td>
                        <td>
Cell
                        </td>
                      </tr>
                      <tr className="table-light"><th scope="row">
Light
                        </th>
                        <td>
Cell
                        </td>
                        <td>
Cell
                        </td>
                      </tr>
                      <tr className="table-dark"><th scope="row">
Dark
                        </th>
                        <td>
Cell
                        </td>
                        <td>
Cell
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <h2 className="mt-6" data-anchor>
Accented tables
            </h2>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Striped rows
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Use 
                      <code>
.table-striped
                      </code>
 to add zebra-striping to any table row within the 
                      <code>
{"<tbody>"}
                      </code>
. 
                      <code>
.table-striped
                      </code>
 also works in table variants
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#striped-rows-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="striped-rows-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="striped-rows-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><table class=\\\"table table-striped\\\"> <thead> <tr> <th scope=\\\"col\\\">#</th> <th scope=\\\"col\\\">First</th> <th scope=\\\"col\\\">Last</th> <th scope=\\\"col\\\">Handle</th> </tr> </thead> <tbody> <tr> <th scope=\\\"row\\\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td> </tr> <tr> <th scope=\\\"row\\\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td> </tr> <tr> <th scope=\\\"row\\\">3</th> <td colspan=\\\"2\\\">Larry the Bird</td> <td>@twitter</td> </tr> </tbody> </table> <h4 class=\\\"mt-4 mb-3 text-body-secondary\\\">Table Dark</h4> <table class=\\\"table table-striped table-dark\\\"> <thead> <tr> <th scope=\\\"col\\\">#</th> <th scope=\\\"col\\\">First</th> <th scope=\\\"col\\\">Last</th> <th scope=\\\"col\\\">Handle</th> </tr> </thead> <tbody> <tr> <th scope=\\\"row\\\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td> </tr> <tr> <th scope=\\\"row\\\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td> </tr> <tr> <th scope=\\\"row\\\">3</th> <td colspan=\\\"2\\\">Larry the Bird</td> <td>@twitter</td> </tr> </tbody> </table> <h4 class=\\\"mt-4 mb-3 text-body-secondary\\\">Table Success</h4> <table class=\\\"table table-striped table-success\\\"> <thead> <tr> <th scope=\\\"col\\\">#</th> <th scope=\\\"col\\\">First</th> <th scope=\\\"col\\\">Last</th> <th scope=\\\"col\\\">Handle</th> </tr> </thead> <tbody> <tr> <th scope=\\\"row\\\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td> </tr> <tr> <th scope=\\\"row\\\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td> </tr> <tr> <th scope=\\\"row\\\">3</th> <td colspan=\\\"2\\\">Larry the Bird</td> <td>@twitter</td> </tr> </tbody> </table></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">
#
                        </th>
                        <th scope="col">
First
                        </th>
                        <th scope="col">
Last
                        </th>
                        <th scope="col">
Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
1
                        </th>
                        <td>
Mark
                        </td>
                        <td>
Otto
                        </td>
                        <td>
@mdo
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
2
                        </th>
                        <td>
Jacob
                        </td>
                        <td>
Thornton
                        </td>
                        <td>
@fat
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
3
                        </th>
                        <td colSpan={2}>
Larry the Bird
                        </td>
                        <td>
@twitter
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h4 className="mt-4 mb-3 text-body-secondary">
Table Dark
                  </h4>
                  <table className="table table-striped table-dark">
                    <thead>
                      <tr>
                        <th scope="col">
#
                        </th>
                        <th scope="col">
First
                        </th>
                        <th scope="col">
Last
                        </th>
                        <th scope="col">
Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
1
                        </th>
                        <td>
Mark
                        </td>
                        <td>
Otto
                        </td>
                        <td>
@mdo
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
2
                        </th>
                        <td>
Jacob
                        </td>
                        <td>
Thornton
                        </td>
                        <td>
@fat
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
3
                        </th>
                        <td colSpan={2}>
Larry the Bird
                        </td>
                        <td>
@twitter
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h4 className="mt-4 mb-3 text-body-secondary">
Table Success
                  </h4>
                  <table className="table table-striped table-success">
                    <thead>
                      <tr>
                        <th scope="col">
#
                        </th>
                        <th scope="col">
First
                        </th>
                        <th scope="col">
Last
                        </th>
                        <th scope="col">
Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
1
                        </th>
                        <td>
Mark
                        </td>
                        <td>
Otto
                        </td>
                        <td>
@mdo
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
2
                        </th>
                        <td>
Jacob
                        </td>
                        <td>
Thornton
                        </td>
                        <td>
@fat
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
3
                        </th>
                        <td colSpan={2}>
Larry the Bird
                        </td>
                        <td>
@twitter
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Hoverable rows
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Add 
                      <code>
.table-hover
                      </code>
 to enable a hover state on table rows within a 
                      <code>
{"<tbody>"}
                      </code>
. These hoverable rows can also be worked with 
                      <code>
.table-dark
                      </code>
 and combined with the striped variant.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#hoverable-rows-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="hoverable-rows-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="hoverable-rows-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><table class=\\\"table table-hover\\\"> <thead> <tr> <th scope=\\\"col\\\">#</th> <th scope=\\\"col\\\">First</th> <th scope=\\\"col\\\">Last</th> <th scope=\\\"col\\\">Handle</th> </tr> </thead> <tbody> <tr> <th scope=\\\"row\\\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td> </tr> <tr> <th scope=\\\"row\\\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td> </tr> <tr> <th scope=\\\"row\\\">3</th> <td colspan=\\\"2\\\">Larry the Bird</td> <td>@twitter</td> </tr> </tbody> </table> <h4 class=\\\"mt-4 mb-3 text-body-secondary\\\">Table Dark</h4> <table class=\\\"table table-hover table-dark\\\"> <thead> <tr> <th scope=\\\"col\\\">#</th> <th scope=\\\"col\\\">First</th> <th scope=\\\"col\\\">Last</th> <th scope=\\\"col\\\">Handle</th> </tr> </thead> <tbody> <tr> <th scope=\\\"row\\\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td> </tr> <tr> <th scope=\\\"row\\\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td> </tr> <tr> <th scope=\\\"row\\\">3</th> <td colspan=\\\"2\\\">Larry the Bird</td> <td>@twitter</td> </tr> </tbody> </table> <h4 class=\\\"mt-4 mb-3 text-body-secondary\\\">Table striped</h4> <table class=\\\"table table-hover table-striped\\\"> <thead> <tr> <th scope=\\\"col\\\">#</th> <th scope=\\\"col\\\">First</th> <th scope=\\\"col\\\">Last</th> <th scope=\\\"col\\\">Handle</th> </tr> </thead> <tbody> <tr> <th scope=\\\"row\\\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td> </tr> <tr> <th scope=\\\"row\\\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td> </tr> <tr> <th scope=\\\"row\\\">3</th> <td colspan=\\\"2\\\">Larry the Bird</td> <td>@twitter</td> </tr> </tbody> </table></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">
#
                        </th>
                        <th scope="col">
First
                        </th>
                        <th scope="col">
Last
                        </th>
                        <th scope="col">
Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
1
                        </th>
                        <td>
Mark
                        </td>
                        <td>
Otto
                        </td>
                        <td>
@mdo
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
2
                        </th>
                        <td>
Jacob
                        </td>
                        <td>
Thornton
                        </td>
                        <td>
@fat
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
3
                        </th>
                        <td colSpan={2}>
Larry the Bird
                        </td>
                        <td>
@twitter
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h4 className="mt-4 mb-3 text-body-secondary">
Table Dark
                  </h4>
                  <table className="table table-hover table-dark">
                    <thead>
                      <tr>
                        <th scope="col">
#
                        </th>
                        <th scope="col">
First
                        </th>
                        <th scope="col">
Last
                        </th>
                        <th scope="col">
Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
1
                        </th>
                        <td>
Mark
                        </td>
                        <td>
Otto
                        </td>
                        <td>
@mdo
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
2
                        </th>
                        <td>
Jacob
                        </td>
                        <td>
Thornton
                        </td>
                        <td>
@fat
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
3
                        </th>
                        <td colSpan={2}>
Larry the Bird
                        </td>
                        <td>
@twitter
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h4 className="mt-4 mb-3 text-body-secondary">
Table striped
                  </h4>
                  <table className="table table-hover table-striped">
                    <thead>
                      <tr>
                        <th scope="col">
#
                        </th>
                        <th scope="col">
First
                        </th>
                        <th scope="col">
Last
                        </th>
                        <th scope="col">
Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
1
                        </th>
                        <td>
Mark
                        </td>
                        <td>
Otto
                        </td>
                        <td>
@mdo
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
2
                        </th>
                        <td>
Jacob
                        </td>
                        <td>
Thornton
                        </td>
                        <td>
@fat
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
3
                        </th>
                        <td colSpan={2}>
Larry the Bird
                        </td>
                        <td>
@twitter
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Active tables
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Highlight a table row or cell by adding a 
                      <code>
.table-active
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
                      <a href="#active-tables-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="active-tables-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="active-tables-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><table class=\\\"table\\\"> <thead> <tr> <th scope=\\\"col\\\">#</th> <th scope=\\\"col\\\">First</th> <th scope=\\\"col\\\">Last</th> <th scope=\\\"col\\\">Handle</th> </tr> </thead> <tbody> <tr class=\\\"table-active\\\"><th scope=\\\"row\\\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td> </tr> <tr> <th scope=\\\"row\\\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td> </tr> <tr> <th scope=\\\"row\\\">3</th> <td class=\\\"table-active\\\" colspan=\\\"2\\\">Larry the Bird</td> <td>@twitter</td> </tr> </tbody> </table></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">
#
                        </th>
                        <th scope="col">
First
                        </th>
                        <th scope="col">
Last
                        </th>
                        <th scope="col">
Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table-active"><th scope="row">
1
                        </th>
                        <td>
Mark
                        </td>
                        <td>
Otto
                        </td>
                        <td>
@mdo
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
2
                        </th>
                        <td>
Jacob
                        </td>
                        <td>
Thornton
                        </td>
                        <td>
@fat
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
3
                        </th>
                        <td className="table-active" colSpan={2}>
Larry the Bird
                        </td>
                        <td>
@twitter
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <h2 className="mt-6" data-anchor>
Table Borders
            </h2>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Bordered tables
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Add 
                      <code>
.table-bordered
                      </code>
 for borders on all sides of the table and cells. 
                      <PhoenixLink href="/modules/tables/modules/utilities/borders.html#border-color">
Border color utilities
                      </PhoenixLink>
 can be added to change colors.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#bordered-tables-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="bordered-tables-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="bordered-tables-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><table class=\\\"table table-bordered\\\"> <thead> <tr> <th scope=\\\"col\\\">#</th> <th scope=\\\"col\\\">First</th> <th scope=\\\"col\\\">Last</th> <th scope=\\\"col\\\">Handle</th> </tr> </thead> <tbody> <tr> <th scope=\\\"row\\\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td> </tr> <tr> <th scope=\\\"row\\\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td> </tr> <tr> <th scope=\\\"row\\\">3</th> <td colspan=\\\"2\\\">Larry the Bird</td> <td>@twitter</td> </tr> </tbody> </table> <h4 class=\\\"mt-4 mb-3 text-body-secondary\\\">Border utility class</h4> <table class=\\\"table table-bordered border-primary\\\"> <thead> <tr> <th scope=\\\"col\\\">#</th> <th scope=\\\"col\\\">First</th> <th scope=\\\"col\\\">Last</th> <th scope=\\\"col\\\">Handle</th> </tr> </thead> <tbody> <tr> <th scope=\\\"row\\\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td> </tr> <tr> <th scope=\\\"row\\\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td> </tr> <tr> <th scope=\\\"row\\\">3</th> <td colspan=\\\"2\\\">Larry the Bird</td> <td>@twitter</td> </tr> </tbody> </table></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">
#
                        </th>
                        <th scope="col">
First
                        </th>
                        <th scope="col">
Last
                        </th>
                        <th scope="col">
Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
1
                        </th>
                        <td>
Mark
                        </td>
                        <td>
Otto
                        </td>
                        <td>
@mdo
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
2
                        </th>
                        <td>
Jacob
                        </td>
                        <td>
Thornton
                        </td>
                        <td>
@fat
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
3
                        </th>
                        <td colSpan={2}>
Larry the Bird
                        </td>
                        <td>
@twitter
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h4 className="mt-4 mb-3 text-body-secondary">
Border utility class
                  </h4>
                  <table className="table table-bordered border-primary">
                    <thead>
                      <tr>
                        <th scope="col">
#
                        </th>
                        <th scope="col">
First
                        </th>
                        <th scope="col">
Last
                        </th>
                        <th scope="col">
Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
1
                        </th>
                        <td>
Mark
                        </td>
                        <td>
Otto
                        </td>
                        <td>
@mdo
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
2
                        </th>
                        <td>
Jacob
                        </td>
                        <td>
Thornton
                        </td>
                        <td>
@fat
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
3
                        </th>
                        <td colSpan={2}>
Larry the Bird
                        </td>
                        <td>
@twitter
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Table without borders
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Add 
                      <code>
.table-borderless
                      </code>
 for a table without borders.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#table-without-borders-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="table-without-borders-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="table-without-borders-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><table class=\\\"table table-borderless\\\"> <thead> <tr> <th scope=\\\"col\\\">#</th> <th scope=\\\"col\\\">First</th> <th scope=\\\"col\\\">Last</th> <th scope=\\\"col\\\">Handle</th> </tr> </thead> <tbody> <tr> <th scope=\\\"row\\\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td> </tr> <tr> <th scope=\\\"row\\\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td> </tr> <tr> <th scope=\\\"row\\\">3</th> <td colspan=\\\"2\\\">Larry the Bird</td> <td>@twitter</td> </tr> </tbody> </table> <h4 class=\\\"mt-4 mb-3 text-body-secondary\\\">Table Dark</h4> <table class=\\\"table table table-dark table-borderless\\\"> <thead> <tr> <th scope=\\\"col\\\">#</th> <th scope=\\\"col\\\">First</th> <th scope=\\\"col\\\">Last</th> <th scope=\\\"col\\\">Handle</th> </tr> </thead> <tbody> <tr> <th scope=\\\"row\\\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td> </tr> <tr> <th scope=\\\"row\\\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td> </tr> <tr> <th scope=\\\"row\\\">3</th> <td colspan=\\\"2\\\">Larry the Bird</td> <td>@twitter</td> </tr> </tbody> </table></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">
#
                        </th>
                        <th scope="col">
First
                        </th>
                        <th scope="col">
Last
                        </th>
                        <th scope="col">
Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
1
                        </th>
                        <td>
Mark
                        </td>
                        <td>
Otto
                        </td>
                        <td>
@mdo
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
2
                        </th>
                        <td>
Jacob
                        </td>
                        <td>
Thornton
                        </td>
                        <td>
@fat
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
3
                        </th>
                        <td colSpan={2}>
Larry the Bird
                        </td>
                        <td>
@twitter
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h4 className="mt-4 mb-3 text-body-secondary">
Table Dark
                  </h4>
                  <table className="table table table-dark table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">
#
                        </th>
                        <th scope="col">
First
                        </th>
                        <th scope="col">
Last
                        </th>
                        <th scope="col">
Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
1
                        </th>
                        <td>
Mark
                        </td>
                        <td>
Otto
                        </td>
                        <td>
@mdo
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
2
                        </th>
                        <td>
Jacob
                        </td>
                        <td>
Thornton
                        </td>
                        <td>
@fat
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
3
                        </th>
                        <td colSpan={2}>
Larry the Bird
                        </td>
                        <td>
@twitter
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Small Tables
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Add 
                      <code>
.table-sm
                      </code>
 to make any 
                      <code>
.table
                      </code>
 more compact by cutting all cell 
                      <code>
padding
                      </code>
 in half.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#small-tables-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="small-tables-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="small-tables-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><table class=\\\"table table-sm\\\"> <thead> <tr> <th scope=\\\"col\\\">#</th> <th scope=\\\"col\\\">First</th> <th scope=\\\"col\\\">Last</th> <th scope=\\\"col\\\">Handle</th> </tr> </thead> <tbody> <tr> <th scope=\\\"row\\\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td> </tr> <tr> <th scope=\\\"row\\\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td> </tr> <tr> <th scope=\\\"row\\\">3</th> <td colspan=\\\"2\\\">Larry the Bird</td> <td>@twitter</td> </tr> </tbody> </table></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th scope="col">
#
                        </th>
                        <th scope="col">
First
                        </th>
                        <th scope="col">
Last
                        </th>
                        <th scope="col">
Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
1
                        </th>
                        <td>
Mark
                        </td>
                        <td>
Otto
                        </td>
                        <td>
@mdo
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
2
                        </th>
                        <td>
Jacob
                        </td>
                        <td>
Thornton
                        </td>
                        <td>
@fat
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
3
                        </th>
                        <td colSpan={2}>
Larry the Bird
                        </td>
                        <td>
@twitter
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <h2 data-anchor>
Responsive Tables 
            </h2>
            <p>
Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a 
              <code>
.table
              </code>
 with 
              <code>
.table-responsive
              </code>
. Or, pick a maximum breakpoint with which to have a responsive table up to by using 
              <code>
{".table-responsive{-sm|-md|-lg|-xl|-xxl}"}
              </code>
.
            </p>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Always responsive
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Across every breakpoint, use 
                      <code>
.table-responsive
                      </code>
 for horizontally scrolling tables.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#always-responsive-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="always-responsive-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="always-responsive-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"table-responsive scrollbar\\\"> <table class=\\\"table\\\"> <thead> <tr> <th scope=\\\"col\\\">#</th> <th scope=\\\"col\\\">First</th> <th scope=\\\"col\\\">Last</th> <th scope=\\\"col\\\">Handle</th> </tr> </thead> <tbody> <tr> <th scope=\\\"row\\\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td> </tr> <tr> <th scope=\\\"row\\\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td> </tr> <tr> <th scope=\\\"row\\\">3</th> <td colspan=\\\"2\\\">Larry the Bird</td> <td>@twitter</td> </tr> </tbody> </table> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="table-responsive scrollbar">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">
#
                          </th>
                          <th scope="col">
First
                          </th>
                          <th scope="col">
Last
                          </th>
                          <th scope="col">
Handle
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
1
                          </th>
                          <td>
Mark
                          </td>
                          <td>
Otto
                          </td>
                          <td>
@mdo
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
2
                          </th>
                          <td>
Jacob
                          </td>
                          <td>
Thornton
                          </td>
                          <td>
@fat
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
3
                          </th>
                          <td colSpan={2}>
Larry the Bird
                          </td>
                          <td>
@twitter
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Breakpoint specific
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Use 
                      <code>
{".table-responsive{-sm|-md|-lg|-xl|-xxl}"}
                      </code>
 as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#breakpoint-specific-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="breakpoint-specific-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="breakpoint-specific-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"table-responsive table-reponsive-sm scrollbar\\\"> <table class=\\\"table\\\"> <thead> <tr> <th scope=\\\"col\\\">#</th> <th scope=\\\"col\\\">First</th> <th scope=\\\"col\\\">Last</th> <th scope=\\\"col\\\">Handle</th> </tr> </thead> <tbody> <tr> <th scope=\\\"row\\\">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td> </tr> <tr> <th scope=\\\"row\\\">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td> </tr> <tr> <th scope=\\\"row\\\">3</th> <td colspan=\\\"2\\\">Larry the Bird</td> <td>@twitter</td> </tr> </tbody> </table> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="table-responsive table-reponsive-sm scrollbar">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">
#
                          </th>
                          <th scope="col">
First
                          </th>
                          <th scope="col">
Last
                          </th>
                          <th scope="col">
Handle
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
1
                          </th>
                          <td>
Mark
                          </td>
                          <td>
Otto
                          </td>
                          <td>
@mdo
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
2
                          </th>
                          <td>
Jacob
                          </td>
                          <td>
Thornton
                          </td>
                          <td>
@fat
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
3
                          </th>
                          <td colSpan={2}>
Larry the Bird
                          </td>
                          <td>
@twitter
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
                <a href="#overview" className="nav-link">
Overview
                </a>
              </li>
              <li className="nav-item">
                <a href="#variants" className="nav-link">
Variants
                </a>
              </li>
              <li className="nav-item">
                <a href="#accented-tables" className="nav-link">
Accented tables
                </a>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a href="#striped-rows" className="nav-link">
Striped rows
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#hoverable-rows" className="nav-link">
Hoverable rows
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#active-tables" className="nav-link">
Active tables
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#table-borders" className="nav-link">
Table Borders
                </a>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a href="#bordered-tables" className="nav-link">
Bordered tables
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#table-without-borders" className="nav-link">
Table without borders
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#small-tables" className="nav-link">
Small Tables
                </a>
              </li>
              <li className="nav-item">
                <a href="#responsive-tables" className="nav-link">
Responsive Tables
                </a>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a href="#always-responsive" className="nav-link">
Always responsive
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#breakpoint-specific" className="nav-link">
Breakpoint specific
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
