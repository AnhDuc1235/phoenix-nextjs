'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function GalleryGrid() {
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
          <PhoenixLink href="/apps/gallery/gallery-grid" className="btn btn-phoenix-secondary btn-square border-primary text-primary"  data-bs-toggle={"tooltip"} data-bs-placement={"top"} data-bs-title={"Grid view"}>
            <span className="fa-solid fa-th-large">            </span>
          </PhoenixLink>
          <PhoenixLink href="/apps/gallery/grid-with-title" className="btn btn-phoenix-secondary btn-square"  data-bs-toggle={"tooltip"} data-bs-placement={"top"} data-bs-title={"Grid view with title"}>
            <span className="fa-solid fa-th-large">            </span>
          </PhoenixLink>
          <PhoenixLink href="/apps/gallery/gallery-masonry" className="btn btn-phoenix-secondary btn-square"  data-bs-toggle={"tooltip"} data-bs-placement={"top"} data-bs-title={"Masonry view"}>
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
      <div className="row g-3" id="image_gallery" data-sl-isotope={"{\"layoutMode\":\"packery\"}"}>
        <PhoenixLink href="/assets/img/gallery/77.png" className="ecommerce col-sm-6 col-md-4 col-xl-3 isotope-item"  data-gallery={"gallery-grid"}>
          <div className="hoverbox img-zoom-hover rounded-2">
            <PhoenixImage src="/assets/img/gallery/77.png" alt="" className="img-fluid" />
            <div className="hoverbox-content flex-center flex-column">
              <h4 className="text-white">
Basketball Shoes
              </h4>
              <p className="mb-0 text-secondary-lighter text-capitalize">
ecommerce
              </p>
            </div>
          </div>
        </PhoenixLink>
        <PhoenixLink href="/assets/img/gallery/78.png" className="photography col-sm-6 col-md-4 col-xl-3 isotope-item"  data-gallery={"gallery-grid"}>
          <div className="hoverbox img-zoom-hover rounded-2">
            <PhoenixImage src="/assets/img/gallery/78.png" alt="" className="img-fluid" />
            <div className="hoverbox-content flex-center flex-column">
              <h4 className="text-white">
Beach Sunset
              </h4>
              <p className="mb-0 text-secondary-lighter text-capitalize">
photography
              </p>
            </div>
          </div>
        </PhoenixLink>
        <PhoenixLink href="/assets/img/gallery/79.png" className="photography col-sm-6 col-md-4 col-xl-3 isotope-item"  data-gallery={"gallery-grid"}>
          <div className="hoverbox img-zoom-hover rounded-2">
            <PhoenixImage src="/assets/img/gallery/79.png" alt="" className="img-fluid" />
            <div className="hoverbox-content flex-center flex-column">
              <h4 className="text-white">
Camera
              </h4>
              <p className="mb-0 text-secondary-lighter text-capitalize">
photography
              </p>
            </div>
          </div>
        </PhoenixLink>
        <PhoenixLink href="/assets/img/gallery/80.png" className="ecommerce col-sm-6 col-md-4 col-xl-3 isotope-item"  data-gallery={"gallery-grid"}>
          <div className="hoverbox img-zoom-hover rounded-2">
            <PhoenixImage src="/assets/img/gallery/80.png" alt="" className="img-fluid" />
            <div className="hoverbox-content flex-center flex-column">
              <h4 className="text-white">
Telephone
              </h4>
              <p className="mb-0 text-secondary-lighter text-capitalize">
ecommerce
              </p>
            </div>
          </div>
        </PhoenixLink>
        <PhoenixLink href="/assets/img/gallery/81.png" className="photography col-sm-6 col-md-4 col-xl-3 isotope-item"  data-gallery={"gallery-grid"}>
          <div className="hoverbox img-zoom-hover rounded-2">
            <PhoenixImage src="/assets/img/gallery/81.png" alt="" className="img-fluid" />
            <div className="hoverbox-content flex-center flex-column">
              <h4 className="text-white">
Sea Beach
              </h4>
              <p className="mb-0 text-secondary-lighter text-capitalize">
