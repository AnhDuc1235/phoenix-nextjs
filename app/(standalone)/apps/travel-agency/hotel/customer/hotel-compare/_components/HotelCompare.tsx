'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function HotelCompare() {
  return (
    <div suppressHydrationWarning>

    <div className="sticky-top bg-body" data-navbar-shadow-on-scroll>
      <nav className="navbar navbar-top navbar-expand-lg container-medium border-0 bg-body px-3 py-2">
        <button className="navbar-toggler fs-8 ps-2 me-sm-2" type="button" data-bs-toggle={"collapse"} data-bs-target={"#navbarTopCollapse"} aria-controls="navbarTopCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">          </span>
        </button>
        <PhoenixLink href="/" className="navbar-brand flex-1 flex-lg-grow-0 me-lg-8 me-xl-13">
          <div className="d-flex align-items-center">
            <PhoenixImage src="/assets/img/icons/logo.png" alt="phoenix" width={27} />
            <h5 className="logo-text ms-2">
phoenix
            </h5>
          </div>
        </PhoenixLink>
        <div className="d-flex align-items-center gap-2 gap-sm-3 gap-md-4 my-2 order-lg-1">
          <div className="theme-control-toggle fa-icon-wait">
            <input className="form-check-input ms-0 theme-control-toggle-input" type="checkbox" data-theme-control={"phoenixTheme"} defaultValue="dark" id="themeControlToggleSm" />
            <label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggleSm" data-bs-toggle={"tooltip"} data-bs-placement={"left"} data-bs-title={"Switch theme"} style={{"height":"32px","width":"32px"} as CSSProperties}>
              <span className="icon" data-feather={"moon"}>              </span>
            </label>
            <label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggleSm" data-bs-toggle={"tooltip"} data-bs-placement={"left"} data-bs-title={"Switch theme"} style={{"height":"32px","width":"32px"} as CSSProperties}>
              <span className="icon" data-feather={"sun"}>              </span>
            </label>
          </div>
          <a href="#!" className="btn btn-link text-body-tertiary p-0">
            <span data-feather={"map-pin"} style={{"width":"18px","height":"18px"} as CSSProperties}>            </span>
          </a>
          <a href="#!" className="btn btn-link text-body-tertiary p-0">
            <span data-feather={"bell"} style={{"width":"20px","height":"20px"} as CSSProperties}>            </span>
          </a>
          <PhoenixLink href="/pages/authentication/card/sign-in" className="btn btn-link text-body-tertiary p-0"  data-bs-toggle={"tooltip"} data-bs-placement={"bottom"} data-bs-title={"Agent Login"}>
            <span data-feather={"log-in"} style={{"width":"20px","height":"20px"} as CSSProperties}>            </span>
          </PhoenixLink>
          <a href="#!" className="btn btn-link text-body-tertiary p-0">
            <span data-feather={"user"} style={{"width":"20px","height":"20px"} as CSSProperties}>            </span>
          </a>
        </div>
        <div className="collapse navbar-collapse navbar-top-collapse order-1 order-lg-0 justify-content-center pb-0" id="navbarTopCollapse">
          <ul className="navbar-nav travel-nav-top me-auto" data-dropdown-on-hover>
            <li className="nav-item dropdown">
              <a href="#!" className="nav-link fs-8 fw-bold dropdown-toggle text-primary"  role="button" data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"} aria-haspopup="true" aria-expanded="false">
Hotel
              </a>
              <ul className="dropdown-menu navbar-dropdown-caret">
                <li>
                  <PhoenixLink href="/apps/travel-agency/hotel/customer/homepage" className="dropdown-item">
Homepage
                  </PhoenixLink>
                </li>
                <li>
                  <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-details" className="dropdown-item">
Hotel Details
                  </PhoenixLink>
                </li>
                <li>
                  <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-compare" className="dropdown-item">
Hotel Compare
                  </PhoenixLink>
                </li>
                <li>
                  <PhoenixLink href="/apps/travel-agency/hotel/customer/checkout" className="dropdown-item">
Check out
                  </PhoenixLink>
                </li>
                <li>
                  <PhoenixLink href="/apps/travel-agency/hotel/customer/payment" className="dropdown-item">
Payment
                  </PhoenixLink>
                </li>
                <li>
                  <PhoenixLink href="/apps/travel-agency/hotel/customer/gallery" className="dropdown-item">
Gallery
                  </PhoenixLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a href="#!" className="nav-link fs-8 fw-bold dropdown-toggle "  role="button" data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"} aria-haspopup="true" aria-expanded="false">
Flight
              </a>
              <ul className="dropdown-menu navbar-dropdown-caret">
                <li>
                  <PhoenixLink href="/apps/travel-agency/flight/homepage" className="dropdown-item">
Homepage
                  </PhoenixLink>
                </li>
                <li>
                  <PhoenixLink href="/apps/travel-agency/flight/booking" className="dropdown-item">
Booking
                  </PhoenixLink>
                </li>
                <li>
                  <PhoenixLink href="/apps/travel-agency/flight/payment" className="dropdown-item">
Payment
                  </PhoenixLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a href="#!" className="nav-link fs-8 fw-bold dropdown-toggle "  role="button" data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"} aria-haspopup="true" aria-expanded="false">
Trip
              </a>
              <ul className="dropdown-menu navbar-dropdown-caret">
                <li>
                  <PhoenixLink href="/apps/travel-agency/trip/homepage" className="dropdown-item">
Homepage
                  </PhoenixLink>
                </li>
                <li>
                  <PhoenixLink href="/apps/travel-agency/trip/trip-details" className="dropdown-item">
Trip Details
                  </PhoenixLink>
                </li>
                <li>
                  <PhoenixLink href="/apps/travel-agency/trip/checkout" className="dropdown-item">
Checkout
                  </PhoenixLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a href="#!" className="nav-link fs-8 fw-bold  "  role="button" data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"} aria-haspopup="true" aria-expanded="false">
Event
              </a>
            </li>
            <li className="nav-item dropdown">
              <a href="#!" className="nav-link fs-8 fw-bold  "  role="button" data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"} aria-haspopup="true" aria-expanded="false">
Package
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <div className="navbar-responsive-navitems navbar-expand border-y bg-body-emphasis border-translucent py-2">
      <div className="container-medium d-flex flex-between-center" data-navbar>
        <ul className="navbar-nav justify-content-end align-items-center">
          <li className="nav-item" data-nav-item>
            <PhoenixLink href="/apps/travel-agency/hotel/customer/homepage" className="nav-link px-3 ps-0 ">
Homepage
            </PhoenixLink>
          </li>
          <li className="nav-item" data-nav-item>
            <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-details" className="nav-link px-3  ">
Hotel Details
            </PhoenixLink>
          </li>
          <li className="nav-item" data-nav-item>
            <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-compare" className="nav-link px-3  text-primary">
Hotel Compare
            </PhoenixLink>
          </li>
          <li className="nav-item" data-nav-item>
            <PhoenixLink href="/apps/travel-agency/hotel/customer/checkout" className="nav-link px-3  ">
Check out
            </PhoenixLink>
          </li>
          <li className="nav-item" data-nav-item>
            <PhoenixLink href="/apps/travel-agency/hotel/customer/payment" className="nav-link px-3  ">
Payment
            </PhoenixLink>
          </li>
          <li className="nav-item" data-nav-item>
            <PhoenixLink href="/apps/travel-agency/hotel/customer/gallery" className="nav-link px-3  ">
Gallery
            </PhoenixLink>
          </li>
          <li className="nav-item dropdown" data-nav-item data-more-item>
            <a href="javascript: void(0)" className="nav-link dropdown-toggle dropdown-caret-none fw-bold pe-0 ps-3"  id="navbarDropdown" role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-boundary={"window"} data-bs-reference={"parent"}>
 More              <span className="fas fa-angle-down ms-2">              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-end category-list" aria-labelledby="navbarDropdown" data-category-list>            </div>
          </li>
        </ul>
      </div>
    </div>



    <section className="pt-6 pb-9">
      <div className="container-medium">
        <nav className="mb-3" aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="#">
Page 1
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">
Page 2
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
Default
            </li>
          </ol>
        </nav>
        <h2 className="mb-4">
Hotel Compare
        </h2>
        <div className="container-medium-md px-0">
          <div>
            <div className="row gx-0 gy-3 gy-md-0 align-items-center mx-auto p-3 bg-body-emphasis rounded-5 rounded-md-pill position-relative border">
              <div className="col-12 col-md">
                <div className="form-icon-container border-bottom border-bottom-md-0 border-translucent pb-3 pb-md-0">
                  <input className="form-control form-icon-input border-0 py-0 shadow-none fs-8" type="text" placeholder="Pick a place" />
                  <span className="fa-solid fa-map-marker-alt form-icon text-body-tertiary top-0" data-fa-transform={"down-2"}>                  </span>
                </div>
              </div>
              <div className="col-6 col-md">
                <div className="form-icon-container flatpickr-input-container">
                  <input className="form-control datetimepicker form-icon-input border-y-0 border-start-0 border-start-md py-0 shadow-none border-translucent fs-8 rounded-0" type="text" placeholder="Pick a date" data-options={"{\"mode\":\"range\",\"dateFormat\":\"d/m/y\",\"disableMobile\":true}"} />
                  <span className="fa-solid fa-calendar form-icon top-0 text-body-tertiary" data-fa-transform={"down-2"}>                  </span>
                </div>
              </div>
              <div className="col-6 col-md">
                <button className="btn px-3 fs-8 fw-semibold text-body-tertiary" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false" data-bs-auto-close={"outside"}>
                  <span className="fa-solid fa-user me-2">                  </span>
1 adult
                </button>
                <div className="dropdown-menu dropdown-menu-start p-4" style={{"maxWidth":"320px"} as CSSProperties}>
                  <div className="row align-items-center g-0 pb-3 border-bottom border-translucent">
                    <div className="col-5">
                      <h5 className="mb-0 text-body">
Adults
                      </h5>
                    </div>
                    <div className="col-7">
                      <div className="input-group gap-2" data-quantity>
                        <button className="btn btn-phoenix-primary px-2 rounded" data-type={"minus"}>
                          <span className="fa-solid fa-minus px-1">                          </span>
                        </button>
                        <input className="form-control border-translucent input-spin-none text-center rounded" id="adults" type="number" defaultValue="2" />
                        <button className="btn btn-phoenix-primary px-2 rounded" data-type={"plus"}>
                          <span className="fa-solid fa-plus px-1">                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center g-0 py-3 border-bottom border-translucent">
                    <div className="col-5">
                      <h5 className="mb-0 text-body">
Infants
                      </h5>
                    </div>
                    <div className="col-7">
                      <div className="input-group gap-2" data-quantity>
                        <button className="btn btn-phoenix-primary px-2 rounded" data-type={"minus"}>
                          <span className="fa-solid fa-minus px-1">                          </span>
                        </button>
                        <input className="form-control border-translucent input-spin-none text-center rounded" id="infants" type="number" defaultValue="2" />
                        <button className="btn btn-phoenix-primary px-2 rounded" data-type={"plus"}>
                          <span className="fa-solid fa-plus px-1">                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center g-0 pt-3">
                    <div className="col-5">
                      <h5 className="mb-0 text-body">
Children
                      </h5>
                    </div>
                    <div className="col-7">
                      <div className="input-group gap-2" data-quantity>
                        <button className="btn btn-phoenix-primary px-2 rounded" data-type={"minus"}>
                          <span className="fa-solid fa-minus px-1">                          </span>
                        </button>
                        <input className="form-control border-translucent input-spin-none text-center rounded" id="children" type="number" defaultValue="2" />
                        <button className="btn btn-phoenix-primary px-2 rounded" data-type={"plus"}>
                          <span className="fa-solid fa-plus px-1">                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-auto">
                <button className="btn btn-lg btn-phoenix-primary rounded-pill w-100">
                  <span className="fa-solid fa-search me-2">                  </span>
Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-100 w-100 border rounded-3 overflow-hidden my-5">
          <div className="h-100 bg-body-emphasis" id="map" style={{"minHeight":"220px"} as CSSProperties}>          </div>
        </div>
        <div className="position-relative scrollbar">
          <a href="#hotelDetailsCollapse" className="btn p-4 d-flex flex-between-center collapse-indicator text-body-highlight bg-body-highlight position-sticky start-0" data-bs-toggle={"collapse"}  role="button" aria-expanded="true" aria-controls="hotelDetailsCollapse">
            <h4 className="mb-0">
Hotel Details
            </h4>            <span className="fa-solid fa-chevron-down toggle-icon text-body">            </span>
          </a>
          <div className="collapse show" id="hotelDetailsCollapse">
            <table className="table table-layout-fixed table-compare mb-0">
              <thead>
                <tr>
                  <th className="p-0 border-0" style={{"width":"225px"} as CSSProperties}>                  </th>
                  <th className="p-0 border-0">                  </th>
                  <th className="p-0 border-0">                  </th>
                  <th className="p-0 border-0">                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="ps-4 pt-4 pb-3 fw-bold border-0">
Hotel picture
                  </td>
                </tr>
                <tr>
                  <td className="border-0 bg-body-highlight py-0">                  </td>
                  <td className="border-0 py-0 ps-3 pe-0" style={{"minWidth":"250px"} as CSSProperties}>
                    <div className="position-relative">
                      <div className="swiper-theme-container rounded-2 overflow-hidden">
                        <div className="swiper theme-slider" data-swiper={"{\"autoplay\":true,\"loop\":true,\"pagination\":{\"el\":\".swiper-pagination\",\"clickable\":true}}"}>
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <PhoenixImage src="/assets/img/hotels/40.png" alt="" className="w-100 h-100" />
                            </div>
                            <div className="swiper-slide">
                              <PhoenixImage src="/assets/img/hotels/41.png" alt="" className="w-100 h-100" />
                            </div>
                            <div className="swiper-slide">
                              <PhoenixImage src="/assets/img/hotels/42.png" alt="" className="w-100 h-100" />
                            </div>
                            <div className="swiper-slide">
                              <PhoenixImage src="/assets/img/hotels/43.png" alt="" className="w-100 h-100" />
                            </div>
                            <div className="swiper-slide">
                              <PhoenixImage src="/assets/img/hotels/44.png" alt="" className="w-100 h-100" />
                            </div>
                          </div>
                          <div className="swiper-pagination">                          </div>
                        </div>
                      </div>
                      <span className="badge badge-phoenix fs-10 badge-phoenix-warning position-absolute top-0 start-0 ms-3 mt-3">
                        <span className="fa-solid fa-star me-1">                        </span>
3.0
                      </span>
                      <button className="btn btn-wish position-absolute top-0 end-0 mt-3 me-3">
                        <span className="far fa-heart">                        </span>
                      </button>
                    </div>
                    <div className="position-relative">
                      <input className="form-control form-control-lg mt-2 pe-5" type="text" placeholder="Enter hotel name" defaultValue="Bubble Hotel Bali Ubud" />
                      <span className="fa-solid fa-search fs-9 text-body-quaternary position-absolute top-0 end-0 mt-3 me-3" data-fa-transform={"down-2"}>                      </span>
                    </div>
                  </td>
                  <td className="border-0 py-0 ps-3 pe-0" style={{"minWidth":"250px"} as CSSProperties}>
                    <div className="position-relative">
                      <div className="swiper-theme-container rounded-2 overflow-hidden">
                        <div className="swiper theme-slider" data-swiper={"{\"autoplay\":true,\"loop\":true,\"pagination\":{\"el\":\".swiper-pagination\",\"clickable\":true}}"}>
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <PhoenixImage src="/assets/img/hotels/45.png" alt="" className="w-100 h-100" />
                            </div>
                            <div className="swiper-slide">
                              <PhoenixImage src="/assets/img/hotels/46.png" alt="" className="w-100 h-100" />
                            </div>
                            <div className="swiper-slide">
                              <PhoenixImage src="/assets/img/hotels/47.png" alt="" className="w-100 h-100" />
                            </div>
                            <div className="swiper-slide">
                              <PhoenixImage src="/assets/img/hotels/48.png" alt="" className="w-100 h-100" />
                            </div>
                            <div className="swiper-slide">
                              <PhoenixImage src="/assets/img/hotels/49.png" alt="" className="w-100 h-100" />
                            </div>
                          </div>
                          <div className="swiper-pagination">                          </div>
                        </div>
                      </div>
                      <span className="badge badge-phoenix fs-10 badge-phoenix-warning position-absolute top-0 start-0 ms-3 mt-3">
                        <span className="fa-solid fa-star me-1">                        </span>
4.0
                      </span>
                      <button className="btn btn-wish position-absolute top-0 end-0 mt-3 me-3">
                        <span className="far fa-heart">                        </span>
                      </button>
                    </div>
                    <div className="position-relative">
                      <input className="form-control form-control-lg mt-2 pe-5" type="text" placeholder="Enter hotel name" defaultValue="ONAYA Bali Resort" />
                      <span className="fa-solid fa-search fs-9 text-body-quaternary position-absolute top-0 end-0 mt-3 me-3" data-fa-transform={"down-2"}>                      </span>
                    </div>
                  </td>
                  <td className="border-0 py-0 ps-3" style={{"minWidth":"250px"} as CSSProperties}>
                    <div className="position-relative">
                      <div className="swiper-theme-container rounded-2 overflow-hidden">
                        <div className="swiper theme-slider" data-swiper={"{\"autoplay\":true,\"loop\":true,\"pagination\":{\"el\":\".swiper-pagination\",\"clickable\":true}}"}>
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <PhoenixImage src="/assets/img/hotels/50.png" alt="" className="w-100 h-100" />
                            </div>
                            <div className="swiper-slide">
                              <PhoenixImage src="/assets/img/hotels/51.png" alt="" className="w-100 h-100" />
                            </div>
                            <div className="swiper-slide">
                              <PhoenixImage src="/assets/img/hotels/52.png" alt="" className="w-100 h-100" />
                            </div>
                            <div className="swiper-slide">
                              <PhoenixImage src="/assets/img/hotels/53.png" alt="" className="w-100 h-100" />
                            </div>
                            <div className="swiper-slide">
                              <PhoenixImage src="/assets/img/hotels/54.png" alt="" className="w-100 h-100" />
                            </div>
                          </div>
                          <div className="swiper-pagination">                          </div>
                        </div>
                      </div>
                      <span className="badge badge-phoenix fs-10 badge-phoenix-warning position-absolute top-0 start-0 ms-3 mt-3">
                        <span className="fa-solid fa-star me-1">                        </span>
5.0
                      </span>
                      <button className="btn btn-wish position-absolute top-0 end-0 mt-3 me-3">
                        <span className="far fa-heart">                        </span>
                      </button>
                    </div>
                    <div className="position-relative">
                      <input className="form-control form-control-lg mt-2 pe-5" type="text" placeholder="Enter hotel name" defaultValue="Gynandha Ubud Cottage" />
                      <span className="fa-solid fa-search fs-9 text-body-quaternary position-absolute top-0 end-0 mt-3 me-3" data-fa-transform={"down-2"}>                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="pt-4 pb-3 ps-4 fw-bold" colSpan={4}>
Hotel Review
                  </td>
                </tr>
                <tr>
                  <td className="px-4 align-middle bg-body-highlight border-end-lg border-translucent">
                    <h6 className="text-body fw-bolder text-uppercase mb-0">
Staff
                    </h6>
                  </td>
                  <td className="px-3 border-end border-translucent">
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge text-bg-primary fs-8">
4.0
                      </span>
                      <div className="progress w-100 bg-body-highlight" role="progressbar" aria-label="review" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} style={{"height":"8px"} as CSSProperties}>
                        <div className="progress-bar rounded" style={{"width":"80%"} as CSSProperties}>                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 border-end border-translucent">
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge text-bg-primary fs-8">
4.0
                      </span>
                      <div className="progress w-100 bg-body-highlight" role="progressbar" aria-label="review" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} style={{"height":"8px"} as CSSProperties}>
                        <div className="progress-bar rounded" style={{"width":"80%"} as CSSProperties}>                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 border-end-lg border-translucent">
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge text-bg-primary fs-8">
4.0
                      </span>
                      <div className="progress w-100 bg-body-highlight" role="progressbar" aria-label="review" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} style={{"height":"8px"} as CSSProperties}>
                        <div className="progress-bar rounded" style={{"width":"80%"} as CSSProperties}>                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 align-middle bg-body-highlight border-end-lg border-translucent">
                    <h6 className="text-body fw-bolder text-uppercase mb-0">
