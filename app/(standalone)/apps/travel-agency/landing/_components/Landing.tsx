'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Landing() {
  return (
    <div suppressHydrationWarning>

    <div className="bg-primary-subtle py-2">
      <div className="container-medium d-flex align-items-center justify-content-between">
        <PhoenixLink href="/pages/authentication/card/sign-in" className="btn btn-link p-0 text-body">
          <span className="fa-solid fa-arrow-right-to-bracket me-2" data-fa-transform={"down-1"}>          </span>Agent Login
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
    </div>

    <div className="bg-body-emphasis sticky-top" data-navbar-shadow-on-scroll>
      <nav className="navbar navbar-landing navbar-expand-lg container-medium">
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
          <a href="#!" className="btn btn-link text-body-tertiary p-0 me-2 me-lg-0">
            <span data-feather={"user"} style={{"width":"20px","height":"20px"} as CSSProperties}>            </span>
          </a>
        </div>
        <button className="navbar-toggler fs-8 ps-1 ps-sm-3 pe-0" type="button" data-bs-toggle={"collapse"} data-bs-target={"#navbarSupportedContent"} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mt-3 mt-lg-0">
            <li className="nav-item border-bottom border-translucent border-bottom-lg-0">
              <PhoenixLink href="/apps/travel-agency/hotel/customer/homepage" className="nav-link">
Hotel
              </PhoenixLink>
            </li>
            <li className="nav-item border-bottom border-translucent border-bottom-lg-0">
              <PhoenixLink href="/apps/travel-agency/flight/homepage" className="nav-link">
Flight
              </PhoenixLink>
            </li>
            <li className="nav-item border-bottom border-translucent border-bottom-lg-0">
              <PhoenixLink href="/apps/travel-agency/trip/homepage" className="nav-link">
Trip
              </PhoenixLink>
            </li>
            <li className="nav-item border-bottom border-translucent border-bottom-lg-0">
              <PhoenixLink href="/apps/events/event-detail" className="nav-link">
Event
              </PhoenixLink>
            </li>
            <li className="nav-item border-bottom border-translucent border-bottom-lg-0">
              <a href="#!" className="nav-link">
Package
              </a>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-link">
Trending
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <div className="booking-hero-header d-flex align-items-center">
      <div className="bg-holder bg-holder overlay bg-opacity-50" style={{"backgroundImage":"url(../../assets/video/travel.png)"} as CSSProperties}>
        <video className="bg-video" autoPlay loop muted playsinline>
          <source src="/assets/video/travel.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="container-medium position-relative z-5">
        <h2 className="text-secondary-lighter fs-5 fs-md-3 fw-normal mb-3">
Where is your
        </h2>
        <h1 className="fs-4 fs-md-1 text-white fw-normal mb-6 overflow-hidden">
NEXT 
          <span className="typed-text text-primary" data-typed-text={"[&quot;&lt;span class=text-primary&gt;TRIP!&lt;/span&gt;&quot;,&quot;&lt;span class=text-warning&gt;TOUR?&lt;/span&gt;&quot;, &quot;&lt;span class=text-info&gt;SOJOURN?&lt;/span&gt;&quot;, &quot;&lt;span class=text-success&gt;VACAY?&lt;/span&gt;&quot;]"}>          </span>
        </h1>
        <div className="input-group rounded-2 py-1 ps-2 w-lg-50 border border-light">
          <div className="form-icon-container flex-1 d-flex align-items-center" data-fa-transform={"down-1"}>
            <span className="fa-solid fa-location-dot form-icon text-danger-light">            </span>
            <input className="form-control form-icon-input bg-transparent border-0 outline-none fs-8 fs-md-7 text-secondary-light" type="text" placeholder="Search Destination" />
          </div>
          <div className="dropdown d-flex align-items-center">
            <button className="btn py-0 bg-transparent text-secondary-light fs-8 fs-md-7 fw-semibold border-0 border-start border-light rounded-0" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
Flight
              <span className="fa-solid fa-chevron-down ms-2" data-fa-transform={"down-1 shrink-4"}>              </span>
            </button>
            <div className="dropdown-menu dropdown-menu-end" data-bs-theme={"dark"}>
              <a href="#!" className="dropdown-item">
Flight
              </a>
              <a href="#!" className="dropdown-item">
Trip
              </a>
              <a href="#!" className="dropdown-item">
Hotel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>



    <section className="pt-6 pt-md-10 pb-10">
      <div className="container-medium">
        <div className="bg-holder d-none d-xl-block" style={{"backgroundImage":"url(../../assets/img/bg/bg-left-27.png)","backgroundSize":"auto","backgroundPosition":"left"} as CSSProperties}>        </div>
        <div className="bg-holder d-none d-xl-block" style={{"backgroundImage":"url(../../assets/img/bg/bg-right-27.png)","backgroundSize":"auto","backgroundPosition":"right"} as CSSProperties}>        </div>
        <div className="row g-3 position-relative">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-md-7">
                <h4 className="fw-semibold mb-3">
Season of
                </h4>
                <h2 className="fs-4 fw-semibold mb-3 mb-md-4">
{"Tour & "}
                  <span className="text-primary-light fw-bold">
Travel
                  </span>
                </h2>
                <p className="mb-3 mb-md-0 text-body-tertiary">
This is the perfect season for tours and travels. At Phoenix, you can easily select the best travel option for your next vacation
                  <span className="d-none d-lg-inline-block d-xl-none">
... 
                  </span>
                  <span className="d-lg-none d-xl-inline">
This will help you with the pricing that you’ll need, the accommodation facilities, food and beverages, and water rides.
                  </span>
                </p>
              </div>
              <div className="col-6 col-md-5">
                <div className="img-zoom-hover position-relative h-100 rounded-3 overflow-hidden">
                  <a href="#!">
                    <PhoenixImage src="/assets/img/gallery/35.png" alt="" className="w-100 h-100 object-fit-cover" />
                  </a>
                  <div className="backdrop-faded">
                    <a href="#!" className="fw-bold fs-7 text-white stretched-link">
New Zealand
                    </a>
                    <p className="mb-0 text-white fs-9">
17 Hotels
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-5">
                <div className="img-zoom-hover position-relative h-100 rounded-3 overflow-hidden">
                  <a href="#!">
                    <PhoenixImage src="/assets/img/gallery/36.png" alt="" className="w-100 h-100 object-fit-cover" />
                  </a>
                  <div className="backdrop-faded">
                    <a href="#!" className="fw-bold fs-7 text-white">
London
                    </a>
                    <p className="mb-0 text-white fs-9">
17 Hotels
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="img-zoom-hover position-relative h-100 rounded-3 overflow-hidden">
                  <a href="#!">
                    <PhoenixImage src="/assets/img/gallery/37.png" alt="" className="w-100 h-md-100 object-fit-cover" height={220} />
                  </a>
                  <div className="backdrop-faded">
                    <a href="#!" className="fw-bold fs-7 text-white">
Maui
                    </a>
                    <p className="mb-0 text-white fs-9">
14 Hotels
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-3 h-100">
              <div className="img-zoom-hover position-relative h-100 rounded-3 overflow-hidden">
                <a href="#!">
                  <PhoenixImage src="/assets/img/gallery/38.png" alt="" className="w-100 h-lg-100 object-fit-cover" height={220} />
                </a>
                <div className="backdrop-faded">
                  <a href="#!" className="fw-bold fs-7 text-white">
Bali, Indonesia
                  </a>
                  <p className="mb-0 text-white fs-9">
51 Hotels
                  </p>
                </div>
              </div>
              <button className="btn btn-primary w-100 py-3 fs-8">
Explore more
                <span className="fa-solid fa-chevron-right ms-2" data-fa-transform={"down-2"}>                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="pb-10 pt-0">
      <div className="bg-holder d-none d-md-block" style={{"backgroundImage":"url(../../assets/img/bg/bg-left-28.png)","backgroundSize":"7%","backgroundPosition":"left 27%"} as CSSProperties}>      </div>
      <div className="bg-holder d-none d-md-block" style={{"backgroundImage":"url(../../assets/img/bg/bg-right-28.png)","backgroundSize":"16%","backgroundPosition":"right -25px"} as CSSProperties}>      </div>
      <div className="container-medium text-center mb-11 position-relative">
        <h3 className="mb-2 text-body-emphasis">
Travel more, spend less
        </h3>
        <p className="text-body-tertiary mb-0">
Working with Phoenix means you’ll have all the plans and the perfect price list to help you plan.
        </p>
      </div>
      <div className="container-fluid px-sm-0">
        <div className="swiper-theme-container swiper-slide-nav-top">
          <div className="swiper-nav">
            <div className="swiper-button-next">
              <span className="fas fa-chevron-right text-primary" data-fa-transform={"shrink-3"}>              </span>
            </div>
            <div className="swiper-button-prev">
              <span className="fas fa-chevron-left text-primary" data-fa-transform={"shrink-3"}>              </span>
            </div>
          </div>
          <div className="swiper theme-slider" data-swiper={"{\"loop\":true,\"centeredSlides\":true,\"autoplay\":true,\"centeredSlidesBounds\":true,\"spaceBetween\":16,\"slidesPerView\":1,\"speed\":1500,\"breakpoints\":{\"576\":{\"slidesPerView\":\"auto\"}}}"}>
            <div className="swiper-wrapper">
              <div className="swiper-slide w-sm-auto">
                <a href="#!" className="position-relative rounded-3 overflow-hidden d-block">
                  <PhoenixImage src="/assets/img/gallery/39.png" alt="" className="w-100 w-sm-auto object-fit-cover" height={220} />                  <div className="img-backdrop-faded">
                    <div className="image-reveal-content mb-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="fa-solid fa-hotel text-secondary-lighter">                        </span>
                        <h6 className="mb-0 text-secondary-lighter fw-semibold">
17 Hotels
                        </h6>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="fa-solid fa-tree-city text-secondary-lighter">                        </span>
                        <h6 className="mb-0 text-secondary-lighter fw-semibold">
22 Tour Package
                        </h6>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <PhoenixImage src="/assets/img/country/thailand.png" alt="" />
                      <h4 className="mb-0 text-white">
Thailand
                      </h4>
                    </div>
                  </div>
                </a>
              </div>
              <div className="swiper-slide w-sm-auto">
                <a href="#!" className="position-relative rounded-3 overflow-hidden d-block">
                  <PhoenixImage src="/assets/img/gallery/40.png" alt="" className="w-100 w-sm-auto object-fit-cover" height={220} />                  <div className="img-backdrop-faded">
                    <div className="image-reveal-content mb-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="fa-solid fa-hotel text-secondary-lighter">                        </span>
                        <h6 className="mb-0 text-secondary-lighter fw-semibold">
15 Hotels
                        </h6>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="fa-solid fa-tree-city text-secondary-lighter">                        </span>
                        <h6 className="mb-0 text-secondary-lighter fw-semibold">
24 Tour Package
                        </h6>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <PhoenixImage src="/assets/img/country/switzerland.png" alt="" />
                      <h4 className="mb-0 text-white">
Switzerland
                      </h4>
                    </div>
                  </div>
                </a>
              </div>
              <div className="swiper-slide w-sm-auto">
                <a href="#!" className="position-relative rounded-3 overflow-hidden d-block">
                  <PhoenixImage src="/assets/img/gallery/42.png" alt="" className="w-100 w-sm-auto object-fit-cover" height={220} />                  <div className="img-backdrop-faded">
                    <div className="image-reveal-content mb-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="fa-solid fa-hotel text-secondary-lighter">                        </span>
                        <h6 className="mb-0 text-secondary-lighter fw-semibold">
44 Hotels
                        </h6>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="fa-solid fa-tree-city text-secondary-lighter">                        </span>
                        <h6 className="mb-0 text-secondary-lighter fw-semibold">
123 Tour Package
                        </h6>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <PhoenixImage src="/assets/img/country/turkey.png" alt="" />
                      <h4 className="mb-0 text-white">
Turkey
                      </h4>
                    </div>
                  </div>
                </a>
              </div>
              <div className="swiper-slide w-sm-auto">
                <a href="#!" className="position-relative rounded-3 overflow-hidden d-block">
                  <PhoenixImage src="/assets/img/gallery/41.png" alt="" className="w-100 w-sm-auto object-fit-cover" height={220} />                  <div className="img-backdrop-faded">
                    <div className="image-reveal-content mb-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="fa-solid fa-hotel text-secondary-lighter">                        </span>
                        <h6 className="mb-0 text-secondary-lighter fw-semibold">
55 Hotels
                        </h6>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="fa-solid fa-tree-city text-secondary-lighter">                        </span>
                        <h6 className="mb-0 text-secondary-lighter fw-semibold">
41 Tour Package
                        </h6>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <PhoenixImage src="/assets/img/country/new-zealand.png" alt="" />
                      <h4 className="mb-0 text-white">
New Zealand
                      </h4>
                    </div>
                  </div>
                </a>
              </div>
              <div className="swiper-slide w-sm-auto">
                <a href="#!" className="position-relative rounded-3 overflow-hidden d-block">
                  <PhoenixImage src="/assets/img/gallery/43.png" alt="" className="w-100 w-sm-auto object-fit-cover" height={220} />                  <div className="img-backdrop-faded">
                    <div className="image-reveal-content mb-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="fa-solid fa-hotel text-secondary-lighter">                        </span>
                        <h6 className="mb-0 text-secondary-lighter fw-semibold">
17 Hotels
                        </h6>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="fa-solid fa-tree-city text-secondary-lighter">                        </span>
                        <h6 className="mb-0 text-secondary-lighter fw-semibold">
22 Tour Package
                        </h6>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <PhoenixImage src="/assets/img/country/sweden.png" alt="" />
                      <h4 className="mb-0 text-white">
Sweden
                      </h4>
                    </div>
                  </div>
                </a>
              </div>
              <div className="swiper-slide w-sm-auto">
                <a href="#!" className="position-relative rounded-3 overflow-hidden d-block">
                  <PhoenixImage src="/assets/img/gallery/44.png" alt="" className="w-100 w-sm-auto object-fit-cover" height={220} />                  <div className="img-backdrop-faded">
                    <div className="image-reveal-content mb-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="fa-solid fa-hotel text-secondary-lighter">                        </span>
                        <h6 className="mb-0 text-secondary-lighter fw-semibold">
44 Hotels
                        </h6>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="fa-solid fa-tree-city text-secondary-lighter">                        </span>
                        <h6 className="mb-0 text-secondary-lighter fw-semibold">
123 Tour Package
                        </h6>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <PhoenixImage src="/assets/img/country/turkey.png" alt="" />
                      <h4 className="mb-0 text-white">
Turkey
                      </h4>
                    </div>
                  </div>
                </a>
              </div>
              <div className="swiper-slide w-sm-auto">
                <a href="#!" className="position-relative rounded-3 overflow-hidden d-block">
                  <PhoenixImage src="/assets/img/gallery/58.png" alt="" className="w-100 w-sm-auto object-fit-cover" height={220} />                  <div className="img-backdrop-faded">
                    <div className="image-reveal-content mb-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="fa-solid fa-hotel text-secondary-lighter">                        </span>
                        <h6 className="mb-0 text-secondary-lighter fw-semibold">
54 Hotels
                        </h6>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="fa-solid fa-tree-city text-secondary-lighter">                        </span>
                        <h6 className="mb-0 text-secondary-lighter fw-semibold">
123 Tour Package
                        </h6>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <PhoenixImage src="/assets/img/country/vietnam.png" alt="" />
                      <h4 className="mb-0 text-white">
Vietnam
                      </h4>
                    </div>
                  </div>
                </a>
              </div>
              <div className="swiper-slide w-sm-auto">
                <a href="#!" className="position-relative rounded-3 overflow-hidden d-block">
                  <PhoenixImage src="/assets/img/gallery/57.png" alt="" className="w-100 w-sm-auto object-fit-cover" height={220} />                  <div className="img-backdrop-faded">
                    <div className="image-reveal-content mb-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="fa-solid fa-hotel text-secondary-lighter">                        </span>
                        <h6 className="mb-0 text-secondary-lighter fw-semibold">
17 Hotels
                        </h6>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="fa-solid fa-tree-city text-secondary-lighter">                        </span>
                        <h6 className="mb-0 text-secondary-lighter fw-semibold">
22 Tour Package
                        </h6>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <PhoenixImage src="/assets/img/country/japan.png" alt="" />
                      <h4 className="mb-0 text-white">
Japan
                      </h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-0">
      <div className="bg-holder d-none d-xl-block" style={{"backgroundImage":"url(../../assets/img/bg/bg-left-29.png)","backgroundSize":"auto","backgroundPosition":"-15%"} as CSSProperties}>      </div>
      <div className="container-medium position-relative">
        <h3 className="mb-2 text-body-emphasis text-center text-xl-start">
The best of our hotel
        </h3>
        <div className="d-xl-flex justify-content-between mb-5 text-center">
          <p className="mb-0 text-body-tertiary">
This list will help you get insights into how much you’ll need to spend to afford accommodation.
          </p>
          <button className="btn btn-link p-0 fs-8">
View all
            <span className="fa-solid fa-chevron-right ms-2" data-fa-transform={"shrink-3"}>            </span>
          </button>
        </div>
        <div className="row g-0 justify-content-center">
          <div className="col-sm-11 col-md-8 col-lg-6 col-xl-12">
            <div className="row gy-5 gx-xl-7 justify-content-between pe-4">
              <div className="col-xl-4">
                <div className="card card-img-shift border-0 mx-auto">
                  <div className="rounded-3 overflow-hidden w-100 position-relative z-5">
                    <PhoenixImage src="/assets/img/gallery/45.png" alt="" className="w-100" height={250} />
                    <button className="btn btn-wish position-absolute top-0 end-0 mt-3 me-3">
                      <span className="far fa-heart">                      </span>
                    </button>
                  </div>
                  <div className="card-body p-0">
                    <div className="card-content">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
                        <div>
                          <span className="badge badge-phoenix px-1 me-2 badge-phoenix-warning">
promoted
                          </span>
                          <span className="badge badge-phoenix px-1 badge-phoenix-info">
Couple package
                          </span>
                        </div>
                        <h6>
                          <span className="fa-solid fa-star text-warning me-1">                          </span>
4.8 (1.4k stay)
                        </h6>
                      </div>
                      <a href="#!" className="fw-bold fs-7 text-body-emphasis mb-2 text-primary-hover">
Royal Mansour Marrakech
                      </a>
                      <a href="#!" className="fw-semibold text-body-tertiary mb-3 d-block">
                        <span className="me-1" data-feather={"map-pin"}>                        </span>Morocco
                      </a>
                      <h6 className="fe-semibold text-body-tertiary d-flex align-items-center gap-1 mb-4">
From 
                        <span className="fw-bolder fs-7 text-body-highlight">
$60.00
                        </span>
/ per night
                      </h6>
                      <button className="btn btn-primary px-5">
Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card card-img-shift border-0 mx-auto">
                  <div className="rounded-3 overflow-hidden w-100 position-relative z-5">
                    <PhoenixImage src="/assets/img/gallery/46.png" alt="" className="w-100" height={250} />
                    <button className="btn btn-wish position-absolute top-0 end-0 mt-3 me-3">
                      <span className="far fa-heart">                      </span>
                    </button>
                  </div>
                  <div className="card-body p-0">
                    <div className="card-content">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
                        <div>
                          <span className="badge badge-phoenix px-1 me-2 badge-phoenix-warning">
promoted
                          </span>
                          <span className="badge badge-phoenix px-1 badge-phoenix-info">
Couple package
                          </span>
                        </div>
                        <h6>
                          <span className="fa-solid fa-star text-warning me-1">                          </span>
4.8 (1.4k stay)
                        </h6>
                      </div>
                      <a href="#!" className="fw-bold fs-7 text-body-emphasis mb-2 text-primary-hover">
Mandarin Oriental Jumeira
                      </a>
                      <a href="#!" className="fw-semibold text-body-tertiary mb-3 d-block">
                        <span className="me-1" data-feather={"map-pin"}>                        </span>Abu dhabi
                      </a>
                      <h6 className="fe-semibold text-body-tertiary d-flex align-items-center gap-1 mb-4">
From 
                        <span className="fw-bolder fs-7 text-body-highlight">
$90.00
                        </span>
/ per night
                      </h6>
                      <button className="btn btn-primary px-5">
Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card card-img-shift border-0 mx-auto">
                  <div className="rounded-3 overflow-hidden w-100 position-relative z-5">
                    <PhoenixImage src="/assets/img/gallery/47.png" alt="" className="w-100" height={250} />
                    <button className="btn btn-wish position-absolute top-0 end-0 mt-3 me-3">
                      <span className="far fa-heart">                      </span>
                    </button>
                  </div>
                  <div className="card-body p-0">
                    <div className="card-content">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
                        <div>
                          <span className="badge badge-phoenix px-1 me-2 badge-phoenix-warning">
promoted
                          </span>
                          <span className="badge badge-phoenix px-1 badge-phoenix-info">
Couple package
                          </span>
                        </div>
                        <h6>
                          <span className="fa-solid fa-star text-warning me-1">                          </span>
4.8 (1.4k stay)
                        </h6>
                      </div>
                      <a href="#!" className="fw-bold fs-7 text-body-emphasis mb-2 text-primary-hover">
Swissotel Bangkok
                      </a>
                      <a href="#!" className="fw-semibold text-body-tertiary mb-3 d-block">
                        <span className="me-1" data-feather={"map-pin"}>                        </span>Bangkok
                      </a>
                      <h6 className="fe-semibold text-body-tertiary d-flex align-items-center gap-1 mb-4">
From 
                        <span className="fw-bolder fs-7 text-body-highlight">
$70.00
                        </span>
/ per night
                      </h6>
                      <button className="btn btn-primary px-5">
Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-10 overflow-hidden">
      <div className="bg-holder d-none d-xl-block" style={{"backgroundImage":"url(../../assets/img/bg/bg-left-30.png)","backgroundSize":"40%","backgroundPosition":"left","zIndex":"1"} as CSSProperties}>      </div>
      <div className="bg-holder d-none d-xl-block" style={{"backgroundImage":"url(../../assets/img/bg/bg-right-30.png)","backgroundSize":"26%","backgroundPosition":"right 25px","zIndex":"1"} as CSSProperties}>      </div>
      <div className="bg-booking-gallery">      </div>
      <div className="container-medium position-relative z-2">
        <h3 className="mb-2 text-body-emphasis text-center">
Popular Attractions
        </h3>
        <p className="mb-0 text-body-tertiary text-center mb-5">
Explore the most popular and frequently visited destinations around the world
        </p>
        <ul className="nav mb-6 justify-content-center flex-wrap mx-auto w-max-content" data-filter-nav>
          <li className="nav-item">
            <a href="#" className="isotope-nav cursor-pointer active" data-filter={".tokyo"}>
Tokyo
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="isotope-nav cursor-pointer" data-filter={".bali"}>
Bali
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="isotope-nav cursor-pointer" data-filter={".sydney"}>
Sydney
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="isotope-nav cursor-pointer" data-filter={".paris"}>
Paris
            </a>
          </li>
        </ul>
        <div className="row g-0 justify-content-center">
          <div className="col-md-9 col-lg-7 col-xl-5">
            <div className="row gx-0 gy-3" id="image_gallery" data-sl-isotope={"{\"layoutMode\":\"packery\",\"filter\":\".tokyo\"}"}>
              <div className="col-12 isotope-item w-100 tokyo">
                <div className="img-zoom-hover-lg rounded-2 overflow-hidden">
                  <a href="#!">
                    <PhoenixImage src="/assets/img/gallery/tokyo-1.png" alt="" className="w-100 object-fit-cover" height={220} />
                  </a>
                  <button className="btn btn-wish position-absolute top-0 end-0 mt-4 me-4">
                    <span className="far fa-heart">                    </span>
                  </button>
                  <div className="backdrop-faded">
                    <a href="#!" className="text-white fw-bolder fs-7 stretched-link">
King Power Mahanakhon
                    </a>
                    <h5 className="text-light mb-0">
                      <span className="fa-solid fa-star text-warning me-1" data-fa-transform={"shrink-2"}>                      </span>
4.8
                      <span className="fs-10">
/5 
                      </span>
(1.4k review)
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-12 isotope-item w-100 tokyo">
                <div className="img-zoom-hover-lg rounded-2 overflow-hidden">
                  <a href="#!">
                    <PhoenixImage src="/assets/img/gallery/tokyo-2.png" alt="" className="w-100 object-fit-cover" height={220} />
                  </a>
                  <button className="btn btn-wish position-absolute top-0 end-0 mt-4 me-4">
                    <span className="far fa-heart">                    </span>
                  </button>
                  <div className="backdrop-faded">
                    <a href="#!" className="text-white fw-bolder fs-7 stretched-link">
Meiji Jingu
                    </a>
                    <h5 className="text-light mb-0">
                      <span className="fa-solid fa-star text-warning me-1" data-fa-transform={"shrink-2"}>                      </span>
5
                      <span className="fs-10">
/5 
                      </span>
(2.2k review)
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-12 isotope-item w-100 tokyo">
                <div className="img-zoom-hover-lg rounded-2 overflow-hidden">
                  <a href="#!">
                    <PhoenixImage src="/assets/img/gallery/tokyo-3.png" alt="" className="w-100 object-fit-cover" height={220} />
                  </a>
                  <button className="btn btn-wish position-absolute top-0 end-0 mt-4 me-4">
                    <span className="far fa-heart">                    </span>
                  </button>
                  <div className="backdrop-faded">
                    <a href="#!" className="text-white fw-bolder fs-7 stretched-link">
Imperial Palace
                    </a>
                    <h5 className="text-light mb-0">
                      <span className="fa-solid fa-star text-warning me-1" data-fa-transform={"shrink-2"}>                      </span>
4.5
                      <span className="fs-10">
/5 
                      </span>
(1.2k review)
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-12 isotope-item w-100 bali">
                <div className="img-zoom-hover-lg rounded-2 overflow-hidden">
                  <a href="#!">
                    <PhoenixImage src="/assets/img/gallery/bali-1.png" alt="" className="w-100 object-fit-cover" height={220} />
                  </a>
                  <button className="btn btn-wish position-absolute top-0 end-0 mt-4 me-4">
                    <span className="far fa-heart">                    </span>
                  </button>
                  <div className="backdrop-faded">
                    <a href="#!" className="text-white fw-bolder fs-7 stretched-link">
Nusa Lembongan
                    </a>
                    <h5 className="text-light mb-0">
                      <span className="fa-solid fa-star text-warning me-1" data-fa-transform={"shrink-2"}>                      </span>
4.7
                      <span className="fs-10">
/5 
                      </span>
(1.2k review)
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-12 isotope-item w-100 bali">
                <div className="img-zoom-hover-lg rounded-2 overflow-hidden">
                  <a href="#!">
                    <PhoenixImage src="/assets/img/gallery/bali-2.png" alt="" className="w-100 object-fit-cover" height={220} />
                  </a>
                  <button className="btn btn-wish position-absolute top-0 end-0 mt-4 me-4">
                    <span className="far fa-heart">                    </span>
                  </button>
                  <div className="backdrop-faded">
                    <a href="#!" className="text-white fw-bolder fs-7 stretched-link">
Waterbom Bali
                    </a>
                    <h5 className="text-light mb-0">
                      <span className="fa-solid fa-star text-warning me-1" data-fa-transform={"shrink-2"}>                      </span>
4.5
                      <span className="fs-10">
/5 
                      </span>
(1.8k review)
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-12 isotope-item w-100 bali">
                <div className="img-zoom-hover-lg rounded-2 overflow-hidden">
                  <a href="#!">
                    <PhoenixImage src="/assets/img/gallery/bali-3.png" alt="" className="w-100 object-fit-cover" height={220} />
                  </a>
                  <button className="btn btn-wish position-absolute top-0 end-0 mt-4 me-4">
                    <span className="far fa-heart">                    </span>
                  </button>
                  <div className="backdrop-faded">
                    <a href="#!" className="text-white fw-bolder fs-7 stretched-link">
Kuta Beach
                    </a>
                    <h5 className="text-light mb-0">
                      <span className="fa-solid fa-star text-warning me-1" data-fa-transform={"shrink-2"}>                      </span>
5
                      <span className="fs-10">
/5 
                      </span>
(4.1k review)
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-12 isotope-item w-100 sydney">
                <div className="img-zoom-hover-lg rounded-2 overflow-hidden">
                  <a href="#!">
                    <PhoenixImage src="/assets/img/gallery/sydney-1.png" alt="" className="w-100 object-fit-cover" height={220} />
                  </a>
                  <button className="btn btn-wish position-absolute top-0 end-0 mt-4 me-4">
                    <span className="far fa-heart">                    </span>
                  </button>
                  <div className="backdrop-faded">
                    <a href="#!" className="text-white fw-bolder fs-7 stretched-link">
The Rocks
                    </a>
                    <h5 className="text-light mb-0">
                      <span className="fa-solid fa-star text-warning me-1" data-fa-transform={"shrink-2"}>                      </span>
4.8
                      <span className="fs-10">
/5 
                      </span>
(1.9k review)
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-12 isotope-item w-100 sydney">
                <div className="img-zoom-hover-lg rounded-2 overflow-hidden">
                  <a href="#!">
                    <PhoenixImage src="/assets/img/gallery/sydney-2.png" alt="" className="w-100 object-fit-cover" height={220} />
                  </a>
                  <button className="btn btn-wish position-absolute top-0 end-0 mt-4 me-4">
                    <span className="far fa-heart">                    </span>
                  </button>
                  <div className="backdrop-faded">
                    <a href="#!" className="text-white fw-bolder fs-7 stretched-link">
Manly Beach
                    </a>
                    <h5 className="text-light mb-0">
                      <span className="fa-solid fa-star text-warning me-1" data-fa-transform={"shrink-2"}>                      </span>
4.7
                      <span className="fs-10">
/5 
                      </span>
(1.1k review)
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-12 isotope-item w-100 sydney">
                <div className="img-zoom-hover-lg rounded-2 overflow-hidden">
                  <a href="#!">
                    <PhoenixImage src="/assets/img/gallery/sydney-3.png" alt="" className="w-100 object-fit-cover" height={220} />
                  </a>
                  <button className="btn btn-wish position-absolute top-0 end-0 mt-4 me-4">
                    <span className="far fa-heart">                    </span>
                  </button>
                  <div className="backdrop-faded">
                    <a href="#!" className="text-white fw-bolder fs-7 stretched-link">
Darling Harbour
                    </a>
                    <h5 className="text-light mb-0">
                      <span className="fa-solid fa-star text-warning me-1" data-fa-transform={"shrink-2"}>                      </span>
5
                      <span className="fs-10">
/5 
                      </span>
(3.2k review)
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-12 isotope-item w-100 paris">
                <div className="img-zoom-hover-lg rounded-2 overflow-hidden">
                  <a href="#!">
                    <PhoenixImage src="/assets/img/gallery/paris-1.png" alt="" className="w-100 object-fit-cover" height={220} />
                  </a>
                  <button className="btn btn-wish position-absolute top-0 end-0 mt-4 me-4">
                    <span className="far fa-heart">                    </span>
                  </button>
                  <div className="backdrop-faded">
                    <a href="#!" className="text-white fw-bolder fs-7 stretched-link">
Louvre Museum
                    </a>
                    <h5 className="text-light mb-0">
                      <span className="fa-solid fa-star text-warning me-1" data-fa-transform={"shrink-2"}>                      </span>
4.4
                      <span className="fs-10">
/5 
                      </span>
(4.3k review)
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-12 isotope-item w-100 paris">
                <div className="img-zoom-hover-lg rounded-2 overflow-hidden">
                  <a href="#!">
                    <PhoenixImage src="/assets/img/gallery/paris-2.png" alt="" className="w-100 object-fit-cover" height={220} />
                  </a>
                  <button className="btn btn-wish position-absolute top-0 end-0 mt-4 me-4">
                    <span className="far fa-heart">                    </span>
                  </button>
                  <div className="backdrop-faded">
                    <a href="#!" className="text-white fw-bolder fs-7 stretched-link">
Montmartre
                    </a>
                    <h5 className="text-light mb-0">
                      <span className="fa-solid fa-star text-warning me-1" data-fa-transform={"shrink-2"}>                      </span>
5
                      <span className="fs-10">
/5 
                      </span>
(5k review)
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-12 isotope-item w-100 paris">
                <div className="img-zoom-hover-lg rounded-2 overflow-hidden">
                  <a href="#!">
                    <PhoenixImage src="/assets/img/gallery/paris-3.png" alt="" className="w-100 object-fit-cover" height={220} />
                  </a>
                  <button className="btn btn-wish position-absolute top-0 end-0 mt-4 me-4">
                    <span className="far fa-heart">                    </span>
                  </button>
                  <div className="backdrop-faded">
                    <a href="#!" className="text-white fw-bolder fs-7 stretched-link">
Tuileries Garden
                    </a>
                    <h5 className="text-light mb-0">
                      <span className="fa-solid fa-star text-warning me-1" data-fa-transform={"shrink-2"}>                      </span>
4.1
                      <span className="fs-10">
/5 
                      </span>
(4.5k review)
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
          <h5 className="mb-0">
Explore more popular destination
          </h5>
          <div className="btn-ping">
            <div className="btn-ping-bg">            </div>
            <button className="btn border p-0 fs-8 text-primary d-flex align-items-center justify-content-center">
              <span className="fa-solid fa-arrow-right">              </span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section className="pb-7 pt-0 overflow-x-hidden">
      <div className="bg-holder d-none d-xl-block" style={{"backgroundImage":"url(../../assets/img/bg/bg-left-31.png)","backgroundSize":"22%","backgroundPosition":"left","zIndex":"1"} as CSSProperties}>      </div>
      <div className="bg-holder d-none d-xl-block" style={{"backgroundImage":"url(../../assets/img/bg/bg-right-31.png)","backgroundSize":"15%","backgroundPosition":"right bottom","zIndex":"1"} as CSSProperties}>      </div>
      <div className="bg-latest-posts">      </div>
      <div className="container-medium text-center position-relative z-2">
        <h3 className="mb-2 text-body-emphasis">
Our Latest Posts For Travellers
        </h3>
        <p className="mb-0 text-body-tertiary mb-13">
Find the best travel memories from our past tours and get a clear idea of what we do.
        </p>
      </div>
      <div className="swiper-theme-container swiper-zooming-slider">
        <div className="swiper-container theme-slider" data-swiper={"{\"loop\":true,\"slidesPerView\":1.3,\"spaceBetween\":32,\"speed\":2000,\"autoplay\":true,\"centeredSlides\":true,\"simulateTouch\":false,\"breakpoints\":{\"540\":{\"slidesPerView\":1.5},\"768\":{\"slidesPerView\":1.8},\"1200\":{\"slidesPerView\":2},\"1530\":{\"slidesPerView\":2.8}}}"}>
          <div className="swiper-wrapper">
            <div className="swiper-slide rounded-3 overflow-hidden">
              <div className="position-relative w-100 h-100">
                <PhoenixImage src="/assets/img/gallery/48.png" alt="" className="w-100 h-100 object-fit-cover" />
                <div className="backdrop-faded p-4 p-md-6">
                  <div className="d-flex align-items-center mb-2">
                    <span className="text-secondary-lighter me-2" data-feather={"calendar"}>                    </span>
                    <h6 className="mb-0 fw-semibold text-secondary-lighter pe-3 me-3 border-end">
Monday, Nov 07, 2022
                    </h6>
                    <span className="fa-solid fa-star text-warning fs-9 me-2">                    </span>
                    <h6 className="mb-0 text-secondary-lighter fw-semibold">
4.8
                    </h6>
                  </div>
                  <a href="#!" className="text-white fw-bold fs-7">
Beautiful Frence, Let's Travelling!
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide rounded-3 overflow-hidden">
              <div className="position-relative w-100 h-100">
                <PhoenixImage src="/assets/img/gallery/49.png" alt="" className="w-100 h-100 object-fit-cover" />
                <div className="backdrop-faded p-4 p-md-6">
                  <div className="d-flex align-items-center mb-2">
                    <span className="text-secondary-lighter me-2" data-feather={"calendar"}>                    </span>
                    <h6 className="mb-0 fw-semibold text-secondary-lighter pe-3 me-3 border-end">
Monday, Nov 06, 2022
                    </h6>
                    <span className="fa-solid fa-star text-warning fs-9 me-2">                    </span>
                    <h6 className="mb-0 text-secondary-lighter fw-semibold">
4.5
                    </h6>
                  </div>
                  <a href="#!" className="text-white fw-bold fs-7">
Man Standing on Watching Mountain
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide rounded-3 overflow-hidden">
              <div className="position-relative w-100 h-100">
                <PhoenixImage src="/assets/img/gallery/50.png" alt="" className="w-100 h-100 object-fit-cover" />
                <div className="backdrop-faded p-4 p-md-6">
                  <div className="d-flex align-items-center mb-2">
                    <span className="text-secondary-lighter me-2" data-feather={"calendar"}>                    </span>
                    <h6 className="mb-0 fw-semibold text-secondary-lighter pe-3 me-3 border-end">
Monday, Nov 05, 2022
                    </h6>
                    <span className="fa-solid fa-star text-warning fs-9 me-2">                    </span>
                    <h6 className="mb-0 text-secondary-lighter fw-semibold">
4.2
                    </h6>
                  </div>
                  <a href="#!" className="text-white fw-bold fs-7">
Beautiful Bali Indonesia, Let's Travelling!
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide rounded-3 overflow-hidden">
              <div className="position-relative w-100 h-100">
                <PhoenixImage src="/assets/img/gallery/64.png" alt="" className="w-100 h-100 object-fit-cover" />
                <div className="backdrop-faded p-4 p-md-6">
                  <div className="d-flex align-items-center mb-2">
                    <span className="text-secondary-lighter me-2" data-feather={"calendar"}>                    </span>
                    <h6 className="mb-0 fw-semibold text-secondary-lighter pe-3 me-3 border-end">
Monday, Nov 04, 2022
                    </h6>
                    <span className="fa-solid fa-star text-warning fs-9 me-2">                    </span>
                    <h6 className="mb-0 text-secondary-lighter fw-semibold">
4.5
                    </h6>
                  </div>
                  <a href="#!" className="text-white fw-bold fs-7">
Chasing sunsets, making memories worldwide.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-nav">
          <div className="swiper-button-next">
            <span className="fas fa-chevron-right text-primary" data-fa-transform={"shrink-3"}>            </span>
          </div>
          <div className="swiper-button-prev">
            <span className="fas fa-chevron-left text-primary" data-fa-transform={"shrink-3"}>            </span>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 position-relative z-2">
        <button className="btn btn-link p-0 fs-8">
View all
          <span className="fa-solid fa-chevron-right ms-2" data-fa-transform={"shrink-1"}>          </span>
        </button>
      </div>
    </section>

    <section className="pb-10 pt-3">
      <div className="bg-holder d-none d-xl-block" style={{"backgroundImage":"url(../../assets/img/bg/bg-left-32.png)","backgroundSize":"26%","backgroundPosition":"left 115px"} as CSSProperties}>      </div>
      <div className="bg-holder d-none d-xl-block" style={{"backgroundImage":"url(../../assets/img/bg/bg-right-32.png)","backgroundSize":"28%","backgroundPosition":"right -25px"} as CSSProperties}>      </div>
      <div className="container-medium position-relative">
        <div className="row g-0 justify-content-center">
          <div className="col-lg-10 col-xl-7">
            <div className="d-md-flex align-items-center gap-7 text-center text-md-start">
              <PhoenixImage src="/assets/img/spot-illustrations/40.png" alt="" className="mb-4 mb-md-0 d-dark-none" width={260} />
              <PhoenixImage src="/assets/img/spot-illustrations/dark_40.png" alt="" className="mb-4 mb-md-0 d-light-none" width={260} />
              <div className="flex-1">
                <h3 className="mb-0">
{"Get Updates & More"}
                </h3>
                <p className="mb-4 text-body-tertiary">
Subscribe to our newsletter to stay updated.
                </p>
                <form className="d-flex justify-content-center">
                  <input className="form-control me-3" id="ctaEmail1" type="email" placeholder="Email" aria-describedby="ctaEmail1" />
                  <button className="btn btn-primary d-flex align-items-center" type="submit">
 Subscribe
                    <span className="fa-solid fa-chevron-right ms-2 fs-9">                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="pb-7 pt-0">
      <div className="container-medium">
        <div className="text-center mb-5">
          <h3 className="mb-2 text-body-emphasis">
Latest photos from tourists
          </h3>
          <p className="mb-0 text-body-tertiary">
See how our tourists enjoyed their trip from images captured by them with Team Phoenix!
          </p>
        </div>
        <div className="row g-3">
          <div className="col-md-6 col-xl-4">
            <div className="img-zoom-hover rounded-3 overflow-hidden position-relative">
              <a href="#!">
                <PhoenixImage src="/assets/img/gallery/51.png" alt="" className="latest-img w-100 object-fit-cover" />
              </a>
              <div className="backdrop-faded">
                <a href="#!" className="fw-semibold mb-0 text-secondary-lighter stretched-link">
                  <span className="fa-solid fa-location-dot text-secondary-lighter me-2">                  </span>Bali Indonesia
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="img-zoom-hover rounded-3 overflow-hidden position-relative">
              <a href="#!">
                <PhoenixImage src="/assets/img/gallery/52.png" alt="" className="latest-img w-100 object-fit-cover" />
              </a>
              <div className="backdrop-faded">
                <a href="#!" className="fw-semibold mb-0 text-secondary-lighter stretched-link">
                  <span className="fa-solid fa-location-dot text-secondary-lighter me-2">                  </span>Barcelona
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="img-zoom-hover rounded-3 overflow-hidden position-relative">
              <a href="#!">
                <PhoenixImage src="/assets/img/gallery/53.png" alt="" className="latest-img w-100 object-fit-cover" />
              </a>
              <div className="backdrop-faded">
                <a href="#!" className="fw-semibold mb-0 text-secondary-lighter stretched-link">
                  <span className="fa-solid fa-location-dot text-secondary-lighter me-2">                  </span>Bali Indonesia
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="img-zoom-hover rounded-3 overflow-hidden position-relative">
              <a href="#!">
                <PhoenixImage src="/assets/img/gallery/54.png" alt="" className="latest-img w-100 object-fit-cover" />
              </a>
              <div className="backdrop-faded">
                <a href="#!" className="fw-semibold mb-0 text-secondary-lighter stretched-link">
                  <span className="fa-solid fa-location-dot text-secondary-lighter me-2">                  </span>Sydney
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="img-zoom-hover rounded-3 overflow-hidden position-relative">
              <a href="#!">
                <PhoenixImage src="/assets/img/gallery/55.png" alt="" className="latest-img w-100 object-fit-cover" />
              </a>
              <div className="backdrop-faded">
                <a href="#!" className="fw-semibold mb-0 text-secondary-lighter stretched-link">
                  <span className="fa-solid fa-location-dot text-secondary-lighter me-2">                  </span>Great Barrier Reef
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="img-zoom-hover rounded-3 overflow-hidden position-relative">
              <a href="#!">
                <PhoenixImage src="/assets/img/gallery/56.png" alt="" className="latest-img w-100 object-fit-cover" />
              </a>
              <div className="backdrop-faded">
                <a href="#!" className="fw-semibold mb-0 text-secondary-lighter stretched-link">
                  <span className="fa-solid fa-location-dot text-secondary-lighter me-2">                  </span>Grand Canyon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="pt-9 pb-10">
      <div className="bg-holder d-none d-xl-block" style={{"backgroundImage":"url(../../assets/img/bg/bg-left-33.png)","backgroundSize":"auto","backgroundPosition":"-8% 38px"} as CSSProperties}>      </div>
      <div className="bg-holder d-none d-xl-block" style={{"backgroundImage":"url(../../assets/img/bg/bg-right-33.png)","backgroundSize":"18%","backgroundPosition":"right"} as CSSProperties}>      </div>
      <div className="bg-get-app">      </div>
      <div className="container-medium position-relative">
        <div className="row g-0 justify-content-center">
          <div className="col-lg-10 col-xl-8 col-xxl-7">
            <div className="d-md-flex align-items-center gap-5 text-center text-md-start">
              <PhoenixImage src="/assets/img/spot-illustrations/i-phone.png" alt="" className="img-fluid d-dark-none" />
              <PhoenixImage src="/assets/img/spot-illustrations/i-phone-dark.png" alt="" className="img-fluid d-light-none" />
              <div className="mt-5 mt-md-0">
                <div className="d-none d-md-block">
                  <PhoenixImage src="/assets/img/spot-illustrations/41.png" alt="" className="d-dark-none" width={200} />
                  <PhoenixImage src="/assets/img/spot-illustrations/dark_41.png" alt="" className="d-light-none" width={200} />
                </div>
                <h3 className="fw-bolder mt-4">
Get The App Now
                </h3>
                <p className="text-body-tertiary">
Designed to provide the best user experience possible to all our customers with activities ranging from anything thinkable to the unthinkables.
                </p>
                <a href="#!" className="me-2">
                  <PhoenixImage src="/assets/img/generic/play-store.png" alt="" height={32} />
                </a>
                <a href="#!">
                  <PhoenixImage src="/assets/img/generic/app-store.png" alt="" height={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="booking-footer pb-6 pb-md-11 pt-15">
      <div className="container-medium">
        <div className="row gy-3 justify-content-between align-items-center">
          <div className="col-auto">
            <a href="#!">
              <PhoenixImage src="/assets/img/icons/logo-1.png" alt="" />
            </a>
          </div>
          <div className="col-auto">
            <ul className="mb-0 list-unstyled d-flex flex-wrap">
              <li className="me-3 me-sm-5">
                <a href="#!" className="fs-8 fw-bold text-white">
Home
                </a>
              </li>
              <li className="me-3 me-sm-5">
                <a href="#!" className="fs-8 fw-bold text-white">
About
                </a>
              </li>
              <li className="me-3 me-sm-5">
                <a href="#!" className="fs-8 fw-bold text-white">
Contact
                </a>
              </li>
              <li className="me-3 me-sm-5">
                <a href="#!" className="fs-8 fw-bold text-white">
FAQ
                </a>
              </li>
              <li>
                <a href="#!" className="fs-8 fw-bold text-white">
Gallery
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row gy-3 justify-content-between">
          <div className="col-auto">
            <a href="#!" className="text-white me-4">
              <span className="fa-brands fa-facebook-f">              </span>
            </a>
            <a href="#!" className="text-white me-4">
              <span className="fa-brands fa-twitter">              </span>
            </a>
            <a href="#!" className="text-white me-4">
              <span className="fa-brands fa-linkedin-in">              </span>
            </a>
            <a href="#!" className="text-white">
              <span className="fa-brands fa-behance">              </span>
            </a>
          </div>
          <div className="col-auto">
            <p className="mb-0 text-white">
Thank you for creating with Phoenix | 2023 © 
              <a href="https://themewagon.com/" className="text-white">
Themewagon
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>



    </div>
  );
}
