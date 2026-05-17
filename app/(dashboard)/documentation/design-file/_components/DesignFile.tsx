'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function DesignFile() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Design
    </h2>

    <div className="card shadow-none border my-4" data-component-card>
      <div className="card-header p-4 border-bottom bg-body">
        <div className="row g-3 justify-content-between align-items-center">
          <div className="col-12 col-md">
            <h4 className="text-body mb-0" data-anchor>
Figma file
            </h4>
          </div>
        </div>
      </div>
      <div className="card-body p-0">
        <div className="collapse code-collapse" id="figma-file-code">
          <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><h5 data-anchor=\\\"data-anchor\\\">To play with the design:</h5> <ul> <li> <a href=\\\"https://www.figma.com/\\\" target=\\\"_blank\\\">Download Figma</a></li> <li>Open the Figma link from the <code>README.md</code></li> <li>This file is <code>\\\"read-only\\\". </code>So, to customize the design on your own, you have to duplicate the Figma file and start the editing process on the copied file.</li> </ul></code>"}
          </pre>
        </div>
        <div className="p-4 code-to-copy">
          <h5 data-anchor>
To play with the design:
          </h5>
          <ul>
            <li>
              <a href="https://www.figma.com/" target="_blank">
Download Figma
              </a>
            </li>
            <li>
Open the Figma link from the 
              <code>
README.md
              </code>
            </li>
            <li>
This file is 
              <code>
"read-only". 
              </code>
So, to customize the design on your own, you have to duplicate the Figma file and start the editing process on the copied file.
            </li>
          </ul>
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