Comfort
                    </h6>
                  </td>
                  <td className="px-3 border-end border-translucent">
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge text-bg-primary fs-8">
4.5
                      </span>
                      <div className="progress w-100 bg-body-highlight" role="progressbar" aria-label="review" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} style={{"height":"8px"} as CSSProperties}>
                        <div className="progress-bar rounded" style={{"width":"90%"} as CSSProperties}>                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 border-end border-translucent">
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge text-bg-primary fs-8">
4.5
                      </span>
                      <div className="progress w-100 bg-body-highlight" role="progressbar" aria-label="review" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} style={{"height":"8px"} as CSSProperties}>
                        <div className="progress-bar rounded" style={{"width":"90%"} as CSSProperties}>                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 border-end-lg border-translucent">
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge text-bg-primary fs-8">
4.5
                      </span>
                      <div className="progress w-100 bg-body-highlight" role="progressbar" aria-label="review" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} style={{"height":"8px"} as CSSProperties}>
                        <div className="progress-bar rounded" style={{"width":"90%"} as CSSProperties}>                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 align-middle bg-body-highlight border-end-lg border-translucent">
                    <h6 className="text-body fw-bolder text-uppercase mb-0">
Facilities
                    </h6>
                  </td>
                  <td className="px-3 border-end border-translucent">
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge text-bg-primary fs-8">
4.8
                      </span>
                      <div className="progress w-100 bg-body-highlight" role="progressbar" aria-label="review" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} style={{"height":"8px"} as CSSProperties}>
                        <div className="progress-bar rounded" style={{"width":"96%"} as CSSProperties}>                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 border-end border-translucent">
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge text-bg-primary fs-8">
4.8
                      </span>
                      <div className="progress w-100 bg-body-highlight" role="progressbar" aria-label="review" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} style={{"height":"8px"} as CSSProperties}>
                        <div className="progress-bar rounded" style={{"width":"96%"} as CSSProperties}>                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 border-end-lg border-translucent">
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge text-bg-primary fs-8">
4.8
                      </span>
                      <div className="progress w-100 bg-body-highlight" role="progressbar" aria-label="review" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} style={{"height":"8px"} as CSSProperties}>
                        <div className="progress-bar rounded" style={{"width":"96%"} as CSSProperties}>                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 align-middle bg-body-highlight border-end-lg border-translucent">
                    <h6 className="text-body fw-bolder text-uppercase mb-0">
