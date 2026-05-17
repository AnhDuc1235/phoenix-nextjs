'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function HowToUse() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
How to use
    </h2>

    <p className="text-body-tertiary lead mb-2">
A powerful, interactive charting and visualization library for browser.
    </p>
    <a href="https://echarts.apache.org/en/option.html#title" className="btn btn-link p-0"  target="_blank">
Documentation for EChart      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="card shadow-none border mb-4" data-component-card>
            <div className="card-header p-4 border-bottom bg-body">
              <div className="row g-3 justify-content-between align-items-center">
                <div className="col-12 col-md">
                  <h4 className="text-body mb-0" data-anchor>
JavaScript
                  </h4>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="collapse code-collapse" id="javascript-code">
                <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><pre><code class=\\\"language-html\\\">&lt;script src=&quot;vendors/echarts/echarts.min.js&quot;&gt;&lt;/script&gt;</code></pre></code>"}
                </pre>
              </div>
              <div className="p-4 code-to-copy">
                <pre>
{"<code class=\"language-html\"><script src=\\\"vendors/echarts/echarts.min.js\\\"></script></code>"}
                </pre>
              </div>
            </div>
          </div>
          <div className="card shadow-none border mb-4" data-component-card>
            <div className="card-header p-4 border-bottom bg-body">
              <div className="row g-3 justify-content-between align-items-center">
                <div className="col-12 col-md">
                  <h4 className="text-body mb-0" data-anchor>
Getting Started
                  </h4>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="collapse code-collapse" id="getting-started-code">
                <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><h5 class=\\\"mb-3\\\">For gulp based workflow:</h5> <p>To add a new chart using Echarts, follow the steps below: </p> <ul> <li>Add an HTML element with a unique class name. For example: <pre><code class=\\\"language-html\\\"> &lt;div class=&quot;echart-total-sales-chart&quot;&gt;&lt;/div&gt;</code></pre> </li> <li>Give a height of the chart element in CSS</li> <li>Add a JavaScript file into <code>src/js </code>directory and write a function to initialize the Echart with the required options.<br /><strong>Tips: </strong>Select any chart of Phoenix which you want to duplicate, copy the file and replace the class name and options.</li> <li>import and call the function into the corresponding javascript file of the current page. For example: <code>ecommerce-dashboard.js, </code><code>projectmanagement-dashboard.js, </code><code>[your-custom-page].js </code>etc.</li> </ul> <h5 class=\\\"mt-5 mb-3\\\">If you're not using gulp: </h5> <p>If you are not using gulp based workflow and want to add Echart, Follow the steps below:</p> <ul> <li>Add an HTML element with a unique class name. For example: <pre><code class=\\\"language-html\\\"> &lt;div class=&quot;echart-total-sales-chart&quot;&gt;&lt;/div&gt;</code></pre> </li> <li>Give a height of the chart element in CSS</li> <li>Write a function to initialize the echart with the class name added in the first step and pass the necessary options into the corresponding javascript file of the current page, such as <code>public/assets/js/ecommerce-dashboard.js, </code><code>public/assets/js/projectmanagement-dashboard.js, </code><code>public/assets/js/[your-custom-page].js </code>etc.<br /><strong>Tips: </strong>Select the chart you want to duplicate and copy the chart's code from the corresponding javascript file or <code>public/assets/js/echart-example.js</code>. Then place the code bottom of your selected js file, for example, <code>public/assets/js/ecommerce-dashboard.js, </code><code>public/assets/js/projectmanagement-dashboard.js, </code>or <code>public/assets/js/[your-custom-page].js </code>file and replace the class name and the options.</li> <li>Call the function you made in previous step.</li> </ul></code>"}
                </pre>
              </div>
              <div className="p-4 code-to-copy">
                <h5 className="mb-3">
For gulp based workflow:
                </h5>
                <p>
To add a new chart using Echarts, follow the steps below: 
                </p>
                <ul>
                  <li>
Add an HTML element with a unique class name. For example: 
                    <pre>
{"<code class=\"language-html\"> <div class=\\\"echart-total-sales-chart\\\"></div></code>"}
                    </pre>
                  </li>
                  <li>
Give a height of the chart element in CSS
                  </li>
                  <li>
Add a JavaScript file into 
                    <code>
src/js 
                    </code>
directory and write a function to initialize the Echart with the required options.
                    <br />
                    <strong>
Tips: 
                    </strong>
Select any chart of Phoenix which you want to duplicate, copy the file and replace the class name and options.
                  </li>
                  <li>
