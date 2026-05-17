'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function ProjectBoardView() {
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

    <div className="row gx-6 gy-3 mb-4 align-items-center">
      <div className="col-auto">
        <h2 className="mb-0">
Projects
          <span className="fw-normal text-body-tertiary ms-3">
(32)
          </span>
        </h2>
      </div>
      <div className="col-auto">
        <PhoenixLink href="/apps/project-management/create-new" className="btn btn-primary px-5">
          <span className="fa-solid fa-plus me-2">          </span>Add new project
        </PhoenixLink>
      </div>
    </div>

    <div className="row justify-content-between align-items-end mb-4 g-3">
      <div className="col-12 col-sm-auto">
        <ul className="nav nav-links mx-n2">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 py-1 active" aria-current="page">
              <span>
All
              </span>              <span className="text-body-tertiary fw-semibold">
(32)
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 py-1">
              <span>
Ongoing
              </span>              <span className="text-body-tertiary fw-semibold">
(14)
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 py-1">
              <span>
Cancelled
              </span>              <span className="text-body-tertiary fw-semibold">
(2)
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 py-1">
              <span>
Finished
              </span>              <span className="text-body-tertiary fw-semibold">
(14)
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 py-1">
              <span>
Postponed
              </span>              <span className="text-body-tertiary fw-semibold">
(2)
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="col-12 col-sm-auto">
        <div className="d-flex align-items-center">
          <div className="search-box me-3">
            <form className="position-relative">
              <input className="form-control search-input search" type="search" placeholder="Search projects" aria-label="Search" />
              <span className="fas fa-search search-box-icon">              </span>
            </form>
          </div>
          <PhoenixLink href="/apps/project-management/project-list-view" className="btn btn-phoenix-primary px-3 me-1"  data-bs-toggle={"tooltip"} data-bs-placement={"top"} data-bs-title={"List view"}>
            <span className="fa-solid fa-list fs-10">            </span>
          </PhoenixLink>
          <PhoenixLink href="/apps/project-management/project-board-view" className="btn btn-phoenix-primary px-3 me-1 border-0 text-body"  data-bs-toggle={"tooltip"} data-bs-placement={"top"} data-bs-title={"Board view"}>
            <svg width={9} height={9} viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.5C0 0.223857 0.223858 0 0.5 0H1.83333C2.10948 0 2.33333 0.223858 2.33333 0.5V1.83333C2.33333 2.10948 2.10948 2.33333 1.83333 2.33333H0.5C0.223857 2.33333 0 2.10948 0 1.83333V0.5Z" fill="currentColor">              </path>
              <path d="M3.33333 0.5C3.33333 0.223857 3.55719 0 3.83333 0H5.16667C5.44281 0 5.66667 0.223858 5.66667 0.5V1.83333C5.66667 2.10948 5.44281 2.33333 5.16667 2.33333H3.83333C3.55719 2.33333 3.33333 2.10948 3.33333 1.83333V0.5Z" fill="currentColor">              </path>
              <path d="M6.66667 0.5C6.66667 0.223857 6.89052 0 7.16667 0H8.5C8.77614 0 9 0.223858 9 0.5V1.83333C9 2.10948 8.77614 2.33333 8.5 2.33333H7.16667C6.89052 2.33333 6.66667 2.10948 6.66667 1.83333V0.5Z" fill="currentColor">              </path>
              <path d="M0 3.83333C0 3.55719 0.223858 3.33333 0.5 3.33333H1.83333C2.10948 3.33333 2.33333 3.55719 2.33333 3.83333V5.16667C2.33333 5.44281 2.10948 5.66667 1.83333 5.66667H0.5C0.223857 5.66667 0 5.44281 0 5.16667V3.83333Z" fill="currentColor">              </path>
              <path d="M3.33333 3.83333C3.33333 3.55719 3.55719 3.33333 3.83333 3.33333H5.16667C5.44281 3.33333 5.66667 3.55719 5.66667 3.83333V5.16667C5.66667 5.44281 5.44281 5.66667 5.16667 5.66667H3.83333C3.55719 5.66667 3.33333 5.44281 3.33333 5.16667V3.83333Z" fill="currentColor">              </path>
              <path d="M6.66667 3.83333C6.66667 3.55719 6.89052 3.33333 7.16667 3.33333H8.5C8.77614 3.33333 9 3.55719 9 3.83333V5.16667C9 5.44281 8.77614 5.66667 8.5 5.66667H7.16667C6.89052 5.66667 6.66667 5.44281 6.66667 5.16667V3.83333Z" fill="currentColor">              </path>
              <path d="M0 7.16667C0 6.89052 0.223858 6.66667 0.5 6.66667H1.83333C2.10948 6.66667 2.33333 6.89052 2.33333 7.16667V8.5C2.33333 8.77614 2.10948 9 1.83333 9H0.5C0.223857 9 0 8.77614 0 8.5V7.16667Z" fill="currentColor">              </path>
              <path d="M3.33333 7.16667C3.33333 6.89052 3.55719 6.66667 3.83333 6.66667H5.16667C5.44281 6.66667 5.66667 6.89052 5.66667 7.16667V8.5C5.66667 8.77614 5.44281 9 5.16667 9H3.83333C3.55719 9 3.33333 8.77614 3.33333 8.5V7.16667Z" fill="currentColor">              </path>
              <path d="M6.66667 7.16667C6.66667 6.89052 6.89052 6.66667 7.16667 6.66667H8.5C8.77614 6.66667 9 6.89052 9 7.16667V8.5C9 8.77614 8.77614 9 8.5 9H7.16667C6.89052 9 6.66667 8.77614 6.66667 8.5V7.16667Z" fill="currentColor">              </path>
            </svg>
          </PhoenixLink>
          <PhoenixLink href="/apps/project-management/project-card-view" className="btn btn-phoenix-primary px-3"  data-bs-toggle={"tooltip"} data-bs-placement={"top"} data-bs-title={"Card view"}>
            <svg width={9} height={9} viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.5C0 0.223858 0.223858 0 0.5 0H3.5C3.77614 0 4 0.223858 4 0.5V3.5C4 3.77614 3.77614 4 3.5 4H0.5C0.223858 4 0 3.77614 0 3.5V0.5Z" fill="currentColor">              </path>
              <path d="M0 5.5C0 5.22386 0.223858 5 0.5 5H3.5C3.77614 5 4 5.22386 4 5.5V8.5C4 8.77614 3.77614 9 3.5 9H0.5C0.223858 9 0 8.77614 0 8.5V5.5Z" fill="currentColor">              </path>
              <path d="M5 0.5C5 0.223858 5.22386 0 5.5 0H8.5C8.77614 0 9 0.223858 9 0.5V3.5C9 3.77614 8.77614 4 8.5 4H5.5C5.22386 4 5 3.77614 5 3.5V0.5Z" fill="currentColor">              </path>
              <path d="M5 5.5C5 5.22386 5.22386 5 5.5 5H8.5C8.77614 5 9 5.22386 9 5.5V8.5C9 8.77614 8.77614 9 8.5 9H5.5C5.22386 9 5 8.77614 5 8.5V5.5Z" fill="currentColor">              </path>
            </svg>
          </PhoenixLink>
        </div>
      </div>
    </div>

    <div className="row g-3 mb-9">
      <div className="col-12 col-sm-6 col-md-4 col-xxl-3">
        <div className="btn-reveal-trigger position-relative rounded-2 overflow-hidden p-4" style={{"height":"236px"} as CSSProperties}>
          <div className="bg-holder" style={{"backgroundImage":"linear-gradient(180deg, rgba(0, 0, 0, 0) 39.41%, rgba(0, 0, 0, 0.4) 100%), url(../../assets/img/generic/51.png)"} as CSSProperties}>          </div>
          <div className="position-relative h-100 d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-between align-items-center">
              <span className="badge badge-phoenix fs-10 badge-phoenix-primary" data-bs-theme={"light"}>
