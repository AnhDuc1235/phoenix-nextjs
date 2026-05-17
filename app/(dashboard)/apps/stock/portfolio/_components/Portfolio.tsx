'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Portfolio() {
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

    <div className="row flex-between-center g-3 g-lg-5 mb-3">
      <div className="col-auto">
        <h2 className="mb-0">
My Portfolio
        </h2>
      </div>
      <div className="col-auto">
        <button className="btn btn-phoenix-secondary bg-body-emphasis me-2">
Create new Portfolio 
          <span className="fa-solid fa-add ms-2">          </span>
        </button>
        <button className="btn btn-phoenix-secondary bg-body-emphasis btn-sm px-md-4">
          <span className="fa-solid fa-print">          </span>
          <span className="d-none d-md-inline ms-2">
 Print
          </span>
        </button>
        <button className="btn btn-sm btn-phoenix-secondary bg-body-emphasis d-xl-none ms-2" id="portfolioOffcanvas" data-bs-toggle={"offcanvas"} data-bs-target={"#portfolioSidebar"} aria-controls="portfolioSidebar">
          <span className="fa-solid fa-mattress-pillow">          </span>
        </button>
      </div>
    </div>

    <div className="row g-3 g-lg-5 pb-5 pb-md-7 pb-xl-9">
      <div className="col-xl-7 flex-1">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row justify-content-between g-3 g-xxl-5 pb-4 pb-md-5">
              <div className="col-12">
                <h5 className="text-body">
All Portfolio Holding
                </h5>
                <h4 className="text-body mb-0">
$12,000.00
                </h4>
              </div>
              <div className="col-12">
                <div className="scrollbar">
                  <div className="row g-0 flex-nowrap">
                    <div className="col-auto border-end pe-4">
                      <h6 className="text-body-tertiary">
Cash Holding
                      </h6>
                      <div className="d-flex gap-2 align-items-center">
                        <p className="mb-0 fw-bold">
$1.1K
                        </p>
                        <div className="badge badge-phoenix fs-10 badge-phoenix-success">
 +1.71%
                        </div>
                      </div>
                    </div>
                    <div className="col-auto px-4 border-end">
                      <h6 className="text-body-tertiary">
Day Change
                      </h6>
                      <div className="d-flex gap-2 align-items-center">
                        <p className="mb-0 fw-bold text-danger">
-$1.3K
                        </p>
                        <div className="badge badge-phoenix fs-10 badge-phoenix-danger">
 +1.71%
                        </div>
                      </div>
                    </div>
                    <div className="col-auto border-end px-4">
                      <h6 className="text-body-tertiary">
Unrealized Gain/Loss
                      </h6>
                      <div className="d-flex gap-2 align-items-center">
                        <p className="mb-0 fw-bold text-danger">
-$5.5K
                        </p>
                        <div className="badge badge-phoenix fs-10 badge-phoenix-danger">
 +1.71%
                        </div>
                      </div>
                    </div>
                    <div className="col-auto ps-4">
                      <h6 className="text-body-tertiary">
Realized Gain/Loss
                      </h6>
                      <div className="d-flex gap-2 align-items-center">
                        <p className="mb-0 fw-bold text-success">
+$3.5K
                        </p>
                        <div className="badge badge-phoenix fs-10 badge-phoenix-success">
 +1.71%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row flex-between-center g-3 mb-4">
              <div className="col-12 col-xxl-auto">
                <h4>
Portfolio Chart
                </h4>
                <p className="mb-0">
{"No. of bookings fulfilled & cancelled"}
                </p>
              </div>
              <div className="col-12 col-xxl-auto">
                <div className="scrollbar">
                  <div className="btn-group btn-group-sm stock-btn-group" role="group" aria-label="portfolio-chart-btn-group">
                    <button className="btn btn-phoenix-secondary" data-line-filter data-value={"1d"}>
1D
                    </button>
                    <button className="btn btn-phoenix-secondary" data-line-filter data-value={"5d"}>
5D
                    </button>
                    <button className="btn btn-phoenix-secondary" data-line-filter data-value={"1m"}>
1M
                    </button>
                    <button className="btn btn-phoenix-secondary" data-line-filter data-value={"3m"}>
3M
                    </button>
                    <button className="btn btn-phoenix-secondary" data-line-filter data-value={"6m"}>
6M
                    </button>
                    <button className="btn btn-phoenix-secondary active" data-line-filter data-value={"1y"}>
