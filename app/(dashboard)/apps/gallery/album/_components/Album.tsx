'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Album() {
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
Album
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
      <ul className="nav nav-underline my-4 gap-0 w-max-content" data-filter-nav>
        <li className="nav-item">
          <a href="#" className="nav-link pe-3 cursor-pointer text-start active" data-filter={"*"}>
All
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-3 cursor-pointer" data-filter={".image"}>
Image
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-3 cursor-pointer" data-filter={".video"}>
Video
          </a>
        </li>
      </ul>
      <div className="row g-4" id="gallery-album" data-sl-isotope={"{\"layoutMode\":\"packery\",\"packery\":{\"gutter\":0}}"}>
        <div className="col-sm-6 col-md-4 col-xl-3 isotope-item image">
          <div className="album-item position-relative overflow-hidden">
            <PhoenixLink href="/apps/gallery/gallery-grid" className="text-decoration-none">
              <div className="photo-stack">
                <div className="rounded-2 overflow-hidden photo-stack-top">
                  <PhoenixImage src="/assets/img/gallery/109.png" alt="" className="w-100 object-fit-cover" />
                </div>
                <div className="rounded-2 overflow-hidden photo-stack-middle">
                  <PhoenixImage src="/assets/img/gallery/77.png" alt="" className="w-100 object-fit-cover" />
                </div>
                <div className="rounded-2 overflow-hidden photo-stack-bottom">
                  <PhoenixImage src="/assets/img/gallery/78.png" alt="" className="w-100 object-fit-cover" />
                </div>
              </div>              <h4 className="mt-5 title">
Trip
              </h4>              <p className="mb-0 fs-9 text-body">
43 Items
              </p>
            </PhoenixLink>
            <div className="dropdown position-absolute top-0 end-0 mt-3 me-3 z-5">
              <button className="btn btn-sm px-3 dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                <span className="fas fa-ellipsis-h">                </span>
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
        <div className="col-sm-6 col-md-4 col-xl-3 isotope-item video">
          <div className="album-item position-relative overflow-hidden">
            <PhoenixLink href="/apps/gallery/gallery-grid" className="text-decoration-none">
              <div className="photo-stack">
                <div className="rounded-2 overflow-hidden photo-stack-top">
                  <div className="video-container">
                    <video className="video d-block h-100 w-100 overflow-hidden rounded-2" muted data-play-on-hover poster="../../assets/video/1.png">
                      <source src="/assets/video/1.mp4" type="video/mp4" />
                    </video>
                    <div className="circle-icon-item position-absolute top-50 start-50 translate-middle bg-body-emphasis rounded-pill bg-opacity-50">
                      <span className="fa-solid fa-video text-body fs-9 fs-sm-8">                      </span>
                    </div>
                  </div>
                </div>
                <div className="rounded-2 overflow-hidden photo-stack-middle">
                  <PhoenixImage src="/assets/img/gallery/81.png" alt="" className="w-100 object-fit-cover" />
                </div>
                <div className="rounded-2 overflow-hidden photo-stack-bottom">
                  <PhoenixImage src="/assets/img/gallery/80.png" alt="" className="w-100 object-fit-cover" />
                </div>
              </div>              <h4 className="mt-5 title">
Hotel
              </h4>              <p className="mb-0 fs-9 text-body">
23 Items
              </p>
            </PhoenixLink>
            <div className="dropdown position-absolute top-0 end-0 mt-3 me-3 z-5">
              <button className="btn btn-sm px-3 dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                <span className="fas fa-ellipsis-h">                </span>
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
        <div className="col-sm-6 col-md-4 col-xl-3 isotope-item image">
          <div className="album-item position-relative overflow-hidden">
            <PhoenixLink href="/apps/gallery/gallery-grid" className="text-decoration-none">
              <div className="photo-stack">
                <div className="rounded-2 overflow-hidden photo-stack-top">
                  <PhoenixImage src="/assets/img/gallery/111.png" alt="" className="w-100 object-fit-cover" />
                </div>
                <div className="rounded-2 overflow-hidden photo-stack-middle">
                  <PhoenixImage src="/assets/img/gallery/82.png" alt="" className="w-100 object-fit-cover" />
                </div>
                <div className="rounded-2 overflow-hidden photo-stack-bottom">
                  <PhoenixImage src="/assets/img/gallery/83.png" alt="" className="w-100 object-fit-cover" />
                </div>
              </div>              <h4 className="mt-5 title">