Ongoing
              </span>
              <div className="z-2">
                <button className="btn btn-icon btn-reveal dropdown-toggle dropdown-caret-none transition-none" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                  <span className="fas fa-ellipsis-v">                  </span>
                </button>
                <div className="dropdown-menu dropdown-menu-end py-2">
                  <a href="#!" className="dropdown-item">
View
                  </a>
                  <a href="#!" className="dropdown-item">
Export
                  </a>
                  <div className="dropdown-divider">                  </div>
                  <a href="#!" className="dropdown-item text-danger">
Remove
                  </a>
                </div>
              </div>
            </div>
            <h3 className="text-white fw-bold line-clamp-2">
Project Doughnut Dungeon
            </h3>
          </div>
          <a href="#projectsBoardViewModal" className="stretched-link"  data-bs-toggle={"modal"}>

          </a>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-xxl-3">
        <div className="btn-reveal-trigger position-relative rounded-2 overflow-hidden p-4" style={{"height":"236px"} as CSSProperties}>
          <div className="bg-holder" style={{"backgroundImage":"linear-gradient(180deg, rgba(0, 0, 0, 0) 39.41%, rgba(0, 0, 0, 0.4) 100%), url(../../assets/img/generic/52.png)"} as CSSProperties}>          </div>
          <div className="position-relative h-100 d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-between align-items-center">
              <span className="badge badge-phoenix fs-10 badge-phoenix-warning" data-bs-theme={"light"}>
Completed
              </span>
              <div className="z-2">
                <button className="btn btn-icon btn-reveal dropdown-toggle dropdown-caret-none transition-none" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                  <span className="fas fa-ellipsis-v">                  </span>
                </button>
                <div className="dropdown-menu dropdown-menu-end py-2">
                  <a href="#!" className="dropdown-item">
View
                  </a>
                  <a href="#!" className="dropdown-item">
Export
                  </a>
                  <div className="dropdown-divider">                  </div>
                  <a href="#!" className="dropdown-item text-danger">
Remove
                  </a>
                </div>
              </div>
            </div>
            <h3 className="text-white fw-bold line-clamp-2">
Project Doughnut Dungeon
            </h3>
          </div>
          <a href="#projectsBoardViewModal" className="stretched-link"  data-bs-toggle={"modal"}>

          </a>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-xxl-3">
        <div className="btn-reveal-trigger position-relative rounded-2 overflow-hidden p-4" style={{"height":"236px"} as CSSProperties}>
          <div className="bg-holder" style={{"backgroundImage":"linear-gradient(180deg, rgba(0, 0, 0, 0) 39.41%, rgba(0, 0, 0, 0.4) 100%), url(../../assets/img/generic/53.png)"} as CSSProperties}>          </div>
          <div className="position-relative h-100 d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-between align-items-center">
              <span className="badge badge-phoenix fs-10 badge-phoenix-warning" data-bs-theme={"light"}>
Completed
              </span>
              <div className="z-2">
                <button className="btn btn-icon btn-reveal dropdown-toggle dropdown-caret-none transition-none" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                  <span className="fas fa-ellipsis-v">                  </span>
                </button>
                <div className="dropdown-menu dropdown-menu-end py-2">
                  <a href="#!" className="dropdown-item">
View
                  </a>
                  <a href="#!" className="dropdown-item">
Export
                  </a>
                  <div className="dropdown-divider">                  </div>
                  <a href="#!" className="dropdown-item text-danger">
Remove
                  </a>
                </div>
              </div>
            </div>
            <h3 className="text-white fw-bold line-clamp-2">
Harnessing stupidity from Jerry the Mortypop
            </h3>
          </div>
          <a href="#projectsBoardViewModal" className="stretched-link"  data-bs-toggle={"modal"}>

          </a>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-xxl-3">
        <div className="btn-reveal-trigger position-relative rounded-2 overflow-hidden p-4" style={{"height":"236px"} as CSSProperties}>
          <div className="bg-holder" style={{"backgroundImage":"linear-gradient(180deg, rgba(0, 0, 0, 0) 39.41%, rgba(0, 0, 0, 0.4) 100%), url(../../assets/img/generic/54.png)"} as CSSProperties}>          </div>
          <div className="position-relative h-100 d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-between align-items-center">
              <span className="badge badge-phoenix fs-10 badge-phoenix-info" data-bs-theme={"light"}>
Inactive
              </span>
              <div className="z-2">
                <button className="btn btn-icon btn-reveal dropdown-toggle dropdown-caret-none transition-none" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                  <span className="fas fa-ellipsis-v">                  </span>
                </button>
                <div className="dropdown-menu dropdown-menu-end py-2">
                  <a href="#!" className="dropdown-item">
