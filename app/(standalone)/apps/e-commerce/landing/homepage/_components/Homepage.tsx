'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Homepage() {
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
            <PhoenixLink href="/apps/e-commerce/landing/homepage" className="nav-link ps-0 active">
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

    <div className="ecommerce-homepage pt-5 mb-9">
      <section className="py-0">
        <div className="container-small">
          <div className="scrollbar">
            <div className="d-flex justify-content-between">
              <a href="#!" className="icon-nav-item">
                <div className="icon-container mb-2 bg-warning-subtle" data-bs-theme={"light"}>
                  <span className="fs-4 uil uil-star text-warning">                  </span>
                </div>                <p className="nav-label">
Deals
                </p>
              </a>
              <a href="#!" className="icon-nav-item">
                <div className="icon-container mb-2" data-bs-theme={"undefined"}>
                  <span className="fs-4 uil uil-shopping-bag">                  </span>
                </div>                <p className="nav-label">
Grocery
                </p>
              </a>
              <a href="#!" className="icon-nav-item">
                <div className="icon-container mb-2" data-bs-theme={"undefined"}>
                  <span className="fs-4 uil uil-watch-alt">                  </span>
                </div>                <p className="nav-label">
Fashion
                </p>
              </a>
              <a href="#!" className="icon-nav-item">
                <div className="icon-container mb-2" data-bs-theme={"undefined"}>
                  <span className="fs-4 uil uil-mobile-android">                  </span>
                </div>                <p className="nav-label">
Mobile
                </p>
              </a>
              <a href="#!" className="icon-nav-item">
                <div className="icon-container mb-2" data-bs-theme={"undefined"}>
                  <span className="fs-4 uil uil-monitor">                  </span>
                </div>                <p className="nav-label">
Electronics
                </p>
              </a>
              <a href="#!" className="icon-nav-item">
                <div className="icon-container mb-2" data-bs-theme={"undefined"}>
                  <span className="fs-4 uil uil-estate">                  </span>
                </div>                <p className="nav-label">
Home
                </p>
              </a>
              <a href="#!" className="icon-nav-item">
                <div className="icon-container mb-2" data-bs-theme={"undefined"}>
                  <span className="fs-4 uil uil-lamp">                  </span>
                </div>                <p className="nav-label">
Dining
                </p>
              </a>
              <a href="#!" className="icon-nav-item">
                <div className="icon-container mb-2" data-bs-theme={"undefined"}>
                  <span className="fs-4 uil uil-gift">                  </span>
                </div>                <p className="nav-label">
Gifts
                </p>
              </a>
              <a href="#!" className="icon-nav-item">
                <div className="icon-container mb-2" data-bs-theme={"undefined"}>
                  <span className="fs-4 uil uil-wrench">                  </span>
                </div>                <p className="nav-label">
Tools
                </p>
              </a>
              <a href="#!" className="icon-nav-item">
                <div className="icon-container mb-2" data-bs-theme={"undefined"}>
                  <span className="fs-4 uil uil-plane-departure">                  </span>
                </div>                <p className="nav-label">
Travel
                </p>
              </a>
              <a href="#!" className="icon-nav-item">
                <div className="icon-container mb-2" data-bs-theme={"undefined"}>
                  <span className="fs-4 uil uil-palette">                  </span>
                </div>                <p className="nav-label">
Others
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-0 px-xl-3">
        <div className="container px-xl-0 px-xxl-3">
          <div className="row g-3 mb-9">
            <div className="col-12">
              <div className="whooping-banner w-100 rounded-3 overflow-hidden">
                <div className="bg-holder z-n1 product-bg" style={{"backgroundImage":"url(../../../assets/img/e-commerce/whooping_banner_product.png)","backgroundPosition":"bottom right"} as CSSProperties}>                </div>
                <div className="bg-holder z-n1 shape-bg" style={{"backgroundImage":"url(../../../assets/img/e-commerce/whooping_banner_shape_2.png)","backgroundPosition":"bottom left"} as CSSProperties}>                </div>
                <div className="banner-text" data-bs-theme={"light"}>
                  <h2 className="text-warning-light fw-bolder fs-lg-3 fs-xxl-2">