Location
                    </h6>
                  </td>
                  <td className="px-3 border-end border-translucent">
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge text-bg-primary fs-8">
4.0
                      </span>
                      <div className="progress w-100 bg-body-highlight" role="progressbar" aria-label="review" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} style={{"height":"8px"} as CSSProperties}>
                        <div className="progress-bar rounded" style={{"width":"80%"} as CSSProperties}>                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 border-end border-translucent">
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge text-bg-primary fs-8">
4.0
                      </span>
                      <div className="progress w-100 bg-body-highlight" role="progressbar" aria-label="review" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} style={{"height":"8px"} as CSSProperties}>
                        <div className="progress-bar rounded" style={{"width":"80%"} as CSSProperties}>                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 border-end-lg border-translucent">
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge text-bg-primary fs-8">
4.0
                      </span>
                      <div className="progress w-100 bg-body-highlight" role="progressbar" aria-label="review" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} style={{"height":"8px"} as CSSProperties}>
                        <div className="progress-bar rounded" style={{"width":"80%"} as CSSProperties}>                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 align-middle bg-body-highlight border-end-lg border-translucent">
                    <h6 className="text-body fw-bolder text-uppercase mb-0">
Cleanliness
                    </h6>
                  </td>
                  <td className="px-3 border-end border-translucent">
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge text-bg-primary fs-8">
3.5
                      </span>
                      <div className="progress w-100 bg-body-highlight" role="progressbar" aria-label="review" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} style={{"height":"8px"} as CSSProperties}>
                        <div className="progress-bar rounded" style={{"width":"70%"} as CSSProperties}>                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 border-end border-translucent">
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge text-bg-primary fs-8">
3.5
                      </span>
                      <div className="progress w-100 bg-body-highlight" role="progressbar" aria-label="review" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} style={{"height":"8px"} as CSSProperties}>
                        <div className="progress-bar rounded" style={{"width":"70%"} as CSSProperties}>                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 border-end-lg border-translucent">
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge text-bg-primary fs-8">
3.5
                      </span>
                      <div className="progress w-100 bg-body-highlight" role="progressbar" aria-label="review" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} style={{"height":"8px"} as CSSProperties}>
                        <div className="progress-bar rounded" style={{"width":"70%"} as CSSProperties}>                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 align-middle bg-body-highlight border-end-lg border-translucent">
                    <h6 className="text-body fw-bolder text-uppercase mb-0">
Free WiFi
                    </h6>
                  </td>
                  <td className="px-3 border-end border-translucent">
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge text-bg-primary fs-8">
5.0
                      </span>
                      <div className="progress w-100 bg-body-highlight" role="progressbar" aria-label="review" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} style={{"height":"8px"} as CSSProperties}>
                        <div className="progress-bar rounded" style={{"width":"100%"} as CSSProperties}>                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 border-end border-translucent">
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge text-bg-primary fs-8">
5.0
                      </span>
                      <div className="progress w-100 bg-body-highlight" role="progressbar" aria-label="review" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} style={{"height":"8px"} as CSSProperties}>
                        <div className="progress-bar rounded" style={{"width":"100%"} as CSSProperties}>                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 border-end-lg border-translucent">
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge text-bg-primary fs-8">
5.0
                      </span>
                      <div className="progress w-100 bg-body-highlight" role="progressbar" aria-label="review" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} style={{"height":"8px"} as CSSProperties}>
                        <div className="progress-bar rounded" style={{"width":"100%"} as CSSProperties}>                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="pt-4 pb-3 ps-4 fw-bold" colSpan={4}>
Facilities at a Glance
                  </td>
                </tr>
                <tr>
                  <td className="px-4 align-middle border-end-lg border-translucent bg-body-highlight">
                    <h6 className="text-body fw-bolder text-uppercase mb-0">
Hotel facilities
                    </h6>
                  </td>
                  <td className="border-translucent px-3 border-end">
                    <ul className="columns-xl-2 mb-0 list-unstyled">
                      <li className="text-body-highlight fs-9">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Free - Breakfast
                      </li>
                      <li className="text-body-highlight fs-9">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Beach View
                      </li>
                      <li className="text-body-highlight fs-9">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Airport Shuttle
                      </li>
                      <li className="text-body-highlight fs-9">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Gym
                      </li>
                      <li className="text-body-highlight fs-9">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Swimming Pool
                      </li>
                      <li className="text-body-highlight fs-9">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Free Parking
                      </li>
                    </ul>
                  </td>
                  <td className="border-translucent px-3 border-end">
                    <ul className="columns-xl-2 mb-0 list-unstyled">
                      <li className="text-body-highlight fs-9">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Free - Breakfast
                      </li>
                      <li className="text-body-highlight fs-9">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Fitness Center
                      </li>
                      <li className="text-body-highlight fs-9">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Airport Shuttle
                      </li>
                      <li className="text-body-highlight fs-9">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Bar/Lounge
                      </li>
                      <li className="text-body-highlight fs-9">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Accommodation
                      </li>
                      <li className="text-body-highlight fs-9">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Room Service
                      </li>
                    </ul>
                  </td>
                  <td className="border-translucent px-3 border-end-lg">
                    <ul className="columns-xl-2 mb-0 list-unstyled">
                      <li className="text-body-highlight fs-9">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Reception Desk
                      </li>
                      <li className="text-body-highlight fs-9">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Meeting Rooms
                      </li>
                      <li className="text-body-highlight fs-9">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Restaurant
                      </li>
                      <li className="text-body-highlight fs-9">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
