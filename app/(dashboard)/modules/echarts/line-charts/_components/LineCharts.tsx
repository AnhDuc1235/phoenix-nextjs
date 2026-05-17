'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function LineCharts() {
  return (
    <div suppressHydrationWarning>

    <div className="row g-4 mb-9">
      <div className="col-xl-6">
        <div className="card shadow-none border" data-component-card>
          <div className="card-header p-4 border-bottom bg-body">
            <div className="row g-3 justify-content-between align-items-center">
              <div className="col-12 col-md">
                <h4 className="text-body mb-0" data-anchor>
Basic line chart
                </h4>
              </div>
              <div className="col col-md-auto">
                <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                  <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                    <span className="fas fa-copy me-1">                    </span>
Copy Code
                  </button>
                  <a href="#basic-line-chart-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="basic-line-chart-code" aria-expanded="false">
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
            <div className="collapse code-collapse" id="basic-line-chart-code">
              <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><!-- Find the JS file for the following chart at: src/js/charts/echarts/examples/basic-line-chart.js--> <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/echarts-example.js--> <div class=\\\"echart-line-chart-example\\\" style=\\\"min-height:300px\\\"></div></code>"}
              </pre>
            </div>
            <div className="p-4 code-to-copy">
              <div className="echart-line-chart-example" style={{"minHeight":"300px"} as CSSProperties}>              </div>
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
Basic area line chart
                </h4>
              </div>
              <div className="col col-md-auto">
                <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                  <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                    <span className="fas fa-copy me-1">                    </span>
Copy Code
                  </button>
                  <a href="#basic-area-line-chart-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="basic-area-line-chart-code" aria-expanded="false">
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
            <div className="collapse code-collapse" id="basic-area-line-chart-code">
              <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><!-- Find the JS file for the following chart at: src/js/charts/echarts/examples/area-line-chart.js--> <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/echarts-example.js--> <div class=\\\"echart-area-line-chart-example\\\" style=\\\"min-height:300px\\\"></div></code>"}
              </pre>
            </div>
            <div className="p-4 code-to-copy">
              <div className="echart-area-line-chart-example" style={{"minHeight":"300px"} as CSSProperties}>              </div>
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
Stacked line chart
                </h4>
              </div>
              <div className="col col-md-auto">
                <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                  <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                    <span className="fas fa-copy me-1">                    </span>
Copy Code
                  </button>
                  <a href="#stacked-line-chart-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="stacked-line-chart-code" aria-expanded="false">
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
            <div className="collapse code-collapse" id="stacked-line-chart-code">
              <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><!-- Find the JS file for the following chart at: src/js/charts/echarts/examples/stacked-line-chart.js--> <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/echarts-example.js--> <div class=\\\"echart-stacked-line-chart-example\\\" style=\\\"min-height:300px\\\"></div></code>"}
              </pre>
            </div>
            <div className="p-4 code-to-copy">
              <div className="echart-stacked-line-chart-example" style={{"minHeight":"300px"} as CSSProperties}>              </div>
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
Stacked area chart
                </h4>
              </div>
              <div className="col col-md-auto">
                <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                  <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                    <span className="fas fa-copy me-1">                    </span>
Copy Code
                  </button>
                  <a href="#stacked-area-chart-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="stacked-area-chart-code" aria-expanded="false">
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
            <div className="collapse code-collapse" id="stacked-area-chart-code">
              <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><!-- Find the JS file for the following chart at: src/js/charts/echarts/examples/stacked-area-chart.js--> <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/echarts-example.js--> <div class=\\\"echart-stacked-area-chart-example\\\" style=\\\"min-height:300px\\\"></div></code>"}
              </pre>
            </div>
            <div className="p-4 code-to-copy">
              <div className="echart-stacked-area-chart-example" style={{"minHeight":"300px"} as CSSProperties}>              </div>
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
Line marker chart
                </h4>
              </div>
              <div className="col col-md-auto">
                <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                  <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                    <span className="fas fa-copy me-1">                    </span>
Copy Code
                  </button>
                  <a href="#line-marker-chart-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="line-marker-chart-code" aria-expanded="false">
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
            <div className="collapse code-collapse" id="line-marker-chart-code">
              <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><!-- Find the JS file for the following chart at: src/js/charts/echarts/examples/line-marker-chart.js--> <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/echarts-example.js--> <div class=\\\"echart-line-marker-chart-example\\\" style=\\\"min-height:350px\\\"></div></code>"}
              </pre>
            </div>
            <div className="p-4 code-to-copy">
              <div className="echart-line-marker-chart-example" style={{"minHeight":"350px"} as CSSProperties}>              </div>
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
Area pieces chart
                </h4>
              </div>
              <div className="col col-md-auto">
                <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                  <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                    <span className="fas fa-copy me-1">                    </span>