View
                  </a>
                  <a href="#!" className="dropdown-item">
Export
                  </a>
                  <div className="dropdown-divider">                  </div>
                  <a href="#!" className="dropdown-item text-danger">
Remove
                  </a>
                </div>
              </div>
            </div>
            <h3 className="text-white fw-bold line-clamp-2">
Making the Butterflies shoot each other dead
            </h3>
          </div>
          <a href="#projectsBoardViewModal" className="stretched-link"  data-bs-toggle={"modal"}>

          </a>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-xxl-3">
        <div className="btn-reveal-trigger position-relative rounded-2 overflow-hidden p-4" style={{"height":"236px"} as CSSProperties}>
          <div className="bg-holder" style={{"backgroundImage":"linear-gradient(180deg, rgba(0, 0, 0, 0) 39.41%, rgba(0, 0, 0, 0.4) 100%), url(../../assets/img/generic/55.png)"} as CSSProperties}>          </div>
          <div className="position-relative h-100 d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-between align-items-center">
              <span className="badge badge-phoenix fs-10 badge-phoenix-warning" data-bs-theme={"light"}>
Completed
              </span>
              <div className="z-2">
                <button className="btn btn-icon btn-reveal dropdown-toggle dropdown-caret-none transition-none" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                  <span className="fas fa-ellipsis-v">                  </span>
                </button>
                <div className="dropdown-menu dropdown-menu-end py-2">
                  <a href="#!" className="dropdown-item">
View
                  </a>
                  <a href="#!" className="dropdown-item">
Export
                  </a>
                  <div className="dropdown-divider">                  </div>
                  <a href="#!" className="dropdown-item text-danger">
Remove
                  </a>
                </div>
              </div>
            </div>
            <h3 className="text-white fw-bold line-clamp-2">
The chewing gum attack
            </h3>
          </div>
          <a href="#projectsBoardViewModal" className="stretched-link"  data-bs-toggle={"modal"}>

          </a>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-xxl-3">
        <div className="btn-reveal-trigger position-relative rounded-2 overflow-hidden p-4" style={{"height":"236px"} as CSSProperties}>
          <div className="bg-holder" style={{"backgroundImage":"linear-gradient(180deg, rgba(0, 0, 0, 0) 39.41%, rgba(0, 0, 0, 0.4) 100%), url(../../assets/img/generic/56.png)"} as CSSProperties}>          </div>
          <div className="position-relative h-100 d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-between align-items-center">
              <span className="badge badge-phoenix fs-10 badge-phoenix-primary" data-bs-theme={"light"}>
Ongoing
              </span>
              <div className="z-2">
                <button className="btn btn-icon btn-reveal dropdown-toggle dropdown-caret-none transition-none" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                  <span className="fas fa-ellipsis-v">                  </span>
                </button>
                <div className="dropdown-menu dropdown-menu-end py-2">
                  <a href="#!" className="dropdown-item">
View
                  </a>
                  <a href="#!" className="dropdown-item">
Export
                  </a>
                  <div className="dropdown-divider">                  </div>
                  <a href="#!" className="dropdown-item text-danger">
Remove
                  </a>
                </div>
              </div>
            </div>
            <h3 className="text-white fw-bold line-clamp-2">
Water resistant mosquito killer gun, version 2.1.0
            </h3>
          </div>
          <a href="#projectsBoardViewModal" className="stretched-link"  data-bs-toggle={"modal"}>

          </a>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4 col-xxl-3">
        <div className="btn-reveal-trigger position-relative rounded-2 overflow-hidden p-4" style={{"height":"236px"} as CSSProperties}>
          <div className="bg-holder" style={{"backgroundImage":"linear-gradient(180deg, rgba(0, 0, 0, 0) 39.41%, rgba(0, 0, 0, 0.4) 100%), url(../../assets/img/generic/57.png)"} as CSSProperties}>          </div>
          <div className="position-relative h-100 d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-between align-items-center">
              <span className="badge badge-phoenix fs-10 badge-phoenix-warning" data-bs-theme={"light"}>
Completed
              </span>
              <div className="z-2">
                <button className="btn btn-icon btn-reveal dropdown-toggle dropdown-caret-none transition-none" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                  <span className="fas fa-ellipsis-v">                  </span>
                </button>
                <div className="dropdown-menu dropdown-menu-end py-2">
                  <a href="#!" className="dropdown-item">
View
                  </a>
                  <a href="#!" className="dropdown-item">
Export
                  </a>
                  <div className="dropdown-divider">                  </div>
                  <a href="#!" className="dropdown-item text-danger">
Remove
                  </a>
                </div>
              </div>
            </div>
            <h3 className="text-white fw-bold line-clamp-2">
Water resistant mosquito killer gun, version 2.1.0
            </h3>
          </div>
          <a href="#projectsBoardViewModal" className="stretched-link"  data-bs-toggle={"modal"}>

          </a>
        </div>
      </div>
    </div>

    <div className="modal fade" id="projectsBoardViewModal" tabIndex={-1} aria-labelledby="projectsBoardViewModal" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content overflow-hidden">
          <div className="modal-header position-relative p-0">
            <input className="d-none" id="projectModalTwoCoverInput" type="file" />
            <label className="position-absolute top-0 start-0" htmlFor="projectModalTwoCoverInput">
              <span className="project-modal-btn d-inline-block bg-body-emphasis dark__text-gray-100 rounded-2 py-2 px-3 fs-9 fw-bolder mt-3 ms-3 cursor-pointer">
                <span className="fa-solid fa-image me-1">                </span>
Change
              </span>
            </label>
            <button className="btn btn-circle project-modal-btn position-absolute end-0 top-0 mt-3 me-3 bg-body-emphasis" data-bs-dismiss={"modal"}>
              <span className="fa-solid fa-xmark text-body dark__text-gray-100">              </span>
            </button>
            <PhoenixImage src="/assets/img/generic/43.png" alt="" className="w-100" />
          </div>
          <div className="modal-body p-0">
            <div className="row gx-0 gy-3 border-bottom px-5 px-lg-6 py-4 p-xl-0">
              <div className="col-12 col-xl-5 border-end-xl">
                <div className="row h-100 align-items-center px-xl-6 justify-content-between justify-content-xl-start">
                  <div className="col-auto">
                    <p className="text-body-tertiary fs-10 fw-semibold mb-0">
