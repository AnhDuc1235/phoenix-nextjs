'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function ProductDetails() {
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

    <div className="pt-5 pb-9">
      <section className="py-0">
        <div className="container-small">
          <nav className="mb-3" aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="#">
Fashion
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">
Womens fashion
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">
Footwear
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
Hills
              </li>
            </ol>
          </nav>
          <div className="row g-5 mb-5 mb-lg-8" data-product-details>
            <div className="col-12 col-lg-6">
              <div className="row g-3 mb-3">
                <div className="col-12 col-md-2 col-lg-12 col-xl-2">
                  <div className="swiper-products-thumb swiper swiper theme-slider overflow-visible" id="swiper-products-thumb">                  </div>
                </div>
                <div className="col-12 col-md-10 col-lg-12 col-xl-10">
                  <div className="d-flex align-items-center border border-translucent rounded-3 text-center p-5 h-100">
                    <div className="swiper swiper theme-slider" data-thumb-target={"swiper-products-thumb"} data-products-swiper={"{\"slidesPerView\":1,\"spaceBetween\":16,\"thumbsEl\":\".swiper-products-thumb\"}"}>                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <button className="btn btn-lg btn-outline-warning rounded-pill w-100 me-3 px-2 px-sm-4 fs-9 fs-sm-8">
                  <span className="me-2 far fa-heart">                  </span>
Add to wishlist
                </button>
                <button className="btn btn-lg btn-warning rounded-pill w-100 fs-9 fs-sm-8">
                  <span className="fas fa-shopping-cart me-2">                  </span>
Add to cart
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="d-flex flex-column justify-content-between h-100">
                <div>
                  <div className="d-flex flex-wrap">
                    <div className="me-2">
                      <span className="fa fa-star text-warning">                      </span>
                      <span className="fa fa-star text-warning">                      </span>
                      <span className="fa fa-star text-warning">                      </span>
                      <span className="fa fa-star text-warning">                      </span>
                      <span className="fa fa-star text-warning">                      </span>
                    </div>
                    <p className="text-primary fw-semibold mb-2">
6548 People rated and reviewed 
                    </p>
                  </div>
                  <h3 className="mb-3 lh-sm">
24" iMac® with Retina 4.5K display - Apple M1 8GB Memory - 256GB SSD - w/Touch ID (Latest Model) - Blue
                  </h3>
                  <div className="d-flex flex-wrap align-items-start mb-3">
                    <span className="badge text-bg-success fs-9 rounded-pill me-2 fw-semibold">
#1 Best seller
                    </span>
                    <a href="#!" className="fw-semibold">
in Phoenix sell analytics 2021
                    </a>
                  </div>
                  <div className="d-flex flex-wrap align-items-center">
                    <h1 className="me-3">
$1349.99
                    </h1>
                    <p className="text-body-quaternary text-decoration-line-through fs-6 mb-0 me-3">
$1499.99
                    </p>
                    <p className="text-warning fw-bolder fs-6 mb-0">
10% off
                    </p>
                  </div>
                  <p className="text-success fw-semibold fs-7 mb-2">
In stock
                  </p>
                  <p className="mb-2 text-body-secondary">
                    <strong className="text-body-highlight">
Do you want it on Saturday, July 29th?
                    </strong>
 Choose 
                    <strong className="text-body-highlight">
Saturday Delivery 
                    </strong>
at checkout if you want your order delivered within 12 hours 43 minutes, 
                    <a href="#!" className="fw-bold">
Details. 
                    </a>
                    <strong className="text-body-highlight">
Gift wrapping is available.
                    </strong>
                  </p>
                  <p className="text-danger-dark fw-bold mb-5 mb-lg-0">
Special offer ends in 23:00:45 hours
                  </p>
                </div>
                <div>
                  <div className="mb-3">
                    <p className="fw-semibold mb-2 text-body">
Color : 
                      <span className="text-body-emphasis" data-product-color>
