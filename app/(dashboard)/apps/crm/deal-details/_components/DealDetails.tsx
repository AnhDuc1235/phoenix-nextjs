'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function DealDetails() {
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
      <div className="row align-items-center justify-content-between g-3 mb-4">
        <div className="col-12 col-md-auto">
          <h2 className="mb-0">
Deal details
          </h2>
        </div>
        <div className="col-12 col-md-auto d-flex">
          <button className="btn btn-phoenix-secondary px-3 px-sm-5 me-2">
            <span className="fa-solid fa-edit me-sm-2">            </span>
            <span className="d-none d-sm-inline">
Edit 
            </span>
          </button>
          <button className="btn btn-phoenix-danger me-2">
            <span className="fa-solid fa-trash me-2">            </span>
            <span>
Delete Deal
            </span>
          </button>
          <div>
            <button className="btn px-3 btn-phoenix-secondary" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
              <span className="fa-solid fa-ellipsis">              </span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end p-0" style={{"zIndex":"9999"} as CSSProperties}>
              <li>
                <a href="#!" className="dropdown-item">
View profile
                </a>
              </li>
              <li>
                <a href="#!" className="dropdown-item">
Report
                </a>
              </li>
              <li>
                <a href="#!" className="dropdown-item">
Manage notifications
                </a>
              </li>
              <li>
                <a href="#!" className="dropdown-item text-danger">
