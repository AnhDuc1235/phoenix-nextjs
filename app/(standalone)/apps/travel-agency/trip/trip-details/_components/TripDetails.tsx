'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function TripDetails() {
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
            <PhoenixLink href="/apps/travel-agency/trip/homepage" className="nav-link px-3 ps-0 ">
Homepage
            </PhoenixLink>
          </li>
          <li className="nav-item" data-nav-item>
            <PhoenixLink href="/apps/travel-agency/trip/trip-details" className="nav-link px-3  text-primary">
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



    <section className="py-5">
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
Trip Details
        </h2>
        <h1 className="fw-bold">
Walk where the king walked once in Wakanda 
          <span className="align-middle text-nowrap fs-8">
            <span className="text-body-quaternary">
by 
            </span>
            <span className="text-body-tertiary">
Panther Travels Limited
            </span>
          </span>
        </h1>
        <hr className="bg-secondary-lighter" />
        <div className="d-flex align-items-center flex-wrap gap-3">
          <h2 className="me-3">
$300 
            <span className="fs-8 fw-semibold text-body-tertiary align-middle">
/ per person
            </span>
          </h2>
          <div className="me-3">
            <span className="fa fa-star text-warning me-1 fs-9">            </span>
            <span className="fa fa-star text-warning me-1 fs-9">            </span>
            <span className="fa fa-star text-warning me-1 fs-9">            </span>
            <span className="fa fa-star text-warning me-1 fs-9">            </span>
            <span className="fa fa-star text-warning me-1 fs-9">            </span>
            <span className="fw-semibold text-body-tertiary">
( 32 reviews )
            </span>
          </div>
          <h5 className="fw-semibold text-body-tertiary me-3">
            <span className="p-2 d-inline-flex bg-danger-subtle rounded-pill me-2">
              <span className="fa-solid fa-heart fs-9 text-danger-light" data-fa-transform={"down-1"}>              </span>
            </span>
