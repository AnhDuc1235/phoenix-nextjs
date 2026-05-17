'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Payment() {
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
            <PhoenixLink href="/apps/travel-agency/flight/homepage" className="nav-link px-3 ps-0 ">
Homepage
            </PhoenixLink>
          </li>
          <li className="nav-item" data-nav-item>
            <PhoenixLink href="/apps/travel-agency/flight/booking" className="nav-link px-3  ">
Booking
            </PhoenixLink>
          </li>
          <li className="nav-item" data-nav-item>
            <PhoenixLink href="/apps/travel-agency/flight/payment" className="nav-link px-3  text-primary">
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



    <section className="pt-6 pb-9">
      <div className="container-small">
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
        <h2 className="mb-5">
Payment
        </h2>
        <div className="row g-3 align-items-sm-center justify-content-between mb-5">
          <div className="col-sm">
            <div className="theme-wizard flight-booking-wizard" style={{"width":"18.125rem"} as CSSProperties}>
              <ul className="nav justify-content-between nav-wizard nav-wizard-success">
                <li className="nav-item">
                  <PhoenixLink href="/apps/travel-agency/flight/homepage" className="done complete nav-link fw-semibold"  data-wizard-step={"1"}>
                    <div className="d-inline-block text-center">
                      <span className="nav-item-circle-parent">
                        <span className="d-block nav-item-circle">
                          <span className="fas fa-check">                          </span>
                        </span>
                      </span>
                      <span className="mt-1 fs-9">
Flight
                      </span>
                    </div>
                  </PhoenixLink>
                </li>
                <li className="nav-item">
                  <PhoenixLink href="/apps/travel-agency/flight/booking" className="done complete nav-link fw-semibold"  data-wizard-step={"2"}>
                    <div className="d-inline-block text-center">
                      <span className="nav-item-circle-parent">
                        <span className="d-block nav-item-circle">
                          <span className="fas fa-check">                          </span>
                        </span>
                      </span>
                      <span className="mt-1 fs-9">
Booking
                      </span>
                    </div>
                  </PhoenixLink>
                </li>
                <li className="nav-item">
                  <PhoenixLink href="/apps/travel-agency/flight/payment" className="active nav-link fw-semibold"  data-wizard-step={"3"}>
                    <div className="d-inline-block text-center">
                      <span className="nav-item-circle-parent">
                        <span className="d-block nav-item-circle">
                          <span className="fas fa-money-bill">                          </span>
                        </span>
                      </span>
                      <span className="mt-1 fs-9">
Payment
                      </span>
                    </div>
                  </PhoenixLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm text-sm-end">
            <p className="mb-2 text-info">
Book before time runs out
            </p>
            <h3 className="mb-0 text-info fw-bold d-flex gap-2 align-items-center justify-content-sm-end">
              <span className="fa-solid fa-clock fs-8">              </span>
29 
              <span className="fs-9 fw-normal">
min 
              </span>
50 
              <span className="fs-9 fw-normal">
sec
              </span>
            </h3>
          </div>
        </div>
        <hr className="mt-5 mb-6" />
        <div className="row g-0 gap-6">
          <div className="col-lg">
            <div>
              <div className="d-flex justify-content-between mb-4">
                <div>
                  <span className="fa-solid fa-plane text-primary me-2">                  </span>
                  <h4 className="mb-0 d-inline-block text-body-highlight">
Flight info
                  </h4>
                </div>
                <button className="btn btn-link p-0">
                  <span className="fas fa-edit me-2">                  </span>
Edit
                </button>
              </div>
              <div className="mb-4">
                <PhoenixImage src="/assets/img/brand/qatar-airline.png" alt="" className="img-fluid rounded-3" />
                <h5 className="text-nowrap fw-normal d-inline-block ms-2 mb-0">
Qatar Airways
                </h5>
              </div>
              <p className="text-body-emphasis">
Travelling from 
                <strong>
Dhaka 
                </strong>