Delete Lead
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row g-4 g-xl-6">
        <div className="col-xl-5 col-xxl-4">
          <div className="sticky-leads-sidebar">
            <div className="card mb-3">
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
                        <span className="d-inline-block lh-sm me-1" data-feather={"grid"} style={{"height":"16px","width":"16px"} as CSSProperties}>                        </span>
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
 Owner                              <span className="fa-solid fa-caret-down text-body-secondary fs-9 ms-2">                              </span>
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
                      <div className="progress-bar bg-primary-lighter" data-bs-theme={"light"} role="progressbar" style={{"width":"40%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0">
 New
                      </p>
                      <div>
                        <span className="d-inline-block lh-sm me-1" data-feather={"clock"} style={{"height":"16px","width":"16px"} as CSSProperties}>                        </span>
                        <span className="d-inline-block lh-sm">
 Dec 15, 05:00AM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 className="mb-5">
Others Information
                </h4>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="mb-4">
                      <div className="d-flex flex-wrap justify-content-between mb-2">
                        <h5 className="mb-0 text-body-highlight me-2">
Category
                        </h5>
                        <a href="#!" className="fw-bold fs-9">
Add new category
                        </a>
                      </div>
                      <select className="form-select mb-3" aria-label="category">
                        <option value="financial">
Financial
                        </option>
                        <option value="marketplace">
Marketplace
                        </option>
                        <option value="travel">
Travel
                        </option>
                        <option value="e-commerce">
E-commerce
                        </option>
                        <option value="cloud-computing">
Cloud Computing
                        </option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <h5 className="mb-0 text-body-highlight mb-2">
Priority
                      </h5>
                      <select className="form-select mb-3" aria-label="priority">
                        <option value="low">
Low
                        </option>
                        <option value="high">
High
                        </option>
                        <option value="medium">
Medium
                        </option>
                        <option value="urgent">
Urgent
                        </option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <h5 className="mb-0 text-body-highlight mb-2">
Stage
                      </h5>
                      <select className="form-select mb-3" aria-label="stage">
                        <option value="new">
New
                        </option>
                        <option value="in-progress">
In Progress
                        </option>
                        <option value="pending">
Pending
                        </option>
                        <option value="canceled">
Canceled
                        </option>
                        <option value="completed">
Completed
                        </option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <div className="d-flex flex-wrap justify-content-between mb-2">
                        <h5 className="mb-0 text-body-highlight me-2">
Lead Source
                        </h5>
                        <a href="#!" className="fw-bold fs-9">
Add new
                        </a>
                      </div>
                      <select className="form-select mb-3" aria-label="lead-source">
                        <option value="referrals">
Referrals
                        </option>
                        <option value="former_clients">
Former Clients
                        </option>
                        <option value="competitors">
Competitors
                        </option>
                        <option value="business_sales">
{"Business & sales"}
                        </option>
                        <option value="google_resources">
Google resources
                        </option>
                        <option value="linkedin">
Linkedin
                        </option>
                        <option value="marketing">
Marketing
                        </option>
                      </select>
                    </div>
                    <div>
                      <div className="d-flex flex-wrap justify-content-between mb-2">
                        <h5 className="mb-0 text-body-highlight me-2">
Campaign Source
                        </h5>
                        <a href="#!" className="fw-bold fs-9">
Add new
                        </a>
                      </div>
                      <select className="form-select" aria-label="lead-source">
                        <option value="online_campaign">
Online Campaign
                        </option>
                        <option value="offline_campaign">
Offline Campaign
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-7 col-xxl-8">
          <div className="card mb-5">
            <div className="card-body">
              <div className="row g-4 g-xl-1 g-xxl-3 justify-content-between">
                <div className="col-sm-auto">
                  <div className="d-sm-block d-inline-flex d-md-flex flex-xl-column flex-xxl-row align-items-center align-items-xl-start align-items-xxl-center">
                    <div className="d-flex bg-success-subtle rounded flex-center me-3 mb-sm-3 mb-md-0 mb-xl-3 mb-xxl-0" style={{"width":"32px","height":"32px"} as CSSProperties}>
                      <span className="text-success-dark" data-feather={"dollar-sign"} style={{"width":"24px","height":"24px"} as CSSProperties}>                      </span>
                    </div>
                    <div>
                      <p className="fw-bold mb-1">
Deal Amount
                      </p>
                      <h4 className="fw-bolder text-nowrap">
$12,000.00
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-sm-auto">
                  <div className="d-sm-block d-inline-flex d-md-flex flex-xl-column flex-xxl-row align-items-center align-items-xl-start align-items-xxl-center border-start-sm ps-sm-5 border-translucent">
                    <div className="d-flex bg-info-subtle rounded flex-center me-3 mb-sm-3 mb-md-0 mb-xl-3 mb-xxl-0" style={{"width":"32px","height":"32px"} as CSSProperties}>
                      <span className="text-info-dark" data-feather={"code"} style={{"width":"24px","height":"24px"} as CSSProperties}>                      </span>
                    </div>
                    <div>
                      <p className="fw-bold mb-1">
Deal Code
                      </p>
                      <h4 className="fw-bolder text-nowrap">
PHO1234
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-sm-auto">
                  <div className="d-sm-block d-inline-flex d-md-flex flex-xl-column flex-xxl-row align-items-center align-items-xl-start align-items-xxl-center border-start-sm ps-sm-5 border-translucent">
                    <div className="d-flex bg-primary-subtle rounded flex-center me-3 mb-sm-3 mb-md-0 mb-xl-3 mb-xxl-0" style={{"width":"32px","height":"32px"} as CSSProperties}>
                      <span className="text-primary-dark" data-feather={"layout"} style={{"width":"24px","height":"24px"} as CSSProperties}>                      </span>
                    </div>
                    <div>
                      <p className="fw-bold mb-1">
Deal Type
                      </p>
                      <h4 className="fw-bolder text-nowrap">
New Business
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-xl-4 mb-7">
            <div className="row mx-0 mx-sm-3 mx-lg-0 px-lg-0">
              <div className="col-sm-12 col-xxl-6 border-bottom border-end-xxl border-translucent py-3">
                <table className="w-100 table-stats table-stats">
                  <tbody>
                    <tr>
                      <th>                      </th>
                      <th>                      </th>
                      <th>                      </th>
                    </tr>
                    <tr>
                      <td className="py-2">
                        <div className="d-inline-flex align-items-center">
                          <div className="d-flex bg-success-subtle rounded-circle flex-center me-3" style={{"width":"24px","height":"24px"} as CSSProperties}>
                            <span className="text-success-dark" data-feather={"bar-chart-2"} style={{"width":"16px","height":"16px"} as CSSProperties}>                            </span>
                          </div>
                          <p className="fw-bold mb-0">
Probability (%)
                          </p>
                        </div>
                      </td>
                      <td className="py-2 d-none d-sm-block pe-sm-2">
:
                      </td>
                      <td className="py-2">
                        <p className="ps-6 ps-sm-0 fw-semibold mb-0 mb-0 pb-3 pb-sm-0">
12.5
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="d-flex bg-info-subtle rounded-circle flex-center me-3" style={{"width":"24px","height":"24px"} as CSSProperties}>
                            <span className="text-info-dark" data-feather={"trending-up"} style={{"width":"16px","height":"16px"} as CSSProperties}>                            </span>
                          </div>
                          <p className="fw-bold mb-0">
Revenue
                          </p>
                        </div>
                      </td>
                      <td className="py-2 d-none d-sm-block pe-sm-2">
:
                      </td>
                      <td className="py-2">
                        <p className="ps-6 ps-sm-0 fw-semibold mb-0">
$1,500.00
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-sm-12 col-xxl-6 border-bottom border-translucent py-3">
                <table className="w-100 table-stats">
                  <tbody>
                    <tr>
                      <th>                      </th>
                      <th>                      </th>
                      <th>                      </th>
                    </tr>
                    <tr>
                      <td className="py-2">
                        <div className="d-inline-flex align-items-center">
                          <div className="d-flex bg-primary-subtle rounded-circle flex-center me-3" style={{"width":"24px","height":"24px"} as CSSProperties}>
                            <span className="text-primary-dark" data-feather={"phone"} style={{"width":"16px","height":"16px"} as CSSProperties}>                            </span>
                          </div>
                          <p className="fw-bold mb-0">
Phone
                          </p>
                        </div>
                      </td>
                      <td className="py-2 d-none d-sm-block pe-sm-2">
:
                      </td>
                      <td className="py-2">
                        <a href="tel:+11123456789" className="ps-6 ps-sm-0 fw-semibold mb-0 pb-3 pb-sm-0 text-body">
+11 123 456 789
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="d-flex bg-warning-subtle rounded-circle flex-center me-3" style={{"width":"24px","height":"24px"} as CSSProperties}>
                            <span className="text-warning-dark" data-feather={"mail"} style={{"width":"16px","height":"16px"} as CSSProperties}>                            </span>
                          </div>
                          <p className="fw-bold mb-0">
Email
                          </p>
                        </div>
                      </td>
                      <td className="py-2 d-none d-sm-block pe-sm-2">
:
                      </td>
                      <td className="py-2">
                        <a href="mailto:jacksonpol@email.com" className="ps-6 ps-sm-0 fw-semibold mb-0 text-body">
jacksonpol@email.com
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-sm-12 col-xxl-6 border-end-xxl border-bottom border-bottom-xxl-0 py-3 border-translucent">
                <table className="w-100 table-stats">
                  <tbody>
                    <tr>
                      <th>                      </th>
                      <th>                      </th>
                      <th>                      </th>
                    </tr>
                    <tr>
                      <td className="py-2">
                        <div className="d-inline-flex align-items-center">
                          <div className="d-flex bg-success-subtle rounded-circle flex-center me-3" style={{"width":"24px","height":"24px"} as CSSProperties}>
                            <span className="text-success-dark" data-feather={"users"} style={{"width":"16px","height":"16px"} as CSSProperties}>                            </span>
                          </div>
                          <p className="fw-bold mb-0">
Contact Name
                          </p>
                        </div>
                      </td>
                      <td className="py-2 d-none d-sm-block pe-sm-2">
:
                      </td>
                      <td className="py-2">
                        <div className="ps-6 ps-sm-0 fw-semibold mb-0 pb-3 pb-sm-0">
Jackson Pollock
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="d-flex bg-info-subtle rounded-circle flex-center me-3" style={{"width":"24px","height":"24px"} as CSSProperties}>
                            <span className="text-info-dark" data-feather={"edit"} style={{"width":"16px","height":"16px"} as CSSProperties}>                            </span>
                          </div>
                          <p className="fw-bold mb-0">
Modified By
                          </p>
                        </div>
                      </td>
                      <td className="py-2 d-none d-sm-block pe-sm-2">
:
                      </td>
                      <td className="py-2">
                        <div className="ps-6 ps-sm-0 fw-semibold mb-0">
Ansolo Lazinatov
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-sm-12 col-xxl-6 py-3">
                <table className="w-100 table-stats">
                  <tbody>
                    <tr>
                      <th>                      </th>
                      <th>                      </th>
                      <th>                      </th>
                    </tr>
                    <tr>
                      <td className="py-2">
                        <div className="d-inline-flex align-items-center">
                          <div className="d-flex bg-info-subtle rounded-circle flex-center me-3" style={{"width":"24px","height":"24px"} as CSSProperties}>
                            <span className="text-info-dark" data-feather={"clock"} style={{"width":"16px","height":"16px"} as CSSProperties}>                            </span>
                          </div>
                          <p className="fw-bold mb-0">
Create Date
                          </p>
                        </div>
                      </td>
                      <td className="py-2 d-none d-sm-block pe-sm-2">
:
                      </td>
                      <td className="py-2">
                        <div className="ps-6 ps-sm-0 fw-semibold mb-0 pb-3 pb-sm-0">
Nov 30, 2022
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="d-flex bg-warning-subtle rounded-circle flex-center me-3" style={{"width":"24px","height":"24px"} as CSSProperties}>
                            <span className="text-warning-dark" data-feather={"clock"} style={{"width":"16px","height":"16px"} as CSSProperties}>                            </span>
                          </div>
                          <p className="fw-bold mb-0">
Closing Date
                          </p>
                        </div>
                      </td>
                      <td className="py-2 d-none d-sm-block pe-sm-2">
:
                      </td>
                      <td className="py-2">
                        <div className="ps-6 ps-sm-0 fw-semibold mb-0">
Dec 15, 2022
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <ul className="nav nav-underline fs-9 deal-details scrollbar flex-nowrap w-100 pb-1 mb-6" id="myTab" role="tablist" style={{"overflowY":"hidden"} as CSSProperties}>
            <li className="nav-item text-nowrap me-2" role="presentation">
              <a href="#tab-activity" className="nav-link" id="activity-tab" data-bs-toggle={"tab"}  role="tab" aria-controls="tab-activity" aria-selected="false" tabIndex={-1}>
                <span className="fa-solid fa-chart-line me-2 tab-icon-color">                </span>Activity
              </a>
            </li>
            <li className="nav-item text-nowrap me-2" role="presentation">
              <a href="#tab-notes" className="nav-link" id="notes-tab" data-bs-toggle={"tab"}  role="tab" aria-controls="tab-notes" aria-selected="false" tabIndex={-1}>
                <span className="fa-solid fa-clipboard me-2 tab-icon-color">                </span>Notes
              </a>
            </li>
            <li className="nav-item text-nowrap me-2" role="presentation">
              <a href="#tab-meeting" className="nav-link" id="meeting-tab" data-bs-toggle={"tab"}  role="tab" aria-controls="tab-meeting" aria-selected="true">
                <span className="fa-solid fa-video me-2 tab-icon-color">                </span>Meeting
              </a>
            </li>
            <li className="nav-item text-nowrap me-2" role="presentation">
              <a href="#tab-task" className="nav-link" id="task-tab" data-bs-toggle={"tab"}  role="tab" aria-controls="tab-task" aria-selected="true">
                <span className="fa-solid fa-square-check me-2 tab-icon-color">                </span>Task
              </a>
            </li>
            <li className="nav-item text-nowrap me-2" role="presentation">
              <a href="#tab-call" className="nav-link" id="call-tab" data-bs-toggle={"tab"}  role="tab" aria-controls="tab-call" aria-selected="true">
                <span className="fa-solid fa-phone me-2 tab-icon-color">                </span>Call
              </a>
            </li>
            <li className="nav-item text-nowrap me-2" role="presentation">
              <a href="#tab-emails" className="nav-link" id="emails-tab" data-bs-toggle={"tab"}  role="tab" aria-controls="tab-emails" aria-selected="true">
                <span className="fa-solid fa-envelope me-2 tab-icon-color">                </span>Emails 
              </a>
            </li>
            <li className="nav-item text-nowrap me-2" role="presentation">
              <a href="#tab-attachments" className="nav-link" id="attachments-tab" data-bs-toggle={"tab"}  role="tab" aria-controls="tab-attachments" aria-selected="true">
                <span className="fa-solid fa-paperclip me-2 tab-icon-color">                </span>Attachments
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade active show" id="tab-activity" role="tabpanel" aria-labelledby="activity-tab">
              <h2 className="mb-4">
Activity
              </h2>
              <div className="row align-items-center g-3 justify-content-between justify-content-start">
                <div className="col-12 col-sm-auto">
                  <div className="search-box mb-2 mb-sm-0">
                    <form className="position-relative">
                      <input className="form-control search-input search" type="search" placeholder="Search Activity" aria-label="Search" />
                      <span className="fas fa-search search-box-icon">                      </span>
                    </form>
                  </div>
                </div>
                <div className="col-auto">
                  <button className="btn btn-phoenix-primary px-6">
Add Activity
                  </button>
                </div>
              </div>
              <div className="border-bottom border-translucent py-4">
                <div className="d-flex">
                  <div className="d-flex bg-primary-subtle rounded-circle flex-center me-3 bg-primary-subtle" style={{"width":"25px","height":"25px"} as CSSProperties}>
                    <span className="fa-solid text-primary-dark fs-9 fa-clipboard text-primary-dark">                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="d-flex justify-content-between flex-column flex-xl-row mb-2 mb-sm-0">
                      <div className="flex-1 me-2">
                        <h5 className="text-body-highlight lh-sm">
Assigned as a director for Project The Chewing Gum Attack
                        </h5>
                        <p className="fs-9 mb-0">
by
                          <a href="#!" className="ms-1">
Jackson Pollock
                          </a>
                        </p>
                      </div>
                      <div className="fs-9">
                        <span className="fa-regular fa-calendar-days text-primary me-2">                        </span>
                        <span className="fw-semibold">
22 September, 2022, 4:33 PM
                        </span>
                      </div>
                    </div>
                    <p className="fs-9 mb-0">
Utilizing best practices to better leverage our assets, we must engage in black sky leadership thinking, not the usual band-aid solution. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-bottom border-translucent py-4">
                <div className="d-flex">
                  <div className="d-flex bg-primary-subtle rounded-circle flex-center me-3 bg-info-subtle" style={{"width":"25px","height":"25px"} as CSSProperties}>
                    <span className="fa-solid text-primary-dark fs-9 fa-video text-info-600">                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="d-flex justify-content-between flex-column flex-xl-row mb-2 mb-sm-0">
                      <div className="flex-1 me-2">
                        <h5 className="text-body-highlight lh-sm">
Onboarding Meeting
                        </h5>
                        <p className="fs-9 mb-0">
by
                          <a href="#!" className="ms-1">
Jackson Pollock
                          </a>
                        </p>
                      </div>
                      <div className="fs-9">
                        <span className="fa-regular fa-calendar-days text-primary me-2">                        </span>
                        <span className="fw-semibold">
20 September, 2022, 5:31pm
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-bottom border-translucent py-4">
                <div className="d-flex">
                  <div className="d-flex bg-primary-subtle rounded-circle flex-center me-3 bg-success-subtle" style={{"width":"25px","height":"25px"} as CSSProperties}>
                    <span className="fa-solid text-primary-dark fs-9 fa-square-check text-success-dark">                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="d-flex justify-content-between flex-column flex-xl-row mb-2 mb-sm-0">
                      <div className="flex-1 me-2">
                        <h5 className="text-body-highlight lh-sm">
Designing the dungeon
                        </h5>
                        <p className="fs-9 mb-0">
by
                          <a href="#!" className="ms-1">
Jackson Pollock
                          </a>
                        </p>
                      </div>
                      <div className="fs-9">
                        <span className="fa-regular fa-calendar-days text-primary me-2">                        </span>
                        <span className="fw-semibold">
19 September, 2022, 4:39pm 
                        </span>
                      </div>
                    </div>
                    <p className="fs-9 mb-0">
To get off the runway and paradigm shift, we should take brass tacks with above-the-board actionable analytics, ramp up with viral partnering, not the usual goat rodeo putting socks on an octopus. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-bottom border-translucent py-4">
                <div className="d-flex">
                  <div className="d-flex bg-primary-subtle rounded-circle flex-center me-3 bg-warning-subtle" style={{"width":"25px","height":"25px"} as CSSProperties}>
                    <span className="fa-solid text-primary-dark fs-9 fa-phone-alt text-warning-dark">                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="d-flex justify-content-between flex-column flex-xl-row mb-2 mb-sm-0">
                      <div className="flex-1 me-2">
                        <h5 className="text-body-highlight lh-sm">
Purchasing-Related Vendors
                        </h5>
                        <p className="fs-9 mb-0">
by
                          <a href="#!" className="ms-1">
Ansolo Lazinatov
                          </a>
                        </p>
                      </div>
                      <div className="fs-9">
                        <span className="fa-regular fa-calendar-days text-primary me-2">                        </span>
                        <span className="fw-semibold">
22 September, 2022, 4:30pm
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-bottom border-translucent py-4">
                <div className="d-flex">
                  <div className="d-flex bg-primary-subtle rounded-circle flex-center me-3 bg-danger-subtle" style={{"width":"25px","height":"25px"} as CSSProperties}>
                    <span className="fa-solid text-primary-dark fs-9 fa-envelope text-danger-dark">                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="d-flex justify-content-between flex-column flex-xl-row mb-2 mb-sm-0">
                      <div className="flex-1 me-2">
                        <h5 className="text-body-highlight lh-sm">
Quary about purchased soccer socks
                        </h5>
                        <p className="fs-9 mb-0">
by
                          <a href="#!" className="ms-1">
Ansolo Lazinatov
                          </a>
                        </p>
                      </div>
                      <div className="fs-9">
                        <span className="fa-regular fa-calendar-days text-primary me-2">                        </span>
                        <span className="fw-semibold">
15 September, 2022, 3:33pm
                        </span>
                      </div>
                    </div>
                    <p className="fs-9 mb-0">
I’ve come across your posts and found some favorable deals on your page. I’ve added a load of products to the cart and I don’t know the payment options you avail. Also, can you enlighten me about any discount.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <div className="d-flex">
                  <div className="d-flex bg-primary-subtle rounded-circle flex-center me-3 bg-primary-subtle" style={{"width":"25px","height":"25px"} as CSSProperties}>
                    <span className="fa-solid text-primary-dark fs-9 fa-paperclip text-primary-dark">                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="d-flex justify-content-between flex-column flex-xl-row mb-2 mb-sm-0">
                      <div className="flex-1 me-2">
                        <h5 className="text-body-highlight lh-sm">
Added image
                        </h5>
                        <p className="fs-9 mb-0">
by
                          <a href="#!" className="ms-1">
Ansolo Lazinatov
                          </a>
                        </p>
                      </div>
                      <div className="fs-9">
                        <span className="fa-regular fa-calendar-days text-primary me-2">                        </span>
                        <span className="fw-semibold">
11 September, 2022, 12:15am 
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-notes" role="tabpanel" aria-labelledby="notes-tab">
              <h2 className="mb-4">
Notes
              </h2>
              <textarea className="form-control mb-3" id="notes" rows={4} defaultValue="" />
              <div className="row gy-4">
                <div className="col-12 col-xl-auto flex-1">
                  <div className="border-2 border-dashed mb-4 pb-4 border-bottom border-translucent">
                    <p className="mb-1 text-body-highlight">
Gave us a nice feedback
                    </p>
                    <div className="d-flex">
                      <div className="fs-9 text-body-tertiary text-opacity-85">
                        <span className="fa-solid fa-clock me-2">                        </span>
                        <span className="fw-semibold me-1">
clock 12 Nov, 2018
                        </span>
                      </div>
                      <p className="fs-9 mb-0 text-body-tertiary text-opacity-85">
by
                        <a href="#!" className="ms-1 fw-semibold">
Ansolo Lazinatov
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="border-2 border-dashed mb-4 pb-4 border-bottom border-translucent">
                    <p className="mb-1 text-body-highlight">
I also want to let you know that I am available to you as your real estate insider from now on. If you have any questions about the market, even if they sound silly, call or text anytime. 
                    </p>
                    <div className="d-flex">
                      <div className="fs-9 text-body-tertiary text-opacity-85">
                        <span className="fa-solid fa-clock me-2">                        </span>
                        <span className="fw-semibold me-1">
 30 Jan, 2019
                        </span>
                      </div>
                      <p className="fs-9 mb-0 text-body-tertiary text-opacity-85">
by
                        <a href="#!" className="ms-1 fw-semibold">
Ansolo Lazinatov
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="border-2 border-dashed mb-4 pb-4 border-bottom border-translucent">
                    <p className="mb-1 text-body-highlight">
To get off the runway and paradigm shift, we should take brass tacks with above-the-board actionable analytics, ramp up with viral partnering, not the usual goat rodeo putting socks on an octopus. 
                    </p>
                    <div className="d-flex">
                      <div className="fs-9 text-body-tertiary text-opacity-85">
                        <span className="fa-solid fa-clock me-2">                        </span>
                        <span className="fw-semibold me-1">
19 September, 2022, 4:39pm 
                        </span>
                      </div>
                      <p className="fs-9 mb-0 text-body-tertiary text-opacity-85">
by
                        <a href="#!" className="ms-1 fw-semibold">
Jackson Pollock
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="border-2 border-dashed">
                    <p className="mb-1 text-body-highlight">
Utilizing best practices to better leverage our assets, we must engage in black sky leadership thinking, not the usual band-aid solution. 
                    </p>
                    <div className="d-flex">
                      <div className="fs-9 text-body-tertiary text-opacity-85">
                        <span className="fa-solid fa-clock me-2">                        </span>
                        <span className="fw-semibold me-1">
22 September, 2022, 4:30pm
                        </span>
                      </div>
                      <p className="fs-9 mb-0 text-body-tertiary text-opacity-85">
by
                        <a href="#!" className="ms-1 fw-semibold">
Ansolo Lazinatov
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-meeting" role="tabpanel" aria-labelledby="meeting-tab">
              <h2 className="mb-4">
Meeting
              </h2>
              <div className="row align-items-center g-2 flex-wrap justify-content-start mb-3">
                <div className="col-12 col-sm-auto">
                  <div className="search-box mb-2 mb-sm-0">
                    <form className="position-relative">
                      <input className="form-control search-input search" type="search" placeholder="Search meeting" aria-label="Search" />
                      <span className="fas fa-search search-box-icon">                      </span>
                    </form>
                  </div>
                </div>
                <div className="col-auto d-flex flex-md-grow-1">
                  <p className="mb-0 fs-9 text-body-tertiary fw-bold">
                    <span className="fas fa-filter me-1 fw-extra-bold fs-10">                    </span>
23 tasks
                  </p>
                  <button className="btn btn-link p-0 ms-3 fs-9 text-primary fw-bold text-decoration-none">
                    <span className="fas fa-sort me-1 fw-extra-bold fs-10">                    </span>
Sorting
                  </button>
                </div>
                <div className="col-auto">
                  <button className="btn btn-primary">
                    <span className="fa-solid fa-plus me-2">                    </span>
Add Meeting 
                  </button>
                </div>
              </div>
              <div className="row g-3">
                <div className="col-xxl-6">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start flex-wrap mb-4 gap-2">
                        <div className="mb-3 mb-sm-0">
                          <h4 className="line-clamp-1 mb-2 mb-sm-1">
Onboarding Meeting
                          </h4>
                          <div>
                            <span className="uil uil-calendar-alt text-primary me-2">                            </span>
                            <span className="fw-semibold text-body-secondary fs-9">
5:30 pm
                            </span>
                            <span className="text-body-tertiary text-opacity-85">
 to 
                            </span>
                            <span className="fw-semibold text-body-secondary fs-9">
7:00pm
                            </span>
                            <span className="text-body-secondary fs-9">
 - 1h 30min
                            </span>
                          </div>
                        </div>
                        <div className="avatar-group avatar-group-dense">
                          <div className="avatar avatar-s  rounded-circle">
                            <PhoenixImage src="/assets/img/team/9.webp" alt="" className="rounded-circle " />
                          </div>
                          <div className="avatar avatar-s  rounded-circle">
                            <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle " />
                          </div>
                          <div className="avatar avatar-s  rounded-circle">
                            <PhoenixImage src="/assets/img/team/32.webp" alt="" className="rounded-circle " />
                          </div>
                          <div className="avatar avatar-s  rounded-circle">
                            <PhoenixImage src="/assets/img/team/35.webp" alt="" className="rounded-circle " />
                          </div>
                          <div className="avatar avatar-s  rounded-circle">
                            <div className="avatar-name rounded-circle ">
                              <span>
+1
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="badge badge-phoenix me-2 badge-phoenix-primary ">
today
                        </span>
                        <div className="d-flex align-items-center flex-1">
                          <span className="fa-solid fa-circle me-1 text-danger" data-fa-transform={"shrink-6 up-1"}>                          </span>
                          <span className="fw-bold fs-9 text-body">
Urgent
                          </span>
                        </div>
                        <button className="btn btn-phoenix-primary">
                          <span className="fa-solid fa-video me-2 d-none d-sm-inline-block">                          </span>
Join
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start flex-wrap mb-4 gap-2">
                        <div className="mb-3 mb-sm-0">
                          <h4 className="line-clamp-1 mb-2 mb-sm-1">
Agile Mindset Meetup
                          </h4>
                          <div>
                            <span className="uil uil-calendar-alt text-primary me-2">                            </span>
                            <span className="fw-semibold text-body-secondary fs-9">
4:30 pm
                            </span>
                            <span className="text-body-tertiary text-opacity-85">
 to 
                            </span>
                            <span className="fw-semibold text-body-secondary fs-9">
6:00pm
                            </span>
                            <span className="text-body-secondary fs-9">
 - 1h 30min
                            </span>
                          </div>
                        </div>
                        <div className="avatar-group avatar-group-dense">
                          <div className="avatar avatar-s  rounded-circle">
                            <PhoenixImage src="/assets/img/team/11.webp" alt="" className="rounded-circle " />
                          </div>
                          <div className="avatar avatar-s  rounded-circle">
                            <PhoenixImage src="/assets/img/team/26.webp" alt="" className="rounded-circle " />
                          </div>
                          <div className="avatar avatar-s  rounded-circle">
                            <PhoenixImage src="/assets/img/team/33.webp" alt="" className="rounded-circle " />
                          </div>
                          <div className="avatar avatar-s  rounded-circle">
                            <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                          </div>
                          <div className="avatar avatar-s  rounded-circle">
                            <div className="avatar-name rounded-circle ">
                              <span>
+1
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="badge badge-phoenix me-2 badge-phoenix-warning">
tomorrow
                        </span>
                        <div className="d-flex align-items-center flex-1">
                          <span className="fa-solid fa-circle me-1 text-success" data-fa-transform={"shrink-6 up-1"}>                          </span>
                          <span className="fw-bold fs-9 text-body">
Medium
                          </span>
                        </div>
                        <button className="btn btn-phoenix-primary">
                          <span className="fa-solid fa-video me-2 d-none d-sm-inline-block">                          </span>
Join
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start flex-wrap mb-4 gap-2">
                        <div className="mb-3 mb-sm-0">
                          <h4 className="line-clamp-1 mb-2 mb-sm-1">
Meeting Fundamentals
                          </h4>
                          <div>
                            <span className="uil uil-calendar-alt text-primary me-2">                            </span>
                            <span className="fw-semibold text-body-secondary fs-9">
6:00 pm
                            </span>
                            <span className="text-body-tertiary text-opacity-85">
 to 
                            </span>
                            <span className="fw-semibold text-body-secondary fs-9">
7:20pm
                            </span>
                            <span className="text-body-secondary fs-9">
 - 1h 20min
                            </span>
                          </div>
                        </div>
                        <div className="avatar-group avatar-group-dense">
                          <div className="avatar avatar-s  rounded-circle">
                            <div className="avatar-name rounded-circle">
                              <span>
R
                              </span>
                            </div>
                          </div>
                          <div className="avatar avatar-s  rounded-circle">
                            <PhoenixImage src="/assets/img/team/12.webp" alt="" className="rounded-circle " />
                          </div>
                          <div className="avatar avatar-s  rounded-circle">
                            <PhoenixImage src="/assets/img/team/28.webp" alt="" className="rounded-circle " />
                          </div>
                          <div className="avatar avatar-s  rounded-circle">
                            <PhoenixImage src="/assets/img/team/22.webp" alt="" className="rounded-circle " />
                          </div>
                          <div className="avatar avatar-s  rounded-circle">
                            <div className="avatar-name rounded-circle ">
                              <span>
+2
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="badge badge-phoenix me-2 badge-phoenix-warning">
tomorrow
                        </span>
                        <div className="d-flex align-items-center flex-1">
                          <span className="fa-solid fa-circle me-1 text-warning" data-fa-transform={"shrink-6 up-1"}>                          </span>
                          <span className="fw-bold fs-9 text-body">
High
                          </span>
                        </div>
                        <button className="btn btn-phoenix-primary">
                          <span className="fa-solid fa-video me-2 d-none d-sm-inline-block">                          </span>
Join
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6">
                  <div className="card h-100">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start flex-wrap mb-4 gap-2">
                        <div className="mb-3 mb-sm-0">
                          <h4 className="line-clamp-1 mb-2 mb-sm-1">
Design System Meeting
                          </h4>
                          <div>
                            <span className="uil uil-calendar-alt text-primary me-2">                            </span>
                            <span className="fw-semibold text-body-secondary fs-9">
7:30 pm
                            </span>
                            <span className="text-body-tertiary text-opacity-85">
 to 
                            </span>
                            <span className="fw-semibold text-body-secondary fs-9">
8:45pm
                            </span>
                            <span className="text-body-secondary fs-9">
 - 1h 45min
                            </span>
                          </div>
                        </div>
                        <div className="avatar-group avatar-group-dense">
                          <div className="avatar avatar-s  rounded-circle">
                            <PhoenixImage src="/assets/img/team/13.webp" alt="" className="rounded-circle " />
                          </div>
                          <div className="avatar avatar-s  rounded-circle">
                            <PhoenixImage src="/assets/img/team/24.webp" alt="" className="rounded-circle " />
                          </div>
                          <div className="avatar avatar-s  rounded-circle">
                            <PhoenixImage src="/assets/img/team/62.webp" alt="" className="rounded-circle " />
                          </div>
                          <div className="avatar avatar-s  rounded-circle">
                            <PhoenixImage src="/assets/img/team/34.webp" alt="" className="rounded-circle " />
                          </div>
                          <div className="avatar avatar-s  rounded-circle">
                            <div className="avatar-name rounded-circle ">
                              <span>
+4
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="badge badge-phoenix me-2 badge-phoenix-warning">
tomorrow
                        </span>
                        <div className="d-flex align-items-center flex-1">
                          <span className="fa-solid fa-circle me-1 text-info" data-fa-transform={"shrink-6 up-1"}>                          </span>
                          <span className="fw-bold fs-9 text-body">
Low
                          </span>
                        </div>
                        <button className="btn btn-phoenix-primary">
                          <span className="fa-solid fa-video me-2 d-none d-sm-inline-block">                          </span>
Join
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-task" role="tabpanel" aria-labelledby="task-tab">
              <h2 className="mb-4">
Tasks
              </h2>
              <div className="row align-items-center g-0 justify-content-start mb-3">
                <div className="col-12 col-sm-auto">
                  <div className="search-box w-100 mb-2 mb-sm-0" style={{"maxWidth":"30rem"} as CSSProperties}>
                    <form className="position-relative">
                      <input className="form-control search-input search" type="search" placeholder="Search tasks" aria-label="Search" />
                      <span className="fas fa-search search-box-icon">                      </span>
                    </form>
                  </div>
                </div>
                <div className="col-auto d-flex">
                  <p className="mb-0 ms-sm-3 fs-9 text-body-tertiary fw-bold">
                    <span className="fas fa-filter me-1 fw-extra-bold fs-10">                    </span>
23 tasks
                  </p>
                  <button className="btn btn-link p-0 ms-3 fs-9 text-primary fw-bold">
                    <span className="fas fa-sort me-1 fw-extra-bold fs-10">                    </span>
Sorting
                  </button>
                </div>
              </div>
              <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 border-top">
                <div className="col-12 col-lg-auto flex-1">
                  <div data-todo-offcanvas-toogle data-todo-offcanvas-target={"todoOffcanvas-1"}>
                    <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                      <input className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-0" />
                      <label className="form-check-label mb-0 fs-8 me-2 line-clamp-1" htmlFor="checkbox-todo-0">
Platforms for data administration
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-auto">
                  <div className="d-flex ms-4 lh-1 align-items-center">
                    <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-lg-3 mb-0">
19 Nov, 2022
                    </p>
                    <div className="d-none d-lg-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties}>
                      <div className="hover-actions end-0">
                        <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1">
                          <span className="fas fa-edit">                          </span>
                        </button>
                        <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                          <span className="fas fa-trash">                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="hover-lg-hide">
                      <p className="text-body-tertiary fs-10 ps-lg-3 border-start-lg fw-bold mb-md-0 mb-0">
11:56 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 border-top">
                <div className="col-12 col-lg-auto flex-1">
                  <div data-todo-offcanvas-toogle data-todo-offcanvas-target={"todoOffcanvas-2"}>
                    <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                      <input className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-1" />
                      <label className="form-check-label mb-0 fs-8 me-2 line-clamp-1" htmlFor="checkbox-todo-1">
Make wiser business choices.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-auto">
                  <div className="d-flex ms-4 lh-1 align-items-center">
                    <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-lg-3 mb-0">
05 Nov, 2022
                    </p>
                    <div className="d-none d-lg-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties}>
                      <div className="hover-actions end-0">
                        <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1">
                          <span className="fas fa-edit">                          </span>
                        </button>
                        <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                          <span className="fas fa-trash">                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="hover-lg-hide">
                      <p className="text-body-tertiary fs-10 ps-lg-3 border-start-lg fw-bold mb-md-0 mb-0">
09:30 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 border-top">
                <div className="col-12 col-lg-auto flex-1">
                  <div data-todo-offcanvas-toogle data-todo-offcanvas-target={"todoOffcanvas-3"}>
                    <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                      <input className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-2" />
                      <label className="form-check-label mb-0 fs-8 me-2 line-clamp-1" htmlFor="checkbox-todo-2">
Market and consumer insights
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-auto">
                  <div className="d-flex ms-4 lh-1 align-items-center">
                    <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-lg-3 mb-0">
02 Nov, 2022
                    </p>
                    <div className="d-none d-lg-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties}>
                      <div className="hover-actions end-0">
                        <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1">
                          <span className="fas fa-edit">                          </span>
                        </button>
                        <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                          <span className="fas fa-trash">                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="hover-lg-hide">
                      <p className="text-body-tertiary fs-10 ps-lg-3 border-start-lg fw-bold mb-md-0 mb-0">
05:25 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 border-top">
                <div className="col-12 col-lg-auto flex-1">
                  <div data-todo-offcanvas-toogle data-todo-offcanvas-target={"todoOffcanvas-4"}>
                    <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                      <input className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-3" />
                      <label className="form-check-label mb-0 fs-8 me-2 line-clamp-1" htmlFor="checkbox-todo-3">
Dashboards for business insights
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-auto">
                  <div className="d-flex ms-4 lh-1 align-items-center">
                    <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-lg-3 mb-0">
29 Oct, 2022
                    </p>
                    <div className="d-none d-lg-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties}>
                      <div className="hover-actions end-0">
                        <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1">
                          <span className="fas fa-edit">                          </span>
                        </button>
                        <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                          <span className="fas fa-trash">                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="hover-lg-hide">
                      <p className="text-body-tertiary fs-10 ps-lg-3 border-start-lg fw-bold mb-md-0 mb-0">
08:21 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 border-top">
                <div className="col-12 col-lg-auto flex-1">
                  <div data-todo-offcanvas-toogle data-todo-offcanvas-target={"todoOffcanvas-5"}>
                    <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                      <input className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-4" defaultChecked />
                      <label className="form-check-label mb-0 fs-8 me-2 line-clamp-1" htmlFor="checkbox-todo-4">
Analytics and consultancy for data
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-auto">
                  <div className="d-flex ms-4 lh-1 align-items-center">
                    <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-lg-3 mb-0">
21 Oct, 2022
                    </p>
                    <div className="d-none d-lg-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties}>
                      <div className="hover-actions end-0">
                        <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1">
                          <span className="fas fa-edit">                          </span>
                        </button>
                        <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                          <span className="fas fa-trash">                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="hover-lg-hide">
                      <p className="text-body-tertiary fs-10 ps-lg-3 border-start-lg fw-bold mb-md-0 mb-0">
03:45 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 border-top">
                <div className="col-12 col-lg-auto flex-1">
                  <div data-todo-offcanvas-toogle data-todo-offcanvas-target={"todoOffcanvas-6"}>
                    <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                      <input className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-5" defaultChecked />
                      <label className="form-check-label mb-0 fs-8 me-2 line-clamp-1" htmlFor="checkbox-todo-5">
Planning your locations Customer data platform
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-auto">
                  <div className="d-flex ms-4 lh-1 align-items-center">
                    <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-lg-3 mb-0">
14 Oct, 2022
                    </p>
                    <div className="d-none d-lg-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties}>
                      <div className="hover-actions end-0">
                        <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1">
                          <span className="fas fa-edit">                          </span>
                        </button>
                        <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                          <span className="fas fa-trash">                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="hover-lg-hide">
                      <p className="text-body-tertiary fs-10 ps-lg-3 border-start-lg fw-bold mb-md-0 mb-0">
10:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 border-top">
                <div className="col-12 col-lg-auto flex-1">
                  <div data-todo-offcanvas-toogle data-todo-offcanvas-target={"todoOffcanvas-7"}>
                    <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                      <input className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-6" defaultChecked />
                      <label className="form-check-label mb-0 fs-8 me-2 line-clamp-1" htmlFor="checkbox-todo-6">
Promotion of technology
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-auto">
                  <div className="d-flex ms-4 lh-1 align-items-center">
                    <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-lg-3 mb-0">
12 Oct, 2022
                    </p>
                    <div className="d-none d-lg-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties}>
                      <div className="hover-actions end-0">
                        <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1">
                          <span className="fas fa-edit">                          </span>
                        </button>
                        <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                          <span className="fas fa-trash">                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="hover-lg-hide">
                      <p className="text-body-tertiary fs-10 ps-lg-3 border-start-lg fw-bold mb-md-0 mb-0">
02:00 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#!" className="fw-bold fs-9 mt-4">
                <span className="fas fa-plus me-1">                </span>Add new task
              </a>
            </div>
            <div className="tab-pane fade" id="tab-call" role="tabpanel" aria-labelledby="call-tab">
              <div className="row align-items-center gx-4 gy-3 flex-wrap mb-3">
                <div className="col-auto d-flex flex-1">
                  <h2 className="mb-0">
Call
                  </h2>
                </div>
                <div className="col-auto">
                  <div className="d-flex gap-3 gap-sm-4">
                    <div className="form-check">
                      <input className="form-check-input" id="allCall" type="radio" name="allCall" defaultChecked />
                      <label className="form-check-label" htmlFor="allCall">
All Call
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" id="incomingCall" type="radio" name="allCall" />
                      <label className="form-check-label" htmlFor="incomingCall">
Incoming Call
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" id="outgoingCall" type="radio" name="allCall" />
                      <label className="form-check-label" htmlFor="outgoingCall">
OutgoingCall
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <button className="btn btn-primary">
                    <span className="fa-solid fa-plus me-2">                    </span>
Add Call
                  </button>
                </div>
              </div>
              <div className="border-top border-bottom border-translucent" id="leadDetailsTable" data-list={"{\"valueNames\":[\"name\",\"description\",\"create_date\",\"create_by\",\"last_activity\"],\"page\":5,\"pagination\":true}"}>
                <div className="table-responsive scrollbar mx-n1 px-1">
                  <table className="table fs-9 mb-0">
                    <thead>
                      <tr>
                        <th className="white-space-nowrap fs-9 align-middle ps-0" style={{"width":"26px"} as CSSProperties}>
                          <div className="form-check mb-0 fs-8">
                            <input className="form-check-input" type="checkbox" data-bulk-select={"{\"body\":\"lead-details-table-body\"}"} />
                          </div>
                        </th>
                        <th className="sort white-space-nowrap align-middle pe-3 ps-0 text-uppercase" scope="col" data-sort={"name"} style={{"width":"20%","minWidth":"100px"} as CSSProperties}>
Name
                        </th>
                        <th className="sort align-middle pe-6 text-uppercase" scope="col" data-sort={"description"} style={{"width":"20%","maxWidth":"60px"} as CSSProperties}>
description
                        </th>
                        <th className="sort align-middle text-start text-uppercase" scope="col" data-sort={"create_date"} style={{"width":"20%","minWidth":"115px"} as CSSProperties}>
create date
                        </th>
                        <th className="sort align-middle text-start text-uppercase" scope="col" data-sort={"create_by"} style={{"width":"20%","minWidth":"150px"} as CSSProperties}>
create by
                        </th>
                        <th className="sort align-middle ps-0 text-end text-uppercase" scope="col" data-sort={"last_activity"} style={{"width":"20%","maxWidth":"115px"} as CSSProperties}>
Last Activity
                        </th>
                        <th className="align-middle pe-0 text-end" scope="col" style={{"width":"15%"} as CSSProperties}>                        </th>
                      </tr>
                    </thead>
                    <tbody className="list" id="lead-details-table-body"><tr className="hover-actions-trigger btn-reveal-trigger position-static">
                        <td className="fs-9 align-middle px-0 py-3">
                          <div className="form-check mb-0 fs-8">
                            <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"Name\":{\"avatar\":\"/team/35.webp\",\"name\":\"Ansolo Lazinatov\",\"status\":\"online\"},\"description\":\"Purchasing-Related Vendors\",\"date\":\"Dec 29, 2021\",\"creatBy\":\"Ansolo Lazinarov\",\"lastActivity\":{\"iconColor\":\"text-success\",\"label\":\"Active\"}}"} />
                          </div>
                        </td>
                        <td className="name align-middle white-space-nowrap py-2 ps-0">
                          <a href="#!" className="d-flex align-items-center text-body-highlight">
                            <div className="avatar avatar-m me-3 status-online">
                              <PhoenixImage src="/assets/img/team/35.webp" alt="" className="rounded-circle" />
                            </div>                            <h6 className="mb-0 text-body-highlight fw-bold">
Ansolo Lazinatov
                            </h6>
                          </a>
                        </td>
                        <td className="description align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2 pe-6">
Purchasing-Related Vendors
                        </td>
                        <td className="create_date text-end align-middle white-space-nowrap text-body py-2">
Dec 29, 2021
                        </td>
                        <td className="create_by align-middle white-space-nowrap fw-semibold text-body-highlight">
Ansolo Lazinarov
                        </td>
                        <td className="last_activity align-middle text-center py-2">
                          <div className="d-flex align-items-center flex-1">
                            <span className="fa-solid fa-clock me-1 text-success" data-fa-transform={"shrink-2 up-1"}>                            </span>
                            <span className="fw-bold fs-9 text-body">
Active
                            </span>
                          </div>
                        </td>
                        <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                          <div className="btn-reveal-trigger position-static">
                            <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                              <span className="fas fa-ellipsis-h fs-10">                              </span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-2">
                              <a href="#!" className="dropdown-item">
View
                              </a>
                              <a href="#!" className="dropdown-item">
Export
                              </a>
                              <div className="dropdown-divider">                              </div>
                              <a href="#!" className="dropdown-item text-danger">
Remove
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle px-0 py-3">
                          <div className="form-check mb-0 fs-8">
                            <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"Name\":{\"avatar\":\"/team/9.webp\",\"name\":\"Jackson Pollock\",\"status\":\"offline\"},\"description\":\"Based on emails sent rate, the top 10 users\",\"date\":\"Mar 27, 2021\",\"creatBy\":\"Jackson Pollock\",\"lastActivity\":{\"iconColor\":\"text-body-quaternary\",\"label\":\"6 hours ago\"}}"} />
                          </div>
                        </td>
                        <td className="name align-middle white-space-nowrap py-2 ps-0">
                          <a href="#!" className="d-flex align-items-center text-body-highlight">
                            <div className="avatar avatar-m me-3 status-offline">
                              <PhoenixImage src="/assets/img/team/9.webp" alt="" className="rounded-circle" />
                            </div>                            <h6 className="mb-0 text-body-highlight fw-bold">
