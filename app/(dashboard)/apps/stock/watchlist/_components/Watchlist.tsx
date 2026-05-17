'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Watchlist() {
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

    <h2 className="mb-4">
Watchlist
    </h2>

    <div className="row flex-between-center g-3 g-lg-5 mb-4">
      <div className="col-auto">
        <h4>
My Watchlist 
        </h4>
        <p className="mb-0 text-body-tertiary">
Brief summary of all projects
        </p>
      </div>
      <div className="col-auto">
        <button className="btn btn-phoenix-secondary me-2">
          <span className="fa-solid fa-sort me-2">          </span>
Reorder Symbol 
        </button>
        <button className="btn btn-phoenix-secondary">
          <span className="fa-solid fa-add me-2">          </span>
Add Symbol
        </button>
      </div>
    </div>

    <div className="row pb-5 pb-md-7 pb-xl-9">
      <div className="col-12">
        <div className="card mb-3">
          <div className="card-body">
            <div className="d-flex flex-wrap flex-between-center gap-3 gap-xxl-5">
              <a href="#holdingSummary" className="btn d-flex align-items-center gap-2 p-0 watchlist-collapsible collapse-indicator" data-bs-toggle={"collapse"}  role="button" aria-expanded="true" aria-controls="holdingSummary">
                <span className="fa-solid fa-chevron-down toggle-icon">                </span>                <h4 className="fs-8 fs-sm-7 mb-0 text-body-highlight">
Holdings Summary
                </h4>
              </a>
              <div className="scrollbar summery-statistics">
                <div className="row g-0 flex-nowrap py-1">
                  <div className="col-auto pe-4 border-end">
                    <div className="d-flex align-items-center gap-2">
                      <h6 className="fw-normal text-body-tertiary mb-0">
Total Holding
                      </h6>
                      <h5 className="mb-0 text-body">
$1,000.00
                      </h5>
                      <div className="badge badge-phoenix badge-phoenix-success fs-10">
+1.71%
                      </div>
                    </div>
                  </div>
                  <div className="col-auto px-4 border-end">
                    <div className="d-flex align-items-center gap-2">
                      <h6 className="fw-normal text-body-tertiary mb-0">
Day Change
                      </h6>
                      <h5 className="mb-0 text-danger">
-$5,000.00
                      </h5>
                      <div className="badge badge-phoenix badge-phoenix-danger fs-10">
+1.71%
                      </div>
                    </div>
                  </div>
                  <div className="col-auto ps-4">
                    <div className="d-flex align-items-center gap-2">
                      <h6 className="fw-normal text-body-tertiary mb-0">
Unrealized Gain/Loss
                      </h6>
                      <h5 className="mb-0 text-success">
+$3,000.00
                      </h5>
                      <div className="badge badge-phoenix badge-phoenix-success fs-10">
+1.71%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse show" id="holdingSummary">
              <div className="row g-0 mt-3">
                <div className="col-12 col-xl-4 col-xxl-3 pe-xl-5 border-end-xl overflow-hidden">
                  <h3 className="mb-3">
Summery
                  </h3>
                  <table className="table mb-2">
                    <tbody>
                      <tr>
                        <td className="align-middle p-0 pb-2 border-bottom-0">
                          <p className="mb-0">
Market Value
                          </p>
                        </td>
                        <td className="align-middle text-end p-0 pb-2 border-bottom-0">
                          <h5 className="fw-semibold mb-0">
$688.43
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-middle p-0 pb-2 border-bottom-0">
                          <p className="mb-0">
Day Change
                          </p>
                        </td>
                        <td className="align-middle text-end p-0 pb-2 border-bottom-0">
                          <h5 className="mb-0 fw-semibold">
+$0.00 (0.00%)
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-middle p-0 pb-2 border-bottom-0">
                          <p className="mb-0">
Unrealized G/L
                          </p>
                        </td>
                        <td className="align-middle text-end p-0 pb-2 border-bottom-0">
                          <h5 className="mb-0 fw-semibold text-danger">
+$0.00 (0.00%)
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-middle p-0 pb-3 border-bottom-0">
                          <p className="mb-0">
Realized Value
                          </p>
                        </td>
                        <td className="align-middle text-end p-0 pb-3 border-bottom-0">
                          <h5 className="mb-0 fw-semibold">
$0.00
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-middle p-0 pt-3 border-bottom-0 border-top border-dashed">
                          <h4 className="mb-0">
Total: 
                          </h4>
                        </td>
                        <td className="align-middle text-end p-0 pt-3 border-bottom-0 border-top border-dashed">
                          <h4 className="mb-0">
$688.43
                          </h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-xl-8 col-xxl-9 ps-xl-5 mt-5 mt-xl-0">
                  <div className="row g-3 g-xxl-5 flex-between-center mb-3">
                    <div className="col-12 col-xxl-auto">
                      <h4>
 Chart Report 
                      </h4>
                      <p className="mb-0">
{"No. of bookings fulfilled & cancelled"}
                      </p>
                    </div>
                    <div className="col-12 col-xxl-auto">
                      <div className="scrollbar">
                        <div className="btn-group btn-group-sm stock-btn-group" role="group" aria-label="portfolio-chart-btn-group">
                          <button className="btn btn-phoenix-secondary" data-bar-filter data-value={"1d"}>
1D
                          </button>
                          <button className="btn btn-phoenix-secondary" data-bar-filter data-value={"5d"}>
5D
                          </button>
                          <button className="btn btn-phoenix-secondary" data-bar-filter data-value={"1m"}>