ATM/Banking Services
                      </li>
                      <li className="text-body-highlight fs-9">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Business Center
                      </li>
                      <li className="text-body-highlight fs-9">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Free Parking
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <a href="#roomDetailsCollapse" className="btn p-4 mt-8 d-flex flex-between-center collapse-indicator text-body-highlight bg-body-highlight position-sticky start-0" data-bs-toggle={"collapse"}  role="button" aria-expanded="true" aria-controls="roomDetailsCollapse">
            <h4 className="mb-0">
Room Details
            </h4>            <span className="fa-solid fa-chevron-down toggle-icon text-body">            </span>
          </a>
          <div className="collapse show" id="roomDetailsCollapse">
            <table className="table table-layout-fixed table-compare mb-0">
              <thead>
                <tr>
                  <th className="p-0 border-0" style={{"width":"225px"} as CSSProperties}>                  </th>
                  <th className="p-0 border-0">                  </th>
                  <th className="p-0 border-0">                  </th>
                  <th className="p-0 border-0">                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="ps-4 pt-4 pb-3 fw-bold" colSpan={4}>
Accommodation
                  </td>
                </tr>
                <tr>
                  <td className="px-4 align-middle border-end-lg border-translucent bg-body-highlight">
                    <h6 className="text-body fw-bolder text-uppercase mb-0">
room type
                    </h6>
                  </td>
                  <td className="border-translucent px-3 border-end">
                    <div className="d-flex flex-wrap flex-between-center gap-2">
                      <h4 className="mb-0">
Deluxe Room
                      </h4>
                      <button className="btn btn-phoenix-primary" data-bs-toggle={"modal"} data-bs-target={"#changeRoomModal"}>
Change Room
                      </button>
                    </div>
                  </td>
                  <td className="border-translucent px-3 border-end">
                    <div className="d-flex flex-wrap flex-between-center gap-2">
                      <h4 className="mb-0">
Deluxe Room
                      </h4>
                      <button className="btn btn-phoenix-primary" data-bs-toggle={"modal"} data-bs-target={"#changeRoomModal"}>
Change Room
                      </button>
                    </div>
                  </td>
                  <td className="border-translucent px-3 border-end-lg">
                    <div className="d-flex flex-wrap flex-between-center gap-2">
                      <h4 className="mb-0">
Deluxe Room
                      </h4>
                      <button className="btn btn-phoenix-primary" data-bs-toggle={"modal"} data-bs-target={"#changeRoomModal"}>
Change Room
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 align-middle border-end-lg border-translucent bg-body-highlight">
                    <h6 className="text-body fw-bolder text-uppercase mb-0">
Room price
                    </h6>
                  </td>
                  <td className="border-translucent px-3 border-end">
                    <h3 className="d-flex align-items-center gap-2">
                      <span className="fs-9 text-body-quaternary fw-normal text-decoration-line-through">
$279.98
                      </span>
 $259.65 
                      <span className="fs-9 fw-bold">
/ night
                      </span>
                    </h3>
                    <p className="mb-0">
Inclusive of all taxes and fees
                    </p>
                  </td>
                  <td className="border-translucent px-3 border-end">
                    <h3 className="d-flex align-items-center gap-2">
                      <span className="fs-9 text-body-quaternary fw-normal text-decoration-line-through">
$299.76
                      </span>
 $260.99 
                      <span className="fs-9 fw-bold">
/ night
                      </span>
                    </h3>
                    <p className="mb-0">
Inclusive of all taxes and fees
                    </p>
                  </td>
                  <td className="border-translucent px-3 border-end-lg">
                    <h3 className="d-flex align-items-center gap-2">
                      <span className="fs-9 text-body-quaternary fw-normal text-decoration-line-through">
$309.89
                      </span>
 $299.98 
                      <span className="fs-9 fw-bold">
/ night
                      </span>
                    </h3>
                    <p className="mb-0">
Inclusive of all taxes and fees
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 align-middle border-end-lg border-translucent bg-body-highlight">
                    <h6 className="text-body fw-bolder text-uppercase mb-0">
Room picture
                    </h6>
                  </td>
                  <td className="border-translucent px-3 border-end" style={{"minWidth":"250px"} as CSSProperties}>
                    <div className="swiper-theme-container">
                      <div className="swiper theme-slider" data-swiper={"{\"loop\":true,\"spaceBetween\":8,\"slidesPerView\":3,\"centeredSlide\":true,\"grabCursor\":true}"}>
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <PhoenixImage src="/assets/img/hotels/55.png" alt="" className="img-fluid rounded-2" />
                          </div>
                          <div className="swiper-slide">
                            <PhoenixImage src="/assets/img/hotels/56.png" alt="" className="img-fluid rounded-2" />
                          </div>
                          <div className="swiper-slide">
                            <PhoenixImage src="/assets/img/hotels/57.png" alt="" className="img-fluid rounded-2" />
                          </div>
                          <div className="swiper-slide">
                            <PhoenixImage src="/assets/img/hotels/58.png" alt="" className="img-fluid rounded-2" />
                          </div>
                          <div className="swiper-slide">
                            <PhoenixImage src="/assets/img/hotels/59.png" alt="" className="img-fluid rounded-2" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-nav swiper-nav-inside">
                        <div className="swiper-button-next bg-transparent border-0">
                          <span className="fas fa-chevron-right text-white" data-fa-transform={"shrink-3"}>                          </span>
                        </div>
                        <div className="swiper-button-prev bg-transparent border-0">
                          <span className="fas fa-chevron-left text-white" data-fa-transform={"shrink-3"}>                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="border-translucent px-3 border-end" style={{"minWidth":"250px"} as CSSProperties}>
                    <div className="swiper-theme-container">
                      <div className="swiper theme-slider" data-swiper={"{\"loop\":true,\"spaceBetween\":8,\"slidesPerView\":3,\"centeredSlide\":true,\"grabCursor\":true}"}>
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <PhoenixImage src="/assets/img/hotels/60.png" alt="" className="img-fluid rounded-2" />
                          </div>
                          <div className="swiper-slide">
                            <PhoenixImage src="/assets/img/hotels/61.png" alt="" className="img-fluid rounded-2" />
                          </div>
                          <div className="swiper-slide">
                            <PhoenixImage src="/assets/img/hotels/62.png" alt="" className="img-fluid rounded-2" />
                          </div>
                          <div className="swiper-slide">
                            <PhoenixImage src="/assets/img/hotels/63.png" alt="" className="img-fluid rounded-2" />
                          </div>
                          <div className="swiper-slide">
                            <PhoenixImage src="/assets/img/hotels/64.png" alt="" className="img-fluid rounded-2" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-nav swiper-nav-inside">
                        <div className="swiper-button-next bg-transparent border-0">
                          <span className="fas fa-chevron-right text-white" data-fa-transform={"shrink-3"}>                          </span>
                        </div>
                        <div className="swiper-button-prev bg-transparent border-0">
                          <span className="fas fa-chevron-left text-white" data-fa-transform={"shrink-3"}>                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="border-translucent px-3 border-end-lg" style={{"minWidth":"250px"} as CSSProperties}>
                    <div className="swiper-theme-container">
                      <div className="swiper theme-slider" data-swiper={"{\"loop\":true,\"spaceBetween\":8,\"slidesPerView\":3,\"centeredSlide\":true,\"grabCursor\":true}"}>
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <PhoenixImage src="/assets/img/hotels/65.png" alt="" className="img-fluid rounded-2" />
                          </div>
                          <div className="swiper-slide">
                            <PhoenixImage src="/assets/img/hotels/66.png" alt="" className="img-fluid rounded-2" />
                          </div>
                          <div className="swiper-slide">
                            <PhoenixImage src="/assets/img/hotels/67.png" alt="" className="img-fluid rounded-2" />
                          </div>
                          <div className="swiper-slide">
                            <PhoenixImage src="/assets/img/hotels/68.png" alt="" className="img-fluid rounded-2" />
                          </div>
                          <div className="swiper-slide">
                            <PhoenixImage src="/assets/img/hotels/69.png" alt="" className="img-fluid rounded-2" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-nav swiper-nav-inside">
                        <div className="swiper-button-next bg-transparent border-0">
                          <span className="fas fa-chevron-right text-white" data-fa-transform={"shrink-3"}>                          </span>
                        </div>
                        <div className="swiper-button-prev bg-transparent border-0">
                          <span className="fas fa-chevron-left text-white" data-fa-transform={"shrink-3"}>                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 align-middle border-end-lg border-translucent bg-body-highlight">
                    <h6 className="text-body fw-bolder text-uppercase mb-0">
Room Details
                    </h6>
                  </td>
                  <td className="border-translucent px-3 border-end">
                    <h6 className="fw-semibold text-body-highlight mb-2">
                      <span className="fa-solid fa-bed me-2 text-primary">                      </span>
01 Double Bed
                    </h6>
                    <h6 className="fw-semibold text-body-highlight mb-2">
                      <span className="fa-solid fa-user me-2 text-primary">                      </span>
02 Adults
                    </h6>
                    <h6 className="fw-semibold text-body-highlight mb-2">
                      <span className="fa-solid fa-baby me-2 text-primary">                      </span>
00 Child
                    </h6>
                    <h6 className="fw-semibold text-body-highlight">
                      <span className="fa-solid fa-bath me-2 text-primary">                      </span>
