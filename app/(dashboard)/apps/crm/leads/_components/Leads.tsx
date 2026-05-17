'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Leads() {
  return (
    <div suppressHydrationWarning>

    <nav className="mb-3" aria-label="breadcrumb">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <a href="#!">
Page 1
          </a>
        </li>
        <li className="breadcrumb-item">
          <a href="#!">
Page 2
          </a>
        </li>
        <li className="breadcrumb-item active">
Default
        </li>
      </ol>
    </nav>

    <div className="pb-6">
      <h2 className="mb-4">
25 Leads
      </h2>
      <div id="lealsTable" data-list={"{\"valueNames\":[\"name\",\"email\",\"phone\",\"contact\",\"company\",\"date\"],\"page\":10,\"pagination\":true}"}>
        <div className="row g-3 justify-content-between mb-4">
          <div className="col-auto">
            <div className="d-md-flex justify-content-between">
              <div>
                <button className="btn btn-primary me-4">
                  <span className="fas fa-plus me-2">                  </span>
Create Lead
                </button>
                <button className="btn btn-link text-body px-0">
                  <span className="fa-solid fa-file-export fs-9 me-2">                  </span>
Export
                </button>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className="d-flex">
              <div className="search-box me-2">
                <form className="position-relative">
                  <input className="form-control search-input search" type="search" placeholder="Search by name" aria-label="Search" />
                  <span className="fas fa-search search-box-icon">                  </span>
                </form>
              </div>
              <div className="flatpickr-input-container me-2">
                <input className="form-control ps-6 datetimepicker" id="datepicker" type="text" data-options={"{\"dateFormat\":\"M j, Y\",\"disableMobile\":true,\"defaultDate\":\"Mar 1, 2022\"}"} />
                <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary">                </span>
              </div>
              <button className="btn px-3 btn-phoenix-secondary" type="button" data-bs-toggle={"modal"} data-bs-target={"#filterModal"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                <span className="fa-solid fa-filter text-primary" data-fa-transform={"down-3"}>                </span>
              </button>
              <div className="modal fade" id="filterModal" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content border border-translucent">
                    <form id="addEventForm" autoComplete="off">
                      <div className="modal-header border-translucent p-4 justify-content-between">
                        <h5 className="modal-title text-body-highlight fs-6 lh-sm">
Filter
                        </h5>
                        <button className="btn p-1 text-danger" type="button" data-bs-dismiss={"modal"} aria-label="Close">
                          <span className="fas fa-times fs-9">                          </span>
                        </button>
                      </div>
                      <div className="modal-body pt-4 pb-2 px-4">
                        <div className="mb-3">
                          <label className="fw-bold mb-2 text-body-highlight" htmlFor="leadStatus">
Lead Status
                          </label>
                          <select className="form-select" id="leadStatus">
                            <option value="newLead">
New Lead
                            </option>
                            <option value="coldLead">
Cold Lead
                            </option>
                            <option value="wonLead">
Won Lead
                            </option>
                            <option value="canceled">
Canceled
                            </option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label className="fw-bold mb-2 text-body-highlight" htmlFor="createDate">
Create Date
                          </label>
                          <select className="form-select" id="createDate">
                            <option value="today">
Today
                            </option>
                            <option value="last7Days">
Last 7 Days
                            </option>
                            <option value="last30Days">
Last 30 Days
                            </option>
                            <option value="chooseATimePeriod">
Choose a time period
                            </option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label className="fw-bold mb-2 text-body-highlight" htmlFor="designation">
Designation
                          </label>
                          <select className="form-select" id="designation">
                            <option value="VPAccounting">
VP Accounting
                            </option>
                            <option value="ceo">
CEO
                            </option>
                            <option value="creativeDirector">
Creative Director
                            </option>
                            <option value="accountant">
Accountant
                            </option>
                            <option value="executiveManager">
Executive Manager
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="modal-footer d-flex justify-content-end align-items-center px-4 pb-4 border-0 pt-3">
                        <button className="btn btn-sm btn-phoenix-primary px-4 fs-10 my-0" type="submit">
                          <span className="fas fa-arrows-rotate me-2 fs-10">                          </span>
Reset
                        </button>
                        <button className="btn btn-sm btn-primary px-9 fs-10 my-0" type="submit">
Done
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="table-responsive scrollbar mx-n1 px-1">
          <table className="table fs-9 mb-0 leads-table border-top border-translucent">
            <thead>
              <tr>
                <th className="white-space-nowrap fs-9 align-middle ps-0" style={{"maxWidth":"20px","width":"18px"} as CSSProperties}>
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select={"{\"body\":\"leal-tables-body\"}"} />
                  </div>
                </th>
                <th className="sort white-space-nowrap align-middle text-uppercase ps-0" scope="col" data-sort={"name"} style={{"width":"25%"} as CSSProperties}>
Name
                </th>
                <th className="sort align-middle ps-4 pe-5 text-uppercase border-end border-translucent" scope="col" data-sort={"email"} style={{"width":"15%"} as CSSProperties}>
                  <div className="d-inline-flex flex-center">
                    <div className="d-flex align-items-center px-1 py-1 bg-success-subtle rounded me-2">
                      <span className="text-success-dark" data-feather={"mail"}>                      </span>
                    </div>
                    <span>
Email
                    </span>
                  </div>
                </th>
                <th className="sort align-middle ps-4 pe-5 text-uppercase border-end border-translucent" scope="col" data-sort={"phone"} style={{"width":"15%","minWidth":"180px"} as CSSProperties}>
                  <div className="d-inline-flex flex-center">
                    <div className="d-flex align-items-center px-1 py-1 bg-primary-subtle rounded me-2">
                      <span className="text-primary-dark" data-feather={"phone"}>                      </span>
                    </div>
                    <span>
Phone
                    </span>
                  </div>
                </th>
                <th className="sort align-middle ps-4 pe-5 text-uppercase border-end border-translucent" scope="col" data-sort={"contact"} style={{"width":"15%"} as CSSProperties}>
                  <div className="d-inline-flex flex-center">
                    <div className="d-flex align-items-center px-1 py-1 bg-info-subtle rounded me-2">
                      <span className="text-info-dark" data-feather={"user"}>                      </span>
                    </div>
                    <span>
Contact name
                    </span>
                  </div>
                </th>
                <th className="sort align-middle ps-4 pe-5 text-uppercase border-end border-translucent" scope="col" data-sort={"company"} style={{"width":"15%"} as CSSProperties}>
                  <div className="d-inline-flex flex-center">
                    <div className="d-flex align-items-center px-1 py-1 bg-warning-subtle rounded me-2">
                      <span className="text-warning-dark" data-feather={"grid"}>                      </span>
                    </div>
                    <span>
Company name
                    </span>
                  </div>
                </th>
                <th className="sort align-middle ps-4 pe-5 text-uppercase" scope="col" data-sort={"date"} style={{"width":"15%"} as CSSProperties}>
Create date
                </th>
                <th className="sort text-end align-middle pe-0 ps-4" scope="col">                </th>
              </tr>
            </thead>
            <tbody className="list" id="leal-tables-body"><tr className="hover-actions-trigger btn-reveal-trigger position-static">
                <td className="fs-9 align-middle">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/32.webp\",\"name\":\"Anthoney Michael\",\"designation\":\"VP Accounting\",\"status\":{\"label\":\"new lead\",\"type\":\"badge-phoenix-primary\"}},\"email\":\"anth125@gmail.com\",\"phone\":\"+1-202-555-0126\",\"contact\":\"Ally Aagaard\",\"company\":\"Google.inc\",\"date\":\"Jan 01, 12:56 PM\"}"} />
                  </div>
                </td>
                <td className="name align-middle white-space-nowrap ps-0">
                  <div className="d-flex align-items-center">
                    <a href="#!">
                      <div className="avatar avatar-xl me-3">
                        <PhoenixImage src="/assets/img/team/32.webp" alt="" className="rounded-circle" />
                      </div>
                    </a>
                    <div>
                      <a href="#!" className="fs-8 fw-bold">
Anthoney Michael
                      </a>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 text-body-highlight fw-semibold fs-9 me-2">
VP Accounting
                        </p>
                        <span className="badge badge-phoenix badge-phoenix-primary">
new lead
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="email align-middle white-space-nowrap fw-semibold ps-4 border-end border-translucent">
                  <a href="mailto:anth125@gmail.com" className="text-body-highlight">
anth125@gmail.com
                  </a>
                </td>
                <td className="phone align-middle white-space-nowrap fw-semibold ps-4 border-end border-translucent">
                  <a href="tel:+1-202-555-0126" className="text-body-highlight">
+1-202-555-0126
                  </a>
                </td>
                <td className="contact align-middle white-space-nowrap ps-4 border-end border-translucent fw-semibold text-body-highlight">
Ally Aagaard
                </td>
                <td className="company align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4 border-end border-translucent fw-semibold text-body-highlight">
Google.inc
                </td>
                <td className="date align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4 text-body-tertiary">
Jan 01, 12:56 PM
                </td>
                <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                  <div className="btn-reveal-trigger position-static">
                    <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                      <span className="fas fa-ellipsis-h fs-10">                      </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a href="#!" className="dropdown-item">
View
                      </a>
                      <a href="#!" className="dropdown-item">
Export
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#!" className="dropdown-item text-danger">
Remove
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/33.webp\",\"name\":\"Jacob Russell\",\"designation\":\"Executive Manager\",\"status\":{\"label\":\"Cancelled\",\"type\":\"badge-phoenix-secondary\"}},\"email\":\"jacob@yahoo.com\",\"phone\":\"+1-202-555-0135\",\"contact\":\"Alex Abadi\",\"company\":\"Google.inc\",\"date\":\"Dec 31, 11:51 PM\"}"} />
                  </div>
                </td>
                <td className="name align-middle white-space-nowrap ps-0">
                  <div className="d-flex align-items-center">
                    <a href="#!">
                      <div className="avatar avatar-xl me-3">
                        <PhoenixImage src="/assets/img/team/33.webp" alt="" className="rounded-circle" />
                      </div>
                    </a>
                    <div>
                      <a href="#!" className="fs-8 fw-bold">