to 
                <strong>
Cox’s Bazar
                </strong>
              </p>
              <div className="d-flex gap-2 flex-wrap">
                <p className="mb-0 text-body-emphasis text-nowrap">
Tuesday, 29 January
                  <span className="fas fa-circle text-body-tertiary fs-11 mx-2" data-fa-transform={"shrink-6"}>                  </span>
5:00 pm
                </p>
                <p className="mb-0 text-body-emphasis text-nowrap">
                  <span className="text-body-tertiary me-2">
-
                  </span>
Tuesday, 29 January
                  <span className="fas fa-circle text-body-tertiary fs-11 mx-2" data-fa-transform={"shrink-6"}>                  </span>
5:30 pm
                </p>
              </div>
            </div>
            <hr className="my-5" />
            <div>
              <div className="d-flex justify-content-between mb-4">
                <div>
                  <span className="fa-solid fa-user text-primary me-2">                  </span>
                  <h4 className="mb-0 d-inline-block text-body-highlight">
Personal info
                  </h4>
                </div>
                <button className="btn btn-link p-0">
                  <span className="fas fa-edit me-2">                  </span>
Edit
                </button>
              </div>
              <div className="bg-body-highlight rounded-2 p-4">
                <div className="row g-0 gy-5 flex-column flex-sm-row">
                  <div className="col pe-4">
                    <h5 className="mb-3">
Passenger 1
                    </h5>
                    <p className="mb-2">
John James Johansen
                    </p>
                    <p className="mb-0">
Adult 
                      <span className="fas fa-circle text-body-tertiary fs-11 mx-2" data-fa-transform={"shrink-5"}>                      </span>
Male
                    </p>
                  </div>
                  <div className="col border-start-sm border-top-sm-0 border-top border-translucent ps-sm-4 pt-4 pt-sm-0">
                    <h5 className="mb-3">
Passenger 2
                    </h5>
                    <p className="mb-2">
John James Johansen
                    </p>
                    <p className="mb-0">
Adult 
                      <span className="fas fa-circle text-body-tertiary fs-11 mx-2" data-fa-transform={"shrink-5"}>                      </span>
Male
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-5" />
            <div>
              <div className="d-flex justify-content-between mb-4">
                <div>
                  <span className="fa-solid fa-suitcase-rolling text-primary me-2">                  </span>
                  <h4 className="mb-0 d-inline-block text-body-highlight">
Included baggage
                  </h4>
                </div>
                <button className="btn btn-link p-0">
                  <span className="fas fa-edit me-2">                  </span>
Edit
                </button>
              </div>
              <div className="d-flex gap-3 mb-4">
                <span className="fas fa-circle text-body-quaternary fs-11 mx-2" data-fa-transform={"down-8"}>                </span>
                <div>
                  <h5 className="mb-2">
1 personal item
                  </h5>
                  <p className="mb-0 text-body-tertiary">
Must go under the seat in front of you
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 mb-4">
                <span className="fas fa-circle text-body-quaternary fs-11 mx-2" data-fa-transform={"down-8"}>                </span>
                <div>
                  <h5 className="mb-2">
1 carry-on bag
                  </h5>
                  <p className="mb-0 text-body-tertiary">
Max weight 8 kg
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3">
                <span className="fas fa-circle text-body-quaternary fs-11 mx-2" data-fa-transform={"down-8"}>                </span>
                <div>
                  <h5 className="mb-2">
1 checked bag
                  </h5>
                  <p className="mb-0 text-body-tertiary">
Max weight 25 kg
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className="card mb-9 mb-lg-0">
              <div className="card-body">
                <form id="flightCheckoutForm">
                  <h3 className="mb-5">
Payment Method
                  </h3>
                  <div className="row gx-xxl-6 mb-5">
                    <div className="col-md-auto">
                      <div className="form-check">
                        <input className="form-check-input" id="creditCard" type="radio" name="paymentMethod" defaultChecked />
                        <label className="form-check-label fs-8 text-body text-nowrap d-flex gap-2" htmlFor="creditCard">
