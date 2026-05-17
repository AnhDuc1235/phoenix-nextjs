'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Grid() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Grid
    </h2>

    <p className="text-body-tertiary lead mb-2">
Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers, Sass variables and mixins, and dozens of predefined classes.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/layout/grid/" className="btn btn-link p-0"  target="_blank">
Grid on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
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
Grid options
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
While Bootstrap uses 
                      <code>
.col-
                      </code>
, 
                      <code>
.col-sm-
                      </code>
, 
                      <code>
.col-md-
                      </code>
, 
                      <code>
.col-lg-
                      </code>
 and 
                      <code>
.col-xl-
                      </code>
, we introduced a new breakpoint, 
                      <code>
.col-xxl-
                      </code>
 for the massive screen size.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#grid-options-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="grid-options-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="grid-options-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"table-responsive scrollbar\\\"> <table class=\\\"table table-bordered table-striped mb-0\\\"> <thead> <tr> <th></th> <th class=\\\"text-center\\\">Extra small<br /><small>&lt;576px</small></th> <th class=\\\"text-center\\\">Small<br /><small>≥576px</small></th> <th class=\\\"text-center\\\">Medium<br /><small>≥768px</small></th> <th class=\\\"text-center\\\">Large<br /><small>≥992px</small></th> <th class=\\\"text-center\\\">Extra large<br /><small>≥1200px</small></th> <th class=\\\"text-center\\\">Massive<br /><small>≥1400px</small></th> </tr> </thead> <tbody> <tr> <th class=\\\"text-nowrap\\\" scope=\\\"row\\\">Max container width</th> <td>None (auto)</td> <td>540px</td> <td>720px</td> <td>960px</td> <td>1140px</td> <td>1320px</td> </tr> <tr> <th class=\\\"text-nowrap\\\" scope=\\\"row\\\">Class prefix</th> <td><code>.col-</code></td> <td><code>.col-sm-</code></td> <td><code>.col-md-</code></td> <td><code>.col-lg-</code></td> <td><code>.col-xl-</code></td> <td><code>.col-xxl-</code></td> </tr> <tr> <th class=\\\"text-nowrap\\\" scope=\\\"row\\\"># of columns</th> <td colspan=\\\"6\\\">12</td> </tr> <tr> <th class=\\\"text-nowrap\\\" scope=\\\"row\\\">Gutter width</th> <td colspan=\\\"6\\\">30px (15px on each side of a column)</td> </tr> <tr> <th class=\\\"text-nowrap\\\" scope=\\\"row\\\">Nestable</th> <td colspan=\\\"6\\\">Yes</td> </tr> <tr> <th class=\\\"text-nowrap\\\" scope=\\\"row\\\">Column ordering</th> <td colspan=\\\"6\\\">Yes</td> </tr> </tbody> </table> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="table-responsive scrollbar">
                    <table className="table table-bordered table-striped mb-0">
                      <thead>
                        <tr>
                          <th>                          </th>
                          <th className="text-center">
Extra small
                            <br />
                            <small>
{"<576px"}
                            </small>
                          </th>
                          <th className="text-center">
Small
                            <br />
                            <small>
≥576px
                            </small>
                          </th>
                          <th className="text-center">
Medium
                            <br />
                            <small>
≥768px
                            </small>
                          </th>
                          <th className="text-center">
Large
                            <br />
                            <small>
≥992px
                            </small>
                          </th>
                          <th className="text-center">
Extra large
                            <br />
                            <small>
≥1200px
                            </small>
                          </th>
                          <th className="text-center">
Massive
                            <br />
                            <small>
≥1400px
                            </small>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className="text-nowrap" scope="row">
Max container width
                          </th>
                          <td>
None (auto)
                          </td>
                          <td>
540px
                          </td>
                          <td>
720px
                          </td>
                          <td>
960px
                          </td>
                          <td>
1140px
                          </td>
                          <td>
1320px
                          </td>
                        </tr>
                        <tr>
                          <th className="text-nowrap" scope="row">
Class prefix
                          </th>
                          <td>
                            <code>
.col-
                            </code>
                          </td>
                          <td>
                            <code>
.col-sm-
                            </code>
                          </td>
                          <td>
                            <code>
.col-md-
                            </code>
                          </td>
                          <td>
                            <code>
.col-lg-
                            </code>
                          </td>
                          <td>
                            <code>
.col-xl-
                            </code>
                          </td>
                          <td>
                            <code>
.col-xxl-
                            </code>
                          </td>
                        </tr>
                        <tr>
                          <th className="text-nowrap" scope="row">
# of columns
                          </th>
                          <td colSpan={6}>
