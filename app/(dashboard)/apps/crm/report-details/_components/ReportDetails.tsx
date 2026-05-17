'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function ReportDetails() {
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

    <div className="pb-9">
      <h2 className="mb-4">
Purchasers and sellers
      </h2>
      <div className="row g-3 justify-content-between mb-4">
        <div className="col-auto">
          <div className="d-flex flex-wrap gap-2">
            <button className="btn btn-primary">
              <span className="fas fa-envelope me-2">              </span>
Send mail
            </button>
            <button className="btn btn-phoenix-primary">
              <span className="fas fa-pencil me-2">              </span>
Edit
            </button>
            <button className="btn btn-phoenix-secondary text-body">
              <span className="fa-solid fa-file-export fs-9 me-2">              </span>
Export
            </button>
          </div>
        </div>
        <div className="col-auto">
          <div className="d-flex">
            <div className="search-box me-2 d-none d-xl-block">
              <form className="position-relative">
                <input className="form-control search-input search" type="search" placeholder="Search by name" aria-label="Search" />
                <span className="fas fa-search search-box-icon">                </span>
              </form>
            </div>
            <button className="btn px-3 btn-phoenix-secondary me-2 d-xl-none">
              <span className="fa-solid fa-search">              </span>
            </button>
            <button className="btn px-3 btn-phoenix-primary" type="button" data-bs-toggle={"modal"} data-bs-target={"#filterModal"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
              <span className="fa-solid fa-filter" data-fa-transform={"down-3"}>              </span>
            </button>
            <div className="modal fade" id="filterModal" tabIndex={-1}>
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content border border-translucent">
                  <form id="addEventForm" autoComplete="off">
                    <div className="modal-header justify-content-between border-translucent p-4">
                      <h5 className="modal-title text-body-highlight fs-6 lh-sm">
Filter
                      </h5>
                      <button className="btn p-1 text-danger" type="button" data-bs-dismiss={"modal"} aria-label="Close">
                        <span className="fas fa-times fs-9">                        </span>
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
                        <span className="fas fa-arrows-rotate me-2 fs-10">                        </span>
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
      <div className="row gy-5">
        <div className="col-xl-5 col-xxl-4">
          <div className="card">
            <div className="card-body">
              <div className="echart-reports-details mb-5" style={{"height":"358px","width":"100%"} as CSSProperties}>              </div>
              <div className="table-responsive scrollbar">
                <table className="reports-details-chart-table table table-sm fs-9 mb-0">
                  <thead>
                    <tr>
                      <th className="align-middle pe- text-body-tertiary fw-bold fs-10 text-uppercase text-nowrap ps-0" scope="col" style={{"width":"35%"} as CSSProperties}>
Report stage
                      </th>
                      <th className="align-middle text-end ps-4 text-body-tertiary fw-bold fs-10 text-uppercase text-nowrap" scope="col" style={{"width":"35%"} as CSSProperties}>
total count
                      </th>
                      <th className="align-middle text-end ps-4 text-body-tertiary fw-bold fs-10 text-uppercase" scope="col" style={{"width":"30%"} as CSSProperties}>
Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="list" id="report-data-body"><tr className="hover-actions-trigger btn-reveal-trigger position-static">
                      <td className="align-middle white-space-nowrap fw-semibold text-body-highlight py-2">
Analysis
                      </td>
                      <td className="align-middle text-end white-space-nowrap fw-semibold text-body-highlight ps-4 py-2">
03
                      </td>
                      <td className="align-middle text-end white-space-nowrap ps-4 fw-semibold text-body-highlight">
                        <span className="badge badge-phoenix badge-phoenix-info">
+15.21%
                        </span>
                      </td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle white-space-nowrap fw-semibold text-body-highlight py-2">
Statement
                      </td>
                      <td className="align-middle text-end white-space-nowrap fw-semibold text-body-highlight ps-4 py-2">
01
                      </td>
                      <td className="align-middle text-end white-space-nowrap ps-4 fw-semibold text-body-highlight">
                        <span className="badge badge-phoenix badge-phoenix-warning">
+05.21%
                        </span>
                      </td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle white-space-nowrap fw-semibold text-body-highlight py-2">
Action
                      </td>
                      <td className="align-middle text-end white-space-nowrap fw-semibold text-body-highlight ps-4 py-2">
02
                      </td>
                      <td className="align-middle text-end white-space-nowrap ps-4 fw-semibold text-body-highlight">
                        <span className="badge badge-phoenix badge-phoenix-primary">
+22.12%
                        </span>
                      </td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle white-space-nowrap fw-semibold text-body-highlight py-2">
Offering
                      </td>
                      <td className="align-middle text-end white-space-nowrap fw-semibold text-body-highlight ps-4 py-2">
02
                      </td>
                      <td className="align-middle text-end white-space-nowrap ps-4 fw-semibold text-body-highlight">
                        <span className="badge badge-phoenix badge-phoenix-danger">
-14.21%
                        </span>
                      </td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle white-space-nowrap fw-semibold text-body-highlight py-2">
Interlocution
                      </td>
                      <td className="align-middle text-end white-space-nowrap fw-semibold text-body-highlight ps-4 py-2">
02
                      </td>
                      <td className="align-middle text-end white-space-nowrap ps-4 fw-semibold text-body-highlight">
                        <span className="badge badge-phoenix badge-phoenix-danger">
-14.21%
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-7 col-xxl-8">
          <div className="border-top border-translucent">
            <div id="purchasersSellersTable" data-list={"{\"valueNames\":[\"deals_name\",\"deal_owner\",\"account_name\",\"stage\",\"amount\"],\"page\":10,\"pagination\":true}"}>
              <div className="table-responsive scrollbar mx-n1 px-1">
                <table className="table table-sm fs-9 leads-table">
                  <thead>
                    <tr>
                      <th className="white-space-nowrap fs-9 align-middle ps-0" style={{"maxWidth":"20px","width":"18px"} as CSSProperties}>
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select={"{\"body\":\"purchasers-sellers-body\"}"} />
                        </div>
                      </th>
                      <th className="sort align-middle ps-0 pe-5 text-uppercase text-nowrap" scope="col" data-sort={"deals_name"} style={{"minWidth":"120px"} as CSSProperties}>
Deal name
                      </th>
                      <th className="sort align-middle ps-4 pe-5 text-uppercase text-nowrap" scope="col" data-sort={"deal_owner"} style={{"minWidth":"50px"} as CSSProperties}>
Deal owner
                      </th>
                      <th className="sort align-middle ps-4 pe-5 text-uppercase text-nowrap" scope="col" data-sort={"account_name"} style={{"minWidth":"250px"} as CSSProperties}>
Account name
                      </th>
                      <th className="sort align-middle pe-5 text-uppercase text-nowrap" scope="col" data-sort={"stage"} style={{"minWidth":"160px"} as CSSProperties}>
Stage
                      </th>
                      <th className="sort align-middle ps-4 pe-5 text-uppercase text-nowrap" scope="col" data-sort={"amount"} style={{"minWidth":"50px"} as CSSProperties}>
Amount
                      </th>
                      <th className="sort text-end align-middle pe-0 ps-4" scope="col">                      </th>
                    </tr>
                  </thead>
                  <tbody className="list" id="purchasers-sellers-body"><tr className="hover-actions-trigger btn-reveal-trigger position-static">
                      <td className="fs-9 align-middle py-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"dealsName\":\"Jo_Td01\",\"dealOwner\":{\"avatar\":\"team/avatar.webp\",\"name\":\"Ally Aagaard\",\"placeholder\":true},\"accountName\":\"Themewagon\",\"stage\":{\"label\":\"Analysis\",\"color\":\"#3874FF\",\"data\":20},\"amount\":{\"totalAmount\":\"$140\",\"icon\":\"trending-down\",\"color\":\"text-danger\"}}"} />
                        </div>
                      </td>
                      <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                        <a href="#!" className="fw-bold text-primary">