1M
                          </button>
                          <button className="btn btn-phoenix-secondary" data-bar-filter data-value={"3m"}>
3M
                          </button>
                          <button className="btn btn-phoenix-secondary" data-bar-filter data-value={"6m"}>
6M
                          </button>
                          <button className="btn btn-phoenix-secondary active" data-bar-filter data-value={"1y"}>
1Y
                          </button>
                          <button className="btn btn-phoenix-secondary" data-bar-filter data-value={"all"}>
All
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="echart-watchlist-report-chart" style={{"width":"100%","height":"250px"} as CSSProperties}>                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="nav nav-underline optionChainTableHeader fs-9 gap-0" id="watchlist-tab" role="tablist">
          <li className="nav-item">
            <a href="#tab-summary" className="nav-link active pe-3" id="summary-tab" data-bs-toggle={"tab"}  role="tab" aria-controls="tab-summary" aria-selected="true">
Summary
            </a>
          </li>
          <li className="nav-item">
            <a href="#tab-cashTransaction" className="nav-link px-3" id="cashTransaction-tab" data-bs-toggle={"tab"}  role="tab" aria-controls="tab-cashTransaction" aria-selected="false">
Cash Transaction 
            </a>
          </li>
          <li className="nav-item flex-1">
            <a href="#empty-tab-1" className="nav-link h-100 disabled" id="empty-tab1" data-bs-toggle={"tab"}  role="tab" aria-selected="false">

            </a>
          </li>
        </ul>
        <div className="tab-content mt-2" id="watchlist-tabContent">
          <div className="tab-pane fade show active" id="tab-summary" role="tabpanel" aria-labelledby="summary-tab">
            <div className="mt-2" id="summeryTable" data-list={"{\"valueNames\":[\"symbol\",\"lastPrice\",\"change\",\"priceAdds\",\"volume\",\"share\",\"avgVolume\",\"marketCap\",\"actions\"],\"page\":11}"}>
              <div className="table-responsive scrollbar">
                <table className="table">
                  <thead>
                    <tr className="text-uppercase text-body fw-bold fs-9"><th className="sort white-space-nowrap align-middle ps-0" scope="col" style={{"minWidth":"158px"} as CSSProperties} data-sort={"symbol"}>
Symbol
                      </th>
                      <th className="sort align-middle ps-3" scope="col" data-sort={"lastPrice"} style={{"minWidth":"158px"} as CSSProperties}>
Last Price
                      </th>
                      <th className="sort align-middle ps-3" scope="col" data-sort={"change"} style={{"minWidth":"158px"} as CSSProperties}>
Change
                      </th>
                      <th className="sort align-middle ps-0" scope="col" style={{"minWidth":"180px"} as CSSProperties} data-sort={"priceAdds"}>
Price When Addes
                      </th>
                      <th className="sort ps-3 align-middle" scope="col" style={{"minWidth":"120px"} as CSSProperties} data-sort={"volume"}>
volume
                      </th>
                      <th className="sort text-center align-middle" scope="col" style={{"minWidth":"158px"} as CSSProperties} data-sort={"share"}>
share
                      </th>
                      <th className="sort align-middle ps-5" scope="col" style={{"minWidth":"158px"} as CSSProperties} data-sort={"avgVolume"}>
Avg Volume
                      </th>
                      <th className="sort ps-4 align-middle" scope="col" style={{"minWidth":"158px"} as CSSProperties} data-sort={"dayChart"}>
Day Chart
                      </th>
                      <th className="sort align-middle text-end pe-5" scope="col" style={{"minWidth":"180px"} as CSSProperties} data-sort={"marketCap"}>
Market Cap
                      </th>
                      <th className="sort align-middle text-end pe-3" scope="col" style={{"minWidth":"158px"} as CSSProperties} data-sort={"actions"}>
actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="list"><tr>
                      <td className="align-middle symbol white-space-nowrap">
                        <p className="fw-semibold mb-0">
AAPL
                        </p>
                      </td>
                      <td className="align-middle lastPrice white-space-nowrap ps-3">
                        <p className="fs-9 fw-semibold text-body-tertiary mb-0">
 $230.76
                        </p>
                      </td>
                      <td className="align-middle change ps-3 fs-9 text-success">
                        <p className="fw-bold mb-1">
+$0.42
                        </p>
                        <p className="mb-0">
+0.35%
                        </p>
                      </td>
                      <td className="align-middle priceAdds white-space-nowrap ps-0">
                        <p className="fs-9 text-body-tertiary fw-semibold mb-0">
$230.34
                        </p>
                      </td>
                      <td className="align-middle volume white-space-nowrap ps-3">
                        <p className="fs-9 text-body-tertiary mb-0">
50.658M
                        </p>
                      </td>
                      <td className="align-middle share white-space-nowrap text-center">
                        <p className="fw-bold mb-0 fs-9 text-info">
2
                        </p>
                      </td>
                      <td className="align-middle text-center avgVolume ps-5">
                        <p className="fs-9 text-body-tertiary mb-0">
50.658M
                        </p>
                      </td>
                      <td className="align-middle dayChart white-space-nowrap ps-4 py-2">
                        <div className="echart-stock-overview-chart" style={{"width":"109px","height":"44px"} as CSSProperties} data-echarts={"{\"data\":[70,50,85,45,200,193,196,210,198,210,103,120,84,95,130,123,214,245,287,348,356,390]}"}>                        </div>
                      </td>
                      <td className="align-middle marketCap white-space-nowrap pe-5 text-end">
                        <p className="fs-9 text-body-tertiary mb-0">
