'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Homepage() {
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
              <a href="#!" className="nav-link fs-8 fw-bold dropdown-toggle "  role="button" data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"} aria-haspopup="true" aria-expanded="false">
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
              <a href="#!" className="nav-link fs-8 fw-bold dropdown-toggle text-primary"  role="button" data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"} aria-haspopup="true" aria-expanded="false">
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
            <PhoenixLink href="/apps/travel-agency/flight/homepage" className="nav-link px-3 ps-0 text-primary">
Homepage
            </PhoenixLink>
          </li>
          <li className="nav-item" data-nav-item>
            <PhoenixLink href="/apps/travel-agency/flight/booking" className="nav-link px-3  ">
Booking
            </PhoenixLink>
          </li>
          <li className="nav-item" data-nav-item>
            <PhoenixLink href="/apps/travel-agency/flight/payment" className="nav-link px-3  ">
Payment
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



    <section className="py-0">
      <div className="container-small">
        <nav className="navbar navbar-landing navbar-home navbar-expand py-4 px-0">
          <ul className="navbar-nav mx-auto mt-3 mt-lg-0 gap-2">
            <li className="nav-item">
              <PhoenixLink href="/apps/travel-agency/hotel/customer/homepage" className="nav-link fw-bold rounded-3" aria-current="page">
                <span className="me-2 fa-solid fa-hotel">                </span>Hotel
              </PhoenixLink>
            </li>
            <li className="nav-item">
              <PhoenixLink href="/apps/travel-agency/flight/homepage" className="nav-link fw-bold rounded-3 active" aria-current="page">
                <span className="me-2 fa-solid fa-plane">                </span>Flight
              </PhoenixLink>
            </li>
            <li className="nav-item">
              <PhoenixLink href="/apps/travel-agency/trip/homepage" className="nav-link fw-bold rounded-3" aria-current="page">
                <span className="me-2 fa-solid fa-suitcase-rolling">                </span>Trip
              </PhoenixLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>





    <section className="p-0">
      <div className="container-fluid px-0">
        <div className="position-relative" style={{"height":"19rem"} as CSSProperties}>
          <div className="bg-holder" style={{"backgroundImage":"url(../../../assets/img/bg/44.png)","backgroundPosition":"center","backgroundSize":"cover"} as CSSProperties}>          </div>
        </div>
        <div className="container-small mb-6" style={{"marginTop":"-12rem"} as CSSProperties}>
          <form>
            <div className="card position-relative mb-6">
              <div className="card-body">
                <div className="mb-4">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" id="oneWay" type="radio" name="flightType" />
                    <label className="form-check-label fs-8 text-body" htmlFor="oneWay">
One way
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" id="return" type="radio" name="flightType" defaultChecked />
                    <label className="form-check-label fs-8 text-body" htmlFor="return">
Return
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" id="multi" type="radio" name="flightType" />
                    <label className="form-check-label fs-8 text-body" htmlFor="multi">
Multiple cities
                    </label>
                  </div>
                </div>
                <div className="row g-3 mb-4">
                  <div className="col-lg">
                    <div className="row flex-center g-2">
                      <div className="col-sm">
                        <div className="form-floating flex-1">
                          <input className="form-control" id="fromLocation" type="text" placeholder="Dhaka (DAC)" />
                          <label htmlFor="fromLocation">
From
                          </label>
                        </div>
                      </div>
                      <div className="col-auto">
                        <button className="btn btn-phoenix-secondary circle-btn" type="button">
                          <span className="fas fa-arrows-rotate">                          </span>
                        </button>
                      </div>
                      <div className="col-sm">
                        <div className="form-floating flex-1">
                          <input className="form-control" id="toLocation" type="text" placeholder="Sylhet (ZYL)" />
                          <label htmlFor="toLocation">
