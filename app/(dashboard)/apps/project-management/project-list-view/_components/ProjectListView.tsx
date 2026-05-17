'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function ProjectListView() {
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
      <div id="projectSummary" data-list={"{\"valueNames\":[\"projectName\",\"assignees\",\"start\",\"deadline\",\"task\",\"projectprogress\",\"status\",\"action\"],\"page\":6,\"pagination\":true}"}>
        <div className="row mb-4 gx-6 gy-3 align-items-center">
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
              <i className="fa-solid fa-plus me-2">              </i>Add new project
            </PhoenixLink>
          </div>
        </div>
        <div className="row g-3 justify-content-between align-items-end mb-4">
          <div className="col-12 col-sm-auto">
            <ul className="nav nav-links mx-n2">
              <li className="nav-item">
                <a href="#" className="nav-link px-2 py-1 active" aria-current="page">
                  <span>
All
                  </span>                  <span className="text-body-tertiary fw-semibold">
(32)
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 py-1">
                  <span>
Ongoing
                  </span>                  <span className="text-body-tertiary fw-semibold">
(14)
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 py-1">
                  <span>
Cancelled
                  </span>                  <span className="text-body-tertiary fw-semibold">
(2)
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 py-1">
                  <span>
Finished
                  </span>                  <span className="text-body-tertiary fw-semibold">
(14)
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 py-1">
                  <span>
Postponed
                  </span>                  <span className="text-body-tertiary fw-semibold">
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
                  <span className="fas fa-search search-box-icon">                  </span>
                </form>
              </div>
              <PhoenixLink href="/apps/project-management/project-list-view" className="btn btn-phoenix-primary px-3 me-1 border-0 text-body"  data-bs-toggle={"tooltip"} data-bs-placement={"top"} data-bs-title={"List view"}>
                <span className="fa-solid fa-list fs-10">                </span>
              </PhoenixLink>
              <PhoenixLink href="/apps/project-management/project-board-view" className="btn btn-phoenix-primary px-3 me-1"  data-bs-toggle={"tooltip"} data-bs-placement={"top"} data-bs-title={"Board view"}>
                <svg width={9} height={9} viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0.5C0 0.223857 0.223858 0 0.5 0H1.83333C2.10948 0 2.33333 0.223858 2.33333 0.5V1.83333C2.33333 2.10948 2.10948 2.33333 1.83333 2.33333H0.5C0.223857 2.33333 0 2.10948 0 1.83333V0.5Z" fill="currentColor">                  </path>
                  <path d="M3.33333 0.5C3.33333 0.223857 3.55719 0 3.83333 0H5.16667C5.44281 0 5.66667 0.223858 5.66667 0.5V1.83333C5.66667 2.10948 5.44281 2.33333 5.16667 2.33333H3.83333C3.55719 2.33333 3.33333 2.10948 3.33333 1.83333V0.5Z" fill="currentColor">                  </path>
                  <path d="M6.66667 0.5C6.66667 0.223857 6.89052 0 7.16667 0H8.5C8.77614 0 9 0.223858 9 0.5V1.83333C9 2.10948 8.77614 2.33333 8.5 2.33333H7.16667C6.89052 2.33333 6.66667 2.10948 6.66667 1.83333V0.5Z" fill="currentColor">                  </path>
                  <path d="M0 3.83333C0 3.55719 0.223858 3.33333 0.5 3.33333H1.83333C2.10948 3.33333 2.33333 3.55719 2.33333 3.83333V5.16667C2.33333 5.44281 2.10948 5.66667 1.83333 5.66667H0.5C0.223857 5.66667 0 5.44281 0 5.16667V3.83333Z" fill="currentColor">                  </path>
                  <path d="M3.33333 3.83333C3.33333 3.55719 3.55719 3.33333 3.83333 3.33333H5.16667C5.44281 3.33333 5.66667 3.55719 5.66667 3.83333V5.16667C5.66667 5.44281 5.44281 5.66667 5.16667 5.66667H3.83333C3.55719 5.66667 3.33333 5.44281 3.33333 5.16667V3.83333Z" fill="currentColor">                  </path>
                  <path d="M6.66667 3.83333C6.66667 3.55719 6.89052 3.33333 7.16667 3.33333H8.5C8.77614 3.33333 9 3.55719 9 3.83333V5.16667C9 5.44281 8.77614 5.66667 8.5 5.66667H7.16667C6.89052 5.66667 6.66667 5.44281 6.66667 5.16667V3.83333Z" fill="currentColor">                  </path>
                  <path d="M0 7.16667C0 6.89052 0.223858 6.66667 0.5 6.66667H1.83333C2.10948 6.66667 2.33333 6.89052 2.33333 7.16667V8.5C2.33333 8.77614 2.10948 9 1.83333 9H0.5C0.223857 9 0 8.77614 0 8.5V7.16667Z" fill="currentColor">                  </path>
                  <path d="M3.33333 7.16667C3.33333 6.89052 3.55719 6.66667 3.83333 6.66667H5.16667C5.44281 6.66667 5.66667 6.89052 5.66667 7.16667V8.5C5.66667 8.77614 5.44281 9 5.16667 9H3.83333C3.55719 9 3.33333 8.77614 3.33333 8.5V7.16667Z" fill="currentColor">                  </path>
                  <path d="M6.66667 7.16667C6.66667 6.89052 6.89052 6.66667 7.16667 6.66667H8.5C8.77614 6.66667 9 6.89052 9 7.16667V8.5C9 8.77614 8.77614 9 8.5 9H7.16667C6.89052 9 6.66667 8.77614 6.66667 8.5V7.16667Z" fill="currentColor">                  </path>
                </svg>
              </PhoenixLink>
              <PhoenixLink href="/apps/project-management/project-card-view" className="btn btn-phoenix-primary px-3"  data-bs-toggle={"tooltip"} data-bs-placement={"top"} data-bs-title={"Card view"}>
                <svg width={9} height={9} viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0.5C0 0.223858 0.223858 0 0.5 0H3.5C3.77614 0 4 0.223858 4 0.5V3.5C4 3.77614 3.77614 4 3.5 4H0.5C0.223858 4 0 3.77614 0 3.5V0.5Z" fill="currentColor">                  </path>
                  <path d="M0 5.5C0 5.22386 0.223858 5 0.5 5H3.5C3.77614 5 4 5.22386 4 5.5V8.5C4 8.77614 3.77614 9 3.5 9H0.5C0.223858 9 0 8.77614 0 8.5V5.5Z" fill="currentColor">                  </path>
                  <path d="M5 0.5C5 0.223858 5.22386 0 5.5 0H8.5C8.77614 0 9 0.223858 9 0.5V3.5C9 3.77614 8.77614 4 8.5 4H5.5C5.22386 4 5 3.77614 5 3.5V0.5Z" fill="currentColor">                  </path>
                  <path d="M5 5.5C5 5.22386 5.22386 5 5.5 5H8.5C8.77614 5 9 5.22386 9 5.5V8.5C9 8.77614 8.77614 9 8.5 9H5.5C5.22386 9 5 8.77614 5 8.5V5.5Z" fill="currentColor">                  </path>
                </svg>
              </PhoenixLink>
            </div>
          </div>
        </div>
        <div className="table-responsive scrollbar">
          <table className="table fs-9 mb-0 border-top border-translucent">
            <thead>
              <tr>
                <th className="sort white-space-nowrap align-middle ps-0" scope="col" data-sort={"projectName"} style={{"width":"30%"} as CSSProperties}>
