'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function DatePicker() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Date Picker
    </h2>

    <p className="text-body-tertiary lead mb-2">
Lightweight, powerful javascript datetime picker with no dependencies.
    </p>
    <a href="https://flatpickr.js.org/" className="btn btn-link p-0"  target="_blank">
Documentation for Flatpickr      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mb-9">
      <div className="row g-3 my-4">
        <div className="col-xl-6">
          <div className="card shadow-none border" data-component-card>
            <div className="card-header p-4 border-bottom bg-body">
              <div className="row g-3 justify-content-between align-items-center">
                <div className="col-12 col-md">
                  <h4 className="text-body mb-0" data-anchor>
Date Picker
                  </h4>
                </div>
                <div className="col col-md-auto">
                  <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                    <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                      <span className="fas fa-copy me-1">                      </span>
Copy Code
                    </button>
                    <a href="#date-picker-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="date-picker-code" aria-expanded="false">
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
              <div className="collapse code-collapse" id="date-picker-code">
                <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><label class=\\\"form-label\\\" for=\\\"datepicker\\\">Start Date</label> <input class=\\\"form-control datetimepicker\\\" id=\\\"datepicker\\\" type=\\\"text\\\" placeholder=\\\"dd/mm/yyyy\\\" data-options='{\\\"disableMobile\\\":true,\\\"dateFormat\\\":\\\"d/m/Y\\\"}' /></code>"}
                </pre>
              </div>
              <div className="p-4 code-to-copy">
                <label className="form-label" htmlFor="datepicker">
Start Date
                </label>
                <input className="form-control datetimepicker" id="datepicker" type="text" placeholder="dd/mm/yyyy" data-options={"{\"disableMobile\":true,\"dateFormat\":\"d/m/Y\"}"} />
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
Time Picker
                  </h4>
                </div>
                <div className="col col-md-auto">
                  <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                    <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                      <span className="fas fa-copy me-1">                      </span>
Copy Code
                    </button>
                    <a href="#time-picker-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="time-picker-code" aria-expanded="false">
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
              <div className="collapse code-collapse" id="time-picker-code">
                <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><label class=\\\"form-label\\\" for=\\\"timepicker1\\\">Start Time</label> <input class=\\\"form-control datetimepicker\\\" id=\\\"timepicker1\\\" type=\\\"text\\\" placeholder=\\\"hour : minute\\\" data-options='{\\\"enableTime\\\":true,\\\"noCalendar\\\":true,\\\"dateFormat\\\":\\\"H:i\\\",\\\"disableMobile\\\":true}' /></code>"}
                </pre>
              </div>
              <div className="p-4 code-to-copy">
                <label className="form-label" htmlFor="timepicker1">
Start Time
                </label>
                <input className="form-control datetimepicker" id="timepicker1" type="text" placeholder="hour : minute" data-options={"{\"enableTime\":true,\"noCalendar\":true,\"dateFormat\":\"H:i\",\"disableMobile\":true}"} />
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
Date Time Picker
                  </h4>
                </div>
                <div className="col col-md-auto">
                  <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                    <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                      <span className="fas fa-copy me-1">                      </span>
Copy Code
                    </button>
                    <a href="#date-time-picker-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="date-time-picker-code" aria-expanded="false">
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
              <div className="collapse code-collapse" id="date-time-picker-code">
                <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><label class=\\\"form-label\\\" for=\\\"datetimepicker\\\">Start Date</label> <input class=\\\"form-control datetimepicker\\\" id=\\\"datetimepicker\\\" type=\\\"text\\\" placeholder=\\\"dd/mm/yyyy hour : minute\\\" data-options='{\\\"enableTime\\\":true,\\\"dateFormat\\\":\\\"d/m/y H:i\\\",\\\"disableMobile\\\":true}' /></code>"}
                </pre>
              </div>
              <div className="p-4 code-to-copy">
                <label className="form-label" htmlFor="datetimepicker">
Start Date
                </label>
                <input className="form-control datetimepicker" id="datetimepicker" type="text" placeholder="dd/mm/yyyy hour : minute" data-options={"{\"enableTime\":true,\"dateFormat\":\"d/m/y H:i\",\"disableMobile\":true}"} />
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
Range
                  </h4>
                </div>
                <div className="col col-md-auto">
                  <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                    <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                      <span className="fas fa-copy me-1">                      </span>
Copy Code
                    </button>
                    <a href="#range-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="range-code" aria-expanded="false">
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
              <div className="collapse code-collapse" id="range-code">
                <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><label class=\\\"form-label\\\" for=\\\"timepicker2\\\">Select Time Range</label> <input class=\\\"form-control datetimepicker\\\" id=\\\"timepicker2\\\" type=\\\"text\\\" placeholder=\\\"d/m/y to d/m/y\\\" data-options='{\\\"mode\\\":\\\"range\\\",\\\"dateFormat\\\":\\\"d/m/y\\\",\\\"disableMobile\\\":true}' /></code>"}
                </pre>
              </div>
              <div className="p-4 code-to-copy">
                <label className="form-label" htmlFor="timepicker2">
