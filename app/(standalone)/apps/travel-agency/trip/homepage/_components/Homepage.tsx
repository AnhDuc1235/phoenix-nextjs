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
              <a href="#!" className="nav-link fs-8 fw-bold dropdown-toggle text-primary"  role="button" data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"} aria-haspopup="true" aria-expanded="false">
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
            <PhoenixLink href="/apps/travel-agency/trip/homepage" className="nav-link px-3 ps-0 text-primary">
Homepage
            </PhoenixLink>
          </li>
          <li className="nav-item" data-nav-item>
            <PhoenixLink href="/apps/travel-agency/trip/trip-details" className="nav-link px-3  ">
Trip Details
            </PhoenixLink>
          </li>
          <li className="nav-item" data-nav-item>
            <PhoenixLink href="/apps/travel-agency/trip/checkout" className="nav-link px-3  ">
Checkout
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
              <PhoenixLink href="/apps/travel-agency/flight/homepage" className="nav-link fw-bold rounded-3" aria-current="page">
                <span className="me-2 fa-solid fa-plane">                </span>Flight
              </PhoenixLink>
            </li>
            <li className="nav-item">
              <PhoenixLink href="/apps/travel-agency/trip/homepage" className="nav-link fw-bold rounded-3 active" aria-current="page">
                <span className="me-2 fa-solid fa-suitcase-rolling">                </span>Trip
              </PhoenixLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>



    <section className="py-0">
      <div className="bg-holder overlay bg-opacity-50" style={{"backgroundImage":"url(../../../assets/img/bg/46.png)","backgroundPosition":"center","backgroundSize":"cover"} as CSSProperties}>      </div>
      <div className="container-medium position-relative pt-11 pb-15">
        <h2 className="text-center text-white mb-4">
Where do you want to go?
        </h2>
        <div className="position-relative w-md-70 w-lg-50 mx-auto mb-4 mb-lg-10">
          <input className="form-control py-3 ps-4 pe-6 rounded-pill fs-8" type="text" placeholder="Search for a location" />
          <span className="fa-solid fa-search position-absolute top-0 end-0 mt-4 me-4 fs-8 text-body-tertiary" data-fa-transform={"up-3"}>          </span>
        </div>
        <div className="d-flex justify-content-center">
          <div className="d-none d-lg-flex gap-2">
            <input className="btn-check trip-filter-checkbox" type="checkbox" name="trip-type" id="attraction-shows" defaultChecked />
            <label className="btn btn-phoenix-secondary text-nowrap px-3" htmlFor="attraction-shows">
{"Attraction & Shows"}
            </label>
            <input className="btn-check trip-filter-checkbox" type="checkbox" name="trip-type" id="activities" />
            <label className="btn btn-phoenix-secondary text-nowrap px-3" htmlFor="activities">
Activities
            </label>
            <input className="btn-check trip-filter-checkbox" type="checkbox" name="trip-type" id="day-tours" />
            <label className="btn btn-phoenix-secondary text-nowrap px-3" htmlFor="day-tours">
Day-tours
            </label>
            <input className="btn-check trip-filter-checkbox" type="checkbox" name="trip-type" id="adventures" />
            <label className="btn btn-phoenix-secondary text-nowrap px-3" htmlFor="adventures">
Adventures
            </label>
            <input className="btn-check trip-filter-checkbox" type="checkbox" name="trip-type" id="sight-seeing" />
            <label className="btn btn-phoenix-secondary text-nowrap px-3" htmlFor="sight-seeing">
Sight-seeing
            </label>
          </div>
          <button className="btn btn-phoenix-secondary ms-lg-auto" type="button" data-bs-toggle={"offcanvas"} data-bs-target={"#tripFilterOffcanvas"} aria-controls="tripFilterOffcanvas">
            <span className="fa-solid fa-filter fs-10 me-2">            </span>