PROJECT NAME
                </th>
                <th className="sort align-middle ps-3" scope="col" data-sort={"assignees"} style={{"width":"10%"} as CSSProperties}>
ASSIGNEES
                </th>
                <th className="sort align-middle ps-3" scope="col" data-sort={"start"} style={{"width":"10%"} as CSSProperties}>
START DATE
                </th>
                <th className="sort align-middle ps-3" scope="col" data-sort={"deadline"} style={{"width":"15%"} as CSSProperties}>
DEADLINE
                </th>
                <th className="sort align-middle ps-3" scope="col" data-sort={"task"} style={{"width":"12%"} as CSSProperties}>
TASK
                </th>
                <th className="sort align-middle ps-3" scope="col" data-sort={"projectprogress"} style={{"width":"5%"} as CSSProperties}>
PROGRESS
                </th>
                <th className="sort align-middle text-end" scope="col" data-sort={"statuses"} style={{"width":"10%"} as CSSProperties}>
STATUS
                </th>
                <th className="sort align-middle text-end" scope="col" style={{"width":"10%"} as CSSProperties}>                </th>
              </tr>
            </thead>
            <tbody className="list" id="project-list-table-body"><tr className="position-static">
                <td className="align-middle time white-space-nowrap ps-0 projectName py-4">
                  <a href="#" className="fw-bold fs-8">
Project Doughnut Dungeon
                  </a>
                </td>
                <td className="align-middle white-space-nowrap assignees ps-3 py-4">
                  <div className="avatar-group avatar-group-dense">
                    <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                      <div className="avatar avatar-s  rounded-circle">
                        <PhoenixImage src="/assets/img/team/34.webp" alt="" className="rounded-circle " />
                      </div>
                    </a>
                    <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                      <div className="position-relative">
                        <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                        </div>
                        <div className="p-3">
                          <div className="text-end">
                            <button className="btn p-0 me-2">
                              <span className="fa-solid fa-user-plus text-white">                              </span>
                            </button>
                            <button className="btn p-0">
                              <span className="fa-solid fa-ellipsis text-white">                              </span>
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
                              <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                              </span>
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
                                <span className="fa-solid fa-phone">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                <span className="fa-solid fa-message">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                <span className="fa-solid fa-video">                                </span>
                              </button>
                            </div>
                            <button className="btn btn-phoenix-primary">
                              <span className="fa-solid fa-envelope me-2">                              </span>
Send Email
                            </button>
                          </div>
                        </div>
                        <ul className="nav d-flex flex-column py-3 border-bottom">
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                              </span>                              <span className="text-body-highlight flex-1">
Assigned Projects
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body" data-feather={"pie-chart"}>                              </span>                              <span className="text-body-highlight flex-1">
View activiy
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
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
                      <div className="avatar avatar-s  rounded-circle">
                        <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle " />
                      </div>
                    </a>
                    <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                      <div className="position-relative">
                        <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                        </div>
                        <div className="p-3">
                          <div className="text-end">
                            <button className="btn p-0 me-2">
                              <span className="fa-solid fa-user-plus text-white">                              </span>
                            </button>
                            <button className="btn p-0">
                              <span className="fa-solid fa-ellipsis text-white">                              </span>
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
                              <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                              </span>
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
                                <span className="fa-solid fa-phone">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                <span className="fa-solid fa-message">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                <span className="fa-solid fa-video">                                </span>
                              </button>
                            </div>
                            <button className="btn btn-phoenix-primary">
                              <span className="fa-solid fa-envelope me-2">                              </span>
Send Email
                            </button>
                          </div>
                        </div>
                        <ul className="nav d-flex flex-column py-3 border-bottom">
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                              </span>                              <span className="text-body-highlight flex-1">
Assigned Projects
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body" data-feather={"pie-chart"}>                              </span>                              <span className="text-body-highlight flex-1">
View activiy
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
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
                      <div className="avatar avatar-s  rounded-circle">
                        <PhoenixImage src="/assets/img/team/35.webp" alt="" className="rounded-circle " />
                      </div>
                    </a>
                    <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                      <div className="position-relative">
                        <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                        </div>
                        <div className="p-3">
                          <div className="text-end">
                            <button className="btn p-0 me-2">
                              <span className="fa-solid fa-user-plus text-white">                              </span>
                            </button>
                            <button className="btn p-0">
                              <span className="fa-solid fa-ellipsis text-white">                              </span>
                            </button>
                          </div>
                          <div className="text-center">
                            <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                              <PhoenixImage src="/assets/img/team/35.webp" alt="" className="rounded-circle border border-light-subtle" />
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
                              <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                              </span>
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
                                <span className="fa-solid fa-phone">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                <span className="fa-solid fa-message">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                <span className="fa-solid fa-video">                                </span>
                              </button>
                            </div>
                            <button className="btn btn-phoenix-primary">
                              <span className="fa-solid fa-envelope me-2">                              </span>
Send Email
                            </button>
                          </div>
                        </div>
                        <ul className="nav d-flex flex-column py-3 border-bottom">
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                              </span>                              <span className="text-body-highlight flex-1">
Assigned Projects
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body" data-feather={"pie-chart"}>                              </span>                              <span className="text-body-highlight flex-1">
View activiy
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
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
                      <div className="avatar avatar-s  rounded-circle">
                        <PhoenixImage src="/assets/img/team/58.webp" alt="" className="rounded-circle " />
                      </div>
                    </a>
                    <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                      <div className="position-relative">
                        <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                        </div>
                        <div className="p-3">
                          <div className="text-end">
                            <button className="btn p-0 me-2">
                              <span className="fa-solid fa-user-plus text-white">                              </span>
                            </button>
                            <button className="btn p-0">
                              <span className="fa-solid fa-ellipsis text-white">                              </span>
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
                              <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                              </span>
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
                                <span className="fa-solid fa-phone">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                <span className="fa-solid fa-message">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                <span className="fa-solid fa-video">                                </span>
                              </button>
                            </div>
                            <button className="btn btn-phoenix-primary">
                              <span className="fa-solid fa-envelope me-2">                              </span>