1Y
                    </button>
                    <button className="btn btn-phoenix-secondary" data-line-filter data-value={"all"}>
All
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="echart-portfolio-line-chart" style={{"width":"100%","minHeight":"25rem"} as CSSProperties}>            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-12">
            <h4>
My Portfolio 
            </h4>
            <p className="text-body-tertiary mb-0">
Brief summary of all projects
            </p>
          </div>
          <div className="col-12">
            <div id="portfolioTable" data-list={"{\"valueNames\":[\"portfolioName\",\"symbols\",\"costBasis\",\"marketValue\",\"dayChange\",\"unrealized\",\"realized\"],\"page\":7,\"pagination\":false}"}>
              <div className="table-responsive scrollbar">
                <table className="table mb-0">
                  <thead>
                    <tr className="text-uppercase border-top text-body fw-bold fs-9"><th className="sort white-space-nowrap align-middle ps-0" scope="col" style={{"minWidth":"180px"} as CSSProperties} data-sort={"portfolioName"}>
Portfolio Name
                      </th>
                      <th className="sort align-middle text-center" scope="col" data-sort={"symbols"} style={{"minWidth":"120px"} as CSSProperties}>
symbols
                      </th>
                      <th className="sort align-middle ps-3" scope="col" data-sort={"costBasis"} style={{"minWidth":"150px"} as CSSProperties}>
cost basis
                      </th>
                      <th className="sort align-middle ps-3" scope="col" style={{"minWidth":"160px"} as CSSProperties} data-sort={"marketValue"}>
Market value
                      </th>
                      <th className="sort ps-3 align-middle" scope="col" style={{"minWidth":"140px"} as CSSProperties} data-sort={"dayChange"}>
Day Change
                      </th>
                      <th className="sort pe-3 text-end align-middle" scope="col" style={{"minWidth":"220px"} as CSSProperties} data-sort={"unrealized"}>
Unrealized gain / loss
                      </th>
                      <th className="sort align-middle text-end" scope="col" style={{"minWidth":"180px"} as CSSProperties} data-sort={"realized"}>
realized gain / loss
                      </th>
                    </tr>
                  </thead>
                  <tbody className="list"><tr>
                      <td className="align-middle portfolioName white-space-nowrap">
                        <p className="fw-semibold mb-0">
My Watchlist
                        </p>
                      </td>
                      <td className="align-middle symbols white-space-nowrap text-center">
                        <p className="fs-9 fw-semibold text-body-tertiary mb-0">
11
                        </p>
                      </td>
                      <td className="align-middle text-center costBasis ps-3">
                        <p className="fs-9 text-body-tertiary mb-0">
$26,514.56
                        </p>
                      </td>
                      <td className="align-middle marketValue white-space-nowrap ps-3">
                        <p className="fs-9 text-body-tertiary mb-0">
$3.46 T
                        </p>
                      </td>
                      <td className="align-middle dayChange white-space-nowrap ps-3">
                        <div className="text-success">
                          <p className="fs-9 fw-bold mb-1">
+$978.90
                          </p>
                          <p className="fs-9 fw-bold mb-1">
+0.74%
                          </p>
                        </div>
                      </td>
                      <td className="align-middle unrealized white-space-nowrap text-end pe-3">
                        <div className="text-success">
                          <p className="fs-9 fw-bold mb-1">
+$2,429.49
                          </p>
                          <p className="fs-9 fw-bold mb-1">
+0.74%
                          </p>
                        </div>
                      </td>
                      <td className="align-middle realized white-space-nowrap text-end">
                        <div className="text-danger">
                          <p className="fs-9 fw-bold mb-1">
-$321.42
                          </p>
                          <p className="fs-9 fw-bold mb-1">
-0.74%
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle portfolioName white-space-nowrap">
                        <p className="fw-semibold mb-0">
Phoenix Growth Fund
                        </p>
                      </td>
                      <td className="align-middle symbols white-space-nowrap text-center">
                        <p className="fs-9 fw-semibold text-body-tertiary mb-0">
14
                        </p>
                      </td>
                      <td className="align-middle text-center costBasis ps-3">
                        <p className="fs-9 text-body-tertiary mb-0">
$95,987.90
                        </p>
                      </td>
                      <td className="align-middle marketValue white-space-nowrap ps-3">
                        <p className="fs-9 text-body-tertiary mb-0">
$2.02 T
                        </p>
                      </td>
                      <td className="align-middle dayChange white-space-nowrap ps-3">
                        <div className="text-success">
                          <p className="fs-9 fw-bold mb-1">
