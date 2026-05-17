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
            <PhoenixLink href="/apps/travel-agency/hotel/customer/homepage" className="nav-link px-3 ps-0 text-primary">
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



    <section className="py-0">
      <div className="container-small">
        <nav className="navbar navbar-landing navbar-home navbar-expand py-4 px-0">
          <ul className="navbar-nav mx-auto mt-3 mt-lg-0 gap-2">
            <li className="nav-item">
              <PhoenixLink href="/apps/travel-agency/hotel/customer/homepage" className="nav-link fw-bold rounded-3 active" aria-current="page">
                <span className="me-2 fa-solid fa-hotel">                </span>Hotel
              </PhoenixLink>
            </li>
            <li className="nav-item">
              <PhoenixLink href="/apps/travel-agency/flight/homepage" className="nav-link fw-bold rounded-3" aria-current="page">
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



    <div className="container-medium-md px-0 px-md-3">
      <div className="px-3 py-8 position-relative">
        <div className="bg-holder overlay rounded-md-2" style={{"backgroundImage":"url(../../../../assets/img/bg/42.png)","backgroundPosition":"center","backgroundSize":"cover"} as CSSProperties}>        </div>
        <div className="row gx-0 gy-3 gy-md-0 align-items-center mx-auto p-3 bg-body-emphasis rounded-5 rounded-md-pill position-relative border w-lg-75">
          <div className="col-12 col-md">
            <div className="form-icon-container border-bottom border-bottom-md-0 border-translucent pb-3 pb-md-0">
              <input className="form-control form-icon-input border-0 py-0 shadow-none fs-8" type="text" placeholder="Pick a place" />
              <span className="fa-solid fa-map-marker-alt form-icon text-body-tertiary top-0" data-fa-transform={"down-2"}>              </span>
            </div>
          </div>
          <div className="col-6 col-md">
            <div className="form-icon-container flatpickr-input-container">
              <input className="form-control datetimepicker form-icon-input border-y-0 border-start-0 border-start-md py-0 shadow-none border-translucent fs-8 rounded-0" type="text" placeholder="Pick a date" data-options={"{\"mode\":\"range\",\"dateFormat\":\"d/m/y\",\"disableMobile\":true}"} />
              <span className="fa-solid fa-calendar form-icon top-0 text-body-tertiary" data-fa-transform={"down-2"}>              </span>
            </div>
          </div>
          <div className="col-6 col-md">
            <button className="btn px-3 fs-8 fw-semibold text-body-tertiary" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false" data-bs-auto-close={"outside"}>
              <span className="fa-solid fa-user me-2">              </span>
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
                      <span className="fa-solid fa-minus px-1">                      </span>
                    </button>
                    <input className="form-control border-translucent input-spin-none text-center rounded" id="adults" type="number" defaultValue="2" />
                    <button className="btn btn-phoenix-primary px-2 rounded" data-type={"plus"}>
                      <span className="fa-solid fa-plus px-1">                      </span>
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
                      <span className="fa-solid fa-minus px-1">                      </span>
                    </button>
                    <input className="form-control border-translucent input-spin-none text-center rounded" id="infants" type="number" defaultValue="2" />
                    <button className="btn btn-phoenix-primary px-2 rounded" data-type={"plus"}>
                      <span className="fa-solid fa-plus px-1">                      </span>
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
                      <span className="fa-solid fa-minus px-1">                      </span>
                    </button>
                    <input className="form-control border-translucent input-spin-none text-center rounded" id="children" type="number" defaultValue="2" />
                    <button className="btn btn-phoenix-primary px-2 rounded" data-type={"plus"}>
                      <span className="fa-solid fa-plus px-1">                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-auto">
            <button className="btn btn-lg btn-phoenix-primary rounded-pill w-100">
              <span className="fa-solid fa-search me-2">              </span>
Search
            </button>
          </div>
        </div>
      </div>
    </div>



    <section className="py-0">
      <div className="container-medium">
        <div className="py-6">
          <div className="d-flex">
            <select className="form-select w-sm-auto me-4" id="hotelSort" name="Hotel sort">
              <option>
Sort by
              </option>
              <option>
Best reviewed and lowest price
              </option>
              <option>