Filter
          </button>
        </div>
      </div>
    </section>



    <section className="pt-0 pb-9 mt-n13">
      <div className="container-medium">
        <div className="row g-3">
          <div className="col-md-6 col-xl-4">
            <div className="hoverbox rounded">
              <PhoenixLink href="/apps/travel-agency/trip/trip-details">
                <PhoenixImage src="/assets/img/trip/1.png" alt="" className="img-fluid" />                <div className="backdrop-faded">
                  <h3 className="text-underline fs-7 fs-lg-6 text-white fw-bold mb-2">
Selfie with Snape
                  </h3>
                  <h5 className="text-secondary-lighter fw-normal mb-3">
                    <span className="fa-solid fa-map-marker-alt text-primary me-2">                    </span>
Hogwarts
                  </h5>
                  <div className="d-sm-flex d-md-block d-lg-flex flex-between-center">
                    <h3 className="text-white fw-bold mb-3 mb-sm-0 mb-md-3 mb-lg-0 fs-7 fs-lg-6">
$ 2,340
                    </h3>
                    <div className="d-flex gap-3">
                      <h5 className="text-secondary-lighter fw-normal">
                        <span className="fa-solid fa-clock fs-9 me-2">                        </span>
3 days
                      </h5>
                      <h5 className="text-secondary-lighter fw-normal">
                        <span className="fa-solid fa-user fs-9 me-2">                        </span>
From 1 to people
                      </h5>
                    </div>
                  </div>
                </div>
              </PhoenixLink>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="hoverbox rounded">
              <PhoenixLink href="/apps/travel-agency/trip/trip-details">
                <PhoenixImage src="/assets/img/trip/2.png" alt="" className="img-fluid" />                <div className="backdrop-faded">
                  <h3 className="text-underline fs-7 fs-lg-6 text-white fw-bold mb-2">
Dine with Joker
                  </h3>
                  <h5 className="text-secondary-lighter fw-normal mb-3">
                    <span className="fa-solid fa-map-marker-alt text-primary me-2">                    </span>
Gotham
                  </h5>
                  <div className="d-sm-flex d-md-block d-lg-flex flex-between-center">
                    <h3 className="text-white fw-bold mb-3 mb-sm-0 mb-md-3 mb-lg-0 fs-7 fs-lg-6">
$ 4,540
                    </h3>
                    <div className="d-flex gap-3">
                      <h5 className="text-secondary-lighter fw-normal">
                        <span className="fa-solid fa-clock fs-9 me-2">                        </span>
5 days
                      </h5>
                      <h5 className="text-secondary-lighter fw-normal">
                        <span className="fa-solid fa-user fs-9 me-2">                        </span>
From 1 to people
                      </h5>
                    </div>
                  </div>
                </div>
              </PhoenixLink>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="hoverbox rounded">
              <PhoenixLink href="/apps/travel-agency/trip/trip-details">
                <PhoenixImage src="/assets/img/trip/3.png" alt="" className="img-fluid" />                <div className="backdrop-faded">
                  <h3 className="text-underline fs-7 fs-lg-6 text-white fw-bold mb-2">
Ask Frodo to visit Mordor
                  </h3>
                  <h5 className="text-secondary-lighter fw-normal mb-3">
                    <span className="fa-solid fa-map-marker-alt text-primary me-2">                    </span>
The Shire
                  </h5>
                  <div className="d-sm-flex d-md-block d-lg-flex flex-between-center">
                    <h3 className="text-white fw-bold mb-3 mb-sm-0 mb-md-3 mb-lg-0 fs-7 fs-lg-6">
$ 3,000
                    </h3>
                    <div className="d-flex gap-3">
                      <h5 className="text-secondary-lighter fw-normal">
                        <span className="fa-solid fa-clock fs-9 me-2">                        </span>
2 days
                      </h5>
                      <h5 className="text-secondary-lighter fw-normal">
                        <span className="fa-solid fa-user fs-9 me-2">                        </span>
From 1 to people
                      </h5>
                    </div>
                  </div>
                </div>
              </PhoenixLink>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="hoverbox rounded">
              <PhoenixLink href="/apps/travel-agency/trip/trip-details">
                <PhoenixImage src="/assets/img/trip/4.png" alt="" className="img-fluid" />                <div className="backdrop-faded">
                  <h3 className="text-underline fs-7 fs-lg-6 text-white fw-bold mb-2">
