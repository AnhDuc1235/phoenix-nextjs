'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Booking() {
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
            <PhoenixLink href="/apps/travel-agency/flight/booking" className="nav-link px-3  text-primary">
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
Booking
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
                  <PhoenixLink href="/apps/travel-agency/flight/booking" className="active nav-link fw-semibold"  data-wizard-step={"2"}>
                    <div className="d-inline-block text-center">
                      <span className="nav-item-circle-parent">
                        <span className="d-block nav-item-circle">
                          <span className="fas fa-user">                          </span>
                        </span>
                      </span>
                      <span className="mt-1 fs-9">
Booking
                      </span>
                    </div>
                  </PhoenixLink>
                </li>
                <li className="nav-item">
                  <PhoenixLink href="/apps/travel-agency/flight/payment" className="nav-link fw-semibold"  data-wizard-step={"3"}>
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
        <div className="card bg-body-highlight mb-6">
          <div className="card-body p-4 p-lg-6">
            <div className="row g-0 justify-content-between">
              <div className="col-lg-8 mb-5 mb-lg-0">
                <div className="row gy-4">
                  <div className="col-12">
                    <div className="row align-items-center">
                      <div className="col-md-3 text-md-end mb-2 mb-md-0">
                        <h2>
13:45
                        </h2>
                        <p className="mb-0 text-nowrap">
23 January, 2023
                        </p>
                      </div>
                      <div className="col-md-auto d-none d-md-block text-center">
                        <span className="fas fa-circle text-body-quaternary fs-11">                        </span>
                      </div>
                      <div className="col-md-auto">
                        <h5>
DAC - Dhaka 
                          <span className="text-body-tertiary fw-normal">
(Hazrat Shahjalal Intl. Airport)
                          </span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row align-items-center">
                      <div className="col-auto col-md-3 text-md-end">
                        <p className="mb-0 text-body-quaternary">
0h 45m
                        </p>
                      </div>
                      <div className="col-auto text-md-center">
                        <PhoenixImage src="/assets/img/icons/long-arrow-down.svg" alt="" />
                      </div>
                      <div className="col-auto">
                        <p className="mb-0 text-body-quaternary">
Qatar Airways 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row align-items-center">
                      <div className="col-md-3 text-md-end mb-2 mb-md-0">
                        <h2>
14:15
                        </h2>
                        <p className="mb-0 text-nowrap">
23 January, 2023
                        </p>
                      </div>
                      <div className="col-md-auto d-none d-md-block text-center">
                        <span className="fas fa-circle text-body-quaternary fs-11">                        </span>
                      </div>
                      <div className="col-md-auto">
                        <h5>
CXB - Cox’s Bazar 
                          <span className="text-body-tertiary fw-normal">
(Cox’s Bazar Intl. Airport) 
                          </span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ps-lg-6 pt-5 pt-lg-0 border-top border-top-lg-0 border-start-lg border-translucent">
                  <div className="row g-lg-3 g-md-0 g-3 flex-between-center">
                    <div className="col-md-auto col-lg-12">
                      <div className="text-nowrap">
                        <PhoenixImage src="/assets/img/brand/qatar-airline.png" alt="" className="rounded-2" width={32} />
                        <h5 className="text-nowrap fw-normal d-inline-block ms-2 mb-0">
Qatar Airways
                        </h5>
                      </div>
                    </div>
                    <div className="col-auto col-lg-12">
                      <h5 className="text-nowrap">
Flight number
                      </h5>
                      <p className="mb-0">
VQ 935
                      </p>
                    </div>
                    <div className="col-auto col-lg-12">
                      <h5 className="text-nowrap">
Flight model
                      </h5>
                      <p className="mb-0">
ATR735
                      </p>
                    </div>
                    <div className="col-auto col-lg-12">
                      <h5 className="mb-0 text-nowrap">
                        <span className="fa-solid fa-couch me-2">                        </span>
Economy
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="mb-4">
Flight Details
          </h3>
          <div className="row g-0 justify-content-between mb-4">
            <div className="col-lg-3 border-end-lg mb-5 mb-lg-0">
              <h5 className="mb-4">
Baggage weight limit
              </h5>
              <table className="table table-borderless mb-0" style={{"maxWidth":"9.375rem"} as CSSProperties}>
                <tbody>
                  <tr>
                    <th className="p-0">                    </th>
                    <th className="p-0">                    </th>
                    <th className="p-0">                    </th>
                  </tr>
                  <tr>
                    <td className="text-nowrap py-1">
                      <p className="mb-0 text-body-tertiary text-nowrap">
                        <span className="fa-solid fa-suitcase-rolling text-body-emphasis me-2">                        </span>