Whooping 
                    <span className="gradient-text">
60% 
                    </span>
Off
                  </h2>
                  <h3 className="fw-bolder fs-lg-5 fs-xxl-3 text-white">
on everyday items
                  </h3>
                </div>
                <a href="#!" className="btn btn-lg btn-primary rounded-pill banner-button">
Shop Now
                </a>
              </div>
            </div>
            <div className="col-12 col-xl-6">
              <div className="gift-items-banner w-100 rounded-3 overflow-hidden">
                <div className="bg-holder z-n1 banner-bg" style={{"backgroundImage":"url(../../../assets/img/e-commerce/gift-items-banner-bg.png)"} as CSSProperties}>                </div>
                <div className="banner-text text-md-center">
                  <h2 className="text-white fw-bolder fs-xl-4">
Get 
                    <span className="gradient-text">
10% Off 
                    </span>
                    <br className="d-md-none" />
 on gift items
                  </h2>
                  <a href="#!" className="btn btn-lg btn-primary rounded-pill banner-button">
Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-6">
              <div className="best-in-market-banner d-flex h-100 px-4 px-sm-7 py-5 px-md-11 rounded-3 overflow-hidden">
                <div className="bg-holder z-n1 banner-bg" style={{"backgroundImage":"url(../../../assets/img/e-commerce/best-in-market-bg.png)"} as CSSProperties}>                </div>
                <div className="row align-items-center w-sm-100">
                  <div className="col-8">
                    <div className="banner-text">
                      <h2 className="text-white fw-bolder fs-sm-4 mb-5">
MI 11 Pro
                        <br />
                        <span className="fs-7 fs-sm-6">
 Best in the market
                        </span>
                      </h2>
                      <a href="#!" className="btn btn-lg btn-warning rounded-pill banner-button">
Buy Now
                      </a>
                    </div>
                  </div>
                  <div className="col-4">
                    <PhoenixImage src="/assets/img/e-commerce/5.png" alt="" className="w-100 w-sm-75" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 mb-6">
            <div className="col-12 col-lg-9 col-xxl-10">
              <div className="d-flex flex-between-center mb-3">
                <div className="d-flex">
                  <span className="fas fa-bolt text-warning fs-6">                  </span>
                  <h3 className="mx-2">
Top Deals today
                  </h3>
                  <span className="fas fa-bolt text-warning fs-6">                  </span>
                </div>
                <a href="#!" className="btn btn-link btn-lg p-0 d-none d-md-block">
Explore more                  <span className="fas fa-chevron-right fs-9 ms-1">                  </span>
                </a>
              </div>
              <div className="swiper-theme-container products-slider">
                <div className="swiper swiper theme-slider" data-swiper={"{\"slidesPerView\":1,\"spaceBetween\":16,\"breakpoints\":{\"450\":{\"slidesPerView\":2,\"spaceBetween\":16},\"768\":{\"slidesPerView\":3,\"spaceBetween\":20},\"1200\":{\"slidesPerView\":4,\"spaceBetween\":16},\"1540\":{\"slidesPerView\":5,\"spaceBetween\":16}}}"}>
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="position-relative text-decoration-none product-card h-100">
                        <div className="d-flex flex-column justify-content-between h-100">
                          <div>
                            <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                              <button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Add to wishlist">
                                <span className="fas fa-heart d-block-hover" data-fa-transform={"down-1"}>                                </span>
                                <span className="far fa-heart d-none-hover" data-fa-transform={"down-1"}>                                </span>
                              </button>
                              <PhoenixImage src="/assets/img/products/6.png" alt="" className="img-fluid" />
                            </div>
                            <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                              <h6 className="mb-2 lh-sm line-clamp-3 product-name">