Option 1
              </option>
              <option>
Option 2
              </option>
            </select>
            <button className="btn btn-phoenix-secondary text-nowrap px-3 px-md-4 ms-auto me-2">
              <span className="fa-solid fa-map me-md-2">              </span>
              <span className="d-none d-md-inline-block">
Show in map
              </span>
            </button>
            <button className="btn btn-phoenix-secondary text-nowrap px-3" type="button" data-bs-toggle={"offcanvas"} data-bs-target={"#hotelFilterOffcanvas"} aria-controls="hotelFilterOffcanvas">
              <span className="fa-solid fa-filter me-md-2">              </span>
              <span className="d-none d-md-inline-block">
Filters
              </span>
            </button>
          </div>
        </div>
        <div className="row g-3 mb-6">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="hover-actions-trigger mx-auto rounded-3 overflow-hidden">
              <PhoenixImage src="/assets/img/hotels/1.png" alt="" className="img-fluid" />
              <div className="hover-actions top-0 end-0 mt-4 me-4 z-5">
                <button className="btn btn-wish">
                  <span className="far fa-heart" data-fa-transform={"down-1"}>                  </span>
                </button>
              </div>
              <div className="backdrop-faded backdrop-secondary-dark h-100 d-flex flex-column justify-content-end">
                <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-details" className="stretched-link fs-7 text-white fw-bold">
Hotel Palace
                </PhoenixLink>
                <p className="mb-2 text-secondary-lighter">
                  <span className="fa-solid fa-map-marker-alt me-2">                  </span>
Bangkok, Thailand
                </p>
                <div className="d-flex align-items-center gap-3">
                  <span className="badge badge-phoenix badge-phoenix-warning fs-8 fw-normal">
                    <span className="fa-solid fa-star me-1 fs-9" data-fa-transform={"up-1"}>                    </span>
                    <span className="badge-label">
3.8
                    </span>
                  </span>
                  <h4 className="mb-0 text-white fw-bold text-nowrap">
$33.48 
                    <span className="text-secondary-lighter fs-8 fw-normal">
/ night
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="hover-actions-trigger mx-auto rounded-3 overflow-hidden">
              <PhoenixImage src="/assets/img/hotels/2.png" alt="" className="img-fluid" />
              <div className="hover-actions top-0 end-0 mt-4 me-4 z-5">
                <button className="btn btn-wish">
                  <span className="far fa-heart" data-fa-transform={"down-1"}>                  </span>
                </button>
              </div>
              <div className="backdrop-faded backdrop-secondary-dark h-100 d-flex flex-column justify-content-end">
                <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-details" className="stretched-link fs-7 text-white fw-bold">
Silom Furama
                </PhoenixLink>
                <p className="mb-2 text-secondary-lighter">
                  <span className="fa-solid fa-map-marker-alt me-2">                  </span>
Bangkok, Thailand
                </p>
                <div className="d-flex align-items-center gap-3">
                  <span className="badge badge-phoenix badge-phoenix-warning fs-8 fw-normal">
                    <span className="fa-solid fa-star me-1 fs-9" data-fa-transform={"up-1"}>                    </span>
                    <span className="badge-label">
4.0
                    </span>
                  </span>
                  <h4 className="mb-0 text-white fw-bold text-nowrap">
$32.27 
                    <span className="text-secondary-lighter fs-8 fw-normal">
/ night
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="hover-actions-trigger mx-auto rounded-3 overflow-hidden">
              <PhoenixImage src="/assets/img/hotels/3.png" alt="" className="img-fluid" />
              <div className="hover-actions top-0 end-0 mt-4 me-4 z-5">
                <button className="btn btn-wish">
                  <span className="far fa-heart" data-fa-transform={"down-1"}>                  </span>
                </button>
              </div>
              <div className="backdrop-faded backdrop-secondary-dark h-100 d-flex flex-column justify-content-end">
                <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-details" className="stretched-link fs-7 text-white fw-bold">
Hotel Prince Palace
                </PhoenixLink>
                <p className="mb-2 text-secondary-lighter">
                  <span className="fa-solid fa-map-marker-alt me-2">                  </span>