Jo_Td01
                        </a>
                      </td>
                      <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                        <div className="d-flex align-items-center position-relative">
                          <div className="avatar avatar-m me-3">
                            <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                          </div>
                          <a href="#!" className="text-body-highlight fw-bold stretched-link">
Ally Aagaard
                          </a>
                        </div>
                      </td>
                      <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
Themewagon
                      </td>
                      <td className="stage align-middle white-space-nowrap fw-bold text-body py-2">
                        <div className="d-flex align-items-center gap-3">
                          <div style={{"--phoenix-circle-progress-bar":"20"} as CSSProperties}>
                            <svg className="circle-progress-svg" width={38} height={38} viewBox="0 0 125 125">
                              <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                              </circle>
                              <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#3874FF" strokeWidth="12">                              </circle>
                            </svg>
                          </div>
                          <h6 className="mb-0 text-body">
Analysis
                          </h6>
                        </div>
                      </td>
                      <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$140
                        <span className="ms-2 text-danger" data-feather={"trending-down"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                        </span>
                      </td>
                      <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                        <div className="btn-reveal-trigger position-static">
                          <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10">                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end py-2">
                            <a href="#!" className="dropdown-item">
View
                            </a>
                            <a href="#!" className="dropdown-item">
Export
                            </a>
                            <div className="dropdown-divider">                            </div>
                            <a href="#!" className="dropdown-item text-danger">
Remove
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle py-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"dealsName\":\"Printing Dimensions\",\"dealOwner\":{\"avatar\":\"/team/35.webp\",\"name\":\"Alex Abadi\"},\"accountName\":\"Black Box\",\"stage\":{\"label\":\"Statement\",\"color\":\"#0097EB\",\"data\":40},\"amount\":{\"totalAmount\":\"$214\",\"icon\":\"trending-up\",\"color\":\"text-success\"}}"} />
                        </div>
                      </td>
                      <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                        <a href="#!" className="fw-bold text-primary">