Created
                    </p>
                    <p className="text-body-highlight fs-9 mb-0">
Jan 3, 3:24 pm
                    </p>
                  </div>
                  <div className="col-7 col-lg-6">
                    <div className="flatpickr-input-container flatpickr-input-sm">
                      <input className="form-control form-control-sm ps-6 datetimepicker" id="datepicker" type="text" data-options={"{\"dateFormat\":\"M j, Y\",\"disableMobile\":true,\"defaultDate\":\"Mar 1, 2022\"}"} />
                      <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary">                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-7">
                <div className="px-xl-6 py-xl-4">
                  <div className="row g-2 align-items-center">
                    <div className="col-auto col-12 col-lg-auto d-flex flex-1">
                      <div className="dropdown">
                        <button className="d-none d-sm-block btn btn-subtle-secondary dropdown-toggle dropdown-caret-none d-flex align-items-center me-2" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
 Add to card 
                          <span className="fa-solid fa-plus ms-2">                          </span>
                        </button>
                        <button className="d-sm-none btn btn-icon btn-icon-lg btn-subtle-secondary dropdown-toggle dropdown-caret-none d-flex align-items-center me-2" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                          <span className="fa-solid fa-plus">                          </span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end px-2">
                          <button className="btn btn-sm btn-subtle-secondary rounded-2 d-flex align-items-center w-100 mb-2">
                            <span className="me-2 fa-solid fa-user-plus">                            </span>
Assignee
                          </button>
                          <button className="btn btn-sm btn-subtle-secondary rounded-2 d-flex align-items-center w-100 mb-2">
                            <span className="me-2 fa-solid fa-tag">                            </span>
Labels
                          </button>
                          <button className="btn btn-sm btn-subtle-secondary rounded-2 d-flex align-items-center w-100 mb-2">
                            <span className="me-2 fa-solid fa-paperclip">                            </span>
Attachments
                          </button>
                          <button className="btn btn-sm btn-subtle-secondary rounded-2 d-flex align-items-center w-100 mb-2">
                            <span className="me-2 fa-solid fa-square-check">                            </span>
Checklist
                          </button>
                          <button className="btn btn-sm btn-subtle-secondary rounded-2 d-flex align-items-center w-100">
                            <span className="me-2 fa-solid fa-calendar-days">                            </span>
Dates
                          </button>
                        </div>
                      </div>
                      <div className="dropdown">
                        <button className="btn btn-icon btn-icon-lg bg-body-highlight text-body-emphasis bg-body-secondary-hover rounded-2 me-2" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                          <span className="fa-solid fa-ellipsis-vertical">                          </span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end px-2">
                          <button className="btn btn-sm btn-subtle-secondary rounded-2 d-flex align-items-center w-100 mb-2">
                            <span className="me-2 fa-solid fa-arrow-right">                            </span>
Move
                          </button>
                          <button className="btn btn-sm btn-subtle-secondary rounded-2 d-flex align-items-center w-100 mb-2">
                            <span className="me-2 fa-solid fa-copy">                            </span>
Copy
                          </button>
                          <button className="btn btn-sm btn-subtle-secondary rounded-2 d-flex align-items-center w-100 mb-2">
                            <span className="me-2 fa-solid fa-trash">                            </span>
Remove
                          </button>
                          <button className="btn btn-sm btn-subtle-secondary rounded-2 d-flex align-items-center w-100 mb-2">
                            <span className="me-2 fa-solid fa-box-archive">                            </span>
Archive
                          </button>
                          <button className="btn btn-sm btn-subtle-secondary rounded-2 d-flex align-items-center w-100">
                            <span className="me-2 fa-solid fa-share-nodes">                            </span>
Share
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto col-lg-auto d-flex">
                      <div className="dropdown">
                        <button className="btn btn-subtle-info dropdown-toggle dropdown-caret-none d-flex align-items-center me-2" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
 Review 
                          <span className="fa-solid fa-angle-down ms-2">                          </span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end py-2">
                          <a href="#!" className="dropdown-item">
View
                          </a>
                          <a href="#!" className="dropdown-item">
Export
                          </a>
                          <div className="dropdown-divider">                          </div>
                          <a href="#!" className="dropdown-item text-danger">
Remove
                          </a>
                        </div>
                      </div>
                      <div className="btn btn-subtle-secondary btn-icon btn-icon-lg">
                        <span className="fa-solid fa-check">                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-0">
              <div className="col-12 col-xl-5 border-end">
                <div className="px-5 px-lg-6 py-4">
                  <h3 className="fw-bolder lh-sm mb-5">
It was popularised in the 1960s with the release of Letraset
                  </h3>
                  <div className="d-flex align-items-center mb-5">
                    <p className="text-body-highlight fw-700 mb-0 me-2">
64%
                    </p>
                    <div className="progress flex-1">
                      <div className="progress-bar rounded-3" role="progressbar" style={{"width":"64%"} as CSSProperties}>                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h6 className="text-body-secondary mb-2">
Assignees
                    </h6>
                    <div className="d-flex">
                      <div className="dropdown">
                        <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                          <div className="avatar avatar-m  me-1">
                            <PhoenixImage src="/assets/img/team/60.webp" alt="" className="rounded-circle " />
                          </div>
                        </a>
                        <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                          <div className="position-relative">
                            <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                            </div>
                            <div className="p-3">
                              <div className="text-end">
                                <button className="btn p-0 me-2">
                                  <span className="fa-solid fa-user-plus text-white">                                  </span>
                                </button>
                                <button className="btn p-0">
                                  <span className="fa-solid fa-ellipsis text-white">                                  </span>
                                </button>
                              </div>
                              <div className="text-center">
                                <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                  <PhoenixImage src="/assets/img/team/60.webp" alt="" className="rounded-circle border border-light-subtle" />
                                </div>
                                <h6 className="text-white">
Emma Watson
                                </h6>
                                <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                </p>
                                <div className="d-flex flex-center mb-3">
                                  <h6 className="text-white mb-0">
224 
                                    <span className="fw-normal text-light text-opacity-75">
