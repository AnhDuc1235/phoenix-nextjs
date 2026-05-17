'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Spacing() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Spacing
    </h2>

    <p className="text-body-tertiary lead mb-2">
Bootstrap includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an element’s appearance.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/utilities/spacing/" className="btn btn-link p-0"  target="_blank">
Spacing on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="mb-9">
            <div className="card border my-5">
              <div className="card-header border-bottom">
                <h3 data-anchor>
Margin and padding
                </h3>
              </div>
              <div className="card-body">
                <p>
Assign responsive-friendly margin or padding values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from .25rem to 3rem.
                </p>
                <p className="mb-0">
Using the CSS Grid layout module? Consider using the 
                  <a href="https://getbootstrap.com/docs/5.1/utilities/spacing/#gap">
gap utility
                  </a>
                </p>
              </div>
            </div>
            <div className="card border my-5">
              <div className="card-header border-bottom">
                <h3 className="mb-0" data-anchor>
Notations 
                </h3>
              </div>
              <div className="card-body">
                <p>
 Spacing utilities that apply to all breakpoints, from 
                  <code>
xs 
                  </code>
to 
                  <code>
xxl
                  </code>
, have no breakpoint abbreviation in them. This is because those classes are applied from 
                  <code>
min-width: 0 
                  </code>
and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.
                </p>
                <p>
The classes are named using the format 
                  <code>
{"{property}{sides}-{size}"}
                  </code>
 for 
                  <code>
xs
                  </code>
 and 
                  <code>
{"{property}{sides}-{breakpoint}-{size}"}
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
 and 
                  <code>
xxl
                  </code>
.
                </p>
                <p className="mb-0">
Where
                  <em>
property
                  </em>
 is one of:
                </p>
                <ul>
                  <li>
                    <code>
m
                    </code>
 - for classes that set 
                    <code>
margin
                    </code>
                  </li>
                  <li>
                    <code>
p
                    </code>
 - for classes that set 
                    <code>
padding
                    </code>
                  </li>
                </ul>
                <p className="mb-0">
Where
                  <em>
sides
                  </em>
 is one of:
                </p>
                <ul>
                  <li>
                    <code>
t
                    </code>
 - for classes that set 
                    <code>
margin-top
                    </code>
 or 
                    <code>
padding-top
                    </code>
                  </li>
                  <li>
                    <code>
b
                    </code>
 - for classes that set 
                    <code>
margin-bottom
                    </code>
 or 
                    <code>
padding-bottom
                    </code>
                  </li>
                  <li>
                    <code>
s
                    </code>
 - for classes that set 
                    <code>
margin-left
                    </code>
 or 
                    <code>
padding-left
                    </code>
                  </li>
                  <li>
                    <code>
e
                    </code>
 - for classes that set 
                    <code>
margin-right
                    </code>
 or 
                    <code>
padding-right
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
blank - for classes that set a 
                    <code>
margin
                    </code>
 or 
                    <code>
padding
                    </code>
 on all 4 sides of the element
                  </li>
                </ul>
                <p className="mb-0">
Where
                  <em>
size
                  </em>
 is one of: 
                  <code>
0
                  </code>
,
                  <code>
1
                  </code>
,
                  <code>
2
                  </code>
,
                  <code>
3
                  </code>
,
                  <code>
4
                  </code>
,
                  <code>
5
                  </code>
,
                  <code>
6
                  </code>
,
                  <code>
7
                  </code>
,
                  <code>
8
                  </code>
,
                  <code>
9
                  </code>
,
                  <code>
10
                  </code>
,
                  <code>
11
                  </code>
{" & "}
                  <code>
auto 
                  </code>
                </p>
              </div>
            </div>
            <div className="card border my-5">
              <div className="card-header border-bottom">
                <h3 className="mb-1" data-anchor>
Examples
                </h3>
                <p className="text-body-tertiary mb-0">
Here are some representative examples of these classes:
                </p>
              </div>
              <div className="card-body p-0">
                <pre>
{"<code class=\"language-css\">.mt-0 { margin-top: 0 !important; } .ms-1 { margin-left: ($spacer * .25) !important; } .px-2 { padding-left: ($spacer * .5) !important; padding-right: ($spacer * .5) !important; } .p-3 { padding: $spacer !important; }</code>"}
                </pre>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Horizontal centering
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Additionally, Bootstrap also includes an 
                      <code>
.mx-auto
                      </code>
 class for horizontally centering fixed-width block level content—that is, content that has 
                      <code>
display: block
                      </code>
 and 
                      <code>
a width
                      </code>
 set—by setting the horizontal margins to 
                      <code>
auto
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
                      <a href="#horizontal-centering-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="horizontal-centering-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="horizontal-centering-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"mx-auto bg-body-highlight\\\" style=\\\"width: 200px;\\\">Centered element</div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="mx-auto bg-body-highlight" style={{"width":"200px"} as CSSProperties}>
Centered element
                  </div>
                </div>
              </div>
            </div>
            <div className="card border my-5">
              <div className="card-header border-bottom">
                <h3 className="mb-1" data-anchor>
Negative margins
                </h3>
                <p className="text-body-tertiary mb-0">
In CSS, 
                  <code>
margin 
                  </code>
properties can utilize negative values (
                  <code>
padding 
                  </code>
cannot). These negative margins are 
                  <strong>
disabled 
                  </strong>
by default, but can be enabled in Sass by setting 
                  <code>
$enable-negative-margins: true
                  </code>
. The syntax is nearly the same as the default, positive margin utilities, but with the addition of 
                  <code>
n 
                  </code>
before the requested size. Here’s an example class that’s the opposite of 
                  <code>
.mt-1
                  </code>
: 
                </p>
              </div>
              <div className="card-body p-0">
                <pre>
{"<code class=\"language-css\">.mt-n1 { margin-top: -0.25rem !important; }</code>"}
                </pre>
              </div>
            </div>
            <div className="card shadow-none border my-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Gap
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
When using 
                      <code>
display: grid
                      </code>
, you can make use of 
                      <code>
gap
                      </code>
 utilities on the parent grid container. This can save on having to add margin utilities to individual grid items (children of a 
                      <code>
display: grid
                      </code>
 container). Gap utilities are responsive by default, and are generated via our utilities API, based on the 
                      <code>
$spacers
                      </code>
 Sass map.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#gap-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="gap-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="gap-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"d-grid gap-3\\\"> <div class=\\\"p-2 bg-body-highlight border border-translucent\\\">Grid item 1</div> <div class=\\\"p-2 bg-body-highlight border border-translucent\\\">Grid item 2</div> <div class=\\\"p-2 bg-body-highlight border border-translucent\\\">Grid item 3</div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="d-grid gap-3">
                    <div className="p-2 bg-body-highlight border border-translucent">
Grid item 1
                    </div>
                    <div className="p-2 bg-body-highlight border border-translucent">
Grid item 2
                    </div>
                    <div className="p-2 bg-body-highlight border border-translucent">
Grid item 3
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
                <a href="#margin-and-padding" className="nav-link">
Margin and padding
                </a>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a href="#notations" className="nav-link">
Notations
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#examples" className="nav-link">
Examples
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#horizontal-centering" className="nav-link">
Horizontal centering
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#negative-margins" className="nav-link">
Negative margins
                </a>
              </li>
              <li className="nav-item">
                <a href="#gap" className="nav-link">
Gap
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