Bangkok, Thailand
                </p>
                <div className="d-flex align-items-center gap-3">
                  <span className="badge badge-phoenix badge-phoenix-warning fs-8 fw-normal">
                    <span className="fa-solid fa-star me-1 fs-9" data-fa-transform={"up-1"}>                    </span>
                    <span className="badge-label">
3.9
                    </span>
                  </span>
                  <h4 className="mb-0 text-white fw-bold text-nowrap">
$38.96 
                    <span className="text-secondary-lighter fs-8 fw-normal">
/ night
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="hover-actions-trigger mx-auto rounded-3 overflow-hidden">
              <PhoenixImage src="/assets/img/hotels/4.png" alt="" className="img-fluid" />
              <div className="hover-actions top-0 end-0 mt-4 me-4 z-5">
                <button className="btn btn-wish">
                  <span className="far fa-heart" data-fa-transform={"down-1"}>                  </span>
                </button>
              </div>
              <div className="backdrop-faded backdrop-secondary-dark h-100 d-flex flex-column justify-content-end">
                <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-details" className="stretched-link fs-7 text-white fw-bold">
Hotel Grandmas Plus
                </PhoenixLink>
                <p className="mb-2 text-secondary-lighter">
                  <span className="fa-solid fa-map-marker-alt me-2">                  </span>
Bali, Indonesia
                </p>
                <div className="d-flex align-items-center gap-3">
                  <span className="badge badge-phoenix badge-phoenix-warning fs-8 fw-normal">
                    <span className="fa-solid fa-star me-1 fs-9" data-fa-transform={"up-1"}>                    </span>
                    <span className="badge-label">
4.5
                    </span>
                  </span>
                  <h4 className="mb-0 text-white fw-bold text-nowrap">
$13.99 
                    <span className="text-secondary-lighter fs-8 fw-normal">
/ night
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="hover-actions-trigger mx-auto rounded-3 overflow-hidden">
              <PhoenixImage src="/assets/img/hotels/5.png" alt="" className="img-fluid" />
              <div className="hover-actions top-0 end-0 mt-4 me-4 z-5">
                <button className="btn btn-wish">
                  <span className="far fa-heart" data-fa-transform={"down-1"}>                  </span>
                </button>
              </div>
              <div className="backdrop-faded backdrop-secondary-dark h-100 d-flex flex-column justify-content-end">
                <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-details" className="stretched-link fs-7 text-white fw-bold">
Hotel Asia Solo
                </PhoenixLink>
                <p className="mb-2 text-secondary-lighter">
                  <span className="fa-solid fa-map-marker-alt me-2">                  </span>
Jawa Tengah, Indonesia
                </p>
                <div className="d-flex align-items-center gap-3">
                  <span className="badge badge-phoenix badge-phoenix-warning fs-8 fw-normal">
                    <span className="fa-solid fa-star me-1 fs-9" data-fa-transform={"up-1"}>                    </span>
                    <span className="badge-label">
3.9
                    </span>
                  </span>
                  <h4 className="mb-0 text-white fw-bold text-nowrap">
$14.66 
                    <span className="text-secondary-lighter fs-8 fw-normal">
/ night
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="hover-actions-trigger mx-auto rounded-3 overflow-hidden">
              <PhoenixImage src="/assets/img/hotels/6.png" alt="" className="img-fluid" />
              <div className="hover-actions top-0 end-0 mt-4 me-4 z-5">
                <button className="btn btn-wish">
                  <span className="far fa-heart" data-fa-transform={"down-1"}>                  </span>
                </button>
              </div>
              <div className="backdrop-faded backdrop-secondary-dark h-100 d-flex flex-column justify-content-end">
                <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-details" className="stretched-link fs-7 text-white fw-bold">
Golden Inn Kuta
                </PhoenixLink>
                <p className="mb-2 text-secondary-lighter">
                  <span className="fa-solid fa-map-marker-alt me-2">                  </span>
Bali, Indonesia
                </p>
                <div className="d-flex align-items-center gap-3">
                  <span className="badge badge-phoenix badge-phoenix-warning fs-8 fw-normal">
                    <span className="fa-solid fa-star me-1 fs-9" data-fa-transform={"up-1"}>                    </span>
                    <span className="badge-label">