Trip Details
              </h4>              <p className="mb-0 fs-9 text-body">
32 Items
              </p>
            </PhoenixLink>
            <div className="dropdown position-absolute top-0 end-0 mt-3 me-3 z-5">
              <button className="btn btn-sm px-3 dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                <span className="fas fa-ellipsis-h">                </span>
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
        <div className="col-sm-6 col-md-4 col-xl-3 isotope-item video">
          <div className="album-item position-relative overflow-hidden">
            <PhoenixLink href="/apps/gallery/gallery-grid" className="text-decoration-none">
              <div className="photo-stack">
                <div className="rounded-2 overflow-hidden photo-stack-top">
                  <div className="video-container">
                    <video className="video d-block h-100 w-100 overflow-hidden rounded-2" muted data-play-on-hover poster="../../assets/video/2.png">
                      <source src="/assets/video/2.mp4" type="video/mp4" />
                    </video>
                    <div className="circle-icon-item position-absolute top-50 start-50 translate-middle bg-body-emphasis rounded-pill bg-opacity-50">
                      <span className="fa-solid fa-video text-body fs-9 fs-sm-8">                      </span>
                    </div>
                  </div>
                </div>
                <div className="rounded-2 overflow-hidden photo-stack-middle">
                  <PhoenixImage src="/assets/img/gallery/84.png" alt="" className="w-100 object-fit-cover" />
                </div>
                <div className="rounded-2 overflow-hidden photo-stack-bottom">
                  <PhoenixImage src="/assets/img/gallery/85.png" alt="" className="w-100 object-fit-cover" />
                </div>
              </div>              <h4 className="mt-5 title">
Landing
              </h4>              <p className="mb-0 fs-9 text-body">
12 Items
              </p>
            </PhoenixLink>
            <div className="dropdown position-absolute top-0 end-0 mt-3 me-3 z-5">
              <button className="btn btn-sm px-3 dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                <span className="fas fa-ellipsis-h">                </span>
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
        <div className="col-sm-6 col-md-4 col-xl-3 isotope-item image">
          <div className="album-item position-relative overflow-hidden">
            <PhoenixLink href="/apps/gallery/gallery-grid" className="text-decoration-none">
              <div className="photo-stack">
                <div className="rounded-2 overflow-hidden photo-stack-top">
                  <PhoenixImage src="/assets/img/gallery/112.png" alt="" className="w-100 object-fit-cover" />
                </div>
                <div className="rounded-2 overflow-hidden photo-stack-middle">
                  <PhoenixImage src="/assets/img/gallery/86.png" alt="" className="w-100 object-fit-cover" />
                </div>
                <div className="rounded-2 overflow-hidden photo-stack-bottom">
                  <PhoenixImage src="/assets/img/gallery/87.png" alt="" className="w-100 object-fit-cover" />
                </div>
              </div>              <h4 className="mt-5 title">
E commerce
              </h4>              <p className="mb-0 fs-9 text-body">
56 Items
              </p>
            </PhoenixLink>
            <div className="dropdown position-absolute top-0 end-0 mt-3 me-3 z-5">
              <button className="btn btn-sm px-3 dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                <span className="fas fa-ellipsis-h">                </span>
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
        <div className="col-sm-6 col-md-4 col-xl-3 isotope-item image">
          <div className="album-item position-relative overflow-hidden">
            <PhoenixLink href="/apps/gallery/gallery-grid" className="text-decoration-none">
              <div className="photo-stack">
                <div className="rounded-2 overflow-hidden photo-stack-top">
                  <PhoenixImage src="/assets/img/gallery/113.png" alt="" className="w-100 object-fit-cover" />
                </div>
                <div className="rounded-2 overflow-hidden photo-stack-middle">
                  <PhoenixImage src="/assets/img/gallery/88.png" alt="" className="w-100 object-fit-cover" />
                </div>
                <div className="rounded-2 overflow-hidden photo-stack-bottom">
                  <PhoenixImage src="/assets/img/gallery/89.png" alt="" className="w-100 object-fit-cover" />
                </div>
              </div>              <h4 className="mt-5 title">