Sit on the iron throne
                  </h3>
                  <h5 className="text-secondary-lighter fw-normal mb-3">
                    <span className="fa-solid fa-map-marker-alt text-primary me-2">                    </span>
King’s Landing
                  </h5>
                  <div className="d-sm-flex d-md-block d-lg-flex flex-between-center">
                    <h3 className="text-white fw-bold mb-3 mb-sm-0 mb-md-3 mb-lg-0 fs-7 fs-lg-6">
$ 1,500
                    </h3>
                    <div className="d-flex gap-3">
                      <h5 className="text-secondary-lighter fw-normal">
                        <span className="fa-solid fa-clock fs-9 me-2">                        </span>
2 days
                      </h5>
                      <h5 className="text-secondary-lighter fw-normal">
                        <span className="fa-solid fa-user fs-9 me-2">                        </span>
From 1 to people
                      </h5>
                    </div>
                  </div>
                </div>
              </PhoenixLink>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="hoverbox rounded">
              <PhoenixLink href="/apps/travel-agency/trip/trip-details">
                <PhoenixImage src="/assets/img/trip/5.png" alt="" className="img-fluid" />                <div className="backdrop-faded">
                  <h3 className="text-underline fs-7 fs-lg-6 text-white fw-bold mb-2">
Day out with Luke Skywalker
                  </h3>
                  <h5 className="text-secondary-lighter fw-normal mb-3">
                    <span className="fa-solid fa-map-marker-alt text-primary me-2">                    </span>
Tatooine
                  </h5>
                  <div className="d-sm-flex d-md-block d-lg-flex flex-between-center">
                    <h3 className="text-white fw-bold mb-3 mb-sm-0 mb-md-3 mb-lg-0 fs-7 fs-lg-6">
$ 2,899
                    </h3>
                    <div className="d-flex gap-3">
                      <h5 className="text-secondary-lighter fw-normal">
                        <span className="fa-solid fa-clock fs-9 me-2">                        </span>
3 days
                      </h5>
                      <h5 className="text-secondary-lighter fw-normal">
                        <span className="fa-solid fa-user fs-9 me-2">                        </span>
From 1 to people
                      </h5>
                    </div>
                  </div>
                </div>
              </PhoenixLink>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="hoverbox rounded">
              <PhoenixLink href="/apps/travel-agency/trip/trip-details">
                <PhoenixImage src="/assets/img/trip/6.png" alt="" className="img-fluid" />                <div className="backdrop-faded">
                  <h3 className="text-underline fs-7 fs-lg-6 text-white fw-bold mb-2">
Feed the smelly cat
                  </h3>
                  <h5 className="text-secondary-lighter fw-normal mb-3">
                    <span className="fa-solid fa-map-marker-alt text-primary me-2">                    </span>
New York
                  </h5>
                  <div className="d-sm-flex d-md-block d-lg-flex flex-between-center">
                    <h3 className="text-white fw-bold mb-3 mb-sm-0 mb-md-3 mb-lg-0 fs-7 fs-lg-6">
$ 3,799
                    </h3>
                    <div className="d-flex gap-3">
                      <h5 className="text-secondary-lighter fw-normal">
                        <span className="fa-solid fa-clock fs-9 me-2">                        </span>
4 days
                      </h5>
                      <h5 className="text-secondary-lighter fw-normal">
                        <span className="fa-solid fa-user fs-9 me-2">                        </span>
From 1 to people
                      </h5>
                    </div>
                  </div>
                </div>
              </PhoenixLink>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="hoverbox rounded">
              <PhoenixLink href="/apps/travel-agency/trip/trip-details">
                <PhoenixImage src="/assets/img/trip/7.png" alt="" className="img-fluid" />                <div className="backdrop-faded">
                  <h3 className="text-underline fs-7 fs-lg-6 text-white fw-bold mb-2">
Stormtrooper for a day
                  </h3>
                  <h5 className="text-secondary-lighter fw-normal mb-3">
                    <span className="fa-solid fa-map-marker-alt text-primary me-2">                    </span>
