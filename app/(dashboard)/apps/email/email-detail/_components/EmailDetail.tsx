'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function EmailDetail() {
  return (
    <div suppressHydrationWarning>

    <div className="email-container">
      <div className="row gx-lg-6 gx-3 py-4 z-2 position-sticky bg-body email-header">
        <div className="col-auto">
          <PhoenixLink href="/apps/email/compose" className="btn btn-primary email-sidebar-width d-none d-lg-block">
Compose
          </PhoenixLink>
          <button className="btn px-3 btn-phoenix-secondary text-body-tertiary d-lg-none" data-phoenix-toggle={"offcanvas"} data-phoenix-target={"#emailSidebarColumn"}>
            <span className="fa-solid fa-bars">            </span>
          </button>
        </div>
        <div className="col-auto d-lg-none">
          <PhoenixLink href="/apps/email/compose" className="btn btn-primary px-3 px-sm-4">
            <span className="d-none d-sm-inline-block">
Compose
            </span>            <span className="d-sm-none fas fa-plus">            </span>
          </PhoenixLink>
        </div>
        <div className="col-auto flex-1">
          <div className="search-box w-100">
            <form className="position-relative">
              <input className="form-control search-input search" type="search" placeholder="Search ..." aria-label="Search" />
              <span className="fas fa-search search-box-icon">              </span>
            </form>
          </div>
        </div>
      </div>
      <div className="row g-lg-6 mb-8">
        <div className="col-lg-auto">
          <div className="email-sidebar email-sidebar-width bg-body phoenix-offcanvas phoenix-offcanvas-fixed" id="emailSidebarColumn" data-breakpoint={"lg"}>
            <div className="email-content scrollbar-overlay">
              <div className="d-flex justify-content-between align-items-center">
                <p className="text-uppercase fs-10 text-body-tertiary text-opacity-85 mb-2 fw-bold">
mailbox
                </p>
                <button className="btn d-lg-none p-0 mb-2" data-phoenix-dismiss={"offcanvas"}>
                  <span className="uil uil-times fs-8">                  </span>
                </button>
              </div>
              <ul className="nav flex-column border-top border-translucent fs-9 vertical-nav mb-4">
                <li className="nav-item">
                  <PhoenixLink href="/apps/email/inbox" className="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page">
                    <div className="d-flex align-items-center">
                      <span className="me-2 nav-icons uil uil-inbox">                      </span>
                      <span className="flex-1">
Inbox
                      </span>
                      <span className="nav-item-count">
5
                      </span>
                    </div>
                  </PhoenixLink>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none active" aria-current="page">
                    <div className="d-flex align-items-center">
                      <span className="me-2 nav-icons uil uil-location-arrow">                      </span>
                      <span className="flex-1">
Sent
                      </span>
                      <span className="nav-item-count">
23
                      </span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page">
                    <div className="d-flex align-items-center">
                      <span className="me-2 nav-icons uil uil-pen">                      </span>
                      <span className="flex-1">
Draft
                      </span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page">
                    <div className="d-flex align-items-center">
                      <span className="me-2 nav-icons uil uil-exclamation-circle">                      </span>
                      <span className="flex-1">
Spam
                      </span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page">
                    <div className="d-flex align-items-center">
                      <span className="me-2 nav-icons uil uil-trash">                      </span>
                      <span className="flex-1">
Trash
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="d-flex justify-content-between">
                <p className="text-uppercase fs-10 text-body-tertiary text-opacity-85 mb-2 fw-bold">
Filtered
                </p>
                <a href="#!" className="fs-10 fw-bold">
                  <span className="fa-solid fa-plus me-2">                  </span>Add Folder
                </a>
              </div>
              <ul className="nav flex-column border-top border-translucent fs-9 vertical-nav mb-4">
                <li className="nav-item">
                  <a href="#!" className="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucenttext-start outline-none" aria-current="page">
                    <div className="d-flex align-items-center">
                      <span className="me-2 nav-icons uil uil-star">                      </span>
                      <span className="flex-1">
Starred
                      </span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucenttext-start outline-none" aria-current="page">
                    <div className="d-flex align-items-center">
                      <span className="me-2 nav-icons uil uil-archive">                      </span>
                      <span className="flex-1">
Archive
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="d-flex justify-content-between">
                <p className="text-uppercase fs-10 text-body-tertiary text-opacity-85 mb-2 fw-bold">
Labels
                </p>
                <a href="#!" className="fs-10 fw-bold">
                  <span className="fa-solid fa-plus me-2">                  </span>Add Label
                </a>
              </div>
              <ul className="nav flex-column border-top border-translucent fs-9 vertical-nav">
                <li className="nav-item">
                  <a href="#!" className="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page">
                    <div className="d-flex align-items-center">
                      <span className="ms-n1 me-1 fa-solid fa-circle text-primary" data-fa-transform={"shrink-10"}>                      </span>
                      <span className="flex-1">
Personal
                      </span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page">
                    <div className="d-flex align-items-center">
                      <span className="ms-n1 me-1 fa-solid fa-circle text-primary-dark" data-fa-transform={"shrink-10"}>                      </span>
                      <span className="flex-1">
Work
                      </span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page">
                    <div className="d-flex align-items-center">
                      <span className="ms-n1 me-1 fa-solid fa-circle text-success" data-fa-transform={"shrink-10"}>                      </span>
                      <span className="flex-1">
Payments
                      </span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page">
                    <div className="d-flex align-items-center">
                      <span className="ms-n1 me-1 fa-solid fa-circle text-warning" data-fa-transform={"shrink-10"}>                      </span>
                      <span className="flex-1">
Invoices
                      </span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page">
                    <div className="d-flex align-items-center">
                      <span className="ms-n1 me-1 fa-solid fa-circle text-danger" data-fa-transform={"shrink-10"}>                      </span>
                      <span className="flex-1">
Accounts
                      </span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page">
                    <div className="d-flex align-items-center">
                      <span className="ms-n1 me-1 fa-solid fa-circle text-info" data-fa-transform={"shrink-10"}>                      </span>
                      <span className="flex-1">
Forums
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="phoenix-offcanvas-backdrop d-lg-none top-0" data-phoenix-backdrop>          </div>
        </div>
        <div className="col-3 d-none d-xxl-block">
          <div className="email-content scrollbar">
            <div className="px-lg-1">
              <div className="d-flex align-items-center flex-wrap position-sticky pb-2 bg-body z-2 email-toolbar">
                <div className="d-flex align-items-center flex-1 me-2">
                  <button className="btn btn-sm p-0 me-2" type="button" onClick={() => { window.location.reload(); }}>
                    <span className="text-primary fas fa-redo fs-10">                    </span>
                  </button>
                  <p className="fw-semibold fs-10 text-body-tertiary text-opacity-85 mb-0 lh-sm text-nowrap">
Last refreshed 1m ago
                  </p>
                </div>
                <div className="d-flex">
                  <p className="text-body-tertiary text-opacity-85 fs-9 fw-semibold mb-0 me-3">
                    <span className="text-body">
1-7 
                    </span>
of 
                    <span className="text-body">
205
                    </span>
                  </p>
                  <button className="btn p-0 me-3" type="button">
                    <span className="text-body-quaternary fa-solid fa-angle-left fs-10">                    </span>
                  </button>
                  <button className="btn p-0" type="button">
                    <span className="text-primary fa-solid fa-angle-right fs-10">                    </span>
                  </button>
                </div>
              </div>
              <div className="border-top border-translucent py-2 d-flex justify-content-between">
                <div className="form-check mb-0 fs-8">
                  <input className="form-check-input" type="checkbox" data-bulk-select-row />
                </div>
                <div>
                  <button className="btn p-0 me-2 text-body-quaternary hover text-body-tertiary text-opacity-85" data-bs-toggle={"tooltip"} data-bs-placement={"top"} data-bs-title={"Archive"}>
                    <span className="fas fa-archive fs-10">                    </span>
                  </button>
                  <button className="btn p-0 me-2 text-body-quaternary hover text-body-tertiary text-opacity-85" data-bs-toggle={"tooltip"} data-bs-placement={"top"} data-bs-title={"Delete"}>
                    <span className="fas fa-trash fs-10">                    </span>
                  </button>
                  <button className="btn p-0 me-2 text-body-quaternary hover text-body-tertiary text-opacity-85" data-bs-toggle={"tooltip"} data-bs-placement={"top"} data-bs-title={"Star"}>
                    <span className="fas fa-star fs-10">                    </span>
                  </button>
                  <button className="btn p-0 text-body-quaternary hover text-body-tertiary text-opacity-85" data-bs-toggle={"tooltip"} data-bs-placement={"top"} data-bs-title={"Tags"}>
                    <span className="fas fa-tag fs-10">                    </span>
                  </button>
                </div>
              </div>
              <div className="border-top border-translucent hover-actions-trigger py-3">
                <div className="row align-items-sm-center gx-2">
                  <div className="col-auto">
                    <div className="d-flex flex-column flex-sm-row">
                      <input className="form-check-input mb-2 m-sm-0 me-sm-2" type="checkbox" id="checkbox-1" data-bulk-select-row />
                      <button className="btn p-0">
                        <span className="fas text-warning fa-star">                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="avatar avatar-s  rounded-circle">
                      <PhoenixImage src="/assets/img/team/60.webp" alt="" className="rounded-circle " />
                    </div>
                  </div>
                  <div className="col-auto">
                    <PhoenixLink href="/apps/email/email-detail" className="text-body-emphasis fw-bold inbox-link fs-9">
Jessica Ball
                    </PhoenixLink>
                  </div>
                  <div className="col-auto ms-auto">
                    <div className="hover-actions end-0">
                      <button className="btn btn-phoenix-secondary btn-icon dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fa-solid fa-ellipsis">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Mark Unread
                        </a>
                        <a href="#!" className="dropdown-item">
Mark Important
                        </a>
                        <a href="#!" className="dropdown-item">
Archive
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                        <a href="#!" className="dropdown-item">
Print
                        </a>
                        <a href="#!" className="dropdown-item">
Report Spam
                        </a>
                        <a href="#!" className="dropdown-item">
Report Phishing
                        </a>
                        <a href="#!" className="dropdown-item">
Mute Jessica Ball
                        </a>
                        <a href="#!" className="dropdown-item">
Block Jessica Ball
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                      </div>
                    </div>
                    <span className="fs-10 fw-bold">
1 M
                    </span>
                  </div>
                </div>
                <div className="ms-4 mt-n3 mt-sm-0 ms-sm-11">
                  <PhoenixLink href="/apps/email/email-detail" className="d-block inbox-link">
                    <span className="fs-9 line-clamp-1 text-body-emphasis">
Query about purchased soccer socks
                    </span>                    <p className="fs-9 ps-0 text-body-tertiary mb-0 line-clamp-2">
Greetings. I have purchased some socks under the bundle offer you availed this week. According to the offer I was thrilled to get a 25% off of any product I bought. Regardless, I had to pay the exact full price for them...
                    </p>
                  </PhoenixLink>
                </div>
              </div>
              <div className="border-top border-translucent hover-actions-trigger py-3">
                <div className="row align-items-sm-center gx-2">
                  <div className="col-auto">
                    <div className="d-flex flex-column flex-sm-row">
                      <input className="form-check-input mb-2 m-sm-0 me-sm-2" type="checkbox" id="checkbox-2" data-bulk-select-row />
                      <button className="btn p-0">
                        <span className="far text-body-quaternary fa-star">                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="avatar avatar-s  rounded-circle">
                      <PhoenixImage src="/assets/img/team/58.webp" alt="" className="rounded-circle " />
                    </div>
                  </div>
                  <div className="col-auto">
                    <PhoenixLink href="/apps/email/email-detail" className="text-body-emphasis fw-bold inbox-link fs-9">
Danny Reid
                    </PhoenixLink>
                  </div>
                  <div className="col-auto ms-auto">
                    <div className="hover-actions end-0">
                      <button className="btn btn-phoenix-secondary btn-icon dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fa-solid fa-ellipsis">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Mark Unread
                        </a>
                        <a href="#!" className="dropdown-item">
Mark Important
                        </a>
                        <a href="#!" className="dropdown-item">
Archive
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                        <a href="#!" className="dropdown-item">
Print
                        </a>
                        <a href="#!" className="dropdown-item">
Report Spam
                        </a>
                        <a href="#!" className="dropdown-item">
Report Phishing
                        </a>
                        <a href="#!" className="dropdown-item">
Mute Jessica Ball
                        </a>
                        <a href="#!" className="dropdown-item">
Block Jessica Ball
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                      </div>
                    </div>
                    <span className="fs-10 fw-bold">
3 M
                    </span>
                  </div>
                </div>
                <div className="ms-4 mt-n3 mt-sm-0 ms-sm-11">
                  <PhoenixLink href="/apps/email/email-detail" className="d-block inbox-link">
                    <span className="fs-9 line-clamp-1 text-body-emphasis">
How to take the headache out of Order
                    </span>                    <p className="fs-9 ps-0 text-body-tertiary mb-0 line-clamp-2">
Hello! As I've mentioned before, we have this huge order deals to ship within this month. Also, the financial report is attached to this email. Hopefully, you'll find it useful for the company.
                    </p>
                  </PhoenixLink>
                  <a href="#!" className="d-inline-flex align-items-center border border-translucent rounded-pill px-3 py-1 me-2 mt-2 inbox-link">
                    <span className="fas fa-file-pdf text-warning fs-9">                    </span>                    <span className="ms-2 fw-bold fs-10 text-body">
Financial_Reports.pdf
                    </span>
                  </a>
                  <a href="#!" className="d-inline-flex align-items-center border border-translucent rounded-pill px-3 py-1 me-2 mt-2 inbox-link">
                    <span className="fas fa-file-zipper text-warning fs-9">                    </span>                    <span className="ms-2 fw-bold fs-10 text-body">
Frame20.zip
                    </span>
                  </a>
                </div>
              </div>
              <div className="border-top border-translucent hover-actions-trigger py-3">
                <div className="row align-items-sm-center gx-2">
                  <div className="col-auto">
                    <div className="d-flex flex-column flex-sm-row">
                      <input className="form-check-input mb-2 m-sm-0 me-sm-2" type="checkbox" id="checkbox-3" data-bulk-select-row />
                      <button className="btn p-0">
                        <span className="fas text-warning fa-star">                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="avatar avatar-s  rounded-circle">
                      <PhoenixImage src="/assets/img/team/57.webp" alt="" className="rounded-circle " />
                    </div>
                  </div>
                  <div className="col-auto">
                    <PhoenixLink href="/apps/email/email-detail" className="text-body fw-semibold inbox-link fs-9">
Harley Brown
                    </PhoenixLink>
                  </div>
                  <div className="col-auto ms-auto">
                    <div className="hover-actions end-0">
                      <button className="btn btn-phoenix-secondary btn-icon dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fa-solid fa-ellipsis">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Mark Unread
                        </a>
                        <a href="#!" className="dropdown-item">
Mark Important
                        </a>
                        <a href="#!" className="dropdown-item">
Archive
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                        <a href="#!" className="dropdown-item">
Print
                        </a>
                        <a href="#!" className="dropdown-item">
Report Spam
                        </a>
                        <a href="#!" className="dropdown-item">
Report Phishing
                        </a>
                        <a href="#!" className="dropdown-item">
Mute Jessica Ball
                        </a>
                        <a href="#!" className="dropdown-item">
Block Jessica Ball
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                      </div>
                    </div>
                    <span className="fs-10">
5 M
                    </span>
                  </div>
                </div>
                <div className="ms-4 mt-n3 mt-sm-0 ms-sm-11">
                  <PhoenixLink href="/apps/email/email-detail" className="d-block inbox-link">
                    <span className="fs-9 line-clamp-1 text-body-highlight">
The Arnold Schwarzenegger of Order
                    </span>                    <p className="fs-9 ps-0 text-body-tertiary mb-0 line-clamp-2">
I’ve come across your posts and found some favorable deals on your page. I’ve added a load of products to the cart and I don’t know the payment options you avail. Also, can you enlighten me about any discount or...
                    </p>
                  </PhoenixLink>
                </div>
              </div>
              <div className="border-top border-translucent hover-actions-trigger py-3">
                <div className="row align-items-sm-center gx-2">
                  <div className="col-auto">
                    <div className="d-flex flex-column flex-sm-row">
                      <input className="form-check-input mb-2 m-sm-0 me-sm-2" type="checkbox" id="checkbox-4" data-bulk-select-row />
                      <button className="btn p-0">
                        <span className="far text-body-quaternary fa-star">                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="avatar avatar-s  rounded-circle">
                      <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle " />
                    </div>
                  </div>
                  <div className="col-auto">
                    <PhoenixLink href="/apps/email/email-detail" className="text-body-emphasis fw-bold inbox-link fs-9">
Hollie Stephens
                    </PhoenixLink>
                  </div>
                  <div className="col-auto ms-auto">
                    <div className="hover-actions end-0">
                      <button className="btn btn-phoenix-secondary btn-icon dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fa-solid fa-ellipsis">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Mark Unread
                        </a>
                        <a href="#!" className="dropdown-item">
Mark Important
                        </a>
                        <a href="#!" className="dropdown-item">
Archive
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                        <a href="#!" className="dropdown-item">
Print
                        </a>
                        <a href="#!" className="dropdown-item">
Report Spam
                        </a>
                        <a href="#!" className="dropdown-item">
Report Phishing
                        </a>
                        <a href="#!" className="dropdown-item">
Mute Jessica Ball
                        </a>
                        <a href="#!" className="dropdown-item">
Block Jessica Ball
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                      </div>
                    </div>
                    <span className="fs-10 fw-bold">
8 M
                    </span>
                  </div>
                </div>
                <div className="ms-4 mt-n3 mt-sm-0 ms-sm-11">
                  <PhoenixLink href="/apps/email/email-detail" className="d-block inbox-link">
                    <span className="fs-9 line-clamp-1 text-body-emphasis">
My order is not being taken
                    </span>                    <p className="fs-9 ps-0 text-body-tertiary mb-0 line-clamp-2">
Hello. I’m knocking to let you know that I am trying to place some orders on your site. But my orders are not being taken, maybe it’s technical issues. Can you help me with it as I really need the products I am trying to...
                    </p>
                  </PhoenixLink>
                </div>
              </div>
              <div className="border-top border-translucent hover-actions-trigger py-3">
                <div className="row align-items-sm-center gx-2">
                  <div className="col-auto">
                    <div className="d-flex flex-column flex-sm-row">
                      <input className="form-check-input mb-2 m-sm-0 me-sm-2" type="checkbox" id="checkbox-5" data-bulk-select-row />
                      <button className="btn p-0">
                        <span className="fas text-warning fa-star">                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="avatar avatar-s  rounded-circle">
                      <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                    </div>
                  </div>
                  <div className="col-auto">
                    <PhoenixLink href="/apps/email/email-detail" className="text-body fw-semibold inbox-link fs-9">
Natasha West
                    </PhoenixLink>
                  </div>
                  <div className="col-auto ms-auto">
                    <div className="hover-actions end-0">
                      <button className="btn btn-phoenix-secondary btn-icon dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fa-solid fa-ellipsis">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Mark Unread
                        </a>
                        <a href="#!" className="dropdown-item">
Mark Important
                        </a>
                        <a href="#!" className="dropdown-item">
Archive
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                        <a href="#!" className="dropdown-item">
Print
                        </a>
                        <a href="#!" className="dropdown-item">
Report Spam
                        </a>
                        <a href="#!" className="dropdown-item">
Report Phishing
                        </a>
                        <a href="#!" className="dropdown-item">
Mute Jessica Ball
                        </a>
                        <a href="#!" className="dropdown-item">
Block Jessica Ball
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                      </div>
                    </div>
                    <span className="fs-10">
20 M
                    </span>
                  </div>
                </div>
                <div className="ms-4 mt-n3 mt-sm-0 ms-sm-11">
                  <PhoenixLink href="/apps/email/email-detail" className="d-block inbox-link">
                    <span className="fs-9 line-clamp-1 text-body-highlight">
Shipment is missing
                    </span>                    <p className="fs-9 ps-0 text-body-tertiary mb-0 line-clamp-2">
Greetings! I’ve got an email saying I was to get the products yesterday. But got a call instead saying the shipment was misplaced. Can you put some light on it? Really need the products.
                    </p>
                  </PhoenixLink>
                </div>
              </div>
              <div className="border-top border-translucent hover-actions-trigger py-3">
                <div className="row align-items-sm-center gx-2">
                  <div className="col-auto">
                    <div className="d-flex flex-column flex-sm-row">
                      <input className="form-check-input mb-2 m-sm-0 me-sm-2" type="checkbox" id="checkbox-6" data-bulk-select-row />
                      <button className="btn p-0">
                        <span className="fas text-warning fa-star">                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="avatar avatar-s ">
                      <div className="avatar-name rounded-circle">
                        <span>
R
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <PhoenixLink href="/apps/email/email-detail" className="text-body fw-semibold inbox-link fs-9">
Max Williamson
                    </PhoenixLink>
                  </div>
                  <div className="col-auto ms-auto">
                    <div className="hover-actions end-0">
                      <button className="btn btn-phoenix-secondary btn-icon dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fa-solid fa-ellipsis">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Mark Unread
                        </a>
                        <a href="#!" className="dropdown-item">
Mark Important
                        </a>
                        <a href="#!" className="dropdown-item">
Archive
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                        <a href="#!" className="dropdown-item">
Print
                        </a>
                        <a href="#!" className="dropdown-item">
Report Spam
                        </a>
                        <a href="#!" className="dropdown-item">
Report Phishing
                        </a>
                        <a href="#!" className="dropdown-item">
Mute Jessica Ball
                        </a>
                        <a href="#!" className="dropdown-item">
Block Jessica Ball
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                      </div>
                    </div>
                    <span className="fs-10">
30 M
                    </span>
                  </div>
                </div>
                <div className="ms-4 mt-n3 mt-sm-0 ms-sm-11">
                  <PhoenixLink href="/apps/email/email-detail" className="d-block inbox-link">
                    <span className="fs-9 line-clamp-1 text-body-highlight">
How can I order something urgently?
                    </span>                    <p className="fs-9 ps-0 text-body-tertiary mb-0 line-clamp-2">
I saw your promotion on 25% sales. Do you avail emergency orders and urgent shipments? If you do, I need to place some orders. Please reply, thanks.
                    </p>
                  </PhoenixLink>
                  <a href="#!" className="d-inline-flex align-items-center border border-translucent rounded-pill px-3 py-1 me-2 mt-2 inbox-link">
                    <span className="fa-solid fa-music text-primary fs-9">                    </span>                    <span className="ms-2 fw-bold fs-10 text-body">
syllabus
                    </span>
                  </a>
                </div>
              </div>
              <div className="border-top border-translucent hover-actions-trigger pt-3">
                <div className="row align-items-sm-center gx-2">
                  <div className="col-auto">
                    <div className="d-flex flex-column flex-sm-row">
                      <input className="form-check-input mb-2 m-sm-0 me-sm-2" type="checkbox" id="checkbox-7" data-bulk-select-row />
                      <button className="btn p-0">
                        <span className="far text-body-quaternary fa-star">                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="avatar avatar-s  rounded-circle">
                      <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                    </div>
                  </div>
                  <div className="col-auto">
                    <PhoenixLink href="/apps/email/email-detail" className="text-body fw-semibold inbox-link fs-9">
Ethan Hawkins
                    </PhoenixLink>
                  </div>
                  <div className="col-auto ms-auto">
                    <div className="hover-actions end-0">
                      <button className="btn btn-phoenix-secondary btn-icon dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fa-solid fa-ellipsis">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Mark Unread
                        </a>
                        <a href="#!" className="dropdown-item">
Mark Important
                        </a>
                        <a href="#!" className="dropdown-item">
Archive
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                        <a href="#!" className="dropdown-item">
Print
                        </a>
                        <a href="#!" className="dropdown-item">
Report Spam
                        </a>
                        <a href="#!" className="dropdown-item">
Report Phishing
                        </a>
                        <a href="#!" className="dropdown-item">
Mute Jessica Ball
                        </a>
                        <a href="#!" className="dropdown-item">
Block Jessica Ball
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                      </div>
                    </div>
                    <span className="fs-10">
32 M
                    </span>
                  </div>
                </div>
                <div className="ms-4 mt-n3 mt-sm-0 ms-sm-11">
                  <PhoenixLink href="/apps/email/email-detail" className="d-block inbox-link">
                    <span className="fs-9 line-clamp-1 text-body-highlight">
How the delicacy of the products will be handled??
                    </span>                    <p className="fs-9 ps-0 text-body-tertiary mb-0 line-clamp-2">
Hello! I need to purchase some delicate products. Can you tell me how you handle the delicacy of the products to be shipped? I don’t want to get my hands on broken things, so. Thank you! 
                    </p>
                  </PhoenixLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card email-content">
            <div className="card-body overflow-hidden">
              <div className="d-flex flex-between-center pb-3 border-bottom border-translucent mb-4">
                <PhoenixLink href="/apps/email/inbox" className="btn btn-link p-0 text-body-secondary me-3">
                  <span className="fa-solid fa-angle-left fw-bolder fs-8">                  </span>
                </PhoenixLink>
                <h3 className="flex-1 mb-0 lh-sm line-clamp-1">
Query about recently purchased soccer socks
                </h3>
                <div className="btn-reveal-trigger">
                  <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none d-flex btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                    <span className="fas fa-ellipsis-h">                    </span>
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
              <div className="overflow-x-hidden scrollbar email-detail-content">
                <div className="row align-items-center gy-3 gx-0 mb-10">
                  <div className="col-12 col-sm-auto d-flex order-sm-1">
                    <button className="btn p-0 me-4 me-lg-3 me-xl-4" data-bs-toggle={"tooltip"} data-bs-placement={"top"} data-bs-title={"Reply"}>
                      <span className="fa-solid fa-reply text-body-quaternary">                      </span>
                    </button>
                    <button className="btn p-0 me-4 me-lg-3 me-xl-4" data-bs-toggle={"tooltip"} data-bs-placement={"top"} data-bs-title={"Remove"}>
                      <span className="fa-solid fa-trash-can text-body-quaternary">                      </span>
                    </button>
                    <button className="btn p-0 me-4 me-lg-3 me-xl-4" data-bs-toggle={"tooltip"} data-bs-placement={"top"} data-bs-title={"Archive"}>
                      <span className="fa-solid fa-archive text-body-quaternary">                      </span>
                    </button>
                    <button className="btn p-0 me-4 me-lg-3 me-xl-4" data-bs-toggle={"tooltip"} data-bs-placement={"top"} data-bs-title={"Print"}>
                      <span className="fa-solid fa-print text-body-quaternary">                      </span>
                    </button>
                    <button className="btn p-0" data-bs-toggle={"tooltip"} data-bs-placement={"top"} data-bs-title={"Star"}>
                      <span className="fa-regular fa-star text-body-quaternary">                      </span>
                    </button>
                  </div>
                  <div className="col-auto">
                    <PhoenixImage src="/assets/img/team/60.webp" alt="..." className="me-2 rounded-circle" width={48} height={48} />
                  </div>
                  <div className="col-auto flex-1">
                    <div className="d-flex mb-1">
                      <h5 className="mb-0 text-body-highlight me-2">
Jessica Ball
                      </h5>
                      <p className="mb-0 lh-sm text-body-tertiary fs-9 d-none d-md-block text-nowrap">
{"< jessica.ball@email.com >"}
                      </p>
                    </div>
                    <p className="mb-0 fs-9">
                      <span className="text-body-tertiary">
to
                      </span>
                      <span className="fw-bold text-body-secondary">
 Me 
                      </span>
                      <span className="text-body-highlight fw-semibold fs-10">
28 Aug, 2021 
                      </span>
                      <span className="fw-semibold text-body fs-10 me-1">
 6:32 PM
                      </span>
                      <span className="fa-regular fa-star text-body-quaternary">                      </span>
                    </p>
                  </div>
                </div>
                <div className="text-body-highlight fs-9 w-100 w-md-75 mb-8">
                  <p>
Dear Simp sons, 
                  </p>
                  <p>
Something in a thirty-acre thermal thicket of thorns and thistles thumped and thundered threatening the three-D thoughts of Matthew the thug - although, theatrically, it was only the thirteen-thousand thistles and thorns through the underneath of his thigh that the thirty year old thug thought of that morning.
                  </p>
                  <p>
How much caramel can a canny canonball cram in a camel if a canny canonball can cram caramel in a camel? If practice makes perfect and perfect needs practice, I’m perfectly practiced and practically perfect.
                  </p>
                  <p className="mb-0">
Best regards,
                  </p>
                  <p>
Jess
                  </p>
                </div>
                <div className="d-flex align-items-center mb-5">
                  <button className="btn btn-link text-body-highlight fs-8 text-decoration-none p-0" type="button">
                    <span className="fa-solid fa-paperclip me-2">                    </span>
2 Attachments
                  </button>
                </div>
                <div className="row pb-11 border-bottom mb-4 gx-0 gy-2 border-translucent">
                  <div className="col-auto me-3">
                    <a href="#!" className="text-decoration-none d-flex align-items-center">
                      <div className="btn-icon btn-icon-xl border rounded-3 text-body-quaternary text-opacity-75 flex-column me-2">
                        <span className="fa-solid fa-file fs-8 mb-1">                        </span>
                        <p className="mb-0 fs-10 fw-bold">
PDF
                        </p>
                      </div>                      <div>
                        <h6 className="text-body-highlight">
workflow-data.pdf
                        </h6>
                        <p className="fs-9 mb-0 text-body-tertiary lh-1">
53.34 KB
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-auto">
                    <a href="#!" className="text-decoration-none d-flex align-items-center">
                      <PhoenixImage src="/assets/img/generic/41.png" alt="..." className="rounded" />                      <div className="ms-2">
                        <h6 className="text-body-highlight">
forest.jpg
                        </h6>
                        <p className="fs-9 mb-0 text-body-tertiary">
53.34 KB
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-phoenix-secondary me-1 text-nowrap px-2 px-sm-4">
Reply
                    <span className="fa-solid fa-reply ms-2 fs-10">                    </span>
                  </button>
                  <button className="btn btn-phoenix-secondary me-1 text-nowrap px-2 px-sm-4">
Reply All
                    <span className="fa-solid fa-reply-all ms-2 fs-10">                    </span>
                  </button>
                  <button className="btn btn-phoenix-secondary ms-auto text-nowrap px-2 px-sm-4">
Forward
                    <span className="fa-solid fa-share ms-2 fs-10">                    </span>
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
