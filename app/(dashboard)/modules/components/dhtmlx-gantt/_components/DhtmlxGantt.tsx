'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function DhtmlxGantt() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
DHTMLX Gantt
    </h2>

    <p className="text-body-tertiary lead mb-2">
DHTMLX Gantt is an open source JavaScript Gantt chart library that helps you illustrate and manage a project schedule in a nice-looking diagram.
    </p>
    <a href="https://github.com/DHTMLX/gantt" className="btn btn-link p-0"  target="_blank">
DHTMLX Gantt      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mb-9">
      <div className="card shadow-none border mb-4 mt-5" data-component-card>
        <div className="card-header p-4 border-bottom bg-body">
          <div className="row g-3 justify-content-between align-items-center">
            <div className="col-12 col-md">
              <h4 className="text-body mb-0" data-anchor>
Html
              </h4>
            </div>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="collapse code-collapse" id="html-code">
            <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><pre class=\\\"scrollbar my-5\\\"><code class=\\\"language-html\\\">&lt;div class=&quot;gantt-app-container scrollbar&quot;&gt; &lt;div id=&quot;gantt-app&quot; style=&quot;width:100%;height:100%;&quot;&gt;&lt;/div&gt; &lt;/div&gt;</code></pre></code>"}
            </pre>
          </div>
          <div className="p-4 code-to-copy">
            <pre className="scrollbar my-5">
{"<code class=\"language-html\"><div class=\\\"gantt-app-container scrollbar\\\"> <div id=\\\"gantt-app\\\" style=\\\"width:100%;height:100%;\\\"></div> </div></code>"}
            </pre>
          </div>
        </div>
      </div>
      <div className="card shadow-none border mb-3" data-component-card>
        <div className="card-header p-4 border-bottom bg-body">
          <div className="row g-3 justify-content-between align-items-center">
            <div className="col-12 col-md">
              <h4 className="text-body mb-0" data-anchor>
Stylesheet
              </h4>
            </div>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="collapse code-collapse" id="stylesheet-code">
            <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><pre><code class=\\\"language-html\\\">&lt;link href=&quot;../../vendors/dhtmlx-gantt/dhtmlxgantt.css&quot; rel=&quot;stylesheet&quot; /&gt;</code></pre></code>"}
            </pre>
          </div>
          <div className="p-4 code-to-copy">
            <pre>
{"<code class=\"language-html\"><link href=\\\"../../vendors/dhtmlx-gantt/dhtmlxgantt.css\\\" rel=\\\"stylesheet\\\" /></code>"}
            </pre>
          </div>
        </div>
      </div>
      <div className="card shadow-none border mb-3" data-component-card>
        <div className="card-header p-4 border-bottom bg-body">
          <div className="row g-3 justify-content-between align-items-center">
            <div className="col-12 col-md">
              <h4 className="text-body mb-0" data-anchor>
Javascript
              </h4>
            </div>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="collapse code-collapse" id="javascript-code">
            <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><pre><code class=\\\"language-html\\\">&lt;script src=&quot;../../vendors/dhtmlx-gantt/dhtmlxgantt.js&quot;&gt;&lt;/script&gt; &lt;script src=&quot;../../assets/js/pages/gantt-chart.js&quot;&gt;&lt;/script&gt;</code></pre></code>"}
            </pre>
          </div>
          <div className="p-4 code-to-copy">
            <pre>
{"<code class=\"language-html\"><script src=\\\"../../vendors/dhtmlx-gantt/dhtmlxgantt.js\\\"></script> <script src=\\\"../../assets/js/pages/gantt-chart.js\\\"></script></code>"}
            </pre>
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