Blue
                      </span>
                    </p>
                    <div className="d-flex product-color-variants" data-product-color-variants>
                      <div className="rounded-1 border border-translucent me-2 active" data-variant={"Blue"} data-products-images={"[\"../../../assets/img/products/details/blue_front.png\",\"../../../assets/img/products/details/blue_back.png\",\"../../../assets/img/products/details/blue_side.png\"]"}>
                        <PhoenixImage src="/assets/img/products/details/blue_front.png" alt="" width={38} />
                      </div>
                      <div className="rounded-1 border border-translucent me-2" data-variant={"Red"} data-products-images={"[\"../../../assets/img/products/details/red_front.png\",\"../../../assets/img/products/details/red_back.png\",\"../../../assets/img/products/details/red_side.png\"]"}>
                        <PhoenixImage src="/assets/img/products/details/red_front.png" alt="" width={38} />
                      </div>
                      <div className="rounded-1 border border-translucent me-2" data-variant={"Green"} data-products-images={"[\"../../../assets/img/products/details/green_front.png\",\"../../../assets/img/products/details/green_back.png\",\"../../../assets/img/products/details/green_side.png\"]"}>
                        <PhoenixImage src="/assets/img/products/details/green_front.png" alt="" width={38} />
                      </div>
                      <div className="rounded-1 border border-translucent me-2" data-variant={"Purple"} data-products-images={"[\"../../../assets/img/products/details/purple_front.png\",\"../../../assets/img/products/details/purple_back.png\",\"../../../assets/img/products/details/purple_side.png\"]"}>
                        <PhoenixImage src="/assets/img/products/details/purple_front.png" alt="" width={38} />
                      </div>
                      <div className="rounded-1 border border-translucent me-2" data-variant={"Silver"} data-products-images={"[\"../../../assets/img/products/details/silver_front.png\",\"../../../assets/img/products/details/silver_back.png\",\"../../../assets/img/products/details/silver_side.png\"]"}>
                        <PhoenixImage src="/assets/img/products/details/silver_front.png" alt="" width={38} />
                      </div>
                      <div className="rounded-1 border border-translucent me-2" data-variant={"Yellow"} data-products-images={"[\"../../../assets/img/products/details/yellow_front.png\",\"../../../assets/img/products/details/yellow_back.png\",\"../../../assets/img/products/details/yellow_side.png\"]"}>
                        <PhoenixImage src="/assets/img/products/details/yellow_front.png" alt="" width={38} />
                      </div>
                      <div className="rounded-1 border border-translucent me-2" data-variant={"Orange"} data-products-images={"[\"../../../assets/img/products/details/orange_front.png\",\"../../../assets/img/products/details/orange_back.png\",\"../../../assets/img/products/details/orange_side.png\"]"}>
                        <PhoenixImage src="/assets/img/products/details/orange_front.png" alt="" width={38} />
                      </div>
                    </div>
                  </div>
                  <div className="row g-3 g-sm-5 align-items-end">
                    <div className="col-12 col-sm-auto">
                      <p className="fw-semibold mb-2 text-body">
Size : 
                      </p>
                      <div className="d-flex align-items-center">
                        <select className="form-select w-auto">
                          <option value="44">
44
                          </option>
                          <option value="22">
22
                          </option>
                          <option value="18">
18
                          </option>
                        </select>
                        <a href="#!" className="ms-2 fs-9 fw-semibold">
Size chart
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-sm">
                      <p className="fw-semibold mb-2 text-body">
Quantity : 
                      </p>
                      <div className="d-flex justify-content-between align-items-end">
                        <div className="d-flex flex-between-center" data-quantity>
                          <button className="btn btn-phoenix-primary px-3" data-type={"minus"}>
                            <span className="fas fa-minus">                            </span>
                          </button>
                          <input className="form-control text-center input-spin-none bg-transparent border-0 outline-none" style={{"width":"50px"} as CSSProperties} type="number" min="1" defaultValue="2" />
                          <button className="btn btn-phoenix-primary px-3" data-type={"plus"}>
                            <span className="fas fa-plus">                            </span>
                          </button>
                        </div>
                        <button className="btn btn-phoenix-primary px-3 border-0">
                          <span className="fas fa-share-alt fs-7">                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-0">
        <div className="container-small">
          <ul className="nav nav-underline fs-9 mb-4" id="productTab" role="tablist">
            <li className="nav-item">
              <a href="#tab-description" className="nav-link" id="description-tab" data-bs-toggle={"tab"}  role="tab" aria-controls="tab-description" aria-selected="true">
Description
              </a>
            </li>
            <li className="nav-item">
              <a href="#tab-specification" className="nav-link" id="specification-tab" data-bs-toggle={"tab"}  role="tab" aria-controls="tab-specification" aria-selected="false">
Specification
              </a>
            </li>
            <li className="nav-item">
              <a href="#tab-reviews" className="nav-link" id="reviews-tab" data-bs-toggle={"tab"}  role="tab" aria-controls="tab-reviews" aria-selected="false">
{"Ratings & reviews"}
              </a>
            </li>
          </ul>
          <div className="row gx-3 gy-7">
            <div className="col-12 col-lg-7 col-xl-8">
              <div className="tab-content" id="productTabContent">
                <div className="tab-pane pe-lg-6 pe-xl-12 fade show active text-body-emphasis" id="tab-description" role="tabpanel" aria-labelledby="description-tab">
                  <p className="mb-5">
