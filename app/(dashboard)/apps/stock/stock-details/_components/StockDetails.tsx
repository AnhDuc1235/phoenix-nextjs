'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function StockDetails() {
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

    <h2 className="mb-4 text-body-emphasis">
Stock Details
    </h2>

    <div className="row pb-9 gx-4">
      <div className="col-xl-7 pe-lg-2 flex-1">
        <h4>
Apple Inc. (AAPL)
        </h4>
        <h6 className="fw-semibold mb-4">
NASDAQ: AAPL · Real-Time Price · USD
        </h6>
        <ul className="nav nav-underline optionChainTableHeader gap-0 flex-nowrap scrollbar mb-4" id="stockDetailsTab" role="tablist">
          <li className="nav-item">
            <a href="#chart-tab" className="nav-link pt-0 text-nowrap active ps-0 pe-3 " id="tab-chart"  data-bs-toggle={"tab"} role="tab" aria-controls="chart-tab" aria-selected="true">
Chart
            </a>
          </li>
          <li className="nav-item">
            <a href="#dividend-tab" className="nav-link pt-0 text-nowrap px-3 " id="tab-dividend"  data-bs-toggle={"tab"} role="tab" aria-controls="dividend-tab" aria-selected="false">
Dividends
            </a>
          </li>
          <li className="nav-item">
            <a href="#finStates-tab" className="nav-link pt-0 text-nowrap px-3 " id="tab-finStates"  data-bs-toggle={"tab"} role="tab" aria-controls="finStates-tab" aria-selected="false">
Financial Statement
            </a>
          </li>
          <li className="nav-item">
            <a href="#forecast-tab" className="nav-link pt-0 text-nowrap px-3 " id="tab-forecast"  data-bs-toggle={"tab"} role="tab" aria-controls="forecast-tab" aria-selected="false">
Forecast
            </a>
          </li>
          <li className="nav-item">
            <a href="#news-tab" className="nav-link pt-0 text-nowrap px-3 " id="tab-news"  data-bs-toggle={"tab"} role="tab" aria-controls="news-tab" aria-selected="false">
News
            </a>
          </li>
          <li className="nav-item">
            <a href="#events-tab" className="nav-link pt-0 text-nowrap px-3 " id="tab-events"  data-bs-toggle={"tab"} role="tab" aria-controls="events-tab" aria-selected="false">
Events
            </a>
          </li>
          <li className="nav-item">
            <a href="#comProfile-tab" className="nav-link pt-0 text-nowrap px-3 " id="tab-comProfile"  data-bs-toggle={"tab"} role="tab" aria-controls="comProfile-tab" aria-selected="false">
Company Profile
            </a>
          </li>
          <li className="nav-item flex-1 d-none d-md-inline d-xl-none d-xxl-inline">
            <a href="#empty1-tab" className="nav-link pt-0 text-nowrap px-3 disabled h-100" id="tab-empty1"  data-bs-toggle={"tab"} role="tab" aria-selected="false">

            </a>
          </li>
        </ul>
        <div className="tab-content" id="stockDetailsTabContent">
          <div className="tab-pane fade show active" id="chart-tab" role="tabpanel" aria-labelledby="tab-chart">
            <div className="row flex-between-center g-3 mb-4">
              <div className="col-auto">
                <h4>
Share Report 
                </h4>
                <p className="text-body-tertiary mb-0">
Updated inventory according to the sales report.
                </p>
              </div>
              <div className="col-auto d-flex gap-2">
                <select className="form-select form-select-sm" id="chart-filter" name="filter-chart">
                  <option value="daily">
Daily 
                  </option>
                  <option value="weekly">
 Weekly 
                  </option>
                  <option value="monthly">
Monthly 
                  </option>
                  <option value="yearly">
 Yearly 
                  </option>
                </select>
                <button className="btn btn-phoenix-secondary btn-sm">
                  <span className="fas fa-magnifying-glass-plus">                  </span>
                </button>
                <button className="btn btn-phoenix-secondary btn-sm">
                  <span className="fas fa-magnifying-glass-minus">                  </span>
                </button>
              </div>
            </div>
            <div className="echart-stock-share-candlestick-chart" style={{"width":"100%","height":"80vh"} as CSSProperties}>            </div>
          </div>
          <div className="tab-pane fade" id="dividend-tab" role="tabpanel" aria-labelledby="tab-dividend">
            <div className="alert alert-phoenix-secondary mb-4" role="alert">
              <h4 className="alert-heading text-body-tertiary mb-2">
Apple's Dividend Distribution
              </h4>
              <p className="text-body-tertiary mb-0">
Apple offers a $1.00 yearly dividend per share, or 0.44% return. The dividend is distributed every three months, and as of August 12, 2024, there was no ex-dividend date.
              </p>
            </div>
            <div className="card mb-4">
              <div className="card-body">
                <div className="row g-0">
                  <div className="col-6 col-xxl-3 pe-5 pb-4 border-bottom border-end">
                    <div className="d-flex gap-3 flex-column flex-sm-row flex-xxl-column">
                      <div className="icon-item border p-2 rounded d-flex flex-center border-success-light bg-success-subtle">
                        <span className="uil uil-usd-circle text-success-darker">                        </span>
                      </div>
                      <div className="text-nowrap">
                        <h5 className="fs-9 fs-sm-8 text-body-highlight lh-sm">
Dividend Yield
                        </h5>
                        <h4 className="fs-8 fs-sm-7 mb-0 text-body fw-bolder lh-sm">
2.80%
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xxl-3  pb-4 ps-5 px-xxl-5 border-bottom border-end-xxl">
                    <div className="d-flex gap-3 flex-column flex-sm-row flex-xxl-column">
                      <div className="icon-item border p-2 rounded d-flex flex-center border-warning-light bg-warning-subtle">
                        <span className="uil uil-dollar-sign text-warning-darker">                        </span>
                      </div>
                      <div className="text-nowrap">
                        <h5 className="fs-9 fs-sm-8 text-body-highlight lh-sm">
Annual Dividend
                        </h5>
                        <h4 className="fs-8 fs-sm-7 mb-0 text-body fw-bolder lh-sm">
$1.00
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xxl-3 py-4 pt-xxl-0 px-xxl-5 pe-5 border-bottom border-end">
                    <div className="d-flex gap-3 flex-column flex-sm-row flex-xxl-column">
                      <div className="icon-item border p-2 rounded d-flex flex-center border-danger-light bg-danger-subtle">
                        <span className="uil uil-dollar-alt text-danger-darker">                        </span>
                      </div>
                      <div className="text-nowrap">
                        <h5 className="fs-9 fs-sm-8 text-body-highlight lh-sm">
Ex-Dividend Date
                        </h5>
                        <h4 className="fs-8 fs-sm-7 mb-0 text-body fw-bolder lh-sm">
Aug 12, 2024
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xxl-3 py-4 pt-xxl-0 ps-5  border-bottom">
                    <div className="d-flex gap-3 flex-column flex-sm-row flex-xxl-column">
                      <div className="icon-item border p-2 rounded d-flex flex-center border-primary-light bg-primary-subtle">
                        <span className="uil uil-bill text-primary-darker">                        </span>
                      </div>
                      <div className="text-nowrap">
                        <h5 className="fs-9 fs-sm-8 text-body-highlight lh-sm">
Payout Frequency
                        </h5>
                        <h4 className="fs-8 fs-sm-7 mb-0 text-body fw-bolder lh-sm">
Quarterly
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xxl-3 py-4 pb-xxl-0 pe-5 pe-md-0 pe-lg-5 border-bottom border-end  border-end-xxl border-bottom-xxl-0">
                    <div className="d-flex gap-3 flex-column flex-sm-row flex-xxl-column">
                      <div className="icon-item border p-2 rounded d-flex flex-center border-info-light bg-info-subtle">
                        <span className="uil uil-invoice text-info-darker">                        </span>
                      </div>
                      <div className="text-nowrap">
                        <h5 className="fs-9 fs-sm-8 text-body-highlight lh-sm">
Payout Ratio
                        </h5>
                        <h4 className="fs-8 fs-sm-7 mb-0 text-body fw-bolder lh-sm">
15.23%
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xxl-3 py-4 ps-5 pe-xxl-5 pb-xxl-0 border-bottom border-bottom-xxl-0 border-end-xxl">
                    <div className="d-flex gap-3 flex-column flex-sm-row flex-xxl-column">
                      <div className="icon-item border p-2 rounded d-flex flex-center border-success-light bg-success-subtle">
                        <span className="uil uil-arrow-growth text-success-darker">                        </span>
                      </div>
                      <div className="text-nowrap">
                        <h5 className="fs-9 fs-sm-8 text-body-highlight lh-sm">
Dividend Growth
                        </h5>
                        <h4 className="fs-8 fs-sm-7 mb-0 text-body fw-bolder lh-sm">
4.26%
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xxl-3 pt-4 pe-5 px-xxl-5 border-end">
                    <div className="d-flex gap-3 flex-column flex-sm-row flex-xxl-column">
                      <div className="icon-item border p-2 rounded d-flex flex-center border-primary-light bg-primary-subtle">
                        <span className="uil uil-process text-primary-darker">                        </span>
                      </div>
                      <div className="text-nowrap">
                        <h5 className="fs-9 fs-sm-8 text-body-highlight lh-sm">
Buyback Yield
                        </h5>
                        <h4 className="fs-8 fs-sm-7 mb-0 text-body fw-bolder lh-sm">
2.57%
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-xxl-3 pt-4 ps-5">
                    <div className="d-flex gap-3 flex-column flex-sm-row flex-xxl-column">
                      <div className="icon-item border p-2 rounded d-flex flex-center border-warning-light bg-warning-subtle">
                        <span className="uil uil-chart-line text-warning-darker">                        </span>
                      </div>
                      <div className="text-nowrap">
                        <h5 className="fs-9 fs-sm-8 text-body-highlight lh-sm">
Shareholder Yield
                        </h5>
                        <h4 className="fs-8 fs-sm-7 mb-0 text-body fw-bolder lh-sm">
3.00%
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-3 mb-4">
              <div className="col-xxl-6">
                <div className="row g-3 g-lg-5 flex-between-center mb-4">
                  <div className="col-auto">
                    <h4>
Dividends
                    </h4>
                    <p className="text-body-tertiary mb-0">
Dividend Income Basics
                    </p>
                  </div>
                  <div className="col-auto d-flex align-items-center gap-2">
                    <select className="form-select form-select-sm" name="dividends" id="dividends">
                      <option value="9">
9 Years
                      </option>
                      <option value="8">
8 Years
                      </option>
                      <option value="7">
7 Years
                      </option>
                    </select>
                    <button className="btn btn-sm btn-phoenix-secondary bg-body-emphasis bg-body-hover action-btn" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                      <span className="fas fa-ellipsis-h" data-fa-transform={"shrink-2"}>                      </span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a href="#" className="dropdown-item">
Action
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item">
Another action
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item">
Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="echart-dividends-bar-chart" style={{"width":"100%","minHeight":"300px"} as CSSProperties}>                </div>
              </div>
              <div className="col-xxl-6">
                <div className="row g-3 g-lg-5 flex-between-center mb-4">
                  <div className="col-auto">
                    <h4>
Dividend Growth
                    </h4>
                    <p className="text-body-tertiary mb-0">
Boosting Dividend Income
                    </p>
                  </div>
                  <div className="col-auto d-flex align-items-center gap-2">
                    <select className="form-select form-select-sm" name="dividend-growth" id="growth">
                      <option value="7">
7 Years
                      </option>
                      <option value="8">
8 Years
                      </option>
                      <option value="9">
9 Years
                      </option>
                    </select>
                    <button className="btn btn-sm btn-phoenix-secondary bg-body-emphasis bg-body-hover action-btn" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                      <span className="fas fa-ellipsis-h" data-fa-transform={"shrink-2"}>                      </span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a href="#" className="dropdown-item">
Action
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item">
Another action
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item">
Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="echart-dividend-growth-chart" style={{"width":"100%","minHeight":"300px"} as CSSProperties}>                </div>
              </div>
            </div>
            <div className="row g-3 flex-between-center">
              <div className="col-auto">
                <h4>
Dividend Record
                </h4>
                <p className="text-body-tertiary mb-0">
Brief summary of all projects
                </p>
              </div>
              <div className="col-auto">
                <select className="form-select form-select-sm" id="record-action" name="action">
                  <option value="export">
Export 
                  </option>
                  <option value="import">
View 
                  </option>
                  <option value="remove">
 Remove 
                  </option>
                </select>
              </div>
              <div className="col-12 mt-3">
                <div id="dividendTable" data-list={"{\"valueNames\":[\"dividendDate\",\"cashAmount\",\"status\",\"recordDate\",\"payDate\"],\"page\":10,\"pagination\":true}"}>
                  <div className="table-responsive scrollbar">
                    <table className="table fs-9 mb-0 border-top border-translucent">
                      <thead>
                        <tr className="text-uppercase"><th className="white-space-nowrap fs-9 ps-0 align-middle">
                            <div className="form-check mb-0 fs-8">
                              <input className="form-check-input" id="checkbox-bulk-dividend-record-select" type="checkbox" data-bulk-select={"{\"body\":\"table-dividend-record-body\"}"} />
                            </div>
                          </th>
                          <th className="sort white-space-nowrap align-middle" scope="col" style={{"minWidth":"200px"} as CSSProperties} data-sort={"dividendDate"}>
Ex-dividend date
                          </th>
                          <th className="sort align-middle" scope="col" data-sort={"cashAmount"} style={{"minWidth":"200px"} as CSSProperties}>
Cash amount
                          </th>
                          <th className="sort align-middle text-center" scope="col" data-sort={"status"} style={{"minWidth":"200px"} as CSSProperties}>
Payment Status
                          </th>
                          <th className="sort align-middle text-end pe-5" scope="col" style={{"minWidth":"200px"} as CSSProperties} data-sort={"recordDate"}>
Record date
                          </th>
                          <th className="sort text-start ps-5 align-middle" scope="col" style={{"minWidth":"200px"} as CSSProperties} data-sort={"payDate"}>
Pay Date
                          </th>
                          <th className="sort text-end pe-0 align-middle" scope="col">                          </th>
                        </tr>
                      </thead>
                      <tbody className="list" id="table-dividend-record-body"><tr className="hover-actions-trigger btn-reveal-trigger position-static">
                          <td className="fs-9 align-middle ps-0">
                            <div className="form-check mb-0 fs-8">
                              <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"date\":\"Sep 6, 2024\",\"amount\":\"0.12\",\"cashStatus\":{\"title\":\"pending\",\"badge\":\"warning\"},\"recordDate\":\"Sep 19, 2024\"}"} />
                            </div>
                          </td>
                          <td className="align-middle dividendDate white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Sep 6, 2024
                            </p>
                          </td>
                          <td className="align-middle cashAmount white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
$0.12
                            </p>
                          </td>
                          <td className="align-middle text-center status">
                            <span className="badge badge-phoenix fs-10 rounded-pill badge-phoenix-warning">
pending
                            </span>
                          </td>
                          <td className="align-middle text-end recordDate white-space-nowrap pe-5">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Sep 19, 2024
                            </p>
                          </td>
                          <td className="align-middle payDate white-space-nowrap ps-5">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
N/A
                            </p>
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0">
                            <div className="position-relative">
                              <div className="hover-actions">
                                <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                                  <span className="fas fa-check">                                  </span>
                                </button>
                                <button className="btn btn-sm btn-phoenix-secondary fs-10">
                                  <span className="fas fa-trash">                                  </span>
                                </button>
                              </div>
                            </div>
                            <div className="btn-reveal-trigger position-static">
                              <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h fs-10">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#!" className="dropdown-item">
View
                                </a>
                                <a href="#!" className="dropdown-item">
Export
                                </a>
                                <div className="dropdown-divider">                                </div>
                                <a href="#!" className="dropdown-item text-danger">
Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                            <div className="form-check mb-0 fs-8">
                              <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"date\":\"Jun 7, 2024\",\"amount\":\"0.20\",\"cashStatus\":{\"title\":\"pending\",\"badge\":\"warning\"},\"recordDate\":\"Jun 20, 2024\"}"} />
                            </div>
                          </td>
                          <td className="align-middle dividendDate white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Jun 7, 2024
                            </p>
                          </td>
                          <td className="align-middle cashAmount white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
$0.20
                            </p>
                          </td>
                          <td className="align-middle text-center status">
                            <span className="badge badge-phoenix fs-10 rounded-pill badge-phoenix-warning">
pending
                            </span>
                          </td>
                          <td className="align-middle text-end recordDate white-space-nowrap pe-5">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Jun 20, 2024
                            </p>
                          </td>
                          <td className="align-middle payDate white-space-nowrap ps-5">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
N/A
                            </p>
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0">
                            <div className="position-relative">
                              <div className="hover-actions">
                                <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                                  <span className="fas fa-check">                                  </span>
                                </button>
                                <button className="btn btn-sm btn-phoenix-secondary fs-10">
                                  <span className="fas fa-trash">                                  </span>
                                </button>
                              </div>
                            </div>
                            <div className="btn-reveal-trigger position-static">
                              <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h fs-10">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#!" className="dropdown-item">
View
                                </a>
                                <a href="#!" className="dropdown-item">
Export
                                </a>
                                <div className="dropdown-divider">                                </div>
                                <a href="#!" className="dropdown-item text-danger">
Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                            <div className="form-check mb-0 fs-8">
                              <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"date\":\"Nov 30, 2023\",\"amount\":\"1.78\",\"cashStatus\":{\"title\":\"done\",\"badge\":\"success\"},\"recordDate\":\"Mar 14, 2024\",\"payDate\":\"Mar 14, 2024\"}"} />
                            </div>
                          </td>
                          <td className="align-middle dividendDate white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Nov 30, 2023
                            </p>
                          </td>
                          <td className="align-middle cashAmount white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
$1.78
                            </p>
                          </td>
                          <td className="align-middle text-center status">
                            <span className="badge badge-phoenix fs-10 rounded-pill badge-phoenix-success">
done
                            </span>
                          </td>
                          <td className="align-middle text-end recordDate white-space-nowrap pe-5">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Mar 14, 2024
                            </p>
                          </td>
                          <td className="align-middle payDate white-space-nowrap ps-5">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Mar 14, 2024
                            </p>
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0">
                            <div className="position-relative">
                              <div className="hover-actions">
                                <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                                  <span className="fas fa-check">                                  </span>
                                </button>
                                <button className="btn btn-sm btn-phoenix-secondary fs-10">
                                  <span className="fas fa-trash">                                  </span>
                                </button>
                              </div>
                            </div>
                            <div className="btn-reveal-trigger position-static">
                              <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h fs-10">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#!" className="dropdown-item">
View
                                </a>
                                <a href="#!" className="dropdown-item">
Export
                                </a>
                                <div className="dropdown-divider">                                </div>
                                <a href="#!" className="dropdown-item text-danger">
Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                            <div className="form-check mb-0 fs-8">
                              <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"date\":\"Jun 1, 2023\",\"amount\":\"0.76\",\"cashStatus\":{\"title\":\"done\",\"badge\":\"success\"},\"recordDate\":\"Dec 14, 2023\",\"payDate\":\"Dec 14, 2023\"}"} />
                            </div>
                          </td>
                          <td className="align-middle dividendDate white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Jun 1, 2023
                            </p>
                          </td>
                          <td className="align-middle cashAmount white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
$0.76
                            </p>
                          </td>
                          <td className="align-middle text-center status">
                            <span className="badge badge-phoenix fs-10 rounded-pill badge-phoenix-success">