Jacob Russell
                      </a>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 text-body-highlight fw-semibold fs-9 me-2">
Executive Manager
                        </p>
                        <span className="badge badge-phoenix badge-phoenix-secondary">
Cancelled
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="email align-middle white-space-nowrap fw-semibold ps-4 border-end border-translucent">
                  <a href="mailto:jacob@yahoo.com" className="text-body-highlight">
jacob@yahoo.com
                  </a>
                </td>
                <td className="phone align-middle white-space-nowrap fw-semibold ps-4 border-end border-translucent">
                  <a href="tel:+1-202-555-0135" className="text-body-highlight">
+1-202-555-0135
                  </a>
                </td>
                <td className="contact align-middle white-space-nowrap ps-4 border-end border-translucent fw-semibold text-body-highlight">
Alex Abadi
                </td>
                <td className="company align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4 border-end border-translucent fw-semibold text-body-highlight">
Google.inc
                </td>
                <td className="date align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4 text-body-tertiary">
Dec 31, 11:51 PM
                </td>
                <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                  <div className="btn-reveal-trigger position-static">
                    <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                      <span className="fas fa-ellipsis-h fs-10">                      </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a href="#!" className="dropdown-item">
View
                      </a>
                      <a href="#!" className="dropdown-item">
Export
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#!" className="dropdown-item text-danger">
Remove
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/34.webp\",\"name\":\"Diego Anthony\",\"designation\":\"CEO\",\"status\":{\"label\":\"In progress\",\"type\":\"badge-phoenix-info\"}},\"email\":\"diego20@hotmail.com\",\"phone\":\"+44 1632 960970\",\"contact\":\"Lyla Nicole\",\"company\":\"Adobe Inc.\",\"date\":\"Dec 29, 02:11 AM\"}"} />
                  </div>
                </td>
                <td className="name align-middle white-space-nowrap ps-0">
                  <div className="d-flex align-items-center">
                    <a href="#!">
                      <div className="avatar avatar-xl me-3">
                        <PhoenixImage src="/assets/img/team/34.webp" alt="" className="rounded-circle" />
                      </div>
                    </a>
                    <div>
                      <a href="#!" className="fs-8 fw-bold">
