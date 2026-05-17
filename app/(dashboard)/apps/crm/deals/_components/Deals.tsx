'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Deals() {
  return (
    <div suppressHydrationWarning>

    <nav className="mb-3 crm-deals-breadcrumb" aria-label="breadcrumb">
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

    <div>
      <div className="px-4 px-lg-6">
        <h2 className="mb-5">
Deals
        </h2>
        <div className="d-xl-flex justify-content-between">
          <div className="mb-3">
            <button className="btn btn-primary me-4" type="button" data-bs-toggle={"modal"} data-bs-target={"#addDealModal"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
              <span className="fas fa-plus me-2">              </span>
Add Deal
            </button>
            <button className="btn btn-link text-body px-0">
              <span className="fa-solid fa-file-export fs-9 me-2">              </span>
Export
            </button>
          </div>
          <div className="d-flex mb-4">
            <div className="search-box">
              <form className="position-relative">
                <input className="form-control search-input search" type="search" placeholder="Search by name" aria-label="Search" />
                <span className="fas fa-search search-box-icon">                </span>
              </form>
            </div>
            <select className="form-select w-auto mx-2" id="select-deals">
              <option>
Deals
              </option>
            </select>
            <button className="btn px-3 btn-phoenix-secondary" type="button" data-bs-toggle={"modal"} data-bs-target={"#reportsFilterModal"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
              <span className="fa-solid fa-filter text-primary" data-fa-transform={"down-3"}>              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 px-lg-6 scrollbar">
        <div className="deals">
          <div className="deals-col me-4">
            <div className="d-flex align-items-center justify-content-between position-sticky top-0 z-1 bg-body">
              <div>
                <h5 className="mb-2">
New
                </h5>
                <p className="fs-9 text-body-tertiary mb-1">
Forecast Revenue:
                </p>
                <h4 className="mb-3">
$37,000.00
                </h4>
              </div>
              <div className="d-flex gap-3">
                <button className="btn p-0" type="button" data-bs-toggle={"modal"} data-bs-target={"#addDealModal"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                  <span className="fa-solid fa-plus">                  </span>
                </button>
                <button className="btn p-0" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                  <span className="fas fa-ellipsis-h fs-10">                  </span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a href="#" className="dropdown-item">
Edit
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
Add meeting
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
See all connected contacts
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
Clone
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
Delete
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
Display only bad deals
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="scrollbar deals-items-container">
              <div className="w-100 min-vh-50" data-sortable>
                <div>
                  <div className="card mb-3">
                    <div className="card-body">
                      <a href="#collapseWidthDeals-1" className="dropdown-indicator-icon position-absolute text-body-tertiary"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="collapseWidthDeals-1">
                        <span className="fa-solid fa-angle-down">                        </span>
                      </a>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex">
                          <span className="me-2" data-feather={"clock"} style={{"strokeWidth":"2"} as CSSProperties}>                          </span>
                          <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
Dec 30, 2022
                            <span className="text-body-quaternary">
 . 2:15 PM
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="deals-items-head d-flex align-items-center mb-2">
                        <PhoenixLink href="/apps/crm/deal-details" className="text-primary fw-bold line-clamp-1 me-3 mb-0 fs-7">
Jo_Td01
                        </PhoenixLink>
                        <p className="deals-category fs-10 mb-0 mt-1 d-none">
                          <span className="me-1 text-body-quaternary" data-feather={"grid"} style={{"strokeWidth":"2","height":"12px","width":"12px"} as CSSProperties}>                          </span>
Financial
                        </p>
                        <p className="ms-auto fs-9 text-body-emphasis fw-semibold mb-0 deals-revenue">
$14,000.00
                        </p>
                      </div>
                      <div className="deals-company-agent d-flex flex-between-center">
                        <div className="d-flex align-items-center">
                          <span className="uil uil-user me-2">                          </span>
                          <p className="text-body-secondary fw-bold fs-9 mb-0">
Knitkake.inc
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="uil uil-headphones me-2">                          </span>
                          <p className="text-body-secondary fw-bold fs-9 mb-0">
Ally Aagaard
                          </p>
                        </div>
                      </div>
                      <div className="collapse" id="collapseWidthDeals-1">
                        <div className="d-flex gap-2 mb-5">
                          <span className="badge badge-phoenix badge-phoenix-info">
new
                          </span>
                          <span className="badge badge-phoenix badge-phoenix-danger">
Urgent
                          </span>
                        </div>
                        <table className="mb-4 w-100 table-stats table-stats">
                          <tbody>
                            <tr>
                              <th>                              </th>
                              <th>                              </th>
                              <th>                              </th>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"dollar-sign"}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Expected Revenue
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
$14,000.00
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"user"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Company Name
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis d-flex align-items-center gap-2">
Knitkake.inc
                                  <a href="#!">
                                    <span className="fa-solid fa-square-phone text-body-tertiary">                                    </span>
                                  </a>
                                  <a href="#!">
                                    <span className="fa-solid fa-square-envelope text-body-tertiary">                                    </span>
                                  </a>
                                  <a href="#!">
                                    <span className="fab fa-whatsapp-square text-body-tertiary">                                    </span>
                                  </a>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"calendar"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
{"Closing Date & Time"}
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
27-12-2022
                                  <span>
 . 11:19 PM
                                  </span>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"headphones"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Assigned Agent 
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <select className="form-select form-select-sm py-0 ms-n3 border-0 shadow-none">
                                  <option>
Ally Aagaard
                                  </option>
                                  <option>
Lonnie Kub
                                  </option>
                                  <option>
Aida Moen
                                  </option>
                                  <option>
Niko Koss
                                  </option>
                                  <option>
Alec Haag
                                  </option>
                                  <option>
Ola Smith
                                  </option>
                                  <option>
Leif Walsh
                                  </option>
                                  <option>
Brain Cole
                                  </option>
                                  <option>
Reese Mann
                                  </option>
                                </select>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="fs-9 mb-1">
 Probability:
                        </p>
                        <div className="progress" style={{"height":"8px"} as CSSProperties}>
                          <div className="progress-bar rounded-pill bg-info" role="progressbar" style={{"width":"20%"} as CSSProperties} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card mb-3">
                    <div className="card-body">
                      <a href="#collapseWidthDeals-2" className="dropdown-indicator-icon position-absolute text-body-tertiary"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="collapseWidthDeals-2">
                        <span className="fa-solid fa-angle-down">                        </span>
                      </a>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex">
                          <span className="me-2" data-feather={"clock"} style={{"strokeWidth":"2"} as CSSProperties}>                          </span>
                          <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
Dec 29, 2022
                            <span className="text-body-quaternary">
 . 12:15 PM
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="deals-items-head d-flex align-items-center mb-2">
                        <PhoenixLink href="/apps/crm/deal-details" className="text-primary fw-bold line-clamp-1 me-3 mb-0 fs-7">
Dimensions for Printing
                        </PhoenixLink>
                        <p className="deals-category fs-10 mb-0 mt-1 d-none">
                          <span className="me-1 text-body-quaternary" data-feather={"grid"} style={{"strokeWidth":"2","height":"12px","width":"12px"} as CSSProperties}>                          </span>
Marketplace
                        </p>
                        <p className="ms-auto fs-9 text-body-emphasis fw-semibold mb-0 deals-revenue">
$23,000.00
                        </p>
                      </div>
                      <div className="deals-company-agent d-flex flex-between-center">
                        <div className="d-flex align-items-center">
                          <span className="uil uil-user me-2">                          </span>
                          <p className="text-body-secondary fw-bold fs-9 mb-0">
Kibikaba Clothings
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="uil uil-headphones me-2">                          </span>
                          <p className="text-body-secondary fw-bold fs-9 mb-0">
Lonnie Kub
                          </p>
                        </div>
                      </div>
                      <div className="collapse" id="collapseWidthDeals-2">
                        <div className="d-flex gap-2 mb-5">
                          <span className="badge badge-phoenix badge-phoenix-info">
New
                          </span>
                          <span className="badge badge-phoenix badge-phoenix-success">
Medium
                          </span>
                        </div>
                        <table className="mb-4 w-100 table-stats table-stats">
                          <tbody>
                            <tr>
                              <th>                              </th>
                              <th>                              </th>
                              <th>                              </th>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"dollar-sign"}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Expected Revenue
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
$23,000.00
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"user"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Company Name
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis d-flex align-items-center gap-2">
Kibikaba Clothings
                                  <a href="#!">
                                    <span className="fa-solid fa-square-phone text-body-tertiary">                                    </span>
                                  </a>
                                  <a href="#!">
                                    <span className="fa-solid fa-square-envelope text-body-tertiary">                                    </span>
                                  </a>
                                  <a href="#!">
                                    <span className="fab fa-whatsapp-square text-body-tertiary">                                    </span>
                                  </a>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"calendar"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
{"Closing Date & Time"}
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
25-12-2022
                                  <span>
 . 2:00 PM
                                  </span>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"headphones"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Assigned Agent 
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <select className="form-select form-select-sm py-0 ms-n3 border-0 shadow-none">
                                  <option>
Ally Aagaard
                                  </option>
                                  <option>
Lonnie Kub
                                  </option>
                                  <option>
Aida Moen
                                  </option>
                                  <option>
Niko Koss
                                  </option>
                                  <option>
Alec Haag
                                  </option>
                                  <option>
Ola Smith
                                  </option>
                                  <option>
Leif Walsh
                                  </option>
                                  <option>
Brain Cole
                                  </option>
                                  <option>
Reese Mann
                                  </option>
                                </select>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="fs-9 mb-1">
 Probability:
                        </p>
                        <div className="progress" style={{"height":"8px"} as CSSProperties}>
                          <div className="progress-bar rounded-pill bg-info" role="progressbar" style={{"width":"20%"} as CSSProperties} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="deals-col me-4">
            <div className="d-flex align-items-center justify-content-between position-sticky top-0 z-1 bg-body">
              <div>
                <h5 className="mb-2">
In Progress
                </h5>
                <p className="fs-9 text-body-tertiary mb-1">
Forecast Revenue:
                </p>
                <h4 className="mb-3">
$101,300.00
                </h4>
              </div>
              <div className="d-flex gap-3">
                <button className="btn p-0" type="button" data-bs-toggle={"modal"} data-bs-target={"#addDealModal"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                  <span className="fa-solid fa-plus">                  </span>
                </button>
                <button className="btn p-0" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                  <span className="fas fa-ellipsis-h fs-10">                  </span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a href="#" className="dropdown-item">
Edit
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
Add meeting
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
See all connected contacts
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
Clone
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
Delete
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
Display only bad deals
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="scrollbar deals-items-container">
              <div className="w-100 min-vh-50" data-sortable>
                <div>
                  <div className="card mb-3">
                    <div className="card-body">
                      <a href="#collapseWidthDeals-3" className="dropdown-indicator-icon position-absolute text-body-tertiary"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="collapseWidthDeals-3">
                        <span className="fa-solid fa-angle-down">                        </span>
                      </a>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex">
                          <span className="me-2" data-feather={"clock"} style={{"strokeWidth":"2"} as CSSProperties}>                          </span>
                          <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
Dec 30, 2022
                            <span className="text-body-quaternary">
 . 06:15 PM
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="deals-items-head d-flex align-items-center mb-2">
                        <PhoenixLink href="/apps/crm/deal-details" className="text-primary fw-bold line-clamp-1 me-3 mb-0 fs-7">
True and True Attorneys
                        </PhoenixLink>
                        <p className="deals-category fs-10 mb-0 mt-1 d-none">
                          <span className="me-1 text-body-quaternary" data-feather={"grid"} style={{"strokeWidth":"2","height":"12px","width":"12px"} as CSSProperties}>                          </span>
Financial
                        </p>
                        <p className="ms-auto fs-9 text-body-emphasis fw-semibold mb-0 deals-revenue">
$33,000.00
                        </p>
                      </div>
                      <div className="deals-company-agent d-flex flex-between-center">
                        <div className="d-flex align-items-center">
                          <span className="uil uil-user me-2">                          </span>
                          <p className="text-body-secondary fw-bold fs-9 mb-0">
PBR Holdings
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="uil uil-headphones me-2">                          </span>
                          <p className="text-body-secondary fw-bold fs-9 mb-0">
Aida Moen
                          </p>
                        </div>
                      </div>
                      <div className="collapse" id="collapseWidthDeals-3">
                        <div className="d-flex gap-2 mb-5">
                          <span className="badge badge-phoenix badge-phoenix-primary">
In Progress
                          </span>
                          <span className="badge badge-phoenix badge-phoenix-warning">
High
                          </span>
                        </div>
                        <table className="mb-4 w-100 table-stats table-stats">
                          <tbody>
                            <tr>
                              <th>                              </th>
                              <th>                              </th>
                              <th>                              </th>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"dollar-sign"}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Expected Revenue
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
$33,000.00
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"user"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Company Name
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis d-flex align-items-center gap-2">
PBR Holdings
                                  <a href="#!">
                                    <span className="fa-solid fa-square-phone text-body-tertiary">                                    </span>
                                  </a>
                                  <a href="#!">
                                    <span className="fa-solid fa-square-envelope text-body-tertiary">                                    </span>
                                  </a>
                                  <a href="#!">
                                    <span className="fab fa-whatsapp-square text-body-tertiary">                                    </span>
                                  </a>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"calendar"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
{"Closing Date & Time"}
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
27-12-2022
                                  <span>
 . 11:19 PM
                                  </span>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"headphones"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Assigned Agent 
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <select className="form-select form-select-sm py-0 ms-n3 border-0 shadow-none">
                                  <option>
Ally Aagaard
                                  </option>
                                  <option>
Lonnie Kub
                                  </option>
                                  <option>
Aida Moen
                                  </option>
                                  <option>
Niko Koss
                                  </option>
                                  <option>
Alec Haag
                                  </option>
                                  <option>
Ola Smith
                                  </option>
                                  <option>
Leif Walsh
                                  </option>
                                  <option>
Brain Cole
                                  </option>
                                  <option>
Reese Mann
                                  </option>
                                </select>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="fs-9 mb-1">
 Probability:
                        </p>
                        <div className="progress" style={{"height":"8px"} as CSSProperties}>
                          <div className="progress-bar rounded-pill bg-primary" role="progressbar" style={{"width":"40%"} as CSSProperties} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card mb-3">
                    <div className="card-body">
                      <a href="#collapseWidthDeals-4" className="dropdown-indicator-icon position-absolute text-body-tertiary"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="collapseWidthDeals-4">
                        <span className="fa-solid fa-angle-down">                        </span>
                      </a>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex">
                          <span className="me-2" data-feather={"clock"} style={{"strokeWidth":"2"} as CSSProperties}>                          </span>
                          <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
Dec 30, 2022
                            <span className="text-body-quaternary">
 . 08:20 PM
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="deals-items-head d-flex align-items-center mb-2">
                        <PhoenixLink href="/apps/crm/deal-details" className="text-primary fw-bold line-clamp-1 me-3 mb-0 fs-7">
The Morlong Corporation
                        </PhoenixLink>
                        <p className="deals-category fs-10 mb-0 mt-1 d-none">
                          <span className="me-1 text-body-quaternary" data-feather={"grid"} style={{"strokeWidth":"2","height":"12px","width":"12px"} as CSSProperties}>                          </span>
Marketplace
                        </p>
                        <p className="ms-auto fs-9 text-body-emphasis fw-semibold mb-0 deals-revenue">
$45,300.00
                        </p>
                      </div>
                      <div className="deals-company-agent d-flex flex-between-center">
                        <div className="d-flex align-items-center">
                          <span className="uil uil-user me-2">                          </span>
                          <p className="text-body-secondary fw-bold fs-9 mb-0">
Giraffes Studio
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="uil uil-headphones me-2">                          </span>
                          <p className="text-body-secondary fw-bold fs-9 mb-0">
Niko Koss
                          </p>
                        </div>
                      </div>
                      <div className="collapse" id="collapseWidthDeals-4">
                        <div className="d-flex gap-2 mb-5">
                          <span className="badge badge-phoenix badge-phoenix-primary">
In Progress
                          </span>
                          <span className="badge badge-phoenix badge-phoenix-info">
Low
                          </span>
                        </div>
                        <table className="mb-4 w-100 table-stats table-stats">
                          <tbody>
                            <tr>
                              <th>                              </th>
                              <th>                              </th>
                              <th>                              </th>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"dollar-sign"}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Expected Revenue
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
$45,300.00
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"user"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Company Name
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis d-flex align-items-center gap-2">
Giraffes Studio
                                  <a href="#!">
                                    <span className="fa-solid fa-square-phone text-body-tertiary">                                    </span>
                                  </a>
                                  <a href="#!">
                                    <span className="fa-solid fa-square-envelope text-body-tertiary">                                    </span>
                                  </a>
                                  <a href="#!">
                                    <span className="fab fa-whatsapp-square text-body-tertiary">                                    </span>
                                  </a>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"calendar"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
{"Closing Date & Time"}
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
26-12-2022
                                  <span>
 . 12:10 PM
                                  </span>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"headphones"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Assigned Agent 
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <select className="form-select form-select-sm py-0 ms-n3 border-0 shadow-none">
                                  <option>
Ally Aagaard
                                  </option>
                                  <option>
Lonnie Kub
                                  </option>
                                  <option>
Aida Moen
                                  </option>
                                  <option>
Niko Koss
                                  </option>
                                  <option>
Alec Haag
                                  </option>
                                  <option>
Ola Smith
                                  </option>
                                  <option>
Leif Walsh
                                  </option>
                                  <option>
Brain Cole
                                  </option>
                                  <option>
Reese Mann
                                  </option>
                                </select>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="fs-9 mb-1">
 Probability:
                        </p>
                        <div className="progress" style={{"height":"8px"} as CSSProperties}>
                          <div className="progress-bar rounded-pill bg-primary" role="progressbar" style={{"width":"40%"} as CSSProperties} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card mb-3">
                    <div className="card-body">
                      <a href="#collapseWidthDeals-5" className="dropdown-indicator-icon position-absolute text-body-tertiary"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="collapseWidthDeals-5">
                        <span className="fa-solid fa-angle-down">                        </span>
                      </a>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex">
                          <span className="me-2" data-feather={"clock"} style={{"strokeWidth":"2"} as CSSProperties}>                          </span>
                          <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
Dec 30, 2022
                            <span className="text-body-quaternary">
 . 3:25 PM
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="deals-items-head d-flex align-items-center mb-2">
                        <PhoenixLink href="/apps/crm/deal-details" className="text-primary fw-bold line-clamp-1 me-3 mb-0 fs-7">
Product List
                        </PhoenixLink>
                        <p className="deals-category fs-10 mb-0 mt-1 d-none">
                          <span className="me-1 text-body-quaternary" data-feather={"grid"} style={{"strokeWidth":"2","height":"12px","width":"12px"} as CSSProperties}>                          </span>
Marketplace
                        </p>
                        <p className="ms-auto fs-9 text-body-emphasis fw-semibold mb-0 deals-revenue">
$23,000.00
                        </p>
                      </div>
                      <div className="deals-company-agent d-flex flex-between-center">
                        <div className="d-flex align-items-center">
                          <span className="uil uil-user me-2">                          </span>
                          <p className="text-body-secondary fw-bold fs-9 mb-0">
Birds eye
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="uil uil-headphones me-2">                          </span>
                          <p className="text-body-secondary fw-bold fs-9 mb-0">
Alec Haag
                          </p>
                        </div>
                      </div>
                      <div className="collapse" id="collapseWidthDeals-5">
                        <div className="d-flex gap-2 mb-5">
                          <span className="badge badge-phoenix badge-phoenix-primary">
In Progress
                          </span>
                          <span className="badge badge-phoenix badge-phoenix-danger">
Urgent
                          </span>
                        </div>
                        <table className="mb-4 w-100 table-stats table-stats">
                          <tbody>
                            <tr>
                              <th>                              </th>
                              <th>                              </th>
                              <th>                              </th>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"dollar-sign"}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Expected Revenue
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
$23,000.00
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"user"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Company Name
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis d-flex align-items-center gap-2">
Birds eye
                                  <a href="#!">
                                    <span className="fa-solid fa-square-phone text-body-tertiary">                                    </span>
                                  </a>
                                  <a href="#!">
                                    <span className="fa-solid fa-square-envelope text-body-tertiary">                                    </span>
                                  </a>
                                  <a href="#!">
                                    <span className="fab fa-whatsapp-square text-body-tertiary">                                    </span>
                                  </a>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"calendar"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
{"Closing Date & Time"}
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
27-12-2022
                                  <span>
 . 11:19 PM
                                  </span>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"headphones"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Assigned Agent 
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <select className="form-select form-select-sm py-0 ms-n3 border-0 shadow-none">
                                  <option>