done
                            </span>
                          </td>
                          <td className="align-middle text-end recordDate white-space-nowrap pe-5">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Dec 14, 2023
                            </p>
                          </td>
                          <td className="align-middle payDate white-space-nowrap ps-5">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Dec 14, 2023
                            </p>
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0">
                            <div className="position-relative">
                              <div className="hover-actions">
                                <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                                  <span className="fas fa-check">                                  </span>
                                </button>
                                <button className="btn btn-sm btn-phoenix-secondary fs-10">
                                  <span className="fas fa-trash">                                  </span>
                                </button>
                              </div>
                            </div>
                            <div className="btn-reveal-trigger position-static">
                              <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h fs-10">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#!" className="dropdown-item">
View
                                </a>
                                <a href="#!" className="dropdown-item">
Export
                                </a>
                                <div className="dropdown-divider">                                </div>
                                <a href="#!" className="dropdown-item text-danger">
Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                            <div className="form-check mb-0 fs-8">
                              <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"date\":\"Dec 1, 2022\",\"amount\":\"1.90\",\"cashStatus\":{\"title\":\"done\",\"badge\":\"success\"},\"recordDate\":\"Sep 14, 2023\",\"payDate\":\"Sep 14, 2023\"}"} />
                            </div>
                          </td>
                          <td className="align-middle dividendDate white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Dec 1, 2022
                            </p>
                          </td>
                          <td className="align-middle cashAmount white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
$1.90
                            </p>
                          </td>
                          <td className="align-middle text-center status">
                            <span className="badge badge-phoenix fs-10 rounded-pill badge-phoenix-success">
done
                            </span>
                          </td>
                          <td className="align-middle text-end recordDate white-space-nowrap pe-5">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Sep 14, 2023
                            </p>
                          </td>
                          <td className="align-middle payDate white-space-nowrap ps-5">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Sep 14, 2023
                            </p>
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0">
                            <div className="position-relative">
                              <div className="hover-actions">
                                <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                                  <span className="fas fa-check">                                  </span>
                                </button>
                                <button className="btn btn-sm btn-phoenix-secondary fs-10">
                                  <span className="fas fa-trash">                                  </span>
                                </button>
                              </div>
                            </div>
                            <div className="btn-reveal-trigger position-static">
                              <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h fs-10">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#!" className="dropdown-item">
View
                                </a>
                                <a href="#!" className="dropdown-item">
Export
                                </a>
                                <div className="dropdown-divider">                                </div>
                                <a href="#!" className="dropdown-item text-danger">
Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                            <div className="form-check mb-0 fs-8">
                              <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"date\":\"Mar 5, 2020\",\"amount\":\"2.87\",\"cashStatus\":{\"title\":\"done\",\"badge\":\"success\"},\"recordDate\":\"Jun 15, 2023\",\"payDate\":\"Jun 15, 2023\"}"} />
                            </div>
                          </td>
                          <td className="align-middle dividendDate white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Mar 5, 2020
                            </p>
                          </td>
                          <td className="align-middle cashAmount white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
$2.87
                            </p>
                          </td>
                          <td className="align-middle text-center status">
                            <span className="badge badge-phoenix fs-10 rounded-pill badge-phoenix-success">
done
                            </span>
                          </td>
                          <td className="align-middle text-end recordDate white-space-nowrap pe-5">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Jun 15, 2023
                            </p>
                          </td>
                          <td className="align-middle payDate white-space-nowrap ps-5">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Jun 15, 2023
                            </p>
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0">
                            <div className="position-relative">
                              <div className="hover-actions">
                                <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                                  <span className="fas fa-check">                                  </span>
                                </button>
                                <button className="btn btn-sm btn-phoenix-secondary fs-10">
                                  <span className="fas fa-trash">                                  </span>
                                </button>
                              </div>
                            </div>
                            <div className="btn-reveal-trigger position-static">
                              <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h fs-10">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#!" className="dropdown-item">
View
                                </a>
                                <a href="#!" className="dropdown-item">
Export
                                </a>
                                <div className="dropdown-divider">                                </div>
                                <a href="#!" className="dropdown-item text-danger">
Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                            <div className="form-check mb-0 fs-8">
                              <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"date\":\"Sep 5, 2019\",\"amount\":\"5.87\",\"cashStatus\":{\"title\":\"done\",\"badge\":\"success\"},\"recordDate\":\"Mar 16, 2023\",\"payDate\":\"Mar 16, 2023\"}"} />
                            </div>
                          </td>
                          <td className="align-middle dividendDate white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Sep 5, 2019
                            </p>
                          </td>
                          <td className="align-middle cashAmount white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
$5.87
                            </p>
                          </td>
                          <td className="align-middle text-center status">
                            <span className="badge badge-phoenix fs-10 rounded-pill badge-phoenix-success">
done
                            </span>
                          </td>
                          <td className="align-middle text-end recordDate white-space-nowrap pe-5">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Mar 16, 2023
                            </p>
                          </td>
                          <td className="align-middle payDate white-space-nowrap ps-5">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Mar 16, 2023
                            </p>
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0">
                            <div className="position-relative">
                              <div className="hover-actions">
                                <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                                  <span className="fas fa-check">                                  </span>
                                </button>
                                <button className="btn btn-sm btn-phoenix-secondary fs-10">
                                  <span className="fas fa-trash">                                  </span>
                                </button>
                              </div>
                            </div>
                            <div className="btn-reveal-trigger position-static">
                              <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h fs-10">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#!" className="dropdown-item">
View
                                </a>
                                <a href="#!" className="dropdown-item">
Export
                                </a>
                                <div className="dropdown-divider">                                </div>
                                <a href="#!" className="dropdown-item text-danger">
Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                            <div className="form-check mb-0 fs-8">
                              <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"date\":\"Jun 6, 2019\",\"amount\":\"12.98\",\"cashStatus\":{\"title\":\"done\",\"badge\":\"success\"},\"recordDate\":\"Dec 15, 2022\",\"payDate\":\"Dec 15, 2022\"}"} />
                            </div>
                          </td>
                          <td className="align-middle dividendDate white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Jun 6, 2019
                            </p>
                          </td>
                          <td className="align-middle cashAmount white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
$12.98
                            </p>
                          </td>
                          <td className="align-middle text-center status">
                            <span className="badge badge-phoenix fs-10 rounded-pill badge-phoenix-success">
done
                            </span>
                          </td>
                          <td className="align-middle text-end recordDate white-space-nowrap pe-5">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Dec 15, 2022
                            </p>
                          </td>
                          <td className="align-middle payDate white-space-nowrap ps-5">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Dec 15, 2022
                            </p>
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0">
                            <div className="position-relative">
                              <div className="hover-actions">
                                <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                                  <span className="fas fa-check">                                  </span>
                                </button>
                                <button className="btn btn-sm btn-phoenix-secondary fs-10">
                                  <span className="fas fa-trash">                                  </span>
                                </button>
                              </div>
                            </div>
                            <div className="btn-reveal-trigger position-static">
                              <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h fs-10">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#!" className="dropdown-item">
View
                                </a>
                                <a href="#!" className="dropdown-item">
Export
                                </a>
                                <div className="dropdown-divider">                                </div>
                                <a href="#!" className="dropdown-item text-danger">
Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                            <div className="form-check mb-0 fs-8">
                              <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"date\":\"Mar 7, 2019\",\"amount\":\"2.10\",\"cashStatus\":{\"title\":\"done\",\"badge\":\"success\"},\"recordDate\":\"Sep 15, 2022\",\"payDate\":\"Sep 15, 2022\"}"} />
                            </div>
                          </td>
                          <td className="align-middle dividendDate white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Mar 7, 2019
                            </p>
                          </td>
                          <td className="align-middle cashAmount white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
$2.10
                            </p>
                          </td>
                          <td className="align-middle text-center status">
                            <span className="badge badge-phoenix fs-10 rounded-pill badge-phoenix-success">
done
                            </span>
                          </td>
                          <td className="align-middle text-end recordDate white-space-nowrap pe-5">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Sep 15, 2022
                            </p>
                          </td>
                          <td className="align-middle payDate white-space-nowrap ps-5">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Sep 15, 2022
                            </p>
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0">
                            <div className="position-relative">
                              <div className="hover-actions">
                                <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                                  <span className="fas fa-check">                                  </span>
                                </button>
                                <button className="btn btn-sm btn-phoenix-secondary fs-10">
                                  <span className="fas fa-trash">                                  </span>
                                </button>
                              </div>
                            </div>
                            <div className="btn-reveal-trigger position-static">
                              <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h fs-10">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#!" className="dropdown-item">
View
                                </a>
                                <a href="#!" className="dropdown-item">
Export
                                </a>
                                <div className="dropdown-divider">                                </div>
                                <a href="#!" className="dropdown-item text-danger">
Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                            <div className="form-check mb-0 fs-8">
                              <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"date\":\"Dec 6, 2018\",\"amount\":\"10.54\",\"cashStatus\":{\"title\":\"canceled\",\"badge\":\"danger\"},\"recordDate\":\"Jun 14, 2020\"}"} />
                            </div>
                          </td>
                          <td className="align-middle dividendDate white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Dec 6, 2018
                            </p>
                          </td>
                          <td className="align-middle cashAmount white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
$10.54
                            </p>
                          </td>
                          <td className="align-middle text-center status">
                            <span className="badge badge-phoenix fs-10 rounded-pill badge-phoenix-danger">
canceled
                            </span>
                          </td>
                          <td className="align-middle text-end recordDate white-space-nowrap pe-5">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Jun 14, 2020
                            </p>
                          </td>
                          <td className="align-middle payDate white-space-nowrap ps-5">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
N/A
                            </p>
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0">
                            <div className="position-relative">
                              <div className="hover-actions">
                                <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                                  <span className="fas fa-check">                                  </span>
                                </button>
                                <button className="btn btn-sm btn-phoenix-secondary fs-10">
                                  <span className="fas fa-trash">                                  </span>
                                </button>
                              </div>
                            </div>
                            <div className="btn-reveal-trigger position-static">
                              <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h fs-10">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#!" className="dropdown-item">
View
                                </a>
                                <a href="#!" className="dropdown-item">
Export
                                </a>
                                <div className="dropdown-divider">                                </div>
                                <a href="#!" className="dropdown-item text-danger">
Remove
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                            <div className="form-check mb-0 fs-8">
                              <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"date\":\"Jun 13, 2018\",\"amount\":\"23.54\",\"cashStatus\":{\"title\":\"done\",\"badge\":\"success\"},\"recordDate\":\"Dec 14, 2020\",\"payDate\":\"Dec 14, 2020\"}"} />
                            </div>
                          </td>
                          <td className="align-middle dividendDate white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Jun 13, 2018
                            </p>
                          </td>
                          <td className="align-middle cashAmount white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
$23.54
                            </p>
                          </td>
                          <td className="align-middle text-center status">
                            <span className="badge badge-phoenix fs-10 rounded-pill badge-phoenix-success">
done
                            </span>
                          </td>
                          <td className="align-middle text-end recordDate white-space-nowrap pe-5">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Dec 14, 2020
                            </p>
                          </td>
                          <td className="align-middle payDate white-space-nowrap ps-5">
                            <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Dec 14, 2020
                            </p>
                          </td>
                          <td className="align-middle white-space-nowrap text-end pe-0">
                            <div className="position-relative">
                              <div className="hover-actions">
                                <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                                  <span className="fas fa-check">                                  </span>
                                </button>
                                <button className="btn btn-sm btn-phoenix-secondary fs-10">
                                  <span className="fas fa-trash">                                  </span>
                                </button>
                              </div>
                            </div>
                            <div className="btn-reveal-trigger position-static">
                              <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h fs-10">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#!" className="dropdown-item">
View
                                </a>
                                <a href="#!" className="dropdown-item">
Export
                                </a>
                                <div className="dropdown-divider">                                </div>
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
                  <div className="row align-items-center justify-content-between py-2 pe-0 fs-9 pagination-subtle">
                    <div className="col-auto d-flex">
                      <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info>                      </p>
                      <a href="#!" className="fw-semibold"  data-list-view={"*"}>
View all                        <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                        </span>
                      </a>
                      <a href="#!" className="fw-semibold d-none"  data-list-view={"less"}>
View Less                        <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                        </span>
                      </a>
                    </div>
                    <div className="col-auto d-flex">
                      <button className="page-link" data-list-pagination={"prev"}>
                        <span className="fas fa-chevron-left">                        </span>
                      </button>
                      <ul className="mb-0 pagination fs-9">                      </ul>
                      <button className="page-link pe-0" data-list-pagination={"next"}>
                        <span className="fas fa-chevron-right">                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="finStates-tab" role="tabpanel" aria-labelledby="tab-finStates">
            <div className="card">
              <div className="card-body">
                <div className="row g-3 flex-between-center mb-4">
                  <div className="col-auto">
                    <h4>
Apple Income Statement
                    </h4>
                    <p className="text-body-tertiary mb-0">
Financials in millions USD. 
                    </p>
                  </div>
                  <div className="col-auto">
                    <div className="d-flex align-items-center gap-2">
                      <select className="form-select form-select-sm" id="amount" name="amount">
                        <option value="million">
Millions 
                        </option>
                        <option value="billions">
Thousands 
                        </option>
                        <option value="remove">
 hundreds 
                        </option>
                      </select>
                      <select className="form-select form-select-sm" id="time" name="time">
                        <option value="million">
Annual 
                        </option>
                        <option value="semi-annual">
Semi Annual 
                        </option>
                        <option value="quarterly">
 Quarterly 
                        </option>
                      </select>
                      <button className="btn btn-sm btn-phoenix-secondary">
                        <span className="fas fa-download">                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="table-responsive scrollbar">
                  <table className="table border-top border-translucent fs-9 mb-0">
                    <thead>
                      <tr className="text-uppercase"><th className="fw-bold ps-0 py-3" style={{"minWidth":"22rem"} as CSSProperties}>
Breakdown
                        </th>
                        <th className="fw-bold text-center bg-body-highlight py-3" style={{"minWidth":"7.5rem"} as CSSProperties}>
ttm 
                        </th>
                        <th className="fw-bold text-center py-3" style={{"minWidth":"7.5rem"} as CSSProperties}>
2023-12-31
                        </th>
                        <th className="fw-bold text-center bg-body-highlight py-3" style={{"minWidth":"7.5rem"} as CSSProperties}>
2022-12-31
                        </th>
                        <th className="fw-bold text-center py-3" style={{"minWidth":"7.5rem"} as CSSProperties}>
2021-12-31
                        </th>
                        <th className="fw-bold text-center bg-body-highlight py-3" style={{"minWidth":"7.5rem"} as CSSProperties}>
2020-12-31
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-center fw-semibold"><tr>
                        <td className="text-start">
Total Revenue
                        </td>
                        <td className="bg-body-highlight">
5,40,512
                        </td>
                        <td>
5,21,250
                        </td>
                        <td className="bg-body-highlight">
4,55,579
                        </td>
                        <td>
3,93,488
                        </td>
                        <td className="bg-body-highlight">
3,40,199
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start">
Cost of Revenue
                        </td>
                        <td className="bg-body-highlight">
90,010
                        </td>
                        <td>
86,012
                        </td>
                        <td className="bg-body-highlight">
75,221
                        </td>
                        <td>
60,812
                        </td>
                        <td className="bg-body-highlight">
47,164
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start">
Gross Profit
                        </td>
                        <td className="bg-body-highlight">
4,50,502
                        </td>
                        <td>
4,35,238
                        </td>
                        <td className="bg-body-highlight">
3,80,358
                        </td>
                        <td>
3,32,676
                        </td>
                        <td className="bg-body-highlight">
2,93,035
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start fw-bold">
                          <a href="#collapseOperating" className="btn px-0 d-block collapse-indicator py-0" data-bs-toggle={"collapse"}  role="button" aria-expanded="true" aria-controls="collapseOperating">
                            <div className="d-flex align-items-center gap-2">
                              <div className="fs-9 text-body-highlight">
Operating Expenses
                              </div>
                              <span className="fa-solid fa-angle-down toggle-icon text-body-secondary">                              </span>
                            </div>
                          </a>
                        </td>
                        <td className="bg-body-highlight">                        </td>
                        <td>                        </td>
                        <td className="bg-body-highlight">                        </td>
                        <td>                        </td>
                        <td className="bg-body-highlight">                        </td>
                      </tr>
                      <tr>
                        <td className="py-0 border-bottom-0" colSpan={6}>
                          <div className="collapse show" id="collapseOperating">
                            <table className="table mb-0">
                              <tbody>
                                <tr className="bg-primary-subtle"><td className="text-start ps-3 ps-xl-4" style={{"width":"22rem"} as CSSProperties}>
Selling General and Administration
                                  </td>
                                  <td className="bg-body-highlight" style={{"width":"7.5rem"} as CSSProperties}>
33,981
                                  </td>
                                  <td style={{"width":"7.5rem"} as CSSProperties}>
40,445
                                  </td>
                                  <td className="bg-body-highlight" style={{"width":"7.5rem"} as CSSProperties}>
28,598
                                  </td>
                                  <td style={{"width":"7.5rem"} as CSSProperties}>
37,770
                                  </td>
                                  <td className="bg-body-highlight" style={{"width":"7.5rem"} as CSSProperties}>
31,635
                                  </td>
                                </tr>
                                <tr className="fw-bold bg-primary-subtle"><td className="text-start fw-bolder ps-3 ps-xl-4">
Total Operating Expenses
                                  </td>
                                  <td className="bg-body-highlight">
35,464
                                  </td>
                                  <td>
42,712
                                  </td>
                                  <td className="bg-body-highlight">
31,063
                                  </td>
                                  <td>
39,720
                                  </td>
                                  <td className="bg-body-highlight">
33,354
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                      <tr className="fw-bold"><td className="text-start fw-bolder">
Operating Income or Loss
                        </td>
                        <td className="bg-body-highlight">
4,15,038
                        </td>
                        <td>
3,92,526
                        </td>
                        <td className="bg-body-highlight">
3,49,295
                        </td>
                        <td>
2,92,956
                        </td>
                        <td className="bg-body-highlight">
2,59,681
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start">
Interest Expense
                        </td>
                        <td className="bg-body-highlight">
81,305
                        </td>
                        <td>
72,864
                        </td>
                        <td className="bg-body-highlight">
45,183
                        </td>
                        <td>
39,393
                        </td>
                        <td className="bg-body-highlight">
33,610
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start">
Total Other Income/Expenses Net
                        </td>
                        <td className="bg-body-highlight">
-98,893
                        </td>
                        <td>
-1,92,510
                        </td>
                        <td className="bg-body-highlight">
-2,07,796
                        </td>
                        <td>
12,98,095
                        </td>
                        <td className="bg-body-highlight">
2,72,800
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start">
Income Before Tax
                        </td>
                        <td className="bg-body-highlight">
2,36,758
                        </td>
                        <td>
1,25,632
                        </td>
                        <td className="bg-body-highlight">
88,256
                        </td>
                        <td>
1,45,256
                        </td>
                        <td className="bg-body-highlight">
2,45,563
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start">
Income Tax Expense
                        </td>
                        <td className="bg-body-highlight">
7,256
                        </td>
                        <td>
-9,653
                        </td>
                        <td className="bg-body-highlight">
-69,586
                        </td>
                        <td>
2,41,012
                        </td>
                        <td className="bg-body-highlight">
4,25,365
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start">
Income from Continuing Operations
                        </td>
                        <td className="bg-body-highlight">
2,12,356
                        </td>
                        <td>
1,45,258
                        </td>
                        <td className="bg-body-highlight">
25,365
                        </td>
                        <td>
45,362
                        </td>
                        <td className="bg-body-highlight">
4,16,259
                        </td>
                      </tr>
                      <tr className="fw-bold"><td className="text-start fw-bolder">
Net Income
                        </td>
                        <td className="bg-body-highlight">
2,25,653
                        </td>
                        <td>
4,58,693
                        </td>
                        <td className="bg-body-highlight">
1,25,489
                        </td>
                        <td>
5,36,125
                        </td>
                        <td className="bg-body-highlight">
47,852
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start">
Net Income Available to Common
                        </td>
                        <td className="bg-body-highlight">