import and call the function into the corresponding javascript file of the current page. For example: 
                    <code>
ecommerce-dashboard.js, 
                    </code>
                    <code>
projectmanagement-dashboard.js, 
                    </code>
                    <code>
[your-custom-page].js 
                    </code>
etc.
                  </li>
                </ul>
                <h5 className="mt-5 mb-3">
If you're not using gulp: 
                </h5>
                <p>
If you are not using gulp based workflow and want to add Echart, Follow the steps below:
                </p>
                <ul>
                  <li>
Add an HTML element with a unique class name. For example: 
                    <pre>
{"<code class=\"language-html\"> <div class=\\\"echart-total-sales-chart\\\"></div></code>"}
                    </pre>
                  </li>
                  <li>
Give a height of the chart element in CSS
                  </li>
                  <li>
Write a function to initialize the echart with the class name added in the first step and pass the necessary options into the corresponding javascript file of the current page, such as 
                    <code>
public/assets/js/ecommerce-dashboard.js, 
                    </code>
                    <code>
public/assets/js/projectmanagement-dashboard.js, 
                    </code>
                    <code>
public/assets/js/[your-custom-page].js 
                    </code>
etc.
                    <br />
                    <strong>
Tips: 
                    </strong>
Select the chart you want to duplicate and copy the chart's code from the corresponding javascript file or 
                    <code>
public/assets/js/echart-example.js
                    </code>
. Then place the code bottom of your selected js file, for example, 
                    <code>
public/assets/js/ecommerce-dashboard.js, 
                    </code>
                    <code>
public/assets/js/projectmanagement-dashboard.js, 
                    </code>
or 
                    <code>
public/assets/js/[your-custom-page].js 
                    </code>
file and replace the class name and the options.
                  </li>
                  <li>
Call the function you made in previous step.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card shadow-none border mb-4" data-component-card>
            <div className="card-header p-4 border-bottom bg-body">
              <div className="row g-3 justify-content-between align-items-center">
                <div className="col-12 col-md">
                  <h4 className="text-body mb-0" data-anchor>
Responsive
                  </h4>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="collapse code-collapse" id="responsive-code">
                <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p>All the charts of Echart’s are responsive by default in Phoenix. Echart’s responsive is working from echartSetOption function in <code>src/js/theme/charts/echarts/echarts-utils.js</code> file (If you are not using gulp based workflow, you can find the function in <code>public/assets/js/phoenix.js</code>). You can pass responsive options object as 4th parameter of <code>echartSetOption</code> function. The object will consist the styles of different breakpoints like xs, sm, md, lg, xl, xxl. For example: Here the options will work above the sm(576px) screen.</p> <pre class=\\\"scrollbar mb-5\\\"><code class=\\\"lang-html\\\">const responsiveOptions = { sm: { yAxis: { show: true }, grid: { left: 100 } } };</code></pre> <!-- Find the JS file for the following chart at: src/js/theme/charts/echarts/crm-lead-conversion.js--> <!-- If you are not using gulp based workflow, you can find the transpiled code at: public/assets/js/crm-dashboard.js--> <div class=\\\"echart-lead-conversion\\\" style=\\\"min-height: 250px;\\\"></div></code>"}
                </pre>
              </div>
              <div className="p-4 code-to-copy">
                <p>
All the charts of Echart’s are responsive by default in Phoenix. Echart’s responsive is working from echartSetOption function in 
                  <code>
src/js/theme/charts/echarts/echarts-utils.js
                  </code>
 file (If you are not using gulp based workflow, you can find the function in 
                  <code>
public/assets/js/phoenix.js
                  </code>
). You can pass responsive options object as 4th parameter of 
                  <code>
echartSetOption
                  </code>
 function. The object will consist the styles of different breakpoints like xs, sm, md, lg, xl, xxl. For example: Here the options will work above the sm(576px) screen.
                </p>
                <pre className="scrollbar mb-5">
{"<code class=\"lang-html\">const responsiveOptions = { sm: { yAxis: { show: true }, grid: { left: 100 } } };</code>"}
                </pre>
                <div className="echart-lead-conversion" style={{"minHeight":"250px"} as CSSProperties}>                </div>
              </div>
            </div>
          </div>
          <div className="card shadow-none border mb-4" data-component-card>
            <div className="card-header p-4 border-bottom bg-body">
              <div className="row g-3 justify-content-between align-items-end">
                <div className="col-12 col-md">
                  <h4 className="text-body mb-0" data-anchor>
Echart inside a Tab
                  </h4>
                  <p className="mb-0 mt-2 text-body-secondary">