Products
              </h4>              <p className="mb-0 fs-9 text-body">
45 Items
              </p>
            </PhoenixLink>
            <div className="dropdown position-absolute top-0 end-0 mt-3 me-3 z-5">
              <button className="btn btn-sm px-3 dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                <span className="fas fa-ellipsis-h">                </span>
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
        <div className="col-sm-6 col-md-4 col-xl-3 isotope-item image">
          <div className="album-item position-relative overflow-hidden">
            <PhoenixLink href="/apps/gallery/gallery-grid" className="text-decoration-none">
              <div className="photo-stack">
                <div className="rounded-2 overflow-hidden photo-stack-top">
                  <PhoenixImage src="/assets/img/gallery/114.png" alt="" className="w-100 object-fit-cover" />
                </div>
                <div className="rounded-2 overflow-hidden photo-stack-middle">
                  <PhoenixImage src="/assets/img/gallery/90.png" alt="" className="w-100 object-fit-cover" />
                </div>
                <div className="rounded-2 overflow-hidden photo-stack-bottom">
                  <PhoenixImage src="/assets/img/gallery/91.png" alt="" className="w-100 object-fit-cover" />
                </div>
              </div>              <h4 className="mt-5 title">
Project Management
              </h4>              <p className="mb-0 fs-9 text-body">
61 Items
              </p>
            </PhoenixLink>
            <div className="dropdown position-absolute top-0 end-0 mt-3 me-3 z-5">
              <button className="btn btn-sm px-3 dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                <span className="fas fa-ellipsis-h">                </span>
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
        <div className="col-sm-6 col-md-4 col-xl-3 isotope-item image">
          <div className="album-item position-relative overflow-hidden">
            <PhoenixLink href="/apps/gallery/gallery-grid" className="text-decoration-none">
              <div className="photo-stack">
                <div className="rounded-2 overflow-hidden photo-stack-top">
                  <PhoenixImage src="/assets/img/gallery/115.png" alt="" className="w-100 object-fit-cover" />
                </div>
                <div className="rounded-2 overflow-hidden photo-stack-middle">
                  <PhoenixImage src="/assets/img/gallery/92.png" alt="" className="w-100 object-fit-cover" />
                </div>
                <div className="rounded-2 overflow-hidden photo-stack-bottom">
                  <PhoenixImage src="/assets/img/gallery/93.png" alt="" className="w-100 object-fit-cover" />
                </div>
              </div>              <h4 className="mt-5 title">
Kanban
              </h4>              <p className="mb-0 fs-9 text-body">
45 Items
              </p>
            </PhoenixLink>
            <div className="dropdown position-absolute top-0 end-0 mt-3 me-3 z-5">
              <button className="btn btn-sm px-3 dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                <span className="fas fa-ellipsis-h">                </span>
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
        <div className="col-sm-6 col-md-4 col-xl-3 isotope-item image">
          <div className="album-item position-relative overflow-hidden">
            <PhoenixLink href="/apps/gallery/gallery-grid" className="text-decoration-none">
              <div className="photo-stack">
                <div className="rounded-2 overflow-hidden photo-stack-top">
                  <PhoenixImage src="/assets/img/gallery/116.png" alt="" className="w-100 object-fit-cover" />
                </div>
                <div className="rounded-2 overflow-hidden photo-stack-middle">
                  <PhoenixImage src="/assets/img/gallery/94.png" alt="" className="w-100 object-fit-cover" />
                </div>
                <div className="rounded-2 overflow-hidden photo-stack-bottom">
                  <PhoenixImage src="/assets/img/gallery/95.png" alt="" className="w-100 object-fit-cover" />
                </div>
              </div>              <h4 className="mt-5 title">
Social
              </h4>              <p className="mb-0 fs-9 text-body">