Diego Anthony
                      </a>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 text-body-highlight fw-semibold fs-9 me-2">
CEO
                        </p>
                        <span className="badge badge-phoenix badge-phoenix-info">
In progress
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="email align-middle white-space-nowrap fw-semibold ps-4 border-end border-translucent">
                  <a href="mailto:diego20@hotmail.com" className="text-body-highlight">
diego20@hotmail.com
                  </a>
                </td>
                <td className="phone align-middle white-space-nowrap fw-semibold ps-4 border-end border-translucent">
                  <a href="tel:+441632960970" className="text-body-highlight">
+44 1632 960970
                  </a>
                </td>
                <td className="contact align-middle white-space-nowrap ps-4 border-end border-translucent fw-semibold text-body-highlight">
Lyla Nicole
                </td>
                <td className="company align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4 border-end border-translucent fw-semibold text-body-highlight">
Adobe Inc.
                </td>
                <td className="date align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4 text-body-tertiary">
Dec 29, 02:11 AM
                </td>
                <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                  <div className="btn-reveal-trigger position-static">
                    <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                      <span className="fas fa-ellipsis-h fs-10">                      </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a href="#!" className="dropdown-item">
View
                      </a>
                      <a href="#!" className="dropdown-item">
Export
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#!" className="dropdown-item text-danger">
Remove
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/35.webp\",\"name\":\"Austin James\",\"designation\":\"Creative Director\",\"status\":{\"label\":\"Cold lead\",\"type\":\"badge-phoenix-warning\"}},\"email\":\"austin@sni.it\",\"phone\":\"+44 1632 960970\",\"contact\":\"Kylia Abbott\",\"company\":\"Facebook\",\"date\":\"Dec 28, 10:56 PM\"}"} />
                  </div>
                </td>
                <td className="name align-middle white-space-nowrap ps-0">
                  <div className="d-flex align-items-center">
                    <a href="#!">
                      <div className="avatar avatar-xl me-3">
                        <PhoenixImage src="/assets/img/team/35.webp" alt="" className="rounded-circle" />
                      </div>
                    </a>
                    <div>
                      <a href="#!" className="fs-8 fw-bold">
