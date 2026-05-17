'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Widgets() {
  return (
    <div suppressHydrationWarning>

    <div className="widgets-scrollspy-nav mt-n5 bg-body-emphasis z-5 mx-n4 mx-lg-n6 border-bottom">
      <nav className="simplebar-scrollspy navbar py-0 scrollbar-overlay" id="widgets-scrollspy">
        <ul className="nav flex-nowrap">
          <li className="nav-item">
            <a href="#scrollspyStats" className="nav-link text-body-tertiary fw-bold py-3 lh-1 text-nowrap">
Number Stats and Charts
            </a>
          </li>
          <li className="nav-item">
            <a href="#scrollspyTables" className="nav-link text-body-tertiary fw-bold py-3 lh-1 text-nowrap">
Tables, Files, and Lists
            </a>
          </li>
          <li className="nav-item">
            <a href="#scrollspyEcommerce" className="nav-link text-body-tertiary fw-bold py-3 lh-1 text-nowrap">
E-commerce
            </a>
          </li>
          <li className="nav-item">
            <a href="#scrollspyUsers" className="nav-link text-body-tertiary fw-bold py-3 lh-1 text-nowrap">
{"Users & Feed"}
            </a>
          </li>
          <li className="nav-item">
            <a href="#scrollspyForms" className="nav-link text-body-tertiary fw-bold py-3 lh-1 text-nowrap">
Forms
            </a>
          </li>
          <li className="nav-item">
            <a href="#scrollspyOthers" className="nav-link text-body-tertiary fw-bold py-3 lh-1 text-nowrap">
Others
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div className="mb-9" data-bs-spy={"scroll"} data-bs-target={"#widgets-scrollspy"}>
      <div className="d-flex mb-5 pt-8" id="scrollspyStats">
        <span className="fa-stack me-2 ms-n1">
          <i className="fas fa-circle fa-stack-2x text-primary">          </i>
          <i className="fa-inverse fa-stack-1x text-primary-subtle fas fa-percentage">          </i>
        </span>
        <div className="col">
          <h3 className="mb-0 text-primary position-relative fw-bold">
            <span className="bg-body pe-2">
{"Number Stats & Charts"}
            </span>
            <span className="border border-primary position-absolute top-50 translate-middle-y w-100 start-0 z-n1">            </span>
          </h3>
          <p className="mb-0">
You can easily show your stats content by using these cards.
          </p>
        </div>
      </div>
      <div className="px-3 mb-5">
        <div className="row justify-content-between">
          <div className="col-6 col-md-4 col-xxl-2 text-center border-translucent border-start-xxl border-end-xxl-0 border-bottom-xxl-0 border-end border-bottom pb-4 pb-xxl-0 ">
            <span className="uil fs-5 lh-1 uil-envelope text-primary">            </span>
            <h1 className="fs-5 pt-3">
2,800
            </h1>
            <p className="fs-9 mb-0">
Total Emails
            </p>
          </div>
          <div className="col-6 col-md-4 col-xxl-2 text-center border-translucent border-start-xxl border-end-xxl-0 border-bottom-xxl-0 border-end-md border-bottom pb-4 pb-xxl-0">
            <span className="uil fs-5 lh-1 uil-envelope-upload text-info">            </span>
            <h1 className="fs-5 pt-3">
1,866
            </h1>
            <p className="fs-9 mb-0">
Emails Sent
            </p>
          </div>
          <div className="col-6 col-md-4 col-xxl-2 text-center border-translucent border-start-xxl border-bottom-xxl-0 border-bottom border-end border-end-md-0 pb-4 pb-xxl-0 pt-4 pt-md-0">
            <span className="uil fs-5 lh-1 uil-envelopes text-primary">            </span>
            <h1 className="fs-5 pt-3">
1,366
            </h1>
            <p className="fs-9 mb-0">
Emails Delivered
            </p>
          </div>
          <div className="col-6 col-md-4 col-xxl-2 text-center border-translucent border-start-xxl border-end-md border-end-xxl-0 border-bottom border-bottom-md-0 pb-4 pb-xxl-0 pt-4 pt-xxl-0">
            <span className="uil fs-5 lh-1 uil-envelope-open text-info">            </span>
            <h1 className="fs-5 pt-3">
1,200
            </h1>
            <p className="fs-9 mb-0">
Emails Opened
            </p>
          </div>
          <div className="col-6 col-md-4 col-xxl-2 text-center border-translucent border-start-xxl border-end border-end-xxl-0 pb-md-4 pb-xxl-0 pt-4 pt-xxl-0">
            <span className="uil fs-5 lh-1 uil-envelope-check text-success">            </span>
            <h1 className="fs-5 pt-3">
900
            </h1>
            <p className="fs-9 mb-0">
Emails Clicked
            </p>
          </div>
          <div className="col-6 col-md-4 col-xxl-2 text-center border-translucent border-start-xxl border-end-xxl pb-md-4 pb-xxl-0 pt-4 pt-xxl-0">
            <span className="uil fs-5 lh-1 uil-envelope-block text-danger">            </span>
            <h1 className="fs-5 pt-3">
500
            </h1>
            <p className="fs-9 mb-0">
Emails Bounce
            </p>
          </div>
        </div>
      </div>
      <div className="row g-3 mb-5">
        <div className="col-md-6 col-xxl-3">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="mb-1">
Total orders
                    <span className="badge badge-phoenix badge-phoenix-warning rounded-pill fs-9 ms-2">
                      <span className="badge-label">
-6.8%
                      </span>
                    </span>
                  </h5>
                  <h6 className="text-body-tertiary">
Last 7 days
                  </h6>
                </div>
                <h4>
16,247
                </h4>
              </div>
              <div className="d-flex justify-content-center px-4 py-6">
                <div className="echart-total-orders" style={{"height":"85px","width":"115px"} as CSSProperties}>                </div>
              </div>
              <div className="mt-2">
                <div className="d-flex align-items-center mb-2">
                  <div className="bullet-item bg-primary me-2">                  </div>
                  <h6 className="text-body fw-semibold flex-1 mb-0">
Completed
                  </h6>
                  <h6 className="text-body fw-semibold mb-0">
52%
                  </h6>
                </div>
                <div className="d-flex align-items-center">
                  <div className="bullet-item bg-primary-subtle me-2">                  </div>
                  <h6 className="text-body fw-semibold flex-1 mb-0">
Pending payment
                  </h6>
                  <h6 className="text-body fw-semibold mb-0">
48%
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xxl-3">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="mb-1">
New customers
                    <span className="badge badge-phoenix badge-phoenix-warning rounded-pill fs-9 ms-2">
                      <span className="badge-label">
+26.5%
                      </span>
                    </span>
                  </h5>
                  <h6 className="text-body-tertiary">
Last 7 days
                  </h6>
                </div>
                <h4>
356
                </h4>
              </div>
              <div className="pb-0 pt-4">
                <div className="echarts-new-customers" style={{"height":"180px","width":"100%"} as CSSProperties}>                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xxl-3">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="mb-2">
Top coupons
                  </h5>
                  <h6 className="text-body-tertiary">
Last 7 days
                  </h6>
                </div>
              </div>
              <div className="pb-4 pt-3">
                <div className="echart-top-coupons" style={{"height":"115px","width":"100%"} as CSSProperties}>                </div>
              </div>
              <div>
                <div className="d-flex align-items-center mb-2">
                  <div className="bullet-item bg-primary me-2">                  </div>
                  <h6 className="text-body fw-semibold flex-1 mb-0">
Percentage discount
                  </h6>
                  <h6 className="text-body fw-semibold mb-0">
72%
                  </h6>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <div className="bullet-item bg-primary-lighter me-2">                  </div>
                  <h6 className="text-body fw-semibold flex-1 mb-0">
Fixed card discount
                  </h6>
                  <h6 className="text-body fw-semibold mb-0">
18%
                  </h6>
                </div>
                <div className="d-flex align-items-center">
                  <div className="bullet-item bg-info-dark me-2">                  </div>
                  <h6 className="text-body fw-semibold flex-1 mb-0">
Fixed product discount
                  </h6>
                  <h6 className="text-body fw-semibold mb-0">
10%
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xxl-3">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="mb-2">
Paying vs non paying
                  </h5>
                  <h6 className="text-body-tertiary">
Last 7 days
                  </h6>
                </div>
              </div>
              <div className="d-flex justify-content-center pt-3 flex-1">
                <div className="echarts-paying-customer-chart" style={{"height":"100%","width":"100%"} as CSSProperties}>                </div>
              </div>
              <div className="mt-3">
                <div className="d-flex align-items-center mb-2">
                  <div className="bullet-item bg-primary me-2">                  </div>
                  <h6 className="text-body fw-semibold flex-1 mb-0">
Paying customer
                  </h6>
                  <h6 className="text-body fw-semibold mb-0">
30%
                  </h6>
                </div>
                <div className="d-flex align-items-center">
                  <div className="bullet-item bg-primary-subtle me-2">                  </div>
                  <h6 className="text-body fw-semibold flex-1 mb-0">
Non-paying customer
                  </h6>
                  <h6 className="text-body fw-semibold mb-0">
70%
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row gx-4 gy-6 pb-5">
        <div className="col-xxl-6">
          <div className="mb-3">
            <h3>
{"New Users & Leads"}
            </h3>
            <p className="text-body-tertiary mb-0">
Payment received across all channels
            </p>
          </div>
          <div className="row g-6">
            <div className="col-md-6 mb-2 mb-sm-0">
              <div className="d-flex align-items-center">
                <span className="me-2 text-info" data-feather={"users"} style={{"minHeight":"24px","width":"24px"} as CSSProperties}>                </span>
                <h4 className="text-body-tertiary mb-0">
New Users :
                  <span className="text-body-emphasis">
 42
                  </span>
                </h4>
                <span className="badge badge-phoenix fs-10 badge-phoenix-success d-inline-flex align-items-center ms-2">
                  <span className="badge-label d-inline-block lh-base">
+24.5%
                  </span>
                  <span className="ms-1 fa-solid fa-caret-up d-inline-block lh-1">                  </span>
                </span>
              </div>
              <div className="pb-0 pt-4">
                <div className="echarts-new-users" style={{"minHeight":"110px","width":"100%"} as CSSProperties}>                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <span className="me-2 text-primary" data-feather={"zap"} style={{"height":"24px","width":"24px"} as CSSProperties}>                </span>
                <h4 className="text-body-tertiary mb-0">
New Leads :
                  <span className="text-body-emphasis">
 45
                  </span>
                </h4>
                <span className="badge badge-phoenix fs-10 badge-phoenix-success d-inline-flex align-items-center ms-2">
                  <span className="badge-label d-inline-block lh-base">
+30.5%
                  </span>
                  <span className="ms-1 fa-solid fa-caret-up d-inline-block lh-1">                  </span>
                </span>
              </div>
              <div className="pb-0 pt-4">
                <div className="echarts-new-leads" style={{"minHeight":"110px","width":"100%"} as CSSProperties}>                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-6">
          <div className="row">
            <div className="col-sm-7 col-md-8 col-xxl-8 mb-md-3 mb-lg-0">
              <h3>
New Contacts by Source
              </h3>
              <p className="text-body-tertiary">
Payment received across all channels
              </p>
              <div className="row g-0">
                <div className="col-6 col-xl-4">
                  <div className="d-flex flex-column flex-center align-items-sm-start flex-md-row justify-content-md-between flex-xxl-column p-3 ps-sm-3 ps-md-4 p-md-3 h-100 border-1 border-bottom border-end border-translucent">
                    <div className="d-flex align-items-center mb-1">
                      <span className="fa-solid fa-square fs-11 me-2 text-primary" data-fa-transform={"up-2"}>                      </span>
                      <span className="mb-0 fs-9 text-body">
Organic
                      </span>
                    </div>
                    <h3 className="fw-semibold ms-xl-3 ms-xxl-0 pe-md-2 pe-xxl-0 mb-0 mb-sm-3">
80
                    </h3>
                  </div>
                </div>
                <div className="col-6 col-xl-4">
                  <div className="d-flex flex-column flex-center align-items-sm-start flex-md-row justify-content-md-between flex-xxl-column p-3 ps-sm-3 ps-md-4 p-md-3 h-100 border-1 border-bottom border-end-md-0 border-end-xl border-translucent">
                    <div className="d-flex align-items-center mb-1">
                      <span className="fa-solid fa-square fs-11 me-2 text-success" data-fa-transform={"up-2"}>                      </span>
                      <span className="mb-0 fs-9 text-body">
Paid Search
                      </span>
                    </div>
                    <h3 className="fw-semibold ms-xl-3 ms-xxl-0 pe-md-2 pe-xxl-0 mb-0 mb-sm-3">
65
                    </h3>
                  </div>
                </div>
                <div className="col-6 col-xl-4">
                  <div className="d-flex flex-column flex-center align-items-sm-start flex-md-row justify-content-md-between flex-xxl-column p-3 ps-sm-3 ps-md-4 p-md-3 h-100 border-1 border-bottom border-end border-end-md border-end-xl-0 border-translucent">
                    <div className="d-flex align-items-center mb-1">
                      <span className="fa-solid fa-square fs-11 me-2 text-info" data-fa-transform={"up-2"}>                      </span>
                      <span className="mb-0 fs-9 text-body">
Direct
                      </span>
                    </div>
                    <h3 className="fw-semibold ms-xl-3 ms-xxl-0 pe-md-2 pe-xxl-0 mb-0 mb-sm-3">
40
                    </h3>
                  </div>
                </div>
                <div className="col-6 col-xl-4">
                  <div className="d-flex flex-column flex-center align-items-sm-start flex-md-row justify-content-md-between flex-xxl-column p-3 ps-sm-3 ps-md-4 p-md-3 h-100 border-1 border-end-xl border-bottom border-bottom-xl-0 border-translucent">
                    <div className="d-flex align-items-center mb-1">
                      <span className="fa-solid fa-square fs-11 me-2 text-info-light" data-fa-transform={"up-2"}>                      </span>
                      <span className="mb-0 fs-9 text-body">
Social
                      </span>
                    </div>
                    <h3 className="fw-semibold ms-xl-3 ms-xxl-0 pe-md-2 pe-xxl-0 mb-0 mb-sm-3">
220
                    </h3>
                  </div>
                </div>
                <div className="col-6 col-xl-4">
                  <div className="d-flex flex-column flex-center align-items-sm-start flex-md-row justify-content-md-between flex-xxl-column p-3 ps-sm-3 ps-md-4 p-md-3 h-100 border-1 border-end border-translucent">
                    <div className="d-flex align-items-center mb-1">
                      <span className="fa-solid fa-square fs-11 me-2 text-danger-lighter" data-fa-transform={"up-2"}>                      </span>
                      <span className="mb-0 fs-9 text-body">
Referrals
                      </span>
                    </div>
                    <h3 className="fw-semibold ms-xl-3 ms-xxl-0 pe-md-2 pe-xxl-0 mb-0 mb-sm-3">
120
                    </h3>
                  </div>
                </div>
                <div className="col-6 col-xl-4">
                  <div className="d-flex flex-column flex-center align-items-sm-start flex-md-row justify-content-md-between flex-xxl-column p-3 ps-sm-3 ps-md-4 p-md-3 h-100">
                    <div className="d-flex align-items-center mb-1">
                      <span className="fa-solid fa-square fs-11 me-2 text-warning-light" data-fa-transform={"up-2"}>                      </span>
                      <span className="mb-0 fs-9 text-body">
Others
                      </span>
                    </div>
                    <h3 className="fw-semibold ms-xl-3 ms-xxl-0 pe-md-2 pe-xxl-0 mb-0 mb-sm-3">
35
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-md-4 col-xxl-4 my-3 my-sm-0">
              <div className="position-relative d-flex flex-center mb-sm-4 mb-xl-0 echart-contact-by-source-container mt-sm-7 mt-lg-4 mt-xl-0">
                <div className="echart-contact-by-source" style={{"minHeight":"245px","width":"100%"} as CSSProperties}>                </div>
                <div className="position-absolute rounded-circle bg-primary-subtle top-50 start-50 translate-middle d-flex flex-center" style={{"height":"100px","width":"100px"} as CSSProperties}>
                  <h3 className="mb-0 text-primary-dark fw-bolder" data-label>                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis py-5">
        <div className="row g-6">
          <div className="col-12 col-xl-6">
            <div className="me-xl-4">
              <div>
                <h3>
Projection vs actual
                </h3>
                <p className="mb-1 text-body-tertiary">
Actual earnings vs projected earnings
                </p>
              </div>
              <div className="echart-projection-actual" style={{"height":"300px","width":"100%"} as CSSProperties}>              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6">
            <div>
              <h3>
Returning customer rate
              </h3>
              <p className="mb-1 text-body-tertiary">
Rate of customers returning to your shop over time
              </p>
            </div>
            <div className="echart-returning-customer" style={{"height":"300px"} as CSSProperties}>            </div>
          </div>
        </div>
      </div>
      <div className="row g-6 pt-6 align-items-center">
        <div className="col-xxl-6">
          <div className="row flex-between-center mb-4 g-3">
            <div className="col-auto">
              <h3>
Total sells
              </h3>
              <p className="text-body-tertiary lh-sm mb-0">
Payment received across all channels
              </p>
            </div>
            <div className="col-8 col-sm-4">
              <select className="form-select form-select-sm" id="select-gross-revenue-month">
                <option>
Mar 1 - 31, 2022
                </option>
                <option>
April 1 - 30, 2022
                </option>
                <option>
May 1 - 31, 2022
                </option>
              </select>
            </div>
          </div>
          <div className="echart-total-sales-chart" style={{"minHeight":"320px","width":"100%"} as CSSProperties}>          </div>
        </div>
        <div className="col-xxl-6">
          <div className="mx-xxl-0">
            <h3>
Project: zero Roadmap
            </h3>
            <p className="text-body-tertiary">
Phase 2 is now ongoing
            </p>
            <div className="gantt-zero-roadmap">
              <div className="row g-2 flex-between-center mb-3">
                <div className="col-12 col-sm-auto">
                  <div className="d-flex">
                    <div className="d-flex align-items-end me-3">
                      <label className="form-check-label mb-0 me-2 lh-1 text-body" htmlFor="progress">
Progress
                      </label>
                      <div className="form-check form-switch min-h-auto mb-0">
                        <input className="form-check-input" id="progress" type="checkbox" defaultChecked data-gantt-progress />
                      </div>
                    </div>
                    <div className="d-flex align-items-end flex-1">
                      <label className="form-check-label mb-0 me-2 lh-1 text-body" htmlFor="links">
Links
                      </label>
                      <div className="form-check form-switch min-h-auto flex-1 mb-0">
                        <input className="form-check-input" id="links" type="checkbox" defaultChecked data-gantt-links />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="btn-group" role="group" data-gantt-scale>
                    <input className="btn-check" id="weekView" type="radio" name="scaleView" defaultValue="week" defaultChecked />
                    <label className="btn btn-phoenix-secondary bg-body-highlight-hover fs-10 py-1 mb-0" htmlFor="weekView">
Week
                    </label>
                    <input className="btn-check" id="monthView" type="radio" name="scaleView" defaultValue="month" />
                    <label className="btn btn-phoenix-secondary bg-body-highlight-hover fs-10 py-1 mb-0" htmlFor="monthView">
Month
                    </label>
                    <input className="btn-check" id="yearView" type="radio" name="scaleView" defaultValue="year" />
                    <label className="btn btn-phoenix-secondary bg-body-highlight-hover fs-10 py-1 mb-0" htmlFor="yearView">
Year
                    </label>
                  </div>
                </div>
              </div>
              <div className="gantt-zero-roadmap-chart">              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis pt-6 pb-3 mt-6">
        <div className="row">
          <div className="col-12 col-xl-7 col-xxl-6">
            <div className="row g-3 mb-3">
              <div className="col-12 col-md-6">
                <h3 className="text-body-emphasis text-nowrap">
Issues Discovered
                </h3>
                <p className="text-body-tertiary mb-md-7">
Newly found and yet to be solved
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="mb-0 fw-bold">
Issue type 
                  </p>
                  <p className="mb-0 fs-9">
Total count 
                    <span className="fw-bold">
257
                    </span>
                  </p>
                </div>
                <hr className="bg-body-secondary mb-2 mt-2" />
                <div className="d-flex align-items-center mb-1">
                  <span className="d-inline-block bg-info-light bullet-item me-2">                  </span>
                  <p className="mb-0 fw-semibold text-body lh-sm flex-1">
Product design
                  </p>
                  <h5 className="mb-0 text-body">
78
                  </h5>
                </div>
                <div className="d-flex align-items-center mb-1">
                  <span className="d-inline-block bg-warning-light bullet-item me-2">                  </span>
                  <p className="mb-0 fw-semibold text-body lh-sm flex-1">
Development
                  </p>
                  <h5 className="mb-0 text-body">
63
                  </h5>
                </div>
                <div className="d-flex align-items-center mb-1">
                  <span className="d-inline-block bg-danger-light bullet-item me-2">                  </span>
                  <p className="mb-0 fw-semibold text-body lh-sm flex-1">
{"QA & Testing"}
                  </p>
                  <h5 className="mb-0 text-body">
56
                  </h5>
                </div>
                <div className="d-flex align-items-center mb-1">
                  <span className="d-inline-block bg-success-light bullet-item me-2">                  </span>
                  <p className="mb-0 fw-semibold text-body lh-sm flex-1">
Customer queries
                  </p>
                  <h5 className="mb-0 text-body">
36
                  </h5>
                </div>
                <div className="d-flex align-items-center">
                  <span className="d-inline-block bg-primary bullet-item me-2">                  </span>
                  <p className="mb-0 fw-semibold text-body lh-sm flex-1">
{"R & D"}
                  </p>
                  <h5 className="mb-0 text-body">
24
                  </h5>
                </div>
                <button className="btn btn-outline-primary mt-5">
See Details
                  <span className="fas fa-angle-right ms-2 fs-10 text-center">                  </span>
                </button>
              </div>
              <div className="col-12 col-md-6">
                <div className="position-relative mb-sm-4 mb-xl-0">
                  <div className="echart-issue-chart" style={{"minHeight":"390px","width":"100%"} as CSSProperties}>                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-5 col-xxl-6">
            <h3>
Project: eleven Progress
            </h3>
            <p className="text-body-tertiary mb-0 mb-xl-3">
{"Deadline & progress"}
            </p>
            <div className="echart-zero-burnout-chart" style={{"minHeight":"320px","width":"100%"} as CSSProperties}>            </div>
          </div>
        </div>
      </div>
      <div className="mx-lg-n4">
        <div className="row g-3 pt-3">
          <div className="col-xl-5">
            <div className="card h-100">
              <div className="card-body">
                <h3>
Lead Conversion
                </h3>
                <p className="text-body-tertiary mb-0">
{"Stages of deals & conversion"}
                </p>
                <div className="echart-lead-conversion" style={{"minHeight":"250px"} as CSSProperties}>                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="card h-100">
              <div className="card-body">
                <h3>
Revenue Target
                </h3>
                <p className="text-body-tertiary">
Country-wise target fulfilment
                </p>
                <div className="echart-revenue-target-conversion" style={{"minHeight":"230px"} as CSSProperties}>                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis pt-6 pb-3 mt-3">
        <div className="row gx-6">
          <div className="col-12 col-md-6 col-lg-12 col-xl-6 mb-5 mb-md-3 mb-lg-5 mb-xl-2 mb-xxl-3">
            <div className="scrollbar">
              <h3>
Email Campaign Reports
              </h3>
              <p className="text-body-tertiary">
Paid and Verified for each piece of content
              </p>
              <div className="echart-email-campaign-report echart-contacts-width">              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-12 col-xl-6 mb-1 mb-sm-0">
            <div className="row align-itms-center mb-5 mb-sm-2 mb-md-4">
              <div className="col-sm-8 col-md-12 col-lg-8 col-xl-12 col-xxl-8 mb-xl-2 mb-xxl-0">
                <h3>
 Marketing Campaign Report
                </h3>
                <p className="text-body-tertiary mb-lg-0">
According to the sales data.
                </p>
              </div>
              <div className="col-sm-4 col-md-12 col-lg-4 col-xl-12 col-xxl-4">
                <select className="form-select form-select">
                  <option>
Ally Aagaard
                  </option>
                  <option>
Alec Haag
                  </option>
                  <option>
Aagaard
                  </option>
                </select>
              </div>
            </div>
            <div className="row g-3 align-items-center">
              <div className="col-sm-8 col-md-12 col-lg-8 col-xl-12 col-xxl-8">
                <div className="echart-social-marketing-radar" style={{"minHeight":"320px","width":"100%"} as CSSProperties}>                </div>
              </div>
              <div className="col-sm-4 col-md-12 col-lg-4 col-xl-12 col-xxl-4 d-flex justify-content-end-xxl mt-0">
                <div className="d-flex flex-1 justify-content-center d-sm-block d-md-flex d-lg-block d-xl-flex d-xxl-block">
                  <div className="mb-4 me-6 me-sm-0 me-md-6 me-lg-0 me-xl-6 me-xxl-0">
                    <div className="d-flex align-items-center mb-2">
                      <h4 className="mb-0">
15,000
                      </h4>
                      <span className="badge badge-phoenix badge-phoenix-primary ms-2">
+30.63%
                      </span>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="fa-solid fa-circle text-warning-light me-2">                      </div>
                      <h6 className="mb-0">
Online Campaign
                      </h6>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center mb-2">
                      <h4 className="mb-0">
5,000
                      </h4>
                      <span className="badge badge-phoenix badge-phoenix-danger ms-2">
+13.52%
                      </span>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="fa-solid fa-circle text-primary-light me-2">                      </div>
                      <h6 className="mb-0">
Offline Campaign
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-6 mt-0">
        <div className="col-12 col-md-6">
          <div className="row justify-content-between mb-4">
            <div className="col-12">
              <h3>
Sales Trends
              </h3>
              <p className="text-body-tertiary">
{"Updated inventory & the sales report."}
              </p>
            </div>
            <div className="col-12 d-flex">
              <div className="d-flex">
                <div className="fa-solid fa-circle text-info-light me-2">                </div>
                <h6 className="mb-0 me-3 lh-base">
Profit
                </h6>
              </div>
              <div className="d-flex">
                <div className="fa-solid fa-circle text-primary-lighter me-2">                </div>
                <h6 className="mb-0 lh-base">
Revenue
                </h6>
              </div>
            </div>
          </div>
          <div className="echart-sales-trends" style={{"height":"270px","width":"100%"} as CSSProperties}>          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row justify-content-between mb-4">
            <div className="col-auto">
              <h3>
Call Campaign Reports
              </h3>
              <p className="text-body-tertiary">
All call campaigns succeeded.
              </p>
            </div>
            <div className="col-12 d-flex">
              <div className="d-flex">
                <div className="fa-solid fa-circle text-primary me-2">                </div>
                <h6 className="mb-0 me-3 lh-base">
Campaign
                </h6>
              </div>
            </div>
          </div>
          <div className="echart-call-campaign" style={{"height":"290px","width":"100%"} as CSSProperties}>          </div>
        </div>
      </div>
      <div className="d-flex mb-5 pt-7" id="scrollspyTables">
        <span className="fa-stack me-2 ms-n1">
          <i className="fas fa-circle fa-stack-2x text-primary">          </i>
          <i className="fa-inverse fa-stack-1x text-primary-subtle fas fa-list" data-fa-transform={"shrink-2"}>          </i>
        </span>
        <div className="col">
          <h3 className="mb-0 text-primary position-relative fw-bold">
            <span className="bg-body pe-2">
Tables, Files, and Lists
            </span>
            <span className="border border-primary position-absolute top-50 translate-middle-y w-100 start-0 z-n1">            </span>
          </h3>
          <p className="mb-0">
Phoenix's styled components are dedicatedly made for displaying your contents and lists.
          </p>
        </div>
      </div>
      <h3 className="mb-3">
Purchasers and sellers
      </h3>
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
                  <th className="sort text-end align-middle pe-0 ps-4" scope="col">                  </th>
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
                          <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                          </circle>
                          <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#3874FF" strokeWidth="12">                          </circle>
                        </svg>
                      </div>
                      <h6 className="mb-0 text-body">
Analysis
                      </h6>
                    </div>
                  </td>
                  <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$140
                    <span className="ms-2 text-danger" data-feather={"trending-down"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                    </span>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                          <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                          </circle>
                          <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#0097EB" strokeWidth="12">                          </circle>
                        </svg>
                      </div>
                      <h6 className="mb-0 text-body">
Statement
                      </h6>
                    </div>
                  </td>
                  <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$214
                    <span className="ms-2 text-success" data-feather={"trending-up"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                    </span>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                          <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                          </circle>
                          <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#E5780B" strokeWidth="12">                          </circle>
                        </svg>
                      </div>
                      <h6 className="mb-0 text-body">
Action
                      </h6>
                    </div>
                  </td>
                  <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$412
                    <span className="ms-2 text-success" data-feather={"trending-up"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                    </span>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                          <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                          </circle>
                          <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#6E7891" strokeWidth="12">                          </circle>
                        </svg>
                      </div>
                      <h6 className="mb-0 text-body">
Offering
                      </h6>
                    </div>
                  </td>
                  <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$110
                    <span className="ms-2 text-success" data-feather={"trending-up"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                    </span>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                          <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                          </circle>
                          <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#25B003" strokeWidth="12">                          </circle>
                        </svg>
                      </div>
                      <h6 className="mb-0 text-body">
Negotiation
                      </h6>
                    </div>
                  </td>
                  <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$325
                    <span className="ms-2 text-danger" data-feather={"trending-down"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                    </span>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                          <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                          </circle>
                          <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#25B003" strokeWidth="12">                          </circle>
                        </svg>
                      </div>
                      <h6 className="mb-0 text-body">
Negotiation
                      </h6>
                    </div>
                  </td>
                  <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$198
                    <span className="ms-2 text-warning" data-feather={"trending-down"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                    </span>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                          <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                          </circle>
                          <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#6E7891" strokeWidth="12">                          </circle>
                        </svg>
                      </div>
                      <h6 className="mb-0 text-body">
Offering
                      </h6>
                    </div>
                  </td>
                  <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$142
                    <span className="ms-2 text-success" data-feather={"trending-up"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                    </span>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                          <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                          </circle>
                          <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#6E7891" strokeWidth="12">                          </circle>
                        </svg>
                      </div>
                      <h6 className="mb-0 text-body">
Offering
                      </h6>
                    </div>
                  </td>
                  <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$457
                    <span className="ms-2 text-success" data-feather={"trending-up"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                    </span>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                          <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                          </circle>
                          <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#E5780B" strokeWidth="12">                          </circle>
                        </svg>
                      </div>
                      <h6 className="mb-0 text-body">
Action
                      </h6>
                    </div>
                  </td>
                  <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$120
                    <span className="ms-2 text-warning" data-feather={"trending-down"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                    </span>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                          <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                          </circle>
                          <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#3874FF" strokeWidth="12">                          </circle>
                        </svg>
                      </div>
                      <h6 className="mb-0 text-body">
Analysis
                      </h6>
                    </div>
                  </td>
                  <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$150
                    <span className="ms-2 text-danger" data-feather={"trending-down"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                    </span>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                          <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                          </circle>
                          <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#25B003" strokeWidth="12">                          </circle>
                        </svg>
                      </div>
                      <h6 className="mb-0 text-body">
Negotiation
                      </h6>
                    </div>
                  </td>
                  <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$140
                    <span className="ms-2 text-warning" data-feather={"trending-down"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                    </span>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                          <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                          </circle>
                          <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#6E7891" strokeWidth="12">                          </circle>
                        </svg>
                      </div>
                      <h6 className="mb-0 text-body">
Offering
                      </h6>
                    </div>
                  </td>
                  <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$122
                    <span className="ms-2 text-success" data-feather={"trending-up"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                    </span>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                          <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                          </circle>
                          <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#6E7891" strokeWidth="12">                          </circle>
                        </svg>
                      </div>
                      <h6 className="mb-0 text-body">
Offering
                      </h6>
                    </div>
                  </td>
                  <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$321
                    <span className="ms-2 text-success" data-feather={"trending-up"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                    </span>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                          <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                          </circle>
                          <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#E5780B" strokeWidth="12">                          </circle>
                        </svg>
                      </div>
                      <h6 className="mb-0 text-body">
Action
                      </h6>
                    </div>
                  </td>
                  <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$104
                    <span className="ms-2 text-warning" data-feather={"trending-down"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                    </span>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                          <circle className="progress-bar-rail" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" strokeWidth="15">                          </circle>
                          <circle className="progress-bar-top" cx="65" cy="45" r="54" fill="none" strokeLinecap="round" stroke="#3874FF" strokeWidth="12">                          </circle>
                        </svg>
                      </div>
                      <h6 className="mb-0 text-body">
Analysis
                      </h6>
                    </div>
                  </td>
                  <td className="amount align-middle white-space-nowrap fw-bold ps-4 text-body py-0">
$124
                    <span className="ms-2 text-danger" data-feather={"trending-down"} style={{"minHeight":"8px","width":"14px"} as CSSProperties}>                    </span>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row align-items-center justify-content-between pe-0 fs-9">
            <div className="col-auto d-flex">
              <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info>              </p>
              <a href="#!" className="fw-semibold"  data-list-view={"*"}>
View all                <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                </span>
              </a>
              <a href="#!" className="fw-semibold d-none"  data-list-view={"less"}>
View Less                <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                </span>
              </a>
            </div>
            <div className="col-auto d-flex">
              <button className="page-link" data-list-pagination={"prev"}>
                <span className="fas fa-chevron-left">                </span>
              </button>
              <ul className="mb-0 pagination">              </ul>
              <button className="page-link pe-0" data-list-pagination={"next"}>
                <span className="fas fa-chevron-right">                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row gx-6 mt-n3 pb-5">
        <div className="col-xl-6">
          <div data-list={"{\"valueNames\":[\"country\",\"users\",\"transactions\",\"revenue\",\"conv-rate\"],\"page\":5}"}>
            <div className="mb-5 mt-7">
              <h3>
Top regions by revenue
              </h3>
              <p className="text-body-tertiary">
Where you generated most of the revenue
              </p>
            </div>
            <div className="table-responsive scrollbar">
              <table className="table fs-10 mb-0">
                <thead>
                  <tr>
                    <th className="sort border-top border-translucent ps-0 align-middle" scope="col" data-sort={"country"} style={{"width":"32%"} as CSSProperties}>
COUNTRY
                    </th>
                    <th className="sort border-top border-translucent align-middle" scope="col" data-sort={"users"} style={{"width":"17%"} as CSSProperties}>
USERS
                    </th>
                    <th className="sort border-top border-translucent text-end align-middle" scope="col" data-sort={"transactions"} style={{"width":"16%"} as CSSProperties}>
TRANSACTIONS
                    </th>
                    <th className="sort border-top border-translucent text-end align-middle" scope="col" data-sort={"revenue"} style={{"width":"20%"} as CSSProperties}>
REVENUE
                    </th>
                    <th className="sort border-top border-translucent text-end pe-0 align-middle" scope="col" data-sort={"conv-rate"} style={{"width":"17%"} as CSSProperties}>
CONV. RATE
                    </th>
                  </tr>
                </thead>
                <tbody className="phoenix-table-summary"><tr>
                    <td>                    </td>
                    <td className="align-middle py-4">
                      <h4 className="mb-0 fw-normal">
377,620
                      </h4>
                    </td>
                    <td className="align-middle text-end py-4">
                      <h4 className="mb-0 fw-normal">
236
                      </h4>
                    </td>
                    <td className="align-middle text-end py-4">
                      <h4 className="mb-0 fw-normal">
$15,758
                      </h4>
                    </td>
                    <td className="align-middle text-end py-4 pe-0">
                      <h4 className="mb-0 fw-normal">
10.32%
                      </h4>
                    </td>
                  </tr>
                </tbody>
                <tbody className="list" id="table-regions-by-revenue"><tr>
                    <td className="white-space-nowrap ps-0 country" style={{"width":"32%"} as CSSProperties}>
                      <div className="d-flex align-items-center">
                        <h6 className="mb-0 me-3">
1. 
                        </h6>
                        <a href="#!">
                          <div className="d-flex align-items-center">
                            <PhoenixImage src="/assets/img/country/india.png" alt="" width={24} />
                            <p className="mb-0 ps-3 text-primary fw-bold fs-9">
India
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td className="align-middle users" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
92896
                        <span className="text-body-tertiary fw-semibold ms-2">
(41.6%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end transactions" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
67
                        <span className="text-body-tertiary fw-semibold ms-2">
(34.3%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end revenue" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
$7560
                        <span className="text-body-tertiary fw-semibold ms-2">
(36.9%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end pe-0 conv-rate" style={{"width":"17%"} as CSSProperties}>
                      <h6>
14.01%
                      </h6>
                    </td>
                  </tr>
                  <tr>
                    <td className="white-space-nowrap ps-0 country" style={{"width":"32%"} as CSSProperties}>
                      <div className="d-flex align-items-center">
                        <h6 className="mb-0 me-3">
2. 
                        </h6>
                        <a href="#!">
                          <div className="d-flex align-items-center">
                            <PhoenixImage src="/assets/img/country/china.png" alt="" width={24} />
                            <p className="mb-0 ps-3 text-primary fw-bold fs-9">
China
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td className="align-middle users" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
50496
                        <span className="text-body-tertiary fw-semibold ms-2">
(32.8%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end transactions" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
54
                        <span className="text-body-tertiary fw-semibold ms-2">
(23.8%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end revenue" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
$6532
                        <span className="text-body-tertiary fw-semibold ms-2">
(26.5%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end pe-0 conv-rate" style={{"width":"17%"} as CSSProperties}>
                      <h6>
23.56%
                      </h6>
                    </td>
                  </tr>
                  <tr>
                    <td className="white-space-nowrap ps-0 country" style={{"width":"32%"} as CSSProperties}>
                      <div className="d-flex align-items-center">
                        <h6 className="mb-0 me-3">
3. 
                        </h6>
                        <a href="#!">
                          <div className="d-flex align-items-center">
                            <PhoenixImage src="/assets/img/country/usa.png" alt="" width={24} />
                            <p className="mb-0 ps-3 text-primary fw-bold fs-9">
USA
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td className="align-middle users" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
45679
                        <span className="text-body-tertiary fw-semibold ms-2">
(24.3%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end transactions" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
35
                        <span className="text-body-tertiary fw-semibold ms-2">
(19.7%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end revenue" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
$5432
                        <span className="text-body-tertiary fw-semibold ms-2">
(16.9%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end pe-0 conv-rate" style={{"width":"17%"} as CSSProperties}>
                      <h6>
10.23%
                      </h6>
                    </td>
                  </tr>
                  <tr>
                    <td className="white-space-nowrap ps-0 country" style={{"width":"32%"} as CSSProperties}>
                      <div className="d-flex align-items-center">
                        <h6 className="mb-0 me-3">
4. 
                        </h6>
                        <a href="#!">
                          <div className="d-flex align-items-center">
                            <PhoenixImage src="/assets/img/country/south-korea.png" alt="" width={24} />
                            <p className="mb-0 ps-3 text-primary fw-bold fs-9">
South Korea
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td className="align-middle users" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
36453
                        <span className="text-body-tertiary fw-semibold ms-2">
(19.7%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end transactions" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
22
                        <span className="text-body-tertiary fw-semibold ms-2">
(9.54%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end revenue" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
$4673
                        <span className="text-body-tertiary fw-semibold ms-2">
(11.6%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end pe-0 conv-rate" style={{"width":"17%"} as CSSProperties}>
                      <h6>
8.85%
                      </h6>
                    </td>
                  </tr>
                  <tr>
                    <td className="white-space-nowrap ps-0 country" style={{"width":"32%"} as CSSProperties}>
                      <div className="d-flex align-items-center">
                        <h6 className="mb-0 me-3">
5. 
                        </h6>
                        <a href="#!">
                          <div className="d-flex align-items-center">
                            <PhoenixImage src="/assets/img/country/vietnam.png" alt="" width={24} />
                            <p className="mb-0 ps-3 text-primary fw-bold fs-9">
Vietnam
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td className="align-middle users" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
15007
                        <span className="text-body-tertiary fw-semibold ms-2">
(11.9%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end transactions" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
17
                        <span className="text-body-tertiary fw-semibold ms-2">
(6.91%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end revenue" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
$2456
                        <span className="text-body-tertiary fw-semibold ms-2">
(10.2%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end pe-0 conv-rate" style={{"width":"17%"} as CSSProperties}>
                      <h6>
6.01%
                      </h6>
                    </td>
                  </tr>
                  <tr>
                    <td className="white-space-nowrap ps-0 country" style={{"width":"32%"} as CSSProperties}>
                      <div className="d-flex align-items-center">
                        <h6 className="mb-0 me-3">
6. 
                        </h6>
                        <a href="#!">
                          <div className="d-flex align-items-center">
                            <PhoenixImage src="/assets/img/country/russia.png" alt="" width={24} />
                            <p className="mb-0 ps-3 text-primary fw-bold fs-9">
Russia
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td className="align-middle users" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
54215
                        <span className="text-body-tertiary fw-semibold ms-2">
(32.9%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end transactions" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
38
                        <span className="text-body-tertiary fw-semibold ms-2">
(7.91%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end revenue" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
$3254
                        <span className="text-body-tertiary fw-semibold ms-2">
(12.4%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end pe-0 conv-rate" style={{"width":"17%"} as CSSProperties}>
                      <h6>
6.21%
                      </h6>
                    </td>
                  </tr>
                  <tr>
                    <td className="white-space-nowrap ps-0 country" style={{"width":"32%"} as CSSProperties}>
                      <div className="d-flex align-items-center">
                        <h6 className="mb-0 me-3">
7. 
                        </h6>
                        <a href="#!">
                          <div className="d-flex align-items-center">
                            <PhoenixImage src="/assets/img/country/australia.png" alt="" width={24} />
                            <p className="mb-0 ps-3 text-primary fw-bold fs-9">
Australia
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td className="align-middle users" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
54789
                        <span className="text-body-tertiary fw-semibold ms-2">
(12.7%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end transactions" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
32
                        <span className="text-body-tertiary fw-semibold ms-2">
(14.0%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end revenue" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
$3215
                        <span className="text-body-tertiary fw-semibold ms-2">
(5.72%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end pe-0 conv-rate" style={{"width":"17%"} as CSSProperties}>
                      <h6>
12.02%
                      </h6>
                    </td>
                  </tr>
                  <tr>
                    <td className="white-space-nowrap ps-0 country" style={{"width":"32%"} as CSSProperties}>
                      <div className="d-flex align-items-center">
                        <h6 className="mb-0 me-3">
8. 
                        </h6>
                        <a href="#!">
                          <div className="d-flex align-items-center">
                            <PhoenixImage src="/assets/img/country/england.png" alt="" width={24} />
                            <p className="mb-0 ps-3 text-primary fw-bold fs-9">
England
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td className="align-middle users" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
14785
                        <span className="text-body-tertiary fw-semibold ms-2">
(12.9%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end transactions" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
11
                        <span className="text-body-tertiary fw-semibold ms-2">
(32.91%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end revenue" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
$4745
                        <span className="text-body-tertiary fw-semibold ms-2">
(10.2%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end pe-0 conv-rate" style={{"width":"17%"} as CSSProperties}>
                      <h6>
8.01%
                      </h6>
                    </td>
                  </tr>
                  <tr>
                    <td className="white-space-nowrap ps-0 country" style={{"width":"32%"} as CSSProperties}>
                      <div className="d-flex align-items-center">
                        <h6 className="mb-0 me-3">
9. 
                        </h6>
                        <a href="#!">
                          <div className="d-flex align-items-center">
                            <PhoenixImage src="/assets/img/country/indonesia.png" alt="" width={24} />
                            <p className="mb-0 ps-3 text-primary fw-bold fs-9">
Indonesia
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td className="align-middle users" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
32156
                        <span className="text-body-tertiary fw-semibold ms-2">
(32.2%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end transactions" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
89
                        <span className="text-body-tertiary fw-semibold ms-2">
(12.0%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end revenue" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
$2456
                        <span className="text-body-tertiary fw-semibold ms-2">
(23.2%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end pe-0 conv-rate" style={{"width":"17%"} as CSSProperties}>
                      <h6>
9.07%
                      </h6>
                    </td>
                  </tr>
                  <tr>
                    <td className="white-space-nowrap ps-0 country" style={{"width":"32%"} as CSSProperties}>
                      <div className="d-flex align-items-center">
                        <h6 className="mb-0 me-3">
10. 
                        </h6>
                        <a href="#!">
                          <div className="d-flex align-items-center">
                            <PhoenixImage src="/assets/img/country/japan.png" alt="" width={24} />
                            <p className="mb-0 ps-3 text-primary fw-bold fs-9">
Japan
                            </p>
                          </div>
                        </a>
                      </div>
                    </td>
                    <td className="align-middle users" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
12547
                        <span className="text-body-tertiary fw-semibold ms-2">
(12.7%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end transactions" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
21
                        <span className="text-body-tertiary fw-semibold ms-2">
(14.91%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end revenue" style={{"width":"17%"} as CSSProperties}>
                      <h6 className="mb-0">
$2541
                        <span className="text-body-tertiary fw-semibold ms-2">
(23.2%)
                        </span>
                      </h6>
                    </td>
                    <td className="align-middle text-end pe-0 conv-rate" style={{"width":"17%"} as CSSProperties}>
                      <h6>
20.01%
                      </h6>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row align-items-center py-1">
              <div className="pagination d-none">              </div>
              <div className="col d-flex fs-9">
                <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info>                </p>
              </div>
              <div className="col-auto d-flex">
                <button className="btn btn-link px-1 me-1" type="button" title="Previous" data-list-pagination={"prev"}>
                  <span className="fas fa-chevron-left me-2">                  </span>
Previous
                </button>
                <button className="btn btn-link px-1 ms-1" type="button" title="Next" data-list-pagination={"next"}>
Next
                  <span className="fas fa-chevron-right ms-2">                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 mt-7">
          <div className="row align-items-start justify-content-between mb-4 g-3">
            <div className="col-auto">
              <h3>
Deal Forecast
                <span className="fw-semibold">
- $90,303
                </span>
              </h3>
              <p className="text-body-tertiary mb-1">
Show what you offer here
              </p>
            </div>
            <div className="col-12 col-sm-4">
              <select className="form-select form-select-sm" id="select-ad-forcast-month">
                <option>
Mar 1 - 31, 2022
                </option>
                <option>
April 1 - 30, 2022
                </option>
                <option>
May 1 - 31, 2022
                </option>
              </select>
            </div>
          </div>
          <div className="w-100">
            <div className="d-flex flex-start">
              <p className="mb-2 text-body-tertiary fw-semibold fs-9" style={{"width":"20.72%"} as CSSProperties}>
$21.0k
              </p>
              <p className="mb-2 text-body-tertiary fw-semibold fs-9" style={{"width":"35.76%"} as CSSProperties}>
$3.4k
              </p>
              <p className="mb-2 text-body-tertiary fw-semibold fs-9" style={{"width":"25.38%"} as CSSProperties}>
$15.1k
              </p>
              <p className="mb-2 text-body-tertiary fw-semibold fs-9" style={{"width":"25.14%"} as CSSProperties}>
$4.6k
              </p>
            </div>
            <div className="progress mb-3 rounded-3" style={{"height":"10px"} as CSSProperties}>
              <div className="progress-bar border-end border-2 bg-primary-dark" role="progressbar" style={{"width":"20.72%"} as CSSProperties} aria-valuenow={20.72} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Appointment">              </div>
              <div className="progress-bar border-end border-2" role="progressbar" style={{"width":"35.76%"} as CSSProperties} aria-valuenow={35.76} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Qualified">              </div>
              <div className="progress-bar bg-success border-end border-2" role="progressbar" style={{"width":"25.38%"} as CSSProperties} aria-valuenow={25.38} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Closed Won">              </div>
              <div className="progress-bar bg-info" role="progressbar" style={{"width":"25.14%"} as CSSProperties} aria-valuenow={25.14} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Contact Sent">              </div>
            </div>
          </div>
          <h4 className="mt-4 mb-3">
Deal Forecast by Owner 
          </h4>
          <div className="border-top border-bottom-0" id="dealForecastTable" data-list={"{\"valueNames\":[\"contact\",\"appointment\",\"qualified\",\"closed-won\",\"contact-sent\"],\"page\":6}"}>
            <div className="table-responsive scrollbar">
              <table className="table fs-9 mb-0">
                <thead>
                  <tr>
                    <th className="sort border-end border-translucent white-space-nowrap align-middle ps-0 text-uppercase text-body-tertiary" scope="col" data-sort={"contact"} style={{"width":"15%","minWidth":"100px"} as CSSProperties}>
Contact
                    </th>
                    <th className="sort border-end border-translucent align-middle text-end px-3 text-uppercase text-body-tertiary" scope="col" data-sort={"appointment"} style={{"width":"15%","minWidth":"95px"} as CSSProperties}>
                      <div className="d-inline-flex flex-center">
                        <span className="fa-solid fa-square fs-11 text-primary me-2" data-fa-transform={"up-2"}>                        </span>
                        <span className="mb-0 fs-9">
Appointment
                        </span>
                      </div>
                    </th>
                    <th className="sort border-end border-translucent align-middle text-end px-3 text-uppercase text-body-tertiary" scope="col" data-sort={"qualified"} style={{"width":"20%","minWidth":"100px"} as CSSProperties}>
                      <div className="d-inline-flex flex-center">
                        <span className="fa-solid fa-square fs-11 text-primary-light me-2" data-fa-transform={"up-2"}>                        </span>
                        <span className="mb-0 fs-9">
Qualified
                        </span>
                      </div>
                    </th>
                    <th className="sort border-end border-translucent align-middle text-end px-3 text-uppercase text-body-tertiary" scope="col" data-sort={"closed-won"} style={{"width":"20%","minWidth":"100px"} as CSSProperties}>
                      <div className="d-inline-flex flex-center">
                        <span className="fa-solid fa-square fs-11 text-success me-2" data-fa-transform={"up-2"}>                        </span>
                        <span className="mb-0 fs-9">
Closed Won
                        </span>
                      </div>
                    </th>
                    <th className="sort align-middle text-end ps-3 text-uppercase text-body-tertiary" scope="col" data-sort={"contact-sent"} style={{"width":"20%","minWidth":"100px"} as CSSProperties}>
                      <div className="d-inline-flex flex-center">
                        <span className="fa-solid fa-square fs-11 text-info me-2" data-fa-transform={"up-2"}>                        </span>
                        <span className="mb-0 fs-9">
Contact Sent
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="list" id="table-deal-forecast-body"><tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="contact border-end border-translucent align-middle white-space-nowrap py-2 ps-0 px-3">
                      <a href="#!" className="fw-semibold">
Carrie Anne
                      </a>
                    </td>
                    <td className="appointment border-end border-translucent align-middle white-space-nowrap text-end fw-semibold text-body py-2 px-3">
1000
                    </td>
                    <td className="qualified border-end border-translucent align-middle white-space-nowrap text-end fw-semibold text-body py-2 px-3">
$1256
                    </td>
                    <td className="closed-won border-end border-translucent align-middle white-space-nowrap text-end fw-semibold text-body py-2 px-3">
$1200
                    </td>
                    <td className="contact-sent border-end-0 align-middle white-space-nowrap text-end fw-semibold text-body ps-3 py-2">
$1200
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="contact border-end border-translucent align-middle white-space-nowrap py-2 ps-0 px-3">
                      <a href="#!" className="fw-semibold">
Milind Mikuja
                      </a>
                    </td>
                    <td className="appointment border-end border-translucent align-middle white-space-nowrap text-end fw-semibold text-body py-2 px-3">
558
                    </td>
                    <td className="qualified border-end border-translucent align-middle white-space-nowrap text-end fw-semibold text-body py-2 px-3">
$2531
                    </td>
                    <td className="closed-won border-end border-translucent align-middle white-space-nowrap text-end fw-semibold text-body py-2 px-3">
$2200
                    </td>
                    <td className="contact-sent border-end-0 align-middle white-space-nowrap text-end fw-semibold text-body ps-3 py-2">
$2200
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="contact border-end border-translucent align-middle white-space-nowrap py-2 ps-0 px-3">
                      <a href="#!" className="fw-semibold">
Stanley Drinkwater
                      </a>
                    </td>
                    <td className="appointment border-end border-translucent align-middle white-space-nowrap text-end fw-semibold text-body py-2 px-3">
1100
                    </td>
                    <td className="qualified border-end border-translucent align-middle white-space-nowrap text-end fw-semibold text-body py-2 px-3">
$100
                    </td>
                    <td className="closed-won border-end border-translucent align-middle white-space-nowrap text-end fw-semibold text-body py-2 px-3">
$100
                    </td>
                    <td className="contact-sent border-end-0 align-middle white-space-nowrap text-end fw-semibold text-body ps-3 py-2">
$100
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="contact border-end border-translucent align-middle white-space-nowrap py-2 ps-0 px-3">
                      <a href="#!" className="fw-semibold">
Josef Stravinsky
                      </a>
                    </td>
                    <td className="appointment border-end border-translucent align-middle white-space-nowrap text-end fw-semibold text-body py-2 px-3">
856
                    </td>
                    <td className="qualified border-end border-translucent align-middle white-space-nowrap text-end fw-semibold text-body py-2 px-3">
$326
                    </td>
                    <td className="closed-won border-end border-translucent align-middle white-space-nowrap text-end fw-semibold text-body py-2 px-3">
$265
                    </td>
                    <td className="contact-sent border-end-0 align-middle white-space-nowrap text-end fw-semibold text-body ps-3 py-2">
$265
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="contact border-end border-translucent align-middle white-space-nowrap py-2 ps-0 px-3">
                      <a href="#!" className="fw-semibold">
Roy Anderson
                      </a>
                    </td>
                    <td className="appointment border-end border-translucent align-middle white-space-nowrap text-end fw-semibold text-body py-2 px-3">
1200
                    </td>
                    <td className="qualified border-end border-translucent align-middle white-space-nowrap text-end fw-semibold text-body py-2 px-3">
$1452
                    </td>
                    <td className="closed-won border-end border-translucent align-middle white-space-nowrap text-end fw-semibold text-body py-2 px-3">
$865
                    </td>
                    <td className="contact-sent border-end-0 align-middle white-space-nowrap text-end fw-semibold text-body ps-3 py-2">
$865
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="contact border-end border-translucent align-middle white-space-nowrap py-2 ps-0 px-3">
                      <a href="#!" className="fw-semibold">
Oscar Wilde
                      </a>
                    </td>
                    <td className="appointment border-end border-translucent align-middle white-space-nowrap text-end fw-semibold text-body py-2 px-3">
1020
                    </td>
                    <td className="qualified border-end border-translucent align-middle white-space-nowrap text-end fw-semibold text-body py-2 px-3">
$950
                    </td>
                    <td className="closed-won border-end border-translucent align-middle white-space-nowrap text-end fw-semibold text-body py-2 px-3">
$1000
                    </td>
                    <td className="contact-sent border-end-0 align-middle white-space-nowrap text-end fw-semibold text-body ps-3 py-2">
$800
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle border-bottom-0 border-end border-translucent white-space-nowrap text-end fw-bold text-body-emphasis pt-2 lh-sm pb-0 px-3">                  </td>
                    <td className="align-middle border-bottom-0 border-end border-translucent white-space-nowrap text-end fw-bold text-body-emphasis pt-2 lh-sm pb-0 px-3">
4,744
                    </td>
                    <td className="align-middle border-bottom-0 border-end border-translucent white-space-nowrap text-end fw-bold text-body-emphasis pt-2 lh-sm pb-0 px-3">
$5,665
                    </td>
                    <td className="align-middle border-bottom-0 border-end border-translucent white-space-nowrap text-end fw-bold text-body-emphasis pt-2 lh-sm pb-0 px-3">
$4630
                    </td>
                    <td className="border-bottom-0 align-middle white-space-nowrap text-end fw-bold text-body-emphasis pt-2 pb-0 ps-3">
$4630
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis py-5 border-y">
        <div id="projectSummary" data-list={"{\"valueNames\":[\"project\",\"assignees\",\"start\",\"deadline\",\"calculation\",\"projectprogress\",\"status\",\"action\"],\"page\":6,\"pagination\":true}"}>
          <div className="row align-items-end justify-content-between pb-4 g-3">
            <div className="col-auto">
              <h3>
Projects
              </h3>
              <p className="text-body-tertiary lh-sm mb-0">
Brief summary of all projects
              </p>
            </div>
          </div>
          <div className="table-responsive ms-n1 ps-1 scrollbar">
            <table className="table fs-9 mb-0 border-top border-translucent">
              <thead>
                <tr>
                  <th className="sort white-space-nowrap align-middle ps-0" scope="col" data-sort={"project"} style={{"width":"30%"} as CSSProperties}>
PROJECT NAME
                  </th>
                  <th className="sort align-middle ps-3" scope="col" data-sort={"assignees"} style={{"width":"10%"} as CSSProperties}>
Assignees
                  </th>
                  <th className="sort align-middle ps-3" scope="col" data-sort={"start"} style={{"width":"10%"} as CSSProperties}>
START DATE
                  </th>
                  <th className="sort align-middle ps-3" scope="col" data-sort={"deadline"} style={{"width":"15%"} as CSSProperties}>
DEADLINE
                  </th>
                  <th className="sort align-middle ps-3" scope="col" data-sort={"calculation"} style={{"width":"12%"} as CSSProperties}>
CALCULATION
                  </th>
                  <th className="sort align-middle ps-3" scope="col" data-sort={"projectprogress"} style={{"width":"5%"} as CSSProperties}>
PROGRESS
                  </th>
                  <th className="align-middle ps-8" scope="col" data-sort={"status"} style={{"width":"10%"} as CSSProperties}>
STATUS
                  </th>
                  <th className="sort align-middle text-end" scope="col" style={{"width":"10%"} as CSSProperties}>                  </th>
                </tr>
              </thead>
              <tbody className="list" id="project-summary-table-body"><tr className="position-static">
                  <td className="align-middle time white-space-nowrap ps-0 project">
                    <a href="#" className="fw-bold fs-8">
Making the Butterflies shoot each other dead
                    </a>
                  </td>
                  <td className="align-middle white-space-nowrap assignees ps-3">
                    <div className="avatar-group avatar-group-dense">
                      <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                        <div className="avatar avatar-s  rounded-circle">
                          <PhoenixImage src="/assets/img/team/9.webp" alt="" className="rounded-circle " />
                        </div>
                      </a>
                      <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                        <div className="position-relative">
                          <div className="bg-holder z-n1" style={{"backgroundImage":"url(assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                          </div>
                          <div className="p-3">
                            <div className="text-end">
                              <button className="btn p-0 me-2">
                                <span className="fa-solid fa-user-plus text-white">                                </span>
                              </button>
                              <button className="btn p-0">
                                <span className="fa-solid fa-ellipsis text-white">                                </span>
                              </button>
                            </div>
                            <div className="text-center">
                              <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                <PhoenixImage src="/assets/img/team/9.webp" alt="" className="rounded-circle border border-light-subtle" />
                              </div>
                              <h6 className="text-white">
Michael Jenkins
                              </h6>
                              <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                              </p>
                              <div className="d-flex flex-center mb-3">
                                <h6 className="text-white mb-0">
224 
                                  <span className="fw-normal text-light text-opacity-75">
connections
                                  </span>
                                </h6>
                                <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                </span>
                                <h6 className="text-white mb-0">
23 
                                  <span className="fw-normal text-light text-opacity-75">
mutual
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-body-emphasis">
                          <div className="p-3 border-bottom border-translucent">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex">
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-phone">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-message">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                  <span className="fa-solid fa-video">                                  </span>
                                </button>
                              </div>
                              <button className="btn btn-phoenix-primary">
                                <span className="fa-solid fa-envelope me-2">                                </span>
Send Email
                              </button>
                            </div>
                          </div>
                          <ul className="nav d-flex flex-column py-3 border-bottom">
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                </span>                                <span className="text-body-highlight flex-1">
Assigned Projects
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body" data-feather={"pie-chart"}>                                </span>                                <span className="text-body-highlight flex-1">
View activiy
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 d-flex justify-content-between">
                          <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                          </a>
                          <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                          </a>
                        </div>
                      </div>
                      <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                        <div className="avatar avatar-s  rounded-circle">
                          <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle " />
                        </div>
                      </a>
                      <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                        <div className="position-relative">
                          <div className="bg-holder z-n1" style={{"backgroundImage":"url(assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                          </div>
                          <div className="p-3">
                            <div className="text-end">
                              <button className="btn p-0 me-2">
                                <span className="fa-solid fa-user-plus text-white">                                </span>
                              </button>
                              <button className="btn p-0">
                                <span className="fa-solid fa-ellipsis text-white">                                </span>
                              </button>
                            </div>
                            <div className="text-center">
                              <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle border border-light-subtle" />
                              </div>
                              <h6 className="text-white">
Ansolo Lazinatov
                              </h6>
                              <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                              </p>
                              <div className="d-flex flex-center mb-3">
                                <h6 className="text-white mb-0">
224 
                                  <span className="fw-normal text-light text-opacity-75">
connections
                                  </span>
                                </h6>
                                <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                </span>
                                <h6 className="text-white mb-0">
23 
                                  <span className="fw-normal text-light text-opacity-75">
mutual
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-body-emphasis">
                          <div className="p-3 border-bottom border-translucent">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex">
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-phone">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-message">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                  <span className="fa-solid fa-video">                                  </span>
                                </button>
                              </div>
                              <button className="btn btn-phoenix-primary">
                                <span className="fa-solid fa-envelope me-2">                                </span>
Send Email
                              </button>
                            </div>
                          </div>
                          <ul className="nav d-flex flex-column py-3 border-bottom">
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                </span>                                <span className="text-body-highlight flex-1">
Assigned Projects
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body" data-feather={"pie-chart"}>                                </span>                                <span className="text-body-highlight flex-1">
View activiy
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 d-flex justify-content-between">
                          <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                          </a>
                          <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                          </a>
                        </div>
                      </div>
                      <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                        <div className="avatar avatar-s  rounded-circle">
                          <PhoenixImage src="/assets/img/team/32.webp" alt="" className="rounded-circle " />
                        </div>
                      </a>
                      <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                        <div className="position-relative">
                          <div className="bg-holder z-n1" style={{"backgroundImage":"url(assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                          </div>
                          <div className="p-3">
                            <div className="text-end">
                              <button className="btn p-0 me-2">
                                <span className="fa-solid fa-user-plus text-white">                                </span>
                              </button>
                              <button className="btn p-0">
                                <span className="fa-solid fa-ellipsis text-white">                                </span>
                              </button>
                            </div>
                            <div className="text-center">
                              <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                <PhoenixImage src="/assets/img/team/32.webp" alt="" className="rounded-circle border border-light-subtle" />
                              </div>
                              <h6 className="text-white">
Jennifer Schramm
                              </h6>
                              <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                              </p>
                              <div className="d-flex flex-center mb-3">
                                <h6 className="text-white mb-0">
224 
                                  <span className="fw-normal text-light text-opacity-75">
connections
                                  </span>
                                </h6>
                                <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                </span>
                                <h6 className="text-white mb-0">
23 
                                  <span className="fw-normal text-light text-opacity-75">
mutual
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-body-emphasis">
                          <div className="p-3 border-bottom border-translucent">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex">
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-phone">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-message">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                  <span className="fa-solid fa-video">                                  </span>
                                </button>
                              </div>
                              <button className="btn btn-phoenix-primary">
                                <span className="fa-solid fa-envelope me-2">                                </span>
Send Email
                              </button>
                            </div>
                          </div>
                          <ul className="nav d-flex flex-column py-3 border-bottom">
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                </span>                                <span className="text-body-highlight flex-1">
Assigned Projects
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body" data-feather={"pie-chart"}>                                </span>                                <span className="text-body-highlight flex-1">
View activiy
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 d-flex justify-content-between">
                          <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                          </a>
                          <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                          </a>
                        </div>
                      </div>
                      <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                        <div className="avatar avatar-s  rounded-circle">
                          <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                        </div>
                      </a>
                      <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                        <div className="position-relative">
                          <div className="bg-holder z-n1" style={{"backgroundImage":"url(assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                          </div>
                          <div className="p-3">
                            <div className="text-end">
                              <button className="btn p-0 me-2">
                                <span className="fa-solid fa-user-plus text-white">                                </span>
                              </button>
                              <button className="btn p-0">
                                <span className="fa-solid fa-ellipsis text-white">                                </span>
                              </button>
                            </div>
                            <div className="text-center">
                              <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle border border-light-subtle" />
                              </div>
                              <h6 className="text-white">
Kristine Cadena
                              </h6>
                              <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                              </p>
                              <div className="d-flex flex-center mb-3">
                                <h6 className="text-white mb-0">
224 
                                  <span className="fw-normal text-light text-opacity-75">
connections
                                  </span>
                                </h6>
                                <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                </span>
                                <h6 className="text-white mb-0">
23 
                                  <span className="fw-normal text-light text-opacity-75">
mutual
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-body-emphasis">
                          <div className="p-3 border-bottom border-translucent">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex">
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-phone">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-message">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                  <span className="fa-solid fa-video">                                  </span>
                                </button>
                              </div>
                              <button className="btn btn-phoenix-primary">
                                <span className="fa-solid fa-envelope me-2">                                </span>
Send Email
                              </button>
                            </div>
                          </div>
                          <ul className="nav d-flex flex-column py-3 border-bottom">
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                </span>                                <span className="text-body-highlight flex-1">
Assigned Projects
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body" data-feather={"pie-chart"}>                                </span>                                <span className="text-body-highlight flex-1">
View activiy
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 d-flex justify-content-between">
                          <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                          </a>
                          <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                          </a>
                        </div>
                      </div>
                      <div className="avatar avatar-s  rounded-circle">
                        <div className="avatar-name rounded-circle ">
                          <span>
+3
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap start ps-3">
                    <p className="mb-0 fs-9 text-body">
Dec 12, 2018
                    </p>
                  </td>
                  <td className="align-middle white-space-nowrap deadline ps-3">
                    <p className="mb-0 fs-9 text-body">
Dec 12, 2026
                    </p>
                  </td>
                  <td className="align-middle white-space-nowrap calculation ps-3">
                    <p className="fw-bold text-body-emphasis fs-9 mb-0">
$4
                    </p>
                    <p className="fw-semibold fs-10 text-body-tertiary mb-0">
Cost
                    </p>
                  </td>
                  <td className="align-middle white-space-nowrap ps-3 projectprogress">
                    <p className="text-body-secondary fs-10 mb-0">
145 / 145
                    </p>
                    <div className="progress" style={{"height":"3px"} as CSSProperties}>
                      <div className="progress-bar bg-success" style={{"width":"100%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} role="progressbar">                      </div>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap ps-8">
                    <div className="progress progress-stack mt-3" style={{"height":"3px"} as CSSProperties}>
                      <div className="progress-bar bg-info" style={{"width":"30%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} role="progressbar" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Active">                      </div>
                      <div className="progress-bar bg-danger" style={{"width":"5%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Damage" role="progressbar">                      </div>
                      <div className="progress-bar bg-warning" style={{"width":"45%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Pending" role="progressbar">                      </div>
                      <div className="progress-bar bg-success" style={{"width":"15%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Done" role="progressbar">                      </div>
                    </div>
                  </td>
                  <td className="align-middle text-end white-space-nowrap pe-0 action">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                  </td>
                </tr>
                <tr className="position-static"><td className="align-middle time white-space-nowrap ps-0 project">
                    <a href="#" className="fw-bold fs-8">
Project Doughnut Dungeon
                    </a>
                  </td>
                  <td className="align-middle white-space-nowrap assignees ps-3">
                    <div className="avatar-group avatar-group-dense">
                      <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                        <div className="avatar avatar-s  rounded-circle">
                          <PhoenixImage src="/assets/img/team/22.webp" alt="" className="rounded-circle " />
                        </div>
                      </a>
                      <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                        <div className="position-relative">
                          <div className="bg-holder z-n1" style={{"backgroundImage":"url(assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                          </div>
                          <div className="p-3">
                            <div className="text-end">
                              <button className="btn p-0 me-2">
                                <span className="fa-solid fa-user-plus text-white">                                </span>
                              </button>
                              <button className="btn p-0">
                                <span className="fa-solid fa-ellipsis text-white">                                </span>
                              </button>
                            </div>
                            <div className="text-center">
                              <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                <PhoenixImage src="/assets/img/team/22.webp" alt="" className="rounded-circle border border-light-subtle" />
                              </div>
                              <h6 className="text-white">
Woodrow Burton
                              </h6>
                              <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                              </p>
                              <div className="d-flex flex-center mb-3">
                                <h6 className="text-white mb-0">
224 
                                  <span className="fw-normal text-light text-opacity-75">
connections
                                  </span>
                                </h6>
                                <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                </span>
                                <h6 className="text-white mb-0">
23 
                                  <span className="fw-normal text-light text-opacity-75">
mutual
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-body-emphasis">
                          <div className="p-3 border-bottom border-translucent">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex">
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-phone">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-message">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                  <span className="fa-solid fa-video">                                  </span>
                                </button>
                              </div>
                              <button className="btn btn-phoenix-primary">
                                <span className="fa-solid fa-envelope me-2">                                </span>
Send Email
                              </button>
                            </div>
                          </div>
                          <ul className="nav d-flex flex-column py-3 border-bottom">
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                </span>                                <span className="text-body-highlight flex-1">
Assigned Projects
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body" data-feather={"pie-chart"}>                                </span>                                <span className="text-body-highlight flex-1">
View activiy
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 d-flex justify-content-between">
                          <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                          </a>
                          <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                          </a>
                        </div>
                      </div>
                      <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                        <div className="avatar avatar-s  rounded-circle">
                          <PhoenixImage src="/assets/img/team/28.webp" alt="" className="rounded-circle " />
                        </div>
                      </a>
                      <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                        <div className="position-relative">
                          <div className="bg-holder z-n1" style={{"backgroundImage":"url(assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                          </div>
                          <div className="p-3">
                            <div className="text-end">
                              <button className="btn p-0 me-2">
                                <span className="fa-solid fa-user-plus text-white">                                </span>
                              </button>
                              <button className="btn p-0">
                                <span className="fa-solid fa-ellipsis text-white">                                </span>
                              </button>
                            </div>
                            <div className="text-center">
                              <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                <PhoenixImage src="/assets/img/team/28.webp" alt="" className="rounded-circle border border-light-subtle" />
                              </div>
                              <h6 className="text-white">
Ashley Garrett
                              </h6>
                              <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                              </p>
                              <div className="d-flex flex-center mb-3">
                                <h6 className="text-white mb-0">
224 
                                  <span className="fw-normal text-light text-opacity-75">
connections
                                  </span>
                                </h6>
                                <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                </span>
                                <h6 className="text-white mb-0">
23 
                                  <span className="fw-normal text-light text-opacity-75">
mutual
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-body-emphasis">
                          <div className="p-3 border-bottom border-translucent">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex">
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-phone">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-message">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                  <span className="fa-solid fa-video">                                  </span>
                                </button>
                              </div>
                              <button className="btn btn-phoenix-primary">
                                <span className="fa-solid fa-envelope me-2">                                </span>
Send Email
                              </button>
                            </div>
                          </div>
                          <ul className="nav d-flex flex-column py-3 border-bottom">
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                </span>                                <span className="text-body-highlight flex-1">
Assigned Projects
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body" data-feather={"pie-chart"}>                                </span>                                <span className="text-body-highlight flex-1">
View activiy
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 d-flex justify-content-between">
                          <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                          </a>
                          <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                          </a>
                        </div>
                      </div>
                      <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                        <div className="avatar avatar-s">
                          <div className="avatar-name rounded-circle">
                            <span>
R
                            </span>
                          </div>
                        </div>
                      </a>
                      <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                        <div className="position-relative">
                          <div className="bg-holder z-n1" style={{"backgroundImage":"url(assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                          </div>
                          <div className="p-3">
                            <div className="text-end">
                              <button className="btn p-0 me-2">
                                <span className="fa-solid fa-user-plus text-white">                                </span>
                              </button>
                              <button className="btn p-0">
                                <span className="fa-solid fa-ellipsis text-white">                                </span>
                              </button>
                            </div>
                            <div className="text-center">
                              <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                <div className="avatar-name rounded-circle">
                                  <span>
R
                                  </span>
                                </div>
                              </div>
                              <h6 className="text-white">
Raymond Mims
                              </h6>
                              <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                              </p>
                              <div className="d-flex flex-center mb-3">
                                <h6 className="text-white mb-0">
224 
                                  <span className="fw-normal text-light text-opacity-75">
connections
                                  </span>
                                </h6>
                                <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                </span>
                                <h6 className="text-white mb-0">
23 
                                  <span className="fw-normal text-light text-opacity-75">
mutual
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-body-emphasis">
                          <div className="p-3 border-bottom border-translucent">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex">
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-phone">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-message">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                  <span className="fa-solid fa-video">                                  </span>
                                </button>
                              </div>
                              <button className="btn btn-phoenix-primary">
                                <span className="fa-solid fa-envelope me-2">                                </span>
Send Email
                              </button>
                            </div>
                          </div>
                          <ul className="nav d-flex flex-column py-3 border-bottom">
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                </span>                                <span className="text-body-highlight flex-1">
Assigned Projects
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body" data-feather={"pie-chart"}>                                </span>                                <span className="text-body-highlight flex-1">
View activiy
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 d-flex justify-content-between">
                          <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                          </a>
                          <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                          </a>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap start ps-3">
                    <p className="mb-0 fs-9 text-body">
Jan 9, 2019
                    </p>
                  </td>
                  <td className="align-middle white-space-nowrap deadline ps-3">
                    <p className="mb-0 fs-9 text-body">
Dec 9, 2022
                    </p>
                  </td>
                  <td className="align-middle white-space-nowrap calculation ps-3">
                    <button className="btn btn-phoenix-secondary btn-square-sm">
                      <span className="fas fa-plus">                      </span>
                    </button>
                  </td>
                  <td className="align-middle white-space-nowrap ps-3 projectprogress">
                    <p className="text-body-secondary fs-10 mb-0">
148 / 223
                    </p>
                    <div className="progress" style={{"height":"3px"} as CSSProperties}>
                      <div className="progress-bar bg-success" style={{"width":"66.3677130044843%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} role="progressbar">                      </div>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap ps-8">
                    <div className="progress progress-stack mt-3" style={{"height":"3px"} as CSSProperties}>
                      <div className="progress-bar bg-info" style={{"width":"20%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} role="progressbar" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Active">                      </div>
                      <div className="progress-bar bg-danger" style={{"width":"15%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Damage" role="progressbar">                      </div>
                      <div className="progress-bar bg-warning" style={{"width":"45%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Pending" role="progressbar">                      </div>
                      <div className="progress-bar bg-success" style={{"width":"30%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Done" role="progressbar">                      </div>
                    </div>
                  </td>
                  <td className="align-middle text-end white-space-nowrap pe-0 action">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                  </td>
                </tr>
                <tr className="position-static"><td className="align-middle time white-space-nowrap ps-0 project">
                    <a href="#" className="fw-bold fs-8">
The Chewing Gum Attack
                    </a>
                  </td>
                  <td className="align-middle white-space-nowrap assignees ps-3">
                    <div className="avatar-group avatar-group-dense">
                      <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                        <div className="avatar avatar-s  rounded-circle">
                          <PhoenixImage src="/assets/img/team/34.webp" alt="" className="rounded-circle " />
                        </div>
                      </a>
                      <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                        <div className="position-relative">
                          <div className="bg-holder z-n1" style={{"backgroundImage":"url(assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                          </div>
                          <div className="p-3">
                            <div className="text-end">
                              <button className="btn p-0 me-2">
                                <span className="fa-solid fa-user-plus text-white">                                </span>
                              </button>
                              <button className="btn p-0">
                                <span className="fa-solid fa-ellipsis text-white">                                </span>
                              </button>
                            </div>
                            <div className="text-center">
                              <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                <PhoenixImage src="/assets/img/team/34.webp" alt="" className="rounded-circle border border-light-subtle" />
                              </div>
                              <h6 className="text-white">
Jean Renoir
                              </h6>
                              <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                              </p>
                              <div className="d-flex flex-center mb-3">
                                <h6 className="text-white mb-0">
224 
                                  <span className="fw-normal text-light text-opacity-75">
connections
                                  </span>
                                </h6>
                                <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                </span>
                                <h6 className="text-white mb-0">
23 
                                  <span className="fw-normal text-light text-opacity-75">
mutual
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-body-emphasis">
                          <div className="p-3 border-bottom border-translucent">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex">
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-phone">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-message">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                  <span className="fa-solid fa-video">                                  </span>
                                </button>
                              </div>
                              <button className="btn btn-phoenix-primary">
                                <span className="fa-solid fa-envelope me-2">                                </span>
Send Email
                              </button>
                            </div>
                          </div>
                          <ul className="nav d-flex flex-column py-3 border-bottom">
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                </span>                                <span className="text-body-highlight flex-1">
Assigned Projects
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body" data-feather={"pie-chart"}>                                </span>                                <span className="text-body-highlight flex-1">
View activiy
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 d-flex justify-content-between">
                          <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                          </a>
                          <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                          </a>
                        </div>
                      </div>
                      <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                        <div className="avatar avatar-s  rounded-circle">
                          <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle " />
                        </div>
                      </a>
                      <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                        <div className="position-relative">
                          <div className="bg-holder z-n1" style={{"backgroundImage":"url(assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                          </div>
                          <div className="p-3">
                            <div className="text-end">
                              <button className="btn p-0 me-2">
                                <span className="fa-solid fa-user-plus text-white">                                </span>
                              </button>
                              <button className="btn p-0">
                                <span className="fa-solid fa-ellipsis text-white">                                </span>
                              </button>
                            </div>
                            <div className="text-center">
                              <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle border border-light-subtle" />
                              </div>
                              <h6 className="text-white">
Katerina Karenin
                              </h6>
                              <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                              </p>
                              <div className="d-flex flex-center mb-3">
                                <h6 className="text-white mb-0">
224 
                                  <span className="fw-normal text-light text-opacity-75">
connections
                                  </span>
                                </h6>
                                <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                </span>
                                <h6 className="text-white mb-0">
23 
                                  <span className="fw-normal text-light text-opacity-75">
mutual
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-body-emphasis">
                          <div className="p-3 border-bottom border-translucent">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex">
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-phone">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-message">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                  <span className="fa-solid fa-video">                                  </span>
                                </button>
                              </div>
                              <button className="btn btn-phoenix-primary">
                                <span className="fa-solid fa-envelope me-2">                                </span>
Send Email
                              </button>
                            </div>
                          </div>
                          <ul className="nav d-flex flex-column py-3 border-bottom">
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                </span>                                <span className="text-body-highlight flex-1">
Assigned Projects
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body" data-feather={"pie-chart"}>                                </span>                                <span className="text-body-highlight flex-1">
View activiy
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 d-flex justify-content-between">
                          <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                          </a>
                          <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                          </a>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap start ps-3">
                    <p className="mb-0 fs-9 text-body">
Sep 4, 2019
                    </p>
                  </td>
                  <td className="align-middle white-space-nowrap deadline ps-3">
                    <p className="mb-0 fs-9 text-body">
Dec 4, 2021
                    </p>
                  </td>
                  <td className="align-middle white-space-nowrap calculation ps-3">
                    <p className="fw-bold text-body-emphasis fs-9 mb-0">
$657k
                    </p>
                    <p className="fw-semibold fs-10 text-body-tertiary mb-0">
Estimation
                    </p>
                  </td>
                  <td className="align-middle white-space-nowrap ps-3 projectprogress">
                    <p className="text-body-secondary fs-10 mb-0">
277 / 539
                    </p>
                    <div className="progress" style={{"height":"3px"} as CSSProperties}>
                      <div className="progress-bar bg-success" style={{"width":"51.39146567717996%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} role="progressbar">                      </div>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap ps-8">
                    <div className="progress progress-stack mt-3" style={{"height":"3px"} as CSSProperties}>
                      <div className="progress-bar bg-info" style={{"width":"10%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} role="progressbar" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Active">                      </div>
                      <div className="progress-bar bg-danger" style={{"width":"10%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Damage" role="progressbar">                      </div>
                      <div className="progress-bar bg-warning" style={{"width":"35%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Pending" role="progressbar">                      </div>
                      <div className="progress-bar bg-success" style={{"width":"45%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Done" role="progressbar">                      </div>
                    </div>
                  </td>
                  <td className="align-middle text-end white-space-nowrap pe-0 action">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                  </td>
                </tr>
                <tr className="position-static"><td className="align-middle time white-space-nowrap ps-0 project">
                    <a href="#" className="fw-bold fs-8">
Execution of Micky the foul mouse
                    </a>
                  </td>
                  <td className="align-middle white-space-nowrap assignees ps-3">
                    <div className="avatar-group avatar-group-dense">
                      <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                        <div className="avatar avatar-s  rounded-circle">
                          <PhoenixImage src="/assets/img/team/1.webp" alt="" className="rounded-circle " />
                        </div>
                      </a>
                      <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                        <div className="position-relative">
                          <div className="bg-holder z-n1" style={{"backgroundImage":"url(assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                          </div>
                          <div className="p-3">
                            <div className="text-end">
                              <button className="btn p-0 me-2">
                                <span className="fa-solid fa-user-plus text-white">                                </span>
                              </button>
                              <button className="btn p-0">
                                <span className="fa-solid fa-ellipsis text-white">                                </span>
                              </button>
                            </div>
                            <div className="text-center">
                              <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                <PhoenixImage src="/assets/img/team/1.webp" alt="" className="rounded-circle border border-light-subtle" />
                              </div>
                              <h6 className="text-white">
Luis Bunuel
                              </h6>
                              <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                              </p>
                              <div className="d-flex flex-center mb-3">
                                <h6 className="text-white mb-0">
224 
                                  <span className="fw-normal text-light text-opacity-75">
connections
                                  </span>
                                </h6>
                                <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                </span>
                                <h6 className="text-white mb-0">
23 
                                  <span className="fw-normal text-light text-opacity-75">
mutual
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-body-emphasis">
                          <div className="p-3 border-bottom border-translucent">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex">
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-phone">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-message">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                  <span className="fa-solid fa-video">                                  </span>
                                </button>
                              </div>
                              <button className="btn btn-phoenix-primary">
                                <span className="fa-solid fa-envelope me-2">                                </span>
Send Email
                              </button>
                            </div>
                          </div>
                          <ul className="nav d-flex flex-column py-3 border-bottom">
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                </span>                                <span className="text-body-highlight flex-1">
Assigned Projects
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body" data-feather={"pie-chart"}>                                </span>                                <span className="text-body-highlight flex-1">
View activiy
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 d-flex justify-content-between">
                          <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                          </a>
                          <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                          </a>
                        </div>
                      </div>
                      <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                        <div className="avatar avatar-s  rounded-circle">
                          <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                        </div>
                      </a>
                      <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                        <div className="position-relative">
                          <div className="bg-holder z-n1" style={{"backgroundImage":"url(assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                          </div>
                          <div className="p-3">
                            <div className="text-end">
                              <button className="btn p-0 me-2">
                                <span className="fa-solid fa-user-plus text-white">                                </span>
                              </button>
                              <button className="btn p-0">
                                <span className="fa-solid fa-ellipsis text-white">                                </span>
                              </button>
                            </div>
                            <div className="text-center">
                              <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle border border-light-subtle" />
                              </div>
                              <h6 className="text-white">
Kristine Cadena
                              </h6>
                              <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                              </p>
                              <div className="d-flex flex-center mb-3">
                                <h6 className="text-white mb-0">
224 
                                  <span className="fw-normal text-light text-opacity-75">
connections
                                  </span>
                                </h6>
                                <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                </span>
                                <h6 className="text-white mb-0">
23 
                                  <span className="fw-normal text-light text-opacity-75">
mutual
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-body-emphasis">
                          <div className="p-3 border-bottom border-translucent">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex">
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-phone">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-message">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                  <span className="fa-solid fa-video">                                  </span>
                                </button>
                              </div>
                              <button className="btn btn-phoenix-primary">
                                <span className="fa-solid fa-envelope me-2">                                </span>
Send Email
                              </button>
                            </div>
                          </div>
                          <ul className="nav d-flex flex-column py-3 border-bottom">
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                </span>                                <span className="text-body-highlight flex-1">
Assigned Projects
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body" data-feather={"pie-chart"}>                                </span>                                <span className="text-body-highlight flex-1">
View activiy
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 d-flex justify-content-between">
                          <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                          </a>
                          <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                          </a>
                        </div>
                      </div>
                      <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                        <div className="avatar avatar-s  rounded-circle">
                          <PhoenixImage src="/assets/img/team/5.webp" alt="" className="rounded-circle " />
                        </div>
                      </a>
                      <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                        <div className="position-relative">
                          <div className="bg-holder z-n1" style={{"backgroundImage":"url(assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                          </div>
                          <div className="p-3">
                            <div className="text-end">
                              <button className="btn p-0 me-2">
                                <span className="fa-solid fa-user-plus text-white">                                </span>
                              </button>
                              <button className="btn p-0">
                                <span className="fa-solid fa-ellipsis text-white">                                </span>
                              </button>
                            </div>
                            <div className="text-center">
                              <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                <PhoenixImage src="/assets/img/team/5.webp" alt="" className="rounded-circle border border-light-subtle" />
                              </div>
                              <h6 className="text-white">
Ricky Antony
                              </h6>
                              <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                              </p>
                              <div className="d-flex flex-center mb-3">
                                <h6 className="text-white mb-0">
224 
                                  <span className="fw-normal text-light text-opacity-75">
connections
                                  </span>
                                </h6>
                                <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                </span>
                                <h6 className="text-white mb-0">
23 
                                  <span className="fw-normal text-light text-opacity-75">
mutual
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-body-emphasis">
                          <div className="p-3 border-bottom border-translucent">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex">
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-phone">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-message">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                  <span className="fa-solid fa-video">                                  </span>
                                </button>
                              </div>
                              <button className="btn btn-phoenix-primary">
                                <span className="fa-solid fa-envelope me-2">                                </span>
Send Email
                              </button>
                            </div>
                          </div>
                          <ul className="nav d-flex flex-column py-3 border-bottom">
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                </span>                                <span className="text-body-highlight flex-1">
Assigned Projects
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body" data-feather={"pie-chart"}>                                </span>                                <span className="text-body-highlight flex-1">
View activiy
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 d-flex justify-content-between">
                          <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                          </a>
                          <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                          </a>
                        </div>
                      </div>
                      <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                        <div className="avatar avatar-s  rounded-circle">
                          <PhoenixImage src="/assets/img/team/11.webp" alt="" className="rounded-circle " />
                        </div>
                      </a>
                      <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                        <div className="position-relative">
                          <div className="bg-holder z-n1" style={{"backgroundImage":"url(assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                          </div>
                          <div className="p-3">
                            <div className="text-end">
                              <button className="btn p-0 me-2">
                                <span className="fa-solid fa-user-plus text-white">                                </span>
                              </button>
                              <button className="btn p-0">
                                <span className="fa-solid fa-ellipsis text-white">                                </span>
                              </button>
                            </div>
                            <div className="text-center">
                              <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                <PhoenixImage src="/assets/img/team/11.webp" alt="" className="rounded-circle border border-light-subtle" />
                              </div>
                              <h6 className="text-white">
Roy Anderson
                              </h6>
                              <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                              </p>
                              <div className="d-flex flex-center mb-3">
                                <h6 className="text-white mb-0">
224 
                                  <span className="fw-normal text-light text-opacity-75">
connections
                                  </span>
                                </h6>
                                <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                </span>
                                <h6 className="text-white mb-0">
23 
                                  <span className="fw-normal text-light text-opacity-75">
mutual
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-body-emphasis">
                          <div className="p-3 border-bottom border-translucent">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex">
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-phone">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-message">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                  <span className="fa-solid fa-video">                                  </span>
                                </button>
                              </div>
                              <button className="btn btn-phoenix-primary">
                                <span className="fa-solid fa-envelope me-2">                                </span>
Send Email
                              </button>
                            </div>
                          </div>
                          <ul className="nav d-flex flex-column py-3 border-bottom">
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                </span>                                <span className="text-body-highlight flex-1">
Assigned Projects
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body" data-feather={"pie-chart"}>                                </span>                                <span className="text-body-highlight flex-1">
View activiy
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 d-flex justify-content-between">
                          <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                          </a>
                          <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                          </a>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap start ps-3">
                    <p className="mb-0 fs-9 text-body">
Nov 1, 2019
                    </p>
                  </td>
                  <td className="align-middle white-space-nowrap deadline ps-3">
                    <p className="mb-0 fs-9 text-body">
Dec 1, 2024
                    </p>
                  </td>
                  <td className="align-middle white-space-nowrap calculation ps-3">
                    <button className="btn btn-phoenix-secondary btn-square-sm">
                      <span className="fas fa-plus">                      </span>
                    </button>
                  </td>
                  <td className="align-middle white-space-nowrap ps-3 projectprogress">
                    <p className="text-body-secondary fs-10 mb-0">
16 / 56
                    </p>
                    <div className="progress" style={{"height":"3px"} as CSSProperties}>
                      <div className="progress-bar bg-success" style={{"width":"28.57142857142857%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} role="progressbar">                      </div>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap ps-8">
                    <div className="progress progress-stack mt-3" style={{"height":"3px"} as CSSProperties}>
                      <div className="progress-bar bg-info" style={{"width":"45%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} role="progressbar" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Active">                      </div>
                      <div className="progress-bar bg-danger" style={{"width":"15%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Damage" role="progressbar">                      </div>
                      <div className="progress-bar bg-warning" style={{"width":"20%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Pending" role="progressbar">                      </div>
                      <div className="progress-bar bg-success" style={{"width":"20%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Done" role="progressbar">                      </div>
                    </div>
                  </td>
                  <td className="align-middle text-end white-space-nowrap pe-0 action">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                  </td>
                </tr>
                <tr className="position-static"><td className="align-middle time white-space-nowrap ps-0 project">
                    <a href="#" className="fw-bold fs-8">
Harnessing stupidity from Jerry
                    </a>
                  </td>
                  <td className="align-middle white-space-nowrap assignees ps-3">
                    <div className="avatar-group avatar-group-dense">
                      <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                        <div className="avatar avatar-s  rounded-circle">
                          <PhoenixImage src="/assets/img/team/21.webp" alt="" className="rounded-circle " />
                        </div>
                      </a>
                      <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                        <div className="position-relative">
                          <div className="bg-holder z-n1" style={{"backgroundImage":"url(assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                          </div>
                          <div className="p-3">
                            <div className="text-end">
                              <button className="btn p-0 me-2">
                                <span className="fa-solid fa-user-plus text-white">                                </span>
                              </button>
                              <button className="btn p-0">
                                <span className="fa-solid fa-ellipsis text-white">                                </span>
                              </button>
                            </div>
                            <div className="text-center">
                              <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                <PhoenixImage src="/assets/img/team/21.webp" alt="" className="rounded-circle border border-light-subtle" />
                              </div>
                              <h6 className="text-white">
Michael Jenkins
                              </h6>
                              <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                              </p>
                              <div className="d-flex flex-center mb-3">
                                <h6 className="text-white mb-0">
224 
                                  <span className="fw-normal text-light text-opacity-75">
connections
                                  </span>
                                </h6>
                                <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                </span>
                                <h6 className="text-white mb-0">
23 
                                  <span className="fw-normal text-light text-opacity-75">
mutual
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-body-emphasis">
                          <div className="p-3 border-bottom border-translucent">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex">
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-phone">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-message">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                  <span className="fa-solid fa-video">                                  </span>
                                </button>
                              </div>
                              <button className="btn btn-phoenix-primary">
                                <span className="fa-solid fa-envelope me-2">                                </span>
Send Email
                              </button>
                            </div>
                          </div>
                          <ul className="nav d-flex flex-column py-3 border-bottom">
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                </span>                                <span className="text-body-highlight flex-1">
Assigned Projects
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body" data-feather={"pie-chart"}>                                </span>                                <span className="text-body-highlight flex-1">
View activiy
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 d-flex justify-content-between">
                          <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                          </a>
                          <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                          </a>
                        </div>
                      </div>
                      <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                        <div className="avatar avatar-s  rounded-circle">
                          <PhoenixImage src="/assets/img/team/23.webp" alt="" className="rounded-circle " />
                        </div>
                      </a>
                      <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                        <div className="position-relative">
                          <div className="bg-holder z-n1" style={{"backgroundImage":"url(assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                          </div>
                          <div className="p-3">
                            <div className="text-end">
                              <button className="btn p-0 me-2">
                                <span className="fa-solid fa-user-plus text-white">                                </span>
                              </button>
                              <button className="btn p-0">
                                <span className="fa-solid fa-ellipsis text-white">                                </span>
                              </button>
                            </div>
                            <div className="text-center">
                              <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                <PhoenixImage src="/assets/img/team/23.webp" alt="" className="rounded-circle border border-light-subtle" />
                              </div>
                              <h6 className="text-white">
Kristine Cadena
                              </h6>
                              <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                              </p>
                              <div className="d-flex flex-center mb-3">
                                <h6 className="text-white mb-0">
224 
                                  <span className="fw-normal text-light text-opacity-75">
connections
                                  </span>
                                </h6>
                                <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                </span>
                                <h6 className="text-white mb-0">
23 
                                  <span className="fw-normal text-light text-opacity-75">
mutual
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-body-emphasis">
                          <div className="p-3 border-bottom border-translucent">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex">
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-phone">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-message">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                  <span className="fa-solid fa-video">                                  </span>
                                </button>
                              </div>
                              <button className="btn btn-phoenix-primary">
                                <span className="fa-solid fa-envelope me-2">                                </span>
Send Email
                              </button>
                            </div>
                          </div>
                          <ul className="nav d-flex flex-column py-3 border-bottom">
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                </span>                                <span className="text-body-highlight flex-1">
Assigned Projects
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body" data-feather={"pie-chart"}>                                </span>                                <span className="text-body-highlight flex-1">
View activiy
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 d-flex justify-content-between">
                          <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                          </a>
                          <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                          </a>
                        </div>
                      </div>
                      <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                        <div className="avatar avatar-s  rounded-circle">
                          <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle " />
                        </div>
                      </a>
                      <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                        <div className="position-relative">
                          <div className="bg-holder z-n1" style={{"backgroundImage":"url(assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                          </div>
                          <div className="p-3">
                            <div className="text-end">
                              <button className="btn p-0 me-2">
                                <span className="fa-solid fa-user-plus text-white">                                </span>
                              </button>
                              <button className="btn p-0">
                                <span className="fa-solid fa-ellipsis text-white">                                </span>
                              </button>
                            </div>
                            <div className="text-center">
                              <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle border border-light-subtle" />
                              </div>
                              <h6 className="text-white">
Ricky Antony
                              </h6>
                              <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                              </p>
                              <div className="d-flex flex-center mb-3">
                                <h6 className="text-white mb-0">
224 
                                  <span className="fw-normal text-light text-opacity-75">
connections
                                  </span>
                                </h6>
                                <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                </span>
                                <h6 className="text-white mb-0">
23 
                                  <span className="fw-normal text-light text-opacity-75">
mutual
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-body-emphasis">
                          <div className="p-3 border-bottom border-translucent">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex">
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-phone">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-message">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                  <span className="fa-solid fa-video">                                  </span>
                                </button>
                              </div>
                              <button className="btn btn-phoenix-primary">
                                <span className="fa-solid fa-envelope me-2">                                </span>
Send Email
                              </button>
                            </div>
                          </div>
                          <ul className="nav d-flex flex-column py-3 border-bottom">
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                </span>                                <span className="text-body-highlight flex-1">
Assigned Projects
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body" data-feather={"pie-chart"}>                                </span>                                <span className="text-body-highlight flex-1">
View activiy
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 d-flex justify-content-between">
                          <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                          </a>
                          <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                          </a>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap start ps-3">
                    <p className="mb-0 fs-9 text-body">
Dec 28, 2019
                    </p>
                  </td>
                  <td className="align-middle white-space-nowrap deadline ps-3">
                    <p className="mb-0 fs-9 text-body">
Nov 28, 2021
                    </p>
                  </td>
                  <td className="align-middle white-space-nowrap calculation ps-3">
                    <button className="btn btn-phoenix-secondary btn-square-sm">
                      <span className="fas fa-plus">                      </span>
                    </button>
                  </td>
                  <td className="align-middle white-space-nowrap ps-3 projectprogress">
                    <p className="text-body-secondary fs-10 mb-0">
169 / 394
                    </p>
                    <div className="progress" style={{"height":"3px"} as CSSProperties}>
                      <div className="progress-bar bg-success" style={{"width":"42.89340101522843%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} role="progressbar">                      </div>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap ps-8">
                    <div className="progress progress-stack mt-3" style={{"height":"3px"} as CSSProperties}>
                      <div className="progress-bar bg-info" style={{"width":"25%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} role="progressbar" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Active">                      </div>
                      <div className="progress-bar bg-danger" style={{"width":"35%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Damage" role="progressbar">                      </div>
                      <div className="progress-bar bg-warning" style={{"width":"20%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Pending" role="progressbar">                      </div>
                      <div className="progress-bar bg-success" style={{"width":"15%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Done" role="progressbar">                      </div>
                    </div>
                  </td>
                  <td className="align-middle text-end white-space-nowrap pe-0 action">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                  </td>
                </tr>
                <tr className="position-static"><td className="align-middle time white-space-nowrap ps-0 project">
                    <a href="#" className="fw-bold fs-8">
Water resistant mosquito killer gun
                    </a>
                  </td>
                  <td className="align-middle white-space-nowrap assignees ps-3">
                    <div className="avatar-group avatar-group-dense">
                      <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                        <div className="avatar avatar-s  rounded-circle">
                          <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                        </div>
                      </a>
                      <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                        <div className="position-relative">
                          <div className="bg-holder z-n1" style={{"backgroundImage":"url(assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                          </div>
                          <div className="p-3">
                            <div className="text-end">
                              <button className="btn p-0 me-2">
                                <span className="fa-solid fa-user-plus text-white">                                </span>
                              </button>
                              <button className="btn p-0">
                                <span className="fa-solid fa-ellipsis text-white">                                </span>
                              </button>
                            </div>
                            <div className="text-center">
                              <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle border border-light-subtle" />
                              </div>
                              <h6 className="text-white">
Stanly Drinkwater
                              </h6>
                              <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                              </p>
                              <div className="d-flex flex-center mb-3">
                                <h6 className="text-white mb-0">
224 
                                  <span className="fw-normal text-light text-opacity-75">
connections
                                  </span>
                                </h6>
                                <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                </span>
                                <h6 className="text-white mb-0">
23 
                                  <span className="fw-normal text-light text-opacity-75">
mutual
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-body-emphasis">
                          <div className="p-3 border-bottom border-translucent">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex">
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-phone">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-message">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                  <span className="fa-solid fa-video">                                  </span>
                                </button>
                              </div>
                              <button className="btn btn-phoenix-primary">
                                <span className="fa-solid fa-envelope me-2">                                </span>
Send Email
                              </button>
                            </div>
                          </div>
                          <ul className="nav d-flex flex-column py-3 border-bottom">
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                </span>                                <span className="text-body-highlight flex-1">
Assigned Projects
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body" data-feather={"pie-chart"}>                                </span>                                <span className="text-body-highlight flex-1">
View activiy
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 d-flex justify-content-between">
                          <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                          </a>
                          <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                          </a>
                        </div>
                      </div>
                      <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                        <div className="avatar avatar-s  rounded-circle">
                          <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                        </div>
                      </a>
                      <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                        <div className="position-relative">
                          <div className="bg-holder z-n1" style={{"backgroundImage":"url(assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                          </div>
                          <div className="p-3">
                            <div className="text-end">
                              <button className="btn p-0 me-2">
                                <span className="fa-solid fa-user-plus text-white">                                </span>
                              </button>
                              <button className="btn p-0">
                                <span className="fa-solid fa-ellipsis text-white">                                </span>
                              </button>
                            </div>
                            <div className="text-center">
                              <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle border border-light-subtle" />
                              </div>
                              <h6 className="text-white">
Kristine Cadena
                              </h6>
                              <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                              </p>
                              <div className="d-flex flex-center mb-3">
                                <h6 className="text-white mb-0">
224 
                                  <span className="fw-normal text-light text-opacity-75">
connections
                                  </span>
                                </h6>
                                <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                </span>
                                <h6 className="text-white mb-0">
23 
                                  <span className="fw-normal text-light text-opacity-75">
mutual
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-body-emphasis">
                          <div className="p-3 border-bottom border-translucent">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex">
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-phone">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-message">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                  <span className="fa-solid fa-video">                                  </span>
                                </button>
                              </div>
                              <button className="btn btn-phoenix-primary">
                                <span className="fa-solid fa-envelope me-2">                                </span>
Send Email
                              </button>
                            </div>
                          </div>
                          <ul className="nav d-flex flex-column py-3 border-bottom">
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                </span>                                <span className="text-body-highlight flex-1">
Assigned Projects
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body" data-feather={"pie-chart"}>                                </span>                                <span className="text-body-highlight flex-1">
View activiy
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 d-flex justify-content-between">
                          <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                          </a>
                          <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                          </a>
                        </div>
                      </div>
                      <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                        <div className="avatar avatar-s  rounded-circle">
                          <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle " />
                        </div>
                      </a>
                      <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                        <div className="position-relative">
                          <div className="bg-holder z-n1" style={{"backgroundImage":"url(assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                          </div>
                          <div className="p-3">
                            <div className="text-end">
                              <button className="btn p-0 me-2">
                                <span className="fa-solid fa-user-plus text-white">                                </span>
                              </button>
                              <button className="btn p-0">
                                <span className="fa-solid fa-ellipsis text-white">                                </span>
                              </button>
                            </div>
                            <div className="text-center">
                              <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle border border-light-subtle" />
                              </div>
                              <h6 className="text-white">
Katerina Karenin
                              </h6>
                              <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                              </p>
                              <div className="d-flex flex-center mb-3">
                                <h6 className="text-white mb-0">
224 
                                  <span className="fw-normal text-light text-opacity-75">
connections
                                  </span>
                                </h6>
                                <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                </span>
                                <h6 className="text-white mb-0">
23 
                                  <span className="fw-normal text-light text-opacity-75">
mutual
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-body-emphasis">
                          <div className="p-3 border-bottom border-translucent">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex">
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-phone">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-message">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                  <span className="fa-solid fa-video">                                  </span>
                                </button>
                              </div>
                              <button className="btn btn-phoenix-primary">
                                <span className="fa-solid fa-envelope me-2">                                </span>
Send Email
                              </button>
                            </div>
                          </div>
                          <ul className="nav d-flex flex-column py-3 border-bottom">
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                </span>                                <span className="text-body-highlight flex-1">
Assigned Projects
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body" data-feather={"pie-chart"}>                                </span>                                <span className="text-body-highlight flex-1">
View activiy
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 d-flex justify-content-between">
                          <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                          </a>
                          <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                          </a>
                        </div>
                      </div>
                      <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                        <div className="avatar avatar-s  rounded-circle">
                          <PhoenixImage src="/assets/img/team/31.webp" alt="" className="rounded-circle " />
                        </div>
                      </a>
                      <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                        <div className="position-relative">
                          <div className="bg-holder z-n1" style={{"backgroundImage":"url(assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                          </div>
                          <div className="p-3">
                            <div className="text-end">
                              <button className="btn p-0 me-2">
                                <span className="fa-solid fa-user-plus text-white">                                </span>
                              </button>
                              <button className="btn p-0">
                                <span className="fa-solid fa-ellipsis text-white">                                </span>
                              </button>
                            </div>
                            <div className="text-center">
                              <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                <PhoenixImage src="/assets/img/team/31.webp" alt="" className="rounded-circle border border-light-subtle" />
                              </div>
                              <h6 className="text-white">
Martina scorcese
                              </h6>
                              <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                              </p>
                              <div className="d-flex flex-center mb-3">
                                <h6 className="text-white mb-0">
224 
                                  <span className="fw-normal text-light text-opacity-75">
connections
                                  </span>
                                </h6>
                                <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                </span>
                                <h6 className="text-white mb-0">
23 
                                  <span className="fw-normal text-light text-opacity-75">
mutual
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-body-emphasis">
                          <div className="p-3 border-bottom border-translucent">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex">
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-phone">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-message">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                  <span className="fa-solid fa-video">                                  </span>
                                </button>
                              </div>
                              <button className="btn btn-phoenix-primary">
                                <span className="fa-solid fa-envelope me-2">                                </span>
Send Email
                              </button>
                            </div>
                          </div>
                          <ul className="nav d-flex flex-column py-3 border-bottom">
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                </span>                                <span className="text-body-highlight flex-1">
Assigned Projects
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body" data-feather={"pie-chart"}>                                </span>                                <span className="text-body-highlight flex-1">
View activiy
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 d-flex justify-content-between">
                          <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                          </a>
                          <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                          </a>
                        </div>
                      </div>
                      <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                        <div className="avatar avatar-s">
                          <div className="avatar-name rounded-circle">
                            <span>
R
                            </span>
                          </div>
                        </div>
                      </a>
                      <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                        <div className="position-relative">
                          <div className="bg-holder z-n1" style={{"backgroundImage":"url(assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                          </div>
                          <div className="p-3">
                            <div className="text-end">
                              <button className="btn p-0 me-2">
                                <span className="fa-solid fa-user-plus text-white">                                </span>
                              </button>
                              <button className="btn p-0">
                                <span className="fa-solid fa-ellipsis text-white">                                </span>
                              </button>
                            </div>
                            <div className="text-center">
                              <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                <div className="avatar-name rounded-circle">
                                  <span>
R
                                  </span>
                                </div>
                              </div>
                              <h6 className="text-white">
Roy Anderson
                              </h6>
                              <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                              </p>
                              <div className="d-flex flex-center mb-3">
                                <h6 className="text-white mb-0">
224 
                                  <span className="fw-normal text-light text-opacity-75">
connections
                                  </span>
                                </h6>
                                <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                </span>
                                <h6 className="text-white mb-0">
23 
                                  <span className="fw-normal text-light text-opacity-75">
mutual
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-body-emphasis">
                          <div className="p-3 border-bottom border-translucent">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex">
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-phone">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                  <span className="fa-solid fa-message">                                  </span>
                                </button>
                                <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                  <span className="fa-solid fa-video">                                  </span>
                                </button>
                              </div>
                              <button className="btn btn-phoenix-primary">
                                <span className="fa-solid fa-envelope me-2">                                </span>
Send Email
                              </button>
                            </div>
                          </div>
                          <ul className="nav d-flex flex-column py-3 border-bottom">
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                </span>                                <span className="text-body-highlight flex-1">
Assigned Projects
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                <span className="me-2 text-body" data-feather={"pie-chart"}>                                </span>                                <span className="text-body-highlight flex-1">
View activiy
                                </span>                                <span className="fa-solid fa-chevron-right fs-11">                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="p-3 d-flex justify-content-between">
                          <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                          </a>
                          <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                          </a>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap start ps-3">
                    <p className="mb-0 fs-9 text-body">
Feb 24, 2020
                    </p>
                  </td>
                  <td className="align-middle white-space-nowrap deadline ps-3">
                    <p className="mb-0 fs-9 text-body">
Nov 24, 2021
                    </p>
                  </td>
                  <td className="align-middle white-space-nowrap calculation ps-3">
                    <p className="fw-bold text-body-emphasis fs-9 mb-0">
$55k
                    </p>
                    <p className="fw-semibold fs-10 text-body-tertiary mb-0">
Budget
                    </p>
                  </td>
                  <td className="align-middle white-space-nowrap ps-3 projectprogress">
                    <p className="text-body-secondary fs-10 mb-0">
600 / 600
                    </p>
                    <div className="progress" style={{"height":"3px"} as CSSProperties}>
                      <div className="progress-bar bg-success" style={{"width":"100%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} role="progressbar">                      </div>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap ps-8">
                    <div className="progress progress-stack mt-3" style={{"height":"3px"} as CSSProperties}>
                      <div className="progress-bar bg-info" style={{"width":"24%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} role="progressbar" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Active">                      </div>
                      <div className="progress-bar bg-danger" style={{"width":"5%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Damage" role="progressbar">                      </div>
                      <div className="progress-bar bg-warning" style={{"width":"35%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Pending" role="progressbar">                      </div>
                      <div className="progress-bar bg-success" style={{"width":"35%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Done" role="progressbar">                      </div>
                    </div>
                  </td>
                  <td className="align-middle text-end white-space-nowrap pe-0 action">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
            <div className="col-auto d-flex">
              <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info>              </p>
              <a href="#!" className="fw-semibold"  data-list-view={"*"}>
View all                <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                </span>
              </a>
              <a href="#!" className="fw-semibold d-none"  data-list-view={"less"}>
View Less                <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                </span>
              </a>
            </div>
            <div className="col-auto d-flex">
              <button className="page-link" data-list-pagination={"prev"}>
                <span className="fas fa-chevron-left">                </span>
              </button>
              <ul className="mb-0 pagination">              </ul>
              <button className="page-link pe-0" data-list-pagination={"next"}>
                <span className="fas fa-chevron-right">                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 mx-lg-n4">
        <div className="row g-3">
          <div className="col-12 col-xl-6 col-xxl-7">
            <div className="card todo-list h-100">
              <div className="card-header border-bottom-0 pb-0">
                <div className="row justify-content-between align-items-center mb-4">
                  <div className="col-auto">
                    <h3 className="text-body-emphasis">
To do
                    </h3>
                    <p className="mb-2 mb-md-0 mb-lg-2 text-body-tertiary">
Task assigned to me
                    </p>
                  </div>
                  <div className="col-auto w-100 w-md-auto">
                    <div className="row align-items-center g-0 justify-content-between">
                      <div className="col-12 col-sm-auto">
                        <div className="search-box w-100 mb-2 mb-sm-0" style={{"maxWidth":"30rem"} as CSSProperties}>
                          <form className="position-relative">
                            <input className="form-control search-input search" type="search" placeholder="Search tasks" aria-label="Search" />
                            <span className="fas fa-search search-box-icon">                            </span>
                          </form>
                        </div>
                      </div>
                      <div className="col-auto d-flex">
                        <p className="mb-0 ms-sm-3 fs-9 text-body-tertiary fw-bold">
                          <span className="fas fa-filter me-1 fw-extra-bold fs-10">                          </span>
23 tasks
                        </p>
                        <button className="btn btn-link p-0 ms-3 fs-9 text-primary fw-bold">
                          <span className="fas fa-sort me-1 fw-extra-bold fs-10">                          </span>
Sorting
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body py-0 scrollbar to-do-list-body">
                <div className="d-flex hover-actions-trigger py-3 border-translucent border-top">
                  <input className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-0" data-event-propagation-prevent />
                  <div className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer" data-bs-toggle={"modal"} data-bs-target={"#exampleModal"}>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                        <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
Designing the dungeon
                        </label>
                        <span className="badge badge-phoenix ms-auto fs-10 badge-phoenix-primary">
DRAFT
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="d-flex lh-1 align-items-center">
                        <a href="#!" className="text-body-tertiary fw-bold fs-10 me-2">
                          <span className="fas fa-paperclip me-1">                          </span>2
                        </a>
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
12 Nov, 2021
                        </p>
                        <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                          <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
12:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties} data-event-propagation-prevent>
                    <div className="hover-actions end-0" data-event-propagation-prevent>
                      <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1" data-event-propagation-prevent>
                        <span className="fas fa-edit">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0" data-event-propagation-prevent>
                        <span className="fas fa-trash">                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex hover-actions-trigger py-3 border-translucent border-top">
                  <input className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-1" data-event-propagation-prevent />
                  <div className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer" data-bs-toggle={"modal"} data-bs-target={"#exampleModal"}>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                        <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
Hiring a motion graphic designer
                        </label>
                        <span className="badge badge-phoenix ms-auto fs-10 badge-phoenix-warning">
URGENT
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="d-flex lh-1 align-items-center">
                        <a href="#!" className="text-body-tertiary fw-bold fs-10 me-2">
                          <span className="fas fa-paperclip me-1">                          </span>2
                        </a>
                        <a href="#!" className="text-warning fw-bold fs-10 me-2">
                          <span className="fas fa-tasks me-1">                          </span>3
                        </a>
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
12 Nov, 2021
                        </p>
                        <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                          <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
12:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties} data-event-propagation-prevent>
                    <div className="hover-actions end-0" data-event-propagation-prevent>
                      <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1" data-event-propagation-prevent>
                        <span className="fas fa-edit">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0" data-event-propagation-prevent>
                        <span className="fas fa-trash">                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex hover-actions-trigger py-3 border-translucent border-top">
                  <input className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-2" data-event-propagation-prevent />
                  <div className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer" data-bs-toggle={"modal"} data-bs-target={"#exampleModal"}>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                        <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
Daily Meetings Purpose, participants
                        </label>
                        <span className="badge badge-phoenix ms-auto fs-10 badge-phoenix-info">
ON PROCESS
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="d-flex lh-1 align-items-center">
                        <a href="#!" className="text-body-tertiary fw-bold fs-10 me-2">
                          <span className="fas fa-paperclip me-1">                          </span>4
                        </a>
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
12 Dec, 2021
                        </p>
                        <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                          <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
05:00 AM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties} data-event-propagation-prevent>
                    <div className="hover-actions end-0" data-event-propagation-prevent>
                      <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1" data-event-propagation-prevent>
                        <span className="fas fa-edit">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0" data-event-propagation-prevent>
                        <span className="fas fa-trash">                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex hover-actions-trigger py-3 border-translucent border-top">
                  <input className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-3" data-event-propagation-prevent />
                  <div className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer" data-bs-toggle={"modal"} data-bs-target={"#exampleModal"}>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                        <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
Finalizing the geometric shapes
                        </label>
                      </div>
                    </div>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="d-flex lh-1 align-items-center">
                        <a href="#!" className="text-body-tertiary fw-bold fs-10 me-2">
                          <span className="fas fa-paperclip me-1">                          </span>3
                        </a>
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
12 Nov, 2021
                        </p>
                        <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                          <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
12:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties} data-event-propagation-prevent>
                    <div className="hover-actions end-0" data-event-propagation-prevent>
                      <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1" data-event-propagation-prevent>
                        <span className="fas fa-edit">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0" data-event-propagation-prevent>
                        <span className="fas fa-trash">                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex hover-actions-trigger py-3 border-translucent border-top">
                  <input className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-4" data-event-propagation-prevent />
                  <div className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer" data-bs-toggle={"modal"} data-bs-target={"#exampleModal"}>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                        <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
Daily meeting with team members
                        </label>
                      </div>
                    </div>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="d-flex lh-1 align-items-center">
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
1 Nov, 2021
                        </p>
                        <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                          <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
12:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties} data-event-propagation-prevent>
                    <div className="hover-actions end-0" data-event-propagation-prevent>
                      <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1" data-event-propagation-prevent>
                        <span className="fas fa-edit">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0" data-event-propagation-prevent>
                        <span className="fas fa-trash">                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex hover-actions-trigger py-3 border-translucent border-top">
                  <input className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-5" data-event-propagation-prevent />
                  <div className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer" data-bs-toggle={"modal"} data-bs-target={"#exampleModal"}>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                        <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
Daily Standup Meetings
                        </label>
                      </div>
                    </div>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="d-flex lh-1 align-items-center">
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
13 Nov, 2021
                        </p>
                        <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                          <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
10:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties} data-event-propagation-prevent>
                    <div className="hover-actions end-0" data-event-propagation-prevent>
                      <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1" data-event-propagation-prevent>
                        <span className="fas fa-edit">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0" data-event-propagation-prevent>
                        <span className="fas fa-trash">                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex hover-actions-trigger py-3 border-translucent border-top">
                  <input className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-6" data-event-propagation-prevent />
                  <div className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer" data-bs-toggle={"modal"} data-bs-target={"#exampleModal"}>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                        <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
Procrastinate for a month
                        </label>
                        <span className="badge badge-phoenix ms-auto fs-10 badge-phoenix-info">
ON PROCESS
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="d-flex lh-1 align-items-center">
                        <a href="#!" className="text-body-tertiary fw-bold fs-10 me-2">
                          <span className="fas fa-paperclip me-1">                          </span>3
                        </a>
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
12 Nov, 2021
                        </p>
                        <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                          <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
12:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties} data-event-propagation-prevent>
                    <div className="hover-actions end-0" data-event-propagation-prevent>
                      <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1" data-event-propagation-prevent>
                        <span className="fas fa-edit">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0" data-event-propagation-prevent>
                        <span className="fas fa-trash">                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex hover-actions-trigger py-3 border-translucent border-top">
                  <input className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-7" data-event-propagation-prevent />
                  <div className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer" data-bs-toggle={"modal"} data-bs-target={"#exampleModal"}>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                        <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
warming up
                        </label>
                        <span className="badge badge-phoenix ms-auto fs-10 badge-phoenix-info">
CLOSE
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="d-flex lh-1 align-items-center">
                        <a href="#!" className="text-body-tertiary fw-bold fs-10 me-2">
                          <span className="fas fa-paperclip me-1">                          </span>3
                        </a>
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
12 Nov, 2021
                        </p>
                        <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                          <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
12:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties} data-event-propagation-prevent>
                    <div className="hover-actions end-0" data-event-propagation-prevent>
                      <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1" data-event-propagation-prevent>
                        <span className="fas fa-edit">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0" data-event-propagation-prevent>
                        <span className="fas fa-trash">                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex hover-actions-trigger py-3 border-translucent border-top border-bottom">
                  <input className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-8" data-event-propagation-prevent />
                  <div className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer" data-bs-toggle={"modal"} data-bs-target={"#exampleModal"}>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                        <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
Make ready for release
                        </label>
                      </div>
                    </div>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="d-flex lh-1 align-items-center">
                        <a href="#!" className="text-body-tertiary fw-bold fs-10 me-2">
                          <span className="fas fa-paperclip me-1">                          </span>2
                        </a>
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
2o Nov, 2021
                        </p>
                        <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                          <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
1:00 AM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties} data-event-propagation-prevent>
                    <div className="hover-actions end-0" data-event-propagation-prevent>
                      <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1" data-event-propagation-prevent>
                        <span className="fas fa-edit">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0" data-event-propagation-prevent>
                        <span className="fas fa-trash">                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-hidden="true">
                  <div className="modal-dialog modal-xl">
                    <div className="modal-content bg-body overflow-hidden">
                      <div className="modal-header justify-content-between px-6 py-5 pe-sm-5 px-md-6 dark__bg-gray-1100">
                        <h3 className="text-body-highlight fw-bolder mb-0">
Designing the Dungeon Blueprint
                        </h3>
                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-xl flex-shrink-0" type="button" data-bs-dismiss={"modal"} aria-label="Close">
                          <span className="fa-solid fa-xmark">                          </span>
                        </button>
                      </div>
                      <div className="modal-body bg-body-highlight px-6 py-0">
                        <div className="row gx-14">
                          <div className="col-12 col-lg-7 border-end-lg">
                            <div className="py-6">
                              <div className="mb-7">
                                <div className="d-flex align-items-center mb-3">
                                  <h4 className="text-body me-3">
Description
                                  </h4>
                                  <a href="#!" className="btn btn-link text-decoration-none p-0">
                                    <span className="fa-solid fa-pen">                                    </span>
                                  </a>
                                </div>
                                <p className="text-body-highlight mb-0">
The female circus horse-rider is a recurring subject in Chagall’s work. In 1926 the art dealer Ambroise Vollard invited Chagall to make a project based on the circus. They visited Paris’s historic Cirque d’Hiver Bouglione together; Vollard lent Chagall his private box seats. Chagall completed 19 gouaches Chagall’s work. In 1926 the art dealer Ambroise Vollard invited Chagall to make a project based on the circus.
                                </p>
                              </div>
                              <div className="mb-7">
                                <h4 className="mb-3">
Subtasks
                                </h4>
                                <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top">
                                  <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                                    <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtaskundefined1" />
                                    <label className="form-check-label mb-0 fs-8" htmlFor="subtaskundefined1">
Study Dragons
                                    </label>
                                  </div>
                                  <div className="hover-actions end-0">
                                    <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                                      <span className="fa-solid fa-pencil">                                      </span>
                                    </button>
                                    <button className="btn btn-sm text-body-tertiary px-0">
                                      <span className="fa-solid fa-xmark fs-8">                                      </span>
                                    </button>
                                  </div>
                                </div>
                                <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top">
                                  <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                                    <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtaskundefined2" />
                                    <label className="form-check-label mb-0 fs-8" htmlFor="subtaskundefined2">
Procrastinate a bit
                                    </label>
                                  </div>
                                  <div className="hover-actions end-0">
                                    <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                                      <span className="fa-solid fa-pencil">                                      </span>
                                    </button>
                                    <button className="btn btn-sm text-body-tertiary px-0">
                                      <span className="fa-solid fa-xmark fs-8">                                      </span>
                                    </button>
                                  </div>
                                </div>
                                <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top border-bottom mb-3">
                                  <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                                    <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtaskundefined3" />
                                    <label className="form-check-label mb-0 fs-8" htmlFor="subtaskundefined3">
Staring at the notebook for 5 mins
                                    </label>
                                  </div>
                                  <div className="hover-actions end-0">
                                    <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                                      <span className="fa-solid fa-pencil">                                      </span>
                                    </button>
                                    <button className="btn btn-sm text-body-tertiary px-0">
                                      <span className="fa-solid fa-xmark fs-8">                                      </span>
                                    </button>
                                  </div>
                                </div>
                                <a href="#!" className="fw-bold fs-9">
                                  <span className="fas fa-plus me-1">                                  </span>Add subtask
                                </a>
                              </div>
                              <div className="mb-3">
                                <div>
                                  <h4 className="mb-3">
Files
                                  </h4>
                                </div>
                                <div className="border-top px-0 pt-4 pb-3">
                                  <div className="me-n3">
                                    <div className="d-flex flex-between-center">
                                      <div className="d-flex mb-1">
                                        <span className="fa-solid fa-image me-2 text-body-tertiary fs-9">                                        </span>
                                        <p className="text-body-highlight mb-0 lh-1">
Silly_sight_1.png
                                        </p>
                                      </div>
                                      <div className="btn-reveal-trigger">
                                        <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                          <span className="fas fa-ellipsis-h">                                          </span>
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
                                    <div className="d-flex fs-9 text-body-tertiary mb-2 flex-wrap">
                                      <span>
768 kb
                                      </span>
                                      <span className="text-body-quaternary mx-1">
| 
                                      </span>
                                      <a href="#!">
Shantinan Mekalan 
                                      </a>
                                      <span className="text-body-quaternary mx-1">
| 
                                      </span>
                                      <span className="text-nowrap">
21st Dec, 12:56 PM
                                      </span>
                                    </div>
                                    <PhoenixImage src="/assets/img/generic/40.png" alt="" className="rounded-2" />
                                  </div>
                                </div>
                                <div className="border-top px-0 pt-4 pb-3">
                                  <div className="me-n3">
                                    <div className="d-flex flex-between-center">
                                      <div>
                                        <div className="d-flex align-items-center mb-1">
                                          <span className="fa-solid fa-image me-2 fs-9 text-body-tertiary">                                          </span>
                                          <p className="text-body-highlight mb-0 lh-1">
All_images.zip
                                          </p>
                                        </div>
                                        <div className="d-flex fs-9 text-body-tertiary mb-0 flex-wrap">
                                          <span>
12.8 mb
                                          </span>
                                          <span className="text-body-quaternary mx-1">
| 
                                          </span>
                                          <a href="#!">
Yves Tanguy 
                                          </a>
                                          <span className="text-body-quaternary mx-1">
| 
                                          </span>
                                          <span className="text-nowrap">
19th Dec, 08:56 PM
                                          </span>
                                        </div>
                                      </div>
                                      <div className="btn-reveal-trigger">
                                        <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                          <span className="fas fa-ellipsis-h">                                          </span>
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
                                  </div>
                                </div>
                                <div className="border-top px-0 pt-4 pb-3 border-bottom">
                                  <div className="me-n3">
                                    <div className="d-flex flex-between-center">
                                      <div>
                                        <div className="d-flex align-items-center mb-1 flex-wrap">
                                          <span className="fa-solid fa-file-lines me-2 fs-9 text-body-tertiary">                                          </span>
                                          <p className="text-body-highlight mb-0 lh-1">
Project.txt
                                          </p>
                                        </div>
                                        <div className="d-flex fs-9 text-body-tertiary mb-0 flex-wrap">
                                          <span>
123 kb
                                          </span>
                                          <span className="text-body-quaternary mx-1">
| 
                                          </span>
                                          <a href="#!">
Shantinan Mekalan 
                                          </a>
                                          <span className="text-body-quaternary mx-1">
| 
                                          </span>
                                          <span className="text-nowrap">
12th Dec, 12:56 PM
                                          </span>
                                        </div>
                                      </div>
                                      <div className="btn-reveal-trigger">
                                        <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                          <span className="fas fa-ellipsis-h">                                          </span>
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
                                  </div>
                                </div>
                                <div className="mt-3">
                                  <label className="btn btn-link p-0" htmlFor="customFile">
                                    <span className="fas fa-plus me-1">                                    </span>
Add file(s)
                                  </label>
                                  <input className="d-none" id="customFile" type="file" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-lg-5">
                            <div className="py-6">
                              <h4 className="mb-4 text-body-emphasis">
Others Information
                              </h4>
                              <h5 className="text-body-highlight mb-2">
Status
                              </h5>
                              <select className="form-select mb-4" aria-label="Default select example">
                                <option>
Select
                                </option>
                                <option value="1">
One
                                </option>
                                <option value="2">
Two
                                </option>
                                <option value="3">
Three
                                </option>
                              </select>
                              <h5 className="text-body-highlight mb-2">
Due Date
                              </h5>
                              <div className="flatpickr-input-container mb-4">
                                <input className="form-control datetimepicker ps-6" type="text" placeholder="Set the due date" data-options={"{\"disableMobile\":true}"} />
                                <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary">                                </span>
                              </div>
                              <h5 className="text-body-highlight mb-2">
Reminder
                              </h5>
                              <div className="flatpickr-input-container mb-4">
                                <input className="form-control datetimepicker ps-6" type="text" placeholder="Reminder" data-options={"{\"enableTime\":true,\"noCalendar\":true,\"dateFormat\":\"H:i\",\"disableMobile\":true,\"static\":true}"} />
                                <span className="uil uil-bell-school flatpickr-icon text-body-tertiary">                                </span>
                              </div>
                              <h5 className="text-body-highlight mb-2">
Tag
                              </h5>
                              <div className="choices-select-container mb-6">
                                <select className="form-select" data-choices multiple data-options={"{\"removeItemButton\":true,\"placeholder\":true}"}>
                                  <option value="">
Select organizer...
                                  </option>
                                  <option>
Massachusetts Institute of Technology
                                  </option>
                                  <option>
University of Chicago
                                  </option>
                                  <option>
GSAS Open Labs At Harvard
                                  </option>
                                  <option>
California Institute of Technology
                                  </option>
                                </select>
                                <span className="uil uil-tag-alt choices-icon text-body-tertiary" style={{"top":"26%"} as CSSProperties}>                                </span>
                              </div>
                              <div className="text-end mb-9">
                                <button className="btn btn-phoenix-danger">
Delete Task
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer border-0">
                <a href="#!" className="fw-bold fs-9 mt-4">
                  <span className="fas fa-plus me-1">                  </span>Add new task
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-xxl-5">
            <div className="card h-100">
              <div className="card-body">
                <div className="card-title mb-1">
                  <h3 className="text-body-emphasis">
Activity
                  </h3>
                </div>
                <p className="text-body-tertiary mb-4">
Recent activity across all projects
                </p>
                <div className="timeline-vertical timeline-with-details">
                  <div className="timeline-item position-relative">
                    <div className="row g-md-3">
                      <div className="col-12 col-md-auto d-flex">
                        <div className="timeline-item-date order-1 order-md-0 me-md-4">
                          <p className="fs-10 fw-semibold text-body-tertiary text-opacity-85 text-end">
01 DEC, 2023
                            <br className="d-none d-md-block" />
 10:30 AM
                          </p>
                        </div>
                        <div className="timeline-item-bar position-md-relative me-3 me-md-0">
                          <div className="icon-item icon-item-sm rounded-7 shadow-none bg-primary-subtle">
                            <span className="fa-solid fa-chess text-primary-dark fs-10">                            </span>
                          </div>
                          <span className="timeline-bar border-end border-dashed">                          </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="timeline-item-content ps-6 ps-md-3">
                          <h5 className="fs-9 lh-sm">
Phoenix Template: Unleashing Creative Possibilities
                          </h5>
                          <p className="fs-9">
by 
                            <a href="#!" className="fw-semibold">
Shantinon Mekalan
                            </a>
                          </p>
                          <p className="fs-9 text-body-secondary mb-5">
Discover limitless creativity with the Phoenix template! Our latest update offers an array of innovative features and design options.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item position-relative">
                    <div className="row g-md-3">
                      <div className="col-12 col-md-auto d-flex">
                        <div className="timeline-item-date order-1 order-md-0 me-md-4">
                          <p className="fs-10 fw-semibold text-body-tertiary text-opacity-85 text-end">
05 DEC, 2023
                            <br className="d-none d-md-block" />
 12:30 AM
                          </p>
                        </div>
                        <div className="timeline-item-bar position-md-relative me-3 me-md-0">
                          <div className="icon-item icon-item-sm rounded-7 shadow-none bg-primary-subtle">
                            <span className="fa-solid fa-dove text-primary-dark fs-10">                            </span>
                          </div>
                          <span className="timeline-bar border-end border-dashed">                          </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="timeline-item-content ps-6 ps-md-3">
                          <h5 className="fs-9 lh-sm">
Empower Your Digital Presence: The Phoenix Template Unveiled
                          </h5>
                          <p className="fs-9">
by 
                            <a href="#!" className="fw-semibold">
Bookworm22
                            </a>
                          </p>
                          <p className="fs-9 text-body-secondary mb-5">
Unveiling the Phoenix template, a game-changer for your digital presence. With its powerful features and sleek design,
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item position-relative">
                    <div className="row g-md-3">
                      <div className="col-12 col-md-auto d-flex">
                        <div className="timeline-item-date order-1 order-md-0 me-md-4">
                          <p className="fs-10 fw-semibold text-body-tertiary text-opacity-85 text-end">
15 DEC, 2023
                            <br className="d-none d-md-block" />
 2:30 AM
                          </p>
                        </div>
                        <div className="timeline-item-bar position-md-relative me-3 me-md-0">
                          <div className="icon-item icon-item-sm rounded-7 shadow-none bg-primary-subtle">
                            <span className="fa-solid fa-dungeon text-primary-dark fs-10">                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="timeline-item-content ps-6 ps-md-3">
                          <h5 className="fs-9 lh-sm">
Phoenix Template: Simplified Design, Maximum Impact
                          </h5>
                          <p className="fs-9">
by 
                            <a href="#!" className="fw-semibold">
Sharuka Nijibum
                            </a>
                          </p>
                          <p className="fs-9 text-body-secondary mb-0">
Introducing the Phoenix template, where simplified design meets maximum impact. Elevate your digital presence with its sleek and intuitive features.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis pt-7 mt-3 border-y">
        <div data-list={"{\"valueNames\":[\"product\",\"customer\",\"rating\",\"review\",\"time\"],\"page\":6}"}>
          <div className="row align-items-end justify-content-between pb-5 g-3">
            <div className="col-auto">
              <h3>
Latest reviews
              </h3>
              <p className="text-body-tertiary lh-sm mb-0">
Payment received across all channels
              </p>
            </div>
            <div className="col-12 col-md-auto">
              <div className="row g-2 gy-3">
                <div className="col-auto flex-1">
                  <div className="search-box">
                    <form className="position-relative">
                      <input className="form-control search-input search form-control-sm" type="search" placeholder="Search" aria-label="Search" />
                      <span className="fas fa-search search-box-icon">                      </span>
                    </form>
                  </div>
                </div>
                <div className="col-auto">
                  <button className="btn btn-sm btn-phoenix-secondary bg-body-emphasis bg-body-hover me-2" type="button">
All products
                  </button>
                  <button className="btn btn-sm btn-phoenix-secondary bg-body-emphasis bg-body-hover action-btn" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                    <span className="fas fa-ellipsis-h" data-fa-transform={"shrink-2"}>                    </span>
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
            </div>
          </div>
          <div className="table-responsive mx-n1 px-1 scrollbar">
            <table className="table fs-9 mb-0 border-top border-translucent">
              <thead>
                <tr>
                  <th className="white-space-nowrap fs-9 ps-0 align-middle">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" id="checkbox-bulk-reviews-select" type="checkbox" data-bulk-select={"{\"body\":\"table-latest-review-body\"}"} />
                    </div>
                  </th>
                  <th className="sort white-space-nowrap align-middle" scope="col">                  </th>
                  <th className="sort white-space-nowrap align-middle" scope="col" style={{"minWidth":"360px"} as CSSProperties} data-sort={"product"}>
PRODUCT
                  </th>
                  <th className="sort align-middle" scope="col" data-sort={"customer"} style={{"minWidth":"200px"} as CSSProperties}>
CUSTOMER
                  </th>
                  <th className="sort align-middle" scope="col" data-sort={"rating"} style={{"minWidth":"110px"} as CSSProperties}>
RATING
                  </th>
                  <th className="sort align-middle" scope="col" style={{"maxWidth":"350px"} as CSSProperties} data-sort={"review"}>
REVIEW
                  </th>
                  <th className="sort text-start ps-5 align-middle" scope="col" data-sort={"status"}>
STATUS
                  </th>
                  <th className="sort text-end align-middle" scope="col" data-sort={"time"}>
TIME
                  </th>
                  <th className="sort text-end pe-0 align-middle" scope="col">                  </th>
                </tr>
              </thead>
              <tbody className="list" id="table-latest-review-body"><tr className="hover-actions-trigger btn-reveal-trigger position-static">
                  <td className="fs-9 align-middle ps-0">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends, Carbon/Graphite, One Size (S & L Bands)\",\"productImage\":\"/products/60x60/1.png\",\"customer\":{\"name\":\"Richard Dawkins\",\"avatar\":\"\"},\"rating\":5,\"review\":\"This Fitbit is fantastic! I was trying to be in better shape and needed some motivation, so I decided to treat myself to a new Fitbit.\",\"status\":{\"title\":\"Approved\",\"badge\":\"success\",\"icon\":\"check\"},\"time\":\"Just now\"}"} />
                    </div>
                  </td>
                  <td className="align-middle product white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block rounded-2 border border-translucent">
                      <PhoenixImage src="/assets/img/products/60x60/1.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="align-middle product white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold">
Fitbit Sense Advanced Smartwatch with Tools fo...
                    </PhoenixLink>
                  </td>
                  <td className="align-middle customer white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/profile" className="d-flex align-items-center text-body">
                      <div className="avatar avatar-l">
                        <div className="avatar-name rounded-circle">
                          <span>
R
                          </span>
                        </div>
                      </div>                      <h6 className="mb-0 ms-3 text-body">
Richard Dawkins
                      </h6>
                    </PhoenixLink>
                  </td>
                  <td className="align-middle rating white-space-nowrap fs-10">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                  </td>
                  <td className="align-middle review" style={{"minWidth":"350px"} as CSSProperties}>
                    <p className="fs-9 fw-semibold text-body-highlight mb-0">
This Fitbit is fantastic! I was trying to be in better shape and needed some motivation, so I decided to treat myself to a new Fitbit.
                    </p>
                  </td>
                  <td className="align-middle text-start ps-5 status">
                    <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                      <span className="badge-label">
Approved
                      </span>
                      <span className="ms-1" data-feather={"check"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                      </span>
                    </span>
                  </td>
                  <td className="align-middle text-end time white-space-nowrap">
                    <div className="hover-hide">
                      <h6 className="text-body-highlight mb-0">
Just now
                      </h6>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0">
                    <div className="position-relative">
                      <div className="hover-actions">
                        <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                          <span className="fas fa-check">                          </span>
                        </button>
                        <button className="btn btn-sm btn-phoenix-secondary fs-10">
                          <span className="fas fa-trash">                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"iPhone 13 pro max-Pacific Blue-128GB storage\",\"productImage\":\"/products/60x60/2.png\",\"customer\":{\"name\":\"Ashley Garrett\",\"avatar\":\"/team/40x40/59.webp\"},\"rating\":3,\"review\":\"The order was delivered ahead of schedule. To give us additional time, you should leave the packaging sealed with plastic.\",\"status\":{\"title\":\"Approved\",\"badge\":\"success\",\"icon\":\"check\"},\"time\":\"Just now\"}"} />
                    </div>
                  </td>
                  <td className="align-middle product white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block rounded-2 border border-translucent">
                      <PhoenixImage src="/assets/img/products/60x60/2.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="align-middle product white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold">
iPhone 13 pro max-Pacific Blue-128GB storage
                    </PhoenixLink>
                  </td>
                  <td className="align-middle customer white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/profile" className="d-flex align-items-center text-body">
                      <div className="avatar avatar-l">
                        <PhoenixImage src="/assets/img/team/40x40/59.webp" alt="" className="rounded-circle" />
                      </div>                      <h6 className="mb-0 ms-3 text-body">
Ashley Garrett
                      </h6>
                    </PhoenixLink>
                  </td>
                  <td className="align-middle rating white-space-nowrap fs-10">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                  </td>
                  <td className="align-middle review" style={{"minWidth":"350px"} as CSSProperties}>
                    <p className="fs-9 fw-semibold text-body-highlight mb-0">
The order was delivered ahead of schedule. To give us additional time, you should leave the packaging sealed with plastic.
                    </p>
                  </td>
                  <td className="align-middle text-start ps-5 status">
                    <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                      <span className="badge-label">
Approved
                      </span>
                      <span className="ms-1" data-feather={"check"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                      </span>
                    </span>
                  </td>
                  <td className="align-middle text-end time white-space-nowrap">
                    <div className="hover-hide">
                      <h6 className="text-body-highlight mb-0">
Just now
                      </h6>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0">
                    <div className="position-relative">
                      <div className="hover-actions">
                        <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                          <span className="fas fa-check">                          </span>
                        </button>
                        <button className="btn btn-sm btn-phoenix-secondary fs-10">
                          <span className="fas fa-trash">                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"Apple MacBook Pro 13 inch-M1-8/256GB-space\",\"productImage\":\"/products/60x60/3.png\",\"customer\":{\"name\":\"Woodrow Burton\",\"avatar\":\"/team/40x40/58.webp\"},\"rating\":4.5,\"review\":\"It&#39;s a Mac, after all. Once you&#39;ve gone Mac, there&#39;s no going back. My first Mac lasted over nine years, and this is my second.\",\"status\":{\"title\":\"Pending\",\"badge\":\"warning\",\"icon\":\"clock\"},\"time\":\"Just now\"}"} />
                    </div>
                  </td>
                  <td className="align-middle product white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block rounded-2 border border-translucent">
                      <PhoenixImage src="/assets/img/products/60x60/3.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="align-middle product white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold">
Apple MacBook Pro 13 inch-M1-8/256GB-space
                    </PhoenixLink>
                  </td>
                  <td className="align-middle customer white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/profile" className="d-flex align-items-center text-body">
                      <div className="avatar avatar-l">
                        <PhoenixImage src="/assets/img/team/40x40/58.webp" alt="" className="rounded-circle" />
                      </div>                      <h6 className="mb-0 ms-3 text-body">
Woodrow Burton
                      </h6>
                    </PhoenixLink>
                  </td>
                  <td className="align-middle rating white-space-nowrap fs-10">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star-half-alt star-icon text-warning">                    </span>
                  </td>
                  <td className="align-middle review" style={{"minWidth":"350px"} as CSSProperties}>
                    <p className="fs-9 fw-semibold text-body-highlight mb-0">
It's a Mac, after all. Once you've gone Mac, there's no going back. My first Mac lasted over nine years, and this is my second.
                    </p>
                  </td>
                  <td className="align-middle text-start ps-5 status">
                    <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                      <span className="badge-label">
Pending
                      </span>
                      <span className="ms-1" data-feather={"clock"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                      </span>
                    </span>
                  </td>
                  <td className="align-middle text-end time white-space-nowrap">
                    <div className="hover-hide">
                      <h6 className="text-body-highlight mb-0">
Just now
                      </h6>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0">
                    <div className="position-relative">
                      <div className="hover-actions">
                        <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                          <span className="fas fa-check">                          </span>
                        </button>
                        <button className="btn btn-sm btn-phoenix-secondary fs-10">
                          <span className="fas fa-trash">                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"Apple iMac 24\\\" 4K Retina Display M1 8 Core CPU, 7 Core GPU, 256GB SSD, Green (MJV83ZP/A) 2021\",\"productImage\":\"/products/60x60/4.png\",\"customer\":{\"name\":\"Eric McGee\",\"avatar\":\"/team/40x40/avatar.webp\",\"avatarPlaceholder\":true},\"rating\":3,\"review\":\"Personally, I like the minimalist style, but I wouldn&#39;t choose it if I were searching for a computer that I would use frequently. It&#39;s not horrible in terms of speed and power, but the\",\"status\":{\"title\":\"Pending\",\"badge\":\"warning\",\"icon\":\"clock\"},\"time\":\"Nov 09, 3:23 AM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle product white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block rounded-2 border border-translucent">
                      <PhoenixImage src="/assets/img/products/60x60/4.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="align-middle product white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold">
Apple iMac 24" 4K Retina Display M1 8 Core CPU...
                    </PhoenixLink>
                  </td>
                  <td className="align-middle customer white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/profile" className="d-flex align-items-center text-body">
                      <div className="avatar avatar-l">
                        <PhoenixImage src="/assets/img/team/40x40/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                      </div>                      <h6 className="mb-0 ms-3 text-body">
Eric McGee
                      </h6>
                    </PhoenixLink>
                  </td>
                  <td className="align-middle rating white-space-nowrap fs-10">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                  </td>
                  <td className="align-middle review" style={{"minWidth":"350px"} as CSSProperties}>
                    <p className="fs-9 fw-semibold text-body-highlight mb-0">
Personally, I like the minimalist style, but I wouldn't choose it if I were searching for a computer that I would use frequently. It's...
                      <a href="#!">
See more
                      </a>
                    </p>
                  </td>
                  <td className="align-middle text-start ps-5 status">
                    <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                      <span className="badge-label">
Pending
                      </span>
                      <span className="ms-1" data-feather={"clock"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                      </span>
                    </span>
                  </td>
                  <td className="align-middle text-end time white-space-nowrap">
                    <div className="hover-hide">
                      <h6 className="text-body-highlight mb-0">
Nov 09, 3:23 AM
                      </h6>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0">
                    <div className="position-relative">
                      <div className="hover-actions">
                        <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                          <span className="fas fa-check">                          </span>
                        </button>
                        <button className="btn btn-sm btn-phoenix-secondary fs-10">
                          <span className="fas fa-trash">                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset\",\"productImage\":\"/products/60x60/5.png\",\"customer\":{\"name\":\"Kim Carroll\",\"avatar\":\"/team/40x40/avatar.webp\",\"avatarPlaceholder\":true},\"rating\":4,\"review\":\"It performs exactly as expected. There are three of these in the family.\",\"status\":{\"title\":\"Pending\",\"badge\":\"warning\",\"icon\":\"clock\"},\"time\":\"Nov 09, 2:15 PM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle product white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block rounded-2 border border-translucent">
                      <PhoenixImage src="/assets/img/products/60x60/5.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="align-middle product white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold">
Razer Kraken v3 x Wired 7.1 Surroung Sound Gam...
                    </PhoenixLink>
                  </td>
                  <td className="align-middle customer white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/profile" className="d-flex align-items-center text-body">
                      <div className="avatar avatar-l">
                        <PhoenixImage src="/assets/img/team/40x40/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                      </div>                      <h6 className="mb-0 ms-3 text-body">
Kim Carroll
                      </h6>
                    </PhoenixLink>
                  </td>
                  <td className="align-middle rating white-space-nowrap fs-10">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                  </td>
                  <td className="align-middle review" style={{"minWidth":"350px"} as CSSProperties}>
                    <p className="fs-9 fw-semibold text-body-highlight mb-0">
It performs exactly as expected. There are three of these in the family.
                    </p>
                  </td>
                  <td className="align-middle text-start ps-5 status">
                    <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                      <span className="badge-label">
Pending
                      </span>
                      <span className="ms-1" data-feather={"clock"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                      </span>
                    </span>
                  </td>
                  <td className="align-middle text-end time white-space-nowrap">
                    <div className="hover-hide">
                      <h6 className="text-body-highlight mb-0">
Nov 09, 2:15 PM
                      </h6>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0">
                    <div className="position-relative">
                      <div className="hover-actions">
                        <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                          <span className="fas fa-check">                          </span>
                        </button>
                        <button className="btn btn-sm btn-phoenix-secondary fs-10">
                          <span className="fas fa-trash">                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"PlayStation 5 DualSense Wireless Controller\",\"productImage\":\"/products/60x60/6.png\",\"customer\":{\"name\":\"Barbara Lucas\",\"avatar\":\"/team/40x40/57.webp\"},\"rating\":4,\"review\":\"The controller is quite comfy for me. Despite its increased size, the controller still fits well in my hands.\",\"status\":{\"title\":\"Approved\",\"badge\":\"success\",\"icon\":\"check\"},\"time\":\"Nov 08, 8:53 AM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle product white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block rounded-2 border border-translucent">
                      <PhoenixImage src="/assets/img/products/60x60/6.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="align-middle product white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold">
PlayStation 5 DualSense Wireless Controller
                    </PhoenixLink>
                  </td>
                  <td className="align-middle customer white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/profile" className="d-flex align-items-center text-body">
                      <div className="avatar avatar-l">
                        <PhoenixImage src="/assets/img/team/40x40/57.webp" alt="" className="rounded-circle" />
                      </div>                      <h6 className="mb-0 ms-3 text-body">
Barbara Lucas
                      </h6>
                    </PhoenixLink>
                  </td>
                  <td className="align-middle rating white-space-nowrap fs-10">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                  </td>
                  <td className="align-middle review" style={{"minWidth":"350px"} as CSSProperties}>
                    <p className="fs-9 fw-semibold text-body-highlight mb-0">
The controller is quite comfy for me. Despite its increased size, the controller still fits well in my hands.
                    </p>
                  </td>
                  <td className="align-middle text-start ps-5 status">
                    <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                      <span className="badge-label">
Approved
                      </span>
                      <span className="ms-1" data-feather={"check"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                      </span>
                    </span>
                  </td>
                  <td className="align-middle text-end time white-space-nowrap">
                    <div className="hover-hide">
                      <h6 className="text-body-highlight mb-0">
Nov 08, 8:53 AM
                      </h6>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0">
                    <div className="position-relative">
                      <div className="hover-actions">
                        <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                          <span className="fas fa-check">                          </span>
                        </button>
                        <button className="btn btn-sm btn-phoenix-secondary fs-10">
                          <span className="fas fa-trash">                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray\",\"productImage\":\"/products/60x60/7.png\",\"customer\":{\"name\":\"Ansolo Lazinatov\",\"avatar\":\"/team/40x40/3.webp\"},\"rating\":4.5,\"review\":\"The response time and service I received when contacted the designers were Phenomenal!\",\"status\":{\"title\":\"Pending\",\"badge\":\"warning\",\"icon\":\"clock\"},\"time\":\"Nov 07, 9:00 PM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle product white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block rounded-2 border border-translucent">
                      <PhoenixImage src="/assets/img/products/60x60/7.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="align-middle product white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold">
2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) -...
                    </PhoenixLink>
                  </td>
                  <td className="align-middle customer white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/profile" className="d-flex align-items-center text-body">
                      <div className="avatar avatar-l">
                        <PhoenixImage src="/assets/img/team/40x40/3.webp" alt="" className="rounded-circle" />
                      </div>                      <h6 className="mb-0 ms-3 text-body">
Ansolo Lazinatov
                      </h6>
                    </PhoenixLink>
                  </td>
                  <td className="align-middle rating white-space-nowrap fs-10">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star-half-alt star-icon text-warning">                    </span>
                  </td>
                  <td className="align-middle review" style={{"minWidth":"350px"} as CSSProperties}>
                    <p className="fs-9 fw-semibold text-body-highlight mb-0">
The response time and service I received when contacted the designers were Phenomenal!
                    </p>
                  </td>
                  <td className="align-middle text-start ps-5 status">
                    <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                      <span className="badge-label">
Pending
                      </span>
                      <span className="ms-1" data-feather={"clock"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                      </span>
                    </span>
                  </td>
                  <td className="align-middle text-end time white-space-nowrap">
                    <div className="hover-hide">
                      <h6 className="text-body-highlight mb-0">
Nov 07, 9:00 PM
                      </h6>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0">
                    <div className="position-relative">
                      <div className="hover-actions">
                        <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                          <span className="fas fa-check">                          </span>
                        </button>
                        <button className="btn btn-sm btn-phoenix-secondary fs-10">
                          <span className="fas fa-trash">                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"Amazon Basics Matte Black Wired Keyboard - US Layout (QWERTY)\",\"productImage\":\"/products/60x60/8.png\",\"customer\":{\"name\":\"Emma watson\",\"avatar\":\"/team/40x40/26.webp\"},\"rating\":3,\"review\":\"I have started using this theme in the last week and it has really impressed me very much, the support is second to none.\",\"status\":{\"title\":\"Pending\",\"badge\":\"warning\",\"icon\":\"clock\"},\"time\":\"Nov 07, 11:20 AM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle product white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block rounded-2 border border-translucent">
                      <PhoenixImage src="/assets/img/products/60x60/8.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="align-middle product white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold">
Amazon Basics Matte Black Wired Keyboard - US ...
                    </PhoenixLink>
                  </td>
                  <td className="align-middle customer white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/profile" className="d-flex align-items-center text-body">
                      <div className="avatar avatar-l">
                        <PhoenixImage src="/assets/img/team/40x40/26.webp" alt="" className="rounded-circle" />
                      </div>                      <h6 className="mb-0 ms-3 text-body">
Emma watson
                      </h6>
                    </PhoenixLink>
                  </td>
                  <td className="align-middle rating white-space-nowrap fs-10">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                  </td>
                  <td className="align-middle review" style={{"minWidth":"350px"} as CSSProperties}>
                    <p className="fs-9 fw-semibold text-body-highlight mb-0">
I have started using this theme in the last week and it has really impressed me very much, the support is second to none.
                    </p>
                  </td>
                  <td className="align-middle text-start ps-5 status">
                    <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                      <span className="badge-label">
Pending
                      </span>
                      <span className="ms-1" data-feather={"clock"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                      </span>
                    </span>
                  </td>
                  <td className="align-middle text-end time white-space-nowrap">
                    <div className="hover-hide">
                      <h6 className="text-body-highlight mb-0">
Nov 07, 11:20 AM
                      </h6>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0">
                    <div className="position-relative">
                      <div className="hover-actions">
                        <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                          <span className="fas fa-check">                          </span>
                        </button>
                        <button className="btn btn-sm btn-phoenix-secondary fs-10">
                          <span className="fas fa-trash">                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"Amazon Basics Mesh, Mid-Back, Swivel Office Desk Chair with Armrests, Black\",\"productImage\":\"/products/60x60/9.png\",\"customer\":{\"name\":\"Rowen Atkinson\",\"avatar\":\"/team/40x40/29.webp\"},\"rating\":5,\"review\":\"The best experience we could hope for. Customer service team is amazing and the quality of their products is unsurpassed. Great theme too!\",\"status\":{\"title\":\"Approved\",\"badge\":\"success\",\"icon\":\"check\"},\"time\":\"Nov 07, 2:00 PM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle product white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block rounded-2 border border-translucent">
                      <PhoenixImage src="/assets/img/products/60x60/9.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="align-middle product white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold">
Amazon Basics Mesh, Mid-Back, Swivel Office De...
                    </PhoenixLink>
                  </td>
                  <td className="align-middle customer white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/profile" className="d-flex align-items-center text-body">
                      <div className="avatar avatar-l">
                        <PhoenixImage src="/assets/img/team/40x40/29.webp" alt="" className="rounded-circle" />
                      </div>                      <h6 className="mb-0 ms-3 text-body">
Rowen Atkinson
                      </h6>
                    </PhoenixLink>
                  </td>
                  <td className="align-middle rating white-space-nowrap fs-10">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                  </td>
                  <td className="align-middle review" style={{"minWidth":"350px"} as CSSProperties}>
                    <p className="fs-9 fw-semibold text-body-highlight mb-0">
The best experience we could hope for. Customer service team is amazing and the quality of their products is unsurpassed. Great theme ...
                      <a href="#!">
See more
                      </a>
                    </p>
                  </td>
                  <td className="align-middle text-start ps-5 status">
                    <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                      <span className="badge-label">
Approved
                      </span>
                      <span className="ms-1" data-feather={"check"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                      </span>
                    </span>
                  </td>
                  <td className="align-middle text-end time white-space-nowrap">
                    <div className="hover-hide">
                      <h6 className="text-body-highlight mb-0">
Nov 07, 2:00 PM
                      </h6>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0">
                    <div className="position-relative">
                      <div className="hover-actions">
                        <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                          <span className="fas fa-check">                          </span>
                        </button>
                        <button className="btn btn-sm btn-phoenix-secondary fs-10">
                          <span className="fas fa-trash">                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"Apple Magic Mouse (Wireless, Rechargable) - Silver\",\"productImage\":\"/products/60x60/10.png\",\"customer\":{\"name\":\"Anthony Hopkins\",\"avatar\":\"\"},\"rating\":4,\"review\":\"This template has allowed me to convert my existing web app into a great looking, easy to use UI in less than 2 weeks. Very easy to use and understand and has a wide range of ready to use elements. \",\"status\":{\"title\":\"Approved\",\"badge\":\"success\",\"icon\":\"check\"},\"time\":\"Nov 06, 8:00 AM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle product white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block rounded-2 border border-translucent">
                      <PhoenixImage src="/assets/img/products/60x60/10.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="align-middle product white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold">
Apple Magic Mouse (Wireless, Rechargable) - Si...
                    </PhoenixLink>
                  </td>
                  <td className="align-middle customer white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/profile" className="d-flex align-items-center text-body">
                      <div className="avatar avatar-l">
                        <div className="avatar-name rounded-circle">
                          <span>
A
                          </span>
                        </div>
                      </div>                      <h6 className="mb-0 ms-3 text-body">
Anthony Hopkins
                      </h6>
                    </PhoenixLink>
                  </td>
                  <td className="align-middle rating white-space-nowrap fs-10">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                  </td>
                  <td className="align-middle review" style={{"minWidth":"350px"} as CSSProperties}>
                    <p className="fs-9 fw-semibold text-body-highlight mb-0">
This template has allowed me to convert my existing web app into a great looking, easy to use UI in less than 2 weeks. Very easy to us...
                      <a href="#!">
See more
                      </a>
                    </p>
                  </td>
                  <td className="align-middle text-start ps-5 status">
                    <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                      <span className="badge-label">
Approved
                      </span>
                      <span className="ms-1" data-feather={"check"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                      </span>
                    </span>
                  </td>
                  <td className="align-middle text-end time white-space-nowrap">
                    <div className="hover-hide">
                      <h6 className="text-body-highlight mb-0">
Nov 06, 8:00 AM
                      </h6>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0">
                    <div className="position-relative">
                      <div className="hover-actions">
                        <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                          <span className="fas fa-check">                          </span>
                        </button>
                        <button className="btn btn-sm btn-phoenix-secondary fs-10">
                          <span className="fas fa-trash">                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"Echo Dot (4th Gen) _ Smart speaker with Alexa _ Glacier White\",\"productImage\":\"/products/60x60/11.png\",\"customer\":{\"name\":\"Jennifer Schramm\",\"avatar\":\"/team/40x40/8.webp\"},\"rating\":4.5,\"review\":\"The theme is really beautiful and the support answer very quickly and is friendly. Buy it, you will not regret it.\",\"status\":{\"title\":\"Pending\",\"badge\":\"warning\",\"icon\":\"clock\"},\"time\":\"Nov 05, 4:00 AM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle product white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block rounded-2 border border-translucent">
                      <PhoenixImage src="/assets/img/products/60x60/11.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="align-middle product white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold">
Echo Dot (4th Gen) _ Smart speaker with Alexa ...
                    </PhoenixLink>
                  </td>
                  <td className="align-middle customer white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/profile" className="d-flex align-items-center text-body">
                      <div className="avatar avatar-l">
                        <PhoenixImage src="/assets/img/team/40x40/8.webp" alt="" className="rounded-circle" />
                      </div>                      <h6 className="mb-0 ms-3 text-body">
Jennifer Schramm
                      </h6>
                    </PhoenixLink>
                  </td>
                  <td className="align-middle rating white-space-nowrap fs-10">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star-half-alt star-icon text-warning">                    </span>
                  </td>
                  <td className="align-middle review" style={{"minWidth":"350px"} as CSSProperties}>
                    <p className="fs-9 fw-semibold text-body-highlight mb-0">
The theme is really beautiful and the support answer very quickly and is friendly. Buy it, you will not regret it.
                    </p>
                  </td>
                  <td className="align-middle text-start ps-5 status">
                    <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                      <span className="badge-label">
Pending
                      </span>
                      <span className="ms-1" data-feather={"clock"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                      </span>
                    </span>
                  </td>
                  <td className="align-middle text-end time white-space-nowrap">
                    <div className="hover-hide">
                      <h6 className="text-body-highlight mb-0">
Nov 05, 4:00 AM
                      </h6>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0">
                    <div className="position-relative">
                      <div className="hover-actions">
                        <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                          <span className="fas fa-check">                          </span>
                        </button>
                        <button className="btn btn-sm btn-phoenix-secondary fs-10">
                          <span className="fas fa-trash">                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"HORI Racing Wheel Apex for PlayStation 4_3, and PC\",\"productImage\":\"/products/60x60/12.png\",\"customer\":{\"name\":\"Raymond Mims\",\"avatar\":\"/team/40x40/avatar.webp\",\"avatarPlaceholder\":true},\"rating\":4,\"review\":\"As others mentioned, the team behind this theme is super responsive. I sent a message during the weekend, fully expecting a response after the weekend, but I got one within minutes, and I was unblocked.\",\"status\":{\"title\":\"Approved\",\"badge\":\"success\",\"icon\":\"check\"},\"time\":\"Nov 04, 6:53 PM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle product white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block rounded-2 border border-translucent">
                      <PhoenixImage src="/assets/img/products/60x60/12.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="align-middle product white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold">
HORI Racing Wheel Apex for PlayStation 4_3, an...
                    </PhoenixLink>
                  </td>
                  <td className="align-middle customer white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/profile" className="d-flex align-items-center text-body">
                      <div className="avatar avatar-l">
                        <PhoenixImage src="/assets/img/team/40x40/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                      </div>                      <h6 className="mb-0 ms-3 text-body">
Raymond Mims
                      </h6>
                    </PhoenixLink>
                  </td>
                  <td className="align-middle rating white-space-nowrap fs-10">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                  </td>
                  <td className="align-middle review" style={{"minWidth":"350px"} as CSSProperties}>
                    <p className="fs-9 fw-semibold text-body-highlight mb-0">
As others mentioned, the team behind this theme is super responsive. I sent a message during the weekend, fully expecting a response a...
                      <a href="#!">
See more
                      </a>
                    </p>
                  </td>
                  <td className="align-middle text-start ps-5 status">
                    <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                      <span className="badge-label">
Approved
                      </span>
                      <span className="ms-1" data-feather={"check"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                      </span>
                    </span>
                  </td>
                  <td className="align-middle text-end time white-space-nowrap">
                    <div className="hover-hide">
                      <h6 className="text-body-highlight mb-0">
Nov 04, 6:53 PM
                      </h6>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0">
                    <div className="position-relative">
                      <div className="hover-actions">
                        <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                          <span className="fas fa-check">                          </span>
                        </button>
                        <button className="btn btn-sm btn-phoenix-secondary fs-10">
                          <span className="fas fa-trash">                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)\",\"productImage\":\"/products/60x60/13.png\",\"customer\":{\"name\":\"Michael Jenkins\",\"avatar\":\"/team/40x40/9.webp\"},\"rating\":5,\"review\":\"I had a bit of a hard time at first but after I contacted the team they were able to help me set up the theme. It&#39;s really good and I highly recommend it to everyone.\",\"status\":{\"title\":\"Pending\",\"badge\":\"warning\",\"icon\":\"clock\"},\"time\":\"Nov 04, 12:00 PM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle product white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block rounded-2 border border-translucent">
                      <PhoenixImage src="/assets/img/products/60x60/13.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="align-middle product white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold">
Nintendo Switch with Neon Blue and Neon Red Jo...
                    </PhoenixLink>
                  </td>
                  <td className="align-middle customer white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/profile" className="d-flex align-items-center text-body">
                      <div className="avatar avatar-l">
                        <PhoenixImage src="/assets/img/team/40x40/9.webp" alt="" className="rounded-circle" />
                      </div>                      <h6 className="mb-0 ms-3 text-body">
Michael Jenkins
                      </h6>
                    </PhoenixLink>
                  </td>
                  <td className="align-middle rating white-space-nowrap fs-10">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                  </td>
                  <td className="align-middle review" style={{"minWidth":"350px"} as CSSProperties}>
                    <p className="fs-9 fw-semibold text-body-highlight mb-0">
I had a bit of a hard time at first but after I contacted the team they were able to help me set up the theme. It's really good and I ...
                      <a href="#!">
See more
                      </a>
                    </p>
                  </td>
                  <td className="align-middle text-start ps-5 status">
                    <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                      <span className="badge-label">
Pending
                      </span>
                      <span className="ms-1" data-feather={"clock"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                      </span>
                    </span>
                  </td>
                  <td className="align-middle text-end time white-space-nowrap">
                    <div className="hover-hide">
                      <h6 className="text-body-highlight mb-0">
Nov 04, 12:00 PM
                      </h6>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0">
                    <div className="position-relative">
                      <div className="hover-actions">
                        <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                          <span className="fas fa-check">                          </span>
                        </button>
                        <button className="btn btn-sm btn-phoenix-secondary fs-10">
                          <span className="fas fa-trash">                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"Oculus Rift S PC-Powered VR Gaming Headset\",\"productImage\":\"/products/60x60/14.png\",\"customer\":{\"name\":\"Kristine Cadena\",\"avatar\":\"/team/40x40/avatar.webp\",\"avatarPlaceholder\":true},\"rating\":5,\"review\":\"Excellent. All my doubts were answered by the team quickly. I highly recommend it.\",\"status\":{\"title\":\"Pending\",\"badge\":\"warning\",\"icon\":\"clock\"},\"time\":\"Nov 03, 8:53 AM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle product white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block rounded-2 border border-translucent">
                      <PhoenixImage src="/assets/img/products/60x60/14.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="align-middle product white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold">
Oculus Rift S PC-Powered VR Gaming Headset
                    </PhoenixLink>
                  </td>
                  <td className="align-middle customer white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/profile" className="d-flex align-items-center text-body">
                      <div className="avatar avatar-l">
                        <PhoenixImage src="/assets/img/team/40x40/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                      </div>                      <h6 className="mb-0 ms-3 text-body">
Kristine Cadena
                      </h6>
                    </PhoenixLink>
                  </td>
                  <td className="align-middle rating white-space-nowrap fs-10">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                  </td>
                  <td className="align-middle review" style={{"minWidth":"350px"} as CSSProperties}>
                    <p className="fs-9 fw-semibold text-body-highlight mb-0">
Excellent. All my doubts were answered by the team quickly. I highly recommend it.
                    </p>
                  </td>
                  <td className="align-middle text-start ps-5 status">
                    <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                      <span className="badge-label">
Pending
                      </span>
                      <span className="ms-1" data-feather={"clock"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                      </span>
                    </span>
                  </td>
                  <td className="align-middle text-end time white-space-nowrap">
                    <div className="hover-hide">
                      <h6 className="text-body-highlight mb-0">
Nov 03, 8:53 AM
                      </h6>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0">
                    <div className="position-relative">
                      <div className="hover-actions">
                        <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                          <span className="fas fa-check">                          </span>
                        </button>
                        <button className="btn btn-sm btn-phoenix-secondary fs-10">
                          <span className="fas fa-trash">                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"Sony X85J 75 Inch Sony 4K Ultra HD LED Smart Google TV\",\"productImage\":\"/products/60x60/15.png\",\"customer\":{\"name\":\"Suzanne Martinez\",\"avatar\":\"/team/40x40/24.webp\"},\"rating\":3.5,\"review\":\"This theme is great. Clean and easy to understand. Perfect for those who don&#39;t have time to start everything from scratch. The support is simply phenomenal! Highly recommended!\",\"status\":{\"title\":\"Approved\",\"badge\":\"success\",\"icon\":\"check\"},\"time\":\"Nov 03, 10:43 AM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle product white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block rounded-2 border border-translucent">
                      <PhoenixImage src="/assets/img/products/60x60/15.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="align-middle product white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold">
Sony X85J 75 Inch Sony 4K Ultra HD LED Smart G...
                    </PhoenixLink>
                  </td>
                  <td className="align-middle customer white-space-nowrap">
                    <PhoenixLink href="/apps/e-commerce/landing/profile" className="d-flex align-items-center text-body">
                      <div className="avatar avatar-l">
                        <PhoenixImage src="/assets/img/team/40x40/24.webp" alt="" className="rounded-circle" />
                      </div>                      <h6 className="mb-0 ms-3 text-body">
Suzanne Martinez
                      </h6>
                    </PhoenixLink>
                  </td>
                  <td className="align-middle rating white-space-nowrap fs-10">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star-half-alt star-icon text-warning">                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                  </td>
                  <td className="align-middle review" style={{"minWidth":"350px"} as CSSProperties}>
                    <p className="fs-9 fw-semibold text-body-highlight mb-0">
This theme is great. Clean and easy to understand. Perfect for those who don't have time to start everything from scratch. The support...
                      <a href="#!">
See more
                      </a>
                    </p>
                  </td>
                  <td className="align-middle text-start ps-5 status">
                    <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                      <span className="badge-label">
Approved
                      </span>
                      <span className="ms-1" data-feather={"check"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                      </span>
                    </span>
                  </td>
                  <td className="align-middle text-end time white-space-nowrap">
                    <div className="hover-hide">
                      <h6 className="text-body-highlight mb-0">
Nov 03, 10:43 AM
                      </h6>
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0">
                    <div className="position-relative">
                      <div className="hover-actions">
                        <button className="btn btn-sm btn-phoenix-secondary me-1 fs-10">
                          <span className="fas fa-check">                          </span>
                        </button>
                        <button className="btn btn-sm btn-phoenix-secondary fs-10">
                          <span className="fas fa-trash">                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row align-items-center py-1">
            <div className="pagination d-none">            </div>
            <div className="col d-flex fs-9">
              <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info>              </p>
              <a href="#!" className="fw-semibold"  data-list-view={"*"}>
View all                <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                </span>
              </a>
              <a href="#!" className="fw-semibold d-none"  data-list-view={"less"}>
View Less
              </a>
            </div>
            <div className="col-auto d-flex">
              <button className="btn btn-link px-1 me-1" type="button" title="Previous" data-list-pagination={"prev"}>
                <span className="fas fa-chevron-left me-2">                </span>
Previous
              </button>
              <button className="btn btn-link px-1 ms-1" type="button" title="Next" data-list-pagination={"next"}>
Next
                <span className="fas fa-chevron-right ms-2">                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex mb-5 pt-7" id="scrollspyEcommerce">
        <span className="fa-stack me-2 ms-n1">
          <i className="fas fa-circle fa-stack-2x text-primary">          </i>
          <i className="fa-inverse fa-stack-1x text-primary-subtle fas fa-cart-plus" data-fa-transform={"shrink-4"}>          </i>
        </span>
        <div className="col">
          <h3 className="mb-0 text-primary position-relative fw-bold">
            <span className="bg-body pe-2">
E-commerce
            </span>
            <span className="border border-primary position-absolute top-50 translate-middle-y w-100 start-0 z-n1">            </span>
          </h3>
          <p className="mb-0">
Find more cards which are dedicatedly made for E-commerce.
          </p>
        </div>
      </div>
      <div>
        <h3 className="mb-3">
Cart
        </h3>
        <div id="cartTable" data-list={"{\"valueNames\":[\"products\",\"color\",\"size\",\"price\",\"quantity\",\"total\"],\"page\":10}"}>
          <div className="table-responsive scrollbar mx-n1 px-1">
            <table className="table fs-9 mb-0 border-top border-translucent">
              <thead>
                <tr>
                  <th className="sort white-space-nowrap align-middle fs-10" scope="col">                  </th>
                  <th className="sort white-space-nowrap align-middle" scope="col" style={{"minWidth":"250px"} as CSSProperties}>
PRODUCTS
                  </th>
                  <th className="sort align-middle" scope="col" style={{"width":"80px"} as CSSProperties}>
COLOR
                  </th>
                  <th className="sort align-middle" scope="col" style={{"width":"150px"} as CSSProperties}>
SIZE
                  </th>
                  <th className="sort align-middle text-end" scope="col" style={{"width":"300px"} as CSSProperties}>
PRICE
                  </th>
                  <th className="sort align-middle ps-5" scope="col" style={{"width":"200px"} as CSSProperties}>
QUANTITY
                  </th>
                  <th className="sort align-middle text-end" scope="col" style={{"width":"250px"} as CSSProperties}>
TOTAL
                  </th>
                  <th className="sort text-end align-middle pe-0" scope="col">                  </th>
                </tr>
              </thead>
              <tbody className="list" id="cart-table-body"><tr className="cart-table-row btn-reveal-trigger">
                  <td className="align-middle white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block border border-translucent rounded-2">
                      <PhoenixImage src="/assets/img/products/1.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="products align-middle">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold mb-0 line-clamp-2">
{"Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends, Carbon/Graphite, One Size (S & L Bands)"}
                    </PhoenixLink>
                  </td>
                  <td className="color align-middle white-space-nowrap fs-9 text-body">
Glossy black
                  </td>
                  <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">
XL
                  </td>
                  <td className="price align-middle text-body fs-9 fw-semibold text-end">
$199
                  </td>
                  <td className="quantity align-middle fs-8 ps-5">
                    <div className="input-group input-group-sm flex-nowrap" data-quantity>
                      <button className="btn btn-sm px-2" data-type={"minus"}>
-
                      </button>
                      <input className="form-control text-center input-spin-none bg-transparent border-0 px-0" type="number" min="1" defaultValue="2" aria-label="Amount (to the nearest dollar)" />
                      <button className="btn btn-sm px-2" data-type={"plus"}>
+
                      </button>
                    </div>
                  </td>
                  <td className="total align-middle fw-bold text-body-highlight text-end">
$398
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-3">
                    <button className="btn btn-sm text-body-tertiary text-opacity-85 text-body-tertiary-hover me-2">
                      <span className="fas fa-trash">                      </span>
                    </button>
                  </td>
                </tr>
                <tr className="cart-table-row btn-reveal-trigger"><td className="align-middle white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block border border-translucent rounded-2">
                      <PhoenixImage src="/assets/img/products/2.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="products align-middle">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold mb-0 line-clamp-2">
iPhone 13 pro max-Pacific Blue-128GB storage
                    </PhoenixLink>
                  </td>
                  <td className="color align-middle white-space-nowrap fs-9 text-body">
Glossy black
                  </td>
                  <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">
XL
                  </td>
                  <td className="price align-middle text-body fs-9 fw-semibold text-end">
$150
                  </td>
                  <td className="quantity align-middle fs-8 ps-5">
                    <div className="input-group input-group-sm flex-nowrap" data-quantity>
                      <button className="btn btn-sm px-2" data-type={"minus"}>
-
                      </button>
                      <input className="form-control text-center input-spin-none bg-transparent border-0 px-0" type="number" min="1" defaultValue="2" aria-label="Amount (to the nearest dollar)" />
                      <button className="btn btn-sm px-2" data-type={"plus"}>
+
                      </button>
                    </div>
                  </td>
                  <td className="total align-middle fw-bold text-body-highlight text-end">
$300
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-3">
                    <button className="btn btn-sm text-body-tertiary text-opacity-85 text-body-tertiary-hover me-2">
                      <span className="fas fa-trash">                      </span>
                    </button>
                  </td>
                </tr>
                <tr className="cart-table-row btn-reveal-trigger"><td className="align-middle white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block border border-translucent rounded-2">
                      <PhoenixImage src="/assets/img/products/3.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="products align-middle">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold mb-0 line-clamp-2">
Apple MacBook Pro 13 inch-M1-8/256GB-space
                    </PhoenixLink>
                  </td>
                  <td className="color align-middle white-space-nowrap fs-9 text-body">
Glossy Golden
                  </td>
                  <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">
34mm
                  </td>
                  <td className="price align-middle text-body fs-9 fw-semibold text-end">
$65
                  </td>
                  <td className="quantity align-middle fs-8 ps-5">
                    <div className="input-group input-group-sm flex-nowrap" data-quantity>
                      <button className="btn btn-sm px-2" data-type={"minus"}>
-
                      </button>
                      <input className="form-control text-center input-spin-none bg-transparent border-0 px-0" type="number" min="1" defaultValue="2" aria-label="Amount (to the nearest dollar)" />
                      <button className="btn btn-sm px-2" data-type={"plus"}>
+
                      </button>
                    </div>
                  </td>
                  <td className="total align-middle fw-bold text-body-highlight text-end">
$130
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-3">
                    <button className="btn btn-sm text-body-tertiary text-opacity-85 text-body-tertiary-hover me-2">
                      <span className="fas fa-trash">                      </span>
                    </button>
                  </td>
                </tr>
                <tr className="cart-table-row btn-reveal-trigger"><td className="text-body-emphasis fw-semibold ps-0 fs-8" colSpan={6}>
Items subtotal :
                  </td>
                  <td className="text-body-emphasis fw-bold text-end fs-8">
$691
                  </td>
                  <td>                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="my-6">
        <div className="row g-5">
          <div className="col-xl-8">
            <h3 className="mb-5">
Payment Method
            </h3>
            <div className="row g-4 mb-7">
              <div className="col-12">
                <div className="row gx-lg-11">
                  <div className="col-md-auto">
                    <div className="form-check">
                      <input className="form-check-input" id="creditCard" type="radio" name="paymentMethod" defaultChecked />
                      <label className="form-check-label fs-8 text-body text-nowrap d-flex gap-2" htmlFor="creditCard">
Credit card
                        <PhoenixImage src="/assets/img/logos/visa.png" alt="" className="h-100" />
                        <PhoenixImage src="/assets/img/logos/discover.png" alt="" className="h-100" />
                        <PhoenixImage src="/assets/img/logos/mastercard.png" alt="" className="h-100" />
                        <PhoenixImage src="/assets/img/logos/american_express.png" alt="" className="h-100" />
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-md-auto">
                    <div className="form-check">
                      <input className="form-check-input" id="paypal" type="radio" name="paymentMethod" />
                      <label className="form-check-label fs-8 text-body" htmlFor="paypal">
Paypal 
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-md-auto">
                    <div className="form-check">
                      <input className="form-check-input" id="coupon" type="radio" name="paymentMethod" />
                      <label className="form-check-label fs-8 text-body" htmlFor="coupon">
Coupon 
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label fs-8 text-body-highlight ps-0 text-transform-none" htmlFor="selectCard">
Select card
                </label>
                <select className="form-select text-body-emphasis" id="selectCard">
                  <option>
Select a card
                  </option>
                  <option value="visa">
Visa
                  </option>
                  <option value="discover">
Discover
                  </option>
                  <option value="mastercard">
Mastercard
                  </option>
                  <option value="american-express">
American Express
                  </option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label fs-8 text-body-highlight ps-0 text-transform-none" htmlFor="inputCardNumber">
Card number
                </label>
                <input className="form-control" id="inputCardNumber" type="number" placeholder="Enter card number" aria-label="Card number" />
              </div>
              <div className="col-12">
                <label className="form-label fs-8 text-body-highlight ps-0 text-transform-none" htmlFor="inputName">
Full name
                </label>
                <input className="form-control" id="inputName" type="text" placeholder="Ansolo Lazinatov" aria-label="Full name" />
              </div>
              <div className="col-md-6">
                <label className="form-label fs-8 text-body-highlight ps-0 text-transform-none">
Expires on
                </label>
                <div className="d-flex">
                  <select className="form-select text-body-emphasis me-3">
                    <option>
Month
                    </option>
                    <option>
January
                    </option>
                    <option>
February
                    </option>
                    <option>
March
                    </option>
                  </select>
                  <select className="form-select text-body-emphasis">
                    <option>
Year
                    </option>
                    <option value="1990">
1990
                    </option>
                    <option value="1991">
1991
                    </option>
                    <option value="1992">
1992
                    </option>
                    <option value="1993">
1993
                    </option>
                    <option value="1994">
1994
                    </option>
                    <option value="1995">
1995
                    </option>
                    <option value="1996">
1996
                    </option>
                    <option value="1997">
1997
                    </option>
                    <option value="1998">
1998
                    </option>
                    <option value="1999">
1999
                    </option>
                    <option value="2000">
2000
                    </option>
                    <option value="2001">
2001
                    </option>
                    <option value="2002">
2002
                    </option>
                    <option value="2003">
2003
                    </option>
                    <option value="2004">
2004
                    </option>
                    <option value="2005">
2005
                    </option>
                    <option value="2006">
2006
                    </option>
                    <option value="2007">
2007
                    </option>
                    <option value="2008">
2008
                    </option>
                    <option value="2009">
2009
                    </option>
                    <option value="2010">
2010
                    </option>
                    <option value="2011">
2011
                    </option>
                    <option value="2012">
2012
                    </option>
                    <option value="2013">
2013
                    </option>
                    <option value="2014">
2014
                    </option>
                    <option value="2015">
2015
                    </option>
                    <option value="2016">
2016
                    </option>
                    <option value="2017">
2017
                    </option>
                    <option value="2018">
2018
                    </option>
                    <option value="2019">
2019
                    </option>
                    <option value="2020">
2020
                    </option>
                    <option value="2021">
2021
                    </option>
                    <option value="2022">
2022
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label fs-8 text-body-highlight ps-0 text-transform-none" htmlFor="inputCardCVC">
CVC
                </label>
                <input className="form-control" id="inputCardCVC" type="number" placeholder="Enter a valid CVC" aria-label="CVC" />
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" id="gridCheck" type="checkbox" />
                  <label className="form-check-label text-body-emphasis fs-8" htmlFor="gridCheck">
Save Card Details
                  </label>
                </div>
              </div>
            </div>
            <div className="row g-2 mb-5 mb-lg-0">
              <div className="col-md-8 col-lg-9 d-grid">
                <button className="btn btn-primary" type="submit">
Pay $695.20
                </button>
              </div>
              <div className="col-md-4 col-lg-3 d-grid">
                <button className="btn btn-phoenix-secondary text-nowrap" type="submit">
Save Order and Exit
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-between-center mb-3">
                  <h3 className="card-title mb-0">
Summary
                  </h3>
                  <a href="#!" className="btn btn-link p-0">
Edit cart 
                  </a>
                </div>
                <select className="form-select mb-3" aria-label="delivery type">
                  <option value="cod">
Cash on Delivery
                  </option>
                  <option value="card">
Card
                  </option>
                  <option value="paypal">
Paypal
                  </option>
                </select>
                <div>
                  <div className="d-flex justify-content-between">
                    <p className="text-body fw-semibold">
Items subtotal :
                    </p>
                    <p className="text-body-emphasis fw-semibold">
$691
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="text-body fw-semibold">
Discount :
                    </p>
                    <p className="text-danger fw-semibold">
-$59
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="text-body fw-semibold">
Tax :
                    </p>
                    <p className="text-body-emphasis fw-semibold">
$126.20
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="text-body fw-semibold">
Subtotal :
                    </p>
                    <p className="text-body-emphasis fw-semibold">
$665
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="text-body fw-semibold">
Shipping Cost :
                    </p>
                    <p className="text-body-emphasis fw-semibold">
$30
                    </p>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input className="form-control" type="text" placeholder="Voucher" />
                  <button className="btn btn-phoenix-primary px-5">
Apply
                  </button>
                </div>
                <div className="d-flex justify-content-between border-y border-dashed py-3 mb-4">
                  <h4 className="mb-0">
Total :
                  </h4>
                  <h4 className="mb-">
$695.20
                  </h4>
                </div>
                <button className="btn btn-primary w-100">
Proceed to check out
                  <span className="fas fa-chevron-right ms-1 fs-10">                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-6">
        <div className="col-xl-6">
          <h3 className="mb-5">
Delivery Type
          </h3>
          <div className="row gy-6">
            <div className="col-12 col-md-6">
              <div className="d-flex flex-wrap align-items-center mb-3">
                <div className="form-check mb-0">
                  <input className="form-check-input" type="radio" name="shippingRadio" id="free_shipping" />
                  <label className="form-check-label fs-8 text-body" htmlFor="free_shipping">
Free Shipping
                  </label>
                </div>
                <span className="d-inline-block text-body-emphasis fw-bold ms-2">
$0.00
                </span>
              </div>
              <div className="ps-4">
                <h6 className="text-body-tertiary mb-2">
Est. delivery: Jun 21 – Jul 20 
                </h6>
                <h6 className="text-info lh-base mb-0">
Get Free Shipped products in Time!
                </h6>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex flex-wrap align-items-center mb-3">
                <div className="form-check mb-0">
                  <input className="form-check-input" type="radio" name="shippingRadio" id="two_days_shipping" />
                  <label className="form-check-label fs-8 text-body" htmlFor="two_days_shipping">
Two days Shipping
                  </label>
                </div>
                <span className="d-inline-block text-body-emphasis fw-bold ms-2">
$20.00
                </span>
              </div>
              <div className="ps-4">
                <h6 className="text-body-tertiary mb-2">
Est. delivery: Jun 21 – Jul 20 
                </h6>
                <h6 className="text-info lh-base mb-0">
Everything faster with minimum shipping fee.
                </h6>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex flex-wrap align-items-center mb-3">
                <div className="form-check mb-0">
                  <input className="form-check-input" type="radio" name="shippingRadio" id="standard_shipping" />
                  <label className="form-check-label fs-8 text-body" htmlFor="standard_shipping">
Standard Shipping
                  </label>
                </div>
                <span className="d-inline-block text-body-emphasis fw-bold ms-2">
$10.00
                </span>
              </div>
              <div className="ps-4">
                <h6 className="text-body-tertiary mb-2">
Est. delivery: Jun 21 – Jul 20 
                </h6>
                <h6 className="text-info lh-base mb-0">
Get timely delivery with economy shipping.
                </h6>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex flex-wrap align-items-center mb-3">
                <div className="form-check mb-0">
                  <input className="form-check-input" type="radio" name="shippingRadio" defaultChecked id="one_day_shipping" />
                  <label className="form-check-label fs-8 text-body" htmlFor="one_day_shipping">
One day Shipping
                  </label>
                </div>
                <span className="d-inline-block text-body-emphasis fw-bold ms-2">
$30.00
                </span>
                <span className="badge badge-phoenix badge-phoenix-warning ms-2 ms-lg-4 ms-xl-2">
Popular
                </span>
              </div>
              <div className="ps-4">
                <h6 className="text-body-tertiary mb-2">
Est. delivery: Jun 21 – Jul 20 
                </h6>
                <h6 className="text-info lh-base mb-0">
Highest priority shipping at the lowest cost.
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <h3>
Billing Details
          </h3>
          <div className="form-check">
            <input className="form-check-input" id="sameAsShipping" type="checkbox" defaultChecked />
            <label className="form-check-label fs-8 fw-normal" htmlFor="sameAsShipping">
 Same as shipping address 
            </label>
          </div>
          <table className="table table-borderless mt-4">
            <tbody>
              <tr>
                <td className="py-2 ps-0">
                  <div className="d-flex">
                    <span className="fs-3 me-2" data-feather={"user"} style={{"height":"16px","width":"16px"} as CSSProperties}>                    </span>
                    <h5 className="lh-sm me-4">
Name
                    </h5>
                  </div>
                </td>
                <td className="py-2 fw-bold lh-sm">
:
                </td>
                <td className="py-2 px-3">
                  <h5 className="lh-sm fw-normal text-body-secondary">
Shatinon Mekalan
                  </h5>
                </td>
              </tr>
              <tr>
                <td className="py-2 ps-0">
                  <div className="d-flex">
                    <span className="fs-3 me-2" data-feather={"home"} style={{"height":"16px","width":"16px"} as CSSProperties}>                    </span>
                    <h5 className="lh-sm me-4">
Address
                    </h5>
                  </div>
                </td>
                <td className="py-2 fw-bold lh-sm">
:
                </td>
                <td className="py-2 px-3">
                  <h5 className="lh-lg fw-normal text-body-secondary">
Apt: 6/B, 192 Edsel Road, Van Nuys 
                    <br />
 California, USA 96580
                  </h5>
                </td>
              </tr>
              <tr>
                <td className="py-2 ps-0">
                  <div className="d-flex">
                    <span className="fs-3 me-2" data-feather={"phone"} style={{"height":"16px","width":"16px"} as CSSProperties}>                    </span>
                    <h5 className="lh-sm me-4">
Phone
                    </h5>
                  </div>
                </td>
                <td className="py-2 fw-bold lh-sm">
:
                </td>
                <td className="py-2 px-3">
                  <h5 className="lh-sm fw-normal text-body-secondary">
818-414-4092
                  </h5>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="d-flex mb-5 pt-7" id="scrollspyUsers">
        <span className="fa-stack me-2 ms-n1">
          <i className="fas fa-circle fa-stack-2x text-primary">          </i>
          <i className="fa-inverse fa-stack-1x text-primary-subtle fas fa-user-friends" data-fa-transform={"shrink-4"}>          </i>
        </span>
        <div className="col">
          <h3 className="mb-0 text-primary position-relative fw-bold">
            <span className="bg-body pe-2">
{"Users & Feed"}
            </span>
            <span className="border border-primary position-absolute top-50 translate-middle-y w-100 start-0 z-n1">            </span>
          </h3>
          <p className="mb-0">
User engagement and personalized content presentation.
          </p>
        </div>
      </div>
      <div className="card mb-5">
        <div className="card-header d-flex justify-content-center align-items-end position-relative mb-7 mb-xxl-0" style={{"minHeight":"214px"} as CSSProperties}>
          <div className="hover-actions-trigger position-static">
            <div className="bg-holder rounded-top" style={{"backgroundImage":"url(assets/img/generic/cover-photo.png)"} as CSSProperties}>            </div>
            <input className="d-none" id="upload-cover-image" type="file" />
            <label className="cover-image-file-input" htmlFor="upload-cover-image">            </label>
            <div className="hover-actions end-0 bottom-0 pe-1 pb-2 text-white">
              <span className="fa-solid fa-camera me-2 overlay-icon">              </span>
            </div>
          </div>
          <input className="d-none" id="upload-porfile-picture" type="file" />
          <div className="hoverbox feed-profile" style={{"width":"150px","height":"150px"} as CSSProperties}>
            <div className="hoverbox-content rounded-circle d-flex flex-center z-1" style={{"--phoenix-bg-opacity":".56"} as CSSProperties}>
              <span className="fa-solid fa-camera fs-3 text-secondary-light">              </span>
            </div>
            <div className="position-relative bg-body-quaternary rounded-circle cursor-pointer d-flex flex-center mb-xxl-7">
              <div className="avatar avatar-5xl">
                <PhoenixImage src="/assets/img/team/9.webp" alt="" className="rounded-circle rounded-circle img-thumbnail shadow-sm border-0" />
              </div>
              <label className="w-100 h-100 position-absolute z-1" htmlFor="upload-porfile-picture">              </label>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row justify-content-xl-between">
            <div className="col-auto">
              <div className="d-flex flex-wrap mb-3 align-items-center">
                <h2 className="me-2">
Erza Bridgest
                </h2>
                <span className="fw-semibold fs-7 text-body-emphasis">
u/hansolo
                </span>
              </div>
              <div className="mb-5">
                <div className="d-md-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <span className="fa-solid fa-user-group fs-9 text-body-tertiary me-2 me-lg-1 me-xl-2">                    </span>
                    <a href="#!" className="text-body-emphasis">
                      <span className="fs-7 fw-bold text-body-tertiary text-opacity-85 text-body-emphasis-hover">
1297 
                        <span className="fw-semibold ms-1 me-4">
Followers
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="fa-solid fa-user-check fs-9 text-body-tertiary me-2 me-lg-1 me-xl-2">                    </span>
                    <a href="#!" className="text-body-emphasis">
                      <span className="fs-7 fw-bold text-body-tertiary text-opacity-85 text-body-emphasis-hover">
3971 
                        <span className="fw-semibold ms-1 me-4">
Following
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="fa-solid fa-location-dot fs-9 text-body-tertiary me-2 me-lg-1 me-xl-2">                    </span>
                    <a href="#!" className="text-body-emphasis">
                      <span className="fs-7 fw-semibold text-body-tertiary text-opacity-85 text-body-emphasis-hover">
Vancouver, Lothal
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <p className="fs-6 text-body-secondary">
“Whenever you find yourself on the side of the majority, it is time to pause and reflect.”
              </p>
            </div>
            <div className="col-auto">
              <div className="row g-2">
                <div className="col-auto order-xxl-2">
                  <button className="btn btn-primary lh-1">
                    <span className="fa-solid fa-user-plus me-2">                    </span>
Follow Request
                  </button>
                </div>
                <div className="col-auto order-xxl-1">
                  <button className="btn btn-phoenix-primary lh-1">
                    <span className="fa-solid fa-message me-2">                    </span>
Send Message
                  </button>
                </div>
                <div className="col-auto">
                  <div className="position-static">
                    <button className="btn btn-phoenix-secondary lh-1" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                      <span className="fa-solid fa-chevron-down me-2">                      </span>
 More
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a href="#!" className="dropdown-item d-xl-none">
                        <span className="fa-solid fa-user-group text-body-secondary me-2">                        </span>                        <span>
Followers
                        </span>
                      </a>
                      <a href="#!" className="dropdown-item d-xl-none">
                        <span className="fa-solid fa-users text-body-secondary me-2">                        </span>                        <span>
Communities
                        </span>
                      </a>
                      <a href="#!" className="dropdown-item d-xl-none">
                        <span className="fa-solid fa-photo-film text-body-secondary me-2">                        </span>                        <span>
Media Files
                        </span>
                      </a>
                      <a href="#!" className="dropdown-item d-xl-none">
                        <span className="fa-solid fa-calendar-days fs-8 text-body-secondary me-2">                        </span>                        <span>
 Events
                        </span>
                      </a>
                      <a href="#!" className="dropdown-item d-xl-none">
                        <span className="fa-solid fa-dice text-body-secondary me-2">                        </span>                        <span>
Games
                        </span>
                      </a>
                      <a href="#!" className="dropdown-item d-xl-none">
                        <span className="fa-solid fa-user-gear text-body-secondary me-2">                        </span>                        <span>
Settings
                        </span>
                      </a>
                      <a href="#!" className="dropdown-item">
                        <span className="fa-solid fa-bell-slash text-body-secondary me-2">                        </span>                        <span>
Mute Conversation
                        </span>
                      </a>
                      <a href="#!" className="dropdown-item">
                        <span className="fa-solid fa-gear text-body-secondary me-2">                        </span>                        <span>
Manage Settings
                        </span>
                      </a>
                      <a href="#!" className="dropdown-item">
                        <span className="fa-solid fa-hand-holding-heart text-body-secondary me-2">                        </span>                        <span>
Get help
                        </span>
                      </a>
                      <a href="#!" className="dropdown-item">
                        <span className="fa-solid fa-flag text-body-secondary me-2">                        </span>                        <span>
Report Account
                        </span>
                      </a>
                      <a href="#!" className="dropdown-item">
                        <span className="fa-solid fa-ban text-body-secondary me-2">                        </span>                        <span>
Block Account
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row gx-5">
        <div className="col-xxl-8">
          <div className="mb-5">
            <div className="card mb-4">
              <div className="card-body p-3 p-sm-4">
                <div className="border-bottom border-translucent mb-3">
                  <div className="d-flex align-items-center mb-3">
                    <PhoenixLink href="/apps/social/profile">
                      <div className="avatar avatar-xl  me-2">
                        <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle " />
                      </div>
                    </PhoenixLink>
                    <div className="flex-1">
                      <PhoenixLink href="/apps/social/profile" className="fw-bold mb-0 text-body-emphasis">
Zingko Kudobum
                      </PhoenixLink>
                      <p className="fs-10 mb-0 text-body-tertiary text-opacity-85 fw-semibold">
35 mins ago
                        <span className="fa-solid fa-circle text-body-quaternary text-opacity-50" data-fa-transform={"shrink-10 down-2"}>                        </span>
Consett, UK
                        <span className="fa-solid fa-circle text-body-quaternary text-opacity-50" data-fa-transform={"shrink-10 down-2"}>                        </span>
                        <span className="fa-solid fa-earth-americas text-body">                        </span>
                      </p>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none d-flex btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                  <p className="text-body-secondary">
Some paintings I love
                  </p>
                  <div className="row g-1 mb-5">
                    <div className="col-3">
                      <PhoenixLink href="/assets/img/gallery/17.png" data-gallery={"gallery-posts-0"}>
                        <PhoenixImage src="/assets/img/gallery/17.png" alt="..." className="rounded h-100 w-100" />
                      </PhoenixLink>
                    </div>
                    <div className="col-3">
                      <PhoenixLink href="/assets/img/gallery/18.png" data-gallery={"gallery-posts-0"}>
                        <PhoenixImage src="/assets/img/gallery/18.png" alt="..." className="rounded h-100 w-100" />
                      </PhoenixLink>
                    </div>
                    <div className="col-6">
                      <PhoenixLink href="/assets/img/gallery/19.png" data-gallery={"gallery-posts-0"}>
                        <PhoenixImage src="/assets/img/gallery/19.png" alt="..." className="rounded h-100 w-100" />
                      </PhoenixLink>
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <button className="btn btn-link p-0 me-3 fs-10 fw-bolder" type="button">
                    <span className="fa-solid fa-heart me-1">                    </span>
345 Likes 
                  </button>
                  <button className="btn btn-link text-body p-0 fs-10 me-3 fw-bolder" type="button">
                    <span className="fa-solid fa-comment me-1">                    </span>
45 Comments 
                  </button>
                  <button className="btn btn-link text-body p-0 fs-10 me-2 fw-bolder" type="button">
                    <span className="fa-solid fa-share me-1">                    </span>
56 Shares 
                  </button>
                </div>
              </div>
              <div className="bg-body-highlight border-top border-translucent p-3 p-sm-4">
                <div className="d-flex align-items-start">
                  <PhoenixLink href="/apps/social/profile">
                    <div className="avatar avatar-m  me-2">
                      <PhoenixImage src="/assets/img/team/23.webp" alt="" className="rounded-circle " />
                    </div>
                  </PhoenixLink>
                  <div className="flex-1">
                    <div className="d-flex align-items-center">
                      <PhoenixLink href="/apps/social/profile" className="fw-bold mb-0 text-body-emphasis">
Mamur Fechetti
                      </PhoenixLink>
                      <span className="text-body-tertiary text-opacity-85 fw-semibold fs-10 ms-2">
35 mins ago
                      </span>
                    </div>
                    <p className="mb-0">
How long did it take to create this? It appears that you quickly produced the second one.
                    </p>
                    <button className="btn btn-link p-0 text-body fw-bolder mb-2" type="button">
                      <span className="fa-solid fa-reply fs-10 me-1">                      </span>
                      <span className="fw-bold fs-10">
Reply
                      </span>
                    </button>
                    <div className="d-flex align-items-start mb-3">
                      <PhoenixLink href="/apps/social/profile">
                        <div className="avatar avatar-m  me-2">
                          <PhoenixImage src="/assets/img/team/62.webp" alt="" className="rounded-circle " />
                        </div>
                      </PhoenixLink>
                      <div className="flex-1">
                        <div className="d-flex align-items-center">
                          <PhoenixLink href="/apps/social/profile" className="fw-bold mb-0 text-body-emphasis">
Zingko Kudobum
                          </PhoenixLink>
                          <span className="text-body-tertiary text-opacity-85 fw-semibold fs-10 ms-2">
5 mins ago
                          </span>
                        </div>
                        <p className="mb-0">
I am so clever that sometimes I don't understand a single word of what I am saying.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <PhoenixLink href="/apps/social/profile">
                    <div className="avatar avatar-m  me-2">
                      <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle " />
                    </div>
                  </PhoenixLink>
                  <div className="flex-1">
                    <input className="form-control" type="text" placeholder="Add comment" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4">
          <div className="row g-0 py-3 border-bottom border-dashed align-items-end justify-content-between">
            <div className="col-auto">
              <h3 className="flex-1 mb-0 text-nowrap me-3">
Upcoming events
              </h3>
            </div>
            <div className="col-auto">
              <a href="#!" className="fw-bold fs-9">
See more
              </a>
            </div>
          </div>
          <div className="py-3 border-bottom border-translucent border-dashed">
            <div className="d-flex flex-between-center">
              <p className="text-warning fs-10 mb-0 fw-bold mb-1">
MON, FEB 21- MARCH 23
              </p>
              <div className="btn-reveal-trigger">
                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none d-flex btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                  <span className="fas fa-ellipsis-h">                  </span>
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
            <a href="#!" className="text-primary-hover text-body-highlight fw-bold mb-2 line-clamp-1 me-5 lh-base">
Master Class on FILM Studies THESIS on Makers
            </a>
            <p className="text-body-secondary fs-9 mb-2">
Organized by 
              <br />
              <a href="#!" className="fw-bold text-primary">
IAFM- International Academy of Film and Media
              </a>
            </p>
            <p className="fs-10 text-body-tertiary text-opacity-85">
64 people going
            </p>
            <p className="fs-9 text-body-tertiary fw-bold mb-1">
              <span className="fa-solid fa-clock text-body-secondary me-1">              </span>
12.30PM - 10PM
            </p>
            <p className="fs-9 text-body-tertiary fw-bold mb-0">
              <span className="fa-solid fa-map-marker-alt text-body-secondary me-1">              </span>
Tavern on the Greend, New York
            </p>
          </div>
          <div className="py-3 border-bottom border-translucent border-dashed">
            <div className="d-flex flex-between-center">
              <p className="text-warning fs-10 mb-0 fw-bold mb-1">
MON, FEB 21- MARCH 23
              </p>
              <div className="btn-reveal-trigger">
                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none d-flex btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                  <span className="fas fa-ellipsis-h">                  </span>
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
            <a href="#!" className="text-primary-hover text-body-highlight fw-bold mb-2 line-clamp-1 me-5 lh-base">
Master Class on FILM Studies 'ANALYSIS of Cinema'
            </a>
            <p className="text-body-secondary fs-9 mb-2">
Organized by 
              <br />
              <a href="#!" className="fw-bold text-primary">
IAFM- International Academy of Film and Media
              </a>
            </p>
            <p className="fs-10 text-body-tertiary text-opacity-85">
64 people going
            </p>
            <p className="fs-9 text-body-tertiary fw-bold mb-1">
              <span className="fa-solid fa-clock text-body-secondary me-1">              </span>
12.30PM - 10PM
            </p>
            <p className="fs-9 text-body-tertiary fw-bold mb-0">
              <span className="fa-solid fa-map-marker-alt text-body-secondary me-1">              </span>
Tavern on the Greend, New York
            </p>
          </div>
          <div className="py-3 border-bottom border-translucent border-dashed">
            <div className="d-flex flex-between-center">
              <p className="text-warning fs-10 mb-0 fw-bold mb-1">
MON, FEB 21- MARCH 23
              </p>
              <div className="btn-reveal-trigger">
                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none d-flex btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                  <span className="fas fa-ellipsis-h">                  </span>
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
            <a href="#!" className="text-primary-hover text-body-highlight fw-bold mb-2 line-clamp-1 me-5 lh-base">
Witnessing History in Making Photographs
            </a>
            <p className="text-body-secondary fs-9 mb-2">
Organized by 
              <br />
              <a href="#!" className="fw-bold text-primary">
IAFM- International Academy of Film and Media
              </a>
            </p>
            <p className="fs-10 text-body-tertiary text-opacity-85">
64 people going
            </p>
            <p className="fs-9 text-body-tertiary fw-bold mb-1">
              <span className="fa-solid fa-clock text-body-secondary me-1">              </span>
12.30PM - 10PM
            </p>
            <p className="fs-9 text-body-tertiary fw-bold mb-0">
              <span className="fa-solid fa-map-marker-alt text-body-secondary me-1">              </span>
Tavern on the Greend, New York
            </p>
          </div>
        </div>
      </div>
      <div className="row g-5">
        <div className="col-xxl-8">
          <div className="card mb-0">
            <div className="card-body">
              <h1 className="lh-sm fs-6 fs-xxl-4 mb-2">
Brandmyth presents- Shironamhin 25 years celebration with symphony orchestra
              </h1>
              <p className="fs-8 mb-4 text-body-tertiary">
Tavern on the Greend, New York
              </p>
              <div className="card mb-5 mb-xxl-7">
                <div className="card-body">
                  <div className="row gy-5">
                    <div className="col-md-6 d-flex justify-content-between">
                      <div>
                        <div className="mb-3">
                          <div className="d-flex align-items-center">
                            <div className="px-2 py-1 bg-info-subtle rounded">
                              <span className="text-info" data-feather={"map-pin"}>                              </span>
                            </div>
                            <h5 className="ms-2 text-body-emphasis mb-0">
Location
                            </h5>
                          </div>
                        </div>
                        <p className="lh-sm mb-0 text-body-tertiary">
36/4A, James Tiberius Auditorium,
                          <br />
Vancouver, British Columbia, Canada 
                        </p>
                      </div>
                      <div className="my-4 mx-3 border-start border-translucent d-none d-md-block">                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <div className="d-flex align-items-center">
                          <div className="px-2 py-1 bg-primary-subtle rounded">
                            <span className="text-primary" data-feather={"clock"}>                            </span>
                          </div>
                          <h5 className="ms-2 mb-0">
{"Date & Time"}
                          </h5>
                        </div>
                      </div>
                      <p className="lh-sm mb-0 text-body-tertiary">
28th June - 2nd July 2022,
                        <br />
10 am - 4 pm Eastern Daylight Time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-2">
                <div className="col-12 col-md-auto flex-md-grow-1">
                  <button className="btn btn-primary w-100" type="button">
Get Tickets
                  </button>
                </div>
                <div className="col-12 col-sm-auto flex-sm-grow-1 flex-md-grow-0">
                  <button className="btn btn-phoenix-primary w-100" type="button">
                    <span className="fa-regular fa-calendar-plus me-2">                    </span>
Add to Calendar 
                  </button>
                </div>
                <div className="col-6 col-sm-auto">
                  <button className="btn btn-phoenix-primary w-100" type="button">
                    <span className="fa-solid fa-heart me-2">                    </span>
3677
                  </button>
                </div>
                <div className="col-6 col-sm-auto">
                  <button className="btn btn-phoenix-primary w-100" type="button">
                    <span className="fa-solid fa-share-nodes me-2">                    </span>
4467
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4">
          <div className="card h-100">
            <div className="card-header hover-actions-trigger position-relative mb-7" style={{"minHeight":"130px"} as CSSProperties}>
              <div className="bg-holder rounded-top" style={{"backgroundImage":"linear-gradient(0deg, #000000 -3%, rgba(0, 0, 0, 0) 83%), url(assets/img/generic/59.png)"} as CSSProperties}>
                <input className="d-none" id="upload-feed-cover-image" type="file" />
                <label className="cover-image-file-input" htmlFor="upload-feed-cover-image">                </label>
                <div className="hover-actions end-0 bottom-0 pe-1 pb-2 text-white dark__text-gray-1100">
                  <span className="fa-solid fa-camera me-2 overlay-icon">                  </span>
                </div>
              </div>
              <input className="d-none" id="upload-feed-porfile-picture" type="file" />
              <label className="avatar avatar-4xl status-online feed-avatar-profile cursor-pointer" htmlFor="upload-feed-porfile-picture">
                <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle img-thumbnail shadow-sm border-0" width={200} />
              </label>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex flex-wrap mb-3 align-items-center">
                    <h3 className="me-2">
Ansolo Lazinatov
                    </h3>
                    <span className="fw-normal fs-8">
u/hansolo
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-center flex-wrap">
                      <div className="d-flex me-4 mb-2">
                        <span className="fa-solid fa-user-group fs-10 me-2 me-lg-1 me-xl-2">                        </span>
                        <h6 className="d-inline-block mb-0">
1297 
                          <span className="fw-semibold">
Followers
                          </span>
                        </h6>
                      </div>
                      <div className="d-flex mb-2">
                        <span className="fa-solid fa-user-check fs-10 me-2 me-lg-1 me-xl-2">                        </span>
                        <h6 className="d-block d-xl-inline-block mb-0">
 3971 
                          <span className="fw-semibold">
Following
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <p className="fw-semibold mb-0">
About me
                    <a href="#!">
                      <span className="fa-solid fa-pencil fs-10 text-body-quaternary ms-3">                      </span>
                    </a>
                  </p>
                  <p className="text-body-tertiary mb-0">
“Le capitalisme exploite. Et le capitalisme exploite les gens de couleur. Comme il exploite les hommes. Ou comme il exploite les femmes.” 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="row g-5">
          <div className="col-xl-4">
            <div className="d-flex flex-between-center pb-3 border-bottom border-translucent border-dashed">
              <h3 className="mb-0">
Messages
                <span className="text-body-tertiary ms-2 fw-normal">
(97)
                </span>
              </h3>
              <div className="btn-reveal-trigger">
                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none d-flex btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                  <span className="fas fa-ellipsis-h">                  </span>
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
            <div className="d-flex py-3 align-items-center border-bottom border-translucent border-dashed">
              <div className="me-2">
                <div className="avatar avatar-m status-online ">
                  <PhoenixImage src="/assets/img/team/35.webp" alt="" className="rounded-circle " />
                </div>
              </div>
              <PhoenixLink href="/apps/chat" className="text-decoration-none flex-1">
                <h5>
Stanly Drinkwater
                </h5>                <p className="text-body-tertiary fw-semibold fs-9 mb-0 lh-sm line-clamp-1">
When you gonna pay me back, don’t leave me hanging
                </p>
              </PhoenixLink>
            </div>
            <div className="d-flex py-3 align-items-center border-bottom border-translucent border-dashed">
              <div className="me-2">
                <div className="avatar avatar-m status-online ">
                  <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                </div>
              </div>
              <PhoenixLink href="/apps/chat" className="text-decoration-none flex-1">
                <h5>
Milind Mikuja
                </h5>                <p className="text-body-tertiary fw-semibold fs-9 mb-0 lh-sm line-clamp-1">
But the mare fact that she said that makes
                </p>
              </PhoenixLink>
            </div>
            <div className="d-flex py-3 align-items-center border-bottom border-translucent border-dashed">
              <div className="me-2">
                <div className="avatar avatar-m status-online ">
                  <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                </div>
              </div>
              <PhoenixLink href="/apps/chat" className="text-decoration-none flex-1">
                <h5>
Josef Stravinsky
                </h5>                <p className="text-body-tertiary fw-semibold fs-9 mb-0 lh-sm line-clamp-1">
Oi Cult.
                </p>
              </PhoenixLink>
            </div>
            <div className="d-flex py-3 align-items-center border-bottom border-translucent border-dashed">
              <div className="me-2">
                <div className="avatar avatar-m status-online ">
                  <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle " />
                </div>
              </div>
              <PhoenixLink href="/apps/chat" className="text-decoration-none flex-1">
                <h5>
Martina scorcese
                </h5>                <p className="text-body-tertiary fw-semibold fs-9 mb-0 lh-sm line-clamp-1">
Thanks for that. Sincerely.
                </p>
              </PhoenixLink>
            </div>
            <div className="d-flex py-3 align-items-center border-bottom border-translucent border-dashed">
              <div className="me-2">
                <div className="avatar avatar-m status-online ">
                  <PhoenixImage src="/assets/img/team/57.webp" alt="" className="rounded-circle " />
                </div>
              </div>
              <PhoenixLink href="/apps/chat" className="text-decoration-none flex-1">
                <h5>
Meekona Zikon
                </h5>                <p className="text-body-tertiary fw-semibold fs-9 mb-0 lh-sm line-clamp-1">
I am Outside, Come here, Lets smoke...
                </p>
              </PhoenixLink>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="d-flex pb-4 align-items-end">
              <h3 className="flex-1 mb-0">
Photos
              </h3>
              <a href="#!" className="fw-bold fs-9 me-4">
Albums
              </a>
              <a href="#!" className="fw-bold fs-9">
See all
              </a>
            </div>
            <div className="row g-3">
              <div className="col-4">
                <PhoenixLink href="/assets/img/gallery/11.png" data-gallery={"gallery-photos"}>
                  <PhoenixImage src="/assets/img/gallery/11.png" alt="" className="w-100 rounded-3" />
                </PhoenixLink>
              </div>
              <div className="col-4">
                <PhoenixLink href="/assets/img/gallery/12.png" data-gallery={"gallery-photos"}>
                  <PhoenixImage src="/assets/img/gallery/12.png" alt="" className="w-100 rounded-3" />
                </PhoenixLink>
              </div>
              <div className="col-4">
                <PhoenixLink href="/assets/img/gallery/13.png" data-gallery={"gallery-photos"}>
                  <PhoenixImage src="/assets/img/gallery/13.png" alt="" className="w-100 rounded-3" />
                </PhoenixLink>
              </div>
              <div className="col-4">
                <PhoenixLink href="/assets/img/gallery/14.png" data-gallery={"gallery-photos"}>
                  <PhoenixImage src="/assets/img/gallery/14.png" alt="" className="w-100 rounded-3" />
                </PhoenixLink>
              </div>
              <div className="col-4">
                <PhoenixLink href="/assets/img/gallery/15.png" data-gallery={"gallery-photos"}>
                  <PhoenixImage src="/assets/img/gallery/15.png" alt="" className="w-100 rounded-3" />
                </PhoenixLink>
              </div>
              <div className="col-4">
                <PhoenixLink href="/assets/img/gallery/16.png" data-gallery={"gallery-photos"}>
                  <PhoenixImage src="/assets/img/gallery/16.png" alt="" className="w-100 rounded-3" />
                </PhoenixLink>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="row g-0">
              <div className="col-6 border-1 border-bottom border-translucent border-end py-2">
                <a href="#!" className="btn btn-link ps-2 fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block">
                  <span className="fa-solid fa-user-group me-2 mb-2 mb-xxl-0">                  </span>Followers
                </a>
              </div>
              <div className="col-6 border-1 border-bottom border-translucent py-2">
                <a href="#!" className="btn btn-link fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block">
                  <span className="fa-solid fa-users me-2 mb-2 mb-xxl-0">                  </span>Communities
                </a>
              </div>
              <div className="col-6 border-1 border-bottom border-translucent border-end py-2">
                <a href="#!" className="btn btn-link ps-2 fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block">
                  <span className="fa-solid fa-photo-film me-2 mb-2 mb-xxl-0">                  </span>Media Files
                </a>
              </div>
              <div className="col-6 border-1 border-bottom border-translucent py-2">
                <a href="#!" className="btn btn-link fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block">
                  <span className="fa-solid fa-calendar-days me-2 mb-2 mb-xxl-0">                  </span>Events
                </a>
              </div>
              <div className="col-6 border-1 border-end border-translucent py-2">
                <a href="#!" className="btn btn-link ps-2 fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block">
                  <span className="fa-solid fa-dice me-2 mb-2 mb-xxl-0">                  </span>Games
                </a>
              </div>
              <div className="col-6 border-1 py-2">
                <a href="#!" className="btn btn-link fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block">
                  <span className="fa-solid fa-user-gear me-2 mb-2 mb-xxl-0">                  </span>Settings 
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex mb-5 pt-7" id="scrollspyForms">
        <span className="fa-stack me-2 ms-n1">
          <i className="fas fa-circle fa-stack-2x text-primary">          </i>
          <i className="fa-inverse fa-stack-1x text-primary-subtle fas fa-file-alt" data-fa-transform={"shrink-2"}>          </i>
        </span>
        <div className="col">
          <h3 className="mb-0 text-primary position-relative fw-bold">
            <span className="bg-body pe-2">
Forms
            </span>
            <span className="border border-primary position-absolute top-50 translate-middle-y w-100 start-0 z-n1">            </span>
          </h3>
          <p className="mb-0">
Get different types of data from the user by using Phoenix's customizable form.
          </p>
        </div>
      </div>
      <div className="row g-5 mb-5">
        <div className="col-12 col-xl-8">
          <h4 className="mb-3">
Product Title
          </h4>
          <input className="form-control mb-5" type="text" placeholder="Write title here..." />
          <div className="mb-6">
            <h4 className="mb-3">
 Product Description
            </h4>
            <textarea className="tinymce" name="content" data-tinymce={"{\"height\":\"15rem\",\"placeholder\":\"Write a description here...\"}"} defaultValue="" />
          </div>
          <h4 className="mb-3">
Display images
          </h4>
          <div className="dropzone dropzone-multiple p-0 mb-5" id="my-awesome-dropzone" data-dropzone>
            <div className="fallback">
              <input name="file" type="file" multiple />
            </div>
            <div className="dz-preview d-flex flex-wrap">
              <div className="border border-translucent bg-body-emphasis rounded-3 d-flex flex-center position-relative me-2 mb-2" style={{"height":"80px","width":"80px"} as CSSProperties}>
                <PhoenixImage src="/assets/img/products/23.png" alt="..." className="dz-image" />
                <a href="#!" className="dz-remove text-body-quaternary"  data-dz-remove>
                  <span data-feather={"x"}>                  </span>
                </a>
              </div>
            </div>
            <div className="dz-message text-body-tertiary text-opacity-85" data-dz-message>
Drag your photo here
              <span className="text-body-secondary px-1">
or
              </span>
              <button className="btn btn-link p-0" type="button">
Browse from device
              </button>
              <br />
              <PhoenixImage src="/assets/img/icons/image-icon.png" alt="" className="mt-3 me-2" width={40} />
            </div>
          </div>
          <h4 className="mb-3">
Inventory
          </h4>
          <div className="row g-0 border-top border-bottom">
            <div className="col-sm-4">
              <div className="nav flex-sm-column border-bottom border-bottom-sm-0 border-end-sm fs-9 vertical-tab h-100 justify-content-between" role="tablist" aria-orientation="vertical">
                <a href="#" className="nav-link border-end border-end-sm-0 border-bottom-sm text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center active" id="pricingTab" data-bs-toggle={"tab"} data-bs-target={"#pricingTabContent"} role="tab" aria-controls="pricingTabContent" aria-selected="true">
                  <span className="me-sm-2 fs-4 nav-icons" data-feather={"tag"}>                  </span>                  <span className="d-none d-sm-inline">
Pricing
                  </span>
                </a>
                <a href="#" className="nav-link border-end border-end-sm-0 border-bottom-sm text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center" id="restockTab" data-bs-toggle={"tab"} data-bs-target={"#restockTabContent"} role="tab" aria-controls="restockTabContent" aria-selected="false">
                  <span className="me-sm-2 fs-4 nav-icons" data-feather={"package"}>                  </span>                  <span className="d-none d-sm-inline">
Restock
                  </span>
                </a>
                <a href="#" className="nav-link border-end border-end-sm-0 border-bottom-sm text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center" id="shippingTab" data-bs-toggle={"tab"} data-bs-target={"#shippingTabContent"} role="tab" aria-controls="shippingTabContent" aria-selected="false">
                  <span className="me-sm-2 fs-4 nav-icons" data-feather={"truck"}>                  </span>                  <span className="d-none d-sm-inline">
Shipping
                  </span>
                </a>
                <a href="#" className="nav-link border-end border-end-sm-0 border-bottom-sm text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center" id="productsTab" data-bs-toggle={"tab"} data-bs-target={"#productsTabContent"} role="tab" aria-controls="productsTabContent" aria-selected="false">
                  <span className="me-sm-2 fs-4 nav-icons" data-feather={"globe"}>                  </span>                  <span className="d-none d-sm-inline">
Global Delivery
                  </span>
                </a>
                <a href="#" className="nav-link border-end border-end-sm-0 border-bottom-sm text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center" id="attributesTab" data-bs-toggle={"tab"} data-bs-target={"#attributesTabContent"} role="tab" aria-controls="attributesTabContent" aria-selected="false">
                  <span className="me-sm-2 fs-4 nav-icons" data-feather={"sliders"}>                  </span>                  <span className="d-none d-sm-inline">
Attributes
                  </span>
                </a>
                <a href="#" className="nav-link text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center" id="advancedTab" data-bs-toggle={"tab"} data-bs-target={"#advancedTabContent"} role="tab" aria-controls="advancedTabContent" aria-selected="false">
                  <span className="me-sm-2 fs-4 nav-icons" data-feather={"lock"}>                  </span>                  <span className="d-none d-sm-inline">
Advanced
                  </span>
                </a>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="tab-content py-3 ps-sm-4 h-100">
                <div className="tab-pane fade show active" id="pricingTabContent" role="tabpanel">
                  <h4 className="mb-3 d-sm-none">
Pricing
                  </h4>
                  <div className="row g-3">
                    <div className="col-12 col-lg-6">
                      <h5 className="mb-2 text-body-highlight">
Regular price
                      </h5>
                      <input className="form-control" type="text" placeholder="$$$" />
                    </div>
                    <div className="col-12 col-lg-6">
                      <h5 className="mb-2 text-body-highlight">
Sale price
                      </h5>
                      <input className="form-control" type="text" placeholder="$$$" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade h-100" id="restockTabContent" role="tabpanel" aria-labelledby="restockTab">
                  <div className="d-flex flex-column h-100">
                    <h5 className="mb-3 text-body-highlight">
Add to Stock
                    </h5>
                    <div className="row g-3 flex-1 mb-4">
                      <div className="col-sm-7">
                        <input className="form-control" type="number" placeholder="Quantity" />
                      </div>
                      <div className="col-sm">
                        <button className="btn btn-primary" type="button">
                          <span className="fa-solid fa-check me-1 fs-10">                          </span>
Confirm
                        </button>
                      </div>
                    </div>
                    <table>
                      <thead>
                        <tr>
                          <th style={{"width":"200px"} as CSSProperties}>                          </th>
                          <th>                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-body-highlight fw-bold py-1">
Product in stock now:
                          </td>
                          <td className="text-body-tertiary fw-semibold py-1">
$1,090 
                            <button className="btn p-0" type="button">
                              <span className="fa-solid fa-rotate text-body ms-1" style={{"--phoenix-text-opacity":".6"} as CSSProperties}>                              </span>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-body-highlight fw-bold py-1">
Product in transit:
                          </td>
                          <td className="text-body-tertiary fw-semibold py-1">
5000
                          </td>
                        </tr>
                        <tr>
                          <td className="text-body-highlight fw-bold py-1">
Last time restocked:
                          </td>
                          <td className="text-body-tertiary fw-semibold py-1">
30th June, 2021
                          </td>
                        </tr>
                        <tr>
                          <td className="text-body-highlight fw-bold py-1">
Total stock over lifetime:
                          </td>
                          <td className="text-body-tertiary fw-semibold py-1">
20,000
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="tab-pane fade h-100" id="shippingTabContent" role="tabpanel" aria-labelledby="shippingTab">
                  <div className="d-flex flex-column h-100">
                    <h5 className="mb-3 text-body-highlight">
Shipping Type
                    </h5>
                    <div className="flex-1">
                      <div className="mb-4">
                        <div className="form-check mb-1">
                          <input className="form-check-input" type="radio" name="shippingRadio" id="fullfilledBySeller" />
                          <label className="form-check-label fs-8 text-body" htmlFor="fullfilledBySeller">
Fullfilled by Seller
                          </label>
                        </div>
                        <div className="ps-4">
                          <p className="text-body-secondary fs-9 mb-0">
You’ll be responsible for product delivery. 
                            <br />
Any damage or delay during shipping may cost you a Damage fee.
                          </p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="form-check mb-1">
                          <input className="form-check-input" type="radio" name="shippingRadio" id="fullfilledByPhoenix" defaultChecked />
                          <label className="form-check-label fs-8 text-body d-flex align-items-center" htmlFor="fullfilledByPhoenix">
Fullfilled by Phoenix 
                            <span className="badge badge-phoenix badge-phoenix-warning fs-10 ms-2">
Recommended
                            </span>
                          </label>
                        </div>
                        <div className="ps-4">
                          <p className="text-body-secondary fs-9 mb-0">
Your product, Our responsibility.
                            <br />
For a measly fee, we will handle the delivery process for you.
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="fs-9 fw-semibold mb-0">
See our 
                      <a href="#!" className="fw-bold">
Delivery terms and conditions 
                      </a>
for details.
                    </p>
                  </div>
                </div>
                <div className="tab-pane fade" id="productsTabContent" role="tabpanel" aria-labelledby="productsTab">
                  <h5 className="mb-3 text-body-highlight">
Global Delivery
                  </h5>
                  <div className="mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="deliveryRadio" id="worldwideDelivery" />
                      <label className="form-check-label fs-8 text-body" htmlFor="worldwideDelivery">
Worldwide delivery
                      </label>
                    </div>
                    <div className="ps-4">
                      <p className="fs-9 mb-0 text-body-secondary">
Only available with Shipping method: 
                        <a href="#!">
Fullfilled by Phoenix
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="deliveryRadio" defaultChecked id="selectedCountry" />
                      <label className="form-check-label fs-8 text-body" htmlFor="selectedCountry">
Selected Countries
                      </label>
                    </div>
                    <div className="ps-4" style={{"maxWidth":"350px"} as CSSProperties}>
                      <select className="form-select ps-4" id="organizerMultiple" data-choices multiple data-options={"{\"removeItemButton\":true,\"placeholder\":true}"}>
                        <option value="">
Type Country name
                        </option>
                        <option>
United States of America
                        </option>
                        <option>
United Kingdom
                        </option>
                        <option>
Canada
                        </option>
                        <option>
Mexico
                        </option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="deliveryRadio" id="localDelivery" />
                      <label className="form-check-label fs-8 text-body" htmlFor="localDelivery">
Local delivery
                      </label>
                    </div>
                    <p className="fs-9 ms-4 mb-0 text-body-secondary">
Deliver to your country of residence 
                      <a href="#!">
Change profile address 
                      </a>
                    </p>
                  </div>
                </div>
                <div className="tab-pane fade" id="attributesTabContent" role="tabpanel" aria-labelledby="attributesTab">
                  <h5 className="mb-3 text-body-highlight">
Attributes
                  </h5>
                  <div className="form-check">
                    <input className="form-check-input" id="fragileCheck" type="checkbox" />
                    <label className="form-check-label text-body fs-8" htmlFor="fragileCheck">
Fragile Product
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" id="biodegradableCheck" type="checkbox" />
                    <label className="form-check-label text-body fs-8" htmlFor="biodegradableCheck">
Biodegradable
                    </label>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input className="form-check-input" id="frozenCheck" type="checkbox" defaultChecked />
                      <label className="form-check-label text-body fs-8" htmlFor="frozenCheck">
Frozen Product
                      </label>
                      <input className="form-control" type="text" placeholder="Max. allowed Temperature" style={{"maxWidth":"350px"} as CSSProperties} />
                    </div>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" id="productCheck" type="checkbox" defaultChecked />
                    <label className="form-check-label text-body fs-8" htmlFor="productCheck">
Expiry Date of Product
                    </label>
                    <input className="form-control inventory-attributes datetimepicker" id="inventory" type="text" style={{"maxWidth":"350px"} as CSSProperties} placeholder="d/m/y" data-options={"{\"disableMobile\":true}"} />
                  </div>
                </div>
                <div className="tab-pane fade" id="advancedTabContent" role="tabpanel" aria-labelledby="advancedTab">
                  <h5 className="mb-3 text-body-highlight">
Advanced
                  </h5>
                  <div className="row g-3">
                    <div className="col-12 col-lg-6">
                      <h5 className="mb-2 text-body-highlight">
Product ID Type
                      </h5>
                      <select className="form-select" aria-label="form-select-lg example">
                        <option>
ISBN
                        </option>
                        <option value="1">
UPC
                        </option>
                        <option value="2">
EAN
                        </option>
                        <option value="3">
JAN
                        </option>
                      </select>
                    </div>
                    <div className="col-12 col-lg-6">
                      <h5 className="mb-2 text-body-highlight">
Product ID
                      </h5>
                      <input className="form-control" type="text" placeholder="ISBN Number" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-4">
          <div className="row g-2">
            <div className="col-12 col-xl-12">
              <div className="card mb-3">
                <div className="card-body">
                  <h4 className="card-title mb-4">
Organize
                  </h4>
                  <div className="row gx-3">
                    <div className="col-12 col-sm-6 col-xl-12">
                      <div className="mb-4">
                        <div className="d-flex flex-wrap mb-2">
                          <h5 className="mb-0 text-body-highlight me-2">
Category
                          </h5>
                          <a href="#!" className="fw-bold fs-9">
Add new category
                          </a>
                        </div>
                        <select className="form-select mb-3" aria-label="category">
                          <option value="men-cloth">
Men's Clothing
                          </option>
                          <option value="women-cloth">
Womens's Clothing
                          </option>
                          <option value="kid-cloth">
Kid's Clothing
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-12">
                      <div className="mb-4">
                        <div className="d-flex flex-wrap mb-2">
                          <h5 className="mb-0 text-body-highlight me-2">
Vendor
                          </h5>
                          <a href="#!" className="fw-bold fs-9">
Add new vendor
                          </a>
                        </div>
                        <select className="form-select mb-3" aria-label="category">
                          <option value="men-cloth">
Men's Clothing
                          </option>
                          <option value="women-cloth">
Womens's Clothing
                          </option>
                          <option value="kid-cloth">
Kid's Clothing
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-12">
                      <div className="mb-4">
                        <h5 className="mb-2 text-body-highlight">
Collection
                        </h5>
                        <input className="form-control mb-xl-3" type="text" placeholder="Collection" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-12">
                      <div className="d-flex flex-wrap mb-2">
                        <h5 className="mb-0 text-body-highlight me-2">
Tags
                        </h5>
                        <a href="#!" className="fw-bold fs-9 lh-sm">
View all tags
                        </a>
                      </div>
                      <select className="form-select" aria-label="category">
                        <option value="men-cloth">
Men's Clothing
                        </option>
                        <option value="women-cloth">
Womens's Clothing
                        </option>
                        <option value="kid-cloth">
Kid's Clothing
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title mb-4">
Variants
                  </h4>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6 col-xl-12">
                      <div className="border-bottom border-translucent border-dashed border-sm-0 border-bottom-xl pb-4">
                        <div className="d-flex flex-wrap mb-2">
                          <h5 className="text-body-highlight me-2">
Option 1
                          </h5>
                          <a href="#!" className="fw-bold fs-9">
Remove
                          </a>
                        </div>
                        <select className="form-select mb-3">
                          <option value="size">
Size
                          </option>
                          <option value="color">
Color
                          </option>
                          <option value="weight">
Weight
                          </option>
                          <option value="smell">
Smell
                          </option>
                        </select>
                        <div className="product-variant-select-menu">
                          <select className="form-select mb-3" data-choices multiple data-options={"{\"removeItemButton\":true,\"placeholder\":true}"}>
                            <option value="size">
4x6 in
                            </option>
                            <option value="color">
9x6 in
                            </option>
                            <option value="weight">
11x8 in
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-12">
                      <div className="d-flex flex-wrap mb-2">
                        <h5 className="text-body-highlight me-2">
Option 2
                        </h5>
                        <a href="#!" className="fw-bold fs-9">
Remove
                        </a>
                      </div>
                      <select className="form-select mb-3">
                        <option value="size">
Size
                        </option>
                        <option value="color">
Color
                        </option>
                        <option value="weight">
Weight
                        </option>
                        <option value="smell">
Smell
                        </option>
                      </select>
                      <div className="product-variant-select-menu mb-3">
                        <select className="form-select mb-3" data-choices multiple data-options={"{\"removeItemButton\":true,\"placeholder\":true}"}>
                          <option value="size">
4x6 in
                          </option>
                          <option value="color">
9x6 in
                          </option>
                          <option value="weight">
11x8 in
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-phoenix-primary w-100" type="button">
Add another option
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-5">
        <div className="col-xxl-6">
          <div className="card">
            <div className="card-body">
              <form className="d-flex flex-column h-100">
                <div className="row g-3 mb-2">
                  <div className="col-4">
                    <input className="form-control" type="email" placeholder="To" />
                  </div>
                  <div className="col-4">
                    <input className="form-control" type="email" placeholder="CC" />
                  </div>
                  <div className="col-4">
                    <input className="form-control" type="email" placeholder="BCC" />
                  </div>
                  <div className="col-12">
                    <input className="form-control" type="text" placeholder="Subject" />
                  </div>
                </div>
                <div className="mb-3 flex-1">
                  <textarea className="tinymce email-textarea" name="content" data-tinymce={"{\"height\":\"100%\"}"} defaultValue="" />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <label className="btn btn-link py-0 px-2 text-body fs-9" htmlFor="emailAttachment">
                      <span className="fa-solid fa-paperclip">                      </span>
                    </label>
                    <input className="d-none" id="emailAttachment" type="file" />
                    <label className="btn btn-link py-0 px-2 text-body fs-9" htmlFor="emailPhotos">
                      <span className="fa-solid fa-image">                      </span>
                    </label>
                    <input className="d-none" id="emailPhotos" type="file" accept="image/*" />
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-link text-body fs-10 text-decoration-none">
Discard
                    </button>
                    <button className="btn btn-primary fs-10" type="submit">
Send
                      <span className="fa-solid fa-paper-plane ms-1">                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-xxl-6">
          <div className="row gx-3 gy-4">
            <h4 className="fs-7 mb-0">
Event Details
            </h4>
            <div className="col-sm-6 col-md-12">
              <div className="form-floating">
                <input className="form-control" id="floatingEventInput" type="text" placeholder="Event title" />
                <label htmlFor="floatingEventInput">
Event title
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="form-floating">
                <select className="form-select" id="floatingSelectTask">
                  <option>
Select event type
                  </option>
                  <option value="1">
technical
                  </option>
                  <option value="2">
external
                  </option>
                  <option value="3">
organizational
                  </option>
                </select>
                <label htmlFor="floatingSelectTask">
type
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="form-floating">
                <select className="form-select" id="floatingSelectPrivacy">
                  <option>
Select topic
                  </option>
                  <option value="1">
Data select topic One
                  </option>
                  <option value="2">
Data select topic Two
                  </option>
                  <option value="3">
Data select topic Three
                  </option>
                </select>
                <label htmlFor="floatingSelectPrivacy">
topic
                </label>
              </div>
            </div>
            <div className="col-12 mt-4">
              <div className="form-check form-check-inline">
                <input className="form-check-input" id="inlineRadio1" type="radio" name="inlineRadioOptions" defaultValue="option1" defaultChecked />
                <label className="form-check-label" htmlFor="inlineRadio1">
Online
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" id="inlineRadio2" type="radio" name="inlineRadioOptions" defaultValue="option2" />
                <label className="form-check-label" htmlFor="inlineRadio2">
Offline
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" id="inlineRadio3" type="radio" name="inlineRadioOptions" defaultValue="option3" />
                <label className="form-check-label" htmlFor="inlineRadio3">
Both
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-md-12 mt-md-0 mt-lg-1">
              <div className="form-floating">
                <input className="form-control" id="floatingVenueInput" type="text" placeholder="Venue" />
                <label htmlFor="floatingVenueInput">
Venue
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="form-floating">
                <select className="form-select" id="floatingSelectCountry">
                  <option>
Select Country
                  </option>
                  <option value="1">
Country One
                  </option>
                  <option value="2">
Country Two
                  </option>
                  <option value="3">
Country Three
                  </option>
                </select>
                <label htmlFor="floatingSelectCountry">
Country
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="form-floating">
                <select className="form-select" id="floatingSelectState">
                  <option>
Select State 
                  </option>
                  <option value="1">
One
                  </option>
                  <option value="2">
Two
                  </option>
                  <option value="3">
Three
                  </option>
                </select>
                <label htmlFor="floatingSelectState">
 State
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="form-floating">
                <select className="form-select" id="floatingSelectCity">
                  <option>
Select city
                  </option>
                  <option value="1">
Data Privacy One
                  </option>
                  <option value="2">
Data Privacy Two
                  </option>
                  <option value="3">
Data Privacy Three
                  </option>
                </select>
                <label htmlFor="floatingSelectCity">
City
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex mb-4 pt-7" id="scrollspyOthers">
        <span className="fa-stack me-2 ms-n1">
          <i className="fas fa-circle fa-stack-2x text-primary">          </i>
          <i className="fa-inverse fa-stack-1x text-primary-subtle fas fa-folder-plus" data-fa-transform={"shrink-2"}>          </i>
        </span>
        <div className="col">
          <h3 className="mb-0 text-primary position-relative fw-bold">
            <span className="bg-body pe-2">
Others
            </span>
            <span className="border border-primary position-absolute top-50 translate-middle-y w-100 start-0 z-n1">            </span>
          </h3>
          <p className="mb-0">
Get more awesome cards for showing your different types of content..
          </p>
        </div>
      </div>
      <div className="row g-3 mb-3">
        <div className="col-xl-6 col-xxl-5">
          <div className="card border h-100 w-100 overflow-hidden">
            <div className="bg-holder d-block bg-card" style={{"backgroundImage":"url(assets/img/spot-illustrations/32.png)","backgroundPosition":"top right"} as CSSProperties}>            </div>
            <div className="d-dark-none">
              <div className="bg-holder d-none d-sm-block d-xl-none d-xxl-block bg-card" style={{"backgroundImage":"url(assets/img/spot-illustrations/21.png)","backgroundPosition":"bottom right","backgroundSize":"auto"} as CSSProperties}>              </div>
            </div>
            <div className="d-light-none">
              <div className="bg-holder d-none d-sm-block d-xl-none d-xxl-block bg-card" style={{"backgroundImage":"url(assets/img/spot-illustrations/dark_21.png)","backgroundPosition":"bottom right","backgroundSize":"auto"} as CSSProperties}>              </div>
            </div>
            <div className="card-body px-5 position-relative">
              <div className="badge badge-phoenix fs-10 badge-phoenix-warning mb-4">
                <span className="fw-bold">
Coming soon
                </span>
                <span className="fa-solid fa-award ms-1">                </span>
              </div>
              <h3 className="mb-5">
Early bird gets the warm leads!
              </h3>
              <p className="text-body-tertiary fw-semibold">
Phoenix CRM Dashboard is coming to 
                <br className="d-none d-sm-block" />
market soon for fulfilling your every 
                <br className="d-none d-sm-block" />
CRM related needs. 
              </p>
            </div>
            <div className="card-footer border-0 py-0 px-5 z-1">
              <p className="text-body-tertiary fw-semibold">
Follow 
                <a href="https://themewagon.com/">
ThemeWagon 
                </a>
at 
                <br className="d-none d-xxl-block" />
Bootstrap Marketplace for updates.
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-xxl-7">
          <div className="card d-flex flex-column mb-5 h-100">
            <textarea className="form-control border-translucent rounded-bottom-0 border-0 flex-1 fs-8" rows={7} placeholder="Write something..." defaultValue="" />
            <div className="card-footer p-3">
              <div className="d-flex justify-content-between align-items-center">
                <button className="btn p-0 me-3">
                  <span className="fa-solid fa-image fs-8">                  </span>
                </button>
                <button className="btn p-0 me-3">
                  <span className="fa-solid fa-calendar-alt fs-8">                  </span>
                </button>
                <button className="btn p-0 me-3">
                  <span className="fa-solid fa-map-marker-alt fs-8">                  </span>
                </button>
                <button className="btn p-0 me-3">
                  <span className="fa-solid fa-tag fs-8">                  </span>
                </button>
                <div className="dropdown me-3 d-inline-block flex-1">
                  <button className="btn p-0 dropdown-toggle dropdown-caret-none d-flex align-items-center" type="button" data-bs-toggle={"dropdown"} aria-expanded="false">
                    <span className="fa-solid fa-globe-asia fs-8 me-1">                    </span>
                    <span className="me-1 lh-base d-none d-sm-block">
Public
                    </span>
                    <span className="fa-solid fa-caret-down fs-10 text-body-quaternary">                    </span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#" className="dropdown-item">
Public
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dropdown-item">
Private
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dropdown-item">
Draft
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="d-flex align-items-center">
                  <button className="btn btn-primary btn-sm px-6 px-sm-8">
Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-3">
        <div className="col-xl-4">
          <div className="row gy-3 h-100">
            <div className="col-12">
              <div className="card mb-3 h-100">
                <div className="card-body">
                  <h3 className="mb-4">
Notes on Customer
                  </h3>
                  <textarea className="form-control mb-3" rows={4} defaultValue="" />
                  <button className="btn btn-phoenix-primary w-100 mb-4">
Add Note
                  </button>
                  <div className="fs-9 fw-semibold pb-4 mb-4 border-bottom border-dashed">
                    <p className="text-body-highlight mb-1">
Gave us a nice feedback
                    </p>
                    <div className="text-end">
                      <p className="text-body-tertiary text-opacity-85 mb-0">
12 Nov, 2020
                      </p>
                    </div>
                  </div>
                  <div className="fs-9 fw-semibold pb-4 mb-4 border-bottom border-dashed">
                    <p className="text-body-highlight mb-1">
Customer added product to cart and then forgot to checkout. Later knocked the customer support to ask about update on shipping. Later, settled on “One day Shipping” though “Free delivery” was preferred. Overall good behavior.
                    </p>
                    <div className="text-end">
                      <p className="text-body-tertiary text-opacity-85 mb-0">
23 Dec, 2019
                      </p>
                    </div>
                  </div>
                  <div className="fs-9 fw-semibold pb-4 mb-4 border-bottom border-dashed">
                    <p className="text-body-highlight mb-1">
User of this support ticket won a 100% off coupon and received top-notch service from the technical support engineer. Along with providing a good review, user highly appreciated the team.
                    </p>
                    <div className="text-end">
                      <p className="text-body-tertiary text-opacity-85 mb-0">
2 Oct, 2019
                      </p>
                    </div>
                  </div>
                  <div className="fs-9 fw-semibold">
                    <p className="text-body-highlight mb-1">
Customer returned and bought 2 related items, which is currently being shipped. Customer chose “One day Shipping”. Additional notes were added regarding customised wrapping. Customer submitted positive review.
                    </p>
                    <div className="text-end">
                      <p className="text-body-tertiary text-opacity-85 mb-0">
26 Apr, 2019
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card mb-3 h-100">
                <div className="card-body">
                  <div className="row align-items-center g-3">
                    <div className="col-12 col-sm-auto flex-1">
                      <h3 className="fw-bolder mb-2 line-clamp-1">
Start-Up Growth Suite
                      </h3>
                      <div className="d-flex align-items-center mb-4">
                        <h5 className="mb-0 me-4">
USD $12,000.00
                        </h5>
                        <h5 className="fw-semibold">
                          <span className="d-inline-block lh-sm me-1" data-feather={"grid"} style={{"height":"16px","width":"16px"} as CSSProperties}>                          </span>
                          <span className="d-inline-block lh-sm">
Financial
                          </span>
                        </h5>
                      </div>
                      <div className="d-md-flex d-xl-block align-items-center justify-content-between mb-5">
                        <div className="d-flex align-items-center mb-3 mb-md-0 mb-xl-3">
                          <div className="avatar avatar-xl me-3">
                            <PhoenixImage src="/assets/img/team/72x72/58.webp" alt="" className="rounded-circle" />
                          </div>
                          <div>
                            <h5>
Ansolo Lazinatov
                            </h5>
                            <div className="dropdown">
                              <a href="#!" className="text-body-secondary dropdown-toggle text-decoration-none dropdown-caret-none"  data-bs-toggle={"dropdown"} aria-expanded="false">
 Owner                                <span className="fa-solid fa-caret-down text-body-secondary fs-9 ms-2">                                </span>
                              </a>
                              <div className="dropdown-menu shadow-sm" style={{"minWidth":"20rem"} as CSSProperties}>
                                <div className="card position-relative border-0">
                                  <div className="card-body p-0">
                                    <div className="mx-3">
                                      <h4 className="mb-3 fw-bold">
Switch ownership
                                      </h4>
                                      <h5 className="mb-3">
Deal Owner
                                      </h5>
                                      <select className="form-select mb-3" aria-label="Default select">
                                        <option>
Select
                                        </option>
                                        <option value="1">
Jerry Seinfield
                                        </option>
                                        <option value="2">
Anthoney Michael
                                        </option>
                                        <option value="3">
Ansolo Lazinatov
                                        </option>
                                      </select>
                                      <div className="text-end">
                                        <button className="btn btn-link text-danger" type="button">
Cancel
                                        </button>
                                        <button className="btn btn-sm btn-primary px-5" type="button">
Save
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <span className="badge badge-phoenix badge-phoenix-success me-2">
Success
                          </span>
                          <span className="badge badge-phoenix badge-phoenix-danger me-2">
Lost
                          </span>
                          <span className="badge badge-phoenix badge-phoenix-secondary">
Close
                          </span>
                        </div>
                      </div>
                      <div className="progress mb-2" style={{"height":"5px"} as CSSProperties}>
                        <div className="progress-bar bg-primary-lighter" data-bs-theme={"light"} role="progressbar" style={{"width":"40%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="mb-0">
 New
                        </p>
                        <div>
                          <span className="d-inline-block lh-sm me-1" data-feather={"clock"} style={{"height":"16px","width":"16px"} as CSSProperties}>                          </span>
                          <span className="d-inline-block lh-sm">
 Dec 15, 05:00AM
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="row gy-3 h-100">
            <div className="col-12">
              <div className="card mb-3 h-100">
                <div className="card-body d-flex flex-column justify-content-between pb-3">
                  <div className="row align-items-center g-5 mb-3 text-center text-sm-start">
                    <div className="col-12 col-sm-auto mb-sm-2">
                      <div className="avatar avatar-5xl">
                        <PhoenixImage src="/assets/img/team/15.webp" alt="" className="rounded-circle" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-auto flex-1">
                      <h3>
Ansolo Lazinatov
                      </h3>
                      <p className="text-body-secondary">
Joined 3 months ago
                      </p>
                      <div>
                        <a href="#!" className="me-2">
                          <span className="fab fa-linkedin-in text-body-quaternary text-opacity-75 text-primary-hover">                          </span>
                        </a>
                        <a href="#!" className="me-2">
                          <span className="fab fa-facebook text-body-quaternary text-opacity-75 text-primary-hover">                          </span>
                        </a>
                        <a href="#!">
                          <span className="fab fa-twitter text-body-quaternary text-opacity-75 text-primary-hover">                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-between-center border-top border-dashed pt-4">
                    <div>
                      <h6>
Following
                      </h6>
                      <p className="fs-7 text-body-secondary mb-0">
297
                      </p>
                    </div>
                    <div>
                      <h6>
Projects
                      </h6>
                      <p className="fs-7 text-body-secondary mb-0">
56
                      </p>
                    </div>
                    <div>
                      <h6>
Completion
                      </h6>
                      <p className="fs-7 text-body-secondary mb-0">
97
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card mb-3 h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <h3 className="me-1">
Default Address
                    </h3>
                    <button className="btn btn-link p-0">
                      <span className="fas fa-pen fs-8 ms-3 text-body-quaternary">                      </span>
                    </button>
                  </div>
                  <h5 className="text-body-secondary">
Address
                  </h5>
                  <p className="text-body-secondary">
Shatinon Mekalan
                    <br />
Vancouver, British Columbia
                    <br />
Canada
                  </p>
                  <div className="mb-3">
                    <h5 className="text-body-secondary">
Email
                    </h5>
                    <a href="mailto:shatinon@jeemail.com">
shatinon@jeemail.com
                    </a>
                  </div>
                  <h5 className="text-body-secondary">
Phone
                  </h5>
                  <a href="tel:+1234567890" className="text-body-secondary">
+1234567890
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card mb-3 h-100">
                <div className="card-body">
                  <h3 className="card-title mb-4">
Summary
                  </h3>
                  <div>
                    <div className="d-flex justify-content-between">
                      <p className="text-body fw-semibold">
Items subtotal :
                      </p>
                      <p className="text-body-emphasis fw-semibold">
$691
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-body fw-semibold">
Discount :
                      </p>
                      <p className="text-danger fw-semibold">
-$59
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-body fw-semibold">
Tax :
                      </p>
                      <p className="text-body-emphasis fw-semibold">
$126.20
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-body fw-semibold">
Subtotal :
                      </p>
                      <p className="text-body-emphasis fw-semibold">
$665
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-body fw-semibold">
Shipping Cost :
                      </p>
                      <p className="text-body-emphasis fw-semibold">
$30
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between border-top border-translucent border-dashed pt-4">
                    <h4 className="mb-0">
Total :
                    </h4>
                    <h4 className="mb-0">
$695.20
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="row gy-3 h-100">
            <div className="col-12">
              <div className="card mb-3 h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-5">
                    <h3>
About lead
                    </h3>
                    <button className="btn btn-link px-3" type="button">
Edit
                    </button>
                  </div>
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-1">
                      <span className="me-2 uil uil-envelope-alt">                      </span>
                      <h5 className="text-body-highlight mb-0">
Email
                      </h5>
                    </div>
                    <a href="mailto:shatinon@jeemail.com:">
ansolo5@jeemail.com
                    </a>
                  </div>
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-1">
                      <span className="me-2 uil uil-phone">                      </span>
                      <h5 className="text-body-highlight mb-0">
Phone
                      </h5>
                    </div>
                    <a href="tel:+1234567890">
+1234567890 
                    </a>
                  </div>
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-1">
                      <span className="me-2 uil uil-globe">                      </span>
                      <h5 className="text-body-highlight mb-0">
Website
                      </h5>
                    </div>
                    <a href="#!">
www.bb.ru.com 
                    </a>
                  </div>
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-1">
                      <span className="me-2 uil uil-building">                      </span>
                      <h5 className="text-body-highlight mb-0">
Industry
                      </h5>
                    </div>
                    <p className="mb-0 text-body-secondary">
Large Enterprise
                    </p>
                  </div>
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-1">
                      <span className="me-2 uil uil-postcard">                      </span>
                      <h5 className="text-body-highlight mb-0">
Number of employees
                      </h5>
                    </div>
                    <p className="mb-0 text-body-secondary">
126
                    </p>
                  </div>
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-1">
                      <span className="me-2 uil uil-dollar-alt">                      </span>
                      <h5 className="text-body-highlight mb-0">
Annual Revenue
                      </h5>
                    </div>
                    <p className="mb-0 text-body-secondary">
$12000 
                    </p>
                  </div>
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-1">
                      <span className="me-2 uil uil-clock">                      </span>
                      <h5 className="text-body-highlight mb-0">
Last contacted
                      </h5>
                    </div>
                    <p className="mb-0 text-body-secondary">
12 November 2021, 10:54 AM
                    </p>
                  </div>
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-1">
                      <span className="me-2 uil uil-file-check-alt">                      </span>
                      <h5 className="text-body-highlight mb-0">
Lead source
                      </h5>
                    </div>
                    <p className="mb-0 text-body-secondary">
Advertisement
                    </p>
                  </div>
                  <div>
                    <div className="d-flex align-items-center mb-1">
                      <span className="me-2 uil uil-check-circle">                      </span>
                      <h5 className="text-body-highlight mb-0">
Lead status
                      </h5>
                    </div>
                    <span className="badge badge-phoenix badge-phoenix-primary">
New Lead
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card h-100">
                <div className="card-body">
                  <div className="row align-items-center g-3 text-center text-xxl-start">
                    <div className="col-12 col-xxl-auto">
                      <div className="avatar avatar-5xl">
                        <PhoenixImage src="/assets/img/team/33.webp" alt="" className="rounded-circle" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-auto flex-1">
                      <h3 className="fw-bolder mb-2">
Ansolo Lazinatov
                      </h3>
                      <p className="mb-0">
Chief tech officer,
                      </p>
                      <a href="#!" className="fw-bold">
Blue Beetles
                      </a>
                    </div>
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
