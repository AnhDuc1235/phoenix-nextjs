'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function CandlestickCharts() {
  return (
    <div suppressHydrationWarning>

    <div className="row g-4 mb-9">
      <div className="col-xl-6">
        <div className="card shadow-none border" data-component-card>
          <div className="card-header p-4 border-bottom bg-body">
            <div className="row g-3 justify-content-between align-items-center">
              <div className="col-12 col-md">
                <h4 className="text-body mb-0" data-anchor>
Basic candlestick chart
                </h4>
              </div>
              <div className="col col-md-auto">
                <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                  <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                    <span className="fas fa-copy me-1">                    </span>
Copy Code
                  </button>
                  <a href="#basic-candlestick-chart-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="basic-candlestick-chart-code" aria-expanded="false">
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
            <div className="collapse code-collapse" id="basic-candlestick-chart-code">
              <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><!-- Find the JS file for the following chart at: src/js/charts/echarts/examples/basic-candlestick-chart.js--> <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/echarts-example.js--> <div class=\\\"echart-basic-candlestick-chart-example\\\" style=\\\"min-height:300px\\\"></div></code>"}
              </pre>
            </div>
            <div className="p-4 code-to-copy">
              <div className="echart-basic-candlestick-chart-example" style={{"minHeight":"300px"} as CSSProperties}>              </div>
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
Candlestick mixed chart
                </h4>
              </div>
              <div className="col col-md-auto">
                <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                  <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                    <span className="fas fa-copy me-1">                    </span>
Copy Code
                  </button>
                  <a href="#candlestick-mixed--chart-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="candlestick-mixed--chart-code" aria-expanded="false">
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
            <div className="collapse code-collapse" id="candlestick-mixed--chart-code">
              <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><!-- Find the JS file for the following chart at: src/js/charts/echarts/examples/candlestick-mixed-chart.js--> <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/echarts-example.js--> <div class=\\\"echart-candlestick-mixed-chart-example\\\" style=\\\"min-height:300px\\\"></div></code>"}
              </pre>
            </div>
            <div className="p-4 code-to-copy">
              <div className="echart-candlestick-mixed-chart-example" style={{"minHeight":"300px"} as CSSProperties}>              </div>
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