Send Email
                            </button>
                          </div>
                        </div>
                        <ul className="nav d-flex flex-column py-3 border-bottom">
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                              </span>                              <span className="text-body-highlight flex-1">
Assigned Projects
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body" data-feather={"pie-chart"}>                              </span>                              <span className="text-body-highlight flex-1">
View activiy
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
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
                    <div className="avatar avatar-s  rounded-circle">
                      <div className="avatar-name rounded-circle ">
                        <span>
+2
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="align-middle white-space-nowrap start ps-3 py-4">
                  <p className="mb-0 fs-9 text-body">
Nov 17, 2020
                  </p>
                </td>
                <td className="align-middle white-space-nowrap deadline ps-3 py-4">
                  <p className="mb-0 fs-9 text-body">
May 21, 2028
                  </p>
                </td>
                <td className="align-middle white-space-nowrap task ps-3 py-4">
                  <p className="fw-bo text-body fs-9 mb-0">
287
                  </p>
                </td>
                <td className="align-middle white-space-nowrap ps-3 projectprogress">
                  <p className="text-body-secondary fs-10 mb-0">
145 / 145
                  </p>
                  <div className="progress" style={{"height":"3px"} as CSSProperties}>
                    <div className="progress-bar bg-success" style={{"width":"100%"} as CSSProperties} role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>                    </div>
                  </div>
                </td>
                <td className="align-middle white-space-nowrap text-end statuses">
                  <span className="badge badge-phoenix fs-10 badge-phoenix-success">
completed
                  </span>
                </td>
                <td className="align-middle text-end white-space-nowrap pe-0 action">
                  <div className="btn-reveal-trigger position-static">
                    <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                      <span className="fas fa-ellipsis-h fs-10">                      </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a href="#!" className="dropdown-item">
View
                      </a>
                      <a href="#!" className="dropdown-item">
Export
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#!" className="dropdown-item text-danger">
Remove
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="position-static"><td className="align-middle time white-space-nowrap ps-0 projectName py-4">
                  <a href="#" className="fw-bold fs-8">
Water resistant mosquito killer gun
                  </a>
                </td>
                <td className="align-middle white-space-nowrap assignees ps-3 py-4">
                  <div className="avatar-group avatar-group-dense">
                    <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                      <div className="avatar avatar-s  rounded-circle">
                        <PhoenixImage src="/assets/img/team/1.webp" alt="" className="rounded-circle " />
                      </div>
                    </a>
                    <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                      <div className="position-relative">
                        <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                        </div>
                        <div className="p-3">
                          <div className="text-end">
                            <button className="btn p-0 me-2">
                              <span className="fa-solid fa-user-plus text-white">                              </span>
                            </button>
                            <button className="btn p-0">
                              <span className="fa-solid fa-ellipsis text-white">                              </span>
                            </button>
                          </div>
                          <div className="text-center">
                            <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                              <PhoenixImage src="/assets/img/team/1.webp" alt="" className="rounded-circle border border-light-subtle" />
                            </div>
                            <h6 className="text-white">
Ricky Antony
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
                              <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                              </span>
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
                                <span className="fa-solid fa-phone">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                <span className="fa-solid fa-message">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                <span className="fa-solid fa-video">                                </span>
                              </button>
                            </div>
                            <button className="btn btn-phoenix-primary">
                              <span className="fa-solid fa-envelope me-2">                              </span>
Send Email
                            </button>
                          </div>
                        </div>
                        <ul className="nav d-flex flex-column py-3 border-bottom">
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                              </span>                              <span className="text-body-highlight flex-1">
Assigned Projects
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body" data-feather={"pie-chart"}>                              </span>                              <span className="text-body-highlight flex-1">
View activiy
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
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
                      <div className="avatar avatar-s  rounded-circle">
                        <PhoenixImage src="/assets/img/team/2.webp" alt="" className="rounded-circle " />
                      </div>
                    </a>
                    <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                      <div className="position-relative">
                        <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                        </div>
                        <div className="p-3">
                          <div className="text-end">
                            <button className="btn p-0 me-2">
                              <span className="fa-solid fa-user-plus text-white">                              </span>
                            </button>
                            <button className="btn p-0">
                              <span className="fa-solid fa-ellipsis text-white">                              </span>
                            </button>
                          </div>
                          <div className="text-center">
                            <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                              <PhoenixImage src="/assets/img/team/2.webp" alt="" className="rounded-circle border border-light-subtle" />
                            </div>
                            <h6 className="text-white">
Raymond Mims
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
                              <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                              </span>
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
                                <span className="fa-solid fa-phone">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                <span className="fa-solid fa-message">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                <span className="fa-solid fa-video">                                </span>
                              </button>
                            </div>
                            <button className="btn btn-phoenix-primary">
                              <span className="fa-solid fa-envelope me-2">                              </span>
Send Email
                            </button>
                          </div>
                        </div>
                        <ul className="nav d-flex flex-column py-3 border-bottom">
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                              </span>                              <span className="text-body-highlight flex-1">
Assigned Projects
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body" data-feather={"pie-chart"}>                              </span>                              <span className="text-body-highlight flex-1">
View activiy
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
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
                </td>
                <td className="align-middle white-space-nowrap start ps-3 py-4">
                  <p className="mb-0 fs-9 text-body">
Mar 08, 2021
                  </p>
                </td>
                <td className="align-middle white-space-nowrap deadline ps-3 py-4">
                  <p className="mb-0 fs-9 text-body">
Sep 15, 2022
                  </p>
                </td>
                <td className="align-middle white-space-nowrap task ps-3 py-4">
                  <p className="fw-bo text-body fs-9 mb-0">
125
                  </p>
                </td>
                <td className="align-middle white-space-nowrap ps-3 projectprogress">
                  <p className="text-body-secondary fs-10 mb-0">
148 / 223
                  </p>
                  <div className="progress" style={{"height":"3px"} as CSSProperties}>
                    <div className="progress-bar bg-success" style={{"width":"66.3677130044843%"} as CSSProperties} role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>                    </div>
                  </div>
                </td>
                <td className="align-middle white-space-nowrap text-end statuses">
                  <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
