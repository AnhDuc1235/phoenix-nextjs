'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Alternate() {
  return (
    <div suppressHydrationWarning>

    <div className="bg-body-emphasis sticky-top" data-navbar-shadow-on-scroll>
      <nav className="navbar navbar-expand-lg container-small px-3 px-lg-7 px-xxl-3">
        <PhoenixLink href="/" className="navbar-brand flex-1 flex-lg-grow-0">
          <div className="d-flex align-items-center">
            <PhoenixImage src="/assets/img/icons/logo.png" alt="phoenix" width={27} />
            <h5 className="logo-text ms-2">
phoenix
            </h5>
          </div>
        </PhoenixLink>
        <div className="d-lg-none">
          <div className="theme-control-toggle fa-icon-wait px-2">
            <input className="form-check-input ms-0 theme-control-toggle-input" type="checkbox" data-theme-control={"phoenixTheme"} defaultValue="dark" id="themeControlToggleSm" />
            <label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggleSm" data-bs-toggle={"tooltip"} data-bs-placement={"left"} data-bs-title={"Switch theme"} style={{"height":"32px","width":"32px"} as CSSProperties}>
              <span className="icon" data-feather={"moon"}>              </span>
            </label>
            <label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggleSm" data-bs-toggle={"tooltip"} data-bs-placement={"left"} data-bs-title={"Switch theme"} style={{"height":"32px","width":"32px"} as CSSProperties}>
              <span className="icon" data-feather={"sun"}>              </span>
            </label>
          </div>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle={"collapse"} data-bs-target={"#navbarSupportedContent"} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="border-bottom border-translucent border-bottom-lg-0 mb-2">
            <div className="search-box d-inline d-lg-none">
              <form className="position-relative">
                <input className="form-control search-input search rounded-pill my-4" type="search" placeholder="Search" aria-label="Search" />
                <span className="fas fa-search search-box-icon">                </span>
              </form>
            </div>
          </div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item border-bottom border-translucent border-bottom-lg-0">
              <a href="#" className="nav-link lh-1 py-0 fs-9 fw-bold py-3" aria-current="page">
Home
              </a>
            </li>
            <li className="nav-item border-bottom border-translucent border-bottom-lg-0">
              <a href="#feature" className="nav-link lh-1 py-0 fs-9 fw-bold py-3">
Features
              </a>
            </li>
            <li className="nav-item border-bottom border-translucent border-bottom-lg-0">
              <a href="#blog" className="nav-link lh-1 py-0 fs-9 fw-bold py-3">
Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="#team" className="nav-link lh-1 py-0 fs-9 fw-bold py-3">
Team
              </a>
            </li>
          </ul>
          <div className="d-grid d-lg-flex align-items-center">
            <div className="nav-item d-flex align-items-center d-none d-lg-block pe-2">
              <div className="theme-control-toggle fa-icon-wait px-2">
                <input className="form-check-input ms-0 theme-control-toggle-input" type="checkbox" data-theme-control={"phoenixTheme"} defaultValue="dark" id="themeControlToggle" />
                <label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggle" data-bs-toggle={"tooltip"} data-bs-placement={"left"} data-bs-title={"Switch theme"} style={{"height":"32px","width":"32px"} as CSSProperties}>
                  <span className="icon" data-feather={"moon"}>                  </span>
                </label>
                <label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggle" data-bs-toggle={"tooltip"} data-bs-placement={"left"} data-bs-title={"Switch theme"} style={{"height":"32px","width":"32px"} as CSSProperties}>
                  <span className="icon" data-feather={"sun"}>                  </span>
                </label>
              </div>
            </div>
            <a href="#" className="text-body-quaternary text-body-tertiary-hover px-2 d-none d-lg-inline lh-sm"  data-bs-toggle={"modal"} data-bs-target={"#searchBoxModal"}>
              <span data-feather={"search"} style={{"height":"20px","width":"20px"} as CSSProperties}>              </span>
            </a>
            <PhoenixLink href="/pages/authentication/simple/sign-in" className="btn btn-link text-body order-1 order-lg-0 ps-4 me-lg-2">
Sign in
            </PhoenixLink>
            <PhoenixLink href="/pages/authentication/simple/sign-up" className="btn btn-phoenix-primary order-0">
              <span className="fw-bold">
Sign up
              </span>
            </PhoenixLink>
          </div>
        </div>
      </nav>
    </div>

    <div className="modal fade" id="searchBoxModal" tabIndex={-1} aria-hidden="true" data-bs-backdrop={"true"} data-phoenix-modal style={{"--phoenix-backdrop-opacity":"1"} as CSSProperties}>
      <div className="modal-dialog">
        <div className="modal-content mt-15 rounded-pill">
          <div className="modal-body p-0">
            <div className="search-box navbar-top-search-box" data-list={"{\"valueNames\":[\"title\"]}"} style={{"width":"auto"} as CSSProperties}>
              <form className="position-relative" data-bs-toggle={"search"} data-bs-display={"static"}>
                <input className="form-control search-input fuzzy-search rounded-pill form-control-lg" type="search" placeholder="Search..." aria-label="Search" />
                <span className="fas fa-search search-box-icon">                </span>
              </form>
              <div className="btn-close position-absolute end-0 top-50 translate-middle cursor-pointer shadow-none" data-bs-dismiss={"search"}>
                <button className="btn btn-link p-0" aria-label="Close">                </button>
              </div>
              <div className="dropdown-menu border start-0 py-0 overflow-hidden w-100">
                <div className="scrollbar-overlay" style={{"maxHeight":"30rem"} as CSSProperties}>
                  <div className="list pb-3">
                    <h6 className="dropdown-header text-body-highlight fs-10 py-2">
24 
                      <span className="text-body-quaternary">
results
                      </span>
                    </h6>
                    <hr className="my-0" />
                    <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
Recently Searched 
                    </h6>
                    <div className="py-2">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-solid fa-clock-rotate-left" data-fa-transform={"shrink-2"}>                            </span>
 Store Macbook
                          </div>
                        </div>
                      </PhoenixLink>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-solid fa-clock-rotate-left" data-fa-transform={"shrink-2"}>                            </span>
 MacBook Air - 13″
                          </div>
                        </div>
                      </PhoenixLink>
                    </div>
                    <hr className="my-0" />
                    <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
Products
                    </h6>
                    <div className="py-2">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item py-2 d-flex align-items-center">
                        <div className="file-thumbnail me-2">
                          <PhoenixImage src="/assets/img/products/60x60/3.png" alt="" className="h-100 w-100 object-fit-cover rounded-3" />
                        </div>                        <div className="flex-1">
                          <h6 className="mb-0 text-body-highlight title">
MacBook Air - 13″
                          </h6>
                          <p className="fs-10 mb-0 d-flex text-body-tertiary">
                            <span className="fw-medium text-body-tertiary text-opactity-85">
8GB Memory - 1.6GHz - 128GB Storage
                            </span>
                          </p>
                        </div>
                      </PhoenixLink>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item py-2 d-flex align-items-center">
                        <div className="file-thumbnail me-2">
                          <PhoenixImage src="/assets/img/products/60x60/3.png" alt="" className="img-fluid" />
                        </div>                        <div className="flex-1">
                          <h6 className="mb-0 text-body-highlight title">
MacBook Pro - 13″
                          </h6>
                          <p className="fs-10 mb-0 d-flex text-body-tertiary">
                            <span className="fw-medium text-body-tertiary text-opactity-85">
30 Sep at 12:30 PM
                            </span>
                          </p>
                        </div>
                      </PhoenixLink>
                    </div>
                    <hr className="my-0" />
                    <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
Quick Links
                    </h6>
                    <div className="py-2">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-solid fa-link text-body" data-fa-transform={"shrink-2"}>                            </span>
 Support MacBook House
                          </div>
                        </div>
                      </PhoenixLink>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-solid fa-link text-body" data-fa-transform={"shrink-2"}>                            </span>
 Store MacBook″
                          </div>
                        </div>
                      </PhoenixLink>
                    </div>
                    <hr className="my-0" />
                    <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
Files
                    </h6>
                    <div className="py-2">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-solid fa-file-zipper text-body" data-fa-transform={"shrink-2"}>                            </span>
 Library MacBook folder.rar
                          </div>
                        </div>
                      </PhoenixLink>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-solid fa-file-lines text-body" data-fa-transform={"shrink-2"}>                            </span>
 Feature MacBook extensions.txt
                          </div>
                        </div>
                      </PhoenixLink>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-solid fa-image text-body" data-fa-transform={"shrink-2"}>                            </span>
 MacBook Pro_13.jpg
                          </div>
                        </div>
                      </PhoenixLink>
                    </div>
                    <hr className="my-0" />
                    <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
Members
                    </h6>
                    <div className="py-2">
                      <PhoenixLink href="/pages/members" className="dropdown-item py-2 d-flex align-items-center">
                        <div className="avatar avatar-l status-online  me-2 text-body">
                          <PhoenixImage src="/assets/img/team/40x40/10.webp" alt="" className="rounded-circle " />
                        </div>                        <div className="flex-1">
                          <h6 className="mb-0 text-body-highlight title">
Carry Anna
                          </h6>
                          <p className="fs-10 mb-0 d-flex text-body-tertiary">
anna@technext.it
                          </p>
                        </div>
                      </PhoenixLink>
                      <PhoenixLink href="/pages/members" className="dropdown-item py-2 d-flex align-items-center">
                        <div className="avatar avatar-l  me-2 text-body">
                          <PhoenixImage src="/assets/img/team/40x40/12.webp" alt="" className="rounded-circle " />
                        </div>                        <div className="flex-1">
                          <h6 className="mb-0 text-body-highlight title">
John Smith
                          </h6>
                          <p className="fs-10 mb-0 d-flex text-body-tertiary">
smith@technext.it
                          </p>
                        </div>
                      </PhoenixLink>
                    </div>
                    <hr className="my-0" />
                    <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
Related Searches
                    </h6>
                    <div className="py-2">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-brands fa-firefox-browser text-body" data-fa-transform={"shrink-2"}>                            </span>
 Search in the Web MacBook
                          </div>
                        </div>
                      </PhoenixLink>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-brands fa-chrome text-body" data-fa-transform={"shrink-2"}>                            </span>
 Store MacBook″
                          </div>
                        </div>
                      </PhoenixLink>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="fallback fw-bold fs-7 d-none">
No Result Found.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="pb-8 overflow-hidden" id="home">
      <div className="hero-header-container-alternate position-relative">
        <div className="container-small px-lg-7 px-xxl-3">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 pt-8 pb-6 position-relative z-5 text-center text-lg-start">
              <h1 className="fs-3 fs-md-2 fs-xl-1 fw-black mb-4">
                <span className="text-gradient-info me-3">
Elegance
                </span>
for
                <br />
your web app
              </h1>
              <p className="mb-5 pe-xl-10">
Standard, modern and Elegant solution for your next web app so you don’t have to look further. Sign up or check the demo below.
              </p>
              <a href="#!" className="btn btn-lg btn-primary rounded-pill me-3"  role="button">
Sign up
              </a>
              <a href="#!" className="btn btn-link me-2 fs-8 p-0"  role="button">
Check Demo                <span className="fa-solid fa-angle-right ms-2 fs-9">                </span>
              </a>
            </div>
            <div className="col-12 col-lg-auto d-none d-lg-block">
              <div className="hero-image-container position-absolute h-100 end-0 d-flex align-items-center">
                <div className="position-relative">
                  <div className="position-absolute end-0 hero-image-container-overlay" style={{"transform":"skewY(-8deg)."} as CSSProperties}>                  </div>
                  <PhoenixImage src="/assets/img/bg/bg-36.png" alt="" className="position-absolute end-0 hero-image-container-bg" />
                  <PhoenixImage src="/assets/img/bg/bg-34.png" alt="hero-header" className="w-100 d-dark-none rounded-2 hero-image-shadow" />
                  <PhoenixImage src="/assets/img/bg/bg-35.png" alt="hero-header" className="w-100 d-light-none rounded-2 hero-image-shadow" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-small px-md-8 mb-8 d-lg-none">
          <div className="position-relative">
            <div className="position-absolute end-0 hero-image-container-overlay">            </div>
            <PhoenixImage src="/assets/img/bg/bg-39.png" alt="" className="position-absolute top-50 hero-image-container-bg" />
            <PhoenixImage src="/assets/img/bg/bg-34.png" alt="hero-header" className="img-fluid ms-auto d-dark-none rounded-2 hero-image-shadow" />
            <PhoenixImage src="/assets/img/bg/bg-35.png" alt="hero-header" className="img-fluid ms-auto d-light-none rounded-2 hero-image-shadow" />
          </div>
        </div>
      </div>
    </section>



    <section>
      <div className="container-small px-lg-7 px-xxl-3">
        <div className="row g-0">
          <div className="col-6 col-md-3">
            <div className="p-2 p-lg-5 d-flex flex-center h-100 border-1 border-dashed border-bottom border-end border-translucent">
              <PhoenixImage src="/assets/img/brand2/netflix-n.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-2 p-lg-5 d-flex flex-center h-100 border-1 border-dashed border-bottom border-end-md border-translucent">
              <PhoenixImage src="/assets/img/brand2/blender.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-2 p-lg-5 d-flex flex-center h-100 border-1 border-dashed border-bottom border-end border-end-md border-translucent">
              <PhoenixImage src="/assets/img/brand2/upwork.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-2 p-lg-5 d-flex flex-center h-100 border-1 border-dashed border-bottom border-end-lg-0 border-translucent">
              <PhoenixImage src="/assets/img/brand2/facebook-f.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-2 p-lg-5 d-flex flex-center h-100 border-1 border-dashed border-end border-bottom border-bottom-md-0 border-translucent">
              <PhoenixImage src="/assets/img/brand2/pocket.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-2 p-lg-5 d-flex flex-center h-100 border-1 border-dashed border-end-md border-bottom border-bottom-md-0 border-translucent">
              <PhoenixImage src="/assets/img/brand2/mail-bluster-1.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-2 p-lg-5 d-flex flex-center h-100 border-1 border-dashed border-end border-translucent">
              <PhoenixImage src="/assets/img/brand2/discord.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-2 p-lg-5 d-flex flex-center h-100 border-1 border-dashed border-end-lg-0 border-translucent">
              <PhoenixImage src="/assets/img/brand2/google-g.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>





    <section className="pt-13 pb-10" id="feature">
      <div className="container-small px-lg-7 px-xxl-3">
        <div className="text-center mb-10 mb-md-5">
          <h5 className="text-info mb-3">
Features
          </h5>
          <h2 className="mb-3 lh-base">
Complete suite of 
            <br className="d-sm-none" />
payment products.
          </h2>
          <p className="mb-0">
Focus only on functionalities for your digital products with Phoenix! Leave the UIs for us.
          </p>
          <div className="text-center mt-5">
            <a href="#!" className="btn btn-outline-primary">
See more              <span className="fa-solid fa-angle-right ms-2">              </span>
            </a>
          </div>
        </div>
        <div className="row flex-between-center px-xl-11 mb-10 mb-md-9">
          <div className="col-md-6 order-1 order-md-0 text-center text-md-start">
            <h4 className="mb-3">
Recieve the signals instantly
            </h4>
            <p className="mb-5">
Phoenix allows you to receive every signal instantly and fruitfully. No need for long waits.
            </p>
            <a href="#!" className="btn btn-link me-2 p-0 fs-9"  role="button">
Check Demo              <i className="fa-solid fa-angle-right ms-2">              </i>
            </a>
          </div>
          <div className="col-md-5 mb-5 mb-md-0 text-center">
            <PhoenixImage src="/assets/img/spot-illustrations/34.png" alt="" className="w-75 w-md-100 d-dark-none" />
            <PhoenixImage src="/assets/img/spot-illustrations/34_2.png" alt="" className="w-75 w-md-100 d-light-none" />
          </div>
        </div>
        <div className="row flex-between-center px-xl-11 mb-10 mb-md-9">
          <div className="col-md-6 order-1 order-md-0 text-center text-md-start">
            <h4 className="mb-3">
Make everyday a joyride
            </h4>
            <p className="mb-5">
Phoenix helps you show reports and data in one place and make the journey a glee trip for everyone.
            </p>
            <a href="#!" className="btn btn-link me-2 p-0 fs-9"  role="button">
Check Demo              <i className="fa-solid fa-angle-right ms-2">              </i>
            </a>
          </div>
          <div className="col-md-5 mb-5 mb-md-0 text-center">
            <PhoenixImage src="/assets/img/spot-illustrations/35.png" alt="" className="w-75 w-md-100 d-dark-none" />
            <PhoenixImage src="/assets/img/spot-illustrations/35_2.png" alt="" className="w-75 w-md-100 d-light-none" />
          </div>
        </div>
        <div className="row flex-between-center px-xl-11 false">
          <div className="col-md-6 order-1 order-md-0 text-center text-md-start">
            <h4 className="mb-3">
See Your Revenue Grow
            </h4>
            <p className="mb-5">
Grow with Phoenix. We help you with everything you might need, We make it easy and keep it simple.
            </p>
            <a href="#!" className="btn btn-link me-2 p-0 fs-9"  role="button">
Check Demo              <i className="fa-solid fa-angle-right ms-2">              </i>
            </a>
          </div>
          <div className="col-md-5 mb-5 mb-md-0 text-center">
            <PhoenixImage src="/assets/img/spot-illustrations/36.png" alt="" className="w-75 w-md-100 d-dark-none" />
            <PhoenixImage src="/assets/img/spot-illustrations/36_2.png" alt="" className="w-75 w-md-100 d-light-none" />
          </div>
        </div>
      </div>
    </section>





    <section className="pb-14 overflow-x-hidden">
      <div className="container-small px-lg-7 px-xxl-3">
        <div className="text-center mb-5 position-relative">
          <h5 className="text-info mb-3">
Testimonial
          </h5>
          <h2 className="mb-2 lh-base">
What our customers has to say about us
          </h2>
        </div>
        <div className="carousel testimonial-carousel slide position-relative dark__bg-gray-1100" id="carouselExampleIndicators" data-bs-ride={"carousel"}>
          <div className="bg-holder d-none d-xl-block" style={{"backgroundImage":"url(../../assets/img/bg/39.png)","backgroundSize":"186px","backgroundPosition":"top 20px right 20px"} as CSSProperties}>          </div>
          <PhoenixImage src="/assets/img/bg/bg-left-22.png" alt="" className="position-absolute d-none d-lg-block" width={150} />
          <PhoenixImage src="/assets/img/bg/bg-right-22.png" alt="" className="position-absolute d-none d-lg-block" width={150} />
          <div className="carousel-inner">
            <div className="carousel-item text-center py-8 px-5 px-xl-15 active">
              <span className="fa fa-star text-warning">              </span>
              <span className="fa fa-star text-warning">              </span>
              <span className="fa fa-star text-warning">              </span>
              <span className="fa fa-star text-warning">              </span>
              <span className="fa fa-star text-warning">              </span>
              <h3 className="fw-semibold fst-italic mt-3 mb-8 w-xl-70 mx-auto lh-base">
Amazing theme, excellent support from ThemeWagon with really fast reaction time! Thank you!
              </h3>
              <div className="d-flex align-items-center justify-content-center gap-3 mx-auto">
                <div className="avatar avatar-3xl ">
                  <PhoenixImage src="/assets/img/team/12.webp" alt="" className="rounded-circle border border-2 border-primary" />
                </div>
                <div className="text-start">
                  <h5>
Johna Austin
                  </h5>
                  <p className="mb-0">
CEO
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item text-center py-8 px-5 px-xl-15 false">
              <span className="fa fa-star text-warning">              </span>
              <span className="fa fa-star text-warning">              </span>
              <span className="fa fa-star text-warning">              </span>
              <span className="fa fa-star text-warning">              </span>
              <span className="fa fa-star-half-alt star-icon text-warning">              </span>
              <h3 className="fw-semibold fst-italic mt-3 mb-8 w-xl-70 mx-auto lh-base">
An excellent theme with fast support team to aid the development process! Thanks team Phoenix!
              </h3>
              <div className="d-flex align-items-center justify-content-center gap-3 mx-auto">
                <div className="avatar avatar-3xl ">
                  <PhoenixImage src="/assets/img/team/13.webp" alt="" className="rounded-circle border border-2 border-primary" />
                </div>
                <div className="text-start">
                  <h5>
Monica Gomez
                  </h5>
                  <p className="mb-0">
Founder
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item text-center py-8 px-5 px-xl-15 false">
              <span className="fa fa-star text-warning">              </span>
              <span className="fa fa-star text-warning">              </span>
              <span className="fa fa-star text-warning">              </span>
              <span className="fa fa-star text-warning">              </span>
              <span className="fa-regular fa-star text-warning-light" data-bs-theme={"light"}>              </span>
              <h3 className="fw-semibold fst-italic mt-3 mb-8 w-xl-70 mx-auto lh-base">
Amazing support system with quickest reply and steady communication of the concerned.
              </h3>
              <div className="d-flex align-items-center justify-content-center gap-3 mx-auto">
                <div className="avatar avatar-3xl ">
                  <PhoenixImage src="/assets/img/team/14.webp" alt="" className="rounded-circle border border-2 border-primary" />
                </div>
                <div className="text-start">
                  <h5>
Marc Chiasson
                  </h5>
                  <p className="mb-0">
CTO
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-indicators">
            <button className="active" type="button" data-bs-target={"#carouselExampleIndicators"} data-bs-slide-to={"0"} aria-current="true" aria-label="Slide 1">            </button>
            <button type="button" data-bs-target={"#carouselExampleIndicators"} data-bs-slide-to={"1"} aria-label="Slide 2">            </button>
            <button type="button" data-bs-target={"#carouselExampleIndicators"} data-bs-slide-to={"2"} aria-label="Slide 3">            </button>
          </div>
        </div>
      </div>
    </section>



    <section className="gallery">
      <div className="gallery-overlay position-absolute left-0 w-100">      </div>
      <div className="bg-holder d-none d-xl-block" style={{"backgroundImage":"url(../../assets/img/bg/bg-left-26.png)","backgroundSize":"auto","backgroundPosition":"left 65%"} as CSSProperties}>      </div>
      <div className="bg-holder d-none d-xl-block" style={{"backgroundImage":"url(../../assets/img/bg/bg-right-26.png)","backgroundSize":"auto","backgroundPosition":"right 62%"} as CSSProperties}>      </div>
      <div className="container-small position-relative px-lg-7 px-xxl-3">
        <div className="text-center mb-7">
          <h5 className="text-info mb-3">
Gallery
          </h5>
          <h2 className="mb-2">
Our best works
          </h2>
        </div>
        <ul className="nav mb-6 w-max-content mx-auto" data-filter-nav>
          <li className="nav-item">
            <a href="#" className="isotope-nav cursor-pointer active" data-filter={"*"}>
First
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="isotope-nav cursor-pointer" data-filter={".second"}>
Second
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="isotope-nav cursor-pointer" data-filter={".third"}>
Third
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="isotope-nav cursor-pointer" data-filter={".fourth"}>
Fourth
            </a>
          </li>
        </ul>
        <div className="row g-3" id="image_gallery" data-sl-isotope={"{\"layoutMode\":\"packery\"}"}>
          <div className="col-6 col-md-4 px-2 isotope-item fourth">
            <a href="#!" data-bigpicture={"{\"gallery\":\"#image_gallery\"}"} data-bp={"../../assets/img/gallery/27.png"}>
              <PhoenixImage src="/assets/img/gallery/27.png" alt="" className="rounded img-fluid w-100" />
            </a>
          </div>
          <div className="col-6 col-md-4 px-2 isotope-item third">
            <a href="#!" data-bigpicture={"{\"gallery\":\"#image_gallery\"}"} data-bp={"../../assets/img/gallery/28.png"}>
              <PhoenixImage src="/assets/img/gallery/28.png" alt="" className="rounded img-fluid w-100" />
            </a>
          </div>
          <div className="col-6 col-md-4 px-2 isotope-item second">
            <a href="#!" data-bigpicture={"{\"gallery\":\"#image_gallery\"}"} data-bp={"../../assets/img/gallery/29.png"}>
              <PhoenixImage src="/assets/img/gallery/29.png" alt="" className="rounded img-fluid w-100" />
            </a>
          </div>
          <div className="col-6 col-md-4 px-2 isotope-item third">
            <a href="#!" data-bigpicture={"{\"gallery\":\"#image_gallery\"}"} data-bp={"../../assets/img/gallery/30.png"}>
              <PhoenixImage src="/assets/img/gallery/30.png" alt="" className="rounded img-fluid w-100" />
            </a>
          </div>
          <div className="col-6 col-md-4 px-2 isotope-item third">
            <a href="#!" data-bigpicture={"{\"gallery\":\"#image_gallery\"}"} data-bp={"../../assets/img/gallery/31.png"}>
              <PhoenixImage src="/assets/img/gallery/31.png" alt="" className="rounded img-fluid w-100" />
            </a>
          </div>
          <div className="col-6 col-md-4 px-2 isotope-item second">
            <a href="#!" data-bigpicture={"{\"gallery\":\"#image_gallery\"}"} data-bp={"../../assets/img/gallery/32.png"}>
              <PhoenixImage src="/assets/img/gallery/32.png" alt="" className="rounded img-fluid w-100" />
            </a>
          </div>
          <div className="col-6 col-md-4 px-2 isotope-item fourth">
            <a href="#!" data-bigpicture={"{\"gallery\":\"#image_gallery\"}"} data-bp={"../../assets/img/gallery/33.png"}>
              <PhoenixImage src="/assets/img/gallery/33.png" alt="" className="rounded img-fluid w-100" />
            </a>
          </div>
          <div className="col-6 col-md-4 px-2 isotope-item third">
            <a href="#!" data-bigpicture={"{\"gallery\":\"#image_gallery\"}"} data-bp={"../../assets/img/gallery/34.png"}>
              <PhoenixImage src="/assets/img/gallery/34.png" alt="" className="rounded img-fluid w-100" />
            </a>
          </div>
        </div>
      </div>
    </section>



    <section className="overflow-hidden rotating-earth-container pb-5 pb-md-0 pt-12">
      <div className="container-small px-lg-7 px-xxl-3">
        <div className="row">
          <div className="col-lg-6 text-center text-lg-start">
            <h5 className="text-info mb-3">
One-stop solution
            </h5>
            <h2 className="mb-2 lh-base">
Used by millions of users
            </h2>
            <h1 className="fs-4 fs-sm-2 mb-3 text-gradient-info fw-black">
WORLDWIDE
            </h1>
            <p className="mb-10">
Keep it simple with Phoenix and help your organization grow with the abundance you look for.
            </p>
            <div className="row gy-6">
              <div className="col-sm-6 text-center text-lg-start">
                <PhoenixImage src="/assets/img/icons/lightning-speed.png" alt="" className="mb-4 d-dark-none" />
                <PhoenixImage src="/assets/img/icons/lightning-speed-dark.png" alt="" className="mb-4 d-light-none" />
                <h4 className="mb-2">
Lightning Speed
                </h4>
                <p>
Grow fast with Phoenix!
                </p>
              </div>
              <div className="col-sm-6 text-center text-lg-start">
                <PhoenixImage src="/assets/img/icons/best-statistics.png" alt="" className="mb-4 d-dark-none" />
                <PhoenixImage src="/assets/img/icons/best-statistics-dark.png" alt="" className="mb-4 d-light-none" />
                <h4 className="mb-2">
Best Statistics
                </h4>
                <p>
Get all reports at hand!
                </p>
              </div>
              <div className="col-sm-6 text-center text-lg-start">
                <PhoenixImage src="/assets/img/icons/all-night.png" alt="" className="mb-4 d-dark-none" />
                <PhoenixImage src="/assets/img/icons/all-night-dark.png" alt="" className="mb-4 d-light-none" />
                <h4 className="mb-2">
All-night Protection
                </h4>
                <p>
Security Assured: Ensure data Safety with Phoenix!
                </p>
              </div>
              <div className="col-sm-6 text-center text-lg-start">
                <PhoenixImage src="/assets/img/icons/editable-features.png" alt="" className="mb-4 d-dark-none" />
                <PhoenixImage src="/assets/img/icons/editable-features-dark.png" alt="" className="mb-4 d-light-none" />
                <h4 className="mb-2">
Editable Features
                </h4>
                <p>
Edits made easy and safe!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="position-relative position-lg-absolute rotating-earth">
              <div className="lottie d-dark-none" data-options={"{\"path\":\"../../assets/img/animated-icons/rotating-earth.json\"}"}>              </div>
              <div className="lottie d-light-none" data-options={"{\"path\":\"../../assets/img/animated-icons/rotating-earth-dark.json\"}"}>              </div>
              <PhoenixImage src="/assets/img/spot-illustrations/earth-plane.png" alt="" className="position-absolute d-dark-none" />
              <PhoenixImage src="/assets/img/spot-illustrations/earth-plane-dark.png" alt="" className="position-absolute d-light-none" />
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="counter-container">
      <div className="position-absolute start-0 end-0 w-100 counter-overlay" style={{"transform":"skewY(-8deg)"} as CSSProperties}>      </div>
      <div className="bg-holder d-none d-lg-block" style={{"backgroundImage":"url(../../assets/img/bg/bg-left-25.png)","backgroundSize":"auto","backgroundPosition":"left center"} as CSSProperties}>      </div>
      <div className="bg-holder d-none d-lg-block" style={{"backgroundImage":"url(../../assets/img/bg/bg-right-25.png)","backgroundSize":"auto","backgroundPosition":"right center"} as CSSProperties}>      </div>
      <div className="container-small position-relative">
        <div className="row gx-0 gy-8 justify-content-center">
          <div className="col-sm-6 col-md-auto me-md-5 pe-md-5 border-end-md border-translucent border-dashed text-center order-2 order-md-0">
            <h1 className="fs-3 fs-lg-1 fw-bolder text-info mb-3">
              <span>
$
              </span>
              <span data-countup={"{\"endValue\":8976,\"duration\":5,\"suffix\":\"\"}"}>              </span>
            </h1>
            <h4>
Revenue
            </h4>
          </div>
          <div className="col-sm-6 col-md-auto me-md-5 pe-md-5 border-end-md border-translucent border-dashed text-center order-1 order-md-0">
            <h1 className="fs-3 fs-lg-1 fw-bolder text-info mb-3">
              <span data-countup={"{\"endValue\":308,\"duration\":10,\"suffix\":\"\"}"}>              </span>
              <span>
K
              </span>
            </h1>
            <h4>
User
            </h4>
          </div>
          <div className="col-sm-6 col-md-auto me-md-5 pe-md-5 border-end-md border-translucent border-dashed text-center">
            <h1 className="fs-3 fs-lg-1 fw-bolder text-info mb-3" data-countup={"{\"endValue\":12,\"duration\":0.5,\"suffix\":\"\"}"}>            </h1>
            <h4>
Countries
            </h4>
          </div>
          <div className="col-sm-6 col-md-auto text-center">
            <h1 className="fs-3 fs-lg-1 fw-bolder text-info mb-3" data-countup={"{\"endValue\":125,\"duration\":15,\"suffix\":\"+\"}"}>            </h1>
            <h4>
Stories
            </h4>
          </div>
        </div>
      </div>
    </section>



    <section className="position-static pt-15 pt-md-5 pt-lg-2">
      <div className="container-small px-lg-7 px-xxl-3">
        <div className="text-center mb-3 mb-lg-7">
          <h5 className="text-info mb-3">
Pricing
          </h5>
          <h2 className="mb-2">
Choose the best deal for you
          </h2>
        </div>
        <div className="row g-3 mb-7 mb-lg-11">
          <div className="col-lg-4">
            <div className="pricing-card">
              <div className="card bg-transparent border-0">
                <div className="card-body p-7">
                  <h3 className="mb-5">
Starter
                  </h3>
                  <h1 className="fs-3 d-flex align-items-center gap-1 mb-3">
$15
                    <span className="fs-8 fw-normal">
/ month
                    </span>
                  </h1>
                  <button className="btn btn-lg w-100 mb-7 btn-outline-primary">
Buy
                  </button>
                  <h5 className="mb-4">
What’s included
                  </h5>
                  <ul className="fa-ul ps-4 m-0 pricing">
                    <li className="d-flex align-items-center mb-3">
                      <span className="fa-li">
                        <span className="fas fa-check text-primary">                        </span>
                      </span>
                      <p className="mb-0">
Timeline
                      </p>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <span className="fa-li">
                        <span>                        </span>
                      </span>
                      <p className="mb-0">
Advanced Search
                      </p>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <span className="fa-li">
                        <span>                        </span>
                      </span>
                      <p className="mb-0">
Custom fields
                      </p>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <span className="fa-li">
                        <span>                        </span>
                      </span>
                      <p className="mb-0">
Task dependencies
                      </p>
                    </li>
                    <li className="d-flex align-items-center mb-0">
                      <span className="fa-li">
                        <span>                        </span>
                      </span>
                      <p className="mb-0">
{"Private teams & projects"}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing-card">
              <div className="card bg-transparent border border-2 border-info rounded-4">
                <div className="card-body p-7">
                  <h3 className="mb-5">
Business
                  </h3>
                  <h1 className="fs-3 d-flex align-items-center gap-1 mb-3">
$23
                    <span className="fs-8 fw-normal">
/ month
                    </span>
                  </h1>
                  <button className="btn btn-lg w-100 mb-7 btn-primary">
Buy
                  </button>
                  <h5 className="mb-4">
What’s included
                  </h5>
                  <ul className="fa-ul ps-4 m-0 pricing">
                    <li className="d-flex align-items-center mb-3">
                      <span className="fa-li">
                        <span className="fas fa-check text-primary">                        </span>
                      </span>
                      <p className="mb-0">
Timeline
                      </p>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <span className="fa-li">
                        <span className="fas fa-check text-primary">                        </span>
                      </span>
                      <p className="mb-0">
Advanced Search
                      </p>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <span className="fa-li">
                        <span className="fas fa-check text-primary">                        </span>
                      </span>
                      <p className="mb-0">
Custom fields
                      </p>
                      <span className="badge badge-phoenix badge-phoenix-info ms-2 fs-10">
Info
                      </span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <span className="fa-li">
                        <span>                        </span>
                      </span>
                      <p className="mb-0">
Task dependencies
                      </p>
                    </li>
                    <li className="d-flex align-items-center mb-0">
                      <span className="fa-li">
                        <span>                        </span>
                      </span>
                      <p className="mb-0">
{"Private teams & projects"}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing-card">
              <div className="card bg-transparent border-0">
                <div className="card-body p-7">
                  <h3 className="mb-5">
Enterprise
                  </h3>
                  <h1 className="fs-3 d-flex align-items-center gap-1 mb-3">
$40
                    <span className="fs-8 fw-normal">
/ month
                    </span>
                  </h1>
                  <button className="btn btn-lg w-100 mb-7 btn-outline-primary">
Buy
                  </button>
                  <h5 className="mb-4">
What’s included
                  </h5>
                  <ul className="fa-ul ps-4 m-0 pricing">
                    <li className="d-flex align-items-center mb-3">
                      <span className="fa-li">
                        <span className="fas fa-check text-primary">                        </span>
                      </span>
                      <p className="mb-0">
Timeline
                      </p>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <span className="fa-li">
                        <span className="fas fa-check text-primary">                        </span>
                      </span>
                      <p className="mb-0">
Advanced Search
                      </p>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <span className="fa-li">
                        <span className="fas fa-check text-primary">                        </span>
                      </span>
                      <p className="mb-0">
Custom fields
                      </p>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <span className="fa-li">
                        <span className="fas fa-check text-primary">                        </span>
                      </span>
                      <p className="mb-0">
Task dependencies
                      </p>
                    </li>
                    <li className="d-flex align-items-center mb-0">
                      <span className="fa-li">
                        <span className="fas fa-check text-primary">                        </span>
                      </span>
                      <p className="mb-0">
{"Private teams & projects"}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded-4 border-0 offer-card">
          <div className="card-body d-md-flex align-items-center gap-4 py-5">
            <PhoenixImage src="/assets/img/spot-illustrations/air-plane.png" alt="" className="mb-4 mb-md-0 d-dark-none" width={155} />
            <PhoenixImage src="/assets/img/spot-illustrations/air-plane-dark.png" alt="" className="mb-4 mb-md-0 d-light-none" width={155} />
            <div>
              <p>
Business Starter, Business Standard, and Business Plus plans can be purchased for a maximum of 300 users. There is no minimum or maximum user limit for Enterprise plans.
              </p>
              <p className="mb-6">
Phoenix customers may have access to additional features for a limited promotional period
              </p>
              <a href="#!" className="btn btn-link me-2 p-0 fs-9"  role="button">
Contact Support                <i className="fa-solid fa-angle-right ms-2">                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>





    <section className="pt-10" id="blog">
      <div className="container-small px-lg-7 px-xxl-3">
        <div className="text-center mb-5 mb-8">
          <h5 className="text-info mb-3">
Blogs
          </h5>
          <h2 className="mb-2">
Our most viewed articles
          </h2>
        </div>
        <div className="row gx-3 gy-7">
          <div className="col-lg-4">
            <div className="blog-card">
              <PhoenixImage src="/assets/img/blog/blog-5.png" alt="" className="w-100 rounded-3" />
              <div className="d-flex align-items-cente mt-3">
                <a href="#!" className="btn-link text-decoration-none text-body-secondary d-flex align-items-center me-3">
                  <span className="fa-solid fa-eye fs-9">                  </span>                  <span className="fs-10 ms-1 lh-1">
2563
                  </span>
                </a>
                <a href="#!" className="btn-link text-decoration-none text-body-secondary d-flex align-items-center me-3">
                  <span className="fa-solid fa-heart fs-9">                  </span>                  <span className="ms-1 fs-10 lh-1">
125
                  </span>
                </a>
                <a href="#!" className="btn-link text-decoration-none text-body-secondary d-flex align-items-center">
                  <span className="fa-solid fa-comment fs-9">                  </span>                  <span className="ms-1 fs-10 lh-1">
125
                  </span>
                </a>
              </div>
              <span className="badge text-bg-primary mb-2 mt-4">
SEO
              </span>
              <h4 className="mb-3 pe-sm-5 lh-lg">
Top 10 ways to Ace SEO for your business
              </h4>
              <a href="#!" className="btn-link px-0 d-flex align-items-center fs-9 fw-bold"  role="button">
See more                <span className="fa-solid fa-angle-right ms-2">                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-card">
              <PhoenixImage src="/assets/img/blog/blog-6.png" alt="" className="w-100 rounded-3" />
              <div className="d-flex align-items-cente mt-3">
                <a href="#!" className="btn-link text-decoration-none text-body-secondary d-flex align-items-center me-3">
                  <span className="fa-solid fa-eye fs-9">                  </span>                  <span className="fs-10 ms-1 lh-1">
1256
                  </span>
                </a>
                <a href="#!" className="btn-link text-decoration-none text-body-secondary d-flex align-items-center me-3">
                  <span className="fa-solid fa-heart fs-9">                  </span>                  <span className="ms-1 fs-10 lh-1">
325
                  </span>
                </a>
                <a href="#!" className="btn-link text-decoration-none text-body-secondary d-flex align-items-center">
                  <span className="fa-solid fa-comment fs-9">                  </span>                  <span className="ms-1 fs-10 lh-1">
32
                  </span>
                </a>
              </div>
              <span className="badge text-bg-primary mb-2 mt-4">
Marketing
              </span>
              <h4 className="mb-3 pe-sm-5 lh-lg">
Top 12 Marketing strategies you can take
              </h4>
              <a href="#!" className="btn-link px-0 d-flex align-items-center fs-9 fw-bold"  role="button">
See more                <span className="fa-solid fa-angle-right ms-2">                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-card">
              <PhoenixImage src="/assets/img/blog/blog-7.png" alt="" className="w-100 rounded-3" />
              <div className="d-flex align-items-cente mt-3">
                <a href="#!" className="btn-link text-decoration-none text-body-secondary d-flex align-items-center me-3">
                  <span className="fa-solid fa-eye fs-9">                  </span>                  <span className="fs-10 ms-1 lh-1">
142
                  </span>
                </a>
                <a href="#!" className="btn-link text-decoration-none text-body-secondary d-flex align-items-center me-3">
                  <span className="fa-solid fa-heart fs-9">                  </span>                  <span className="ms-1 fs-10 lh-1">
123
                  </span>
                </a>
                <a href="#!" className="btn-link text-decoration-none text-body-secondary d-flex align-items-center">
                  <span className="fa-solid fa-comment fs-9">                  </span>                  <span className="ms-1 fs-10 lh-1">
22
                  </span>
                </a>
              </div>
              <span className="badge text-bg-primary mb-2 mt-4">
Marketing
              </span>
              <h4 className="mb-3 pe-sm-5 lh-lg">
The top 7 methods to improve as a marketer
              </h4>
              <a href="#!" className="btn-link px-0 d-flex align-items-center fs-9 fw-bold"  role="button">
See more                <span className="fa-solid fa-angle-right ms-2">                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>





    <section className="pb-8 pb-sm-10 pb-xl-14">
      <div className="container-small px-lg-7 px-xxl-3">
        <div className="text-center mb-7">
          <h5 className="text-info mb-3">
Contact
          </h5>
          <h2 className="mb-2">
Choose the best deal for you
          </h2>
        </div>
        <div className="row">
          <div className="col-12 mb-10">
            <div className="googlemap" data-googlemap data-gmap data-latlng={"40.7228022,-74.0020158"} data-scrollwheel={"false"} data-zoom={"15"} style={{"height":"381px","borderRadius":"1.5rem"} as CSSProperties}>
              <div className="marker-content py-3">
                <h5>
Google map
                </h5>
                <p>
A nice template for your site.
                  <br />
Customize it as you want.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-5 g-lg-5">
          <div className="col-md-6 mb-5 mb-md-0 text-center text-md-start">
            <h3 className="mb-3">
Stay connected
            </h3>
            <p className="mb-5">
Stay connected with Phoenix's Help Center; Phoenix is available for your necessities at all times.
            </p>
            <div className="d-flex flex-column align-items-center align-items-md-start gap-3 gap-md-0">
              <div className="d-md-flex align-items-center">
                <div className="icon-wrapper shadow-info">
                  <span className="uil uil-phone text-primary fs-4 z-1 ms-2" data-bs-theme={"light"}>                  </span>
                </div>
                <div className="flex-1 ms-3">
                  <a href="tel:+871406-7509" className="link-900">
(871) 406-7509
                  </a>
                </div>
              </div>
              <div className="d-md-flex align-items-center">
                <div className="icon-wrapper shadow-info">
                  <span className="uil uil-envelope text-primary fs-4 z-1 ms-2" data-bs-theme={"light"}>                  </span>
                </div>
                <div className="flex-1 ms-3">
                  <a href="mailto:phoenix@email.com" className="fw-semibold text-body">
phoenix@email.com
                  </a>
                </div>
              </div>
              <div className="mb-6 d-md-flex align-items-center">
                <div className="icon-wrapper shadow-info">
                  <span className="uil uil-map-marker text-primary fs-4 z-1 ms-2" data-bs-theme={"light"}>                  </span>
                </div>
                <div className="flex-1 ms-3">
                  <a href="#!" className="fw-semibold text-body">
39163 Amir Drive Suite 802
                  </a>
                </div>
              </div>
              <div className="d-flex">
                <a href="#!">
                  <span className="fa-brands fa-facebook fs-6 text-primary me-3">                  </span>
                </a>
                <a href="#!">
                  <span className="fa-brands fa-twitter fs-6 text-primary me-3">                  </span>
                </a>
                <a href="#!">
                  <span className="fa-brands fa-linkedin-in fs-6 text-primary">                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center text-md-start">
            <h3 className="mb-3">
Drop us a line
            </h3>
            <p className="mb-7">
If you have any query or suggestion , we are open to learn from you, Lets talk, reach us anytime.
            </p>
            <form className="row g-4">
              <div className="col-12">
                <input className="form-control bg-body-emphasis" type="text" name placeholder="Name" required />
              </div>
              <div className="col-12">
                <input className="form-control bg-body-emphasis" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="col-12">
                <textarea className="form-control bg-body-emphasis" rows={6} name="message" placeholder="Message" required defaultValue="" />
              </div>
              <div className="col-12 d-grid">
                <button className="btn btn-outline-primary" type="submit">
Submit
                </button>
              </div>
              <div className="feedback">              </div>
            </form>
          </div>
        </div>
      </div>
    </section>



    <section className="alternate-landing-team" id="team">
      <div className="position-absolute w-100 h-100 start-0 end-0 top-0 bg-body dark__bg-gray-1000" style={{"transform":"skewY(-6deg)","transformOrigin":"right"} as CSSProperties}>      </div>
      <div className="bg-holder d-none d-xl-block" style={{"backgroundImage":"url(../../assets/img/bg/bg-left-23.png)","backgroundSize":"auto","backgroundPosition":"left center"} as CSSProperties}>      </div>
      <div className="bg-holder d-none d-xl-block" style={{"backgroundImage":"url(../../assets/img/bg/bg-right-23.png)","backgroundSize":"auto","backgroundPosition":"right center"} as CSSProperties}>      </div>
      <div className="text-center mb-11 position-relative">
        <h5 className="text-info mb-3">
Team
        </h5>
        <h2 className="mb-2">
Our small team behind 
          <br className="d-sm-none" />
our success
        </h2>
      </div>
      <div className="container-small position-relative">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <div className="row gx-3 gy-6 justify-content-center">
              <div className="col-sm-6 col-md-4">
                <div className="text-center">
                  <PhoenixImage src="/assets/img/team/70.webp" alt="" className="w-70 w-sm-100 rounded-4 mb-3" />
                  <h4>
Brett Bezos
                  </h4>
                  <h5 className="fw-semibold">
CEO
                  </h5>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="text-center">
                  <PhoenixImage src="/assets/img/team/15.webp" alt="" className="w-70 w-sm-100 rounded-4 mb-3" />
                  <h4>
Lucas Murray
                  </h4>
                  <h5 className="fw-semibold">
General Manager
                  </h5>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="text-center">
                  <PhoenixImage src="/assets/img/team/71.webp" alt="" className="w-70 w-sm-100 rounded-4 mb-3" />
                  <h4>
Casey Andrews
                  </h4>
                  <h5 className="fw-semibold">
IT Specialist
                  </h5>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="text-center">
                  <PhoenixImage src="/assets/img/team/72.webp" alt="" className="w-70 w-sm-100 rounded-4 mb-3" />
                  <h4>
Poppy Russell
                  </h4>
                  <h5 className="fw-semibold">
Frontend Dev
                  </h5>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="text-center">
                  <PhoenixImage src="/assets/img/team/73.webp" alt="" className="w-70 w-sm-100 rounded-4 mb-3" />
                  <h4>
Emma Knowles
                  </h4>
                  <h5 className="fw-semibold">
Backend Dev
                  </h5>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="text-center">
                  <PhoenixImage src="/assets/img/team/74.webp" alt="" className="w-70 w-sm-100 rounded-4 mb-3" />
                  <h4>
Megan Holmes
                  </h4>
                  <h5 className="fw-semibold">
HR
                  </h5>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="text-center">
                  <PhoenixImage src="/assets/img/team/75.webp" alt="" className="w-70 w-sm-100 rounded-4 mb-3" />
                  <h4>
Cameron Fletcher
                  </h4>
                  <h5 className="fw-semibold">
UX/UI Designer
                  </h5>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="text-center">
                  <PhoenixImage src="/assets/img/team/20.webp" alt="" className="w-70 w-sm-100 rounded-4 mb-3" />
                  <h4>
Amber Norris
                  </h4>
                  <h5 className="fw-semibold">
Consultant
                  </h5>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="text-center">
                  <PhoenixImage src="/assets/img/team/76.webp" alt="" className="w-70 w-sm-100 rounded-4 mb-3" />
                  <h4>
Scooby
                  </h4>
                  <h5 className="fw-semibold">
Dog
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="bg-body dark__bg-gray-1000 pb-10 overflow-hidden">
      <div className="container-small px-lg-7 px-xxl-3">
        <div className="position-absolute w-100 h-100 start-0 end-0 opacity-50" style={{"bottom":"-350px","transform":"skewY(-8deg)","background":"linear-gradient(102.27deg, #38ABFF 4.69%, #3874FF 106.27%)"} as CSSProperties}>        </div>
        <div className="bg-holder" style={{"backgroundImage":"url(../../assets/img/bg/bg-left-24.png)","backgroundSize":"auto","backgroundPosition":"left center"} as CSSProperties}>        </div>
        <div className="bg-holder" style={{"backgroundImage":"url(../../assets/img/bg/bg-right-24.png)","backgroundSize":"auto","backgroundPosition":"right center"} as CSSProperties}>        </div>
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="card py-md-9 px-md-13 border-0 z-1 shadow-lg">
              <div className="bg-holder" style={{"backgroundImage":"url(../../assets/img/bg/bg-38.png)","backgroundPosition":"center","backgroundSize":"100%"} as CSSProperties}>              </div>
              <div className="card-body position-relative">
                <PhoenixImage src="/assets/img/spot-illustrations/37.png" alt="..." className="img-fluid mb-5 d-dark-none" width={260} />
                <PhoenixImage src="/assets/img/spot-illustrations/37_2.png" alt="..." className="img-fluid mb-5 d-light-none" width={260} />
                <p className="fw-bold">
2008 Premium Icons 
                  <span className="text-primary fs-6">
.
                  </span>
 Included FREE with it
                </p>
                <h1 className="fs-6 fs-sm-4 fs-lg-2 fw-bolder lh-sm mb-3">
Join
                  <span className="gradient-text-primary mx-2">
Phoenix
                  </span>
                  <span>
Today
                  </span>
                </h1>
                <form className="d-flex justify-content-center mb-3 px-xxl-15">
                  <div className="d-grid d-sm-block">                  </div>
                  <input className="form-control me-3" id="ctaEmail1" type="email" placeholder="Email" aria-describedby="ctaEmail1" />
                  <button className="btn btn-primary" type="submit">
Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>





    <section className="bg-dark dark__bg-gray-1000" data-bs-theme={"dark"}>
      <div className="container-small px-lg-7 px-xxl-3">
        <div className="row gx-xxl-8 gy-5 align-items-center mb-5">
          <div className="col-xl-auto text-center">
            <a href="#">
              <PhoenixImage src="/assets/img/icons/logo-white.png" alt="" height={48} />
            </a>
          </div>
          <div className="col-xl-auto flex-1">
            <ul className="list-unstyled d-flex justify-content-center flex-wrap mb-0 border-end-xl border-dashed gap-3 gap-xl-8 pe-xl-5 pe-xxl-8 w-75 w-md-100 mx-auto">
              <li>
                <a href="#" className="text-light text-opacity-75">
Contact us
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-opacity-75">
Newsroom
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-opacity-75">
Opportunities
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-opacity-75">
Login
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-opacity-75">
Sign Up
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-opacity-75">
Support
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-opacity-75">
FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xl-auto">
            <div className="d-flex align-items-center justify-content-center gap-8">
              <a href="#!" className="text-white">
                <span className="fa-brands fa-facebook">                </span>
              </a>
              <a href="#!" className="text-white">
                <span className="fa-brands fa-twitter">                </span>
              </a>
              <a href="#!" className="text-white">
                <span className="fa-brands fa-linkedin-in">                </span>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-top" />
        <div className="d-sm-flex flex-between-center text-center">
          <p className="text-body-tertiary mb-0">
Copyright © Company Name
          </p>
          <p className="text-body-tertiary mb-0">
Made with love by 
            <a href="https://themewagon.com">
ThemeWagon
            </a>
          </p>
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

    </div>
  );
}