Jackson Pollock
                            </h6>
                          </a>
                        </td>
                        <td className="description align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2 pe-6">
Based on emails sent rate, the top 10 users
                        </td>
                        <td className="create_date text-end align-middle white-space-nowrap text-body py-2">
Mar 27, 2021
                        </td>
                        <td className="create_by align-middle white-space-nowrap fw-semibold text-body-highlight">
Jackson Pollock
                        </td>
                        <td className="last_activity align-middle text-center py-2">
                          <div className="d-flex align-items-center flex-1">
                            <span className="fa-solid fa-clock me-1 text-body-quaternary" data-fa-transform={"shrink-2 up-1"}>                            </span>
                            <span className="fw-bold fs-9 text-body">
6 hours ago
                            </span>
                          </div>
                        </td>
                        <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                          <div className="btn-reveal-trigger position-static">
                            <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                              <span className="fas fa-ellipsis-h fs-10">                              </span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-2">
                              <a href="#!" className="dropdown-item">
View
                              </a>
                              <a href="#!" className="dropdown-item">
Export
                              </a>
                              <div className="dropdown-divider">                              </div>
                              <a href="#!" className="dropdown-item text-danger">
Remove
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle px-0 py-3">
                          <div className="form-check mb-0 fs-8">
                            <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"Name\":{\"avatar\":\"/team/35.webp\",\"name\":\"Ansolo Lazinatov\",\"status\":\"online\"},\"description\":\"Based on the percentage of recipients\",\"date\":\"Jun 24, 2021\",\"creatBy\":\"Ansolo Lazinarov\",\"lastActivity\":{\"iconColor\":\"text-success\",\"label\":\"Active\"}}"} />
                          </div>
                        </td>
                        <td className="name align-middle white-space-nowrap py-2 ps-0">
                          <a href="#!" className="d-flex align-items-center text-body-highlight">
                            <div className="avatar avatar-m me-3 status-online">
                              <PhoenixImage src="/assets/img/team/35.webp" alt="" className="rounded-circle" />
                            </div>                            <h6 className="mb-0 text-body-highlight fw-bold">