connections
                                    </span>
                                  </h6>
                                  <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                  </span>
                                  <h6 className="text-white mb-0">
23 
                                    <span className="fw-normal text-light text-opacity-75">
mutual
                                    </span>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-body-emphasis">
                            <div className="p-3 border-bottom border-translucent">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                  <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                    <span className="fa-solid fa-phone">                                    </span>
                                  </button>
                                  <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                    <span className="fa-solid fa-message">                                    </span>
                                  </button>
                                  <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                    <span className="fa-solid fa-video">                                    </span>
                                  </button>
                                </div>
                                <button className="btn btn-phoenix-primary">
                                  <span className="fa-solid fa-envelope me-2">                                  </span>
Send Email
                                </button>
                              </div>
                            </div>
                            <ul className="nav d-flex flex-column py-3 border-bottom">
                              <li className="nav-item">
                                <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                  <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                  </span>                                  <span className="text-body-highlight flex-1">
Assigned Projects
                                  </span>                                  <span className="fa-solid fa-chevron-right fs-11">                                  </span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                  <span className="me-2 text-body" data-feather={"pie-chart"}>                                  </span>                                  <span className="text-body-highlight flex-1">
View activiy
                                  </span>                                  <span className="fa-solid fa-chevron-right fs-11">                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="p-3 d-flex justify-content-between">
                            <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                            </a>
                            <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                          <div className="avatar avatar-m  me-1">
                            <PhoenixImage src="/assets/img/team/58.webp" alt="" className="rounded-circle " />
                          </div>
                        </a>
                        <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                          <div className="position-relative">
                            <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                            </div>
                            <div className="p-3">
                              <div className="text-end">
                                <button className="btn p-0 me-2">
                                  <span className="fa-solid fa-user-plus text-white">                                  </span>
                                </button>
                                <button className="btn p-0">
                                  <span className="fa-solid fa-ellipsis text-white">                                  </span>
                                </button>
                              </div>
                              <div className="text-center">
                                <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                  <PhoenixImage src="/assets/img/team/58.webp" alt="" className="rounded-circle border border-light-subtle" />
                                </div>
                                <h6 className="text-white">
Igor Borvibson
                                </h6>
                                <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                </p>
                                <div className="d-flex flex-center mb-3">
                                  <h6 className="text-white mb-0">
224 
                                    <span className="fw-normal text-light text-opacity-75">
connections
                                    </span>
                                  </h6>
                                  <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                  </span>
                                  <h6 className="text-white mb-0">
23 
                                    <span className="fw-normal text-light text-opacity-75">
mutual
                                    </span>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-body-emphasis">
                            <div className="p-3 border-bottom border-translucent">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                  <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                    <span className="fa-solid fa-phone">                                    </span>
                                  </button>
                                  <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                    <span className="fa-solid fa-message">                                    </span>
                                  </button>
                                  <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                    <span className="fa-solid fa-video">                                    </span>
                                  </button>
                                </div>
                                <button className="btn btn-phoenix-primary">
                                  <span className="fa-solid fa-envelope me-2">                                  </span>
Send Email
                                </button>
                              </div>
                            </div>
                            <ul className="nav d-flex flex-column py-3 border-bottom">
                              <li className="nav-item">
                                <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                  <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                  </span>                                  <span className="text-body-highlight flex-1">
Assigned Projects
                                  </span>                                  <span className="fa-solid fa-chevron-right fs-11">                                  </span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                  <span className="me-2 text-body" data-feather={"pie-chart"}>                                  </span>                                  <span className="text-body-highlight flex-1">
View activiy
                                  </span>                                  <span className="fa-solid fa-chevron-right fs-11">                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="p-3 d-flex justify-content-between">
                            <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                            </a>
                            <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                          <div className="avatar avatar-m  me-1">
                            <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle " />
                          </div>
                        </a>
                        <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                          <div className="position-relative">
                            <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                            </div>
                            <div className="p-3">
                              <div className="text-end">
                                <button className="btn p-0 me-2">
                                  <span className="fa-solid fa-user-plus text-white">                                  </span>
                                </button>
                                <button className="btn p-0">
                                  <span className="fa-solid fa-ellipsis text-white">                                  </span>
                                </button>
                              </div>
                              <div className="text-center">
                                <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                  <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle border border-light-subtle" />
                                </div>
                                <h6 className="text-white">
Katerina Karenin
                                </h6>
                                <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                </p>
                                <div className="d-flex flex-center mb-3">
                                  <h6 className="text-white mb-0">
224 
                                    <span className="fw-normal text-light text-opacity-75">
connections
                                    </span>
                                  </h6>
                                  <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                  </span>
                                  <h6 className="text-white mb-0">
23 
                                    <span className="fw-normal text-light text-opacity-75">
mutual
                                    </span>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-body-emphasis">
                            <div className="p-3 border-bottom border-translucent">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                  <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                    <span className="fa-solid fa-phone">                                    </span>
                                  </button>
                                  <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                    <span className="fa-solid fa-message">                                    </span>
                                  </button>
                                  <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                    <span className="fa-solid fa-video">                                    </span>
                                  </button>
                                </div>
                                <button className="btn btn-phoenix-primary">
                                  <span className="fa-solid fa-envelope me-2">                                  </span>
Send Email
                                </button>
                              </div>
                            </div>
                            <ul className="nav d-flex flex-column py-3 border-bottom">
                              <li className="nav-item">
                                <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                  <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                  </span>                                  <span className="text-body-highlight flex-1">
Assigned Projects
                                  </span>                                  <span className="fa-solid fa-chevron-right fs-11">                                  </span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                  <span className="me-2 text-body" data-feather={"pie-chart"}>                                  </span>                                  <span className="text-body-highlight flex-1">
View activiy
                                  </span>                                  <span className="fa-solid fa-chevron-right fs-11">                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="p-3 d-flex justify-content-between">
                            <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                            </a>
                            <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                          <div className="avatar avatar-m  me-1">
                            <PhoenixImage src="/assets/img/team/34.webp" alt="" className="rounded-circle " />
                          </div>
                        </a>
                        <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                          <div className="position-relative">
                            <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                            </div>
                            <div className="p-3">
                              <div className="text-end">
                                <button className="btn p-0 me-2">
                                  <span className="fa-solid fa-user-plus text-white">                                  </span>
                                </button>
                                <button className="btn p-0">
                                  <span className="fa-solid fa-ellipsis text-white">                                  </span>
                                </button>
                              </div>
                              <div className="text-center">
                                <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                  <PhoenixImage src="/assets/img/team/34.webp" alt="" className="rounded-circle border border-light-subtle" />
                                </div>
                                <h6 className="text-white">