To
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg">
                    <div className="row g-2">
                      <div className="col-sm-6">
                        <div className="form-floating flex-1">
                          <input className="form-control datetimepicker" id="journeyDate" type="text" placeholder="dd/mm/yyyy" data-options={"{\"disableMobile\":true,\"defaultDate\":\"today\",\"dateFormat\":\"j M, Y\"}"} />
                          <label className="form-label" htmlFor="journeyDate">
Journey Date
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating flex-1">
                          <input className="form-control datetimepicker" id="returnDate" type="text" placeholder="dd/mm/yyyy" data-options={"{\"disableMobile\":true,\"defaultDate\":\"today\",\"dateFormat\":\"j M, Y\"}"} />
                          <label className="form-label" htmlFor="returnDate">
Return Date
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-auto">
                    <div className="form-floating" style={{"minWidth":"13rem"} as CSSProperties} data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                      <input className="form-control cursor-pointer" id="travelerCount" type="text" readOnly placeholder="1 Traveler" defaultValue="1 Traveler" />
                      <label htmlFor="travelerCount">
Traveler
                      </label>
                    </div>
                    <div className="dropdown-menu dropdown-menu-start p-4" style={{"maxWidth":"20rem"} as CSSProperties}>
                      <div className="row align-items-center g-0 pb-3 border-bottom border-translucent">
                        <div className="col-5">
                          <h5 className="mb-0 text-body">
Adults
                          </h5>
                        </div>
                        <div className="col-7">
                          <div className="input-group gap-2" data-quantity>
                            <button className="btn btn-phoenix-primary px-2 rounded" data-type={"minus"} type="button">
                              <span className="fa-solid fa-minus px-1">                              </span>
                            </button>
                            <input className="form-control border-translucent input-spin-none text-center rounded" id="adults" type="number" defaultValue="1" />
                            <button className="btn btn-phoenix-primary px-2 rounded" data-type={"plus"} type="button">
                              <span className="fa-solid fa-plus px-1">                              </span>
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
                            <button className="btn btn-phoenix-primary px-2 rounded" data-type={"minus"} type="button">
                              <span className="fa-solid fa-minus px-1">                              </span>
                            </button>
                            <input className="form-control border-translucent input-spin-none text-center rounded" id="infants" type="number" defaultValue="0" />
                            <button className="btn btn-phoenix-primary px-2 rounded" data-type={"plus"} type="button">
                              <span className="fa-solid fa-plus px-1">                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center g-0 py-3">
                        <div className="col-5">
                          <h5 className="mb-0 text-body">
Children
                          </h5>
                        </div>
                        <div className="col-7">
                          <div className="input-group gap-2" data-quantity>
                            <button className="btn btn-phoenix-primary px-2 rounded" data-type={"minus"} type="button">
                              <span className="fa-solid fa-minus px-1">                              </span>
                            </button>
                            <input className="form-control border-translucent input-spin-none text-center rounded" id="child" type="number" defaultValue="0" />
                            <button className="btn btn-phoenix-primary px-2 rounded" data-type={"plus"} type="button">
                              <span className="fa-solid fa-plus px-1">                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-primary w-100" type="button">
Complete
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-body-highlight p-3 p-sm-4 rounded-2 mb-4">
                  <div className="row g-3">
                    <div className="col-xl-2 col-lg col-md-4">
                      <h6 className="mb-2">
Fare Type
                      </h6>
                      <div className="form-check mb-0">
                        <input className="form-check-input mt-0" id="flightFareType" type="checkbox" defaultChecked />
                        <label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="flightFareType">
Refundable ticket
                        </label>
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg col-md-4">
                      <h6 className="mb-3">
Price Range
                      </h6>
                      <div className="noUi-primary-lighter noUi-handle-primary noUi-slider-slim noUi-handle-circle px-1 mb-3" data-nouislider={"{\"start\":[100,186],\"range\":{\"min\":100,\"max\":200},\"connect\":true}"}>                      </div>
                      <div className="d-flex flex-between-center">
                        <div>
                          <small className="d-none d-lg-block text-body-tertiary">