Recommended by 25 travellers
          </h5>
          <button className="btn btn-primary ms-md-auto" type="button" data-bs-toggle={"modal"} data-bs-target={"#trilAvailabilityModal"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
Check availability
          </button>
        </div>
        <div className="p-4 bg-body-highlight rounded-2 mt-3 mb-5">
          <div className="row gy-4">
            <div className="col-md-4 col-lg-3 border-end-md">
              <h6 className="text-body fw-semibold mb-2">
                <span className="fa-solid fa-map-marker-alt me-2">                </span>
Birnin Zana, Wakanda
              </h6>
              <h6 className="text-body fw-semibold mb-2">
                <span className="fa-solid fa-clock me-2">                </span>
3 Days, 1 Night
              </h6>
              <h6 className="text-body fw-semibold mb-4">
                <span className="fa-solid fa-user me-2">                </span>
From 1 to 12 people
              </h6>
              <a href="#!" className="badge badge-phoenix badge-phoenix-secondary me-2">
Sightseeing
              </a>
              <a href="#!" className="badge badge-phoenix badge-phoenix-secondary">
Eco-tourism
              </a>
            </div>
            <div className="col-md-8 col-lg-9 ps-lg-7">
              <h4 className="text-body mb-3">
Overview
              </h4>
              <p className="mb-0">
A private guide will allow you to fully experience Wakanda's native culture without having to worry about getting lost. Set out on a full-day tour that concentrates on off-the-beaten-path sites like the active wholesale markets for produce and seafood. The old-fashioned way to get around is via rickshaw...
                <a href="#!">
Read more
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="row g-2 g-md-3">
          <div className="col-md-6">
            <div className="swiper-theme-container rounded-2 overflow-hidden">
              <div className="swiper swiper theme-slider" data-swiper={"{\"slidesPerView\":1,\"loop\":true,\"autoplay\":true,\"pagination\":{\"el\":\".swiper-pagination\",\"clickable\":true}}"}>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <PhoenixImage src="/assets/img/trip/10.png" alt="" className="w-100 h-100 object-fit-cover" />
                  </div>
                  <div className="swiper-slide">
                    <PhoenixImage src="/assets/img/trip/17.png" alt="" className="w-100 h-100 object-fit-cover" />
                  </div>
                  <div className="swiper-slide">
                    <PhoenixImage src="/assets/img/trip/18.png" alt="" className="w-100 h-100 object-fit-cover" />
                  </div>
                </div>
              </div>
              <div className="swiper-pagination">              </div>
              <div className="swiper-nav swiper-nav-inside">
                <div className="swiper-button-next bg-transparent border-0 text-white">
                  <span className="fas fa-chevron-right nav-icon">                  </span>
                </div>
                <div className="swiper-button-prev bg-transparent border-0 text-white">
                  <span className="fas fa-chevron-left nav-icon">                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-2 g-md-3">
              <div className="col-4">
                <PhoenixLink href="/assets/img/trip/11.jpg" data-gallery={"trip-details-gallery"}>
                  <PhoenixImage src="/assets/img/trip/19.png" alt="" className="img-fluid rounded-2" />
                </PhoenixLink>
              </div>
              <div className="col-4">
                <PhoenixLink href="/assets/img/trip/12.jpg" data-gallery={"trip-details-gallery"}>
                  <PhoenixImage src="/assets/img/trip/20.png" alt="" className="img-fluid rounded-2" />
                </PhoenixLink>
              </div>
              <div className="col-4">
                <PhoenixLink href="/assets/img/trip/13.jpg" data-gallery={"trip-details-gallery"}>
                  <PhoenixImage src="/assets/img/trip/21.png" alt="" className="img-fluid rounded-2" />
                </PhoenixLink>
              </div>
              <div className="col-4">
                <PhoenixLink href="/assets/img/trip/14.jpg" data-gallery={"trip-details-gallery"}>
                  <PhoenixImage src="/assets/img/trip/22.png" alt="" className="img-fluid rounded-2" />
                </PhoenixLink>
              </div>
              <div className="col-4">
                <PhoenixLink href="/assets/img/trip/15.jpg" data-gallery={"trip-details-gallery"}>
                  <PhoenixImage src="/assets/img/trip/23.png" alt="" className="img-fluid rounded-2" />
                </PhoenixLink>
              </div>
              <div className="col-4">
                <div className="position-relative rounded-2 overflow-hidden">
                  <PhoenixLink href="/assets/img/trip/16.jpg" data-gallery={"trip-details-gallery"}>
                    <PhoenixImage src="/assets/img/trip/24.png" alt="" className="img-fluid" height={43} />
                  </PhoenixLink>
                  <div className="position-absolute w-100 h-100 left-0 top-0 d-flex flex-center bg-black bg-opacity-50">
                    <PhoenixLink href="/apps/travel-agency/hotel/customer/gallery" className="text-white stretched-link fs-7 fs-lg-5 fw-bolder">
24+
                    </PhoenixLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="nav nav-pills flex-nowrap my-5" role="tablist">
          <li className="nav-item">
            <button className="nav-link" id="pills-details-tab" data-bs-toggle={"pill"} data-bs-target={"#pills-details"} type="button" role="tab" aria-controls="pills-details" aria-selected="true">
Details
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" id="pills-review-tab" data-bs-toggle={"pill"} data-bs-target={"#pills-review"} type="button" role="tab" aria-controls="pills-review" aria-selected="true">
Review
            </button>
          </li>
        </ul>
        <div className="tab-content" id="trip-details-tab-content">
          <div className="tab-pane fade show active" id="pills-details" role="tabpanel" aria-labelledby="pills-details-tab" tabIndex={0}>
            <div className="row justify-content-between gx-0 gy-5">
              <div className="col-xl-7">
                <a href="#collapseWhatToExpect" className="btn px-4 py-3 py-sm-4 d-flex flex-between-center collapse-indicator bg-body-highlight" data-bs-toggle={"collapse"}  role="button" aria-expanded="true" aria-controls="collapseWhatToExpect">
                  <h4 className="fs-8 fs-sm-7 mb-0 text-body-highlight">
What to expect
                  </h4>                  <span className="fa-solid fa-chevron-down toggle-icon">                  </span>
                </a>
                <div className="collapse show" id="collapseWhatToExpect">
                  <div className="py-6 px-4">
                    <div className="mb-5">
                      <div className="d-flex align-items-center gap-2">
                        <span className="bg-secondary rounded-pill d-flex flex-center text-white" style={{"width":"27px","height":"27px"} as CSSProperties}>
1
                        </span>
                        <h5 className="text-body-highlight mb-0">
Breakfast in Birnin Zana
                        </h5>
                      </div>
                      <p className="my-2">
Enjoy the traditional Wakandan bread and butter, along with the sweet aroma of freshly baked cakes, beside the large streets of Birnin Zana.
                      </p>
                      <div className="d-flex gap-3 gap-xl-4 flex-wrap">
                        <h5 className="text-body-highlight fw-semibold mb-0">
                          <span className="fa-solid fa-clock text-body-quaternary me-2">                          </span>
Duration : 
                          <span className="text-body-tertiary fw-normal">
30 min
                          </span>
                        </h5>
                        <h5 className="text-body-highlight fw-semibold mb-0">
                          <span className="fa-solid fa-map-marker-alt text-body-quaternary me-2">                          </span>
Location : 
                          <span className="text-body-tertiary fw-normal">
Royal street, Birnin Zana
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="mb-5">
                      <div className="d-flex align-items-center gap-2">
                        <span className="bg-secondary rounded-pill d-flex flex-center text-white" style={{"width":"27px","height":"27px"} as CSSProperties}>
2
                        </span>
                        <h5 className="text-body-highlight mb-0">
Safari at the Alkama fields
                        </h5>
                      </div>
                      <p className="my-2">
Observe the Wakandan wildlife in its natural habitat in the savanna of Alkama.
                      </p>
                      <div className="d-flex gap-3 gap-xl-4 flex-wrap">
                        <h5 className="text-body-highlight fw-semibold mb-0">
                          <span className="fa-solid fa-clock text-body-quaternary me-2">                          </span>
Duration : 
                          <span className="text-body-tertiary fw-normal">
2 hours
                          </span>
                        </h5>
                        <h5 className="text-body-highlight fw-semibold mb-0">
                          <span className="fa-solid fa-map-marker-alt text-body-quaternary me-2">                          </span>
Location : 
                          <span className="text-body-tertiary fw-normal">
Zone 23, Alkama
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="mb-5">
                      <div className="d-flex align-items-center gap-2">
                        <span className="bg-secondary rounded-pill d-flex flex-center text-white" style={{"width":"27px","height":"27px"} as CSSProperties}>
3
                        </span>
                        <h5 className="text-body-highlight mb-0">
Jabari tribe habitats
                        </h5>
                      </div>
                      <p className="my-2">
See the colorful lifestyle of the people from the Jabari tribe. Interact with the locals, visit their shops, and buy famous traditional Jabari articles of clothing. 
                      </p>
                      <div className="d-flex gap-3 gap-xl-4 flex-wrap">
                        <h5 className="text-body-highlight fw-semibold mb-0">
                          <span className="fa-solid fa-clock text-body-quaternary me-2">                          </span>
Duration : 
                          <span className="text-body-tertiary fw-normal">
1 hour
                          </span>
                        </h5>
                        <h5 className="text-body-highlight fw-semibold mb-0">
                          <span className="fa-solid fa-map-marker-alt text-body-quaternary me-2">                          </span>
Location : 
                          <span className="text-body-tertiary fw-normal">
Jabariland
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="mb-5">
                      <div className="d-flex align-items-center gap-2">
                        <span className="bg-secondary rounded-pill d-flex flex-center text-white" style={{"width":"27px","height":"27px"} as CSSProperties}>
4
                        </span>
                        <h5 className="text-body-highlight mb-0">
King T’Challa’s memorial
                        </h5>
                      </div>
                      <p className="my-2">
Visit the tomb of the greatest king of Wakanda, King T'Challa, the black panther.
                      </p>
                      <div className="d-flex gap-3 gap-xl-4 flex-wrap">
                        <h5 className="text-body-highlight fw-semibold mb-0">
                          <span className="fa-solid fa-clock text-body-quaternary me-2">                          </span>
Duration : 
                          <span className="text-body-tertiary fw-normal">
1 hour
                          </span>
                        </h5>
                        <h5 className="text-body-highlight fw-semibold mb-0">
                          <span className="fa-solid fa-map-marker-alt text-body-quaternary me-2">                          </span>
Location : 
                          <span className="text-body-tertiary fw-normal">
Birnin Bashenga
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="bg-secondary rounded-pill d-flex flex-center text-white" style={{"width":"27px","height":"27px"} as CSSProperties}>
5
                        </span>
                        <h5 className="text-body-highlight mb-0">
Lunch
                        </h5>
                      </div>
                      <p className="my-2">
Have lunch with the authentic cuisine of Wakanda at the mountaintop restaurant of Mena Ngai.
                      </p>
                      <div className="d-flex gap-3 gap-xl-4 flex-wrap">
                        <h5 className="text-body-highlight fw-semibold mb-0">
                          <span className="fa-solid fa-clock text-body-quaternary me-2">                          </span>
Duration : 
                          <span className="text-body-tertiary fw-normal">
1 hour
                          </span>
                        </h5>
                        <h5 className="text-body-highlight fw-semibold mb-0">
                          <span className="fa-solid fa-map-marker-alt text-body-quaternary me-2">                          </span>
Location : 
                          <span className="text-body-tertiary fw-normal">
Vibranium hill top restaurant, the Great Mount
                          </span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#collapseIncluded" className="btn px-4 py-3 py-sm-4 d-flex flex-between-center collapse-indicator bg-body-highlight mt-4" data-bs-toggle={"collapse"}  role="button" aria-expanded="false" aria-controls="collapseIncluded">
                  <h4 className="fs-8 fs-sm-7 mb-0 text-body-highlight">
What are included or excluded
                  </h4>                  <span className="fa-solid fa-chevron-down toggle-icon">                  </span>
                </a>
                <div className="collapse" id="collapseIncluded">
                  <div className="py-6 px-4">
                    <h5 className="mb-3 text-body-highlight">
                      <span className="fa-solid me-2 fa-thumbs-up">                      </span>
Included
                    </h5>
                    <ul className="list-unstyled mb-4">
                      <li className="mb-1 d-flex">
                        <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                        </span>
PhoenixTrip experience brokerage free
                      </li>
                      <li className="mb-1 d-flex">
                        <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                        </span>
Bottled water
                      </li>
                      <li className="mb-1 d-flex">
                        <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                        </span>
Professional guide
                      </li>
                      <li className="mb-1 d-flex">
                        <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                        </span>
Hotel pickup and drop off
                      </li>
                      <li className="mb-1 d-flex">
                        <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                        </span>
Private tour
                      </li>
                    </ul>
                    <h5 className="mb-3 text-body-highlight">
                      <span className="fa-solid me-2 fa-thumbs-down">                      </span>
Excluded
                    </h5>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-1 d-flex">
                        <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                        </span>
Gratuities
                      </li>
                      <li className="mb-1 d-flex">
                        <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                        </span>
Snacks
                      </li>
                      <li className="mb-1 d-flex">
                        <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                        </span>
Air-conditioned vehicle
                      </li>
                    </ul>
                  </div>
                </div>
                <a href="#collapseDeparture" className="btn px-4 py-3 py-sm-4 d-flex flex-between-center collapse-indicator bg-body-highlight mt-4" data-bs-toggle={"collapse"}  role="button" aria-expanded="false" aria-controls="collapseDeparture">
                  <h4 className="fs-8 fs-sm-7 mb-0 text-body-highlight">
Departure and return
                  </h4>                  <span className="fa-solid fa-chevron-down toggle-icon">                  </span>
                </a>
                <div className="collapse" id="collapseDeparture">
                  <div className="py-6 px-4">
                    <div className="card bg-transparent mb-3">
                      <div className="card-body">
                        <h5 className="mb-3">
Departure details
                        </h5>
                        <p className="mb-0">
Traveler pickup is offered. We will pickup you all from your pickup places even it's home or hotel inside Birnin Zana. Hotel pickup is offered. View the hotel list on our checkout page to see if yours is included.
                        </p>
                      </div>
                    </div>
                    <div className="card bg-transparent">
                      <div className="card-body">
                        <h5 className="mb-3">
Return details
                        </h5>
                        <p className="mb-0">
Returns to the original departure point.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#collapseAccessibility" className="btn px-4 py-3 py-sm-4 d-flex flex-between-center collapse-indicator bg-body-highlight mt-4" data-bs-toggle={"collapse"}  role="button" aria-expanded="false" aria-controls="collapseAccessibility">
                  <h4 className="fs-8 fs-sm-7 mb-0 text-body-highlight">
Accessibility
                  </h4>                  <span className="fa-solid fa-chevron-down toggle-icon">                  </span>
                </a>
                <div className="collapse" id="collapseAccessibility">
                  <div className="py-6 px-4">
                    <ul className="list-unstyled">
                      <li className="mb-1 d-flex">
                        <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                        </span>
Infant seats available
                      </li>
                      <li className="mb-1 d-flex">
                        <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                        </span>
Wheelchair accessible
                      </li>
                      <li className="mb-1 d-flex">
                        <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                        </span>
Service animals allowed
                      </li>
                      <li className="mb-1 d-flex">
                        <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                        </span>
Infants must sit on lap
                      </li>
                    </ul>
                    <p>
 If you have questions about accessibility, we’d be happy to help. Just call the number below and reference the product code: 
                      <span className="text-body-emphasis fw-semibold">
74936P4
                      </span>
                    </p>
                    <a href="tel:+1800000000">
+1 800 000 000
                    </a>
                  </div>
                </div>
                <a href="#collapseAdditionalInfo" className="btn px-4 py-3 py-sm-4 d-flex flex-between-center collapse-indicator bg-body-highlight mt-4" data-bs-toggle={"collapse"}  role="button" aria-expanded="false" aria-controls="collapseAdditionalInfo">
                  <h4 className="fs-8 fs-sm-7 mb-0 text-body-highlight">
Additional Information
                  </h4>                  <span className="fa-solid fa-chevron-down toggle-icon">                  </span>
                </a>
                <div className="collapse" id="collapseAdditionalInfo">
                  <div className="py-6 px-4">
                    <ul className="list-unstyled mb-0">
                      <li className="mb-1 d-flex">
                        <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                        </span>
Confirmation will be received at time of booking
                      </li>
                      <li className="mb-1 d-flex">
                        <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                        </span>
Minimum age is 18 years
                      </li>
                      <li className="mb-1 d-flex">
                        <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                        </span>
Infant meals not included
                      </li>
                      <li className="mb-1 d-flex">
                        <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                        </span>
A minimum if 01 people per booking is required
                      </li>
                      <li className="mb-1 d-flex">
                        <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                        </span>
Most travelers can participate
                      </li>
                      <li className="mb-1 d-flex">
                        <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                        </span>
This tour is to explore the city using local transportation like rickshaw , tuktuk, uber.
                      </li>
                      <li className="mb-1 d-flex">
                        <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                        </span>
Woman's need to cover the head during visiting mosque
                      </li>
                      <li className="mb-1 d-flex">
                        <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                        </span>
This is a private tour / activity. Only your group will particiapte.
                      </li>
                    </ul>
                  </div>
                </div>
                <a href="#collapsePolicy" className="btn px-4 py-3 py-sm-4 d-flex flex-between-center collapse-indicator bg-body-highlight mt-4" data-bs-toggle={"collapse"}  role="button" aria-expanded="false" aria-controls="collapsePolicy">
                  <h4 className="fs-8 fs-sm-7 mb-0 text-body-highlight">
Policy
                  </h4>                  <span className="fa-solid fa-chevron-down toggle-icon">                  </span>
                </a>
                <div className="collapse" id="collapsePolicy">
                  <div className="py-6 px-4">
                    <div className="card bg-transparent mb-3">
                      <div className="card-body">
                        <h5 className="mb-3">
Cancellation
                        </h5>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-1 d-flex mb-3">
                            <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                            </span>
To cancel any tour, an email has to be sent to tours@phoenix.com mentioning the tour booking ID and details about the cancellation.
                          </li>
                          <li className="mb-1 d-flex mb-3">
                            <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                            </span>
The time of sending the email will be considered as the time of cancellation.
                          </li>
                          <li className="mb-1 d-flex mb-3">
                            <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                            </span>
The email will be considered as the final application for cancellation. A phone call to the Phoenix hotline number or any other team member of Phoenix will not be considered as a request for cancellation of booking.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card bg-transparent mb-3">
                      <div className="card-body">
                        <h5 className="mb-3">
Refund
                        </h5>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-1 d-flex mb-3">
                            <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                            </span>
The full amount of the tour fee will be refunded if the booking is canceled five (5) days prior to the start of the experience/tour.
                          </li>
                          <li className="mb-1 d-flex mb-3">
                            <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                            </span>
Fifty Percent (50%) of the tour fee will be refunded if the booking is canceled three (3) days prior to the start of the experience/tour.
                          </li>
                          <li className="mb-1 d-flex mb-3">
                            <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                            </span>
No refund will be provided if the booking is canceled less than three (3) days prior to the start of the experience/tour.
                          </li>
                          <li className="mb-1 d-flex mb-3">
                            <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                            </span>
Convenience fee is non-refundable and will be deducted from the paid amount.
                          </li>
                          <li className="mb-1 d-flex mb-3">
                            <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                            </span>
All refunds will be processed within seven (7) working days.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card bg-transparent">
                      <div className="card-body">
                        <h5 className="mb-3">
Child policy
                        </h5>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-1 d-flex mb-3">
                            <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                            </span>
No fee will be needed for children below the age of four (4). No separate seat will be provided in case of transportation and accommodation.
                          </li>
                          <li className="mb-1 d-flex mb-3">
                            <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                            </span>
50% fee must be paid for any child between the age of five (5) and ten (10) years old.
                          </li>
                          <li className="mb-1 d-flex mb-3">
                            <span className="fa-solid fa-circle text-secondary-light me-3 fs-11" data-fa-transform={"down-13 shrink-4"}>                            </span>
Full amount of money must be paid for anyone above ten (10) years old.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="border border-translucent rounded-2" id="mapbox-cluster" style={{"height":"240px"} as CSSProperties}>                </div>
                <h6 className="my-3 py-3 px-2 rounded-2 bg-body-secondary text-center">
Day 1
                </h6>
                <div className="row gx-5 gy-0 position-relative">
                  <div className="bg-holder tour-direction-bg d-none d-sm-block" style={{"backgroundImage":"url(../../../assets/img/bg/bg-41.svg)"} as CSSProperties}>                  </div>
                  <div className="col-sm-6 position-relative">
                    <div className="p-2 rounded-2 bg-body-highlight mb-3 position-relative">
                      <div className="tour-direction-line border-start border-dashed">                      </div>
                      <a href="#collapsePicupPoint" className="btn p-0 d-flex justify-content-between collapse-indicator" data-bs-toggle={"collapse"}  role="button" aria-expanded="true" aria-controls="collapsePicupPoint">
                        <div className="d-flex">
                          <span className="d-inline-flex flex-center rounded-pill border me-2" style={{"minWidth":"23px","height":"23px"} as CSSProperties}>
                            <span className="fa-solid fa-map-marker-alt fs-9">                            </span>
                          </span>
                          <div>
                            <h6 className="mb-2 text-start">
Pickup point
                            </h6>
                            <h6 className="text-start fw-normal text-body-tertiary">
Birnin Zana bus terminal
                            </h6>
                          </div>
                        </div>                        <span className="fa-solid fa-chevron-down toggle-icon" style={{"width":"10px","height":"10px"} as CSSProperties}>                        </span>
                      </a>
                      <div className="collapse show" id="collapsePicupPoint">
                        <h6 className="fw-normal text-body-tertiary pt-3 ps-1">
                          <span className="fa-solid fa-clock text-body-quaternary me-2">                          </span>
10:00 am local time
                        </h6>
                      </div>
                    </div>
                    <div className="p-2 rounded-2 bg-body-highlight d-flex align-items-center gap-2 mb-3 position-relative">
                      <div className="tour-direction-line border-start border-dashed">                      </div>
                      <span className="bg-secondary rounded-pill d-flex flex-center text-white fs-9" style={{"minWidth":"23px","height":"23px"} as CSSProperties}>
1
                      </span>
                      <h6 className="mb-0 text-body-highlight">
Breakfast
                      </h6>
                    </div>
                    <div className="p-2 rounded-2 bg-body-highlight d-flex align-items-center gap-2 mb-3 position-relative">
                      <div className="tour-direction-line border-start border-dashed">                      </div>
                      <span className="bg-secondary rounded-pill d-flex flex-center text-white fs-9" style={{"minWidth":"23px","height":"23px"} as CSSProperties}>
2
                      </span>
                      <h6 className="mb-0 text-body-highlight">
Desert safari
                      </h6>
                    </div>
                    <div className="p-2 rounded-2 bg-body-highlight d-flex align-items-center gap-2 mb-3 position-relative">
                      <div className="tour-direction-line border-start border-dashed d-sm-none">                      </div>
                      <span className="bg-secondary rounded-pill d-flex flex-center text-white fs-9" style={{"minWidth":"23px","height":"23px"} as CSSProperties}>
3
                      </span>
                      <h6 className="mb-0 text-body-highlight">
Jabari tribe habitats
                      </h6>
                    </div>
                  </div>
                  <div className="col-sm-6 position-relative">
                    <div className="p-2 rounded-2 bg-body-highlight d-flex align-items-center gap-2 mb-3 position-relative">
                      <div className="tour-direction-line border-start border-dashed">                      </div>
                      <span className="bg-secondary rounded-pill d-flex flex-center text-white fs-9" style={{"minWidth":"23px","height":"23px"} as CSSProperties}>
4
                      </span>
                      <h6 className="mb-0 text-body-highlight">
King T’Challa’s memorial
                      </h6>
                    </div>
                    <div className="p-2 rounded-2 bg-body-highlight d-flex align-items-center gap-2 mb-3 position-relative">
                      <div className="tour-direction-line border-start border-dashed">                      </div>
                      <span className="bg-secondary rounded-pill d-flex flex-center text-white fs-9" style={{"minWidth":"23px","height":"23px"} as CSSProperties}>
5
                      </span>
                      <h6 className="mb-0 text-body-highlight">
Lunch
                      </h6>
                    </div>
                    <div className="p-2 rounded-2 bg-body-highlight d-flex align-items-center gap-2 mb-3">
                      <span className="d-inline-flex flex-center rounded-pill border me-2" style={{"minWidth":"23px","height":"23px"} as CSSProperties}>
                        <span className="fa-solid fa-map-marker-alt fs-9">                        </span>
                      </span>
                      <h6 className="mb-0 text-body-highlight">
Drop-off point
                      </h6>
                    </div>
                  </div>
                </div>
                <h6 className="mb-0 py-3 px-2 rounded-2 bg-body-secondary text-center">
Tour ends
                </h6>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-review" role="tabpanel" aria-labelledby="pills-review-tab" tabIndex={0}>
            <div className="row align-items-center gy-5">
              <div className="col-xl-5 col-xxl-4">
                <div className="d-flex align-items-center gap-3 flex-wrap">
                  <h3 className="mb-0">
5.0
                  </h3>
                  <div className="pe-3 border-end-sm border-translucent">
                    <span className="fa fa-star text-warning me-1 fs-9">                    </span>
                    <span className="fa fa-star text-warning me-1 fs-9">                    </span>
                    <span className="fa fa-star text-warning me-1 fs-9">                    </span>
                    <span className="fa fa-star text-warning me-1 fs-9">                    </span>
                    <span className="fa fa-star text-warning me-1 fs-9">                    </span>
                    <span className="fw-semibold text-body-tertiary">
( 32 reviews )
                    </span>
                  </div>
                  <span className="badge badge-phoenix badge-phoenix-success border-0 px-3 py-2 fs-8 text-capitalize">
Recommended
                  </span>
                </div>
              </div>
              <div className="col-xl-7 col-xxl-8">
                <div className="d-flex gap-5 gap-md-6 gap-xl-8 gap-xxl-6 flex-wrap">
                  <div className="d-lg-flex d-xl-block d-xxl-flex align-items-center gap-3 ms-xl-auto">
                    <div className="echart-trip-review order-lg-1 order-xl-0 order-xxl-1 mx-auto" style={{"height":"60px","width":"60px"} as CSSProperties} data-options={"{\"series\":[{\"data\":[{\"value\":24}]}]}"}>                    </div>
                    <h5 className="mb-0 mt-2 mt-lg-0 mt-xl-2 mt-xxl-0 text-center">
Excellent
                    </h5>
                  </div>
                  <div className="d-lg-flex d-xl-block d-xxl-flex align-items-center gap-3">
                    <div className="echart-trip-review order-lg-1 order-xl-0 order-xxl-1 mx-auto" style={{"height":"60px","width":"60px"} as CSSProperties} data-options={"{\"series\":[{\"data\":[{\"value\":8}]}]}"}>                    </div>
                    <h5 className="mb-0 mt-2 mt-lg-0 mt-xl-2 mt-xxl-0 text-center">
Very good
                    </h5>
                  </div>
                  <div className="d-lg-flex d-xl-block d-xxl-flex align-items-center gap-3">
                    <div className="echart-trip-review order-lg-1 order-xl-0 order-xxl-1 mx-auto" style={{"height":"60px","width":"60px"} as CSSProperties} data-options={"{\"series\":[{\"data\":[{\"value\":0}]}]}"}>                    </div>
                    <h5 className="mb-0 mt-2 mt-lg-0 mt-xl-2 mt-xxl-0 text-center">
Average
                    </h5>
                  </div>
                  <div className="d-lg-flex d-xl-block d-xxl-flex align-items-center gap-3">
                    <div className="echart-trip-review order-lg-1 order-xl-0 order-xxl-1 mx-auto" style={{"height":"60px","width":"60px"} as CSSProperties} data-options={"{\"series\":[{\"data\":[{\"value\":0}]}]}"}>                    </div>
                    <h5 className="mb-0 mt-2 mt-lg-0 mt-xl-2 mt-xxl-0 text-center">
Poor
                    </h5>
                  </div>
                  <div className="d-lg-flex d-xl-block d-xxl-flex align-items-center gap-3">
                    <div className="echart-trip-review order-lg-1 order-xl-0 order-xxl-1 mx-auto" style={{"height":"60px","width":"60px"} as CSSProperties} data-options={"{\"series\":[{\"data\":[{\"value\":0}]}]}"}>                    </div>
                    <h5 className="mb-0 mt-2 mt-lg-0 mt-xl-2 mt-xxl-0 text-center">
Terrible
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-phoenix-secondary my-5">
Write a review
            </button>
            <div className="card bg-transparent mb-3">
              <div className="card-body">
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center gap-2 position-relative">
                    <div className="avatar avatar-s ">
                      <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle " />
                    </div>
                    <a href="#!" className="text-body-emphasis fw-semibold stretched-link">
Navina Koothrapali
                    </a>
                  </div>
                  <div className="d-flex gap-2">
                    <h6 className="text-body-tertiary mb-0">
                      <span className="fa-solid fa-thumbs-up text-body-quaternary me-1">                      </span>
35
                    </h6>
                    <h6 className="text-body-tertiary mb-0">
                      <span className="fa-solid fa-thumbs-down text-secondary-light me-1">                      </span>
2
                    </h6>
                  </div>
                </div>
                <div className="d-flex my-3">
                  <span className="fa fa-star text-warning me-1 fs-9">                  </span>
                  <span className="fa fa-star text-warning me-1 fs-9">                  </span>
                  <span className="fa fa-star text-warning me-1 fs-9">                  </span>
                  <span className="fa fa-star text-warning me-1 fs-9">                  </span>
                  <span className="fa fa-star text-warning me-1 fs-9">                  </span>
                </div>
                <h4 className="mb-2">
Memorable day in Wakanda
                </h4>
                <p className="text-body-tertiary">
Oct 2022
                </p>
                <p>
First time here in Wakanda, nice weather but one thing can't miss out was the one day highlight city tour guided by Shuri from Panther Travels. Shuri came in earlier to pick me up at the hotel and we started the tour with a good briefing by him. The activities were packed and the information given to me was clear and useful, really appreciated Shuri's knowledge and care for the tour, which included memorable stories of not only Birnin but also people in Wakanda. Look forward to coming back again! Navina Koothrapali from Hong Kong
                </p>
                <div className="mt-5 border-start border-translucent ps-4">
                  <a href="#!" className="fw-bold">
Panther Travels Limited
                  </a>
                  <span className="ms-1 text-body-quaternary">
replied
                  </span>
                  <p className="mt-2">
Great to have your review on our tour. It's our honor to get a tourist like you. Good luck to you. Hope to see you again.
                  </p>
                </div>
              </div>
            </div>
            <div className="card bg-transparent mb-3">
              <div className="card-body">
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center gap-2 position-relative">
                    <div className="avatar avatar-s ">
                      <PhoenixImage src="/assets/img/team/58.webp" alt="" className="rounded-circle " />
                    </div>
                    <a href="#!" className="text-body-emphasis fw-semibold stretched-link">
Henry Cavill
                    </a>
                  </div>
                  <div className="d-flex gap-2">
                    <h6 className="text-body-tertiary mb-0">
                      <span className="fa-solid fa-thumbs-up text-body-quaternary me-1">                      </span>
24
                    </h6>
                    <h6 className="text-body-tertiary mb-0">
                      <span className="fa-solid fa-thumbs-down text-secondary-light me-1">                      </span>
3
                    </h6>
                  </div>
                </div>
                <div className="d-flex my-3">
                  <span className="fa fa-star text-warning me-1 fs-9">                  </span>
                  <span className="fa fa-star text-warning me-1 fs-9">                  </span>
                  <span className="fa fa-star text-warning me-1 fs-9">                  </span>
                  <span className="fa fa-star text-warning me-1 fs-9">                  </span>
                  <span className="fa fa-star text-warning me-1 fs-9">                  </span>
                </div>
                <h4 className="mb-2">
Unforgettable experience
                </h4>
                <p className="text-body-tertiary">
Oct 2022
                </p>
                <p>
Great tour in beautiful Wakanda. Everything we imagined about Wakanda changed in a day. Kind and lovely people all around. Unforgettable experience.
                </p>
                <div className="d-flex gap-2 flex-wrap">
                  <PhoenixLink href="/assets/img/trip/25_large.jpg" data-gallery={"trip-details-gallery-1"}>
                    <PhoenixImage src="/assets/img/trip/25.png" alt="" className="img-fluid rounded-2" />
                  </PhoenixLink>
                  <PhoenixLink href="/assets/img/trip/26_large.jpg" data-gallery={"trip-details-gallery-1"}>
                    <PhoenixImage src="/assets/img/trip/26.png" alt="" className="img-fluid rounded-2" />
                  </PhoenixLink>
                  <PhoenixLink href="/assets/img/trip/27_large.jpg" data-gallery={"trip-details-gallery-1"}>
                    <PhoenixImage src="/assets/img/trip/27.png" alt="" className="img-fluid rounded-2" />
                  </PhoenixLink>
                  <PhoenixLink href="/assets/img/trip/28_large.jpg" data-gallery={"trip-details-gallery-1"}>
                    <PhoenixImage src="/assets/img/trip/28.png" alt="" className="img-fluid rounded-2" />
                  </PhoenixLink>
                  <PhoenixLink href="/assets/img/trip/29_large.jpg" data-gallery={"trip-details-gallery-1"}>
                    <PhoenixImage src="/assets/img/trip/29.png" alt="" className="img-fluid rounded-2" />
                  </PhoenixLink>
                  <PhoenixLink href="/assets/img/trip/30_large.jpg" data-gallery={"trip-details-gallery-1"}>
                    <PhoenixImage src="/assets/img/trip/30.png" alt="" className="img-fluid rounded-2" />
                  </PhoenixLink>
                </div>
                <div className="mt-5 border-start border-translucent ps-4">
                  <a href="#!" className="fw-bold">
Panther Travels Limited
                  </a>
                  <span className="ms-1 text-body-quaternary">
replied
                  </span>
                  <p className="mt-2">
Thanks for this review. It is a great motivation from you. Hope to see you again in Wakanda. Good luck.
                  </p>
                </div>
              </div>
            </div>
            <div className="card bg-transparent">
              <div className="card-body">
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center gap-2 position-relative">
                    <div className="avatar avatar-s ">
                      <PhoenixImage src="/assets/img/team/60.webp" alt="" className="rounded-circle " />
                    </div>
                    <a href="#!" className="text-body-emphasis fw-semibold stretched-link">
Ibn Batuta
                    </a>
                  </div>
                  <div className="d-flex gap-2">
                    <h6 className="text-body-tertiary mb-0">
                      <span className="fa-solid fa-thumbs-up text-body-quaternary me-1">                      </span>
45
                    </h6>
                    <h6 className="text-body-tertiary mb-0">
                      <span className="fa-solid fa-thumbs-down text-secondary-light me-1">                      </span>
1
                    </h6>
                  </div>
                </div>
                <div className="d-flex my-3">
                  <span className="fa fa-star text-warning me-1 fs-9">                  </span>
                  <span className="fa fa-star text-warning me-1 fs-9">                  </span>
                  <span className="fa fa-star text-warning me-1 fs-9">                  </span>
                  <span className="fa fa-star text-warning me-1 fs-9">                  </span>
                  <span className="fa-regular fa-star text-warning-light me-1 fs-9" data-bs-theme={"light"}>                  </span>
                </div>
                <h4 className="mb-2">
Great 1 day trip which makes you feel as if you've seen the whole of Wakanda
                </h4>
                <p className="text-body-tertiary">
Oct 2022
                </p>
                <p>
I've seen so much in one day thanks to the great guidance of Mehdi, who customized the trip as per how we felt. I recommend this trip and this guide.
                </p>
                <div className="d-flex gap-2 flex-wrap">
                  <PhoenixLink href="/assets/img/trip/31_large.jpg" data-gallery={"trip-details-gallery-2"}>
                    <PhoenixImage src="/assets/img/trip/31.png" alt="" className="img-fluid rounded-2" />
                  </PhoenixLink>
                  <PhoenixLink href="/assets/img/trip/32_large.jpg" data-gallery={"trip-details-gallery-2"}>
                    <PhoenixImage src="/assets/img/trip/32.png" alt="" className="img-fluid rounded-2" />
                  </PhoenixLink>
                  <PhoenixLink href="/assets/img/trip/33_large.jpg" data-gallery={"trip-details-gallery-2"}>
                    <PhoenixImage src="/assets/img/trip/33.png" alt="" className="img-fluid rounded-2" />
                  </PhoenixLink>
                </div>
                <div className="mt-5 border-start border-translucent ps-4">
                  <a href="#!" className="fw-bold">
Panther Travels Limited
                  </a>
                  <span className="ms-1 text-body-quaternary">
replied
                  </span>
                  <p className="mt-2">
Thanks for this review. It is a great motivation from you. Hope to see you again in Wakanda. Good luck.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="mt-5 mb-3">
Similar tours
        </h2>
        <div className="row g-3">
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
      </div>
    </section>





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