Cargo 
                      </p>
                    </td>
                    <td className="w-max-content py-1 pe-1">
                      <p className="mb-0 text-body-tertiary">
:
                      </p>
                    </td>
                    <td className="py-1 align-middle">
                      <h5 className="mb-0">
20 kgs
                      </h5>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-nowrap py-1">
                      <p className="mb-0 text-body-tertiary text-nowrap">
                        <span className="fa-solid fa-briefcase text-body-emphasis me-2">                        </span>
Carry 
                      </p>
                    </td>
                    <td className="w-max-content py-1 pe-1">
                      <p className="mb-0 text-body-tertiary">
:
                      </p>
                    </td>
                    <td className="py-1 align-middle">
                      <h5 className="mb-0">
7 kgs
                      </h5>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-auto col-lg-8">
              <h5 className="mb-4">
Policy 
              </h5>
              <div className="d-flex flex-column flex-sm-row justify-content-between gap-4">
                <div>
                  <p className="mb-2 text-info">
Cancellation
                  </p>
                  <p className="mb-0">
Refund Amount = Paid Amount - Airline’s Cancellation Fee
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-info">
Re-issue
                  </p>
                  <p className="mb-0">
Re-issue Fee = Airline’s Fee + Fare Difference
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="mb-0 text-info">
*The airline’s fee is indicative and per person. Convenience fee is nom-refundable
          </p>
        </div>
        <form className="row justify-content-between">
          <div className="col-lg-8">
            <div>
              <div className="mb-4">
                <h3>
Traveler Details
                </h3>
                <small>
                  <span className="fas fa-info-circle me-2 text-info">                  </span>
As mentioned in your passport or government approved IDs
                </small>
              </div>
              <div className="card bg-body mb-4">
                <div className="card-header bg-body-highlight">
                  <div className="d-flex flex-between-center">
                    <h5 className="mb-0 text-nowrap">
                      <span className="fa-solid fa-user fs-9 me-2 text-primary">                      </span>
Person 1
                    </h5>
                    <div className="form-check mb-0">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="saveInfo-1" />
                      <label className="form-check-label fs-8 fw-normal mb-0 text-body-emphasis" htmlFor="saveInfo-1">
Save traveler info
                      </label>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="mb-0 fw-semibold fs-9 text-body-tertiary">
Personal info
                  </h6>
                  <hr className="my-2" />
                  <div className="row g-3 mb-6">
                    <div className="col-md-6">
                      <label className="fw-bold text-body-highlight mb-2" htmlFor="firstName-1">
First name
                      </label>
                      <input className="form-control" id="firstName-1" type="text" placeholder="First name" />
                    </div>
                    <div className="col-md-6">
                      <label className="fw-bold text-body-highlight mb-2" htmlFor="lastName-1">
Last name
                      </label>
                      <input className="form-control" id="lastName-1" type="text" placeholder="Last name" />
                    </div>
                  </div>
                  <h6 className="mb-0 fw-semibold fs-9 text-body-tertiary">
Contact info
                  </h6>
                  <hr className="my-2" />
                  <div className="row g-3 mb-6">
                    <div className="col-md-6">
                      <label className="fw-bold text-body-highlight mb-2" htmlFor="email-1">
Email
                      </label>
                      <input className="form-control" id="email-1" type="email" placeholder="Email" />
                    </div>
                    <div className="col-md-6">
                      <label className="fw-bold text-body-highlight mb-2" htmlFor="phone-1">
Phone
                      </label>
                      <input className="form-control" id="phone-1" type="tel" placeholder="XXX-XXX-XXXX" />
                    </div>
                  </div>
                  <h6 className="mb-0 fw-semibold fs-9 text-body-tertiary">
Passport info
                  </h6>
                  <hr className="my-2" />
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="fw-bold text-body-highlight mb-2" htmlFor="passportNum-1">
Passport Number
                      </label>
                      <input className="form-control" id="passportNum-1" type="text" placeholder="Passport number" />
                    </div>
                    <div className="col-md-6">
                      <label className="fw-bold text-body-highlight mb-2" htmlFor="passportExpiry-1">