Jean Renoir
                                </h6>
                                <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                </p>
                                <div className="d-flex flex-center mb-3">
                                  <h6 className="text-white mb-0">
224 
                                    <span className="fw-normal text-light text-opacity-75">
connections
                                    </span>
                                  </h6>
                                  <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                  </span>
                                  <h6 className="text-white mb-0">
23 
                                    <span className="fw-normal text-light text-opacity-75">
mutual
                                    </span>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-body-emphasis">
                            <div className="p-3 border-bottom border-translucent">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                  <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                    <span className="fa-solid fa-phone">                                    </span>
                                  </button>
                                  <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                    <span className="fa-solid fa-message">                                    </span>
                                  </button>
                                  <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                    <span className="fa-solid fa-video">                                    </span>
                                  </button>
                                </div>
                                <button className="btn btn-phoenix-primary">
                                  <span className="fa-solid fa-envelope me-2">                                  </span>
Send Email
                                </button>
                              </div>
                            </div>
                            <ul className="nav d-flex flex-column py-3 border-bottom">
                              <li className="nav-item">
                                <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                  <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                  </span>                                  <span className="text-body-highlight flex-1">
Assigned Projects
                                  </span>                                  <span className="fa-solid fa-chevron-right fs-11">                                  </span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                  <span className="me-2 text-body" data-feather={"pie-chart"}>                                  </span>                                  <span className="text-body-highlight flex-1">
View activiy
                                  </span>                                  <span className="fa-solid fa-chevron-right fs-11">                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="p-3 d-flex justify-content-between">
                            <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                            </a>
                            <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                            </a>
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-sm btn-phoenix-secondary btn-circle">
                        <span className="fa-solid fa-plus">                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="mb-5">
                    <h6 className="text-body-secondary mb-2">
Labels
                    </h6>
                    <div className="d-flex align-items-center">
                      <span className="badge badge-phoenix badge-phoenix-info fs-10 me-2">
INFO
                      </span>
                      <span className="badge badge-phoenix badge-phoenix-warning fs-10 me-2">
URGENT
                      </span>
                      <span className="badge badge-phoenix badge-phoenix-success fs-10 me-2">
DONE
                      </span>
                      <a href="#!" className="text-body fw-bolder fs-9 lh-1 text-decoration-none">
                        <span className="fa-solid fa-plus me-1">                        </span>Add another
                      </a>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <h4 className="me-3">
Description
                      </h4>
                      <button className="btn btn-link p-0">
                        <span className="fa-solid fa-pen">                        </span>
                      </button>
                    </div>
                    <p className="text-body-highlight">
The female circus horse-rider is a recurring subject in Chagall’s work. In 1926 the art dealer Ambroise Vollard invited Chagall to make a project based on the circus. They visited Paris’s historic Cirque d’Hiver Bouglione together; Vollard lent Chagall his private box seats. Chagall completed 19 gouaches...
                      <a href="#!" className="fw-semibold">
see more 
                      </a>
                    </p>
                  </div>
                </div>
                <div className="bg-body-highlight px-5 px-lg-6 py-4">
                  <div className="row justify-contnet-between border-bottom border-translucent g-0 gy-2 pb-3">
                    <div className="col-12 col-sm">
                      <p className="fs-9 text-body-secondary mb-2">
                        <a href="#!" className="fw-semibold">
Anthony Van Dyck 
                        </a>
uploaded a file 
                      </p>
                      <PhoenixImage src="/assets/img/generic/42.png" alt="" className="rounded-2 mb-2" width={220} />
                      <p className="text-body-highlight fw-semibold fs-9 mb-0">
Fruit blast
                      </p>
                    </div>
                    <div className="col-12 col-sm-auto">
                      <p className="text-body-secondary fw-semibold fs-10 mb-0">
Oct 3 at 4:38 pm
                      </p>
                    </div>
                  </div>
                  <div className="row justify-contnet-between border-bottom border-translucent g-0 gy-1 py-3 align-items-center">
                    <div className="col-12 col-sm">
                      <p className="fs-9 text-body-secondary mb-0">
                        <span className="text-body-highlight fw-semibold me-1">
You
                        </span>
created this task
                      </p>
                    </div>
                    <div className="col-12 col-sm-auto">
                      <p className="text-body-secondary fw-semibold fs-10 mb-0">
Oct 4 at 12:18 pm
                      </p>
                    </div>
                  </div>
                  <div className="row justify-contnet-between border-bottom border-translucent g-0 gy-1 py-3 align-items-center">
                    <div className="col-12 col-sm">
                      <p className="fs-9 text-body-secondary mb-1">
                        <a href="#!" className="fw-semibold">
Kazimir Malevich 
                        </a>
added a subtask
                      </p>
                      <div className="d-flex">
                        <p className="mb-0 fs-9 fw-semibold text-body-highlight">
                          <span className="fa-solid fa-circle text-primary" data-fa-transform={"shrink-8"}>                          </span>
Doing
                        </p>
                        <span className="text-body-secondary fs-9 mx-2">
to
                        </span>
                        <p className="mb-0 fs-9 fw-semibold text-body-highlight">
                          <span className="fa-solid fa-circle text-primary" data-fa-transform={"shrink-8"}>                          </span>
Review
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-sm-auto">
                      <p className="text-body-secondary fw-semibold fs-10 mb-0">
Oct 5 at 9:59 am
                      </p>
                    </div>
                  </div>
                  <div className="row justify-contnet-between gx-2 align-items-center pt-3">
                    <div className="col col-auto">
                      <div className="avatar avatar-m status-online ">
                        <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                      </div>
                    </div>
                    <div className="col col-auto flex-1">
                      <p className="fs-9 text-body-secondary mb-0">
                        <a href="#!" className="fw-semibold">
Peter Paul Rubens 
                        </a>