2,25,235
                        </td>
                        <td>
1,36,665
                        </td>
                        <td className="bg-body-highlight">
1,55,256
                        </td>
                        <td>
1,25,365
                        </td>
                        <td className="bg-body-highlight">
3,65,259
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start">
Basic EPS
                        </td>
                        <td className="bg-body-highlight">
-0.25
                        </td>
                        <td>
2.15
                        </td>
                        <td className="bg-body-highlight">
2.36
                        </td>
                        <td>
20.47
                        </td>
                        <td className="bg-body-highlight">
6.85
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start">
Diluted EPS
                        </td>
                        <td className="bg-body-highlight">
-0.25
                        </td>
                        <td>
2.14
                        </td>
                        <td className="bg-body-highlight">
2.36
                        </td>
                        <td>
20.47
                        </td>
                        <td className="bg-body-highlight">
6.97
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start">
Basic Average Shares
                        </td>
                        <td className="bg-body-highlight">
63,785
                        </td>
                        <td>
63,700
                        </td>
                        <td className="bg-body-highlight">
64,582
                        </td>
                        <td>
64,142
                        </td>
                        <td className="bg-body-highlight">
63,125
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start">
Diluted Average Shares
                        </td>
                        <td className="bg-body-highlight">
63,455
                        </td>
                        <td>
63,900
                        </td>
                        <td className="bg-body-highlight">
65,256
                        </td>
                        <td>
64,400
                        </td>
                        <td className="bg-body-highlight">
61,475
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="forecast-tab" role="tabpanel" aria-labelledby="tab-forecast">
            <div className="row g-3 g-lg-5 flex-between-center mb-4">
              <div className="col-auto">
                <h4>
Economic Prediction
                </h4>
                <p className="text-body-tertiary mb-0">
Brief summary of all projects 
                </p>
              </div>
              <div className="col-auto">
                <div className="d-flex align-items-center gap-2">
                  <select className="form-select form-select-sm" id="forecast-amount" name="amount">
                    <option value="million">
Annual 
                    </option>
                    <option value="billions">
Half Annual 
                    </option>
                    <option value="remove">
 Quarterly 
                    </option>
                  </select>
                  <select className="form-select form-select-sm" id="operations" name="operations">
                    <option value="export">
Export 
                    </option>
                    <option value="view">
View 
                    </option>
                    <option value="remove">
 Remove 
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <div className="row g-0">
                  <div className="col-sm-6 col-xxl-3 pb-4 border-bottom border-bottom-xxl-0 border-end-sm pe-sm-4  py-xxl-0">
                    <h5 className="text-body-highlight mb-3">
Revenue This Year
                    </h5>
                    <div className="row flex-between-center">
                      <div className="col-9 pe-xl-0 order-xxl-1">
                        <h4 className="mb-2">
$185.10B
                        </h4>
                        <div className="d-flex align-items-center gap-2">
                          <h6 className="text-body-tertiary fw-semibold mb-0 text-nowrap">
From 171.84B 
                          </h6>
                          <div className="badge badge-phoenix fs-10 badge-phoenix-success">
7.71%
                            <span className="fas ms-1 text-success-darker fa-chevron-up">                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-3 col-xxl-12 mb-xxl-3 ps-0 ps-xxl-3 d-flex justify-content-end justify-content-xxl-start">
                        <div className="echart-revenue-this-year-chart revenue-this-year-chart">                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xxl-3 border-bottom border-bottom-xxl-0 border-end-xxl ps-sm-4 pe-sm-4 py-4 pe-xl-3 pe-xxl-4 pt-sm-0 pb-xxl-0">
                    <h5 className="text-body-highlight mb-3">
Revenue Next Year
                    </h5>
                    <div className="row flex-between-center">
                      <div className="col-9 pe-xl-0 order-xxl-1">
                        <h4 className="mb-2">
$200.210B
                        </h4>
                        <div className="d-flex align-items-center gap-2">
                          <h6 className="text-body-tertiary fw-semibold mb-0 text-nowrap">
From 185.10B 
                          </h6>
                          <div className="badge badge-phoenix fs-10 badge-phoenix-success">
0.06%
                            <span className="fas ms-1 text-success-darker fa-chevron-up">                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-3 col-xxl-12 mb-xxl-3 ps-0 ps-xxl-3 d-flex justify-content-end justify-content-xxl-start">
                        <div className="echart-revenue-next-year-chart revenue-next-year-chart">                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xxl-3 border-bottom border-bottom-sm-0 border-end-sm pe-sm-4 px-xxl-4 py-4 pb-sm-0 py-xxl-0">
                    <h5 className="text-body-highlight mb-3">
EPS This Year
                    </h5>
                    <div className="row flex-between-center">
                      <div className="col-9 pe-xl-0 order-xxl-1">
                        <h4 className="mb-2">
$10.39
                        </h4>
                        <div className="d-flex align-items-center gap-2">
                          <h6 className="text-body-tertiary fw-semibold mb-0 text-nowrap">
From 7.32 
                          </h6>
                          <div className="badge badge-phoenix fs-10 badge-phoenix-success">
41.95%
                            <span className="fas ms-1 text-success-darker fa-chevron-up">                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-3 col-xxl-12 mb-xxl-3 ps-0 ps-xxl-3 d-flex justify-content-end justify-content-xxl-start">
                        <div className="echart-eps-this-year-chart eps-this-year-chart">                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xxl-3 ps-sm-4 pt-4 pe-sm-4 pt-xxl-0">
                    <h5 className="text-body-highlight mb-3">
EPS Next Year
                    </h5>
                    <div className="row flex-between-center">
                      <div className="col-9 pe-xl-0 order-xxl-1">
                        <h4 className="mb-2">
$8.30
                        </h4>
                        <div className="d-flex align-items-center gap-2">
                          <h6 className="text-body-tertiary fw-semibold mb-0 text-nowrap">
From 10.39 
                          </h6>
                          <div className="badge badge-phoenix fs-10 badge-phoenix-danger">
6.9%
                            <span className="fas ms-1 text-danger-darker fa-chevron-down">                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-3 col-xxl-12 mb-xxl-3 ps-0 ps-xxl-3 d-flex justify-content-end justify-content-xxl-start">
                        <div className="echart-eps-next-year-chart eps-next-year-chart">                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5" id="forecast" data-list={"{\"valueNames\":[\"endingYear\",\"revenue\",\"revenueGrowth\",\"eps\",\"epsGrowth\",\"forwardPE\",\"noAnalysts\"],\"page\":6}"}>
              <div className="table-responsive scrollbar">
                <table className="table fs-9 mb-0 border-top border-translucent">
                  <thead>
                    <tr className="text-uppercase"><th className="white-space-nowrap fs-9 ps-0 align-middle">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" id="checkbox-bulk-forecast-select" type="checkbox" data-bulk-select={"{\"body\":\"table-financial-forecast-body\"}"} />
                        </div>
                      </th>
                      <th className="sort white-space-nowrap align-middle" scope="col" style={{"minWidth":"7.5rem"} as CSSProperties} data-sort={"endingYear"}>
Ending year
                      </th>
                      <th className="sort align-middle" scope="col" data-sort={"revenue"} style={{"minWidth":"7.5rem"} as CSSProperties}>
revenue
                      </th>
                      <th className="sort align-middle" scope="col" data-sort={"revenueGrowth"} style={{"minWidth":"7.5rem"} as CSSProperties}>
revenue growth
                      </th>
                      <th className="sort align-middle ps-5" scope="col" style={{"minWidth":"7.5rem"} as CSSProperties} data-sort={"eps"}>
eps
                      </th>
                      <th className="sort ps-5 align-middle" scope="col" style={{"minWidth":"7.5rem"} as CSSProperties} data-sort={"epsGrowth"}>
eps growth
                      </th>
                      <th className="sort ps-5 align-middle" scope="col" style={{"minWidth":"7.5rem"} as CSSProperties} data-sort={"forwardPE"}>
forward pe
                      </th>
                      <th className="sort ps-5 align-middle" scope="col" style={{"minWidth":"7.5rem"} as CSSProperties} data-sort={"noAnalysts"}>
no. analysts
                      </th>
                      <th className="sort pe-0 align-middle" scope="col" style={{"minWidth":"3rem"} as CSSProperties}>                      </th>
                    </tr>
                  </thead>
                  <tbody className="list" id="table-financial-forecast-body"><tr className="hover-actions-trigger btn-reveal-trigger position-static">
                      <td className="fs-9 align-middle ps-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"endingYear\":\"Sep 28, 2019\",\"revenue\":\"$137.24B\",\"revenueGrowth\":\"-2.04\",\"eps\":\"4.57\",\"epsGrowth\":\"-0.34\",\"forwardPE\":\"N/A\",\"noAnalysts\":\"N/A\",\"revenueGrownDirection\":false,\"epsGrowthDirection\":false}"} />
                        </div>
                      </td>
                      <td className="align-middle endingYear white-space-nowrap">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Sep 28, 2019
                        </p>
                      </td>
                      <td className="align-middle revenue white-space-nowrap">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
$$137.24B
                        </p>
                      </td>
                      <td className="align-middle revenueGrowth">
                        <p className="fs-9 fw-semibold mb-0 text-danger-dark">
-2.04
                        </p>
                      </td>
                      <td className="align-middle eps ps-5">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
4.57
                        </p>
                      </td>
                      <td className="align-middle epsGrowth white-space-nowrap ps-5">
                        <p className="fs-9 fw-semibold mb-0 text-danger-dark">
-0.34
                        </p>
                      </td>
                      <td className="align-middle forwardPE ps-5">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
N/A
                        </p>
                      </td>
                      <td className="align-middle noANalysts ps-5">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
N/A
                        </p>
                      </td>
                      <td className="align-middle white-space-nowrap pe-0">
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
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"endingYear\":\"Sep 26, 2020\",\"revenue\":\"$122.49B\",\"revenueGrowth\":\"5.51\",\"eps\":\"4.33\",\"epsGrowth\":\"10.44\",\"forwardPE\":\"N/A\",\"noAnalysts\":\"N/A\",\"revenueGrownDirection\":true,\"epsGrowthDirection\":true}"} />
                        </div>
                      </td>
                      <td className="align-middle endingYear white-space-nowrap">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Sep 26, 2020
                        </p>
                      </td>
                      <td className="align-middle revenue white-space-nowrap">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
$$122.49B
                        </p>
                      </td>
                      <td className="align-middle revenueGrowth">
                        <p className="fs-9 fw-semibold mb-0 text-success-dark">
5.51
                        </p>
                      </td>
                      <td className="align-middle eps ps-5">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
4.33
                        </p>
                      </td>
                      <td className="align-middle epsGrowth white-space-nowrap ps-5">
                        <p className="fs-9 fw-semibold mb-0 text-success-dark">
10.44
                        </p>
                      </td>
                      <td className="align-middle forwardPE ps-5">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
N/A
                        </p>
                      </td>
                      <td className="align-middle noANalysts ps-5">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
N/A
                        </p>
                      </td>
                      <td className="align-middle white-space-nowrap pe-0">
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
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"endingYear\":\"Sep 25, 2021\",\"revenue\":\"$127.00B\",\"revenueGrowth\":\"33.26\",\"eps\":\"6.70\",\"epsGrowth\":\"71.04\",\"forwardPE\":\"N/A\",\"noAnalysts\":\"N/A\",\"revenueGrownDirection\":true,\"epsGrowthDirection\":true}"} />
                        </div>
                      </td>
                      <td className="align-middle endingYear white-space-nowrap">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Sep 25, 2021
                        </p>
                      </td>
                      <td className="align-middle revenue white-space-nowrap">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
$$127.00B
                        </p>
                      </td>
                      <td className="align-middle revenueGrowth">
                        <p className="fs-9 fw-semibold mb-0 text-success-dark">
33.26
                        </p>
                      </td>
                      <td className="align-middle eps ps-5">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
6.70
                        </p>
                      </td>
                      <td className="align-middle epsGrowth white-space-nowrap ps-5">
                        <p className="fs-9 fw-semibold mb-0 text-success-dark">
71.04
                        </p>
                      </td>
                      <td className="align-middle forwardPE ps-5">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
N/A
                        </p>
                      </td>
                      <td className="align-middle noANalysts ps-5">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
N/A
                        </p>
                      </td>
                      <td className="align-middle white-space-nowrap pe-0">
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
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"endingYear\":\"Sep 24, 2022\",\"revenue\":\"$156.74B\",\"revenueGrowth\":\"7.79\",\"eps\":\"6.13\",\"epsGrowth\":\"8.91\",\"forwardPE\":\"N/A\",\"noAnalysts\":\"N/A\",\"revenueGrownDirection\":true,\"epsGrowthDirection\":true}"} />
                        </div>
                      </td>
                      <td className="align-middle endingYear white-space-nowrap">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Sep 24, 2022
                        </p>
                      </td>
                      <td className="align-middle revenue white-space-nowrap">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
$$156.74B
                        </p>
                      </td>
                      <td className="align-middle revenueGrowth">
                        <p className="fs-9 fw-semibold mb-0 text-success-dark">
7.79
                        </p>
                      </td>
                      <td className="align-middle eps ps-5">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
6.13
                        </p>
                      </td>
                      <td className="align-middle epsGrowth white-space-nowrap ps-5">
                        <p className="fs-9 fw-semibold mb-0 text-success-dark">
8.91
                        </p>
                      </td>
                      <td className="align-middle forwardPE ps-5">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
N/A
                        </p>
                      </td>
                      <td className="align-middle noANalysts ps-5">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
N/A
                        </p>
                      </td>
                      <td className="align-middle white-space-nowrap pe-0">
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
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"endingYear\":\"Sep 30, 2023\",\"revenue\":\"$171.84B\",\"revenueGrowth\":\"-2.80\",\"eps\":\"7.32\",\"epsGrowth\":\"0.33\",\"forwardPE\":\"N/A\",\"noAnalysts\":\"N/A\",\"revenueGrownDirection\":false,\"epsGrowthDirection\":true}"} />
                        </div>
                      </td>
                      <td className="align-middle endingYear white-space-nowrap">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Sep 30, 2023
                        </p>
                      </td>
                      <td className="align-middle revenue white-space-nowrap">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
$$171.84B
                        </p>
                      </td>
                      <td className="align-middle revenueGrowth">
                        <p className="fs-9 fw-semibold mb-0 text-danger-dark">
-2.80
                        </p>
                      </td>
                      <td className="align-middle eps ps-5">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
7.32
                        </p>
                      </td>
                      <td className="align-middle epsGrowth white-space-nowrap ps-5">
                        <p className="fs-9 fw-semibold mb-0 text-success-dark">
0.33
                        </p>
                      </td>
                      <td className="align-middle forwardPE ps-5">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
N/A
                        </p>
                      </td>
                      <td className="align-middle noANalysts ps-5">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
N/A
                        </p>
                      </td>
                      <td className="align-middle white-space-nowrap pe-0">
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
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"endingYear\":\"Sep 30, 2024\",\"revenue\":\"$185.10B\",\"revenueGrowth\":\"3.86\",\"eps\":\"10.39\",\"epsGrowth\":\"11.54\",\"forwardPE\":\"N/A\",\"noAnalysts\":\"N/A\",\"revenueGrownDirection\":true,\"epsGrowthDirection\":true}"} />
                        </div>
                      </td>
                      <td className="align-middle endingYear white-space-nowrap">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Sep 30, 2024
                        </p>
                      </td>
                      <td className="align-middle revenue white-space-nowrap">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
$$185.10B
                        </p>
                      </td>
                      <td className="align-middle revenueGrowth">
                        <p className="fs-9 fw-semibold mb-0 text-success-dark">
3.86
                        </p>
                      </td>
                      <td className="align-middle eps ps-5">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
10.39
                        </p>
                      </td>
                      <td className="align-middle epsGrowth white-space-nowrap ps-5">
                        <p className="fs-9 fw-semibold mb-0 text-success-dark">
11.54
                        </p>
                      </td>
                      <td className="align-middle forwardPE ps-5">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
N/A
                        </p>
                      </td>
                      <td className="align-middle noANalysts ps-5">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
N/A
                        </p>
                      </td>
                      <td className="align-middle white-space-nowrap pe-0">
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
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"endingYear\":\"Sep 30, 2025\",\"revenue\":\"$185.20B\",\"revenueGrowth\":\"7.96\",\"eps\":\"10.30\",\"epsGrowth\":\"11.55\",\"forwardPE\":\"32.54\",\"noAnalysts\":\"46\",\"revenueGrownDirection\":true,\"epsGrowthDirection\":true}"} />
                        </div>
                      </td>
                      <td className="align-middle endingYear white-space-nowrap">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Sep 30, 2025
                        </p>
                      </td>
                      <td className="align-middle revenue white-space-nowrap">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
$$185.20B
                        </p>
                      </td>
                      <td className="align-middle revenueGrowth">
                        <p className="fs-9 fw-semibold mb-0 text-success-dark">
7.96
                        </p>
                      </td>
                      <td className="align-middle eps ps-5">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
10.30
                        </p>
                      </td>
                      <td className="align-middle epsGrowth white-space-nowrap ps-5">
                        <p className="fs-9 fw-semibold mb-0 text-success-dark">
11.55
                        </p>
                      </td>
                      <td className="align-middle forwardPE ps-5">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
32.54
                        </p>
                      </td>
                      <td className="align-middle noANalysts ps-5">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
46
                        </p>
                      </td>
                      <td className="align-middle white-space-nowrap pe-0">
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
            </div>
            <div className="row g-3 g-lg-5 mb-5">
              <div className="col-xxl-6">
                <div className="row g-3 g-lg-5 flex-between-center">
                  <div className="col-auto">
                    <h4>
Forecast of Revenue
                    </h4>
                    <p className="mb-0">
Understanding Dividend Income Basics
                    </p>
                  </div>
                  <div className="col-auto">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal btn-phoenix-secondary" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-10">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
View
                        </a>
                        <a href="#!" className="dropdown-item">
Export
                        </a>
                        <div className="dropdown-divider">                        </div>
                        <a href="#!" className="dropdown-item text-danger">
Remove
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="echart-forecast-of-revenue-chart" style={{"minHeight":"300px"} as CSSProperties}>                </div>
              </div>
              <div className="col-xxl-6">
                <div className="row g-3 g-lg-5 flex-between-center">
                  <div className="col-auto">
                    <h4>
Growth in Revenue
                    </h4>
                    <p className="mb-0">
{"No. of bookings fulfilled & cancelled"}
                    </p>
                  </div>
                  <div className="col-auto">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal btn-phoenix-secondary" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-10">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
View
                        </a>
                        <a href="#!" className="dropdown-item">
Export
                        </a>
                        <div className="dropdown-divider">                        </div>
                        <a href="#!" className="dropdown-item text-danger">
Remove
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="echart-growth-in-revenue-chart" style={{"minHeight":"300px"} as CSSProperties}>                </div>
              </div>
            </div>
            <div className="row g-3 g-lg-5 flex-between-center mb-5">
              <div className="col-auto">
                <h4>
Most Recent Forecast
                </h4>
                <p className="mb-0">
Brief summary of all projects
                </p>
              </div>
              <div className="col-auto">
                <div className="d-flex align-items-center gap-2">
                  <select className="form-select form-select-sm" id="recent-forecast-amount" name="amount">
                    <option value="million">
Annual 
                    </option>
                    <option value="billions">
Half Annual 
                    </option>
                    <option value="remove">
 Quarterly
                    </option>
                  </select>
                  <button className="btn px-3 btn-phoenix-primary d-flex align-items-center gap-2">
                    <span className="fa-solid fa-filter" data-fa-transform={"up-1"}>                    </span>
                    <span className="d-none d-sm-inline">
