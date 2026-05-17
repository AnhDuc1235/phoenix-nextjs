'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Default() {
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

    <section className="bg-body-emphasis pb-8" id="home">
      <div className="container-small hero-header-container px-lg-7 px-xxl-3">
        <div className="row align-items-center">
          <div className="col-12 col-lg-auto order-0 order-md-1 text-end order-1">
            <div className="position-relative p-5 p-md-7 d-lg-none">
              <div className="bg-holder" style={{"backgroundImage":"url(../../assets/img/bg/bg-23.png)","backgroundSize":"contain"} as CSSProperties}>              </div>
              <div className="position-relative">
                <PhoenixImage src="/assets/img/bg/bg-31.png" alt="hero-header" className="w-100 shadow-lg d-dark-none rounded-2" />
                <PhoenixImage src="/assets/img/bg/bg-30.png" alt="hero-header" className="w-100 shadow-lg d-light-none rounded-2" />
              </div>
            </div>
            <div className="hero-image-container position-absolute top-0 bottom-0 end-0 d-none d-lg-block">
              <div className="position-relative h-100 w-100">
                <div className="position-absolute h-100 top-0 d-flex align-items-center end-0 hero-image-container-bg">
                  <PhoenixImage src="/assets/img/bg/bg-1-2.png" alt="hero-header" className="pt-7 pt-md-0 w-100" />
                </div>
                <div className="position-absolute h-100 top-0 d-flex align-items-center end-0">
                  <PhoenixImage src="/assets/img/bg/bg-28.png" alt="hero-header" className="pt-7 pt-md-0 w-100 shadow-lg d-dark-none rounded-2" />
                  <PhoenixImage src="/assets/img/bg/bg-29.png" alt="hero-header" className="pt-7 pt-md-0 w-100 shadow-lg d-light-none rounded-2" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 text-lg-start text-center pt-8 pb-6 order-0 position-relative">
            <h1 className="fs-3 fs-lg-2 fs-md-1 fs-lg-2 fs-xl-1 fs fw-black mb-4">
              <span className="text-primary me-3">
Elegance
              </span>
for
              <br />
your web app
            </h1>
            <p className="mb-5">
Standard, modern and Elegant solution for your next web app so you don’t have to look further. Sign up or check the demo below.
            </p>
            <a href="#!" className="btn btn-lg btn-primary rounded-pill me-3"  role="button">
Sign up
            </a>
            <a href="#!" className="btn btn-link me-2 fs-8 p-0"  role="button">
Check Demo              <span className="fa-solid fa-angle-right ms-2 fs-9">              </span>
            </a>
          </div>
        </div>
      </div>
    </section>



    <section className="py-5 pt-xl-13 bg-body-emphasis">
      <div className="container-small px-lg-7 px-xxl-3">
        <div className="row g-0">
          <div className="col-6 col-md-3">
            <div className="p-2 p-lg-5 d-flex flex-center h-100 border-1 border-dashed border-bottom border-translucent border-end">
              <PhoenixImage src="/assets/img/brand2/netflix-n.png" alt="" className="w-100" />
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-2 p-lg-5 d-flex flex-center h-100 border-1 border-dashed border-bottom border-translucent border-end-md">
              <PhoenixImage src="/assets/img/brand2/blender.png" alt="" className="w-100" />
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-2 p-lg-5 d-flex flex-center h-100 border-1 border-dashed border-bottom border-translucent border-end border-end-md">
              <PhoenixImage src="/assets/img/brand2/upwork.png" alt="" className="w-100" />
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-2 p-lg-5 d-flex flex-center h-100 border-1 border-dashed border-bottom border-translucent border-end-lg-0">
              <PhoenixImage src="/assets/img/brand2/facebook-f.png" alt="" className="w-100" />
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-2 p-lg-5 d-flex flex-center h-100 border-1 border-dashed border-end border-bottom border-translucent border-bottom-md-0">
              <PhoenixImage src="/assets/img/brand2/pocket.png" alt="" className="w-100" />
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-2 p-lg-5 d-flex flex-center h-100 border-1 border-dashed border-end-md border-bottom border-translucent border-bottom-md-0">
              <PhoenixImage src="/assets/img/brand2/mail-bluster-1.png" alt="" className="w-100" />
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-2 p-lg-5 d-flex flex-center h-100 border-1 border-dashed border-end border-translucent">
              <PhoenixImage src="/assets/img/brand2/discord.png" alt="" className="w-100" />
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-2 p-lg-5 d-flex flex-center h-100 border-1 border-dashed border-end-lg-0 border-translucent">
              <PhoenixImage src="/assets/img/brand2/google-g.png" alt="" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>





    <section className="pt-15 pb-0" id="feature">
      <div className="container-small px-lg-7 px-xxl-3">
        <div className="position-relative z-2">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-start pe-xxl-3">
              <h4 className="text-primary fw-bolder mb-4">
Features
              </h4>
              <h2 className="mb-3 text-body-emphasis lh-base">
Seamless Payments: A Fully 
                <br className="d-md-none" />
Integrated Suite
              </h2>
              <p className="mb-5">
With the power of Phoenix, you can now focus only on functionaries for your digital products, while leaving the UI design on us!With the power of Phoenix, you can now focus only on functionaries for your digital products, while leaving the UI design on us!
              </p>
              <a href="#!" className="btn btn-lg btn-outline-primary rounded-pill me-2"  role="button">
Find out more                <i className="fa-solid fa-angle-right ms-2">                </i>
              </a>
            </div>
            <div className="col-sm-6 col-lg-3 mt-7 text-center text-lg-start">
              <div className="h-100 d-flex flex-column justify-content-between">
                <div className="border-start-lg border-translucent border-dashed ps-4">
                  <PhoenixImage src="/assets/img/icons/illustrations/bolt.png" alt="" className="mb-4" width={48} height={48} />
                  <div>
                    <h5 className="fw-bolder mb-2">
Lightning Speed
                    </h5>
                    <p className="fw-semibold lh-sm">
Present everything you need in one place within minutes! Grow with Phoenix!
                    </p>
                  </div>
                  <div>
                    <a href="#!" className="btn btn-link me-2 p-0 fs-9"  role="button">
Check Demo                      <span className="fa-solid fa-angle-right ms-2">                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mt-7 text-center text-lg-start">
              <div className="h-100 d-flex flex-column">
                <div className="border-start-lg border-translucent border-dashed ps-4">
                  <PhoenixImage src="/assets/img/icons/illustrations/pie.png" alt="" className="mb-4" width={48} height={48} />
                  <div>
                    <h5 className="fw-bolder mb-2">
All-in-one solution
                    </h5>
                    <p className="fw-semibold lh-sm">
Show your production and growth graph in one place with Phoenix!
                    </p>
                  </div>
                  <div>
                    <a href="#!" className="btn btn-link me-2 p-0 fs-9"  role="button">
Check Demo                      <i className="fa-solid fa-angle-right ms-2">                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-12 align-items-center justify-content-between text-center text-lg-start mb-6 mb-lg-0">
            <div className="col-lg-5">
              <PhoenixImage src="/assets/img/spot-illustrations/22_2.png" alt="" className="feature-image img-fluid mb-9 mb-lg-0 d-dark-none" />
              <PhoenixImage src="/assets/img/spot-illustrations/dark_22.png" alt="" className="feature-image img-fluid mb-9 mb-lg-0 d-light-none" />
            </div>
            <div className="col-lg-6">
              <h6 className="text-primary mb-2 ls-2">