+$872.96
                          </p>
                          <p className="fs-9 fw-bold mb-1">
+0.74%
                          </p>
                        </div>
                      </td>
                      <td className="align-middle unrealized white-space-nowrap text-end pe-3">
                        <div className="text-danger">
                          <p className="fs-9 fw-bold mb-1">
-$60.95
                          </p>
                          <p className="fs-9 fw-bold mb-1">
-0.74%
                          </p>
                        </div>
                      </td>
                      <td className="align-middle realized white-space-nowrap text-end">
                        <div className="text-danger">
                          <p className="fs-9 fw-bold mb-1">
-$23.42
                          </p>
                          <p className="fs-9 fw-bold mb-1">
-1.98%
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle portfolioName white-space-nowrap">
                        <p className="fw-semibold mb-0">
Titanium Edge
                        </p>
                      </td>
                      <td className="align-middle symbols white-space-nowrap text-center">
                        <p className="fs-9 fw-semibold text-body-tertiary mb-0">
8
                        </p>
                      </td>
                      <td className="align-middle text-center costBasis ps-3">
                        <p className="fs-9 text-body-tertiary mb-0">
$30,675.98
                        </p>
                      </td>
                      <td className="align-middle marketValue white-space-nowrap ps-3">
                        <p className="fs-9 text-body-tertiary mb-0">
$1.98 T
                        </p>
                      </td>
                      <td className="align-middle dayChange white-space-nowrap ps-3">
                        <div className="text-success">
                          <p className="fs-9 fw-bold mb-1">
+$823.12
                          </p>
                          <p className="fs-9 fw-bold mb-1">
+0.74%
                          </p>
                        </div>
                      </td>
                      <td className="align-middle unrealized white-space-nowrap text-end pe-3">
                        <div className="text-success">
                          <p className="fs-9 fw-bold mb-1">
+$639.12
                          </p>
                          <p className="fs-9 fw-bold mb-1">
+2.15%
                          </p>
                        </div>
                      </td>
                      <td className="align-middle realized white-space-nowrap text-end">
                        <div className="text-success">
                          <p className="fs-9 fw-bold mb-1">
+$98.86
                          </p>
                          <p className="fs-9 fw-bold mb-1">
+2.74%
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle portfolioName white-space-nowrap">
                        <p className="fw-semibold mb-0">
Apex Capital
                        </p>
                      </td>
                      <td className="align-middle symbols white-space-nowrap text-center">
                        <p className="fs-9 fw-semibold text-body-tertiary mb-0">
9
                        </p>
                      </td>
                      <td className="align-middle text-center costBasis ps-3">
                        <p className="fs-9 text-body-tertiary mb-0">
$12,789.98
                        </p>
                      </td>
                      <td className="align-middle marketValue white-space-nowrap ps-3">
                        <p className="fs-9 text-body-tertiary mb-0">
$3.09 T
                        </p>
                      </td>
                      <td className="align-middle dayChange white-space-nowrap ps-3">
                        <div className="text-success">
                          <p className="fs-9 fw-bold mb-1">
+$129.21
                          </p>
                          <p className="fs-9 fw-bold mb-1">
+0.74%
                          </p>
                        </div>
                      </td>
                      <td className="align-middle unrealized white-space-nowrap text-end pe-3">
                        <div className="text-danger">
                          <p className="fs-9 fw-bold mb-1">
-$978.99
                          </p>
                          <p className="fs-9 fw-bold mb-1">
-0.54%
                          </p>
                        </div>
                      </td>
                      <td className="align-middle realized white-space-nowrap text-end">
                        <div className="text-danger">
                          <p className="fs-9 fw-bold mb-1">
-$61.93
                          </p>
                          <p className="fs-9 fw-bold mb-1">
-2.74%
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle portfolioName white-space-nowrap">
                        <p className="fw-semibold mb-0">
Blue Horizon Fund
                        </p>
                      </td>
                      <td className="align-middle symbols white-space-nowrap text-center">
                        <p className="fs-9 fw-semibold text-body-tertiary mb-0">
11
                        </p>
                      </td>
                      <td className="align-middle text-center costBasis ps-3">
                        <p className="fs-9 text-body-tertiary mb-0">
$2,787.49
                        </p>
                      </td>
                      <td className="align-middle marketValue white-space-nowrap ps-3">
                        <p className="fs-9 text-body-tertiary mb-0">
