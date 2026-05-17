'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Gulp() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Gulp
    </h2>

    <div className="card shadow-none border my-4" data-component-card>
      <div className="card-header p-4 border-bottom bg-body">
        <div className="row g-3 justify-content-between align-items-center">
          <div className="col-12 col-md">
            <h4 className="text-body mb-0" data-anchor>
Introduction
            </h4>
          </div>
        </div>
      </div>
      <div className="card-body p-0">
        <div className="collapse code-collapse" id="introduction-code">
          <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p class=\\\"mt-4\\\">The <code>gulp</code> command will build, serve and watch the project with the following gulp tasks:</p></code>"}
          </pre>
        </div>
        <div className="p-4 code-to-copy">
          <p className="mt-4">
The 
            <code>
gulp
            </code>
 command will build, serve and watch the project with the following gulp tasks:
          </p>
        </div>
      </div>
    </div>

    <div className="card shadow-none border my-4" data-component-card>
      <div className="card-header p-4 border-bottom bg-body">
        <div className="row g-3 justify-content-between align-items-center">
          <div className="col-12 col-md">
            <h4 className="text-body mb-0" data-anchor>
Commands
            </h4>
          </div>
        </div>
      </div>
      <div className="card-body p-0">
        <div className="collapse code-collapse" id="commands-code">
          <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"table-responsive scrollbar\\\"> <table class=\\\"table table-bordered\\\"> <thead class=\\\"text-center\\\"><tr> <th class=\\\"text-nowrap\\\">Task</th> <th>Action</th> </tr> </thead> <tbody> <tr> <td class=\\\"text-nowrap ps-3\\\"><code>clean</code></td> <td>Delete the following directories: <pre><code class=\\\"lang-html\\\">public/assets/css public/assets/js public/vendors // packages which are included in vendors.json public/**/*.html </code></pre> </td> </tr> <tr> <td class=\\\"text-nowrap ps-3\\\"><code>style</code></td> <td>Compiles <code>scss/theme.scss</code> and generates <code>theme.css, theme.min.css, theme-rlt.css, theme-rtl.min.css</code> and <code>theme.css.map, theme.min.css.map, theme-rlt.css.map, theme-rtl.min.css.map</code> to the <code>public/assets/css/ </code> directory.</td> </tr> <tr> <td class=\\\"text-nowrap ps-3\\\"><code>script</code></td> <td>Concat the <code>js</code> files from <code>src/js/</code> and transpiles with babel to <code>phoenix.js</code> to the <code>public/assets/js/</code> directory.</td> </tr> <tr> <td class=\\\"text-nowrap ps-3\\\"><code>compile:all</code></td> <td>Compiles all the <code>js, </code><code>scss, </code><code>pug </code>files from the <code>src</code> directory.</td> </tr> <tr> <td class=\\\"text-nowrap ps-3\\\"><code>vendor</code></td> <td>Runs <code>vendor:clean</code> and <code>vendor:move</code> in series.</td> </tr> <tr> <td class=\\\"text-nowrap ps-3\\\"><code>vendor:clean</code></td> <td>Delete the vendors from <code>public/vendors</code> directory which are included in <code>vendors.json</code>.</td> </tr> <tr> <td class=\\\"text-nowrap ps-3\\\"><code>vendor:move</code></td> <td>Copies the vendors from <code>node_modules/</code> directory to <code>public/vendors</code> directory according to the <code>vendors.json</code>.</td> </tr> <tr> <td class=\\\"text-nowrap ps-3\\\"><code>watch</code></td> <td>All of the following folders are monitored for changes, which will tell the browser to reload automatically after any changes are made: <pre><code class=\\\"lang-html\\\">public/assets/img public/assets/fonts public/assets/video public/vendors/ src/pug src/scss src/js</code></pre> </td> </tr> <tr> <td class=\\\"text-nowrap ps-3\\\"><code>build</code></td> <td>Will delete previous build directory and generate a new compressed version to deploy <pre><code class=\\\"lang-html\\\">build/assets/img build/assets/fonts build/assets/video build/assets/css build/assets/js build/vendors/ build/**/*.html</code></pre> </td> </tr> <tr> <td class=\\\"text-nowrap ps-3\\\"><code>build:test</code></td> <td>Will run the build version in port:3000</td> </tr> </tbody> </table> </div></code>"}
          </pre>
        </div>
        <div className="p-4 code-to-copy">
          <div className="table-responsive scrollbar">
            <table className="table table-bordered">
              <thead className="text-center"><tr>
                  <th className="text-nowrap">