01 Bathroom
                    </h6>
                  </td>
                  <td className="border-translucent px-3 border-end">
                    <h6 className="fw-semibold text-body-highlight mb-2">
                      <span className="fa-solid fa-bed me-2 text-primary">                      </span>
01 Double Bed
                    </h6>
                    <h6 className="fw-semibold text-body-highlight mb-2">
                      <span className="fa-solid fa-user me-2 text-primary">                      </span>
02 Adults
                    </h6>
                    <h6 className="fw-semibold text-body-highlight mb-2">
                      <span className="fa-solid fa-baby me-2 text-primary">                      </span>
00 Child
                    </h6>
                    <h6 className="fw-semibold text-body-highlight">
                      <span className="fa-solid fa-bath me-2 text-primary">                      </span>
01 Bathroom
                    </h6>
                  </td>
                  <td className="border-translucent px-3 border-end-lg">
                    <h6 className="fw-semibold text-body-highlight mb-2">
                      <span className="fa-solid fa-bed me-2 text-primary">                      </span>
01 Double Bed
                    </h6>
                    <h6 className="fw-semibold text-body-highlight mb-2">
                      <span className="fa-solid fa-user me-2 text-primary">                      </span>
02 Adults
                    </h6>
                    <h6 className="fw-semibold text-body-highlight mb-2">
                      <span className="fa-solid fa-baby me-2 text-primary">                      </span>
00 Child
                    </h6>
                    <h6 className="fw-semibold text-body-highlight">
                      <span className="fa-solid fa-bath me-2 text-primary">                      </span>
01 Bathroom
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td className="pt-4 pb-3 ps-4 fw-bold" colSpan={4}>
Popular Amenities
                  </td>
                </tr>
                <tr>
                  <td className="px-4 align-middle border-end-lg border-translucent bg-body-highlight">
                    <h6 className="text-body fw-bolder text-uppercase mb-0">
Airport shuttle
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-check text-success me-2">                      </span>
Available
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-check text-success me-2">                      </span>
Available
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-xmark text-secondary-light me-2">                      </span>
Not Available
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 align-middle border-end-lg border-translucent bg-body-highlight">
                    <h6 className="text-body fw-bolder text-uppercase mb-0">
Free wifi
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-check text-success me-2">                      </span>
Available
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-check text-success me-2">                      </span>
Available
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-check text-success me-2">                      </span>
Available
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 align-middle border-end-lg border-translucent bg-body-highlight">
                    <h6 className="text-body fw-bolder text-uppercase mb-0">
Restaurant
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-xmark text-secondary-light me-2">                      </span>
Not Available
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-xmark text-secondary-light me-2">                      </span>
Not Available
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-check text-success me-2">                      </span>
Available
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 align-middle border-end-lg border-translucent bg-body-highlight">
                    <h6 className="text-body fw-bolder text-uppercase mb-0">
Smoking zone
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-xmark text-secondary-light me-2">                      </span>
Not Available
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-xmark text-secondary-light me-2">                      </span>
Not Available
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-check text-success me-2">                      </span>
Available
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 align-middle border-end-lg border-translucent bg-body-highlight">
                    <h6 className="text-body fw-bolder text-uppercase mb-0">
Room service
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-check text-success me-2">                      </span>
Available
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-xmark text-secondary-light me-2">                      </span>
Not Available
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-check text-success me-2">                      </span>
Available
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 align-middle border-end-lg border-translucent bg-body-highlight">
                    <h6 className="text-body fw-bolder text-uppercase mb-0">
Free parking
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-check text-success me-2">                      </span>
Available
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-xmark text-secondary-light me-2">                      </span>
Not Available
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-check text-success me-2">                      </span>
Available
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 align-middle border-end-lg border-translucent bg-body-highlight">
                    <h6 className="text-body fw-bolder text-uppercase mb-0">
Pet-Friendly
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-check text-success me-2">                      </span>
Available
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-check text-success me-2">                      </span>
Available
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-xmark text-secondary-light me-2">                      </span>
Not Available
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 align-middle border-end-lg border-translucent bg-body-highlight">
                    <h6 className="text-body fw-bolder text-uppercase mb-0">
Beach-front
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-check text-success me-2">                      </span>
Available
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-xmark text-secondary-light me-2">                      </span>
Not Available
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-xmark text-secondary-light me-2">                      </span>
Not Available
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 align-middle border-end-lg border-translucent bg-body-highlight">
                    <h6 className="text-body fw-bolder text-uppercase mb-0">
Facilities for disabled guests
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-xmark text-secondary-light me-2">                      </span>
Not Available
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-check text-success me-2">                      </span>
Available
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-check text-success me-2">                      </span>
Available
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 align-middle border-end-lg border-translucent bg-body-highlight">
                    <h6 className="text-body fw-bolder text-uppercase mb-0">
Bar
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-xmark text-secondary-light me-2">                      </span>
Not Available
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-xmark text-secondary-light me-2">                      </span>
Not Available
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-check text-success me-2">                      </span>
Available
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 align-middle border-end-lg border-translucent bg-body-highlight">
                    <h6 className="text-body fw-bolder text-uppercase mb-0">
Free Breakfast
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-check text-success me-2">                      </span>
Available
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-check text-success me-2">                      </span>
Available
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-check text-success me-2">                      </span>
Available
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 align-middle border-end-lg border-translucent bg-body-highlight">
                    <h6 className="text-body fw-bolder text-uppercase mb-0">
24-hour front desk
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-xmark text-secondary-light me-2">                      </span>
Not Available
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-xmark text-secondary-light me-2">                      </span>
Not Available
                    </h6>
                  </td>
                  <td className="px-3 align-middle border-end-lg border-translucent">
                    <h6 className="text-body">
                      <span className="fa-solid fa-circle-xmark text-secondary-light me-2">                      </span>
Not Available
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td className="border-0 pb-0">                  </td>
                  <td className="border-0 px-3 pb-0">
                    <a href="#!" className="btn btn-outline-primary w-100">
View room details
                    </a>
                  </td>
                  <td className="border-0 px-3 pb-0">
                    <a href="#!" className="btn btn-outline-primary w-100">
View room details
                    </a>
                  </td>
                  <td className="border-0 px-3 pb-0">
                    <a href="#!" className="btn btn-outline-primary w-100">
View room details
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>



    <div className="modal fade" id="changeRoomModal" data-bs-keyboard={"false"} tabIndex={-1} aria-labelledby="changeRoomModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <div className="modal-header justify-content-between p-4">
            <h3 className="mb-0 text-body-highlight" id="changeRoomModalLabel">
Select Room
            </h3>
            <button className="btn btn-phoenix-danger px-3" data-bs-dismiss={"modal"} aria-label="Close">
              <span className="fa-solid fa-times" data-fa-transform={"down-2"}>              </span>
            </button>
          </div>
          <div className="modal-body p-4">
            <div className="row g-3 mb-4">
              <div className="col-lg-8 col-xxl-7">
                <div className="d-flex align-items-center mb-2">
                  <h4 className="mb-0 fw-semibold pe-3">
                    <span className="fa-solid fa-circle fs-9 text-body-quaternary me-2" data-fa-transform={"up-1"}>                    </span>
Standard Double Queen
                  </h4>
                  <span className="badge badge-phoenix badge-phoenix-info fs-10">
10% OFF
                  </span>
                </div>
                <p className="mb-0">
A standard double queen room has two queen-sized beds and may accept up to two people for a convenient and comfortable stay.
                </p>
              </div>
              <div className="col-lg-4 col-xxl-5">
                <h3 className="mb-2 d-flex align-items-center justify-content-lg-end gap-2">
                  <span className="fs-9 text-body-quaternary fw-normal text-decoration-line-through">
$143.65
                  </span>
$123.65
                  <span className="fs-9 text-body">
/ night
                  </span>
                </h3>
                <h5 className="text-body text-lg-end fw-normal">
Inclusive of all taxes and fees
                </h5>
              </div>
            </div>
            <div className="row mb-4 justify-content-between">
              <div className="col-lg-7">
                <div className="swiper-theme-container">
                  <div className="swiper theme-slider" data-swiper={"{\"loop\":true,\"spaceBetween\":8,\"slidesPerView\":\"auto\",\"centeredSlide\":true,\"grabCursor\":true}"}>
                    <div className="swiper-wrapper">
                      <div className="swiper-slide w-auto">
                        <PhoenixImage src="/assets/img/hotels/33.png" alt="" className="rounded-2" width={158} />
                      </div>
                      <div className="swiper-slide w-auto">
                        <PhoenixImage src="/assets/img/hotels/34.png" alt="" className="rounded-2" width={158} />
                      </div>
                      <div className="swiper-slide w-auto">
                        <PhoenixImage src="/assets/img/hotels/35.png" alt="" className="rounded-2" width={158} />
                      </div>
                      <div className="swiper-slide w-auto">
                        <PhoenixImage src="/assets/img/hotels/36.png" alt="" className="rounded-2" width={158} />
                      </div>
                      <div className="swiper-slide w-auto">
                        <PhoenixImage src="/assets/img/hotels/37.png" alt="" className="rounded-2" width={158} />
                      </div>
                      <div className="swiper-slide w-auto">
                        <PhoenixImage src="/assets/img/hotels/38.png" alt="" className="rounded-2" width={158} />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-nav swiper-nav-inside">
                    <div className="swiper-button-next">
                      <span className="fas fa-chevron-right nav-icon">                      </span>
                    </div>
                    <div className="swiper-button-prev">
                      <span className="fas fa-chevron-left nav-icon">                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-xl-4">
                <div className="p-4 border border-translucent rounded-2 mt-4 mt-lg-0">
                  <div className="row g-3">
                    <div className="col-6">
                      <h6 className="fw-semibold text-body-secondary">
                        <span className="fa-solid fa-bed text-info me-2">                        </span>
