'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function GeoMap() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Getting Started
    </h2>

    <p className="text-body-tertiary lead mb-2">
ECharts can uses geoJSON format as map outline. You can use third-party 
      <a href="https://geojson.org/" target="_blank">
geoJSON
      </a>
 data (like maps) and register them into ECharts. You can get the JSON data from this 
      <a href="https://github.com/pissang/starbucks/tree/gh-pages/json">
Starbuck's Github repository
      </a>
.
    </p>
    <a href="https://echarts.apache.org/en/option.html#series-map.type" className="btn btn-link p-0"  target="_blank">
Echart's map documentation      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="row g-4 mb-9 mt-2">
      <div className="col-xl-6">
        <div className="card shadow-none border" data-component-card>
          <div className="card-header p-4 border-bottom bg-body">
            <div className="row g-3 justify-content-between align-items-center">
              <div className="col-12 col-md">
                <h4 className="text-body mb-0" data-anchor>
World map
                </h4>
              </div>
              <div className="col col-md-auto">
                <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                  <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                    <span className="fas fa-copy me-1">                    </span>
Copy Code
                  </button>
                  <a href="#world-map-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="world-map-code" aria-expanded="false">
                    <span className="me-2" data-feather={"code"}>                    </span>View code
                  </a>
                  <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                    <span className="me-2" data-feather={"eye"}>                    </span>Hide code
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="collapse code-collapse" id="world-map-code">
              <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"position-absolute z-2\\\" style=\\\"right:16px\\\"> <button class=\\\"btn btn-phoenix-secondary btn-sm session-by-country-map-reset\\\"><span class=\\\"fas fa-sync-alt fs-9\\\"></span></button> </div> <!-- Find the JS file for the following chart at: src/js/charts/echarts/session-by-country-map.js--> <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/theme.js--> <div class=\\\"echart-session-by-country-map\\\" style=\\\"min-height: 400px;\\\"></div> <h5 class=\\\"mt-3 mb-2\\\">JavaScript </h5> <pre><code class=\\\"language-html\\\"> &lt;script src=&quot;assets/data/world.js&quot;&gt; &lt;/script&gt;</code></pre></code>"}
              </pre>
            </div>
            <div className="p-4 code-to-copy">
              <div className="position-absolute z-2" style={{"right":"16px"} as CSSProperties}>
                <button className="btn btn-phoenix-secondary btn-sm session-by-country-map-reset">
                  <span className="fas fa-sync-alt fs-9">                  </span>
                </button>
              </div>
              <div className="echart-session-by-country-map" style={{"minHeight":"400px"} as CSSProperties}>              </div>
              <h5 className="mt-3 mb-2">
JavaScript 
              </h5>
              <pre>
{"<code class=\"language-html\"> <script src=\\\"assets/data/world.js\\\"> </script></code>"}
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="card shadow-none border" data-component-card>
          <div className="card-header p-4 border-bottom bg-body">
            <div className="row g-3 justify-content-between align-items-center">
              <div className="col-12 col-md">
                <h4 className="text-body mb-0" data-anchor>
Usa map
                </h4>
              </div>
              <div className="col col-md-auto">
                <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                  <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                    <span className="fas fa-copy me-1">                    </span>
Copy Code
                  </button>
                  <a href="#usa-map-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="usa-map-code" aria-expanded="false">
                    <span className="me-2" data-feather={"code"}>                    </span>View code
                  </a>
                  <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                    <span className="me-2" data-feather={"eye"}>                    </span>Hide code
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="collapse code-collapse" id="usa-map-code">
              <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"position-absolute z-2\\\" style=\\\"right:16px\\\"> <button class=\\\"btn btn-phoenix-secondary btn-sm usa-map-reset\\\"><span class=\\\"fas fa-sync-alt fs-9\\\"></span></button> </div> <!-- Find the JS file for the following chart at: src/js/charts/echarts/examples/map-usa.js--> <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/echarts-example.js--> <div class=\\\"echart-map-usa-example\\\" style=\\\"min-height: 400px;\\\"></div> <h5 class=\\\"mt-3 mb-2\\\">JavaScript </h5> <pre><code class=\\\"language-html\\\"> &lt;script src=&quot;assets/data/usa.js&quot;&gt; &lt;/script&gt;</code></pre></code>"}
              </pre>
            </div>
            <div className="p-4 code-to-copy">
              <div className="position-absolute z-2" style={{"right":"16px"} as CSSProperties}>
                <button className="btn btn-phoenix-secondary btn-sm usa-map-reset">
                  <span className="fas fa-sync-alt fs-9">                  </span>
                </button>
              </div>
              <div className="echart-map-usa-example" style={{"minHeight":"400px"} as CSSProperties}>              </div>
              <h5 className="mt-3 mb-2">
JavaScript 
              </h5>
              <pre>
{"<code class=\"language-html\"> <script src=\\\"assets/data/usa.js\\\"> </script></code>"}
              </pre>
            </div>
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