Printing Dimensions
                        </a>
                      </td>
                      <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                        <div className="d-flex align-items-center position-relative">
                          <div className="avatar avatar-m me-3">
                            <PhoenixImage src="/assets/img/team/35.webp" alt="" className="rounded-circle" />
                          </div>
                          <a href="#!" className="text-body-highlight fw-bold stretched-link">
Alex Abadi
                          </a>
                        </div>
                      </td>
                      <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
Black Box
                      </td>
                      <td className="stage align-middle white-space-nowrap fw-bold text-body py-2">
                        <div className="d-flex align-items-center gap-3">
                          <div style={{"--phoenix-circle-progress-bar":"40"} as CSSProperties}>
                            <svg className="circle-progress-svg" width={38} height={38} viewBox="0 0 125 125">
                              <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                              </circle>
                              <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#0097EB" strokeWidth="12">                              </circle>
                            </svg>
                          </div>
                          <h6 className="mb-0 text-body">
Statement
                          </h6>
                        </div>
                      </td>
                      <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$214
                        <span className="ms-2 text-success" data-feather={"trending-up"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                        </span>
                      </td>
                      <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                        <div className="btn-reveal-trigger position-static">
                          <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10">                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end py-2">
                            <a href="#!" className="dropdown-item">
View
                            </a>
                            <a href="#!" className="dropdown-item">
Export
                            </a>
                            <div className="dropdown-divider">                            </div>
                            <a href="#!" className="dropdown-item text-danger">
Remove
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle py-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"dealsName\":\"MM_TD_120\",\"dealOwner\":{\"avatar\":\"/team/32.webp\",\"name\":\"Kylia Abbott\"},\"accountName\":\"Hunter Leader\",\"stage\":{\"label\":\"Action\",\"color\":\"#E5780B\",\"data\":50},\"amount\":{\"totalAmount\":\"$412\",\"icon\":\"trending-up\",\"color\":\"text-success\"}}"} />
                        </div>
                      </td>
                      <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                        <a href="#!" className="fw-bold text-primary">
MM_TD_120
                        </a>
                      </td>
                      <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                        <div className="d-flex align-items-center position-relative">
                          <div className="avatar avatar-m me-3">
                            <PhoenixImage src="/assets/img/team/32.webp" alt="" className="rounded-circle" />
                          </div>
                          <a href="#!" className="text-body-highlight fw-bold stretched-link">
Kylia Abbott
                          </a>
                        </div>
                      </td>
                      <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
Hunter Leader
                      </td>
                      <td className="stage align-middle white-space-nowrap fw-bold text-body py-2">
                        <div className="d-flex align-items-center gap-3">
                          <div style={{"--phoenix-circle-progress-bar":"50"} as CSSProperties}>
                            <svg className="circle-progress-svg" width={38} height={38} viewBox="0 0 125 125">
                              <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                              </circle>
                              <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#E5780B" strokeWidth="12">                              </circle>
                            </svg>
                          </div>
                          <h6 className="mb-0 text-body">
Action
                          </h6>
                        </div>
                      </td>
                      <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$412
                        <span className="ms-2 text-success" data-feather={"trending-up"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                        </span>
                      </td>
                      <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                        <div className="btn-reveal-trigger position-static">
                          <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10">                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end py-2">
                            <a href="#!" className="dropdown-item">
View
                            </a>
                            <a href="#!" className="dropdown-item">
Export
                            </a>
                            <div className="dropdown-divider">                            </div>
                            <a href="#!" className="dropdown-item text-danger">
Remove
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle py-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"dealsName\":\"Truhlar And Truhlar Attys\",\"dealOwner\":{\"avatar\":\"/team/32.webp\",\"name\":\"Kylia Abbott\"},\"accountName\":\"Eagle Eye\",\"stage\":{\"label\":\"Offering\",\"color\":\"#6E7891\",\"data\":60},\"amount\":{\"totalAmount\":\"$110\",\"icon\":\"trending-up\",\"color\":\"text-success\"}}"} />
                        </div>
                      </td>
                      <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                        <a href="#!" className="fw-bold text-primary">
Truhlar And Truhlar Attys
                        </a>
                      </td>
                      <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                        <div className="d-flex align-items-center position-relative">
                          <div className="avatar avatar-m me-3">
                            <PhoenixImage src="/assets/img/team/32.webp" alt="" className="rounded-circle" />
                          </div>
                          <a href="#!" className="text-body-highlight fw-bold stretched-link">
Kylia Abbott
                          </a>
                        </div>
                      </td>
                      <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