SIGNAL
              </h6>
              <h3 className="fw-bolder mb-3">
Recieve the signals instantly
              </h3>
              <p className="mb-4 px-md-7 px-lg-0">
Phoenix makes it possible for you to quickly and effectively receive every signal. No need for drawn-out waiting.
              </p>
              <a href="#!" className="btn btn-link me-2 p-0 fs-9"  role="button">
Check Demo                <i className="fa-solid fa-angle-right ms-2">                </i>
              </a>
            </div>
          </div>
          <div className="row mt-2 align-items-center justify-content-between text-center text-lg-start mb-6 mb-lg-0">
            <div className="col-lg-5 order-0 order-lg-1">
              <PhoenixImage src="/assets/img/spot-illustrations/23_2.png" alt="" className="feature-image img-fluid mb-9 mb-lg-0 d-dark-none" height={394} />
              <PhoenixImage src="/assets/img/spot-illustrations/dark_23.png" alt="" className="feature-image img-fluid mb-9 mb-lg-0 d-light-none" height={394} />
            </div>
            <div className="col-lg-6">
              <h6 className="text-primary mb-2 ls-2">
REVENUE
              </h6>
              <h3 className="fw-bolder mb-3">
See Your Revenue Grow
              </h3>
              <p className="mb-4 px-md-7 px-lg-0">
Grow with Phoenix. We help you with everything you might need., We make it easy and keep it simple.
              </p>
              <a href="#!" className="btn btn-link me-2 p-0 fs-9"  role="button">
Check Demo                <i className="fa-solid fa-angle-right ms-2">                </i>
              </a>
            </div>
          </div>
          <div className="row mt-2 align-items-center justify-content-between text-center text-lg-start mb-6 mb-lg-0">
            <div className="col-lg-5">
              <PhoenixImage src="/assets/img/spot-illustrations/24_2.png" alt="" className="feature-image img-fluid mb-9 mb-lg-0 d-dark-none" height={394} />
              <PhoenixImage src="/assets/img/spot-illustrations/dark_24.png" alt="" className="feature-image img-fluid mb-9 mb-lg-0 d-light-none" height={394} />
            </div>
            <div className="col-lg-6 text-center text-lg-start">
              <h6 className="text-primary mb-2 ls-2">
REPORTS
              </h6>
              <h3 className="fw-bolder mb-3">
Get Reports Ready
              </h3>
              <p className="mb-4 px-md-7 px-lg-0">
With Phoenix, you can get ready reports on your growth analysis anytime. This dashboard also has all filters accessible according to your needs.
              </p>
              <a href="#!" className="btn btn-link me-2 p-0 fs-9"  role="button">
Check Demo                <i className="fa-solid fa-angle-right ms-2">                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>



    <div className="position-relative">
      <div className="bg-holder z-2 d-none d-md-block" style={{"backgroundImage":"url(../../assets/img/bg/13.png)","backgroundSize":"auto","backgroundPosition":"right"} as CSSProperties}>      </div>
      <div className="bg-holder z-2 d-none d-md-block d-lg-none d-xl-block" style={{"backgroundImage":"url(../../assets/img/bg/bg-12.png)","backgroundSize":"auto","backgroundPosition":"left"} as CSSProperties}>      </div>
      <div className="bottom-0 start-0 end-0 bg-body-emphasis">
        <svg className="w-100" viewBox="0 0 1920 368" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-body-bg" d="M1920 0.44L0 367.74V0H1920V0.44Z">          </path>
        </svg>
      </div>
      <section className="pb-0 bg-body-emphasis overflow-hidden position-static">
        <div className="container-small px-lg-7 px-xxl-3">
          <div className="row">
            <div className="col-lg-6 mb-6 text-center text-lg-start z-2">
              <h4 className="text-primary fw-bolder mb-3">
Testimonial
              </h4>
              <h2 className="mb-3 text-body-emphasis">
More than 2 Millions happy
                <br />
Customers and counting
              </h2>
              <p className="mb-5">
You may now concentrate on the functionality and other 
                <br className="d-none d-sm-block" />
aspects of your web products thanks to Phoenix's strength
                <br className="d-none d-sm-block" />
before leaving the UI design to us. It is simple to complete
                <br className="d-none d-sm-block" />
the work after checking and double-checking.
              </p>
            </div>
            <div className="col-lg-6 z-2">
              <div className="carousel slide" id="carouselExampleIndicators" data-bs-ride={"carousel"}>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row g-1 g-lg-0 g-xl-1 pb-lg-3 pb-xl-0 ps-lg-1 ps-xl-0">
                      <div className="col-lg-6 col-xl-5 text-center">
                        <div className="testimonial-avatar-container d-inline-block position-relative">
                          <div className="bg-holder" style={{"backgroundImage":"url(../../assets/img/bg/bg-2.png)","backgroundSize":"contain"} as CSSProperties}>                          </div>
                          <PhoenixImage src="/assets/img/team/61.webp" alt="" className="rounded-3 mb-lg-0 opacity-100 position-relative" width={153} height={153} />
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-7 text-center text-lg-start">
                        <div className="mb-4" data-bs-theme={"light"}>
                          <span className="fa fa-star text-primary">                          </span>
                          <span className="fa fa-star text-primary">                          </span>
                          <span className="fa fa-star text-primary">                          </span>
                          <span className="fa fa-star text-primary">                          </span>
                          <span className="fa fa-star text-primary">                          </span>
                        </div>
                        <h3 className="fs-7 fs-xl-6 mb-5 lh-sm me-md-7 me-lg-0">
Brilliant app! Will definitely going to be my first choice starting from today
                        </h3>
                        <h6>
Monica Gomez
                        </h6>
                        <h6 className="fw-normal">
UX designer, Google
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row g-1 g-lg-0 g-xl-1 pb-lg-3 pb-xl-0 ps-lg-1 ps-xl-0">
                      <div className="col-lg-6 col-xl-5 text-center">
                        <div className="testimonial-avatar-container d-inline-block position-relative">
                          <div className="bg-holder" style={{"backgroundImage":"url(../../assets/img/bg/bg-2.png)","backgroundSize":"contain"} as CSSProperties}>                          </div>
                          <PhoenixImage src="/assets/img/team/8.webp" alt="" className="rounded-3 mb-lg-0 opacity-100 position-relative" width={154} />
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-7 text-center text-lg-start">
                        <div className="mb-4" data-bs-theme={"light"}>
                          <span className="fa fa-star text-primary">                          </span>
                          <span className="fa fa-star text-primary">                          </span>
                          <span className="fa fa-star text-primary">                          </span>
                          <span className="fa fa-star text-primary">                          </span>
                          <span className="fa fa-star text-primary">                          </span>
                        </div>
                        <h3 className="fs-7 fs-xl-6 mb-5 lh-sm me-md-7 me-lg-0">
“Excellent to work with and comfortable to customize. This is what I was looking for till the date!”
                        </h3>
                        <h6>
Marc Chiasson
                        </h6>
                        <h6 className="fw-normal">