Ally Aagaard
                                  </option>
                                  <option>
Lonnie Kub
                                  </option>
                                  <option>
Aida Moen
                                  </option>
                                  <option>
Niko Koss
                                  </option>
                                  <option>
Alec Haag
                                  </option>
                                  <option>
Ola Smith
                                  </option>
                                  <option>
Leif Walsh
                                  </option>
                                  <option>
Brain Cole
                                  </option>
                                  <option>
Reese Mann
                                  </option>
                                </select>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="fs-9 mb-1">
 Probability:
                        </p>
                        <div className="progress" style={{"height":"8px"} as CSSProperties}>
                          <div className="progress-bar rounded-pill bg-primary" role="progressbar" style={{"width":"40%"} as CSSProperties} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="deals-col me-4">
            <div className="d-flex align-items-center justify-content-between position-sticky top-0 z-1 bg-body">
              <div>
                <h5 className="mb-2">
Pending
                </h5>
                <p className="fs-9 text-body-tertiary mb-1">
Forecast Revenue:
                </p>
                <h4 className="mb-3">
$23,400.00
                </h4>
              </div>
              <div className="d-flex gap-3">
                <button className="btn p-0" type="button" data-bs-toggle={"modal"} data-bs-target={"#addDealModal"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                  <span className="fa-solid fa-plus">                  </span>
                </button>
                <button className="btn p-0" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                  <span className="fas fa-ellipsis-h fs-10">                  </span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a href="#" className="dropdown-item">
Edit
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
Add meeting
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
See all connected contacts
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
Clone
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
Delete
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
Display only bad deals
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="scrollbar deals-items-container">
              <div className="w-100 min-vh-50" data-sortable>
                <div>
                  <div className="card mb-3">
                    <div className="card-body">
                      <a href="#collapseWidthDeals-6" className="dropdown-indicator-icon position-absolute text-body-tertiary"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="collapseWidthDeals-6">
                        <span className="fa-solid fa-angle-down">                        </span>
                      </a>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex">
                          <span className="me-2" data-feather={"clock"} style={{"strokeWidth":"2"} as CSSProperties}>                          </span>
                          <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
Dec 30, 2022
                            <span className="text-body-quaternary">
 . 3:15 PM
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="deals-items-head d-flex align-items-center mb-2">
                        <PhoenixLink href="/apps/crm/deal-details" className="text-primary fw-bold line-clamp-1 me-3 mb-0 fs-7">
Printing Services by Feltz
                        </PhoenixLink>
                        <p className="deals-category fs-10 mb-0 mt-1 d-none">
                          <span className="me-1 text-body-quaternary" data-feather={"grid"} style={{"strokeWidth":"2","height":"12px","width":"12px"} as CSSProperties}>                          </span>
Marketplace
                        </p>
                        <p className="ms-auto fs-9 text-body-emphasis fw-semibold mb-0 deals-revenue">
$23,400.00
                        </p>
                      </div>
                      <div className="deals-company-agent d-flex flex-between-center">
                        <div className="d-flex align-items-center">
                          <span className="uil uil-user me-2">                          </span>
                          <p className="text-body-secondary fw-bold fs-9 mb-0">
Ant Family
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="uil uil-headphones me-2">                          </span>
                          <p className="text-body-secondary fw-bold fs-9 mb-0">
Ally Aagaard
                          </p>
                        </div>
                      </div>
                      <div className="collapse" id="collapseWidthDeals-6">
                        <div className="d-flex gap-2 mb-5">
                          <span className="badge badge-phoenix badge-phoenix-warning">
Pending
                          </span>
                          <span className="badge badge-phoenix badge-phoenix-warning">
High
                          </span>
                        </div>
                        <table className="mb-4 w-100 table-stats table-stats">
                          <tbody>
                            <tr>
                              <th>                              </th>
                              <th>                              </th>
                              <th>                              </th>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"dollar-sign"}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Expected Revenue
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
$23,400.00
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"user"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Company Name
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis d-flex align-items-center gap-2">
Ant Family
                                  <a href="#!">
                                    <span className="fa-solid fa-square-phone text-body-tertiary">                                    </span>
                                  </a>
                                  <a href="#!">
                                    <span className="fa-solid fa-square-envelope text-body-tertiary">                                    </span>
                                  </a>
                                  <a href="#!">
                                    <span className="fab fa-whatsapp-square text-body-tertiary">                                    </span>
                                  </a>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"calendar"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
{"Closing Date & Time"}
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
27-12-2022
                                  <span>
 . 11:19 PM
                                  </span>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"headphones"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Assigned Agent 
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <select className="form-select form-select-sm py-0 ms-n3 border-0 shadow-none">
                                  <option>