Ansolo Lazinatov
                            </h6>
                          </a>
                        </td>
                        <td className="description align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2 pe-6">
Based on the percentage of recipients
                        </td>
                        <td className="create_date text-end align-middle white-space-nowrap text-body py-2">
Jun 24, 2021
                        </td>
                        <td className="create_by align-middle white-space-nowrap fw-semibold text-body-highlight">
Ansolo Lazinarov
                        </td>
                        <td className="last_activity align-middle text-center py-2">
                          <div className="d-flex align-items-center flex-1">
                            <span className="fa-solid fa-clock me-1 text-success" data-fa-transform={"shrink-2 up-1"}>                            </span>
                            <span className="fw-bold fs-9 text-body">
Active
                            </span>
                          </div>
                        </td>
                        <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                          <div className="btn-reveal-trigger position-static">
                            <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                              <span className="fas fa-ellipsis-h fs-10">                              </span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-2">
                              <a href="#!" className="dropdown-item">
View
                              </a>
                              <a href="#!" className="dropdown-item">
Export
                              </a>
                              <div className="dropdown-divider">                              </div>
                              <a href="#!" className="dropdown-item text-danger">
Remove
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle px-0 py-3">
                          <div className="form-check mb-0 fs-8">
                            <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"Name\":{\"avatar\":\"/team/9.webp\",\"name\":\"Jackson Pollock\",\"status\":\"offline\"},\"description\":\"Obtaining leads today\",\"date\":\"May 19, 2024\",\"creatBy\":\"Jackson Pollock\",\"lastActivity\":{\"iconColor\":\"text-body-quaternary\",\"label\":\"6 hours ago\"}}"} />
                          </div>
                        </td>
                        <td className="name align-middle white-space-nowrap py-2 ps-0">
                          <a href="#!" className="d-flex align-items-center text-body-highlight">
                            <div className="avatar avatar-m me-3 status-offline">
                              <PhoenixImage src="/assets/img/team/9.webp" alt="" className="rounded-circle" />
                            </div>                            <h6 className="mb-0 text-body-highlight fw-bold">
