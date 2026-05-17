'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function ShippingInfo() {
  return (
    <div suppressHydrationWarning>



    <section className="py-0">
      <div className="container-small">
        <div className="ecommerce-topbar">
          <nav className="navbar navbar-expand-lg navbar-light px-0">
            <div className="row gx-0 gy-2 w-100 flex-between-center">
              <div className="col-auto">
                <PhoenixLink href="/" className="text-decoration-none">
                  <div className="d-flex align-items-center">
                    <PhoenixImage src="/assets/img/icons/logo.png" alt="phoenix" width={27} />
                    <h5 className="logo-text ms-2">
phoenix
                    </h5>
                  </div>
                </PhoenixLink>
              </div>
              <div className="col-auto order-md-1">
                <ul className="navbar-nav navbar-nav-icons flex-row me-n2">
                  <li className="nav-item d-flex align-items-center">
                    <div className="theme-control-toggle fa-icon-wait px-2">
                      <input className="form-check-input ms-0 theme-control-toggle-input" type="checkbox" data-theme-control={"phoenixTheme"} defaultValue="dark" id="themeControlToggle" />
                      <label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggle" data-bs-toggle={"tooltip"} data-bs-placement={"left"} data-bs-title={"Switch theme"} style={{"height":"32px","width":"32px"} as CSSProperties}>
                        <span className="icon" data-feather={"moon"}>                        </span>
                      </label>
                      <label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggle" data-bs-toggle={"tooltip"} data-bs-placement={"left"} data-bs-title={"Switch theme"} style={{"height":"32px","width":"32px"} as CSSProperties}>
                        <span className="icon" data-feather={"sun"}>                        </span>
                      </label>
                    </div>
                  </li>
                  <li className="nav-item">
                    <PhoenixLink href="/apps/e-commerce/landing/cart" className="nav-link px-2 icon-indicator icon-indicator-primary"  role="button">
                      <span className="text-body-tertiary" data-feather={"shopping-cart"} style={{"height":"20px","width":"20px"} as CSSProperties}>                      </span>                      <span className="icon-indicator-number">
3
                      </span>
                    </PhoenixLink>
                  </li>
                  <li className="nav-item dropdown">
                    <a href="#" className="nav-link px-2 icon-indicator icon-indicator-sm icon-indicator-danger" id="navbarTopDropdownNotification"  role="button" data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"} aria-haspopup="true" aria-expanded="false">
                      <span className="text-body-tertiary" data-feather={"bell"} style={{"height":"20px","width":"20px"} as CSSProperties}>                      </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret mt-2" id="navbarDropdownNotfication" aria-labelledby="navbarDropdownNotfication">
                      <div className="card position-relative border-0">
                        <div className="card-header p-2">
                          <div className="d-flex justify-content-between">
                            <h5 className="text-body-emphasis mb-0">
Notifications
                            </h5>
                            <button className="btn btn-link p-0 fs-9 fw-normal" type="button">
Mark all as read
                            </button>
                          </div>
                        </div>
                        <div className="card-body p-0">
                          <div className="scrollbar-overlay" style={{"height":"27rem"} as CSSProperties}>
                            <div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
                              <div className="d-flex align-items-center justify-content-between position-relative">
                                <div className="d-flex">
                                  <div className="avatar avatar-m status-online me-3">
                                    <PhoenixImage src="/assets/img/team/40x40/30.webp" alt="" className="rounded-circle" />
                                  </div>
                                  <div className="flex-1 me-sm-3">
                                    <h4 className="fs-9 text-body-emphasis">
Jessie Samson
                                    </h4>
                                    <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                      <span className="me-1 fs-10">
💬
                                      </span>
Mentioned you in a comment.
                                      <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
10m
                                      </span>
                                    </p>
                                    <p className="text-body-secondary fs-9 mb-0">
                                      <span className="me-1 fas fa-clock">                                      </span>
                                      <span className="fw-bold">
10:41 AM 
                                      </span>
August 7,2021
                                    </p>
                                  </div>
                                </div>
                                <div className="dropdown notification-dropdown">
                                  <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                    <span className="fas fa-ellipsis-h fs-10 text-body">                                    </span>
                                  </button>
                                  <div className="dropdown-menu py-2">
                                    <a href="#!" className="dropdown-item">
Mark as unread
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                              <div className="d-flex align-items-center justify-content-between position-relative">
                                <div className="d-flex">
                                  <div className="avatar avatar-m status-online me-3">
                                    <div className="avatar-name rounded-circle">
                                      <span>
J
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex-1 me-sm-3">
                                    <h4 className="fs-9 text-body-emphasis">
Jane Foster
                                    </h4>
                                    <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                      <span className="me-1 fs-10">
📅
                                      </span>
Created an event.
                                      <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
20m
                                      </span>
                                    </p>
                                    <p className="text-body-secondary fs-9 mb-0">
                                      <span className="me-1 fas fa-clock">                                      </span>
                                      <span className="fw-bold">
10:20 AM 
                                      </span>
August 7,2021
                                    </p>
                                  </div>
                                </div>
                                <div className="dropdown notification-dropdown">
                                  <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                    <span className="fas fa-ellipsis-h fs-10 text-body">                                    </span>
                                  </button>
                                  <div className="dropdown-menu py-2">
                                    <a href="#!" className="dropdown-item">
Mark as unread
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                              <div className="d-flex align-items-center justify-content-between position-relative">
                                <div className="d-flex">
                                  <div className="avatar avatar-m status-online me-3">
                                    <PhoenixImage src="/assets/img/team/40x40/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                                  </div>
                                  <div className="flex-1 me-sm-3">
                                    <h4 className="fs-9 text-body-emphasis">
Jessie Samson
                                    </h4>
                                    <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                      <span className="me-1 fs-10">
👍
                                      </span>
Liked your comment.
                                      <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
1h
                                      </span>
                                    </p>
                                    <p className="text-body-secondary fs-9 mb-0">
                                      <span className="me-1 fas fa-clock">                                      </span>
                                      <span className="fw-bold">
9:30 AM 
                                      </span>
August 7,2021
                                    </p>
                                  </div>
                                </div>
                                <div className="dropdown notification-dropdown">
                                  <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                    <span className="fas fa-ellipsis-h fs-10 text-body">                                    </span>
                                  </button>
                                  <div className="dropdown-menu py-2">
                                    <a href="#!" className="dropdown-item">
Mark as unread
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                              <div className="d-flex align-items-center justify-content-between position-relative">
                                <div className="d-flex">
                                  <div className="avatar avatar-m status-online me-3">
                                    <PhoenixImage src="/assets/img/team/40x40/57.webp" alt="" className="rounded-circle" />
                                  </div>
                                  <div className="flex-1 me-sm-3">
                                    <h4 className="fs-9 text-body-emphasis">
Kiera Anderson
                                    </h4>
                                    <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                      <span className="me-1 fs-10">
💬
                                      </span>
Mentioned you in a comment.
                                      <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">                                      </span>
                                    </p>
                                    <p className="text-body-secondary fs-9 mb-0">
                                      <span className="me-1 fas fa-clock">                                      </span>
                                      <span className="fw-bold">
9:11 AM 
                                      </span>
August 7,2021
                                    </p>
                                  </div>
                                </div>
                                <div className="dropdown notification-dropdown">
                                  <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                    <span className="fas fa-ellipsis-h fs-10 text-body">                                    </span>
                                  </button>
                                  <div className="dropdown-menu py-2">
                                    <a href="#!" className="dropdown-item">
Mark as unread
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                              <div className="d-flex align-items-center justify-content-between position-relative">
                                <div className="d-flex">
                                  <div className="avatar avatar-m status-online me-3">
                                    <PhoenixImage src="/assets/img/team/40x40/59.webp" alt="" className="rounded-circle" />
                                  </div>
                                  <div className="flex-1 me-sm-3">
                                    <h4 className="fs-9 text-body-emphasis">
Herman Carter
                                    </h4>
                                    <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                      <span className="me-1 fs-10">
👤
                                      </span>
Tagged you in a comment.
                                      <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">                                      </span>
                                    </p>
                                    <p className="text-body-secondary fs-9 mb-0">
                                      <span className="me-1 fas fa-clock">                                      </span>
                                      <span className="fw-bold">
10:58 PM 
                                      </span>
August 7,2021
                                    </p>
                                  </div>
                                </div>
                                <div className="dropdown notification-dropdown">
                                  <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                    <span className="fas fa-ellipsis-h fs-10 text-body">                                    </span>
                                  </button>
                                  <div className="dropdown-menu py-2">
                                    <a href="#!" className="dropdown-item">
Mark as unread
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="px-2 px-sm-3 py-3 notification-card position-relative read ">
                              <div className="d-flex align-items-center justify-content-between position-relative">
                                <div className="d-flex">
                                  <div className="avatar avatar-m status-online me-3">
                                    <PhoenixImage src="/assets/img/team/40x40/58.webp" alt="" className="rounded-circle" />
                                  </div>
                                  <div className="flex-1 me-sm-3">
                                    <h4 className="fs-9 text-body-emphasis">
Benjamin Button
                                    </h4>
                                    <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                      <span className="me-1 fs-10">
👍
                                      </span>
Liked your comment.
                                      <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">                                      </span>
                                    </p>
                                    <p className="text-body-secondary fs-9 mb-0">
                                      <span className="me-1 fas fa-clock">                                      </span>
                                      <span className="fw-bold">
10:18 AM 
                                      </span>
August 7,2021
                                    </p>
                                  </div>
                                </div>
                                <div className="dropdown notification-dropdown">
                                  <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                    <span className="fas fa-ellipsis-h fs-10 text-body">                                    </span>
                                  </button>
                                  <div className="dropdown-menu py-2">
                                    <a href="#!" className="dropdown-item">
Mark as unread
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer p-0 border-top border-translucent border-0">
                          <div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85">
                            <PhoenixLink href="/pages/notifications" className="fw-bolder">
Notification history
                            </PhoenixLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a href="#" className="nav-link px-2" id="navbarDropdownUser"  role="button" data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"} aria-haspopup="true" aria-expanded="false">
                      <span className="text-body-tertiary" data-feather={"user"} style={{"height":"20px","width":"20px"} as CSSProperties}>                      </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border mt-2" aria-labelledby="navbarDropdownUser">
                      <div className="card position-relative border-0">
                        <div className="card-body p-0">
                          <div className="text-center pt-4 pb-3">
                            <div className="avatar avatar-xl ">
                              <PhoenixImage src="/assets/img/team/72x72/57.webp" alt="" className="rounded-circle " />
                            </div>
                            <h6 className="mt-2 text-body-emphasis">
Jerry Seinfield
                            </h6>
                          </div>
                          <div className="mb-3 mx-3">
                            <input className="form-control form-control-sm" id="statusUpdateInput" type="text" placeholder="Update your status" />
                          </div>
                        </div>
                        <div className="overflow-auto scrollbar" style={{"height":"10rem"} as CSSProperties}>
                          <ul className="nav d-flex flex-column mb-2 pb-1">
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-block">
                                <span className="me-2 text-body align-bottom" data-feather={"user"}>                                </span>                                <span>
Profile
                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-block">
                                <span className="me-2 text-body align-bottom" data-feather={"pie-chart"}>                                </span>Dashboard
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-block">
                                <span className="me-2 text-body align-bottom" data-feather={"lock"}>                                </span>{"Posts & Activity"}
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-block">
                                <span className="me-2 text-body align-bottom" data-feather={"settings"}>                                </span>{"Settings & Privacy "}
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-block">
                                <span className="me-2 text-body align-bottom" data-feather={"help-circle"}>                                </span>Help Center
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-block">
                                <span className="me-2 text-body align-bottom" data-feather={"globe"}>                                </span>Language
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="card-footer p-0 border-top border-translucent">
                          <ul className="nav d-flex flex-column my-3">
                            <li className="nav-item">
                              <a href="#!" className="nav-link px-3 d-block">
                                <span className="me-2 text-body align-bottom" data-feather={"user-plus"}>                                </span>Add another account
                              </a>
                            </li>
                          </ul>
                          <hr />
                          <div className="px-3">
                            <a href="#!" className="btn btn-phoenix-secondary d-flex flex-center w-100">
                              <span className="me-2" data-feather={"log-out"}>                              </span>Sign out
                            </a>
                          </div>
                          <div className="my-2 text-center fw-bold fs-10 text-body-quaternary">
                            <a href="#!" className="text-body-quaternary me-1">
Privacy policy
                            </a>
•
                            <a href="#!" className="text-body-quaternary mx-1">
Terms
                            </a>
•
                            <a href="#!" className="text-body-quaternary ms-1">
Cookies
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6">
                <div className="search-box ecommerce-search-box w-100">
                  <form className="position-relative">
                    <input className="form-control search-input search form-control-sm" type="search" placeholder="Search" aria-label="Search" />
                    <span className="fas fa-search search-box-icon">                    </span>
                  </form>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>



    <nav className="navbar-responsive-navitems navbar-expand navbar-light bg-body-emphasis justify-content-between">
      <div className="container-small d-flex flex-between-center" data-navbar>
        <div className="dropdown">
          <button className="btn text-body ps-0 pe-5 text-nowrap dropdown-toggle dropdown-caret-none" data-category-btn data-bs-toggle={"dropdown"}>
            <span className="fas fa-bars me-2">            </span>
Category
          </button>
          <div className="dropdown-menu border border-translucent py-0 category-dropdown-menu">
            <div className="card border-0 scrollbar" style={{"maxHeight":"657px"} as CSSProperties}>
              <div className="card-body p-6 pb-3">
                <div className="row gx-7 gy-5 mb-5">
                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="d-flex align-items-center mb-3">
                      <span className="text-primary me-2" data-feather={"pocket"} style={{"strokeWidth":"3"} as CSSProperties}>                      </span>
                      <h6 className="text-body-highlight mb-0 text-nowrap">
{"Collectibles & Art"}
                      </h6>
                    </div>
                    <div className="ms-n2">
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
Collectibles
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
Antiques
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
Sports memorabilia 
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
Art
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="d-flex align-items-center mb-3">
                      <span className="text-primary me-2" data-feather={"home"} style={{"strokeWidth":"3"} as CSSProperties}>                      </span>
                      <h6 className="text-body-highlight mb-0 text-nowrap">
{"Home & Gardan"}
                      </h6>
                    </div>
                    <div className="ms-n2">
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
{"Yard, Garden & Outdoor"}
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
Crafts
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
Home Improvement
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
Pet Supplies
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="d-flex align-items-center mb-3">
                      <span className="text-primary me-2" data-feather={"globe"} style={{"strokeWidth":"3"} as CSSProperties}>                      </span>
                      <h6 className="text-body-highlight mb-0 text-nowrap">
Sporting Goods
                      </h6>
                    </div>
                    <div className="ms-n2">
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
Outdoor Sports
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
Team Sports
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
{"Exercise & Fitness"}
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
Golf
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="d-flex align-items-center mb-3">
                      <span className="text-primary me-2" data-feather={"monitor"} style={{"strokeWidth":"3"} as CSSProperties}>                      </span>
                      <h6 className="text-body-highlight mb-0 text-nowrap">
Electronics
                      </h6>
                    </div>
                    <div className="ms-n2">
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
{"Computers & Tablets"}
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
{"Camera & Photo"}
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
{"TV, Audio & Surveillance"}
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
{"Cell Ohone & Accessories"}
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="d-flex align-items-center mb-3">
                      <span className="text-primary me-2" data-feather={"truck"} style={{"strokeWidth":"3"} as CSSProperties}>                      </span>
                      <h6 className="text-body-highlight mb-0 text-nowrap">
{"Auto Parts & Accessories"}
                      </h6>
                    </div>
                    <div className="ms-n2">
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
{"GPS & Security Devices"}
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
{"Rader & Laser Detectors"}
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
{"Care & Detailing"}
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
{"Scooter Parts & Accessories"}
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="d-flex align-items-center mb-3">
                      <span className="text-primary me-2" data-feather={"codesandbox"} style={{"strokeWidth":"3"} as CSSProperties}>                      </span>
                      <h6 className="text-body-highlight mb-0 text-nowrap">
{"Toys & Hobbies"}
                      </h6>
                    </div>
                    <div className="ms-n2">
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
Radio Control
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
Kids Toys
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
Action Figures
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
{"Dolls & Bears"}
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="d-flex align-items-center mb-3">
                      <span className="text-primary me-2" data-feather={"watch"} style={{"strokeWidth":"3"} as CSSProperties}>                      </span>
                      <h6 className="text-body-highlight mb-0 text-nowrap">
Fashion
                      </h6>
                    </div>
                    <div className="ms-n2">
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
Women
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
Men
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
{"Jewelry & Watches"}
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
Shoes
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="d-flex align-items-center mb-3">
                      <span className="text-primary me-2" data-feather={"music"} style={{"strokeWidth":"3"} as CSSProperties}>                      </span>
                      <h6 className="text-body-highlight mb-0 text-nowrap">
{"Musical Instruments & Gear"}
                      </h6>
                    </div>
                    <div className="ms-n2">
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
Guitar
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
Pro Audio Equipment
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
String
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
{"Stage Lighting & Effects"}
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="d-flex align-items-center mb-3">
                      <span className="text-primary me-2" data-feather={"grid"} style={{"strokeWidth":"3"} as CSSProperties}>                      </span>
                      <h6 className="text-body-highlight mb-0 text-nowrap">
Other Categories
                      </h6>
                    </div>
                    <div className="ms-n2">
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
{"Video Games & Consoles"}
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
{"Health & Beauty"}
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
Baby
                      </a>
                      <a href="#!" className="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2">
{"Business & Industrial"}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-center border-top border-translucent pt-3">
                  <a href="#!" className="fw-bold">
See all Categories                    <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="navbar-nav justify-content-end align-items-center">
          <li className="nav-item" data-nav-item>
            <PhoenixLink href="/apps/e-commerce/landing/homepage" className="nav-link ps-0">
Home
            </PhoenixLink>
          </li>
          <li className="nav-item" data-nav-item>
            <PhoenixLink href="/apps/e-commerce/landing/favourite-stores" className="nav-link">
My Favourite Stores
            </PhoenixLink>
          </li>
          <li className="nav-item" data-nav-item>
            <PhoenixLink href="/apps/e-commerce/landing/products-filter" className="nav-link">
Products
            </PhoenixLink>
          </li>
          <li className="nav-item" data-nav-item>
            <PhoenixLink href="/apps/e-commerce/landing/wishlist" className="nav-link">
Wishlist
            </PhoenixLink>
          </li>
          <li className="nav-item" data-nav-item>
            <PhoenixLink href="/apps/e-commerce/landing/shipping-info" className="nav-link">
Shipping Info
            </PhoenixLink>
          </li>
          <li className="nav-item" data-nav-item>
            <PhoenixLink href="/apps/e-commerce/admin/add-product" className="nav-link">
Be a vendor
            </PhoenixLink>
          </li>
          <li className="nav-item" data-nav-item>
            <PhoenixLink href="/apps/e-commerce/landing/order-tracking" className="nav-link">
Track order
            </PhoenixLink>
          </li>
          <li className="nav-item" data-nav-item>
            <PhoenixLink href="/apps/e-commerce/landing/checkout" className="nav-link pe-0">
Checkout
            </PhoenixLink>
          </li>
          <li className="nav-item dropdown" data-nav-item data-more-item>
            <a href="javascript: void(0)" className="nav-link dropdown-toggle dropdown-caret-none fw-bold pe-0"  id="navbarDropdown" role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-boundary={"window"} data-bs-reference={"parent"}>
 More              <span className="fas fa-angle-down ms-2">              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-end category-list" aria-labelledby="navbarDropdown" data-category-list>            </div>
          </li>
        </ul>
      </div>
    </nav>



    <section className="pt-5 pb-9">
      <div className="container-small cart">
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
            <li className="breadcrumb-item active" aria-current="page">
Default
            </li>
          </ol>
        </nav>
        <h2 className="mb-5">
Check out
        </h2>
        <div className="row">
          <div className="col-lg-7 mb-4 mb-lg-0">
            <form>
              <h3 className="mb-5">
Shipping Info
              </h3>
              <div className="row g-4">
                <div className="col-12">
                  <label className="form-label fs-8 text-body-highlight ps-0 text-transform-none" htmlFor="inputName">
Full name
                  </label>
                  <input className="form-control" id="inputName" type="text" placeholder="Full name" />
                </div>
                <div className="col-md-6">
                  <label className="form-label fs-8 text-body-highlight ps-0 text-transform-none" htmlFor="inputEmail">
Email
                  </label>
                  <input className="form-control" id="inputEmail" type="email" placeholder="Email" />
                </div>
                <div className="col-md-6">
                  <label className="form-label fs-8 text-body-highlight ps-0 text-transform-none" htmlFor="inputPhone">
Phone
                  </label>
                  <input className="form-control" id="inputPhone" type="tel" placeholder="+1234567890" />
                </div>
                <div className="col-12">
                  <label className="form-label fs-8 text-body-highlight ps-0 text-transform-none" htmlFor="inputAddress1">
Address line 1
                  </label>
                  <input className="form-control" id="inputAddress1" type="text" placeholder="Address line 1" />
                </div>
                <div className="col-12">
                  <label className="form-label fs-8 text-body-highlight ps-0 text-transform-none" htmlFor="inputAddress2">
Address line 2
                  </label>
                  <input className="form-control" id="inputAddress2" type="text" placeholder="Address line 2" />
                </div>
                <div className="col-md-4">
                  <label className="form-label fs-8 text-body-highlight ps-0 text-transform-none" htmlFor="inputCity">
City
                  </label>
                  <select className="form-select text-body-emphasis" id="inputCity">
                    <option>
Van Nuys
                    </option>
                    <option value="los-angeles">
Los Angeles
                    </option>
                    <option value="chicago">
Chicago
                    </option>
                    <option value="houston">
Houston
                    </option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label fs-8 text-body-highlight ps-0 text-transform-none" htmlFor="inputState">
State
                  </label>
                  <select className="form-select text-body-emphasis" id="inputState">
                    <option>
California
                    </option>
                    <option value="Alaska">
Alaska
                    </option>
                    <option value="alabama">
Alabama
                    </option>
                    <option value="florida">
Florida
                    </option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label fs-8 text-body-highlight ps-0 text-transform-none" htmlFor="inputZipCode">
Zip code
                  </label>
                  <input className="form-control number-arrows-none" id="inputZipCode" type="number" placeholder="Zip code" />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label fs-8 text-body-highlight ps-0 text-transform-none" htmlFor="inputCountry">
Country
                  </label>
                  <select className="form-select text-body-emphasis" id="inputCountry">
                    <option>
USA
                    </option>
                    <option value="uk">
UK
                    </option>
                    <option value="aus">
AUS
                    </option>
                    <option value="nz">
NZ
                    </option>
                  </select>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary px-8 px-sm-11 me-2" type="submit">
Save
                  </button>
                  <button className="btn btn-phoenix-secondary text-nowrap" type="submit">
Exit Without Saving
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-5 col-xl-4 offset-xl-1">
            <div className="card mt-3 mt-lg-0">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="mb-0">
Summary
                  </h3>
                  <button className="btn btn-link pe-0" type="button">
Edit cart
                  </button>
                </div>
                <div className="border-dashed border-bottom border-translucent mt-4">
                  <div className="ms-n2">
                    <div className="row align-items-center mb-2 g-3">
                      <div className="col-8 col-md-7 col-lg-8">
                        <div className="d-flex align-items-center">
                          <PhoenixImage src="/assets/img/products/1.png" alt="" className="me-2 ms-1" width={40} />
                          <h6 className="fw-semibold text-body-highlight lh-base">
Fitbit Sense Advanced Smartwatch with... 
                          </h6>
                        </div>
                      </div>
                      <div className="col-2 col-md-3 col-lg-2">
                        <h6 className="fs-10 mb-0">
x1
                        </h6>
                      </div>
                      <div className="col-2 ps-0">
                        <h5 className="mb-0 fw-semibold text-end">
$398
                        </h5>
                      </div>
                    </div>
                    <div className="row align-items-center mb-2 g-3">
                      <div className="col-8 col-md-7 col-lg-8">
                        <div className="d-flex align-items-center">
                          <PhoenixImage src="/assets/img/products/2.png" alt="" className="me-2 ms-1" width={40} />
                          <h6 className="fw-semibold text-body-highlight lh-base">
iPhone 13 pro max-Pacific Blue-128GB 
                          </h6>
                        </div>
                      </div>
                      <div className="col-2 col-md-3 col-lg-2">
                        <h6 className="fs-10 mb-0">
x1
                        </h6>
                      </div>
                      <div className="col-2 ps-0">
                        <h5 className="mb-0 fw-semibold text-end">
$398
                        </h5>
                      </div>
                    </div>
                    <div className="row align-items-center mb-5 g-3">
                      <div className="col-8 col-md-7 col-lg-8">
                        <div className="d-flex align-items-center">
                          <PhoenixImage src="/assets/img/products/3.png" alt="" className="me-2 ms-1" width={40} />
                          <h6 className="fw-semibold text-body-highlight lh-base">
Apple MacBook Pro 13 inch-M1-8/256GB
                          </h6>
                        </div>
                      </div>
                      <div className="col-2 col-md-3 col-lg-2">
                        <h6 className="fs-10 mb-0">
x1
                        </h6>
                      </div>
                      <div className="col-2 ps-0">
                        <h5 className="mb-0 fw-semibold text-end">
$65
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-dashed border-bottom border-translucent mt-4">
                  <div className="d-flex justify-content-between mb-2">
                    <h5 className="text-body fw-semibold">
Items subtotal: 
                    </h5>
                    <h5 className="text-body fw-semibold">
$691
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <h5 className="text-body fw-semibold">
Discount: 
                    </h5>
                    <h5 className="text-danger fw-semibold">
-$59
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <h5 className="text-body fw-semibold">
Tax: 
                    </h5>
                    <h5 className="text-body fw-semibold">
$126.20
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <h5 className="text-body fw-semibold">
Subtotal 
                    </h5>
                    <h5 className="text-body fw-semibold">
$665
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="text-body fw-semibold">
Shipping Cost 
                    </h5>
                    <h5 className="text-body fw-semibold">
$30 
                    </h5>
                  </div>
                </div>
                <div className="d-flex justify-content-between border-dashed-y pt-3">
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
    </section>



    <div className="support-chat-container">
      <div className="container-fluid support-chat">
        <div className="card bg-body-emphasis">
          <div className="card-header d-flex flex-between-center px-4 py-3 border-bottom border-translucent">
            <h5 className="mb-0 d-flex align-items-center gap-2">
Demo widget
              <span className="fa-solid fa-circle text-success fs-11">              </span>
            </h5>
            <div className="btn-reveal-trigger">
              <button className="btn btn-link p-0 dropdown-toggle dropdown-caret-none transition-none d-flex" type="button" id="support-chat-dropdown" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                <span className="fas fa-ellipsis-h text-body">                </span>
              </button>
              <div className="dropdown-menu dropdown-menu-end py-2" aria-labelledby="support-chat-dropdown">
                <a href="#!" className="dropdown-item">
Request a callback
                </a>
                <a href="#!" className="dropdown-item">
Search in chat
                </a>
                <a href="#!" className="dropdown-item">
Show history
                </a>
                <a href="#!" className="dropdown-item">
Report to Admin
                </a>
                <a href="#!" className="dropdown-item btn-support-chat">
Close Support
                </a>
              </div>
            </div>
          </div>
          <div className="card-body chat p-0">
            <div className="d-flex flex-column-reverse scrollbar h-100 p-3">
              <div className="text-end mt-6">
                <a href="#!" className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3">
                  <p className="mb-0 fw-semibold fs-9">
I need help with something
                  </p>                  <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3">                  </span>
                </a>
                <a href="#!" className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3">
                  <p className="mb-0 fw-semibold fs-9">
I can’t reorder a product I previously ordered
                  </p>                  <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3">                  </span>
                </a>
                <a href="#!" className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3">
                  <p className="mb-0 fw-semibold fs-9">
How do I place an order?
                  </p>                  <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3">                  </span>
                </a>
                <a href="#!" className="false d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3">
                  <p className="mb-0 fw-semibold fs-9">
My payment method not working
                  </p>                  <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3">                  </span>
                </a>
              </div>
              <div className="text-center mt-auto">
                <div className="avatar avatar-3xl status-online">
                  <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle border border-3 border-light-subtle" />
                </div>
                <h5 className="mt-2 mb-3">
Eric
                </h5>
                <p className="text-center text-body-emphasis mb-0">
Ask us anything – we’ll get back to you here or by email within 24 hours.
                </p>
              </div>
            </div>
          </div>
          <div className="card-footer d-flex align-items-center gap-2 border-top border-translucent ps-3 pe-4 py-3">
            <div className="d-flex align-items-center flex-1 gap-3 border border-translucent rounded-pill px-4">
              <input className="form-control outline-none border-0 flex-1 fs-9 px-0" type="text" placeholder="Write message" />
              <label className="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0" htmlFor="supportChatPhotos">
                <span className="fa-solid fa-image">                </span>
              </label>
              <input className="d-none" type="file" accept="image/*" id="supportChatPhotos" />
              <label className="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0" htmlFor="supportChatAttachment">
                <span className="fa-solid fa-paperclip">                </span>
              </label>
              <input className="d-none" type="file" id="supportChatAttachment" />
            </div>
            <button className="btn p-0 border-0 send-btn">
              <span className="fa-solid fa-paper-plane fs-9">              </span>
            </button>
          </div>
        </div>
      </div>
      <button className="btn btn-support-chat p-0 border border-translucent">
        <span className="fs-8 btn-text text-primary text-nowrap">
Chat demo
        </span>
        <span className="ping-icon-wrapper mt-n4 ms-n6 mt-sm-0 ms-sm-2 position-absolute position-sm-relative">
          <span className="ping-icon-bg">          </span>
          <span className="fa-solid fa-circle ping-icon">          </span>
        </span>
        <span className="fa-solid fa-headset text-primary fs-8 d-sm-none">        </span>
        <span className="fa-solid fa-chevron-down text-primary fs-7">        </span>
      </button>
    </div>



    <section className="bg-body-highlight dark__bg-gray-1100 py-9">
      <div className="container-small">
        <div className="row justify-content-between gy-4">
          <div className="col-12 col-lg-4">
            <div className="d-flex align-items-center mb-3">
              <PhoenixImage src="/assets/img/icons/logo.png" alt="phoenix" width={27} />
              <h5 className="logo-text ms-2">
phoenix
              </h5>
            </div>
            <p className="text-body-tertiary mb-1 fw-semibold lh-sm fs-9">
Phoenix is an admin dashboard template with fascinating features and amazing layout. The template is responsive to all major browsers and is compatible with all available devices and screen sizes.
            </p>
          </div>
          <div className="col-6 col-md-auto">
            <h5 className="fw-bolder mb-3">
About Phoenix
            </h5>
            <div className="d-flex flex-column">
              <a href="#!" className="text-body-tertiary fw-semibold fs-9 mb-1">
Careers
              </a>
              <a href="#!" className="text-body-tertiary fw-semibold fs-9 mb-1">
Affiliate Program
              </a>
              <a href="#!" className="text-body-tertiary fw-semibold fs-9 mb-1">
Privacy Policy
              </a>
              <a href="#!" className="text-body-tertiary fw-semibold fs-9 mb-1">
{"Terms & Conditions"}
              </a>
            </div>
          </div>
          <div className="col-6 col-md-auto">
            <h5 className="fw-bolder mb-3">
Stay Connected
            </h5>
            <div className="d-flex flex-column">
              <a href="#!" className="text-body-tertiary fw-semibold fs-9 mb-1">
Blogs
              </a>
              <a href="#!" className="mb-1 fw-semibold fs-9 d-flex">
                <span className="fab fa-facebook-square text-primary me-2 fs-8">                </span>                <span className="text-body-secondary">
Facebook
                </span>
              </a>
              <a href="#!" className="mb-1 fw-semibold fs-9 d-flex">
                <span className="fab fa-twitter-square text-info me-2 fs-8">                </span>                <span className="text-body-secondary">
Twitter
                </span>
              </a>
            </div>
          </div>
          <div className="col-6 col-md-auto">
            <h5 className="fw-bolder mb-3">
Customer Service
            </h5>
            <div className="d-flex flex-column">
              <a href="#!" className="text-body-tertiary fw-semibold fs-9 mb-1">
Help Desk
              </a>
              <a href="#!" className="text-body-tertiary fw-semibold fs-9 mb-1">
Support, 24/7
              </a>
              <a href="#!" className="text-body-tertiary fw-semibold fs-9 mb-1">
Community of Phoenix
              </a>
            </div>
          </div>
          <div className="col-6 col-md-auto">
            <h5 className="fw-bolder mb-3">
Payment Method
            </h5>
            <div className="d-flex flex-column">
              <a href="#!" className="text-body-tertiary fw-semibold fs-9 mb-1">
Cash on Delivery
              </a>
              <a href="#!" className="text-body-tertiary fw-semibold fs-9 mb-1">
Online Payment
              </a>
              <a href="#!" className="text-body-tertiary fw-semibold fs-9 mb-1">
PayPal
              </a>
              <a href="#!" className="text-body-tertiary fw-semibold fs-9 mb-1">
Installment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>



    <footer className="footer position-relative">
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