UX designer, Adobe
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row g-1 g-lg-0 g-xl-1 pb-lg-3 pb-xl-0 ps-lg-1 ps-xl-0">
                      <div className="col-lg-6 col-xl-5 text-center">
                        <div className="testimonial-avatar-container d-inline-block position-relative">
                          <div className="bg-holder" style={{"backgroundImage":"url(../../assets/img/bg/bg-2.png)","backgroundSize":"contain"} as CSSProperties}>                          </div>
                          <PhoenixImage src="/assets/img/team/35.webp" alt="" className="rounded-3 mb-lg-0 opacity-100 position-relative" width={154} />
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-7 text-center text-lg-start">
                        <div className="mb-4" data-bs-theme={"light"}>
                          <span className="fa fa-star text-primary">                          </span>
                          <span className="fa fa-star text-primary">                          </span>
                          <span className="fa fa-star text-primary">                          </span>
                          <span className="fa fa-star text-primary">                          </span>
                          <span className="fa fa-star text-primary">                          </span>
                        </div>
                        <h3 className="fs-7 fs-xl-6 mb-5 lh-sm me-md-7 me-lg-0">
“Phoenix is all you can ask for. This is perfect fit for everything you might want to work on!”
                        </h3>
                        <h6>
Axel Barry
                        </h6>
                        <h6 className="fw-normal">
UX designer, Apple
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div className="position-relative">
      <div className="bg-holder world-map-bg" style={{"backgroundImage":"url(../../assets/img/bg/bg-13.png)"} as CSSProperties}>      </div>
      <div className="bg-holder z-2 opacity-25 " style={{"backgroundImage":"url(../../assets/img/bg/bg-right-21.png)","backgroundSize":"auto","backgroundPosition":"right"} as CSSProperties}>      </div>
      <div className="bg-holder z-2 mt-9 opacity-25" style={{"backgroundImage":"url(../../assets/img/bg/bg-left-21.png)","backgroundSize":"auto","backgroundPosition":"left"} as CSSProperties}>      </div>
      <svg className="w-100 position-relative" preserveAspectRatio="none" viewBox="0 0 1920 368" xmlns="http://www.w3.org/2000/svg">
        <path className="fill-emphasis-bg" d="M1920 0.44L0 367.74V0H1920V0.44Z">        </path>
      </svg>
      <section className="overflow-hidden z-2">
        <div className="container-small px-lg-7 px-xxl-3" data-bs-theme={"light"}>
          <div className="position-relative">
            <div className="row mb-6">
              <div className="col-xl-6 text-center text-md-start">
                <h2 className="text-white mb-2">
Being used by millions of users
                </h2>
                <h1 className="fs-md-3 fs-xl-2 fw-black text-gradient-info text-uppercase mb-4 mb-md-0">
WORLDWIDE
                </h1>
              </div>
              <div className="col-xl-6 text-center text-md-start">
                <p className="text-white">
You can get all the reports, data analysis, and growth maps you need with the help of Phoenix's power, and you may review and modify them whenever you want. These features make this dashboard outstanding.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-8 text-center text-md-start mb-6 mb-xl-0">
                <div className="d-md-flex justify-content-md-between">
                  <div className="mb-6 mb-md-0 me-4">
                    <h1 className="display-1 text-white fw-bolder" data-countup={"{\"endValue\":125,\"duration\":10,\"suffix\":\"+\"}"}>
0 
                      <span>
+
                      </span>
                    </h1>
                    <p className="text-white">
Every month, there are more
                      <br className="d-md-none d-lg-block" />
than 125+ sales.
                    </p>
                  </div>
                  <div className="mb-6 mb-md-0 me-4">
                    <h1 className="display-1 text-white fw-bolder" data-countup={"{\"endValue\":308,\"duration\":10,\"suffix\":\"k\"}"}>
0
                    </h1>
                    <p className="text-white">
We have 308+ active paid.
                      <br className="d-md-none d-lg-block" />
subscribers.
                    </p>
                  </div>
                  <div className="mb-6 mb-md-0 me-4">
                    <h1 className="display-1 text-white fw-bolder" data-countup={"{\"endValue\":12,\"duration\":0.5}"}>
0
                    </h1>
                    <p className="text-white">
We have won 12 awards so
                      <br className="d-md-none d-lg-block" />
far with great success. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 text-center text-md-start">
                <PhoenixImage src="/assets/img/generic/capterra.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg className="w-100 position-relative" viewBox="0 0 1920 368" xmlns="http://www.w3.org/2000/svg">
        <path className="fill-emphasis-bg" d="M0 368L1920 0.730011L1920 368L0 368Z">        </path>
      </svg>
    </div>

    <section className="bg-body-emphasis pb-lg-6 pb-xl-8">
      <div className="bg-holder d-dark-none" style={{"backgroundImage":"url(../../assets/img/bg/bg-5.png)","backgroundSize":"auto"} as CSSProperties}>      </div>
      <div className="bg-holder d-light-none" style={{"backgroundImage":"url(../../assets/img/bg/bg-dark-5.png)","backgroundSize":"auto"} as CSSProperties}>      </div>
      <div className="bg-holder" style={{"backgroundImage":"url(../../assets/img/bg/bg-left-5.png)","backgroundPosition":"left","backgroundSize":"auto"} as CSSProperties}>      </div>
      <div className="bg-holder" style={{"backgroundImage":"url(../../assets/img/bg/bg-right-6.png)","backgroundPosition":"right","backgroundSize":"auto"} as CSSProperties}>      </div>
      <div className="container-small position-relative px-lg-7 px-xxl-3">
        <div className="mb-8 text-center text-sm-start">
          <h4 className="text-primary fw-bolder mb-3">
Gallery
          </h4>
          <h2>
Some of Our Best Works
          </h2>
        </div>
        <p className="column-lg-2">