Ally Aagaard
                                  </option>
                                  <option>
Lonnie Kub
                                  </option>
                                  <option>
Aida Moen
                                  </option>
                                  <option>
Niko Koss
                                  </option>
                                  <option>
Alec Haag
                                  </option>
                                  <option>
Ola Smith
                                  </option>
                                  <option>
Leif Walsh
                                  </option>
                                  <option>
Brain Cole
                                  </option>
                                  <option>
Reese Mann
                                  </option>
                                </select>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="fs-9 mb-1">
 Probability:
                        </p>
                        <div className="progress" style={{"height":"8px"} as CSSProperties}>
                          <div className="progress-bar rounded-pill bg-warning" role="progressbar" style={{"width":"60%"} as CSSProperties} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="deals-col me-4">
            <div className="d-flex align-items-center justify-content-between position-sticky top-0 z-1 bg-body">
              <div>
                <h5 className="mb-2">
Canceled
                </h5>
                <p className="fs-9 text-body-tertiary mb-1">
Forecast Revenue:
                </p>
                <h4 className="mb-3">
$260.00
                </h4>
              </div>
              <div className="d-flex gap-3">
                <button className="btn p-0" type="button" data-bs-toggle={"modal"} data-bs-target={"#addDealModal"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                  <span className="fa-solid fa-plus">                  </span>
                </button>
                <button className="btn p-0" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                  <span className="fas fa-ellipsis-h fs-10">                  </span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a href="#" className="dropdown-item">
Edit
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
Add meeting
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
See all connected contacts
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
Clone
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
Delete
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
Display only bad deals
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="scrollbar deals-items-container">
              <div className="w-100 min-vh-50" data-sortable>
                <div>
                  <div className="card mb-3">
                    <div className="card-body">
                      <a href="#collapseWidthDeals-7" className="dropdown-indicator-icon position-absolute text-body-tertiary"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="collapseWidthDeals-7">
                        <span className="fa-solid fa-angle-down">                        </span>
                      </a>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex">
                          <span className="me-2" data-feather={"clock"} style={{"strokeWidth":"2"} as CSSProperties}>                          </span>
                          <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
Dec 31, 2022
                            <span className="text-body-quaternary">
 . 01:30 PM
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="deals-items-head d-flex align-items-center mb-2">
                        <PhoenixLink href="/apps/crm/deal-details" className="text-primary fw-bold line-clamp-1 me-3 mb-0 fs-7">
SP Flat Plate
                        </PhoenixLink>
                        <p className="deals-category fs-10 mb-0 mt-1 d-none">
                          <span className="me-1 text-body-quaternary" data-feather={"grid"} style={{"strokeWidth":"2","height":"12px","width":"12px"} as CSSProperties}>                          </span>
Financial
                        </p>
                        <p className="ms-auto fs-9 text-body-emphasis fw-semibold mb-0 deals-revenue">
$14,000.00
                        </p>
                      </div>
                      <div className="deals-company-agent d-flex flex-between-center">
                        <div className="d-flex align-items-center">
                          <span className="uil uil-user me-2">                          </span>
                          <p className="text-body-secondary fw-bold fs-9 mb-0">
Ant Family
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="uil uil-headphones me-2">                          </span>
                          <p className="text-body-secondary fw-bold fs-9 mb-0">
Ola Smith
                          </p>
                        </div>
                      </div>
                      <div className="collapse" id="collapseWidthDeals-7">
                        <div className="d-flex gap-2 mb-5">
                          <span className="badge badge-phoenix badge-phoenix-secondary">
Canceled
                          </span>
                          <span className="badge badge-phoenix badge-phoenix-success">
Medium
                          </span>
                        </div>
                        <table className="mb-4 w-100 table-stats table-stats">
                          <tbody>
                            <tr>
                              <th>                              </th>
                              <th>                              </th>
                              <th>                              </th>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"dollar-sign"}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Expected Revenue
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
$14,000.00
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"user"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Company Name
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis d-flex align-items-center gap-2">
Ant Family
                                  <a href="#!">
                                    <span className="fa-solid fa-square-phone text-body-tertiary">                                    </span>
                                  </a>
                                  <a href="#!">
                                    <span className="fa-solid fa-square-envelope text-body-tertiary">                                    </span>
                                  </a>
                                  <a href="#!">
                                    <span className="fab fa-whatsapp-square text-body-tertiary">                                    </span>
                                  </a>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"calendar"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
{"Closing Date & Time"}
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
29-12-2022
                                  <span>
 . 01:30 PM
                                  </span>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"headphones"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Assigned Agent 
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <select className="form-select form-select-sm py-0 ms-n3 border-0 shadow-none">
                                  <option>