PlayStation 5 DualSense Wireless Controller
                              </h6>
                            </PhoenixLink>
                            <p className="fs-9">
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="text-body-quaternary fw-semibold ms-1">
(67 people rated)
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="fs-9 text-body-highlight fw-bold mb-2">
dbrand skin available
                            </p>
                            <div className="d-flex align-items-center mb-1">
                              <p className="me-2 text-body text-decoration-line-through mb-0">
$125.00
                              </p>
                              <h3 className="text-body-emphasis mb-0">
$89.00
                              </h3>
                            </div>
                            <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">
2 colors
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="position-relative text-decoration-none product-card h-100">
                        <div className="d-flex flex-column justify-content-between h-100">
                          <div>
                            <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                              <button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Add to wishlist">
                                <span className="fas fa-heart d-block-hover" data-fa-transform={"down-1"}>                                </span>
                                <span className="far fa-heart d-none-hover" data-fa-transform={"down-1"}>                                </span>
                              </button>
                              <PhoenixImage src="/assets/img/products/1.png" alt="" className="img-fluid" />
                              <span className="badge text-bg-success fs-10 product-verified-badge">
Verified
                                <span className="fas fa-check ms-1">                                </span>
                              </span>
                            </div>
                            <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                              <h6 className="mb-2 lh-sm line-clamp-3 product-name">
{"Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature ..."}
                              </h6>
                            </PhoenixLink>
                            <p className="fs-9">
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="text-body-quaternary fw-semibold ms-1">
(74 people rated)
                              </span>
                            </p>
                          </div>
                          <div>
                            <div className="d-flex align-items-center mb-1">
                              <p className="me-2 text-body text-decoration-line-through mb-0">
$49.99
                              </p>
                              <h3 className="text-body-emphasis mb-0">
$34.99
                              </h3>
                            </div>
                            <p className="text-success fw-bold fs-9 lh-1 mb-0">
Deal time ends in days
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="position-relative text-decoration-none product-card h-100">
                        <div className="d-flex flex-column justify-content-between h-100">
                          <div>
                            <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                              <button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Add to wishlist">
                                <span className="fas fa-heart d-block-hover" data-fa-transform={"down-1"}>                                </span>
                                <span className="far fa-heart d-none-hover" data-fa-transform={"down-1"}>                                </span>
                              </button>
                              <PhoenixImage src="/assets/img/products/2.png" alt="" className="img-fluid" />
                            </div>
                            <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                              <h6 className="mb-2 lh-sm line-clamp-3 product-name">
iPhone 13 pro max-Pacific Blue, 128GB storage
                              </h6>
                            </PhoenixLink>
                            <p className="fs-9">
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="text-body-quaternary fw-semibold ms-1">
(33 people rated)
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="fs-9 text-body-highlight fw-bold mb-2">
Stock limited
                            </p>
                            <div className="d-flex align-items-center mb-1">
                              <p className="me-2 text-body text-decoration-line-through mb-0">
$899.99
                              </p>
                              <h3 className="text-body-emphasis mb-0">
$850.99
                              </h3>
                            </div>
                            <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">
5 colors
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="position-relative text-decoration-none product-card h-100">
                        <div className="d-flex flex-column justify-content-between h-100">
                          <div>
                            <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                              <button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Add to wishlist">
                                <span className="fas fa-heart d-block-hover" data-fa-transform={"down-1"}>                                </span>
                                <span className="far fa-heart d-none-hover" data-fa-transform={"down-1"}>                                </span>
                              </button>
                              <PhoenixImage src="/assets/img/products/3.png" alt="" className="img-fluid" />
                            </div>
                            <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                              <h6 className="mb-2 lh-sm line-clamp-3 product-name">