Eagle Eye
                      </td>
                      <td className="stage align-middle white-space-nowrap fw-bold text-body py-2">
                        <div className="d-flex align-items-center gap-3">
                          <div style={{"--phoenix-circle-progress-bar":"60"} as CSSProperties}>
                            <svg className="circle-progress-svg" width={38} height={38} viewBox="0 0 125 125">
                              <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                              </circle>
                              <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#6E7891" strokeWidth="12">                              </circle>
                            </svg>
                          </div>
                          <h6 className="mb-0 text-body">
Offering
                          </h6>
                        </div>
                      </td>
                      <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$110
                        <span className="ms-2 text-success" data-feather={"trending-up"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                        </span>
                      </td>
                      <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                        <div className="btn-reveal-trigger position-static">
                          <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10">                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end py-2">
                            <a href="#!" className="dropdown-item">
View
                            </a>
                            <a href="#!" className="dropdown-item">
Export
                            </a>
                            <div className="dropdown-divider">                            </div>
                            <a href="#!" className="dropdown-item text-danger">
Remove
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle py-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"dealsName\":\"Morlong Associates\",\"dealOwner\":{\"avatar\":\"/team/59.webp\",\"name\":\"Lyla Nicole\"},\"accountName\":\"Black Box\",\"stage\":{\"label\":\"Negotiation\",\"color\":\"#25B003\",\"data\":100},\"amount\":{\"totalAmount\":\"$325\",\"icon\":\"trending-down\",\"color\":\"text-danger\"}}"} />
                        </div>
                      </td>
                      <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                        <a href="#!" className="fw-bold text-primary">
Morlong Associates
                        </a>
                      </td>
                      <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                        <div className="d-flex align-items-center position-relative">
                          <div className="avatar avatar-m me-3">
                            <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle" />
                          </div>
                          <a href="#!" className="text-body-highlight fw-bold stretched-link">
Lyla Nicole
                          </a>
                        </div>
                      </td>
                      <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
Black Box
                      </td>
                      <td className="stage align-middle white-space-nowrap fw-bold text-body py-2">
                        <div className="d-flex align-items-center gap-3">
                          <div style={{"--phoenix-circle-progress-bar":"100"} as CSSProperties}>
                            <svg className="circle-progress-svg" width={38} height={38} viewBox="0 0 125 125">
                              <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                              </circle>
                              <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#25B003" strokeWidth="12">                              </circle>
                            </svg>
                          </div>
                          <h6 className="mb-0 text-body">
Negotiation
                          </h6>
                        </div>
                      </td>
                      <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$325
                        <span className="ms-2 text-danger" data-feather={"trending-down"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                        </span>
                      </td>
                      <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                        <div className="btn-reveal-trigger position-static">
                          <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10">                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end py-2">
                            <a href="#!" className="dropdown-item">
View
                            </a>
                            <a href="#!" className="dropdown-item">
Export
                            </a>
                            <div className="dropdown-divider">                            </div>
                            <a href="#!" className="dropdown-item text-danger">
Remove
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle py-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"dealsName\":\"Product Order\",\"dealOwner\":{\"avatar\":\"/team/18.webp\",\"name\":\"Hunter Leader\"},\"accountName\":\"Themewagon\",\"stage\":{\"label\":\"Negotiation\",\"color\":\"#25B003\",\"data\":100},\"amount\":{\"totalAmount\":\"$198\",\"icon\":\"trending-down\",\"color\":\"text-warning\"}}"} />
                        </div>
                      </td>
                      <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                        <a href="#!" className="fw-bold text-primary">
Product Order
                        </a>
                      </td>
                      <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                        <div className="d-flex align-items-center position-relative">
                          <div className="avatar avatar-m me-3">
                            <PhoenixImage src="/assets/img/team/18.webp" alt="" className="rounded-circle" />
                          </div>
                          <a href="#!" className="text-body-highlight fw-bold stretched-link">
Hunter Leader
                          </a>
                        </div>
                      </td>
                      <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
Themewagon
                      </td>
                      <td className="stage align-middle white-space-nowrap fw-bold text-body py-2">
                        <div className="d-flex align-items-center gap-3">
                          <div style={{"--phoenix-circle-progress-bar":"100"} as CSSProperties}>
                            <svg className="circle-progress-svg" width={38} height={38} viewBox="0 0 125 125">
                              <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                              </circle>
                              <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#25B003" strokeWidth="12">                              </circle>
                            </svg>
                          </div>
                          <h6 className="mb-0 text-body">