Ally Aagaard
                                  </option>
                                  <option>
Lonnie Kub
                                  </option>
                                  <option>
Aida Moen
                                  </option>
                                  <option>
Niko Koss
                                  </option>
                                  <option>
Alec Haag
                                  </option>
                                  <option>
Ola Smith
                                  </option>
                                  <option>
Leif Walsh
                                  </option>
                                  <option>
Brain Cole
                                  </option>
                                  <option>
Reese Mann
                                  </option>
                                </select>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="fs-9 mb-1">
 Probability:
                        </p>
                        <div className="progress" style={{"height":"8px"} as CSSProperties}>
                          <div className="progress-bar rounded-pill bg-300" role="progressbar" style={{"width":"80%"} as CSSProperties} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card mb-3">
                    <div className="card-body">
                      <a href="#collapseWidthDeals-8" className="dropdown-indicator-icon position-absolute text-body-tertiary"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="collapseWidthDeals-8">
                        <span className="fa-solid fa-angle-down">                        </span>
                      </a>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex">
                          <span className="me-2" data-feather={"clock"} style={{"strokeWidth":"2"} as CSSProperties}>                          </span>
                          <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
Dec 31, 2022
                            <span className="text-body-quaternary">
 . 2:15 PM
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="deals-items-head d-flex align-items-center mb-2">
                        <PhoenixLink href="/apps/crm/deal-details" className="text-primary fw-bold line-clamp-1 me-3 mb-0 fs-7">
