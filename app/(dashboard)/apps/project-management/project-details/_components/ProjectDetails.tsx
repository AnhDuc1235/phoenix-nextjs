'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function ProjectDetails() {
  return (
    <div suppressHydrationWarning>

    <div className="row g-0">
      <div className="col-12 col-xxl-8 px-0 bg-body">
        <div className="px-4 px-lg-6 pt-6 pb-9">
          <div className="mb-5">
            <div className="d-flex justify-content-between">
              <h2 className="text-body-emphasis fw-bolder mb-2">
Retrieving Old Repos to Redirect to a new URL
              </h2>
              <div className="btn-reveal-trigger">
                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                  <span className="fas fa-ellipsis-h">                  </span>
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
            </div>
            <span className="badge badge-phoenix badge-phoenix-primary">
Ongoing
              <span className="ms-1 uil uil-stopwatch">              </span>
            </span>
          </div>
          <div className="row gx-0 gx-sm-5 gy-8 mb-8">
            <div className="col-12 col-xl-3 col-xxl-4 pe-xl-0">
              <div className="mb-4 mb-xl-7">
                <div className="row gx-0 gx-sm-7">
                  <div className="col-12 col-sm-auto">
                    <table className="lh-sm mb-4 mb-sm-0 mb-xl-4">
                      <tbody>
                        <tr>
                          <td className="py-1" colSpan={2}>
                            <div className="d-flex">
                              <span className="fa-solid fa-earth-americas me-2 text-body-tertiary fs-9">                              </span>
                              <h5 className="text-body">
Public project
                              </h5>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="align-top py-1">
                            <div className="d-flex">
                              <span className="fa-solid fa-user me-2 text-body-tertiary fs-9">                              </span>
                              <h5 className="text-body mb-0 text-nowrap">
Client :
                              </h5>
                            </div>
                          </td>
                          <td className="ps-1 py-1">
                            <a href="#!" className="fw-semibold d-block lh-sm">
Gobble the Bleep Inc
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="align-top py-1">
                            <div className="d-flex">
                              <span className="fa-regular fa-credit-card me-2 text-body-tertiary fs-9">                              </span>
                              <h5 className="text-body mb-0 text-nowrap">
Budget : 
                              </h5>
                            </div>
                          </td>
                          <td className="fw-bold ps-1 py-1 text-body-highlight">
$8,742
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-12 col-sm-auto">
                    <table className="lh-sm">
                      <tbody>
                        <tr>
                          <td className="align-top py-1 text-body text-nowrap fw-bold">
Started : 
                          </td>
                          <td className="text-body-tertiary text-opacity-85 fw-semibold ps-3">
17th Nov, 2020
                          </td>
                        </tr>
                        <tr>
                          <td className="align-top py-1 text-body text-nowrap fw-bold">
Deadline :
                          </td>
                          <td className="text-body-tertiary text-opacity-85 fw-semibold ps-3">
21st May, 2028
                          </td>
                        </tr>
                        <tr>
                          <td className="align-top py-1 text-body text-nowrap fw-bold">
Progress :
                          </td>
                          <td className="text-warning fw-semibold ps-3">
80%
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <span className="fa-solid fa-list-check me-2 text-body-tertiary fs-9">                  </span>
                  <h5 className="text-body-emphasis mb-0 me-2">
91
                    <span className="text-body fw-normal ms-2">
tasks
                    </span>
                  </h5>
                  <a href="#!" className="fw-bold fs-9 mt-1">
See tasks                     <span className="fa-solid fa-chevron-right me-2 fs-10">                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-9 col-xxl-8">
              <div className="row flex-between-center mb-3 g-3">
                <div className="col-auto">
                  <h4 className="text-body-emphasis">
Task completed over time
                  </h4>
                  <p className="text-body-tertiary mb-0">
Hard works done across all projects
                  </p>
                </div>
                <div className="col-8 col-sm-4">
                  <select className="form-select form-select-sm">
                    <option>
Mar 1 - 31, 2022
                    </option>
                    <option>
April 1 - 30, 2022
                    </option>
                    <option>
May 1 - 31, 2022
                    </option>
                  </select>
                </div>
              </div>
              <div className="echart-completed-task-chart" style={{"minHeight":"200px","width":"100%"} as CSSProperties}>              </div>
            </div>
            <div className="col-12 col-sm-5 col-lg-4 col-xl-3 col-xxl-4">
              <div className="mb-5">
                <h4 className="text-body-emphasis">
Work loads
                </h4>
                <h6 className="text-body-tertiary">
Last 7 days
                </h6>
              </div>
              <div className="echart-top-coupons mb-5" style={{"height":"115px","width":"100%"} as CSSProperties}>              </div>
              <div className="row justify-content-center">
                <div className="col-auto col-sm-12">
                  <div className="row justify-content-center justify-content-sm-between g-5 g-sm-0 mb-2">
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <div className="bullet-item me-2 bg-primary">                        </div>
                        <h6 className="text-body fw-semibold flex-1 mb-0">
Shantinan Mekalan
                        </h6>
                      </div>
                    </div>
                    <div className="col-auto">
                      <h6 className="text-body fw-semibold mb-0">
72%
                      </h6>
                    </div>
                  </div>
                  <div className="row justify-content-center justify-content-sm-between g-5 g-sm-0 mb-2">
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <div className="bullet-item me-2 bg-primary-lighter">                        </div>
                        <h6 className="text-body fw-semibold flex-1 mb-0">
Makena Zikonn
                        </h6>
                      </div>
                    </div>
                    <div className="col-auto">
                      <h6 className="text-body fw-semibold mb-0">
18%
                      </h6>
                    </div>
                  </div>
                  <div className="row justify-content-center justify-content-sm-between g-5 g-sm-0 mb-2">
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <div className="bullet-item me-2 bg-info">                        </div>
                        <h6 className="text-body fw-semibold flex-1 mb-0">
Meena Kumari
                        </h6>
                      </div>
                    </div>
                    <div className="col-auto">
                      <h6 className="text-body fw-semibold mb-0">
10%
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-7 col-lg-8 col-xl-5">
              <h4 className="text-body-emphasis mb-4">
Team members
              </h4>
              <div className="d-flex mb-8">
                <div className="dropdown">
                  <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block outline-none"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                    <div className="avatar avatar-xl  me-1">
                      <PhoenixImage src="/assets/img/team/33.webp" alt="" className="rounded-circle " />
                    </div>
                  </a>
                  <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                    <div className="position-relative">
                      <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                      </div>
                      <div className="p-3">
                        <div className="text-end">
                          <button className="btn p-0 me-2">
                            <span className="fa-solid fa-user-plus text-white">                            </span>
                          </button>
                          <button className="btn p-0">
                            <span className="fa-solid fa-ellipsis text-white">                            </span>
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
                            <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                            </span>
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
                              <span className="fa-solid fa-phone">                              </span>
                            </button>
                            <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                              <span className="fa-solid fa-message">                              </span>
                            </button>
                            <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                              <span className="fa-solid fa-video">                              </span>
                            </button>
                          </div>
                          <button className="btn btn-phoenix-primary">
                            <span className="fa-solid fa-envelope me-2">                            </span>
Send Email
                          </button>
                        </div>
                      </div>
                      <ul className="nav d-flex flex-column py-3 border-bottom">
                        <li className="nav-item">
                          <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                            <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                            </span>                            <span className="text-body-highlight flex-1">
Assigned Projects
                            </span>                            <span className="fa-solid fa-chevron-right fs-11">                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                            <span className="me-2 text-body" data-feather={"pie-chart"}>                            </span>                            <span className="text-body-highlight flex-1">
View activiy
                            </span>                            <span className="fa-solid fa-chevron-right fs-11">                            </span>
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
                  <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block outline-none"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                    <div className="avatar avatar-xl  me-1">
                      <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                    </div>
                  </a>
                  <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                    <div className="position-relative">
                      <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                      </div>
                      <div className="p-3">
                        <div className="text-end">
                          <button className="btn p-0 me-2">
                            <span className="fa-solid fa-user-plus text-white">                            </span>
                          </button>
                          <button className="btn p-0">
                            <span className="fa-solid fa-ellipsis text-white">                            </span>
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
                            <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                            </span>
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
                              <span className="fa-solid fa-phone">                              </span>
                            </button>
                            <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                              <span className="fa-solid fa-message">                              </span>
                            </button>
                            <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                              <span className="fa-solid fa-video">                              </span>
                            </button>
                          </div>
                          <button className="btn btn-phoenix-primary">
                            <span className="fa-solid fa-envelope me-2">                            </span>
Send Email
                          </button>
                        </div>
                      </div>
                      <ul className="nav d-flex flex-column py-3 border-bottom">
                        <li className="nav-item">
                          <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                            <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                            </span>                            <span className="text-body-highlight flex-1">
Assigned Projects
                            </span>                            <span className="fa-solid fa-chevron-right fs-11">                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                            <span className="me-2 text-body" data-feather={"pie-chart"}>                            </span>                            <span className="text-body-highlight flex-1">
View activiy
                            </span>                            <span className="fa-solid fa-chevron-right fs-11">                            </span>
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
                  <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block outline-none"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                    <div className="avatar avatar-xl  me-1">
                      <PhoenixImage src="/assets/img/team/31.webp" alt="" className="rounded-circle " />
                    </div>
                  </a>
                  <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                    <div className="position-relative">
                      <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                      </div>
                      <div className="p-3">
                        <div className="text-end">
                          <button className="btn p-0 me-2">
                            <span className="fa-solid fa-user-plus text-white">                            </span>
                          </button>
                          <button className="btn p-0">
                            <span className="fa-solid fa-ellipsis text-white">                            </span>
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
                            <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                            </span>
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
                              <span className="fa-solid fa-phone">                              </span>
                            </button>
                            <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                              <span className="fa-solid fa-message">                              </span>
                            </button>
                            <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                              <span className="fa-solid fa-video">                              </span>
                            </button>
                          </div>
                          <button className="btn btn-phoenix-primary">
                            <span className="fa-solid fa-envelope me-2">                            </span>
Send Email
                          </button>
                        </div>
                      </div>
                      <ul className="nav d-flex flex-column py-3 border-bottom">
                        <li className="nav-item">
                          <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                            <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                            </span>                            <span className="text-body-highlight flex-1">
Assigned Projects
                            </span>                            <span className="fa-solid fa-chevron-right fs-11">                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                            <span className="me-2 text-body" data-feather={"pie-chart"}>                            </span>                            <span className="text-body-highlight flex-1">
View activiy
                            </span>                            <span className="fa-solid fa-chevron-right fs-11">                            </span>
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
                  <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block outline-none"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                    <div className="avatar avatar-xl  me-1">
                      <PhoenixImage src="/assets/img/team/60.webp" alt="" className="rounded-circle " />
                    </div>
                  </a>
                  <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                    <div className="position-relative">
                      <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                      </div>
                      <div className="p-3">
                        <div className="text-end">
                          <button className="btn p-0 me-2">
                            <span className="fa-solid fa-user-plus text-white">                            </span>
                          </button>
                          <button className="btn p-0">
                            <span className="fa-solid fa-ellipsis text-white">                            </span>
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
                            <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                            </span>
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
                              <span className="fa-solid fa-phone">                              </span>
                            </button>
                            <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                              <span className="fa-solid fa-message">                              </span>
                            </button>
                            <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                              <span className="fa-solid fa-video">                              </span>
                            </button>
                          </div>
                          <button className="btn btn-phoenix-primary">
                            <span className="fa-solid fa-envelope me-2">                            </span>
Send Email
                          </button>
                        </div>
                      </div>
                      <ul className="nav d-flex flex-column py-3 border-bottom">
                        <li className="nav-item">
                          <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                            <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                            </span>                            <span className="text-body-highlight flex-1">
Assigned Projects
                            </span>                            <span className="fa-solid fa-chevron-right fs-11">                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                            <span className="me-2 text-body" data-feather={"pie-chart"}>                            </span>                            <span className="text-body-highlight flex-1">
View activiy
                            </span>                            <span className="fa-solid fa-chevron-right fs-11">                            </span>
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
                  <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block outline-none"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                    <div className="avatar avatar-xl  me-1">
                      <PhoenixImage src="/assets/img/team/65.webp" alt="" className="rounded-circle " />
                    </div>
                  </a>
                  <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                    <div className="position-relative">
                      <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                      </div>
                      <div className="p-3">
                        <div className="text-end">
                          <button className="btn p-0 me-2">
                            <span className="fa-solid fa-user-plus text-white">                            </span>
                          </button>
                          <button className="btn p-0">
                            <span className="fa-solid fa-ellipsis text-white">                            </span>
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
                            <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                            </span>
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
                              <span className="fa-solid fa-phone">                              </span>
                            </button>
                            <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                              <span className="fa-solid fa-message">                              </span>
                            </button>
                            <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                              <span className="fa-solid fa-video">                              </span>
                            </button>
                          </div>
                          <button className="btn btn-phoenix-primary">
                            <span className="fa-solid fa-envelope me-2">                            </span>
Send Email
                          </button>
                        </div>
                      </div>
                      <ul className="nav d-flex flex-column py-3 border-bottom">
                        <li className="nav-item">
                          <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                            <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                            </span>                            <span className="text-body-highlight flex-1">
Assigned Projects
                            </span>                            <span className="fa-solid fa-chevron-right fs-11">                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                            <span className="me-2 text-body" data-feather={"pie-chart"}>                            </span>                            <span className="text-body-highlight flex-1">
View activiy
                            </span>                            <span className="fa-solid fa-chevron-right fs-11">                            </span>
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
              <h4 className="text-body-emphasis mb-4">
Tags
              </h4>
              <span className="badge badge-tag me-2 mb-1">
Unused_brain
              </span>
              <span className="badge badge-tag me-2 mb-1">
Machine
              </span>
              <span className="badge badge-tag me-2 mb-1">
Coding
              </span>
              <span className="badge badge-tag me-2 mb-1">
Meseeks
              </span>
              <span className="badge badge-tag me-2 mb-1">
Smithpeople
              </span>
              <span className="badge badge-tag me-2 mb-1">
Rick
              </span>
              <span className="badge badge-tag me-2 mb-1">
Biology
              </span>
              <span className="badge badge-tag me-2 mb-1">
Neurology
              </span>
              <span className="badge badge-tag me-2 mb-1">
Brainlessness
              </span>
              <span className="badge badge-tag me-2 mb-1">
Stupidity
              </span>
              <span className="badge badge-tag me-2 mb-1">
Jerry
              </span>
              <span className="badge badge-tag me-2 mb-1">
Not _the_mouse
              </span>
            </div>
          </div>
          <h3 className="text-body-emphasis mb-4">
Project overview
          </h3>
          <p className="text-body-secondary mb-4">
The new redirection team is happy to announce that we’ve fixed all our unresponsive URLs and redirected them to new URLs. The tremendous assistance from our support team and the dev team, as well as that of the team lead’s, this team has made an impossible possible within a week. They didn’t stop for a moment, and we got our pages working again for all the valuable users. 
          </p>
          <p className="text-body-secondary mb-0">
Join us in celebrating the massive success of data transferring and getting us a huge revenue by eating out. Free public viewing and a buffet is offered for the great team as well as for the other teams working with us. We’ll be checking out places for the best option available at hands and we’ll let you know the schedule once we decide on one.
            <a href="#!" className="fw-semibold">
read more 
            </a>
          </p>
        </div>
      </div>
      <div className="col-12 col-xxl-4 px-0 border-start-xxl border-top-sm">
        <div className="bg-light dark__bg-gray-1100 h-100">
          <div className="p-4 p-lg-6">
            <h3 className="text-body-highlight mb-4 fw-bold">
Recent activity
            </h3>
            <div className="timeline-vertical timeline-with-details">
              <div className="timeline-item position-relative">
                <div className="row g-md-3">
                  <div className="col-12 col-md-auto d-flex">
                    <div className="timeline-item-date order-1 order-md-0 me-md-4">
                      <p className="fs-10 fw-semibold text-body-tertiary text-opacity-85 text-end">
01 DEC, 2023
                        <br className="d-none d-md-block" />
 10:30 AM
                      </p>
                    </div>
                    <div className="timeline-item-bar position-md-relative me-3 me-md-0">
                      <div className="icon-item icon-item-sm rounded-7 shadow-none bg-primary-subtle">
                        <span className="fa-solid fa-chess text-primary-dark fs-10">                        </span>
                      </div>
                      <span className="timeline-bar border-end border-dashed">                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="timeline-item-content ps-6 ps-md-3">
                      <h5 className="fs-9 lh-sm">
Phoenix Template: Unleashing Creative Possibilities
                      </h5>
                      <p className="fs-9">
by 
                        <a href="#!" className="fw-semibold">
Shantinon Mekalan
                        </a>
                      </p>
                      <p className="fs-9 text-body-secondary mb-5">
Discover limitless creativity with the Phoenix template! Our latest update offers an array of innovative features and design options.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item position-relative">
                <div className="row g-md-3">
                  <div className="col-12 col-md-auto d-flex">
                    <div className="timeline-item-date order-1 order-md-0 me-md-4">
                      <p className="fs-10 fw-semibold text-body-tertiary text-opacity-85 text-end">
05 DEC, 2023
                        <br className="d-none d-md-block" />
 12:30 AM
                      </p>
                    </div>
                    <div className="timeline-item-bar position-md-relative me-3 me-md-0">
                      <div className="icon-item icon-item-sm rounded-7 shadow-none bg-primary-subtle">
                        <span className="fa-solid fa-dove text-primary-dark fs-10">                        </span>
                      </div>
                      <span className="timeline-bar border-end border-dashed">                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="timeline-item-content ps-6 ps-md-3">
                      <h5 className="fs-9 lh-sm">
Empower Your Digital Presence: The Phoenix Template Unveiled
                      </h5>
                      <p className="fs-9">
by 
                        <a href="#!" className="fw-semibold">
Bookworm22
                        </a>
                      </p>
                      <p className="fs-9 text-body-secondary mb-5">
Unveiling the Phoenix template, a game-changer for your digital presence. With its powerful features and sleek design,
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item position-relative">
                <div className="row g-md-3">
                  <div className="col-12 col-md-auto d-flex">
                    <div className="timeline-item-date order-1 order-md-0 me-md-4">
                      <p className="fs-10 fw-semibold text-body-tertiary text-opacity-85 text-end">
15 DEC, 2023
                        <br className="d-none d-md-block" />
 2:30 AM
                      </p>
                    </div>
                    <div className="timeline-item-bar position-md-relative me-3 me-md-0">
                      <div className="icon-item icon-item-sm rounded-7 shadow-none bg-primary-subtle">
                        <span className="fa-solid fa-dungeon text-primary-dark fs-10">                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="timeline-item-content ps-6 ps-md-3">
                      <h5 className="fs-9 lh-sm">
Phoenix Template: Simplified Design, Maximum Impact
                      </h5>
                      <p className="fs-9">
by 
                        <a href="#!" className="fw-semibold">
Sharuka Nijibum
                        </a>
                      </p>
                      <p className="fs-9 text-body-secondary mb-0">
Introducing the Phoenix template, where simplified design meets maximum impact. Elevate your digital presence with its sleek and intuitive features.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 px-lg-6">
            <h4 className="mb-3">
Files
            </h4>
          </div>
          <div className="border-top px-4 px-lg-6 py-4">
            <div className="me-n3">
              <div className="d-flex flex-between-center">
                <div className="d-flex mb-1">
                  <span className="fa-solid fa-image me-2 text-body-tertiary fs-9">                  </span>
                  <p className="text-body-highlight mb-0 lh-1">
Silly_sight_1.png
                  </p>
                </div>
                <div className="btn-reveal-trigger">
                  <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                    <span className="fas fa-ellipsis-h">                    </span>
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
              </div>
              <div className="d-flex fs-9 text-body-tertiary mb-2 flex-wrap">
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
              </div>
              <PhoenixImage src="/assets/img/generic/40.png" alt="" className="rounded-2" />
            </div>
          </div>
          <div className="border-top px-4 px-lg-6 py-4">
            <div className="me-n3">
              <div className="d-flex flex-between-center">
                <div>
                  <div className="d-flex align-items-center mb-1">
                    <span className="fa-solid fa-image me-2 fs-9 text-body-tertiary">                    </span>
                    <p className="text-body-highlight mb-0 lh-1">
All_images.zip
                    </p>
                  </div>
                  <div className="d-flex fs-9 text-body-tertiary mb-0 flex-wrap">
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
                  </div>
                </div>
                <div className="btn-reveal-trigger">
                  <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                    <span className="fas fa-ellipsis-h">                    </span>
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
              </div>
            </div>
          </div>
          <div className="border-top px-4 px-lg-6 py-4 ">
            <div className="me-n3">
              <div className="d-flex flex-between-center">
                <div>
                  <div className="d-flex align-items-center mb-1 flex-wrap">
                    <span className="fa-solid fa-file-lines me-2 fs-9 text-body-tertiary">                    </span>
                    <p className="text-body-highlight mb-0 lh-1">
Project.txt
                    </p>
                  </div>
                  <div className="d-flex fs-9 text-body-tertiary mb-0 flex-wrap">
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
                  </div>
                </div>
                <div className="btn-reveal-trigger">
                  <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                    <span className="fas fa-ellipsis-h">                    </span>
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