Negotiation
                          </h6>
                        </div>
                      </td>
                      <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$198
                        <span className="ms-2 text-warning" data-feather={"trending-down"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                        </span>
                      </td>
                      <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                        <div className="btn-reveal-trigger position-static">
                          <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10">                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end py-2">
                            <a href="#!" className="dropdown-item">
View
                            </a>
                            <a href="#!" className="dropdown-item">
Export
                            </a>
                            <div className="dropdown-divider">                            </div>
                            <a href="#!" className="dropdown-item text-danger">
Remove
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle py-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"dealsName\":\"Feltz Printing Service\",\"dealOwner\":{\"avatar\":\"/team/avatar.webp\",\"name\":\"Ally Aagaard\",\"placeholder\":true},\"accountName\":\"Themewagon\",\"stage\":{\"label\":\"Offering\",\"color\":\"#6E7891\",\"data\":80},\"amount\":{\"totalAmount\":\"$142\",\"icon\":\"trending-up\",\"color\":\"text-success\"}}"} />
                        </div>
                      </td>
                      <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                        <a href="#!" className="fw-bold text-primary">
Feltz Printing Service
                        </a>
                      </td>
                      <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                        <div className="d-flex align-items-center position-relative">
                          <div className="avatar avatar-m me-3">
                            <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                          </div>
                          <a href="#!" className="text-body-highlight fw-bold stretched-link">
Ally Aagaard
                          </a>
                        </div>
                      </td>
                      <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
Themewagon
                      </td>
                      <td className="stage align-middle white-space-nowrap fw-bold text-body py-2">
                        <div className="d-flex align-items-center gap-3">
                          <div style={{"--phoenix-circle-progress-bar":"80"} as CSSProperties}>
                            <svg className="circle-progress-svg" width={38} height={38} viewBox="0 0 125 125">
                              <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                              </circle>
                              <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#6E7891" strokeWidth="12">                              </circle>
                            </svg>
                          </div>
                          <h6 className="mb-0 text-body">
Offering
                          </h6>
                        </div>
                      </td>
                      <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$142
                        <span className="ms-2 text-success" data-feather={"trending-up"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                        </span>
                      </td>
                      <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                        <div className="btn-reveal-trigger position-static">
                          <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10">                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end py-2">
                            <a href="#!" className="dropdown-item">
View
                            </a>
                            <a href="#!" className="dropdown-item">
Export
                            </a>
                            <div className="dropdown-divider">                            </div>
                            <a href="#!" className="dropdown-item text-danger">
Remove
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle py-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"dealsName\":\"Flat Plate SP\",\"dealOwner\":{\"avatar\":\"/team/avatar.webp\",\"name\":\"Ally Aagaard\",\"placeholder\":true},\"accountName\":\"Eagle Eye\",\"stage\":{\"label\":\"Offering\",\"color\":\"#6E7891\",\"data\":80},\"amount\":{\"totalAmount\":\"$457\",\"icon\":\"trending-up\",\"color\":\"text-success\"}}"} />
                        </div>
                      </td>
                      <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                        <a href="#!" className="fw-bold text-primary">
Flat Plate SP
                        </a>
                      </td>
                      <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                        <div className="d-flex align-items-center position-relative">
                          <div className="avatar avatar-m me-3">
                            <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                          </div>
                          <a href="#!" className="text-body-highlight fw-bold stretched-link">
Ally Aagaard
                          </a>
                        </div>
                      </td>
                      <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
Eagle Eye
                      </td>
                      <td className="stage align-middle white-space-nowrap fw-bold text-body py-2">
                        <div className="d-flex align-items-center gap-3">
                          <div style={{"--phoenix-circle-progress-bar":"80"} as CSSProperties}>
                            <svg className="circle-progress-svg" width={38} height={38} viewBox="0 0 125 125">
                              <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                              </circle>
                              <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#6E7891" strokeWidth="12">                              </circle>
                            </svg>
                          </div>
                          <h6 className="mb-0 text-body">
Offering
                          </h6>
                        </div>
                      </td>
                      <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$457
                        <span className="ms-2 text-success" data-feather={"trending-up"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                        </span>
                      </td>
                      <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                        <div className="btn-reveal-trigger position-static">
                          <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10">                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end py-2">
                            <a href="#!" className="dropdown-item">
View
                            </a>
                            <a href="#!" className="dropdown-item">
Export
                            </a>
                            <div className="dropdown-divider">                            </div>
                            <a href="#!" className="dropdown-item text-danger">
Remove
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle py-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"dealsName\":\"Evacuated Tube\",\"dealOwner\":{\"avatar\":\"/team/avatar.webp\",\"name\":\"Ally Aagaard\"},\"accountName\":\"Hunter Leader\",\"stage\":{\"label\":\"Action\",\"color\":\"#E5780B\",\"data\":100},\"amount\":{\"totalAmount\":\"$120\",\"icon\":\"trending-down\",\"color\":\"text-warning\"}}"} />
                        </div>
                      </td>
                      <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                        <a href="#!" className="fw-bold text-primary">
