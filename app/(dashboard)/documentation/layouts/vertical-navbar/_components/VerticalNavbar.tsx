'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function VerticalNavbar() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm" data-anchor>
Vertical Navbar
    </h2>

    <p className="text-body-tertiary lead mb-2">
Here is the default Phoenix's powerful, responsive vertical navigation. The following sections describe how you can customize both the responsive breakpoint and collapsing behavior.
    </p>
    <PhoenixLink href="/demo/vertical-sidenav" className="btn btn-link p-0"  target="_blank">
Vertical navbar example      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </PhoenixLink>

    <div className="card shadow-none border mb-4 mt-5" data-component-card>
      <div className="card-header p-4 border-bottom bg-body">
        <div className="row g-3 justify-content-between align-items-center">
          <div className="col-12 col-md">
            <h4 className="text-body mb-0" data-anchor>
Navbar vertical structure
            </h4>
          </div>
        </div>
      </div>
      <div className="card-body p-0">
        <div className="collapse code-collapse" id="navbar-vertical-structure-code">
          <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><pre class=\\\"scrollbar my-5\\\"><code class=\\\"language-html\\\">&lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt;...&lt;/head&gt; &lt;body&gt; &lt;main&gt; &lt;div class=&quot;container-fluid&quot;&gt; &lt;nav class=&quot;navbar navbar-vertical navbar-expand-lg&quot;&gt; &lt;!-- navbar vertical content goes here--&gt; &lt;/nav&gt; &lt;nav class=&quot;navbar navbar-top navbar-expand&quot;&gt; &lt;!-- navbar top content goes here--&gt; &lt;/nav&gt; &lt;div class=&quot;content&quot;&gt; &lt;!-- content goes here--&gt; &lt;/div&gt; &lt;/div&gt; &lt;/main&gt; &lt;/body&gt; &lt;/html&gt;</code></pre></code>"}
          </pre>
        </div>
        <div className="p-4 code-to-copy">
          <pre className="scrollbar my-5">
{"<code class=\"language-html\"><!DOCTYPE html> <html> <head>...</head> <body> <main> <div class=\\\"container-fluid\\\"> <nav class=\\\"navbar navbar-vertical navbar-expand-lg\\\"> <!-- navbar vertical content goes here--> </nav> <nav class=\\\"navbar navbar-top navbar-expand\\\"> <!-- navbar top content goes here--> </nav> <div class=\\\"content\\\"> <!-- content goes here--> </div> </div> </main> </body> </html></code>"}
          </pre>
        </div>
      </div>
    </div>

    <div className="card shadow-none border my-4" data-component-card>
      <div className="card-header p-4 border-bottom bg-body">
        <div className="row g-3 justify-content-between align-items-center">
          <div className="col-12 col-md">
            <h4 className="text-body mb-0" data-anchor>
Responsive behavior 
            </h4>
          </div>
        </div>
      </div>
      <div className="card-body p-0">
        <div className="collapse code-collapse" id="responsive-behavior--code">
          <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p class=\\\"mb-0\\\">Phoenix used the Bootstrap's <code>.navbar-expand{-sm|-md|-lg|-xl|-xxl} </code> classes in <code>.navbar-vertical </code>element to decide when the navbar vertical will expand or not.</p> <pre class=\\\"scrollbar mt-5\\\"><code class=\\\"language-html\\\">&lt;nav class=&quot;navbar navbar-vertical navbar-expand-lg&quot;&gt;&lt;/nav&gt;</code></pre></code>"}
          </pre>
        </div>
        <div className="p-4 code-to-copy">
          <p className="mb-0">
Phoenix used the Bootstrap's 
            <code>
{".navbar-expand{-sm|-md|-lg|-xl|-xxl} "}
            </code>
 classes in 
            <code>
.navbar-vertical 
            </code>
element to decide when the navbar vertical will expand or not.
          </p>
          <pre className="scrollbar mt-5">
{"<code class=\"language-html\"><nav class=\\\"navbar navbar-vertical navbar-expand-lg\\\"></nav></code>"}
          </pre>
        </div>
      </div>
    </div>

    <div className="card shadow-none border my-4" data-component-card>
      <div className="card-header p-4 border-bottom bg-body">
        <div className="row g-3 justify-content-between align-items-center">
          <div className="col-12 col-md">
            <h4 className="text-body mb-0" data-anchor>