Select Time Range
                </label>
                <input className="form-control datetimepicker" id="timepicker2" type="text" placeholder="d/m/y to d/m/y" data-options={"{\"mode\":\"range\",\"dateFormat\":\"d/m/y\",\"disableMobile\":true}"} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card shadow-none border" data-component-card>
            <div className="card-header p-4 border-bottom bg-body">
              <div className="row g-3 justify-content-between align-items-end">
                <div className="col-12 col-md">
                  <h4 className="text-body mb-0" data-anchor>
Validation
                  </h4>
                  <p className="mb-0 mt-2 text-body-secondary">
Pass 
                    <code>
"allowInput":true
                    </code>
 through 
                    <code>
data-options
                    </code>
 attribute to apply the form validation.
                  </p>
                </div>
                <div className="col col-md-auto">
                  <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                    <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                      <span className="fas fa-copy me-1">                      </span>
Copy Code
                    </button>
                    <a href="#validation-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="validation-code" aria-expanded="false">
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
              <div className="collapse code-collapse" id="validation-code">
                <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><form class=\\\"needs-validation\\\" novalidate=\\\"novalidate\\\"> <div class=\\\"mb-3\\\"> <label class=\\\"form-label\\\" for=\\\"datepickerVal\\\"> Date</label> <input class=\\\"form-control datetimepicker\\\" id=\\\"datepickerVal\\\" type=\\\"text\\\" placeholder=\\\"d/m/y\\\" required=\\\"required\\\" data-options='{\\\"disableMobile\\\":true,\\\"allowInput\\\":true}' /> <div class=\\\"invalid-feedback\\\">This field is required</div> </div> <div class=\\\"mb-3\\\"> <label class=\\\"form-label\\\" for=\\\"dateTimepickerVal\\\">Date & Time</label> <input class=\\\"form-control datetimepicker\\\" id=\\\"dateTimepickerVal\\\" type=\\\"text\\\" required=\\\"required\\\" placeholder=\\\"d/m/y H:i\\\" data-options='{\\\"enableTime\\\":true,\\\"dateFormat\\\":\\\"d/m/y H:i\\\",\\\"disableMobile\\\":true,\\\"allowInput\\\":true}' /> <div class=\\\"invalid-feedback\\\">This field is required</div> </div> <button class=\\\"btn btn-primary\\\" type=\\\"submit\\\">Submit form</button> </form></code>"}
                </pre>
              </div>
              <div className="p-4 code-to-copy">
                <form className="needs-validation" noValidate>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="datepickerVal">
 Date
                    </label>
                    <input className="form-control datetimepicker" id="datepickerVal" type="text" placeholder="d/m/y" required data-options={"{\"disableMobile\":true,\"allowInput\":true}"} />
                    <div className="invalid-feedback">
This field is required
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="dateTimepickerVal">
{"Date & Time"}
                    </label>
                    <input className="form-control datetimepicker" id="dateTimepickerVal" type="text" required placeholder="d/m/y H:i" data-options={"{\"enableTime\":true,\"dateFormat\":\"d/m/y H:i\",\"disableMobile\":true,\"allowInput\":true}"} />
                    <div className="invalid-feedback">
This field is required
                    </div>
                  </div>
                  <button className="btn btn-primary" type="submit">
Submit form
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow-none border my-4" data-component-card>
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
{"<code class=\"language-html\"><pre><code class=\\\"language-html\\\">&lt;link href=&quot;vendors/flatpickr/flatpickr.min.css&quot; rel=&quot;stylesheet&quot; /&gt;</code></pre></code>"}
            </pre>
          </div>
          <div className="p-4 code-to-copy">
            <pre>
{"<code class=\"language-html\"><link href=\\\"vendors/flatpickr/flatpickr.min.css\\\" rel=\\\"stylesheet\\\" /></code>"}
            </pre>
          </div>
        </div>
      </div>
      <div className="card shadow-none border my-4" data-component-card>
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
{"<code class=\"language-html\"><pre><code class=\\\"language-html\\\">&lt;script src=&quot;vendors/flatpickr/flatpickr.min.js&quot;&gt;&lt;/script&gt;</code></pre></code>"}
            </pre>
          </div>
          <div className="p-4 code-to-copy">
            <pre>
{"<code class=\"language-html\"><script src=\\\"vendors/flatpickr/flatpickr.min.js\\\"></script></code>"}
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