01 Double Bed
                      </h6>
                    </div>
                    <div className="col-6">
                      <h6 className="fw-semibold text-body-secondary">
                        <span className="fa-solid fa-user text-info me-2">                        </span>
02 Adult
                      </h6>
                    </div>
                    <div className="col-6">
                      <h6 className="fw-semibold text-body-secondary">
                        <span className="fa-solid fa-baby text-info me-2">                        </span>
00 Child
                      </h6>
                    </div>
                    <div className="col-6">
                      <h6 className="fw-semibold text-body-secondary">
                        <span className="fa-solid fa-bath text-info me-2">                        </span>
01 Bathrooms
                      </h6>
                    </div>
                  </div>
                </div>
                <button className="btn btn-outline-primary w-100 mt-3">
Add to compare
                </button>
              </div>
            </div>
            <a href="#amenitiesCollapse-0" className="btn p-3 d-flex flex-between-center collapse-indicator text-body-highlight bg-body-highlight" data-bs-toggle={"collapse"}  role="button" aria-expanded="false" aria-controls="amenitiesCollapse-0">
              <h5 className="mb-0">
Room Amenities
              </h5>              <span className="fa-solid fa-chevron-down toggle-icon text-body">              </span>
            </a>
            <div className="collapse" id="amenitiesCollapse-0">
              <div className="px-md-4 pt-4">
                <h5 className="mb-3">
Most popular
                </h5>
                <div className="row g-0 mb-5">
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border">
                      <span className="fs-9 text-warning fa-solid fa-car">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Airport shuttle
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-top-sm border-end border-start border-start-sm-0">
                      <span className="fs-9 text-warning fa-solid fa-wifi">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Free wifi
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-end border-start border-start-lg-0 border-top-lg border-bottom">
                      <span className="fs-9 text-warning fa-solid fa-utensils">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Restaurant
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-end border-start border-start-sm-0 border-start-lg border-bottom">
                      <span className="fs-9 text-warning fa-solid fa-smoking">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Smoking zone
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-end border-start border-start-lg-0">
                      <span className="fs-9 text-warning fa-solid fa-user">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Room service
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-end border-start border-start-sm-0">
                      <span className="fs-9 text-warning fa-solid fa-dog">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Pet-Friendly
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-x border-bottom">
                      <span className="fs-9 text-warning fa-solid fa-square-parking">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Free parking
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-end border-start border-start-sm-0">
                      <span className="fs-9 text-warning fa-solid fa-umbrella-beach">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Beach-front
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-end border-start border-start-lg-0">
                      <span className="fs-9 text-warning fa-solid fa-wheelchair">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Facilities for disabled guests
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-x border-bottom border-start border-start-sm-0 border-start-lg">
                      <span className="fs-9 text-warning fa-solid fa-wine-glass">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Bar
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-end border-start border-start-lg-0">
                      <span className="fs-9 text-warning fa-solid fa-utensils">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Free Breakfast
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-end border-start border-start-sm-0">
                      <span className="fs-9 text-warning fa-solid fa-bell-concierge">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
24-hour front desk
                      </h5>
                    </div>
                  </div>
                </div>
                <h5 className="mb-3">
Others Amenities
                </h5>
                <div className="row g-2">
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Wifi
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Luggage rack
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Hairdryer
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Toiletries
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Seating area
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Bed sheets
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Room service
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Blankets
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Air conditioning
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Television
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Heating
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Sofa or couch
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Coffee table
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Ironing service
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Dry cleaning
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Coffee maker
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Electric kettle
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Garden view
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Baby cots
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Desk or workstation
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-7" />
            <div className="row g-3 mb-4">
              <div className="col-lg-8 col-xxl-7">
                <div className="d-flex align-items-center mb-2">
                  <h4 className="mb-0 fw-semibold pe-3">
                    <span className="fa-solid fa-circle fs-9 text-body-quaternary me-2" data-fa-transform={"up-1"}>                    </span>
Deluxe Room
                  </h4>
                  <span className="badge badge-phoenix badge-phoenix-info fs-10">
10% OFF
                  </span>
                </div>
                <p className="mb-0">
A Deluxe Room is a spacious and luxurious hotel accommodation offering upgraded amenities and enhanced comfort for a more indulgent stay.
                </p>
              </div>
              <div className="col-lg-4 col-xxl-5">
                <h3 className="mb-2 d-flex align-items-center justify-content-lg-end gap-2">
                  <span className="fs-9 text-body-quaternary fw-normal text-decoration-line-through">
$199.65
                  </span>
$165.98
                  <span className="fs-9 text-body">
/ night
                  </span>
                </h3>
                <h5 className="text-body text-lg-end fw-normal">
Inclusive of all taxes and fees
                </h5>
              </div>
            </div>
            <div className="row mb-4 justify-content-between">
              <div className="col-lg-7">
                <div className="swiper-theme-container">
                  <div className="swiper theme-slider" data-swiper={"{\"loop\":true,\"spaceBetween\":8,\"slidesPerView\":\"auto\",\"centeredSlide\":true,\"grabCursor\":true}"}>
                    <div className="swiper-wrapper">
                      <div className="swiper-slide w-auto">
                        <PhoenixImage src="/assets/img/hotels/33.png" alt="" className="rounded-2" width={158} />
                      </div>
                      <div className="swiper-slide w-auto">
                        <PhoenixImage src="/assets/img/hotels/34.png" alt="" className="rounded-2" width={158} />
                      </div>
                      <div className="swiper-slide w-auto">
                        <PhoenixImage src="/assets/img/hotels/35.png" alt="" className="rounded-2" width={158} />
                      </div>
                      <div className="swiper-slide w-auto">
                        <PhoenixImage src="/assets/img/hotels/36.png" alt="" className="rounded-2" width={158} />
                      </div>
                      <div className="swiper-slide w-auto">
                        <PhoenixImage src="/assets/img/hotels/37.png" alt="" className="rounded-2" width={158} />
                      </div>
                      <div className="swiper-slide w-auto">
                        <PhoenixImage src="/assets/img/hotels/38.png" alt="" className="rounded-2" width={158} />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-nav swiper-nav-inside">
                    <div className="swiper-button-next">
                      <span className="fas fa-chevron-right nav-icon">                      </span>
                    </div>
                    <div className="swiper-button-prev">
                      <span className="fas fa-chevron-left nav-icon">                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-xl-4">
                <div className="p-4 border border-translucent rounded-2 mt-4 mt-lg-0">
                  <div className="row g-3">
                    <div className="col-6">
                      <h6 className="fw-semibold text-body-secondary">
                        <span className="fa-solid fa-bed text-info me-2">                        </span>
01 Double Bed
                      </h6>
                    </div>
                    <div className="col-6">
                      <h6 className="fw-semibold text-body-secondary">
                        <span className="fa-solid fa-user text-info me-2">                        </span>
02 Adult
                      </h6>
                    </div>
                    <div className="col-6">
                      <h6 className="fw-semibold text-body-secondary">
                        <span className="fa-solid fa-baby text-info me-2">                        </span>
00 Child
                      </h6>
                    </div>
                    <div className="col-6">
                      <h6 className="fw-semibold text-body-secondary">
                        <span className="fa-solid fa-bath text-info me-2">                        </span>
01 Bathrooms
                      </h6>
                    </div>
                  </div>
                </div>
                <button className="btn btn-outline-primary w-100 mt-3">
Add to compare
                </button>
              </div>
            </div>
            <a href="#amenitiesCollapse-1" className="btn p-3 d-flex flex-between-center collapse-indicator text-body-highlight bg-body-highlight" data-bs-toggle={"collapse"}  role="button" aria-expanded="false" aria-controls="amenitiesCollapse-1">
              <h5 className="mb-0">
Room Amenities
              </h5>              <span className="fa-solid fa-chevron-down toggle-icon text-body">              </span>
            </a>
            <div className="collapse" id="amenitiesCollapse-1">
              <div className="px-md-4 pt-4">
                <h5 className="mb-3">
Most popular
                </h5>
                <div className="row g-0 mb-5">
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border">
                      <span className="fs-9 text-warning fa-solid fa-car">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Airport shuttle
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-top-sm border-end border-start border-start-sm-0">
                      <span className="fs-9 text-warning fa-solid fa-wifi">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Free wifi
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-end border-start border-start-lg-0 border-top-lg border-bottom">
                      <span className="fs-9 text-warning fa-solid fa-utensils">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Restaurant
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-end border-start border-start-sm-0 border-start-lg border-bottom">
                      <span className="fs-9 text-warning fa-solid fa-smoking">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Smoking zone
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-end border-start border-start-lg-0">
                      <span className="fs-9 text-warning fa-solid fa-user">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Room service
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-end border-start border-start-sm-0">
                      <span className="fs-9 text-warning fa-solid fa-dog">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Pet-Friendly
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-x border-bottom">
                      <span className="fs-9 text-warning fa-solid fa-square-parking">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Free parking
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-end border-start border-start-sm-0">
                      <span className="fs-9 text-warning fa-solid fa-umbrella-beach">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Beach-front
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-end border-start border-start-lg-0">
                      <span className="fs-9 text-warning fa-solid fa-wheelchair">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Facilities for disabled guests
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-x border-bottom border-start border-start-sm-0 border-start-lg">
                      <span className="fs-9 text-warning fa-solid fa-wine-glass">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Bar
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-end border-start border-start-lg-0">
                      <span className="fs-9 text-warning fa-solid fa-utensils">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Free Breakfast
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-end border-start border-start-sm-0">
                      <span className="fs-9 text-warning fa-solid fa-bell-concierge">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
