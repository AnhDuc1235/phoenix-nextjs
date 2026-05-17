'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Profile() {
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
      <div className="container-small">
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
        <div className="row align-items-center justify-content-between g-3 mb-4">
          <div className="col-auto">
            <h2 className="mb-0">
Profile
            </h2>
          </div>
          <div className="col-auto">
            <div className="row g-2 g-sm-3">
              <div className="col-auto">
                <button className="btn btn-phoenix-danger">
                  <span className="fas fa-trash-alt me-2">                  </span>
Delete customer
                </button>
              </div>
              <div className="col-auto">
                <button className="btn btn-phoenix-secondary">
                  <span className="fas fa-key me-2">                  </span>
Reset password
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3 mb-6">
          <div className="col-12 col-lg-8">
            <div className="card h-100">
              <div className="card-body">
                <div className="border-bottom border-dashed pb-4">
                  <div className="row align-items-center g-3 g-sm-5 text-center text-sm-start">
                    <div className="col-12 col-sm-auto">
                      <input className="d-none" id="avatarFile" type="file" />
                      <label className="cursor-pointer avatar avatar-5xl" htmlFor="avatarFile">
                        <PhoenixImage src="/assets/img/team/15.webp" alt="" className="rounded-circle" />
                      </label>
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
                </div>
                <div className="d-flex flex-between-center pt-4">
                  <div>
                    <h6 className="mb-2 text-body-secondary">
Total Spent
                    </h6>
                    <h4 className="fs-7 text-body-highlight mb-0">
$894
                    </h4>
                  </div>
                  <div className="text-end">
                    <h6 className="mb-2 text-body-secondary">
Last Order
                    </h6>
                    <h4 className="fs-7 text-body-highlight mb-0">
1 week ago
                    </h4>
                  </div>
                  <div className="text-end">
                    <h6 className="mb-2 text-body-secondary">
Total Orders
                    </h6>
                    <h4 className="fs-7 text-body-highlight mb-0">
97 
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="border-bottom border-dashed">
                  <h4 className="mb-3">
Default Address 
                    <button className="btn btn-link p-0" type="button">
                      <span className="fas fa-edit fs-9 ms-3 text-body-quaternary">                      </span>
                    </button>
                  </h4>
                </div>
                <div className="pt-4 mb-7 mb-lg-4 mb-xl-7">
                  <div className="row justify-content-between">
                    <div className="col-auto">
                      <h5 className="text-body-highlight">
Address
                      </h5>
                    </div>
                    <div className="col-auto">
                      <p className="text-body-secondary">
Vancouver, British Columbia
                        <br />
Canada
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-top border-dashed pt-4">
                  <div className="row flex-between-center mb-2">
                    <div className="col-auto">
                      <h5 className="text-body-highlight mb-0">
Email
                      </h5>
                    </div>
                    <div className="col-auto">
                      <a href="mailto:shatinon@jeemail.com" className="lh-1">
shatinon@jeemail.com
                      </a>
                    </div>
                  </div>
                  <div className="row flex-between-center">
                    <div className="col-auto">
                      <h5 className="text-body-highlight mb-0">
Phone
                      </h5>
                    </div>
                    <div className="col-auto">
                      <a href="tel:+1234567890">
+1234567890
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="scrollbar">
            <ul className="nav nav-underline fs-9 flex-nowrap mb-3 pb-1" id="myTab" role="tablist">
              <li className="nav-item me-3">
                <a href="#tab-orders" className="nav-link text-nowrap active" id="orders-tab" data-bs-toggle={"tab"}  role="tab" aria-controls="tab-orders" aria-selected="true">
                  <span className="fas fa-shopping-cart me-2">                  </span>Orders                   <span className="text-body-tertiary fw-normal">
 (35)
                  </span>
                </a>
              </li>
              <li className="nav-item me-3">
                <a href="#tab-reviews" className="nav-link text-nowrap" id="reviews-tab" data-bs-toggle={"tab"}  role="tab" aria-controls="tab-orders" aria-selected="true">
                  <span className="fas fa-star me-2">                  </span>Reviews                  <span className="text-body-tertiary fw-normal">
 (24)
                  </span>
                </a>
              </li>
              <li className="nav-item me-3">
                <a href="#tab-wishlist" className="nav-link text-nowrap" id="wishlist-tab" data-bs-toggle={"tab"}  role="tab" aria-controls="tab-orders" aria-selected="true">
                  <span className="fas fa-heart me-2">                  </span>Wishlist
                </a>
              </li>
              <li className="nav-item me-3">
                <a href="#tab-stores" className="nav-link text-nowrap" id="stores-tab" data-bs-toggle={"tab"}  role="tab" aria-controls="tab-stores" aria-selected="true">
                  <span className="fas fa-home me-2">                  </span>Stores
                </a>
              </li>
              <li className="nav-item">
                <a href="#tab-personal-info" className="nav-link text-nowrap" id="personal-info-tab" data-bs-toggle={"tab"}  role="tab" aria-controls="tab-personal-info" aria-selected="true">
                  <span className="fas fa-user me-2">                  </span>Personal info
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="profileTabContent">
            <div className="tab-pane fade show active" id="tab-orders" role="tabpanel" aria-labelledby="orders-tab">
              <div className="border-top border-bottom border-translucent" id="profileOrdersTable" data-list={"{\"valueNames\":[\"order\",\"status\",\"delivery\",\"date\",\"total\"],\"page\":6,\"pagination\":true}"}>
                <div className="table-responsive scrollbar">
                  <table className="table fs-9 mb-0">
                    <thead>
                      <tr>
                        <th className="sort white-space-nowrap align-middle pe-3 ps-0" scope="col" data-sort={"order"} style={{"width":"15%","minWidth":"140px"} as CSSProperties}>
ORDER
                        </th>
                        <th className="sort align-middle pe-3" scope="col" data-sort={"status"} style={{"width":"15%","minWidth":"180px"} as CSSProperties}>
STATUS
                        </th>
                        <th className="sort align-middle text-start" scope="col" data-sort={"delivery"} style={{"width":"20%","minWidth":"160px"} as CSSProperties}>
DELIVERY METHOD
                        </th>
                        <th className="sort align-middle pe-0 text-end" scope="col" data-sort={"date"} style={{"width":"15%","minWidth":"160px"} as CSSProperties}>
DATE
                        </th>
                        <th className="sort align-middle text-end" scope="col" data-sort={"total"} style={{"width":"15%","minWidth":"160px"} as CSSProperties}>