$5,815.03
                        </p>
                      </td>
                      <td className="align-middle dayChange white-space-nowrap ps-3">
                        <div className="text-success">
                          <p className="fs-9 fw-bold mb-1">
+$312.95
                          </p>
                          <p className="fs-9 fw-bold mb-1">
+0.74%
                          </p>
                        </div>
                      </td>
                      <td className="align-middle unrealized white-space-nowrap text-end pe-3">
                        <div className="text-success">
                          <p className="fs-9 fw-bold mb-1">
+$125.42
                          </p>
                          <p className="fs-9 fw-bold mb-1">
+1.74%
                          </p>
                        </div>
                      </td>
                      <td className="align-middle realized white-space-nowrap text-end">
                        <div className="text-success">
                          <p className="fs-9 fw-bold mb-1">
+$100.90
                          </p>
                          <p className="fs-9 fw-bold mb-1">
+5.74%
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle portfolioName white-space-nowrap">
                        <p className="fw-semibold mb-0">
Navigator Fund
                        </p>
                      </td>
                      <td className="align-middle symbols white-space-nowrap text-center">
                        <p className="fs-9 fw-semibold text-body-tertiary mb-0">
17
                        </p>
                      </td>
                      <td className="align-middle text-center costBasis ps-3">
                        <p className="fs-9 text-body-tertiary mb-0">
$5,987.98
                        </p>
                      </td>
                      <td className="align-middle marketValue white-space-nowrap ps-3">
                        <p className="fs-9 text-body-tertiary mb-0">
$589.95
                        </p>
                      </td>
                      <td className="align-middle dayChange white-space-nowrap ps-3">
                        <p className="text-body-tertiary mb-0 fw-bold">
---
                        </p>
                      </td>
                      <td className="align-middle unrealized white-space-nowrap text-end pe-3">
                        <p className="text-body-tertiary mb-0 fw-bold">
---
                        </p>
                      </td>
                      <td className="align-middle realized white-space-nowrap text-end">
                        <div className="text-success">
                          <p className="fs-9 fw-bold mb-1">
+$72.42
                          </p>
                          <p className="fs-9 fw-bold mb-1">
+1.51%
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle portfolioName white-space-nowrap">
                        <p className="fw-semibold mb-0">
Equity Elevation
                        </p>
                      </td>
                      <td className="align-middle symbols white-space-nowrap text-center">
                        <p className="fs-9 fw-semibold text-body-tertiary mb-0">
21
                        </p>
                      </td>
                      <td className="align-middle text-center costBasis ps-3">
                        <p className="fs-9 text-body-tertiary mb-0">
$19,845.37
                        </p>
                      </td>
                      <td className="align-middle marketValue white-space-nowrap ps-3">
                        <p className="fs-9 text-body-tertiary mb-0">
$3.32 T
                        </p>
                      </td>
                      <td className="align-middle dayChange white-space-nowrap ps-3">
                        <div className="text-danger">
                          <p className="fs-9 fw-bold mb-1">
-$120.31
                          </p>
                          <p className="fs-9 fw-bold mb-1">
-1.74%
                          </p>
                        </div>
                      </td>
                      <td className="align-middle unrealized white-space-nowrap text-end pe-3">
                        <div className="text-success">
                          <p className="fs-9 fw-bold mb-1">
+$2,429.49
                          </p>
                          <p className="fs-9 fw-bold mb-1">
+0.51%
                          </p>
                        </div>
                      </td>
                      <td className="align-middle realized white-space-nowrap text-end">
                        <p className="text-body-tertiary mb-0 fw-bold">
---
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-5 portfolio-sidebar-container">
        <div className="offcanvas offcanvas-end stock-offcanvas-xl bg-body-emphasis border-xl rounded-xl scrollbar" id="portfolioSidebar" tabIndex={-1} aria-labelledby="portfolioOffcanvas">
          <div className="offcanvas-body p-0">
            <div className="card border-0">
              <div className="card-body">
                <div className="row flex-between-center mb-4">
                  <div className="col-auto col-xl-12">
                    <h4 className="mb-0 text-body-highlight text-xl-center">