The Death Star
                  </h5>
                  <div className="d-sm-flex d-md-block d-lg-flex flex-between-center">
                    <h3 className="text-white fw-bold mb-3 mb-sm-0 mb-md-3 mb-lg-0 fs-7 fs-lg-6">
$ 2,899
                    </h3>
                    <div className="d-flex gap-3">
                      <h5 className="text-secondary-lighter fw-normal">
                        <span className="fa-solid fa-clock fs-9 me-2">                        </span>
3 days
                      </h5>
                      <h5 className="text-secondary-lighter fw-normal">
                        <span className="fa-solid fa-user fs-9 me-2">                        </span>
From 1 to people
                      </h5>
                    </div>
                  </div>
                </div>
              </PhoenixLink>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="hoverbox rounded">
              <PhoenixLink href="/apps/travel-agency/trip/trip-details">
                <PhoenixImage src="/assets/img/trip/8.png" alt="" className="img-fluid" />                <div className="backdrop-faded">
                  <h3 className="text-underline fs-7 fs-lg-6 text-white fw-bold mb-2">
Walk where the king walked
                  </h3>
                  <h5 className="text-secondary-lighter fw-normal mb-3">
                    <span className="fa-solid fa-map-marker-alt text-primary me-2">                    </span>
Wakanda
                  </h5>
                  <div className="d-sm-flex d-md-block d-lg-flex flex-between-center">
                    <h3 className="text-white fw-bold mb-3 mb-sm-0 mb-md-3 mb-lg-0 fs-7 fs-lg-6">
$ 5,999
                    </h3>
                    <div className="d-flex gap-3">
                      <h5 className="text-secondary-lighter fw-normal">
                        <span className="fa-solid fa-clock fs-9 me-2">                        </span>
3 days
                      </h5>
                      <h5 className="text-secondary-lighter fw-normal">
                        <span className="fa-solid fa-user fs-9 me-2">                        </span>
From 1 to people
                      </h5>
                    </div>
                  </div>
                </div>
              </PhoenixLink>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="hoverbox rounded">
              <PhoenixLink href="/apps/travel-agency/trip/trip-details">
                <PhoenixImage src="/assets/img/trip/9.png" alt="" className="img-fluid" />                <div className="backdrop-faded">
                  <h3 className="text-underline fs-7 fs-lg-6 text-white fw-bold mb-2">
Petting the ghost
                  </h3>
                  <h5 className="text-secondary-lighter fw-normal mb-3">
                    <span className="fa-solid fa-map-marker-alt text-primary me-2">                    </span>
Winterfell
                  </h5>
                  <div className="d-sm-flex d-md-block d-lg-flex flex-between-center">
                    <h3 className="text-white fw-bold mb-3 mb-sm-0 mb-md-3 mb-lg-0 fs-7 fs-lg-6">
$ 2,999
                    </h3>
                    <div className="d-flex gap-3">
                      <h5 className="text-secondary-lighter fw-normal">
                        <span className="fa-solid fa-clock fs-9 me-2">                        </span>
3 days
                      </h5>
                      <h5 className="text-secondary-lighter fw-normal">
                        <span className="fa-solid fa-user fs-9 me-2">                        </span>
From 1 to people
                      </h5>
                    </div>
                  </div>
                </div>
              </PhoenixLink>
            </div>
          </div>
        </div>
        <div className="mt-5 position-relative text-center">
          <hr className="m-0 position-absolute top-50 translate-middle-y w-100" />
          <button className="btn btn-phoenix-secondary rounded-pill position-relative">
Show more
          </button>
        </div>
      </div>
    </section>



    <div className="offcanvas offcanvas-end" tabIndex={-1} id="tripFilterOffcanvas" aria-labelledby="tripFilterOffcanvasLabel">
      <div className="offcanvas-header p-4 bg-body-highlight">
        <h5 className="mb-0 text-body-highlight" id="tripFilterOffcanvasLabel">