inactive
                  </span>
                </td>
                <td className="align-middle text-end white-space-nowrap pe-0 action">
                  <div className="btn-reveal-trigger position-static">
                    <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                      <span className="fas fa-ellipsis-h fs-10">                      </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a href="#!" className="dropdown-item">
View
                      </a>
                      <a href="#!" className="dropdown-item">
Export
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#!" className="dropdown-item text-danger">
Remove
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="position-static"><td className="align-middle time white-space-nowrap ps-0 projectName py-4">
                  <a href="#" className="fw-bold fs-8">
Execution of Micky the foul mouse
                  </a>
                </td>
                <td className="align-middle white-space-nowrap assignees ps-3 py-4">
                  <div className="avatar-group avatar-group-dense">
                    <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                      <div className="avatar avatar-s  rounded-circle">
                        <PhoenixImage src="/assets/img/team/20.webp" alt="" className="rounded-circle " />
                      </div>
                    </a>
                    <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                      <div className="position-relative">
                        <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                        </div>
                        <div className="p-3">
                          <div className="text-end">
                            <button className="btn p-0 me-2">
                              <span className="fa-solid fa-user-plus text-white">                              </span>
                            </button>
                            <button className="btn p-0">
                              <span className="fa-solid fa-ellipsis text-white">                              </span>
                            </button>
                          </div>
                          <div className="text-center">
                            <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                              <PhoenixImage src="/assets/img/team/20.webp" alt="" className="rounded-circle border border-light-subtle" />
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
                              <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                              </span>
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
                                <span className="fa-solid fa-phone">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                <span className="fa-solid fa-message">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                <span className="fa-solid fa-video">                                </span>
                              </button>
                            </div>
                            <button className="btn btn-phoenix-primary">
                              <span className="fa-solid fa-envelope me-2">                              </span>
Send Email
                            </button>
                          </div>
                        </div>
                        <ul className="nav d-flex flex-column py-3 border-bottom">
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                              </span>                              <span className="text-body-highlight flex-1">
Assigned Projects
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body" data-feather={"pie-chart"}>                              </span>                              <span className="text-body-highlight flex-1">
View activiy
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
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
                      <div className="avatar avatar-s">
                        <div className="avatar-name rounded-circle">
                          <span>
R
                          </span>
                        </div>
                      </div>
                    </a>
                    <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                      <div className="position-relative">
                        <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                        </div>
                        <div className="p-3">
                          <div className="text-end">
                            <button className="btn p-0 me-2">
                              <span className="fa-solid fa-user-plus text-white">                              </span>
                            </button>
                            <button className="btn p-0">
                              <span className="fa-solid fa-ellipsis text-white">                              </span>
                            </button>
                          </div>
                          <div className="text-center">
                            <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                              <div className="avatar-name rounded-circle">
                                <span>
R
                                </span>
                              </div>
                            </div>
                            <h6 className="text-white">
Raymond Mims
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
                              <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                              </span>
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
                                <span className="fa-solid fa-phone">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                <span className="fa-solid fa-message">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                <span className="fa-solid fa-video">                                </span>
                              </button>
                            </div>
                            <button className="btn btn-phoenix-primary">
                              <span className="fa-solid fa-envelope me-2">                              </span>
Send Email
                            </button>
                          </div>
                        </div>
                        <ul className="nav d-flex flex-column py-3 border-bottom">
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                              </span>                              <span className="text-body-highlight flex-1">
Assigned Projects
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body" data-feather={"pie-chart"}>                              </span>                              <span className="text-body-highlight flex-1">
View activiy
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
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
                      <div className="avatar avatar-s  rounded-circle">
                        <PhoenixImage src="/assets/img/team/35.webp" alt="" className="rounded-circle " />
                      </div>
                    </a>
                    <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                      <div className="position-relative">
                        <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                        </div>
                        <div className="p-3">
                          <div className="text-end">
                            <button className="btn p-0 me-2">
                              <span className="fa-solid fa-user-plus text-white">                              </span>
                            </button>
                            <button className="btn p-0">
                              <span className="fa-solid fa-ellipsis text-white">                              </span>
                            </button>
                          </div>
                          <div className="text-center">
                            <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                              <PhoenixImage src="/assets/img/team/35.webp" alt="" className="rounded-circle border border-light-subtle" />
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
                              <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                              </span>
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
                                <span className="fa-solid fa-phone">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                <span className="fa-solid fa-message">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                <span className="fa-solid fa-video">                                </span>
                              </button>
                            </div>
                            <button className="btn btn-phoenix-primary">
                              <span className="fa-solid fa-envelope me-2">                              </span>
Send Email
                            </button>
                          </div>
                        </div>
                        <ul className="nav d-flex flex-column py-3 border-bottom">
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                              </span>                              <span className="text-body-highlight flex-1">
Assigned Projects
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body" data-feather={"pie-chart"}>                              </span>                              <span className="text-body-highlight flex-1">
View activiy
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
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
                      <div className="avatar avatar-s  rounded-circle">
                        <PhoenixImage src="/assets/img/team/58.webp" alt="" className="rounded-circle " />
                      </div>
                    </a>
                    <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                      <div className="position-relative">
                        <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                        </div>
                        <div className="p-3">
                          <div className="text-end">
                            <button className="btn p-0 me-2">
                              <span className="fa-solid fa-user-plus text-white">                              </span>
                            </button>
                            <button className="btn p-0">
                              <span className="fa-solid fa-ellipsis text-white">                              </span>
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
                              <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                              </span>
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
                                <span className="fa-solid fa-phone">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                <span className="fa-solid fa-message">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                <span className="fa-solid fa-video">                                </span>
                              </button>
                            </div>
                            <button className="btn btn-phoenix-primary">
                              <span className="fa-solid fa-envelope me-2">                              </span>
Send Email
                            </button>
                          </div>
                        </div>
                        <ul className="nav d-flex flex-column py-3 border-bottom">
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                              </span>                              <span className="text-body-highlight flex-1">
Assigned Projects
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body" data-feather={"pie-chart"}>                              </span>                              <span className="text-body-highlight flex-1">
View activiy
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
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
                </td>
                <td className="align-middle white-space-nowrap start ps-3 py-4">
                  <p className="mb-0 fs-9 text-body">
Nov 17, 2020
                  </p>
                </td>
                <td className="align-middle white-space-nowrap deadline ps-3 py-4">
                  <p className="mb-0 fs-9 text-body">
Sep 23, 2026
                  </p>
                </td>
                <td className="align-middle white-space-nowrap task ps-3 py-4">
                  <p className="fw-bo text-body fs-9 mb-0">