3.518T
                        </p>
                      </td>
                      <td className="align-middle actions white-space-nowrap pe-3 text-end">
                        <button className="btn btn-link text-body-quaternary p-0 me-2">
                          <span className="fa-solid fa-file-invoice-dollar">                          </span>
                        </button>
                        <button className="btn btn-link text-body-quaternary p-0">
                          <span className="fa-solid fa-trash">                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle symbol white-space-nowrap">
                        <p className="fw-semibold mb-0">
AMZN
                        </p>
                      </td>
                      <td className="align-middle lastPrice white-space-nowrap ps-3">
                        <p className="fs-9 fw-semibold text-body-tertiary mb-0">
 $184.71
                        </p>
                      </td>
                      <td className="align-middle change ps-3 fs-9 text-success">
                        <p className="fw-bold mb-1">
+$0.54
                        </p>
                        <p className="mb-0">
+0.12%
                        </p>
                      </td>
                      <td className="align-middle priceAdds white-space-nowrap ps-0">
                        <p className="fs-9 text-body-tertiary fw-semibold mb-0">
$184.19
                        </p>
                      </td>
                      <td className="align-middle volume white-space-nowrap ps-3">
                        <p className="fs-9 text-body-tertiary mb-0">
34.16M
                        </p>
                      </td>
                      <td className="align-middle share white-space-nowrap text-center">
                        <button className="btn btn-phoenix-secondary btn-sm">
Add
                        </button>
                      </td>
                      <td className="align-middle text-center avgVolume ps-5">
                        <p className="fs-9 text-body-tertiary mb-0">
34.16M
                        </p>
                      </td>
                      <td className="align-middle dayChart white-space-nowrap ps-4 py-2">
                        <div className="echart-stock-overview-mixed-chart" style={{"width":"109px","height":"44px"} as CSSProperties} data-echarts={"{\"data\":[-100,190,200,-200,-190,300,-110,100,-100,250,200,190,-80,50,40,200,-200,200,150,160,300,-100]}"}>                        </div>
                      </td>
                      <td className="align-middle marketCap white-space-nowrap pe-5 text-end">
                        <p className="fs-9 text-body-tertiary mb-0">
1.971T
                        </p>
                      </td>
                      <td className="align-middle actions white-space-nowrap pe-3 text-end">
                        <button className="btn btn-link text-body-quaternary p-0 me-2">
                          <span className="fa-solid fa-file-invoice-dollar">                          </span>
                        </button>
                        <button className="btn btn-link text-body-quaternary p-0">
                          <span className="fa-solid fa-trash">                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle symbol white-space-nowrap">
                        <p className="fw-semibold mb-0">
TSLA
                        </p>
                      </td>
                      <td className="align-middle lastPrice white-space-nowrap ps-3">
                        <p className="fs-9 fw-semibold text-body-tertiary mb-0">
 $213.65
                        </p>
                      </td>
                      <td className="align-middle change ps-3 fs-9 text-danger">
                        <p className="fw-bold mb-1">
-$4.32
                        </p>
                        <p className="mb-0">
-1.98%
                        </p>
                      </td>
                      <td className="align-middle priceAdds white-space-nowrap ps-0">
                        <p className="fs-9 text-body-tertiary fw-semibold mb-0">
$217.97
                        </p>
                      </td>
                      <td className="align-middle volume white-space-nowrap ps-3">
                        <p className="fs-9 text-body-tertiary mb-0">
74.38M
                        </p>
                      </td>
                      <td className="align-middle share white-space-nowrap text-center">
                        <button className="btn btn-phoenix-secondary btn-sm">
Add
                        </button>
                      </td>
                      <td className="align-middle text-center avgVolume ps-5">
                        <p className="fs-9 text-body-tertiary mb-0">
74.38M
                        </p>
                      </td>
                      <td className="align-middle dayChart white-space-nowrap ps-4 py-2">
                        <div className="echart-stock-overview-chart" style={{"width":"109px","height":"44px"} as CSSProperties} data-echarts={"{\"data\":[400,450,500,490,600,550,400,350,320,330,320,450,480,350,345,200,320,400]}"}>                        </div>
                      </td>
                      <td className="align-middle marketCap white-space-nowrap pe-5 text-end">
                        <p className="fs-9 text-body-tertiary mb-0">
864.116B
                        </p>
                      </td>
                      <td className="align-middle actions white-space-nowrap pe-3 text-end">
                        <button className="btn btn-link text-body-quaternary p-0 me-2">
                          <span className="fa-solid fa-file-invoice-dollar">                          </span>
                        </button>
                        <button className="btn btn-link text-body-quaternary p-0">
                          <span className="fa-solid fa-trash">                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle symbol white-space-nowrap">
                        <p className="fw-semibold mb-0">
NVDA
                        </p>
                      </td>
                      <td className="align-middle lastPrice white-space-nowrap ps-3">
                        <p className="fs-9 fw-semibold text-body-tertiary mb-0">
 $121.78
                        </p>
                      </td>
                      <td className="align-middle change ps-3 fs-9 text-success">
                        <p className="fw-bold mb-1">
+$0.12
                        </p>
                        <p className="mb-0">
+0.09%
                        </p>
                      </td>
                      <td className="align-middle priceAdds white-space-nowrap ps-0">
                        <p className="fs-9 text-body-tertiary fw-semibold mb-0">
$120.82
                        </p>
                      </td>
                      <td className="align-middle volume white-space-nowrap ps-3">
                        <p className="fs-9 text-body-tertiary mb-0">
278.17M
                        </p>
                      </td>
                      <td className="align-middle share white-space-nowrap text-center">
                        <button className="btn btn-phoenix-secondary btn-sm">
