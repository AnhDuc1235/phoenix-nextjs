'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Gallery() {
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
            <PhoenixLink href="/apps/travel-agency/hotel/customer/gallery" className="nav-link px-3  text-primary">
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
Gallery
        </h2>
        <div className="row g-2 g-sm-3">
          <div className="col-md-6">
            <div className="row g-2 g-sm-3">
              <div className="undefined">
                <PhoenixLink href="/assets/img/hotels/84.jpg" data-gallery={"default-gallery"}>
                  <PhoenixImage src="/assets/img/hotels/74.png" alt="" className="img-fluid rounded-2" />
                </PhoenixLink>
              </div>
              <div className="col-6">
                <PhoenixLink href="/assets/img/hotels/85.jpg" data-gallery={"default-gallery"}>
                  <PhoenixImage src="/assets/img/hotels/75.png" alt="" className="img-fluid rounded-2" />
                </PhoenixLink>
              </div>
              <div className="col-6">
                <PhoenixLink href="/assets/img/hotels/86.jpg" data-gallery={"default-gallery"}>
                  <PhoenixImage src="/assets/img/hotels/76.png" alt="" className="img-fluid rounded-2" />
                </PhoenixLink>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="video-container h-100">
              <PhoenixLink href="/assets/video/3.mp4" data-gallery={"default-gallery"}>
                <video className="video w-100 h-100 object-fit-cover overflow-hidden rounded-2" muted data-play-on-hover>
                  <source src="/assets/video/3.mp4" type="video/mp4" />
                </video>                <div className="circle-icon-item position-absolute top-50 start-50 translate-middle bg-body-emphasis rounded-pill bg-opacity-50">
                  <span className="fa-solid fa-video text-body fs-9 fs-sm-8">                  </span>
                </div>
              </PhoenixLink>
            </div>
          </div>
          <div className="col-sm-6">
            <PhoenixLink href="/assets/img/hotels/87.jpg" data-gallery={"default-gallery"}>
              <PhoenixImage src="/assets/img/hotels/78.png" alt="" className="img-fluid rounded-2" />
            </PhoenixLink>
          </div>
          <div className="col-sm-6">
            <PhoenixLink href="/assets/img/hotels/88.jpg" data-gallery={"default-gallery"}>
              <PhoenixImage src="/assets/img/hotels/79.png" alt="" className="img-fluid rounded-2" />
            </PhoenixLink>
          </div>
          <div className="col-md-6">
            <PhoenixLink href="/assets/img/hotels/89.jpg" data-gallery={"default-gallery"}>
              <PhoenixImage src="/assets/img/hotels/80.png" alt="" className="img-fluid rounded-2" />
            </PhoenixLink>
          </div>
          <div className="col-md-6">
            <div className="row g-2 g-sm-3">
              <div className="undefined">
                <PhoenixLink href="/assets/img/hotels/90.jpg" data-gallery={"default-gallery"}>
                  <PhoenixImage src="/assets/img/hotels/81.png" alt="" className="img-fluid rounded-2" />
                </PhoenixLink>
              </div>
              <div className="col-6">
                <PhoenixLink href="/assets/img/hotels/91.jpg" data-gallery={"default-gallery"}>
                  <PhoenixImage src="/assets/img/hotels/82.png" alt="" className="img-fluid rounded-2" />
                </PhoenixLink>
              </div>
              <div className="col-6">
                <PhoenixLink href="/assets/img/hotels/92.jpg" data-gallery={"default-gallery"}>
                  <PhoenixImage src="/assets/img/hotels/83.png" alt="" className="img-fluid rounded-2" />
                </PhoenixLink>
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