72
                  </p>
                </td>
                <td className="align-middle white-space-nowrap ps-3 projectprogress">
                  <p className="text-body-secondary fs-10 mb-0">
277 / 539
                  </p>
                  <div className="progress" style={{"height":"3px"} as CSSProperties}>
                    <div className="progress-bar bg-success" style={{"width":"51.39146567717996%"} as CSSProperties} role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>                    </div>
                  </div>
                </td>
                <td className="align-middle white-space-nowrap text-end statuses">
                  <span className="badge badge-phoenix fs-10 badge-phoenix-primary">
ongoing
                  </span>
                </td>
                <td className="align-middle text-end white-space-nowrap pe-0 action">
                  <div className="btn-reveal-trigger position-static">
                    <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                      <span className="fas fa-ellipsis-h fs-10">                      </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a href="#!" className="dropdown-item">
View
                      </a>
                      <a href="#!" className="dropdown-item">
Export
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#!" className="dropdown-item text-danger">
Remove
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="position-static"><td className="align-middle time white-space-nowrap ps-0 projectName py-4">
                  <a href="#" className="fw-bold fs-8">
Harnessing stupidity from Jerry
                  </a>
                </td>
                <td className="align-middle white-space-nowrap assignees ps-3 py-4">
                  <div className="avatar-group avatar-group-dense">
                    <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                      <div className="avatar avatar-s  rounded-circle">
                        <PhoenixImage src="/assets/img/team/11.webp" alt="" className="rounded-circle " />
                      </div>
                    </a>
                    <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                      <div className="position-relative">
                        <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                        </div>
                        <div className="p-3">
                          <div className="text-end">
                            <button className="btn p-0 me-2">
                              <span className="fa-solid fa-user-plus text-white">                              </span>
                            </button>
                            <button className="btn p-0">
                              <span className="fa-solid fa-ellipsis text-white">                              </span>
                            </button>
                          </div>
                          <div className="text-center">
                            <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                              <PhoenixImage src="/assets/img/team/11.webp" alt="" className="rounded-circle border border-light-subtle" />
                            </div>
                            <h6 className="text-white">
Roy Anderson
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
                              <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                              </span>
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
                                <span className="fa-solid fa-phone">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                <span className="fa-solid fa-message">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                <span className="fa-solid fa-video">                                </span>
                              </button>
                            </div>
                            <button className="btn btn-phoenix-primary">
                              <span className="fa-solid fa-envelope me-2">                              </span>
Send Email
                            </button>
                          </div>
                        </div>
                        <ul className="nav d-flex flex-column py-3 border-bottom">
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                              </span>                              <span className="text-body-highlight flex-1">
Assigned Projects
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body" data-feather={"pie-chart"}>                              </span>                              <span className="text-body-highlight flex-1">
View activiy
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
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
                      <div className="avatar avatar-s  rounded-circle">
                        <PhoenixImage src="/assets/img/team/12.webp" alt="" className="rounded-circle " />
                      </div>
                    </a>
                    <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                      <div className="position-relative">
                        <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                        </div>
                        <div className="p-3">
                          <div className="text-end">
                            <button className="btn p-0 me-2">
                              <span className="fa-solid fa-user-plus text-white">                              </span>
                            </button>
                            <button className="btn p-0">
                              <span className="fa-solid fa-ellipsis text-white">                              </span>
                            </button>
                          </div>
                          <div className="text-center">
                            <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                              <PhoenixImage src="/assets/img/team/12.webp" alt="" className="rounded-circle border border-light-subtle" />
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
                              <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                              </span>
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
                                <span className="fa-solid fa-phone">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                <span className="fa-solid fa-message">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                <span className="fa-solid fa-video">                                </span>
                              </button>
                            </div>
                            <button className="btn btn-phoenix-primary">
                              <span className="fa-solid fa-envelope me-2">                              </span>
Send Email
                            </button>
                          </div>
                        </div>
                        <ul className="nav d-flex flex-column py-3 border-bottom">
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                              </span>                              <span className="text-body-highlight flex-1">
Assigned Projects
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body" data-feather={"pie-chart"}>                              </span>                              <span className="text-body-highlight flex-1">
View activiy
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
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
                      <div className="avatar avatar-s  rounded-circle">
                        <PhoenixImage src="/assets/img/team/13.webp" alt="" className="rounded-circle " />
                      </div>
                    </a>
                    <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                      <div className="position-relative">
                        <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                        </div>
                        <div className="p-3">
                          <div className="text-end">
                            <button className="btn p-0 me-2">
                              <span className="fa-solid fa-user-plus text-white">                              </span>
                            </button>
                            <button className="btn p-0">
                              <span className="fa-solid fa-ellipsis text-white">                              </span>
                            </button>
                          </div>
                          <div className="text-center">
                            <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                              <PhoenixImage src="/assets/img/team/13.webp" alt="" className="rounded-circle border border-light-subtle" />
                            </div>
                            <h6 className="text-white">
Raymond Mims
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
                              <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                              </span>
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
                                <span className="fa-solid fa-phone">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                <span className="fa-solid fa-message">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                <span className="fa-solid fa-video">                                </span>
                              </button>
                            </div>
                            <button className="btn btn-phoenix-primary">
                              <span className="fa-solid fa-envelope me-2">                              </span>
Send Email
                            </button>
                          </div>
                        </div>
                        <ul className="nav d-flex flex-column py-3 border-bottom">
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                              </span>                              <span className="text-body-highlight flex-1">
Assigned Projects
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body" data-feather={"pie-chart"}>                              </span>                              <span className="text-body-highlight flex-1">
View activiy
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
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
                </td>
                <td className="align-middle white-space-nowrap start ps-3 py-4">
                  <p className="mb-0 fs-9 text-body">
Jan 01, 2016
                  </p>
                </td>
                <td className="align-middle white-space-nowrap deadline ps-3 py-4">
                  <p className="mb-0 fs-9 text-body">
Apr 04, 2022
                  </p>
                </td>
                <td className="align-middle white-space-nowrap task ps-3 py-4">
                  <p className="fw-bo text-body fs-9 mb-0">
91
                  </p>
                </td>
                <td className="align-middle white-space-nowrap ps-3 projectprogress">
                  <p className="text-body-secondary fs-10 mb-0">
169 / 394
                  </p>
                  <div className="progress" style={{"height":"3px"} as CSSProperties}>
                    <div className="progress-bar bg-success" style={{"width":"42.89340101522843%"} as CSSProperties} role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>                    </div>
                  </div>
                </td>
                <td className="align-middle white-space-nowrap text-end statuses">
                  <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