Filter
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div id="mostRecentForecast" data-list={"{\"valueNames\":[\"analyst\",\"rating\",\"status\",\"action\",\"priceTarget\",\"upside\",\"date\"],\"page\":10,\"pagination\":true}"}>
              <div className="table-responsive scrollbar">
                <table className="table fs-9 mb-0 border-top border-translucent">
                  <thead>
                    <tr className="text-uppercase"><th className="white-space-nowrap fs-9 ps-0 align-middle">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" id="checkbox-bulk-most-recent-forecast-select" type="checkbox" data-bulk-select={"{\"body\":\"table-most-recent-forecast-body\"}"} />
                        </div>
                      </th>
                      <th className="sort white-space-nowrap align-middle" scope="col" style={{"minWidth":"13.75rem"} as CSSProperties} data-sort={"analyst"}>
Analyst
                      </th>
                      <th className="sort align-middle ps-3" scope="col" data-sort={"rating"} style={{"minWidth":"7.5rem"} as CSSProperties}>
rating
                      </th>
                      <th className="sort align-middle ps-3" scope="col" data-sort={"status"} style={{"minWidth":"7.5rem"} as CSSProperties}>
status
                      </th>
                      <th className="sort align-middle" scope="col" style={{"minWidth":"11.25rem"} as CSSProperties} data-sort={"action"}>
action
                      </th>
                      <th className="sort align-middle" scope="col" style={{"minWidth":"10rem"} as CSSProperties} data-sort={"priceTarget"}>
price target
                      </th>
                      <th className="sort align-middle" scope="col" style={{"minWidth":"9rem"} as CSSProperties} data-sort={"upside"}>
upside
                      </th>
                      <th className="sort align-middle text-end pe-3" scope="col" style={{"minWidth":"9rem"} as CSSProperties} data-sort={"date"}>
date
                      </th>
                      <th className="sort pe-0 align-middle" scope="col" style={{"minWidth":"3.6rem"} as CSSProperties}>                      </th>
                    </tr>
                  </thead>
                  <tbody className="list" id="table-most-recent-forecast-body"><tr className="hover-actions-trigger btn-reveal-trigger position-static">
                      <td className="fs-9 align-middle ps-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"name\":\"JSmith\",\"avatar\":\"/team/3.webp\"},\"rating\":3,\"status\":{\"title\":\"Hold\",\"badge\":\"secondary\"},\"action\":\"Downgrades\",\"priceTarget\":\"65.00\",\"upside\":\"17.36\",\"date\":\"Nov 06, 2022\"}"} />
                        </div>
                      </td>
                      <td className="align-middle analyst white-space-nowrap">
                        <a href="#!" className="d-flex align-items-center text-body">
                          <div className="avatar avatar-m">
                            <PhoenixImage src="/assets/img/team/3.webp" alt="" className="rounded-circle" />
                          </div>                          <h6 className="mb-0 ms-2">
JSmith
                          </h6>
                        </a>
                      </td>
                      <td className="align-middle rating white-space-nowrap ps-3">
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                        </span>
                        <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                        </span>
                      </td>
                      <td className="align-middle status ps-3">
                        <div className="badge badge-phoenix fs-10 badge-phoenix-secondary">
                          <span className="badge-label">
Hold
                          </span>
                        </div>
                      </td>
                      <td className="align-middle action">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Downgrades
                        </p>
                      </td>
                      <td className="align-middle priceTarget white-space-nowrap">
                        <p className="fs-9 fw-semibold mb-0">
$65.00
                        </p>
                      </td>
                      <td className="align-middle upside">
                        <div className="badge badge-phoenix badge-phoenix-secondary fs-10">
17.36%
                        </div>
                      </td>
                      <td className="align-middle date pe-3 text-end">
                        <div className="d-flex align-items-center justify-content-end gap-2">
                          <span className="uil uil-calender fs-8">                          </span>
                          <h6 className="fw-semibold mb-0">
Nov 06, 2022
                          </h6>
                        </div>
                      </td>
                      <td className="align-middle white-space-nowrap pe-0">
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
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"name\":\"Alex\",\"avatar\":\"/team/35.webp\"},\"rating\":4,\"status\":{\"title\":\"Buy\",\"badge\":\"success\"},\"action\":\"Reiterates\",\"priceTarget\":\"87.00\",\"upside\":\"+5.25\",\"date\":\"Nov 06, 2022\"}"} />
                        </div>
                      </td>
                      <td className="align-middle analyst white-space-nowrap">
                        <a href="#!" className="d-flex align-items-center text-body">
                          <div className="avatar avatar-m">
                            <PhoenixImage src="/assets/img/team/35.webp" alt="" className="rounded-circle" />
                          </div>                          <h6 className="mb-0 ms-2">
Alex
                          </h6>
                        </a>
                      </td>
                      <td className="align-middle rating white-space-nowrap ps-3">
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                        </span>
                      </td>
                      <td className="align-middle status ps-3">
                        <div className="badge badge-phoenix fs-10 badge-phoenix-success">
                          <span className="badge-label">
Buy
                          </span>
                        </div>
                      </td>
                      <td className="align-middle action">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Reiterates
                        </p>
                      </td>
                      <td className="align-middle priceTarget white-space-nowrap">
                        <p className="fs-9 fw-semibold mb-0">
$87.00
                        </p>
                      </td>
                      <td className="align-middle upside">
                        <div className="badge badge-phoenix badge-phoenix-secondary fs-10">
+5.25%
                        </div>
                      </td>
                      <td className="align-middle date pe-3 text-end">
                        <div className="d-flex align-items-center justify-content-end gap-2">
                          <span className="uil uil-calender fs-8">                          </span>
                          <h6 className="fw-semibold mb-0">
Nov 06, 2022
                          </h6>
                        </div>
                      </td>
                      <td className="align-middle white-space-nowrap pe-0">
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
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"name\":\"Amy\",\"avatar\":\"/team/57.webp\"},\"rating\":2,\"status\":{\"title\":\"Buy\",\"badge\":\"success\"},\"action\":\"Maintains\",\"priceTarget\":\"54.00\",\"upside\":\"54.73\",\"date\":\"Nov 06, 2022\"}"} />
                        </div>
                      </td>
                      <td className="align-middle analyst white-space-nowrap">
                        <a href="#!" className="d-flex align-items-center text-body">
                          <div className="avatar avatar-m">
                            <PhoenixImage src="/assets/img/team/57.webp" alt="" className="rounded-circle" />
                          </div>                          <h6 className="mb-0 ms-2">
Amy
                          </h6>
                        </a>
                      </td>
                      <td className="align-middle rating white-space-nowrap ps-3">
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                        </span>
                        <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                        </span>
                        <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                        </span>
                      </td>
                      <td className="align-middle status ps-3">
                        <div className="badge badge-phoenix fs-10 badge-phoenix-success">
                          <span className="badge-label">
Buy
                          </span>
                        </div>
                      </td>
                      <td className="align-middle action">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Maintains
                        </p>
                      </td>
                      <td className="align-middle priceTarget white-space-nowrap">
                        <p className="fs-9 fw-semibold mb-0">
$54.00
                        </p>
                      </td>
                      <td className="align-middle upside">
                        <div className="badge badge-phoenix badge-phoenix-secondary fs-10">
54.73%
                        </div>
                      </td>
                      <td className="align-middle date pe-3 text-end">
                        <div className="d-flex align-items-center justify-content-end gap-2">
                          <span className="uil uil-calender fs-8">                          </span>
                          <h6 className="fw-semibold mb-0">
Nov 06, 2022
                          </h6>
                        </div>
                      </td>
                      <td className="align-middle white-space-nowrap pe-0">
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
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"name\":\"Michael\",\"avatar\":\"/team/5.webp\"},\"rating\":5,\"status\":{\"title\":\"Sell\",\"badge\":\"danger\"},\"action\":\"Maintains\",\"priceTarget\":\"35.00\",\"upside\":\"8.51\",\"date\":\"Nov 06, 2022\"}"} />
                        </div>
                      </td>
                      <td className="align-middle analyst white-space-nowrap">
                        <a href="#!" className="d-flex align-items-center text-body">
                          <div className="avatar avatar-m">
                            <PhoenixImage src="/assets/img/team/5.webp" alt="" className="rounded-circle" />
                          </div>                          <h6 className="mb-0 ms-2">
Michael
                          </h6>
                        </a>
                      </td>
                      <td className="align-middle rating white-space-nowrap ps-3">
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                      </td>
                      <td className="align-middle status ps-3">
                        <div className="badge badge-phoenix fs-10 badge-phoenix-danger">
                          <span className="badge-label">
Sell
                          </span>
                        </div>
                      </td>
                      <td className="align-middle action">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Maintains
                        </p>
                      </td>
                      <td className="align-middle priceTarget white-space-nowrap">
                        <p className="fs-9 fw-semibold mb-0">
$35.00
                        </p>
                      </td>
                      <td className="align-middle upside">
                        <div className="badge badge-phoenix badge-phoenix-secondary fs-10">
8.51%
                        </div>
                      </td>
                      <td className="align-middle date pe-3 text-end">
                        <div className="d-flex align-items-center justify-content-end gap-2">
                          <span className="uil uil-calender fs-8">                          </span>
                          <h6 className="fw-semibold mb-0">
Nov 06, 2022
                          </h6>
                        </div>
                      </td>
                      <td className="align-middle white-space-nowrap pe-0">
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
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"name\":\"Sophia\",\"avatar\":\"/team/34.webp\"},\"rating\":2,\"status\":{\"title\":\"Sell\",\"badge\":\"danger\"},\"action\":\"Downgrades\",\"priceTarget\":\"46.00\",\"upside\":\"22.09\",\"date\":\"Nov 06, 2022\"}"} />
                        </div>
                      </td>
                      <td className="align-middle analyst white-space-nowrap">
                        <a href="#!" className="d-flex align-items-center text-body">
                          <div className="avatar avatar-m">
                            <PhoenixImage src="/assets/img/team/34.webp" alt="" className="rounded-circle" />
                          </div>                          <h6 className="mb-0 ms-2">
Sophia
                          </h6>
                        </a>
                      </td>
                      <td className="align-middle rating white-space-nowrap ps-3">
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                        </span>
                        <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                        </span>
                        <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                        </span>
                      </td>
                      <td className="align-middle status ps-3">
                        <div className="badge badge-phoenix fs-10 badge-phoenix-danger">
                          <span className="badge-label">
Sell
                          </span>
                        </div>
                      </td>
                      <td className="align-middle action">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Downgrades
                        </p>
                      </td>
                      <td className="align-middle priceTarget white-space-nowrap">
                        <p className="fs-9 fw-semibold mb-0">
$46.00
                        </p>
                      </td>
                      <td className="align-middle upside">
                        <div className="badge badge-phoenix badge-phoenix-secondary fs-10">
22.09%
                        </div>
                      </td>
                      <td className="align-middle date pe-3 text-end">
                        <div className="d-flex align-items-center justify-content-end gap-2">
                          <span className="uil uil-calender fs-8">                          </span>
                          <h6 className="fw-semibold mb-0">
Nov 06, 2022
                          </h6>
                        </div>
                      </td>
                      <td className="align-middle white-space-nowrap pe-0">
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
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"name\":\"Emma Brown\",\"avatar\":\"/team/avatar.webp\",\"avatarPlaceholder\":true},\"rating\":2,\"status\":{\"title\":\"Buy\",\"badge\":\"success\"},\"action\":\"Maintains\",\"priceTarget\":\"60.00\",\"upside\":\"+32.98\",\"date\":\"Nov 06, 2022\"}"} />
                        </div>
                      </td>
                      <td className="align-middle analyst white-space-nowrap">
                        <a href="#!" className="d-flex align-items-center text-body">
                          <div className="avatar avatar-m">
                            <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                          </div>                          <h6 className="mb-0 ms-2">
Emma Brown
                          </h6>
                        </a>
                      </td>
                      <td className="align-middle rating white-space-nowrap ps-3">
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                        </span>
                        <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                        </span>
                        <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                        </span>
                      </td>
                      <td className="align-middle status ps-3">
                        <div className="badge badge-phoenix fs-10 badge-phoenix-success">
                          <span className="badge-label">
Buy
                          </span>
                        </div>
                      </td>
                      <td className="align-middle action">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Maintains
                        </p>
                      </td>
                      <td className="align-middle priceTarget white-space-nowrap">
                        <p className="fs-9 fw-semibold mb-0">
$60.00
                        </p>
                      </td>
                      <td className="align-middle upside">
                        <div className="badge badge-phoenix badge-phoenix-secondary fs-10">
+32.98%
                        </div>
                      </td>
                      <td className="align-middle date pe-3 text-end">
                        <div className="d-flex align-items-center justify-content-end gap-2">
                          <span className="uil uil-calender fs-8">                          </span>
                          <h6 className="fw-semibold mb-0">
Nov 06, 2022
                          </h6>
                        </div>
                      </td>
                      <td className="align-middle white-space-nowrap pe-0">
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
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                        <div className="form-check mb-0 fs-8">
                          <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"name\":\"Olivia\",\"avatar\":\"/team/8.webp\"},\"rating\":4,\"status\":{\"title\":\"Buy\",\"badge\":\"success\"},\"action\":\"Reiterates\",\"priceTarget\":\"58.00\",\"upside\":\"+2.20%\",\"date\":\"Nov 06, 2022\"}"} />
                        </div>
                      </td>
                      <td className="align-middle analyst white-space-nowrap">
                        <a href="#!" className="d-flex align-items-center text-body">
                          <div className="avatar avatar-m">
                            <PhoenixImage src="/assets/img/team/8.webp" alt="" className="rounded-circle" />
                          </div>                          <h6 className="mb-0 ms-2">
Olivia
                          </h6>
                        </a>
                      </td>
                      <td className="align-middle rating white-space-nowrap ps-3">
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                        </span>
                      </td>
                      <td className="align-middle status ps-3">
                        <div className="badge badge-phoenix fs-10 badge-phoenix-success">
                          <span className="badge-label">
Buy
                          </span>
                        </div>
                      </td>
                      <td className="align-middle action">
                        <p className="fs-9 fw-semibold text-body-emphasis mb-0">
Reiterates
                        </p>
                      </td>
                      <td className="align-middle priceTarget white-space-nowrap">
                        <p className="fs-9 fw-semibold mb-0">
$58.00
                        </p>
                      </td>
                      <td className="align-middle upside">
                        <div className="badge badge-phoenix badge-phoenix-secondary fs-10">
+2.20%%
                        </div>
                      </td>
                      <td className="align-middle date pe-3 text-end">
                        <div className="d-flex align-items-center justify-content-end gap-2">
                          <span className="uil uil-calender fs-8">                          </span>
                          <h6 className="fw-semibold mb-0">
Nov 06, 2022
                          </h6>
                        </div>
                      </td>
                      <td className="align-middle white-space-nowrap pe-0">
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
              <div className="d-flex flex-end-center py-1 fs-9 pagination-subtle">
                <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info>                </p>
                <a href="#!" className="fw-semibold"  data-list-view={"*"}>
View all                  <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                  </span>
                </a>
                <a href="#!" className="fw-semibold d-none"  data-list-view={"less"}>
View Less                  <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                  </span>
                </a>
                <div className="d-flex ms-4">
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
          <div className="tab-pane fade" id="news-tab" role="tabpanel" aria-labelledby="tab-news">
            <div className="row g-3 g-lg-5 flex-between-center">
              <div className="col-auto">
                <h4 className="fw-bolder">
Apple Stock News
                </h4>
                <p className="mb-0 text-body-tertiary">
Brief summary of all projects 
                </p>
              </div>
              <div className="col-auto">
                <div className="d-flex align-items-center gap-2">
                  <select className="form-select form-select-sm" id="news-filter" name="news-filter" style={{"maxWidth":"140px"} as CSSProperties}>
                    <option value="all">
All News 
                    </option>
                    <option value="orcl">
Orcl News
                    </option>
                    <option value="AAPL">
AAPL News
                    </option>
                  </select>
                  <div className="search-box w-100">
                    <form className="position-relative">
                      <input className="form-control search-input search" type="search" placeholder="Search news" aria-label="Search" />
                      <span className="fas fa-search search-box-icon">                      </span>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row g-4 mb-4">
                  <div className="col-12 col-xxl-6">
                    <div className="card overflow-hidden h-xxl-100" style={{"maxHeight":"390px"} as CSSProperties}>
                      <PhoenixImage src="/assets/img/stock/news/10.png" alt="" className="card-img-top h-xxl-100" />
                      <div className="card-img-overlay d-flex align-items-end stock-news-tab backdrop-faded">
                        <div className="text-white">
                          <h4 className="text-white mb-2 line-clamp-1">
Apple (AAPL) Requires a 'Glowtime' Event to Ignite a Company-Wide Catalyst
                          </h4>
                          <p className="fs-9 text-white line-clamp-4">
The headline "Apple (AAPL) Needs 'Glowtime' Event to Spark Company Catalyst" suggests that Apple Inc. (stock ticker AAPL) requires a significant and impactful....
                          </p>
                          <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                            <div className="d-flex align-items-center">
                              <span className="uil uil-calendar-alt fs-10">                              </span>
                              <p className="mb-0 fs-10 text-white ms-1">
2 hours ago
                              </p>
                            </div>
                            <ul className="fs-10 ps-3 mb-0">
                              <li>
The Business Standard
                              </li>
                            </ul>
                          </div>
                          <div className="d-flex align-items gap-2">
                            <a href="#!" className="px-2 py-1 bg-primary-subtle rounded fs-10 fw-bold text-body-highlight mb-0 text-uppercase lh-sm">
orcl
                            </a>
                            <a href="#!" className="px-2 py-1 bg-primary-subtle rounded fs-10 fw-bold text-body-highlight mb-0 text-uppercase lh-sm">
AAPL
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xxl-6">
                    <div className="row g-0 mb-4">
                      <div className="col-12 col-sm-4">
                        <PhoenixImage src="/assets/img/stock/news/1.png" alt="" className="h-100 w-100 rounded-start-0 rounded-top rounded-top-sm-0 rounded-start-sm" />
                      </div>
                      <div className="col-12 col-sm-8">
                        <div className="card rounded-0 rounded-end-sm h-100">
                          <div className="card-body">
                            <h4 className="mb-2 line-clamp-1">
Here's How Investing $100 a Month Plus Your Tax refers....
                            </h4>
                            <p className="fs-9 text-body-secondary line-clamp-2">
Here's How Investing $100 a Month Plus Your Tax refers to a financial strategy that involves regularly investing $100 per month along with any tax refunds or deductions to maximize long-term growth through compound interest and market returns.
                            </p>
                            <div className="d-flex flex-wrap align-items-center gap-2 mb-3 text-body-quaternary">
                              <div className="d-flex align-items-center">
                                <span className="uil uil-calendar-alt fs-10">                                </span>
                                <p className="mb-0 fs-10 ms-1">
2 hours ago
                                </p>
                              </div>
                              <ul className="fs-10 ps-3 mb-0">
                                <li>
The Economic Time
                                </li>
                              </ul>
                            </div>
                            <div className="d-flex align-items gap-2">
                              <a href="#!" className="fs-10 fw-bold px-2 py-1 bg-primary-subtle rounded text-body-highlight mb-0 text-uppercase lh-sm">
orcl
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row g-0">
                      <div className="col-12 col-sm-4">
                        <PhoenixImage src="/assets/img/stock/news/2.png" alt="" className="h-100 w-100 rounded-start-sm rounded-top rounded-top-sm-0" />
                      </div>
                      <div className="col-12 col-sm-8">
                        <div className="card rounded-0 rounded-end-sm h-100">
                          <div className="card-body">
                            <h4 className="mb-2 line-clamp-1">
According to FT, Arm's semiconductor technology refers....
                            </h4>
                            <p className="fs-9 text-body-secondary line-clamp-2">
