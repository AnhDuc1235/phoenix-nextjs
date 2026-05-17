'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Checkout() {
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
            <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-compare" className="nav-link px-3  ">
Hotel Compare
            </PhoenixLink>
          </li>
          <li className="nav-item" data-nav-item>
            <PhoenixLink href="/apps/travel-agency/hotel/customer/checkout" className="nav-link px-3  text-primary">
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
        <h2 className="mb-5">
Check out
        </h2>
        <div className="row justify-content-between">
          <div className="col-lg-7 col-xl-6">
            <form id="checkoutForm1">
              <hr className="mt-0 mb-7" />
              <h3 className="fw-bold mb-5">
Enter your details
              </h3>
              <h5 className="mb-3">
Are you travelling for work?
              </h5>
              <div className="form-check form-check-inline me-4">
                <input className="form-check-input" id="no" type="radio" name="tripTypeRadio" defaultValue="no" defaultChecked />
                <label className="form-check-label" htmlFor="no">
No
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" id="yes" type="radio" name="tripTypeRadio" defaultValue="yes" />
                <label className="form-check-label" htmlFor="yes">
Yes
                </label>
              </div>
              <div className="row g-3 mb-5 mt-1">
                <div className="col-sm-6">
                  <label className="fw-bold text-body-highlight mb-1" htmlFor="first-name">
First name
                  </label>
                  <input className="form-control" type="text" id="first-name" placeholder="First name" />
                </div>
                <div className="col-sm-6">
                  <label className="fw-bold text-body-highlight mb-1" htmlFor="last-name">
Last name
                  </label>
                  <input className="form-control" type="text" id="last-name" placeholder="Last name" />
                </div>
              </div>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label className="fw-bold text-body-highlight mb-1" htmlFor="email-address">
Email address
                  </label>
                  <input className="form-control" type="email" id="email-address" placeholder="Email address" />
                </div>
                <div className="col-sm-6">
                  <label className="fw-bold text-body-highlight mb-1" htmlFor="confirm-email-address">
Confirm email address
                  </label>
                  <input className="form-control" type="email" id="confirm-email-address" placeholder="Confirm email address" />
                </div>
              </div>
              <h5 className="mb-3 mt-7">
Who are you booking for?
              </h5>
              <div className="form-check form-check-inline me-4">
                <input className="form-check-input" id="me" type="radio" name="bookingPersonRadio" defaultValue="no" defaultChecked />
                <label className="form-check-label" htmlFor="me">
I am the main guest
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" id="else" type="radio" name="bookingPersonRadio" defaultValue="yes" />
                <label className="form-check-label" htmlFor="else">
I am booking for somebody else
                </label>
              </div>
              <h5 className="mb-3 mt-6">
Add to your stay
              </h5>
              <div className="form-check mb-4">
                <input className="form-check-input" id="airportShuttle" type="checkbox" />
                <label className="form-check-label fw-normal fs-8 text-body" htmlFor="airportShuttle">
 I am interested in requesting an airport shuttle
                  <span className="d-block fs-9 text-body-tertiary">
We'll tell your accommodation what you're interested in so they can provide details and costs.
                  </span>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" id="rentingCar" type="checkbox" />
                <label className="form-check-label fw-normal fs-8 text-body" htmlFor="rentingCar">
 I'm interested in renting a car
                  <span className="d-block fs-9 text-body-tertiary">
Make the most of your trip and check the car rental options in your booking confirmation.
                  </span>
                </label>
              </div>
              <h5 className="mb-3 mt-6">
Your arrival time
              </h5>
              <div className="row gx-2">
                <div className="col-6 col-sm-3">
                  <select className="form-select">
                    <option value="1">
12:00
                    </option>
                    <option value="2">
03:00
                    </option>
                    <option value="3">
06:00
                    </option>
                    <option value="4">
09:00
                    </option>
                  </select>
                </div>
                <div className="col-6 col-sm-3">
                  <select className="form-select">
                    <option value="am">
AM
                    </option>
                    <option value="pm">
PM
                    </option>
                  </select>
                </div>
              </div>
              <h5 className="mb-3 mt-7">
Review house rules
              </h5>
              <p>
Your host would like you to agree to the following house rules:
              </p>
              <p className="mb-2">
                <span className="fa-solid fa-circle text-body-quaternary fs-10 me-2" data-fa-transform={"up-2"}>                </span>
No smoking
              </p>
              <p>
                <span className="fa-solid fa-circle text-body-quaternary fs-10 me-2" data-fa-transform={"up-2"}>                </span>
Pets are not allowed 
              </p>
              <p className="text-info mb-7">
By continuing to the next step, you are agreeing to these house rules.
              </p>
              <h5 className="mb-3">
Special requests
              </h5>
              <p className="fs-9 text-body-tertiary mb-4">
Special requests cannot be guaranteed, but the property will do its best to meet your needs. You can always make a special request after your booking is complete!
              </p>
              <textarea className="form-control" name="requestText" rows={5} id="requestText" placeholder="Type your request" defaultValue="" />
              <hr className="mt-7 mb-5" />
              <PhoenixLink href="/apps/travel-agency/hotel/customer/payment" className="btn btn-primary">