Add
                        </button>
                      </td>
                      <td className="align-middle text-center avgVolume ps-5">
                        <p className="fs-9 text-body-tertiary mb-0">
278.17M
                        </p>
                      </td>
                      <td className="align-middle dayChart white-space-nowrap ps-4 py-2">
                        <div className="echart-stock-overview-mixed-chart" style={{"width":"109px","height":"44px"} as CSSProperties} data-echarts={"{\"data\":[-100,190,200,-200,-190,300,-110,100,-100,250,200,190,-80,50,40,200,-200,200,150,160,300,-100]}"}>                        </div>
                      </td>
                      <td className="align-middle marketCap white-space-nowrap pe-5 text-end">
                        <p className="fs-9 text-body-tertiary mb-0">
3.472T
                        </p>
                      </td>
                      <td className="align-middle actions white-space-nowrap pe-3 text-end">
                        <button className="btn btn-link text-body-quaternary p-0 me-2">
                          <span className="fa-solid fa-file-invoice-dollar">                          </span>
                        </button>
                        <button className="btn btn-link text-body-quaternary p-0">
                          <span className="fa-solid fa-trash">                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle symbol white-space-nowrap">
                        <p className="fw-semibold mb-0">
GOOG
                        </p>
                      </td>
                      <td className="align-middle lastPrice white-space-nowrap ps-3">
                        <p className="fs-9 fw-semibold text-body-tertiary mb-0">
 $164.48
                        </p>
                      </td>
                      <td className="align-middle change ps-3 fs-9 text-danger">
                        <p className="fw-bold mb-1">
-$2.34
                        </p>
                        <p className="mb-0">
-1.40%
                        </p>
                      </td>
                      <td className="align-middle priceAdds white-space-nowrap ps-0">
                        <p className="fs-9 text-body-tertiary fw-semibold mb-0">
$166.82
                        </p>
                      </td>
                      <td className="align-middle volume white-space-nowrap ps-3">
                        <p className="fs-9 text-body-tertiary mb-0">
15.57M
                        </p>
                      </td>
                      <td className="align-middle share white-space-nowrap text-center">
                        <p className="fw-bold mb-0 fs-9 text-info">
4
                        </p>
                      </td>
                      <td className="align-middle text-center avgVolume ps-5">
                        <p className="fs-9 text-body-tertiary mb-0">
15.57M
                        </p>
                      </td>
                      <td className="align-middle dayChart white-space-nowrap ps-4 py-2">
                        <div className="echart-stock-overview-chart" style={{"width":"109px","height":"44px"} as CSSProperties} data-echarts={"{\"data\":[70,50,85,45,200,193,196,210,198,210,103,120,84,95,130,123,214,245,287,348,356,390]}"}>                        </div>
                      </td>
                      <td className="align-middle marketCap white-space-nowrap pe-5 text-end">
                        <p className="fs-9 text-body-tertiary mb-0">
2.013T
                        </p>
                      </td>
                      <td className="align-middle actions white-space-nowrap pe-3 text-end">
                        <button className="btn btn-link text-body-quaternary p-0 me-2">
                          <span className="fa-solid fa-file-invoice-dollar">                          </span>
                        </button>
                        <button className="btn btn-link text-body-quaternary p-0">
                          <span className="fa-solid fa-trash">                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle symbol white-space-nowrap">
                        <p className="fw-semibold mb-0">
INTC
                        </p>
                      </td>
                      <td className="align-middle lastPrice white-space-nowrap ps-3">
                        <p className="fs-9 fw-semibold text-body-tertiary mb-0">
 $21.98
                        </p>
                      </td>
                      <td className="align-middle change ps-3 fs-9 text-danger">
                        <p className="fw-bold mb-1">
-$0.42
                        </p>
                        <p className="mb-0">
-1.88%
                        </p>
                      </td>
                      <td className="align-middle priceAdds white-space-nowrap ps-0">
                        <p className="fs-9 text-body-tertiary fw-semibold mb-0">
$23.89
                        </p>
                      </td>
                      <td className="align-middle volume white-space-nowrap ps-3">
                        <p className="fs-9 text-body-tertiary mb-0">
82.86M
                        </p>
                      </td>
                      <td className="align-middle share white-space-nowrap text-center">
                        <button className="btn btn-phoenix-secondary btn-sm">
Add
                        </button>
                      </td>
                      <td className="align-middle text-center avgVolume ps-5">
                        <p className="fs-9 text-body-tertiary mb-0">
82.86M
                        </p>
                      </td>
                      <td className="align-middle dayChart white-space-nowrap ps-4 py-2">
                        <div className="echart-stock-overview-mixed-chart" style={{"width":"109px","height":"44px"} as CSSProperties} data-echarts={"{\"data\":[100,-190,200,-210,-190,300,-190,100,-100,250,200,190,-80,50,40,200,-200,200,150,160,300,-100]}"}>                        </div>
                      </td>
                      <td className="align-middle marketCap white-space-nowrap pe-5 text-end">
                        <p className="fs-9 text-body-tertiary mb-0">
96.98B
                        </p>
                      </td>
                      <td className="align-middle actions white-space-nowrap pe-3 text-end">
                        <button className="btn btn-link text-body-quaternary p-0 me-2">
                          <span className="fa-solid fa-file-invoice-dollar">                          </span>
                        </button>
                        <button className="btn btn-link text-body-quaternary p-0">
                          <span className="fa-solid fa-trash">                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle symbol white-space-nowrap">
                        <p className="fw-semibold mb-0">