CUPERTINO, CA , The M1 CPU allows Apple to deliver an all-new iMac with a lot more compact and impressively thin design. The new iMac delivers tremendous performance in an 11.5-millimeter-thin design with a stunning side profile that almost vanishes. iMac includes a 24-inch 4.5K Retina display with 11.3 million pixels, 500 nits of brightness, and over a billion colors, giving a beautiful and vivid viewing experience. It is available in a variety of striking colors to match a user's own style and brighten any area. A 1080p FaceTime HD camera, studio-quality mics, and a six-speaker sound system are all included in the new iMac, making it the greatest camera and audio system ever in a Mac. Touch ID is also making its debut on the iMac, making it easier than ever to securely log in, make Apple Pay transactions, and switch user accounts with the touch of a finger. Apps launch at lightning speed, everyday chores seem astonishingly fast and fluid, and demanding workloads like editing 4K video and working with large photos are faster than ever before thanks to the power and performance of M1 and macOS Big Sur.
                  </p>
                  <PhoenixLink href="/assets/img/products/23.png" data-gallery={"gallery-description"}>
                    <PhoenixImage src="/assets/img/products/23.png" alt="" className="img-fluid mb-5 rounded-3" />
                  </PhoenixLink>
                  <p className="mb-0">
The new iMac joins Apple's fantastic M1-powered Mac family, which includes the MacBook Air, 13-inch MacBook Pro, and Mac mini, and represents yet another step ahead in the company's shift to Apple silicon. Customers may order iMac starting Friday, April 30. It's the most personal, powerful, capable, and enjoyable it's ever been. In the second half of May, the iMac will be available."M1 is a huge step forward for the Mac," said Greg Joswiak, Apple's senior vice president of Worldwide Marketing. "Today, we're delighted to present the all-new iMac, the first Mac developed around the groundbreaking M1 processor." "The new iMac takes everything people love about iMac to an entirely new level, with its beautiful design in seven breathtaking colors, its immersive 4.5K Retina display, the greatest camera, mics, and speakers ever in a Mac, and Touch ID, combined with M1's incredible performance and macOS Big Sur's power."
                  </p>
                </div>
                <div className="tab-pane pe-lg-6 pe-xl-12 fade" id="tab-specification" role="tabpanel" aria-labelledby="specification-tab">
                  <h3 className="mb-0 ms-4 fw-bold">
Processor/Chipset
                  </h3>
                  <table className="table">
                    <thead>
                      <tr>
                        <th style={{"width":"40%"} as CSSProperties}>                        </th>
                        <th style={{"width":"60%"} as CSSProperties}>                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="bg-body-highlight align-middle">
                          <h6 className="mb-0 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
Chip name
                          </h6>
                        </td>
                        <td className="px-5 mb-0">
Apple M1 chip
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-body-highlight align-middle">
                          <h6 className="mb-0 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
Cpu core
                          </h6>
                        </td>
                        <td className="px-5 mb-0">
8 (4 performance and 4 efficiency)
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-body-highlight align-middle">
                          <h6 className="mb-0 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
Gpu core
                          </h6>
                        </td>
                        <td className="px-5 mb-0">
7
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-body-highlight align-middle">
                          <h6 className="mb-0 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
Neural engine
                          </h6>
                        </td>
                        <td className="px-5 mb-0">
16 cores
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h3 className="mb-0 mt-6 ms-4 fw-bold">
Storage
                  </h3>
                  <table className="table">
                    <thead>
                      <tr>
                        <th style={{"width":"40%"} as CSSProperties}>                        </th>
                        <th style={{"width":"60%"} as CSSProperties}>                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="bg-body-highlight align-middle">
                          <h6 className="mb-0 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
Memory
                          </h6>
                        </td>
                        <td className="px-5 mb-0">
8 GB unified
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-body-highlight align-middle">
                          <h6 className="mb-0 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
SSD
                          </h6>
                        </td>
                        <td className="px-5 mb-0">
256 GB
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h3 className="mb-0 mt-6 ms-4 fw-bold">
Display
                  </h3>
                  <table className="table">
                    <thead>
                      <tr>
                        <th style={{"width":"40%"} as CSSProperties}>                        </th>
                        <th style={{"width":"60%"} as CSSProperties}>                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="bg-body-highlight align-middle">
                          <h6 className="mb-0 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
Display type
                          </h6>
                        </td>
                        <td className="px-5 mb-0">
Retina
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-body-highlight align-middle">
                          <h6 className="mb-0 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