12
                          </td>
                        </tr>
                        <tr>
                          <th className="text-nowrap" scope="row">
Gutter width
                          </th>
                          <td colSpan={6}>
30px (15px on each side of a column)
                          </td>
                        </tr>
                        <tr>
                          <th className="text-nowrap" scope="row">
Nestable
                          </th>
                          <td colSpan={6}>
Yes
                          </td>
                        </tr>
                        <tr>
                          <th className="text-nowrap" scope="row">
Column ordering
                          </th>
                          <td colSpan={6}>
Yes
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
Equal-width
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
For example, here are two grid layouts that apply to every device and viewport, from xs to xxl. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#equal-width-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="equal-width-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="equal-width-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"container text-center\\\"> <div class=\\\"row bg-body-highlight mb-3\\\"> <div class=\\\"col p-2 border\\\">1 of 2</div> <div class=\\\"col p-2 border\\\">2 of 2</div> </div> <div class=\\\"row bg-body-highlight\\\"> <div class=\\\"col p-2 border\\\">1 of 3</div> <div class=\\\"col p-2 border\\\">2 of 3</div> <div class=\\\"col p-2 border\\\">3 of 3</div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="container text-center">
                    <div className="row bg-body-highlight mb-3">
                      <div className="col p-2 border">
1 of 2
                      </div>
                      <div className="col p-2 border">
2 of 2
                      </div>
                    </div>
                    <div className="row bg-body-highlight">
                      <div className="col p-2 border">
1 of 3
                      </div>
                      <div className="col p-2 border">
2 of 3
                      </div>
                      <div className="col p-2 border">
3 of 3
                      </div>
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
Column width
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#column-width-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="column-width-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="column-width-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"container text-center\\\"> <div class=\\\"row bg-body-highlight mb-3\\\"> <div class=\\\"col p-2 border\\\">1 of 3</div> <div class=\\\"col-6 p-2 border\\\">2 of 3 (wider)</div> <div class=\\\"col p-2 border\\\">3 of 3</div> </div> <div class=\\\"row bg-body-highlight\\\"> <div class=\\\"col p-2 border\\\">1 of 3</div> <div class=\\\"col-5 p-2 border\\\">2 of 3 (wider)</div> <div class=\\\"col p-2 border\\\">3 of 3</div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="container text-center">
                    <div className="row bg-body-highlight mb-3">
                      <div className="col p-2 border">
1 of 3
                      </div>
                      <div className="col-6 p-2 border">
2 of 3 (wider)
                      </div>
                      <div className="col p-2 border">
3 of 3
                      </div>
                    </div>
                    <div className="row bg-body-highlight">
                      <div className="col p-2 border">
1 of 3
                      </div>
                      <div className="col-5 p-2 border">
2 of 3 (wider)
                      </div>
                      <div className="col p-2 border">
3 of 3
                      </div>
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
Stacked to horizontal
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Using a single set of 
                      <code>