Ventilated Pipe
                        </PhoenixLink>
                        <p className="deals-category fs-10 mb-0 mt-1 d-none">
                          <span className="me-1 text-body-quaternary" data-feather={"grid"} style={{"strokeWidth":"2","height":"12px","width":"12px"} as CSSProperties}>                          </span>
Marketplace
                        </p>
                        <p className="ms-auto fs-9 text-body-emphasis fw-semibold mb-0 deals-revenue">
$14,000.00
                        </p>
                      </div>
                      <div className="deals-company-agent d-flex flex-between-center">
                        <div className="d-flex align-items-center">
                          <span className="uil uil-user me-2">                          </span>
                          <p className="text-body-secondary fw-bold fs-9 mb-0">
Giraffes Studio
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="uil uil-headphones me-2">                          </span>
                          <p className="text-body-secondary fw-bold fs-9 mb-0">
Leif Walsh
                          </p>
                        </div>
                      </div>
                      <div className="collapse" id="collapseWidthDeals-8">
                        <div className="d-flex gap-2 mb-5">
                          <span className="badge badge-phoenix badge-phoenix-secondary">
Canceled
                          </span>
                          <span className="badge badge-phoenix badge-phoenix-info">
Low
                          </span>
                        </div>
                        <table className="mb-4 w-100 table-stats table-stats">
                          <tbody>
                            <tr>
                              <th>                              </th>
                              <th>                              </th>
                              <th>                              </th>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"dollar-sign"}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Expected Revenue
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
$14,000.00
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"user"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Company Name
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis d-flex align-items-center gap-2">
Giraffes Studio
                                  <a href="#!">
                                    <span className="fa-solid fa-square-phone text-body-tertiary">                                    </span>
                                  </a>
                                  <a href="#!">
                                    <span className="fa-solid fa-square-envelope text-body-tertiary">                                    </span>
                                  </a>
                                  <a href="#!">
                                    <span className="fab fa-whatsapp-square text-body-tertiary">                                    </span>
                                  </a>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"calendar"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
{"Closing Date & Time"}
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
29-12-2022
                                  <span>
 . 02:15 PM
                                  </span>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"headphones"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Assigned Agent 
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <select className="form-select form-select-sm py-0 ms-n3 border-0 shadow-none">
                                  <option>