Min
                          </small>
                          <h6 className="mb-0 text-body-highlight fw-semibold">
$100
                          </h6>
                        </div>
                        <div className="text-end">
                          <small className="d-none d-lg-block text-body-tertiary">
Max
                          </small>
                          <h6 className="mb-0 text-body-highlight fw-semibold">
$200
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg col-md-4">
                      <h6 className="mb-2">
Class
                      </h6>
                      <select className="form-select" id="flightClass">
                        <option>
Economy
                        </option>
                        <option>
Business
                        </option>
                        <option>
First class
                        </option>
                      </select>
                    </div>
                    <div className="col-xl-2 col-lg col-md-6 ms-auto">
                      <h6 className="mb-2">
Onward depart time
                      </h6>
                      <select className="form-select" id="departTime">
                        <option>
12:00 - 18:00
                        </option>
                        <option>
18:00 - 24:00
                        </option>
                        <option>
06:00 - 12:00
                        </option>
                      </select>
                    </div>
                    <div className="col-xl-2 col-lg col-md-6">
                      <h6 className="mb-2">
Return depart time
                      </h6>
                      <select className="form-select" id="returnTime">
                        <option>
12:00 - 18:00
                        </option>
                        <option>
18:00 - 24:00
                        </option>
                        <option>
06:00 - 12:00
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap gap-3 justify-content-between">
                  <a href="#!" className="fw-semibold text-nowrap"  data-list-view={"*"}>
Close details                     <span className="fas fa-angle-up ms-1" data-fa-transform={"down-1"}>                    </span>
                  </a>
                  <button className="btn btn-lg btn-primary flex-1" type="button" style={{"maxWidth":"15rem"} as CSSProperties}>
Search
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="d-flex flex-between-center mb-3">
            <ul className="nav nav-pills" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link" data-wizard-step data-bs-toggle={"pill"} type="button" role="tab" aria-selected="true">
Cheapest
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" data-wizard-step data-bs-toggle={"pill"} type="button" role="tab" aria-selected="false">
Fastest
                </button>
              </li>
            </ul>
            <button className="btn btn-phoenix-secondary text-nowrap px-4" type="button" data-bs-toggle={"modal"} data-bs-target={"#flightFilterModal"}>
              <span className="fa-solid fa-filter me-md-2">              </span>
              <span className="d-none d-md-inline-block">
Filters
              </span>
            </button>
          </div>
          <div className="py-7 border-top">
            <div className="row g-0 gap-6 align-items-center">
              <div className="col-lg">
                <div className="d-flex flex-column gap-md-3 gap-6">
                  <div className="row gy-md-0 gy-4 justify-content-sm-between justify-content-lg-start">
                    <div className="col-sm-auto col-md-5">
                      <div className="d-flex flex-center justify-content-sm-start gap-4">
                        <PhoenixImage src="/assets/img/brand/qatar-airline.png" alt="" className="flight-list-item-logo img-fluid rounded-3" />
                        <h5 className="d-none d-md-block text-nowrap text-body-highlight">
Qatar Airways
                        </h5>
                      </div>
                    </div>
                    <div className="col-sm-auto">
                      <div className="d-flex gap-4 justify-content-center">
                        <div>
                          <p className="mb-2 fs-9 text-body-tertiary">
25 Jan
                          </p>
                          <h4 className="mb-2 text-body">
DAC
                          </h4>
                          <h2 className="mb-0">
7:45
                          </h2>
                        </div>
                        <div className="text-center">
                          <p className="mb-2 fs-9 text-body-tertiary">
25m
                          </p>
                          <p className="mb-2 fs-9 text-body-tertiary">
Non-stop
                          </p>
                          <PhoenixImage src="/assets/img/icons/long-arrow.svg" alt="" className="position-relative rtl__flip" />
                        </div>
                        <div className="text-end">
                          <p className="mb-2 fs-9 text-body-tertiary">