Austin James
                      </a>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 text-body-highlight fw-semibold fs-9 me-2">
Creative Director
                        </p>
                        <span className="badge badge-phoenix badge-phoenix-warning">
Cold lead
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="email align-middle white-space-nowrap fw-semibold ps-4 border-end border-translucent">
                  <a href="mailto:austin@sni.it" className="text-body-highlight">
austin@sni.it
                  </a>
                </td>
                <td className="phone align-middle white-space-nowrap fw-semibold ps-4 border-end border-translucent">
                  <a href="tel:+441632960970" className="text-body-highlight">
+44 1632 960970
                  </a>
                </td>
                <td className="contact align-middle white-space-nowrap ps-4 border-end border-translucent fw-semibold text-body-highlight">
Kylia Abbott
                </td>
                <td className="company align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4 border-end border-translucent fw-semibold text-body-highlight">
Facebook
                </td>
                <td className="date align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4 text-body-tertiary">
Dec 28, 10:56 PM
                </td>
                <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                  <div className="btn-reveal-trigger position-static">
                    <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                      <span className="fas fa-ellipsis-h fs-10">                      </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a href="#!" className="dropdown-item">
View
                      </a>
                      <a href="#!" className="dropdown-item">
Export
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#!" className="dropdown-item text-danger">
Remove
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/24.webp\",\"name\":\"Sarah Lynn\",\"designation\":\"Accountant\",\"status\":{\"label\":\"won lead\",\"type\":\"badge-phoenix-success\"}},\"email\":\"sarah@technext.it\",\"phone\":\"+1-202-555-0177\",\"contact\":\"Bryce Abbott\",\"company\":\"Twitter\",\"date\":\"Dec 27, 11:43 PM\"}"} />
                  </div>
                </td>
                <td className="name align-middle white-space-nowrap ps-0">
                  <div className="d-flex align-items-center">
                    <a href="#!">
                      <div className="avatar avatar-xl me-3">
                        <PhoenixImage src="/assets/img/team/24.webp" alt="" className="rounded-circle" />
                      </div>
                    </a>
                    <div>
                      <a href="#!" className="fs-8 fw-bold">
Sarah Lynn
                      </a>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 text-body-highlight fw-semibold fs-9 me-2">
Accountant
                        </p>
                        <span className="badge badge-phoenix badge-phoenix-success">