Copy Code
                  </button>
                  <a href="#area-pieces-chart-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="area-pieces-chart-code" aria-expanded="false">
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
            <div className="collapse code-collapse" id="area-pieces-chart-code">
              <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><!-- Find the JS file for the following chart at: src/js/charts/echarts/examples/area-pieces-chart.js--> <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/echarts-example.js--> <div class=\\\"echart-area-pieces-chart-example\\\" style=\\\"min-height:350px\\\"></div></code>"}
              </pre>
            </div>
            <div className="p-4 code-to-copy">
              <div className="echart-area-pieces-chart-example" style={{"minHeight":"350px"} as CSSProperties}>              </div>
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
Step line chart
                </h4>
              </div>
              <div className="col col-md-auto">
                <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                  <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                    <span className="fas fa-copy me-1">                    </span>
Copy Code
                  </button>
                  <a href="#step-line-chart-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="step-line-chart-code" aria-expanded="false">
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
            <div className="collapse code-collapse" id="step-line-chart-code">
              <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><!-- Find the JS file for the following chart at: src/js/charts/echarts/examples/step-line-chart.js--> <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/echarts-example.js--> <div class=\\\"echart-step-line-chart-example\\\" style=\\\"min-height:300px\\\"></div></code>"}
              </pre>
            </div>
            <div className="p-4 code-to-copy">
              <div className="echart-step-line-chart-example" style={{"minHeight":"300px"} as CSSProperties}>              </div>
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
Line gradient chart
                </h4>
              </div>
              <div className="col col-md-auto">
                <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                  <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                    <span className="fas fa-copy me-1">                    </span>
Copy Code
                  </button>
                  <a href="#line-gradient-chart-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="line-gradient-chart-code" aria-expanded="false">
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
            <div className="collapse code-collapse" id="line-gradient-chart-code">
              <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><!-- Find the JS file for the following chart at: src/js/charts/echarts/examples/line-gradient-chart.js--> <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/echarts-example.js--> <div class=\\\"echart-line-gradient-chart-example\\\" style=\\\"min-height:300px\\\"></div></code>"}
              </pre>
            </div>
            <div className="p-4 code-to-copy">
              <div className="echart-line-gradient-chart-example" style={{"minHeight":"300px"} as CSSProperties}>              </div>
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
Dynamic line chart
                </h4>
              </div>
              <div className="col col-md-auto">
                <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                  <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                    <span className="fas fa-copy me-1">                    </span>
Copy Code
                  </button>
                  <a href="#dynamic-line-chart-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="dynamic-line-chart-code" aria-expanded="false">
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
            <div className="collapse code-collapse" id="dynamic-line-chart-code">
              <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><!-- Find the JS file for the following chart at: src/js/charts/echarts/examples/dynamic-line-chart.js--> <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/echarts-example.js--> <div class=\\\"echart-dynamic-line-chart-example\\\" style=\\\"min-height:300px\\\"></div></code>"}
              </pre>
            </div>
            <div className="p-4 code-to-copy">
              <div className="echart-dynamic-line-chart-example" style={{"minHeight":"300px"} as CSSProperties}>              </div>
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
Line log chart
                </h4>
              </div>
              <div className="col col-md-auto">
                <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                  <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                    <span className="fas fa-copy me-1">                    </span>
Copy Code
                  </button>
                  <a href="#line-log-chart-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="line-log-chart-code" aria-expanded="false">
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
            <div className="collapse code-collapse" id="line-log-chart-code">
              <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><!-- Find the JS file for the following chart at: src/js/charts/echarts/examples/line-log-chart.js--> <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/echarts-example.js--> <div class=\\\"echart-line-log-chart-example\\\" style=\\\"min-height:300px\\\"></div></code>"}
              </pre>
            </div>
            <div className="p-4 code-to-copy">
              <div className="echart-line-log-chart-example" style={{"minHeight":"300px"} as CSSProperties}>              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="card shadow-none border" data-component-card>
          <div className="card-header p-4 border-bottom bg-body">
            <div className="row g-3 justify-content-between align-items-center">
              <div className="col-12 col-md">
                <h4 className="text-body mb-0" data-anchor>
Share dataset
                </h4>
              </div>
              <div className="col col-md-auto">
                <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                  <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                    <span className="fas fa-copy me-1">                    </span>
Copy Code
                  </button>
                  <a href="#share-dataset-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="share-dataset-code" aria-expanded="false">
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
            <div className="collapse code-collapse" id="share-dataset-code">
              <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><!-- Find the JS file for the following chart at: src/js/charts/echarts/examples/share-dataset-chart.js--> <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/echarts-example.js--> <div class=\\\"echart-share-dataset-chart-example\\\" style=\\\"min-height:500px\\\"></div></code>"}
              </pre>
            </div>
            <div className="p-4 code-to-copy">
              <div className="echart-share-dataset-chart-example" style={{"minHeight":"500px"} as CSSProperties}>              </div>
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