Task
                  </th>
                  <th>
Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-nowrap ps-3">
                    <code>
clean
                    </code>
                  </td>
                  <td>
Delete the following directories: 
                    <pre>
{"<code class=\"lang-html\">public/assets/css public/assets/js public/vendors // packages which are included in vendors.json public/**/*.html </code>"}
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td className="text-nowrap ps-3">
                    <code>
style
                    </code>
                  </td>
                  <td>
Compiles 
                    <code>
scss/theme.scss
                    </code>
 and generates 
                    <code>
theme.css, theme.min.css, theme-rlt.css, theme-rtl.min.css
                    </code>
 and 
                    <code>
theme.css.map, theme.min.css.map, theme-rlt.css.map, theme-rtl.min.css.map
                    </code>
 to the 
                    <code>
public/assets/css/ 
                    </code>
 directory.
                  </td>
                </tr>
                <tr>
                  <td className="text-nowrap ps-3">
                    <code>
script
                    </code>
                  </td>
                  <td>
Concat the 
                    <code>
js
                    </code>
 files from 
                    <code>
src/js/
                    </code>
 and transpiles with babel to 
                    <code>
phoenix.js
                    </code>
 to the 
                    <code>
public/assets/js/
                    </code>
 directory.
                  </td>
                </tr>
                <tr>
                  <td className="text-nowrap ps-3">
                    <code>
compile:all
                    </code>
                  </td>
                  <td>
Compiles all the 
                    <code>
js, 
                    </code>
                    <code>
scss, 
                    </code>
                    <code>
pug 
                    </code>
files from the 
                    <code>
src
                    </code>
 directory.
                  </td>
                </tr>
                <tr>
                  <td className="text-nowrap ps-3">
                    <code>
vendor
                    </code>
                  </td>
                  <td>
Runs 
                    <code>
vendor:clean
                    </code>
 and 
                    <code>
vendor:move
                    </code>
 in series.
                  </td>
                </tr>
                <tr>
                  <td className="text-nowrap ps-3">
                    <code>
vendor:clean
                    </code>
                  </td>
                  <td>
Delete the vendors from 
                    <code>
public/vendors
                    </code>
 directory which are included in 
                    <code>
vendors.json
                    </code>
.
                  </td>
                </tr>
                <tr>
                  <td className="text-nowrap ps-3">
                    <code>
vendor:move
                    </code>
                  </td>
                  <td>
Copies the vendors from 
                    <code>
node_modules/
                    </code>
 directory to 
                    <code>
public/vendors
                    </code>
 directory according to the 
                    <code>
vendors.json
                    </code>
.
                  </td>
                </tr>
                <tr>
                  <td className="text-nowrap ps-3">
                    <code>
watch
                    </code>
                  </td>
                  <td>
All of the following folders are monitored for changes, which will tell the browser to reload automatically after any changes are made: 
                    <pre>
{"<code class=\"lang-html\">public/assets/img public/assets/fonts public/assets/video public/vendors/ src/pug src/scss src/js</code>"}
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td className="text-nowrap ps-3">
                    <code>
build
                    </code>
                  </td>
                  <td>
Will delete previous build directory and generate a new compressed version to deploy 
                    <pre>
{"<code class=\"lang-html\">build/assets/img build/assets/fonts build/assets/video build/assets/css build/assets/js build/vendors/ build/**/*.html</code>"}
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td className="text-nowrap ps-3">
                    <code>
build:test
                    </code>
                  </td>
                  <td>
Will run the build version in port:3000
                  </td>
                </tr>
              </tbody>
            </table>
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