won lead
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="email align-middle white-space-nowrap fw-semibold ps-4 border-end border-translucent">
                  <a href="mailto:sarah@technext.it" className="text-body-highlight">
sarah@technext.it
                  </a>
                </td>
                <td className="phone align-middle white-space-nowrap fw-semibold ps-4 border-end border-translucent">
                  <a href="tel:+1-202-555-0177" className="text-body-highlight">
+1-202-555-0177
                  </a>
                </td>
                <td className="contact align-middle white-space-nowrap ps-4 border-end border-translucent fw-semibold text-body-highlight">
Bryce Abbott
                </td>
                <td className="company align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4 border-end border-translucent fw-semibold text-body-highlight">
Twitter
                </td>
                <td className="date align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4 text-body-tertiary">
Dec 27, 11:43 PM
                </td>
                <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                  <div className="btn-reveal-trigger position-static">
                    <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                      <span className="fas fa-ellipsis-h fs-10">                      </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a href="#!" className="dropdown-item">
View
                      </a>
                      <a href="#!" className="dropdown-item">
Export
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#!" className="dropdown-item text-danger">
Remove
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/29.webp\",\"name\":\"Reyna Denise\",\"designation\":\"Executive Manager\",\"status\":{\"label\":\"new lead\",\"type\":\"badge-phoenix-info\"}},\"email\":\"reyna99@gmail.com\",\"phone\":\"+44 1632 960958\",\"contact\":\"Jase Adams\",\"company\":\"Twitter\",\"date\":\"Dec 25, 12:55 PM\"}"} />
                  </div>
                </td>
                <td className="name align-middle white-space-nowrap ps-0">
                  <div className="d-flex align-items-center">
                    <a href="#!">
                      <div className="avatar avatar-xl me-3">
                        <PhoenixImage src="/assets/img/team/29.webp" alt="" className="rounded-circle" />
                      </div>
                    </a>
                    <div>
                      <a href="#!" className="fs-8 fw-bold">
Reyna Denise
                      </a>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 text-body-highlight fw-semibold fs-9 me-2">
Executive Manager
                        </p>
                        <span className="badge badge-phoenix badge-phoenix-info">
new lead
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="email align-middle white-space-nowrap fw-semibold ps-4 border-end border-translucent">
                  <a href="mailto:reyna99@gmail.com" className="text-body-highlight">
reyna99@gmail.com
                  </a>
                </td>
                <td className="phone align-middle white-space-nowrap fw-semibold ps-4 border-end border-translucent">
                  <a href="tel:+441632960958" className="text-body-highlight">
+44 1632 960958
                  </a>
                </td>
                <td className="contact align-middle white-space-nowrap ps-4 border-end border-translucent fw-semibold text-body-highlight">
Jase Adams
                </td>
                <td className="company align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4 border-end border-translucent fw-semibold text-body-highlight">
Twitter
                </td>
                <td className="date align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4 text-body-tertiary">
Dec 25, 12:55 PM
                </td>
                <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                  <div className="btn-reveal-trigger position-static">
                    <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                      <span className="fas fa-ellipsis-h fs-10">                      </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a href="#!" className="dropdown-item">
View
                      </a>
                      <a href="#!" className="dropdown-item">
Export
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#!" className="dropdown-item text-danger">
Remove
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/65.webp\",\"name\":\"Roy Anderson\",\"designation\":\"System Admin\",\"status\":{\"label\":\"Canceled\",\"type\":\"badge-phoenix-secondary\"}},\"email\":\"andersonroy@netflix.chill\",\"phone\":\"+1-613-555-0109\",\"contact\":\"Jim Aldridge\",\"company\":\"Google.inc\",\"date\":\"Dec 24, 09:52 PM\"}"} />
                  </div>
                </td>
                <td className="name align-middle white-space-nowrap ps-0">
                  <div className="d-flex align-items-center">
                    <a href="#!">
                      <div className="avatar avatar-xl me-3">
                        <PhoenixImage src="/assets/img/team/65.webp" alt="" className="rounded-circle" />
                      </div>
                    </a>
                    <div>
                      <a href="#!" className="fs-8 fw-bold">
Roy Anderson
                      </a>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 text-body-highlight fw-semibold fs-9 me-2">
System Admin
                        </p>
                        <span className="badge badge-phoenix badge-phoenix-secondary">