Apple MacBook Pro 13 inch-M1-8/256GB-Space Gray
                              </h6>
                            </PhoenixLink>
                            <p className="fs-9">
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="text-body-quaternary fw-semibold ms-1">
(97 people rated)
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="fs-9 text-body-highlight fw-bold mb-2">
Apple care included
                            </p>
                            <div className="d-flex align-items-center mb-1">
                              <p className="me-2 text-body text-decoration-line-through mb-0">
$1299.00
                              </p>
                              <h3 className="text-body-emphasis mb-0">
$1149.00
                              </h3>
                            </div>
                            <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">
2 colors
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="position-relative text-decoration-none product-card h-100">
                        <div className="d-flex flex-column justify-content-between h-100">
                          <div>
                            <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                              <button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Add to wishlist">
                                <span className="fas fa-heart d-block-hover" data-fa-transform={"down-1"}>                                </span>
                                <span className="far fa-heart d-none-hover" data-fa-transform={"down-1"}>                                </span>
                              </button>
                              <PhoenixImage src="/assets/img/products/4.png" alt="" className="img-fluid" />
                            </div>
                            <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                              <h6 className="mb-2 lh-sm line-clamp-3 product-name">
Apple iMac 24" 4K Retina Display M1 8 Core CPU, 7 Core GPU, 256GB SSD, Green (MJV83ZP/A) 2021
                              </h6>
                            </PhoenixLink>
                            <p className="fs-9">
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="text-body-quaternary fw-semibold ms-1">
(134 people rated)
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="fs-9 text-body-highlight fw-bold mb-2">
Exchange with kidney
                            </p>
                            <div className="d-flex align-items-center mb-1">
                              <p className="me-2 text-body text-decoration-line-through mb-0">
$1499.00
                              </p>
                              <h3 className="text-body-emphasis mb-0">
$1399.00
                              </h3>
                            </div>
                            <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">
7 colors
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="position-relative text-decoration-none product-card h-100">
                        <div className="d-flex flex-column justify-content-between h-100">
                          <div>
                            <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                              <button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Add to wishlist">
                                <span className="fas fa-heart d-block-hover" data-fa-transform={"down-1"}>                                </span>
                                <span className="far fa-heart d-none-hover" data-fa-transform={"down-1"}>                                </span>
                              </button>
                              <PhoenixImage src="/assets/img/products/5.png" alt="" className="img-fluid" />
                            </div>
                            <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                              <h6 className="mb-2 lh-sm line-clamp-3 product-name">
Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset
                              </h6>
                            </PhoenixLink>
                            <p className="fs-9">
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="fa fa-star text-warning">                              </span>
                              <span className="text-body-quaternary fw-semibold ms-1">
(59 people rated)
                              </span>
                            </p>
                          </div>
                          <div>
                            <h3 className="text-body-emphasis">
$59.00
                            </h3>
                            <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">
2 colors
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-nav swiper-product-nav">
                  <div className="swiper-button-next">
                    <span className="fas fa-chevron-right nav-icon">                    </span>
                  </div>
                  <div className="swiper-button-prev">
                    <span className="fas fa-chevron-left nav-icon">                    </span>
                  </div>
                </div>
              </div>
              <a href="#!" className="fw-bold d-md-none px-0">
Explore more                <span className="fas fa-chevron-right fs-9 ms-1">                </span>
              </a>
            </div>
            <div className="col-lg-3 d-none d-lg-block col-xxl-2">
              <div className="h-100 position-relative rounded-3 overflow-hidden">
                <div className="bg-holder" style={{"backgroundImage":"url(../../../assets/img/e-commerce/4.png)"} as CSSProperties}>                </div>
              </div>
            </div>
            <div className="col-12 d-lg-none">
              <a href="#!">
                <PhoenixImage src="/assets/img/e-commerce/6.png" alt="" className="w-100 rounded-3" />
              </a>
            </div>
          </div>
          <div className="mb-6">
            <div className="d-flex flex-between-center mb-3">
              <h3>