TOTAL
                        </th>
                        <th className="align-middle pe-0 text-end" scope="col" style={{"width":"15%"} as CSSProperties}>                        </th>
                      </tr>
                    </thead>
                    <tbody className="list" id="profile-order-table-body"><tr className="hover-actions-trigger btn-reveal-trigger position-static">
                        <td className="order align-middle white-space-nowrap py-2 ps-0">
                          <a href="#!" className="fw-semibold text-primary">
#2453
                          </a>
                        </td>
                        <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                          <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                            <span className="badge-label">
Shipped
                            </span>
                            <span className="ms-1" data-feather={"check"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                            </span>
                          </span>
                        </td>
                        <td className="delivery align-middle white-space-nowrap text-body py-2">
Cash on delivery
                        </td>
                        <td className="total align-middle text-body-tertiary text-end py-2">
Dec 12, 12:56 PM
                        </td>
                        <td className="date align-middle fw-semibold text-end py-2 text-body-highlight">
$87
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
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="order align-middle white-space-nowrap py-2 ps-0">
                          <a href="#!" className="fw-semibold text-primary">
#2452
                          </a>
                        </td>
                        <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                          <span className="badge badge-phoenix fs-10 badge-phoenix-info">
                            <span className="badge-label">
Ready to pickup
                            </span>
                            <span className="ms-1" data-feather={"info"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                            </span>
                          </span>
                        </td>
                        <td className="delivery align-middle white-space-nowrap text-body py-2">
Free shipping
                        </td>
                        <td className="total align-middle text-body-tertiary text-end py-2">
Dec 9, 2:28PM
                        </td>
                        <td className="date align-middle fw-semibold text-end py-2 text-body-highlight">
$7264
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
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="order align-middle white-space-nowrap py-2 ps-0">
                          <a href="#!" className="fw-semibold text-primary">
#2451
                          </a>
                        </td>
                        <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                          <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                            <span className="badge-label">
Partially fulfilled
                            </span>
                            <span className="ms-1" data-feather={"clock"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                            </span>
                          </span>
                        </td>
                        <td className="delivery align-middle white-space-nowrap text-body py-2">
Local pickup
                        </td>
                        <td className="total align-middle text-body-tertiary text-end py-2">
Dec 4, 12:56 PM
                        </td>
                        <td className="date align-middle fw-semibold text-end py-2 text-body-highlight">
$375
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
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="order align-middle white-space-nowrap py-2 ps-0">
                          <a href="#!" className="fw-semibold text-primary">
#2450
                          </a>
                        </td>
                        <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                          <span className="badge badge-phoenix fs-10 badge-phoenix-secondary">
                            <span className="badge-label">
Canceled
                            </span>
                            <span className="ms-1" data-feather={"x"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                            </span>
                          </span>
                        </td>
                        <td className="delivery align-middle white-space-nowrap text-body py-2">
Standard shipping
                        </td>
                        <td className="total align-middle text-body-tertiary text-end py-2">
Dec 1, 4:07 AM
                        </td>
                        <td className="date align-middle fw-semibold text-end py-2 text-body-highlight">
$657
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
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="order align-middle white-space-nowrap py-2 ps-0">
                          <a href="#!" className="fw-semibold text-primary">
#2449
                          </a>
                        </td>
                        <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                          <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                            <span className="badge-label">
fulfilled
                            </span>
                            <span className="ms-1" data-feather={"check"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                            </span>
                          </span>
                        </td>
                        <td className="delivery align-middle white-space-nowrap text-body py-2">
Express
                        </td>
                        <td className="total align-middle text-body-tertiary text-end py-2">
Nov 28, 7:28 PM
                        </td>
                        <td className="date align-middle fw-semibold text-end py-2 text-body-highlight">
$9562
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
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="order align-middle white-space-nowrap py-2 ps-0">
                          <a href="#!" className="fw-semibold text-primary">
#2448
                          </a>
                        </td>
                        <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                          <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
                            <span className="badge-label">
Unfulfilled
                            </span>
                            <span className="ms-1" data-feather={"check"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                            </span>
                          </span>
                        </td>
                        <td className="delivery align-middle white-space-nowrap text-body py-2">
Local delivery
                        </td>
                        <td className="total align-middle text-body-tertiary text-end py-2">
Nov 24, 10:16 AM
                        </td>
                        <td className="date align-middle fw-semibold text-end py-2 text-body-highlight">
$256
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
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="order align-middle white-space-nowrap py-2 ps-0">
                          <a href="#!" className="fw-semibold text-body-tertiary text-opacity-85 pointers-events-none text-decoration-none">
#2447
                          </a>
                        </td>
                        <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                          <span className="badge badge-phoenix fs-10 badge-phoenix-secondary">
                            <span className="badge-label">
Cancelled
                            </span>
                            <span className="ms-1" data-feather={"x"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                            </span>
                          </span>
                        </td>
                        <td className="delivery align-middle white-space-nowrap text-body py-2">
Standard shipping
                        </td>
                        <td className="total align-middle text-body-tertiary text-end py-2">
Nov 10, 12:00 PM
                        </td>
                        <td className="date align-middle fw-semibold text-end py-2 text-body-tertiary text-opacity-85">
$898
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
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="order align-middle white-space-nowrap py-2 ps-0">
                          <a href="#!" className="fw-semibold text-primary">
#2446
                          </a>
                        </td>
                        <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                          <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                            <span className="badge-label">
shipped
                            </span>
                            <span className="ms-1" data-feather={"check"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                            </span>
                          </span>
                        </td>
                        <td className="delivery align-middle white-space-nowrap text-body py-2">
Express
                        </td>
                        <td className="total align-middle text-body-tertiary text-end py-2">
Nov 12, 12:20 PM
                        </td>
                        <td className="date align-middle fw-semibold text-end py-2 text-body-highlight">
$4116
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
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="order align-middle white-space-nowrap py-2 ps-0">
                          <a href="#!" className="fw-semibold text-body-tertiary text-opacity-85 pointers-events-none text-decoration-none">
#2445
                          </a>
                        </td>
                        <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                          <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                            <span className="badge-label">
fulfilled
                            </span>
                            <span className="ms-1" data-feather={"check"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                            </span>
                          </span>
                        </td>
                        <td className="delivery align-middle white-space-nowrap text-body py-2">
Free shipping
                        </td>
                        <td className="total align-middle text-body-tertiary text-end py-2">
Oct 19, 1:20 PM
                        </td>
                        <td className="date align-middle fw-semibold text-end py-2 text-body-tertiary text-opacity-85">
$4116
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
            <div className="tab-pane fade" id="tab-reviews" role="tabpanel" aria-labelledby="reviews-tab">
              <div className="border-y" id="profileRatingTable" data-list={"{\"valueNames\":[\"product\",\"rating\",\"review\",\"status\",\"date\"],\"page\":6,\"pagination\":true}"}>
                <div className="table-responsive scrollbar">
                  <table className="table fs-9 mb-0">
                    <thead>
                      <tr>
                        <th className="sort white-space-nowrap align-middle" scope="col" style={{"minWidth":"220px"} as CSSProperties} data-sort={"product"}>
PRODUCT
                        </th>
                        <th className="sort align-middle" scope="col" data-sort={"rating"} style={{"maxWidth":"10%"} as CSSProperties}>
RATING
                        </th>
                        <th className="sort align-middle" scope="col" style={{"minWidth":"480px"} as CSSProperties} data-sort={"review"}>
REVIEW
                        </th>
                        <th className="sort align-middle" scope="col" style={{"maxWidth":"12%"} as CSSProperties} data-sort={"status"}>
STATUS
                        </th>
                        <th className="sort text-end align-middle" scope="col" style={{"maxWidth":"10%"} as CSSProperties} data-sort={"date"}>
DATE
                        </th>
                        <th className="sort text-end pe-0 align-middle" scope="col" style={{"width":"7%"} as CSSProperties}>                        </th>
                      </tr>
                    </thead>
                    <tbody className="list" id="profile-review-table-body"><tr className="hover-actions-trigger btn-reveal-trigger position-static">
                        <td className="align-middle product pe-3">
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-1">
{"Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends, Carbon/Graphite, One Size (S & L Bands)"}
                          </PhoenixLink>
                        </td>
                        <td className="align-middle rating white-space-nowrap fs-10">
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                          </span>
                        </td>
                        <td className="align-middle review pe-7">
                          <p className="fw-semibold text-body-highlight mb-0 line-clamp-2">
This Fitbit is fantastic! I was trying to be in better shape and needed some motivation, so I decided to treat myself to a new Fitbit.
                          </p>
                        </td>
                        <td className="align-middle status pe-9">
                          <span className="badge badge-phoenix fs-10 badge-phoenix-success">
Approaved
                            <span className="ms-1" data-feather={"check"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                            </span>
                          </span>
                        </td>
                        <td className="align-middle text-end date white-space-nowrap">
                          <p className="text-body-tertiary mb-0">
Just now
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap text-end pe-0">
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
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle product pe-3">
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-1">
iPhone 13 pro max-Pacific Blue-128GB storage
                          </PhoenixLink>
                        </td>
                        <td className="align-middle rating white-space-nowrap fs-10">
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                          </span>
                        </td>
                        <td className="align-middle review pe-7">
                          <p className="fw-semibold text-body-highlight mb-0 line-clamp-2">
The order was delivered ahead of schedule. To give us additional time, you should leave the packaging sealed with plastic.
                          </p>
                        </td>
                        <td className="align-middle status pe-9">
                          <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
Pending
                            <span className="ms-1" data-feather={"clock"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                            </span>
                          </span>
                        </td>
                        <td className="align-middle text-end date white-space-nowrap">
                          <p className="text-body-tertiary mb-0">
Dec 9, 2:28 PM
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap text-end pe-0">
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
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle product pe-3">
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-1">
Apple MacBook Pro 13 inch-M1-8/256GB-space
                          </PhoenixLink>
                        </td>
                        <td className="align-middle rating white-space-nowrap fs-10">
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star-half-alt star-icon text-warning">                          </span>
                        </td>
                        <td className="align-middle review pe-7">
                          <p className="fw-semibold text-body-highlight mb-0 line-clamp-2">
It's a Mac, after all. Once you've gone Mac, there's no going back. My first Mac lasted over nine years, and this is my second.
                          </p>
                        </td>
                        <td className="align-middle status pe-9">
                          <span className="badge badge-phoenix fs-10 badge-phoenix-success">
Approaved
                            <span className="ms-1" data-feather={"check"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                            </span>
                          </span>
                        </td>
                        <td className="align-middle text-end date white-space-nowrap">
                          <p className="text-body-tertiary mb-0">
Dec 4, 12:56 PM
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap text-end pe-0">
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
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle product pe-3">
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-1">
Apple iMac 24" 4K Retina Display M1 8 Core CPU, 7 Core GPU, 256GB SSD, Green (MJV83ZP/A) 2021
                          </PhoenixLink>
                        </td>
                        <td className="align-middle rating white-space-nowrap fs-10">
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                          </span>
                          <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                          </span>
                        </td>
                        <td className="align-middle review pe-7">
                          <p className="fw-semibold text-body-highlight mb-0 line-clamp-2">
Personally, I like the minimalist style, but I wouldn't choose it if I were searching for a computer that I would use frequently. It's not horrible in terms of speed and power
                          </p>
                        </td>
                        <td className="align-middle status pe-9">
                          <span className="badge badge-phoenix fs-10 badge-phoenix-success">
Approaved
                            <span className="ms-1" data-feather={"check"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                            </span>
                          </span>
                        </td>
                        <td className="align-middle text-end date white-space-nowrap">
                          <p className="text-body-tertiary mb-0">
Nov 28, 7:28 PM
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap text-end pe-0">
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
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle product pe-3">
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-1">
Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset
                          </PhoenixLink>
                        </td>
                        <td className="align-middle rating white-space-nowrap fs-10">
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                        </td>
                        <td className="align-middle review pe-7">
                          <p className="fw-semibold text-body-highlight mb-0 line-clamp-2">
It performs exactly as expected. There are three of these in the family.
                          </p>
                        </td>
                        <td className="align-middle status pe-9">
                          <span className="badge badge-phoenix fs-10 badge-phoenix-secondary">
Cancelled
                            <span className="ms-1" data-feather={"x"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                            </span>
                          </span>
                        </td>
                        <td className="align-middle text-end date white-space-nowrap">
                          <p className="text-body-tertiary mb-0">
Nov 24, 10:16 AM
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap text-end pe-0">
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
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle product pe-3">
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-1">
PlayStation 5 DualSense Wireless Controller
                          </PhoenixLink>
                        </td>
                        <td className="align-middle rating white-space-nowrap fs-10">
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                        </td>
                        <td className="align-middle review pe-7">
                          <p className="fw-semibold text-body-highlight mb-0 line-clamp-2">
The controller is quite comfy for me. Despite its increased size, the controller still fits well in my hands.
                          </p>
                        </td>
                        <td className="align-middle status pe-9">
                          <span className="badge badge-phoenix fs-10 badge-phoenix-success">
Approaved
                            <span className="ms-1" data-feather={"check"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                            </span>
                          </span>
                        </td>
                        <td className="align-middle text-end date white-space-nowrap">
                          <p className="text-body-tertiary mb-0">
Just now
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap text-end pe-0">
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
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle product pe-3">
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-1">
2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray
                          </PhoenixLink>
                        </td>
                        <td className="align-middle rating white-space-nowrap fs-10">
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                          </span>
                        </td>
                        <td className="align-middle review pe-7">
                          <p className="fw-semibold text-body-highlight mb-0 line-clamp-2">
The response time and service I received when contacted the designers were Phenomenal!
                          </p>
                        </td>
                        <td className="align-middle status pe-9">
                          <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
Pending
                            <span className="ms-1" data-feather={"fas fa-stopwatch"} style={{"height":"12.8px","width":"12.8px"} as CSSProperties}>                            </span>
                          </span>
                        </td>
                        <td className="align-middle text-end date white-space-nowrap">
                          <p className="text-body-tertiary mb-0">
Nov 07, 9:00 PM
                          </p>
                        </td>
                        <td className="align-middle white-space-nowrap text-end pe-0">
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
            <div className="tab-pane fade" id="tab-wishlist" role="tabpanel" aria-labelledby="wishlist-tab">
              <div className="border-y border-translucent" id="productWishlistTable" data-list={"{\"valueNames\":[\"products\",\"color\",\"size\",\"price\",\"quantity\",\"total\"],\"page\":5,\"pagination\":true}"}>
                <div className="table-responsive scrollbar">
                  <table className="table fs-9 mb-0">
                    <thead>
                      <tr>
                        <th className="sort white-space-nowrap align-middle fs-10" scope="col" style={{"width":"7%"} as CSSProperties}>                        </th>
                        <th className="sort white-space-nowrap align-middle" scope="col" style={{"width":"30%","minWidth":"250px"} as CSSProperties} data-sort={"products"}>
PRODUCTS
                        </th>
                        <th className="sort align-middle" scope="col" data-sort={"color"} style={{"width":"16%"} as CSSProperties}>
COLOR
                        </th>
                        <th className="sort align-middle" scope="col" data-sort={"size"} style={{"width":"10%"} as CSSProperties}>
SIZE
                        </th>
                        <th className="sort align-middle text-end" scope="col" data-sort={"price"} style={{"width":"10%"} as CSSProperties}>
PRICE
                        </th>
                        <th className="sort align-middle text-end pe-0" scope="col" style={{"width":"35%"} as CSSProperties}>                        </th>
                      </tr>
                    </thead>
                    <tbody className="list" id="profile-wishlist-table-body"><tr className="hover-actions-trigger btn-reveal-trigger position-static">
                        <td className="align-middle white-space-nowrap ps-0 py-0">
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="border border-translucent rounded-2 d-inline-block">
                            <PhoenixImage src="/assets/img/products/1.png" alt="" width={53} />
                          </PhoenixLink>
                        </td>
                        <td className="products align-middle pe-11">
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold mb-0 line-clamp-1">
{"Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends, Carbon/Graphite, One Size (S & L Bands)"}
                          </PhoenixLink>
                        </td>
                        <td className="color align-middle white-space-nowrap fs-9 text-body">
Pure matte black
                        </td>
                        <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">
42
                        </td>
                        <td className="price align-middle text-body fs-9 fw-semibold text-end">
$57
                        </td>
                        <td className="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0">
                          <button className="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2">
                            <span className="fas fa-trash">                            </span>
                          </button>
                          <button className="btn btn-primary fs-10">
                            <span className="fas fa-shopping-cart me-1 fs-10">                            </span>
Add to cart
                          </button>
                        </td>
                      </tr>
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle white-space-nowrap ps-0 py-0">
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="border border-translucent rounded-2 d-inline-block">
                            <PhoenixImage src="/assets/img/products/7.png" alt="" width={53} />
                          </PhoenixLink>
                        </td>
                        <td className="products align-middle pe-11">
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold mb-0 line-clamp-1">
2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray
                          </PhoenixLink>
                        </td>
                        <td className="color align-middle white-space-nowrap fs-9 text-body">
Black
                        </td>
                        <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">
Pro
                        </td>
                        <td className="price align-middle text-body fs-9 fw-semibold text-end">
$1,499
                        </td>
                        <td className="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0">
                          <button className="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2">
                            <span className="fas fa-trash">                            </span>
                          </button>
                          <button className="btn btn-primary fs-10">
                            <span className="fas fa-shopping-cart me-1 fs-10">                            </span>
Add to cart
                          </button>
                        </td>
                      </tr>
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle white-space-nowrap ps-0 py-0">
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="border border-translucent rounded-2 d-inline-block">
                            <PhoenixImage src="/assets/img/products/6.png" alt="" width={53} />
                          </PhoenixLink>
                        </td>
                        <td className="products align-middle pe-11">
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold mb-0 line-clamp-1">
PlayStation 5 DualSense Wireless Controller
                          </PhoenixLink>
                        </td>
                        <td className="color align-middle white-space-nowrap fs-9 text-body">
White
                        </td>
                        <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">
Regular
                        </td>
                        <td className="price align-middle text-body fs-9 fw-semibold text-end">
$299
                        </td>
                        <td className="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0">
                          <button className="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2">
                            <span className="fas fa-trash">                            </span>
                          </button>
                          <button className="btn btn-primary fs-10">
                            <span className="fas fa-shopping-cart me-1 fs-10">                            </span>
Add to cart
                          </button>
                        </td>
                      </tr>
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle white-space-nowrap ps-0 py-0">
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="border border-translucent rounded-2 d-inline-block">
                            <PhoenixImage src="/assets/img/products/3.png" alt="" width={53} />
                          </PhoenixLink>
                        </td>
                        <td className="products align-middle pe-11">
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold mb-0 line-clamp-1">
Apple MacBook Pro 13 inch-M1-8/256GB-space
                          </PhoenixLink>
                        </td>
                        <td className="color align-middle white-space-nowrap fs-9 text-body">
Space Gray
                        </td>
                        <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">
Pro
                        </td>
                        <td className="price align-middle text-body fs-9 fw-semibold text-end">
$1,699
                        </td>
                        <td className="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0">
                          <button className="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2">
                            <span className="fas fa-trash">                            </span>
                          </button>
                          <button className="btn btn-primary fs-10">
                            <span className="fas fa-shopping-cart me-1 fs-10">                            </span>
Add to cart
                          </button>
                        </td>
                      </tr>
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle white-space-nowrap ps-0 py-0">
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="border border-translucent rounded-2 d-inline-block">
                            <PhoenixImage src="/assets/img/products/4.png" alt="" width={53} />
                          </PhoenixLink>
                        </td>
                        <td className="products align-middle pe-11">
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold mb-0 line-clamp-1">
Apple iMac 24" 4K Retina Display M1 8 Core CPU, 7 Core GPU, 256GB SSD, Green (MJV83ZP/A) 2021
                          </PhoenixLink>
                        </td>
                        <td className="color align-middle white-space-nowrap fs-9 text-body">
Ocean Blue
                        </td>
                        <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">
21"
                        </td>
                        <td className="price align-middle text-body fs-9 fw-semibold text-end">
$65
                        </td>
                        <td className="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0">
                          <button className="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2">
                            <span className="fas fa-trash">                            </span>
                          </button>
                          <button className="btn btn-primary fs-10">
                            <span className="fas fa-shopping-cart me-1 fs-10">                            </span>
Add to cart
                          </button>
                        </td>
                      </tr>
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle white-space-nowrap ps-0 py-0">
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="border border-translucent rounded-2 d-inline-block">
                            <PhoenixImage src="/assets/img/products/10.png" alt="" width={53} />
                          </PhoenixLink>
                        </td>
                        <td className="products align-middle pe-11">
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold mb-0 line-clamp-1">
Apple Magic Mouse (Wireless, Rechargable) - Silver
                          </PhoenixLink>
                        </td>
                        <td className="color align-middle white-space-nowrap fs-9 text-body">
White
                        </td>
                        <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">
Regular
                        </td>
                        <td className="price align-middle text-body fs-9 fw-semibold text-end">
$30
                        </td>
                        <td className="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0">
                          <button className="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2">
                            <span className="fas fa-trash">                            </span>
                          </button>
                          <button className="btn btn-primary fs-10">
                            <span className="fas fa-shopping-cart me-1 fs-10">                            </span>
Add to cart
                          </button>
                        </td>
                      </tr>
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle white-space-nowrap ps-0 py-0">
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="border border-translucent rounded-2 d-inline-block">
                            <PhoenixImage src="/assets/img/products/8.png" alt="" width={53} />
                          </PhoenixLink>
                        </td>
                        <td className="products align-middle pe-11">
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold mb-0 line-clamp-1">
Amazon Basics Matte Black Wired Keyboard - US Layout (QWERTY)
                          </PhoenixLink>
                        </td>
                        <td className="color align-middle white-space-nowrap fs-9 text-body">
Black
                        </td>
                        <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">
MD
                        </td>
                        <td className="price align-middle text-body fs-9 fw-semibold text-end">
$40
                        </td>
                        <td className="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0">
                          <button className="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2">
                            <span className="fas fa-trash">                            </span>
                          </button>
                          <button className="btn btn-primary fs-10">
                            <span className="fas fa-shopping-cart me-1 fs-10">                            </span>
Add to cart
                          </button>
                        </td>
                      </tr>
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle white-space-nowrap ps-0 py-0">
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="border border-translucent rounded-2 d-inline-block">
                            <PhoenixImage src="/assets/img/products/12.png" alt="" width={53} />
                          </PhoenixLink>
                        </td>
                        <td className="products align-middle pe-11">
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold mb-0 line-clamp-1">
HORI Racing Wheel Apex for PlayStation 4_3, and PC
                          </PhoenixLink>
                        </td>
                        <td className="color align-middle white-space-nowrap fs-9 text-body">
Black
                        </td>
                        <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">
45
                        </td>
                        <td className="price align-middle text-body fs-9 fw-semibold text-end">
$130
                        </td>
                        <td className="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0">
                          <button className="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2">
                            <span className="fas fa-trash">                            </span>
                          </button>
                          <button className="btn btn-primary fs-10">
                            <span className="fas fa-shopping-cart me-1 fs-10">                            </span>
Add to cart
                          </button>
                        </td>
                      </tr>
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle white-space-nowrap ps-0 py-0">
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="border border-translucent rounded-2 d-inline-block">
                            <PhoenixImage src="/assets/img/products/17.png" alt="" width={53} />
                          </PhoenixLink>
                        </td>
                        <td className="products align-middle pe-11">
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold mb-0 line-clamp-1">
Xbox Series S
                          </PhoenixLink>
                        </td>
                        <td className="color align-middle white-space-nowrap fs-9 text-body">
Space Gray
                        </td>
                        <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">
sm
                        </td>
                        <td className="price align-middle text-body fs-9 fw-semibold text-end">
$99
                        </td>
                        <td className="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0">
                          <button className="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2">
                            <span className="fas fa-trash">                            </span>
                          </button>
                          <button className="btn btn-primary fs-10">
                            <span className="fas fa-shopping-cart me-1 fs-10">                            </span>
Add to cart
                          </button>
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
            <div className="tab-pane fade" id="tab-stores" role="tabpanel" aria-labelledby="wishlist-tab">
              <div className="border-y border-translucent mb-6" id="profileStoreTable" data-list={"{\"valueNames\":[\"products\",\"color\",\"size\",\"price\",\"quantity\",\"total\"],\"page\":5,\"pagination\":true}"}>
                <div className="table-responsive scrollbar">
                  <table className="table table-sm fs-9 mb-0">
                    <thead>
                      <tr>
                        <th className="sort white-space-nowrap align-middle fs-10" scope="col" style={{"width":"7%","minWidth":"80px"} as CSSProperties}>                        </th>
                        <th className="sort white-space-nowrap align-middle" scope="col" style={{"width":"20%","minWidth":"150px"} as CSSProperties} data-sort={"products"}>
VENDOR
                        </th>
                        <th className="sort align-middle" scope="col" data-sort={"color"} style={{"width":"15%","minWidth":"150px"} as CSSProperties}>
STORE RATING
                        </th>
                        <th className="sort align-middle text-end" scope="col" data-sort={"price"} style={{"width":"12%","minWidth":"150px"} as CSSProperties}>
ORDERS
                        </th>
                        <th className="sort align-middle text-end" scope="col" data-sort={"size"} style={{"width":"15%","minWidth":"150px"} as CSSProperties}>
TOTAL SPENT
                        </th>
                        <th className="sort align-middle text-end" scope="col" data-sort={"price"} style={{"width":"15%","minWidth":"150px"} as CSSProperties}>
LAST ORDER
                        </th>
                        <th className="sort align-middle text-end pe-0" scope="col" style={{"width":"30%","minWidth":"150px"} as CSSProperties}>                        </th>
                      </tr>
                    </thead>
                    <tbody className="list" id="profile-stores-table-body"><tr className="hover-actions-trigger btn-reveal-trigger position-static">
                        <td className="align-middle white-space-nowrap ps-0 py-0">
                          <a href="#!">
                            <PhoenixImage src="/assets/img/brand2/dell.png" alt="" width={53} />
                          </a>
                        </td>
                        <td className="products align-middle">
                          <a href="#!" className="fw-semibold mb-0">
Dell Technologies
                          </a>
                        </td>
                        <td className="color align-middle white-space-nowrap fs-9 text-body">
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                        </td>
                        <td className="size align-middle white-space-nowrap text-primary fs-9 fw-bold text-end">
3
                        </td>
                        <td className="price align-middle text-end text-body fw-semibold">
$ 23987
                        </td>
                        <td className="price align-middle text-body-tertiary fs-9 text-end">
Dec 12, 12:56 PM
                        </td>
                        <td className="total align-middle fw-bold text-body-highlight text-end">
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
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle white-space-nowrap ps-0 py-0">
                          <a href="#!">
                            <PhoenixImage src="/assets/img/brand2/honda.png" alt="" width={53} />
                          </a>
                        </td>
                        <td className="products align-middle">
                          <a href="#!" className="fw-semibold mb-0">
Honda
                          </a>
                        </td>
                        <td className="color align-middle white-space-nowrap fs-9 text-body">
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                          </span>
                          <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                          </span>
                        </td>
                        <td className="size align-middle white-space-nowrap text-primary fs-9 fw-bold text-end">
5
                        </td>
                        <td className="price align-middle text-end text-body fw-semibold">
$ 1250
                        </td>
                        <td className="price align-middle text-body-tertiary fs-9 text-end">
Dec 09, 10:48 AM
                        </td>
                        <td className="total align-middle fw-bold text-body-highlight text-end">
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
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle white-space-nowrap ps-0 py-0">
                          <a href="#!">
                            <PhoenixImage src="/assets/img/brand2/xiaomi.png" alt="" width={53} />
                          </a>
                        </td>
                        <td className="products align-middle">
                          <a href="#!" className="fw-semibold mb-0">
Xiaomi
                          </a>
                        </td>
                        <td className="color align-middle white-space-nowrap fs-9 text-body">
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                          </span>
                          <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                          </span>
                        </td>
                        <td className="size align-middle white-space-nowrap text-primary fs-9 fw-bold text-end">
6
                        </td>
                        <td className="price align-middle text-end text-body fw-semibold">
$ 360
                        </td>
                        <td className="price align-middle text-body-tertiary fs-9 text-end">
Dec 03, 05:45 PM
                        </td>
                        <td className="total align-middle fw-bold text-body-highlight text-end">
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
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle white-space-nowrap ps-0 py-0">
                          <a href="#!">
                            <PhoenixImage src="/assets/img/brand/huawei.png" alt="" width={53} />
                          </a>
                        </td>
                        <td className="products align-middle">
                          <a href="#!" className="fw-semibold mb-0">
Huawei Shop BD
                          </a>
                        </td>
                        <td className="color align-middle white-space-nowrap fs-9 text-body">
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                          </span>
                          <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                          </span>
                        </td>
                        <td className="size align-middle white-space-nowrap text-primary fs-9 fw-bold text-end">
1
                        </td>
                        <td className="price align-middle text-end text-body fw-semibold">
$1,799
                        </td>
                        <td className="price align-middle text-body-tertiary fs-9 text-end">
Nov 27, 06:20 PM
                        </td>
                        <td className="total align-middle fw-bold text-body-highlight text-end">
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
                      <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle white-space-nowrap ps-0 py-0">
                          <a href="#!">
                            <PhoenixImage src="/assets/img/brand2/intel-2.png" alt="" width={53} />
                          </a>
                        </td>
                        <td className="products align-middle">
                          <a href="#!" className="fw-semibold mb-0">
Intel
                          </a>
                        </td>
                        <td className="color align-middle white-space-nowrap fs-9 text-body">
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa fa-star text-warning">                          </span>
                          <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                          </span>
                        </td>
                        <td className="size align-middle white-space-nowrap text-primary fs-9 fw-bold text-end">
2
                        </td>
                        <td className="price align-middle text-end text-body fw-semibold">
$65
                        </td>
                        <td className="price align-middle text-body-tertiary fs-9 text-end">
Nov 21, 10:25 AM
                        </td>
                        <td className="total align-middle fw-bold text-body-highlight text-end">
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
              <div className="d-flex flex-between-center mb-5">
                <div>
                  <h3 className="text-body-emphasis mb-2">
My Favourite Stores
                  </h3>
                  <h5 className="text-body-tertiary fw-semibold">
Essential for a better life
                  </h5>
                </div>
                <button className="btn btn-phoenix-primary">
View all
                </button>
              </div>
              <div className="row gx-3 gy-5">
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
                  <div className="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style={{"height":"180px"} as CSSProperties}>
                    <PhoenixImage src="/assets/img/brand2/dell.png" alt="Dell Technologies" className="mw-100" />
                  </div>
                  <h5 className="mb-2">
Dell Technologies
                  </h5>
                  <div className="mb-1 fs-9">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                  </div>
                  <p className="text-body-quaternary fs-9 mb-2 fw-semibold">
(1263 people rated)
                  </p>
                  <a href="#!" className="btn btn-link p-0">
Visit Store                    <span className="fas fa-chevron-right ms-1 fs-10">                    </span>
                  </a>
                  <div className="hover-actions top-0 end-0 mt-2 me-3">
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-9">                        </span>
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
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
                  <div className="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style={{"height":"180px"} as CSSProperties}>
                    <PhoenixImage src="/assets/img/brand2/hp.png" alt="HP Global Store" className="mw-100" />
                  </div>
                  <h5 className="mb-2">
HP Global Store
                  </h5>
                  <div className="mb-1 fs-9">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                  </div>
                  <p className="text-body-quaternary fs-9 mb-2 fw-semibold">
(365 people rated)
                  </p>
                  <a href="#!" className="btn btn-link p-0">
Visit Store                    <span className="fas fa-chevron-right ms-1 fs-10">                    </span>
                  </a>
                  <div className="hover-actions top-0 end-0 mt-2 me-3">
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-9">                        </span>
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
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
                  <div className="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style={{"height":"180px"} as CSSProperties}>
                    <PhoenixImage src="/assets/img/brand2/honda.png" alt="Honda" className="mw-100" />
                  </div>
                  <h5 className="mb-2">
Honda
                  </h5>
                  <div className="mb-1 fs-9">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                  </div>
                  <p className="text-body-quaternary fs-9 mb-2 fw-semibold">
(596 people rated)
                  </p>
                  <a href="#!" className="btn btn-link p-0">
Visit Store                    <span className="fas fa-chevron-right ms-1 fs-10">                    </span>
                  </a>
                  <div className="hover-actions top-0 end-0 mt-2 me-3">
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-9">                        </span>
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
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
                  <div className="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style={{"height":"180px"} as CSSProperties}>
                    <PhoenixImage src="/assets/img/brand2/asus-rog.png" alt="Asus ROG" className="mw-100" />
                  </div>
                  <h5 className="mb-2">
Asus ROG
                  </h5>
                  <div className="mb-1 fs-9">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                  </div>
                  <p className="text-body-quaternary fs-9 mb-2 fw-semibold">
(2365 people rated)
                  </p>
                  <a href="#!" className="btn btn-link p-0">
Visit Store                    <span className="fas fa-chevron-right ms-1 fs-10">                    </span>
                  </a>
                  <div className="hover-actions top-0 end-0 mt-2 me-3">
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-9">                        </span>
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
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
                  <div className="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style={{"height":"180px"} as CSSProperties}>
                    <PhoenixImage src="/assets/img/brand2/yamaha.png" alt="Yamaha" className="mw-100" />
                  </div>
                  <h5 className="mb-2">
Yamaha
                  </h5>
                  <div className="mb-1 fs-9">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                  </div>
                  <p className="text-body-quaternary fs-9 mb-2 fw-semibold">
(1253 people rated)
                  </p>
                  <a href="#!" className="btn btn-link p-0">
Visit Store                    <span className="fas fa-chevron-right ms-1 fs-10">                    </span>
                  </a>
                  <div className="hover-actions top-0 end-0 mt-2 me-3">
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-9">                        </span>
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
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
                  <div className="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style={{"height":"180px"} as CSSProperties}>
                    <PhoenixImage src="/assets/img/brand2/ibm.png" alt="IBM" className="mw-100" />
                  </div>
                  <h5 className="mb-2">
IBM
                  </h5>
                  <div className="mb-1 fs-9">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                  </div>
                  <p className="text-body-quaternary fs-9 mb-2 fw-semibold">
(996 people rated)
                  </p>
                  <a href="#!" className="btn btn-link p-0">
Visit Store                    <span className="fas fa-chevron-right ms-1 fs-10">                    </span>
                  </a>
                  <div className="hover-actions top-0 end-0 mt-2 me-3">
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-9">                        </span>
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
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
                  <div className="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style={{"height":"180px"} as CSSProperties}>
                    <PhoenixImage src="/assets/img/brand2/apple-2.png" alt="Apple Store" className="mw-100" />
                  </div>
                  <h5 className="mb-2">
Apple Store
                  </h5>
                  <div className="mb-1 fs-9">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                  </div>
                  <p className="text-body-quaternary fs-9 mb-2 fw-semibold">
(365 people rated)
                  </p>
                  <a href="#!" className="btn btn-link p-0">
Visit Store                    <span className="fas fa-chevron-right ms-1 fs-10">                    </span>
                  </a>
                  <div className="hover-actions top-0 end-0 mt-2 me-3">
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-9">                        </span>
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
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
                  <div className="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style={{"height":"180px"} as CSSProperties}>
                    <PhoenixImage src="/assets/img/brand2/oppo.png" alt="Oppo" className="mw-100" />
                  </div>
                  <h5 className="mb-2">
Oppo
                  </h5>
                  <div className="mb-1 fs-9">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                  </div>
                  <p className="text-body-quaternary fs-9 mb-2 fw-semibold">
(576 people rated)
                  </p>
                  <a href="#!" className="btn btn-link p-0">
Visit Store                    <span className="fas fa-chevron-right ms-1 fs-10">                    </span>
                  </a>
                  <div className="hover-actions top-0 end-0 mt-2 me-3">
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-9">                        </span>
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
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
                  <div className="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style={{"height":"180px"} as CSSProperties}>
                    <PhoenixImage src="/assets/img/brand2/redragon.png" alt="Redragon" className="mw-100" />
                  </div>
                  <h5 className="mb-2">
Redragon
                  </h5>
                  <div className="mb-1 fs-9">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                  </div>
                  <p className="text-body-quaternary fs-9 mb-2 fw-semibold">
(1125 people rated)
                  </p>
                  <a href="#!" className="btn btn-link p-0">
Visit Store                    <span className="fas fa-chevron-right ms-1 fs-10">                    </span>
                  </a>
                  <div className="hover-actions top-0 end-0 mt-2 me-3">
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-9">                        </span>
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
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
                  <div className="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style={{"height":"180px"} as CSSProperties}>
                    <PhoenixImage src="/assets/img/brand2/xbox.png" alt="Microsoft XBOX" className="mw-100" />
                  </div>
                  <h5 className="mb-2">
Microsoft XBOX
                  </h5>
                  <div className="mb-1 fs-9">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                  </div>
                  <p className="text-body-quaternary fs-9 mb-2 fw-semibold">
(830 people rated)
                  </p>
                  <a href="#!" className="btn btn-link p-0">
Visit Store                    <span className="fas fa-chevron-right ms-1 fs-10">                    </span>
                  </a>
                  <div className="hover-actions top-0 end-0 mt-2 me-3">
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-9">                        </span>
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
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
                  <div className="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style={{"height":"180px"} as CSSProperties}>
                    <PhoenixImage src="/assets/img/brand2/lenovo.png" alt="Lenovo" className="mw-100" />
                  </div>
                  <h5 className="mb-2">
Lenovo
                  </h5>
                  <div className="mb-1 fs-9">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                  </div>
                  <p className="text-body-quaternary fs-9 mb-2 fw-semibold">
(1032 people rated)
                  </p>
                  <a href="#!" className="btn btn-link p-0">
Visit Store                    <span className="fas fa-chevron-right ms-1 fs-10">                    </span>
                  </a>
                  <div className="hover-actions top-0 end-0 mt-2 me-3">
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-9">                        </span>
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
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 hover-actions-trigger btn-reveal-trigger">
                  <div className="border border-translucent d-flex flex-center rounded-3 mb-3 p-4" style={{"height":"180px"} as CSSProperties}>
                    <PhoenixImage src="/assets/img/brand2/xiaomi.png" alt="Xiaomi" className="mw-100" />
                  </div>
                  <h5 className="mb-2">
Xiaomi
                  </h5>
                  <div className="mb-1 fs-9">
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa fa-star text-warning">                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                    <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>                    </span>
                  </div>
                  <p className="text-body-quaternary fs-9 mb-2 fw-semibold">
(965 people rated)
                  </p>
                  <a href="#!" className="btn btn-link p-0">
Visit Store                    <span className="fas fa-chevron-right ms-1 fs-10">                    </span>
                  </a>
                  <div className="hover-actions top-0 end-0 mt-2 me-3">
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal lh-1 bg-body-highlight rounded-1" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-9">                        </span>
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
              </div>
            </div>
            <div className="tab-pane fade" id="tab-personal-info" role="tabpanel" aria-labelledby="personal-info-tab">
              <div className="row gx-3 gy-4 mb-5">
                <div className="col-12 col-lg-6">
                  <label className="form-label text-body-highlight fs-8 ps-0 text-capitalize lh-sm" htmlFor="fullName">
Full name
                  </label>
                  <input className="form-control" id="fullName" type="text" placeholder="Full name" />
                </div>
                <div className="col-12 col-lg-6">
                  <label className="form-label text-body-highlight fs-8 ps-0 text-capitalize lh-sm" htmlFor="gender">
Gender
                  </label>
                  <select className="form-select" id="gender">
                    <option value="male">
Male
                    </option>
                    <option value="female">
Female
                    </option>
                    <option value="non-binary">
Non-binary
                    </option>
                    <option value="not-to-say">
Prefer not to say
                    </option>
                  </select>
                </div>
                <div className="col-12 col-lg-6">
                  <label className="form-label text-body-highlight fs-8 ps-0 text-capitalize lh-sm" htmlFor="email">
Email
                  </label>
                  <input className="form-control" id="email" type="text" placeholder="Email" />
                </div>
                <div className="col-12 col-lg-6">
                  <div className="row g-2 gy-lg-0">
                    <label className="form-label text-body-highlight fs-8 ps-1 text-capitalize lh-sm mb-1">
Date of birth
                    </label>
                    <div className="col-6 col-sm-2 col-lg-3 col-xl-2">
                      <select className="form-select" id="date">
                        <option value="1">
1
                        </option>
                        <option value="2">
2
                        </option>
                        <option value="3">
3
                        </option>
                        <option value="4">
4
                        </option>
                        <option value="5">
5
                        </option>
                        <option value="6">
6
                        </option>
                        <option value="7">
7
                        </option>
                        <option value="8">
8
                        </option>
                        <option value="9">
9
                        </option>
                        <option value="10">
10
                        </option>
                        <option value="11">
11
                        </option>
                        <option value="12">
12
                        </option>
                        <option value="13">
13
                        </option>
                        <option value="14">
14
                        </option>
                        <option value="15">
15
                        </option>
                        <option value="16">
16
                        </option>
                        <option value="17">
17
                        </option>
                        <option value="18">
18
                        </option>
                        <option value="19">
19
                        </option>
                        <option value="20">
20
                        </option>
                        <option value="21">
21
                        </option>
                        <option value="22">
22
                        </option>
                        <option value="23">
23
                        </option>
                        <option value="24">
24
                        </option>
                        <option value="25">
25
                        </option>
                        <option value="26">
26
                        </option>
                        <option value="27">
27
                        </option>
                        <option value="28">
28
                        </option>
                        <option value="29">
29
                        </option>
                        <option value="30">
30
                        </option>
                      </select>
                    </div>
                    <div className="col-6 col-sm-2 col-lg-3 col-xl-2">
                      <select className="form-select" id="month">
                        <option value="Jan">
Jan
                        </option>
                        <option value="Feb">
Feb
                        </option>
                        <option value="Mar">
Mar
                        </option>
                        <option value="Apr">
Apr
                        </option>
                        <option value="May">
May
                        </option>
                        <option value="Jun">
Jun
                        </option>
                        <option value="Jul">
Jul
                        </option>
                        <option value="Aug">
Aug
                        </option>
                        <option value="Sep">
Sep
                        </option>
                        <option value="Oct">
Oct
                        </option>
                        <option value="Nov">
Nov
                        </option>
                        <option value="Dec">
Dec
                        </option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-8 col-lg-6 col-xl-8">
                      <select className="form-select" id="year">
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
                </div>
                <div className="col-12 col-lg-6">
                  <label className="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm" htmlFor="phone">
Phone
                  </label>
                  <input className="form-control" id="phone" type="text" placeholder="+1234567890" />
                </div>
                <div className="col-12 col-lg-6">
                  <label className="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm" htmlFor="alternative_phone">
Alternative phone
                  </label>
                  <input className="form-control" id="alternative_phone" type="text" placeholder="+1234567890" />
                </div>
                <div className="col-12 col-lg-4">
                  <label className="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm" htmlFor="facebook">
Facebook
                  </label>
                  <input className="form-control" id="facebook" type="text" placeholder="Facebook" />
                </div>
                <div className="col-12 col-lg-4">
                  <label className="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm" htmlFor="instagram">
Instagram
                  </label>
                  <input className="form-control" id="instagram" type="text" placeholder="Instagram" />
                </div>
                <div className="col-12 col-lg-4">
                  <label className="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm" htmlFor="twitter">
Twitter
                  </label>
                  <input className="form-control" id="twitter" type="text" placeholder="Twitter" />
                </div>
              </div>
              <div className="text-end">
                <button className="btn btn-primary px-7">
Save changes
                </button>
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