Critical
                  </span>
                </td>
                <td className="align-middle text-end white-space-nowrap pe-0 action">
                  <div className="btn-reveal-trigger position-static">
                    <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                      <span className="fas fa-ellipsis-h fs-10">                      </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a href="#!" className="dropdown-item">
View
                      </a>
                      <a href="#!" className="dropdown-item">
Export
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#!" className="dropdown-item text-danger">
Remove
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="position-static"><td className="align-middle time white-space-nowrap ps-0 projectName py-4">
                  <a href="#" className="fw-bold fs-8">
Making the Butterflies shoot each other dead
                  </a>
                </td>
                <td className="align-middle white-space-nowrap assignees ps-3 py-4">
                  <div className="avatar-group avatar-group-dense">
                    <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                      <div className="avatar avatar-s  rounded-circle">
                        <PhoenixImage src="/assets/img/team/14.webp" alt="" className="rounded-circle " />
                      </div>
                    </a>
                    <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                      <div className="position-relative">
                        <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                        </div>
                        <div className="p-3">
                          <div className="text-end">
                            <button className="btn p-0 me-2">
                              <span className="fa-solid fa-user-plus text-white">                              </span>
                            </button>
                            <button className="btn p-0">
                              <span className="fa-solid fa-ellipsis text-white">                              </span>
                            </button>
                          </div>
                          <div className="text-center">
                            <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                              <PhoenixImage src="/assets/img/team/14.webp" alt="" className="rounded-circle border border-light-subtle" />
                            </div>
                            <h6 className="text-white">
Martina scorcese
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
                              <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                              </span>
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
                                <span className="fa-solid fa-phone">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                <span className="fa-solid fa-message">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                <span className="fa-solid fa-video">                                </span>
                              </button>
                            </div>
                            <button className="btn btn-phoenix-primary">
                              <span className="fa-solid fa-envelope me-2">                              </span>
Send Email
                            </button>
                          </div>
                        </div>
                        <ul className="nav d-flex flex-column py-3 border-bottom">
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                              </span>                              <span className="text-body-highlight flex-1">
Assigned Projects
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body" data-feather={"pie-chart"}>                              </span>                              <span className="text-body-highlight flex-1">
View activiy
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
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
                      <div className="avatar avatar-s  rounded-circle">
                        <PhoenixImage src="/assets/img/team/16.webp" alt="" className="rounded-circle " />
                      </div>
                    </a>
                    <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                      <div className="position-relative">
                        <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                        </div>
                        <div className="p-3">
                          <div className="text-end">
                            <button className="btn p-0 me-2">
                              <span className="fa-solid fa-user-plus text-white">                              </span>
                            </button>
                            <button className="btn p-0">
                              <span className="fa-solid fa-ellipsis text-white">                              </span>
                            </button>
                          </div>
                          <div className="text-center">
                            <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                              <PhoenixImage src="/assets/img/team/16.webp" alt="" className="rounded-circle border border-light-subtle" />
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
                              <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                              </span>
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
                                <span className="fa-solid fa-phone">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                <span className="fa-solid fa-message">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                <span className="fa-solid fa-video">                                </span>
                              </button>
                            </div>
                            <button className="btn btn-phoenix-primary">
                              <span className="fa-solid fa-envelope me-2">                              </span>
Send Email
                            </button>
                          </div>
                        </div>
                        <ul className="nav d-flex flex-column py-3 border-bottom">
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                              </span>                              <span className="text-body-highlight flex-1">
Assigned Projects
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body" data-feather={"pie-chart"}>                              </span>                              <span className="text-body-highlight flex-1">
View activiy
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
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
                      <div className="avatar avatar-s  rounded-circle">
                        <PhoenixImage src="/assets/img/team/18.webp" alt="" className="rounded-circle " />
                      </div>
                    </a>
                    <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                      <div className="position-relative">
                        <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                        </div>
                        <div className="p-3">
                          <div className="text-end">
                            <button className="btn p-0 me-2">
                              <span className="fa-solid fa-user-plus text-white">                              </span>
                            </button>
                            <button className="btn p-0">
                              <span className="fa-solid fa-ellipsis text-white">                              </span>
                            </button>
                          </div>
                          <div className="text-center">
                            <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                              <PhoenixImage src="/assets/img/team/18.webp" alt="" className="rounded-circle border border-light-subtle" />
                            </div>
                            <h6 className="text-white">
Martina scorcese
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
                              <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                              </span>
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
                                <span className="fa-solid fa-phone">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                <span className="fa-solid fa-message">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                <span className="fa-solid fa-video">                                </span>
                              </button>
                            </div>
                            <button className="btn btn-phoenix-primary">
                              <span className="fa-solid fa-envelope me-2">                              </span>
Send Email
                            </button>
                          </div>
                        </div>
                        <ul className="nav d-flex flex-column py-3 border-bottom">
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                              </span>                              <span className="text-body-highlight flex-1">
Assigned Projects
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body" data-feather={"pie-chart"}>                              </span>                              <span className="text-body-highlight flex-1">
View activiy
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
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
                      <div className="avatar avatar-s  rounded-circle">
                        <PhoenixImage src="/assets/img/team/20.webp" alt="" className="rounded-circle " />
                      </div>
                    </a>
                    <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                      <div className="position-relative">
                        <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                        </div>
                        <div className="p-3">
                          <div className="text-end">
                            <button className="btn p-0 me-2">
                              <span className="fa-solid fa-user-plus text-white">                              </span>
                            </button>
                            <button className="btn p-0">
                              <span className="fa-solid fa-ellipsis text-white">                              </span>
                            </button>
                          </div>
                          <div className="text-center">
                            <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                              <PhoenixImage src="/assets/img/team/20.webp" alt="" className="rounded-circle border border-light-subtle" />
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
                              <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                              </span>
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
                                <span className="fa-solid fa-phone">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                <span className="fa-solid fa-message">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                <span className="fa-solid fa-video">                                </span>
                              </button>
                            </div>
                            <button className="btn btn-phoenix-primary">
                              <span className="fa-solid fa-envelope me-2">                              </span>
Send Email
                            </button>
                          </div>
                        </div>
                        <ul className="nav d-flex flex-column py-3 border-bottom">
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                              </span>                              <span className="text-body-highlight flex-1">
Assigned Projects
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body" data-feather={"pie-chart"}>                              </span>                              <span className="text-body-highlight flex-1">
View activiy
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
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
                    <div className="avatar avatar-s  rounded-circle">
                      <div className="avatar-name rounded-circle ">
                        <span>
