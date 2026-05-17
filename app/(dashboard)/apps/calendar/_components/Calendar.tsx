'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Calendar() {
  return (
    <div suppressHydrationWarning>

    <div className="row g-0 mb-4 align-items-center">
      <div className="col-5 col-md-6">
        <h4 className="mb-0 text-body-emphasis fw-bold fs-md-6">
          <span className="calendar-day d-block d-md-inline mb-1">          </span>
          <span className="px-3 fw-thin text-body-quaternary d-none d-md-inline">
|
          </span>
          <span className="calendar-date">          </span>
        </h4>
      </div>
      <div className="col-7 col-md-6 d-flex justify-content-end">
        <button className="btn btn-link text-body px-0 me-2 me-md-4">
          <span className="fa-solid fa-sync fs-10 me-2">          </span>
          <span className="d-none d-md-inline">
Sync Now
          </span>
        </button>
        <button className="btn btn-primary btn-sm" type="button" data-bs-toggle={"modal"} data-bs-target={"#addEventModal"}>
          <span className="fas fa-plus pe-2 fs-10">          </span>
Add new task 
        </button>
      </div>
    </div>

    <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 border-y border-translucent">
      <div className="row py-3 gy-3 gx-0">
        <div className="col-6 col-md-4 order-1 d-flex align-items-center">
          <button className="btn btn-sm btn-phoenix-primary px-4" data-event={"today"}>
Today
          </button>
        </div>
        <div className="col-12 col-md-4 order-md-1 d-flex align-items-center justify-content-center">
          <button className="btn icon-item icon-item-sm shadow-none text-body-emphasis p-0" type="button" data-event={"prev"} title="Previous">
            <span className="fas fa-chevron-left">            </span>
          </button>
          <h3 className="px-3 text-body-emphasis fw-semibold calendar-title mb-0">          </h3>
          <button className="btn icon-item icon-item-sm shadow-none text-body-emphasis p-0" type="button" data-event={"next"} title="Next">
            <span className="fas fa-chevron-right">            </span>
          </button>
        </div>
        <div className="col-6 col-md-4 ms-auto order-1 d-flex justify-content-end">
          <div>
            <div className="btn-group btn-group-sm" role="group">
              <button className="btn btn-phoenix-secondary active-view" data-fc-view={"dayGridMonth"}>
Month
              </button>
              <button className="btn btn-phoenix-secondary" data-fc-view={"timeGridWeek"}>
Week
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="calendar-outline mt-6 mb-9" id="appCalendar">    </div>

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