Collapsing behavior
            </h4>
          </div>
        </div>
      </div>
      <div className="card-body p-0">
        <div className="collapse code-collapse" id="collapsing-behavior-code">
          <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p>You can control the default collapsing behavior of phoenix's vertical navigation - whether it will show up with the collapsed or expanded state when the page loads.</p> <p class=\\\"mb-0\\\">From your project directory, If you are using gulp version open <code>src/js/config.js </code>or if you are using directly from the public folder open <code>public/assets/js/config.js </code>and set <code>phoenixIsNavbarVerticalCollapsed: true </code>of <code>initialConfig </code>object to collapse the Vertical Navigation by default</p> <pre class=\\\"scrollbar mt-5\\\"><code class=\\\"lang-html\\\">const initialConfig = { phoenixIsNavbarVerticalCollapsed: false, ... }; </code></pre></code>"}
          </pre>
        </div>
        <div className="p-4 code-to-copy">
          <p>
You can control the default collapsing behavior of phoenix's vertical navigation - whether it will show up with the collapsed or expanded state when the page loads.
          </p>
          <p className="mb-0">
From your project directory, If you are using gulp version open 
            <code>
src/js/config.js 
            </code>
or if you are using directly from the public folder open 
            <code>
public/assets/js/config.js 
            </code>
and set 
            <code>
phoenixIsNavbarVerticalCollapsed: true 
            </code>
of 
            <code>
initialConfig 
            </code>
object to collapse the Vertical Navigation by default
          </p>
          <pre className="scrollbar mt-5">
{"<code class=\"lang-html\">const initialConfig = { phoenixIsNavbarVerticalCollapsed: false, ... }; </code>"}
          </pre>
        </div>
      </div>
    </div>

    <div className="card shadow-none border my-4" data-component-card>
      <div className="card-header p-4 border-bottom bg-body">
        <div className="row g-3 justify-content-between align-items-center">
          <div className="col-12 col-md">
            <h4 className="text-body mb-0" data-anchor>
Vertical Navbar appearance
            </h4>
          </div>
        </div>
      </div>
      <div className="card-body p-0">
        <div className="collapse code-collapse" id="vertical-navbar-appearance-code">
          <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p>You can control Navbar vertical style of phoenix's between defaults and darker.</p> <p>From your project directory, If you are using gulp version open <code>src/js/config.js </code>or if you are using directly from the public folder open <code>public/assets/js/config.js </code>and set <code>phoenixNavbarVerticalStyle: 'darker' </code>of <code>initialConfig </code>object to collapse the Vertical Navigation by default</p> <pre class=\\\"scrollbar my-5\\\"><code class=\\\"lang-html\\\">const initialConfig = { phoenixNavbarVerticalStyle: 'default' || 'darker', ... };</code></pre> <p class=\\\"mb-0\\\">Or to change navbar vertical color add <code>data-navbar-appearance=\\\"darker\\\" </code>attribute in navber-vertical </p> <pre class=\\\"scrollbar mt-3\\\"><code class=\\\"language-html\\\">&lt;nav class=&quot;navbar navbar-vertical navbar-expand-lg&quot; data-navbar-appearance=&quot;darker&quot;&gt;&lt;/nav&gt;</code></pre></code>"}
          </pre>
        </div>
        <div className="p-4 code-to-copy">
          <p>
You can control Navbar vertical style of phoenix's between defaults and darker.
          </p>
          <p>
From your project directory, If you are using gulp version open 
            <code>
src/js/config.js 
            </code>
or if you are using directly from the public folder open 
            <code>
public/assets/js/config.js 
            </code>
and set 
            <code>
phoenixNavbarVerticalStyle: 'darker' 
            </code>
of 
            <code>
initialConfig 
            </code>
object to collapse the Vertical Navigation by default
          </p>
          <pre className="scrollbar my-5">
{"<code class=\"lang-html\">const initialConfig = { phoenixNavbarVerticalStyle: 'default' || 'darker', ... };</code>"}
          </pre>
          <p className="mb-0">
Or to change navbar vertical color add 
            <code>
data-navbar-appearance="darker" 
            </code>