4.4
                    </span>
                  </span>
                  <h4 className="mb-0 text-white fw-bold text-nowrap">
$52.91 
                    <span className="text-secondary-lighter fs-8 fw-normal">
/ night
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="hover-actions-trigger mx-auto rounded-3 overflow-hidden">
              <PhoenixImage src="/assets/img/hotels/7.png" alt="" className="img-fluid" />
              <div className="hover-actions top-0 end-0 mt-4 me-4 z-5">
                <button className="btn btn-wish">
                  <span className="far fa-heart" data-fa-transform={"down-1"}>                  </span>
                </button>
              </div>
              <div className="backdrop-faded backdrop-secondary-dark h-100 d-flex flex-column justify-content-end">
                <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-details" className="stretched-link fs-7 text-white fw-bold">
The Shanty House
                </PhoenixLink>
                <p className="mb-2 text-secondary-lighter">
                  <span className="fa-solid fa-map-marker-alt me-2">                  </span>
Bali, Indonesia
                </p>
                <div className="d-flex align-items-center gap-3">
                  <span className="badge badge-phoenix badge-phoenix-warning fs-8 fw-normal">
                    <span className="fa-solid fa-star me-1 fs-9" data-fa-transform={"up-1"}>                    </span>
                    <span className="badge-label">
4.7
                    </span>
                  </span>
                  <h4 className="mb-0 text-white fw-bold text-nowrap">
$87.71 
                    <span className="text-secondary-lighter fs-8 fw-normal">
/ night
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="hover-actions-trigger mx-auto rounded-3 overflow-hidden">
              <PhoenixImage src="/assets/img/hotels/8.png" alt="" className="img-fluid" />
              <div className="hover-actions top-0 end-0 mt-4 me-4 z-5">
                <button className="btn btn-wish">
                  <span className="far fa-heart" data-fa-transform={"down-1"}>                  </span>
                </button>
              </div>
              <div className="backdrop-faded backdrop-secondary-dark h-100 d-flex flex-column justify-content-end">
                <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-details" className="stretched-link fs-7 text-white fw-bold">
Hotel Kiwi International
                </PhoenixLink>
                <p className="mb-2 text-secondary-lighter">
                  <span className="fa-solid fa-map-marker-alt me-2">                  </span>
New Zealand
                </p>
                <div className="d-flex align-items-center gap-3">
                  <span className="badge badge-phoenix badge-phoenix-warning fs-8 fw-normal">
                    <span className="fa-solid fa-star me-1 fs-9" data-fa-transform={"up-1"}>                    </span>
                    <span className="badge-label">
3.7
                    </span>
                  </span>
                  <h4 className="mb-0 text-white fw-bold text-nowrap">
$41.19 
                    <span className="text-secondary-lighter fs-8 fw-normal">
/ night
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="hover-actions-trigger mx-auto rounded-3 overflow-hidden">
              <PhoenixImage src="/assets/img/hotels/9.png" alt="" className="img-fluid" />
              <div className="hover-actions top-0 end-0 mt-4 me-4 z-5">
                <button className="btn btn-wish">
                  <span className="far fa-heart" data-fa-transform={"down-1"}>                  </span>
                </button>
              </div>
              <div className="backdrop-faded backdrop-secondary-dark h-100 d-flex flex-column justify-content-end">
                <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-details" className="stretched-link fs-7 text-white fw-bold">
Residences of the Angel
                </PhoenixLink>
                <p className="mb-2 text-secondary-lighter">
                  <span className="fa-solid fa-map-marker-alt me-2">                  </span>
Locarno, Switzerland
                </p>
                <div className="d-flex align-items-center gap-3">
                  <span className="badge badge-phoenix badge-phoenix-warning fs-8 fw-normal">
                    <span className="fa-solid fa-star me-1 fs-9" data-fa-transform={"up-1"}>                    </span>
                    <span className="badge-label">
4.9
                    </span>
                  </span>
                  <h4 className="mb-0 text-white fw-bold text-nowrap">
$83.41 
                    <span className="text-secondary-lighter fs-8 fw-normal">