To set any echarts inside Bootstrap tab component in Phoenix, follow the steps below:
                  </p>
                  <ul>
                    <li>
Add 
                      <code>
data-tab-has-echart 
                      </code>
attribute to the 
                      <code>
.nav-tab 
                      </code>
element.
                    </li>
                    <li>
Then add 
                      <code>
data-echart-tab 
                      </code>
attribute to the Echart element.
                    </li>
                  </ul>
                  <p>
By following these steps multiple echart can be added in a tab or multiple tabs with Echarts also be placed.
                  </p>
                </div>
                <div className="col col-md-auto">
                  <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                    <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                      <span className="fas fa-copy me-1">                      </span>
Copy Code
                    </button>
                    <a href="#echart-inside-a-tab-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="echart-inside-a-tab-code" aria-expanded="false">
                      <span className="me-2" data-feather={"code"}>                      </span>View code
                    </a>
                    <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                      <span className="me-2" data-feather={"eye"}>                      </span>Hide code
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="collapse code-collapse" id="echart-inside-a-tab-code">
                <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><ul class=\\\"echart-tab-example nav nav-tabs mb-3\\\" id=\\\"echart-tab-example\\\" role=\\\"tablist\\\" data-tab-has-echarts=\\\"data-tab-has-echarts\\\"> <li class=\\\"nav-item\\\" role=\\\"presentation\\\"> <button class=\\\"nav-link active\\\" id=\\\"bar-chart-tab\\\" data-bs-toggle=\\\"tab\\\" data-bs-target=\\\"#bar-chart\\\" type=\\\"button\\\" role=\\\"tab\\\" aria-controls=\\\"bar-chart\\\" aria-selected=\\\"false\\\">Bar Chart</button> </li> <li class=\\\"nav-item\\\" role=\\\"presentation\\\"> <button class=\\\"nav-link\\\" id=\\\"line-charts-tab\\\" data-bs-toggle=\\\"tab\\\" data-bs-target=\\\"#line-charts\\\" type=\\\"button\\\" role=\\\"tab\\\" aria-controls=\\\"line-charts\\\" aria-selected=\\\"false\\\">Line Chart</button> </li> </ul> <div class=\\\"tab-content\\\" id=\\\"echart-tab-example-content\\\"> <div class=\\\"tab-pane fade show active\\\" id=\\\"bar-chart\\\" role=\\\"tabpanel\\\" aria-labelledby=\\\"bar-chart-tab\\\"> <div class=\\\"echart-projection-actual\\\" style=\\\"height: 300px\\\" data-echart-tab=\\\"data-echart-tab\\\"></div> </div> <div class=\\\"tab-pane fade\\\" id=\\\"line-charts\\\" role=\\\"tabpanel\\\" aria-labelledby=\\\"line-charts-tab\\\"> <div class=\\\"echart-total-sales-chart\\\" style=\\\"height: 300px\\\" data-echart-tab=\\\"data-echart-tab\\\"></div> </div> </div></code>"}
                </pre>
              </div>
              <div className="p-4 code-to-copy">
                <ul className="echart-tab-example nav nav-tabs mb-3" id="echart-tab-example" role="tablist" data-tab-has-echarts>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="bar-chart-tab" data-bs-toggle={"tab"} data-bs-target={"#bar-chart"} type="button" role="tab" aria-controls="bar-chart" aria-selected="false">
Bar Chart
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="line-charts-tab" data-bs-toggle={"tab"} data-bs-target={"#line-charts"} type="button" role="tab" aria-controls="line-charts" aria-selected="false">
Line Chart
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="echart-tab-example-content">
                  <div className="tab-pane fade show active" id="bar-chart" role="tabpanel" aria-labelledby="bar-chart-tab">
                    <div className="echart-projection-actual" style={{"height":"300px"} as CSSProperties} data-echart-tab>                    </div>
                  </div>
                  <div className="tab-pane fade" id="line-charts" role="tabpanel" aria-labelledby="line-charts-tab">
                    <div className="echart-total-sales-chart" style={{"height":"300px"} as CSSProperties} data-echart-tab>                    </div>
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
                <a href="#javascript" className="nav-link">
JavaScript
                </a>
              </li>
              <li className="nav-item">
                <a href="#getting-started" className="nav-link">
Getting Started
                </a>
              </li>
              <li className="nav-item">
                <a href="#responsive" className="nav-link">
Responsive
                </a>
              </li>
              <li className="nav-item">
                <a href="#echart-inside-a-tab" className="nav-link">
Echart inside a Tab
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