Top Electronics
              </h3>
              <a href="#!" className="fw-bold d-none d-md-block">
Explore more                <span className="fas fa-chevron-right fs-9 ms-1">                </span>
              </a>
            </div>
            <div className="swiper-theme-container products-slider">
              <div className="swiper swiper theme-slider" data-swiper={"{\"slidesPerView\":1,\"spaceBetween\":16,\"breakpoints\":{\"450\":{\"slidesPerView\":2,\"spaceBetween\":16},\"576\":{\"slidesPerView\":3,\"spaceBetween\":20},\"768\":{\"slidesPerView\":4,\"spaceBetween\":20},\"992\":{\"slidesPerView\":5,\"spaceBetween\":20},\"1200\":{\"slidesPerView\":6,\"spaceBetween\":16}}}"}>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="position-relative text-decoration-none product-card h-100">
                      <div className="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                            <button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Add to wishlist">
                              <span className="fas fa-heart d-block-hover" data-fa-transform={"down-1"}>                              </span>
                              <span className="far fa-heart d-none-hover" data-fa-transform={"down-1"}>                              </span>
                            </button>
                            <PhoenixImage src="/assets/img/products/5.png" alt="" className="img-fluid" />
                          </div>
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset
                            </h6>
                          </PhoenixLink>
                          <p className="fs-9">
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="text-body-quaternary fw-semibold ms-1">
(59 people rated)
                            </span>
                          </p>
                        </div>
                        <div>
                          <h3 className="text-body-emphasis">
$59.00
                          </h3>
                          <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">
2 colors
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="position-relative text-decoration-none product-card h-100">
                      <div className="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                            <button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Add to wishlist">
                              <span className="fas fa-heart d-block-hover" data-fa-transform={"down-1"}>                              </span>
                              <span className="far fa-heart d-none-hover" data-fa-transform={"down-1"}>                              </span>
                            </button>
                            <PhoenixImage src="/assets/img/products/7.png" alt="" className="img-fluid" />
                          </div>
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray
                            </h6>
                          </PhoenixLink>
                          <p className="fs-9">
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="text-body-quaternary fw-semibold ms-1">
(13 people rated)
                            </span>
                          </p>
                        </div>
                        <div>
                          <h3 className="text-body-emphasis">
$799.00
                          </h3>
                          <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">
2 colors
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="position-relative text-decoration-none product-card h-100">
                      <div className="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                            <button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Add to wishlist">
                              <span className="fas fa-heart d-block-hover" data-fa-transform={"down-1"}>                              </span>
                              <span className="far fa-heart d-none-hover" data-fa-transform={"down-1"}>                              </span>
                            </button>
                            <PhoenixImage src="/assets/img/products/12.png" alt="" className="img-fluid" />
                          </div>
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
HORI Racing Wheel Apex for PlayStation 4/3, and PC
                            </h6>
                          </PhoenixLink>
                          <p className="fs-9">
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="text-body-quaternary fw-semibold ms-1">
(64 people rated)
                            </span>
                          </p>
                        </div>
                        <div>
                          <p className="fs-9 text-body-highlight fs-9 mb-0 fw-bold">
Leather cover add-on available
                          </p>
                          <p className="fs-9 text-body-tertiary fs-9 mb-2">
supports Windows 11
                          </p>
                          <h3 className="text-body-emphasis">
$299.00
                          </h3>
                          <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">
1 colors
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="position-relative text-decoration-none product-card h-100">
                      <div className="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                            <button className="btn btn-wish btn-wish-primary z-2 d-toggle-container active" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Remove from wishlist">
                              <span className="fas fa-heart" data-fa-transform={"down-1"}>                              </span>
                            </button>
                            <PhoenixImage src="/assets/img/products/1.png" alt="" className="img-fluid" />
                            <span className="badge text-bg-success fs-10 product-verified-badge">