attribute in navber-vertical 
          </p>
          <pre className="scrollbar mt-3">
{"<code class=\"language-html\"><nav class=\\\"navbar navbar-vertical navbar-expand-lg\\\" data-navbar-appearance=\\\"darker\\\"></nav></code>"}
          </pre>
        </div>
      </div>
    </div>

    <div className="card shadow-none border my-4" data-component-card>
      <div className="card-header p-4 border-bottom bg-body">
        <div className="row g-3 justify-content-between align-items-center">
          <div className="col-12 col-md">
            <h4 className="text-body mb-0" data-anchor>
Customize
            </h4>
          </div>
        </div>
      </div>
      <div className="card-body p-0">
        <div className="collapse code-collapse" id="customize-code">
          <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p>Phoenix allow you to customize your Navbar Vertical with SCSS or CSS variables. The available options are listed below: </p> <h5>Background color</h5> <p class=\\\"my-2\\\">To change the background color of the Navbar Vertical , update the SCSS variable <code>$navbar-vertical-bg-color</code> in your <code>_user-variables.scss </code>or CSS variable <code>--phoenix-navbar-vertical-bg-color</code> in your <code>public/assets/css/user.css. </code>Example:</p> <pre class=\\\"mb-4\\\"><code class=\\\"language-css\\\">//- _user-variables.scss $navbar-vertical-bg-color: #141824; or, //- public/assets/css/user.css --phoenix-navbar-vertical-bg-color: #141824;</code></pre> <h5>Border color</h5> <p class=\\\"my-2\\\">To change the border color of the Navbar Vertical , update the SCSS variable <code>$navbar-vertical-border-color</code> in your <code>_user-variables.scss </code>or CSS variable <code>--phoenix-navbar-vertical-border-color</code> in your <code>public/assets/css/user.css. </code>Example:</p> <pre class=\\\"mb-4\\\"><code class=\\\"language-css\\\">//- _user-variables.scss $navbar-vertical-border-color: #31374a; or, //- public/assets/css/user.css --phoenix-navbar-vertical-border-color: #31374a;</code></pre> <h5>label color</h5> <p class=\\\"my-2\\\">To change the label color of the Navbar Vertical , update the SCSS variable <code>$navbar-vertical-label-color</code> in your <code>_user-variables.scss </code>or CSS variable <code>--phoenix-navbar-vertical-label-color</code> in your <code>public/assets/css/user.css. </code>Example:</p> <pre class=\\\"mb-4\\\"><code class=\\\"language-css\\\">//- _user-variables.scss $navbar-vertical-label-color: #6e7891; or, //- public/assets/css/user.css --phoenix-navbar-vertical-label-color: #6e7891;</code></pre> <h5>Link color</h5> <p class=\\\"my-2\\\">To change the link color of the Navbar Vertical , update the SCSS variable <code>$navbar-vertical-link-color</code> in your <code>_user-variables.scss </code>or CSS variable <code>--phoenix-navbar-vertical-link-color</code> in your <code>public/assets/css/user.css. </code>Example:</p> <pre class=\\\"mb-4\\\"><code class=\\\"language-css\\\">//- _user-variables.scss $navbar-vertical-link-color: #9fa6bc; or, //- public/assets/css/user.css --phoenix-navbar-vertical-link-color: #9fa6bc;</code></pre> <h5>Link hover background</h5> <p class=\\\"my-2\\\">To change the link hover background of the Navbar Vertical , update the SCSS variable <code>$navbar-vertical-link-hover-bg</code> in your <code>_user-variables.scss </code>or CSS variable <code>--phoenix-navbar-vertical-link-hover-bg</code> in your <code>public/assets/css/user.css. </code>Example:</p> <pre class=\\\"mb-4\\\"><code class=\\\"language-css\\\">//- _user-variables.scss $navbar-vertical-link-hover-bg: #31374a; or, //- public/assets/css/user.css --phoenix-navbar-vertical-link-hover-bg: #31374a;</code></pre> <h5>Link hover color</h5> <p class=\\\"my-2\\\">To change the link hover color of the Navbar Vertical , update the SCSS variable <code>$navbar-vertical-link-hover-color</code> in your <code>_user-variables.scss </code>or CSS variable <code>--phoenix-navbar-vertical-link-hover-color</code> in your <code>public/assets/css/user.css. </code>Example:</p> <pre class=\\\"mb-4\\\"><code class=\\\"language-css\\\">//- _user-variables.scss $navbar-vertical-link-hover-color: #eff2f6; or, //- public/assets/css/user.css --phoenix-navbar-vertical-link-hover-color: #eff2f6;</code></pre> <h5>Link active color</h5> <p class=\\\"my-2\\\">To change the link active color of the Navbar Vertical , update the SCSS variable <code>$navbar-vertical-link-active-color</code> in your <code>_user-variables.scss </code>or CSS variable <code>--phoenix-navbar-vertical-link-active-color</code> in your <code>public/assets/css/user.css. </code>Example:</p> <pre class=\\\"mb-4\\\"><code class=\\\"language-css\\\">//- _user-variables.scss $navbar-vertical-link-active-color: #fff; or, //- public/assets/css/user.css --phoenix-navbar-vertical-link-active-color: #fff;</code></pre> <h5>Horizontal rule</h5> <p class=\\\"my-2\\\">To change the horizontal rule of the Navbar Vertical , update the SCSS variable <code>$navbar-vertical-hr-color</code> in your <code>_user-variables.scss </code>or CSS variable <code>--phoenix-navbar-vertical-hr-color</code> in your <code>public/assets/css/user.css. </code>Example:</p> <pre class=\\\"mb-4\\\"><code class=\\\"language-css\\\">//- _user-variables.scss $navbar-vertical-hr-color: #3e465b; or, //- public/assets/css/user.css --phoenix-navbar-vertical-hr-color: #3e465b;</code></pre> <h5>Dropdown indicator color</h5> <p class=\\\"my-2\\\">To change the dropdown indicator color of the Navbar Vertical , update the SCSS variable <code>$navbar-vertical-dropdown-indicator-color</code> in your <code>_user-variables.scss </code>or CSS variable <code>--phoenix-navbar-vertical-dropdown-indicator-color</code> in your <code>public/assets/css/user.css. </code>Example:</p> <pre class=\\\"mb-4\\\"><code class=\\\"language-css\\\">//- _user-variables.scss $navbar-vertical-dropdown-indicator-color: #8a94ad; or, //- public/assets/css/user.css --phoenix-navbar-vertical-dropdown-indicator-color: #8a94ad;</code></pre></code>"}
          </pre>
        </div>
        <div className="p-4 code-to-copy">
          <p>