Filter
        </h5>
        <button className="btn btn-close" data-bs-dismiss={"offcanvas"} aria-label="Close">        </button>
      </div>
      <div className="offcanvas-body scrollbar px-4 pt-4 pb-5">
        <h4 className="text-body-highlight mb-4">
Price Range
        </h4>
        <div className="row g-2">
          <div className="col-6">
            <div className="form-icon-container">
              <input className="form-control form-icon-input" type="text" placeholder="Minimum amount: $245" />
              <span className="fa-solid fa-dollar-sign form-icon text-body-tertiary fs-9">              </span>
            </div>
          </div>
          <div className="col-6">
            <div className="form-icon-container">
              <input className="form-control form-icon-input" type="text" placeholder="Maximum amount: $245" />
              <span className="fa-solid fa-dollar-sign form-icon text-body-tertiary fs-9">              </span>
            </div>
          </div>
        </div>
        <div className="noUi-primary-lighter noUi-slider-large noUi-handle-primary noUi-handle-circle ps-5 pe-3 mt-3" data-nouislider={"{\"range\":{\"min\":0,\"max\":250},\"start\":[20,150],\"connect\":true}"}>        </div>
        <hr className="my-5" />
        <div className="d-lg-none">
          <h4 className="mb-4 text-body-highlight">
Category
          </h4>
          <div className="row g-2">
            <div className="col-6">
              <input className="btn-check trip-filter-checkbox" type="checkbox" name="trip-type" id="attraction-shows-offcanvas" defaultChecked />
              <label className="btn btn-phoenix-secondary text-nowrap px-3 w-100" htmlFor="attraction-shows-offcanvas">
{"Attraction & Shows"}
              </label>
            </div>
            <div className="col-6">
              <input className="btn-check trip-filter-checkbox" type="checkbox" name="trip-type" id="activities-offcanvas" />
              <label className="btn btn-phoenix-secondary text-nowrap px-3 w-100" htmlFor="activities-offcanvas">
Activities
              </label>
            </div>
            <div className="col-6">
              <input className="btn-check trip-filter-checkbox" type="checkbox" name="trip-type" id="day-tours-offcanvas" />
              <label className="btn btn-phoenix-secondary text-nowrap px-3 w-100" htmlFor="day-tours-offcanvas">
Day-tours
              </label>
            </div>
            <div className="col-6">
              <input className="btn-check trip-filter-checkbox" type="checkbox" name="trip-type" id="adventures-offcanvas" />
              <label className="btn btn-phoenix-secondary text-nowrap px-3 w-100" htmlFor="adventures-offcanvas">
Adventures
              </label>
            </div>
            <div className="col-6">
              <input className="btn-check trip-filter-checkbox" type="checkbox" name="trip-type" id="Sight-seeing-offcanvas" />
              <label className="btn btn-phoenix-secondary text-nowrap px-3 w-100" htmlFor="Sight-seeing-offcanvas">
Sight-seeing
              </label>
            </div>
          </div>
          <hr className="my-5" />
        </div>
        <h4 className="mb-4 text-body-highlight">
Duration
        </h4>
        <div className="row g-3">
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="durationLess6" type="checkbox" defaultValue="durationLess6" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="durationLess6">
Less than 6 hours
              </label>
            </div>
            <div className="form-check mb-0">
              <input className="form-check-input" id="duration12to24" type="checkbox" defaultValue="duration12to24" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="duration12to24">
12 - 24 hours
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="duration6to12" type="checkbox" defaultValue="duration6to12" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="duration6to12">
6 - 12 hours
              </label>
            </div>
            <div className="form-check mb-0">
              <input className="form-check-input" id="duration24plus" type="checkbox" defaultValue="duration24plus" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="duration24plus">
24+ hours
              </label>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <h4 className="mb-4 text-body-highlight">
Time
        </h4>
        <div className="row g-2">
          <div className="col-4">
            <input className="btn-check flight-filter-checkbox" type="checkbox" name="undefined" id="duration8AMTo10AM" />
            <label className="btn btn-phoenix-secondary text-nowrap w-100 px-0" htmlFor="duration8AMTo10AM">