Evacuated Tube
                        </a>
                      </td>
                      <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                        <div className="d-flex align-items-center position-relative">
                          <div className="avatar avatar-m me-3">
                            <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle" />
                          </div>
                          <a href="#!" className="text-body-highlight fw-bold stretched-link">
Ally Aagaard
                          </a>
                        </div>
                      </td>
                      <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
Hunter Leader
                      </td>
                      <td className="stage align-middle white-space-nowrap fw-bold text-body py-2">
                        <div className="d-flex align-items-center gap-3">
                          <div style={{"--phoenix-circle-progress-bar":"100"} as CSSProperties}>
                            <svg className="circle-progress-svg" width={38} height={38} viewBox="0 0 125 125">
                              <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                              </circle>
                              <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#E5780B" strokeWidth="12">                              </circle>
                            </svg>
                          </div>
                          <h6 className="mb-0 text-body">
Action
                          </h6>
                        </div>
                      </td>
                      <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$120
                        <span className="ms-2 text-warning" data-feather={"trending-down"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                        </span>
                      </td>
                      <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                        <div className="btn-reveal-trigger position-static">
                          <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10">                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end py-2">
                            <a href="#!" className="dropdown-item">
View
                            </a>
                            <a href="#!" className="dropdown-item">
Export
                            </a>
                            <div className="dropdown-divider">                            </div>
                            <a href="#!" className="dropdown-item text-danger">
Remove
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle py-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"dealsName\":\"Product Delivery\",\"dealOwner\":{\"avatar\":\"/team/35.webp\",\"name\":\"Alex Abadi\"},\"accountName\":\"Themewagon\",\"stage\":{\"label\":\"Analysis\",\"color\":\"#3874FF\",\"data\":100},\"amount\":{\"totalAmount\":\"$150\",\"icon\":\"trending-down\",\"color\":\"text-danger\"}}"} />
                        </div>
                      </td>
                      <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                        <a href="#!" className="fw-bold text-primary">
Product Delivery
                        </a>
                      </td>
                      <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                        <div className="d-flex align-items-center position-relative">
                          <div className="avatar avatar-m me-3">
                            <PhoenixImage src="/assets/img/team/35.webp" alt="" className="rounded-circle" />
                          </div>
                          <a href="#!" className="text-body-highlight fw-bold stretched-link">
Alex Abadi
                          </a>
                        </div>
                      </td>
                      <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
Themewagon
                      </td>
                      <td className="stage align-middle white-space-nowrap fw-bold text-body py-2">
                        <div className="d-flex align-items-center gap-3">
                          <div style={{"--phoenix-circle-progress-bar":"100"} as CSSProperties}>
                            <svg className="circle-progress-svg" width={38} height={38} viewBox="0 0 125 125">
                              <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                              </circle>
                              <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#3874FF" strokeWidth="12">                              </circle>
                            </svg>
                          </div>
                          <h6 className="mb-0 text-body">
Analysis
                          </h6>
                        </div>
                      </td>
                      <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$150
                        <span className="ms-2 text-danger" data-feather={"trending-down"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                        </span>
                      </td>
                      <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                        <div className="btn-reveal-trigger position-static">
                          <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10">                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end py-2">
                            <a href="#!" className="dropdown-item">
View
                            </a>
                            <a href="#!" className="dropdown-item">
Export
                            </a>
                            <div className="dropdown-divider">                            </div>
                            <a href="#!" className="dropdown-item text-danger">
Remove
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle py-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"dealsName\":\"Product Order\",\"dealOwner\":{\"avatar\":\"/team/18.webp\",\"name\":\"Hunter Leader\"},\"accountName\":\"Themewagon\",\"stage\":{\"label\":\"Negotiation\",\"color\":\"#25B003\",\"data\":100},\"amount\":{\"totalAmount\":\"$140\",\"icon\":\"trending-down\",\"color\":\"text-warning\"}}"} />
                        </div>
                      </td>
                      <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                        <a href="#!" className="fw-bold text-primary">
Product Order
                        </a>
                      </td>
                      <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                        <div className="d-flex align-items-center position-relative">
                          <div className="avatar avatar-m me-3">
                            <PhoenixImage src="/assets/img/team/18.webp" alt="" className="rounded-circle" />
                          </div>
                          <a href="#!" className="text-body-highlight fw-bold stretched-link">
Hunter Leader
                          </a>
                        </div>
                      </td>
                      <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
Themewagon
                      </td>
                      <td className="stage align-middle white-space-nowrap fw-bold text-body py-2">
                        <div className="d-flex align-items-center gap-3">
                          <div style={{"--phoenix-circle-progress-bar":"100"} as CSSProperties}>
                            <svg className="circle-progress-svg" width={38} height={38} viewBox="0 0 125 125">
                              <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                              </circle>
                              <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#25B003" strokeWidth="12">                              </circle>
                            </svg>
                          </div>
                          <h6 className="mb-0 text-body">