GSPC
                        </p>
                      </td>
                      <td className="align-middle lastPrice white-space-nowrap ps-3">
                        <p className="fs-9 fw-semibold text-body-tertiary mb-0">
 $184.71
                        </p>
                      </td>
                      <td className="align-middle change ps-3 fs-9 text-success">
                        <p className="fw-bold mb-1">
+$0.54
                        </p>
                        <p className="mb-0">
+0.12%
                        </p>
                      </td>
                      <td className="align-middle priceAdds white-space-nowrap ps-0">
                        <p className="fs-9 text-body-tertiary fw-semibold mb-0">
$184.19
                        </p>
                      </td>
                      <td className="align-middle volume white-space-nowrap ps-3">
                        <p className="fs-9 text-body-tertiary mb-0">
34.16M
                        </p>
                      </td>
                      <td className="align-middle share white-space-nowrap text-center">
                        <button className="btn btn-phoenix-secondary btn-sm">
Add
                        </button>
                      </td>
                      <td className="align-middle text-center avgVolume ps-5">
                        <p className="fs-9 text-body-tertiary mb-0">
34.16M
                        </p>
                      </td>
                      <td className="align-middle dayChart white-space-nowrap ps-4 py-2">
                        <div className="echart-stock-overview-mixed-chart" style={{"width":"109px","height":"44px"} as CSSProperties} data-echarts={"{\"data\":[-100,190,200,-200,-190,300,-110,100,-100,250,200,190,-80,50,40,200,-200,200,150,160,300,-100]}"}>                        </div>
                      </td>
                      <td className="align-middle marketCap white-space-nowrap pe-5 text-end">
                        <p className="fs-9 text-body-tertiary mb-0">
1.971T
                        </p>
                      </td>
                      <td className="align-middle actions white-space-nowrap pe-3 text-end">
                        <button className="btn btn-link text-body-quaternary p-0 me-2">
                          <span className="fa-solid fa-file-invoice-dollar">                          </span>
                        </button>
                        <button className="btn btn-link text-body-quaternary p-0">
                          <span className="fa-solid fa-trash">                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle symbol white-space-nowrap">
                        <p className="fw-semibold mb-0">
IBRX
                        </p>
                      </td>
                      <td className="align-middle lastPrice white-space-nowrap ps-3">
                        <p className="fs-9 fw-semibold text-body-tertiary mb-0">
 $213.65
                        </p>
                      </td>
                      <td className="align-middle change ps-3 fs-9 text-danger">
                        <p className="fw-bold mb-1">
-$4.32
                        </p>
                        <p className="mb-0">
-1.98%
                        </p>
                      </td>
                      <td className="align-middle priceAdds white-space-nowrap ps-0">
                        <p className="fs-9 text-body-tertiary fw-semibold mb-0">
$217.97
                        </p>
                      </td>
                      <td className="align-middle volume white-space-nowrap ps-3">
                        <p className="fs-9 text-body-tertiary mb-0">
74.38
                        </p>
                      </td>
                      <td className="align-middle share white-space-nowrap text-center">
                        <button className="btn btn-phoenix-secondary btn-sm">
Add
                        </button>
                      </td>
                      <td className="align-middle text-center avgVolume ps-5">
                        <p className="fs-9 text-body-tertiary mb-0">
74.38
                        </p>
                      </td>
                      <td className="align-middle dayChart white-space-nowrap ps-4 py-2">
                        <div className="echart-stock-overview-chart" style={{"width":"109px","height":"44px"} as CSSProperties} data-echarts={"{\"data\":[400,450,500,490,600,550,400,350,320,330,320,450,480,350,345,200,320,400]}"}>                        </div>
                      </td>
                      <td className="align-middle marketCap white-space-nowrap pe-5 text-end">
                        <p className="fs-9 text-body-tertiary mb-0">
864.116B
                        </p>
                      </td>
                      <td className="align-middle actions white-space-nowrap pe-3 text-end">
                        <button className="btn btn-link text-body-quaternary p-0 me-2">
                          <span className="fa-solid fa-file-invoice-dollar">                          </span>
                        </button>
                        <button className="btn btn-link text-body-quaternary p-0">
                          <span className="fa-solid fa-trash">                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle symbol white-space-nowrap">
                        <p className="fw-semibold mb-0">
NIO
                        </p>
                      </td>
                      <td className="align-middle lastPrice white-space-nowrap ps-3">
                        <p className="fs-9 fw-semibold text-body-tertiary mb-0">
 $121.78
                        </p>
                      </td>
                      <td className="align-middle change ps-3 fs-9 text-success">
                        <p className="fw-bold mb-1">
+$0.12
                        </p>
                        <p className="mb-0">
+0.09%
                        </p>
                      </td>
                      <td className="align-middle priceAdds white-space-nowrap ps-0">
                        <p className="fs-9 text-body-tertiary fw-semibold mb-0">
$120.82
                        </p>
                      </td>
                      <td className="align-middle volume white-space-nowrap ps-3">
                        <p className="fs-9 text-body-tertiary mb-0">
278.1M
                        </p>
                      </td>
                      <td className="align-middle share white-space-nowrap text-center">
                        <button className="btn btn-phoenix-secondary btn-sm">
Add
                        </button>
                      </td>
                      <td className="align-middle text-center avgVolume ps-5">
                        <p className="fs-9 text-body-tertiary mb-0">
