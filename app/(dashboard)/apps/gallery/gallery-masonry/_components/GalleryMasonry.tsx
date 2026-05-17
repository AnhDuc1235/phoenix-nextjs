'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function GalleryMasonry() {
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
          <PhoenixLink href="/apps/gallery/gallery-masonry" className="btn btn-phoenix-secondary btn-square border-primary text-primary"  data-bs-toggle={"tooltip"} data-bs-placement={"top"} data-bs-title={"Masonry view"}>
            <span className="fa-solid fa-th">            </span>
          </PhoenixLink>
          <PhoenixLink href="/apps/gallery/gallery-slider" className="btn btn-phoenix-secondary btn-square"  data-bs-toggle={"tooltip"} data-bs-placement={"top"} data-bs-title={"Slider view"}>
            <span className="fa-solid fa-mattress-pillow">            </span>
          </PhoenixLink>
        </div>
        <div className="scrollbar">
          <ul className="nav nav-underline gap-md-5" data-filter-nav style={{"minWidth":"400px"} as CSSProperties}>
            <li className="nav-item">
              <a href="#" className="nav-link cursor-pointer active" data-filter={"*"}>
All
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link cursor-pointer" data-filter={".ecommerce"}>
Ecommerce
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link cursor-pointer" data-filter={".project-management"}>
Project Management
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link cursor-pointer" data-filter={".photography"}>
Photography
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row g-3" id="gallery-masonry" data-sl-isotope={"{\"layoutMode\":\"packery\",\"packery\":{\"gutter\":0}}"}>
        <div className="col-sm-6 col-md-8 col-xl-4 isotope-item ecommerce">
          <div className="img-zoom-hover position-relative rounded-2 overflow-hidden">
            <PhoenixLink href="/assets/img/gallery/89_large.png" data-gallery={"gallery-masonry"}>
              <PhoenixImage src="/assets/img/gallery/89.png" alt="" className="rounded-2 w-100 h-100 object-fit-cover" />              <div className="backdrop-faded position-absolute w-100 bottom-0 start-0 p-3">
                <h4 className="text-white">
Pixel 4a 5g
                </h4>
                <p className="mb-0 text-secondary-lighter text-capitalize">
ecommerce
                </p>
              </div>
            </PhoenixLink>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-xl-2 isotope-item photography">
          <div className="img-zoom-hover position-relative rounded-2 overflow-hidden">
            <PhoenixLink href="/assets/img/gallery/86.png" data-gallery={"gallery-masonry"}>
              <PhoenixImage src="/assets/img/gallery/90.png" alt="" className="rounded-2 w-100 h-100 object-fit-cover" />              <div className="backdrop-faded position-absolute w-100 bottom-0 start-0 p-3">
                <h4 className="text-white">
Sunset
                </h4>
                <p className="mb-0 text-secondary-lighter text-capitalize">
photography
                </p>
              </div>
            </PhoenixLink>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-xl-3 isotope-item project-management">
          <div className="img-zoom-hover position-relative rounded-2 overflow-hidden">
            <PhoenixLink href="/assets/img/gallery/91_large.png" data-gallery={"gallery-masonry"}>
              <PhoenixImage src="/assets/img/gallery/91.png" alt="" className="rounded-2 w-100 h-100 object-fit-cover" />              <div className="backdrop-faded position-absolute w-100 bottom-0 start-0 p-3">
                <h4 className="text-white">
Trees During Night
                </h4>
                <p className="mb-0 text-secondary-lighter text-capitalize">
project management
                </p>
              </div>
            </PhoenixLink>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-xl-3 isotope-item ecommerce">
          <div className="img-zoom-hover position-relative rounded-2 overflow-hidden">
            <PhoenixLink href="/assets/img/gallery/92_large.png" data-gallery={"gallery-masonry"}>
              <PhoenixImage src="/assets/img/gallery/92.png" alt="" className="rounded-2 w-100 h-100 object-fit-cover" />              <div className="backdrop-faded position-absolute w-100 bottom-0 start-0 p-3">
                <h4 className="text-white">
Mountain Sunset
                </h4>
                <p className="mb-0 text-secondary-lighter text-capitalize">
ecommerce
                </p>
              </div>
            </PhoenixLink>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-xl-3 isotope-item project-management">
          <div className="img-zoom-hover position-relative rounded-2 overflow-hidden">
            <PhoenixLink href="/assets/img/gallery/96.mp4" className="video-container"  data-gallery={"gallery-masonry"}>
              <video className="video d-block h-100 w-100 overflow-hidden rounded-2" muted data-play-on-hover poster="../../assets/img/gallery/96.png">
                <source src="/assets/img/gallery/96.mp4" type="video/mp4" />
              </video>              <div className="circle-icon-item position-absolute top-50 start-50 translate-middle bg-body-emphasis rounded-pill bg-opacity-50">
                <span className="fa-solid fa-video text-body fs-9 fs-sm-8">                </span>
              </div>              <div className="backdrop-faded position-absolute w-100 bottom-0 start-0 p-3">
                <h4 className="text-white">
Beautiful Nature
                </h4>
                <p className="mb-0 text-secondary-lighter text-capitalize">
project management
                </p>
              </div>
            </PhoenixLink>
          </div>
        </div>
        <div className="col-sm-6 col-md-8 col-xl-3 isotope-item ecommerce">
          <div className="img-zoom-hover position-relative rounded-2 overflow-hidden">
            <PhoenixLink href="/assets/img/gallery/97.mp4" className="video-container"  data-gallery={"gallery-masonry"}>
              <video className="video d-block h-100 w-100 overflow-hidden rounded-2" muted data-play-on-hover poster="../../assets/img/gallery/97.png">
                <source src="/assets/img/gallery/97.mp4" type="video/mp4" />
              </video>              <div className="circle-icon-item position-absolute top-50 start-50 translate-middle bg-body-emphasis rounded-pill bg-opacity-50">
                <span className="fa-solid fa-video text-body fs-9 fs-sm-8">                </span>
              </div>              <div className="backdrop-faded position-absolute w-100 bottom-0 start-0 p-3">
                <h4 className="text-white">