Jackson Pollock
                            </h6>
                          </a>
                        </td>
                        <td className="description align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2 pe-6">
Obtaining leads today
                        </td>
                        <td className="create_date text-end align-middle white-space-nowrap text-body py-2">
May 19, 2024
                        </td>
                        <td className="create_by align-middle white-space-nowrap fw-semibold text-body-highlight">
Jackson Pollock
                        </td>
                        <td className="last_activity align-middle text-center py-2">
                          <div className="d-flex align-items-center flex-1">
                            <span className="fa-solid fa-clock me-1 text-body-quaternary" data-fa-transform={"shrink-2 up-1"}>                            </span>
                            <span className="fw-bold fs-9 text-body">
6 hours ago
                            </span>
                          </div>
                        </td>
                        <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                          <div className="btn-reveal-trigger position-static">
                            <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                              <span className="fas fa-ellipsis-h fs-10">                              </span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-2">
                              <a href="#!" className="dropdown-item">
View
                              </a>
                              <a href="#!" className="dropdown-item">
Export
                              </a>
                              <div className="dropdown-divider">                              </div>
                              <a href="#!" className="dropdown-item text-danger">
Remove
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle px-0 py-3">
                          <div className="form-check mb-0 fs-8">
                            <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"Name\":{\"avatar\":\"/team/35.webp\",\"name\":\"Ansolo Lazinatov\",\"status\":\"online\"},\"description\":\"Sums up the many phases of new and existing businesses.\",\"date\":\"Aug 19, 2024\",\"creatBy\":\"Ansolo Lazinarov\",\"lastActivity\":{\"iconColor\":\"text-success\",\"label\":\"Active\"}}"} />
                          </div>
                        </td>
                        <td className="name align-middle white-space-nowrap py-2 ps-0">
                          <a href="#!" className="d-flex align-items-center text-body-highlight">
                            <div className="avatar avatar-m me-3 status-online">
                              <PhoenixImage src="/assets/img/team/35.webp" alt="" className="rounded-circle" />
                            </div>                            <h6 className="mb-0 text-body-highlight fw-bold">
Ansolo Lazinatov
                            </h6>
                          </a>
                        </td>
                        <td className="description align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2 pe-6">
Sums up the many phases of new and existing businesses.
                        </td>
                        <td className="create_date text-end align-middle white-space-nowrap text-body py-2">
Aug 19, 2024
                        </td>
                        <td className="create_by align-middle white-space-nowrap fw-semibold text-body-highlight">
Ansolo Lazinarov
                        </td>
                        <td className="last_activity align-middle text-center py-2">
                          <div className="d-flex align-items-center flex-1">
                            <span className="fa-solid fa-clock me-1 text-success" data-fa-transform={"shrink-2 up-1"}>                            </span>
                            <span className="fw-bold fs-9 text-body">
Active
                            </span>
                          </div>
                        </td>
                        <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                          <div className="btn-reveal-trigger position-static">
                            <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                              <span className="fas fa-ellipsis-h fs-10">                              </span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-2">
                              <a href="#!" className="dropdown-item">
View
                              </a>
                              <a href="#!" className="dropdown-item">
Export
                              </a>
                              <div className="dropdown-divider">                              </div>
                              <a href="#!" className="dropdown-item text-danger">
