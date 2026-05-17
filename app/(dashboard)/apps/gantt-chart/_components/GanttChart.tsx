'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function GanttChart() {
  return (
    <div suppressHydrationWarning>

    <div className="gantt-header p-4 px-lg-6 py-sm-3">
      <div className="row gx-0 gy-3 justify-content-between">
        <div className="col-md-auto d-flex align-items-center">
          <h3 className="mb-0">
Gantt Chart 
          </h3>
          <button className="btn btn-primary btn-sm ms-auto ms-md-3" data-gantt-add-task>
            <span className="fas fa-plus">            </span>
            <span className="ms-2 d-md-none d-xl-inline">
Add Task
            </span>
          </button>
        </div>
        <div className="col-md-auto">
          <div className="row align-items-center gy-3 gx-0">
            <div className="col-sm-auto">
              <div className="search-box gantt-search-box">
                <form className="position-relative">
                  <input className="form-control search-input search form-control-sm" data-gantt-search type="search" placeholder="Search..." aria-label="Search" />
                  <span className="fas fa-search search-box-icon" data-fa-transform={"up-1 shrink-2"}>                  </span>
                </form>
                <div className="btn-close position-absolute end-0 top-50 translate-middle cursor-pointer shadow-none me-1" data-gantt-search-dismiss>
                  <button className="btn btn-link p-0" aria-label="Close">                  </button>
                </div>
              </div>
            </div>
            <div className="col-auto d-flex align-items-center ms-sm-auto">
              <div className="border-start d-none d-md-inline ms-md-3" style={{"height":"20px","width":"2px"} as CSSProperties}>              </div>
              <div className="form-check form-switch mb-0 ms-sm-3">
                <input className="form-check-input" data-gantt-zoom={"fit"} id="ganttZoomToFit" defaultChecked type="checkbox" />
                <label className="form-check-label text-nowrap" htmlFor="ganttZoomToFit">
Auto Fit
                </label>
              </div>
              <select className="form-select form-select-sm ms-3" aria-label="Default select example" data-gantt-view>
                <option value="days">
Day
                </option>
                <option value="weeks">
Weekly
                </option>
                <option value="months">
Monthly
                </option>
                <option value="years">
Year
                </option>
              </select>
            </div>
            <div className="col-auto d-flex align-items-center ms-auto ms-sm-3">
              <div className="border-start d-none d-sm-inline me-3" style={{"height":"20px","width":"2px"} as CSSProperties}>              </div>
              <button className="btn btn-link btn-sm text-body px-0 text-nowrap ms-n1" data-bs-toggle={"modal"} data-bs-target={"#ganttTaskFilterModal"}>
                <span className="fa-solid fa-filter fs-9">                </span>
                <span className="d-none d-xl-inline ms-2">
Filter
                </span>
              </button>
              <button className="btn btn-link btn-sm text-body px-0 text-nowrap ms-3" data-bs-toggle={"modal"} data-bs-target={"#ganttOptionsModal"}>
                <span className="fa-solid fa-gear fs-9">                </span>
                <span className="d-none d-xl-inline ms-2">
Options 
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="gantt-app-container scrollbar">
      <div id="gantt-app" style={{"width":"100%","height":"100%"} as CSSProperties}>      </div>
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