Bike Ride
                </h4>
                <p className="mb-0 text-secondary-lighter text-capitalize">
ecommerce
                </p>
              </div>
            </PhoenixLink>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-xl-2 isotope-item photography">
          <div className="img-zoom-hover position-relative rounded-2 overflow-hidden">
            <PhoenixLink href="/assets/img/gallery/79.png" data-gallery={"gallery-masonry"}>
              <PhoenixImage src="/assets/img/gallery/93.png" alt="" className="rounded-2 w-100 h-100 object-fit-cover" />              <div className="backdrop-faded position-absolute w-100 bottom-0 start-0 p-3">
                <h4 className="text-white">
Camera
                </h4>
                <p className="mb-0 text-secondary-lighter text-capitalize">
photography
                </p>
              </div>
            </PhoenixLink>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-xl-2 isotope-item ecommerce">
          <div className="img-zoom-hover position-relative rounded-2 overflow-hidden">
            <PhoenixLink href="/assets/img/gallery/77.png" data-gallery={"gallery-masonry"}>
              <PhoenixImage src="/assets/img/gallery/94.png" alt="" className="rounded-2 w-100 h-100 object-fit-cover" />              <div className="backdrop-faded position-absolute w-100 bottom-0 start-0 p-3">
                <h4 className="text-white">
Basketball Shoes
                </h4>
                <p className="mb-0 text-secondary-lighter text-capitalize">
ecommerce
                </p>
              </div>
            </PhoenixLink>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-xl-2 isotope-item project-management">
          <div className="img-zoom-hover position-relative rounded-2 overflow-hidden">
            <PhoenixLink href="/assets/img/gallery/95_large.png" data-gallery={"gallery-masonry"}>
              <PhoenixImage src="/assets/img/gallery/95.png" alt="" className="rounded-2 w-100 h-100 object-fit-cover" />              <div className="backdrop-faded position-absolute w-100 bottom-0 start-0 p-3">
                <h4 className="text-white">
Aurora
                </h4>
                <p className="mb-0 text-secondary-lighter text-capitalize">
project management
                </p>
              </div>
            </PhoenixLink>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-xl-2 isotope-item photography">
          <div className="img-zoom-hover position-relative rounded-2 overflow-hidden">
            <PhoenixLink href="/assets/img/gallery/108_large.png" data-gallery={"gallery-masonry"}>
              <PhoenixImage src="/assets/img/gallery/108.png" alt="" className="rounded-2 w-100 h-100 object-fit-cover" />              <div className="backdrop-faded position-absolute w-100 bottom-0 start-0 p-3">
                <h4 className="text-white">
House near lake
                </h4>
                <p className="mb-0 text-secondary-lighter text-capitalize">
photography
                </p>
              </div>
            </PhoenixLink>
          </div>
        </div>
        <div className="col-sm-6 col-md-8 col-xl-4 isotope-item project-management">
          <div className="img-zoom-hover position-relative rounded-2 overflow-hidden">
            <PhoenixLink href="/assets/img/gallery/107_large.png" data-gallery={"gallery-masonry"}>
              <PhoenixImage src="/assets/img/gallery/119.png" alt="" className="rounded-2 w-100 h-100 object-fit-cover" />              <div className="backdrop-faded position-absolute w-100 bottom-0 start-0 p-3">
                <h4 className="text-white">
Car
                </h4>
                <p className="mb-0 text-secondary-lighter text-capitalize">
project management
                </p>
              </div>
            </PhoenixLink>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-xl-2 isotope-item photography">
          <div className="img-zoom-hover position-relative rounded-2 overflow-hidden">
            <PhoenixLink href="/assets/img/gallery/106_large.png" data-gallery={"gallery-masonry"}>
              <PhoenixImage src="/assets/img/gallery/106.png" alt="" className="rounded-2 w-100 h-100 object-fit-cover" />              <div className="backdrop-faded position-absolute w-100 bottom-0 start-0 p-3">
                <h4 className="text-white">
MI Phone
                </h4>
                <p className="mb-0 text-secondary-lighter text-capitalize">
photography
                </p>
              </div>
            </PhoenixLink>
          </div>
        </div>
        <div className="col-sm-6 col-md-8 col-xl-4 isotope-item photography">
          <div className="img-zoom-hover position-relative rounded-2 overflow-hidden">
            <PhoenixLink href="/assets/img/gallery/99.mp4" className="video-container"  data-gallery={"gallery-masonry"}>
              <video className="video d-block h-100 w-100 overflow-hidden rounded-2" muted data-play-on-hover poster="../../assets/img/gallery/99.png">
                <source src="/assets/img/gallery/99.mp4" type="video/mp4" />
              </video>              <div className="circle-icon-item position-absolute top-50 start-50 translate-middle bg-body-emphasis rounded-pill bg-opacity-50">
                <span className="fa-solid fa-video text-body fs-9 fs-sm-8">                </span>
              </div>              <div className="backdrop-faded position-absolute w-100 bottom-0 start-0 p-3">
                <h4 className="text-white">
Air Balloons
                </h4>
                <p className="mb-0 text-secondary-lighter text-capitalize">
photography
                </p>
              </div>
            </PhoenixLink>
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