+3
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="align-middle white-space-nowrap start ps-3 py-4">
                  <p className="mb-0 fs-9 text-body">
Dec 24, 2019
                  </p>
                </td>
                <td className="align-middle white-space-nowrap deadline ps-3 py-4">
                  <p className="mb-0 fs-9 text-body">
Jan 15, 2024
                  </p>
                </td>
                <td className="align-middle white-space-nowrap task ps-3 py-4">
                  <p className="fw-bo text-body fs-9 mb-0">
134
                  </p>
                </td>
                <td className="align-middle white-space-nowrap ps-3 projectprogress">
                  <p className="text-body-secondary fs-10 mb-0">
600 / 600
                  </p>
                  <div className="progress" style={{"height":"3px"} as CSSProperties}>
                    <div className="progress-bar bg-success" style={{"width":"100%"} as CSSProperties} role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>                    </div>
                  </div>
                </td>
                <td className="align-middle white-space-nowrap text-end statuses">
                  <span className="badge badge-phoenix fs-10 badge-phoenix-primary">
ongoing
                  </span>
                </td>
                <td className="align-middle text-end white-space-nowrap pe-0 action">
                  <div className="btn-reveal-trigger position-static">
                    <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                      <span className="fas fa-ellipsis-h fs-10">                      </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a href="#!" className="dropdown-item">
View
                      </a>
                      <a href="#!" className="dropdown-item">
Export
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#!" className="dropdown-item text-danger">
Remove
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="position-static"><td className="align-middle time white-space-nowrap ps-0 projectName py-4">
                  <a href="#" className="fw-bold fs-8">
The chewing gum attack
                  </a>
                </td>
                <td className="align-middle white-space-nowrap assignees ps-3 py-4">
                  <div className="avatar-group avatar-group-dense">
                    <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                      <div className="avatar avatar-s  rounded-circle">
                        <PhoenixImage src="/assets/img/team/31.webp" alt="" className="rounded-circle " />
                      </div>
                    </a>
                    <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                      <div className="position-relative">
                        <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                        </div>
                        <div className="p-3">
                          <div className="text-end">
                            <button className="btn p-0 me-2">
                              <span className="fa-solid fa-user-plus text-white">                              </span>
                            </button>
                            <button className="btn p-0">
                              <span className="fa-solid fa-ellipsis text-white">                              </span>
                            </button>
                          </div>
                          <div className="text-center">
                            <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                              <PhoenixImage src="/assets/img/team/31.webp" alt="" className="rounded-circle border border-light-subtle" />
                            </div>
                            <h6 className="text-white">
Martina scorcese
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
                              <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                              </span>
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
                                <span className="fa-solid fa-phone">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                <span className="fa-solid fa-message">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                <span className="fa-solid fa-video">                                </span>
                              </button>
                            </div>
                            <button className="btn btn-phoenix-primary">
                              <span className="fa-solid fa-envelope me-2">                              </span>
Send Email
                            </button>
                          </div>
                        </div>
                        <ul className="nav d-flex flex-column py-3 border-bottom">
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                              </span>                              <span className="text-body-highlight flex-1">
Assigned Projects
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body" data-feather={"pie-chart"}>                              </span>                              <span className="text-body-highlight flex-1">
View activiy
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
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
                      <div className="avatar avatar-s  rounded-circle">
                        <PhoenixImage src="/assets/img/team/33.webp" alt="" className="rounded-circle " />
                      </div>
                    </a>
                    <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                      <div className="position-relative">
                        <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                        </div>
                        <div className="p-3">
                          <div className="text-end">
                            <button className="btn p-0 me-2">
                              <span className="fa-solid fa-user-plus text-white">                              </span>
                            </button>
                            <button className="btn p-0">
                              <span className="fa-solid fa-ellipsis text-white">                              </span>
                            </button>
                          </div>
                          <div className="text-center">
                            <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                              <PhoenixImage src="/assets/img/team/33.webp" alt="" className="rounded-circle border border-light-subtle" />
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
                              <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                              </span>
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
                                <span className="fa-solid fa-phone">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                <span className="fa-solid fa-message">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                <span className="fa-solid fa-video">                                </span>
                              </button>
                            </div>
                            <button className="btn btn-phoenix-primary">
                              <span className="fa-solid fa-envelope me-2">                              </span>
Send Email
                            </button>
                          </div>
                        </div>
                        <ul className="nav d-flex flex-column py-3 border-bottom">
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                              </span>                              <span className="text-body-highlight flex-1">
Assigned Projects
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body" data-feather={"pie-chart"}>                              </span>                              <span className="text-body-highlight flex-1">
View activiy
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
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
                </td>
                <td className="align-middle white-space-nowrap start ps-3 py-4">
                  <p className="mb-0 fs-9 text-body">
Aug 4, 2018
                  </p>
                </td>
                <td className="align-middle white-space-nowrap deadline ps-3 py-4">
                  <p className="mb-0 fs-9 text-body">
Oct 22, 2023
                  </p>
                </td>
                <td className="align-middle white-space-nowrap task ps-3 py-4">
                  <p className="fw-bo text-body fs-9 mb-0">
24
                  </p>
                </td>
                <td className="align-middle white-space-nowrap ps-3 projectprogress">
                  <p className="text-body-secondary fs-10 mb-0">
600 / 600
                  </p>
                  <div className="progress" style={{"height":"3px"} as CSSProperties}>
                    <div className="progress-bar bg-success" style={{"width":"100%"} as CSSProperties} role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>                    </div>
                  </div>
                </td>
                <td className="align-middle white-space-nowrap text-end statuses">
                  <span className="badge badge-phoenix fs-10 badge-phoenix-secondary">
Cancelled
                  </span>
                </td>
                <td className="align-middle text-end white-space-nowrap pe-0 action">
                  <div className="btn-reveal-trigger position-static">
                    <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                      <span className="fas fa-ellipsis-h fs-10">                      </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a href="#!" className="dropdown-item">
View
                      </a>
                      <a href="#!" className="dropdown-item">
Export
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#!" className="dropdown-item text-danger">
Remove
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="position-static"><td className="align-middle time white-space-nowrap ps-0 projectName py-4">
                  <a href="#" className="fw-bold fs-8">