Size
                          </h6>
                        </td>
                        <td className="px-5 mb-0">
24” (actual diagonal 23.5”)
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-body-highlight align-middle">
                          <h6 className="mb-0 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
Resolution
                          </h6>
                        </td>
                        <td className="px-5 mb-0">
4480 x 2520 
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-body-highlight align-middle">
                          <h6 className="mb-0 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
Brightness
                          </h6>
                        </td>
                        <td className="px-5 mb-0">
500 nits
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h3 className="mb-0 mt-6 ms-4 fw-bold">
Additional Specifications
                  </h3>
                  <table className="table">
                    <thead>
                      <tr>
                        <th style={{"width":"40%"} as CSSProperties}>                        </th>
                        <th style={{"width":"60%"} as CSSProperties}>                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="bg-body-highlight align-middle">
                          <h6 className="mb-0 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
Camera
                          </h6>
                        </td>
                        <td className="px-5 mb-0">
1080p FaceTime HD camera
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-body-highlight">
                          <h6 className="mb-0 mt-1 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
Video 
                          </h6>
                        </td>
                        <td className="px-5 mb-0">
Full native resolution on built-in display at 1 billion colors; 
                          <br />
One external display with up to 6K resolution at 60Hz
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-body-highlight">
                          <h6 className="mb-0 mt-1 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
Audio
                          </h6>
                        </td>
                        <td className="px-5 mb-0">
High-fidelity six-speaker with force-cancelling woofers 
                          <br />
Wide stereo sound 
                          <br />
Spatial audio with Dolby Atmos3
                          <br />
Studio-quality three-mic array with directional beamforming
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-body-highlight">
                          <h6 className="mb-0 mt-1 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
Inputs 
                          </h6>
                        </td>
                        <td className="px-5 mb-0">
Magic Keyboard
                          <br />
Magic Mouse
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-body-highlight">
                          <h6 className="mb-0 mt-1 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
Wireless 
                          </h6>
                        </td>
                        <td className="px-5 mb-0">
802.11ax Wi-Fi 6 (IEEE 802.11a/b/g/n/ac compatible)
                          <br />
Bluetooth 5.0 wireless technology
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-body-highlight">
                          <h6 className="mb-0 mt-1 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
{"I/O & expantions "}
                          </h6>
                        </td>
                        <td className="px-5 mb-0">
Thunderbolt / USB 4 ports x 2
                          <br />
3.5 mm headphone jack
                          <br />
Gigabit Ethernet
                          <br />
USB 3 ports x2
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-body-highlight align-middle">
                          <h6 className="mb-0 text-body text-uppercase fw-bolder px-4 fs-9 lh-sm">
Operating System
                          </h6>
                        </td>
                        <td className="px-5 mb-0">
macOS Monterey 
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h3 className="mb-3 mt-6 ms-4 fw-bold">
In The Box
                  </h3>
                  <p className="lh-sm border-top border-translucent mb-0 py-3 px-4">
iMac 24”
                  </p>
                  <p className="lh-sm border-top border-translucent mb-0 py-3 px-4">
Magic Keyboard 
                  </p>
                  <p className="lh-sm border-top border-translucent mb-0 py-3 px-4">
Magic Mouse
                  </p>
                  <p className="lh-sm border-top border-translucent mb-0 py-3 px-4">
143W power adapter
                  </p>
                  <p className="lh-sm border-top border-translucent mb-0 py-3 px-4">
2m Power Cord
                  </p>
                  <p className="lh-sm border-y border-translucent mb-0 py-3 px-4">
USB-C to Lightning Cable
                  </p>
                </div>
                <div className="tab-pane fade" id="tab-reviews" role="tabpanel" aria-labelledby="reviews-tab">
                  <div className="bg-body-emphasis rounded-3 p-4 border border-translucent">
                    <div className="row g-3 justify-content-between mb-4">
                      <div className="col-auto">
                        <div className="d-flex align-items-center flex-wrap">
                          <h2 className="fw-bolder me-3">
4.9
                            <span className="fs-8 text-body-quaternary fw-bold">
/5
                            </span>
                          </h2>
                          <div className="me-3">
                            <span className="fa fa-star text-warning fs-6">                            </span>
                            <span className="fa fa-star text-warning fs-6">                            </span>
                            <span className="fa fa-star text-warning fs-6">                            </span>
                            <span className="fa fa-star text-warning fs-6">                            </span>
                            <span className="fa fa-star-half-alt star-icon text-warning fs-6">                            </span>
                          </div>
                          <p className="text-body mb-0 fw-semibold fs-7">