Phoenix allow you to customize your Navbar Vertical with SCSS or CSS variables. The available options are listed below: 
          </p>
          <h5>
Background color
          </h5>
          <p className="my-2">
To change the background color of the Navbar Vertical , update the SCSS variable 
            <code>
$navbar-vertical-bg-color
            </code>
 in your 
            <code>
_user-variables.scss 
            </code>
or CSS variable 
            <code>
--phoenix-navbar-vertical-bg-color
            </code>
 in your 
            <code>
public/assets/css/user.css. 
            </code>
Example:
          </p>
          <pre className="mb-4">
{"<code class=\"language-css\">//- _user-variables.scss $navbar-vertical-bg-color: #141824; or, //- public/assets/css/user.css --phoenix-navbar-vertical-bg-color: #141824;</code>"}
          </pre>
          <h5>
Border color
          </h5>
          <p className="my-2">
To change the border color of the Navbar Vertical , update the SCSS variable 
            <code>
$navbar-vertical-border-color
            </code>
 in your 
            <code>
_user-variables.scss 
            </code>
or CSS variable 
            <code>
--phoenix-navbar-vertical-border-color
            </code>
 in your 
            <code>
public/assets/css/user.css. 
            </code>
Example:
          </p>
          <pre className="mb-4">
{"<code class=\"language-css\">//- _user-variables.scss $navbar-vertical-border-color: #31374a; or, //- public/assets/css/user.css --phoenix-navbar-vertical-border-color: #31374a;</code>"}
          </pre>
          <h5>
label color
          </h5>
          <p className="my-2">
To change the label color of the Navbar Vertical , update the SCSS variable 
            <code>
$navbar-vertical-label-color
            </code>
 in your 
            <code>
_user-variables.scss 
            </code>
or CSS variable 
            <code>
--phoenix-navbar-vertical-label-color
            </code>
 in your 
            <code>
public/assets/css/user.css. 
            </code>
Example:
          </p>
          <pre className="mb-4">
{"<code class=\"language-css\">//- _user-variables.scss $navbar-vertical-label-color: #6e7891; or, //- public/assets/css/user.css --phoenix-navbar-vertical-label-color: #6e7891;</code>"}
          </pre>
          <h5>
Link color
          </h5>
          <p className="my-2">
