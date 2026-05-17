'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function GallerySlider() {
  return (
    <div suppressHydrationWarning>

    <nav className="mb-3" aria-label="breadcrumb">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <a href="#!">
Page 1
          </a>
        </li>
        <li className="breadcrumb-item">
          <a href="#!">
Page 2
          </a>
        </li>
        <li className="breadcrumb-item active">
Default
        </li>
      </ol>
    </nav>

    <div className="mb-9">
      <h2 className="mb-5">
Gallery
      </h2>
      <div className="d-flex flex-wrap gap-3 justify-content-between">
        <div>
          <button className="btn btn-primary me-4">
            <span className="fas fa-plus me-2">            </span>
Add New
          </button>
          <button className="btn btn-link text-body me-4 px-0">
            <span className="fa-solid fa-file-export fs-9 me-2">            </span>
Export
          </button>
        </div>
        <div className="search-box">
          <form className="position-relative">
            <input className="form-control search-input search" type="search" placeholder="Search by name" aria-label="Search" />
            <span className="fas fa-search search-box-icon">            </span>
          </form>
        </div>
      </div>
      <div className="d-md-flex d-lg-block d-xl-flex justify-content-between gap-4 my-4">
        <div className="d-flex gap-2 mb-3 mb-md-0 mb-lg-3 mb-xl-0 order-md-1 order-lg-0 order-xl-1">
          <PhoenixLink href="/apps/gallery/gallery-column" className="btn btn-phoenix-secondary btn-square"  data-bs-toggle={"tooltip"} data-bs-placement={"top"} data-bs-title={"Column view"}>
            <span className="fa-solid fa-grip-vertical">            </span>
          </PhoenixLink>
          <PhoenixLink href="/apps/gallery/gallery-grid" className="btn btn-phoenix-secondary btn-square"  data-bs-toggle={"tooltip"} data-bs-placement={"top"} data-bs-title={"Grid view"}>
            <span className="fa-solid fa-th-large">            </span>
          </PhoenixLink>
          <PhoenixLink href="/apps/gallery/grid-with-title" className="btn btn-phoenix-secondary btn-square"  data-bs-toggle={"tooltip"} data-bs-placement={"top"} data-bs-title={"Grid view with title"}>
            <span className="fa-solid fa-th-large">            </span>
          </PhoenixLink>
          <PhoenixLink href="/apps/gallery/gallery-masonry" className="btn btn-phoenix-secondary btn-square"  data-bs-toggle={"tooltip"} data-bs-placement={"top"} data-bs-title={"Masonry view"}>
            <span className="fa-solid fa-th">            </span>
          </PhoenixLink>
          <PhoenixLink href="/apps/gallery/gallery-slider" className="btn btn-phoenix-secondary btn-square border-primary text-primary"  data-bs-toggle={"tooltip"} data-bs-placement={"top"} data-bs-title={"Slider view"}>
            <span className="fa-solid fa-mattress-pillow">            </span>
          </PhoenixLink>
        </div>
        <div className="scrollbar">
          <ul className="nav nav-underline gap-3 gap-md-5" id="gallery-slider-tab" role="tablist" style={{"minWidth":"385px"} as CSSProperties}>
            <li className="nav-item" role="presentation">
              <a href="#all-tab" className="nav-link" id="all-tab"  data-bs-toggle={"tab"} data-bs-target={"#all-tab-pane"} role="tab" aria-controls="all-tab-pane" aria-selected="true">
All
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a href="#ecommerce-tab" className="nav-link" id="ecommerce-tab"  data-bs-toggle={"tab"} data-bs-target={"#ecommerce-tab-pane"} role="tab" aria-controls="ecommerce-tab-pane" aria-selected="false">
Ecommerce
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a href="#project-management-tab" className="nav-link" id="project-management-tab"  data-bs-toggle={"tab"} data-bs-target={"#project-management-tab-pane"} role="tab" aria-controls="project-management-tab-pane" aria-selected="false">
Project Management
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a href="#photography-tab" className="nav-link" id="photography-tab"  data-bs-toggle={"tab"} data-bs-target={"#photography-tab-pane"} role="tab" aria-controls="photography-tab-pane" aria-selected="false">
Photography
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab-content" id="gallery-slider-tab-content">
        <div className="tab-pane fade show active" id="all-tab-pane" role="tabpanel" aria-labelledby="all-tab" tabIndex={0}>
          <div className="swiper-theme-container swiper-slider-gallery">
            <div className="swiper theme-slider" data-swiper={"{\"speed\":500,\"spaceBetween\":16,\"slidesPerView\":\"auto\",\"simulateTouch\":false,\"centeredSlides\":true,\"initialSlide\":1,\"thumb\":{\"slidesPerView\":4,\"spaceBetween\":8,\"freeMode\":true,\"loop\":true,\"watchSlidesProgress\":true,\"watchSlidesVisibility\":true,\"grabCursor\":true,\"breakpoints\":{\"540\":{\"slidesPerView\":7},\"768\":{\"slidesPerView\":8},\"1200\":{\"slidesPerView\":9}}}}"}>
              <div className="swiper-wrapper align-items-center" id="gallery-slider-all">
                <div className="swiper-slide position-relative rounded-2 overflow-hidden landscape ecommerce">
                  <PhoenixLink href="/assets/img/gallery/100.png" data-gallery={"gallery-slider-all"}>
                    <PhoenixImage src="/assets/img/gallery/100.png" alt="" className="w-100 h-100 object-fit-cover" />
                  </PhoenixLink>
                  <div className="backdrop-faded d-flex justify-content-between p-5">
                    <div>
                      <h3 className="text-white mb-2">
Nature
                      </h3>
                      <p className="mb-0 text-secondary-light">
Description text
                      </p>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-1 dropdown-toggle dropdown-caret-none text-white" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide position-relative rounded-2 overflow-hidden landscape photography">
                  <PhoenixLink href="/assets/img/gallery/101.png" data-gallery={"gallery-slider-all"}>
                    <PhoenixImage src="/assets/img/gallery/101.png" alt="" className="w-100 h-100 object-fit-cover" />
                  </PhoenixLink>
                  <div className="backdrop-faded d-flex justify-content-between p-5">
                    <div>
                      <h3 className="text-white mb-2">
Pixel 4
                      </h3>
                      <p className="mb-0 text-secondary-light">
Description text
                      </p>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-1 dropdown-toggle dropdown-caret-none text-white" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide position-relative rounded-2 overflow-hidden portrait ecommerce">
                  <PhoenixLink href="/assets/img/gallery/102.png" data-gallery={"gallery-slider-all"}>
                    <PhoenixImage src="/assets/img/gallery/102.png" alt="" className="w-100 h-100 object-fit-cover" />
                  </PhoenixLink>
                  <div className="backdrop-faded d-flex justify-content-between p-5">
                    <div>
                      <h3 className="text-white mb-2">
Sunset
                      </h3>
                      <p className="mb-0 text-secondary-light">
Description text
                      </p>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-1 dropdown-toggle dropdown-caret-none text-white" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide position-relative rounded-2 overflow-hidden square project-management">
                  <PhoenixLink href="/assets/img/gallery/103.png" data-gallery={"gallery-slider-all"}>
                    <PhoenixImage src="/assets/img/gallery/103.png" alt="" className="w-100 h-100 object-fit-cover" />
                  </PhoenixLink>
                  <div className="backdrop-faded d-flex justify-content-between p-5">
                    <div>
                      <h3 className="text-white mb-2">
Ear Buds
                      </h3>
                      <p className="mb-0 text-secondary-light">
Description text
                      </p>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-1 dropdown-toggle dropdown-caret-none text-white" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide position-relative rounded-2 overflow-hidden landscape ecommerce photography">
                  <PhoenixLink href="/assets/img/gallery/104.png" data-gallery={"gallery-slider-all"}>
                    <PhoenixImage src="/assets/img/gallery/104.png" alt="" className="w-100 h-100 object-fit-cover" />
                  </PhoenixLink>
                  <div className="backdrop-faded d-flex justify-content-between p-5">
                    <div>
                      <h3 className="text-white mb-2">
Sunset Horizon
                      </h3>
                      <p className="mb-0 text-secondary-light">
Description text
                      </p>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-1 dropdown-toggle dropdown-caret-none text-white" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide position-relative rounded-2 overflow-hidden portrait project-management photography">
                  <PhoenixLink href="/assets/img/gallery/71.png" data-gallery={"gallery-slider-all"}>
                    <PhoenixImage src="/assets/img/gallery/71.png" alt="" className="w-100 h-100 object-fit-cover" />
                  </PhoenixLink>
                  <div className="backdrop-faded d-flex justify-content-between p-5">
                    <div>
                      <h3 className="text-white mb-2">
Sunset
                      </h3>
                      <p className="mb-0 text-secondary-light">
Description text
                      </p>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-1 dropdown-toggle dropdown-caret-none text-white" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide position-relative rounded-2 overflow-hidden landscape photography">
                  <PhoenixLink href="/assets/img/gallery/105.png" data-gallery={"gallery-slider-all"}>
                    <PhoenixImage src="/assets/img/gallery/105.png" alt="" className="w-100 h-100 object-fit-cover" />
                  </PhoenixLink>
                  <div className="backdrop-faded d-flex justify-content-between p-5">
                    <div>
                      <h3 className="text-white mb-2">
Ear Buds
                      </h3>
                      <p className="mb-0 text-secondary-light">
Description text
                      </p>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-1 dropdown-toggle dropdown-caret-none text-white" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide position-relative rounded-2 overflow-hidden square ecommerce photography">
                  <PhoenixLink href="/assets/video/2.mp4" data-gallery={"gallery-slider-all"}>
                    <div className="video-container h-100">
                      <video className="video w-100 h-100 object-fit-cover overflow-hidden rounded-2" muted data-play-on-hover poster="../../assets/video/2.png">
                        <source src="/assets/video/2.mp4" type="video/mp4" />
                      </video>
                      <div className="circle-icon-item position-absolute top-50 start-50 translate-middle bg-body-emphasis rounded-pill bg-opacity-50">
                        <span className="fa-solid fa-video text-body fs-9 fs-sm-8">                        </span>
                      </div>
                    </div>                    <PhoenixImage src="/assets/video/2.png" alt="" className="d-none" />
                  </PhoenixLink>
                  <div className="backdrop-faded d-flex justify-content-between p-5">
                    <div>
                      <h3 className="text-white mb-2">
Bike Ride
                      </h3>
                      <p className="mb-0 text-secondary-light">
Description text
                      </p>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-1 dropdown-toggle dropdown-caret-none text-white" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide position-relative rounded-2 overflow-hidden landscape project-management">
                  <PhoenixLink href="/assets/video/3.mp4" data-gallery={"gallery-slider-all"}>
                    <div className="video-container h-100">
                      <video className="video w-100 h-100 object-fit-cover overflow-hidden rounded-2" muted data-play-on-hover poster="../../assets/video/3.png">
                        <source src="/assets/video/3.mp4" type="video/mp4" />
                      </video>
                      <div className="circle-icon-item position-absolute top-50 start-50 translate-middle bg-body-emphasis rounded-pill bg-opacity-50">
                        <span className="fa-solid fa-video text-body fs-9 fs-sm-8">                        </span>
                      </div>
                    </div>                    <PhoenixImage src="/assets/video/3.png" alt="" className="d-none" />
                  </PhoenixLink>
                  <div className="backdrop-faded d-flex justify-content-between p-5">
                    <div>
                      <h3 className="text-white mb-2">
Mountain Sunset
                      </h3>
                      <p className="mb-0 text-secondary-light">
Description text
                      </p>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-1 dropdown-toggle dropdown-caret-none text-white" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide position-relative rounded-2 overflow-hidden portrait project-management">
                  <PhoenixLink href="/assets/img/gallery/66.png" data-gallery={"gallery-slider-all"}>
                    <PhoenixImage src="/assets/img/gallery/66.png" alt="" className="w-100 h-100 object-fit-cover" />
                  </PhoenixLink>
                  <div className="backdrop-faded d-flex justify-content-between p-5">
                    <div>
                      <h3 className="text-white mb-2">
Desert Photography
                      </h3>
                      <p className="mb-0 text-secondary-light">
Description text
                      </p>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-1 dropdown-toggle dropdown-caret-none text-white" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide position-relative rounded-2 overflow-hidden square project-management">
                  <PhoenixLink href="/assets/img/gallery/42.png" data-gallery={"gallery-slider-all"}>
                    <PhoenixImage src="/assets/img/gallery/42.png" alt="" className="w-100 h-100 object-fit-cover" />
                  </PhoenixLink>
                  <div className="backdrop-faded d-flex justify-content-between p-5">
                    <div>
                      <h3 className="text-white mb-2">
London
                      </h3>
                      <p className="mb-0 text-secondary-light">
Description text
                      </p>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-1 dropdown-toggle dropdown-caret-none text-white" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-nav">
              <div className="swiper-button-next">
                <span className="fas fa-chevron-right nav-icon">                </span>
              </div>
              <div className="swiper-button-prev">
                <span className="fas fa-chevron-left nav-icon">                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="ecommerce-tab-pane" role="tabpanel" aria-labelledby="ecommerce-tab" tabIndex={0}>
          <div className="swiper-theme-container swiper-slider-gallery">
            <div className="swiper theme-slider" data-swiper={"{\"speed\":500,\"spaceBetween\":16,\"slidesPerView\":\"auto\",\"simulateTouch\":false,\"centeredSlides\":true,\"initialSlide\":1,\"thumb\":{\"slidesPerView\":4,\"spaceBetween\":8,\"freeMode\":true,\"loop\":false,\"watchSlidesProgress\":true,\"watchSlidesVisibility\":true,\"grabCursor\":true,\"breakpoints\":{\"540\":{\"slidesPerView\":7},\"768\":{\"slidesPerView\":8},\"1200\":{\"slidesPerView\":9}}}}"}>
              <div className="swiper-wrapper align-items-center" id="gallery-slider-ecommerce">
                <div className="swiper-slide position-relative rounded-2 overflow-hidden landscape ecommerce">
                  <PhoenixLink href="/assets/img/gallery/100.png" data-gallery={"gallery-slider-ecommerce"}>
                    <PhoenixImage src="/assets/img/gallery/100.png" alt="" className="w-100 h-100 object-fit-cover" />
                  </PhoenixLink>
                  <div className="backdrop-faded d-flex justify-content-between p-5">
                    <div>
                      <h3 className="text-white mb-2">
Nature
                      </h3>
                      <p className="mb-0 text-secondary-light">
Description text
                      </p>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-1 dropdown-toggle dropdown-caret-none text-white" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide position-relative rounded-2 overflow-hidden portrait ecommerce">
                  <PhoenixLink href="/assets/img/gallery/102.png" data-gallery={"gallery-slider-ecommerce"}>
                    <PhoenixImage src="/assets/img/gallery/102.png" alt="" className="w-100 h-100 object-fit-cover" />
                  </PhoenixLink>
                  <div className="backdrop-faded d-flex justify-content-between p-5">
                    <div>
                      <h3 className="text-white mb-2">
Sunset
                      </h3>
                      <p className="mb-0 text-secondary-light">
Description text
                      </p>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-1 dropdown-toggle dropdown-caret-none text-white" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide position-relative rounded-2 overflow-hidden landscape ecommerce photography">
                  <PhoenixLink href="/assets/img/gallery/104.png" data-gallery={"gallery-slider-ecommerce"}>
                    <PhoenixImage src="/assets/img/gallery/104.png" alt="" className="w-100 h-100 object-fit-cover" />
                  </PhoenixLink>
                  <div className="backdrop-faded d-flex justify-content-between p-5">
                    <div>
                      <h3 className="text-white mb-2">
Sunset Horizon
                      </h3>
                      <p className="mb-0 text-secondary-light">
Description text
                      </p>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-1 dropdown-toggle dropdown-caret-none text-white" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide position-relative rounded-2 overflow-hidden square ecommerce photography">
                  <PhoenixLink href="/assets/video/2.mp4" data-gallery={"gallery-slider-ecommerce"}>
                    <div className="video-container h-100">
                      <video className="video w-100 h-100 object-fit-cover overflow-hidden rounded-2" muted data-play-on-hover poster="../../assets/video/2.png">
                        <source src="/assets/video/2.mp4" type="video/mp4" />
                      </video>
                      <div className="circle-icon-item position-absolute top-50 start-50 translate-middle bg-body-emphasis rounded-pill bg-opacity-50">
                        <span className="fa-solid fa-video text-body fs-9 fs-sm-8">                        </span>
                      </div>
                    </div>                    <PhoenixImage src="/assets/video/2.png" alt="" className="d-none" />
                  </PhoenixLink>
                  <div className="backdrop-faded d-flex justify-content-between p-5">
                    <div>
                      <h3 className="text-white mb-2">
Bike Ride
                      </h3>
                      <p className="mb-0 text-secondary-light">
Description text
                      </p>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-1 dropdown-toggle dropdown-caret-none text-white" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-nav">
              <div className="swiper-button-next">
                <span className="fas fa-chevron-right nav-icon">                </span>
              </div>
              <div className="swiper-button-prev">
                <span className="fas fa-chevron-left nav-icon">                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="project-management-tab-pane" role="tabpanel" aria-labelledby="project-management-tab" tabIndex={0}>
          <div className="swiper-theme-container swiper-slider-gallery">
            <div className="swiper theme-slider" data-swiper={"{\"speed\":500,\"spaceBetween\":16,\"slidesPerView\":\"auto\",\"simulateTouch\":false,\"centeredSlides\":true,\"initialSlide\":1,\"thumb\":{\"slidesPerView\":4,\"spaceBetween\":8,\"freeMode\":true,\"loop\":false,\"watchSlidesProgress\":true,\"watchSlidesVisibility\":true,\"grabCursor\":true,\"breakpoints\":{\"540\":{\"slidesPerView\":7},\"768\":{\"slidesPerView\":8},\"1200\":{\"slidesPerView\":9}}}}"}>
              <div className="swiper-wrapper align-items-center" id="gallery-slider-project-management">
                <div className="swiper-slide position-relative rounded-2 overflow-hidden square project-management">
                  <PhoenixLink href="/assets/img/gallery/103.png" data-gallery={"gallery-slider-project-management"}>
                    <PhoenixImage src="/assets/img/gallery/103.png" alt="" className="w-100 h-100 object-fit-cover" />
                  </PhoenixLink>
                  <div className="backdrop-faded d-flex justify-content-between p-5">
                    <div>
                      <h3 className="text-white mb-2">
Ear Buds
                      </h3>
                      <p className="mb-0 text-secondary-light">
Description text
                      </p>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-1 dropdown-toggle dropdown-caret-none text-white" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide position-relative rounded-2 overflow-hidden portrait project-management photography">
                  <PhoenixLink href="/assets/img/gallery/71.png" data-gallery={"gallery-slider-project-management"}>
                    <PhoenixImage src="/assets/img/gallery/71.png" alt="" className="w-100 h-100 object-fit-cover" />
                  </PhoenixLink>
                  <div className="backdrop-faded d-flex justify-content-between p-5">
                    <div>
                      <h3 className="text-white mb-2">
Sunset
                      </h3>
                      <p className="mb-0 text-secondary-light">
Description text
                      </p>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-1 dropdown-toggle dropdown-caret-none text-white" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide position-relative rounded-2 overflow-hidden landscape project-management">
                  <PhoenixLink href="/assets/video/3.mp4" data-gallery={"gallery-slider-project-management"}>
                    <div className="video-container h-100">
                      <video className="video w-100 h-100 object-fit-cover overflow-hidden rounded-2" muted data-play-on-hover poster="../../assets/video/3.png">
                        <source src="/assets/video/3.mp4" type="video/mp4" />
                      </video>
                      <div className="circle-icon-item position-absolute top-50 start-50 translate-middle bg-body-emphasis rounded-pill bg-opacity-50">
                        <span className="fa-solid fa-video text-body fs-9 fs-sm-8">                        </span>
                      </div>
                    </div>                    <PhoenixImage src="/assets/video/3.png" alt="" className="d-none" />
                  </PhoenixLink>
                  <div className="backdrop-faded d-flex justify-content-between p-5">
                    <div>
                      <h3 className="text-white mb-2">
Mountain Sunset
                      </h3>
                      <p className="mb-0 text-secondary-light">
Description text
                      </p>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-1 dropdown-toggle dropdown-caret-none text-white" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide position-relative rounded-2 overflow-hidden portrait project-management">
                  <PhoenixLink href="/assets/img/gallery/66.png" data-gallery={"gallery-slider-project-management"}>
                    <PhoenixImage src="/assets/img/gallery/66.png" alt="" className="w-100 h-100 object-fit-cover" />
                  </PhoenixLink>
                  <div className="backdrop-faded d-flex justify-content-between p-5">
                    <div>
                      <h3 className="text-white mb-2">
Desert Photography
                      </h3>
                      <p className="mb-0 text-secondary-light">
Description text
                      </p>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-1 dropdown-toggle dropdown-caret-none text-white" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide position-relative rounded-2 overflow-hidden square project-management">
                  <PhoenixLink href="/assets/img/gallery/42.png" data-gallery={"gallery-slider-project-management"}>
                    <PhoenixImage src="/assets/img/gallery/42.png" alt="" className="w-100 h-100 object-fit-cover" />
                  </PhoenixLink>
                  <div className="backdrop-faded d-flex justify-content-between p-5">
                    <div>
                      <h3 className="text-white mb-2">
London
                      </h3>
                      <p className="mb-0 text-secondary-light">
Description text
                      </p>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-1 dropdown-toggle dropdown-caret-none text-white" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-nav">
              <div className="swiper-button-next">
                <span className="fas fa-chevron-right nav-icon">                </span>
              </div>
              <div className="swiper-button-prev">
                <span className="fas fa-chevron-left nav-icon">                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="photography-tab-pane" role="tabpanel" aria-labelledby="photography-tab" tabIndex={0}>
          <div className="swiper-theme-container swiper-slider-gallery">
            <div className="swiper theme-slider" data-swiper={"{\"speed\":500,\"spaceBetween\":16,\"slidesPerView\":\"auto\",\"simulateTouch\":false,\"centeredSlides\":true,\"initialSlide\":1,\"thumb\":{\"slidesPerView\":4,\"spaceBetween\":8,\"freeMode\":true,\"loop\":false,\"watchSlidesProgress\":true,\"watchSlidesVisibility\":true,\"grabCursor\":true,\"breakpoints\":{\"540\":{\"slidesPerView\":7},\"768\":{\"slidesPerView\":8},\"1200\":{\"slidesPerView\":9}}}}"}>
              <div className="swiper-wrapper align-items-center" id="gallery-slider-photography">
                <div className="swiper-slide position-relative rounded-2 overflow-hidden landscape photography">
                  <PhoenixLink href="/assets/img/gallery/101.png" data-gallery={"gallery-slider-photography"}>
                    <PhoenixImage src="/assets/img/gallery/101.png" alt="" className="w-100 h-100 object-fit-cover" />
                  </PhoenixLink>
                  <div className="backdrop-faded d-flex justify-content-between p-5">
                    <div>
                      <h3 className="text-white mb-2">
Pixel 4
                      </h3>
                      <p className="mb-0 text-secondary-light">
Description text
                      </p>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-1 dropdown-toggle dropdown-caret-none text-white" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide position-relative rounded-2 overflow-hidden landscape ecommerce photography">
                  <PhoenixLink href="/assets/img/gallery/104.png" data-gallery={"gallery-slider-photography"}>
                    <PhoenixImage src="/assets/img/gallery/104.png" alt="" className="w-100 h-100 object-fit-cover" />
                  </PhoenixLink>
                  <div className="backdrop-faded d-flex justify-content-between p-5">
                    <div>
                      <h3 className="text-white mb-2">
Sunset Horizon
                      </h3>
                      <p className="mb-0 text-secondary-light">
Description text
                      </p>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-1 dropdown-toggle dropdown-caret-none text-white" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide position-relative rounded-2 overflow-hidden portrait project-management photography">
                  <PhoenixLink href="/assets/img/gallery/71.png" data-gallery={"gallery-slider-photography"}>
                    <PhoenixImage src="/assets/img/gallery/71.png" alt="" className="w-100 h-100 object-fit-cover" />
                  </PhoenixLink>
                  <div className="backdrop-faded d-flex justify-content-between p-5">
                    <div>
                      <h3 className="text-white mb-2">
Sunset
                      </h3>
                      <p className="mb-0 text-secondary-light">
Description text
                      </p>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-1 dropdown-toggle dropdown-caret-none text-white" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide position-relative rounded-2 overflow-hidden landscape photography">
                  <PhoenixLink href="/assets/img/gallery/105.png" data-gallery={"gallery-slider-photography"}>
                    <PhoenixImage src="/assets/img/gallery/105.png" alt="" className="w-100 h-100 object-fit-cover" />
                  </PhoenixLink>
                  <div className="backdrop-faded d-flex justify-content-between p-5">
                    <div>
                      <h3 className="text-white mb-2">
Ear Buds
                      </h3>
                      <p className="mb-0 text-secondary-light">
Description text
                      </p>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-1 dropdown-toggle dropdown-caret-none text-white" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide position-relative rounded-2 overflow-hidden square ecommerce photography">
                  <PhoenixLink href="/assets/video/2.mp4" data-gallery={"gallery-slider-photography"}>
                    <div className="video-container h-100">
                      <video className="video w-100 h-100 object-fit-cover overflow-hidden rounded-2" muted data-play-on-hover poster="../../assets/video/2.png">
                        <source src="/assets/video/2.mp4" type="video/mp4" />
                      </video>
                      <div className="circle-icon-item position-absolute top-50 start-50 translate-middle bg-body-emphasis rounded-pill bg-opacity-50">
                        <span className="fa-solid fa-video text-body fs-9 fs-sm-8">                        </span>
                      </div>
                    </div>                    <PhoenixImage src="/assets/video/2.png" alt="" className="d-none" />
                  </PhoenixLink>
                  <div className="backdrop-faded d-flex justify-content-between p-5">
                    <div>
                      <h3 className="text-white mb-2">
Bike Ride
                      </h3>
                      <p className="mb-0 text-secondary-light">
Description text
                      </p>
                    </div>
                    <div className="dropdown">
                      <button className="btn p-1 dropdown-toggle dropdown-caret-none text-white" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
Edit
                        </a>
                        <a href="#!" className="dropdown-item text-danger">
Delete
                        </a>
                        <a href="#!" className="dropdown-item">
Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-nav">
              <div className="swiper-button-next">
                <span className="fas fa-chevron-right nav-icon">                </span>
              </div>
              <div className="swiper-button-prev">
                <span className="fas fa-chevron-left nav-icon">                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer className="footer position-absolute">
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