Canceled
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="email align-middle white-space-nowrap fw-semibold ps-4 border-end border-translucent">
                  <a href="mailto:andersonroy@netflix.chill" className="text-body-highlight">
andersonroy@netflix.chill
                  </a>
                </td>
                <td className="phone align-middle white-space-nowrap fw-semibold ps-4 border-end border-translucent">
                  <a href="tel:+1-613-555-0109" className="text-body-highlight">
+1-613-555-0109
                  </a>
                </td>
                <td className="contact align-middle white-space-nowrap ps-4 border-end border-translucent fw-semibold text-body-highlight">
Jim Aldridge
                </td>
                <td className="company align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4 border-end border-translucent fw-semibold text-body-highlight">
Google.inc
                </td>
                <td className="date align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4 text-body-tertiary">
Dec 24, 09:52 PM
                </td>
                <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                  <div className="btn-reveal-trigger position-static">
                    <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                      <span className="fas fa-ellipsis-h fs-10">                      </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a href="#!" className="dropdown-item">
View
                      </a>
                      <a href="#!" className="dropdown-item">
Export
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#!" className="dropdown-item text-danger">
Remove
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/63.webp\",\"name\":\"Emily Beazley\",\"designation\":\"Marketing Executive\",\"status\":{\"label\":\"New Lead\",\"type\":\"badge-phoenix-info\"}},\"email\":\"beazley1@gmail.com\",\"phone\":\"+61 1900 654 321\",\"contact\":\"Zackry Aldridge\",\"company\":\"Instagram\",\"date\":\"Dec 22, 08:45 PM\"}"} />
                  </div>
                </td>
                <td className="name align-middle white-space-nowrap ps-0">
                  <div className="d-flex align-items-center">
                    <a href="#!">
                      <div className="avatar avatar-xl me-3">
                        <PhoenixImage src="/assets/img/team/63.webp" alt="" className="rounded-circle" />
                      </div>
                    </a>
                    <div>
                      <a href="#!" className="fs-8 fw-bold">
Emily Beazley
                      </a>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 text-body-highlight fw-semibold fs-9 me-2">
Marketing Executive
                        </p>
                        <span className="badge badge-phoenix badge-phoenix-info">
New Lead
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="email align-middle white-space-nowrap fw-semibold ps-4 border-end border-translucent">
                  <a href="mailto:beazley1@gmail.com" className="text-body-highlight">
beazley1@gmail.com
                  </a>
                </td>
                <td className="phone align-middle white-space-nowrap fw-semibold ps-4 border-end border-translucent">
                  <a href="tel:+611900654321" className="text-body-highlight">
+61 1900 654 321
                  </a>
                </td>
                <td className="contact align-middle white-space-nowrap ps-4 border-end border-translucent fw-semibold text-body-highlight">
Zackry Aldridge
                </td>
                <td className="company align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4 border-end border-translucent fw-semibold text-body-highlight">
Instagram
                </td>
                <td className="date align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4 text-body-tertiary">
Dec 22, 08:45 PM
                </td>
                <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                  <div className="btn-reveal-trigger position-static">
                    <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                      <span className="fas fa-ellipsis-h fs-10">                      </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a href="#!" className="dropdown-item">
View
                      </a>
                      <a href="#!" className="dropdown-item">
Export
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#!" className="dropdown-item text-danger">
Remove
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/31.webp\",\"name\":\"Layla Beckstrand\",\"designation\":\"Junior Executive\",\"status\":{\"label\":\"cold lead\",\"type\":\"badge-phoenix-warning\"}},\"email\":\"layla@live.com\",\"phone\":\"+36 55 116 068\",\"contact\":\"Daniel Alexander\",\"company\":\"Linkedin\",\"date\":\"Dec 20, 06:32 PM\"}"} />
                  </div>
                </td>
                <td className="name align-middle white-space-nowrap ps-0">
                  <div className="d-flex align-items-center">
                    <a href="#!">
                      <div className="avatar avatar-xl me-3">
                        <PhoenixImage src="/assets/img/team/31.webp" alt="" className="rounded-circle" />
                      </div>
                    </a>
                    <div>
                      <a href="#!" className="fs-8 fw-bold">
Layla Beckstrand
                      </a>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 text-body-highlight fw-semibold fs-9 me-2">