6548 ratings and 567 reviews
                          </p>
                        </div>
                      </div>
                      <div className="col-auto">
                        <button className="btn btn-primary rounded-pill" data-bs-toggle={"modal"} data-bs-target={"#reviewModal"}>
Rate this product
                        </button>
                        <div className="modal fade" id="reviewModal" tabIndex={-1} aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content p-4">
                              <div className="d-flex flex-between-center mb-2">
                                <h5 className="modal-title fs-8 mb-0">
Your rating
                                </h5>
                                <button className="btn p-0 fs-10">
Clear
                                </button>
                              </div>
                              <div className="mb-3" data-rater={"{\"starSize\":32,\"step\":0.5}"}>                              </div>
                              <div className="mb-3">
                                <h5 className="text-body-highlight mb-3">
Your review
                                </h5>
                                <textarea className="form-control" id="reviewTextarea" rows={5} placeholder="Write your review" defaultValue="" />
                              </div>
                              <div className="dropzone dropzone-multiple p-0 mb-3" id="my-awesome-dropzone" data-dropzone>
                                <div className="fallback">
                                  <input name="file" type="file" multiple />
                                </div>
                                <div className="dz-preview d-flex flex-wrap">
                                  <div className="border border-translucent bg-body-emphasis rounded-3 d-flex flex-center position-relative me-2 mb-2" style={{"height":"80px","width":"80px"} as CSSProperties}>
                                    <PhoenixImage src="/assets/img/products/23.png" alt="..." className="dz-image" />
                                    <a href="#!" className="dz-remove text-body-quaternary"  data-dz-remove>
                                      <span data-feather={"x"}>                                      </span>
                                    </a>
                                  </div>
                                </div>
                                <div className="dz-message text-body-tertiary text-opacity-85 fw-bold fs-9 p-4" data-dz-message>
 Drag your photo here 
                                  <span className="text-body-secondary">
or 
                                  </span>
                                  <button className="btn btn-link p-0">
Browse from device 
                                  </button>
                                  <br />
                                  <PhoenixImage src="/assets/img/icons/image-icon.png" alt="" className="mt-3 me-2" width={24} />
                                </div>
                              </div>
                              <div className="d-sm-flex flex-between-center">
                                <div className="form-check flex-1">
                                  <input className="form-check-input" id="reviewAnonymously" type="checkbox" defaultValue="" defaultChecked />
                                  <label className="form-check-label mb-0 text-body-emphasis fw-semibold" htmlFor="reviewAnonymously">
Review anonymously
                                  </label>
                                </div>
                                <button className="btn ps-0" data-bs-dismiss={"modal"}>
Close
                                </button>
                                <button className="btn btn-primary rounded-pill">
Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 hover-actions-trigger btn-reveal-trigger">
                      <div className="d-flex justify-content-between">
                        <h5 className="mb-2">
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="text-body-secondary ms-1">
 by
                          </span>
 Zingko Kudobum 
                        </h5>
                        <div className="btn-reveal-trigger position-static">
                          <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                      </div>
                      <p className="text-body-tertiary fs-9 mb-1">
35 mins ago
                      </p>
                      <p className="text-body-highlight mb-3">
100% satisfied
                      </p>
                      <div className="row g-2 mb-2">
                        <div className="col-auto">
                          <PhoenixLink href="/assets/img/e-commerce/review-11.jpg" data-gallery={"gallery-0"}>
                            <PhoenixImage src="/assets/img/e-commerce/review-11.jpg" alt="" height={164} />
                          </PhoenixLink>
                        </div>
                        <div className="col-auto">
                          <PhoenixLink href="/assets/img/e-commerce/review-12.jpg" data-gallery={"gallery-0"}>
                            <PhoenixImage src="/assets/img/e-commerce/review-12.jpg" alt="" height={164} />
                          </PhoenixLink>
                        </div>
                        <div className="col-auto">
                          <PhoenixLink href="/assets/img/e-commerce/review-13.jpg" data-gallery={"gallery-0"}>
                            <PhoenixImage src="/assets/img/e-commerce/review-13.jpg" alt="" height={164} />
                          </PhoenixLink>
                        </div>
                      </div>
                      <div className="d-flex">
                        <span className="fas fa-reply fa-rotate-180 me-2">                        </span>
                        <div>
                          <h5>
Respond from store
                            <span className="text-body-tertiary fs-9 ms-2">
5 mins ago
                            </span>
                          </h5>
                          <p className="text-body-highlight mb-0">