To change the link color of the Navbar Vertical , update the SCSS variable 
            <code>
$navbar-vertical-link-color
            </code>
 in your 
            <code>
_user-variables.scss 
            </code>
or CSS variable 
            <code>
--phoenix-navbar-vertical-link-color
            </code>
 in your 
            <code>
public/assets/css/user.css. 
            </code>
Example:
          </p>
          <pre className="mb-4">
{"<code class=\"language-css\">//- _user-variables.scss $navbar-vertical-link-color: #9fa6bc; or, //- public/assets/css/user.css --phoenix-navbar-vertical-link-color: #9fa6bc;</code>"}
          </pre>
          <h5>
Link hover background
          </h5>
          <p className="my-2">
To change the link hover background of the Navbar Vertical , update the SCSS variable 
            <code>
$navbar-vertical-link-hover-bg
            </code>
 in your 
            <code>
_user-variables.scss 
            </code>
or CSS variable 
            <code>
--phoenix-navbar-vertical-link-hover-bg
            </code>
 in your 
            <code>
public/assets/css/user.css. 
            </code>
Example:
          </p>
          <pre className="mb-4">
{"<code class=\"language-css\">//- _user-variables.scss $navbar-vertical-link-hover-bg: #31374a; or, //- public/assets/css/user.css --phoenix-navbar-vertical-link-hover-bg: #31374a;</code>"}
          </pre>
          <h5>
Link hover color
          </h5>
          <p className="my-2">
To change the link hover color of the Navbar Vertical , update the SCSS variable 
            <code>
$navbar-vertical-link-hover-color
            </code>
 in your 
            <code>
_user-variables.scss 
            </code>
or CSS variable 
            <code>
--phoenix-navbar-vertical-link-hover-color
            </code>
 in your 
            <code>
public/assets/css/user.css. 
            </code>
Example:
          </p>
          <pre className="mb-4">
{"<code class=\"language-css\">//- _user-variables.scss $navbar-vertical-link-hover-color: #eff2f6; or, //- public/assets/css/user.css --phoenix-navbar-vertical-link-hover-color: #eff2f6;</code>"}
          </pre>
          <h5>
Link active color
          </h5>
          <p className="my-2">
To change the link active color of the Navbar Vertical , update the SCSS variable 
            <code>
$navbar-vertical-link-active-color
            </code>
 in your 
            <code>
_user-variables.scss 
            </code>
or CSS variable 
            <code>
--phoenix-navbar-vertical-link-active-color
            </code>
 in your 
            <code>
public/assets/css/user.css. 
            </code>
Example:
          </p>
          <pre className="mb-4">
{"<code class=\"language-css\">//- _user-variables.scss $navbar-vertical-link-active-color: #fff; or, //- public/assets/css/user.css --phoenix-navbar-vertical-link-active-color: #fff;</code>"}
          </pre>
          <h5>
Horizontal rule
          </h5>
          <p className="my-2">
To change the horizontal rule of the Navbar Vertical , update the SCSS variable 
            <code>
$navbar-vertical-hr-color
            </code>
 in your 
            <code>
_user-variables.scss 
            </code>
or CSS variable 
            <code>
--phoenix-navbar-vertical-hr-color
            </code>
 in your 
            <code>
public/assets/css/user.css. 
            </code>
Example:
          </p>
          <pre className="mb-4">
{"<code class=\"language-css\">//- _user-variables.scss $navbar-vertical-hr-color: #3e465b; or, //- public/assets/css/user.css --phoenix-navbar-vertical-hr-color: #3e465b;</code>"}
          </pre>
          <h5>
Dropdown indicator color
          </h5>
          <p className="my-2">
To change the dropdown indicator color of the Navbar Vertical , update the SCSS variable 
            <code>
$navbar-vertical-dropdown-indicator-color
            </code>
 in your 
            <code>
_user-variables.scss 
            </code>
or CSS variable 
            <code>
--phoenix-navbar-vertical-dropdown-indicator-color
            </code>
 in your 
            <code>
public/assets/css/user.css. 
            </code>
Example:
          </p>
          <pre className="mb-4">
{"<code class=\"language-css\">//- _user-variables.scss $navbar-vertical-dropdown-indicator-color: #8a94ad; or, //- public/assets/css/user.css --phoenix-navbar-vertical-dropdown-indicator-color: #8a94ad;</code>"}
          </pre>
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