/ night
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="hover-actions-trigger mx-auto rounded-3 overflow-hidden">
              <PhoenixImage src="/assets/img/hotels/10.png" alt="" className="img-fluid" />
              <div className="hover-actions top-0 end-0 mt-4 me-4 z-5">
                <button className="btn btn-wish">
                  <span className="far fa-heart" data-fa-transform={"down-1"}>                  </span>
                </button>
              </div>
              <div className="backdrop-faded backdrop-secondary-dark h-100 d-flex flex-column justify-content-end">
                <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-details" className="stretched-link fs-7 text-white fw-bold">
Brenig Kulm's Gasthaus
                </PhoenixLink>
                <p className="mb-2 text-secondary-lighter">
                  <span className="fa-solid fa-map-marker-alt me-2">                  </span>
Meiringen, Switzerland
                </p>
                <div className="d-flex align-items-center gap-3">
                  <span className="badge badge-phoenix badge-phoenix-warning fs-8 fw-normal">
                    <span className="fa-solid fa-star me-1 fs-9" data-fa-transform={"up-1"}>                    </span>
                    <span className="badge-label">
4.2
                    </span>
                  </span>
                  <h4 className="mb-0 text-white fw-bold text-nowrap">
$109.29 
                    <span className="text-secondary-lighter fs-8 fw-normal">
/ night
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="hover-actions-trigger mx-auto rounded-3 overflow-hidden">
              <PhoenixImage src="/assets/img/hotels/11.png" alt="" className="img-fluid" />
              <div className="hover-actions top-0 end-0 mt-4 me-4 z-5">
                <button className="btn btn-wish">
                  <span className="far fa-heart" data-fa-transform={"down-1"}>                  </span>
                </button>
              </div>
              <div className="backdrop-faded backdrop-secondary-dark h-100 d-flex flex-column justify-content-end">
                <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-details" className="stretched-link fs-7 text-white fw-bold">
The Andermatt Chedi
                </PhoenixLink>
                <p className="mb-2 text-secondary-lighter">
                  <span className="fa-solid fa-map-marker-alt me-2">                  </span>
Andermatt, Switzerland
                </p>
                <div className="d-flex align-items-center gap-3">
                  <span className="badge badge-phoenix badge-phoenix-warning fs-8 fw-normal">
                    <span className="fa-solid fa-star me-1 fs-9" data-fa-transform={"up-1"}>                    </span>
                    <span className="badge-label">
4.6
                    </span>
                  </span>
                  <h4 className="mb-0 text-white fw-bold text-nowrap">
$107.25 
                    <span className="text-secondary-lighter fs-8 fw-normal">
/ night
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="hover-actions-trigger mx-auto rounded-3 overflow-hidden">
              <PhoenixImage src="/assets/img/hotels/12.png" alt="" className="img-fluid" />
              <div className="hover-actions top-0 end-0 mt-4 me-4 z-5">
                <button className="btn btn-wish">
                  <span className="far fa-heart" data-fa-transform={"down-1"}>                  </span>
                </button>
              </div>
              <div className="backdrop-faded backdrop-secondary-dark h-100 d-flex flex-column justify-content-end">
                <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-details" className="stretched-link fs-7 text-white fw-bold">
Interlaken Alplodge
                </PhoenixLink>
                <p className="mb-2 text-secondary-lighter">
                  <span className="fa-solid fa-map-marker-alt me-2">                  </span>
Interlaken, Switzerland
                </p>
                <div className="d-flex align-items-center gap-3">
                  <span className="badge badge-phoenix badge-phoenix-warning fs-8 fw-normal">
                    <span className="fa-solid fa-star me-1 fs-9" data-fa-transform={"up-1"}>                    </span>
                    <span className="badge-label">
4.5
                    </span>
                  </span>
                  <h4 className="mb-0 text-white fw-bold text-nowrap">
$120.32 
                    <span className="text-secondary-lighter fs-8 fw-normal">