Verified
                              <span className="fas fa-check ms-1">                              </span>
                            </span>
                          </div>
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
Amazfit T-Rex Pro Smart Watch with GPS, Outdoor Fitness Watch for Men, Military Standard Certified
                            </h6>
                          </PhoenixLink>
                          <p className="fs-9">
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="text-body-quaternary fw-semibold ms-1">
(32 people rated)
                            </span>
                          </p>
                        </div>
                        <div>
                          <h3 className="text-body-emphasis">
$20.00
                          </h3>
                          <p className="text-success fw-bold fs-9 lh-1 mb-0">
Deal time ends in 24 hours
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="position-relative text-decoration-none product-card h-100">
                      <div className="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                            <button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Add to wishlist">
                              <span className="fas fa-heart d-block-hover" data-fa-transform={"down-1"}>                              </span>
                              <span className="far fa-heart d-none-hover" data-fa-transform={"down-1"}>                              </span>
                            </button>
                            <PhoenixImage src="/assets/img/products/16.png" alt="" className="img-fluid" />
                          </div>
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
Apple AirPods Pro
                            </h6>
                          </PhoenixLink>
                          <p className="fs-9">
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="text-body-quaternary fw-semibold ms-1">
(39 people rated)
                            </span>
                          </p>
                        </div>
                        <div>
                          <p className="fs-9 text-body-highlight fs-9 mb-0 fw-bold">
Free with iPhone 5s
                          </p>
                          <p className="fs-9 text-body-tertiary fs-9 mb-2">
Ships to Canada
                          </p>
                          <h3 className="text-body-emphasis">
$59.00
                          </h3>
                          <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">
3 colors
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="position-relative text-decoration-none product-card h-100">
                      <div className="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                            <button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Add to wishlist">
                              <span className="fas fa-heart d-block-hover" data-fa-transform={"down-1"}>                              </span>
                              <span className="far fa-heart d-none-hover" data-fa-transform={"down-1"}>                              </span>
                            </button>
                            <PhoenixImage src="/assets/img/products/10.png" alt="" className="img-fluid" />
                          </div>
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
Apple Magic Mouse (Wireless, Rechargable) - Silver
                            </h6>
                          </PhoenixLink>
                          <p className="fs-9">
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                            </span>
                            <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                            </span>
                            <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                            </span>
                            <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                            </span>
                            <span className="text-body-quaternary fw-semibold ms-1">
(6 people rated)
                            </span>
                          </p>
                        </div>
                        <div>
                          <p className="fs-9 text-body-highlight fs-9 mb-0 fw-bold">
Bundle available
                          </p>
                          <p className="fs-9 text-body-tertiary fs-9 mb-2">
Charger not included
                          </p>
                          <h3 className="text-body-emphasis">
$89.00
                          </h3>
                          <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">
2 colors
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="position-relative text-decoration-none product-card h-100">
                      <div className="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                            <button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Add to wishlist">
                              <span className="fas fa-heart d-block-hover" data-fa-transform={"down-1"}>                              </span>
                              <span className="far fa-heart d-none-hover" data-fa-transform={"down-1"}>                              </span>
                            </button>
                            <PhoenixImage src="/assets/img/products/8.png" alt="" className="img-fluid" />
                          </div>
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
Amazon Basics Matte Black Wired Keyboard - US Layout (QWERTY)
                            </h6>
                          </PhoenixLink>
                          <p className="fs-9">
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                            </span>
                            <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                            </span>
                            <span className="text-body-quaternary fw-semibold ms-1">
(7 people rated)
                            </span>
                          </p>
                        </div>
                        <div>
                          <h3 className="text-body-emphasis">
$98.00
                          </h3>
                          <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">
1 colors
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-nav">
                <div className="swiper-button-next">
                  <span className="fas fa-chevron-right nav-icon">                  </span>
                </div>
                <div className="swiper-button-prev">
                  <span className="fas fa-chevron-left nav-icon">                  </span>
                </div>
              </div>
            </div>
            <a href="#!" className="fw-bold d-md-none">