Olga Dies Dreaming by Xóchitl González
                  </a>
                </td>
                <td className="align-middle white-space-nowrap assignees ps-3 py-4">
                  <div className="avatar-group avatar-group-dense">
                    <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                      <div className="avatar avatar-s  rounded-circle">
                        <PhoenixImage src="/assets/img/team/11.webp" alt="" className="rounded-circle " />
                      </div>
                    </a>
                    <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                      <div className="position-relative">
                        <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                        </div>
                        <div className="p-3">
                          <div className="text-end">
                            <button className="btn p-0 me-2">
                              <span className="fa-solid fa-user-plus text-white">                              </span>
                            </button>
                            <button className="btn p-0">
                              <span className="fa-solid fa-ellipsis text-white">                              </span>
                            </button>
                          </div>
                          <div className="text-center">
                            <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                              <PhoenixImage src="/assets/img/team/11.webp" alt="" className="rounded-circle border border-light-subtle" />
                            </div>
                            <h6 className="text-white">
Roy Anderson
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
                              <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                              </span>
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
                                <span className="fa-solid fa-phone">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                <span className="fa-solid fa-message">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                <span className="fa-solid fa-video">                                </span>
                              </button>
                            </div>
                            <button className="btn btn-phoenix-primary">
                              <span className="fa-solid fa-envelope me-2">                              </span>
Send Email
                            </button>
                          </div>
                        </div>
                        <ul className="nav d-flex flex-column py-3 border-bottom">
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                              </span>                              <span className="text-body-highlight flex-1">
Assigned Projects
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body" data-feather={"pie-chart"}>                              </span>                              <span className="text-body-highlight flex-1">
View activiy
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
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
                      <div className="avatar avatar-s  rounded-circle">
                        <PhoenixImage src="/assets/img/team/12.webp" alt="" className="rounded-circle " />
                      </div>
                    </a>
                    <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                      <div className="position-relative">
                        <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                        </div>
                        <div className="p-3">
                          <div className="text-end">
                            <button className="btn p-0 me-2">
                              <span className="fa-solid fa-user-plus text-white">                              </span>
                            </button>
                            <button className="btn p-0">
                              <span className="fa-solid fa-ellipsis text-white">                              </span>
                            </button>
                          </div>
                          <div className="text-center">
                            <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                              <PhoenixImage src="/assets/img/team/12.webp" alt="" className="rounded-circle border border-light-subtle" />
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
                              <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                              </span>
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
                                <span className="fa-solid fa-phone">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                <span className="fa-solid fa-message">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                <span className="fa-solid fa-video">                                </span>
                              </button>
                            </div>
                            <button className="btn btn-phoenix-primary">
                              <span className="fa-solid fa-envelope me-2">                              </span>
Send Email
                            </button>
                          </div>
                        </div>
                        <ul className="nav d-flex flex-column py-3 border-bottom">
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                              </span>                              <span className="text-body-highlight flex-1">
Assigned Projects
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body" data-feather={"pie-chart"}>                              </span>                              <span className="text-body-highlight flex-1">
View activiy
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
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
                      <div className="avatar avatar-s  rounded-circle">
                        <PhoenixImage src="/assets/img/team/13.webp" alt="" className="rounded-circle " />
                      </div>
                    </a>
                    <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                      <div className="position-relative">
                        <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                        </div>
                        <div className="p-3">
                          <div className="text-end">
                            <button className="btn p-0 me-2">
                              <span className="fa-solid fa-user-plus text-white">                              </span>
                            </button>
                            <button className="btn p-0">
                              <span className="fa-solid fa-ellipsis text-white">                              </span>
                            </button>
                          </div>
                          <div className="text-center">
                            <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                              <PhoenixImage src="/assets/img/team/13.webp" alt="" className="rounded-circle border border-light-subtle" />
                            </div>
                            <h6 className="text-white">
Raymond Mims
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
                              <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                              </span>
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
                                <span className="fa-solid fa-phone">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                <span className="fa-solid fa-message">                                </span>
                              </button>
                              <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                <span className="fa-solid fa-video">                                </span>
                              </button>
                            </div>
                            <button className="btn btn-phoenix-primary">
                              <span className="fa-solid fa-envelope me-2">                              </span>
Send Email
                            </button>
                          </div>
                        </div>
                        <ul className="nav d-flex flex-column py-3 border-bottom">
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                              </span>                              <span className="text-body-highlight flex-1">
Assigned Projects
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                              <span className="me-2 text-body" data-feather={"pie-chart"}>                              </span>                              <span className="text-body-highlight flex-1">
View activiy
                              </span>                              <span className="fa-solid fa-chevron-right fs-11">                              </span>
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
                </td>
                <td className="align-middle white-space-nowrap start ps-3 py-4">
                  <p className="mb-0 fs-9 text-body">
Jan 01, 2018
                  </p>
                </td>
                <td className="align-middle white-space-nowrap deadline ps-3 py-4">
                  <p className="mb-0 fs-9 text-body">
Jan 04, 2022
                  </p>
                </td>
                <td className="align-middle white-space-nowrap task ps-3 py-4">
                  <p className="fw-bo text-body fs-9 mb-0">
80
                  </p>
                </td>
                <td className="align-middle white-space-nowrap ps-3 projectprogress">
                  <p className="text-body-secondary fs-10 mb-0">
150 / 294
                  </p>
                  <div className="progress" style={{"height":"3px"} as CSSProperties}>
                    <div className="progress-bar bg-success" style={{"width":"51.02040816326531%"} as CSSProperties} role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>                    </div>
                  </div>
                </td>
                <td className="align-middle white-space-nowrap text-end statuses">
                  <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
Critical
                  </span>
                </td>
                <td className="align-middle text-end white-space-nowrap pe-0 action">
                  <div className="btn-reveal-trigger position-static">
                    <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                      <span className="fas fa-ellipsis-h fs-10">                      </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a href="#!" className="dropdown-item">
View
                      </a>
                      <a href="#!" className="dropdown-item">
Export
                      </a>
                      <div className="dropdown-divider">                      </div>
                      <a href="#!" className="dropdown-item text-danger">
Remove
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex flex-wrap align-items-center justify-content-between py-3 pe-0 fs-9 border-bottom border-translucent">
          <div className="d-flex">
            <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info>            </p>
            <a href="#!" className="fw-semibold"  data-list-view={"*"}>
View all              <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>              </span>
            </a>
            <a href="#!" className="fw-semibold d-none"  data-list-view={"less"}>
View Less              <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>              </span>
            </a>
          </div>
          <div className="d-flex">
            <button className="page-link" data-list-pagination={"prev"}>
              <span className="fas fa-chevron-left">              </span>
            </button>
            <ul className="mb-0 pagination">            </ul>
            <button className="page-link pe-0" data-list-pagination={"next"}>
              <span className="fas fa-chevron-right">              </span>
            </button>
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