Negotiation
                          </h6>
                        </div>
                      </td>
                      <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$140
                        <span className="ms-2 text-warning" data-feather={"trending-down"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                        </span>
                      </td>
                      <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                        <div className="btn-reveal-trigger position-static">
                          <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10">                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end py-2">
                            <a href="#!" className="dropdown-item">
View
                            </a>
                            <a href="#!" className="dropdown-item">
Export
                            </a>
                            <div className="dropdown-divider">                            </div>
                            <a href="#!" className="dropdown-item text-danger">
Remove
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle py-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"dealsName\":\"Feltz Printing Service\",\"dealOwner\":{\"avatar\":\"/team/avatar.webp\",\"name\":\"Ally Aagaard\",\"placeholder\":true},\"accountName\":\"Themewagon\",\"stage\":{\"label\":\"Offering\",\"color\":\"#6E7891\",\"data\":80},\"amount\":{\"totalAmount\":\"$122\",\"icon\":\"trending-up\",\"color\":\"text-success\"}}"} />
                        </div>
                      </td>
                      <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                        <a href="#!" className="fw-bold text-primary">
Feltz Printing Service
                        </a>
                      </td>
                      <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                        <div className="d-flex align-items-center position-relative">
                          <div className="avatar avatar-m me-3">
                            <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                          </div>
                          <a href="#!" className="text-body-highlight fw-bold stretched-link">
Ally Aagaard
                          </a>
                        </div>
                      </td>
                      <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
Themewagon
                      </td>
                      <td className="stage align-middle white-space-nowrap fw-bold text-body py-2">
                        <div className="d-flex align-items-center gap-3">
                          <div style={{"--phoenix-circle-progress-bar":"80"} as CSSProperties}>
                            <svg className="circle-progress-svg" width={38} height={38} viewBox="0 0 125 125">
                              <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                              </circle>
                              <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#6E7891" strokeWidth="12">                              </circle>
                            </svg>
                          </div>
                          <h6 className="mb-0 text-body">
Offering
                          </h6>
                        </div>
                      </td>
                      <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$122
                        <span className="ms-2 text-success" data-feather={"trending-up"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                        </span>
                      </td>
                      <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                        <div className="btn-reveal-trigger position-static">
                          <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10">                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end py-2">
                            <a href="#!" className="dropdown-item">
View
                            </a>
                            <a href="#!" className="dropdown-item">
Export
                            </a>
                            <div className="dropdown-divider">                            </div>
                            <a href="#!" className="dropdown-item text-danger">
Remove
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle py-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"dealsName\":\"Flat Plate SP\",\"dealOwner\":{\"avatar\":\"/team/avatar.webp\",\"name\":\"Ally Aagaard\",\"placeholder\":true},\"accountName\":\"Eagle Eye\",\"stage\":{\"label\":\"Offering\",\"color\":\"#6E7891\",\"data\":80},\"amount\":{\"totalAmount\":\"$321\",\"icon\":\"trending-up\",\"color\":\"text-success\"}}"} />
                        </div>
                      </td>
                      <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                        <a href="#!" className="fw-bold text-primary">
Flat Plate SP
                        </a>
                      </td>
                      <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                        <div className="d-flex align-items-center position-relative">
                          <div className="avatar avatar-m me-3">
                            <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                          </div>
                          <a href="#!" className="text-body-highlight fw-bold stretched-link">
Ally Aagaard
                          </a>
                        </div>
                      </td>
                      <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
Eagle Eye
                      </td>
                      <td className="stage align-middle white-space-nowrap fw-bold text-body py-2">
                        <div className="d-flex align-items-center gap-3">
                          <div style={{"--phoenix-circle-progress-bar":"80"} as CSSProperties}>
                            <svg className="circle-progress-svg" width={38} height={38} viewBox="0 0 125 125">
                              <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                              </circle>
                              <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#6E7891" strokeWidth="12">                              </circle>
                            </svg>
                          </div>
                          <h6 className="mb-0 text-body">
Offering
                          </h6>
                        </div>
                      </td>
                      <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$321
                        <span className="ms-2 text-success" data-feather={"trending-up"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                        </span>
                      </td>
                      <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                        <div className="btn-reveal-trigger position-static">
                          <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10">                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end py-2">
                            <a href="#!" className="dropdown-item">
View
                            </a>
                            <a href="#!" className="dropdown-item">
Export
                            </a>
                            <div className="dropdown-divider">                            </div>
                            <a href="#!" className="dropdown-item text-danger">
Remove
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle py-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"dealsName\":\"Evacuated Tube\",\"dealOwner\":{\"avatar\":\"/team/avatar.webp\",\"name\":\"Ally Aagaard\"},\"accountName\":\"Hunter Leader\",\"stage\":{\"label\":\"Action\",\"color\":\"#E5780B\",\"data\":100},\"amount\":{\"totalAmount\":\"$104\",\"icon\":\"trending-down\",\"color\":\"text-warning\"}}"} />
                        </div>
                      </td>
                      <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                        <a href="#!" className="fw-bold text-primary">