/ night
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="hover-actions-trigger mx-auto rounded-3 overflow-hidden">
              <PhoenixImage src="/assets/img/hotels/13.png" alt="" className="img-fluid" />
              <div className="hover-actions top-0 end-0 mt-4 me-4 z-5">
                <button className="btn btn-wish">
                  <span className="far fa-heart" data-fa-transform={"down-1"}>                  </span>
                </button>
              </div>
              <div className="backdrop-faded backdrop-secondary-dark h-100 d-flex flex-column justify-content-end">
                <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-details" className="stretched-link fs-7 text-white fw-bold">
Inn at Agus Beach
                </PhoenixLink>
                <p className="mb-2 text-secondary-lighter">
                  <span className="fa-solid fa-map-marker-alt me-2">                  </span>
Bali, Indonesia
                </p>
                <div className="d-flex align-items-center gap-3">
                  <span className="badge badge-phoenix badge-phoenix-warning fs-8 fw-normal">
                    <span className="fa-solid fa-star me-1 fs-9" data-fa-transform={"up-1"}>                    </span>
                    <span className="badge-label">
4.2
                    </span>
                  </span>
                  <h4 className="mb-0 text-white fw-bold text-nowrap">
$25.98 
                    <span className="text-secondary-lighter fs-8 fw-normal">
/ night
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="hover-actions-trigger mx-auto rounded-3 overflow-hidden">
              <PhoenixImage src="/assets/img/hotels/14.png" alt="" className="img-fluid" />
              <div className="hover-actions top-0 end-0 mt-4 me-4 z-5">
                <button className="btn btn-wish">
                  <span className="far fa-heart" data-fa-transform={"down-1"}>                  </span>
                </button>
              </div>
              <div className="backdrop-faded backdrop-secondary-dark h-100 d-flex flex-column justify-content-end">
                <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-details" className="stretched-link fs-7 text-white fw-bold">
Hotel Cahya Nirwana
                </PhoenixLink>
                <p className="mb-2 text-secondary-lighter">
                  <span className="fa-solid fa-map-marker-alt me-2">                  </span>
Jawa Tengah, Indonesia
                </p>
                <div className="d-flex align-items-center gap-3">
                  <span className="badge badge-phoenix badge-phoenix-warning fs-8 fw-normal">
                    <span className="fa-solid fa-star me-1 fs-9" data-fa-transform={"up-1"}>                    </span>
                    <span className="badge-label">
4.1
                    </span>
                  </span>
                  <h4 className="mb-0 text-white fw-bold text-nowrap">
$22.45 
                    <span className="text-secondary-lighter fs-8 fw-normal">
/ night
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="hover-actions-trigger mx-auto rounded-3 overflow-hidden">
              <PhoenixImage src="/assets/img/hotels/15.png" alt="" className="img-fluid" />
              <div className="hover-actions top-0 end-0 mt-4 me-4 z-5">
                <button className="btn btn-wish">
                  <span className="far fa-heart" data-fa-transform={"down-1"}>                  </span>
                </button>
              </div>
              <div className="backdrop-faded backdrop-secondary-dark h-100 d-flex flex-column justify-content-end">
                <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-details" className="stretched-link fs-7 text-white fw-bold">
Villas at Atoll Haven
                </PhoenixLink>
                <p className="mb-2 text-secondary-lighter">
                  <span className="fa-solid fa-map-marker-alt me-2">                  </span>
Bali, Indonesia
                </p>
                <div className="d-flex align-items-center gap-3">
                  <span className="badge badge-phoenix badge-phoenix-warning fs-8 fw-normal">
                    <span className="fa-solid fa-star me-1 fs-9" data-fa-transform={"up-1"}>                    </span>
                    <span className="badge-label">
3.3
                    </span>
                  </span>
                  <h4 className="mb-0 text-white fw-bold text-nowrap">
$145.10 
                    <span className="text-secondary-lighter fs-8 fw-normal">
/ night
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="hover-actions-trigger mx-auto rounded-3 overflow-hidden">
              <PhoenixImage src="/assets/img/hotels/16.png" alt="" className="img-fluid" />
              <div className="hover-actions top-0 end-0 mt-4 me-4 z-5">
                <button className="btn btn-wish">
                  <span className="far fa-heart" data-fa-transform={"down-1"}>                  </span>
                </button>
              </div>
              <div className="backdrop-faded backdrop-secondary-dark h-100 d-flex flex-column justify-content-end">
                <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-details" className="stretched-link fs-7 text-white fw-bold">