278.1M
                        </p>
                      </td>
                      <td className="align-middle dayChart white-space-nowrap ps-4 py-2">
                        <div className="echart-stock-overview-inverted-chart" style={{"width":"109px","height":"44px"} as CSSProperties} data-echarts={"{\"data\":[-500,-300,-250,-280,-150,-250,-300,-180,-145,-250,-46,-250,-90,-80,-85,-150,-250,-180,-175,-50]}"}>                        </div>
                      </td>
                      <td className="align-middle marketCap white-space-nowrap pe-5 text-end">
                        <p className="fs-9 text-body-tertiary mb-0">
3.472T
                        </p>
                      </td>
                      <td className="align-middle actions white-space-nowrap pe-3 text-end">
                        <button className="btn btn-link text-body-quaternary p-0 me-2">
                          <span className="fa-solid fa-file-invoice-dollar">                          </span>
                        </button>
                        <button className="btn btn-link text-body-quaternary p-0">
                          <span className="fa-solid fa-trash">                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle symbol white-space-nowrap">
                        <p className="fw-semibold mb-0">
TLN
                        </p>
                      </td>
                      <td className="align-middle lastPrice white-space-nowrap ps-3">
                        <p className="fs-9 fw-semibold text-body-tertiary mb-0">
 $164.48
                        </p>
                      </td>
                      <td className="align-middle change ps-3 fs-9 text-danger">
                        <p className="fw-bold mb-1">
-$2.34
                        </p>
                        <p className="mb-0">
-1.40%
                        </p>
                      </td>
                      <td className="align-middle priceAdds white-space-nowrap ps-0">
                        <p className="fs-9 text-body-tertiary fw-semibold mb-0">
$166.82
                        </p>
                      </td>
                      <td className="align-middle volume white-space-nowrap ps-3">
                        <p className="fs-9 text-body-tertiary mb-0">
15.57M
                        </p>
                      </td>
                      <td className="align-middle share white-space-nowrap text-center">
                        <button className="btn btn-phoenix-secondary btn-sm">
Add
                        </button>
                      </td>
                      <td className="align-middle text-center avgVolume ps-5">
                        <p className="fs-9 text-body-tertiary mb-0">
15.57M
                        </p>
                      </td>
                      <td className="align-middle dayChart white-space-nowrap ps-4 py-2">
                        <div className="echart-stock-overview-chart" style={{"width":"109px","height":"44px"} as CSSProperties} data-echarts={"{\"data\":[70,50,85,45,200,193,196,210,198,210,103,120,84,95,130,123,214,245,287,348,356,390]}"}>                        </div>
                      </td>
                      <td className="align-middle marketCap white-space-nowrap pe-5 text-end">
                        <p className="fs-9 text-body-tertiary mb-0">
2.013T
                        </p>
                      </td>
                      <td className="align-middle actions white-space-nowrap pe-3 text-end">
                        <button className="btn btn-link text-body-quaternary p-0 me-2">
                          <span className="fa-solid fa-file-invoice-dollar">                          </span>
                        </button>
                        <button className="btn btn-link text-body-quaternary p-0">
                          <span className="fa-solid fa-trash">                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle symbol white-space-nowrap">
                        <p className="fw-semibold mb-0">
ES=F
                        </p>
                      </td>
                      <td className="align-middle lastPrice white-space-nowrap ps-3">
                        <p className="fs-9 fw-semibold text-body-tertiary mb-0">
 $21.98
                        </p>
                      </td>
                      <td className="align-middle change ps-3 fs-9 text-danger">
                        <p className="fw-bold mb-1">
-$0.42
                        </p>
                        <p className="mb-0">
-1.88%
                        </p>
                      </td>
                      <td className="align-middle priceAdds white-space-nowrap ps-0">
                        <p className="fs-9 text-body-tertiary fw-semibold mb-0">
$23.89
                        </p>
                      </td>
                      <td className="align-middle volume white-space-nowrap ps-3">
                        <p className="fs-9 text-body-tertiary mb-0">
82.86M
                        </p>
                      </td>
                      <td className="align-middle share white-space-nowrap text-center">
                        <button className="btn btn-phoenix-secondary btn-sm">
Add
                        </button>
                      </td>
                      <td className="align-middle text-center avgVolume ps-5">
                        <p className="fs-9 text-body-tertiary mb-0">
82.86M
                        </p>
                      </td>
                      <td className="align-middle dayChart white-space-nowrap ps-4 py-2">
                        <div className="echart-stock-overview-chart" style={{"width":"109px","height":"44px"} as CSSProperties} data-echarts={"{\"data\":[0,200,150,120,155,115,125,160,150,145,140,90,20,120,110,80,120,40,90,210,220]}"}>                        </div>
                      </td>
                      <td className="align-middle marketCap white-space-nowrap pe-5 text-end">
                        <p className="fs-9 text-body-tertiary mb-0">
3.518T
                        </p>
                      </td>
                      <td className="align-middle actions white-space-nowrap pe-3 text-end">
                        <button className="btn btn-link text-body-quaternary p-0 me-2">
                          <span className="fa-solid fa-file-invoice-dollar">                          </span>
                        </button>
                        <button className="btn btn-link text-body-quaternary p-0">
                          <span className="fa-solid fa-trash">                          </span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tab-cashTransaction" role="tabpanel" aria-labelledby="cashTransaction-tab">
            <div className="row mt-4 flex-between-center">
              <div className="col-auto">
                <h4>
Cash Transaction Report
                </h4>
                <p className="mb-0 text-body-tertiary">
Brief summary of all projects
                </p>
              </div>
              <div className="col-auto">
                <button className="btn btn-phoenix-secondary btn-sm" type="button" data-bs-toggle={"modal"} data-bs-target={"#CashTransactionModal"}>
                  <span className="fa-solid fa-add me-2">                  </span>