Ally Aagaard
                                  </option>
                                  <option>
Lonnie Kub
                                  </option>
                                  <option>
Aida Moen
                                  </option>
                                  <option>
Niko Koss
                                  </option>
                                  <option>
Alec Haag
                                  </option>
                                  <option>
Ola Smith
                                  </option>
                                  <option>
Leif Walsh
                                  </option>
                                  <option>
Brain Cole
                                  </option>
                                  <option>
Reese Mann
                                  </option>
                                </select>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="fs-9 mb-1">
 Probability:
                        </p>
                        <div className="progress" style={{"height":"8px"} as CSSProperties}>
                          <div className="progress-bar rounded-pill bg-300" role="progressbar" style={{"width":"80%"} as CSSProperties} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="deals-col me-4">
            <div className="d-flex align-items-center justify-content-between position-sticky top-0 z-1 bg-body">
              <div>
                <h5 className="mb-2">
Completed
                </h5>
                <p className="fs-9 text-body-tertiary mb-1">
Forecast Revenue:
                </p>
                <h4 className="mb-3">
$1,650.00
                </h4>
              </div>
              <div className="d-flex gap-3">
                <button className="btn p-0" type="button" data-bs-toggle={"modal"} data-bs-target={"#addDealModal"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                  <span className="fa-solid fa-plus">                  </span>
                </button>
                <button className="btn p-0" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                  <span className="fas fa-ellipsis-h fs-10">                  </span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a href="#" className="dropdown-item">
Edit
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
Add meeting
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
See all connected contacts
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
Clone
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
Delete
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
Display only bad deals
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="scrollbar deals-items-container">
              <div className="w-100 min-vh-50" data-sortable>
                <div>
                  <div className="card mb-3">
                    <div className="card-body">
                      <a href="#collapseWidthDeals-9" className="dropdown-indicator-icon position-absolute text-body-tertiary"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="collapseWidthDeals-9">
                        <span className="fa-solid fa-angle-down">                        </span>
                      </a>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex">
                          <span className="me-2" data-feather={"clock"} style={{"strokeWidth":"2"} as CSSProperties}>                          </span>
                          <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
Dec 29, 2022
                            <span className="text-body-quaternary">
 . 03:12 PM
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="deals-items-head d-flex align-items-center mb-2">
                        <PhoenixLink href="/apps/crm/deal-details" className="text-primary fw-bold line-clamp-1 me-3 mb-0 fs-7">
Product Shipping
                        </PhoenixLink>
                        <p className="deals-category fs-10 mb-0 mt-1 d-none">
                          <span className="me-1 text-body-quaternary" data-feather={"grid"} style={{"strokeWidth":"2","height":"12px","width":"12px"} as CSSProperties}>                          </span>
Financial
                        </p>
                        <p className="ms-auto fs-9 text-body-emphasis fw-semibold mb-0 deals-revenue">
$15,000.00
                        </p>
                      </div>
                      <div className="deals-company-agent d-flex flex-between-center">
                        <div className="d-flex align-items-center">
                          <span className="uil uil-user me-2">                          </span>
                          <p className="text-body-secondary fw-bold fs-9 mb-0">
Birds eye
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="uil uil-headphones me-2">                          </span>
                          <p className="text-body-secondary fw-bold fs-9 mb-0">
Brain Cole
                          </p>
                        </div>
                      </div>
                      <div className="collapse" id="collapseWidthDeals-9">
                        <div className="d-flex gap-2 mb-5">
                          <span className="badge badge-phoenix badge-phoenix-success">
Completed
                          </span>
                          <span className="badge badge-phoenix badge-phoenix-danger">
Urgent
                          </span>
                        </div>
                        <table className="mb-4 w-100 table-stats table-stats">
                          <tbody>
                            <tr>
                              <th>                              </th>
                              <th>                              </th>
                              <th>                              </th>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"dollar-sign"}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Expected Revenue
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
$15,000.00
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"user"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Company Name
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis d-flex align-items-center gap-2">
Birds eye
                                  <a href="#!">
                                    <span className="fa-solid fa-square-phone text-body-tertiary">                                    </span>
                                  </a>
                                  <a href="#!">
                                    <span className="fa-solid fa-square-envelope text-body-tertiary">                                    </span>
                                  </a>
                                  <a href="#!">
                                    <span className="fab fa-whatsapp-square text-body-tertiary">                                    </span>
                                  </a>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"calendar"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
{"Closing Date & Time"}
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
27-12-2022
                                  <span>
 . 11:19 PM
                                  </span>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"headphones"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Assigned Agent 
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <select className="form-select form-select-sm py-0 ms-n3 border-0 shadow-none">
                                  <option>