commented
                      </p>
                    </div>
                    <div className="col-12 col-sm-auto order-1 order-sm-0">
                      <p className="text-body-secondary fw-semibold fs-10 mb-0">
Oct 5 at 9:59 am
                      </p>
                    </div>
                    <div className="col-sm-11">
                      <p className="text-body fs-9 mb-0 ms-6">
Great job on the Phoenix template! The overall design and layout are visually appealing and user-friendly.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <textarea className="form-control form-control mb-3" rows={3} placeholder="Add comment" defaultValue="" />
                    <div className="d-flex flex-between-center">
                      <div className="d-flex">
                        <button className="btn btn-sm ps-0 pe-2 py-0">
                          <span className="fa-solid fa-image fs-8">                          </span>
                        </button>
                        <button className="btn btn-sm px-2 py-0">
                          <span className="fa-solid fa-calendar-days fs-8">                          </span>
                        </button>
                        <button className="btn btn-sm px-2 py-0">
                          <span className="fa-solid fa-location-dot fs-8">                          </span>
                        </button>
                        <button className="btn btn-sm px-2 py-0">
                          <span className="fa-solid fa-tag fs-8">                          </span>
                        </button>
                      </div>
                      <button className="btn btn-sm btn-primary px-6">
Comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-7">
                <div className="px-5 px-lg-6 py-4">
                  <div className="mb-7">
                    <h4 className="mb-4">
To do list 
                      <span className="text-body-tertiary fw-normal fs-6">
(23)
                      </span>
                    </h4>
                    <div className="row align-items-center g-0 justify-content-between mb-3">
                      <div className="col-12 col-sm-auto">
                        <div className="search-box w-100 mb-2 mb-sm-0" style={{"maxWidth":"30rem"} as CSSProperties}>
                          <form className="position-relative">
                            <input className="form-control search-input search" type="search" placeholder="Search tasks" aria-label="Search" />
                            <span className="fas fa-search search-box-icon">                            </span>
                          </form>
                        </div>
                      </div>
                      <div className="col-auto d-flex">
                        <p className="mb-0 ms-sm-3 fs-9 text-body-tertiary fw-bold">
                          <span className="fas fa-filter me-1 fw-extra-bold fs-10">                          </span>
23 tasks
                        </p>
                        <button className="btn btn-link p-0 ms-3 fs-9 text-primary fw-bold">
                          <span className="fas fa-sort me-1 fw-extra-bold fs-10">                          </span>
Sorting
                        </button>
                      </div>
                    </div>
                    <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 border-top">
                      <div className="col-12 col-lg-auto flex-1">
                        <div data-todo-offcanvas-toogle data-todo-offcanvas-target={"todoOffcanvas-1"}>
                          <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                            <input className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-0" />
                            <label className="form-check-label mb-0 fs-8 me-2 line-clamp-1" htmlFor="checkbox-todo-0">
Designing the dungeon
                            </label>
                            <span className="badge badge-phoenix fs-10 badge-phoenix-primary">
DRAFT
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-auto">
                        <div className="d-flex ms-4 lh-1 align-items-center">
                          <button className="btn p-0 text-body-tertiary fs-10 me-2">
                            <span className="fas fa-paperclip me-1">                            </span>
2
                          </button>
                          <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-lg-3 mb-0">
12 Nov, 2021
                          </p>
                          <div className="d-none d-lg-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties}>
                            <div className="hover-actions end-0">
                              <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1">
                                <span className="fas fa-edit">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                                <span className="fas fa-trash">                                </span>
                              </button>
                            </div>
                          </div>
                          <div className="hover-lg-hide">
                            <p className="text-body-tertiary fs-10 ps-lg-3 border-start-lg fw-bold mb-md-0 mb-0">
12:00 PM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 border-top">
                      <div className="col-12 col-lg-auto flex-1">
                        <div data-todo-offcanvas-toogle data-todo-offcanvas-target={"todoOffcanvas-2"}>
                          <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                            <input className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-1" />
                            <label className="form-check-label mb-0 fs-8 me-2 line-clamp-1" htmlFor="checkbox-todo-1">
Hiring a motion graphic designer
                            </label>
                            <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
URGENT
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-auto">
                        <div className="d-flex ms-4 lh-1 align-items-center">
                          <button className="btn p-0 text-body-tertiary fs-10 me-2">
                            <span className="fas fa-paperclip me-1">                            </span>
2
                          </button>
                          <button className="btn p-0 text-warning fs-10 me-2">
                            <span className="fas fa-tasks me-1">                            </span>
3
                          </button>
                          <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-lg-3 mb-0">
12 Nov, 2021
                          </p>
                          <div className="d-none d-lg-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties}>
                            <div className="hover-actions end-0">
                              <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1">
                                <span className="fas fa-edit">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                                <span className="fas fa-trash">                                </span>
                              </button>
                            </div>
                          </div>
                          <div className="hover-lg-hide">
                            <p className="text-body-tertiary fs-10 ps-lg-3 border-start-lg fw-bold mb-md-0 mb-0">
12:00 PM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 border-top">
                      <div className="col-12 col-lg-auto flex-1">
                        <div data-todo-offcanvas-toogle data-todo-offcanvas-target={"todoOffcanvas-3"}>
                          <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                            <input className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-2" />
                            <label className="form-check-label mb-0 fs-8 me-2 line-clamp-1" htmlFor="checkbox-todo-2">
Daily Meetings Purpose, participants
                            </label>
                            <span className="badge badge-phoenix fs-10 badge-phoenix-info">
ON PROCESS
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-auto">
                        <div className="d-flex ms-4 lh-1 align-items-center">
                          <button className="btn p-0 text-body-tertiary fs-10 me-2">
                            <span className="fas fa-paperclip me-1">                            </span>
4
                          </button>
                          <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-lg-3 mb-0">
12 Dec, 2021
                          </p>
                          <div className="d-none d-lg-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties}>
                            <div className="hover-actions end-0">
                              <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1">
                                <span className="fas fa-edit">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                                <span className="fas fa-trash">                                </span>
                              </button>
                            </div>
                          </div>
                          <div className="hover-lg-hide">
                            <p className="text-body-tertiary fs-10 ps-lg-3 border-start-lg fw-bold mb-md-0 mb-0">