23 Items
              </p>
            </PhoenixLink>
            <div className="dropdown position-absolute top-0 end-0 mt-3 me-3 z-5">
              <button className="btn btn-sm px-3 dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                <span className="fas fa-ellipsis-h">                </span>
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
        <div className="col-sm-6 col-md-4 col-xl-3 isotope-item video">
          <div className="album-item position-relative overflow-hidden">
            <PhoenixLink href="/apps/gallery/gallery-grid" className="text-decoration-none">
              <div className="photo-stack">
                <div className="rounded-2 overflow-hidden photo-stack-top">
                  <div className="video-container">
                    <video className="video d-block h-100 w-100 overflow-hidden rounded-2" muted data-play-on-hover poster="../../assets/video/3.png">
                      <source src="/assets/video/3.mp4" type="video/mp4" />
                    </video>
                    <div className="circle-icon-item position-absolute top-50 start-50 translate-middle bg-body-emphasis rounded-pill bg-opacity-50">
                      <span className="fa-solid fa-video text-body fs-9 fs-sm-8">                      </span>
                    </div>
                  </div>
                </div>
                <div className="rounded-2 overflow-hidden photo-stack-middle">
                  <PhoenixImage src="/assets/img/gallery/96.png" alt="" className="w-100 object-fit-cover" />
                </div>
                <div className="rounded-2 overflow-hidden photo-stack-bottom">
                  <PhoenixImage src="/assets/img/gallery/97.png" alt="" className="w-100 object-fit-cover" />
                </div>
              </div>              <h4 className="mt-5 title">
Travel vlogs
              </h4>              <p className="mb-0 fs-9 text-body">
34 Items
              </p>
            </PhoenixLink>
            <div className="dropdown position-absolute top-0 end-0 mt-3 me-3 z-5">
              <button className="btn btn-sm px-3 dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                <span className="fas fa-ellipsis-h">                </span>
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
        <div className="col-sm-6 col-md-4 col-xl-3 isotope-item video">
          <div className="album-item position-relative overflow-hidden">
            <PhoenixLink href="/apps/gallery/gallery-grid" className="text-decoration-none">
              <div className="photo-stack">
                <div className="rounded-2 overflow-hidden photo-stack-top">
                  <div className="video-container">
                    <video className="video d-block h-100 w-100 overflow-hidden rounded-2" muted data-play-on-hover poster="../../assets/video/4.png">
                      <source src="/assets/video/4.mp4" type="video/mp4" />
                    </video>
                    <div className="circle-icon-item position-absolute top-50 start-50 translate-middle bg-body-emphasis rounded-pill bg-opacity-50">
                      <span className="fa-solid fa-video text-body fs-9 fs-sm-8">                      </span>
                    </div>
                  </div>
                </div>
                <div className="rounded-2 overflow-hidden photo-stack-middle">
                  <PhoenixImage src="/assets/img/gallery/98.png" alt="" className="w-100 object-fit-cover" />
                </div>
                <div className="rounded-2 overflow-hidden photo-stack-bottom">
                  <PhoenixImage src="/assets/img/gallery/99.png" alt="" className="w-100 object-fit-cover" />
                </div>
              </div>              <h4 className="mt-5 title">
Travel Agency
              </h4>              <p className="mb-0 fs-9 text-body">
89 Items
              </p>
            </PhoenixLink>
            <div className="dropdown position-absolute top-0 end-0 mt-3 me-3 z-5">
              <button className="btn btn-sm px-3 dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                <span className="fas fa-ellipsis-h">                </span>
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
        <div className="col-sm-6 col-md-4 col-xl-3 isotope-item image">
          <div className="album-item position-relative overflow-hidden">
            <PhoenixLink href="/apps/gallery/gallery-grid" className="text-decoration-none">
              <div className="photo-stack">
                <div className="rounded-2 overflow-hidden photo-stack-top">
                  <PhoenixImage src="/assets/img/gallery/117.png" alt="" className="w-100 object-fit-cover" />
                </div>
                <div className="rounded-2 overflow-hidden photo-stack-middle">
                  <PhoenixImage src="/assets/img/gallery/100.png" alt="" className="w-100 object-fit-cover" />
                </div>
                <div className="rounded-2 overflow-hidden photo-stack-bottom">
                  <PhoenixImage src="/assets/img/gallery/101.png" alt="" className="w-100 object-fit-cover" />
                </div>
              </div>              <h4 className="mt-5 title">
Events
              </h4>              <p className="mb-0 fs-9 text-body">
54 Items
              </p>
            </PhoenixLink>
            <div className="dropdown position-absolute top-0 end-0 mt-3 me-3 z-5">
              <button className="btn btn-sm px-3 dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                <span className="fas fa-ellipsis-h">                </span>
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