The Sanchaya Hotel
                </PhoenixLink>
                <p className="mb-2 text-secondary-lighter">
                  <span className="fa-solid fa-map-marker-alt me-2">                  </span>
Bali, Indonesia
                </p>
                <div className="d-flex align-items-center gap-3">
                  <span className="badge badge-phoenix badge-phoenix-warning fs-8 fw-normal">
                    <span className="fa-solid fa-star me-1 fs-9" data-fa-transform={"up-1"}>                    </span>
                    <span className="badge-label">
4.5
                    </span>
                  </span>
                  <h4 className="mb-0 text-white fw-bold text-nowrap">
$45.22 
                    <span className="text-secondary-lighter fs-8 fw-normal">
/ night
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <div className="offcanvas offcanvas-end" tabIndex={-1} id="hotelFilterOffcanvas" aria-labelledby="hotelFilterOffcanvasLabel">
      <div className="offcanvas-header p-4 bg-body-highlight">
        <h5 className="mb-0 text-body-highlight" id="hotelFilterOffcanvasLabel">
Filter
        </h5>
        <button className="btn btn-close" data-bs-dismiss={"offcanvas"} aria-label="Close">        </button>
      </div>
      <div className="offcanvas-body scrollbar p-4">
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
        <h4 className="mb-4 text-body-highlight">
Amenities
        </h4>
        <p className="text-body-tertiary">
Essentials
        </p>
        <div className="row g-3">
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="wifi" type="checkbox" defaultValue="wifi" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="wifi">
Wifi
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" id="kitchen" type="checkbox" defaultValue="kitchen" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="kitchen">
Kitchen
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" id="air-conditioning" type="checkbox" defaultValue="air-conditioning" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="air-conditioning">
Air conditioning
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="washer" type="checkbox" defaultValue="washer" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="washer">
Washer
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" id="dryer" type="checkbox" defaultValue="dryer" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="dryer">
Dryer
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" id="heating" type="checkbox" defaultValue="heating" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="heating">
Heating
              </label>
            </div>
          </div>
        </div>
        <p className="text-body-tertiary mt-3">
Location
        </p>
        <div className="row g-3">
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="beach-front" type="checkbox" defaultValue="beach-front" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="beach-front">
Beach-front
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" id="near-markets" type="checkbox" defaultValue="near-markets" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="near-markets">
Near markets
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" id="water-front" type="checkbox" defaultValue="water-front" />
              <label className="form-check-label fs-8 text-body-highlight fw-normal" htmlFor="water-front">
Water-front
              </label>
            </div>
          </div>
        </div>
        <a href="#!" className="fw-bold fs-9 mt-3 d-inline-block">
Show more items
        </a>
        <hr className="my-5" />
        <h4 className="mb-4 text-body-highlight">
Number of Private Bathrooms
        </h4>
        <div className="input-group gap-2 w-70 w-sm-50" data-quantity>
          <button className="btn btn-phoenix-primary px-3 rounded" data-type={"minus"}>
            <span className="fa-solid fa-minus">            </span>
          </button>
          <input className="form-control border-translucent input-spin-none text-center rounded" id="private-bathrooms" type="number" defaultValue="2" />
          <button className="btn btn-phoenix-primary px-3 rounded" data-type={"plus"}>
            <span className="fa-solid fa-plus">            </span>
          </button>
        </div>
        <h4 className="mb-4 mt-5 text-body-highlight">
Number of Bedrooms
        </h4>
        <div className="input-group gap-2 w-70 w-sm-50" data-quantity>
          <button className="btn btn-phoenix-primary px-3 rounded" data-type={"minus"}>
            <span className="fa-solid fa-minus">            </span>
          </button>
          <input className="form-control border-translucent input-spin-none text-center rounded" id="bedrooms" type="number" defaultValue="2" />
          <button className="btn btn-phoenix-primary px-3 rounded" data-type={"plus"}>
            <span className="fa-solid fa-plus">            </span>
          </button>
        </div>
        <h4 className="mb-4 mt-5 text-body-highlight">