25 Jan
                          </p>
                          <h4 className="mb-2 text-body">
CGP
                          </h4>
                          <h2 className="mb-0">
8:10
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row gy-md-0 gy-4 justify-content-sm-between justify-content-lg-start">
                    <div className="col-sm-auto col-md-5">
                      <div className="d-flex flex-center justify-content-sm-start gap-4">
                        <PhoenixImage src="/assets/img/brand/qatar-airline.png" alt="" className="flight-list-item-logo img-fluid rounded-3" />
                        <h5 className="d-none d-md-block text-nowrap text-body-highlight">
Qatar Airways
                        </h5>
                      </div>
                    </div>
                    <div className="col-sm-auto">
                      <div className="d-flex gap-4 justify-content-center">
                        <div>
                          <p className="mb-2 fs-9 text-body-tertiary">
27 Jan
                          </p>
                          <h4 className="mb-2 text-body">
CGP
                          </h4>
                          <h2 className="mb-0">
8:15
                          </h2>
                        </div>
                        <div className="text-center">
                          <p className="mb-2 fs-9 text-body-tertiary">
25m
                          </p>
                          <p className="mb-2 fs-9 text-body-tertiary">
Non-stop
                          </p>
                          <PhoenixImage src="/assets/img/icons/long-arrow.svg" alt="" className="position-relative rtl__flip" />
                        </div>
                        <div className="text-end">
                          <p className="mb-2 fs-9 text-body-tertiary">
27 Jan
                          </p>
                          <h4 className="mb-2 text-body">
DAC
                          </h4>
                          <h2 className="mb-0">
8:45
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-auto">
                <div className="d-flex gap-3 flex-column flex-sm-row flex-lg-column flex-xl-row flex-end-center">
                  <h3 className="mb-0 fs-5 fs-sm-6 d-flex gap-2 flex-column flex-sm-row align-items-center">
                    <span className="fs-9 text-body-quaternary fw-normal text-decoration-line-through">
$150.00
                    </span>
$124.00
                  </h3>
                  <PhoenixLink href="/apps/travel-agency/flight/booking" className="btn btn-primary px-9">
Select
                  </PhoenixLink>
                </div>
              </div>
            </div>
          </div>
          <div className="py-7 border-top">
            <div className="row g-0 gap-6 align-items-center">
              <div className="col-lg">
                <div className="d-flex flex-column gap-md-3 gap-6">
                  <div className="row gy-md-0 gy-4 justify-content-sm-between justify-content-lg-start">
                    <div className="col-sm-auto col-md-5">
                      <div className="d-flex flex-center justify-content-sm-start gap-4">
                        <PhoenixImage src="/assets/img/brand/emirates-airline.png" alt="" className="flight-list-item-logo img-fluid rounded-3" />
                        <h5 className="d-none d-md-block text-nowrap text-body-highlight">
Emirates
                        </h5>
                      </div>
                    </div>
                    <div className="col-sm-auto">
                      <div className="d-flex gap-4 justify-content-center">
                        <div>
                          <p className="mb-2 fs-9 text-body-tertiary">
25 Jan
                          </p>
                          <h4 className="mb-2 text-body">
DAC
                          </h4>
                          <h2 className="mb-0">
7:55
                          </h2>
                        </div>
                        <div className="text-center">
                          <p className="mb-2 fs-9 text-body-tertiary">
25m
                          </p>
                          <p className="mb-2 fs-9 text-body-tertiary">
Non-stop
                          </p>
                          <PhoenixImage src="/assets/img/icons/long-arrow.svg" alt="" className="position-relative rtl__flip" />
                        </div>
                        <div className="text-end">
                          <p className="mb-2 fs-9 text-body-tertiary">
25 Jan
                          </p>
                          <h4 className="mb-2 text-body">
ZYL
                          </h4>
                          <h2 className="mb-0">