05:00 AM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 border-top">
                      <div className="col-12 col-lg-auto flex-1">
                        <div data-todo-offcanvas-toogle data-todo-offcanvas-target={"todoOffcanvas-4"}>
                          <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                            <input className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-3" />
                            <label className="form-check-label mb-0 fs-8 me-2 line-clamp-1" htmlFor="checkbox-todo-3">
Finalizing the geometric shapes
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-auto">
                        <div className="d-flex ms-4 lh-1 align-items-center">
                          <button className="btn p-0 text-body-tertiary fs-10 me-2">
                            <span className="fas fa-paperclip me-1">                            </span>
3
                          </button>
                          <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-lg-3 mb-0">
12 Nov, 2021
                          </p>
                          <div className="d-none d-lg-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties}>
                            <div className="hover-actions end-0">
                              <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1">
                                <span className="fas fa-edit">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                                <span className="fas fa-trash">                                </span>
                              </button>
                            </div>
                          </div>
                          <div className="hover-lg-hide">
                            <p className="text-body-tertiary fs-10 ps-lg-3 border-start-lg fw-bold mb-md-0 mb-0">
12:00 PM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 border-top">
                      <div className="col-12 col-lg-auto flex-1">
                        <div data-todo-offcanvas-toogle data-todo-offcanvas-target={"todoOffcanvas-5"}>
                          <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                            <input className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-4" />
                            <label className="form-check-label mb-0 fs-8 me-2 line-clamp-1" htmlFor="checkbox-todo-4">
Daily meeting with team members
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-auto">
                        <div className="d-flex ms-4 lh-1 align-items-center">
                          <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-lg-3 mb-0">
1 Nov, 2021
                          </p>
                          <div className="d-none d-lg-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties}>
                            <div className="hover-actions end-0">
                              <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1">
                                <span className="fas fa-edit">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                                <span className="fas fa-trash">                                </span>
                              </button>
                            </div>
                          </div>
                          <div className="hover-lg-hide">
                            <p className="text-body-tertiary fs-10 ps-lg-3 border-start-lg fw-bold mb-md-0 mb-0">
12:00 PM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 border-top">
                      <div className="col-12 col-lg-auto flex-1">
                        <div data-todo-offcanvas-toogle data-todo-offcanvas-target={"todoOffcanvas-6"}>
                          <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                            <input className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-5" />
                            <label className="form-check-label mb-0 fs-8 me-2 line-clamp-1" htmlFor="checkbox-todo-5">
Daily Standup Meetings
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-auto">
                        <div className="d-flex ms-4 lh-1 align-items-center">
                          <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-lg-3 mb-0">
13 Nov, 2021
                          </p>
                          <div className="d-none d-lg-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties}>
                            <div className="hover-actions end-0">
                              <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1">
                                <span className="fas fa-edit">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                                <span className="fas fa-trash">                                </span>
                              </button>
                            </div>
                          </div>
                          <div className="hover-lg-hide">
                            <p className="text-body-tertiary fs-10 ps-lg-3 border-start-lg fw-bold mb-md-0 mb-0">
10:00 PM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="#!" className="fw-bold fs-9 mt-4">
                      <span className="fas fa-plus me-1">                      </span>Add new task
                    </a>
                  </div>
                  <h4 className="mb-3">
Files
                  </h4>
                  <div className="border-top pt-3 pb-4">
                    <div className="me-n3">
                      <div className="d-flex flex-between-center">
                        <div className="d-flex mb-1">
                          <span className="fa-solid fa-image me-2 text-body-tertiary fs-9">                          </span>
                          <p className="text-body-highlight mb-0 lh-1">
Silly_sight_1.png
                          </p>
                        </div>
                        <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                          <span className="fas fa-ellipsis-h">                          </span>
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
                          <a href="#!" className="dropdown-item">
Report abuse
                          </a>
                        </div>
                      </div>
                      <p className="fs-9 text-body-tertiary mb-2">
                        <span>
768 kb
                        </span>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <a href="#!">
Shantinan Mekalan 
                        </a>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <span className="text-nowrap">
21st Dec, 12:56 PM
                        </span>
                      </p>
                      <PhoenixImage src="/assets/img/generic/40.png" alt="" className="rounded-2" />
                    </div>
                  </div>
                  <div className="border-top py-3">
                    <div className="me-n3">
                      <div className="d-flex flex-between-center">
                        <div className="d-flex mb-1">
                          <span className="fa-solid fa-image me-2 text-body-tertiary fs-9">                          </span>
                          <p className="text-body-highlight mb-0 lh-1">
Silly_sight_1.png
                          </p>
                        </div>
                        <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                          <span className="fas fa-ellipsis-h">                          </span>
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
                          <a href="#!" className="dropdown-item">
Report abuse
                          </a>
                        </div>
                      </div>
                      <p className="fs-9 text-body-tertiary mb-1">
                        <span>
12.8 mb
                        </span>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <a href="#!">
Yves Tanguy 
                        </a>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <span className="text-nowrap">
19th Dec, 08:56 PM
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="border-top border-bottom py-3 mb-3">
                    <div className="me-n3">
                      <div className="d-flex flex-between-center">
                        <div className="d-flex align-items-center mb-1">
                          <span className="fa-solid fa-file-lines me-2 fs-9 text-body-tertiary">                          </span>
                          <p className="text-body-highlight mb-0 lh-1">
Project.txt
                          </p>
                        </div>
                        <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                          <span className="fas fa-ellipsis-h">                          </span>
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
                          <a href="#!" className="dropdown-item">
Report abuse
                          </a>
                        </div>
                      </div>
                      <p className="fs-9 text-body-tertiary mb-1">
                        <span>
123 kb
                        </span>
                        <span className="text-body-quaternary mx-1">
|
                        </span>
                        <a href="#!">
Shantinan Mekalan
                        </a>
                        <span className="text-body-quaternary mx-1">
|
                        </span>
                        <span className="text-nowrap">
12th Dec, 12:56 PM
                        </span>
                      </p>
                    </div>
                  </div>
                  <label className="btn btn-link p-0" htmlFor="customFile">
                    <span className="fas fa-plus me-1">                    </span>
Add file(s)
                  </label>
                  <input className="d-none" id="customFile" type="file" />
                </div>
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