Number of Beds
        </h4>
        <div className="input-group gap-2 w-70 w-sm-50" data-quantity>
          <button className="btn btn-phoenix-primary px-3 rounded" data-type={"minus"}>
            <span className="fa-solid fa-minus">            </span>
          </button>
          <input className="form-control border-translucent input-spin-none text-center rounded" id="beds" type="number" defaultValue="2" />
          <button className="btn btn-phoenix-primary px-3 rounded" data-type={"plus"}>
            <span className="fa-solid fa-plus">            </span>
          </button>
        </div>
        <hr className="my-5" />
        <h4 className="mb-4">
Rating
        </h4>
        <input className="rating-radio btn-check" type="radio" name="ratingOption" id="option1" autoComplete="off" defaultChecked />
        <label className="btn w-100 d-flex align-items-center gap-1 mb-2" htmlFor="option1">
          <span className="fa-solid fa-star text-warning">          </span>
          <span className="fa-solid fa-star text-warning">          </span>
          <span className="fa-solid fa-star text-warning">          </span>
          <span className="fa-solid fa-star text-warning">          </span>
          <span className="fa-solid fa-star text-warning">          </span>
          <span className="fa-solid fa-check ms-auto text-primary check-icon">          </span>
        </label>
        <input className="rating-radio btn-check" type="radio" name="ratingOption" id="option2" autoComplete="off" />
        <label className="btn w-100 d-flex align-items-center gap-1 mb-2" htmlFor="option2">
          <span className="fa-solid fa-star text-warning">          </span>
          <span className="fa-solid fa-star text-warning">          </span>
          <span className="fa-solid fa-star text-warning">          </span>
          <span className="fa-solid fa-star text-warning">          </span>
          <span className="fa-regular fa-star text-warning">          </span>
          <span className="text-body ms-1 fs-8 fw-normal">
and above
          </span>
          <span className="fa-solid fa-check ms-auto text-primary check-icon">          </span>
        </label>
        <input className="rating-radio btn-check" type="radio" name="ratingOption" id="option3" autoComplete="off" />
        <label className="btn w-100 d-flex align-items-center gap-1 mb-2" htmlFor="option3">
          <span className="fa-solid fa-star text-warning">          </span>
          <span className="fa-solid fa-star text-warning">          </span>
          <span className="fa-solid fa-star text-warning">          </span>
          <span className="fa-regular fa-star text-warning">          </span>
          <span className="fa-regular fa-star text-warning">          </span>
          <span className="text-body ms-1 fs-8 fw-normal">
and above
          </span>
          <span className="fa-solid fa-check ms-auto text-primary check-icon">          </span>
        </label>
        <input className="rating-radio btn-check" type="radio" name="ratingOption" id="option4" autoComplete="off" />
        <label className="btn w-100 d-flex align-items-center gap-1 mb-2" htmlFor="option4">
          <span className="fa-solid fa-star text-warning">          </span>
          <span className="fa-solid fa-star text-warning">          </span>
          <span className="fa-regular fa-star text-warning">          </span>
          <span className="fa-regular fa-star text-warning">          </span>
          <span className="fa-regular fa-star text-warning">          </span>
          <span className="text-body ms-1 fs-8 fw-normal">
and above
          </span>
          <span className="fa-solid fa-check ms-auto text-primary check-icon">          </span>
        </label>
        <input className="rating-radio btn-check" type="radio" name="ratingOption" id="option5" autoComplete="off" />
        <label className="btn w-100 d-flex align-items-center gap-1" htmlFor="option5">
          <span className="fa-solid fa-star text-warning">          </span>
          <span className="fa-regular fa-star text-warning">          </span>
          <span className="fa-regular fa-star text-warning">          </span>
          <span className="fa-regular fa-star text-warning">          </span>
          <span className="fa-regular fa-star text-warning">          </span>
          <span className="text-body ms-1 fs-8 fw-normal">
and above
          </span>
          <span className="fa-solid fa-check ms-auto text-primary check-icon">          </span>
        </label>
      </div>
      <div className="p-4 border-top border-translucent d-flex gap-2">
        <button className="btn btn-lg btn-phoenix-primary">
Reset
        </button>
        <button className="btn btn-lg btn-primary flex-1">
Show 445 items
        </button>
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