photography
              </p>
            </div>
          </div>
        </PhoenixLink>
        <PhoenixLink href="/assets/img/gallery/82.png" className="photography col-sm-6 col-md-4 col-xl-3 isotope-item"  data-gallery={"gallery-grid"}>
          <div className="hoverbox img-zoom-hover rounded-2">
            <PhoenixImage src="/assets/img/gallery/82.png" alt="" className="img-fluid" />
            <div className="hoverbox-content flex-center flex-column">
              <h4 className="text-white">
Wooden Beetle
              </h4>
              <p className="mb-0 text-secondary-lighter text-capitalize">
photography
              </p>
            </div>
          </div>
        </PhoenixLink>
        <PhoenixLink href="/assets/img/gallery/83.png" className="project-management col-sm-6 col-md-4 col-xl-3 isotope-item"  data-gallery={"gallery-grid"}>
          <div className="hoverbox img-zoom-hover rounded-2">
            <PhoenixImage src="/assets/img/gallery/83.png" alt="" className="img-fluid" />
            <div className="hoverbox-content flex-center flex-column">
              <h4 className="text-white">
Boat on Water
              </h4>
              <p className="mb-0 text-secondary-lighter text-capitalize">
project management
              </p>
            </div>
          </div>
        </PhoenixLink>
        <PhoenixLink href="/assets/img/gallery/84.png" className="photography col-sm-6 col-md-4 col-xl-3 isotope-item"  data-gallery={"gallery-grid"}>
          <div className="hoverbox img-zoom-hover rounded-2">
            <PhoenixImage src="/assets/img/gallery/84.png" alt="" className="img-fluid" />
            <div className="hoverbox-content flex-center flex-column">
              <h4 className="text-white">
Sunset Horizon
              </h4>
              <p className="mb-0 text-secondary-lighter text-capitalize">
photography
              </p>
            </div>
          </div>
        </PhoenixLink>
        <PhoenixLink href="/assets/img/gallery/85.png" className="project-management col-sm-6 col-md-4 col-xl-3 isotope-item"  data-gallery={"gallery-grid"}>
          <div className="hoverbox img-zoom-hover rounded-2">
            <PhoenixImage src="/assets/img/gallery/85.png" alt="" className="img-fluid" />
            <div className="hoverbox-content flex-center flex-column">
              <h4 className="text-white">
Trail Ahead
              </h4>
              <p className="mb-0 text-secondary-lighter text-capitalize">
project management
              </p>
            </div>
          </div>
        </PhoenixLink>
        <PhoenixLink href="/assets/img/gallery/86.png" className="project-management col-sm-6 col-md-4 col-xl-3 isotope-item"  data-gallery={"gallery-grid"}>
          <div className="hoverbox img-zoom-hover rounded-2">
            <PhoenixImage src="/assets/img/gallery/86.png" alt="" className="img-fluid" />
            <div className="hoverbox-content flex-center flex-column">
              <h4 className="text-white">
Mountain Sunset
              </h4>
              <p className="mb-0 text-secondary-lighter text-capitalize">
project management
              </p>
            </div>
          </div>
        </PhoenixLink>
        <PhoenixLink href="/assets/img/gallery/87.png" className="ecommerce col-sm-6 col-md-4 col-xl-3 isotope-item"  data-gallery={"gallery-grid"}>
          <div className="hoverbox img-zoom-hover rounded-2">
            <PhoenixImage src="/assets/img/gallery/87.png" alt="" className="img-fluid" />
            <div className="hoverbox-content flex-center flex-column">
              <h4 className="text-white">
Dog Sitting
              </h4>
              <p className="mb-0 text-secondary-lighter text-capitalize">
ecommerce
              </p>
            </div>
          </div>
        </PhoenixLink>
        <PhoenixLink href="/assets/img/gallery/88.png" className="photography col-sm-6 col-md-4 col-xl-3 isotope-item"  data-gallery={"gallery-grid"}>
          <div className="hoverbox img-zoom-hover rounded-2">
            <PhoenixImage src="/assets/img/gallery/88.png" alt="" className="img-fluid" />
            <div className="hoverbox-content flex-center flex-column">
              <h4 className="text-white">
Tree near Lake
              </h4>
              <p className="mb-0 text-secondary-lighter text-capitalize">
photography
              </p>
            </div>
          </div>
        </PhoenixLink>
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