Passport expiry date
                      </label>
                      <input className="form-control datetimepicker" id="passportExpiry-1" type="text" placeholder="Select date" data-options={"{\"disableMobile\":true,\"dateFormat\":\"j M, Y\"}"} />
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="dropzone dropzone-multiple p-0" id="passportFrontPage-1" data-dropzone data-options={"{\"url\":\"valid/url\",\"maxFiles\":1,\"dictDefaultMessage\":\"Choose or Drop a file here\"}"}>
                        <div className="fallback">
                          <input type="file" name="file" />
                        </div>
                        <div className="dz-message text-body-tertiary text-opacity-85" data-dz-message>
                          <h6 className="mb-1 text-body-quaternary">
Upload or drag
                          </h6>
                          <h6 className="mb-3 text-body-secondary">
The photo of the front page of your passport
                          </h6>
                          <PhoenixImage src="/assets/img/icons/image-icon.png" alt="" className="mt-3 me-2" width={42} />
                        </div>
                        <div className="dz-preview dz-preview-multiple m-0 d-flex flex-column">
                          <div className="d-flex pb-3 border-bottom border-translucent media px-2">
                            <div className="border p-2 rounded-2 me-2">
                              <PhoenixImage src="/assets/img/icons/file.png" alt="..." className="rounded-2 dz-image" />
                            </div>
                            <div className="flex-1 d-flex flex-between-center">
                              <div>
                                <span className="fw-bold fs-9" data-dz-name>                                </span>
                                <div className="d-flex align-items-center">
                                  <p className="mb-0 fs-9 text-body-quaternary lh-1" data-dz-size>                                  </p>
                                  <div className="dz-progress">
                                    <span className="dz-upload" data-dz-uploadprogress={""}>                                    </span>
                                  </div>
                                </div>
                                <span className="fs-10 text-danger" data-dz-errormessage>                                </span>
                              </div>
                              <div className="dropdown">
                                <button className="btn btn-link text-body-quaternary btn-sm dropdown-toggle btn-reveal dropdown-caret-none" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                                  <span className="fas fa-ellipsis-h">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end border border-translucent py-2">
                                  <a href="#!" className="dropdown-item"  data-dz-remove>
Remove File
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="dropzone dropzone-multiple p-0" id="passportBackPage-1" data-dropzone data-options={"{\"url\":\"valid/url\",\"maxFiles\":1,\"dictDefaultMessage\":\"Choose or Drop a file here\"}"}>
                        <div className="fallback">
                          <input type="file" name="file" />
                        </div>
                        <div className="dz-message text-body-tertiary text-opacity-85" data-dz-message>
                          <h6 className="mb-1 text-body-quaternary">
Upload or drag
                          </h6>
                          <h6 className="mb-3 text-body-secondary">
The photo of the back page of your passport
                          </h6>
                          <PhoenixImage src="/assets/img/icons/image-icon.png" alt="" className="mt-3 me-2" width={42} />
                        </div>
                        <div className="dz-preview dz-preview-multiple m-0 d-flex flex-column">
                          <div className="d-flex pb-3 border-bottom border-translucent media px-2">
                            <div className="border p-2 rounded-2 me-2">
                              <PhoenixImage src="/assets/img/icons/file.png" alt="..." className="rounded-2 dz-image" />
                            </div>
                            <div className="flex-1 d-flex flex-between-center">
                              <div>
                                <span className="fw-bold fs-9" data-dz-name>                                </span>
                                <div className="d-flex align-items-center">
                                  <p className="mb-0 fs-9 text-body-quaternary lh-1" data-dz-size>                                  </p>
                                  <div className="dz-progress">
                                    <span className="dz-upload" data-dz-uploadprogress={""}>                                    </span>
                                  </div>
                                </div>
                                <span className="fs-10 text-danger" data-dz-errormessage>                                </span>
                              </div>
                              <div className="dropdown">
                                <button className="btn btn-link text-body-quaternary btn-sm dropdown-toggle btn-reveal dropdown-caret-none" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                                  <span className="fas fa-ellipsis-h">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end border border-translucent py-2">
                                  <a href="#!" className="dropdown-item"  data-dz-remove>
Remove File
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-body mb-4">
                <div className="card-header bg-body-highlight">
                  <div className="d-flex flex-between-center">
                    <h5 className="mb-0 text-nowrap">
                      <span className="fa-solid fa-user fs-9 me-2 text-primary">                      </span>
Person 2
                    </h5>
                    <div className="form-check mb-0">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="saveInfo-2" />
                      <label className="form-check-label fs-8 fw-normal mb-0 text-body-emphasis" htmlFor="saveInfo-2">