24-hour front desk
                      </h5>
                    </div>
                  </div>
                </div>
                <h5 className="mb-3">
Others Amenities
                </h5>
                <div className="row g-2">
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Wifi
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Luggage rack
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Hairdryer
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Toiletries
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Seating area
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Bed sheets
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Room service
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Blankets
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Air conditioning
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Television
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Heating
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Sofa or couch
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Coffee table
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Ironing service
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Dry cleaning
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Coffee maker
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Electric kettle
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Garden view
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Baby cots
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Desk or workstation
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-7" />
            <div className="row g-3 mb-4">
              <div className="col-lg-8 col-xxl-7">
                <div className="d-flex align-items-center mb-2">
                  <h4 className="mb-0 fw-semibold pe-3">
                    <span className="fa-solid fa-circle fs-9 text-body-quaternary me-2" data-fa-transform={"up-1"}>                    </span>
Presidential Suite
                  </h4>
                  <span className="badge badge-phoenix badge-phoenix-info fs-10">
10% OFF
                  </span>
                </div>
                <p className="mb-0">
The Presidential Suite: The pinnacle of luxury accommodations, reserved for VIPs and boasting the utmost opulence and prestige.
                </p>
              </div>
              <div className="col-lg-4 col-xxl-5">
                <h3 className="mb-2 d-flex align-items-center justify-content-lg-end gap-2">
                  <span className="fs-9 text-body-quaternary fw-normal text-decoration-line-through">
$156.23
                  </span>
$130.65
                  <span className="fs-9 text-body">
/ night
                  </span>
                </h3>
                <h5 className="text-body text-lg-end fw-normal">
Inclusive of all taxes and fees
                </h5>
              </div>
            </div>
            <div className="row mb-4 justify-content-between">
              <div className="col-lg-7">
                <div className="swiper-theme-container">
                  <div className="swiper theme-slider" data-swiper={"{\"loop\":true,\"spaceBetween\":8,\"slidesPerView\":\"auto\",\"centeredSlide\":true,\"grabCursor\":true}"}>
                    <div className="swiper-wrapper">
                      <div className="swiper-slide w-auto">
                        <PhoenixImage src="/assets/img/hotels/33.png" alt="" className="rounded-2" width={158} />
                      </div>
                      <div className="swiper-slide w-auto">
                        <PhoenixImage src="/assets/img/hotels/34.png" alt="" className="rounded-2" width={158} />
                      </div>
                      <div className="swiper-slide w-auto">
                        <PhoenixImage src="/assets/img/hotels/35.png" alt="" className="rounded-2" width={158} />
                      </div>
                      <div className="swiper-slide w-auto">
                        <PhoenixImage src="/assets/img/hotels/36.png" alt="" className="rounded-2" width={158} />
                      </div>
                      <div className="swiper-slide w-auto">
                        <PhoenixImage src="/assets/img/hotels/37.png" alt="" className="rounded-2" width={158} />
                      </div>
                      <div className="swiper-slide w-auto">
                        <PhoenixImage src="/assets/img/hotels/38.png" alt="" className="rounded-2" width={158} />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-nav swiper-nav-inside">
                    <div className="swiper-button-next">
                      <span className="fas fa-chevron-right nav-icon">                      </span>
                    </div>
                    <div className="swiper-button-prev">
                      <span className="fas fa-chevron-left nav-icon">                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-xl-4">
                <div className="p-4 border border-translucent rounded-2 mt-4 mt-lg-0">
                  <div className="row g-3">
                    <div className="col-6">
                      <h6 className="fw-semibold text-body-secondary">
                        <span className="fa-solid fa-bed text-info me-2">                        </span>
01 Double Bed
                      </h6>
                    </div>
                    <div className="col-6">
                      <h6 className="fw-semibold text-body-secondary">
                        <span className="fa-solid fa-user text-info me-2">                        </span>
02 Adult
                      </h6>
                    </div>
                    <div className="col-6">
                      <h6 className="fw-semibold text-body-secondary">
                        <span className="fa-solid fa-baby text-info me-2">                        </span>
00 Child
                      </h6>
                    </div>
                    <div className="col-6">
                      <h6 className="fw-semibold text-body-secondary">
                        <span className="fa-solid fa-bath text-info me-2">                        </span>
01 Bathrooms
                      </h6>
                    </div>
                  </div>
                </div>
                <button className="btn btn-outline-primary w-100 mt-3">
Add to compare
                </button>
              </div>
            </div>
            <a href="#amenitiesCollapse-2" className="btn p-3 d-flex flex-between-center collapse-indicator text-body-highlight bg-body-highlight" data-bs-toggle={"collapse"}  role="button" aria-expanded="false" aria-controls="amenitiesCollapse-2">
              <h5 className="mb-0">
Room Amenities
              </h5>              <span className="fa-solid fa-chevron-down toggle-icon text-body">              </span>
            </a>
            <div className="collapse" id="amenitiesCollapse-2">
              <div className="px-md-4 pt-4">
                <h5 className="mb-3">
Most popular
                </h5>
                <div className="row g-0 mb-5">
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border">
                      <span className="fs-9 text-warning fa-solid fa-car">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Airport shuttle
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-top-sm border-end border-start border-start-sm-0">
                      <span className="fs-9 text-warning fa-solid fa-wifi">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Free wifi
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-end border-start border-start-lg-0 border-top-lg border-bottom">
                      <span className="fs-9 text-warning fa-solid fa-utensils">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Restaurant
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-end border-start border-start-sm-0 border-start-lg border-bottom">
                      <span className="fs-9 text-warning fa-solid fa-smoking">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Smoking zone
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-end border-start border-start-lg-0">
                      <span className="fs-9 text-warning fa-solid fa-user">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Room service
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-end border-start border-start-sm-0">
                      <span className="fs-9 text-warning fa-solid fa-dog">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Pet-Friendly
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-x border-bottom">
                      <span className="fs-9 text-warning fa-solid fa-square-parking">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Free parking
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-end border-start border-start-sm-0">
                      <span className="fs-9 text-warning fa-solid fa-umbrella-beach">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Beach-front
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-end border-start border-start-lg-0">
                      <span className="fs-9 text-warning fa-solid fa-wheelchair">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Facilities for disabled guests
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-x border-bottom border-start border-start-sm-0 border-start-lg">
                      <span className="fs-9 text-warning fa-solid fa-wine-glass">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Bar
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-end border-start border-start-lg-0">
                      <span className="fs-9 text-warning fa-solid fa-utensils">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Free Breakfast
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-end border-start border-start-sm-0">
                      <span className="fs-9 text-warning fa-solid fa-bell-concierge">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
24-hour front desk
                      </h5>
                    </div>
                  </div>
                </div>
                <h5 className="mb-3">
Others Amenities
                </h5>
                <div className="row g-2">
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Wifi
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Luggage rack
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Hairdryer
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Toiletries
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Seating area
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Bed sheets
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Room service
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Blankets
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Air conditioning
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Television
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Heating
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Sofa or couch
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Coffee table
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Ironing service
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Dry cleaning
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Coffee maker
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Electric kettle
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Garden view
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Baby cots
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Desk or workstation
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-7" />
            <div className="row g-3 mb-4">
              <div className="col-lg-8 col-xxl-7">
                <div className="d-flex align-items-center mb-2">
                  <h4 className="mb-0 fw-semibold pe-3">
                    <span className="fa-solid fa-circle fs-9 text-body-quaternary me-2" data-fa-transform={"up-1"}>                    </span>
Ocean View Room
                  </h4>
                  <span className="badge badge-phoenix badge-phoenix-info fs-10">
10% OFF
                  </span>
                </div>
                <p className="mb-0">
An Ocean View Room offers breathtaking vistas of the sea, providing guests with a captivating and serene coastal experience.
                </p>
              </div>
              <div className="col-lg-4 col-xxl-5">
                <h3 className="mb-2 d-flex align-items-center justify-content-lg-end gap-2">
                  <span className="fs-9 text-body-quaternary fw-normal text-decoration-line-through">
$271.65
                  </span>
$240.96
                  <span className="fs-9 text-body">
/ night
                  </span>
                </h3>
                <h5 className="text-body text-lg-end fw-normal">