Remove
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle px-0 py-3">
                          <div className="form-check mb-0 fs-8">
                            <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"Name\":{\"avatar\":\"/team/35.webp\",\"name\":\"Ansolo Lazinatov\",\"status\":\"online\"},\"description\":\"Purchasing-Related Vendors\",\"date\":\"Aug 19, 2024\",\"creatBy\":\"Ansolo Lazinarov\",\"lastActivity\":{\"iconColor\":\"text-success\",\"label\":\"Active\"}}"} />
                          </div>
                        </td>
                        <td className="name align-middle white-space-nowrap py-2 ps-0">
                          <a href="#!" className="d-flex align-items-center text-body-highlight">
                            <div className="avatar avatar-m me-3 status-online">
                              <PhoenixImage src="/assets/img/team/35.webp" alt="" className="rounded-circle" />
                            </div>                            <h6 className="mb-0 text-body-highlight fw-bold">
Ansolo Lazinatov
                            </h6>
                          </a>
                        </td>
                        <td className="description align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2 pe-6">
Purchasing-Related Vendors
                        </td>
                        <td className="create_date text-end align-middle white-space-nowrap text-body py-2">
Aug 19, 2024
                        </td>
                        <td className="create_by align-middle white-space-nowrap fw-semibold text-body-highlight">
Ansolo Lazinarov
                        </td>
                        <td className="last_activity align-middle text-center py-2">
                          <div className="d-flex align-items-center flex-1">
                            <span className="fa-solid fa-clock me-1 text-success" data-fa-transform={"shrink-2 up-1"}>                            </span>
                            <span className="fw-bold fs-9 text-body">
Active
                            </span>
                          </div>
                        </td>
                        <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                          <div className="btn-reveal-trigger position-static">
                            <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                              <span className="fas fa-ellipsis-h fs-10">                              </span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-2">
                              <a href="#!" className="dropdown-item">
View
                              </a>
                              <a href="#!" className="dropdown-item">
Export
                              </a>
                              <div className="dropdown-divider">                              </div>
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
                    <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info>                    </p>
                    <a href="#!" className="fw-semibold"  data-list-view={"*"}>
View all                      <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                      </span>
                    </a>
                    <a href="#!" className="fw-semibold d-none"  data-list-view={"less"}>
View Less                      <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                      </span>
                    </a>
                  </div>
                  <div className="col-auto d-flex">
                    <button className="page-link" data-list-pagination={"prev"}>
                      <span className="fas fa-chevron-left">                      </span>
                    </button>
                    <ul className="mb-0 pagination">                    </ul>
                    <button className="page-link pe-0" data-list-pagination={"next"}>
                      <span className="fas fa-chevron-right">                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-emails" role="tabpanel" aria-labelledby="emails-tab">
              <h2 className="mb-4">
Emails
              </h2>
              <div>
                <div className="scrollbar">
                  <ul className="nav nav-underline fs-9 flex-nowrap mb-1" id="emailTab" role="tablist">
                    <li className="nav-item me-3">
                      <a href="#tab-mail" className="nav-link text-nowrap border-0 active" id="mail-tab" data-bs-toggle={"tab"}  aria-controls="mail-tab" role="tab" aria-selected="true">
Mails (68)                        <span className="text-body-tertiary fw-normal">                        </span>
                      </a>
                    </li>
                    <li className="nav-item me-3">
                      <a href="#tab-drafts" className="nav-link text-nowrap border-0" id="drafts-tab" data-bs-toggle={"tab"}  aria-controls="drafts-tab" role="tab" aria-selected="true">
Drafts (6)                        <span className="text-body-tertiary fw-normal">                        </span>
                      </a>
                    </li>
                    <li className="nav-item me-3">
                      <a href="#tab-schedule" className="nav-link text-nowrap border-0" id="schedule-tab" data-bs-toggle={"tab"}  aria-controls="schedule-tab" role="tab" aria-selected="true">
Scheduled (17)
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="search-box w-100 mb-3">
                  <form className="position-relative">
                    <input className="form-control search-input search" type="search" placeholder="Search..." aria-label="Search" />
                    <span className="fas fa-search search-box-icon">                    </span>
                  </form>
                </div>
                <div className="tab-content" id="profileTabContent">
                  <div className="tab-pane fade show active" id="tab-mail" role="tabpanel" aria-labelledby="mail-tab">
                    <div className="border-top border-bottom border-translucent" id="allEmailsTable" data-list={"{\"valueNames\":[\"subject\",\"sent\",\"date\",\"source\",\"status\"],\"page\":7,\"pagination\":true}"}>
                      <div className="table-responsive scrollbar mx-n1 px-1">
                        <table className="table fs-9 mb-0">
                          <thead>
                            <tr>
                              <th className="white-space-nowrap fs-9 align-middle ps-0" style={{"width":"26px"} as CSSProperties}>
                                <div className="form-check mb-0 fs-8">
                                  <input className="form-check-input" type="checkbox" data-bulk-select={"{\"body\":\"all-email-table-body\"}"} />
                                </div>
                              </th>
                              <th className="sort white-space-nowrap align-middle pe-3 ps-0 text-uppercase" scope="col" data-sort={"subject"} style={{"width":"31%","minWidth":"350px"} as CSSProperties}>
Subject
                              </th>
                              <th className="sort align-middle pe-3 text-uppercase" scope="col" data-sort={"sent"} style={{"width":"15%","minWidth":"130px"} as CSSProperties}>
Sent by
                              </th>
                              <th className="sort align-middle text-start text-uppercase" scope="col" data-sort={"date"} style={{"minWidth":"165px"} as CSSProperties}>
Date
                              </th>
                              <th className="sort align-middle pe-0 text-uppercase" scope="col" style={{"width":"15%","minWidth":"100px"} as CSSProperties}>
Action
                              </th>
                              <th className="sort align-middle text-end text-uppercase" scope="col" data-sort={"status"} style={{"width":"15%","minWidth":"100px"} as CSSProperties}>
Status
                              </th>
                            </tr>
                          </thead>
                          <tbody className="list" id="all-email-table-body"><tr className="hover-actions-trigger btn-reveal-trigger position-static">
                              <td className="fs-9 align-middle px-0 py-3">
                                <div className="form-check mb-0 fs-8">
                                  <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"mail\":{\"subject\":\"Quary about purchased soccer socks\",\"email\":\"jackson@mail.com\"},\"active\":true,\"sent\":\"Jackson Pollock\",\"date\":\"Dec 29, 2021 10:23 am\",\"source\":\"Call\",\"type_status\":{\"label\":\"sent\",\"type\":\"badge-phoenix-success\"}}"} />
                                </div>
                              </td>
                              <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                <a href="#!" className="fw-semibold text-primary">
Quary about purchased soccer socks
                                </a>
                                <div className="fs-10 d-block">
jackson@mail.com
                                </div>
                              </td>
                              <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
Jackson Pollock
                              </td>
                              <td className="date align-middle white-space-nowrap text-body py-2">
Dec 29, 2021 10:23 am
                              </td>
                              <td className="align-middle white-space-nowrap ps-3">
                                <a href="#!" className="text-body">
                                  <span className="fa-solid fa-phone text-primary me-2">                                  </span>Call
                                </a>
                              </td>
                              <td className="status align-middle fw-semibold text-end py-2">
                                <span className="badge badge-phoenix fs-10 badge-phoenix-success">
sent
                                </span>
                              </td>
                            </tr>
                            <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle px-0 py-3">
                                <div className="form-check mb-0 fs-8">
                                  <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"mail\":{\"subject\":\"How to take the headache out of Order\",\"email\":\"ansolo45@mail.com\"},\"active\":true,\"sent\":\"Ansolo Lazinatov\",\"date\":\"Dec 27, 2021 3:27 pm\",\"source\":\"Call\",\"type_status\":{\"label\":\"delivered\",\"type\":\"badge-phoenix-info\"}}"} />
                                </div>
                              </td>
                              <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                <a href="#!" className="fw-semibold text-primary">
How to take the headache out of Order
                                </a>
                                <div className="fs-10 d-block">
ansolo45@mail.com
                                </div>
                              </td>
                              <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
Ansolo Lazinatov
                              </td>
                              <td className="date align-middle white-space-nowrap text-body py-2">
Dec 27, 2021 3:27 pm
                              </td>
                              <td className="align-middle white-space-nowrap ps-3">
                                <a href="#!" className="text-body">
                                  <span className="fa-solid fa-phone text-primary me-2">                                  </span>Call
                                </a>
                              </td>
                              <td className="status align-middle fw-semibold text-end py-2">
                                <span className="badge badge-phoenix fs-10 badge-phoenix-info">
delivered
                                </span>
                              </td>
                            </tr>
                            <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle px-0 py-3">
                                <div className="form-check mb-0 fs-8">
                                  <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"mail\":{\"subject\":\"The Arnold Schwarzenegger of Order\",\"email\":\"ansolo45@mail.com\"},\"active\":true,\"sent\":\"Ansolo Lazinatov\",\"date\":\"Dec 24, 2021 10:44 am\",\"source\":\"Call\",\"type_status\":{\"label\":\"Bounce\",\"type\":\"badge-phoenix-warning\"}}"} />
                                </div>
                              </td>
                              <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                <a href="#!" className="fw-semibold text-primary">
The Arnold Schwarzenegger of Order
                                </a>
                                <div className="fs-10 d-block">
ansolo45@mail.com
                                </div>
                              </td>
                              <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
Ansolo Lazinatov
                              </td>
                              <td className="date align-middle white-space-nowrap text-body py-2">
Dec 24, 2021 10:44 am
                              </td>
                              <td className="align-middle white-space-nowrap ps-3">
                                <a href="#!" className="text-body">
                                  <span className="fa-solid fa-phone text-primary me-2">                                  </span>Call
                                </a>
                              </td>
                              <td className="status align-middle fw-semibold text-end py-2">
                                <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
Bounce
                                </span>
                              </td>
                            </tr>
                            <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle px-0 py-3">
                                <div className="form-check mb-0 fs-8">
                                  <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"mail\":{\"subject\":\"My order is not being taken\",\"email\":\"jackson@mail.com\"},\"active\":true,\"sent\":\"Jackson Pollock\",\"date\":\"Dec 19, 2021 4:55 pm\",\"source\":\"Call\",\"type_status\":{\"label\":\"Spam\",\"type\":\"badge-phoenix-danger\"}}"} />
                                </div>
                              </td>
                              <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                <a href="#!" className="fw-semibold text-primary">
My order is not being taken
                                </a>
                                <div className="fs-10 d-block">
jackson@mail.com
                                </div>
                              </td>
                              <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
Jackson Pollock
                              </td>
                              <td className="date align-middle white-space-nowrap text-body py-2">
Dec 19, 2021 4:55 pm
                              </td>
                              <td className="align-middle white-space-nowrap ps-3">
                                <a href="#!" className="text-body">
                                  <span className="fa-solid fa-phone text-primary me-2">                                  </span>Call
                                </a>
                              </td>
                              <td className="status align-middle fw-semibold text-end py-2">
                                <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
Spam
                                </span>
                              </td>
                            </tr>
                            <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle px-0 py-3">
                                <div className="form-check mb-0 fs-8">
                                  <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"mail\":{\"subject\":\"Shipment is missing\",\"email\":\"jackson@mail.com\"},\"active\":true,\"sent\":\"Jackson Pollock\",\"date\":\"Dec 19, 2021 2:43 pm\",\"source\":\"Call\",\"type_status\":{\"label\":\"sent\",\"type\":\"badge-phoenix-success\"}}"} />
                                </div>
                              </td>
                              <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                <a href="#!" className="fw-semibold text-primary">