Junior Executive
                        </p>
                        <span className="badge badge-phoenix badge-phoenix-warning">
cold lead
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="email align-middle white-space-nowrap fw-semibold ps-4 border-end border-translucent">
                  <a href="mailto:layla@live.com" className="text-body-highlight">
layla@live.com
                  </a>
                </td>
                <td className="phone align-middle white-space-nowrap fw-semibold ps-4 border-end border-translucent">
                  <a href="tel:+3655116068" className="text-body-highlight">
+36 55 116 068
                  </a>
                </td>
                <td className="contact align-middle white-space-nowrap ps-4 border-end border-translucent fw-semibold text-body-highlight">
Daniel Alexander
                </td>
                <td className="company align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4 border-end border-translucent fw-semibold text-body-highlight">
Linkedin
                </td>
                <td className="date align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4 text-body-tertiary">
Dec 20, 06:32 PM
                </td>
                <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                  <div className="btn-reveal-trigger position-static">
                    <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                      <span className="fas fa-ellipsis-h fs-10">                      </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a href="#!" className="dropdown-item">
View
                      </a>
                      <a href="#!" className="dropdown-item">
Export
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#!" className="dropdown-item text-danger">
Remove
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/26.webp\",\"name\":\"Olivia Bensinger\",\"designation\":\"Chief Tech Officer\",\"status\":{\"label\":\"won lead\",\"type\":\"badge-phoenix-success\"}},\"email\":\"olivia1986@gmail.com\",\"phone\":\"+44 1632 960248\",\"contact\":\"Sam Alimentato\",\"company\":\"Google.inc\",\"date\":\"Dec 19, 10:44 PM\"}"} />
                  </div>
                </td>
                <td className="name align-middle white-space-nowrap ps-0">
                  <div className="d-flex align-items-center">
                    <a href="#!">
                      <div className="avatar avatar-xl me-3">
                        <PhoenixImage src="/assets/img/team/26.webp" alt="" className="rounded-circle" />
                      </div>
                    </a>
                    <div>
                      <a href="#!" className="fs-8 fw-bold">
Olivia Bensinger
                      </a>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 text-body-highlight fw-semibold fs-9 me-2">
Chief Tech Officer
                        </p>
                        <span className="badge badge-phoenix badge-phoenix-success">
won lead
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="email align-middle white-space-nowrap fw-semibold ps-4 border-end border-translucent">
                  <a href="mailto:olivia1986@gmail.com" className="text-body-highlight">
olivia1986@gmail.com
                  </a>
                </td>
                <td className="phone align-middle white-space-nowrap fw-semibold ps-4 border-end border-translucent">
                  <a href="tel:+441632960248" className="text-body-highlight">
+44 1632 960248
                  </a>
                </td>
                <td className="contact align-middle white-space-nowrap ps-4 border-end border-translucent fw-semibold text-body-highlight">
Sam Alimentato
                </td>
                <td className="company align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4 border-end border-translucent fw-semibold text-body-highlight">
Google.inc
                </td>
                <td className="date align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4 text-body-tertiary">
Dec 19, 10:44 PM
                </td>
                <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                  <div className="btn-reveal-trigger position-static">
                    <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                      <span className="fas fa-ellipsis-h fs-10">                      </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a href="#!" className="dropdown-item">
View
                      </a>
                      <a href="#!" className="dropdown-item">
Export
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#!" className="dropdown-item text-danger">
Remove
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/73.webp\",\"name\":\"Emily Beazley\",\"designation\":\"Marketing Executive\",\"status\":{\"label\":\"New Lead\",\"type\":\"badge-phoenix-info\"}},\"email\":\"beazley1@gmail.com\",\"phone\":\"+61 1900 654 321\",\"contact\":\"Zackry Aldridge\",\"company\":\"Instagram\",\"date\":\"Dec 22, 08:45 PM\"}"} />
                  </div>
                </td>
                <td className="name align-middle white-space-nowrap ps-0">
                  <div className="d-flex align-items-center">
                    <a href="#!">
                      <div className="avatar avatar-xl me-3">
                        <PhoenixImage src="/assets/img/team/73.webp" alt="" className="rounded-circle" />
                      </div>
                    </a>
                    <div>
                      <a href="#!" className="fs-8 fw-bold">