Inclusive of all taxes and fees
                </h5>
              </div>
            </div>
            <div className="row mb-4 justify-content-between">
              <div className="col-lg-7">
                <div className="swiper-theme-container">
                  <div className="swiper theme-slider" data-swiper={"{\"loop\":true,\"spaceBetween\":8,\"slidesPerView\":\"auto\",\"centeredSlide\":true,\"grabCursor\":true}"}>
                    <div className="swiper-wrapper">
                      <div className="swiper-slide w-auto">
                        <PhoenixImage src="/assets/img/hotels/33.png" alt="" className="rounded-2" width={158} />
                      </div>
                      <div className="swiper-slide w-auto">
                        <PhoenixImage src="/assets/img/hotels/34.png" alt="" className="rounded-2" width={158} />
                      </div>
                      <div className="swiper-slide w-auto">
                        <PhoenixImage src="/assets/img/hotels/35.png" alt="" className="rounded-2" width={158} />
                      </div>
                      <div className="swiper-slide w-auto">
                        <PhoenixImage src="/assets/img/hotels/36.png" alt="" className="rounded-2" width={158} />
                      </div>
                      <div className="swiper-slide w-auto">
                        <PhoenixImage src="/assets/img/hotels/37.png" alt="" className="rounded-2" width={158} />
                      </div>
                      <div className="swiper-slide w-auto">
                        <PhoenixImage src="/assets/img/hotels/38.png" alt="" className="rounded-2" width={158} />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-nav swiper-nav-inside">
                    <div className="swiper-button-next">
                      <span className="fas fa-chevron-right nav-icon">                      </span>
                    </div>
                    <div className="swiper-button-prev">
                      <span className="fas fa-chevron-left nav-icon">                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-xl-4">
                <div className="p-4 border border-translucent rounded-2 mt-4 mt-lg-0">
                  <div className="row g-3">
                    <div className="col-6">
                      <h6 className="fw-semibold text-body-secondary">
                        <span className="fa-solid fa-bed text-info me-2">                        </span>
01 Double Bed
                      </h6>
                    </div>
                    <div className="col-6">
                      <h6 className="fw-semibold text-body-secondary">
                        <span className="fa-solid fa-user text-info me-2">                        </span>
02 Adult
                      </h6>
                    </div>
                    <div className="col-6">
                      <h6 className="fw-semibold text-body-secondary">
                        <span className="fa-solid fa-baby text-info me-2">                        </span>
00 Child
                      </h6>
                    </div>
                    <div className="col-6">
                      <h6 className="fw-semibold text-body-secondary">
                        <span className="fa-solid fa-bath text-info me-2">                        </span>
01 Bathrooms
                      </h6>
                    </div>
                  </div>
                </div>
                <button className="btn btn-outline-primary w-100 mt-3">
Add to compare
                </button>
              </div>
            </div>
            <a href="#amenitiesCollapse-3" className="btn p-3 d-flex flex-between-center collapse-indicator text-body-highlight bg-body-highlight" data-bs-toggle={"collapse"}  role="button" aria-expanded="false" aria-controls="amenitiesCollapse-3">
              <h5 className="mb-0">
Room Amenities
              </h5>              <span className="fa-solid fa-chevron-down toggle-icon text-body">              </span>
            </a>
            <div className="collapse" id="amenitiesCollapse-3">
              <div className="px-md-4 pt-4">
                <h5 className="mb-3">
Most popular
                </h5>
                <div className="row g-0 mb-5">
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border">
                      <span className="fs-9 text-warning fa-solid fa-car">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Airport shuttle
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-top-sm border-end border-start border-start-sm-0">
                      <span className="fs-9 text-warning fa-solid fa-wifi">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Free wifi
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-end border-start border-start-lg-0 border-top-lg border-bottom">
                      <span className="fs-9 text-warning fa-solid fa-utensils">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Restaurant
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-end border-start border-start-sm-0 border-start-lg border-bottom">
                      <span className="fs-9 text-warning fa-solid fa-smoking">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Smoking zone
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-end border-start border-start-lg-0">
                      <span className="fs-9 text-warning fa-solid fa-user">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Room service
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-end border-start border-start-sm-0">
                      <span className="fs-9 text-warning fa-solid fa-dog">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Pet-Friendly
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-x border-bottom">
                      <span className="fs-9 text-warning fa-solid fa-square-parking">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Free parking
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-end border-start border-start-sm-0">
                      <span className="fs-9 text-warning fa-solid fa-umbrella-beach">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Beach-front
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-end border-start border-start-lg-0">
                      <span className="fs-9 text-warning fa-solid fa-wheelchair">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Facilities for disabled guests
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-x border-bottom border-start border-start-sm-0 border-start-lg">
                      <span className="fs-9 text-warning fa-solid fa-wine-glass">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Bar
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-end border-start border-start-lg-0">
                      <span className="fs-9 text-warning fa-solid fa-utensils">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
Free Breakfast
                      </h5>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center gap-2 px-4 py-3 h-100 border-translucent border-bottom border-end border-start border-start-sm-0">
                      <span className="fs-9 text-warning fa-solid fa-bell-concierge">                      </span>
                      <h5 className="text-body-tertiary mb-0 fw-normal">
24-hour front desk
                      </h5>
                    </div>
                  </div>
                </div>
                <h5 className="mb-3">
Others Amenities
                </h5>
                <div className="row g-2">
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Wifi
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Luggage rack
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Hairdryer
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Toiletries
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Seating area
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Bed sheets
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Room service
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Blankets
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Air conditioning
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Television
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Heating
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Sofa or couch
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Coffee table
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Ironing service
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Dry cleaning
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Coffee maker
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Electric kettle
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Garden view
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Baby cots
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div className="p-3 border border-translucent rounded-2">
                      <h5 className="text-body-secondary fw-semibold mb-0">
                        <span className="fa-solid fa-check text-success me-2">                        </span>
Desk or workstation
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="py-0 mb-9">
      <div className="container-medium-md px-0 px-md-3">
        <div className="p-5 p-sm-7 py-xl-12 px-xl-15 rounded-md-2 overflow-hidden position-relative">
          <div className="bg-holder bg-holder overlay bg-opacity-85" style={{"backgroundImage":"url(../../../../assets/img/bg/43.png)","backgroundPosition":"center","backgroundSize":"cover"} as CSSProperties}>          </div>
          <div className="row g-5 position-relative justify-content-between">
            <div className="col-md-6 col-lg-3">
              <h5 className="text-white mb-3">
Discover
              </h5>
              <div className="row g-3">
                <div className="col">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-1">
                      <a href="#!" className="text-secondary-lighter">
Home
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#!" className="text-secondary-lighter">
Terms
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#!" className="text-secondary-lighter">
{"Talent & culture"}
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#!" className="text-secondary-lighter">
Destination
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#!" className="text-secondary-lighter">
Sitemap
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-1">
                      <a href="#!" className="text-secondary-lighter">
Refund policy
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#!" className="text-secondary-lighter">
EMI Policy
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#!" className="text-secondary-lighter">
Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h5 className="text-white mb-3">
Contact
              </h5>
              <a href="mailto:info@phoenixtravels.com" className="d-block text-secondary-lighter mb-1 text-nowrap">
                <span className="fa-solid fa-envelope me-2 me-lg-1 me-xl-2">                </span>info@phoenixtravels.com
              </a>
              <a href="tel:+13134048290" className="d-block text-secondary-lighter mb-1">
                <span className="fa-solid fa-phone me-2 me-lg-1 me-xl-2">                </span>+13134048290
              </a>
            </div>
            <div className="col-lg-5">
              <h2 className="text-white mb-2 fw-semibold">
Enjoy your trip to the fullest
              </h2>
              <p className="mb-5 text-secondary-lighter">
Sign up and get notified
                <br />
about best deals immediately 
              </p>
              <div className="d-flex gap-2">
                <div className="form-icon-container flex-1">
                  <input className="form-control form-icon-input" type="text" placeholder="Your email address" />
                  <span className="fa-solid fa-envelope form-icon text-body fs-9" data-fa-transform={"up-2"}>                  </span>
                </div>
                <button className="btn btn-primary rounded">
Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="container-medium">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <PhoenixLink href="/" className="navbar-brand">
          <div className="d-flex align-items-center">
            <PhoenixImage src="/assets/img/icons/logo.png" alt="phoenix" width={27} />
            <h5 className="logo-text ms-2">
phoenix
            </h5>
          </div>
        </PhoenixLink>
        <div className="dropdown">
          <button className="btn btn-sm p-0 d-md-none fs-8" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
            <span className="fas fa-ellipsis-h">            </span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end" style={{"zIndex":"9999"} as CSSProperties}>
            <li>
              <a href="#!" className="dropdown-item">
Become a Host
              </a>
            </li>
            <li>
              <a href="#!" className="dropdown-item">
Blog
              </a>
            </li>
            <li>
              <a href="#!" className="dropdown-item">
Career
              </a>
            </li>
            <li>
              <a href="#!" className="dropdown-item">
Support
              </a>
            </li>
            <li>
              <a href="#!" className="dropdown-item">
+01 123 581321
              </a>
            </li>
          </ul>
        </div>
        <ul className="d-none d-md-flex gap-5 list-unstyled mb-0">
          <li>
            <a href="#!" className="lh-1 text-body-tertiary fw-semibold fs-9">
Become a Host
            </a>
          </li>
          <li>
            <a href="#!" className="lh-1 text-body-tertiary fw-semibold fs-9">
Blog
            </a>
          </li>
          <li>
            <a href="#!" className="lh-1 text-body-tertiary fw-semibold fs-9">
Career
            </a>
          </li>
          <li>
            <a href="mailto:example@gmail.com" className="lh-1 text-body-tertiary fw-semibold fs-9">
              <span className="fa-regular fa-envelope me-2" data-fa-transform={"down-1"}>              </span>Support
            </a>
          </li>
          <li>
            <a href="tel:+01123581321" className="lh-1 text-body-tertiary fw-semibold fs-9">
              <span className="fa-brands fa-whatsapp me-2">              </span>+01 123 581321
            </a>
          </li>
        </ul>
      </div>
      <footer className="footer position-relative px-0">
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