Shipment is missing
                                </a>
                                <div className="fs-10 d-block">
jackson@mail.com
                                </div>
                              </td>
                              <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
Jackson Pollock
                              </td>
                              <td className="date align-middle white-space-nowrap text-body py-2">
Dec 19, 2021 2:43 pm
                              </td>
                              <td className="align-middle white-space-nowrap ps-3">
                                <a href="#!" className="text-body">
                                  <span className="fa-solid fa-phone text-primary me-2">                                  </span>Call
                                </a>
                              </td>
                              <td className="status align-middle fw-semibold text-end py-2">
                                <span className="badge badge-phoenix fs-10 badge-phoenix-success">
sent
                                </span>
                              </td>
                            </tr>
                            <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle px-0 py-3">
                                <div className="form-check mb-0 fs-8">
                                  <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"mail\":{\"subject\":\"How can I order something urgently?\",\"email\":\"ansolo45@mail.com\"},\"active\":true,\"sent\":\"Jackson Pollock\",\"date\":\"Dec 19, 2021 2:43 pm\",\"source\":\"Call\",\"type_status\":{\"label\":\"Delivered\",\"type\":\"badge-phoenix-info\"}}"} />
                                </div>
                              </td>
                              <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                <a href="#!" className="fw-semibold text-primary">
How can I order something urgently?
                                </a>
                                <div className="fs-10 d-block">
ansolo45@mail.com
                                </div>
                              </td>
                              <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
Jackson Pollock
                              </td>
                              <td className="date align-middle white-space-nowrap text-body py-2">
Dec 19, 2021 2:43 pm
                              </td>
                              <td className="align-middle white-space-nowrap ps-3">
                                <a href="#!" className="text-body">
                                  <span className="fa-solid fa-phone text-primary me-2">                                  </span>Call
                                </a>
                              </td>
                              <td className="status align-middle fw-semibold text-end py-2">
                                <span className="badge badge-phoenix fs-10 badge-phoenix-info">
Delivered
                                </span>
                              </td>
                            </tr>
                            <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle px-0 py-3">
                                <div className="form-check mb-0 fs-8">
                                  <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"mail\":{\"subject\":\"How the delicacy of the products will be handled?\",\"email\":\"ansolo45@mail.com\"},\"active\":true,\"sent\":\"Ansolo Lazinatov\",\"date\":\"Dec 16, 2021 5:18 pm\",\"source\":\"Call\",\"type_status\":{\"label\":\"bounced\",\"type\":\"badge-phoenix-warning\"}}"} />
                                </div>
                              </td>
                              <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                <a href="#!" className="fw-semibold text-primary">
How the delicacy of the products will be handled?
                                </a>
                                <div className="fs-10 d-block">
ansolo45@mail.com
                                </div>
                              </td>
                              <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
Ansolo Lazinatov
                              </td>
                              <td className="date align-middle white-space-nowrap text-body py-2">
Dec 16, 2021 5:18 pm
                              </td>
                              <td className="align-middle white-space-nowrap ps-3">
                                <a href="#!" className="text-body">
                                  <span className="fa-solid fa-phone text-primary me-2">                                  </span>Call
                                </a>
                              </td>
                              <td className="status align-middle fw-semibold text-end py-2">
                                <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
bounced
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
                        <div className="col-auto d-flex">
                          <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info>                          </p>
                          <a href="#!" className="fw-semibold"  data-list-view={"*"}>
View all                            <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                            </span>
                          </a>
                          <a href="#!" className="fw-semibold d-none"  data-list-view={"less"}>
View Less                            <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                            </span>
                          </a>
                        </div>
                        <div className="col-auto d-flex">
                          <button className="page-link" data-list-pagination={"prev"}>
                            <span className="fas fa-chevron-left">                            </span>
                          </button>
                          <ul className="mb-0 pagination">                          </ul>
                          <button className="page-link pe-0" data-list-pagination={"next"}>
                            <span className="fas fa-chevron-right">                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab-drafts" role="tabpanel" aria-labelledby="drafts-tab">
                    <div className="border-top border-bottom border-translucent" id="draftsEmailsTable" data-list={"{\"valueNames\":[\"subject\",\"sent\",\"date\",\"source\",\"status\"],\"page\":7,\"pagination\":true}"}>
                      <div className="table-responsive scrollbar mx-n1 px-1">
                        <table className="table fs-9 mb-0">
                          <thead>
                            <tr>
                              <th className="white-space-nowrap fs-9 align-middle ps-0" style={{"width":"26px"} as CSSProperties}>
                                <div className="form-check mb-0 fs-8">
                                  <input className="form-check-input" type="checkbox" data-bulk-select={"{\"body\":\"drafts-email-table-body\"}"} />
                                </div>
                              </th>
                              <th className="sort white-space-nowrap align-middle pe-3 ps-0 text-uppercase" scope="col" data-sort={"subject"} style={{"width":"31%","minWidth":"350px"} as CSSProperties}>
Subject
                              </th>
                              <th className="sort align-middle pe-3 text-uppercase" scope="col" data-sort={"sent"} style={{"width":"15%","minWidth":"130px"} as CSSProperties}>
Sent by
                              </th>
                              <th className="sort align-middle text-start text-uppercase" scope="col" data-sort={"date"} style={{"minWidth":"165px"} as CSSProperties}>
Date
                              </th>
                              <th className="sort align-middle pe-0 text-uppercase" scope="col" style={{"width":"15%","minWidth":"100px"} as CSSProperties}>
Action
                              </th>
                              <th className="sort align-middle text-end text-uppercase" scope="col" data-sort={"status"} style={{"width":"15%","minWidth":"100px"} as CSSProperties}>
Status
                              </th>
                            </tr>
                          </thead>
                          <tbody className="list" id="drafts-email-table-body"><tr className="hover-actions-trigger btn-reveal-trigger position-static">
                              <td className="fs-9 align-middle px-0 py-3">
                                <div className="form-check mb-0 fs-8">
                                  <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"mail\":{\"subject\":\"Quary about purchased soccer socks\",\"email\":\"jackson@mail.com\"},\"active\":true,\"sent\":\"Jackson Pollock\",\"date\":\"Dec 29, 2021 10:23 am\",\"source\":\"Call\",\"type_status\":{\"label\":\"sent\",\"type\":\"badge-phoenix-success\"}}"} />
                                </div>
                              </td>
                              <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                <a href="#!" className="fw-semibold text-primary">
Quary about purchased soccer socks
                                </a>
                                <div className="fs-10 d-block">
jackson@mail.com
                                </div>
                              </td>
                              <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
Jackson Pollock
                              </td>
                              <td className="date align-middle white-space-nowrap text-body py-2">
Dec 29, 2021 10:23 am
                              </td>
                              <td className="align-middle white-space-nowrap ps-3">
                                <a href="#!" className="text-body">
                                  <span className="fa-solid fa-phone text-primary me-2">                                  </span>Call
                                </a>
                              </td>
                              <td className="status align-middle fw-semibold text-end py-2">
                                <span className="badge badge-phoenix fs-10 badge-phoenix-success">
sent
                                </span>
                              </td>
                            </tr>
                            <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle px-0 py-3">
                                <div className="form-check mb-0 fs-8">
                                  <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"mail\":{\"subject\":\"How to take the headache out of Order\",\"email\":\"ansolo45@mail.com\"},\"active\":true,\"sent\":\"Ansolo Lazinatov\",\"date\":\"Dec 27, 2021 3:27 pm\",\"source\":\"Call\",\"type_status\":{\"label\":\"delivered\",\"type\":\"badge-phoenix-info\"}}"} />
                                </div>
                              </td>
                              <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                <a href="#!" className="fw-semibold text-primary">
How to take the headache out of Order
                                </a>
                                <div className="fs-10 d-block">
ansolo45@mail.com
                                </div>
                              </td>
                              <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
Ansolo Lazinatov
                              </td>
                              <td className="date align-middle white-space-nowrap text-body py-2">
Dec 27, 2021 3:27 pm
                              </td>
                              <td className="align-middle white-space-nowrap ps-3">
                                <a href="#!" className="text-body">
                                  <span className="fa-solid fa-phone text-primary me-2">                                  </span>Call
                                </a>
                              </td>
                              <td className="status align-middle fw-semibold text-end py-2">
                                <span className="badge badge-phoenix fs-10 badge-phoenix-info">
delivered
                                </span>
                              </td>
                            </tr>
                            <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle px-0 py-3">
                                <div className="form-check mb-0 fs-8">
                                  <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"mail\":{\"subject\":\"The Arnold Schwarzenegger of Order\",\"email\":\"ansolo45@mail.com\"},\"active\":true,\"sent\":\"Ansolo Lazinatov\",\"date\":\"Dec 24, 2021 10:44 am\",\"source\":\"Call\",\"type_status\":{\"label\":\"Bounce\",\"type\":\"badge-phoenix-warning\"}}"} />
                                </div>
                              </td>
                              <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                <a href="#!" className="fw-semibold text-primary">
The Arnold Schwarzenegger of Order
                                </a>
                                <div className="fs-10 d-block">
ansolo45@mail.com
                                </div>
                              </td>
                              <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
Ansolo Lazinatov
                              </td>
                              <td className="date align-middle white-space-nowrap text-body py-2">
Dec 24, 2021 10:44 am
                              </td>
                              <td className="align-middle white-space-nowrap ps-3">
                                <a href="#!" className="text-body">
                                  <span className="fa-solid fa-phone text-primary me-2">                                  </span>Call
                                </a>
                              </td>
                              <td className="status align-middle fw-semibold text-end py-2">
                                <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
Bounce
                                </span>
                              </td>
                            </tr>
                            <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle px-0 py-3">
                                <div className="form-check mb-0 fs-8">
                                  <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"mail\":{\"subject\":\"My order is not being taken\",\"email\":\"jackson@mail.com\"},\"active\":true,\"sent\":\"Jackson Pollock\",\"date\":\"Dec 19, 2021 4:55 pm\",\"source\":\"Call\",\"type_status\":{\"label\":\"Spam\",\"type\":\"badge-phoenix-danger\"}}"} />
                                </div>
                              </td>
                              <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                <a href="#!" className="fw-semibold text-primary">
My order is not being taken
                                </a>
                                <div className="fs-10 d-block">
jackson@mail.com
                                </div>
                              </td>
                              <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
Jackson Pollock
                              </td>
                              <td className="date align-middle white-space-nowrap text-body py-2">
Dec 19, 2021 4:55 pm
                              </td>
                              <td className="align-middle white-space-nowrap ps-3">
                                <a href="#!" className="text-body">
                                  <span className="fa-solid fa-phone text-primary me-2">                                  </span>Call
                                </a>
                              </td>
                              <td className="status align-middle fw-semibold text-end py-2">
                                <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
Spam
                                </span>
                              </td>
                            </tr>
                            <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle px-0 py-3">
                                <div className="form-check mb-0 fs-8">
                                  <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"mail\":{\"subject\":\"Shipment is missing\",\"email\":\"jackson@mail.com\"},\"active\":true,\"sent\":\"Jackson Pollock\",\"date\":\"Dec 19, 2021 2:43 pm\",\"source\":\"Call\",\"type_status\":{\"label\":\"sent\",\"type\":\"badge-phoenix-success\"}}"} />
                                </div>
                              </td>
                              <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                <a href="#!" className="fw-semibold text-primary">