Emily Beazley
                      </a>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 text-body-highlight fw-semibold fs-9 me-2">
Marketing Executive
                        </p>
                        <span className="badge badge-phoenix badge-phoenix-info">
New Lead
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="email align-middle white-space-nowrap fw-semibold ps-4 border-end border-translucent">
                  <a href="mailto:beazley1@gmail.com" className="text-body-highlight">
beazley1@gmail.com
                  </a>
                </td>
                <td className="phone align-middle white-space-nowrap fw-semibold ps-4 border-end border-translucent">
                  <a href="tel:+611900654321" className="text-body-highlight">
+61 1900 654 321
                  </a>
                </td>
                <td className="contact align-middle white-space-nowrap ps-4 border-end border-translucent fw-semibold text-body-highlight">
Zackry Aldridge
                </td>
                <td className="company align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4 border-end border-translucent fw-semibold text-body-highlight">
Instagram
                </td>
                <td className="date align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4 text-body-tertiary">
Dec 22, 08:45 PM
                </td>
                <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                  <div className="btn-reveal-trigger position-static">
                    <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                      <span className="fas fa-ellipsis-h fs-10">                      </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a href="#!" className="dropdown-item">
View
                      </a>
                      <a href="#!" className="dropdown-item">
Export
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#!" className="dropdown-item text-danger">
Remove
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/75.webp\",\"name\":\"Roy Anderson\",\"designation\":\"System Admin\",\"status\":{\"label\":\"Canceled\",\"type\":\"badge-phoenix-secondary\"}},\"email\":\"andersonroy@netflix.chill\",\"phone\":\"+1-613-555-0109\",\"contact\":\"Jim Aldridge\",\"company\":\"Google.inc\",\"date\":\"Dec 24, 09:52 PM\"}"} />
                  </div>
                </td>
                <td className="name align-middle white-space-nowrap ps-0">
                  <div className="d-flex align-items-center">
                    <a href="#!">
                      <div className="avatar avatar-xl me-3">
                        <PhoenixImage src="/assets/img/team/75.webp" alt="" className="rounded-circle" />
                      </div>
                    </a>
                    <div>
                      <a href="#!" className="fs-8 fw-bold">
Roy Anderson
                      </a>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 text-body-highlight fw-semibold fs-9 me-2">
System Admin
                        </p>
                        <span className="badge badge-phoenix badge-phoenix-secondary">
Canceled
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="email align-middle white-space-nowrap fw-semibold ps-4 border-end border-translucent">
                  <a href="mailto:andersonroy@netflix.chill" className="text-body-highlight">
andersonroy@netflix.chill
                  </a>
                </td>
                <td className="phone align-middle white-space-nowrap fw-semibold ps-4 border-end border-translucent">
                  <a href="tel:+1-613-555-0109" className="text-body-highlight">
+1-613-555-0109
                  </a>
                </td>
                <td className="contact align-middle white-space-nowrap ps-4 border-end border-translucent fw-semibold text-body-highlight">
Jim Aldridge
                </td>
                <td className="company align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4 border-end border-translucent fw-semibold text-body-highlight">
Google.inc
                </td>
                <td className="date align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4 text-body-tertiary">
Dec 24, 09:52 PM
                </td>
                <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                  <div className="btn-reveal-trigger position-static">
                    <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                      <span className="fas fa-ellipsis-h fs-10">                      </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a href="#!" className="dropdown-item">
View
                      </a>
                      <a href="#!" className="dropdown-item">
Export
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#!" className="dropdown-item text-danger">
Remove
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row align-items-center justify-content-end py-4 pe-0 fs-9">
          <div className="col-auto d-flex">
            <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info>            </p>
            <a href="#!" className="fw-semibold"  data-list-view={"*"}>
View all              <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>              </span>
            </a>
            <a href="#!" className="fw-semibold d-none"  data-list-view={"less"}>
View Less              <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>              </span>
            </a>
          </div>
          <div className="col-auto d-flex">
            <button className="page-link" data-list-pagination={"prev"}>
              <span className="fas fa-chevron-left">              </span>
            </button>
            <ul className="mb-0 pagination">            </ul>
            <button className="page-link pe-0" data-list-pagination={"next"}>
              <span className="fas fa-chevron-right">              </span>
            </button>
          </div>
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