Explore more              <span className="fas fa-chevron-right fs-9 ms-1">              </span>
            </a>
          </div>
          <div className="mb-6">
            <div className="d-flex flex-between-center mb-3">
              <h3>
Best Offers
              </h3>
              <a href="#!" className="fw-bold d-none d-md-block">
Explore more                <span className="fas fa-chevron-right fs-9 ms-1">                </span>
              </a>
            </div>
            <div className="swiper-theme-container products-slider">
              <div className="swiper swiper theme-slider" data-swiper={"{\"slidesPerView\":1,\"spaceBetween\":16,\"breakpoints\":{\"450\":{\"slidesPerView\":2,\"spaceBetween\":16},\"576\":{\"slidesPerView\":3,\"spaceBetween\":20},\"768\":{\"slidesPerView\":4,\"spaceBetween\":20},\"992\":{\"slidesPerView\":5,\"spaceBetween\":20},\"1200\":{\"slidesPerView\":6,\"spaceBetween\":16}}}"}>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="position-relative text-decoration-none product-card h-100">
                      <div className="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                            <button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Add to wishlist">
                              <span className="fas fa-heart d-block-hover" data-fa-transform={"down-1"}>                              </span>
                              <span className="far fa-heart d-none-hover" data-fa-transform={"down-1"}>                              </span>
                            </button>
                            <PhoenixImage src="/assets/img/products/25.png" alt="" className="img-fluid" />
                          </div>
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
RESPAWN 200 Racing Style Gaming Chair, in Gray RSP 200 GRY
                            </h6>
                          </PhoenixLink>
                          <p className="fs-9">
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                          </p>
                        </div>
                        <div>
                          <h6 className="text-success lh-1 mb-0">
35% off
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="position-relative text-decoration-none product-card h-100">
                      <div className="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                            <button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Add to wishlist">
                              <span className="fas fa-heart d-block-hover" data-fa-transform={"down-1"}>                              </span>
                              <span className="far fa-heart d-none-hover" data-fa-transform={"down-1"}>                              </span>
                            </button>
                            <PhoenixImage src="/assets/img/products/27.png" alt="" className="img-fluid" />
                          </div>
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
LEVOIT Humidifiers for Bedroom Large Room 6L Warm and Cool Mist for...
                            </h6>
                          </PhoenixLink>
                          <p className="fs-9">
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                            </span>
                          </p>
                        </div>
                        <div>
                          <h6 className="text-success lh-1 mb-0">
18% off
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="position-relative text-decoration-none product-card h-100">
                      <div className="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                            <button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Add to wishlist">
                              <span className="fas fa-heart d-block-hover" data-fa-transform={"down-1"}>                              </span>
                              <span className="far fa-heart d-none-hover" data-fa-transform={"down-1"}>                              </span>
                            </button>
                            <PhoenixImage src="/assets/img/products/26.png" alt="" className="img-fluid" />
                          </div>
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
NETGEAR Nighthawk Pro Gaming XR500 Wi-Fi Router with 4 Ethernet Ports...
                            </h6>
                          </PhoenixLink>
                          <p className="fs-9">
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                          </p>
                        </div>
                        <div>
                          <h6 className="text-success lh-1 mb-0">
15% off
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="position-relative text-decoration-none product-card h-100">
                      <div className="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                            <button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Add to wishlist">
                              <span className="fas fa-heart d-block-hover" data-fa-transform={"down-1"}>                              </span>
                              <span className="far fa-heart d-none-hover" data-fa-transform={"down-1"}>                              </span>
                            </button>
                            <PhoenixImage src="/assets/img/products/18.png" alt="" className="img-fluid" />
                          </div>
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
Rachael Ray Cucina Bakeware Set Includes Nonstick Bread Baking Cookie Sheet...
                            </h6>
                          </PhoenixLink>
                          <p className="fs-9">
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star-half-alt star-icon text-warning">                            </span>
                            <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                            </span>
                          </p>
                        </div>
                        <div>
                          <h6 className="text-success lh-1 mb-0">