Evacuated Tube
                        </a>
                      </td>
                      <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                        <div className="d-flex align-items-center position-relative">
                          <div className="avatar avatar-m me-3">
                            <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle" />
                          </div>
                          <a href="#!" className="text-body-highlight fw-bold stretched-link">
Ally Aagaard
                          </a>
                        </div>
                      </td>
                      <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
Hunter Leader
                      </td>
                      <td className="stage align-middle white-space-nowrap fw-bold text-body py-2">
                        <div className="d-flex align-items-center gap-3">
                          <div style={{"--phoenix-circle-progress-bar":"100"} as CSSProperties}>
                            <svg className="circle-progress-svg" width={38} height={38} viewBox="0 0 125 125">
                              <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                              </circle>
                              <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#E5780B" strokeWidth="12">                              </circle>
                            </svg>
                          </div>
                          <h6 className="mb-0 text-body">
Action
                          </h6>
                        </div>
                      </td>
                      <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$104
                        <span className="ms-2 text-warning" data-feather={"trending-down"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                        </span>
                      </td>
                      <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                        <div className="btn-reveal-trigger position-static">
                          <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10">                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end py-2">
                            <a href="#!" className="dropdown-item">
View
                            </a>
                            <a href="#!" className="dropdown-item">
Export
                            </a>
                            <div className="dropdown-divider">                            </div>
                            <a href="#!" className="dropdown-item text-danger">
Remove
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle py-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"dealsName\":\"Product Delivery\",\"dealOwner\":{\"avatar\":\"/team/35.webp\",\"name\":\"Alex Abadi\"},\"accountName\":\"Themewagon\",\"stage\":{\"label\":\"Analysis\",\"color\":\"#3874FF\",\"data\":100},\"amount\":{\"totalAmount\":\"$124\",\"icon\":\"trending-down\",\"color\":\"text-danger\"}}"} />
                        </div>
                      </td>
                      <td className="deals_name align-middle white-space-nowrap fw-semibold text-body-highlight ps-0 py-0">
                        <a href="#!" className="fw-bold text-primary">
Product Delivery
                        </a>
                      </td>
                      <td className="deal_owner align-middle white-space-nowrap fw-semibold text-body-emphasis ps-4 py-0">
                        <div className="d-flex align-items-center position-relative">
                          <div className="avatar avatar-m me-3">
                            <PhoenixImage src="/assets/img/team/35.webp" alt="" className="rounded-circle" />
                          </div>
                          <a href="#!" className="text-body-highlight fw-bold stretched-link">
Alex Abadi
                          </a>
                        </div>
                      </td>
                      <td className="account_name align-middle white-space-nowrap ps-4 fw-semibold text-body py-0">
Themewagon
                      </td>
                      <td className="stage align-middle white-space-nowrap fw-bold text-body py-2">
                        <div className="d-flex align-items-center gap-3">
                          <div style={{"--phoenix-circle-progress-bar":"100"} as CSSProperties}>
                            <svg className="circle-progress-svg" width={38} height={38} viewBox="0 0 125 125">
                              <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                              </circle>
                              <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#3874FF" strokeWidth="12">                              </circle>
                            </svg>
                          </div>
                          <h6 className="mb-0 text-body">
Analysis
                          </h6>
                        </div>
                      </td>
                      <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$124
                        <span className="ms-2 text-danger" data-feather={"trending-down"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                        </span>
                      </td>
                      <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                        <div className="btn-reveal-trigger position-static">
                          <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10">                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end py-2">
                            <a href="#!" className="dropdown-item">
View
                            </a>
                            <a href="#!" className="dropdown-item">
Export
                            </a>
                            <div className="dropdown-divider">                            </div>
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
              <div className="row align-items-center justify-content-between pe-0 fs-9">
                <div className="col-auto d-flex">
                  <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info>                  </p>
                  <a href="#!" className="fw-semibold"  data-list-view={"*"}>
View all                    <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                    </span>
                  </a>
                  <a href="#!" className="fw-semibold d-none"  data-list-view={"less"}>
View Less                    <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                    </span>
                  </a>
                </div>
                <div className="col-auto d-flex">
                  <button className="page-link" data-list-pagination={"prev"}>
                    <span className="fas fa-chevron-left">                    </span>
                  </button>
                  <ul className="mb-0 pagination">                  </ul>
                  <button className="page-link pe-0" data-list-pagination={"next"}>
                    <span className="fas fa-chevron-right">                    </span>
                  </button>
                </div>
              </div>
            </div>
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