Thank you for your valuable feedback
                          </p>
                        </div>
                      </div>
                      <div className="hover-actions top-0">
                        <button className="btn btn-sm btn-phoenix-secondary me-2">
                          <span className="fas fa-thumbs-up">                          </span>
                        </button>
                        <button className="btn btn-sm btn-phoenix-secondary me-1">
                          <span className="fas fa-thumbs-down">                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="mb-4 hover-actions-trigger btn-reveal-trigger">
                      <div className="d-flex justify-content-between">
                        <h5 className="mb-2">
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                          </span>
                          <span className="text-body-secondary ms-1">
 by
                          </span>
 Piere Auguste Renoir 
                        </h5>
                        <div className="btn-reveal-trigger position-static">
                          <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                      </div>
                      <p className="text-body-tertiary fs-9 mb-1">
23 Oct, 12:09 PM
                      </p>
                      <p className="text-body-highlight mb-1">
Since the spring loaded event, I've been wanting an iMac, and it's exceeded my expectations. The screen is clear, the colors are vibrant (I got the blue one! ), and the performance is more than adequate for my needs as a college student. That's how good it is.
                      </p>
                      <div className="hover-actions top-0">
                        <button className="btn btn-sm btn-phoenix-secondary me-2">
                          <span className="fas fa-thumbs-up">                          </span>
                        </button>
                        <button className="btn btn-sm btn-phoenix-secondary me-1">
                          <span className="fas fa-thumbs-down">                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="mb-4 hover-actions-trigger btn-reveal-trigger">
                      <div className="d-flex justify-content-between">
                        <h5 className="mb-2">
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star-half-alt star-icon text-warning">                          </span>
                          <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                          </span>
                          <span className="text-body-secondary ms-1">
 by
                          </span>
 Abel Kablmann 
                        </h5>
                        <div className="btn-reveal-trigger position-static">
                          <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                      </div>
                      <p className="text-body-tertiary fs-9 mb-1">
21 Oct, 12:00 PM
                      </p>
                      <p className="text-body-highlight mb-1">
Over the years, I've preferred Apple products. My job has allowed me to use Windows products on laptops and PCs. I've owned Windows laptops and desktops for home use in the past and will never use them again.
                      </p>
                      <div className="hover-actions top-0">
                        <button className="btn btn-sm btn-phoenix-secondary me-2">
                          <span className="fas fa-thumbs-up">                          </span>
                        </button>
                        <button className="btn btn-sm btn-phoenix-secondary me-1">
                          <span className="fas fa-thumbs-down">                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="mb-4 hover-actions-trigger btn-reveal-trigger">
                      <div className="d-flex justify-content-between">
                        <h5 className="mb-2">
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="text-body-secondary ms-1">
 by
                          </span>
 Pennywise Alfred 
                        </h5>
                        <div className="btn-reveal-trigger position-static">
                          <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
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
                      </div>
                      <p className="text-body-tertiary fs-9 mb-1">
35 mins ago
                      </p>
                      <p className="text-body-highlight mb-3">
Nice and beautiful product.
                      </p>
                      <div className="row g-2 mb-2">
                        <div className="col-auto">
                          <PhoenixLink href="/assets/img/e-commerce/review-14.jpg" data-gallery={"gallery-3"}>
                            <PhoenixImage src="/assets/img/e-commerce/review-14.jpg" alt="" height={164} />
                          </PhoenixLink>
                        </div>
                        <div className="col-auto">
                          <PhoenixLink href="/assets/img/e-commerce/review-15.jpg" data-gallery={"gallery-3"}>
                            <PhoenixImage src="/assets/img/e-commerce/review-15.jpg" alt="" height={164} />
                          </PhoenixLink>
                        </div>
                        <div className="col-auto">
                          <PhoenixLink href="/assets/img/e-commerce/review-16.jpg" data-gallery={"gallery-3"}>
                            <PhoenixImage src="/assets/img/e-commerce/review-16.jpg" alt="" height={164} />
                          </PhoenixLink>
                        </div>
                      </div>
                      <div className="hover-actions top-0">
                        <button className="btn btn-sm btn-phoenix-secondary me-2">
                          <span className="fas fa-thumbs-up">                          </span>
                        </button>
                        <button className="btn btn-sm btn-phoenix-secondary me-1">
                          <span className="fas fa-thumbs-down">                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <nav>
                        <ul className="pagination mb-0">
                          <li className="page-item">
                            <a href="#!" className="page-link">
                              <span className="fas fa-chevron-left">                              </span>
                            </a>
                          </li>
                          <li className="page-item">
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
                          <li className="page-item active">
                            <a href="#!" className="page-link">