.col-sm-*
                      </code>
 classes, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (
                      <code>
sm
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
                      <a href="#stacked-to-horizontal-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="stacked-to-horizontal-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="stacked-to-horizontal-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"container text-center\\\"> <div class=\\\"row bg-body-highlight mb-3\\\"> <div class=\\\"col-sm-8 p-2 border\\\">col-sm-8</div> <div class=\\\"col-sm-4 p-2 border\\\">col-sm-4</div> </div> <div class=\\\"row bg-body-highlight\\\"> <div class=\\\"col-sm p-2 border\\\">col-sm</div> <div class=\\\"col-sm p-2 border\\\">col-sm</div> <div class=\\\"col-sm p-2 border\\\">col-sm</div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="container text-center">
                    <div className="row bg-body-highlight mb-3">
                      <div className="col-sm-8 p-2 border">
col-sm-8
                      </div>
                      <div className="col-sm-4 p-2 border">
col-sm-4
                      </div>
                    </div>
                    <div className="row bg-body-highlight">
                      <div className="col-sm p-2 border">
col-sm
                      </div>
                      <div className="col-sm p-2 border">
col-sm
                      </div>
                      <div className="col-sm p-2 border">
col-sm
                      </div>
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
Mix and match
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#mix-and-match-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="mix-and-match-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="mix-and-match-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"container text-center\\\"> <div class=\\\"row mb-3\\\"> <div class=\\\"col-md-8 bg-body-highlight p-2 border\\\">.col-md-8</div> <div class=\\\"col-6 col-md-4 bg-body-highlight p-2 border\\\">.col-6 .col-md-4</div> </div> <div class=\\\"row mb-3\\\"> <div class=\\\"col-6 col-md-4 bg-body-highlight p-2 border\\\">.col-6 .col-md-4</div> <div class=\\\"col-6 col-md-4 bg-body-highlight p-2 border\\\">.col-6 .col-md-4</div> <div class=\\\"col-6 col-md-4 bg-body-highlight p-2 border\\\">.col-6 .col-md-4</div> </div> <div class=\\\"row\\\"> <div class=\\\"col-6 bg-body-highlight p-2 border\\\">.col-6</div> <div class=\\\"col-6 bg-body-highlight p-2 border\\\">.col-6</div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="container text-center">
                    <div className="row mb-3">
                      <div className="col-md-8 bg-body-highlight p-2 border">
.col-md-8
                      </div>
                      <div className="col-6 col-md-4 bg-body-highlight p-2 border">
.col-6 .col-md-4
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-6 col-md-4 bg-body-highlight p-2 border">
.col-6 .col-md-4
                      </div>
                      <div className="col-6 col-md-4 bg-body-highlight p-2 border">
.col-6 .col-md-4
                      </div>
                      <div className="col-6 col-md-4 bg-body-highlight p-2 border">
.col-6 .col-md-4
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 bg-body-highlight p-2 border">
.col-6
                      </div>
                      <div className="col-6 bg-body-highlight p-2 border">
.col-6
                      </div>
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
Row columns
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Use the responsive 
                      <code>
.row-cols-*
                      </code>
 classes to quickly set the number of columns that best render your content and layout. Whereas normal 
                      <code>
.col-*
                      </code>
 classes apply to the individual columns (e.g., 
                      <code>
.col-md-4
                      </code>
), the row columns classes are set on the parent .row as a shortcut. With 
                      <code>
.row-cols-auto
                      </code>
 you can give the columns their natural width. 
                      <br />
 Use these row columns classes to quickly create basic grid layouts or to control your card layouts.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#row-columns-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="row-columns-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="row-columns-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"container text-center\\\"> <div class=\\\"row row-cols-2 bg-body-highlight\\\"> <div class=\\\"col p-2 border\\\">Column</div> <div class=\\\"col p-2 border\\\">Column</div> <div class=\\\"col p-2 border\\\">Column</div> <div class=\\\"col p-2 border\\\">Column</div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="container text-center">
                    <div className="row row-cols-2 bg-body-highlight">
                      <div className="col p-2 border">
Column
                      </div>
                      <div className="col p-2 border">
Column
                      </div>
                      <div className="col p-2 border">
Column
                      </div>
                      <div className="col p-2 border">
Column
                      </div>
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
Nesting
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
To nest your content with the default grid, add a new 
                      <code>
.row
                      </code>
 and set of 
                      <code>
.col-sm-*
                      </code>
 columns within an existing 
                      <code>
.col-sm-*
                      </code>
 column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#nesting-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="nesting-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="nesting-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"container text-center\\\"> <div class=\\\"row\\\"> <div class=\\\"col-sm-3 bg-body-highlight p-2 border\\\">Level 1: .col-sm-3</div> <div class=\\\"col-sm-9 bg-body-highlight p-3 border\\\"> <div class=\\\"row\\\"> <div class=\\\"col-8 col-sm-6 p-2 border\\\">Level 2: .col-8 .col-sm-6</div> <div class=\\\"col-4 col-sm-6 p-2 border\\\">Level 2: .col-4 .col-sm-6</div> </div> </div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col-sm-3 bg-body-highlight p-2 border">
Level 1: .col-sm-3
                      </div>
                      <div className="col-sm-9 bg-body-highlight p-3 border">
                        <div className="row">
                          <div className="col-8 col-sm-6 p-2 border">
Level 2: .col-8 .col-sm-6
                          </div>
                          <div className="col-4 col-sm-6 p-2 border">
Level 2: .col-4 .col-sm-6
                          </div>
                        </div>
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
                <a href="#grid-options" className="nav-link">
Grid options
                </a>
              </li>
              <li className="nav-item">
                <a href="#equal-width" className="nav-link">
Equal-width
                </a>
              </li>
              <li className="nav-item">
                <a href="#column-width" className="nav-link">
Column width
                </a>
              </li>
              <li className="nav-item">
                <a href="#stacked-to-horizontal" className="nav-link">
Stacked to horizontal
                </a>
              </li>
              <li className="nav-item">
                <a href="#mix-and-match" className="nav-link">
Mix and match
                </a>
              </li>
              <li className="nav-item">
                <a href="#row-columns" className="nav-link">
Row columns
                </a>
              </li>
              <li className="nav-item">
                <a href="#nesting" className="nav-link">
Nesting
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