Credit card
                          <PhoenixImage src="/assets/img/logos/visa.png" alt="" className="h-100" />
                          <PhoenixImage src="/assets/img/logos/discover.png" alt="" className="h-100" />
                          <PhoenixImage src="/assets/img/logos/mastercard.png" alt="" className="h-100" />
                          <PhoenixImage src="/assets/img/logos/american_express.png" alt="" className="h-100" />
                        </label>
                      </div>
                    </div>
                    <div className="col-md-auto">
                      <div className="form-check">
                        <input className="form-check-input" id="paypal" type="radio" name="paymentMethod" />
                        <label className="form-check-label fs-8 text-body text-nowrap" htmlFor="paypal">
Paypal
                        </label>
                      </div>
                    </div>
                    <div className="col-md-auto">
                      <div className="form-check">
                        <input className="form-check-input" id="coupon" type="radio" name="paymentMethod" />
                        <label className="form-check-label fs-8 text-body text-nowrap" htmlFor="coupon">
Coupon
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row gx-3 gy-4">
                    <div className="col-md-6">
                      <label className="fw-bold text-body-highlight mb-1" htmlFor="selectCard">
Select card
                      </label>
                      <select className="form-select text-body-emphasis" id="selectCard">
                        <option>
Select a card
                        </option>
                        <option value="visa">
Visa
                        </option>
                        <option value="discover">
Discover
                        </option>
                        <option value="mastercard">
Mastercard
                        </option>
                        <option value="american-express">
American Express
                        </option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="fw-bold text-body-highlight mb-1" htmlFor="inputCardNumber">
Card number
                      </label>
                      <input className="form-control" id="inputCardNumber" type="number" placeholder="Enter card number" aria-label="Card number" />
                    </div>
                    <div className="col-12">
                      <label className="fw-bold text-body-highlight mb-1" htmlFor="inputName">
Full name
                      </label>
                      <input className="form-control" id="inputName" type="text" placeholder="Ansolo Lazinatov" aria-label="Full name" />
                    </div>
                    <div className="col-md-6">
                      <label className="fw-bold text-body-highlight mb-1">
Expires on
                      </label>
                      <div className="d-flex">
                        <select className="form-select text-body-emphasis me-3">
                          <option>
Month
                          </option>
                          <option>
January
                          </option>
                          <option>
February
                          </option>
                          <option>
March
                          </option>
                        </select>
                        <select className="form-select text-body-emphasis">
                          <option>
Year
                          </option>
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
                    <div className="col-md-6">
                      <label className="fw-bold text-body-highlight mb-1" htmlFor="inputCardCVC">
CVC
                      </label>
                      <input className="form-control" id="inputCardCVC" type="number" placeholder="Enter a valid CVC" aria-label="CVC" />
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" id="gridCheck" type="checkbox" />
                        <label className="form-check-label text-body-emphasis fs-8" htmlFor="gridCheck">
Save Card Details
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-6 mb-9 d-none d-lg-block" />
      </div>
    </section>



    <div className="flight-bottom-bar bg-secondary" data-bs-theme={"light"}>
      <div className="container-small py-3">
        <div className="d-flex gap-4 gap-sm-6 align-items-center justify-content-end">
          <h6 className="text-white">
            <span className="me-2">
Total 
            </span>
            <span className="me-2">
: 
            </span>
BDT
            <span className="fs-5 ms-2">
4,609
            </span>
          </h6>
          <a href="#!" className="btn btn-primary flex-1 text-nowrap"  style={{"maxWidth":"17rem"} as CSSProperties}>
 Continue            <span className="fa-solid fa-chevron-right fs-9 ms-2">            </span>
          </a>
        </div>
      </div>
    </div>

    <div className="support-chat-container support-chat-bottom-lg">
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
      <footer className="footer d-none px-0">
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