20% off
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="position-relative text-decoration-none product-card h-100">
                      <div className="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                            <button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Add to wishlist">
                              <span className="fas fa-heart d-block-hover" data-fa-transform={"down-1"}>                              </span>
                              <span className="far fa-heart d-none-hover" data-fa-transform={"down-1"}>                              </span>
                            </button>
                            <PhoenixImage src="/assets/img/products/17.png" alt="" className="img-fluid" />
                          </div>
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
Xbox Series S
                            </h6>
                          </PhoenixLink>
                          <p className="fs-9">
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                          </p>
                        </div>
                        <div>
                          <h6 className="text-success lh-1 mb-0">
12% off
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="position-relative text-decoration-none product-card h-100">
                      <div className="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                            <button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Add to wishlist">
                              <span className="fas fa-heart d-block-hover" data-fa-transform={"down-1"}>                              </span>
                              <span className="far fa-heart d-none-hover" data-fa-transform={"down-1"}>                              </span>
                            </button>
                            <PhoenixImage src="/assets/img/products/24.png" alt="" className="img-fluid" />
                          </div>
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
FURINNO Computer Writing Desk, Walnut
                            </h6>
                          </PhoenixLink>
                          <p className="fs-9">
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                          </p>
                        </div>
                        <div>
                          <h6 className="text-success lh-1 mb-0">
16% off
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="position-relative text-decoration-none product-card h-100">
                      <div className="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                            <button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Add to wishlist">
                              <span className="fas fa-heart d-block-hover" data-fa-transform={"down-1"}>                              </span>
                              <span className="far fa-heart d-none-hover" data-fa-transform={"down-1"}>                              </span>
                            </button>
                            <PhoenixImage src="/assets/img/products/18.png" alt="" className="img-fluid" />
                          </div>
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                            <h6 className="mb-2 lh-sm line-clamp-3 product-name">
Seagate Portable 2TB External Hard Drive Portable HDD
                            </h6>
                          </PhoenixLink>
                          <p className="fs-9">
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa fa-star text-warning">                            </span>
                            <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                            </span>
                          </p>
                        </div>
                        <div>
                          <h6 className="text-success lh-1 mb-0">
15% off
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-nav">
                <div className="swiper-button-next">
                  <span className="fas fa-chevron-right nav-icon">                  </span>
                </div>
                <div className="swiper-button-prev">
                  <span className="fas fa-chevron-left nav-icon">                  </span>
                </div>
              </div>
            </div>
            <a href="#!" className="fw-bold d-md-none">
Explore more              <span className="fas fa-chevron-right fs-9 ms-1">              </span>
            </a>
          </div>
          <div className="row flex-center mb-15 mt-11 gy-6">
            <div className="col-auto">
              <PhoenixImage src="/assets/img/spot-illustrations/light_30.png" alt="" className="d-dark-none" width={305} />
              <PhoenixImage src="/assets/img/spot-illustrations/dark_30.png" alt="" className="d-light-none" width={305} />
            </div>
            <div className="col-auto">
              <div className="text-center text-lg-start">
                <h3 className="text-body-highlight mb-2">
                  <span className="fw-semibold">
Want to have the 
                  </span>
ultimate 
                  <br className="d-md-none" />
customer experience?
                </h3>
                <h1 className="display-3 fw-semibold mb-4">
Become a 
                  <span className="text-primary fw-bolder">
member 
                  </span>
today!
                </h1>
                <PhoenixLink href="/pages/authentication/simple/sign-up" className="btn btn-lg btn-primary px-7">
Sign up                  <span className="fas fa-chevron-right ms-2 fs-9">                  </span>
                </PhoenixLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

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