Final details                <span className="fa-solid fa-chevron-right ms-2" data-fa-transform={"shrink-3"}>                </span>
              </PhoenixLink>
            </form>
          </div>
          <div className="col-lg-5 col-xl-4">
            <div className="card mt-5 mt-lg-0">
              <div className="card-body">
                <h5 className="mb-3">
Summary
                </h5>
                <PhoenixImage src="/assets/img/hotels/39.png" alt="" className="rounded-2 mb-3" width={208} />
                <h4 className="text-body-highlight mb-2">
Radisson Blu Water Garden Hotel, Dhaka
                </h4>
                <p className="mb-5 text-body-tertiary">
Airport Rd, Dhaka Cantonment, Dhaka, 1206, Bangladesh
                </p>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-between gap-3 mb-4">
                      <div>
                        <h5 className="text-body-highlight">
Room 1
                        </h5>
                        <p className="mb-0 text-body-tertiary">
King-Super deluxe
                        </p>
                      </div>
                      <h4 className="mb-0">
$2,056.75
                      </h4>
                    </div>
                    <div className="row align-items-center g-0">
                      <div className="col-3">
                        <h5 className="text-body text-nowrap mb-0">
Check in
                        </h5>
                      </div>
                      <div className="col-auto">
                        <span className="px-2">
:
                        </span>
                      </div>
                      <div className="col-auto">
                        <span>
25 January, 2023
                        </span>
                      </div>
                    </div>
                    <div className="row align-items-center g-0 mb-4">
                      <div className="col-3">
                        <h5 className="text-body text-nowrap mb-0">
Check out
                        </h5>
                      </div>
                      <div className="col-auto">
                        <span className="px-2">
:
                        </span>
                      </div>
                      <div className="col-auto">
                        <span>
27 January, 2023
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge badge-phoenix badge-phoenix-secondary py-1 border-0 text-capitalize">
                        <span className="fa-solid fa-bed fs-9 me-2">                        </span>
                        <span>
Double bed
                        </span>
                      </span>
                      <span className="badge badge-phoenix badge-phoenix-secondary py-1 border-0 text-capitalize">
                        <span className="fa-solid fa-user fs-9 me-2">                        </span>
                        <span>
2 Adults
                        </span>
                      </span>
                      <span className="badge badge-phoenix badge-phoenix-secondary py-1 border-0 text-capitalize">
                        <span className="fa-solid fa-moon fs-9 me-2">                        </span>
                        <span>
2 Nights
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-between gap-3 mb-4">
                      <div>
                        <h5 className="text-body-highlight">
Room 2
                        </h5>
                        <p className="mb-0 text-body-tertiary">
Standard double queen
                        </p>
                      </div>
                      <h4 className="mb-0">
$1,456.65
                      </h4>
                    </div>
                    <div className="row align-items-center g-0">
                      <div className="col-3">
                        <h5 className="text-body text-nowrap mb-0">
Check in
                        </h5>
                      </div>
                      <div className="col-auto">
                        <span className="px-2">
:
                        </span>
                      </div>
                      <div className="col-auto">
                        <span>
25 January, 2023
                        </span>
                      </div>
                    </div>
                    <div className="row align-items-center g-0 mb-4">
                      <div className="col-3">
                        <h5 className="text-body text-nowrap mb-0">
Check out
                        </h5>
                      </div>
                      <div className="col-auto">
                        <span className="px-2">
:
                        </span>
                      </div>
                      <div className="col-auto">
                        <span>
28 January, 2023
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge badge-phoenix badge-phoenix-secondary py-1 border-0 text-capitalize">
                        <span className="fa-solid fa-bed fs-9 me-2">                        </span>
                        <span>
Double bed
                        </span>
                      </span>
                      <span className="badge badge-phoenix badge-phoenix-secondary py-1 border-0 text-capitalize">
                        <span className="fa-solid fa-user fs-9 me-2">                        </span>
                        <span>
2 Adults
                        </span>
                      </span>
                      <span className="badge badge-phoenix badge-phoenix-secondary py-1 border-0 text-capitalize">
                        <span className="fa-solid fa-baby fs-9 me-2">                        </span>
                        <span>
1 Childs
                        </span>
                      </span>
                      <span className="badge badge-phoenix badge-phoenix-secondary py-1 border-0 text-capitalize">
                        <span className="fa-solid fa-moon fs-9 me-2">                        </span>
                        <span>
3 Nights
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-body-highlight rounded-2">
                  <div className="d-flex flex-between-center mb-2">
                    <h6 className="text-body-tertiary fw-semibold">
Sub-total
                    </h6>
                    <h6 className="text-body-highlight fw-semibold">
$3,513.40
                    </h6>
                  </div>
                  <div className="d-flex flex-between-center">
                    <h6 className="text-body-tertiary fw-semibold">
Discount
                    </h6>
                    <h6 className="text-body-tertiary fw-semibold">
-$50
                    </h6>
                  </div>
                  <hr />
                  <div className="d-flex flex-between-center">
                    <h4 className="text-body">
Total
                    </h4>
                    <h4 className="text-body">
1,756.70
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



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
