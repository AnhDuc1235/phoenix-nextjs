'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Kanban() {
  return (
    <div suppressHydrationWarning>

    <div className="kanban-header">
      <div className="row gx-0 justify-content-between justify-content-md-start">
        <div className="col-auto">
          <div className="dropdown">
            <button className="btn btn-link text-decoration-none text-body-emphasis fs-8 ps-0" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
              <span className="fs-7 me-2">
Phoenix
              </span>
              <span className="fas fa-angle-down text-body-quaternary d-inline-block" data-fa-transform={"up-2"} style={{"minWidth":"12px"} as CSSProperties}>              </span>
            </button>
            <div className="dropdown-menu py-0">
              <a href="#!" className="dropdown-item">
Sparrow
              </a>
              <a href="#!" className="dropdown-item">
Boreas
              </a>
              <a href="#!" className="dropdown-item">
Erebus
              </a>
            </div>
          </div>
        </div>
        <div className="col-auto d-flex align-items-center">
          <div className="avatar-group">
            <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
              <div className="avatar avatar-m ">
                <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
              </div>
            </a>
            <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
              <div className="position-relative">
                <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                </div>
                <div className="p-3">
                  <div className="text-end">
                    <button className="btn p-0 me-2">
                      <span className="fa-solid fa-user-plus text-white">                      </span>
                    </button>
                    <button className="btn p-0">
                      <span className="fa-solid fa-ellipsis text-white">                      </span>
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                      <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle border border-light-subtle" />
                    </div>
                    <h6 className="text-white">
Stanly Drinkwater
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
                      <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                      </span>
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
                        <span className="fa-solid fa-phone">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                        <span className="fa-solid fa-message">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                        <span className="fa-solid fa-video">                        </span>
                      </button>
                    </div>
                    <button className="btn btn-phoenix-primary">
                      <span className="fa-solid fa-envelope me-2">                      </span>
Send Email
                    </button>
                  </div>
                </div>
                <ul className="nav d-flex flex-column py-3 border-bottom">
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                      </span>                      <span className="text-body-highlight flex-1">
Assigned Projects
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body" data-feather={"pie-chart"}>                      </span>                      <span className="text-body-highlight flex-1">
View activiy
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
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
            <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
              <div className="avatar avatar-m ">
                <PhoenixImage src="/assets/img/team/60.webp" alt="" className="rounded-circle " />
              </div>
            </a>
            <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
              <div className="position-relative">
                <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                </div>
                <div className="p-3">
                  <div className="text-end">
                    <button className="btn p-0 me-2">
                      <span className="fa-solid fa-user-plus text-white">                      </span>
                    </button>
                    <button className="btn p-0">
                      <span className="fa-solid fa-ellipsis text-white">                      </span>
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
                      <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                      </span>
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
                        <span className="fa-solid fa-phone">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                        <span className="fa-solid fa-message">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                        <span className="fa-solid fa-video">                        </span>
                      </button>
                    </div>
                    <button className="btn btn-phoenix-primary">
                      <span className="fa-solid fa-envelope me-2">                      </span>
Send Email
                    </button>
                  </div>
                </div>
                <ul className="nav d-flex flex-column py-3 border-bottom">
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                      </span>                      <span className="text-body-highlight flex-1">
Assigned Projects
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body" data-feather={"pie-chart"}>                      </span>                      <span className="text-body-highlight flex-1">
View activiy
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
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
            <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
              <div className="avatar avatar-m ">
                <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle " />
              </div>
            </a>
            <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
              <div className="position-relative">
                <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                </div>
                <div className="p-3">
                  <div className="text-end">
                    <button className="btn p-0 me-2">
                      <span className="fa-solid fa-user-plus text-white">                      </span>
                    </button>
                    <button className="btn p-0">
                      <span className="fa-solid fa-ellipsis text-white">                      </span>
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                      <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle border border-light-subtle" />
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
                      <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                      </span>
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
                        <span className="fa-solid fa-phone">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                        <span className="fa-solid fa-message">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                        <span className="fa-solid fa-video">                        </span>
                      </button>
                    </div>
                    <button className="btn btn-phoenix-primary">
                      <span className="fa-solid fa-envelope me-2">                      </span>
Send Email
                    </button>
                  </div>
                </div>
                <ul className="nav d-flex flex-column py-3 border-bottom">
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                      </span>                      <span className="text-body-highlight flex-1">
Assigned Projects
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body" data-feather={"pie-chart"}>                      </span>                      <span className="text-body-highlight flex-1">
View activiy
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
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
            <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
              <div className="avatar avatar-m ">
                <PhoenixImage src="/assets/img/team/5.webp" alt="" className="rounded-circle " />
              </div>
            </a>
            <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
              <div className="position-relative">
                <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                </div>
                <div className="p-3">
                  <div className="text-end">
                    <button className="btn p-0 me-2">
                      <span className="fa-solid fa-user-plus text-white">                      </span>
                    </button>
                    <button className="btn p-0">
                      <span className="fa-solid fa-ellipsis text-white">                      </span>
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                      <PhoenixImage src="/assets/img/team/5.webp" alt="" className="rounded-circle border border-light-subtle" />
                    </div>
                    <h6 className="text-white">
Luis Bunuel
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
                      <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                      </span>
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
                        <span className="fa-solid fa-phone">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                        <span className="fa-solid fa-message">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                        <span className="fa-solid fa-video">                        </span>
                      </button>
                    </div>
                    <button className="btn btn-phoenix-primary">
                      <span className="fa-solid fa-envelope me-2">                      </span>
Send Email
                    </button>
                  </div>
                </div>
                <ul className="nav d-flex flex-column py-3 border-bottom">
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                      </span>                      <span className="text-body-highlight flex-1">
Assigned Projects
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body" data-feather={"pie-chart"}>                      </span>                      <span className="text-body-highlight flex-1">
View activiy
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
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
          <button className="btn btn-primary ms-4 fs-10 px-3">
            <span className="fas fa-user-plus d-inline-block" style={{"minWidth":"14px"} as CSSProperties}>            </span>
            <span className="d-none d-sm-inline ms-2">
invite
            </span>
          </button>
        </div>
        <div className="col-md-auto d-flex align-items-center ms-auto mt-2 mt-md-0">
          <ul className="nav w-100 fs-9">
            <li className="nav-item">
              <a href="#!" className="nav-link d-flex align-items-center text-body ps-0 pe-2 px-xl-3 fw-bold"  data-bs-toggle={"modal"} data-bs-target={"#searchBoxModal"}>
                <span className="me-1 fas fa-search" data-fa-transform={"up-2"} style={{"minWidth":"14px"} as CSSProperties}>                </span>                <span className="d-none d-xxl-inline">
Search
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-link d-flex align-items-center text-body px-2 px-xl-3 fw-bold">
                <span className="me-1 fas fa-filter" data-fa-transform={"up-2"} style={{"minWidth":"14px"} as CSSProperties}>                </span>                <span className="d-none d-xxl-inline">
Filter
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-link d-flex align-items-center text-body px-2 px-xl-3 fw-bold">
                <span className="me-1 fa-solid fa-right-left" data-fa-transform={"up-2"} style={{"minWidth":"14px"} as CSSProperties}>                </span>                <span className="d-none d-xxl-inline">
Export/import
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-link d-flex align-items-center text-body px-2 px-xl-3 fw-bold">
                <span className="me-1 fas fa-palette" data-fa-transform={"up-2"} style={{"minWidth":"14px"} as CSSProperties}>                </span>                <span className="d-none d-xxl-inline">
Modify
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-link d-flex align-items-center text-body px-2 px-xl-3 fw-bold">
                <span className="me-1 fa-solid fa-bars-staggered" data-fa-transform={"up-2"} style={{"minWidth":"14px"} as CSSProperties}>                </span>                <span className="d-none d-xxl-inline">
Gantt
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-link d-flex align-items-center text-body px-2 px-xl-3 fw-bold">
                <span className="me-1 fa-solid fa-calendar-days" data-fa-transform={"up-2"} style={{"minWidth":"14px"} as CSSProperties}>                </span>                <span className="d-none d-xxl-inline">
Calendar
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-link d-flex align-items-center text-body px-2 px-xl-3 fw-bold">
                <span className="me-1 fa-solid fa-box-archive" data-fa-transform={"up-2"} style={{"minWidth":"14px"} as CSSProperties}>                </span>                <span className="d-none d-xxl-inline">
Archive
                </span>
              </a>
            </li>
            <li className="nav-item ms-auto">
              <a href="#offcanvasKanban" className="nav-link d-flex align-items-center pe-0 ps-1 ps-xl-3 text-body h-100" data-phoenix-toggle={"offcanvas"} data-phoenix-target={"#offcanvasKanban"}  role="button">
                <span className="fa-solid fa-bars d-inline" data-fa-transform={"up-2"} style={{"minWidth":"14px"} as CSSProperties}>                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="kanban-container scrollbar" data-kanban-container>
      <div className="kanban-column scrollbar collapsed">
        <div className="kanban-column-header px-4 hover-actions-trigger">
          <div className="d-flex align-items-center border-bottom border-3 py-3 border-warning">
            <h5 className="mb-0 kanban-column-title">
Unassaigned
              <span className="kanban-title-badge">
3
              </span>
            </h5>
            <div className="hover-actions-trigger">
              <button className="btn btn-sm btn-phoenix-default kanban-header-dropdown-btn hover-actions" type="button" data-boundary={"viewport"} data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                <span className="fas fa-ellipsis-h">                </span>
              </button>
              <div className="dropdown-menu dropdown-menu-end py-2" style={{"width":"15rem"} as CSSProperties}>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Sort tasks
                  </span>                  <span className="fas fa-angle-right fs-10">                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Sort all tasks
                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Move all tasks
                  </span>                  <span className="fas fa-angle-right fs-10">                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Remove all tasks
                  </span>
                </a>
                <hr className="my-2" />
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Import
                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Export
                  </span>                  <span className="fas fa-angle-right fs-10">                  </span>
                </a>
                <hr className="my-2" />
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Move column
                  </span>                  <span className="fas fa-angle-right fs-10">                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Duplicate column
                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Delete column
                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Archive column
                  </span>
                </a>
                <hr className="my-2" />
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
{"Edit title & description"}
                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Edit colour
                  </span>                  <span className="fas fa-angle-right fs-10">                  </span>
                </a>
              </div>
            </div>
            <span className="uil uil-left-arrow-to-left fs-8 ms-auto kanban-collapse-icon" data-kanban-collapse>            </span>
            <span className="uil uil-arrow-from-right fs-8 ms-auto kanban-collapse-icon" data-kanban-collapse>            </span>
          </div>
        </div>
        <div className="kanban-items-container" data-sortable>
          <div className="sortable-item-wrapper border-bottom border-translucent px-2 py-2">
            <div className="card sortable-item hover-actions-trigger">
              <div className="card-body py-3 px-3">
                <div className="kanban-status mb-1 position-relative lh-1">
                  <span className="fa fa-circle me-2 d-inline-block text-primary" style={{"minWidth":"1rem"} as CSSProperties} data-fa-transform={"shrink-1 down-3"}>                  </span>
                  <span className="badge badge-phoenix fs-10 badge-phoenix-primary">
                    <span>
Feature
                    </span>
                    <span className="ms-1 d-inline-block fas fa-check-double" data-fa-transform={"up-2"} style={{"height":"7.8px","width":"7.8px"} as CSSProperties}>                    </span>
                  </span>
                  <button className="btn btn-sm btn-phoenix-default kanban-item-dropdown-btn hover-actions" type="button" data-boundary={"viewport"} data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                    <span className="fas fa-ellipsis-h fa-rotate-90" data-fa-transform={"shrink-2"}>                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end py-2" style={{"width":"15rem"} as CSSProperties}>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Duplicate
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to top
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to bottom
                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Print/Download
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Share
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move to archive
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent text-danger">
                      <span>
Delete
                      </span>
                    </a>
                  </div>
                </div>
                <p className="mb-0 stretched-link" data-bs-toggle={"modal"} data-bs-target={"#KanbanItemDetailsModal"}>
Develop a new feature for the phoenix mobile app
                </p>
                <div className="d-flex mt-2 align-items-center">                </div>
              </div>
            </div>
          </div>
          <div className="sortable-item-wrapper border-bottom border-translucent px-2 py-2">
            <div className="card sortable-item hover-actions-trigger">
              <div className="card-body py-3 px-3">
                <div className="kanban-status mb-1 position-relative lh-1">
                  <span className="fa fa-circle me-2 d-inline-block text-danger" style={{"minWidth":"1rem"} as CSSProperties} data-fa-transform={"shrink-1 down-3"}>                  </span>
                  <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
                    <span>
Bug
                    </span>
                    <span className="ms-1 d-inline-block fas fa-bug" data-fa-transform={"up-2"} style={{"height":"7.8px","width":"7.8px"} as CSSProperties}>                    </span>
                  </span>
                  <button className="btn btn-sm btn-phoenix-default kanban-item-dropdown-btn hover-actions" type="button" data-boundary={"viewport"} data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                    <span className="fas fa-ellipsis-h fa-rotate-90" data-fa-transform={"shrink-2"}>                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end py-2" style={{"width":"15rem"} as CSSProperties}>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Duplicate
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to top
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to bottom
                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Print/Download
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Share
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move to archive
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent text-danger">
                      <span>
Delete
                      </span>
                    </a>
                  </div>
                </div>
                <p className="mb-0 stretched-link" data-bs-toggle={"modal"} data-bs-target={"#KanbanItemDetailsModal"}>
Conduct user research to gather feedback on the latest product iteration
                </p>
                <div className="d-flex mt-2 align-items-center">                </div>
              </div>
            </div>
          </div>
          <div className="sortable-item-wrapper border-bottom border-translucent px-2 py-2">
            <div className="card sortable-item hover-actions-trigger">
              <div className="card-body py-3 px-3">
                <div className="kanban-status mb-1 position-relative lh-1">
                  <span className="fa fa-circle me-2 d-inline-block text-warning" style={{"minWidth":"1rem"} as CSSProperties} data-fa-transform={"shrink-1 down-3"}>                  </span>
                  <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                    <span>
Issue
                    </span>
                    <span className="ms-1 d-inline-block fa-solid fa-triangle-exclamation" data-fa-transform={"up-2"} style={{"height":"7.8px","width":"7.8px"} as CSSProperties}>                    </span>
                  </span>
                  <button className="btn btn-sm btn-phoenix-default kanban-item-dropdown-btn hover-actions" type="button" data-boundary={"viewport"} data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                    <span className="fas fa-ellipsis-h fa-rotate-90" data-fa-transform={"shrink-2"}>                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end py-2" style={{"width":"15rem"} as CSSProperties}>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Duplicate
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to top
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to bottom
                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Print/Download
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Share
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move to archive
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent text-danger">
                      <span>
Delete
                      </span>
                    </a>
                  </div>
                </div>
                <p className="mb-0 stretched-link" data-bs-toggle={"modal"} data-bs-target={"#KanbanItemDetailsModal"}>
Review and approve marketing materials for the upcoming product launch
                </p>
                <div className="d-flex mt-2 align-items-center">                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3 px-4 kanban-add-task">
          <button className="btn bg-sm bg-body-tertiary me-2 px-0" data-bs-toggle={"modal"} data-bs-target={"#kanbanAddTask"}>
            <span className="fas fa-plus text-white dark__text-gray-400" data-fa-transform={"grow-4 down-1"}>            </span>
          </button>
          <input className="form-control search-input rounded-3 px-3" placeholder="Add new task" />
        </div>
      </div>
      <div className="kanban-column scrollbar">
        <div className="kanban-column-header px-4 hover-actions-trigger">
          <div className="d-flex align-items-center border-bottom border-3 py-3 border-300">
            <h5 className="mb-0 kanban-column-title">
To do
              <span className="kanban-title-badge">
2
              </span>
            </h5>
            <div className="hover-actions-trigger">
              <button className="btn btn-sm btn-phoenix-default kanban-header-dropdown-btn hover-actions" type="button" data-boundary={"viewport"} data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                <span className="fas fa-ellipsis-h">                </span>
              </button>
              <div className="dropdown-menu dropdown-menu-end py-2" style={{"width":"15rem"} as CSSProperties}>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Sort tasks
                  </span>                  <span className="fas fa-angle-right fs-10">                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Sort all tasks
                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Move all tasks
                  </span>                  <span className="fas fa-angle-right fs-10">                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Remove all tasks
                  </span>
                </a>
                <hr className="my-2" />
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Import
                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Export
                  </span>                  <span className="fas fa-angle-right fs-10">                  </span>
                </a>
                <hr className="my-2" />
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Move column
                  </span>                  <span className="fas fa-angle-right fs-10">                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Duplicate column
                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Delete column
                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Archive column
                  </span>
                </a>
                <hr className="my-2" />
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
{"Edit title & description"}
                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Edit colour
                  </span>                  <span className="fas fa-angle-right fs-10">                  </span>
                </a>
              </div>
            </div>
            <span className="uil uil-left-arrow-to-left fs-8 ms-auto kanban-collapse-icon" data-kanban-collapse>            </span>
            <span className="uil uil-arrow-from-right fs-8 ms-auto kanban-collapse-icon" data-kanban-collapse>            </span>
          </div>
        </div>
        <div className="kanban-items-container" data-sortable>
          <div className="sortable-item-wrapper border-bottom border-translucent px-2 py-2">
            <div className="card sortable-item hover-actions-trigger">
              <div className="card-body py-3 px-3">
                <div className="position-relative mb-2 overflow-hidden rounded" style={{"height":"200px","width":"100%"} as CSSProperties}>
                  <div className="bg-holder" style={{"backgroundImage":"url(../../assets/img/kanban/1.jpg)"} as CSSProperties}>                  </div>
                </div>
                <div className="kanban-status mb-1 position-relative lh-1">
                  <span className="fa fa-circle me-2 d-inline-block text-danger" style={{"minWidth":"1rem"} as CSSProperties} data-fa-transform={"shrink-1 down-3"}>                  </span>
                  <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
                    <span>
Bug
                    </span>
                    <span className="ms-1 d-inline-block fas fa-bug" data-fa-transform={"up-2"} style={{"height":"7.8px","width":"7.8px"} as CSSProperties}>                    </span>
                  </span>
                  <button className="btn btn-sm btn-phoenix-default kanban-item-dropdown-btn hover-actions" type="button" data-boundary={"viewport"} data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                    <span className="fas fa-ellipsis-h fa-rotate-90" data-fa-transform={"shrink-2"}>                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end py-2" style={{"width":"15rem"} as CSSProperties}>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Duplicate
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to top
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to bottom
                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Print/Download
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Share
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move to archive
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent text-danger">
                      <span>
Delete
                      </span>
                    </a>
                  </div>
                </div>
                <p className="mb-0 stretched-link" data-bs-toggle={"modal"} data-bs-target={"#KanbanItemDetailsModal"}>
Test and debug code for the e-commerce website checkout process
                </p>
                <div className="d-flex mt-2 align-items-center">
                  <p className="mb-0 text-body-tertiary text-opacity-85 fs-9 lh-1">
                    <span className="fa-solid fa-paperclip fs-9 me-2 d-inline-block" style={{"minWidth":"1rem"} as CSSProperties}>                    </span>
15
                  </p>
                  <div className="avatar-group ms-auto">
                    <div className="avatar avatar-s  border border-light-subtle rounded-pill">
                      <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                    </div>
                    <div className="avatar avatar-s  border border-light-subtle rounded-pill">
                      <PhoenixImage src="/assets/img/team/57.webp" alt="" className="rounded-circle " />
                    </div>
                    <div className="avatar avatar-s  border border-light-subtle rounded-pill">
                      <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sortable-item-wrapper border-bottom border-translucent px-2 py-2">
            <div className="card sortable-item hover-actions-trigger">
              <div className="card-body py-3 px-3">
                <div className="kanban-status mb-1 position-relative lh-1">
                  <span className="fa fa-circle me-2 d-inline-block text-warning" style={{"minWidth":"1rem"} as CSSProperties} data-fa-transform={"shrink-1 down-3"}>                  </span>
                  <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                    <span>
Issue
                    </span>
                    <span className="ms-1 d-inline-block fa-solid fa-triangle-exclamation" data-fa-transform={"up-2"} style={{"height":"7.8px","width":"7.8px"} as CSSProperties}>                    </span>
                  </span>
                  <button className="btn btn-sm btn-phoenix-default kanban-item-dropdown-btn hover-actions" type="button" data-boundary={"viewport"} data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                    <span className="fas fa-ellipsis-h fa-rotate-90" data-fa-transform={"shrink-2"}>                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end py-2" style={{"width":"15rem"} as CSSProperties}>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Duplicate
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to top
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to bottom
                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Print/Download
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Share
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move to archive
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent text-danger">
                      <span>
Delete
                      </span>
                    </a>
                  </div>
                </div>
                <p className="mb-0 stretched-link" data-bs-toggle={"modal"} data-bs-target={"#KanbanItemDetailsModal"}>
Write a blog post on industry trends and best practices
                </p>
                <div className="d-flex mt-2 align-items-center">
                  <p className="mb-0 text-body-tertiary text-opacity-85 fs-9 lh-1 me-3 white-space-nowrap">
                    <span className="fa-solid fa-calendar-xmark fs-9 me-2 d-inline-block" style={{"minWidth":"1rem"} as CSSProperties}>                    </span>
Jan 25
                  </p>
                  <div className="avatar-group ms-auto">
                    <div className="avatar avatar-s  border border-light-subtle rounded-pill">
                      <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                    </div>
                    <div className="avatar avatar-s  border border-light-subtle rounded-pill">
                      <PhoenixImage src="/assets/img/team/57.webp" alt="" className="rounded-circle " />
                    </div>
                    <div className="avatar avatar-s  border border-light-subtle rounded-pill">
                      <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3 px-4 kanban-add-task">
          <button className="btn bg-sm bg-body-tertiary me-2 px-0" data-bs-toggle={"modal"} data-bs-target={"#kanbanAddTask"}>
            <span className="fas fa-plus text-white dark__text-gray-400" data-fa-transform={"grow-4 down-1"}>            </span>
          </button>
          <input className="form-control search-input rounded-3 px-3" placeholder="Add new task" />
        </div>
      </div>
      <div className="kanban-column scrollbar">
        <div className="kanban-column-header px-4 hover-actions-trigger">
          <div className="d-flex align-items-center border-bottom border-3 py-3 border-primary">
            <h5 className="mb-0 kanban-column-title">
Doing
              <span className="kanban-title-badge">
4
              </span>
            </h5>
            <div className="hover-actions-trigger">
              <button className="btn btn-sm btn-phoenix-default kanban-header-dropdown-btn hover-actions" type="button" data-boundary={"viewport"} data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                <span className="fas fa-ellipsis-h">                </span>
              </button>
              <div className="dropdown-menu dropdown-menu-end py-2" style={{"width":"15rem"} as CSSProperties}>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Sort tasks
                  </span>                  <span className="fas fa-angle-right fs-10">                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Sort all tasks
                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Move all tasks
                  </span>                  <span className="fas fa-angle-right fs-10">                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Remove all tasks
                  </span>
                </a>
                <hr className="my-2" />
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Import
                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Export
                  </span>                  <span className="fas fa-angle-right fs-10">                  </span>
                </a>
                <hr className="my-2" />
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Move column
                  </span>                  <span className="fas fa-angle-right fs-10">                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Duplicate column
                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Delete column
                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Archive column
                  </span>
                </a>
                <hr className="my-2" />
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
{"Edit title & description"}
                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Edit colour
                  </span>                  <span className="fas fa-angle-right fs-10">                  </span>
                </a>
              </div>
            </div>
            <span className="uil uil-left-arrow-to-left fs-8 ms-auto kanban-collapse-icon" data-kanban-collapse>            </span>
            <span className="uil uil-arrow-from-right fs-8 ms-auto kanban-collapse-icon" data-kanban-collapse>            </span>
          </div>
        </div>
        <div className="kanban-items-container" data-sortable>
          <div className="sortable-item-wrapper border-bottom border-translucent px-2 py-2">
            <div className="card sortable-item hover-actions-trigger">
              <div className="card-body py-3 px-3">
                <div className="kanban-status mb-1 position-relative lh-1">
                  <span className="fa fa-circle me-2 d-inline-block text-danger" style={{"minWidth":"1rem"} as CSSProperties} data-fa-transform={"shrink-1 down-3"}>                  </span>
                  <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
                    <span>
Bug
                    </span>
                    <span className="ms-1 d-inline-block fas fa-bug" data-fa-transform={"up-2"} style={{"height":"7.8px","width":"7.8px"} as CSSProperties}>                    </span>
                  </span>
                  <button className="btn btn-sm btn-phoenix-default kanban-item-dropdown-btn hover-actions" type="button" data-boundary={"viewport"} data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                    <span className="fas fa-ellipsis-h fa-rotate-90" data-fa-transform={"shrink-2"}>                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end py-2" style={{"width":"15rem"} as CSSProperties}>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Duplicate
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to top
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to bottom
                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Print/Download
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Share
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move to archive
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent text-danger">
                      <span>
Delete
                      </span>
                    </a>
                  </div>
                </div>
                <p className="mb-0 stretched-link" data-bs-toggle={"modal"} data-bs-target={"#KanbanItemDetailsModal"}>
Create wireframes for a new phoenix landing page design
                </p>
                <div className="d-flex mt-2 align-items-center">
                  <p className="mb-0 text-body-tertiary text-opacity-85 fs-9 lh-1 me-3 white-space-nowrap">
                    <span className="fa-solid fa-calendar-xmark fs-9 me-2 d-inline-block" style={{"minWidth":"1rem"} as CSSProperties}>                    </span>
Jan 25
                  </p>
                  <div className="avatar-group ms-auto">
                    <div className="avatar avatar-s  border border-light-subtle rounded-pill">
                      <PhoenixImage src="/assets/img/team/57.webp" alt="" className="rounded-circle " />
                    </div>
                    <div className="avatar avatar-s  border border-light-subtle rounded-pill">
                      <div className="avatar-name rounded-circle text-warning bg-warning-subtle">
                        <span>
R
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sortable-item-wrapper border-bottom border-translucent px-2 py-2">
            <div className="card sortable-item hover-actions-trigger">
              <div className="card-body py-3 px-3">
                <div className="kanban-status mb-1 position-relative lh-1">
                  <span className="fa fa-circle me-2 d-inline-block text-secondary" style={{"minWidth":"1rem"} as CSSProperties} data-fa-transform={"shrink-1 down-3"}>                  </span>
                  <span className="badge badge-phoenix fs-10 badge-phoenix-secondary">
                    <span>
Undefined
                    </span>
                    <span className="ms-1 d-inline-block fas fa-spinner" data-fa-transform={"up-2"} style={{"height":"7.8px","width":"7.8px"} as CSSProperties}>                    </span>
                  </span>
                  <button className="btn btn-sm btn-phoenix-default kanban-item-dropdown-btn hover-actions" type="button" data-boundary={"viewport"} data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                    <span className="fas fa-ellipsis-h fa-rotate-90" data-fa-transform={"shrink-2"}>                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end py-2" style={{"width":"15rem"} as CSSProperties}>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Duplicate
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to top
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to bottom
                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Print/Download
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Share
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move to archive
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent text-danger">
                      <span>
Delete
                      </span>
                    </a>
                  </div>
                </div>
                <p className="mb-0 stretched-link" data-bs-toggle={"modal"} data-bs-target={"#KanbanItemDetailsModal"}>
Set up and configure a new software tool for the marketing team
                </p>
                <div className="d-flex mt-2 align-items-center">
                  <p className="mb-0 text-body-tertiary text-opacity-85 fs-9 lh-1">
                    <span className="fa fa-check-square fs-9 me-2 d-inline-block" style={{"minWidth":"1rem"} as CSSProperties}>                    </span>
5/34
                  </p>
                  <div className="avatar-group ms-auto">
                    <div className="avatar avatar-s  border border-light-subtle rounded-pill">
                      <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sortable-item-wrapper border-bottom border-translucent px-2 py-2">
            <div className="card sortable-item hover-actions-trigger">
              <div className="card-body py-3 px-3">
                <div className="kanban-status mb-1 position-relative lh-1">
                  <span className="fa fa-circle me-2 d-inline-block text-primary" style={{"minWidth":"1rem"} as CSSProperties} data-fa-transform={"shrink-1 down-3"}>                  </span>
                  <span className="badge badge-phoenix fs-10 badge-phoenix-primary">
                    <span>
Feature
                    </span>
                    <span className="ms-1 d-inline-block fas fa-check-double" data-fa-transform={"up-2"} style={{"height":"7.8px","width":"7.8px"} as CSSProperties}>                    </span>
                  </span>
                  <button className="btn btn-sm btn-phoenix-default kanban-item-dropdown-btn hover-actions" type="button" data-boundary={"viewport"} data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                    <span className="fas fa-ellipsis-h fa-rotate-90" data-fa-transform={"shrink-2"}>                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end py-2" style={{"width":"15rem"} as CSSProperties}>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Duplicate
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to top
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to bottom
                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Print/Download
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Share
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move to archive
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent text-danger">
                      <span>
Delete
                      </span>
                    </a>
                  </div>
                </div>
                <p className="mb-0 stretched-link" data-bs-toggle={"modal"} data-bs-target={"#KanbanItemDetailsModal"}>
Draft and send a press release to announce a new partnership
                </p>
                <div className="d-flex mt-2 align-items-center">
                  <p className="mb-0 text-body-tertiary text-opacity-85 fs-9 lh-1 me-3 white-space-nowrap">
                    <span className="fa-solid fa-calendar-xmark fs-9 me-2 d-inline-block" style={{"minWidth":"1rem"} as CSSProperties}>                    </span>
Jan 25
                  </p>
                  <p className="mb-0 text-body-tertiary text-opacity-85 fs-9 lh-1">
                    <span className="fa-solid fa-paperclip fs-9 me-2 d-inline-block" style={{"minWidth":"1rem"} as CSSProperties}>                    </span>
15
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sortable-item-wrapper border-bottom border-translucent px-2 py-2">
            <div className="card sortable-item hover-actions-trigger">
              <div className="card-body py-3 px-3">
                <div className="position-relative mb-2 overflow-hidden rounded" style={{"height":"200px","width":"100%"} as CSSProperties}>
                  <div className="bg-holder" style={{"backgroundImage":"url(../../assets/img/kanban/glass.jpg)"} as CSSProperties}>                  </div>
                </div>
                <div className="kanban-status mb-1 position-relative lh-1">
                  <span className="fa fa-circle me-2 d-inline-block text-warning" style={{"minWidth":"1rem"} as CSSProperties} data-fa-transform={"shrink-1 down-3"}>                  </span>
                  <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                    <span>
Issue
                    </span>
                    <span className="ms-1 d-inline-block fa-solid fa-triangle-exclamation" data-fa-transform={"up-2"} style={{"height":"7.8px","width":"7.8px"} as CSSProperties}>                    </span>
                  </span>
                  <button className="btn btn-sm btn-phoenix-default kanban-item-dropdown-btn hover-actions" type="button" data-boundary={"viewport"} data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                    <span className="fas fa-ellipsis-h fa-rotate-90" data-fa-transform={"shrink-2"}>                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end py-2" style={{"width":"15rem"} as CSSProperties}>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Duplicate
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to top
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to bottom
                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Print/Download
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Share
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move to archive
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent text-danger">
                      <span>
Delete
                      </span>
                    </a>
                  </div>
                </div>
                <p className="mb-0 stretched-link" data-bs-toggle={"modal"} data-bs-target={"#KanbanItemDetailsModal"}>
Conduct a security audit of the phoenix web applications
                </p>
                <div className="d-flex mt-2 align-items-center">
                  <p className="mb-0 text-body-tertiary text-opacity-85 fs-9 lh-1 me-3 white-space-nowrap">
                    <span className="fa-solid fa-calendar-xmark fs-9 me-2 d-inline-block" style={{"minWidth":"1rem"} as CSSProperties}>                    </span>
Jan 25
                  </p>
                  <p className="mb-0 text-body-tertiary text-opacity-85 fs-9 lh-1">
                    <span className="fa-solid fa-paperclip fs-9 me-2 d-inline-block" style={{"minWidth":"1rem"} as CSSProperties}>                    </span>
15
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3 px-4 kanban-add-task">
          <button className="btn bg-sm bg-body-tertiary me-2 px-0" data-bs-toggle={"modal"} data-bs-target={"#kanbanAddTask"}>
            <span className="fas fa-plus text-white dark__text-gray-400" data-fa-transform={"grow-4 down-1"}>            </span>
          </button>
          <input className="form-control search-input rounded-3 px-3" placeholder="Add new task" />
        </div>
      </div>
      <div className="kanban-column scrollbar">
        <div className="kanban-column-header px-4 hover-actions-trigger">
          <div className="d-flex align-items-center border-bottom border-3 py-3 border-info">
            <h5 className="mb-0 kanban-column-title">
Review
              <span className="kanban-title-badge">
4
              </span>
            </h5>
            <div className="hover-actions-trigger">
              <button className="btn btn-sm btn-phoenix-default kanban-header-dropdown-btn hover-actions" type="button" data-boundary={"viewport"} data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                <span className="fas fa-ellipsis-h">                </span>
              </button>
              <div className="dropdown-menu dropdown-menu-end py-2" style={{"width":"15rem"} as CSSProperties}>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Sort tasks
                  </span>                  <span className="fas fa-angle-right fs-10">                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Sort all tasks
                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Move all tasks
                  </span>                  <span className="fas fa-angle-right fs-10">                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Remove all tasks
                  </span>
                </a>
                <hr className="my-2" />
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Import
                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Export
                  </span>                  <span className="fas fa-angle-right fs-10">                  </span>
                </a>
                <hr className="my-2" />
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Move column
                  </span>                  <span className="fas fa-angle-right fs-10">                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Duplicate column
                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Delete column
                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Archive column
                  </span>
                </a>
                <hr className="my-2" />
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
{"Edit title & description"}
                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Edit colour
                  </span>                  <span className="fas fa-angle-right fs-10">                  </span>
                </a>
              </div>
            </div>
            <span className="uil uil-left-arrow-to-left fs-8 ms-auto kanban-collapse-icon" data-kanban-collapse>            </span>
            <span className="uil uil-arrow-from-right fs-8 ms-auto kanban-collapse-icon" data-kanban-collapse>            </span>
          </div>
        </div>
        <div className="kanban-items-container" data-sortable>
          <div className="sortable-item-wrapper border-bottom border-translucent px-2 py-2">
            <div className="card sortable-item hover-actions-trigger">
              <div className="card-body py-3 px-3">
                <div className="kanban-status mb-1 position-relative lh-1">
                  <span className="fa fa-circle me-2 d-inline-block text-warning" style={{"minWidth":"1rem"} as CSSProperties} data-fa-transform={"shrink-1 down-3"}>                  </span>
                  <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                    <span>
Issue
                    </span>
                    <span className="ms-1 d-inline-block fa-solid fa-triangle-exclamation" data-fa-transform={"up-2"} style={{"height":"7.8px","width":"7.8px"} as CSSProperties}>                    </span>
                  </span>
                  <button className="btn btn-sm btn-phoenix-default kanban-item-dropdown-btn hover-actions" type="button" data-boundary={"viewport"} data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                    <span className="fas fa-ellipsis-h fa-rotate-90" data-fa-transform={"shrink-2"}>                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end py-2" style={{"width":"15rem"} as CSSProperties}>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Duplicate
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to top
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to bottom
                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Print/Download
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Share
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move to archive
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent text-danger">
                      <span>
Delete
                      </span>
                    </a>
                  </div>
                </div>
                <p className="mb-0 stretched-link" data-bs-toggle={"modal"} data-bs-target={"#KanbanItemDetailsModal"}>
Design and develop a new logo for the phoenix
                </p>
                <div className="d-flex mt-2 align-items-center">
                  <p className="mb-0 text-body-tertiary text-opacity-85 fs-9 lh-1">
                    <span className="fa-solid fa-paperclip fs-9 me-2 d-inline-block" style={{"minWidth":"1rem"} as CSSProperties}>                    </span>
15
                  </p>
                  <div className="avatar-group ms-auto">
                    <div className="avatar avatar-s  border border-light-subtle rounded-pill">
                      <PhoenixImage src="/assets/img/team/57.webp" alt="" className="rounded-circle " />
                    </div>
                    <div className="avatar avatar-s  border border-light-subtle rounded-pill">
                      <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle " />
                    </div>
                    <div className="avatar avatar-s  border border-light-subtle rounded-pill">
                      <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sortable-item-wrapper border-bottom border-translucent px-2 py-2">
            <div className="card sortable-item hover-actions-trigger">
              <div className="card-body py-3 px-3">
                <div className="kanban-status mb-1 position-relative lh-1">
                  <span className="fa fa-circle me-2 d-inline-block text-warning" style={{"minWidth":"1rem"} as CSSProperties} data-fa-transform={"shrink-1 down-3"}>                  </span>
                  <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                    <span>
Issue
                    </span>
                    <span className="ms-1 d-inline-block fa-solid fa-triangle-exclamation" data-fa-transform={"up-2"} style={{"height":"7.8px","width":"7.8px"} as CSSProperties}>                    </span>
                  </span>
                  <button className="btn btn-sm btn-phoenix-default kanban-item-dropdown-btn hover-actions" type="button" data-boundary={"viewport"} data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                    <span className="fas fa-ellipsis-h fa-rotate-90" data-fa-transform={"shrink-2"}>                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end py-2" style={{"width":"15rem"} as CSSProperties}>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Duplicate
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to top
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to bottom
                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Print/Download
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Share
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move to archive
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent text-danger">
                      <span>
Delete
                      </span>
                    </a>
                  </div>
                </div>
                <p className="mb-0 stretched-link" data-bs-toggle={"modal"} data-bs-target={"#KanbanItemDetailsModal"}>
Create a fresh visual identity for Phoenix with a new logo design
                </p>
                <div className="d-flex mt-2 align-items-center">
                  <p className="mb-0 text-body-tertiary text-opacity-85 fs-9 lh-1">
                    <span className="fa fa-check-square fs-9 me-2 d-inline-block" style={{"minWidth":"1rem"} as CSSProperties}>                    </span>
5/34
                  </p>
                  <div className="avatar-group ms-auto">
                    <div className="avatar avatar-s  border border-light-subtle rounded-pill">
                      <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle " />
                    </div>
                    <div className="avatar avatar-s  border border-light-subtle rounded-pill">
                      <PhoenixImage src="/assets/img/team/57.webp" alt="" className="rounded-circle " />
                    </div>
                    <div className="avatar avatar-s  border border-light-subtle rounded-pill">
                      <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sortable-item-wrapper border-bottom border-translucent px-2 py-2">
            <div className="card sortable-item hover-actions-trigger">
              <div className="card-body py-3 px-3">
                <div className="kanban-status mb-1 position-relative lh-1">
                  <span className="fa fa-circle me-2 d-inline-block text-secondary" style={{"minWidth":"1rem"} as CSSProperties} data-fa-transform={"shrink-1 down-3"}>                  </span>
                  <span className="badge badge-phoenix fs-10 badge-phoenix-secondary">
                    <span>
Undefined
                    </span>
                    <span className="ms-1 d-inline-block fas fa-spinner" data-fa-transform={"up-2"} style={{"height":"7.8px","width":"7.8px"} as CSSProperties}>                    </span>
                  </span>
                  <button className="btn btn-sm btn-phoenix-default kanban-item-dropdown-btn hover-actions" type="button" data-boundary={"viewport"} data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                    <span className="fas fa-ellipsis-h fa-rotate-90" data-fa-transform={"shrink-2"}>                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end py-2" style={{"width":"15rem"} as CSSProperties}>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Duplicate
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to top
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to bottom
                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Print/Download
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Share
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move to archive
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent text-danger">
                      <span>
Delete
                      </span>
                    </a>
                  </div>
                </div>
                <p className="mb-0 stretched-link" data-bs-toggle={"modal"} data-bs-target={"#KanbanItemDetailsModal"}>
Identify best software vendors for company-wide system through comprehensive research and evaluation
                </p>
                <div className="d-flex mt-2 align-items-center">
                  <p className="mb-0 text-body-tertiary text-opacity-85 fs-9 lh-1">
                    <span className="fa-solid fa-paperclip fs-9 me-2 d-inline-block" style={{"minWidth":"1rem"} as CSSProperties}>                    </span>
15
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sortable-item-wrapper border-bottom border-translucent px-2 py-2">
            <div className="card sortable-item hover-actions-trigger">
              <div className="card-body py-3 px-3">
                <div className="position-relative mb-2 overflow-hidden rounded" style={{"height":"200px","width":"100%"} as CSSProperties}>
                  <div className="bg-holder" style={{"backgroundImage":"url(../../assets/img/kanban/wall.jpg)"} as CSSProperties}>                  </div>
                </div>
                <div className="kanban-status mb-1 position-relative lh-1">
                  <span className="fa fa-circle me-2 d-inline-block text-primary" style={{"minWidth":"1rem"} as CSSProperties} data-fa-transform={"shrink-1 down-3"}>                  </span>
                  <span className="badge badge-phoenix fs-10 badge-phoenix-primary">
                    <span>
Feature
                    </span>
                    <span className="ms-1 d-inline-block fas fa-check-double" data-fa-transform={"up-2"} style={{"height":"7.8px","width":"7.8px"} as CSSProperties}>                    </span>
                  </span>
                  <button className="btn btn-sm btn-phoenix-default kanban-item-dropdown-btn hover-actions" type="button" data-boundary={"viewport"} data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                    <span className="fas fa-ellipsis-h fa-rotate-90" data-fa-transform={"shrink-2"}>                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end py-2" style={{"width":"15rem"} as CSSProperties}>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Duplicate
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to top
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to bottom
                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Print/Download
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Share
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move to archive
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent text-danger">
                      <span>
Delete
                      </span>
                    </a>
                  </div>
                </div>
                <p className="mb-0 stretched-link" data-bs-toggle={"modal"} data-bs-target={"#KanbanItemDetailsModal"}>
Write and edit copy for a new email marketing campaign
                </p>
                <div className="d-flex mt-2 align-items-center">
                  <p className="mb-0 text-body-tertiary text-opacity-85 fs-9 lh-1">
                    <span className="fa-solid fa-paperclip fs-9 me-2 d-inline-block" style={{"minWidth":"1rem"} as CSSProperties}>                    </span>
15
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3 px-4 kanban-add-task">
          <button className="btn bg-sm bg-body-tertiary me-2 px-0" data-bs-toggle={"modal"} data-bs-target={"#kanbanAddTask"}>
            <span className="fas fa-plus text-white dark__text-gray-400" data-fa-transform={"grow-4 down-1"}>            </span>
          </button>
          <input className="form-control search-input rounded-3 px-3" placeholder="Add new task" />
        </div>
      </div>
      <div className="kanban-column scrollbar">
        <div className="kanban-column-header px-4 hover-actions-trigger">
          <div className="d-flex align-items-center border-bottom border-3 py-3 border-success">
            <h5 className="mb-0 kanban-column-title">
Release
              <span className="kanban-title-badge">
3
              </span>
            </h5>
            <div className="hover-actions-trigger">
              <button className="btn btn-sm btn-phoenix-default kanban-header-dropdown-btn hover-actions" type="button" data-boundary={"viewport"} data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                <span className="fas fa-ellipsis-h">                </span>
              </button>
              <div className="dropdown-menu dropdown-menu-end py-2" style={{"width":"15rem"} as CSSProperties}>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Sort tasks
                  </span>                  <span className="fas fa-angle-right fs-10">                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Sort all tasks
                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Move all tasks
                  </span>                  <span className="fas fa-angle-right fs-10">                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Remove all tasks
                  </span>
                </a>
                <hr className="my-2" />
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Import
                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Export
                  </span>                  <span className="fas fa-angle-right fs-10">                  </span>
                </a>
                <hr className="my-2" />
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Move column
                  </span>                  <span className="fas fa-angle-right fs-10">                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Duplicate column
                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Delete column
                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Archive column
                  </span>
                </a>
                <hr className="my-2" />
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
{"Edit title & description"}
                  </span>
                </a>
                <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                  <span>
Edit colour
                  </span>                  <span className="fas fa-angle-right fs-10">                  </span>
                </a>
              </div>
            </div>
            <span className="uil uil-left-arrow-to-left fs-8 ms-auto kanban-collapse-icon" data-kanban-collapse>            </span>
            <span className="uil uil-arrow-from-right fs-8 ms-auto kanban-collapse-icon" data-kanban-collapse>            </span>
          </div>
        </div>
        <div className="kanban-items-container" data-sortable>
          <div className="sortable-item-wrapper border-bottom border-translucent px-2 py-2">
            <div className="card sortable-item hover-actions-trigger">
              <div className="card-body py-3 px-3">
                <div className="kanban-status mb-1 position-relative lh-1">
                  <span className="fa fa-circle me-2 d-inline-block text-primary" style={{"minWidth":"1rem"} as CSSProperties} data-fa-transform={"shrink-1 down-3"}>                  </span>
                  <span className="badge badge-phoenix fs-10 badge-phoenix-primary">
                    <span>
Feature
                    </span>
                    <span className="ms-1 d-inline-block fas fa-check-double" data-fa-transform={"up-2"} style={{"height":"7.8px","width":"7.8px"} as CSSProperties}>                    </span>
                  </span>
                  <button className="btn btn-sm btn-phoenix-default kanban-item-dropdown-btn hover-actions" type="button" data-boundary={"viewport"} data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                    <span className="fas fa-ellipsis-h fa-rotate-90" data-fa-transform={"shrink-2"}>                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end py-2" style={{"width":"15rem"} as CSSProperties}>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Duplicate
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to top
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to bottom
                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Print/Download
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Share
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move to archive
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent text-danger">
                      <span>
Delete
                      </span>
                    </a>
                  </div>
                </div>
                <p className="mb-0 stretched-link" data-bs-toggle={"modal"} data-bs-target={"#KanbanItemDetailsModal"}>
Improve Phoenix website usability through user testing
                </p>
                <div className="d-flex mt-2 align-items-center">
                  <p className="mb-0 text-body-tertiary text-opacity-85 fs-9 lh-1">
                    <span className="fa-solid fa-paperclip fs-9 me-2 d-inline-block" style={{"minWidth":"1rem"} as CSSProperties}>                    </span>
15
                  </p>
                  <div className="avatar-group ms-auto">
                    <div className="avatar avatar-s  border border-light-subtle rounded-pill">
                      <PhoenixImage src="/assets/img/team/57.webp" alt="" className="rounded-circle " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sortable-item-wrapper border-bottom border-translucent px-2 py-2">
            <div className="card sortable-item hover-actions-trigger">
              <div className="card-body py-3 px-3">
                <div className="position-relative mb-2 overflow-hidden rounded" style={{"height":"200px","width":"100%"} as CSSProperties}>
                  <div className="bg-holder" style={{"backgroundImage":"url(../../assets/img/kanban/home.jpg)"} as CSSProperties}>                  </div>
                </div>
                <div className="kanban-status mb-1 position-relative lh-1">
                  <span className="fa fa-circle me-2 d-inline-block text-danger" style={{"minWidth":"1rem"} as CSSProperties} data-fa-transform={"shrink-1 down-3"}>                  </span>
                  <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
                    <span>
Bug
                    </span>
                    <span className="ms-1 d-inline-block fas fa-bug" data-fa-transform={"up-2"} style={{"height":"7.8px","width":"7.8px"} as CSSProperties}>                    </span>
                  </span>
                  <button className="btn btn-sm btn-phoenix-default kanban-item-dropdown-btn hover-actions" type="button" data-boundary={"viewport"} data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                    <span className="fas fa-ellipsis-h fa-rotate-90" data-fa-transform={"shrink-2"}>                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end py-2" style={{"width":"15rem"} as CSSProperties}>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Duplicate
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to top
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to bottom
                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Print/Download
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Share
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move to archive
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent text-danger">
                      <span>
Delete
                      </span>
                    </a>
                  </div>
                </div>
                <p className="mb-0 stretched-link" data-bs-toggle={"modal"} data-bs-target={"#KanbanItemDetailsModal"}>
Develop and deliver a training program for new employees
                </p>
                <div className="d-flex mt-2 align-items-center">
                  <p className="mb-0 text-body-tertiary text-opacity-85 fs-9 lh-1">
                    <span className="fa-solid fa-paperclip fs-9 me-2 d-inline-block" style={{"minWidth":"1rem"} as CSSProperties}>                    </span>
15
                  </p>
                  <div className="avatar-group ms-auto">
                    <div className="avatar avatar-s  border border-light-subtle rounded-pill">
                      <PhoenixImage src="/assets/img/team/57.webp" alt="" className="rounded-circle " />
                    </div>
                    <div className="avatar avatar-s  border border-light-subtle rounded-pill">
                      <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle " />
                    </div>
                    <div className="avatar avatar-s  border border-light-subtle rounded-pill">
                      <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sortable-item-wrapper border-bottom border-translucent px-2 py-2">
            <div className="card sortable-item hover-actions-trigger">
              <div className="card-body py-3 px-3">
                <div className="kanban-status mb-1 position-relative lh-1">
                  <span className="fa fa-circle me-2 d-inline-block text-secondary" style={{"minWidth":"1rem"} as CSSProperties} data-fa-transform={"shrink-1 down-3"}>                  </span>
                  <span className="badge badge-phoenix fs-10 badge-phoenix-secondary">
                    <span>
Undefined
                    </span>
                    <span className="ms-1 d-inline-block fas fa-spinner" data-fa-transform={"up-2"} style={{"height":"7.8px","width":"7.8px"} as CSSProperties}>                    </span>
                  </span>
                  <button className="btn btn-sm btn-phoenix-default kanban-item-dropdown-btn hover-actions" type="button" data-boundary={"viewport"} data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                    <span className="fas fa-ellipsis-h fa-rotate-90" data-fa-transform={"shrink-2"}>                    </span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end py-2" style={{"width":"15rem"} as CSSProperties}>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Duplicate
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to top
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Jump to bottom
                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Print/Download
                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Share
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <hr className="my-2" />
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent undefined">
                      <span>
Move to archive
                      </span>                      <span className="fas fa-angle-right fs-10">                      </span>
                    </a>
                    <a href="#!" className="dropdown-item d-flex flex-between-center border-1 border-translucent text-danger">
                      <span>
Delete
                      </span>
                    </a>
                  </div>
                </div>
                <p className="mb-0 stretched-link" data-bs-toggle={"modal"} data-bs-target={"#KanbanItemDetailsModal"}>
Organize and lead a brainstorming session to generate new product ideas
                </p>
                <div className="d-flex mt-2 align-items-center">
                  <p className="mb-0 text-body-tertiary text-opacity-85 fs-9 lh-1">
                    <span className="fa-solid fa-paperclip fs-9 me-2 d-inline-block" style={{"minWidth":"1rem"} as CSSProperties}>                    </span>
15
                  </p>
                  <div className="avatar-group ms-auto">
                    <div className="avatar avatar-s  border border-light-subtle rounded-pill">
                      <PhoenixImage src="/assets/img/team/57.webp" alt="" className="rounded-circle " />
                    </div>
                    <div className="avatar avatar-s  border border-light-subtle rounded-pill">
                      <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3 px-4 kanban-add-task">
          <button className="btn bg-sm bg-body-tertiary me-2 px-0" data-bs-toggle={"modal"} data-bs-target={"#kanbanAddTask"}>
            <span className="fas fa-plus text-white dark__text-gray-400" data-fa-transform={"grow-4 down-1"}>            </span>
          </button>
          <input className="form-control search-input rounded-3 px-3" placeholder="Add new task" />
        </div>
      </div>
      <div className="kanban-column scrollbar position-relative bg-transparent">
        <div className="d-flex h-100 flex-center fw-bold bg-body-hover">
          <a href="#!" className="text-decoration-none stretched-link text-body-secondary">
            <div className="circle-btn bg-body-secondary mx-auto">
              <span className="fas fa-plus" data-fa-transform={"shrink-2"}>              </span>
            </div>            <span>
Add another list
            </span>
          </a>
        </div>
      </div>
    </div>

    <div className="phoenix-offcanvas phoenix-offcanvas-end bg-body-highlight position-fixed outline-none" tabIndex={-1} id="offcanvasKanban" style={{"maxWidth":"445px"} as CSSProperties}>
      <div className="offcanvas-header justify-content-between">
        <h3 className="offcanvas-title">
Phoenix Kanban
        </h3>
        <button className="btn p-1 fw-bolder" type="button" data-phoenix-dismiss={"offcanvas"} aria-label="Close">
          <span className="fas fa-times fs-8">          </span>
        </button>
      </div>
      <div className="offcanvas-body">
        <h4 className="text-body-highlight fw-semibold mb-0 mt-6">
Admins 
        </h4>
        <div className="d-flex align-items-center mt-3">
          <div className="dropdown">
            <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
              <div className="avatar avatar-xl  me-3 border border-light-subtle rounded-pill">
                <PhoenixImage src="/assets/img/team/14.webp" alt="" className="rounded-circle " />
              </div>
            </a>
            <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
              <div className="position-relative">
                <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                </div>
                <div className="p-3">
                  <div className="text-end">
                    <button className="btn p-0 me-2">
                      <span className="fa-solid fa-user-plus text-white">                      </span>
                    </button>
                    <button className="btn p-0">
                      <span className="fa-solid fa-ellipsis text-white">                      </span>
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                      <PhoenixImage src="/assets/img/team/14.webp" alt="" className="rounded-circle border border-light-subtle" />
                    </div>
                    <h6 className="text-white">
Sasha Blaus
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
                      <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                      </span>
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
                        <span className="fa-solid fa-phone">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                        <span className="fa-solid fa-message">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                        <span className="fa-solid fa-video">                        </span>
                      </button>
                    </div>
                    <button className="btn btn-phoenix-primary">
                      <span className="fa-solid fa-envelope me-2">                      </span>
Send Email
                    </button>
                  </div>
                </div>
                <ul className="nav d-flex flex-column py-3 border-bottom">
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                      </span>                      <span className="text-body-highlight flex-1">
Assigned Projects
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body" data-feather={"pie-chart"}>                      </span>                      <span className="text-body-highlight flex-1">
View activiy
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
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
          <div className="flex-1">
            <a href="#!" className="text-decoration-none text-body-highlight lh-1 fw-semibold">
Sasha Blaus
            </a>
            <h6 className="mb-0 lh-1 text-body-highlight fw-semibold">
@potatogirl
            </h6>
          </div>
        </div>
        <h4 className="text-body-highlight fw-semibold mb-0 mt-5 mb-3">
Members 
        </h4>
        <div className="d-flex">
          <div className="dropdown">
            <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
              <div className="avatar avatar-m  me-2 border border-light-subtle rounded-pill">
                <PhoenixImage src="/assets/img/team/33.webp" alt="" className="rounded-circle " />
              </div>
            </a>
            <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
              <div className="position-relative">
                <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                </div>
                <div className="p-3">
                  <div className="text-end">
                    <button className="btn p-0 me-2">
                      <span className="fa-solid fa-user-plus text-white">                      </span>
                    </button>
                    <button className="btn p-0">
                      <span className="fa-solid fa-ellipsis text-white">                      </span>
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                      <PhoenixImage src="/assets/img/team/33.webp" alt="" className="rounded-circle border border-light-subtle" />
                    </div>
                    <h6 className="text-white">
Tyrion Lannister
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
                      <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                      </span>
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
                        <span className="fa-solid fa-phone">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                        <span className="fa-solid fa-message">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                        <span className="fa-solid fa-video">                        </span>
                      </button>
                    </div>
                    <button className="btn btn-phoenix-primary">
                      <span className="fa-solid fa-envelope me-2">                      </span>
Send Email
                    </button>
                  </div>
                </div>
                <ul className="nav d-flex flex-column py-3 border-bottom">
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                      </span>                      <span className="text-body-highlight flex-1">
Assigned Projects
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body" data-feather={"pie-chart"}>                      </span>                      <span className="text-body-highlight flex-1">
View activiy
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
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
              <div className="avatar avatar-m  me-2 border border-light-subtle rounded-pill">
                <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
              </div>
            </a>
            <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
              <div className="position-relative">
                <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                </div>
                <div className="p-3">
                  <div className="text-end">
                    <button className="btn p-0 me-2">
                      <span className="fa-solid fa-user-plus text-white">                      </span>
                    </button>
                    <button className="btn p-0">
                      <span className="fa-solid fa-ellipsis text-white">                      </span>
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                      <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle border border-light-subtle" />
                    </div>
                    <h6 className="text-white">
Milind Mikuja
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
                      <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                      </span>
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
                        <span className="fa-solid fa-phone">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                        <span className="fa-solid fa-message">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                        <span className="fa-solid fa-video">                        </span>
                      </button>
                    </div>
                    <button className="btn btn-phoenix-primary">
                      <span className="fa-solid fa-envelope me-2">                      </span>
Send Email
                    </button>
                  </div>
                </div>
                <ul className="nav d-flex flex-column py-3 border-bottom">
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                      </span>                      <span className="text-body-highlight flex-1">
Assigned Projects
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body" data-feather={"pie-chart"}>                      </span>                      <span className="text-body-highlight flex-1">
View activiy
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
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
              <div className="avatar avatar-m  me-2 border border-light-subtle rounded-pill">
                <PhoenixImage src="/assets/img/team/31.webp" alt="" className="rounded-circle " />
              </div>
            </a>
            <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
              <div className="position-relative">
                <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                </div>
                <div className="p-3">
                  <div className="text-end">
                    <button className="btn p-0 me-2">
                      <span className="fa-solid fa-user-plus text-white">                      </span>
                    </button>
                    <button className="btn p-0">
                      <span className="fa-solid fa-ellipsis text-white">                      </span>
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                      <PhoenixImage src="/assets/img/team/31.webp" alt="" className="rounded-circle border border-light-subtle" />
                    </div>
                    <h6 className="text-white">
Stanly Drinkwater
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
                      <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                      </span>
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
                        <span className="fa-solid fa-phone">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                        <span className="fa-solid fa-message">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                        <span className="fa-solid fa-video">                        </span>
                      </button>
                    </div>
                    <button className="btn btn-phoenix-primary">
                      <span className="fa-solid fa-envelope me-2">                      </span>
Send Email
                    </button>
                  </div>
                </div>
                <ul className="nav d-flex flex-column py-3 border-bottom">
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                      </span>                      <span className="text-body-highlight flex-1">
Assigned Projects
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body" data-feather={"pie-chart"}>                      </span>                      <span className="text-body-highlight flex-1">
View activiy
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
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
              <div className="avatar avatar-m  me-2 border border-light-subtle rounded-pill">
                <PhoenixImage src="/assets/img/team/60.webp" alt="" className="rounded-circle " />
              </div>
            </a>
            <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
              <div className="position-relative">
                <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                </div>
                <div className="p-3">
                  <div className="text-end">
                    <button className="btn p-0 me-2">
                      <span className="fa-solid fa-user-plus text-white">                      </span>
                    </button>
                    <button className="btn p-0">
                      <span className="fa-solid fa-ellipsis text-white">                      </span>
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                      <PhoenixImage src="/assets/img/team/60.webp" alt="" className="rounded-circle border border-light-subtle" />
                    </div>
                    <h6 className="text-white">
Josef Stravinsky
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
                      <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                      </span>
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
                        <span className="fa-solid fa-phone">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                        <span className="fa-solid fa-message">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                        <span className="fa-solid fa-video">                        </span>
                      </button>
                    </div>
                    <button className="btn btn-phoenix-primary">
                      <span className="fa-solid fa-envelope me-2">                      </span>
Send Email
                    </button>
                  </div>
                </div>
                <ul className="nav d-flex flex-column py-3 border-bottom">
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                      </span>                      <span className="text-body-highlight flex-1">
Assigned Projects
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body" data-feather={"pie-chart"}>                      </span>                      <span className="text-body-highlight flex-1">
View activiy
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
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
              <div className="avatar avatar-m  me-2 border border-light-subtle rounded-pill">
                <PhoenixImage src="/assets/img/team/65.webp" alt="" className="rounded-circle " />
              </div>
            </a>
            <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
              <div className="position-relative">
                <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                </div>
                <div className="p-3">
                  <div className="text-end">
                    <button className="btn p-0 me-2">
                      <span className="fa-solid fa-user-plus text-white">                      </span>
                    </button>
                    <button className="btn p-0">
                      <span className="fa-solid fa-ellipsis text-white">                      </span>
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                      <PhoenixImage src="/assets/img/team/65.webp" alt="" className="rounded-circle border border-light-subtle" />
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
                      <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                      </span>
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
                        <span className="fa-solid fa-phone">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                        <span className="fa-solid fa-message">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                        <span className="fa-solid fa-video">                        </span>
                      </button>
                    </div>
                    <button className="btn btn-phoenix-primary">
                      <span className="fa-solid fa-envelope me-2">                      </span>
Send Email
                    </button>
                  </div>
                </div>
                <ul className="nav d-flex flex-column py-3 border-bottom">
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                      </span>                      <span className="text-body-highlight flex-1">
Assigned Projects
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body" data-feather={"pie-chart"}>                      </span>                      <span className="text-body-highlight flex-1">
View activiy
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
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
        </div>
        <h4 className="text-body-highlight fw-semibold mb-0 mt-3 mb-3">
Guests 
        </h4>
        <div className="d-flex">
          <div className="dropdown">
            <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
              <div className="avatar avatar-m  me-2 border border-light-subtle rounded-pill">
                <PhoenixImage src="/assets/img/team/2.webp" alt="" className="rounded-circle " />
              </div>
            </a>
            <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
              <div className="position-relative">
                <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                </div>
                <div className="p-3">
                  <div className="text-end">
                    <button className="btn p-0 me-2">
                      <span className="fa-solid fa-user-plus text-white">                      </span>
                    </button>
                    <button className="btn p-0">
                      <span className="fa-solid fa-ellipsis text-white">                      </span>
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                      <PhoenixImage src="/assets/img/team/2.webp" alt="" className="rounded-circle border border-light-subtle" />
                    </div>
                    <h6 className="text-white">
Tyrion Lannister
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
                      <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                      </span>
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
                        <span className="fa-solid fa-phone">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                        <span className="fa-solid fa-message">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                        <span className="fa-solid fa-video">                        </span>
                      </button>
                    </div>
                    <button className="btn btn-phoenix-primary">
                      <span className="fa-solid fa-envelope me-2">                      </span>
Send Email
                    </button>
                  </div>
                </div>
                <ul className="nav d-flex flex-column py-3 border-bottom">
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                      </span>                      <span className="text-body-highlight flex-1">
Assigned Projects
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body" data-feather={"pie-chart"}>                      </span>                      <span className="text-body-highlight flex-1">
View activiy
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
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
              <div className="avatar avatar-m  me-2 border border-light-subtle rounded-pill">
                <PhoenixImage src="/assets/img/team/3.webp" alt="" className="rounded-circle " />
              </div>
            </a>
            <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
              <div className="position-relative">
                <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                </div>
                <div className="p-3">
                  <div className="text-end">
                    <button className="btn p-0 me-2">
                      <span className="fa-solid fa-user-plus text-white">                      </span>
                    </button>
                    <button className="btn p-0">
                      <span className="fa-solid fa-ellipsis text-white">                      </span>
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                      <PhoenixImage src="/assets/img/team/3.webp" alt="" className="rounded-circle border border-light-subtle" />
                    </div>
                    <h6 className="text-white">
Milind Mikuja
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
                      <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                      </span>
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
                        <span className="fa-solid fa-phone">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                        <span className="fa-solid fa-message">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                        <span className="fa-solid fa-video">                        </span>
                      </button>
                    </div>
                    <button className="btn btn-phoenix-primary">
                      <span className="fa-solid fa-envelope me-2">                      </span>
Send Email
                    </button>
                  </div>
                </div>
                <ul className="nav d-flex flex-column py-3 border-bottom">
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                      </span>                      <span className="text-body-highlight flex-1">
Assigned Projects
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body" data-feather={"pie-chart"}>                      </span>                      <span className="text-body-highlight flex-1">
View activiy
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
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
              <div className="avatar avatar-m  me-2 border border-light-subtle rounded-pill">
                <PhoenixImage src="/assets/img/team/4.webp" alt="" className="rounded-circle " />
              </div>
            </a>
            <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
              <div className="position-relative">
                <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                </div>
                <div className="p-3">
                  <div className="text-end">
                    <button className="btn p-0 me-2">
                      <span className="fa-solid fa-user-plus text-white">                      </span>
                    </button>
                    <button className="btn p-0">
                      <span className="fa-solid fa-ellipsis text-white">                      </span>
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                      <PhoenixImage src="/assets/img/team/4.webp" alt="" className="rounded-circle border border-light-subtle" />
                    </div>
                    <h6 className="text-white">
Stanly Drinkwater
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
                      <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                      </span>
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
                        <span className="fa-solid fa-phone">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                        <span className="fa-solid fa-message">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                        <span className="fa-solid fa-video">                        </span>
                      </button>
                    </div>
                    <button className="btn btn-phoenix-primary">
                      <span className="fa-solid fa-envelope me-2">                      </span>
Send Email
                    </button>
                  </div>
                </div>
                <ul className="nav d-flex flex-column py-3 border-bottom">
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                      </span>                      <span className="text-body-highlight flex-1">
Assigned Projects
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body" data-feather={"pie-chart"}>                      </span>                      <span className="text-body-highlight flex-1">
View activiy
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
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
              <div className="avatar avatar-m  me-2 border border-light-subtle rounded-pill">
                <PhoenixImage src="/assets/img/team/5.webp" alt="" className="rounded-circle " />
              </div>
            </a>
            <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
              <div className="position-relative">
                <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                </div>
                <div className="p-3">
                  <div className="text-end">
                    <button className="btn p-0 me-2">
                      <span className="fa-solid fa-user-plus text-white">                      </span>
                    </button>
                    <button className="btn p-0">
                      <span className="fa-solid fa-ellipsis text-white">                      </span>
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                      <PhoenixImage src="/assets/img/team/5.webp" alt="" className="rounded-circle border border-light-subtle" />
                    </div>
                    <h6 className="text-white">
Josef Stravinsky
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
                      <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                      </span>
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
                        <span className="fa-solid fa-phone">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                        <span className="fa-solid fa-message">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                        <span className="fa-solid fa-video">                        </span>
                      </button>
                    </div>
                    <button className="btn btn-phoenix-primary">
                      <span className="fa-solid fa-envelope me-2">                      </span>
Send Email
                    </button>
                  </div>
                </div>
                <ul className="nav d-flex flex-column py-3 border-bottom">
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                      </span>                      <span className="text-body-highlight flex-1">
Assigned Projects
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                      <span className="me-2 text-body" data-feather={"pie-chart"}>                      </span>                      <span className="text-body-highlight flex-1">
View activiy
                      </span>                      <span className="fa-solid fa-chevron-right fs-11">                      </span>
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
        </div>
        <h4 className="text-body-highlight fw-semibold mb-0 mt-7 mb-3 border-bottom border-translucent pb-3">
Description 
          <span className="fas fa-pencil text-body fs-9 ms-3 cursor-pointer" data-fa-transform={"up-2"}>          </span>
        </h4>
        <p>
Phoenix is a rich and complex symbol that continues to capture the imagination of people across cultures and time periods. Whether seen as a symbol of hope, renewal, or mystery, the Phoenix remains an enduring icon of the human spirit.
        </p>
        <ul className="list-unstyled mb-0">
          <li>
            <a href="#!" className="text-body-highlight fw-semibold text-decoration-none d-flex flex-between-center py-3  border-bottom">
              <span>
Board Setting
              </span>              <span className="fas fa-angle-right fs-9 me-3">              </span>
            </a>
          </li>
          <li>
            <a href="#!" className="text-body-highlight fw-semibold text-decoration-none d-flex flex-between-center py-3  border-bottom">
              <span>
Duplicate Board
              </span>              <span className="fas fa-angle-right fs-9 me-3">              </span>
            </a>
          </li>
          <li>
            <a href="#!" className="text-body-highlight fw-semibold text-decoration-none d-flex flex-between-center py-3  border-bottom">
              <span>
Manage Labels
              </span>              <span className="fas fa-angle-right fs-9 me-3">              </span>
            </a>
          </li>
          <li>
            <a href="#!" className="text-body-highlight fw-semibold text-decoration-none d-flex flex-between-center py-3  border-bottom">
              <span>
Go to Archive
              </span>              <span className="fas fa-angle-right fs-9 me-3">              </span>
            </a>
          </li>
          <li>
            <a href="#!" className="text-body-highlight fw-semibold text-decoration-none d-flex flex-between-center py-3  border-bottom">
              <span>
Print
              </span>              <span className="fas fa-angle-right fs-9 me-3">              </span>
            </a>
          </li>
          <li>
            <a href="#!" className="text-body-highlight fw-semibold text-decoration-none d-flex flex-between-center py-3  border-bottom">
              <span>
Export As
              </span>              <span className="fas fa-angle-right fs-9 me-3">              </span>
            </a>
          </li>
          <li>
            <a href="#!" className="text-body-highlight fw-semibold text-decoration-none d-flex flex-between-center py-3  border-bottom">
              <span>
Integrations
              </span>              <span className="fas fa-angle-right fs-9 me-3">              </span>
            </a>
          </li>
          <li>
            <a href="#!" className="text-body-highlight fw-semibold text-decoration-none d-flex flex-between-center py-3  border-bottom">
              <span>
Privacy Settings
              </span>              <span className="fas fa-angle-right fs-9 me-3">              </span>
            </a>
          </li>
          <li>
            <a href="#!" className="text-body-highlight fw-semibold text-decoration-none d-flex flex-between-center py-3  border-bottom">
              <span>
Automation
              </span>              <span className="fas fa-angle-right fs-9 me-3">              </span>
            </a>
          </li>
          <li>
            <a href="#!" className="text-body-highlight fw-semibold text-decoration-none d-flex flex-between-center py-3 text-danger pb-0 pb-0">
              <span>
Leave Board
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="phoenix-offcanvas-backdrop" data-phoenix-backdrop>    </div>

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