Add Cash Transaction
                </button>
              </div>
            </div>
            <div className="mt-2" id="cashTransactionTable" data-list={"{\"valueNames\":[\"date\",\"type\",\"amount\",\"currency\",\"note\"],\"page\":11}"}>
              <div className="table-responsive scrollbar">
                <table className="table">
                  <thead>
                    <tr className="text-uppercase text-body fw-bold fs-9"><th className="sort white-space-nowrap align-middle ps-0" scope="col" style={{"minWidth":"240px"} as CSSProperties} data-sort={"date"}>
Date
                      </th>
                      <th className="sort align-middle ps-3" scope="col" data-sort={"type"} style={{"minWidth":"240px"} as CSSProperties}>
Type
                      </th>
                      <th className="sort align-middle ps-0" scope="col" data-sort={"amount"} style={{"minWidth":"140px"} as CSSProperties}>
amount
                      </th>
                      <th className="sort align-middle text-center" scope="col" style={{"minWidth":"120px"} as CSSProperties} data-sort={"currency"}>
currency
                      </th>
                      <th className="sort align-middle text-end" scope="col" style={{"minWidth":"350px"} as CSSProperties} data-sort={"note"}>
note
                      </th>
                      <th className="sort text-center align-middle" scope="col" style={{"minWidth":"72px"} as CSSProperties}>                      </th>
                    </tr>
                  </thead>
                  <tbody className="list"><tr>
                      <td className="align-middle date white-space-nowrap">
                        <p className="fw-semibold mb-0">
10 Nov, 2024
                        </p>
                      </td>
                      <td className="align-middle type white-space-nowrap ps-3">
                        <p className="fs-9 fw-semibold text-body-tertiary mb-0">
Withdrawal
                        </p>
                      </td>
                      <td className="align-middle amount ps-0">
                        <p className="fw-semibold text-body-tertiary mb-0 fs-9">
$230.34
                        </p>
                      </td>
                      <td className="align-middle currency white-space-nowrap text-center">
                        <p className="fs-9 text-body-tertiary mb-0">
USD
                        </p>
                      </td>
                      <td className="align-middle note white-space-nowrap text-end">
                        <p className="fs-9 text-body-tertiary mb-0">
Cash Withdrawal Completed
                        </p>
                      </td>
                      <td className="align-middle note white-space-nowrap text-end">
                        <button className="btn btn-link text-body-quaternary btn-sm p-0">
                          <span className="fa-solid fa-trash">                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle date white-space-nowrap">
                        <p className="fw-semibold mb-0">
01 Nov, 2024
                        </p>
                      </td>
                      <td className="align-middle type white-space-nowrap ps-3">
                        <p className="fs-9 fw-semibold text-body-tertiary mb-0">
Deposit
                        </p>
                      </td>
                      <td className="align-middle amount ps-0">
                        <p className="fw-semibold text-body-tertiary mb-0 fs-9">
$184.19
                        </p>
                      </td>
                      <td className="align-middle currency white-space-nowrap text-center">
                        <p className="fs-9 text-body-tertiary mb-0">
USD
                        </p>
                      </td>
                      <td className="align-middle note white-space-nowrap text-end">
                        <p className="fs-9 text-body-tertiary mb-0">
Funds Withdrawn Successfully
                        </p>
                      </td>
                      <td className="align-middle note white-space-nowrap text-end">
                        <button className="btn btn-link text-body-quaternary btn-sm p-0">
                          <span className="fa-solid fa-trash">                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle date white-space-nowrap">
                        <p className="fw-semibold mb-0">
23 Oct, 2024
                        </p>
                      </td>
                      <td className="align-middle type white-space-nowrap ps-3">
                        <p className="fs-9 fw-semibold text-body-tertiary mb-0">
Income
                        </p>
                      </td>
                      <td className="align-middle amount ps-0">
                        <p className="fw-semibold text-body-tertiary mb-0 fs-9">
$217.97
                        </p>
                      </td>
                      <td className="align-middle currency white-space-nowrap text-center">
                        <p className="fs-9 text-body-tertiary mb-0">
USD
                        </p>
                      </td>
                      <td className="align-middle note white-space-nowrap text-end">
                        <p className="fs-9 text-body-tertiary mb-0">
Withdrawal Confirmed
                        </p>
                      </td>
                      <td className="align-middle note white-space-nowrap text-end">
                        <button className="btn btn-link text-body-quaternary btn-sm p-0">
                          <span className="fa-solid fa-trash">                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle date white-space-nowrap">
                        <p className="fw-semibold mb-0">
13 Oct, 2024
                        </p>
                      </td>
                      <td className="align-middle type white-space-nowrap ps-3">
                        <p className="fs-9 fw-semibold text-body-tertiary mb-0">
Fee
                        </p>
                      </td>
                      <td className="align-middle amount ps-0">
                        <p className="fw-semibold text-body-tertiary mb-0 fs-9">
$120.82
                        </p>
                      </td>
                      <td className="align-middle currency white-space-nowrap text-center">
                        <p className="fs-9 text-body-tertiary mb-0">
CAD
                        </p>
                      </td>
                      <td className="align-middle note white-space-nowrap text-end">
                        <p className="fs-9 text-body-tertiary mb-0">
Cash Disbursed
                        </p>
                      </td>
                      <td className="align-middle note white-space-nowrap text-end">
                        <button className="btn btn-link text-body-quaternary btn-sm p-0">
                          <span className="fa-solid fa-trash">                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle date white-space-nowrap">
                        <p className="fw-semibold mb-0">