8:20
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-auto">
                <div className="d-flex gap-3 flex-column flex-sm-row flex-lg-column flex-xl-row flex-end-center">
                  <h3 className="mb-0 fs-5 fs-sm-6 d-flex gap-2 flex-column flex-sm-row align-items-center">
                    <span className="fs-9 text-body-quaternary fw-normal text-decoration-line-through">
$139.00
                    </span>
$120.00
                  </h3>
                  <PhoenixLink href="/apps/travel-agency/flight/booking" className="btn btn-primary px-9">
Select
                  </PhoenixLink>
                </div>
              </div>
            </div>
          </div>
          <div className="py-7 border-top">
            <div className="row g-0 gap-6 align-items-center">
              <div className="col-lg">
                <div className="d-flex flex-column gap-md-3 gap-6">
                  <div className="row gy-md-0 gy-4 justify-content-sm-between justify-content-lg-start">
                    <div className="col-sm-auto col-md-5">
                      <div className="d-flex flex-center justify-content-sm-start gap-4">
                        <PhoenixImage src="/assets/img/brand/japan-airline.png" alt="" className="flight-list-item-logo img-fluid rounded-3" />
                        <h5 className="d-none d-md-block text-nowrap text-body-highlight">
Japan Airlines
                        </h5>
                      </div>
                    </div>
                    <div className="col-sm-auto">
                      <div className="d-flex gap-4 justify-content-center">
                        <div>
                          <p className="mb-2 fs-9 text-body-tertiary">
25 Jan
                          </p>
                          <h4 className="mb-2 text-body">
DAC
                          </h4>
                          <h2 className="mb-0">
8:45
                          </h2>
                        </div>
                        <div className="text-center">
                          <p className="mb-2 fs-9 text-body-tertiary">
25m
                          </p>
                          <p className="mb-2 fs-9 text-body-tertiary">
Non-stop
                          </p>
                          <PhoenixImage src="/assets/img/icons/long-arrow.svg" alt="" className="position-relative rtl__flip" />
                        </div>
                        <div className="text-end">
                          <p className="mb-2 fs-9 text-body-tertiary">
25 Jan
                          </p>
                          <h4 className="mb-2 text-body">
ZYL
                          </h4>
                          <h2 className="mb-0">
9:10
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-auto">
                <div className="d-flex gap-3 flex-column flex-sm-row flex-lg-column flex-xl-row flex-end-center">
                  <h3 className="mb-0 fs-5 fs-sm-6 d-flex gap-2 flex-column flex-sm-row align-items-center">
                    <span className="fs-9 text-body-quaternary fw-normal text-decoration-line-through">
$144.00
                    </span>
$128.00
                  </h3>
                  <PhoenixLink href="/apps/travel-agency/flight/booking" className="btn btn-primary px-9">
Select
                  </PhoenixLink>
                </div>
              </div>
            </div>
          </div>
          <div className="py-7 border-top">
            <div className="row g-0 gap-6 align-items-center">
              <div className="col-lg">
                <div className="d-flex flex-column gap-md-3 gap-6">
                  <div className="row gy-md-0 gy-4 justify-content-sm-between justify-content-lg-start">
                    <div className="col-sm-auto col-md-5">
                      <div className="d-flex flex-center justify-content-sm-start gap-4">
                        <PhoenixImage src="/assets/img/brand/qatar-airline.png" alt="" className="flight-list-item-logo img-fluid rounded-3" />
                        <h5 className="d-none d-md-block text-nowrap text-body-highlight">
Qatar Airways
                        </h5>
                      </div>
                    </div>
                    <div className="col-sm-auto">
                      <div className="d-flex gap-4 justify-content-center">
                        <div>
                          <p className="mb-2 fs-9 text-body-tertiary">
25 Jan
                          </p>
                          <h4 className="mb-2 text-body">
DAC
                          </h4>
                          <h2 className="mb-0">