Rise like Phoenix focusing only on functionalities for your digital products leaving the design for us. Show what you do, with our latest admin dashboard. Check our best works and let us know what you want to find. Want to tell your customers about the details of how and what? Tell them with all the posts at one place without them ridirecting to another page or site.
        </p>
        <ul className="nav mb-6 justify-content-center justify-content-sm-start w-max-content" data-filter-nav>
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
        <div className="row g-3" id="image_gallery" style={{"minHeight":"948px"} as CSSProperties} data-sl-isotope={"{\"layoutMode\":\"packery\"}"}>
          <div className="col-6 col-md-4 col-lg-3 px-2 isotope-item fourth">
            <a href="#!" data-bigpicture={"{\"gallery\":\"#image_gallery\"}"} data-bp={"../../assets/img/gallery/1.png"}>
              <PhoenixImage src="/assets/img/gallery/1.png" alt="" className="rounded img-fluid w-100" />
            </a>
          </div>
          <div className="col-6 col-md-4 col-lg-3 px-2 isotope-item third">
            <a href="#!" data-bigpicture={"{\"gallery\":\"#image_gallery\"}"} data-bp={"../../assets/img/gallery/2.png"}>
              <PhoenixImage src="/assets/img/gallery/2.png" alt="" className="rounded img-fluid w-100" />
            </a>
          </div>
          <div className="col-6 col-md-4 col-lg-3 px-2 isotope-item second">
            <a href="#!" data-bigpicture={"{\"gallery\":\"#image_gallery\"}"} data-bp={"../../assets/img/gallery/3.png"}>
              <PhoenixImage src="/assets/img/gallery/3.png" alt="" className="rounded img-fluid w-100" />
            </a>
          </div>
          <div className="col-6 col-md-4 col-lg-3 px-2 isotope-item third">
            <a href="#!" data-bigpicture={"{\"gallery\":\"#image_gallery\"}"} data-bp={"../../assets/img/gallery/5.png"}>
              <PhoenixImage src="/assets/img/gallery/5.png" alt="" className="rounded img-fluid w-100" />
            </a>
          </div>
          <div className="col-6 col-md-4 col-lg-3 px-2 isotope-item third second">
            <a href="#!" data-bigpicture={"{\"gallery\":\"#image_gallery\"}"} data-bp={"../../assets/img/gallery/4.png"}>
              <PhoenixImage src="/assets/img/gallery/4.png" alt="" className="rounded img-fluid w-100" />
            </a>
          </div>
          <div className="col-6 col-md-4 col-lg-3 px-2 isotope-item second">
            <a href="#!" data-bigpicture={"{\"gallery\":\"#image_gallery\"}"} data-bp={"../../assets/img/gallery/6.png"}>
              <PhoenixImage src="/assets/img/gallery/6.png" alt="" className="rounded img-fluid w-100" />
            </a>
          </div>
          <div className="col-6 col-md-4 col-lg-3 px-2 isotope-item second">
            <a href="#!" data-bigpicture={"{\"gallery\":\"#image_gallery\"}"} data-bp={"../../assets/img/gallery/7.png"}>
              <PhoenixImage src="/assets/img/gallery/7.png" alt="" className="rounded img-fluid w-100" />
            </a>
          </div>
          <div className="col-6 col-md-4 col-lg-6 px-2 isotope-item second">
            <a href="#!" data-bigpicture={"{\"gallery\":\"#image_gallery\"}"} data-bp={"../../assets/img/gallery/9.png"}>
              <PhoenixImage src="/assets/img/gallery/9.png" alt="" className="rounded img-fluid w-100" />
            </a>
          </div>
          <div className="col-6 col-md-4 col-lg-3 px-2 isotope-item fourth">
            <a href="#!" data-bigpicture={"{\"gallery\":\"#image_gallery\"}"} data-bp={"../../assets/img/gallery/8.png"}>
              <PhoenixImage src="/assets/img/gallery/8.png" alt="" className="rounded img-fluid w-100" />
            </a>
          </div>
          <div className="col-6 col-md-4 col-lg-6 px-2 isotope-item second">
            <a href="#!" data-bigpicture={"{\"gallery\":\"#image_gallery\"}"} data-bp={"../../assets/img/gallery/10.png"}>
              <PhoenixImage src="/assets/img/gallery/10.png" alt="" className="rounded img-fluid w-100" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-body-emphasis pt-lg-0 pt-xl-8">
      <div className="bg-holder d-none d-md-block" style={{"backgroundImage":"url(../../assets/img/bg/bg-left-15.png)","backgroundPosition":"left","backgroundSize":"auto"} as CSSProperties}>      </div>
      <div className="bg-holder d-none d-md-block" style={{"backgroundImage":"url(../../assets/img/bg/bg-right-15.png)","backgroundPosition":"right","backgroundSize":"auto"} as CSSProperties}>      </div>
      <div className="container-small position-relative px-lg-7 px-xxl-3">
        <div className="mb-4 text-center text-sm-start">
          <h4 className="text-primary fw-bolder mb-3">
Pricing
          </h4>
          <h2>
Choose the best deal for you
          </h2>
        </div>
        <p className="column-md-2 text-center text-sm-start">
Entice your customers with Phoenix admin dashboard. Show your best deal in this section to help customers choose from your best offers and place them all in one place with this efficient template. If you are availing more than one offer to your customers, let them compare among them and search for what they need to get. Show offer details here and entice them to buy.
        </p>
        <div className="row pt-9 g-3 g-xl-0">
          <div className="col-md-6 col-xl-3">
            <div className="card h-100 rounded-end-xl-0 rounded-start">
              <div className="card-body px-6">
                <div className="px-5">
                  <div className="text-center pt-5">
                    <PhoenixImage src="/assets/img/icons/illustrations/pie.png" alt="" width={48} height={48} />
                    <h3 className="fw-semibold my-4">
Starter
                    </h3>
                  </div>
                  <div className="text-center">
                    <h1 className="fw-semibold text-primary">
$
                      <span className="fw-bolder">
6
                      </span>
                      <span className="text-body-emphasis fs-7 ms-1 fw-bolder">
USD
                      </span>
                    </h1>
                    <h5 className="mb-4 text-body">                    </h5>
                    <button className="btn btn-lg mb-6 w-100 btn-outline-primary">
Buy
                    </button>
                  </div>
                </div>
                <ul className="fa-ul pricing-list">
                  <li className="mb-4 d-flex align-items-center">
                    <span className="fa-li">
                      <span className="fas fa-check text-primary">                      </span>
                    </span>
                    <span className="text-body-secondary" style={{"--phoenix-text-opacity":"1"} as CSSProperties}>
Timeline
                    </span>
                  </li>
                  <li className="mb-4 d-flex align-items-center">
                    <span className="fa-li">
                      <span className="fas fa-check text-primary">                      </span>
                    </span>
                    <span className="text-body-secondary" style={{"--phoenix-text-opacity":"1"} as CSSProperties}>
Advanced Search
                    </span>
                  </li>
                  <li className="mb-4 d-flex align-items-center">
                    <span className="text-body-secondary" style={{"--phoenix-text-opacity":".5"} as CSSProperties}>
Custom fields
                    </span>
                    <span className="badge badge-phoenix badge-phoenix-warning ms-2 fs-10 opacity-50">
New
                    </span>
                  </li>
                  <li className="mb-4 d-flex align-items-center">
                    <span className="text-body-secondary" style={{"--phoenix-text-opacity":".5"} as CSSProperties}>