03 Oct, 2024
                        </p>
                      </td>
                      <td className="align-middle type white-space-nowrap ps-3">
                        <p className="fs-9 fw-semibold text-body-tertiary mb-0">
Withdrawal
                        </p>
                      </td>
                      <td className="align-middle amount ps-0">
                        <p className="fw-semibold text-body-tertiary mb-0 fs-9">
$166.82
                        </p>
                      </td>
                      <td className="align-middle currency white-space-nowrap text-center">
                        <p className="fs-9 text-body-tertiary mb-0">
CAD
                        </p>
                      </td>
                      <td className="align-middle note white-space-nowrap text-end">
                        <p className="fs-9 text-body-tertiary mb-0">
Withdrawal Request Fulfilled
                        </p>
                      </td>
                      <td className="align-middle note white-space-nowrap text-end">
                        <button className="btn btn-link text-body-quaternary btn-sm p-0">
                          <span className="fa-solid fa-trash">                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle date white-space-nowrap">
                        <p className="fw-semibold mb-0">
23 Sep, 2024
                        </p>
                      </td>
                      <td className="align-middle type white-space-nowrap ps-3">
                        <p className="fs-9 fw-semibold text-body-tertiary mb-0">
Deposit
                        </p>
                      </td>
                      <td className="align-middle amount ps-0">
                        <p className="fw-semibold text-body-tertiary mb-0 fs-9">
$23.89
                        </p>
                      </td>
                      <td className="align-middle currency white-space-nowrap text-center">
                        <p className="fs-9 text-body-tertiary mb-0">
CAD
                        </p>
                      </td>
                      <td className="align-middle note white-space-nowrap text-end">
                        <p className="fs-9 text-body-tertiary mb-0">
Withdrawal Processed
                        </p>
                      </td>
                      <td className="align-middle note white-space-nowrap text-end">
                        <button className="btn btn-link text-body-quaternary btn-sm p-0">
                          <span className="fa-solid fa-trash">                          </span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="CashTransactionModal" role="dialog" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-600">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h4 className="text-body-highlight mb-0">
Add Transaction 
                </h4>
                <button className="btn btn-link text-danger fs-9 ms-auto p-1" type="button" data-bs-dismiss={"modal"} aria-label="Close">
                  <span className="fa-solid fa-xmark">                  </span>
                </button>
              </div>
              <div className="modal-body">
                <div className="bg-body-highlight rounded-3 row g-0 gap-3 p-3 flex-between-center mb-4">
                  <div className="col-auto">
                    <p className="fw-bold mb-0">
Stock Name : Apple Inc
                    </p>
                  </div>
                  <div className="col-auto">
                    <p className="fw-bold mb-0">
NASDAQ : AAPL
                    </p>
                  </div>
                </div>
                <div className="row g-3 form">
                  <div className="col-sm-6">
                    <label className="fw-bold text-body-highlight mb-2">
Type 
                    </label>
                    <select className="form-select" name="type">
                      <option value="buy">
Buy 
                      </option>
                      <option value="sell">
Sell 
                      </option>
                      <option value="hold">
Hold 
                      </option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <label className="fw-bold text-body-highlight mb-2">
Date 
                    </label>
                    <div className="position-relative flatpickr-input-container">
                      <input className="form-control form-control-sm datetimepicker px-5" type="text" placeholder="dd/mm/yyyy" data-options={"{\"disableMobile\":true}"} />
                      <span className="fa-solid fa-calendar-alt text-body position-absolute top-50 translate-middle-y fs-9" style={{"left":"1rem"} as CSSProperties}>                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label className="fw-bold text-body-highlight mb-2">
Cost per share
                    </label>
                    <input className="form-control input-spin-none" type="number" name="costPerShare" placeholder="Enter cost per Share..." />
                  </div>
                  <div className="col-sm-6">
                    <label className="fw-bold text-body-highlight mb-2" htmlFor="currency">
Currency 
                    </label>
                    <select className="form-select" id="currency" name="currency">
                      <option value="usd">
USD 
                      </option>
                      <option value="cad">
CAD 
                      </option>
                      <option value="yen">
YEN 
                      </option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <label className="fw-bold text-body-highlight mb-2">
Share Quantity
                    </label>
                    <input className="form-control input-spin-none" type="number" name="shareQuantity" placeholder="Enter share quantity..." />
                  </div>
                  <div className="col-sm-6">
                    <label className="fw-bold text-body-highlight mb-2">
Commission 
                    </label>
                    <select className="form-select" name="commission">
                      <option value="">
Select 
                      </option>
                      <option value="20%">
20% 
                      </option>
                      <option value="25%">
25%
                      </option>
                    </select>
                  </div>
                  <div className="col-12 mb-4">
                    <label className="fw-bold text-body-highlight mb-2">
Note 
                    </label>
                    <input className="form-control" type="text" name="note" placeholder="Write a note..." />
                    <span className="text-end fs-8 lh-sm mt-2 d-block">
                      <span className="text-primary fw-semibold">
15
                      </span>
                      <span className="text-body-quaternary">
/16
                      </span>
                    </span>
                  </div>
                  <div className="col-12">
                    <div className="row flex-between-center g-3 border-top border-dashed">
                      <div className="col-auto">
                        <h4 className="mb-0">
Total Cost: 
                        </h4>
                      </div>
                      <div className="col-auto">
                        <h4 className="mb-0">
$562.08
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 text-end">
                    <button className="btn btn-link text-secondary btn-sm" type="button">
Cancel 
                    </button>
                    <button className="btn btn-primary btn-sm" type="submit">
 Add Transaction
                    </button>
                  </div>
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