Quote Lookup
                    </h4>
                  </div>
                  <div className="col-auto d-xl-none">
                    <button className="btn btn-link btn-sm fs-8 p-0 text-body-secondary" data-bs-dismiss={"offcanvas"} aria-label="close">
                      <span className="fa-solid fa-xmark">                      </span>
                    </button>
                  </div>
                </div>
                <div className="search-box w-100 mb-3">
                  <form className="position-relative">
                    <input className="form-control search-input search" type="search" placeholder="Search symbol" aria-label="Search" />
                    <span className="fas fa-search search-box-icon">                    </span>
                  </form>
                </div>
                <div className="table-responsive scrollbar overflow-x-hidden">
                  <table className="table mb-0">
                    <tbody className="border-top"><tr>
                        <td className="align-middle white-space-nowrap" style={{"minWidth":"112px"} as CSSProperties}>
                          <p className="mb-0 fw-semibold text-uppercase">
AAPL
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap" style={{"minWidth":"112px"} as CSSProperties}>
                          <h5 className="text-body">
$232.98
                          </h5>
                          <p className="fs-9 mb-0 text-success">
                            <span className="me-1 fw-bold">
+$0.42
                            </span>
                            <span>
+0.35%
                            </span>
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap d-flex align-items-center" style={{"minWidth":"112px"} as CSSProperties}>
                          <div className="echart-stock-overview-chart" style={{"width":"80px","minHeight":"44px"} as CSSProperties} data-echarts={"{\"data\":[70,50,85,45,200,193,196,210,198,210,103,120,84,95,130,123,214,245,287,348,356,390]}"}>                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-middle white-space-nowrap" style={{"minWidth":"112px"} as CSSProperties}>
                          <p className="mb-0 fw-semibold text-uppercase">
Tsla
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap" style={{"minWidth":"112px"} as CSSProperties}>
                          <h5 className="text-body">
$269.19
                          </h5>
                          <p className="fs-9 mb-0 text-danger">
                            <span className="me-1 fw-bold">
-$0.42
                            </span>
                            <span>
-0.35%
                            </span>
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap d-flex align-items-center" style={{"minWidth":"112px"} as CSSProperties}>
                          <div className="echart-stock-overview-mixed-chart" style={{"width":"80px","minHeight":"44px"} as CSSProperties} data-echarts={"{\"data\":[-100,190,200,-200,-190,300,-110,100,-100,250,200,190,-80,50,40,200,-200,200,150,160,300,-100]}"}>                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-middle white-space-nowrap" style={{"minWidth":"112px"} as CSSProperties}>
                          <p className="mb-0 fw-semibold text-uppercase">
NVDA
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap" style={{"minWidth":"112px"} as CSSProperties}>
                          <h5 className="text-body">
$141.54
                          </h5>
                          <p className="fs-9 mb-0 text-success">
                            <span className="me-1 fw-bold">
+$0.42
                            </span>
                            <span>
+0.35%
                            </span>
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap d-flex align-items-center" style={{"minWidth":"112px"} as CSSProperties}>
                          <div className="echart-stock-overview-chart" style={{"width":"80px","minHeight":"44px"} as CSSProperties} data-echarts={"{\"data\":[400,450,500,490,600,550,400,350,320,330,320,450,480,350,345,200,320,400]}"}>                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-middle white-space-nowrap" style={{"minWidth":"112px"} as CSSProperties}>
                          <p className="mb-0 fw-semibold text-uppercase">
AMZN
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap" style={{"minWidth":"112px"} as CSSProperties}>
                          <h5 className="text-body">
$187.83
                          </h5>
                          <p className="fs-9 mb-0 text-danger">
                            <span className="me-1 fw-bold">
-$2.42
                            </span>
                            <span>
-2.35%
                            </span>
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap d-flex align-items-center" style={{"minWidth":"112px"} as CSSProperties}>
                          <div className="echart-stock-overview-inverted-chart" style={{"width":"80px","minHeight":"44px"} as CSSProperties} data-echarts={"{\"data\":[-500,-300,-250,-280,-150,-250,-300,-180,-145,-250,-46,-250,-90,-80,-85,-150,-250,-180,-175,-50]}"}>                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-middle white-space-nowrap" style={{"minWidth":"112px"} as CSSProperties}>
                          <p className="mb-0 fw-semibold text-uppercase">
MSFT
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap" style={{"minWidth":"112px"} as CSSProperties}>
                          <h5 className="text-body">
$428.15
                          </h5>
                          <p className="fs-9 mb-0 text-success">
                            <span className="me-1 fw-bold">
+$5.42
                            </span>
                            <span>