Task dependencies
                    </span>
                  </li>
                  <li className="mb-4 d-flex align-items-center">
                    <span className="text-body-secondary" style={{"--phoenix-text-opacity":".5"} as CSSProperties}>
{"Private teams & projects"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="card h-100  rounded-top-0 rounded-xl-0 border border-2 border-primary mt-5 mt-md-0">
              <div className="position-absolute d-flex flex-center bg-primary-subtle rounded-top py-1 end-0 start-0 badge-pricing">
                <p className="text-primary-dark mb-0">
Most popular
                </p>
              </div>
              <div className="card-body px-6">
                <div className="px-5">
                  <div className="text-center pt-5">
                    <PhoenixImage src="/assets/img/icons/illustrations/bolt.png" alt="" width={48} height={48} />
                    <h3 className="fw-semibold my-4">
Team
                    </h3>
                  </div>
                  <div className="text-center">
                    <h1 className="fw-semibold text-primary">
$
                      <span className="fw-bolder">
12
                      </span>
                      <span className="text-body-emphasis fs-7 ms-1 fw-bolder">
USD
                      </span>
                    </h1>
                    <h5 className="mb-4 text-body">                    </h5>
                    <button className="btn btn-lg mb-6 w-100 btn-primary">
Buy
                    </button>
                  </div>
                </div>
                <ul className="fa-ul pricing-list">
                  <li className="mb-4 d-flex align-items-center">
                    <span className="fa-li">
                      <span className="fas fa-check text-primary">                      </span>
                    </span>
                    <span className="text-body-secondary" style={{"--phoenix-text-opacity":"1"} as CSSProperties}>
Timeline
                    </span>
                  </li>
                  <li className="mb-4 d-flex align-items-center">
                    <span className="fa-li">
                      <span className="fas fa-check text-primary">                      </span>
                    </span>
                    <span className="text-body-secondary" style={{"--phoenix-text-opacity":"1"} as CSSProperties}>
Advanced Search
                    </span>
                  </li>
                  <li className="mb-4 d-flex align-items-center">
                    <span className="fa-li">
                      <span className="fas fa-check text-primary">                      </span>
                    </span>
                    <span className="text-body-secondary" style={{"--phoenix-text-opacity":"1"} as CSSProperties}>
Custom fields
                    </span>
                    <span className="badge badge-phoenix badge-phoenix-warning ms-2 fs-10">
New
                    </span>
                  </li>
                  <li className="mb-4 d-flex align-items-center">
                    <span className="text-body-secondary" style={{"--phoenix-text-opacity":".5"} as CSSProperties}>
Task dependencies
                    </span>
                  </li>
                  <li className="mb-4 d-flex align-items-center">
                    <span className="text-body-secondary" style={{"--phoenix-text-opacity":".5"} as CSSProperties}>
{"Private teams & projects"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="card h-100 rounded-start rounded-start-xl-0 mt-5 mt-md-0">
              <div className="card-body px-6">
                <div className="px-5">
                  <div className="text-center pt-5">
                    <PhoenixImage src="/assets/img/icons/illustrations/edit.png" alt="" width={48} height={48} />
                    <h3 className="fw-semibold my-4">
Business
                    </h3>
                  </div>
                  <div className="text-center">
                    <h1 className="fw-semibold text-primary">
$
                      <span className="fw-bolder">
23
                      </span>
                      <span className="text-body-emphasis fs-7 ms-1 fw-bolder">
USD
                      </span>
                    </h1>
                    <h5 className="mb-4 text-body">                    </h5>
                    <button className="btn btn-lg mb-6 w-100 btn-outline-primary">
Buy
                    </button>
                  </div>
                </div>
                <ul className="fa-ul pricing-list">
                  <li className="mb-4 d-flex align-items-center">
                    <span className="fa-li">
                      <span className="fas fa-check text-primary">                      </span>
                    </span>
                    <span className="text-body-secondary" style={{"--phoenix-text-opacity":"1"} as CSSProperties}>
Timeline
                    </span>
                  </li>
                  <li className="mb-4 d-flex align-items-center">
                    <span className="fa-li">
                      <span className="fas fa-check text-primary">                      </span>
                    </span>
                    <span className="text-body-secondary" style={{"--phoenix-text-opacity":"1"} as CSSProperties}>
Advanced Search
                    </span>
                  </li>
                  <li className="mb-4 d-flex align-items-center">
                    <span className="fa-li">
                      <span className="fas fa-check text-primary">                      </span>
                    </span>
                    <span className="text-body-secondary" style={{"--phoenix-text-opacity":"1"} as CSSProperties}>
Custom fields
                    </span>
                    <span className="badge badge-phoenix badge-phoenix-warning ms-2 fs-10">
New
                    </span>
                  </li>
                  <li className="mb-4 d-flex align-items-center">
                    <span className="fa-li">
                      <span className="fas fa-star text-primary">                      </span>
                    </span>
                    <span className="text-body-secondary" style={{"--phoenix-text-opacity":"1"} as CSSProperties}>
Task dependencies
                    </span>
                  </li>
                  <li className="mb-4 d-flex align-items-center">
                    <span className="text-body-secondary" style={{"--phoenix-text-opacity":".5"} as CSSProperties}>
{"Private teams & projects"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 ps-xl-3">
            <div className="row g-0 h-100 justify-content-center">
              <div className="col-xl-12">
                <div className="card h-100 mt-5 mt-md-0">
                  <div className="card-body">
                    <div className="px-5">
                      <div className="text-center pt-5">
                        <PhoenixImage src="/assets/img/icons/illustrations/shield.png" alt="" width={48} height={48} />
                        <h3 className="fw-semibold my-4">
Enterprise
                        </h3>
                      </div>
                      <div className="text-center">
                        <h1 className="fw-semibold text-primary">
$
                          <span className="fw-bolder">
40
                          </span>
                          <span className="text-body-emphasis fs-7 ms-1 fw-bolder">
USD
                          </span>
                        </h1>
                        <h5 className="mb-4 text-body">                        </h5>
                        <button className="btn btn-lg mb-6 w-100 btn-outline-primary">
Buy
                        </button>
                      </div>
                    </div>
                    <ul className="fa-ul pricing-list">
                      <li className="mb-4 d-flex align-items-center">
                        <span className="fa-li">
                          <span className="fas fa-check text-primary">                          </span>
                        </span>
                        <span className="text-body-secondary" style={{"--phoenix-text-opacity":"1"} as CSSProperties}>
Timeline
                        </span>
                      </li>
                      <li className="mb-4 d-flex align-items-center">
                        <span className="fa-li">
                          <span className="fas fa-check text-primary">                          </span>
                        </span>
                        <span className="text-body-secondary" style={{"--phoenix-text-opacity":"1"} as CSSProperties}>
Advanced Search
                        </span>
                      </li>
                      <li className="mb-4 d-flex align-items-center">
                        <span className="fa-li">
                          <span className="fas fa-check text-primary">                          </span>
                        </span>
                        <span className="text-body-secondary" style={{"--phoenix-text-opacity":"1"} as CSSProperties}>
Custom fields
                        </span>
                        <span className="badge badge-phoenix badge-phoenix-warning ms-2 fs-10">
New
                        </span>
                      </li>
                      <li className="mb-4 d-flex align-items-center">
                        <span className="fa-li">
                          <span className="fas fa-star text-primary">                          </span>
                        </span>
                        <span className="text-body-secondary" style={{"--phoenix-text-opacity":"1"} as CSSProperties}>
Task dependencies
                        </span>
                      </li>
                      <li className="mb-4 d-flex align-items-center">
                        <span className="fa-li">
                          <span className="fas fa-star text-primary">                          </span>
                        </span>
                        <span className="text-body-secondary" style={{"--phoenix-text-opacity":"1"} as CSSProperties}>
{"Private teams & projects"}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 text-center mt-8">
            <p>
For Enterprise Solution with Managed SMTP, Custom API setup, Dedicated Support, and more - 
              <a href="#!">
 Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>



    <section className="bg-body-emphasis" id="blog">
      <div className="container-small px-lg-7 px-xxl-3">
        <div className="mb-4 text-center text-sm-start">
          <h4 className="text-primary fw-bolder mb-3">
Blog
          </h4>
          <h2>
Latest articles
          </h2>
        </div>
        <p className="column-md-2">
See the latest articles we published with this dashboard. Your customers will be happy to find all the latest posts in one place. This menu efficiently shows all related topics from search filters and provides the customers with what they need. Also you can just educate your customers about everything they need to know and follow to avail a service with you. This menu is the one to show them that.
        </p>
        <div className="row h-100 g-3 justify-content-center">
          <div className="col-sm-6 col-lg-3 mb-3 mb-md-0">
            <div className="card text-white dark__text-gray-1100 h-100">
              <PhoenixImage src="/assets/img/blog/blog-1.png" alt="..." className="rounded-top h-100 object-fit-cover" />
              <div className="card-body rounded-top">
                <div className="d-flex align-items-cente mb-3">
                  <div className="d-flex align-items-center me-3">
                    <a href="#!" className="btn-link text-decoration-none d-flex align-items-center">
                      <span className="fa-solid fa-eye text-body-quaternary me-1">                      </span>                      <span className="text-body fs-10 lh-1">
2563
                      </span>
                    </a>
                  </div>
                  <div className="d-flex align-items-center me-3">
                    <a href="#!" className="btn-link text-decoration-none d-flex align-items-center">
                      <span className="fa-solid fa-heart text-body-quaternary me-1">                      </span>                      <span className="text-body fs-10 lh-1">
125
                      </span>
                    </a>
                  </div>
                  <div className="d-flex align-items-center">
                    <a href="#!" className="btn-link text-decoration-none d-flex align-items-center">
                      <span className="fa-solid fa-comment text-body-quaternary me-1">                      </span>                      <span className="text-body fs-10 lh-1">
125
                      </span>
                    </a>
                  </div>
                </div>
                <span className="badge badge-phoenix badge-phoenix-primary mb-2">
SEO
                </span>
                <h4 className="fw-bold mb-3 lh-sm line-clamp-2">
Top 10 ways to Ace SEO for your business
                </h4>
                <a href="#!" className="btn-link px-0 d-flex align-items-center fs-9 fw-bold"  role="button">
Read more                  <span className="fa-solid fa-angle-right ms-2">                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-3 mb-md-0">
            <div className="card text-white dark__text-gray-1100 h-100">
              <PhoenixImage src="/assets/img/blog/blog-2.png" alt="..." className="rounded-top h-100 object-fit-cover" />
              <div className="card-body rounded-top">
                <div className="d-flex align-items-cente mb-3">
                  <div className="d-flex align-items-center me-3">
                    <a href="#!" className="btn-link text-decoration-none d-flex align-items-center">
                      <span className="fa-solid fa-eye text-body-quaternary me-1">                      </span>                      <span className="text-body fs-10 lh-1">
1256
                      </span>
                    </a>
                  </div>
                  <div className="d-flex align-items-center me-3">
                    <a href="#!" className="btn-link text-decoration-none d-flex align-items-center">
                      <span className="fa-solid fa-heart text-body-quaternary me-1">                      </span>                      <span className="text-body fs-10 lh-1">
325
                      </span>
                    </a>
                  </div>
                  <div className="d-flex align-items-center">
                    <a href="#!" className="btn-link text-decoration-none d-flex align-items-center">
                      <span className="fa-solid fa-comment text-body-quaternary me-1">                      </span>                      <span className="text-body fs-10 lh-1">
32
                      </span>
                    </a>
                  </div>
                </div>
                <span className="badge badge-phoenix badge-phoenix-primary mb-2">
Marketing
                </span>
                <h4 className="fw-bold mb-3 lh-sm line-clamp-2">
Top 12 Marketing strategies you can take
                </h4>
                <a href="#!" className="btn-link px-0 d-flex align-items-center fs-9 fw-bold"  role="button">
Read more                  <span className="fa-solid fa-angle-right ms-2">                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-3 mb-md-0">
            <div className="card text-white dark__text-gray-1100 h-100">
              <PhoenixImage src="/assets/img/blog/blog-3.png" alt="..." className="rounded-top h-100 object-fit-cover" />
              <div className="card-body rounded-top">
                <div className="d-flex align-items-cente mb-3">
                  <div className="d-flex align-items-center me-3">
                    <a href="#!" className="btn-link text-decoration-none d-flex align-items-center">
                      <span className="fa-solid fa-eye text-body-quaternary me-1">                      </span>                      <span className="text-body fs-10 lh-1">
142
                      </span>
                    </a>
                  </div>
                  <div className="d-flex align-items-center me-3">
                    <a href="#!" className="btn-link text-decoration-none d-flex align-items-center">
                      <span className="fa-solid fa-heart text-body-quaternary me-1">                      </span>                      <span className="text-body fs-10 lh-1">
123
                      </span>
                    </a>
                  </div>
                  <div className="d-flex align-items-center">
                    <a href="#!" className="btn-link text-decoration-none d-flex align-items-center">
                      <span className="fa-solid fa-comment text-body-quaternary me-1">                      </span>                      <span className="text-body fs-10 lh-1">
22
                      </span>
                    </a>
                  </div>
                </div>
                <span className="badge badge-phoenix badge-phoenix-primary mb-2">
Marketing
                </span>
                <h4 className="fw-bold mb-3 lh-sm line-clamp-2">
The top 7 methods to improve as a marketer
                </h4>
                <a href="#!" className="btn-link px-0 d-flex align-items-center fs-9 fw-bold"  role="button">
Read more                  <span className="fa-solid fa-angle-right ms-2">                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-3 mb-md-0">
            <div className="card text-white dark__text-gray-1100 h-100">
              <PhoenixImage src="/assets/img/blog/blog-4.png" alt="..." className="rounded-top h-100 object-fit-cover" />
              <div className="card-body rounded-top">
                <div className="d-flex align-items-cente mb-3">
                  <div className="d-flex align-items-center me-3">
                    <a href="#!" className="btn-link text-decoration-none d-flex align-items-center">
                      <span className="fa-solid fa-eye text-body-quaternary me-1">                      </span>                      <span className="text-body fs-10 lh-1">
2563
                      </span>
                    </a>
                  </div>
                  <div className="d-flex align-items-center me-3">
                    <a href="#!" className="btn-link text-decoration-none d-flex align-items-center">
                      <span className="fa-solid fa-heart text-body-quaternary me-1">                      </span>                      <span className="text-body fs-10 lh-1">
325
                      </span>
                    </a>
                  </div>
                  <div className="d-flex align-items-center">
                    <a href="#!" className="btn-link text-decoration-none d-flex align-items-center">
                      <span className="fa-solid fa-comment text-body-quaternary me-1">                      </span>                      <span className="text-body fs-10 lh-1">
112
                      </span>
                    </a>
                  </div>
                </div>
                <span className="badge badge-phoenix badge-phoenix-primary mb-2">
Tech
                </span>
                <h4 className="fw-bold mb-3 lh-sm line-clamp-2">
Best places for a tech job in U.S
                </h4>
                <a href="#!" className="btn-link px-0 d-flex align-items-center fs-9 fw-bold"  role="button">
Read more                  <span className="fa-solid fa-angle-right ms-2">                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <a href="#!" className="btn btn-outline-primary">
View All            <span className="fa-solid fa-angle-right ms-2">            </span>
          </a>
        </div>
      </div>
    </section>





    <section className="bg-body-emphasis">
      <div className="container-small px-lg-7 px-xxl-3">
        <div className="mb-3 text-center text-sm-start">
          <h4 className="text-primary fw-bolder mb-3">
Address
          </h4>
          <h2>
If you need to find us:
          </h2>
        </div>
        <p className="column-md-2">
Do not lose your potential customers to others. Tell them exactly where you are with Geolocation enabled Phoenix admin dashboard, No need to take the burden of communicating directly. You can easily tell your customers where to find you with precise location map. Getting closer was never easier!
        </p>
        <div className="row">
          <div className="col-12 mb-15">
            <div className="mapbox-container rounded-3 border overflow-hidden mt-3 mb-6">
              <div id="mapbox" data-mapbox={"{\"attributionControl\":false,\"center\":[-74.0020158,40.7228022],\"zoom\":14,\"scrollZoom\":false}"} style={{"height":"381px"} as CSSProperties}>              </div>
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



    <section id="team">
      <div className="bg-holder z-2" style={{"backgroundImage":"url(../../assets/img/bg/bg-left-17.png)","backgroundSize":"auto","backgroundPosition":"left center"} as CSSProperties}>      </div>
      <div className="bg-holder z-2" style={{"backgroundImage":"url(../../assets/img/bg/bg-right-17.png)","backgroundSize":"auto","backgroundPosition":"right center"} as CSSProperties}>      </div>
      <div className="position-absolute top-0 end-0 start-0">
        <svg className="w-100 text-white" preserveAspectRatio="none" viewBox="0 0 1920 368" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-emphasis-bg" d="M1920 0.44L0 367.74V0H1920V0.44Z">          </path>
        </svg>
      </div>
      <div className="position-absolute bottom-0 end-0 start-0">
        <svg className="text-white w-100" viewBox="0 0 1920 368" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-emphasis-bg" d="M0 368L1920 0.730011L1920 368L0 368Z">          </path>
        </svg>
      </div>
      <div className="container-small position-relative py-1 px-lg-7 px-xxl-3" style={{"zIndex":"10"} as CSSProperties}>
        <div className="mb-4 text-center text-sm-start">
          <h4 className="text-primary fw-bolder mb-3">
Team
          </h4>
          <h2>
Our small team behind our success
          </h2>
        </div>
        <p className="column-md-2 text-center text-sm-start">
We have a small but strong development team to follow up on the development process. Reach out to us for further information. The team is ready to answer all your questions within minutes. The efficient team is always at your beck and call.
        </p>
        <div className="row align-items-center ps-lg-11 pe-lg-9">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="text-center mt-5 position-relative">
              <div className="team-avatar-container d-inline-block position-relative">
                <div className="bg-holder" style={{"backgroundImage":"url(../../assets/img/bg/bg-21.png)","backgroundSize":"contain"} as CSSProperties}>                </div>
                <PhoenixImage src="/assets/img/team/62.webp" alt="..." className="img-fluid rounded mb-3 position-relative" />
              </div>
              <h4>
John Smith
              </h4>
              <h6 className="mb-3 fw-semibold">
CEO, Global Cheat
              </h6>
              <a href="#!">
                <span className="fa-brands fa-facebook text-primary me-3">                </span>
              </a>
              <a href="#!">
                <span className="fa-brands fa-twitter text-primary me-3">                </span>
              </a>
              <a href="#!">
                <span className="fa-brands fa-linkedin-in text-primary">                </span>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="text-center mt-5 position-relative">
              <div className="team-avatar-container d-inline-block position-relative">
                <div className="bg-holder" style={{"backgroundImage":"url(../../assets/img/bg/bg-21.png)","backgroundSize":"contain"} as CSSProperties}>                </div>
                <PhoenixImage src="/assets/img/team/63.webp" alt="..." className="img-fluid rounded mb-3 position-relative" />
              </div>
              <h4>
Marc Chiasson
              </h4>
              <h6 className="mb-3 fw-semibold">
Vice President
              </h6>
              <a href="#!">
                <span className="fa-brands fa-facebook text-primary me-3">                </span>
              </a>
              <a href="#!">
                <span className="fa-brands fa-twitter text-primary me-3">                </span>
              </a>
              <a href="#!">
                <span className="fa-brands fa-linkedin-in text-primary">                </span>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="text-center mt-5 position-relative">
              <div className="team-avatar-container d-inline-block position-relative">
                <div className="bg-holder" style={{"backgroundImage":"url(../../assets/img/bg/bg-21.png)","backgroundSize":"contain"} as CSSProperties}>                </div>
                <PhoenixImage src="/assets/img/team/64.webp" alt="..." className="img-fluid rounded mb-3 position-relative" />
              </div>
              <h4>
Lilah Lola
              </h4>
              <h6 className="mb-3 fw-semibold">
Marketing Manager
              </h6>
              <a href="#!">
                <span className="fa-brands fa-facebook text-primary me-3">                </span>
              </a>
              <a href="#!">
                <span className="fa-brands fa-twitter text-primary me-3">                </span>
              </a>
              <a href="#!">
                <span className="fa-brands fa-linkedin-in text-primary">                </span>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="text-center mt-5 position-relative">
              <div className="team-avatar-container d-inline-block position-relative">
                <div className="bg-holder" style={{"backgroundImage":"url(../../assets/img/bg/bg-21.png)","backgroundSize":"contain"} as CSSProperties}>                </div>
                <PhoenixImage src="/assets/img/team/65.webp" alt="..." className="img-fluid rounded mb-3 position-relative" />
              </div>
              <h4>
Thomas Doe
              </h4>
              <h6 className="mb-3 fw-semibold">
UX Designer
              </h6>
              <a href="#!">
                <span className="fa-brands fa-facebook text-primary me-3">                </span>
              </a>
              <a href="#!">
                <span className="fa-brands fa-twitter text-primary me-3">                </span>
              </a>
              <a href="#!">
                <span className="fa-brands fa-linkedin-in text-primary">                </span>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="text-center mt-5 position-relative">
              <div className="team-avatar-container d-inline-block position-relative">
                <div className="bg-holder" style={{"backgroundImage":"url(../../assets/img/bg/bg-21.png)","backgroundSize":"contain"} as CSSProperties}>                </div>
                <PhoenixImage src="/assets/img/team/66.webp" alt="..." className="img-fluid rounded mb-3 position-relative" />
              </div>
              <h4>
Alan Casey
              </h4>
              <h6 className="mb-3 fw-semibold">
Front End Developer
              </h6>
              <a href="#!">
                <span className="fa-brands fa-facebook text-primary me-3">                </span>
              </a>
              <a href="#!">
                <span className="fa-brands fa-twitter text-primary me-3">                </span>
              </a>
              <a href="#!">
                <span className="fa-brands fa-linkedin-in text-primary">                </span>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="text-center mt-5 position-relative">
              <div className="team-avatar-container d-inline-block position-relative">
                <div className="bg-holder" style={{"backgroundImage":"url(../../assets/img/bg/bg-21.png)","backgroundSize":"contain"} as CSSProperties}>                </div>
                <PhoenixImage src="/assets/img/team/67.webp" alt="..." className="img-fluid rounded mb-3 position-relative" />
              </div>
              <h4>
Narokin Hijita
              </h4>
              <h6 className="mb-3 fw-semibold">
CEO, Global Cheat
              </h6>
              <a href="#!">
                <span className="fa-brands fa-facebook text-primary me-3">                </span>
              </a>
              <a href="#!">
                <span className="fa-brands fa-twitter text-primary me-3">                </span>
              </a>
              <a href="#!">
                <span className="fa-brands fa-linkedin-in text-primary">                </span>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="text-center mt-5 position-relative">
              <div className="team-avatar-container d-inline-block position-relative">
                <div className="bg-holder" style={{"backgroundImage":"url(../../assets/img/bg/bg-21.png)","backgroundSize":"contain"} as CSSProperties}>                </div>
                <PhoenixImage src="/assets/img/team/68.webp" alt="..." className="img-fluid rounded mb-3 position-relative" />
              </div>
              <h4>
Narokin Hijita
              </h4>
              <h6 className="mb-3 fw-semibold">
CEO, Global Cheat
              </h6>
              <a href="#!">
                <span className="fa-brands fa-facebook text-primary me-3">                </span>
              </a>
              <a href="#!">
                <span className="fa-brands fa-twitter text-primary me-3">                </span>
              </a>
              <a href="#!">
                <span className="fa-brands fa-linkedin-in text-primary">                </span>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="text-center mt-5 position-relative">
              <div className="team-avatar-container d-inline-block position-relative">
                <div className="bg-holder" style={{"backgroundImage":"url(../../assets/img/bg/bg-21.png)","backgroundSize":"contain"} as CSSProperties}>                </div>
                <PhoenixImage src="/assets/img/team/69.webp" alt="..." className="img-fluid rounded mb-3 position-relative" />
              </div>
              <h4>
Narokin Hijita
              </h4>
              <h6 className="mb-3 fw-semibold">
CEO, Global Cheat
              </h6>
              <a href="#!">
                <span className="fa-brands fa-facebook text-primary me-3">                </span>
              </a>
              <a href="#!">
                <span className="fa-brands fa-twitter text-primary me-3">                </span>
              </a>
              <a href="#!">
                <span className="fa-brands fa-linkedin-in text-primary">                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="bg-body-emphasis pb-0">
      <div className="container-small px-lg-7 px-xxl-3">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="card py-md-9 px-md-13 border-0 z-1 shadow-lg cta-card">
              <div className="bg-holder" style={{"backgroundImage":"url(../../assets/img/bg/bg-18.png)","backgroundPosition":"right","backgroundSize":"auto"} as CSSProperties}>              </div>
              <div className="card-body position-relative">
                <PhoenixImage src="/assets/img/spot-illustrations/27.png" alt="..." className="img-fluid mb-5 d-dark-none" width={210} />
                <PhoenixImage src="/assets/img/spot-illustrations/dark_27.png" alt="..." className="img-fluid mb-5 d-light-none" width={210} />
                <div className="d-flex align-items-center fw-bold justify-content-center mb-3">
                  <p className="mb-0">
2008 Premium Icons 
                  </p>
                  <span className="text-primary fa-solid fa-circle" data-fa-transform={"shrink-12"}>                  </span>
                  <p className="mb-0">
Included FREE with it
                  </p>
                </div>
                <h1 className="fs-6 fs-sm-4 fs-lg-2 fw-bolder lh-sm mb-3">
Join
                  <span className="gradient-text-primary mx-2">
Phoenix
                  </span>
                  <span>
Today
                  </span>
                </h1>
                <form className="d-flex justify-content-center mb-3 px-xxl-12">
                  <div className="d-grid d-sm-block">                  </div>
                  <input className="form-control me-3" id="ctaEmail1" type="email" placeholder="Email" aria-describedby="ctaEmail1" />
                  <button className="btn btn-primary" type="submit">
Subscribe
                  </button>
                </form>
                <p>
Best support in the world, Only Phoenix can ensure 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <div className="position-relative">
      <div className="bg-holder footer-bg" style={{"backgroundImage":"url(../../assets/img/bg/bg-19.png)","backgroundSize":"auto"} as CSSProperties}>      </div>
      <div className="bg-holder" style={{"backgroundImage":"url(../../assets/img/bg/bg-right-20.png)","backgroundPosition":"right","backgroundSize":"auto"} as CSSProperties}>      </div>
      <div className="bg-holder" style={{"backgroundImage":"url(../../assets/img/bg/bg-left-20.png)","backgroundPosition":"left","backgroundSize":"auto"} as CSSProperties}>      </div>
      <div className="position-relative">
        <svg className="w-100 text-white dark__text-gray-1100" preserveAspectRatio="none" viewBox="0 0 1920 368" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1920 0.44L0 367.74V0H1920V0.44Z" fill="currentColor">          </path>
        </svg>
        <section className="footer-default">
          <div className="container-small px-lg-7 px-xxl-3">
            <div className="row position-relative">
              <div className="col-12 col-sm-12 col-lg-5 mb-4 order-0 order-sm-0">
                <a href="#">
                  <PhoenixImage src="/assets/img/icons/logo-white.png" alt="" className="mb-3" height={48} />
                </a>
                <h3 className="text-white">
phoenix
                </h3>
                <p className="text-white opacity-50">
All over the world. Alice in 
                  <br />
wonderland and other places.
                </p>
              </div>
              <div className="col-lg-7">
                <div className="row justify-content-between">
                  <div className="col-6 col-sm-4 col-lg-3 mb-3 order-2 order-sm-1">
                    <div className="border-dashed border-start border-primary-light ps-3" style={{"--phoenix-border-opacity":".2"} as CSSProperties}>
                      <h5 className="fw-bolder mb-2 text-light">
Help
                      </h5>
                      <ul className="list-unstyled mb-3">
                        <li className="mb-1">
                          <a href="#!" className="text-body-quaternary"  data-bs-theme={"light"}>
About
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#!" className="text-body-quaternary"  data-bs-theme={"light"}>
Contact
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#!" className="text-body-quaternary"  data-bs-theme={"light"}>
Developers
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="border-dashed border-start border-primary-light ps-3" style={{"--phoenix-border-opacity":".2"} as CSSProperties}>
                      <h5 className="lh-lg fw-bolder mb-2 text-light">
Follow
                      </h5>
                      <ul className="list-unstyled mb-2">
                        <li className="mb-1">
                          <a href="#!" className="text-body-quaternary"  data-bs-theme={"light"}>
Facebook
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#!" className="text-body-quaternary"  data-bs-theme={"light"}>
Twitter
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#!" className="text-body-quaternary"  data-bs-theme={"light"}>
Linkedin
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-lg-3 mb-3 order-3 order-sm-2">
                    <div className="border-dashed border-start border-primary-light ps-3" style={{"--phoenix-border-opacity":".2"} as CSSProperties}>
                      <h5 className="lh-lg fw-bold text-light mb-2">
Support
                      </h5>
                      <ul className="list-unstyled mb-md-2">
                        <li className="mb-1">
                          <a href="#!" className="text-body-quaternary"  data-bs-theme={"light"}>
Privacy
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#!" className="text-body-quaternary"  data-bs-theme={"light"}>
Community
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#!" className="text-body-quaternary"  data-bs-theme={"light"}>
Contact
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#!" className="text-body-quaternary"  data-bs-theme={"light"}>
Blog
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#!" className="text-body-quaternary"  data-bs-theme={"light"}>
FAQ
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#!" className="text-body-quaternary"  data-bs-theme={"light"}>
Project
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#!" className="text-body-quaternary"  data-bs-theme={"light"}>
Team
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4 col-lg-3 mb-3 order-3 order-sm-2">
                    <div className="border-dashed border-start border-primary-light ps-3" style={{"--phoenix-border-opacity":".2"} as CSSProperties}>
                      <h5 className="lh-lg fw-bold text-light mb-2">
 Info
                      </h5>
                      <ul className="list-unstyled mb-md-2">
                        <li className="mb-1">
                          <a href="#!" className="text-body-quaternary"  data-bs-theme={"light"}>
Personal
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#!" className="text-body-quaternary"  data-bs-theme={"light"}>
NFT System
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#!" className="text-body-quaternary"  data-bs-theme={"light"}>
Agency
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#!" className="text-body-quaternary"  data-bs-theme={"light"}>
Contact
                          </a>
                        </li>
                        <li className="mb-1">
                          <a href="#!" className="text-body-quaternary"  data-bs-theme={"light"}>
About
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
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