According to FT, Arm's Semiconductor Technology refers to a report or analysis by the Financial Times (FT) regarding Arm's advancements, market impact, and strategic developments in the semiconductor industry.
                            </p>
                            <div className="d-flex flex-wrap align-items-center gap-2 mb-3 text-body-quaternary">
                              <div className="d-flex align-items-center">
                                <span className="uil uil-calendar-alt fs-10">                                </span>
                                <p className="mb-0 fs-10 ms-1">
3 hours ago
                                </p>
                              </div>
                              <ul className="fs-10 ps-3 mb-0">
                                <li>
The Business Standard
                                </li>
                              </ul>
                            </div>
                            <div className="d-flex align-items gap-2">
                              <a href="#!" className="fs-10 fw-bold px-2 py-1 bg-primary-subtle rounded text-body-highlight mb-0 text-uppercase lh-sm">
arm's
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row g-4">
                  <div className="col-12 col-sm-6 col-xxl-4">
                    <div className="card h-100">
                      <PhoenixImage src="/assets/img/stock/news/3.png" alt="image" className="card-img-top" />
                      <div className="card-body">
                        <h4 className="mb-2 line-clamp-1">
Apple: Buy, Sell, or Hold?
                        </h4>
                        <p className="fs-9 text-body-secondary line-clamp-2">
Investors are prompted to assess whether they should buy more shares of Apple (indicating confidence in future growth) or hold their current positions based on market trends, financial performance, and long-term potential.
                        </p>
                        <div className="d-flex flex-wrap align-items-center gap-2 mb-3 text-body-quaternary">
                          <div className="d-flex align-items-center">
                            <span className="uil uil-calendar-alt fs-10">                            </span>
                            <p className="mb-0 fs-10 ms-1">
8 hours ago
                            </p>
                          </div>
                          <ul className="fs-10 ps-3 mb-0">
                            <li>
Mint
                            </li>
                          </ul>
                        </div>
                        <div className="d-flex align-items gap-2">
                          <a href="#!" className="fs-10 fw-bold px-2 py-1 bg-primary-subtle rounded text-body-highlight mb-0 text-uppercase lh-sm">
AAPL
                          </a>
                          <a href="#!" className="fs-10 fw-bold px-2 py-1 bg-primary-subtle rounded text-body-highlight mb-0 text-uppercase lh-sm">
buy
                          </a>
                          <a href="#!" className="fs-10 fw-bold px-2 py-1 bg-primary-subtle rounded text-body-highlight mb-0 text-uppercase lh-sm">
sell
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-xxl-4">
                    <div className="card h-100">
                      <PhoenixImage src="/assets/img/stock/news/4.png" alt="image" className="card-img-top" />
                      <div className="card-body">
                        <h4 className="mb-2 line-clamp-1">
Guru Fundamental Report for AAPL
                        </h4>
                        <p className="fs-9 text-body-secondary line-clamp-2">
This type of report typically evaluates key financial metrics such as earnings, revenue growth, profit margins, and market trends to provide insights into a company's overall performance and future outlook.
                        </p>
                        <div className="d-flex flex-wrap align-items-center gap-2 mb-3 text-body-quaternary">
                          <div className="d-flex align-items-center">
                            <span className="uil uil-calendar-alt fs-10">                            </span>
                            <p className="mb-0 fs-10 ms-1">
9 hours ago
                            </p>
                          </div>
                          <ul className="fs-10 ps-3 mb-0">
                            <li>
The Financial Express
                            </li>
                          </ul>
                        </div>
                        <div className="d-flex align-items gap-2">
                          <a href="#!" className="fs-10 fw-bold px-2 py-1 bg-primary-subtle rounded text-body-highlight mb-0 text-uppercase lh-sm">
orcl
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-xxl-4">
                    <div className="card h-100">
                      <PhoenixImage src="/assets/img/stock/news/5.png" alt="image" className="card-img-top" />
                      <div className="card-body">
                        <h4 className="mb-2 line-clamp-1">
Berkshire Hathaway Holds Bank of America, American Express
                        </h4>
                        <p className="fs-9 text-body-secondary line-clamp-2">
Berkshire Hathaway, the multinational conglomerate led by Warren Buffett, continues to maintain significant investments in various industries, demonstrating a long-term value-driven approach to wealth accumulation.
                        </p>
                        <div className="d-flex flex-wrap align-items-center gap-2 mb-3 text-body-quaternary">
                          <div className="d-flex align-items-center">
                            <span className="uil uil-calendar-alt fs-10">                            </span>
                            <p className="mb-0 fs-10 ms-1">
11 hours ago
                            </p>
                          </div>
                          <ul className="fs-10 ps-3 mb-0">
                            <li>
Business Line
                            </li>
                          </ul>
                        </div>
                        <div className="d-flex align-items gap-2">                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-xxl-4">
                    <div className="card h-100">
                      <PhoenixImage src="/assets/img/stock/news/6.png" alt="image" className="card-img-top" />
                      <div className="card-body">
                        <h4 className="mb-2 line-clamp-1">
Is Apple Stock a Buy Now?
                        </h4>
                        <p className="fs-9 text-body-secondary line-clamp-2">
It suggests an analysis of Apple's recent performance, market conditions, and potential future growth to determine whether investing in the company remains a profitable opportunity for investors.
                        </p>
                        <div className="d-flex flex-wrap align-items-center gap-2 mb-3 text-body-quaternary">
                          <div className="d-flex align-items-center">
                            <span className="uil uil-calendar-alt fs-10">                            </span>
                            <p className="mb-0 fs-10 ms-1">
14 hours ago
                            </p>
                          </div>
                          <ul className="fs-10 ps-3 mb-0">
                            <li>
The Business Standard
                            </li>
                          </ul>
                        </div>
                        <div className="d-flex align-items gap-2">                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-xxl-4">
                    <div className="card h-100">
                      <PhoenixImage src="/assets/img/stock/news/7.png" alt="image" className="card-img-top" />
                      <div className="card-body">
                        <h4 className="mb-2 line-clamp-1">
40.5% of Warren Buffett's $312 Billion Berkshire Hathaway
                        </h4>
                        <p className="fs-9 text-body-secondary line-clamp-2">
The headline "This percentage represents a substantial fraction of Berkshire Hathaway's overall worth, which is reported to be influenced by its key investments and long-term financial strategies.
                        </p>
                        <div className="d-flex flex-wrap align-items-center gap-2 mb-3 text-body-quaternary">
                          <div className="d-flex align-items-center">
                            <span className="uil uil-calendar-alt fs-10">                            </span>
                            <p className="mb-0 fs-10 ms-1">
18 hours ago
                            </p>
                          </div>
                          <ul className="fs-10 ps-3 mb-0">
                            <li>
Investor's Business Daily
                            </li>
                          </ul>
                        </div>
                        <div className="d-flex align-items gap-2">
                          <a href="#!" className="fs-10 fw-bold px-2 py-1 bg-primary-subtle rounded text-body-highlight mb-0 text-uppercase lh-sm">
orcl
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-xxl-4">
                    <div className="card h-100">
                      <PhoenixImage src="/assets/img/stock/news/8.png" alt="image" className="card-img-top" />
                      <div className="card-body">
                        <h4 className="mb-2 line-clamp-1">
This AI Stock Is Set to Surpass Nvidia by the End of the Year
                        </h4>
                        <p className="fs-9 text-body-secondary line-clamp-2">
This AI Stock Will Outperform Nvidia by Year-End" suggests that a specific company within the artificial intelligence sector is expected to surpass Nvidia in market performance, driven by innovation, revenue growth, or strategic advancements.
                        </p>
                        <div className="d-flex flex-wrap align-items-center gap-2 mb-3 text-body-quaternary">
                          <div className="d-flex align-items-center">
                            <span className="uil uil-calendar-alt fs-10">                            </span>
                            <p className="mb-0 fs-10 ms-1">
24 hours ago
                            </p>
                          </div>
                          <ul className="fs-10 ps-3 mb-0">
                            <li>
The Business Standard
                            </li>
                          </ul>
                        </div>
                        <div className="d-flex align-items gap-2">
                          <a href="#!" className="fs-10 fw-bold px-2 py-1 bg-primary-subtle rounded text-body-highlight mb-0 text-uppercase lh-sm">
AAPL
                          </a>
                          <a href="#!" className="fs-10 fw-bold px-2 py-1 bg-primary-subtle rounded text-body-highlight mb-0 text-uppercase lh-sm">
ai
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row flex-between-center py-2 pe-0 fs-9">
                  <div className="col-auto d-flex">
                    <p className="mb-0 d-none d-sm-block me-3 fw-semibold">
1 to 9 
                      <span className="text-body-tertiary">
Items of 
                      </span>
78
                    </p>
                    <a href="#!" className="fw-semibold"  data-list-view={"*"}>
View all                      <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                      </span>
                    </a>
                    <a href="#!" className="fw-semibold d-none"  data-list-view={"less"}>
View Less                      <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                      </span>
                    </a>
                  </div>
                  <div className="col-auto d-flex">
                    <button className="page-link disabled" data-list-pagination={"prev"}>
                      <span className="fas fa-chevron-left">                      </span>
                    </button>
                    <ul className="mb-0 pagination">
                      <li className="page-item active">
                        <a href="#!" className="page-link">
1
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#!" className="page-link">
2
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#!" className="page-link">
...
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#!" className="page-link">
 9
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#!" className="page-link">
 10
                        </a>
                      </li>
                    </ul>
                    <button className="page-link pe-0" data-list-pagination={"next"}>
                      <span className="fas fa-chevron-right">                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="events-tab" role="tabpanel" aria-labelledby="tab-events">
            <div className="row g-3 g-md-5 flex-between-center mb-3">
              <div className="col-auto">
                <h4 className="fw-bolder">
Upcoming Events
                </h4>
                <p className="mb-0 text-body-tertiary">
Brief summary of all projects 
                </p>
              </div>
              <div className="col-12 col-sm-auto">
                <div className="search-box w-100">
                  <form className="position-relative">
                    <input className="form-control search-input search" type="search" placeholder="Search events" aria-label="Search" />
                    <span className="fas fa-search search-box-icon">                    </span>
                  </form>
                </div>
              </div>
            </div>
            <div>
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row g-0">
                    <div className="col-12 col-sm-3 me-sm-4 custom-calendar-container">
                      <div className="position-relative custom-calender border rounded d-flex flex-column flex-center mb-4 mb-sm-0 px-0">
                        <h5 className="fw-bolder lh-sm text-body-tertiary">
24
                        </h5>
                        <p className="mb-0 fs-10 text-body-tertiary fw-semibold">
Mar, 2024
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-sm-9 flex-1">
                      <div className="row g-4">
                        <div className="col-12 col-xxl-9">
                          <div className="d-xxl-flex align-items-center gap-2 mb-2">
                            <h5 className="mb-2 mb-xxl-0 cursor-pointer" data-bs-toggle={"offcanvas"} data-bs-target={"#stockEventsSidebar"} aria-controls="stockEventsSidebar">
Stock Market Essentials: Company Fundamentals
                            </h5>
                            <div className="badge badge-phoenix fs-10 badge-phoenix-warning">
featured
                            </div>
                          </div>
                          <div className="d-sm-flex mb-3 align-items-center">
                            <h6 className="text-body-tertiary fw-semibold mb-2 mb-sm-0 border-end-sm pe-sm-3 me-sm-3 text-nowrap">
                              <span className="me-2" data-feather={"clock"} style={{"width":"16px","height":"16px"} as CSSProperties}>                              </span>
                              <span>
12.30 PM - 10 PM EDT 
                              </span>
                            </h6>
                            <h6 className="text-body-tertiary fw-semibold mb-0 line-clamp-1">
                              <span className="me-2" data-feather={"map-pin"} style={{"width":"16px","height":"16px"} as CSSProperties}>                              </span>
                              <span>
Tavern on the Greend, New York
                              </span>
                            </h6>
                          </div>
                          <p className="fs-9 text-body-tertiary">
Picking stocks requires diligence beyond diversified investing with mutual funds or ETFs. Learn characteristics essential to finding and comparing stocks, such as profitability, growth, value, and more.
                          </p>
                          <div className="d-flex align-items-center gap-1">
                            <div className="avatar-group align-items-center">
                              <a href="#!" className="avatar avatar-s">
                                <PhoenixImage src="/assets/img/team/1.webp" alt="" className="rounded-circle" />
                              </a>
                              <a href="#!" className="avatar avatar-s">
                                <PhoenixImage src="/assets/img/team/2.webp" alt="" className="rounded-circle" />
                              </a>
                              <a href="#!" className="avatar avatar-s">
                                <PhoenixImage src="/assets/img/team/3.webp" alt="" className="rounded-circle" />
                              </a>
                              <a href="#!" className="fs-10 ms-1 fw-semibold text-body-quaternary d-i">
 +604 people going
                              </a>
                            </div>
                            <ul className="ps-3 mb-0 text-body-quaternary fs-10">
                              <li>
1k people interested
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-xxl-3">
                          <button className="btn me-2 me-xxl-0 mb-xxl-2 w-xxl-100 btn-phoenix-primary">
                            <span className="far me-2 fa-bookmark">                            </span>
Interested
                          </button>
                          <button className="btn btn-phoenix-primary w-xxl-100">
                            <span className="far fa-circle-check me-2">                            </span>
Going
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row g-0">
                    <div className="col-12 col-sm-3 me-sm-4 custom-calendar-container">
                      <div className="position-relative custom-calender border rounded d-flex flex-column flex-center mb-4 mb-sm-0 px-0">
                        <h5 className="fw-bolder lh-sm text-body-tertiary">
26
                        </h5>
                        <p className="mb-0 fs-10 text-body-tertiary fw-semibold">
Mar, 2024
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-sm-9 flex-1">
                      <div className="row g-4">
                        <div className="col-12 col-xxl-9">
                          <div className="d-xxl-flex align-items-center gap-2 mb-2">
                            <h5 className="mb-2 mb-xxl-0 cursor-pointer" data-bs-toggle={"offcanvas"} data-bs-target={"#stockEventsSidebar"} aria-controls="stockEventsSidebar">
Managing Your Mind: The Forgotten Indicator
                            </h5>
                            <div className="badge badge-phoenix fs-10 badge-phoenix-info">
interested
                            </div>
                          </div>
                          <div className="d-sm-flex mb-3 align-items-center">
                            <h6 className="text-body-tertiary fw-semibold mb-2 mb-sm-0 border-end-sm pe-sm-3 me-sm-3 text-nowrap">
                              <span className="me-2" data-feather={"clock"} style={{"width":"16px","height":"16px"} as CSSProperties}>                              </span>
                              <span>
12.30 PM - 10 PM EDT 
                              </span>
                            </h6>
                            <h6 className="text-body-tertiary fw-semibold mb-0 line-clamp-1">
                              <span className="me-2" data-feather={"map-pin"} style={{"width":"16px","height":"16px"} as CSSProperties}>                              </span>
                              <span>
Tavern on the Greend, New York
                              </span>
                            </h6>
                          </div>
                          <p className="fs-9 text-body-tertiary">
While traditional metrics such as financial indicators, performance data, or technical analysis are commonly used to assess progress or predict outcomes, this concept suggests that managing one's psychological state is equally important.
                          </p>
                          <div className="d-flex align-items-center gap-1">
                            <div className="avatar-group align-items-center">
                              <a href="#!" className="avatar avatar-s">
                                <PhoenixImage src="/assets/img/team/1.webp" alt="" className="rounded-circle" />
                              </a>
                              <a href="#!" className="avatar avatar-s">
                                <PhoenixImage src="/assets/img/team/2.webp" alt="" className="rounded-circle" />
                              </a>
                              <a href="#!" className="avatar avatar-s">
                                <PhoenixImage src="/assets/img/team/3.webp" alt="" className="rounded-circle" />
                              </a>
                              <a href="#!" className="fs-10 ms-1 fw-semibold text-body-quaternary d-i">
 +604 people going
                              </a>
                            </div>
                            <ul className="ps-3 mb-0 text-body-quaternary fs-10">
                              <li>
1k people interested
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-xxl-3">
                          <button className="btn me-2 me-xxl-0 mb-xxl-2 w-xxl-100 btn-primary">
                            <span className="far me-2 fa-circle-check">                            </span>
Interested
                          </button>
                          <button className="btn btn-phoenix-primary w-xxl-100">
                            <span className="far fa-circle-check me-2">                            </span>
Going
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="offcanvas offcanvas-end bg-body-emphasis stock-events-offcanvas" id="stockEventsSidebar">
              <div className="offcanvas-header gap-4 p-4 align-items-start">
                <h3 className="mb-0">
Stock Market Essentials: Company Fundamentals
                </h3>
                <button className="btn btn-sm btn-phoenix-secondary" data-bs-dismiss={"offcanvas"} aria-label="close">
                  <span className="fa-solid fa-xmark">                  </span>
                </button>
              </div>
              <div className="offcanvas-body scrollbar p-4 border-top">
                <PhoenixImage src="/assets/img/stock/offcanvas-image.jpeg" alt="" className="img-fluid rounded-2 mb-4" />
                <div className="row g-2 mb-4">
                  <div className="col-5">
                    <button className="btn btn-primary w-100">
                      <span className="fa-solid fa-ticket me-2">                      </span>
Get Tickets 
                    </button>
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-phoenix-primary">
                      <span className="fa-solid fa-calendar-plus me-2">                      </span>
Add to Calendar
                    </button>
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-phoenix-primary">
                      <span className="fa-solid fa-heart me-2">                      </span>
3677 
                    </button>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-lg-6">
                        <div className="d-flex gap-2 align-items-center mb-2">
                          <div className="bg-info-subtle px-2 py-1 rounded">
                            <span className="uil uil-map-marker fs-7 text-info">                            </span>
                          </div>
                          <h5>
Location
                          </h5>
                        </div>
                        <p className="fs-9 mb-0 text-body-secondary">
Shannon Mekalan Vancouver, British Columbia, Canada
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex gap-2 align-items-center mb-2">
                          <div className="bg-primary-subtle px-2 py-1 rounded">
                            <span className="uil uil-clock fs-7 text-primary">                            </span>
                          </div>
                          <h5>
{"Date & Time"}
                          </h5>
                        </div>
                        <p className="fs-9 mb-0 text-body-secondary">
28th June - 2nd July 2022, 
                          <br />
10 am - 4 pm EDT
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#aboutEvent" className="btn px-4 py-3 d-flex flex-between-center collapse-indicator bg-body-highlight" data-bs-toggle={"collapse"}  role="button" aria-expanded="true" aria-controls="aboutEvent">
                  <h4 className="fs-8 fs-sm-7 mb-0 text-body-highlight">
About This event
                  </h4>                  <span className="fa-solid fa-chevron-down toggle-icon">                  </span>
                </a>
                <div className="collapse show" id="aboutEvent">
                  <div className="p-4">
                    <p className="mb-0">
Company fundamentals are vital for navigating the stock market effectively. They encompass key financial statements—balance sheets, income statements, and cash flow statements—that reveal a company's revenue, expenses, assets, and liabilities. Investors often examine metrics like earnings per share (EPS)...
                      <a href="#!">
read more
                      </a>
                    </p>
                  </div>
                </div>
                <a href="#speaker" className="btn px-4 py-3 d-flex flex-between-center collapse-indicator bg-body-highlight mt-4" data-bs-toggle={"collapse"}  role="button" aria-expanded="true" aria-controls="speaker">
                  <h4 className="fs-8 fs-sm-7 mb-0 text-body-highlight">
Speaker
                  </h4>                  <span className="fa-solid fa-chevron-down toggle-icon">                  </span>
                </a>
                <div className="collapse show" id="speaker">
                  <div className="p-4">
                    <div className="d-flex align-items-center gap-2">
                      <div className="avatar avatar-xl avatar-bordered">
                        <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle" />
                      </div>
                      <div>
                        <h4>
Richard Dawkins
                        </h4>
                        <p className="text-body-tertiary fs-9">
Senior Strategist, Phoenix
                        </p>
                      </div>
                    </div>
                    <p className="mb-0">