Ally Aagaard
                                  </option>
                                  <option>
Lonnie Kub
                                  </option>
                                  <option>
Aida Moen
                                  </option>
                                  <option>
Niko Koss
                                  </option>
                                  <option>
Alec Haag
                                  </option>
                                  <option>
Ola Smith
                                  </option>
                                  <option>
Leif Walsh
                                  </option>
                                  <option>
Brain Cole
                                  </option>
                                  <option>
Reese Mann
                                  </option>
                                </select>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="fs-9 mb-1">
 Probability:
                        </p>
                        <div className="progress" style={{"height":"8px"} as CSSProperties}>
                          <div className="progress-bar rounded-pill bg-success" role="progressbar" style={{"width":"100%"} as CSSProperties} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card mb-3">
                    <div className="card-body">
                      <a href="#collapseWidthDeals-10" className="dropdown-indicator-icon position-absolute text-body-tertiary"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="collapseWidthDeals-10">
                        <span className="fa-solid fa-angle-down">                        </span>
                      </a>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex">
                          <span className="me-2" data-feather={"clock"} style={{"strokeWidth":"2"} as CSSProperties}>                          </span>
                          <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
Dec 29, 2022
                            <span className="text-body-quaternary">
 . 06:15 PM
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="deals-items-head d-flex align-items-center mb-2">
                        <PhoenixLink href="/apps/crm/deal-details" className="text-primary fw-bold line-clamp-1 me-3 mb-0 fs-7">
Product List
                        </PhoenixLink>
                        <p className="deals-category fs-10 mb-0 mt-1 d-none">
                          <span className="me-1 text-body-quaternary" data-feather={"grid"} style={{"strokeWidth":"2","height":"12px","width":"12px"} as CSSProperties}>                          </span>
Financial
                        </p>
                        <p className="ms-auto fs-9 text-body-emphasis fw-semibold mb-0 deals-revenue">
$33,00.00
                        </p>
                      </div>
                      <div className="deals-company-agent d-flex flex-between-center">
                        <div className="d-flex align-items-center">
                          <span className="uil uil-user me-2">                          </span>
                          <p className="text-body-secondary fw-bold fs-9 mb-0">
Ink Incorporated
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="uil uil-headphones me-2">                          </span>
                          <p className="text-body-secondary fw-bold fs-9 mb-0">
Reese Mann
                          </p>
                        </div>
                      </div>
                      <div className="collapse" id="collapseWidthDeals-10">
                        <div className="d-flex gap-2 mb-5">
                          <span className="badge badge-phoenix badge-phoenix-success">
Completed
                          </span>
                          <span className="badge badge-phoenix badge-phoenix-info">