8 AM - 10 AM
            </label>
          </div>
          <div className="col-4">
            <input className="btn-check flight-filter-checkbox" type="checkbox" name="undefined" id="duration10AMTo12PM" />
            <label className="btn btn-phoenix-secondary text-nowrap w-100 px-0" htmlFor="duration10AMTo12PM">
10 AM - 12 PM
            </label>
          </div>
          <div className="col-4">
            <input className="btn-check flight-filter-checkbox" type="checkbox" name="undefined" id="duration12PMTo2PM" />
            <label className="btn btn-phoenix-secondary text-nowrap w-100 px-0" htmlFor="duration12PMTo2PM">
12 PM - 2 PM
            </label>
          </div>
          <div className="col-4">
            <input className="btn-check flight-filter-checkbox" type="checkbox" name="undefined" id="duration2PMTo4PM" />
            <label className="btn btn-phoenix-secondary text-nowrap w-100 px-0" htmlFor="duration2PMTo4PM">
2 PM - 4 PM
            </label>
          </div>
          <div className="col-4">
            <input className="btn-check flight-filter-checkbox" type="checkbox" name="undefined" id="duration4PMTo6PM" />
            <label className="btn btn-phoenix-secondary text-nowrap w-100 px-0" htmlFor="duration4PMTo6PM">
4 PM - 6 PM
            </label>
          </div>
          <div className="col-4">
            <input className="btn-check flight-filter-checkbox" type="checkbox" name="undefined" id="duration6PMTo8PM" />
            <label className="btn btn-phoenix-secondary text-nowrap w-100 px-0" htmlFor="duration6PMTo8PM">
6 PM - 8 PM
            </label>
          </div>
        </div>
        <hr className="my-5" />
        <h4 className="mb-4 text-body-highlight">
Travel Style
        </h4>
        <div className="row g-3">
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="soloTravel" type="checkbox" defaultValue="soloTravel" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="soloTravel">
Solo Travel
              </label>
            </div>
            <div className="form-check mb-0">
              <input className="form-check-input" id="familyFriendly" type="checkbox" defaultValue="familyFriendly" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="familyFriendly">
Family-Friendly
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="groupTravel" type="checkbox" defaultValue="groupTravel" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="groupTravel">
Group Travel
              </label>
            </div>
            <div className="form-check mb-0">
              <input className="form-check-input" id="adventureTravel" type="checkbox" defaultValue="adventureTravel" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="adventureTravel">
Adventure Travel
              </label>
            </div>
          </div>
        </div>
        <a href="#!" className="fw-bold fs-9 mt-3 d-inline-block">
Show more items
        </a>
        <hr className="my-5" />
        <h4 className="mb-4">
Tags
        </h4>
        <h5 className="fw-normal my-3 text-body-quaternary">
Destination Type
        </h5>
        <div className="row gx-3">
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="beach" type="checkbox" defaultValue="beach" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="beach">
Beach
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="mountain" type="checkbox" defaultValue="mountain" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="mountain">
Mountain
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="city" type="checkbox" defaultValue="city" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="city">
City
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="countryside" type="checkbox" defaultValue="countryside" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="countryside">
Countryside
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="island" type="checkbox" defaultValue="island" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="island">
Island
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="jungle" type="checkbox" defaultValue="jungle" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="jungle">
Jungle
              </label>
            </div>
          </div>
        </div>
        <h5 className="fw-normal my-3 text-body-quaternary">
Activities
        </h5>
        <div className="row gx-3">
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="hiking" type="checkbox" defaultValue="hiking" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="hiking">
Hiking
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="camping" type="checkbox" defaultValue="camping" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="camping">
Camping
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="sightseeing" type="checkbox" defaultValue="sightseeing" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="sightseeing">
Sightseeing
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="wildlifeViewing" type="checkbox" defaultValue="wildlifeViewing" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="wildlifeViewing">
Wildlife Viewing
              </label>
            </div>
          </div>
        </div>
        <h5 className="fw-normal my-3 text-body-quaternary">