Shipment is missing
                                </a>
                                <div className="fs-10 d-block">
jackson@mail.com
                                </div>
                              </td>
                              <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
Jackson Pollock
                              </td>
                              <td className="date align-middle white-space-nowrap text-body py-2">
Dec 19, 2021 2:43 pm
                              </td>
                              <td className="align-middle white-space-nowrap ps-3">
                                <a href="#!" className="text-body">
                                  <span className="fa-solid fa-phone text-primary me-2">                                  </span>Call
                                </a>
                              </td>
                              <td className="status align-middle fw-semibold text-end py-2">
                                <span className="badge badge-phoenix fs-10 badge-phoenix-success">
sent
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
                        <div className="col-auto d-flex">
                          <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info>                          </p>
                          <a href="#!" className="fw-semibold"  data-list-view={"*"}>
View all                            <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                            </span>
                          </a>
                          <a href="#!" className="fw-semibold d-none"  data-list-view={"less"}>
View Less                            <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                            </span>
                          </a>
                        </div>
                        <div className="col-auto d-flex">
                          <button className="page-link" data-list-pagination={"prev"}>
                            <span className="fas fa-chevron-left">                            </span>
                          </button>
                          <ul className="mb-0 pagination">                          </ul>
                          <button className="page-link pe-0" data-list-pagination={"next"}>
                            <span className="fas fa-chevron-right">                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab-schedule" role="tabpanel" aria-labelledby="schedule-tab">
                    <div className="border-top border-bottom border-translucent" id="scheduledEmailsTable" data-list={"{\"valueNames\":[\"subject\",\"sent\",\"date\",\"source\",\"status\"],\"page\":7,\"pagination\":true}"}>
                      <div className="table-responsive scrollbar mx-n1 px-1">
                        <table className="table fs-9 mb-0">
                          <thead>
                            <tr>
                              <th className="white-space-nowrap fs-9 align-middle ps-0" style={{"width":"26px"} as CSSProperties}>
                                <div className="form-check mb-0 fs-8">
                                  <input className="form-check-input" type="checkbox" data-bulk-select={"{\"body\":\"scheduled-email-table-body\"}"} />
                                </div>
                              </th>
                              <th className="sort white-space-nowrap align-middle pe-3 ps-0 text-uppercase" scope="col" data-sort={"subject"} style={{"width":"31%","minWidth":"350px"} as CSSProperties}>
Subject
                              </th>
                              <th className="sort align-middle pe-3 text-uppercase" scope="col" data-sort={"sent"} style={{"width":"15%","minWidth":"130px"} as CSSProperties}>
Sent by
                              </th>
                              <th className="sort align-middle text-start text-uppercase" scope="col" data-sort={"date"} style={{"minWidth":"165px"} as CSSProperties}>
Date
                              </th>
                              <th className="sort align-middle pe-0 text-uppercase" scope="col" style={{"width":"15%","minWidth":"100px"} as CSSProperties}>
Action
                              </th>
                              <th className="sort align-middle text-end text-uppercase" scope="col" data-sort={"status"} style={{"width":"15%","minWidth":"100px"} as CSSProperties}>
Status
                              </th>
                            </tr>
                          </thead>
                          <tbody className="list" id="scheduled-email-table-body"><tr className="hover-actions-trigger btn-reveal-trigger position-static">
                              <td className="fs-9 align-middle px-0 py-3">
                                <div className="form-check mb-0 fs-8">
                                  <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"mail\":{\"subject\":\"Quary about purchased soccer socks\",\"email\":\"jackson@mail.com\"},\"active\":true,\"sent\":\"Jackson Pollock\",\"date\":\"Dec 29, 2021 10:23 am\",\"source\":\"Call\",\"type_status\":{\"label\":\"sent\",\"type\":\"badge-phoenix-success\"}}"} />
                                </div>
                              </td>
                              <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                <a href="#!" className="fw-semibold text-primary">
Quary about purchased soccer socks
                                </a>
                                <div className="fs-10 d-block">
jackson@mail.com
                                </div>
                              </td>
                              <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
Jackson Pollock
                              </td>
                              <td className="date align-middle white-space-nowrap text-body py-2">
Dec 29, 2021 10:23 am
                              </td>
                              <td className="align-middle white-space-nowrap ps-3">
                                <a href="#!" className="text-body">
                                  <span className="fa-solid fa-phone text-primary me-2">                                  </span>Call
                                </a>
                              </td>
                              <td className="status align-middle fw-semibold text-end py-2">
                                <span className="badge badge-phoenix fs-10 badge-phoenix-success">
sent
                                </span>
                              </td>
                            </tr>
                            <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle px-0 py-3">
                                <div className="form-check mb-0 fs-8">
                                  <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"mail\":{\"subject\":\"How to take the headache out of Order\",\"email\":\"ansolo45@mail.com\"},\"active\":true,\"sent\":\"Ansolo Lazinatov\",\"date\":\"Dec 27, 2021 3:27 pm\",\"source\":\"Call\",\"type_status\":{\"label\":\"delivered\",\"type\":\"badge-phoenix-info\"}}"} />
                                </div>
                              </td>
                              <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                <a href="#!" className="fw-semibold text-primary">
How to take the headache out of Order
                                </a>
                                <div className="fs-10 d-block">
ansolo45@mail.com
                                </div>
                              </td>
                              <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
Ansolo Lazinatov
                              </td>
                              <td className="date align-middle white-space-nowrap text-body py-2">
Dec 27, 2021 3:27 pm
                              </td>
                              <td className="align-middle white-space-nowrap ps-3">
                                <a href="#!" className="text-body">
                                  <span className="fa-solid fa-phone text-primary me-2">                                  </span>Call
                                </a>
                              </td>
                              <td className="status align-middle fw-semibold text-end py-2">
                                <span className="badge badge-phoenix fs-10 badge-phoenix-info">
delivered
                                </span>
                              </td>
                            </tr>
                            <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle px-0 py-3">
                                <div className="form-check mb-0 fs-8">
                                  <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"mail\":{\"subject\":\"The Arnold Schwarzenegger of Order\",\"email\":\"ansolo45@mail.com\"},\"active\":true,\"sent\":\"Ansolo Lazinatov\",\"date\":\"Dec 24, 2021 10:44 am\",\"source\":\"Call\",\"type_status\":{\"label\":\"Bounce\",\"type\":\"badge-phoenix-warning\"}}"} />
                                </div>
                              </td>
                              <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                <a href="#!" className="fw-semibold text-primary">
The Arnold Schwarzenegger of Order
                                </a>
                                <div className="fs-10 d-block">
ansolo45@mail.com
                                </div>
                              </td>
                              <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
Ansolo Lazinatov
                              </td>
                              <td className="date align-middle white-space-nowrap text-body py-2">
Dec 24, 2021 10:44 am
                              </td>
                              <td className="align-middle white-space-nowrap ps-3">
                                <a href="#!" className="text-body">
                                  <span className="fa-solid fa-phone text-primary me-2">                                  </span>Call
                                </a>
                              </td>
                              <td className="status align-middle fw-semibold text-end py-2">
                                <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
Bounce
                                </span>
                              </td>
                            </tr>
                            <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle px-0 py-3">
                                <div className="form-check mb-0 fs-8">
                                  <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"mail\":{\"subject\":\"My order is not being taken\",\"email\":\"jackson@mail.com\"},\"active\":true,\"sent\":\"Jackson Pollock\",\"date\":\"Dec 19, 2021 4:55 pm\",\"source\":\"Call\",\"type_status\":{\"label\":\"Spam\",\"type\":\"badge-phoenix-danger\"}}"} />
                                </div>
                              </td>
                              <td className="subject order align-middle white-space-nowrap py-2 ps-0">
                                <a href="#!" className="fw-semibold text-primary">
My order is not being taken
                                </a>
                                <div className="fs-10 d-block">
jackson@mail.com
                                </div>
                              </td>
                              <td className="sent align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
Jackson Pollock
                              </td>
                              <td className="date align-middle white-space-nowrap text-body py-2">
Dec 19, 2021 4:55 pm
                              </td>
                              <td className="align-middle white-space-nowrap ps-3">
                                <a href="#!" className="text-body">
                                  <span className="fa-solid fa-phone text-primary me-2">                                  </span>Call
                                </a>
                              </td>
                              <td className="status align-middle fw-semibold text-end py-2">
                                <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
Spam
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
                        <div className="col-auto d-flex">
                          <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info>                          </p>
                          <a href="#!" className="fw-semibold"  data-list-view={"*"}>
View all                            <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                            </span>
                          </a>
                          <a href="#!" className="fw-semibold d-none"  data-list-view={"less"}>
View Less                            <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                            </span>
                          </a>
                        </div>
                        <div className="col-auto d-flex">
                          <button className="page-link" data-list-pagination={"prev"}>
                            <span className="fas fa-chevron-left">                            </span>
                          </button>
                          <ul className="mb-0 pagination">                          </ul>
                          <button className="page-link pe-0" data-list-pagination={"next"}>
                            <span className="fas fa-chevron-right">                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tab-attachments" role="tabpanel" aria-labelledby="attachments-tab">
              <h2 className="mb-3">
Attachments
              </h2>
              <div className="border-top border-dashed pt-3 pb-4">
                <div className="d-flex flex-between-center">
                  <div className="d-flex mb-1">
                    <span className="fa-solid fa-image me-2 text-body-tertiary fs-9">                    </span>
                    <p className="text-body-highlight mb-0 lh-1">
Silly_sight_1.png
                    </p>
                  </div>
                  <div className="btn-reveal-trigger">
                    <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                      <span className="fas fa-ellipsis-h">                      </span>
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
                <p className="fs-9 text-body-tertiary mb-3">
                  <span>
768kB
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
                </p>
                <PhoenixImage src="/assets/img/generic/40.png" alt="" className="rounded-2" />
              </div>
              <div className="border-top border-dashed py-4">
                <div className="d-flex flex-between-center">
                  <div>
                    <div className="d-flex align-items-center mb-1">
                      <span className="fa-solid fa-image me-2 fs-9 text-body-tertiary">                      </span>
                      <p className="text-body-highlight mb-0 lh-1">
All_images.zip
                      </p>
                    </div>
                    <p className="fs-9 text-body-tertiary mb-0">
                      <span>
12.8 mB
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
                    </p>
                  </div>
                  <div className="btn-reveal-trigger">
                    <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                      <span className="fas fa-ellipsis-h">                      </span>
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
              <div className="border-top border-dashed py-4">
                <div className="d-flex flex-between-center">
                  <div>
                    <div className="d-flex align-items-center mb-1">
                      <span className="fa-solid fa-file-lines me-2 fs-9 text-body-tertiary">                      </span>
                      <p className="text-body-highlight mb-0 lh-1">
Project.txt
                      </p>
                    </div>
                    <p className="fs-9 text-body-tertiary mb-0">
                      <span>
123 kB
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
                    </p>
                  </div>
                  <div className="btn-reveal-trigger">
                    <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                      <span className="fas fa-ellipsis-h">                      </span>
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
