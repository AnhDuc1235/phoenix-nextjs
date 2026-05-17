'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Showcase() {
  return (
    <div suppressHydrationWarning>

    <nav className="navbar navbar-expand-lg sticky-top py-3" data-navbar-soft-on-scroll>
      <div className="container-small px-0 px-sm-3">
        <PhoenixLink href="/" className="navbar-brand">
          <div className="d-flex align-items-center">
            <PhoenixImage src="/assets/img/icons/logo.png" alt="phoenix" width={27} />
            <h5 className="logo-text ms-2">
phoenix
            </h5>
          </div>
        </PhoenixLink>
        <button className="navbar-toggler" type="button" data-bs-toggle={"collapse"} data-bs-target={"#navbarSupportedContent"} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item border-bottom border-translucent border-bottom-lg-0">
              <PhoenixLink href="/documentation/getting-started" className="nav-link fs-9 fw-bold pe-3" aria-current="page">
Documentation
              </PhoenixLink>
            </li>
            <li className="nav-item border-bottom border-translucent border-bottom-lg-0">
              <a href="mailto:support@themewagon.com" className="nav-link fs-9 fw-bold pe-3">
Support
              </a>
            </li>
            <li className="nav-item">
              <a href="https://themewagon.com/hire-us/" className="nav-link fs-9 fw-bold pe-5"  target="_blank">
Hire us 
              </a>
            </li>
          </ul>
          <div className="d-grid d-lg-flex align-items-center">
            <a href="https://themes.getbootstrap.com/product/phoenix-admin-dashboard-webapp-template/" className="btn btn-primary"  target="_blank">
Purchase
            </a>
          </div>
        </div>
      </div>
    </nav>

    <section className="py-0">
      <div className="bg-holder" style={{"backgroundImage":"url(assets/img/bg/bg-24.png)","backgroundPosition":"center","backgroundSize":"auto"} as CSSProperties}>      </div>
      <div className="container-lg position-relative">
        <div className="row flex-center">
          <div className="col-12 col-sm-9 col-xl-7 px-4 px-xxl-6 text-center pt-10">
            <h1 className="display-3 fw-bolder lh-sm text-body-highlight mb-4">
Multiple Demos for You
            </h1>
            <p className="mb-10">
6 predefined layout options to cater the modern web application needs. The Flexible layout with easily customizable and ready-to-use UI components to help you design modern web apps faster.
            </p>
          </div>
        </div>
      </div>
    </section>



    <section className="pt-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 position-relative variant-container">
            <div className="d-flex px-4 pt-6 justify-content-center justify-content-lg-end">
              <div className="text-center">
                <div className="img-container w-100">
                  <PhoenixImage src="/assets/img/sections/vertical-sidenav.webp" alt="" className="side-panel-thumb h-100 w-100 rounded" />
                  <div className="layout-thumb">
                    <PhoenixImage src="/assets/img/sections/demo-1.webp" alt="" className="img-fluid rounded" />
                  </div>
                </div>
                <h5 className="py-4 text-body-highlight">
Vertical Sidenav (Default)
                </h5>
              </div>
            </div>
            <PhoenixLink href="/index.html?theme-control=true&navigation-type=vertical" className="stretched-link" href={"/index.html?theme-control=true&amp;navigation-type=vertical"} target="_blank">

            </PhoenixLink>
          </div>
          <div className="col-lg-6 position-relative variant-container">
            <div className="d-flex px-4 pt-6 justify-content-center justify-content-lg-start">
              <div className="text-center">
                <div className="img-container w-100">
                  <PhoenixImage src="/assets/img/sections/demo.webp" alt="" className="side-panel-thumb h-100 w-100 rounded" />
                  <div className="layout-thumb">
                    <PhoenixImage src="/assets/img/sections/demo.webp" alt="" className="img-fluid rounded" />
                  </div>
                </div>
                <h5 className="py-4 text-body-highlight">
Dark Mode
                </h5>
              </div>
            </div>
            <PhoenixLink href="/index.html?theme-control=true&color-scheme=dark" className="stretched-link" href={"/index.html?theme-control=true&amp;color-scheme=dark"} target="_blank">

            </PhoenixLink>
          </div>
          <div className="col-lg-6 position-relative variant-container">
            <div className="d-flex px-4 pt-6 justify-content-center justify-content-lg-end">
              <div className="text-center">
                <div className="img-container w-100">
                  <PhoenixImage src="/assets/img/sections/sidenav-dark.webp" alt="" className="side-panel-thumb h-100 w-100 rounded" />
                  <div className="layout-thumb">
                    <PhoenixImage src="/assets/img/sections/demo-5.webp" alt="" className="img-fluid rounded" />
                  </div>
                </div>
                <h5 className="py-4 text-body-highlight">
Darknav
                </h5>
              </div>
            </div>
            <PhoenixLink href="/demo/darknav" className="stretched-link"  target="_blank">

            </PhoenixLink>
          </div>
          <div className="col-lg-6 position-relative variant-container">
            <div className="d-flex px-4 pt-6 justify-content-center justify-content-lg-start">
              <div className="text-center">
                <div className="img-container w-100">
                  <PhoenixImage src="/assets/img/sections/topnav-slim-combo.webp" alt="" className="side-panel-thumb h-100 w-100 rounded" />
                  <div className="layout-thumb">
                    <PhoenixImage src="/assets/img/sections/demo-6.webp" alt="" className="img-fluid rounded" />
                  </div>
                </div>
                <h5 className="py-4 text-body-highlight">
Topnav Slim
                </h5>
              </div>
            </div>
            <PhoenixLink href="/demo/topnav-slim" className="stretched-link"  target="_blank">

            </PhoenixLink>
          </div>
          <div className="col-lg-6 position-relative variant-container">
            <div className="d-flex px-4 pt-6 justify-content-center justify-content-lg-end">
              <div className="text-center">
                <div className="img-container w-100">
                  <PhoenixImage src="/assets/img/sections/topnav-only.webp" alt="" className="side-panel-thumb h-100 w-100 rounded" />
                  <div className="layout-thumb">
                    <PhoenixImage src="/assets/img/sections/demo-4.webp" alt="" className="img-fluid rounded" />
                  </div>
                </div>
                <h5 className="py-4 text-body-highlight">
Navbar Horizontal
                </h5>
              </div>
            </div>
            <PhoenixLink href="/demo/navbar-horizontal" className="stretched-link"  target="_blank">

            </PhoenixLink>
          </div>
          <div className="col-lg-6 position-relative variant-container">
            <div className="d-flex px-4 pt-6 justify-content-center justify-content-lg-start">
              <div className="text-center">
                <div className="img-container w-100">
                  <PhoenixImage src="/assets/img/sections/horizontal-slim.webp" alt="" className="side-panel-thumb h-100 w-100 rounded" />
                  <div className="layout-thumb">
                    <PhoenixImage src="/assets/img/sections/demo-7.webp" alt="" className="img-fluid rounded" />
                  </div>
                </div>
                <h5 className="py-4 text-body-highlight">
Horizontal Slim
                </h5>
              </div>
            </div>
            <PhoenixLink href="/demo/horizontal-slim" className="stretched-link"  target="_blank">

            </PhoenixLink>
          </div>
          <div className="col-lg-6 position-relative variant-container">
            <div className="d-flex px-4 pt-6 justify-content-center justify-content-lg-end">
              <div className="text-center">
                <div className="img-container w-100">
                  <PhoenixImage src="/assets/img/sections/combo-nav.webp" alt="" className="side-panel-thumb h-100 w-100 rounded" />
                  <div className="layout-thumb">
                    <PhoenixImage src="/assets/img/sections/demo-8.webp" alt="" className="img-fluid rounded" />
                  </div>
                </div>
                <h5 className="py-4 text-body-highlight">
Combo Nav
                </h5>
              </div>
            </div>
            <PhoenixLink href="/demo/combo-nav" className="stretched-link"  target="_blank">

            </PhoenixLink>
          </div>
          <div className="col-lg-6 position-relative variant-container">
            <div className="d-flex px-4 pt-6 justify-content-center justify-content-lg-start">
              <div className="text-center">
                <div className="img-container w-100">
                  <PhoenixImage src="/assets/img/sections/demo-9-thumb.webp" alt="" className="side-panel-thumb h-100 w-100 rounded" />
                  <div className="layout-thumb">
                    <PhoenixImage src="/assets/img/sections/demo-9.webp" alt="" className="img-fluid rounded" />
                  </div>
                </div>
                <h5 className="py-4 text-body-highlight">
Dual Nav
                </h5>
              </div>
            </div>
            <PhoenixLink href="/demo/dual-nav" className="stretched-link"  target="_blank">

            </PhoenixLink>
          </div>
        </div>
      </div>
    </section>





    <section className="pt-10">
      <div className="container-fluid">
        <h2 className="text-body-highlight fw-normal lh-sm text-center mb-11">
Different
          <span className="text-primary position-relative fw-bolder d-inline-flex ms-2">
modules
            <PhoenixImage src="/assets/img/spot-illustrations/31.png" alt="" className="text-illustration-underline" />
          </span>
 dedicated for different purposes
        </h2>
        <div className="row">
          <PhoenixLink href="/" className="col-lg-6 module-variant-container text-decoration-none">
            <h2 className="module-title position-relative">
E commerce
            </h2>            <div className="image-container">
              <div className="image">
                <PhoenixImage src="/assets/img/sections/module-4.png" alt="" className="w-100" />
              </div>
              <div className="image">
                <PhoenixImage src="/assets/img/sections/module-3.png" alt="" className="w-100" />
              </div>
              <div className="image">
                <PhoenixImage src="/assets/img/sections/module-2.png" alt="" className="w-100" />
              </div>
              <div className="image">
                <PhoenixImage src="/assets/img/sections/module-1.png" alt="" className="w-100" />
              </div>
            </div>
          </PhoenixLink>
          <PhoenixLink href="/dashboard/project-management" className="col-lg-6 module-variant-container text-decoration-none">
            <h2 className="module-title position-relative">
Project Management
            </h2>            <div className="image-container">
              <div className="image">
                <PhoenixImage src="/assets/img/sections/module-8.png" alt="" className="w-100" />
              </div>
              <div className="image">
                <PhoenixImage src="/assets/img/sections/module-7.png" alt="" className="w-100" />
              </div>
              <div className="image">
                <PhoenixImage src="/assets/img/sections/module-6.png" alt="" className="w-100" />
              </div>
              <div className="image">
                <PhoenixImage src="/assets/img/sections/module-5.png" alt="" className="w-100" />
              </div>
            </div>
          </PhoenixLink>
          <PhoenixLink href="/dashboard/crm" className="col-lg-6 module-variant-container text-decoration-none">
            <h2 className="module-title position-relative">
CRM
            </h2>            <div className="image-container">
              <div className="image">
                <PhoenixImage src="/assets/img/sections/module-12.png" alt="" className="w-100" />
              </div>
              <div className="image">
                <PhoenixImage src="/assets/img/sections/module-11.png" alt="" className="w-100" />
              </div>
              <div className="image">
                <PhoenixImage src="/assets/img/sections/module-10.png" alt="" className="w-100" />
              </div>
              <div className="image">
                <PhoenixImage src="/assets/img/sections/module-9.png" alt="" className="w-100" />
              </div>
            </div>
          </PhoenixLink>
          <PhoenixLink href="/dashboard/travel-agency" className="new col-lg-6 module-variant-container text-decoration-none">
            <h1 className="module-badge">
New
            </h1>            <h2 className="module-title position-relative">
Booking
            </h2>            <div className="image-container">
              <div className="image">
                <PhoenixImage src="/assets/img/sections/module-16.png" alt="" className="w-100" />
              </div>
              <div className="image">
                <PhoenixImage src="/assets/img/sections/module-15.png" alt="" className="w-100" />
              </div>
              <div className="image">
                <PhoenixImage src="/assets/img/sections/module-14.png" alt="" className="w-100" />
              </div>
              <div className="image">
                <PhoenixImage src="/assets/img/sections/module-13.png" alt="" className="w-100" />
              </div>
            </div>
          </PhoenixLink>
        </div>
      </div>
    </section>





    <section className="gsap pb-0 overflow-hidden">
      <div className="container-lg">
        <div className="row justify-content-center mb-11">
          <div className="col-12 col-xl-7 text-center">
            <h2 className="text-body-highlight fw-normal lh-sm">
Beautiful blending of 
              <br />
card and cardless designs of
              <span className="text-primary position-relative fw-bolder d-inline-flex ms-2">
 advanced forms
                <PhoenixImage src="/assets/img/spot-illustrations/31.png" alt="" className="text-illustration-underline" />
              </span>
            </h2>
          </div>
        </div>
        <div className="row g-2 showcase-gallery mx-auto" style={{"width":"1545px"} as CSSProperties}>
          <div className="col-3 align-self-end mb-2">
            <div className="row g-2">
              <div className="col-12">
                <PhoenixImage src="/assets/img/sections/1.webp" alt="" className="w-100 z-3 layer-4" />
              </div>
              <div className="col-6">
                <PhoenixImage src="/assets/img/sections/2.webp" alt="" className="w-100 z-5 layer-6" />
              </div>
              <div className="col-6">
                <PhoenixImage src="/assets/img/sections/3.webp" alt="" className="w-100 z-2 layer-3" />
              </div>
              <div className="col-12 text-end">
                <PhoenixImage src="/assets/img/sections/4.webp" alt="" className="w-100 z-3 layer-4" />
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row g-2 align-items-end mb-2">
              <div className="col-auto">
                <PhoenixImage src="/assets/img/sections/5.webp" alt="" className="z-4 layer-5" />
              </div>
              <div className="col-auto">
                <PhoenixImage src="/assets/img/sections/8.webp" alt="" className="z-2 layer-3" />
              </div>
              <div className="col-auto">
                <PhoenixImage src="/assets/img/sections/12.webp" alt="" className="z-4 layer-5" />
              </div>
            </div>
            <div className="row g-2 mb-2">
              <div className="col-auto">
                <PhoenixImage src="/assets/img/sections/6.webp" alt="" className="layer-1" />
              </div>
              <div className="col-auto">
                <PhoenixImage src="/assets/img/sections/9.webp" alt="" className="z-4 layer-5" />
              </div>
              <div className="col-auto">
                <PhoenixImage src="/assets/img/sections/10.webp" alt="" className="z-1 layer-2" />
              </div>
              <div className="col-auto">
                <PhoenixImage src="/assets/img/sections/13.webp" alt="" className="z-2 layer-3" />
              </div>
            </div>
            <div className="row g-2 mb-2">
              <div className="col-auto">
                <PhoenixImage src="/assets/img/sections/7.webp" alt="" className="z-5 layer-6" />
              </div>
              <div className="col-auto">
                <PhoenixImage src="/assets/img/sections/11.webp" alt="" className="mb-2 d-block layer-1" />
                <PhoenixImage src="/assets/img/sections/16.webp" alt="" className="z-2 layer-3" />
              </div>
              <div className="col-auto">
                <PhoenixImage src="/assets/img/sections/14.webp" alt="" className="z-5 mb-2 d-block layer-6" />
                <PhoenixImage src="/assets/img/sections/15.webp" alt="" className="z-5 layer-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>





    <section className="bg-body-highlight pt-14">
      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9 col-xl-8 col-xxl-6 text-center">
            <h2 className="text-body-highlight fw-normal mb-13 lh-sm">
Packed with
              <span className="text-primary ms-2 position-relative fw-bolder d-inline-flex">
essential features
                <PhoenixImage src="/assets/img/spot-illustrations/31.png" alt="" className="text-illustration-underline" />
              </span>
            </h2>
            <div className="row">
              <div className="col-12 col-sm-4 px-0">
                <div className="mb-10 text-center border-trnslucent border-end-0 border-end-sm">
                  <PhoenixImage src="/assets/img/icons/illustrations/11.png" alt="" className="img-fluid mb-4" />
                  <p>
Built on 
                    <span className="text-bootstrap me-1 fw-bold">
Bootstrap 5
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-4 px-0">
                <div className="mb-10 text-center border-trnslucent border-end-0 border-end-sm">
                  <PhoenixImage src="/assets/img/icons/illustrations/12.png" alt="" className="img-fluid mb-4" />
                  <p>
Styled with
                    <span className="text-css3 ms-1 fw-bold">
CSS3
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-4 px-0">
                <div className="mb-10 text-center border-trnslucent border-end-0 border-end-sm border-end-lg-0">
                  <PhoenixImage src="/assets/img/icons/illustrations/13.png" alt="" className="img-fluid mb-4" />
                  <p>
Coded with 
                    <span className="text-html5 me-1 fw-bold">
HTML5
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-4 px-0">
                <div className="mb-10 text-center border-trnslucent border-end-0 border-end-sm">
                  <PhoenixImage src="/assets/img/icons/illustrations/14.png" alt="" className="img-fluid mb-4" />
                  <p>
                    <span className="text-info fw-bold">
Clean 
                    </span>
 design
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-4 px-0">
                <div className="mb-10 text-center border-trnslucent border-end-0 border-end-sm">
                  <PhoenixImage src="/assets/img/icons/illustrations/16.png" alt="" className="img-fluid mb-4" />
                  <p>
                    <span className="text-success ms-1 fw-bold">
Cross-browser
                    </span>
 tested
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-4 px-0">
                <div className="mb-10 text-center border-trnslucent border-end-0">
                  <PhoenixImage src="/assets/img/icons/illustrations/15.png" alt="" className="img-fluid mb-4" />
                  <p>
                    <span className="text-sass ms-1 fw-bold">
SASS
                    </span>
 Supported
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-4 px-0">
                <div className="mb-10 text-center border-trnslucent border-end">
                  <PhoenixImage src="/assets/img/icons/illustrations/17.png" alt="" className="img-fluid mb-4" />
                  <p>
                    <span className="text-gulp me-1 fw-bold">
Gulp
                    </span>
based workflow
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-4 px-0">
                <div className="mb-10 text-center border-trnslucent border-end">
                  <PhoenixImage src="/assets/img/icons/illustrations/19.png" alt="" className="img-fluid mb-4" />
                  <p>
Interactive 
                    <span className="text-warning fw-bold">
components
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-4 px-0">
                <div className="mb-10 text-center border-trnslucent border-end-0 border-end-sm border-end-lg-0">
                  <PhoenixImage src="/assets/img/icons/illustrations/18.png" alt="" className="img-fluid mb-4" />
                  <p>
Collection of 
                    <span className="text-info fw-bold">
pages
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-4 px-0">
                <div className="mb-10 text-center border-trnslucent border-end">
                  <PhoenixImage src="/assets/img/icons/illustrations/22.png" alt="" className="img-fluid mb-4" />
                  <p>
                    <span className="text-warning ms-1 fw-bold">
{"Chart JS &"}
                    </span>
 , ECharts 
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-4 px-0">
                <div className="mb-10 text-center border-trnslucent border-end">
                  <PhoenixImage src="/assets/img/icons/illustrations/21.png" alt="" className="img-fluid mb-4" />
                  <p>
                    <span className="text-info ms-1 fw-bold">
Dark/Light
                    </span>
 Layouts
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-4 px-0">
                <div className="mb-10 text-center border-trnslucent border-end-0">
                  <PhoenixImage src="/assets/img/icons/illustrations/23.png" alt="" className="img-fluid mb-4" />
                  <p>
                    <span className="text-success ms-1 fw-bold">
FontAwesome 6
                    </span>
 icons
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-4 px-0">
                <div className="mb-10 text-center border-trnslucent border-end">
                  <PhoenixImage src="/assets/img/icons/illustrations/24.png" alt="" className="img-fluid mb-4" />
                  <p>
Opinionated 
                    <span className="text-success fw-bold">
code formatter
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-4 px-0">
                <div className="mb-10 text-center border-trnslucent border-end">
                  <PhoenixImage src="/assets/img/icons/illustrations/25.png" alt="" className="img-fluid mb-4" />
                  <p>
                    <span className="text-w3c me-1 fw-bold">
W3C
                    </span>
validated
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-4 px-0">
                <div className="mb-10 text-center border-trnslucent border-end-0">
                  <PhoenixImage src="/assets/img/icons/illustrations/26.png" alt="" className="img-fluid mb-4" />
                  <p>
10+ 
                    <span className="text-warning fw-bold">
layouts
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="bg-danger section overflow-hidden py-0" style={{"background":"linear-gradient(94.41deg, #193D91 -6.4%, #091F51 105.25%)"} as CSSProperties}>
      <div className="bg-holder opacity-50" style={{"backgroundImage":"url(assets/img/bg/26.png)","backgroundPosition":"14%","backgroundSize":"contain","height":"150%"} as CSSProperties} data-gsap-parallax={"{\"y\":\"-40%\"}"}>      </div>
      <div className="container-small position-relative py-8">
        <div className="row align-items-center gx-xxl-13">
          <div className="col-lg-6 mb-6 z-1">
            <PhoenixImage src="/assets/img/sections/63.webp" alt="" className="mw-100" />
          </div>
          <div className="col-lg-6">
            <h1 className="text-light fw-normal mb-4 text-center text-lg-start">
Coded for
              <br className="d-none d-lg-block d-xl-none" />
              <span className="text-primary-light ms-2 fw-bolder">
any screen size
                <PhoenixImage src="/assets/img/icons/thumbs-up.png" alt="" className="mb-2 ms-2" />
              </span>
            </h1>
            <p className="text-light text-center text-lg-start">
Built with all top-notch technologies, this admin dashboard is fully responsive, and the clean codebase helps it to stay intact without breaking down the layout around any device or screen size or web browser.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-md-10">
      <div className="bg-holder d-none d-lg-block" style={{"backgroundImage":"url(assets/img/bg/29.png)","backgroundPosition":"left 10%","backgroundSize":"15%"} as CSSProperties} data-gsap-parallax={"{\"y\":\"40%\"}"}>      </div>
      <div className="bg-holder d-none d-lg-block" style={{"backgroundImage":"url(assets/img/bg/28.png)","backgroundPosition":"right 10%","backgroundSize":"15%"} as CSSProperties} data-gsap-parallax={"{\"y\":\"50%\"}"}>      </div>
      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-xl-8 col-xxl-6 text-center">
            <h2 className="mb-6 lh-lg">
              <span className="text-primary position-relative">
Important applications
                <PhoenixImage src="/assets/img/spot-illustrations/31.png" alt="" className="text-illustration-underline" />
              </span>
              <span className="text-body-highlight fw-normal ms-2">
you’re definitely gonna need
              </span>
            </h2>
          </div>
        </div>
        <div className="row justify-content-center mt-11">
          <div className="col-md-9 col-lg-6 col-xxl-4 mb-7 mb-lg-0">
            <div className="text-center">
              <PhoenixImage src="/assets/img/sections/gantt-chart.webp" alt="" className="mb-7 shadow rounded mw-100" width={550} />
              <div className="d-flex align-items-center justify-content-center mb-3">
                <h4 className="text-body-highlight mb-0">
Gantt Chart
                </h4>
                <span className="badge badge-phoenix badge-phoenix-warning ms-2 fs-10">
New
                </span>
              </div>
              <p className="text-body-tertiary lh-sm pb-4">
Our Gantt chart app visualizes tasks, schedules, and dependencies in a timeline format. It’s great for planning, tracking progress, and managing resources efficiently.
              </p>
              <PhoenixLink href="/apps/gantt-chart" className="btn btn-primary text-light">
View gantt chart
              </PhoenixLink>
            </div>
          </div>
          <div className="col-md-9 col-lg-6 col-xxl-4">
            <div className="text-center">
              <PhoenixImage src="/assets/img/sections/file-manager.webp" alt="" className="mb-7 shadow rounded mw-100" width={550} />
              <div className="d-flex align-items-center justify-content-center mb-3">
                <h4 className="text-body-highlight mb-0">
File Manager
                </h4>
                <span className="badge badge-phoenix badge-phoenix-warning ms-2 fs-10">
New
                </span>
              </div>
              <p className="text-body-tertiary lh-sm pb-4">
Our File Manager application allows you to manage and organize files flawlessly with grid and list views. It ensures a smooth and effortless user experience.
              </p>
              <PhoenixLink href="/apps/file-manager/grid-view" className="btn btn-primary text-light">
View file manager
              </PhoenixLink>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-11">
          <div className="col-md-9 col-lg-6 col-xxl-4 mb-7 mb-lg-0">
            <div className="text-center">
              <PhoenixImage src="/assets/img/sections/64.webp" alt="" className="mb-7 shadow rounded mw-100" width={550} />
              <h4 className="text-body-highlight mb-3">
Email
              </h4>
              <p className="text-body-tertiary lh-sm pb-4">
You’ll get a pre-built email app with this template so that your customer-client communication remains smooth and steady. Enjoy thorough communication with us!
              </p>
              <PhoenixLink href="/apps/email/inbox" className="btn btn-primary">
View email
              </PhoenixLink>
            </div>
          </div>
          <div className="col-md-9 col-lg-6 col-xxl-4">
            <div className="text-center">
              <PhoenixImage src="/assets/img/sections/66.webp" alt="" className="mb-7 shadow rounded mw-100" width={550} />
              <h4 className="text-body-highlight mb-3">
Chat
              </h4>
              <p className="text-body-tertiary lh-sm pb-4">
Our pre-built web app will help you have steady communication with your customers and grow your business rigorously. Hopefully, you’ll enjoy using this web app in Phoenix!
              </p>
              <PhoenixLink href="/apps/chat" className="btn btn-primary text-light">
View chat
              </PhoenixLink>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-11">
          <div className="col-md-9 col-lg-6 col-xxl-4 mb-7 mb-lg-0">
            <div className="text-center">
              <PhoenixImage src="/assets/img/sections/65.webp" alt="" className="mb-7 shadow rounded mw-100" width={550} />
              <h4 className="text-body-highlight mb-3">
Calender
              </h4>
              <p className="text-body-tertiary lh-sm pb-4">
Our calendar app will help you painlessly track all your trades. You can add, edit and revise the previous reminders and stay updated according to your schedule.
              </p>
              <PhoenixLink href="/apps/calendar" className="btn btn-primary text-light">
View calendar
              </PhoenixLink>
            </div>
          </div>
          <div className="col-md-9 col-lg-6 col-xxl-4">
            <div className="text-center">
              <PhoenixImage src="/assets/img/sections/kanban.webp" alt="" className="mb-7 shadow rounded mw-100" width={550} />
              <h4 className="text-body-highlight mb-3">
Kanban
              </h4>
              <p className="text-body-tertiary lh-sm pb-4">
Our application features a well-designed Kanban board to help you manage and streamline your projects efficiently. We hope you enjoy using our Kanban board in Phoenix!
              </p>
              <PhoenixLink href="/apps/kanban/kanban" className="btn btn-primary text-light">
View kanban
              </PhoenixLink>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="pb-13">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9 col-xl-8 col-xxl-6 text-center">
            <h2 className="mb-6 text-body-highlight fw-normal">
Smartly designed
              <span className="text-primary position-relative fw-bolder ms-2">
necessary pages
                <PhoenixImage src="/assets/img/spot-illustrations/31.png" alt="" className="w-100 text-illustration-underline" />
              </span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 position-relative page-container">
            <div className="d-flex px-4 pt-6 justify-content-center justify-content-lg-end">
              <div className="text-center">
                <div className="img-container w-100">
                  <PhoenixImage src="/assets/img/sections/21.webp" alt="" className="img-fluid page-thumb rounded z-2" />
                </div>
                <h5 className="py-4 text-body-highlight">
Profile
                </h5>
              </div>
            </div>
            <PhoenixLink href="/apps/social/profile" className="stretched-link">

            </PhoenixLink>
          </div>
          <div className="col-lg-6 position-relative page-container">
            <div className="d-flex px-4 pt-6 justify-content-center justify-content-lg-start">
              <div className="text-center">
                <div className="img-container w-100">
                  <PhoenixImage src="/assets/img/sections/22.webp" alt="" className="img-fluid page-thumb rounded z-2" />
                </div>
                <h5 className="py-4 text-body-highlight">
Pricing
                </h5>
              </div>
            </div>
            <PhoenixLink href="/pages/pricing/pricing-column" className="stretched-link">

            </PhoenixLink>
          </div>
          <div className="col-lg-6 position-relative page-container">
            <div className="d-flex px-4 pt-6 justify-content-center justify-content-lg-end">
              <div className="text-center">
                <div className="img-container w-100">
                  <PhoenixImage src="/assets/img/sections/23.webp" alt="" className="img-fluid page-thumb rounded z-2" />
                </div>
                <h5 className="py-4 text-body-highlight">
FAQ
                </h5>
              </div>
            </div>
            <PhoenixLink href="/pages/faq/faq-accordion" className="stretched-link">

            </PhoenixLink>
          </div>
          <div className="col-lg-6 position-relative page-container">
            <div className="d-flex px-4 pt-6 justify-content-center justify-content-lg-start">
              <div className="text-center">
                <div className="img-container w-100">
                  <PhoenixImage src="/assets/img/sections/24.webp" alt="" className="img-fluid page-thumb rounded z-2" />
                </div>
                <h5 className="py-4 text-body-highlight">
Notifications
                </h5>
              </div>
            </div>
            <PhoenixLink href="/pages/notifications" className="stretched-link">

            </PhoenixLink>
          </div>
          <div className="col-lg-6 position-relative page-container">
            <div className="d-flex px-4 pt-6 justify-content-center justify-content-lg-end">
              <div className="text-center">
                <div className="img-container w-100">
                  <PhoenixImage src="/assets/img/sections/25.webp" alt="" className="img-fluid page-thumb rounded z-2" />
                </div>
                <h5 className="py-4 text-body-highlight">
Authentication
                </h5>
              </div>
            </div>
            <PhoenixLink href="/pages/authentication/split/sign-in" className="stretched-link">

            </PhoenixLink>
          </div>
          <div className="col-lg-6 position-relative page-container">
            <div className="d-flex px-4 pt-6 justify-content-center justify-content-lg-start">
              <div className="text-center">
                <div className="img-container w-100">
                  <PhoenixImage src="/assets/img/sections/26.webp" alt="" className="img-fluid page-thumb rounded z-2" />
                </div>
                <h5 className="py-4 text-body-highlight">
Event
                </h5>
              </div>
            </div>
            <PhoenixLink href="/apps/events/event-detail" className="stretched-link">

            </PhoenixLink>
          </div>
        </div>
      </div>
    </section>



    <section className="py-12 position-relative overflow-hidden bg-body-highlight">
      <div className="grd bg-gradient-figma">      </div>
      <PhoenixImage src="/assets/img/bg/figma.png" alt="" className="feature-figma-img" />
      <div className="container-small position-relative">
        <div className="row px-4">
          <div className="col-12 d-flex justify-content-center flex-between-center mb-3">
            <PhoenixImage src="/assets/img/icons/figma.png" alt="" className="me-3" />
            <h1 className="text-white">
Figma design files
            </h1>
          </div>
          <p className="text-center mb-0 text-white">
{"Modern & highly customizable, simple and user-friendly UI components 🎨 based on Bootstrap design system only for you!"}
          </p>
        </div>
      </div>
    </section>



    <section className="pt-9 pt-sm-14">
      <div className="container-small">
        <div className="row flex-center">
          <div className="col-12 col-xl-7">
            <h2 className="text-center mb-6 mb-sm-10">
Frequently asked questions
            </h2>
            <div className="accordion">
              <div className="accordion-item border-top border-translucent">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button fs-7 pb-3" type="button" data-bs-toggle={"collapse"} data-bs-target={"#collapseOne"} aria-expanded="false" aria-controls="collapseOne">
What about the update procedure of the theme?
                  </button>
                </h2>
                <div className="accordion-collapse collapse show" id="collapseOne" aria-labelledby="headingOne" data-bs-parent={"#accordionExample"}>
                  <div className="accordion-body pt-0">
This is our newest admin dashboard. We'll keep updating it according to users' needs. We keep a changelog with every release, so you'll be able to update the theme from one version to another with that changelog.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button fs-7 pb-3 collapsed" type="button" data-bs-toggle={"collapse"} data-bs-target={"#collapseTwo"} aria-expanded="true" aria-controls="collapseOne">
Is there any Trial version of Phoenix?
                  </button>
                </h2>
                <div className="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent={"#accordionExample"}>
                  <div className="accordion-body pt-0">
We are sorry to inform you that there is no free or trial version of Phoenix, but you would get a full refund within 10 days if the template does not match your requirement.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button fs-7 pb-3 collapsed" type="button" data-bs-toggle={"collapse"} data-bs-target={"#collapseThree"} aria-expanded="false" aria-controls="collapseOne">
Is it possible to build a mobile app using Phoenix components?
                  </button>
                </h2>
                <div className="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent={"#accordionExample"}>
                  <div className="accordion-body pt-0">
Phoenix is made out of HTML, CSS, and JS. You can not use Phoenix as a "Native" component library for an android or iOS app. But if you use a web-view for your app or use a framework that uses HTML, CSS, and JS for mobile app UI​, yes, you can use Phoenix in that case.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button fs-7 pb-3 collapsed" type="button" data-bs-toggle={"collapse"} data-bs-target={"#collapseFour"} aria-expanded="false" aria-controls="collapseOne">
Can I use Phoenix with Django?
                  </button>
                </h2>
                <div className="accordion-collapse collapse" id="collapseFour" aria-labelledby="headingFour" data-bs-parent={"#accordionExample"}>
                  <div className="accordion-body pt-0">
 Many of our customers are using Phoenix with Django. Using Phoenix is like using Bootstrap with Django, just with some extra features.For a starter, you need to take all the CSS and JS files from Phoenix's "public/assets" folder to your project and link them to your view files. You can find all the required scripts and styles on the source of the starter page. It is also possible to compile the SCSS and use the ES6 JavaScript partial files with Django using Phoenix's built-in gulp based workflow. 
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button className="accordion-button fs-7 pb-3 collapsed" type="button" data-bs-toggle={"collapse"} data-bs-target={"#collapseFive"} aria-expanded="false" aria-controls="collapseOne">
Does Phoenix incorporate properly with Laravel?
                  </button>
                </h2>
                <div className="accordion-collapse collapse" id="collapseFive" aria-labelledby="headingFive" data-bs-parent={"#accordionExample"}>
                  <div className="accordion-body pt-0">
 Many of our customers are using Phoenix with Laravel. Using Phoenix is like using Bootstrap with Laravel, just with some extra features.For a starter, you need to take all the CSS and JS files from Phoenix's "public/assets" folder to your project and link them to your view files. You can find all the required scripts and styles on the source of the starter page. It is also possible to compile the SCSS and use the ES6 JavaScript partial files with Laravel using Phoenix's built-in gulp based workflow. 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>





    <section>
      <div className="container-small">
        <div className="row flex-center">
          <div className="col-12 col-lg-9 col-xl-7 pt-4 pb-11">
            <div className="text-center">
              <PhoenixImage src="/assets/img/spot-illustrations/33-s.webp" alt="" className="mw-100 mb-6" width={422} />
              <h2 className="mb-8 text-body-highlight fw-normal">
Still have questions? We are
                <span className="text-primary position-relative fw-bolder ms-2">
happy to help
                  <PhoenixImage src="/assets/img/spot-illustrations/31.png" alt="" className="w-100 text-illustration-underline" />
                </span>
              </h2>
              <a href="mailto:support@themewagon.com" className="btn btn-lg btn-primary">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="me-2 mb-1" width={13} height={12} viewBox="0 0 13 12" fill="none">
                    <path d="M12.9 5.76484C12.9 8.63984 10.025 10.9648 6.5 10.9648C5.55 10.9648 4.675 10.8148 3.875 10.5398C3.6 10.7398 3.1 11.0398 2.525 11.2898C1.925 11.5648 1.2 11.7648 0.5 11.7648C0.325 11.7648 0.175 11.6898 0.125 11.5398C0.0499999 11.3898 0.0999999 11.2148 0.2 11.0898C0.225 11.0898 0.225 11.0648 0.25 11.0398C0.275 11.0148 0.325 10.9648 0.375 10.9148C0.475 10.7898 0.6 10.5898 0.75 10.3648C1 9.96484 1.225 9.41484 1.275 8.78984C0.525 7.93984 0.0999999 6.91484 0.0999999 5.76484C0.0999999 2.91484 2.95 0.564844 6.5 0.564844C10.025 0.564844 12.9 2.91484 12.9 5.76484Z" fill="white">                    </path>
                  </svg>
                </span>Give us a knock
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>





    <section className="bg-body-highlight py-6">
      <div className="container-small">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <div className="d-md-flex align-items-center mb-2">
              <PhoenixImage src="/assets/img/icons/logo.png" alt="phoenix" width={27} />
              <p className="logo-text text-body-tertiary text-opacity-85 ms-2">
phoenix
              </p>
            </div>
            <p className="pe-md-5">
Thank you for downloading Phoenix to create, customize and grow with it! Enjoy Phoenix!
            </p>
          </div>
          <div className="col-md-6">
            <div className="d-lg-flex justify-content-lg-end text-center">
              <PhoenixLink href="/documentation/getting-started" className="me-4">
Documentation
              </PhoenixLink>
              <a href="mailto:support@themewagon.com" className="me-4">
Support
              </a>
              <PhoenixLink href="/changelog">
Changelog
              </PhoenixLink>
            </div>
          </div>
        </div>
      </div>
    </section>



    <footer className="footer d-flex justify-content-center bg-body border-0">
      <div className="row g-0 justify-content-between align-items-center h-100">
        <div className="col-12 col-sm-auto text-center">
          <p className="mb-0 mt-2 mt-sm-0 text-body">
Thank you for creating with Phoenix
            <span className="d-none d-sm-inline-block">            </span>
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
  );
}
