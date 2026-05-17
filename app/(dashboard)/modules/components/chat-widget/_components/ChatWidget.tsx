'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function ChatWidget() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Chat widget
    </h2>

    <p className="text-body-tertiary lead mb-2">
A support chat widget built with CSS and JavaScript
    </p>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="mb-9">
            <button className="btn btn-outline-primary btn-support-chat">
Toggle chat widget
            </button>
            <div className="card shadow-none border mb-4 mt-5" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Structure
                    </h4>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="structure-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><pre class=\\\"scrollbar my-5\\\"><code class=\\\"language-html\\\">&lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt;...&lt;/head&gt; &lt;body&gt; &lt;main&gt; &lt;div class=&quot;container-fluid&quot;&gt; &lt;!-- navbar content goes here--&gt; &lt;div class=&quot;content&quot;&gt; &lt;!-- content goes here--&gt; &lt;/div&gt; &lt;/div&gt; &lt;div class=&quot;support-chat-container&quot;&gt; &lt;!-- chat widget content gose here--&gt; &lt;/div&gt; &lt;/main&gt; &lt;/body&gt; &lt;/html&gt;</code></pre></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <pre className="scrollbar my-5">
{"<code class=\"language-html\"><!DOCTYPE html> <html> <head>...</head> <body> <main> <div class=\\\"container-fluid\\\"> <!-- navbar content goes here--> <div class=\\\"content\\\"> <!-- content goes here--> </div> </div> <div class=\\\"support-chat-container\\\"> <!-- chat widget content gose here--> </div> </main> </body> </html></code>"}
                  </pre>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Appearance
                    </h4>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="appearance-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p>You can control the chat widget appearance by clicking the toggle button on the settings panel.</p> <h5 class=\\\"mb-3\\\">Gulp based workflow</h5> <p class=\\\"mb-2\\\">To hide the chat widget, open <code>src/js/config.js </code>in your project directory and set <code>phoenixSupportChat: false </code>of <code>initialConfig </code>object.</p> <pre class=\\\"scrollbar mb-5\\\"><code class=\\\"lang-html\\\">const initialConfig = { phoenixSupportChat: true || false, ... };</code></pre> <h5 class=\\\"mb-3\\\">Without gulp based workflow</h5> <p class=\\\"mb-2\\\">To hide the chat widget, open <code>public/assets/js/config.js </code>in your project directory and set <code>phoenixSupportChat: false </code>of <code>initialConfig </code>object.</p> <pre class=\\\"scrollbar mb-5\\\"><code class=\\\"lang-html\\\">const initialConfig = { phoenixSupportChat: true || false, ... }; </code></pre> <p>At the bottom right corner, you will find the widget button. By clicking the button, the <code>.show-chat </code>class will toggle and the chat will be shown or hidden.</p> <pre class=\\\"scrollbar mt-3\\\"><code class=\\\"language-html\\\">&lt;div class=&quot;container-fluid support-chat show-chat&quot;&gt;&lt;/div&gt;</code></pre></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <p>
You can control the chat widget appearance by clicking the toggle button on the settings panel.
                  </p>
                  <h5 className="mb-3">
Gulp based workflow
                  </h5>
                  <p className="mb-2">
To hide the chat widget, open 
                    <code>
src/js/config.js 
                    </code>
in your project directory and set 
                    <code>
phoenixSupportChat: false 
                    </code>
of 
                    <code>
initialConfig 
                    </code>
object.
                  </p>
                  <pre className="scrollbar mb-5">
{"<code class=\"lang-html\">const initialConfig = { phoenixSupportChat: true || false, ... };</code>"}
                  </pre>
                  <h5 className="mb-3">
Without gulp based workflow
                  </h5>
                  <p className="mb-2">
To hide the chat widget, open 
                    <code>
public/assets/js/config.js 
                    </code>
in your project directory and set 
                    <code>
phoenixSupportChat: false 
                    </code>
of 
                    <code>
initialConfig 
                    </code>
object.
                  </p>
                  <pre className="scrollbar mb-5">
{"<code class=\"lang-html\">const initialConfig = { phoenixSupportChat: true || false, ... }; </code>"}
                  </pre>
                  <p>
At the bottom right corner, you will find the widget button. By clicking the button, the 
                    <code>
.show-chat 
                    </code>
class will toggle and the chat will be shown or hidden.
                  </p>
                  <pre className="scrollbar mt-3">
{"<code class=\"language-html\"><div class=\\\"container-fluid support-chat show-chat\\\"></div></code>"}
                  </pre>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Position
                    </h4>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="position-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p>Initially, the chat widget will appear at the bottom right corner, you can add <code>.support-chat-start </code>class to take it to the bottom left corner.</p> <pre class=\\\"scrollbar mt-3\\\"><code class=\\\"language-html\\\">&lt;div class=&quot;support-chat-container support-chat-start&quot;&gt;&lt;/div&gt;</code></pre></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <p>
Initially, the chat widget will appear at the bottom right corner, you can add 
                    <code>
.support-chat-start 
                    </code>
class to take it to the bottom left corner.
                  </p>
                  <pre className="scrollbar mt-3">
{"<code class=\"language-html\"><div class=\\\"support-chat-container support-chat-start\\\"></div></code>"}
                  </pre>
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
                <a href="#structure" className="nav-link">
Structure
                </a>
              </li>
              <li className="nav-item">
                <a href="#appearance" className="nav-link">
Appearance
                </a>
              </li>
              <li className="nav-item">
                <a href="#position" className="nav-link">
Position
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