Richard Dawkins serves as a Senior Strategist at Phoenix, bringing over a decade of expertise in strategic planning and market analysis. He excels in identifying emerging trends and developing actionable strategies that propel growth and innovation. With a background in Economics and an MBA, Richard is recognized for his collaborative leadership style, fostering cross-departmental teamwork...
                      <a href="#!">
read more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="mb-3">
Later This Week
            </h4>
            <div className="row g-4 mb-4">
              <div className="col-xxl-6">
                <div className="card">
                  <div className="card-body position-relative">
                    <div className="d-sm-flex gap-3">
                      <div className="custom-calendar-container">
                        <div className="position-relative custom-calender border rounded d-flex flex-column flex-center mb-3 mb-sm-0">
                          <h5 className="fw-bolder lh-sm text-body-tertiary">
28-30
                          </h5>
                          <p className="mb-0 fs-10 text-body-tertiary fw-semibold">
Mar, 2024
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h5 className="mb-2 cursor-pointer" data-bs-toggle={"offcanvas"} data-bs-target={"#stockEventsSidebar"} aria-controls="stockEventsSidebar">
Setting Up Your Options Trade
                        </h5>
                        <div className="d-sm-flex mb-3 align-items-center">
                          <h6 className="text-body-tertiary fw-semibold mb-2 mb-sm-0 border-end-sm pe-sm-3 me-sm-3 text-nowrap">
                            <span className="me-2" data-feather={"clock"} style={{"width":"16px","height":"16px"} as CSSProperties}>                            </span>
                            <span>
12.30 PM - 10 PM EDT 
                            </span>
                          </h6>
                          <h6 className="text-body-tertiary fw-semibold mb-0 line-clamp-1">
                            <span className="me-2" data-feather={"map-pin"} style={{"width":"16px","height":"16px"} as CSSProperties}>                            </span>
                            <span>
Tavern on the Greend, New York
                            </span>
                          </h6>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <div className="avatar-group align-items-center">
                            <a href="#!" className="avatar avatar-s">
                              <PhoenixImage src="/assets/img/team/1.webp" alt="" className="rounded-circle" />
                            </a>
                            <a href="#!" className="avatar avatar-s">
                              <PhoenixImage src="/assets/img/team/2.webp" alt="" className="rounded-circle" />
                            </a>
                            <a href="#!" className="avatar avatar-s">
                              <PhoenixImage src="/assets/img/team/3.webp" alt="" className="rounded-circle" />
                            </a>
                          </div>
                          <a href="#!" className="fs-10 ms-1 fw-semibold text-body-quaternary d-i">
 +604 people going
                          </a>
                          <ul className="ps-3 mb-0 text-body-quaternary fs-10">
                            <li>
1k people interested
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="position-absolute top-0 end-0 mt-4 me-4">
                      <div className="btn-reveal-trigger">
                        <button className="btn p-0" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                          <span className="fas fa-ellipsis-h">                          </span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end py-2">
                          <a href="#!" className="dropdown-item">
Edit
                          </a>
                          <a href="#!" className="dropdown-item text-danger">
Delete
                          </a>
                          <a href="#!" className="dropdown-item">
Download
                          </a>
                          <a href="#!" className="dropdown-item">
Report abuse.p-0
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6">
                <div className="card">
                  <div className="card-body position-relative">
                    <div className="d-sm-flex gap-3">
                      <div className="custom-calendar-container">
                        <div className="position-relative custom-calender border rounded d-flex flex-column flex-center mb-3 mb-sm-0">
                          <h5 className="fw-bolder lh-sm text-body-tertiary">
03
                          </h5>
                          <p className="mb-0 fs-10 text-body-tertiary fw-semibold">
Apr, 2024
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h5 className="mb-2 cursor-pointer" data-bs-toggle={"offcanvas"} data-bs-target={"#stockEventsSidebar"} aria-controls="stockEventsSidebar">
Stock Market Essentials
                        </h5>
                        <div className="d-sm-flex mb-3 align-items-center">
                          <h6 className="text-body-tertiary fw-semibold mb-2 mb-sm-0 border-end-sm pe-sm-3 me-sm-3 text-nowrap">
                            <span className="me-2" data-feather={"clock"} style={{"width":"16px","height":"16px"} as CSSProperties}>                            </span>
                            <span>
12.30 PM - 10 PM EDT 
                            </span>
                          </h6>
                          <h6 className="text-body-tertiary fw-semibold mb-0 line-clamp-1">
                            <span className="me-2" data-feather={"map-pin"} style={{"width":"16px","height":"16px"} as CSSProperties}>                            </span>
                            <span>
Tavern on the Greend, New York
                            </span>
                          </h6>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <div className="avatar-group align-items-center">
                            <a href="#!" className="avatar avatar-s">
                              <PhoenixImage src="/assets/img/team/1.webp" alt="" className="rounded-circle" />
                            </a>
                            <a href="#!" className="avatar avatar-s">
                              <PhoenixImage src="/assets/img/team/2.webp" alt="" className="rounded-circle" />
                            </a>
                            <a href="#!" className="avatar avatar-s">
                              <PhoenixImage src="/assets/img/team/3.webp" alt="" className="rounded-circle" />
                            </a>
                          </div>
                          <a href="#!" className="fs-10 ms-1 fw-semibold text-body-quaternary d-i">
 +604 people going
                          </a>
                          <ul className="ps-3 mb-0 text-body-quaternary fs-10">
                            <li>
1k people interested
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="position-absolute top-0 end-0 mt-4 me-4">
                      <div className="btn-reveal-trigger">
                        <button className="btn p-0" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                          <span className="fas fa-ellipsis-h">                          </span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end py-2">
                          <a href="#!" className="dropdown-item">
Edit
                          </a>
                          <a href="#!" className="dropdown-item text-danger">
Delete
                          </a>
                          <a href="#!" className="dropdown-item">
Download
                          </a>
                          <a href="#!" className="dropdown-item">
Report abuse.p-0
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6">
                <div className="card">
                  <div className="card-body position-relative">
                    <div className="d-sm-flex gap-3">
                      <div className="custom-calendar-container">
                        <div className="position-relative custom-calender border rounded d-flex flex-column flex-center mb-3 mb-sm-0">
                          <h5 className="fw-bolder lh-sm text-body-tertiary">
07
                          </h5>
                          <p className="mb-0 fs-10 text-body-tertiary fw-semibold">
Apr, 2024
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h5 className="mb-2 cursor-pointer" data-bs-toggle={"offcanvas"} data-bs-target={"#stockEventsSidebar"} aria-controls="stockEventsSidebar">
Stock Research
                        </h5>
                        <div className="d-sm-flex mb-3 align-items-center">
                          <h6 className="text-body-tertiary fw-semibold mb-2 mb-sm-0 border-end-sm pe-sm-3 me-sm-3 text-nowrap">
                            <span className="me-2" data-feather={"clock"} style={{"width":"16px","height":"16px"} as CSSProperties}>                            </span>
                            <span>
12.30 PM - 10 PM EDT 
                            </span>
                          </h6>
                          <h6 className="text-body-tertiary fw-semibold mb-0 line-clamp-1">
                            <span className="me-2" data-feather={"map-pin"} style={{"width":"16px","height":"16px"} as CSSProperties}>                            </span>
                            <span>
Tavern on the Greend, New York
                            </span>
                          </h6>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <div className="avatar-group align-items-center">
                            <a href="#!" className="avatar avatar-s">
                              <PhoenixImage src="/assets/img/team/1.webp" alt="" className="rounded-circle" />
                            </a>
                            <a href="#!" className="avatar avatar-s">
                              <PhoenixImage src="/assets/img/team/2.webp" alt="" className="rounded-circle" />
                            </a>
                            <a href="#!" className="avatar avatar-s">
                              <PhoenixImage src="/assets/img/team/3.webp" alt="" className="rounded-circle" />
                            </a>
                          </div>
                          <a href="#!" className="fs-10 ms-1 fw-semibold text-body-quaternary d-i">
 +604 people going
                          </a>
                          <ul className="ps-3 mb-0 text-body-quaternary fs-10">
                            <li>
1k people interested
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="position-absolute top-0 end-0 mt-4 me-4">
                      <div className="btn-reveal-trigger">
                        <button className="btn p-0" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                          <span className="fas fa-ellipsis-h">                          </span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end py-2">
                          <a href="#!" className="dropdown-item">
Edit
                          </a>
                          <a href="#!" className="dropdown-item text-danger">
Delete
                          </a>
                          <a href="#!" className="dropdown-item">
Download
                          </a>
                          <a href="#!" className="dropdown-item">
Report abuse.p-0
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6">
                <div className="card">
                  <div className="card-body position-relative">
                    <div className="d-sm-flex gap-3">
                      <div className="custom-calendar-container">
                        <div className="position-relative custom-calender border rounded d-flex flex-column flex-center mb-3 mb-sm-0">
                          <h5 className="fw-bolder lh-sm text-body-tertiary">
17
                          </h5>
                          <p className="mb-0 fs-10 text-body-tertiary fw-semibold">
Apr, 2024
                          </p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h5 className="mb-2 cursor-pointer" data-bs-toggle={"offcanvas"} data-bs-target={"#stockEventsSidebar"} aria-controls="stockEventsSidebar">
Introduction to Candlestick Charts
                        </h5>
                        <div className="d-sm-flex mb-3 align-items-center">
                          <h6 className="text-body-tertiary fw-semibold mb-2 mb-sm-0 border-end-sm pe-sm-3 me-sm-3 text-nowrap">
                            <span className="me-2" data-feather={"clock"} style={{"width":"16px","height":"16px"} as CSSProperties}>                            </span>
                            <span>
12.30 PM - 10 PM EDT 
                            </span>
                          </h6>
                          <h6 className="text-body-tertiary fw-semibold mb-0 line-clamp-1">
                            <span className="me-2" data-feather={"map-pin"} style={{"width":"16px","height":"16px"} as CSSProperties}>                            </span>
                            <span>
Tavern on the Greend, New York
                            </span>
                          </h6>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <div className="avatar-group align-items-center">
                            <a href="#!" className="avatar avatar-s">
                              <PhoenixImage src="/assets/img/team/1.webp" alt="" className="rounded-circle" />
                            </a>
                            <a href="#!" className="avatar avatar-s">
                              <PhoenixImage src="/assets/img/team/2.webp" alt="" className="rounded-circle" />
                            </a>
                            <a href="#!" className="avatar avatar-s">
                              <PhoenixImage src="/assets/img/team/3.webp" alt="" className="rounded-circle" />
                            </a>
                          </div>
                          <a href="#!" className="fs-10 ms-1 fw-semibold text-body-quaternary d-i">
 +604 people going
                          </a>
                          <ul className="ps-3 mb-0 text-body-quaternary fs-10">
                            <li>
1k people interested
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="position-absolute top-0 end-0 mt-4 me-4">
                      <div className="btn-reveal-trigger">
                        <button className="btn p-0" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                          <span className="fas fa-ellipsis-h">                          </span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end py-2">
                          <a href="#!" className="dropdown-item">
Edit
                          </a>
                          <a href="#!" className="dropdown-item text-danger">
Delete
                          </a>
                          <a href="#!" className="dropdown-item">
Download
                          </a>
                          <a href="#!" className="dropdown-item">
Report abuse.p-0
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-3 g-lg-5 flex-between-center mb-3">
              <div className="col-6">
                <h4 className="mb-0">
Previous Events
                </h4>
              </div>
              <div className="col-6 d-flex flex-end-center">
                <div className="position-relative flatpickr-input-container" style={{"maxWidth":"180px"} as CSSProperties}>
                  <input className="form-control form-control-sm datetimepicker ps-6 pe-5" id="endDatepicker" type="text" placeholder="dd/mm/yyyy" data-options={"{\"disableMobile\":true}"} />
                  <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary position-absolute top-50" style={{"left":"1rem"} as CSSProperties}>                  </span>
                </div>
              </div>
            </div>
            <div className="row g-4 gx-xxl-8 mb-3">
              <div className="col-12 col-sm-6">
                <div className="border-dashed py-4 border-top border-bottom">
                  <h6 className="text-body-quaternary fs-10 mb-1">
09, Feb 21 - 01, Mar 21
                  </h6>
                  <div className="d-flex flex-between-center gap-3 mb-2">
                    <h5 className="mb-0 line-clamp-1">
Managing Your Mind: The Forgotten Indicator
                    </h5>
                    <div className="btn-reveal-trigger">
                      <button className="btn p-0" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                        <a href="#!" className="dropdown-item">
Report abuse
                        </a>
                      </div>
                    </div>
                  </div>
                  <p className="fs-10 text-body-quaternary mb-3">
64 people going 
                  </p>
                  <div className="row g-2">
                    <div className="d-xxl-flex mb-3 align-items-center">
                      <h6 className="text-body-tertiary fw-semibold mb-2 mb-xxl-0 border-end-xxl border-end-solid-xxl pe-xxl-3 me-xxl-3 text-nowrap">
                        <span className="me-2" data-feather={"clock"} style={{"width":"16px","height":"16px"} as CSSProperties}>                        </span>
                        <span>
12.30 PM - 10 PM EDT 
                        </span>
                      </h6>
                      <h6 className="text-body-tertiary fw-semibold mb-0 line-clamp-1">
                        <span className="me-2" data-feather={"map-pin"} style={{"width":"16px","height":"16px"} as CSSProperties}>                        </span>
                        <span>
Tavern on the Greend, New York
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="border-dashed py-4 border-bottom border-top-sm">
                  <h6 className="text-body-quaternary fs-10 mb-1">
09, Feb 21 - 01, Mar 21
                  </h6>
                  <div className="d-flex flex-between-center gap-3 mb-2">
                    <h5 className="mb-0 line-clamp-1">
Setting Up Your Options Trade in Power
                    </h5>
                    <div className="btn-reveal-trigger">
                      <button className="btn p-0" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                        <a href="#!" className="dropdown-item">
Report abuse
                        </a>
                      </div>
                    </div>
                  </div>
                  <p className="fs-10 text-body-quaternary mb-3">
64 people going 
                  </p>
                  <div className="row g-2">
                    <div className="d-xxl-flex mb-3 align-items-center">
                      <h6 className="text-body-tertiary fw-semibold mb-2 mb-xxl-0 border-end-xxl border-end-solid-xxl pe-xxl-3 me-xxl-3 text-nowrap">
                        <span className="me-2" data-feather={"clock"} style={{"width":"16px","height":"16px"} as CSSProperties}>                        </span>
                        <span>
12.30 PM - 10 PM EDT 
                        </span>
                      </h6>
                      <h6 className="text-body-tertiary fw-semibold mb-0 line-clamp-1">
                        <span className="me-2" data-feather={"map-pin"} style={{"width":"16px","height":"16px"} as CSSProperties}>                        </span>
                        <span>
Tavern on the Greend, New York
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="border-dashed py-4 border-bottom">
                  <h6 className="text-body-quaternary fs-10 mb-1">
09, Feb 21 - 01, Mar 21
                  </h6>
                  <div className="d-flex flex-between-center gap-3 mb-2">
                    <h5 className="mb-0 line-clamp-1">
Stock Market Essentials: Using Stock Charts
                    </h5>
                    <div className="btn-reveal-trigger">
                      <button className="btn p-0" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                        <a href="#!" className="dropdown-item">
Report abuse
                        </a>
                      </div>
                    </div>
                  </div>
                  <p className="fs-10 text-body-quaternary mb-3">
64 people going 
                  </p>
                  <div className="row g-2">
                    <div className="d-xxl-flex mb-3 align-items-center">
                      <h6 className="text-body-tertiary fw-semibold mb-2 mb-xxl-0 border-end-xxl border-end-solid-xxl pe-xxl-3 me-xxl-3 text-nowrap">
                        <span className="me-2" data-feather={"clock"} style={{"width":"16px","height":"16px"} as CSSProperties}>                        </span>
                        <span>
12.30 PM - 10 PM EDT 
                        </span>
                      </h6>
                      <h6 className="text-body-tertiary fw-semibold mb-0 line-clamp-1">
                        <span className="me-2" data-feather={"map-pin"} style={{"width":"16px","height":"16px"} as CSSProperties}>                        </span>
                        <span>
Tavern on the Greend, New York
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="border-dashed py-4 border-bottom">
                  <h6 className="text-body-quaternary fs-10 mb-1">
09, Feb 21 - 01, Mar 21
                  </h6>
                  <div className="d-flex flex-between-center gap-3 mb-2">
                    <h5 className="mb-0 line-clamp-1">
Stock Research
                    </h5>
                    <div className="btn-reveal-trigger">
                      <button className="btn p-0" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                        <a href="#!" className="dropdown-item">
Report abuse
                        </a>
                      </div>
                    </div>
                  </div>
                  <p className="fs-10 text-body-quaternary mb-3">
64 people going 
                  </p>
                  <div className="row g-2">
                    <div className="d-xxl-flex mb-3 align-items-center">
                      <h6 className="text-body-tertiary fw-semibold mb-2 mb-xxl-0 border-end-xxl border-end-solid-xxl pe-xxl-3 me-xxl-3 text-nowrap">
                        <span className="me-2" data-feather={"clock"} style={{"width":"16px","height":"16px"} as CSSProperties}>                        </span>
                        <span>
12.30 PM - 10 PM EDT 
                        </span>
                      </h6>
                      <h6 className="text-body-tertiary fw-semibold mb-0 line-clamp-1">
                        <span className="me-2" data-feather={"map-pin"} style={{"width":"16px","height":"16px"} as CSSProperties}>                        </span>
                        <span>
Tavern on the Greend, New York
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="border-dashed py-4 border-bottom">
                  <h6 className="text-body-quaternary fs-10 mb-1">
09, Feb 21 - 01, Mar 21
                  </h6>
                  <div className="d-flex flex-between-center gap-3 mb-2">
                    <h5 className="mb-0 line-clamp-1">
Introduction to Candlestick Charts
                    </h5>
                    <div className="btn-reveal-trigger">
                      <button className="btn p-0" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                        <a href="#!" className="dropdown-item">
Report abuse
                        </a>
                      </div>
                    </div>
                  </div>
                  <p className="fs-10 text-body-quaternary mb-3">
64 people going 
                  </p>
                  <div className="row g-2">
                    <div className="d-xxl-flex mb-3 align-items-center">
                      <h6 className="text-body-tertiary fw-semibold mb-2 mb-xxl-0 border-end-xxl border-end-solid-xxl pe-xxl-3 me-xxl-3 text-nowrap">
                        <span className="me-2" data-feather={"clock"} style={{"width":"16px","height":"16px"} as CSSProperties}>                        </span>
                        <span>
12.30 PM - 10 PM EDT 
                        </span>
                      </h6>
                      <h6 className="text-body-tertiary fw-semibold mb-0 line-clamp-1">
                        <span className="me-2" data-feather={"map-pin"} style={{"width":"16px","height":"16px"} as CSSProperties}>                        </span>
                        <span>
Tavern on the Greend, New York
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="border-dashed py-4 border-bottom">
                  <h6 className="text-body-quaternary fs-10 mb-1">
09, Feb 21 - 01, Mar 21
                  </h6>
                  <div className="d-flex flex-between-center gap-3 mb-2">
                    <h5 className="mb-0 line-clamp-1">
{"Fibonacci Tools & Analysis"}
                    </h5>
                    <div className="btn-reveal-trigger">
                      <button className="btn p-0" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                        <a href="#!" className="dropdown-item">
Report abuse
                        </a>
                      </div>
                    </div>
                  </div>
                  <p className="fs-10 text-body-quaternary mb-3">
64 people going 
                  </p>
                  <div className="row g-2">
                    <div className="d-xxl-flex mb-3 align-items-center">
                      <h6 className="text-body-tertiary fw-semibold mb-2 mb-xxl-0 border-end-xxl border-end-solid-xxl pe-xxl-3 me-xxl-3 text-nowrap">
                        <span className="me-2" data-feather={"clock"} style={{"width":"16px","height":"16px"} as CSSProperties}>                        </span>
                        <span>
