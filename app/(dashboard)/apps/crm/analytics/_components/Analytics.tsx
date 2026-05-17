'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Analytics() {
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
      <div className="row align-items-center justify-content-between g-3 mb-6">
        <div className="col-12 col-md-auto">
          <h2 className="mb-0">
Analytics
          </h2>
        </div>
        <div className="col-12 col-md-auto">
          <div className="flatpickr-input-container">
            <input className="form-control ps-6 datetimepicker" id="datepicker" type="text" data-options={"{\"dateFormat\":\"M j, Y\",\"disableMobile\":true,\"defaultDate\":\"Mar 1, 2022\"}"} />
            <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary">            </span>
          </div>
        </div>
      </div>
      <div className="px-3 mb-6">
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
      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis pt-6 pb-3 border-y">
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
      <div className="row pt-6 gy-7 gx-6">
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