Season
        </h5>
        <div className="row gx-3">
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="summer" type="checkbox" defaultValue="summer" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="summer">
Summer
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="winter" type="checkbox" defaultValue="winter" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="winter">
Winter
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="spring" type="checkbox" defaultValue="spring" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="spring">
Spring
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="fallAutumn" type="checkbox" defaultValue="fallAutumn" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="fallAutumn">
Fall/Autumn
              </label>
            </div>
          </div>
        </div>
        <h5 className="fw-normal my-3 text-body-quaternary">
Budget
        </h5>
        <div className="row gx-3">
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="luxury" type="checkbox" defaultValue="luxury" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="luxury">
Luxury
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="midRange" type="checkbox" defaultValue="midRange" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="midRange">
Mid-range
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="budget" type="checkbox" defaultValue="budget" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="budget">
Budget
              </label>
            </div>
          </div>
        </div>
        <h5 className="fw-normal my-3 text-body-quaternary">
Accommodation
        </h5>
        <div className="row gx-3">
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="hotel" type="checkbox" defaultValue="hotel" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="hotel">
Hotel
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="resort" type="checkbox" defaultValue="resort" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="resort">
Resort
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="vacationRental" type="checkbox" defaultValue="vacationRental" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="vacationRental">
Vacation Rental
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="homestay" type="checkbox" defaultValue="homestay" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="homestay">
Homestay
              </label>
            </div>
          </div>
        </div>
        <a href="#!" className="fw-bold fs-9 mt-3 d-inline-block">
Less items
        </a>
      </div>
      <div className="p-4 border-top border-translucent d-flex gap-2">
        <button className="btn btn-lg btn-phoenix-primary">
          <span className="fa-solid fa-arrows-rotate me-2 fs-9">          </span>
Reset
        </button>
        <button className="btn btn-lg btn-primary flex-1">
          <span className="fa-solid fa-search me-2 fs-9">          </span>
Update result
        </button>
      </div>
    </div>



    <section className="py-6">
      <div className="container-medium">
        <div className="bg-holder overlay bg-opacity-75" style={{"backgroundImage":"url(../../../assets/img/bg/47.png)","backgroundPosition":"center","backgroundSize":"cover"} as CSSProperties}>        </div>
        <div className="row position-relative align-items-center gy-3">
          <div className="col-xxl-4 order-1 order-xxl-0">
            <ul className="list-unstyled d-flex gap-3 gap-xxl-4 flex-wrap mb-0 justify-content-center justify-content-xxl-start">
              <li>
                <a href="#!" className="text-secondary-lighter">
Home
                </a>
              </li>
              <li>
                <a href="#!" className="text-secondary-lighter">
Terms
                </a>
              </li>
              <li>
                <a href="#!" className="text-secondary-lighter">
{"Talent & culture"}
                </a>
              </li>
              <li>
                <a href="#!" className="text-secondary-lighter">
Destination
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-8 col-md-7 col-lg-5 col-xl-4 mx-auto mb-3 mb-xxl-0">
            <h2 className="mb-4 fw-semibold text-white text-center lh-sm">
Subscribe to get notified about the latest news
            </h2>
            <div className="d-flex gap-2">
              <div className="form-icon-container flex-1">
                <input className="form-control form-icon-input" type="text" placeholder="Your email address" />
                <span className="fa-solid fa-envelope form-icon text-body fs-9">                </span>
              </div>
              <button className="btn btn-primary rounded">
Sign up
              </button>
            </div>
          </div>
          <div className="col-xxl-4 order-2 order-xxl-0">
            <ul className="list-unstyled d-flex gap-3 gap-xxl-4 flex-wrap mb-0 justify-content-center justify-content-xxl-end">
              <li>
                <a href="#!" className="text-secondary-lighter">
Refund policy
                </a>
              </li>
              <li>
                <a href="#!" className="text-secondary-lighter">
Sitemap
                </a>
              </li>
              <li>
                <a href="#!" className="text-secondary-lighter">
EMI Policy
                </a>
              </li>
              <li>
                <a href="#!" className="text-secondary-lighter">
Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>



    <div className="container-medium">
      <div className="d-flex align-items-center justify-content-between mt-4 mb-3">
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