12.30 PM - 10 PM EDT 
                        </span>
                      </h6>
                      <h6 className="text-body-tertiary fw-semibold mb-0 line-clamp-1">
                        <span className="me-2" data-feather={"map-pin"} style={{"width":"16px","height":"16px"} as CSSProperties}>                        </span>
                        <span>
Tavern on the Greend, New York
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="border-dashed py-4 border-bottom">
                  <h6 className="text-body-quaternary fs-10 mb-1">
09, Feb 21 - 01, Mar 21
                  </h6>
                  <div className="d-flex flex-between-center gap-3 mb-2">
                    <h5 className="mb-0 line-clamp-1">
Talking Futures Markets with Special Guest Jim Iuorio
                    </h5>
                    <div className="btn-reveal-trigger">
                      <button className="btn p-0" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                        <a href="#!" className="dropdown-item">
Report abuse
                        </a>
                      </div>
                    </div>
                  </div>
                  <p className="fs-10 text-body-quaternary mb-3">
64 people going 
                  </p>
                  <div className="row g-2">
                    <div className="d-xxl-flex mb-3 align-items-center">
                      <h6 className="text-body-tertiary fw-semibold mb-2 mb-xxl-0 border-end-xxl border-end-solid-xxl pe-xxl-3 me-xxl-3 text-nowrap">
                        <span className="me-2" data-feather={"clock"} style={{"width":"16px","height":"16px"} as CSSProperties}>                        </span>
                        <span>
12.30 PM - 10 PM EDT 
                        </span>
                      </h6>
                      <h6 className="text-body-tertiary fw-semibold mb-0 line-clamp-1">
                        <span className="me-2" data-feather={"map-pin"} style={{"width":"16px","height":"16px"} as CSSProperties}>                        </span>
                        <span>
Tavern on the Greend, New York
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="border-dashed py-4 border-bottom">
                  <h6 className="text-body-quaternary fs-10 mb-1">
09, Feb 21 - 01, Mar 21
                  </h6>
                  <div className="d-flex flex-between-center gap-3 mb-2">
                    <h5 className="mb-0 line-clamp-1">
Bearish Trading Strategies
                    </h5>
                    <div className="btn-reveal-trigger">
                      <button className="btn p-0" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                        <a href="#!" className="dropdown-item">
Report abuse
                        </a>
                      </div>
                    </div>
                  </div>
                  <p className="fs-10 text-body-quaternary mb-3">
64 people going 
                  </p>
                  <div className="row g-2">
                    <div className="d-xxl-flex mb-3 align-items-center">
                      <h6 className="text-body-tertiary fw-semibold mb-2 mb-xxl-0 border-end-xxl border-end-solid-xxl pe-xxl-3 me-xxl-3 text-nowrap">
                        <span className="me-2" data-feather={"clock"} style={{"width":"16px","height":"16px"} as CSSProperties}>                        </span>
                        <span>
12.30 PM - 10 PM EDT 
                        </span>
                      </h6>
                      <h6 className="text-body-tertiary fw-semibold mb-0 line-clamp-1">
                        <span className="me-2" data-feather={"map-pin"} style={{"width":"16px","height":"16px"} as CSSProperties}>                        </span>
                        <span>
Tavern on the Greend, New York
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row flex-between-center py-2 pe-0 fs-9">
              <div className="col-auto d-flex">
                <p className="mb-0 d-none d-sm-block me-3 fw-semibold">
1 to 8 
                  <span className="text-body-tertiary">
Items of 
                  </span>
32
                </p>
                <a href="#!" className="fw-semibold"  data-list-view={"*"}>
View all                  <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                  </span>
                </a>
                <a href="#!" className="fw-semibold d-none"  data-list-view={"less"}>
View Less                  <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                  </span>
                </a>
              </div>
              <div className="col-auto d-flex">
                <button className="page-link disabled" data-list-pagination={"prev"}>
                  <span className="fas fa-chevron-left">                  </span>
                </button>
                <ul className="mb-0 pagination">
                  <li className="page-item active">
                    <a href="#!" className="page-link">
1
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#!" className="page-link">
2
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#!" className="page-link">
3
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#!" className="page-link">
 4
                    </a>
                  </li>
                </ul>
                <button className="page-link pe-0" data-list-pagination={"next"}>
                  <span className="fas fa-chevron-right">                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="comProfile-tab" role="tabpanel" aria-labelledby="tab-comProfile">
            <div className="card mb-5">
              <div className="card-body">
                <div className="row g-0">
                  <div className="col-6 col-lg-12 col-xxl-6 pb-3 border-bottom border-end border-end-lg-0 border-end-xxl pe-3 pe-lg-0 pe-xxl-5">
                    <div className="row flex-between-center g-2">
                      <div className="col-md-6">
                        <div className="d-md-flex align-items-center gap-2">
                          <div className="border bg-opacity-15 d-flex flex-center p-2 rounded-1 mb-3 mb-md-0 bg-info border-info-light" style={{"width":"2rem","height":"2rem"} as CSSProperties}>
                            <span className="fa-solid fa-user text-info-dark">                            </span>
                          </div>
                          <h5 className="text-body-highlight mb-0 line-clamp-1">
Total Employees
                          </h5>
                        </div>
                      </div>
                      <div className="col-1 d-none d-md-block">
                        <h5 className="text-body-secondary mb-0">
:
                        </h5>
                      </div>
                      <div className="col-md-5">
                        <div className="d-flex justify-content-md-between align-items-center gap-2">
                          <p className="mb-0 text-body-secondary">
1.61K
                          </p>
                          <div className="badge badge-phoenix fs-10 badge-phoenix-danger" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="From 1.64k">
-1.83%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-12 col-xxl-6 pb-3  pt-lg-3 pt-xxl-0 ps-3 ps-lg-0 ps-xxl-5 border-bottom">
                    <div className="row flex-between-center g-2">
                      <div className="col-md-6">
                        <div className="d-md-flex align-items-center gap-2">
                          <div className="border bg-opacity-15 d-flex flex-center p-2 rounded-1 mb-3 mb-md-0 bg-primary border-primary-light" style={{"width":"2rem","height":"2rem"} as CSSProperties}>
                            <span className="fa-solid fa-hand-holding-dollar text-primary-dark">                            </span>
                          </div>
                          <h5 className="text-body-highlight mb-0 line-clamp-1">
Total Revenue
                          </h5>
                        </div>
                      </div>
                      <div className="col-1 d-none d-md-block">
                        <h5 className="text-body-secondary mb-0">
:
                        </h5>
                      </div>
                      <div className="col-md-5">
                        <div className="d-flex justify-content-md-between align-items-center gap-2">
                          <p className="mb-0 text-body-secondary">
$2.40M
                          </p>
                          <div className="badge badge-phoenix fs-10 badge-phoenix-success" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="From 5.4k">
+4.71%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-12 col-xxl-6 py-3 border-bottom border-end border-end-lg-0 border-end-xxl pe-3 pe-lg-0 pe-xxl-5">
                    <div className="row flex-between-center g-2">
                      <div className="col-md-6">
                        <div className="d-md-flex align-items-center gap-2">
                          <div className="border bg-opacity-15 d-flex flex-center p-2 rounded-1 mb-3 mb-md-0 bg-warning border-warning-light" style={{"width":"2rem","height":"2rem"} as CSSProperties}>
                            <span className="fa-solid fa-repeat text-warning-dark">                            </span>
                          </div>
                          <h5 className="text-body-highlight mb-0 line-clamp-1">
Total Change (1Y)
                          </h5>
                        </div>
                      </div>
                      <div className="col-1 d-none d-md-block">
                        <h5 className="text-body-secondary mb-0">
:
                        </h5>
                      </div>
                      <div className="col-md-5">
                        <div className="d-flex justify-content-md-between align-items-center gap-2">
                          <p className="mb-0 text-body-secondary">
-3,000
                          </p>
                          <div className="badge badge-phoenix fs-10 badge-phoenix-success" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="From 2.64k">
+1.71%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-12 col-xxl-6 py-3 ps-3 ps-lg-0 ps-xxl-5 border-bottom">
                    <div className="row flex-between-center g-2">
                      <div className="col-md-6">
                        <div className="d-md-flex align-items-center gap-2">
                          <div className="border bg-opacity-15 d-flex flex-center p-2 rounded-1 mb-3 mb-md-0 bg-info border-info-light" style={{"width":"2rem","height":"2rem"} as CSSProperties}>
                            <span className="fa-solid fa-money-bill-trend-up text-info-dark">                            </span>
                          </div>
                          <h5 className="text-body-highlight mb-0 line-clamp-1">
Total Profits
                          </h5>
                        </div>
                      </div>
                      <div className="col-1 d-none d-md-block">
                        <h5 className="text-body-secondary mb-0">
:
                        </h5>
                      </div>
                      <div className="col-md-5">
                        <div className="d-flex justify-content-md-between align-items-center gap-2">
                          <p className="mb-0 text-body-secondary">
$6.34M
                          </p>
                          <div className="badge badge-phoenix fs-10 badge-phoenix-success" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="From 3.64k">
+3.71%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-12 col-xxl-6 py-3 pb-md-0 pb-lg-3 pb-xxl-0 border-end border-end-lg-0 border-end-xxl pe-3 pe-lg-0 pe-xxl-5 border-bottom-lg border-bottom-xxl-0">
                    <div className="row flex-between-center g-2">
                      <div className="col-md-6">
                        <div className="d-md-flex align-items-center gap-2">
                          <div className="border bg-opacity-15 d-flex flex-center p-2 rounded-1 mb-3 mb-md-0 bg-primary border-primary-light" style={{"width":"2rem","height":"2rem"} as CSSProperties}>
                            <span className="fa-solid fa-chart-line text-primary-dark">                            </span>
                          </div>
                          <h5 className="text-body-highlight mb-0 line-clamp-1">
Total Growth (1Y)
                          </h5>
                        </div>
                      </div>
                      <div className="col-1 d-none d-md-block">
                        <h5 className="text-body-secondary mb-0">
:
                        </h5>
                      </div>
                      <div className="col-md-5">
                        <div className="d-flex justify-content-md-between align-items-center gap-2">
                          <p className="mb-0 text-body-secondary">
-1.83%
                          </p>
                          <div className="badge badge-phoenix fs-10 badge-phoenix-danger" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="From 1.4k">
-2.32%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-12 col-xxl-6 pt-3 ps-3 ps-lg-0 ps-xxl-5">
                    <div className="row flex-between-center g-2">
                      <div className="col-md-6">
                        <div className="d-md-flex align-items-center gap-2">
                          <div className="border bg-opacity-15 d-flex flex-center p-2 rounded-1 mb-3 mb-md-0 bg-warning border-warning-light" style={{"width":"2rem","height":"2rem"} as CSSProperties}>
                            <span className="fa-solid fa-chart-column text-warning-dark">                            </span>
                          </div>
                          <h5 className="text-body-highlight mb-0 line-clamp-1">
Total Market Cap
                          </h5>
                        </div>
                      </div>
                      <div className="col-1 d-none d-md-block">
                        <h5 className="text-body-secondary mb-0">
:
                        </h5>
                      </div>
                      <div className="col-md-5">
                        <div className="d-flex justify-content-md-between align-items-center gap-2">
                          <p className="mb-0 text-body-secondary">
$3.46T
                          </p>
                          <div className="badge badge-phoenix fs-10 badge-phoenix-success" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="From 3.64k">
+3.71%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-body">
                <h4 className="mb-3 text-body">
Company Description
                </h4>
                <p className="mb-2">
Apple Inc. creates, produces, and sells wearable technology, tablets, smartphones, PCs, and accessories all over the world.
                </p>
                <p className="mb-0">
The company sells wearables, home goods, and accessories like AirPods, Apple TV, Apple Watch, Beats devices, and HomePod. It also offers a line of cellphones called iPhone, a line of personal computers called Mac, and a line of tablets called iPad...
                  <a href="#!">
read more
                  </a>
                </p>
                <hr className="my-4" />
                <div className="row g-0">
                  <div className="col-12 col-md-6 pe-md-4 pb-4 pb-md-0">
                    <h4 className="text-body mb-3">
Company Details 
                    </h4>
                    <div className="row gx-5 gx-md-3 gx-lg-1 gx-xl-3 gx-xxl-5">
                      <div className="col-sm-6 col-md-6 col-xl-12 col-xxl-6 pe-md-2">
                        <div className="mb-3">
                          <div className="d-flex align-items-center mb-1">
                            <span className="fa-solid fs-8 fa-building" style={{"width":"16px"} as CSSProperties}>                            </span>
                            <h5 className="my-2 line-clamp-1 ms-2">
Company Name
                            </h5>
                          </div>
                          <div className="ps-4">
                            <div className="d-flex align-items-center gap-2">
                              <PhoenixImage src="/assets/img/brand3/dark_apple_logo.png" alt="img" className="img-fluid d-dark-none" />
                              <PhoenixImage src="/assets/img/brand3/light_apple_logo.png" alt="dark-image" className="img-fluid d-light-none" />
                              <p className="mb-0 text-body-secondary">
Apple Inc
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="d-flex align-items-center mb-1">
                            <span className="fa-solid fs-8 fa-briefcase" style={{"width":"16px"} as CSSProperties}>                            </span>
                            <h5 className="my-2 line-clamp-1 ms-2">
CTO
                            </h5>
                          </div>
                          <div className="ps-4">
                            <p className="mb-0 text-body-secondary">
Timothy Cook
                            </p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="d-flex align-items-center mb-1">
                            <span className="fa-solid fs-8 fa-earth-americas" style={{"width":"16px"} as CSSProperties}>                            </span>
                            <h5 className="my-2 line-clamp-1 ms-2">
Country
                            </h5>
                          </div>
                          <div className="ps-4">
                            <p className="mb-0 text-body-secondary">
United States
                            </p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="d-flex align-items-center mb-1">
                            <span className="fa-solid fs-8 fa-flag" style={{"width":"16px"} as CSSProperties}>                            </span>
                            <h5 className="my-2 line-clamp-1 ms-2">
Founded
                            </h5>
                          </div>
                          <div className="ps-4">
                            <p className="mb-0 text-body-secondary">
1997
                            </p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="d-flex align-items-center mb-1">
                            <span className="fa-solid fs-8 fa-calendar-check" style={{"width":"16px"} as CSSProperties}>                            </span>
                            <h5 className="my-2 line-clamp-1 ms-2">
IOP Date
                            </h5>
                          </div>
                          <div className="ps-4">
                            <p className="mb-0 text-body-secondary">
Dec 12, 1980
                            </p>
                          </div>
                        </div>
                        <div className="mb-3 mb-sm-0 mb-md-3 mb-lg-0 mb-xl-3 mb-xxl-0">
                          <div className="d-flex align-items-center mb-1">
                            <span className="fa-solid fs-8 fa-city" style={{"width":"16px"} as CSSProperties}>                            </span>
                            <h5 className="my-2 line-clamp-1 ms-2">
Industry
                            </h5>
                          </div>
                          <div className="ps-4">
                            <p className="mb-0 text-body-secondary">
Consumer Electronics
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-xl-12 col-xxl-6 ps-md-2">
                        <div className="mb-3">
                          <div className="d-flex align-items-center mb-1">
                            <span className="fa-solid fs-8 fa-chart-pie" style={{"width":"16px"} as CSSProperties}>                            </span>
                            <h5 className="my-2 line-clamp-1 ms-2">
Sector
                            </h5>
                          </div>
                          <div className="ps-4">
                            <p className="mb-0 text-body-secondary">
Technology
                            </p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="d-flex align-items-center mb-1">
                            <span className="fa-solid fs-8 fa-users" style={{"width":"16px"} as CSSProperties}>                            </span>
                            <h5 className="my-2 line-clamp-1 ms-2">
Employees
                            </h5>
                          </div>
                          <div className="ps-4">
                            <p className="mb-0 text-body-secondary">
1,61,000
                            </p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="d-flex align-items-center mb-1">
                            <span className="fa-solid fs-8 fa-globe" style={{"width":"16px"} as CSSProperties}>                            </span>
                            <h5 className="my-2 line-clamp-1 ms-2">
Website
                            </h5>
                          </div>
                          <div className="ps-4">
                            <a href="https://apple.com">
apple.com
                            </a>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="d-flex align-items-center mb-1">
                            <span className="fa-solid fs-8 fa-phone" style={{"width":"16px"} as CSSProperties}>                            </span>
                            <h5 className="my-2 line-clamp-1 ms-2">
Phone Number
                            </h5>
                          </div>
                          <div className="ps-4">
                            <p className="mb-0 text-body-secondary">
+1234567890
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="d-flex align-items-center mb-1">
                            <span className="fa-solid fs-8 fa-location" style={{"width":"16px"} as CSSProperties}>                            </span>
                            <h5 className="my-2 line-clamp-1 ms-2">
Address
                            </h5>
                          </div>
                          <div className="ps-4">
                            <p className="mb-0 text-body-secondary">
One Apple Park Way, Cupertino, CA 95014
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 ps-md-4 pt-4 pt-md-0 border-top border-top-md-0 border-start-md">
                    <h4 className="text-body mb-3">
Stock Details
                    </h4>
                    <div className="row gx-5 gx-md-3 gx-lg-1 gx-xl-3 gx-xxl-5">
                      <div className="col-sm-6 col-md-6 col-xl-12 col-xxl-6">
                        <div className="mb-3">
                          <div className="d-flex align-items-center mb-1">
                            <span className="fa-solid fs-8 fa-ticket" style={{"width":"16px"} as CSSProperties}>                            </span>
                            <h5 className="my-2 line-clamp-1 ms-2">
Ticker Symbol
                            </h5>
                          </div>
                          <div className="ps-4">
                            <p className="mb-0 text-body-secondary">
AAPL
                            </p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="d-flex align-items-center mb-1">
                            <span className="fa-solid fs-8 fa-right-left" style={{"width":"16px"} as CSSProperties}>                            </span>
                            <h5 className="my-2 line-clamp-1 ms-2">
Exchange
                            </h5>
                          </div>
                          <div className="ps-4">
                            <p className="mb-0 text-body-secondary">
NASDAQ
                            </p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="d-flex align-items-center mb-1">
                            <span className="fa-solid fs-8 fa-calendar-week" style={{"width":"16px"} as CSSProperties}>                            </span>
                            <h5 className="my-2 line-clamp-1 ms-2">
Fiscal Year
                            </h5>
                          </div>
                          <div className="ps-4">
                            <p className="mb-0 text-body-secondary">
October - September
                            </p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="d-flex align-items-center mb-1">
                            <span className="fa-solid fs-8 fa-chart-line" style={{"width":"16px"} as CSSProperties}>                            </span>
                            <h5 className="my-2 line-clamp-1 ms-2">
Reporting Cur.
                            </h5>
                          </div>
                          <div className="ps-4">
                            <p className="mb-0 text-body-secondary">
USD
                            </p>
                          </div>
                        </div>
                        <div className="mb-3 mb-sm-0 mb-md-3 mb-lg-0 mb-xl-3 mb-xxl-0">
                          <div className="d-flex align-items-center mb-1">
                            <span className="fa-solid fs-8 fa-code-compare" style={{"width":"16px"} as CSSProperties}>                            </span>
                            <h5 className="my-2 line-clamp-1 ms-2">
CIK Code
                            </h5>
                          </div>
                          <div className="ps-4">
                            <p className="mb-0 text-body-secondary">
0000320193
                            </p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="d-flex align-items-center mb-1">
                            <span className="fa-solid fs-8 fa-hashtag" style={{"width":"16px"} as CSSProperties}>                            </span>
                            <h5 className="my-2 line-clamp-1 ms-2">
