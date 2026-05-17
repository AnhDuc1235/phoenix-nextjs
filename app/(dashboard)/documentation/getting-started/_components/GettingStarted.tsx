'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function GettingStarted() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Getting Started
    </h2>

    <div className="card shadow-none border my-4" data-component-card>
      <div className="card-header p-4 border-bottom bg-body">
        <div className="row g-3 justify-content-between align-items-center">
          <div className="col-12 col-md">
            <h4 className="text-body mb-0" data-anchor>
Quick start
            </h4>
          </div>
        </div>
      </div>
      <div className="card-body p-0">
        <div className="collapse code-collapse" id="quick-start-code">
          <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p class=\\\"mb-0\\\">Looking to start your project quickly? Just unzip the <code>Phoenix-v1.22.0.zip</code>. We have precompiled and packaged everything in the <code>public</code> directory for you. Start editing the <code>public/pages/starter.html</code> with a text or code editor, save it, and open the file in your favourite browser to see the changes.</p></code>"}
          </pre>
        </div>
        <div className="p-4 code-to-copy">
          <p className="mb-0">
Looking to start your project quickly? Just unzip the 
            <code>
Phoenix-v1.22.0.zip
            </code>
. We have precompiled and packaged everything in the 
            <code>
public
            </code>
 directory for you. Start editing the 
            <code>
public/pages/starter.html
            </code>
 with a text or code editor, save it, and open the file in your favourite browser to see the changes.
          </p>
        </div>
      </div>
    </div>

    <div className="card shadow-none border my-4" data-component-card>
      <div className="card-header p-4 border-bottom bg-body">
        <div className="row g-3 justify-content-between align-items-center">
          <div className="col-12 col-md">
            <h4 className="text-body mb-0" data-anchor>
Setting up Build system
            </h4>
          </div>
        </div>
      </div>
      <div className="card-body p-0">
        <div className="collapse code-collapse" id="setting-up-build-system-code">
          <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p>Unzip the <code>Phoenix-v1.22.0.zip</code> to any folder and open a command line or terminal at that location. theme's dev tools require <a href=\\\"https://nodejs.org/en/\\\" target=\\\"_blank\\\">Node</a> and <a href=\\\"https://git-scm.com/\\\" target=\\\"_blank\\\">Git</a> . If you do not have them in your machine, please install their latest stable version from their corresponding website. As you have <span class=\\\"fw-black text-body-emphasis\\\">Node and Git installed and accessible from your terminal or command line</span>, install <a href=\\\"https://gulpjs.com/\\\" target=\\\"_blank\\\">Gulp CLI</a> package globally with the following command: </p> <pre><code class=\\\"lang-html\\\">npm i gulp-cli -g </code></pre> <p class=\\\"mt-4\\\">When you’re done, install the rest of the theme’s dependencies with:</p> <pre><code class=\\\"lang-html\\\">npm i </code></pre> <p class=\\\"mt-4\\\">Now run:</p> <pre><code class=\\\"lang-html\\\">gulp </code></pre> <p class=\\\"mt-4\\\">Running gulp will compile the SCSS, transpile the javascript, copy all required libraries form <code>node_modules</code> to the corresponding <code>public/assets/vendors </code> directory and will open a browser window to <code>public/index.html</code></p> <p>All of the following folders are monitored for changes, which will tell the browser to reload automatically after any changes are made:</p> <pre><code class=\\\"lang-html\\\">public/assets/fonts/ public/assets/video/ public/assets/img/ public/vendors src/pug/ src/scss/ src/js/ </code></pre> <p class=\\\"mt-4\\\">Now you can edit any <code>pug</code> file from <code>src/pug</code>, change SCSS variable with <code>scss/_user-variables.scss</code>, or write your own SCSS code in <code>scss/_user.scss</code> and add or update <code>javaScript</code> from <code>src/js</code> directory.</p> <div class=\\\"alert alert-subtle-warning\\\">Running the <code>gulp</code> command will discard and regenerate all the files in following directories:</div> <pre><code class=\\\"lang-html\\\">public/**/*.html public/assets/css/ public/assets/js/ public/vendors </code></pre> <p class=\\\"mt-4\\\">Hit <code>Ctrl+C</code> or just close the command line window to stop the server.</p> <p>Happy editing!</p></code>"}
          </pre>
        </div>
        <div className="p-4 code-to-copy">
          <p>
Unzip the 
            <code>
Phoenix-v1.22.0.zip
            </code>
 to any folder and open a command line or terminal at that location. theme's dev tools require 
            <a href="https://nodejs.org/en/" target="_blank">
Node
            </a>
 and 
            <a href="https://git-scm.com/" target="_blank">
Git
            </a>
 . If you do not have them in your machine, please install their latest stable version from their corresponding website. As you have 
            <span className="fw-black text-body-emphasis">
Node and Git installed and accessible from your terminal or command line
            </span>
, install 
            <a href="https://gulpjs.com/" target="_blank">
Gulp CLI
            </a>
 package globally with the following command: 
          </p>
          <pre>
{"<code class=\"lang-html\">npm i gulp-cli -g </code>"}
          </pre>
          <p className="mt-4">
When you’re done, install the rest of the theme’s dependencies with:
          </p>
          <pre>
{"<code class=\"lang-html\">npm i </code>"}
          </pre>
          <p className="mt-4">
Now run:
          </p>
          <pre>
{"<code class=\"lang-html\">gulp </code>"}
          </pre>
          <p className="mt-4">
Running gulp will compile the SCSS, transpile the javascript, copy all required libraries form 
            <code>
node_modules
            </code>
 to the corresponding 
            <code>
public/assets/vendors 
            </code>
 directory and will open a browser window to 
            <code>
public/index.html
            </code>
          </p>
          <p>
All of the following folders are monitored for changes, which will tell the browser to reload automatically after any changes are made:
          </p>
          <pre>
{"<code class=\"lang-html\">public/assets/fonts/ public/assets/video/ public/assets/img/ public/vendors src/pug/ src/scss/ src/js/ </code>"}
          </pre>
          <p className="mt-4">
Now you can edit any 
            <code>
pug
            </code>
 file from 
            <code>
src/pug
            </code>
, change SCSS variable with 
            <code>
scss/_user-variables.scss
            </code>
, or write your own SCSS code in 
            <code>
scss/_user.scss
            </code>
 and add or update 
            <code>
javaScript
            </code>
 from 
            <code>
src/js
            </code>
 directory.
          </p>
          <div className="alert alert-subtle-warning">
Running the 
            <code>
gulp
            </code>
 command will discard and regenerate all the files in following directories:
          </div>
          <pre>
{"<code class=\"lang-html\">public/**/*.html public/assets/css/ public/assets/js/ public/vendors </code>"}
          </pre>
          <p className="mt-4">
Hit 
            <code>
Ctrl+C
            </code>
 or just close the command line window to stop the server.
          </p>
          <p>
Happy editing!
          </p>
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