Low
                          </span>
                        </div>
                        <table className="mb-4 w-100 table-stats table-stats">
                          <tbody>
                            <tr>
                              <th>                              </th>
                              <th>                              </th>
                              <th>                              </th>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"dollar-sign"}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Expected Revenue
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
$33,00.00
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"user"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Company Name
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis d-flex align-items-center gap-2">
Ink Incorporated
                                  <a href="#!">
                                    <span className="fa-solid fa-square-phone text-body-tertiary">                                    </span>
                                  </a>
                                  <a href="#!">
                                    <span className="fa-solid fa-square-envelope text-body-tertiary">                                    </span>
                                  </a>
                                  <a href="#!">
                                    <span className="fab fa-whatsapp-square text-body-tertiary">                                    </span>
                                  </a>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"calendar"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
{"Closing Date & Time"}
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
28-12-2022
                                  <span>
 . 12:20 PM
                                  </span>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"headphones"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Assigned Agent 
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <select className="form-select form-select-sm py-0 ms-n3 border-0 shadow-none">
                                  <option>
Ally Aagaard
                                  </option>
                                  <option>
Lonnie Kub
                                  </option>
                                  <option>
Aida Moen
                                  </option>
                                  <option>
Niko Koss
                                  </option>
                                  <option>
Alec Haag
                                  </option>
                                  <option>
Ola Smith
                                  </option>
                                  <option>
Leif Walsh
                                  </option>
                                  <option>
Brain Cole
                                  </option>
                                  <option>
Reese Mann
                                  </option>
                                </select>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="fs-9 mb-1">
 Probability:
                        </p>
                        <div className="progress" style={{"height":"8px"} as CSSProperties}>
                          <div className="progress-bar rounded-pill bg-success" role="progressbar" style={{"width":"100%"} as CSSProperties} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card mb-3">
                    <div className="card-body">
                      <a href="#collapseWidthDeals-11" className="dropdown-indicator-icon position-absolute text-body-tertiary"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="collapseWidthDeals-11">
                        <span className="fa-solid fa-angle-down">                        </span>
                      </a>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex">
                          <span className="me-2" data-feather={"clock"} style={{"strokeWidth":"2"} as CSSProperties}>                          </span>
                          <p className="mb-0 fs-9 fw-semibold text-body-tertiary date">
Dec 29, 2022
                            <span className="text-body-quaternary">
 . 2:15 PM
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="deals-items-head d-flex align-items-center mb-2">
                        <PhoenixLink href="/apps/crm/deal-details" className="text-primary fw-bold line-clamp-1 me-3 mb-0 fs-7">
Dimensions for Printing
                        </PhoenixLink>
                        <p className="deals-category fs-10 mb-0 mt-1 d-none">
                          <span className="me-1 text-body-quaternary" data-feather={"grid"} style={{"strokeWidth":"2","height":"12px","width":"12px"} as CSSProperties}>                          </span>
Marketplace
                        </p>
                        <p className="ms-auto fs-9 text-body-emphasis fw-semibold mb-0 deals-revenue">
$23,400.00
                        </p>
                      </div>
                      <div className="deals-company-agent d-flex flex-between-center">
                        <div className="d-flex align-items-center">
                          <span className="uil uil-user me-2">                          </span>
                          <p className="text-body-secondary fw-bold fs-9 mb-0">
Slim Apes
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="uil uil-headphones me-2">                          </span>
                          <p className="text-body-secondary fw-bold fs-9 mb-0">
Ally Aagaard
                          </p>
                        </div>
                      </div>
                      <div className="collapse" id="collapseWidthDeals-11">
                        <div className="d-flex gap-2 mb-5">
                          <span className="badge badge-phoenix badge-phoenix-success">
Completed
                          </span>
                          <span className="badge badge-phoenix badge-phoenix-danger">
Urgent
                          </span>
                        </div>
                        <table className="mb-4 w-100 table-stats table-stats">
                          <tbody>
                            <tr>
                              <th>                              </th>
                              <th>                              </th>
                              <th>                              </th>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"dollar-sign"}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Expected Revenue
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
$23,400.00
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"user"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Company Name
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis d-flex align-items-center gap-2">
Slim Apes
                                  <a href="#!">
                                    <span className="fa-solid fa-square-phone text-body-tertiary">                                    </span>
                                  </a>
                                  <a href="#!">
                                    <span className="fa-solid fa-square-envelope text-body-tertiary">                                    </span>
                                  </a>
                                  <a href="#!">
                                    <span className="fab fa-whatsapp-square text-body-tertiary">                                    </span>
                                  </a>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"calendar"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
{"Closing Date & Time"}
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <p className="ps-6 ps-sm-0 fw-semibold fs-9 mb-0 mb-0 pb-3 pb-sm-0 text-body-emphasis">
28-12-2022
                                  <span>
 . 02:19 PM
                                  </span>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <div className="d-flex align-items-center">
                                  <span className="me-2 text-body-tertiary" data-feather={"headphones"} style={{"width":"16px","height":"16px"} as CSSProperties}>                                  </span>
                                  <p className="fw-semibold fs-9 mb-0 text-body-tertiary">
Assigned Agent 
                                  </p>
                                </div>
                              </td>
                              <td className="py-1 d-none d-sm-block pe-sm-2">
:
                              </td>
                              <td className="py-1">
                                <select className="form-select form-select-sm py-0 ms-n3 border-0 shadow-none">
                                  <option>
Ally Aagaard
                                  </option>
                                  <option>
Lonnie Kub
                                  </option>
                                  <option>
Aida Moen
                                  </option>
                                  <option>
Niko Koss
                                  </option>
                                  <option>
Alec Haag
                                  </option>
                                  <option>
Ola Smith
                                  </option>
                                  <option>
Leif Walsh
                                  </option>
                                  <option>
Brain Cole
                                  </option>
                                  <option>
Reese Mann
                                  </option>
                                </select>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="fs-9 mb-1">
 Probability:
                        </p>
                        <div className="progress" style={{"height":"8px"} as CSSProperties}>
                          <div className="progress-bar rounded-pill bg-success" role="progressbar" style={{"width":"100%"} as CSSProperties} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="deals-col position-relative">
            <div className="d-flex flex-center flex-column h-100">
              <h3 className="mb-4">
Add new stage
              </h3>
              <button className="btn btn-sm btn-primary" type="button" data-bs-toggle={"modal"} data-bs-target={"#addStageModal"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                <span className="fa-solid fa-plus me-2">                </span>
New Stage
              </button>
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