CUSIP Number
                            </h5>
                          </div>
                          <div className="ps-4">
                            <p className="mb-0 text-body-secondary">
037833100
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-xl-12 col-xxl-6">
                        <div className="mb-3">
                          <div className="d-flex align-items-center mb-1">
                            <span className="fa-solid fs-8 fa-hashtag" style={{"width":"16px"} as CSSProperties}>                            </span>
                            <h5 className="my-2 line-clamp-1 ms-2">
ISIN Number
                            </h5>
                          </div>
                          <div className="ps-4">
                            <p className="mb-0 text-body-secondary">
US0378331005
                            </p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="d-flex align-items-center mb-1">
                            <span className="fa-solid fs-8 fa-id-card" style={{"width":"16px"} as CSSProperties}>                            </span>
                            <h5 className="my-2 line-clamp-1 ms-2">
Employer ID
                            </h5>
                          </div>
                          <div className="ps-4">
                            <p className="mb-0 text-body-secondary">
94-2404110
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="d-flex align-items-center mb-1">
                            <span className="fa-solid fs-8 fa-code" style={{"width":"16px"} as CSSProperties}>                            </span>
                            <h5 className="my-2 line-clamp-1 ms-2">
SIC Code
                            </h5>
                          </div>
                          <div className="ps-4">
                            <p className="mb-0 text-body-secondary">
3571
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row flex-between-center g-3 mb-4">
              <div className="col-auto">
                <h4>
Chart of Employees
                </h4>
                <p className="mb-0">
{"No. of bookings fulfilled & cancelled"}
                </p>
              </div>
              <div className="col-auto">
                <div className="btn-group stock-btn-group" role="group" aria-label="employees-btn-group">
                  <button className="btn btn-phoenix-secondary">
Total
                  </button>
                  <button className="btn btn-phoenix-secondary">
Change
                  </button>
                  <button className="btn btn-phoenix-secondary active">
Growth
                  </button>
                </div>
              </div>
            </div>
            <div className="echart-company-profile-employees-chart mb-5" style={{"width":"100%","height":"300px"} as CSSProperties}>            </div>
            <div className="card">
              <div className="card-body">
                <div className="row g-3 flex-between-center mb-3">
                  <div className="col-auto">
                    <h4>
Employee Records
                    </h4>
                    <p className="mb-0">
Record of employees' roles and tenure.
                    </p>
                  </div>
                  <div className="col-auto">
                    <select className="form-select form-select-sm" id="action" name="action">
                      <option value="export">
Export 
                      </option>
                      <option value="import">
 Import 
                      </option>
                      <option value="delete">
 Delete 
                      </option>
                    </select>
                  </div>
                </div>
                <div id="employeeRecord" data-list={"{\"valueNames\":[\"date\",\"employees\",\"change\",\"growth\"],\"page\":10,\"pagination\":true}"}>
                  <div className="table-responsive scrollbar">
                    <table className="table fs-9 mb-0 border-top border-translucent">
                      <thead>
                        <tr className="text-uppercase"><th className="sort white-space-nowrap align-middle ps-0" scope="col" style={{"minWidth":"14rem"} as CSSProperties} data-sort={"date"}>
date
                          </th>
                          <th className="sort align-middle text-center" scope="col" data-sort={"employees"} style={{"minWidth":"8rem"} as CSSProperties}>
employees
                          </th>
                          <th className="sort align-middle text-center" scope="col" data-sort={"change"} style={{"minWidth":"8rem"} as CSSProperties}>
Change
                          </th>
                          <th className="sort align-middle text-end" scope="col" style={{"minWidth":"11rem"} as CSSProperties} data-sort={"growth"}>
Growth
                          </th>
                        </tr>
                      </thead>
                      <tbody className="list"><tr>
                          <td className="align-middle date white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
Sep 30, 2023
                            </p>
                          </td>
                          <td className="align-middle employees white-space-nowrap text-center">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
161,000
                            </p>
                          </td>
                          <td className="align-middle text-center change">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
10,000
                            </p>
                          </td>
                          <td className="align-middle text-end growth white-space-nowrap">
                            <p className="fs-9 fw-semibold mb-0 text-danger">
-1.83%
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td className="align-middle date white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
Sep 24, 2022
                            </p>
                          </td>
                          <td className="align-middle employees white-space-nowrap text-center">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
164,000
                            </p>
                          </td>
                          <td className="align-middle text-center change">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
-3,000
                            </p>
                          </td>
                          <td className="align-middle text-end growth white-space-nowrap">
                            <p className="fs-9 fw-semibold mb-0 text-success">
6.49%
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td className="align-middle date white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
Sep 25, 2021
                            </p>
                          </td>
                          <td className="align-middle employees white-space-nowrap text-center">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
154,000
                            </p>
                          </td>
                          <td className="align-middle text-center change">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
7,000
                            </p>
                          </td>
                          <td className="align-middle text-end growth white-space-nowrap">
                            <p className="fs-9 fw-semibold mb-0 text-success">
4.76%
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td className="align-middle date white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
Sep 26, 2020
                            </p>
                          </td>
                          <td className="align-middle employees white-space-nowrap text-center">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
147,000
                            </p>
                          </td>
                          <td className="align-middle text-center change">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
10,000
                            </p>
                          </td>
                          <td className="align-middle text-end growth white-space-nowrap">
                            <p className="fs-9 fw-semibold mb-0 text-success">
7.30%
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td className="align-middle date white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
Sep 28, 2019
                            </p>
                          </td>
                          <td className="align-middle employees white-space-nowrap text-center">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
137,000
                            </p>
                          </td>
                          <td className="align-middle text-center change">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
5,000
                            </p>
                          </td>
                          <td className="align-middle text-end growth white-space-nowrap">
                            <p className="fs-9 fw-semibold mb-0 text-success">
3.79%
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td className="align-middle date white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
Sep 29, 2018
                            </p>
                          </td>
                          <td className="align-middle employees white-space-nowrap text-center">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
132,000
                            </p>
                          </td>
                          <td className="align-middle text-center change">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
9,000
                            </p>
                          </td>
                          <td className="align-middle text-end growth white-space-nowrap">
                            <p className="fs-9 fw-semibold mb-0 text-success">
7.32%
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td className="align-middle date white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
Sep 30, 2017
                            </p>
                          </td>
                          <td className="align-middle employees white-space-nowrap text-center">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
123,000
                            </p>
                          </td>
                          <td className="align-middle text-center change">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
7,000
                            </p>
                          </td>
                          <td className="align-middle text-end growth white-space-nowrap">
                            <p className="fs-9 fw-semibold mb-0 text-success">
6.03%
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td className="align-middle date white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
Sep 26, 2016
                            </p>
                          </td>
                          <td className="align-middle employees white-space-nowrap text-center">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
112,000
                            </p>
                          </td>
                          <td className="align-middle text-center change">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
9,000
                            </p>
                          </td>
                          <td className="align-middle text-end growth white-space-nowrap">
                            <p className="fs-9 fw-semibold mb-0 text-success">
4.30%
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td className="align-middle date white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
Sep 24, 2015
                            </p>
                          </td>
                          <td className="align-middle employees white-space-nowrap text-center">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
109,000
                            </p>
                          </td>
                          <td className="align-middle text-center change">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
8,000
                            </p>
                          </td>
                          <td className="align-middle text-end growth white-space-nowrap">
                            <p className="fs-9 fw-semibold mb-0 text-success">
5.79%
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td className="align-middle date white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
Sep 18, 2014
                            </p>
                          </td>
                          <td className="align-middle employees white-space-nowrap text-center">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
107,000
                            </p>
                          </td>
                          <td className="align-middle text-center change">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
8,000
                            </p>
                          </td>
                          <td className="align-middle text-end growth white-space-nowrap">
                            <p className="fs-9 fw-semibold mb-0 text-success">
5.77%
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td className="align-middle date white-space-nowrap">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
Sep 30, 2013
                            </p>
                          </td>
                          <td className="align-middle employees white-space-nowrap text-center">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
100,000
                            </p>
                          </td>
                          <td className="align-middle text-center change">
                            <p className="fs-9 fw-semibold text-body-secondary mb-0">
10,000
                            </p>
                          </td>
                          <td className="align-middle text-end growth white-space-nowrap">
                            <p className="fs-9 fw-semibold mb-0 text-success">
6.03%
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row align-items-center justify-content-between py-2 pe-0 fs-9 pagination-subtle">
                    <div className="col-auto d-flex">
                      <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info>                      </p>
                      <a href="#!" className="fw-semibold"  data-list-view={"*"}>
View all                        <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                        </span>
                      </a>
                      <a href="#!" className="fw-semibold d-none"  data-list-view={"less"}>
View Less                        <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                        </span>
                      </a>
                    </div>
                    <div className="col-auto d-flex">
                      <button className="page-link" data-list-pagination={"prev"}>
                        <span className="fas fa-chevron-left">                        </span>
                      </button>
                      <ul className="mb-0 pagination">                      </ul>
                      <button className="page-link pe-0" data-list-pagination={"next"}>
                        <span className="fas fa-chevron-right">                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gap-3 g-0 flex-between-center mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-secondary py-3 border-y mt-4 position-sticky bottom-0 z-2 d-xl-none stock-details-footer">
          <div className="col-auto">
            <div className="d-flex align-items-center gap-2">
              <h3 className="mb-0 text-body">
$226.51
              </h3>
              <div className="badge badge-phoenix badge-phoenix-success">
+0.62 (0.27%)
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-auto">
            <div className="d-flex flex-wrap gap-2">
              <button className="btn btn-primary flex-1" id="offcanvasStockDetails" data-bs-toggle={"offcanvas"} data-bs-target={"#stockDetailsSidebar"} aria-controls="stockDetailsSidebar">
Buy Share
              </button>
              <button className="btn btn-phoenix-secondary">
                <span className="fas fa-clock">                </span>
              </button>
              <button className="btn btn-phoenix-secondary">
                <span className="fas fa-eye">                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-5 top-stock-card-container">
        <div className="offcanvas offcanvas-end stock-offcanvas-xl bg-body-emphasis border-xl rounded-xl scrollbar" id="stockDetailsSidebar" aria-labelledby="offcanvasStockDetails" style={{"maxWidth":"24rem"} as CSSProperties}>
          <div className="offcanvas-body p-0">
            <div className="card border-0">
              <div className="card-body">
                <div className="row g-0 flex-between-center mb-4">
                  <div className="col-auto">
                    <h4 className="text-body-highlight font-bold mb-0 text-xl-center">
Stock Details 
                    </h4>
                  </div>
                  <div className="col-auto d-xl-none">
                    <button className="btn btn-link btn-sm fs-8 text-body" data-bs-dismiss={"offcanvas"} aria-label="close">
                      <span className="fa-solid fa-xmark">                      </span>
                    </button>
                  </div>
                </div>
                <div className="card border p-3 text-center bg-body mb-3">
                  <h3 className="mb-2 lh-sm text-body d-flex align-items-center gap-2 justify-content-center">
 $226.51 
                    <div className="badge badge-phoenix badge-phoenix-success fs-10">
+0.62 (0.27%)
                    </div>
                  </h3>
                  <h6 className="lh-sm text-body mb-2">
 Real time quote: Sep 24, 2024, 
                    <span className="text-nowrap">
1:34 PM
                    </span>
                  </h6>
                  <div className="row py-3">
                    <div className="col-6 border-end">
                      <h6 className="lh-sm text-body">
Bid x Size 
                      </h6>
                      <h5 className="fw-semibold text-body mb-0">
 226.51
                        <span className="fs-9">
x 100
                        </span>
                      </h5>
                    </div>
                    <div className="col-6">
                      <h6 className="lh-sm text-body">
Ask x Size 
                      </h6>
                      <h5 className="fw-semibold text-body mb-0">
 226.51
                        <span className="fs-9">
x 100
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
                <ul className="mb-3 nav nav-underline text-center gap-0 optionChainTableHeader" id="buyAndSellTab" role="tablist">
                  <li className="nav-item w-50">
                    <a href="#tab-buy" className="nav-link" id="buy-tab"  data-bs-toggle={"tab"} role="tab" aria-controls="tab-buy" aria-selected="true">
Buy
                    </a>
                  </li>
                  <li className="nav-item w-50">
                    <a href="#tab-sell" className="nav-link" id="sell-tab"  data-bs-toggle={"tab"} role="tab" aria-controls="tab-sell" aria-selected="false">
Sell 
                    </a>
                  </li>
                </ul>
                <div className="tab-content mb-3" id="buyAndSellTabContent">
                  <div className="tab-pane fade show active" id="tab-buy" role="tabpanel" aria-labelledby="buy-tab">
                    <div className="mb-3">
                      <label className="fs-9 lh-sm fw-semibold mb-2 text-body-emphasis ps-0">
Order type
                      </label>
                      <select className="form-select" name="order-type">
                        <option value="market">
Market buy 
                        </option>
                        <option value="share">
Share buy
                        </option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="fs-9 lh-sm fw-semibold mb-2 text-body-emphasis ps-0">
Shares
                      </label>
                      <input className="form-control" type="text" name="shares" placeholder="Enter shares" />
                    </div>
                    <div className="mb-3">
                      <label className="fs-9 lh-sm fw-semibold mb-2 text-body-emphasis ps-0">
Amount
                      </label>
                      <div className="input-group">
                        <span className="input-group-text border-end-0">
$
                        </span>
                        <input className="form-control" type="text" name="amount" placeholder="Enter amount" />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="fs-9 lh-sm fw-semibold mb-2 text-body-emphasis ps-0">
Account
                      </label>
                      <select className="form-select" name="account">
                        <option value="">
Select account 
                        </option>
                        <option value="debit">
Debit
                        </option>
                      </select>
                    </div>
                    <div className="d-flex flex-between-center gap-3 mb-3">
                      <h5 className="text-body fw-semibold mb-0">
Available cash
                      </h5>
                      <p className="mb-0">
$65.89 USD
                      </p>
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      <button className="btn btn-sm btn-primary flex-1">
Buy Share
                      </button>
                      <button className="btn btn-sm btn-phoenix-secondary">
                        <span className="fas fa-clock">                        </span>
                      </button>
                      <button className="btn btn-sm btn-phoenix-secondary">
                        <span className="fas fa-eye">                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab-sell" role="tabpanel" aria-labelledby="sell-tab">
                    <div className="mb-3">
                      <label className="fs-9 lh-sm fw-semibold mb-2 text-body-emphasis ps-0">
Order type
                      </label>
                      <select className="form-select" name="sellOrderType">
                        <option value="market">
Market Sell 
                        </option>
                        <option value="share">
Share sell
                        </option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="fs-9 lh-sm fw-semibold mb-2 text-body-emphasis ps-0">
Shares
                      </label>
                      <input className="form-control" type="text" name="sellShares" placeholder="Enter shares" />
                    </div>
                    <div className="mb-3">
                      <label className="fs-9 lh-sm fw-semibold mb-2 text-body-emphasis ps-0">
Amount
                      </label>
                      <div className="input-group">
                        <span className="input-group-text border-end-0">
$
                        </span>
                        <input className="form-control" type="text" name="sellAmount" placeholder="Enter amount" />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="fs-9 lh-sm fw-semibold mb-2 text-body-emphasis ps-0">
Account
                      </label>
                      <select className="form-select" name="sellAccount">
                        <option value="">
Select account 
                        </option>
                        <option value="debit">
Debit
                        </option>
                      </select>
                    </div>
                    <div className="d-flex flex-between-center gap-3 mb-3">
                      <h5 className="text-body fw-semibold mb-0">
Available shares
                      </h5>
                      <p className="mb-0">
100
                      </p>
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      <button className="btn btn-sm btn-primary flex-1">
Sell Share
                      </button>
                      <button className="btn btn-sm btn-phoenix-secondary">
                        <span className="fas fa-clock">                        </span>
                      </button>
                      <button className="btn btn-sm btn-phoenix-secondary">
                        <span className="fas fa-eye">                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-between-center border-y py-3 mb-4">
                  <h5 className="text-body mb-0">
Stock available
                  </h5>
                  <a href="#!" className="d-flex align-items-center gap-2 link-primary fw-bold">
32,432,234                    <span className="fas fa-up-right-from-square">                    </span>
                  </a>
                </div>
                <h5 className="lh-sm text-center fw-bolder">
Options Chain
                </h5>
                <div className="swiper-theme-container nav tabDetailsOptionChainTab">
                  <div className="swiper theme-slider" data-swiper={"{\"loop\":true,\"slidesPerView\":3,\"breakpoints\":{\"0\":{\"slidesPerView\":3},\"992\":{\"slidesPerView\":2.8},\"1400\":{\"slidesPerView\":3}},\"grabCursor\":true,\"navigation\":true}"}>
                    <div className="swiper-wrapper">
                      <div className="swiper-slide nav-item">
                        <button className="nav-link text-center fs-9 lh-sm w-100 active">
May 20, 24
                        </button>
                      </div>
                      <div className="swiper-slide nav-item">
                        <button className="nav-link text-center fs-9 lh-sm w-100">
Jun 01, 24
                        </button>
                      </div>
                      <div className="swiper-slide nav-item">
                        <button className="nav-link text-center fs-9 lh-sm w-100">
Jun 15, 24
                        </button>
                      </div>
                      <div className="swiper-slide nav-item">
                        <button className="nav-link text-center fs-9 lh-sm w-100">
Jun 29, 24
                        </button>
                      </div>
                      <div className="swiper-slide nav-item">
                        <button className="nav-link text-center fs-9 lh-sm w-100">
Jul 11, 24
                        </button>
                      </div>
                      <div className="swiper-slide nav-item">
                        <button className="nav-link text-center fs-9 lh-sm w-100">
Jul 28, 24
                        </button>
                      </div>
                    </div>
                    <div className="swiper-nav">
                      <div className="swiper-button-next">
                        <span className="fas fa-chevron-right nav-icon">                        </span>
                      </div>
                      <div className="swiper-button-prev">
                        <span className="fas fa-chevron-left nav-icon">                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-responsive scrollbar">
                  <table className="table text-center">
                    <thead>
                      <tr className="fs-9 border-top border-translucent"><th colSpan={2}>
Calls
                        </th>
                        <th className="border-x border-translucent">
Strike Price 
                        </th>
                        <th colSpan={2}>
Puts
                        </th>
                      </tr>
                      <tr className="fs-10 text-uppercase"><th>
BID
                        </th>
                        <th>
ASK 
                        </th>
                        <th className="border-x border-translucent">
Strike
                        </th>
                        <th>
BID
                        </th>
                        <th>
ASK
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="fs-9 fw-semibold"><td className="text-info-dark">
25.15
                        </td>
                        <td className="text-info-dark">
25.30
                        </td>
                        <td className="border-x border-translucent text-body-tertiary fw-bold">
1,656.00
                        </td>
                        <td className="text-info-dark">
1.25 
                        </td>
                        <td className="text-info-dark">
1.27
                        </td>
                      </tr>
                      <tr className="fs-9 fw-semibold"><td className="text-info-dark">
20.80
                        </td>
                        <td className="text-info-dark">
20.90
                        </td>
                        <td className="border-x border-translucent text-body-tertiary fw-bold">
1,657.00
                        </td>
                        <td className="text-info-dark">
1.87 
                        </td>
                        <td className="text-info-dark">
1.89
                        </td>
                      </tr>
                      <tr className="fs-9 fw-semibold"><td className="text-info-dark">
18.90
                        </td>
                        <td className="text-info-dark">
19.00
                        </td>
                        <td className="border-x border-translucent text-body-tertiary fw-bold">
1,590.00
                        </td>
                        <td className="text-info-dark">
2.19 
                        </td>
                        <td className="text-info-dark">
2.26
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <a href="#!" className="btn btn-sm btn-phoenix-primary w-100">
View full stock details                  <span className="ms-2 fas fa-up-right-from-square">                  </span>
                </a>
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