+1.21%
                            </span>
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap d-flex align-items-center" style={{"minWidth":"112px"} as CSSProperties}>
                          <div className="echart-stock-overview-chart" style={{"width":"80px","minHeight":"44px"} as CSSProperties} data-echarts={"{\"data\":[70,50,85,45,200,193,196,210,198,210,103,120,84,95,130,123,214,245,287,348,356,390]}"}>                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-middle white-space-nowrap" style={{"minWidth":"112px"} as CSSProperties}>
                          <p className="mb-0 fw-semibold text-uppercase">
GOOG
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap" style={{"minWidth":"112px"} as CSSProperties}>
                          <h5 className="text-body">
$232.98
                          </h5>
                          <p className="fs-9 mb-0 text-success">
                            <span className="me-1 fw-bold">
+$0.42
                            </span>
                            <span>
+0.54%
                            </span>
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap d-flex align-items-center" style={{"minWidth":"112px"} as CSSProperties}>
                          <div className="echart-stock-overview-chart" style={{"width":"80px","minHeight":"44px"} as CSSProperties} data-echarts={"{\"data\":[400,450,500,490,600,550,400,350,320,330,320,450,480,350,345,200,320,400]}"}>                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-middle white-space-nowrap" style={{"minWidth":"112px"} as CSSProperties}>
                          <p className="mb-0 fw-semibold text-uppercase">
ADBE
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap" style={{"minWidth":"112px"} as CSSProperties}>
                          <h5 className="text-body">
$166.99
                          </h5>
                          <p className="fs-9 mb-0 text-success">
                            <span className="me-1 fw-bold">
+$1.11
                            </span>
                            <span>
+0.35%
                            </span>
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap d-flex align-items-center" style={{"minWidth":"112px"} as CSSProperties}>
                          <div className="echart-stock-overview-inverted-chart" style={{"width":"80px","minHeight":"44px"} as CSSProperties} data-echarts={"{\"data\":[-500,-300,-250,-280,-150,-250,-300,-180,-145,-250,-46,-250,-90,-80,-85,-150,-250,-180,-175,-50]}"}>                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-middle white-space-nowrap" style={{"minWidth":"112px"} as CSSProperties}>
                          <p className="mb-0 fw-semibold text-uppercase">
AMD
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap" style={{"minWidth":"112px"} as CSSProperties}>
                          <h5 className="text-body">
$156.23
                          </h5>
                          <p className="fs-9 mb-0 text-danger">
                            <span className="me-1 fw-bold">
-$0.42
                            </span>
                            <span>
-0.35%
                            </span>
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap d-flex align-items-center" style={{"minWidth":"112px"} as CSSProperties}>
                          <div className="echart-stock-overview-mixed-chart" style={{"width":"80px","minHeight":"44px"} as CSSProperties} data-echarts={"{\"data\":[-120,200,230,-230,-190,300,-110,100,-100,250,200,190,-80,80,50,200,-200,220,150,140,310,-150]}"}>                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-middle white-space-nowrap" style={{"minWidth":"112px"} as CSSProperties}>
                          <p className="mb-0 fw-semibold text-uppercase">
NFLX
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap" style={{"minWidth":"112px"} as CSSProperties}>
                          <h5 className="text-body">
$754.68
                          </h5>
                          <p className="fs-9 mb-0 text-success">
                            <span className="me-1 fw-bold">
+$0.42
                            </span>
                            <span>
+0.35%
                            </span>
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap d-flex align-items-center" style={{"minWidth":"112px"} as CSSProperties}>
                          <div className="echart-stock-overview-chart" style={{"width":"80px","minHeight":"44px"} as CSSProperties} data-echarts={"{\"data\":[390,356,348,287,245,214,123,130,95,84,120,103,210,198,210,196,193,200,45,85,70,50]}"}>                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-middle white-space-nowrap" style={{"minWidth":"112px"} as CSSProperties}>
                          <p className="mb-0 fw-semibold text-uppercase">
NDQA
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap" style={{"minWidth":"112px"} as CSSProperties}>
                          <h5 className="text-body">
$74.69
                          </h5>
                          <p className="fs-9 mb-0 text-danger">
                            <span className="me-1 fw-bold">
-$0.42
                            </span>
                            <span>
-0.35%
                            </span>
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap d-flex align-items-center" style={{"minWidth":"112px"} as CSSProperties}>
                          <div className="echart-stock-overview-chart" style={{"width":"80px","minHeight":"44px"} as CSSProperties} data-echarts={"{\"data\":[500,450,600,690,700,550,400,450,480,450,445,300,420,600]}"}>                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