Save traveler info
                      </label>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="mb-0 fw-semibold fs-9 text-body-tertiary">
Personal info
                  </h6>
                  <hr className="my-2" />
                  <div className="row g-3 mb-6">
                    <div className="col-md-6">
                      <label className="fw-bold text-body-highlight mb-2" htmlFor="firstName-2">
First name
                      </label>
                      <input className="form-control" id="firstName-2" type="text" placeholder="First name" />
                    </div>
                    <div className="col-md-6">
                      <label className="fw-bold text-body-highlight mb-2" htmlFor="lastName-2">
Last name
                      </label>
                      <input className="form-control" id="lastName-2" type="text" placeholder="Last name" />
                    </div>
                  </div>
                  <h6 className="mb-0 fw-semibold fs-9 text-body-tertiary">
Contact info
                  </h6>
                  <hr className="my-2" />
                  <div className="row g-3 mb-6">
                    <div className="col-md-6">
                      <label className="fw-bold text-body-highlight mb-2" htmlFor="email-2">
Email
                      </label>
                      <input className="form-control" id="email-2" type="email" placeholder="Email" />
                    </div>
                    <div className="col-md-6">
                      <label className="fw-bold text-body-highlight mb-2" htmlFor="phone-2">
Phone
                      </label>
                      <input className="form-control" id="phone-2" type="tel" placeholder="XXX-XXX-XXXX" />
                    </div>
                  </div>
                  <h6 className="mb-0 fw-semibold fs-9 text-body-tertiary">
Passport info
                  </h6>
                  <hr className="my-2" />
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="fw-bold text-body-highlight mb-2" htmlFor="passportNum-2">
Passport Number
                      </label>
                      <input className="form-control" id="passportNum-2" type="text" placeholder="Passport number" />
                    </div>
                    <div className="col-md-6">
                      <label className="fw-bold text-body-highlight mb-2" htmlFor="passportExpiry-2">
Passport expiry date
                      </label>
                      <input className="form-control datetimepicker" id="passportExpiry-2" type="text" placeholder="Select date" data-options={"{\"disableMobile\":true,\"dateFormat\":\"j M, Y\"}"} />
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="dropzone dropzone-multiple p-0" id="passportFrontPage-2" data-dropzone data-options={"{\"url\":\"valid/url\",\"maxFiles\":1,\"dictDefaultMessage\":\"Choose or Drop a file here\"}"}>
                        <div className="fallback">
                          <input type="file" name="file" />
                        </div>
                        <div className="dz-message text-body-tertiary text-opacity-85" data-dz-message>
                          <h6 className="mb-1 text-body-quaternary">
Upload or drag
                          </h6>
                          <h6 className="mb-3 text-body-secondary">
The photo of the front page of your passport
                          </h6>
                          <PhoenixImage src="/assets/img/icons/image-icon.png" alt="" className="mt-3 me-2" width={42} />
                        </div>
                        <div className="dz-preview dz-preview-multiple m-0 d-flex flex-column">
                          <div className="d-flex pb-3 border-bottom border-translucent media px-2">
                            <div className="border p-2 rounded-2 me-2">
                              <PhoenixImage src="/assets/img/icons/file.png" alt="..." className="rounded-2 dz-image" />
                            </div>
                            <div className="flex-1 d-flex flex-between-center">
                              <div>
                                <span className="fw-bold fs-9" data-dz-name>                                </span>
                                <div className="d-flex align-items-center">
                                  <p className="mb-0 fs-9 text-body-quaternary lh-1" data-dz-size>                                  </p>
                                  <div className="dz-progress">
                                    <span className="dz-upload" data-dz-uploadprogress={""}>                                    </span>
                                  </div>
                                </div>
                                <span className="fs-10 text-danger" data-dz-errormessage>                                </span>
                              </div>
                              <div className="dropdown">
                                <button className="btn btn-link text-body-quaternary btn-sm dropdown-toggle btn-reveal dropdown-caret-none" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                                  <span className="fas fa-ellipsis-h">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end border border-translucent py-2">
                                  <a href="#!" className="dropdown-item"  data-dz-remove>
Remove File
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="dropzone dropzone-multiple p-0" id="passportBackPage-2" data-dropzone data-options={"{\"url\":\"valid/url\",\"maxFiles\":1,\"dictDefaultMessage\":\"Choose or Drop a file here\"}"}>
                        <div className="fallback">
                          <input type="file" name="file" />
                        </div>
                        <div className="dz-message text-body-tertiary text-opacity-85" data-dz-message>
                          <h6 className="mb-1 text-body-quaternary">
