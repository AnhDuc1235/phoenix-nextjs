'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function DualNav() {
  return (
    <div suppressHydrationWarning>

    <nav className="navbar navbar-top fixed-top navbar-expand-lg" id="dualNav">
      <div className="w-100">
        <div className="d-flex flex-between-center dual-nav-first-layer">
          <div className="navbar-logo">
            <button className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle={"collapse"} data-bs-target={"#navbarTopCollapse"} aria-controls="navbarTopCollapse" aria-expanded="false" aria-label="Toggle Navigation">
              <span className="navbar-toggle-icon">
                <span className="toggle-line">                </span>
              </span>
            </button>
            <PhoenixLink href="/" className="navbar-brand me-1 me-sm-3">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <PhoenixImage src="/assets/img/icons/logo.png" alt="phoenix" width={27} />
                  <h5 className="logo-text ms-2 d-none d-sm-block">
phoenix
                  </h5>
                </div>
              </div>
            </PhoenixLink>
          </div>
          <div className="search-box navbar-top-search-box d-none d-lg-block" data-list={"{\"valueNames\":[\"title\"]}"} style={{"width":"25rem"} as CSSProperties}>
            <form className="position-relative" data-bs-toggle={"search"} data-bs-display={"static"}>
              <input className="form-control search-input fuzzy-search rounded-pill form-control-sm" type="search" placeholder="Search..." aria-label="Search" />
              <span className="fas fa-search search-box-icon">              </span>
            </form>
            <div className="btn-close position-absolute end-0 top-50 translate-middle cursor-pointer shadow-none" data-bs-dismiss={"search"}>
              <button className="btn btn-link p-0" aria-label="Close">              </button>
            </div>
            <div className="dropdown-menu border start-0 py-0 overflow-hidden w-100">
              <div className="scrollbar-overlay" style={{"maxHeight":"30rem"} as CSSProperties}>
                <div className="list pb-3">
                  <h6 className="dropdown-header text-body-highlight fs-10 py-2">
24 
                    <span className="text-body-quaternary">
results
                    </span>
                  </h6>
                  <hr className="my-0" />
                  <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
Recently Searched 
                  </h6>
                  <div className="py-2">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="fw-normal text-body-highlight title">
                          <span className="fa-solid fa-clock-rotate-left" data-fa-transform={"shrink-2"}>                          </span>
 Store Macbook
                        </div>
                      </div>
                    </PhoenixLink>
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="fw-normal text-body-highlight title">
                          <span className="fa-solid fa-clock-rotate-left" data-fa-transform={"shrink-2"}>                          </span>
 MacBook Air - 13″
                        </div>
                      </div>
                    </PhoenixLink>
                  </div>
                  <hr className="my-0" />
                  <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
Products
                  </h6>
                  <div className="py-2">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item py-2 d-flex align-items-center">
                      <div className="file-thumbnail me-2">
                        <PhoenixImage src="/assets/img/products/60x60/3.png" alt="" className="h-100 w-100 object-fit-cover rounded-3" />
                      </div>                      <div className="flex-1">
                        <h6 className="mb-0 text-body-highlight title">
MacBook Air - 13″
                        </h6>
                        <p className="fs-10 mb-0 d-flex text-body-tertiary">
                          <span className="fw-medium text-body-tertiary text-opactity-85">
8GB Memory - 1.6GHz - 128GB Storage
                          </span>
                        </p>
                      </div>
                    </PhoenixLink>
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item py-2 d-flex align-items-center">
                      <div className="file-thumbnail me-2">
                        <PhoenixImage src="/assets/img/products/60x60/3.png" alt="" className="img-fluid" />
                      </div>                      <div className="flex-1">
                        <h6 className="mb-0 text-body-highlight title">
MacBook Pro - 13″
                        </h6>
                        <p className="fs-10 mb-0 d-flex text-body-tertiary">
                          <span className="fw-medium text-body-tertiary text-opactity-85">
30 Sep at 12:30 PM
                          </span>
                        </p>
                      </div>
                    </PhoenixLink>
                  </div>
                  <hr className="my-0" />
                  <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
Quick Links
                  </h6>
                  <div className="py-2">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="fw-normal text-body-highlight title">
                          <span className="fa-solid fa-link text-body" data-fa-transform={"shrink-2"}>                          </span>
 Support MacBook House
                        </div>
                      </div>
                    </PhoenixLink>
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="fw-normal text-body-highlight title">
                          <span className="fa-solid fa-link text-body" data-fa-transform={"shrink-2"}>                          </span>
 Store MacBook″
                        </div>
                      </div>
                    </PhoenixLink>
                  </div>
                  <hr className="my-0" />
                  <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
Files
                  </h6>
                  <div className="py-2">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="fw-normal text-body-highlight title">
                          <span className="fa-solid fa-file-zipper text-body" data-fa-transform={"shrink-2"}>                          </span>
 Library MacBook folder.rar
                        </div>
                      </div>
                    </PhoenixLink>
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="fw-normal text-body-highlight title">
                          <span className="fa-solid fa-file-lines text-body" data-fa-transform={"shrink-2"}>                          </span>
 Feature MacBook extensions.txt
                        </div>
                      </div>
                    </PhoenixLink>
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="fw-normal text-body-highlight title">
                          <span className="fa-solid fa-image text-body" data-fa-transform={"shrink-2"}>                          </span>
 MacBook Pro_13.jpg
                        </div>
                      </div>
                    </PhoenixLink>
                  </div>
                  <hr className="my-0" />
                  <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
Members
                  </h6>
                  <div className="py-2">
                    <PhoenixLink href="/pages/members" className="dropdown-item py-2 d-flex align-items-center">
                      <div className="avatar avatar-l status-online  me-2 text-body">
                        <PhoenixImage src="/assets/img/team/40x40/10.webp" alt="" className="rounded-circle " />
                      </div>                      <div className="flex-1">
                        <h6 className="mb-0 text-body-highlight title">
Carry Anna
                        </h6>
                        <p className="fs-10 mb-0 d-flex text-body-tertiary">
anna@technext.it
                        </p>
                      </div>
                    </PhoenixLink>
                    <PhoenixLink href="/pages/members" className="dropdown-item py-2 d-flex align-items-center">
                      <div className="avatar avatar-l  me-2 text-body">
                        <PhoenixImage src="/assets/img/team/40x40/12.webp" alt="" className="rounded-circle " />
                      </div>                      <div className="flex-1">
                        <h6 className="mb-0 text-body-highlight title">
John Smith
                        </h6>
                        <p className="fs-10 mb-0 d-flex text-body-tertiary">
smith@technext.it
                        </p>
                      </div>
                    </PhoenixLink>
                  </div>
                  <hr className="my-0" />
                  <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
Related Searches
                  </h6>
                  <div className="py-2">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="fw-normal text-body-highlight title">
                          <span className="fa-brands fa-firefox-browser text-body" data-fa-transform={"shrink-2"}>                          </span>
 Search in the Web MacBook
                        </div>
                      </div>
                    </PhoenixLink>
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                      <div className="d-flex align-items-center">
                        <div className="fw-normal text-body-highlight title">
                          <span className="fa-brands fa-chrome text-body" data-fa-transform={"shrink-2"}>                          </span>
 Store MacBook″
                        </div>
                      </div>
                    </PhoenixLink>
                  </div>
                </div>
                <div className="text-center">
                  <p className="fallback fw-bold fs-7 d-none">
No Result Found.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ul className="navbar-nav navbar-nav-icons flex-row">
            <li className="nav-item">
              <div className="theme-control-toggle fa-icon-wait px-2">
                <input className="form-check-input ms-0 theme-control-toggle-input" type="checkbox" data-theme-control={"phoenixTheme"} defaultValue="dark" id="themeControlToggle" />
                <label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggle" data-bs-toggle={"tooltip"} data-bs-placement={"left"} data-bs-title={"Switch theme"} style={{"height":"32px","width":"32px"} as CSSProperties}>
                  <span className="icon" data-feather={"moon"}>                  </span>
                </label>
                <label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggle" data-bs-toggle={"tooltip"} data-bs-placement={"left"} data-bs-title={"Switch theme"} style={{"height":"32px","width":"32px"} as CSSProperties}>
                  <span className="icon" data-feather={"sun"}>                  </span>
                </label>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link"  style={{"minWidth":"2.25rem"} as CSSProperties} role="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false" data-bs-auto-close={"outside"}>
                <span className="d-block" style={{"height":"20px","width":"20px"} as CSSProperties}>
                  <span data-feather={"bell"} style={{"height":"20px","width":"20px"} as CSSProperties}>                  </span>
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret" id="navbarDropdownNotfication" aria-labelledby="navbarDropdownNotfication">
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
                                <span className="me-1 fas fa-clock">                                </span>
                                <span className="fw-bold">
10:41 AM 
                                </span>
August 7,2021
                              </p>
                            </div>
                          </div>
                          <div className="dropdown notification-dropdown">
                            <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                              <span className="fas fa-ellipsis-h fs-10 text-body">                              </span>
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
                                <span className="me-1 fas fa-clock">                                </span>
                                <span className="fw-bold">
10:20 AM 
                                </span>
August 7,2021
                              </p>
                            </div>
                          </div>
                          <div className="dropdown notification-dropdown">
                            <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                              <span className="fas fa-ellipsis-h fs-10 text-body">                              </span>
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
                                <span className="me-1 fas fa-clock">                                </span>
                                <span className="fw-bold">
9:30 AM 
                                </span>
August 7,2021
                              </p>
                            </div>
                          </div>
                          <div className="dropdown notification-dropdown">
                            <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                              <span className="fas fa-ellipsis-h fs-10 text-body">                              </span>
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
                                <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">                                </span>
                              </p>
                              <p className="text-body-secondary fs-9 mb-0">
                                <span className="me-1 fas fa-clock">                                </span>
                                <span className="fw-bold">
9:11 AM 
                                </span>
August 7,2021
                              </p>
                            </div>
                          </div>
                          <div className="dropdown notification-dropdown">
                            <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                              <span className="fas fa-ellipsis-h fs-10 text-body">                              </span>
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
                                <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">                                </span>
                              </p>
                              <p className="text-body-secondary fs-9 mb-0">
                                <span className="me-1 fas fa-clock">                                </span>
                                <span className="fw-bold">
10:58 PM 
                                </span>
August 7,2021
                              </p>
                            </div>
                          </div>
                          <div className="dropdown notification-dropdown">
                            <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                              <span className="fas fa-ellipsis-h fs-10 text-body">                              </span>
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
                                <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">                                </span>
                              </p>
                              <p className="text-body-secondary fs-9 mb-0">
                                <span className="me-1 fas fa-clock">                                </span>
                                <span className="fw-bold">
10:18 AM 
                                </span>
August 7,2021
                              </p>
                            </div>
                          </div>
                          <div className="dropdown notification-dropdown">
                            <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                              <span className="fas fa-ellipsis-h fs-10 text-body">                              </span>
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
              <a href="#" className="nav-link" id="navbarDropdownNindeDots"  role="button" data-bs-toggle={"dropdown"} aria-haspopup="true" data-bs-auto-close={"outside"} aria-expanded="false">
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2" cy="2" r="2" fill="currentColor">                  </circle>
                  <circle cx="2" cy="8" r="2" fill="currentColor">                  </circle>
                  <circle cx="2" cy="14" r="2" fill="currentColor">                  </circle>
                  <circle cx="8" cy="8" r="2" fill="currentColor">                  </circle>
                  <circle cx="8" cy="14" r="2" fill="currentColor">                  </circle>
                  <circle cx="14" cy="8" r="2" fill="currentColor">                  </circle>
                  <circle cx="14" cy="14" r="2" fill="currentColor">                  </circle>
                  <circle cx="8" cy="2" r="2" fill="currentColor">                  </circle>
                  <circle cx="14" cy="2" r="2" fill="currentColor">                  </circle>
                </svg>
              </a>
              <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nine-dots shadow border" aria-labelledby="navbarDropdownNindeDots">
                <div className="card bg-body-emphasis position-relative border-0">
                  <div className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar" style={{"height":"20rem"} as CSSProperties}>
                    <div className="row text-center align-items-center gx-0 gy-0">
                      <div className="col-4">
                        <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                          <PhoenixImage src="/assets/img/nav-icons/behance.webp" alt="" width={30} />                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Behance
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                          <PhoenixImage src="/assets/img/nav-icons/google-cloud.webp" alt="" width={30} />                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Cloud
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                          <PhoenixImage src="/assets/img/nav-icons/slack.webp" alt="" width={30} />                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Slack
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                          <PhoenixImage src="/assets/img/nav-icons/gitlab.webp" alt="" width={30} />                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Gitlab
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                          <PhoenixImage src="/assets/img/nav-icons/bitbucket.webp" alt="" width={30} />                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
BitBucket
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                          <PhoenixImage src="/assets/img/nav-icons/google-drive.webp" alt="" width={30} />                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Drive
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                          <PhoenixImage src="/assets/img/nav-icons/trello.webp" alt="" width={30} />                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Trello
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                          <PhoenixImage src="/assets/img/nav-icons/figma.webp" alt="" width={20} />                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Figma
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                          <PhoenixImage src="/assets/img/nav-icons/twitter.webp" alt="" width={30} />                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Twitter
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                          <PhoenixImage src="/assets/img/nav-icons/pinterest.webp" alt="" width={30} />                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Pinterest
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                          <PhoenixImage src="/assets/img/nav-icons/ln.webp" alt="" width={30} />                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Linkedin
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                          <PhoenixImage src="/assets/img/nav-icons/google-maps.webp" alt="" width={30} />                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Maps
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                          <PhoenixImage src="/assets/img/nav-icons/google-photos.webp" alt="" width={30} />                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Photos
                          </p>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                          <PhoenixImage src="/assets/img/nav-icons/spotify.webp" alt="" width={30} />                          <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Spotify
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a href="#!" className="nav-link lh-1 pe-0" id="navbarDropdownUser"  role="button" data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"} aria-haspopup="true" aria-expanded="false">
                <div className="avatar avatar-l ">
                  <PhoenixImage src="/assets/img/team/40x40/57.webp" alt="" className="rounded-circle " />
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border" aria-labelledby="navbarDropdownUser">
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
                          <span className="me-2 text-body align-bottom" data-feather={"user"}>                          </span>                          <span>
Profile
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#!" className="nav-link px-3 d-block">
                          <span className="me-2 text-body align-bottom" data-feather={"pie-chart"}>                          </span>Dashboard
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#!" className="nav-link px-3 d-block">
                          <span className="me-2 text-body align-bottom" data-feather={"lock"}>                          </span>{"Posts & Activity"}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#!" className="nav-link px-3 d-block">
                          <span className="me-2 text-body align-bottom" data-feather={"settings"}>                          </span>{"Settings & Privacy "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#!" className="nav-link px-3 d-block">
                          <span className="me-2 text-body align-bottom" data-feather={"help-circle"}>                          </span>Help Center
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#!" className="nav-link px-3 d-block">
                          <span className="me-2 text-body align-bottom" data-feather={"globe"}>                          </span>Language
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer p-0 border-top border-translucent">
                    <ul className="nav d-flex flex-column my-3">
                      <li className="nav-item">
                        <a href="#!" className="nav-link px-3 d-block">
                          <span className="me-2 text-body align-bottom" data-feather={"user-plus"}>                          </span>Add another account
                        </a>
                      </li>
                    </ul>
                    <hr />
                    <div className="px-3">
                      <a href="#!" className="btn btn-phoenix-secondary d-flex flex-center w-100">
                        <span className="me-2" data-feather={"log-out"}>                        </span>Sign out
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
        <div className="collapse navbar-collapse navbar-top-collapse justify-content-center" id="navbarTopCollapse">
          <ul className="navbar-nav navbar-nav-top" data-dropdown-on-hover>
            <li className="nav-item dropdown">
              <a href="#!" className="nav-link dropdown-toggle lh-1"  role="button" data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"} aria-haspopup="true" aria-expanded="false">
                <span className="uil fs-8 me-2 uil-chart-pie">                </span>Home
              </a>
              <ul className="dropdown-menu navbar-dropdown-caret">
                <li>
                  <PhoenixLink href="/" className="dropdown-item">
                    <div className="dropdown-item-wrapper">
                      <span className="me-2 uil" data-feather={"shopping-cart"}>                      </span>
E commerce 
                    </div>
                  </PhoenixLink>
                </li>
                <li>
                  <PhoenixLink href="/dashboard/project-management" className="dropdown-item">
                    <div className="dropdown-item-wrapper">
                      <span className="me-2 uil" data-feather={"clipboard"}>                      </span>
Project management 
                    </div>
                  </PhoenixLink>
                </li>
                <li>
                  <PhoenixLink href="/dashboard/crm" className="dropdown-item">
                    <div className="dropdown-item-wrapper">
                      <span className="me-2 uil" data-feather={"phone"}>                      </span>
CRM 
                    </div>
                  </PhoenixLink>
                </li>
                <li>
                  <PhoenixLink href="/dashboard/travel-agency" className="dropdown-item">
                    <div className="dropdown-item-wrapper">
                      <span className="me-2 uil" data-feather={"briefcase"}>                      </span>
Travel agency 
                    </div>
                  </PhoenixLink>
                </li>
                <li>
                  <PhoenixLink href="/dashboard/stock" className="dropdown-item">
                    <div className="dropdown-item-wrapper">
                      <span className="me-2 uil" data-feather={"briefcase"}>                      </span>
Stock 
                    </div>
                  </PhoenixLink>
                </li>
                <li>
                  <PhoenixLink href="/apps/social/feed" className="dropdown-item">
                    <div className="dropdown-item-wrapper">
                      <span className="me-2 uil" data-feather={"share-2"}>                      </span>
Social feed 
                    </div>
                  </PhoenixLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a href="#!" className="nav-link dropdown-toggle lh-1"  role="button" data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"} aria-haspopup="true" aria-expanded="false">
                <span className="uil fs-8 me-2 uil-cube">                </span>Apps
              </a>
              <ul className="dropdown-menu navbar-dropdown-caret">
                <li className="dropdown">
                  <a href="#" className="dropdown-item dropdown-toggle" id="e-commerce"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                    <div className="dropdown-item-wrapper">
                      <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                      </span>
                      <span>
                        <span className="me-2 uil" data-feather={"shopping-cart"}>                        </span>
E commerce
                      </span>
                    </div>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown">
                      <a href="#" className="dropdown-item dropdown-toggle" id="admin"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                        <div className="dropdown-item-wrapper">
                          <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                          </span>
                          <span>
                            <span className="me-2 uil">                            </span>
Admin
                          </span>
                        </div>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <PhoenixLink href="/apps/e-commerce/admin/add-product" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Add product 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/apps/e-commerce/admin/products" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Products 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/apps/e-commerce/admin/customers" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Customers 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/apps/e-commerce/admin/customer-details" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Customer details 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/apps/e-commerce/admin/orders" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Orders 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/apps/e-commerce/admin/order-details" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Order details 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/apps/e-commerce/admin/refund" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Refund 
                            </div>
                          </PhoenixLink>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-item dropdown-toggle" id="customer"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                        <div className="dropdown-item-wrapper">
                          <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                          </span>
                          <span>
                            <span className="me-2 uil">                            </span>
Customer
                          </span>
                        </div>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <PhoenixLink href="/apps/e-commerce/landing/homepage" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Homepage 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Product details 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/apps/e-commerce/landing/products-filter" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Products filter 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/apps/e-commerce/landing/cart" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Cart 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/apps/e-commerce/landing/checkout" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Checkout 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/apps/e-commerce/landing/shipping-info" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Shipping info 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/apps/e-commerce/landing/profile" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Profile 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/apps/e-commerce/landing/favourite-stores" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Favourite stores 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/apps/e-commerce/landing/wishlist" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Wishlist 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/apps/e-commerce/landing/order-tracking" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Order tracking 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/apps/e-commerce/landing/invoice" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Invoice 
                            </div>
                          </PhoenixLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-item dropdown-toggle" id="CRM"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                    <div className="dropdown-item-wrapper">
                      <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                      </span>
                      <span>
                        <span className="me-2 uil" data-feather={"phone"}>                        </span>
CRM
                      </span>
                    </div>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <PhoenixLink href="/apps/crm/analytics" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Analytics 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/apps/crm/deals" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Deals 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/apps/crm/deal-details" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Deal details 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/apps/crm/leads" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Leads 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/apps/crm/lead-details" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Lead details 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/apps/crm/reports" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Reports 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/apps/crm/report-details" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Report details 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/apps/crm/add-contact" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Add contact 
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-item dropdown-toggle" id="project-management"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                    <div className="dropdown-item-wrapper">
                      <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                      </span>
                      <span>
                        <span className="me-2 uil" data-feather={"clipboard"}>                        </span>
Project management
                      </span>
                    </div>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <PhoenixLink href="/apps/project-management/create-new" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Create new 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/apps/project-management/project-list-view" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Project list view 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/apps/project-management/project-card-view" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Project card view 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/apps/project-management/project-board-view" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Project board view 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/apps/project-management/todo-list" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Todo list 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/apps/project-management/project-details" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Project details 
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-item dropdown-toggle" id="travel-agency"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                    <div className="dropdown-item-wrapper">
                      <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                      </span>
                      <span>
                        <span className="me-2 uil" data-feather={"briefcase"}>                        </span>
Travel agency
                      </span>
                    </div>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <PhoenixLink href="/apps/travel-agency/landing" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Landing 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-item dropdown-toggle" id="hotel"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                        <div className="dropdown-item-wrapper">
                          <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                          </span>
                          <span>
                            <span className="me-2 uil">                            </span>
Hotel
                          </span>
                        </div>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="dropdown">
                          <a href="#" className="dropdown-item dropdown-toggle" id="admin"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                            <div className="dropdown-item-wrapper">
                              <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                              </span>
                              <span>
                                <span className="me-2 uil">                                </span>
Admin
                              </span>
                            </div>
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <PhoenixLink href="/apps/travel-agency/hotel/admin/add-property" className="dropdown-item">
                                <div className="dropdown-item-wrapper">
                                  <span className="me-2 uil">                                  </span>
Add property 
                                </div>
                              </PhoenixLink>
                            </li>
                            <li>
                              <PhoenixLink href="/apps/travel-agency/hotel/admin/add-room" className="dropdown-item">
                                <div className="dropdown-item-wrapper">
                                  <span className="me-2 uil">                                  </span>
Add room 
                                </div>
                              </PhoenixLink>
                            </li>
                            <li>
                              <PhoenixLink href="/apps/travel-agency/hotel/admin/room-listing" className="dropdown-item">
                                <div className="dropdown-item-wrapper">
                                  <span className="me-2 uil">                                  </span>
Room listing 
                                </div>
                              </PhoenixLink>
                            </li>
                            <li>
                              <PhoenixLink href="/apps/travel-agency/hotel/admin/room-search" className="dropdown-item">
                                <div className="dropdown-item-wrapper">
                                  <span className="me-2 uil">                                  </span>
Search room 
                                </div>
                              </PhoenixLink>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#" className="dropdown-item dropdown-toggle" id="customer"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                            <div className="dropdown-item-wrapper">
                              <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                              </span>
                              <span>
                                <span className="me-2 uil">                                </span>
Customer
                              </span>
                            </div>
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <PhoenixLink href="/apps/travel-agency/hotel/customer/homepage" className="dropdown-item">
                                <div className="dropdown-item-wrapper">
                                  <span className="me-2 uil">                                  </span>
Homepage 
                                </div>
                              </PhoenixLink>
                            </li>
                            <li>
                              <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-details" className="dropdown-item">
                                <div className="dropdown-item-wrapper">
                                  <span className="me-2 uil">                                  </span>
Hotel details 
                                </div>
                              </PhoenixLink>
                            </li>
                            <li>
                              <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-compare" className="dropdown-item">
                                <div className="dropdown-item-wrapper">
                                  <span className="me-2 uil">                                  </span>
Hotel compare 
                                </div>
                              </PhoenixLink>
                            </li>
                            <li>
                              <PhoenixLink href="/apps/travel-agency/hotel/customer/checkout" className="dropdown-item">
                                <div className="dropdown-item-wrapper">
                                  <span className="me-2 uil">                                  </span>
Checkout 
                                </div>
                              </PhoenixLink>
                            </li>
                            <li>
                              <PhoenixLink href="/apps/travel-agency/hotel/customer/payment" className="dropdown-item">
                                <div className="dropdown-item-wrapper">
                                  <span className="me-2 uil">                                  </span>
Payment 
                                </div>
                              </PhoenixLink>
                            </li>
                            <li>
                              <PhoenixLink href="/apps/travel-agency/hotel/customer/gallery" className="dropdown-item">
                                <div className="dropdown-item-wrapper">
                                  <span className="me-2 uil">                                  </span>
Gallery 
                                </div>
                              </PhoenixLink>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-item dropdown-toggle" id="flight"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                        <div className="dropdown-item-wrapper">
                          <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                          </span>
                          <span>
                            <span className="me-2 uil">                            </span>
Flight
                          </span>
                        </div>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <PhoenixLink href="/apps/travel-agency/flight/homepage" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Homepage 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/apps/travel-agency/flight/booking" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Booking 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/apps/travel-agency/flight/payment" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Payment 
                            </div>
                          </PhoenixLink>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-item dropdown-toggle" id="trip"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                        <div className="dropdown-item-wrapper">
                          <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                          </span>
                          <span>
                            <span className="me-2 uil">                            </span>
Trip
                          </span>
                        </div>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <PhoenixLink href="/apps/travel-agency/trip/homepage" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Homepage 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/apps/travel-agency/trip/trip-details" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Trip details 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/apps/travel-agency/trip/checkout" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Checkout 
                            </div>
                          </PhoenixLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-item dropdown-toggle" id="stock"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                    <div className="dropdown-item-wrapper">
                      <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                      </span>
                      <span>
                        <span className="me-2 uil" data-feather={"dollar-sign"}>                        </span>
Stock
                      </span>
                    </div>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <PhoenixLink href="/apps/stock/stock-details" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Stock details 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/apps/stock/portfolio" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Portfolio 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/apps/stock/watchlist" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Watchlist 
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <PhoenixLink href="/apps/chat" className="dropdown-item">
                    <div className="dropdown-item-wrapper">
                      <span className="me-2 uil" data-feather={"message-square"}>                      </span>
Chat 
                    </div>
                  </PhoenixLink>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-item dropdown-toggle" id="email"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                    <div className="dropdown-item-wrapper">
                      <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                      </span>
                      <span>
                        <span className="me-2 uil" data-feather={"mail"}>                        </span>
Email
                      </span>
                    </div>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <PhoenixLink href="/apps/email/inbox" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Inbox 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/apps/email/email-detail" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Email detail 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/apps/email/compose" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Compose 
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-item dropdown-toggle" id="events"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                    <div className="dropdown-item-wrapper">
                      <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                      </span>
                      <span>
                        <span className="me-2 uil" data-feather={"bookmark"}>                        </span>
Events
                      </span>
                    </div>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <PhoenixLink href="/apps/events/create-an-event" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Create an event 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/apps/events/event-detail" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Event detail 
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-item dropdown-toggle" id="kanban"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                    <div className="dropdown-item-wrapper">
                      <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                      </span>
                      <span>
                        <span className="me-2 uil" data-feather={"trello"}>                        </span>
Kanban
                      </span>
                    </div>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <PhoenixLink href="/apps/kanban/kanban" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Kanban 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/apps/kanban/boards" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Boards 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/apps/kanban/create-kanban-board" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Create board 
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <PhoenixLink href="/apps/gantt-chart" className="dropdown-item">
                    <div className="dropdown-item-wrapper">
                      <span className="me-2 fa-solid fa-chart-gantt ">                      </span>
Gantt chart 
                    </div>
                  </PhoenixLink>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-item dropdown-toggle" id="social"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                    <div className="dropdown-item-wrapper">
                      <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                      </span>
                      <span>
                        <span className="me-2 uil" data-feather={"share-2"}>                        </span>
Social
                      </span>
                    </div>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <PhoenixLink href="/apps/social/profile" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Profile 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/apps/social/settings" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Settings 
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-item dropdown-toggle" id="gallery"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                    <div className="dropdown-item-wrapper">
                      <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                      </span>
                      <span>
                        <span className="me-2 uil" data-feather={"image"}>                        </span>
Gallery
                      </span>
                    </div>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <PhoenixLink href="/apps/gallery/album" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Album 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/apps/gallery/gallery-column" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Gallery column 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/apps/gallery/gallery-grid" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Gallery grid 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/apps/gallery/grid-with-title" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Grid with title 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/apps/gallery/gallery-masonry" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Gallery masonry 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/apps/gallery/gallery-slider" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Gallery slider 
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-item dropdown-toggle" id="file-manager"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                    <div className="dropdown-item-wrapper">
                      <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                      </span>
                      <span>
                        <span className="me-2 uil" data-feather={"folder"}>                        </span>
File manager
                      </span>
                    </div>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <PhoenixLink href="/apps/file-manager/grid-view" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Grid view 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/apps/file-manager/list-view" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
List view 
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <PhoenixLink href="/apps/calendar" className="dropdown-item">
                    <div className="dropdown-item-wrapper">
                      <span className="me-2 uil" data-feather={"calendar"}>                      </span>
Calendar 
                    </div>
                  </PhoenixLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a href="#!" className="nav-link dropdown-toggle lh-1"  role="button" data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"} aria-haspopup="true" aria-expanded="false">
                <span className="uil fs-8 me-2 uil-files-landscapes-alt">                </span>Pages
              </a>
              <ul className="dropdown-menu navbar-dropdown-caret">
                <li>
                  <PhoenixLink href="/pages/starter" className="dropdown-item">
                    <div className="dropdown-item-wrapper">
                      <span className="me-2 uil" data-feather={"compass"}>                      </span>
Starter 
                    </div>
                  </PhoenixLink>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-item dropdown-toggle" id="faq"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                    <div className="dropdown-item-wrapper">
                      <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                      </span>
                      <span>
                        <span className="me-2 uil" data-feather={"help-circle"}>                        </span>
Faq
                      </span>
                    </div>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <PhoenixLink href="/pages/faq/faq-accordion" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Faq accordion 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/pages/faq/faq-tab" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Faq tab 
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-item dropdown-toggle" id="landing"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                    <div className="dropdown-item-wrapper">
                      <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                      </span>
                      <span>
                        <span className="me-2 uil" data-feather={"globe"}>                        </span>
Landing
                      </span>
                    </div>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <PhoenixLink href="/pages/landing/default" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Default 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/pages/landing/alternate" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Alternate 
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-item dropdown-toggle" id="pricing"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                    <div className="dropdown-item-wrapper">
                      <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                      </span>
                      <span>
                        <span className="me-2 uil" data-feather={"tag"}>                        </span>
Pricing
                      </span>
                    </div>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <PhoenixLink href="/pages/pricing/pricing-column" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Pricing column 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/pages/pricing/pricing-grid" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Pricing grid 
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <PhoenixLink href="/pages/notifications" className="dropdown-item">
                    <div className="dropdown-item-wrapper">
                      <span className="me-2 uil" data-feather={"bell"}>                      </span>
Notifications 
                    </div>
                  </PhoenixLink>
                </li>
                <li>
                  <PhoenixLink href="/pages/members" className="dropdown-item">
                    <div className="dropdown-item-wrapper">
                      <span className="me-2 uil" data-feather={"users"}>                      </span>
Members 
                    </div>
                  </PhoenixLink>
                </li>
                <li>
                  <PhoenixLink href="/pages/timeline" className="dropdown-item">
                    <div className="dropdown-item-wrapper">
                      <span className="me-2 uil" data-feather={"clock"}>                      </span>
Timeline 
                    </div>
                  </PhoenixLink>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-item dropdown-toggle" id="errors"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                    <div className="dropdown-item-wrapper">
                      <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                      </span>
                      <span>
                        <span className="me-2 uil" data-feather={"alert-triangle"}>                        </span>
Errors
                      </span>
                    </div>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <PhoenixLink href="/pages/errors/404" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
404 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/pages/errors/403" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
403 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/pages/errors/500" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
500 
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-item dropdown-toggle" id="authentication"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                    <div className="dropdown-item-wrapper">
                      <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                      </span>
                      <span>
                        <span className="me-2 uil" data-feather={"lock"}>                        </span>
Authentication
                      </span>
                    </div>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown">
                      <a href="#" className="dropdown-item dropdown-toggle" id="simple"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                        <div className="dropdown-item-wrapper">
                          <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                          </span>
                          <span>
                            <span className="me-2 uil">                            </span>
Simple
                          </span>
                        </div>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <PhoenixLink href="/pages/authentication/simple/sign-in" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Sign in 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/pages/authentication/simple/sign-up" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Sign up 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/pages/authentication/simple/sign-out" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Sign out 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/pages/authentication/simple/forgot-password" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Forgot password 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/pages/authentication/simple/reset-password" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Reset password 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/pages/authentication/simple/lock-screen" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Lock screen 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/pages/authentication/simple/2FA" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
2FA 
                            </div>
                          </PhoenixLink>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-item dropdown-toggle" id="split"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                        <div className="dropdown-item-wrapper">
                          <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                          </span>
                          <span>
                            <span className="me-2 uil">                            </span>
Split
                          </span>
                        </div>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <PhoenixLink href="/pages/authentication/split/sign-in" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Sign in 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/pages/authentication/split/sign-up" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Sign up 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/pages/authentication/split/sign-out" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Sign out 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/pages/authentication/split/forgot-password" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Forgot password 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/pages/authentication/split/reset-password" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Reset password 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/pages/authentication/split/lock-screen" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Lock screen 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/pages/authentication/split/2FA" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
2FA 
                            </div>
                          </PhoenixLink>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-item dropdown-toggle" id="Card"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                        <div className="dropdown-item-wrapper">
                          <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                          </span>
                          <span>
                            <span className="me-2 uil">                            </span>
Card
                          </span>
                        </div>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <PhoenixLink href="/pages/authentication/card/sign-in" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Sign in 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/pages/authentication/card/sign-up" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Sign up 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/pages/authentication/card/sign-out" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Sign out 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/pages/authentication/card/forgot-password" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Forgot password 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/pages/authentication/card/reset-password" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Reset password 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/pages/authentication/card/lock-screen" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
Lock screen 
                            </div>
                          </PhoenixLink>
                        </li>
                        <li>
                          <PhoenixLink href="/pages/authentication/card/2FA" className="dropdown-item">
                            <div className="dropdown-item-wrapper">
                              <span className="me-2 uil">                              </span>
2FA 
                            </div>
                          </PhoenixLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-item dropdown-toggle" id="layouts"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                    <div className="dropdown-item-wrapper">
                      <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                      </span>
                      <span>
                        <span className="me-2 uil" data-feather={"layout"}>                        </span>
Layouts
                      </span>
                    </div>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <PhoenixLink href="/demo/vertical-sidenav" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Vertical sidenav 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/demo/dark-mode" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Dark mode 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/demo/sidenav-collapse" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Sidenav collapse 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/demo/darknav" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Darknav 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/demo/topnav-slim" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Topnav slim 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/demo/navbar-horizontal" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Navbar horizontal 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/demo/horizontal-slim" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Horizontal slim 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/demo/combo-nav" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Combo nav 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/demo/combo-nav-slim" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Combo nav slim 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/demo/dual-nav" className="dropdown-item active">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Dual nav 
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a href="#!" className="nav-link dropdown-toggle lh-1"  role="button" data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"} aria-haspopup="true" aria-expanded="false">
                <span className="uil fs-8 me-2 uil-puzzle-piece">                </span>Modules
              </a>
              <ul className="dropdown-menu navbar-dropdown-caret dropdown-menu-card py-0">
                <div className="border-0 scrollbar" style={{"maxHeight":"60vh"} as CSSProperties}>
                  <div className="px-3 pt-4 pb-3 img-dropdown">
                    <div className="row gx-4 gy-5">
                      <div className="col-12 col-sm-6 col-md-4">
                        <div className="dropdown-item-group">
                          <span className="me-2" data-feather={"file-text"} style={{"strokeWidth":"2"} as CSSProperties}>                          </span>
                          <h6 className="dropdown-item-title">
Forms 
                          </h6>
                        </div>
                        <PhoenixLink href="/modules/forms/basic/form-control" className="dropdown-link">
Form control
                        </PhoenixLink>
                        <PhoenixLink href="/modules/forms/basic/input-group" className="dropdown-link">
Input group
                        </PhoenixLink>
                        <PhoenixLink href="/modules/forms/basic/select" className="dropdown-link">
Select
                        </PhoenixLink>
                        <PhoenixLink href="/modules/forms/basic/checks" className="dropdown-link">
Checks
                        </PhoenixLink>
                        <PhoenixLink href="/modules/forms/basic/range" className="dropdown-link">
Range
                        </PhoenixLink>
                        <PhoenixLink href="/modules/forms/basic/floating-labels" className="dropdown-link">
Floating labels
                        </PhoenixLink>
                        <PhoenixLink href="/modules/forms/basic/layout" className="dropdown-link">
Layout
                        </PhoenixLink>
                        <PhoenixLink href="/modules/forms/advance/advance-select" className="dropdown-link">
Advance select
                        </PhoenixLink>
                        <PhoenixLink href="/modules/forms/advance/date-picker" className="dropdown-link">
Date picker
                        </PhoenixLink>
                        <PhoenixLink href="/modules/forms/advance/editor" className="dropdown-link">
Editor
                        </PhoenixLink>
                        <PhoenixLink href="/modules/forms/advance/file-uploader" className="dropdown-link">
File uploader
                        </PhoenixLink>
                        <PhoenixLink href="/modules/forms/advance/range" className="dropdown-link">
Range
                        </PhoenixLink>
                        <PhoenixLink href="/modules/forms/advance/rating" className="dropdown-link">
Rating
                        </PhoenixLink>
                        <PhoenixLink href="/modules/forms/advance/emoji-button" className="dropdown-link">
Emoji button
                        </PhoenixLink>
                        <PhoenixLink href="/modules/forms/validation" className="dropdown-link">
Validation
                        </PhoenixLink>
                        <PhoenixLink href="/modules/forms/wizard" className="dropdown-link">
Wizard
                        </PhoenixLink>
                        <div className="dropdown-item-group mt-5">
                          <span className="me-2" data-feather={"grid"} style={{"strokeWidth":"2"} as CSSProperties}>                          </span>
                          <h6 className="dropdown-item-title">
Icons 
                          </h6>
                        </div>
                        <PhoenixLink href="/modules/icons/feather" className="dropdown-link">
Feather
                        </PhoenixLink>
                        <PhoenixLink href="/modules/icons/font-awesome" className="dropdown-link">
Font awesome
                        </PhoenixLink>
                        <PhoenixLink href="/modules/icons/unicons" className="dropdown-link">
Unicons
                        </PhoenixLink>
                        <div className="dropdown-item-group mt-5">
                          <span className="me-2" data-feather={"bar-chart-2"} style={{"strokeWidth":"2"} as CSSProperties}>                          </span>
                          <h6 className="dropdown-item-title">
ECharts 
                          </h6>
                        </div>
                        <PhoenixLink href="/modules/echarts/line-charts" className="dropdown-link">
Line charts
                        </PhoenixLink>
                        <PhoenixLink href="/modules/echarts/bar-charts" className="dropdown-link">
Bar charts
                        </PhoenixLink>
                        <PhoenixLink href="/modules/echarts/candlestick-charts" className="dropdown-link">
Candlestick charts
                        </PhoenixLink>
                        <PhoenixLink href="/modules/echarts/geo-map" className="dropdown-link">
Geo map
                        </PhoenixLink>
                        <PhoenixLink href="/modules/echarts/scatter-charts" className="dropdown-link">
Scatter charts
                        </PhoenixLink>
                        <PhoenixLink href="/modules/echarts/pie-charts" className="dropdown-link">
Pie charts
                        </PhoenixLink>
                        <PhoenixLink href="/modules/echarts/gauge-chart" className="dropdown-link">
Gauge chart
                        </PhoenixLink>
                        <PhoenixLink href="/modules/echarts/radar-charts" className="dropdown-link">
Radar charts
                        </PhoenixLink>
                        <PhoenixLink href="/modules/echarts/heatmap-charts" className="dropdown-link">
Heatmap charts
                        </PhoenixLink>
                        <PhoenixLink href="/modules/echarts/how-to-use" className="dropdown-link">
How to use
                        </PhoenixLink>
                      </div>
                      <div className="col-12 col-sm-6 col-md-4">
                        <div className="dropdown-item-group">
                          <span className="me-2" data-feather={"package"} style={{"strokeWidth":"2"} as CSSProperties}>                          </span>
                          <h6 className="dropdown-item-title">
Components 
                          </h6>
                        </div>
                        <PhoenixLink href="/modules/components/accordion" className="dropdown-link">
Accordion
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/avatar" className="dropdown-link">
Avatar
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/alerts" className="dropdown-link">
Alerts
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/badge" className="dropdown-link">
Badge
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/breadcrumb" className="dropdown-link">
Breadcrumb
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/button" className="dropdown-link">
Buttons
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/calendar" className="dropdown-link">
Calendar
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/card" className="dropdown-link">
Card
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/carousel/bootstrap" className="dropdown-link">
Bootstrap
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/carousel/swiper" className="dropdown-link">
Swiper
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/collapse" className="dropdown-link">
Collapse
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/dropdown" className="dropdown-link">
Dropdown
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/dhtmlx-gantt" className="dropdown-link">
Dhtmlx gantt
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/list-group" className="dropdown-link">
List group
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/modal" className="dropdown-link">
Modals
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/navs-and-tabs/navs" className="dropdown-link">
Navs
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/navs-and-tabs/navbar" className="dropdown-link">
Navbar
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/navs-and-tabs/tabs" className="dropdown-link">
Tabs
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/offcanvas" className="dropdown-link">
Offcanvas
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/progress-bar" className="dropdown-link">
Progress bar
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/placeholder" className="dropdown-link">
Placeholder
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/pagination" className="dropdown-link">
Pagination
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/popovers" className="dropdown-link">
Popovers
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/scrollspy" className="dropdown-link">
Scrollspy
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/sortable" className="dropdown-link">
Sortable
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/spinners" className="dropdown-link">
Spinners
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/toast" className="dropdown-link">
Toast
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/tooltips" className="dropdown-link">
Tooltips
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/typed-text" className="dropdown-link">
Typed text
                        </PhoenixLink>
                        <PhoenixLink href="/modules/components/chat-widget" className="dropdown-link">
Chat widget
                        </PhoenixLink>
                      </div>
                      <div className="col-12 col-sm-6 col-md-4">
                        <div className="dropdown-item-group">
                          <span className="me-2" data-feather={"columns"} style={{"strokeWidth":"2"} as CSSProperties}>                          </span>
                          <h6 className="dropdown-item-title">
Tables 
                          </h6>
                        </div>
                        <PhoenixLink href="/modules/tables/basic-tables" className="dropdown-link">
Basic tables
                        </PhoenixLink>
                        <PhoenixLink href="/modules/tables/advance-tables" className="dropdown-link">
Advance tables
                        </PhoenixLink>
                        <PhoenixLink href="/modules/tables/bulk-select" className="dropdown-link">
Bulk Select
                        </PhoenixLink>
                        <div className="dropdown-item-group mt-5">
                          <span className="me-2" data-feather={"tool"} style={{"strokeWidth":"2"} as CSSProperties}>                          </span>
                          <h6 className="dropdown-item-title">
Utilities 
                          </h6>
                        </div>
                        <PhoenixLink href="/modules/utilities/background" className="dropdown-link">
Background
                        </PhoenixLink>
                        <PhoenixLink href="/modules/utilities/borders" className="dropdown-link">
Borders
                        </PhoenixLink>
                        <PhoenixLink href="/modules/utilities/colors" className="dropdown-link">
Colors
                        </PhoenixLink>
                        <PhoenixLink href="/modules/utilities/display" className="dropdown-link">
Display
                        </PhoenixLink>
                        <PhoenixLink href="/modules/utilities/flex" className="dropdown-link">
Flex
                        </PhoenixLink>
                        <PhoenixLink href="/modules/utilities/stacks" className="dropdown-link">
Stacks
                        </PhoenixLink>
                        <PhoenixLink href="/modules/utilities/float" className="dropdown-link">
Float
                        </PhoenixLink>
                        <PhoenixLink href="/modules/utilities/grid" className="dropdown-link">
Grid
                        </PhoenixLink>
                        <PhoenixLink href="/modules/utilities/interactions" className="dropdown-link">
Interactions
                        </PhoenixLink>
                        <PhoenixLink href="/modules/utilities/opacity" className="dropdown-link">
Opacity
                        </PhoenixLink>
                        <PhoenixLink href="/modules/utilities/overflow" className="dropdown-link">
Overflow
                        </PhoenixLink>
                        <PhoenixLink href="/modules/utilities/position" className="dropdown-link">
Position
                        </PhoenixLink>
                        <PhoenixLink href="/modules/utilities/shadows" className="dropdown-link">
Shadows
                        </PhoenixLink>
                        <PhoenixLink href="/modules/utilities/sizing" className="dropdown-link">
Sizing
                        </PhoenixLink>
                        <PhoenixLink href="/modules/utilities/spacing" className="dropdown-link">
Spacing
                        </PhoenixLink>
                        <PhoenixLink href="/modules/utilities/typography" className="dropdown-link">
Typography
                        </PhoenixLink>
                        <PhoenixLink href="/modules/utilities/vertical-align" className="dropdown-link">
Vertical align
                        </PhoenixLink>
                        <PhoenixLink href="/modules/utilities/visibility" className="dropdown-link">
Visibility
                        </PhoenixLink>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a href="#!" className="nav-link dropdown-toggle lh-1"  role="button" data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"} aria-haspopup="true" aria-expanded="false">
                <span className="uil fs-8 me-2 uil-document-layout-right">                </span>Documentation
              </a>
              <ul className="dropdown-menu navbar-dropdown-caret">
                <li>
                  <PhoenixLink href="/documentation/getting-started" className="dropdown-item">
                    <div className="dropdown-item-wrapper">
                      <span className="me-2 uil" data-feather={"life-buoy"}>                      </span>
Getting started 
                    </div>
                  </PhoenixLink>
                </li>
                <li className="dropdown dropdown-inside">
                  <a href="#" className="dropdown-item dropdown-toggle" id="customization"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                    <div className="dropdown-item-wrapper">
                      <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                      </span>
                      <span>
                        <span className="me-2 uil" data-feather={"settings"}>                        </span>
Customization
                      </span>
                    </div>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <PhoenixLink href="/documentation/customization/configuration" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Configuration 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/documentation/customization/styling" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Styling 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/documentation/customization/color" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Color 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/documentation/customization/dark-mode" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Dark mode 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/documentation/customization/plugin" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Plugin 
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-inside">
                  <a href="#" className="dropdown-item dropdown-toggle" id="layouts-doc"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                    <div className="dropdown-item-wrapper">
                      <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                      </span>
                      <span>
                        <span className="me-2 uil" data-feather={"table"}>                        </span>
Layouts doc
                      </span>
                    </div>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <PhoenixLink href="/documentation/layouts/vertical-navbar" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Vertical navbar 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/documentation/layouts/horizontal-navbar" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Horizontal navbar 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/documentation/layouts/combo-navbar" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Combo navbar 
                        </div>
                      </PhoenixLink>
                    </li>
                    <li>
                      <PhoenixLink href="/documentation/layouts/dual-nav" className="dropdown-item">
                        <div className="dropdown-item-wrapper">
                          <span className="me-2 uil">                          </span>
Dual nav 
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <PhoenixLink href="/documentation/gulp" className="dropdown-item">
                    <div className="dropdown-item-wrapper">
                      <span className="me-2 fa-brands fa-gulp ms-1 me-1 fa-lg">                      </span>
Gulp 
                    </div>
                  </PhoenixLink>
                </li>
                <li>
                  <PhoenixLink href="/documentation/design-file" className="dropdown-item">
                    <div className="dropdown-item-wrapper">
                      <span className="me-2 uil" data-feather={"figma"}>                      </span>
Design file 
                    </div>
                  </PhoenixLink>
                </li>
                <li>
                  <PhoenixLink href="/changelog" className="dropdown-item">
                    <div className="dropdown-item-wrapper">
                      <span className="me-2 uil" data-feather={"git-merge"}>                      </span>
Changelog 
                    </div>
                  </PhoenixLink>
                </li>
                <li>
                  <PhoenixLink href="/showcase" className="dropdown-item">
                    <div className="dropdown-item-wrapper">
                      <span className="me-2 uil" data-feather={"monitor"}>                      </span>
Showcase 
                    </div>
                  </PhoenixLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className="content">
      <div className="pb-5">
        <div className="row g-4">
          <div className="col-12 col-xxl-6">
            <div className="mb-8">
              <h2 className="mb-2">
Ecommerce Dashboard
              </h2>
              <h5 className="text-body-tertiary fw-semibold">
Here’s what’s going on at your business right now
              </h5>
            </div>
            <div className="row align-items-center g-4">
              <div className="col-12 col-md-auto">
                <div className="d-flex align-items-center">
                  <span className="fa-stack" style={{"minHeight":"46px","minWidth":"46px"} as CSSProperties}>
                    <span className="fa-solid fa-square fa-stack-2x dark__text-opacity-50 text-success-light" data-fa-transform={"down-4 rotate--10 left-4"}>                    </span>
                    <span className="fa-solid fa-circle fa-stack-2x stack-circle text-stats-circle-success" data-fa-transform={"up-4 right-3 grow-2"}>                    </span>
                    <span className="fa-stack-1x fa-solid fa-star text-success " data-fa-transform={"shrink-2 up-8 right-6"}>                    </span>
                  </span>
                  <div className="ms-3">
                    <h4 className="mb-0">
57 new orders
                    </h4>
                    <p className="text-body-secondary fs-9 mb-0">
Awating processing
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-auto">
                <div className="d-flex align-items-center">
                  <span className="fa-stack" style={{"minHeight":"46px","minWidth":"46px"} as CSSProperties}>
                    <span className="fa-solid fa-square fa-stack-2x dark__text-opacity-50 text-warning-light" data-fa-transform={"down-4 rotate--10 left-4"}>                    </span>
                    <span className="fa-solid fa-circle fa-stack-2x stack-circle text-stats-circle-warning" data-fa-transform={"up-4 right-3 grow-2"}>                    </span>
                    <span className="fa-stack-1x fa-solid fa-pause text-warning " data-fa-transform={"shrink-2 up-8 right-6"}>                    </span>
                  </span>
                  <div className="ms-3">
                    <h4 className="mb-0">
5 orders
                    </h4>
                    <p className="text-body-secondary fs-9 mb-0">
On hold
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-auto">
                <div className="d-flex align-items-center">
                  <span className="fa-stack" style={{"minHeight":"46px","minWidth":"46px"} as CSSProperties}>
                    <span className="fa-solid fa-square fa-stack-2x dark__text-opacity-50 text-danger-light" data-fa-transform={"down-4 rotate--10 left-4"}>                    </span>
                    <span className="fa-solid fa-circle fa-stack-2x stack-circle text-stats-circle-danger" data-fa-transform={"up-4 right-3 grow-2"}>                    </span>
                    <span className="fa-stack-1x fa-solid fa-xmark text-danger " data-fa-transform={"shrink-2 up-8 right-6"}>                    </span>
                  </span>
                  <div className="ms-3">
                    <h4 className="mb-0">
15 products
                    </h4>
                    <p className="text-body-secondary fs-9 mb-0">
Out of stock
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="bg-body-secondary mb-6 mt-4" />
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
            <div className="echart-total-sales-chart" style={{"minHeight":"320px","width":"100%"} as CSSProperties}>            </div>
          </div>
          <div className="col-12 col-xxl-6">
            <div className="row g-3">
              <div className="col-12 col-md-6">
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
                      <div className="echart-total-orders" style={{"height":"85px","width":"115px"} as CSSProperties}>                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="d-flex align-items-center mb-2">
                        <div className="bullet-item bg-primary me-2">                        </div>
                        <h6 className="text-body fw-semibold flex-1 mb-0">
Completed
                        </h6>
                        <h6 className="text-body fw-semibold mb-0">
52%
                        </h6>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="bullet-item bg-primary-subtle me-2">                        </div>
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
              <div className="col-12 col-md-6">
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
                      <div className="echarts-new-customers" style={{"height":"180px","width":"100%"} as CSSProperties}>                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
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
                      <div className="echart-top-coupons" style={{"height":"115px","width":"100%"} as CSSProperties}>                      </div>
                    </div>
                    <div>
                      <div className="d-flex align-items-center mb-2">
                        <div className="bullet-item bg-primary me-2">                        </div>
                        <h6 className="text-body fw-semibold flex-1 mb-0">
Percentage discount
                        </h6>
                        <h6 className="text-body fw-semibold mb-0">
72%
                        </h6>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <div className="bullet-item bg-primary-lighter me-2">                        </div>
                        <h6 className="text-body fw-semibold flex-1 mb-0">
Fixed card discount
                        </h6>
                        <h6 className="text-body fw-semibold mb-0">
18%
                        </h6>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="bullet-item bg-info-dark me-2">                        </div>
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
              <div className="col-12 col-md-6">
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
                      <div className="echarts-paying-customer-chart" style={{"height":"100%","width":"100%"} as CSSProperties}>                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="d-flex align-items-center mb-2">
                        <div className="bullet-item bg-primary me-2">                        </div>
                        <h6 className="text-body fw-semibold flex-1 mb-0">
Paying customer
                        </h6>
                        <h6 className="text-body fw-semibold mb-0">
30%
                        </h6>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="bullet-item bg-primary-subtle me-2">                        </div>
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
          </div>
        </div>
      </div>
      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis pt-7 border-y">
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
      <div className="row gx-6">
        <div className="col-12 col-xl-6">
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
        <div className="col-12 col-xl-6">
          <div className="mx-n4 mx-lg-n6 ms-xl-0 h-100">
            <div className="h-100 w-100">
              <div className="h-100 bg-body-emphasis" id="map" style={{"minHeight":"300px"} as CSSProperties}>              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis pt-6 pb-9 border-top">
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
      <footer className="footer position-absolute">
        <div className="row g-0 justify-content-between align-items-center h-100">
          <div className="col-12 col-sm-auto text-center">
            <p className="mb-0 mt-2 mt-sm-0 text-body">
Thank you for creating with Phoenix
              <span className="d-none d-sm-inline-block">              </span>
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

    <div className="modal fade" id="searchBoxModal" tabIndex={-1} aria-hidden="true" data-bs-backdrop={"true"} data-phoenix-modal style={{"--phoenix-backdrop-opacity":"1"} as CSSProperties}>
      <div className="modal-dialog">
        <div className="modal-content mt-15 rounded-pill">
          <div className="modal-body p-0">
            <div className="search-box navbar-top-search-box" data-list={"{\"valueNames\":[\"title\"]}"} style={{"width":"auto"} as CSSProperties}>
              <form className="position-relative" data-bs-toggle={"search"} data-bs-display={"static"}>
                <input className="form-control search-input fuzzy-search rounded-pill form-control-lg" type="search" placeholder="Search..." aria-label="Search" />
                <span className="fas fa-search search-box-icon">                </span>
              </form>
              <div className="btn-close position-absolute end-0 top-50 translate-middle cursor-pointer shadow-none" data-bs-dismiss={"search"}>
                <button className="btn btn-link p-0" aria-label="Close">                </button>
              </div>
              <div className="dropdown-menu border start-0 py-0 overflow-hidden w-100">
                <div className="scrollbar-overlay" style={{"maxHeight":"30rem"} as CSSProperties}>
                  <div className="list pb-3">
                    <h6 className="dropdown-header text-body-highlight fs-10 py-2">
24 
                      <span className="text-body-quaternary">
results
                      </span>
                    </h6>
                    <hr className="my-0" />
                    <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
Recently Searched 
                    </h6>
                    <div className="py-2">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-solid fa-clock-rotate-left" data-fa-transform={"shrink-2"}>                            </span>
 Store Macbook
                          </div>
                        </div>
                      </PhoenixLink>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-solid fa-clock-rotate-left" data-fa-transform={"shrink-2"}>                            </span>
 MacBook Air - 13″
                          </div>
                        </div>
                      </PhoenixLink>
                    </div>
                    <hr className="my-0" />
                    <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
Products
                    </h6>
                    <div className="py-2">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item py-2 d-flex align-items-center">
                        <div className="file-thumbnail me-2">
                          <PhoenixImage src="/assets/img/products/60x60/3.png" alt="" className="h-100 w-100 object-fit-cover rounded-3" />
                        </div>                        <div className="flex-1">
                          <h6 className="mb-0 text-body-highlight title">
MacBook Air - 13″
                          </h6>
                          <p className="fs-10 mb-0 d-flex text-body-tertiary">
                            <span className="fw-medium text-body-tertiary text-opactity-85">
8GB Memory - 1.6GHz - 128GB Storage
                            </span>
                          </p>
                        </div>
                      </PhoenixLink>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item py-2 d-flex align-items-center">
                        <div className="file-thumbnail me-2">
                          <PhoenixImage src="/assets/img/products/60x60/3.png" alt="" className="img-fluid" />
                        </div>                        <div className="flex-1">
                          <h6 className="mb-0 text-body-highlight title">
MacBook Pro - 13″
                          </h6>
                          <p className="fs-10 mb-0 d-flex text-body-tertiary">
                            <span className="fw-medium text-body-tertiary text-opactity-85">
30 Sep at 12:30 PM
                            </span>
                          </p>
                        </div>
                      </PhoenixLink>
                    </div>
                    <hr className="my-0" />
                    <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
Quick Links
                    </h6>
                    <div className="py-2">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-solid fa-link text-body" data-fa-transform={"shrink-2"}>                            </span>
 Support MacBook House
                          </div>
                        </div>
                      </PhoenixLink>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-solid fa-link text-body" data-fa-transform={"shrink-2"}>                            </span>
 Store MacBook″
                          </div>
                        </div>
                      </PhoenixLink>
                    </div>
                    <hr className="my-0" />
                    <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
Files
                    </h6>
                    <div className="py-2">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-solid fa-file-zipper text-body" data-fa-transform={"shrink-2"}>                            </span>
 Library MacBook folder.rar
                          </div>
                        </div>
                      </PhoenixLink>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-solid fa-file-lines text-body" data-fa-transform={"shrink-2"}>                            </span>
 Feature MacBook extensions.txt
                          </div>
                        </div>
                      </PhoenixLink>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-solid fa-image text-body" data-fa-transform={"shrink-2"}>                            </span>
 MacBook Pro_13.jpg
                          </div>
                        </div>
                      </PhoenixLink>
                    </div>
                    <hr className="my-0" />
                    <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
Members
                    </h6>
                    <div className="py-2">
                      <PhoenixLink href="/pages/members" className="dropdown-item py-2 d-flex align-items-center">
                        <div className="avatar avatar-l status-online  me-2 text-body">
                          <PhoenixImage src="/assets/img/team/40x40/10.webp" alt="" className="rounded-circle " />
                        </div>                        <div className="flex-1">
                          <h6 className="mb-0 text-body-highlight title">
Carry Anna
                          </h6>
                          <p className="fs-10 mb-0 d-flex text-body-tertiary">
anna@technext.it
                          </p>
                        </div>
                      </PhoenixLink>
                      <PhoenixLink href="/pages/members" className="dropdown-item py-2 d-flex align-items-center">
                        <div className="avatar avatar-l  me-2 text-body">
                          <PhoenixImage src="/assets/img/team/40x40/12.webp" alt="" className="rounded-circle " />
                        </div>                        <div className="flex-1">
                          <h6 className="mb-0 text-body-highlight title">
John Smith
                          </h6>
                          <p className="fs-10 mb-0 d-flex text-body-tertiary">
smith@technext.it
                          </p>
                        </div>
                      </PhoenixLink>
                    </div>
                    <hr className="my-0" />
                    <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
Related Searches
                    </h6>
                    <div className="py-2">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-brands fa-firefox-browser text-body" data-fa-transform={"shrink-2"}>                            </span>
 Search in the Web MacBook
                          </div>
                        </div>
                      </PhoenixLink>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-brands fa-chrome text-body" data-fa-transform={"shrink-2"}>                            </span>
 Store MacBook″
                          </div>
                        </div>
                      </PhoenixLink>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="fallback fw-bold fs-7 d-none">
No Result Found.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

    </div>
  );
}