4
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#!" className="page-link">
5
                            </a>
                          </li>
                          <li className="page-item">
                            <a href="#!" className="page-link">
                              <span className="fas fa-chevron-right">                              </span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 col-xl-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="text-body-emphasis">
Usually Bought Together
                  </h5>
                  <div className="w-75">
                    <p className="text-body-tertiary fs-9 fw-bold line-clamp-1">
with 24" iMac® with Retina 4.5K display - Apple M1 8GB Memory - 256GB SSD - w/Touch ID (Latest Model) - Blue
                    </p>
                  </div>
                  <div className="border-dashed border-y border-translucent py-4">
                    <div className="d-flex align-items-center mb-5">
                      <div className="form-check mb-0">
                        <input className="form-check-input" type="checkbox" defaultChecked />
                        <label className="form-check-label">                        </label>
                      </div>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details">
                        <PhoenixImage src="/assets/img/products/2.png" alt="" className="border border-translucent rounded" width={53} />
                      </PhoenixLink>
                      <div className="ms-2">
                        <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fs-9 fw-bold line-clamp-2 mb-2">
 iPhone 13 pro max-Pacific Blue- 128GB
                        </PhoenixLink>
                        <h5>
$899.99
                        </h5>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-5">
                      <div className="form-check mb-0">
                        <input className="form-check-input" type="checkbox" defaultChecked />
                        <label className="form-check-label">                        </label>
                      </div>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details">
                        <PhoenixImage src="/assets/img/products/16.png" alt="" className="border border-translucent rounded" width={53} />
                      </PhoenixLink>
                      <div className="ms-2">
                        <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fs-9 fw-bold line-clamp-2 mb-2">
Apple AirPods Pro
                        </PhoenixLink>
                        <h5>
$59.00
                        </h5>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-0">
                      <div className="form-check mb-0">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">                        </label>
                      </div>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details">
                        <PhoenixImage src="/assets/img/products/10.png" alt="" className="border border-translucent rounded" width={53} />
                      </PhoenixLink>
                      <div className="ms-2">
                        <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fs-9 fw-bold line-clamp-2 mb-2">
Apple Magic Mouse (Wireless, Rechargable) - Silver, Worst mouse ever
                        </PhoenixLink>
                        <h5>
$89.00
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-end justify-content-between pt-3">
                    <div>
                      <h5 className="mb-2 text-body-tertiary text-opacity-85">
Total
                      </h5>
                      <h4 className="mb-0 text-body-emphasis">
$958.99
                      </h4>
                    </div>
                    <div className="btn btn-outline-warning">
Add 3 items to cart
                      <span className="fas fa-shopping-cart ms-2">                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>



    <section className="py-0 mb-9">
      <div className="container">
        <div className="d-flex flex-between-center mb-3">
          <div>
            <h3>
Similar Products
            </h3>
            <p className="mb-0 text-body-tertiary fw-semibold">
Essential for a better life
            </p>
          </div>
          <button className="btn btn-sm btn-phoenix-primary">
View all
          </button>
        </div>
        <div className="swiper-theme-container products-slider">
          <div className="swiper swiper theme-slider" data-swiper={"{\"slidesPerView\":1,\"spaceBetween\":16,\"breakpoints\":{\"450\":{\"slidesPerView\":2,\"spaceBetween\":16},\"768\":{\"slidesPerView\":3,\"spaceBetween\":16},\"992\":{\"slidesPerView\":4,\"spaceBetween\":16},\"1200\":{\"slidesPerView\":5,\"spaceBetween\":16},\"1540\":{\"slidesPerView\":6,\"spaceBetween\":16}}}"}>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="position-relative text-decoration-none product-card h-100">
                  <div className="d-flex flex-column justify-content-between h-100">
                    <div>
                      <div className="border border-1 border-translucent rounded-3 position-relative mb-3">
                        <button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Add to wishlist">
                          <span className="fas fa-heart d-block-hover" data-fa-transform={"down-1"}>                          </span>
                          <span className="far fa-heart d-none-hover" data-fa-transform={"down-1"}>                          </span>
                        </button>
                        <PhoenixImage src="/assets/img/products/1.png" alt="" className="img-fluid" />
                      </div>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                        <h6 className="mb-2 lh-sm line-clamp-3 product-name">
{"Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends Carbon/Graphite, One Size (S & L Bands)"}
                        </h6>
                      </PhoenixLink>
                      <p className="fs-9">
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="text-body-quaternary fw-semibold ms-1">
(59 people rated)
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
                          <span className="fas fa-heart d-block-hover" data-fa-transform={"down-1"}>                          </span>
                          <span className="far fa-heart d-none-hover" data-fa-transform={"down-1"}>                          </span>
                        </button>
                        <PhoenixImage src="/assets/img/products/3.png" alt="" className="img-fluid" />
                      </div>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                        <h6 className="mb-2 lh-sm line-clamp-3 product-name">