Upload or drag
                          </h6>
                          <h6 className="mb-3 text-body-secondary">
The photo of the back page of your passport
                          </h6>
                          <PhoenixImage src="/assets/img/icons/image-icon.png" alt="" className="mt-3 me-2" width={42} />
                        </div>
                        <div className="dz-preview dz-preview-multiple m-0 d-flex flex-column">
                          <div className="d-flex pb-3 border-bottom border-translucent media px-2">
                            <div className="border p-2 rounded-2 me-2">
                              <PhoenixImage src="/assets/img/icons/file.png" alt="..." className="rounded-2 dz-image" />
                            </div>
                            <div className="flex-1 d-flex flex-between-center">
                              <div>
                                <span className="fw-bold fs-9" data-dz-name>                                </span>
                                <div className="d-flex align-items-center">
                                  <p className="mb-0 fs-9 text-body-quaternary lh-1" data-dz-size>                                  </p>
                                  <div className="dz-progress">
                                    <span className="dz-upload" data-dz-uploadprogress={""}>                                    </span>
                                  </div>
                                </div>
                                <span className="fs-10 text-danger" data-dz-errormessage>                                </span>
                              </div>
                              <div className="dropdown">
                                <button className="btn btn-link text-body-quaternary btn-sm dropdown-toggle btn-reveal dropdown-caret-none" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                                  <span className="fas fa-ellipsis-h">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end border border-translucent py-2">
                                  <a href="#!" className="dropdown-item"  data-dz-remove>
Remove File
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4 mb-lg-9">
              <h3 className="mb-4">
Payment Summary
              </h3>
              <div className="card bg-body-highlight">
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="p-0 pb-3 list-group-item bg-body-highlight">
                      <div className="d-flex flex-between-center">
                        <h6 className="mb-0">
Base fare
                        </h6>
                        <p className="mb-0 text-body-emphasis">
                          <span className="fs-9 me-2">
BDT
                          </span>
4,074 
                        </p>
                      </div>
                    </li>
                    <li className="px-0 py-3 list-group-item bg-body-highlight">
                      <div className="d-flex flex-between-center">
                        <h6 className="mb-0">
Tax
                        </h6>
                        <p className="mb-0 text-body-emphasis">
                          <span className="fs-9 me-2">
BDT
                          </span>
+725
                        </p>
                      </div>
                    </li>
                    <li className="px-0 pt-3 pb-5 list-group-item bg-body-highlight">
                      <div className="d-flex flex-between-center">
                        <h6 className="mb-0">
Sub-total
                        </h6>
                        <p className="mb-0 text-body-emphasis fw-bold">
                          <span className="fs-9 me-2 fw-semibold">
BDT
                          </span>
4,799 
                        </p>
                      </div>
                    </li>
                    <li className="px-0 py-3 list-group-item bg-body-highlight">
                      <div className="d-flex flex-between-center">
                        <h6 className="mb-0">
Code
                          <span className="badge text-bg-warning ms-2">
DOMFLy2023
                          </span>
                        </h6>
                        <p className="mb-0 text-body-emphasis">
                          <span className="fs-9 me-2">
BDT
                          </span>
-285
                        </p>
                      </div>
                    </li>
                    <li className="px-0 pb-0 pt-3 list-group-item bg-body-highlight">
                      <div className="d-flex flex-between-center">
                        <h6 className="mb-0">
Convenience charge
                        </h6>
                        <p className="mb-0 text-body-emphasis">
                          <span className="fs-9 me-2">
BDT
                          </span>
+95
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card bg-info-subtle border-info-subtle coupon-card-sticky-top mb-9 mb-lg-0">
              <div className="card-body">
                <h4>
Have a coupon?
                </h4>
                <p className="mb-4 fs-9 text-body-tertiary">
Enter code to get a discount
                </p>
                <div className="input-group gap-2">
                  <div className="form-icon-container flex-1">
                    <input className="form-control" type="text" placeholder="Coupon Code" />
                  </div>
                  <button className="btn btn-primary rounded">
Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
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
          <PhoenixLink href="/apps/travel-agency/flight/payment" className="btn btn-primary flex-1 text-nowrap"  style={{"maxWidth":"17rem"} as CSSProperties}>
 Continue            <span className="fa-solid fa-chevron-right fs-9 ms-2">            </span>
          </PhoenixLink>
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