8:55
                          </h2>
                        </div>
                        <div className="text-center">
                          <p className="mb-2 fs-9 text-body-tertiary">
25m
                          </p>
                          <p className="mb-2 fs-9 text-body-tertiary">
Non-stop
                          </p>
                          <PhoenixImage src="/assets/img/icons/long-arrow.svg" alt="" className="position-relative rtl__flip" />
                        </div>
                        <div className="text-end">
                          <p className="mb-2 fs-9 text-body-tertiary">
25 Jan
                          </p>
                          <h4 className="mb-2 text-body">
ZYL
                          </h4>
                          <h2 className="mb-0">
9:15
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-auto">
                <div className="d-flex gap-3 flex-column flex-sm-row flex-lg-column flex-xl-row flex-end-center">
                  <h3 className="mb-0 fs-5 fs-sm-6 d-flex gap-2 flex-column flex-sm-row align-items-center">
                    <span className="fs-9 text-body-quaternary fw-normal text-decoration-line-through">
$150.00
                    </span>
$124.00
                  </h3>
                  <PhoenixLink href="/apps/travel-agency/flight/booking" className="btn btn-primary px-9">
Select
                  </PhoenixLink>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 position-relative text-center">
            <hr className="m-0 position-absolute top-50 translate-middle-y w-100" />
            <button className="btn btn-phoenix-secondary rounded-pill position-relative">
Show more
            </button>
          </div>
        </div>
        <footer className="mb-6">
          <div className="container-small-md px-0 px-md-3">
            <div className="position-relative overflow-hidden rounded-md-2">
              <div className="bg-holder bg-holder overlay bg-opacity-75" style={{"backgroundImage":"url(../../../assets/img/bg/45.png)","backgroundPosition":"center","backgroundSize":"cover"} as CSSProperties}>              </div>
              <div className="row g-lg-0 gy-3 position-relative justify-content-center py-9 px-3 px-sm-6 px-xl-15">
                <div className="col-11 col-sm-8 col-lg-5">
                  <div className="input-group gap-2">
                    <div className="form-icon-container flex-1">
                      <input className="form-control form-icon-input" type="email" placeholder="Your email address" />
                      <span className="fa-solid fa-envelope form-icon" data-fa-transform={"up-2"}>                      </span>
                    </div>
                    <button className="btn btn-primary rounded">
Sign up
                    </button>
                  </div>
                </div>
                <div className="col-md-7" data-bs-theme={"light"}>
                  <div className="d-flex flex-column flex-lg-row gap-lg-6 gap-2 align-items-center justify-content-lg-end justify-content-center">
                    <ul className="nav">
                      <li className="nav-item">
                        <a href="#!" className="nav-link link-light">
About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#!" className="nav-link link-light">
Policy
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#!" className="nav-link link-light">
{"Terms & Condition"}
                        </a>
                      </li>
                    </ul>
                    <div>
                      <a href="#!" className="pe-1 me-2 link-light">
                        <span className="fab fa-facebook">                        </span>
                      </a>
                      <a href="#!" className="pe-1 me-2 link-light">
                        <span className="fab fa-twitter">                        </span>
                      </a>
                      <a href="#!" className="pe-1 me-2 link-light">
                        <span className="fab fa-instagram">                        </span>
                      </a>
                      <a href="#!" className="link-light">
                        <span className="fab fa-youtube">                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
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
                <span className="fas fa-ellipsis-h">                </span>
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
                  <span className="fa-regular fa-envelope me-2" data-fa-transform={"down-1"}>                  </span>Support
                </a>
              </li>
              <li>
                <a href="tel:+01123581321" className="lh-1 text-body-tertiary fw-semibold fs-9">
                  <span className="fa-brands fa-whatsapp me-2">                  </span>+01 123 581321
                </a>
              </li>
            </ul>
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

    <div className="container-medium">
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

    </div>
  );
}