Apple MacBook Pro 13 inch-M1-8/256GB-Space Gray
                        </h6>
                      </PhoenixLink>
                      <p className="fs-9">
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="text-body-quaternary fw-semibold ms-1">
(13 people rated)
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
                          <span className="fas fa-heart d-block-hover" data-fa-transform={"down-1"}>                          </span>
                          <span className="far fa-heart d-none-hover" data-fa-transform={"down-1"}>                          </span>
                        </button>
                        <PhoenixImage src="/assets/img/products/5.png" alt="" className="img-fluid" />
                      </div>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                        <h6 className="mb-2 lh-sm line-clamp-3 product-name">
Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset
                        </h6>
                      </PhoenixLink>
                      <p className="fs-9">
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="text-body-quaternary fw-semibold ms-1">
(64 people rated)
                        </span>
                      </p>
                    </div>
                    <div>
                      <h3 className="text-body-emphasis">
$59.00
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
                        <button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Add to wishlist">
                          <span className="fas fa-heart d-block-hover" data-fa-transform={"down-1"}>                          </span>
                          <span className="far fa-heart d-none-hover" data-fa-transform={"down-1"}>                          </span>
                        </button>
                        <PhoenixImage src="/assets/img/products/2.png" alt="" className="img-fluid" />
                        <span className="badge text-bg-success fs-10 product-verified-badge">
Verified
                          <span className="fas fa-check ms-1">                          </span>
                        </span>
                      </div>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                        <h6 className="mb-2 lh-sm line-clamp-3 product-name">
iPhone 13 pro max-Pacific Blue, 128GB storage
                        </h6>
                      </PhoenixLink>
                      <p className="fs-9">
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="text-body-quaternary fw-semibold ms-1">
(32 people rated)
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
$855.00
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
                          <span className="fas fa-heart d-block-hover" data-fa-transform={"down-1"}>                          </span>
                          <span className="far fa-heart d-none-hover" data-fa-transform={"down-1"}>                          </span>
                        </button>
                        <PhoenixImage src="/assets/img/products/16.png" alt="" className="img-fluid" />
                      </div>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                        <h6 className="mb-2 lh-sm line-clamp-3 product-name">
Apple AirPods Pro
                        </h6>
                      </PhoenixLink>
                      <p className="fs-9">
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="text-body-quaternary fw-semibold ms-1">
(39 people rated)
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="fs-9 text-body-highlight fw-bold mb-1">
free with iPhone 5s
                      </p>
                      <p className="fs-9 text-body-tertiary mb-2">
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
                          <span className="fas fa-heart d-block-hover" data-fa-transform={"down-1"}>                          </span>
                          <span className="far fa-heart d-none-hover" data-fa-transform={"down-1"}>                          </span>
                        </button>
                        <PhoenixImage src="/assets/img/products/10.png" alt="" className="img-fluid" />
                      </div>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                        <h6 className="mb-2 lh-sm line-clamp-3 product-name">
Apple Magic Mouse (Wireless, Rechargable) - Silver
                        </h6>
                      </PhoenixLink>
                      <p className="fs-9">
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="text-body-quaternary fw-semibold ms-1">
(6 people rated)
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="fs-9 text-body-highlight fw-bold mb-1">
Bundle availabe
                      </p>
                      <p className="fs-9 text-body-tertiary mb-2">
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
                          <span className="fas fa-heart d-block-hover" data-fa-transform={"down-1"}>                          </span>
                          <span className="far fa-heart d-none-hover" data-fa-transform={"down-1"}>                          </span>
                        </button>
                        <PhoenixImage src="/assets/img/products/6.png" alt="" className="img-fluid" />
                      </div>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="stretched-link">
                        <h6 className="mb-2 lh-sm line-clamp-3 product-name">
PlayStation 5 DualSense Wireless Controller
                        </h6>
                      </PhoenixLink>
                      <p className="fs-9">
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="fa fa-star text-warning">                        </span>
                        <span className="text-body-quaternary fw-semibold ms-1">
(67 people rated)
                        </span>
                      </p>
                    </div>
                    <div>
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
            </div>
          </div>
          <div className="swiper-nav">
            <div className="swiper-button-next">
              <span className="fas fa-chevron-right nav-icon">              </span>
            </div>
            <div className="swiper-button-prev">
              <span className="fas fa-chevron-left nav-icon">              </span>
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
