'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function RoomListing() {
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

    <div className="mb-7">
      <h2>
Room Listing
      </h2>
      <div data-list={"{\"valueNames\":[\"name\",\"beds\",\"guest\",\"bathRooms\",\"amenities\",\"totalRooms\"],\"page\":8}"}>
        <div className="d-md-flex mt-5 mb-4">
          <button className="btn btn-primary me-4">
            <span className="fas fa-plus me-2">            </span>
Create Listing
          </button>
          <button className="btn btn-link text-body me-4 px-0">
            <span className="fa-solid fa-file-export fs-9 me-2">            </span>
Export
          </button>
          <div className="d-flex gap-2 ms-md-auto mt-3 mt-md-0">
            <div className="search-box">
              <form className="position-relative">
                <input className="form-control search-input search" type="search" placeholder="Search products" aria-label="Search" />
                <span className="fas fa-search search-box-icon">                </span>
              </form>
            </div>
            <button className="btn btn-phoenix-primary px-3">
              <span className="fa-solid fa-filter" data-fa-transform={"down-2"}>              </span>
            </button>
          </div>
        </div>
        <div className="table-responsive scrollbar mx-n1 px-1">
          <table className="table fs-9 mb-0">
            <thead>
              <tr>
                <th className="white-space-nowrap fs-9 align-middle ps-0" style={{"maxWidth":"20px","width":"18px"} as CSSProperties}>
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" id="checkbox-bulk-products-select" type="checkbox" data-bulk-select={"{\"body\":\"room-listing-table-body\"}"} />
                  </div>
                </th>
                <th className="sort text-body-tertiary align-middle white-space-nowrap" scope="col" data-sort={"name"} style={{"width":"300px"} as CSSProperties}>
ROOM INFORMATION
                </th>
                <th className="sort text-body-tertiary align-middle px-4" scope="col" style={{"width":"200px"} as CSSProperties} data-sort={"beds"}>
NO. OF BEDS
                </th>
                <th className="sort text-body-tertiary align-middle px-4" scope="col" data-sort={"guest"} style={{"width":"200px"} as CSSProperties}>
NO. OF GUESTS
                </th>
                <th className="sort text-body-tertiary align-middle px-4" scope="col" data-sort={"bathRooms"} style={{"width":"140px"} as CSSProperties}>
BATHROOM
                </th>
                <th className="text-body-tertiary align-middle ps-4" scope="col" data-sort={"amenities"} style={{"minWidth":"450px"} as CSSProperties}>
AMENITIES
                </th>
                <th className="sort text-body-tertiary align-middle ps-4 text-end" scope="col" data-sort={"totalRooms"} style={{"width":"180px"} as CSSProperties}>
TOTAL ROOM
                </th>
                <th className="sort text-body-tertiary text-end align-middle pe-0 ps-4" scope="col">                </th>
              </tr>
            </thead>
            <tbody className="list" id="room-listing-table-body"><tr className="hover-actions-trigger btn-reveal-trigger position-static">
                <td className="fs-9 align-middle ps-0">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"name\":\"Bunk Bed\",\"category\":\"Standard Room\",\"price\":332.67,\"img\":\"/img/hotels/17.png\",\"bedRooms\":\"01\",\"beds\":\"02\",\"guest\":\"02\",\"child\":\"01\",\"bathRooms\":\"01\",\"totalRooms\":65,\"amenities\":[\"wifi\",\"tv\",\"common area\",\"bathtub\",\"Heating\",\"Telephone\",\"Television\",\"common area\",\"Kettle\",\"iron\",\"Coffee maker\",\"refrigerator\",\"Room service\",\"Coffee maker\",\"refrigerator\",\"Room service\",\"common area\",\"bathtub\",\"Heating\",\"Telephone\"]}"} />
                  </div>
                </td>
                <td className="align-middle py-4 name">
                  <div className="d-flex align-items-center gap-3">
                    <a href="#!">
                      <PhoenixImage src="/assets/img/hotels/17.png" alt="" className="rounded-1 border border-translucent" width={80} />
                    </a>
                    <div>
                      <a href="#!" className="fs-8 fw-bolder text-body-emphasis text-nowrap">
Bunk Bed
                      </a>
                      <h6 className="fw-seibold text-body text-nowrap mt-1 mb-2">
                        <span className="fa-solid fa-border-all me-2">                        </span>
Standard Room
                      </h6>
                      <h4 className="fw-bolder mb-0">
$332.67
                      </h4>
                    </div>
                  </div>
                </td>
                <td className="align-middle px-4 beds">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-primary-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-person-shelter text-primary-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
01
                    </h5>
                    <div className="d-flex align-items-center justify-content-center bg-success-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-bed text-success-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0">
02
                    </h5>
                  </div>
                </td>
                <td className="align-middle px-4 guest">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-warning-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-user text-warning-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
02
                    </h5>
                    <div className="d-flex align-items-center justify-content-center bg-info-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-baby text-info-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0">
01
                    </h5>
                  </div>
                </td>
                <td className="align-middle px-4 bathRooms">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-danger-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-bath text-danger-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
01
                    </h5>
                  </div>
                </td>
                <td className="align-middle ps-4 amenities">
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
wifi
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
tv
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
common area
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
bathtub
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Heating
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Telephone
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Television
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
common area
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Kettle
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
iron
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Coffee maker
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
refrigerator
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Room service
                    </span>
                    <a href="#!" className="fw-bold fs-9">
+7 More
                    </a>
                  </div>
                </td>
                <td className="align-middle text-end ps-4 totalRooms">
                  <h2 className="text-body-secondary">
65
                  </h2>
                </td>
                <td className="align-middle ps-4">
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
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"name\":\"King bed\",\"category\":\"Presidential Suite\",\"price\":450.67,\"img\":\"/img/hotels/18.png\",\"bedRooms\":\"02\",\"beds\":\"03\",\"guest\":\"02\",\"child\":\"01\",\"bathRooms\":\"02\",\"totalRooms\":23,\"amenities\":[\"wifi\",\"tv\",\"common area\",\"bathtub\",\"Heating\",\"Telephone\",\"Television\",\"common area\",\"Kettle\",\"iron\",\"Coffee maker\",\"refrigerator\",\"Room service\",\"Coffee maker\",\"refrigerator\",\"Room service\",\"common area\",\"bathtub\",\"Heating\",\"Telephone\",\"Television\",\"common area\"]}"} />
                  </div>
                </td>
                <td className="align-middle py-4 name">
                  <div className="d-flex align-items-center gap-3">
                    <a href="#!">
                      <PhoenixImage src="/assets/img/hotels/18.png" alt="" className="rounded-1 border border-translucent" width={80} />
                    </a>
                    <div>
                      <a href="#!" className="fs-8 fw-bolder text-body-emphasis text-nowrap">
King bed
                      </a>
                      <h6 className="fw-seibold text-body text-nowrap mt-1 mb-2">
                        <span className="fa-solid fa-border-all me-2">                        </span>
Presidential Suite
                      </h6>
                      <h4 className="fw-bolder mb-0">
$450.67
                      </h4>
                    </div>
                  </div>
                </td>
                <td className="align-middle px-4 beds">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-primary-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-person-shelter text-primary-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
02
                    </h5>
                    <div className="d-flex align-items-center justify-content-center bg-success-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-bed text-success-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0">
03
                    </h5>
                  </div>
                </td>
                <td className="align-middle px-4 guest">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-warning-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-user text-warning-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
02
                    </h5>
                    <div className="d-flex align-items-center justify-content-center bg-info-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-baby text-info-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0">
01
                    </h5>
                  </div>
                </td>
                <td className="align-middle px-4 bathRooms">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-danger-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-bath text-danger-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
02
                    </h5>
                  </div>
                </td>
                <td className="align-middle ps-4 amenities">
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
wifi
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
tv
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
common area
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
bathtub
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Heating
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Telephone
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Television
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
common area
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Kettle
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
iron
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Coffee maker
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
refrigerator
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Room service
                    </span>
                    <a href="#!" className="fw-bold fs-9">
+9 More
                    </a>
                  </div>
                </td>
                <td className="align-middle text-end ps-4 totalRooms">
                  <h2 className="text-body-secondary">
23
                  </h2>
                </td>
                <td className="align-middle ps-4">
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
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"name\":\"Queen bed\",\"category\":\"Deluxe Room\",\"price\":400.5,\"img\":\"/img/hotels/19.png\",\"bedRooms\":\"02\",\"beds\":\"02\",\"guest\":\"02\",\"child\":\"01\",\"bathRooms\":\"02\",\"totalRooms\":77,\"amenities\":[\"wifi\",\"tv\",\"common area\",\"bathtub\",\"Heating\",\"Telephone\",\"Television\",\"common area\",\"Kettle\",\"iron\",\"Coffee maker\",\"refrigerator\",\"Room service\",\"Coffee maker\",\"refrigerator\",\"Room service\",\"wifi\",\"tv\",\"common area\",\"bathtub\",\"Heating\",\"Telephone\",\"Television\"]}"} />
                  </div>
                </td>
                <td className="align-middle py-4 name">
                  <div className="d-flex align-items-center gap-3">
                    <a href="#!">
                      <PhoenixImage src="/assets/img/hotels/19.png" alt="" className="rounded-1 border border-translucent" width={80} />
                    </a>
                    <div>
                      <a href="#!" className="fs-8 fw-bolder text-body-emphasis text-nowrap">
Queen bed
                      </a>
                      <h6 className="fw-seibold text-body text-nowrap mt-1 mb-2">
                        <span className="fa-solid fa-border-all me-2">                        </span>
Deluxe Room
                      </h6>
                      <h4 className="fw-bolder mb-0">
$400.5
                      </h4>
                    </div>
                  </div>
                </td>
                <td className="align-middle px-4 beds">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-primary-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-person-shelter text-primary-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
02
                    </h5>
                    <div className="d-flex align-items-center justify-content-center bg-success-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-bed text-success-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0">
02
                    </h5>
                  </div>
                </td>
                <td className="align-middle px-4 guest">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-warning-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-user text-warning-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
02
                    </h5>
                    <div className="d-flex align-items-center justify-content-center bg-info-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-baby text-info-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0">
01
                    </h5>
                  </div>
                </td>
                <td className="align-middle px-4 bathRooms">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-danger-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-bath text-danger-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
02
                    </h5>
                  </div>
                </td>
                <td className="align-middle ps-4 amenities">
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
wifi
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
tv
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
common area
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
bathtub
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Heating
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Telephone
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Television
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
common area
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Kettle
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
iron
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Coffee maker
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
refrigerator
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Room service
                    </span>
                    <a href="#!" className="fw-bold fs-9">
+10 More
                    </a>
                  </div>
                </td>
                <td className="align-middle text-end ps-4 totalRooms">
                  <h2 className="text-body-secondary">
77
                  </h2>
                </td>
                <td className="align-middle ps-4">
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
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"name\":\"Twin bed\",\"category\":\"Family Room\",\"price\":600.41,\"img\":\"/img/hotels/20.png\",\"bedRooms\":\"03\",\"beds\":\"05\",\"guest\":\"07\",\"child\":\"01\",\"bathRooms\":\"03\",\"totalRooms\":12,\"amenities\":[\"wifi\",\"tv\",\"common area\",\"bathtub\",\"Heating\",\"Telephone\",\"Television\",\"common area\",\"Kettle\",\"iron\",\"Coffee maker\",\"refrigerator\",\"Room service\",\"Coffee maker\",\"refrigerator\",\"Room service\"]}"} />
                  </div>
                </td>
                <td className="align-middle py-4 name">
                  <div className="d-flex align-items-center gap-3">
                    <a href="#!">
                      <PhoenixImage src="/assets/img/hotels/20.png" alt="" className="rounded-1 border border-translucent" width={80} />
                    </a>
                    <div>
                      <a href="#!" className="fs-8 fw-bolder text-body-emphasis text-nowrap">
Twin bed
                      </a>
                      <h6 className="fw-seibold text-body text-nowrap mt-1 mb-2">
                        <span className="fa-solid fa-border-all me-2">                        </span>
Family Room
                      </h6>
                      <h4 className="fw-bolder mb-0">
$600.41
                      </h4>
                    </div>
                  </div>
                </td>
                <td className="align-middle px-4 beds">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-primary-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-person-shelter text-primary-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
03
                    </h5>
                    <div className="d-flex align-items-center justify-content-center bg-success-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-bed text-success-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0">
05
                    </h5>
                  </div>
                </td>
                <td className="align-middle px-4 guest">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-warning-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-user text-warning-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
07
                    </h5>
                    <div className="d-flex align-items-center justify-content-center bg-info-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-baby text-info-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0">
01
                    </h5>
                  </div>
                </td>
                <td className="align-middle px-4 bathRooms">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-danger-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-bath text-danger-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
03
                    </h5>
                  </div>
                </td>
                <td className="align-middle ps-4 amenities">
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
wifi
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
tv
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
common area
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
bathtub
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Heating
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Telephone
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Television
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
common area
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Kettle
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
iron
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Coffee maker
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
refrigerator
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Room service
                    </span>
                    <a href="#!" className="fw-bold fs-9">
+3 More
                    </a>
                  </div>
                </td>
                <td className="align-middle text-end ps-4 totalRooms">
                  <h2 className="text-body-secondary">
12
                  </h2>
                </td>
                <td className="align-middle ps-4">
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
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"name\":\"Single bed\",\"category\":\"Honeymoon Suite\",\"price\":350.8,\"img\":\"/img/hotels/21.png\",\"bedRooms\":\"01\",\"beds\":\"01\",\"guest\":\"02\",\"child\":\"00\",\"bathRooms\":\"01\",\"totalRooms\":21,\"amenities\":[\"wifi\",\"tv\",\"common area\",\"bathtub\",\"Heating\",\"Telephone\",\"Television\",\"common area\",\"Kettle\",\"iron\",\"Coffee maker\",\"refrigerator\",\"Room service\",\"Coffee maker\",\"refrigerator\",\"Room service\",\"common area\",\"bathtub\"]}"} />
                  </div>
                </td>
                <td className="align-middle py-4 name">
                  <div className="d-flex align-items-center gap-3">
                    <a href="#!">
                      <PhoenixImage src="/assets/img/hotels/21.png" alt="" className="rounded-1 border border-translucent" width={80} />
                    </a>
                    <div>
                      <a href="#!" className="fs-8 fw-bolder text-body-emphasis text-nowrap">
Single bed
                      </a>
                      <h6 className="fw-seibold text-body text-nowrap mt-1 mb-2">
                        <span className="fa-solid fa-border-all me-2">                        </span>
Honeymoon Suite
                      </h6>
                      <h4 className="fw-bolder mb-0">
$350.8
                      </h4>
                    </div>
                  </div>
                </td>
                <td className="align-middle px-4 beds">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-primary-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-person-shelter text-primary-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
01
                    </h5>
                    <div className="d-flex align-items-center justify-content-center bg-success-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-bed text-success-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0">
01
                    </h5>
                  </div>
                </td>
                <td className="align-middle px-4 guest">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-warning-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-user text-warning-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
02
                    </h5>
                    <div className="d-flex align-items-center justify-content-center bg-info-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-baby text-info-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0">
00
                    </h5>
                  </div>
                </td>
                <td className="align-middle px-4 bathRooms">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-danger-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-bath text-danger-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
01
                    </h5>
                  </div>
                </td>
                <td className="align-middle ps-4 amenities">
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
wifi
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
tv
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
common area
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
bathtub
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Heating
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Telephone
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Television
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
common area
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Kettle
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
iron
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Coffee maker
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
refrigerator
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Room service
                    </span>
                    <a href="#!" className="fw-bold fs-9">
+5 More
                    </a>
                  </div>
                </td>
                <td className="align-middle text-end ps-4 totalRooms">
                  <h2 className="text-body-secondary">
21
                  </h2>
                </td>
                <td className="align-middle ps-4">
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
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"name\":\"Single bed\",\"category\":\"Loft Suite\",\"price\":200.22,\"img\":\"/img/hotels/22.png\",\"bedRooms\":\"01\",\"beds\":\"01\",\"guest\":\"01\",\"child\":\"00\",\"bathRooms\":\"01\",\"totalRooms\":15,\"amenities\":[\"wifi\",\"tv\",\"common area\",\"bathtub\",\"Heating\",\"Telephone\",\"Television\",\"common area\",\"Kettle\",\"iron\",\"Coffee maker\",\"refrigerator\",\"Room service\",\"Coffee maker\",\"refrigerator\",\"Room service\",\"Television\",\"common area\",\"Kettle\",\"iron\"]}"} />
                  </div>
                </td>
                <td className="align-middle py-4 name">
                  <div className="d-flex align-items-center gap-3">
                    <a href="#!">
                      <PhoenixImage src="/assets/img/hotels/22.png" alt="" className="rounded-1 border border-translucent" width={80} />
                    </a>
                    <div>
                      <a href="#!" className="fs-8 fw-bolder text-body-emphasis text-nowrap">
Single bed
                      </a>
                      <h6 className="fw-seibold text-body text-nowrap mt-1 mb-2">
                        <span className="fa-solid fa-border-all me-2">                        </span>
Loft Suite
                      </h6>
                      <h4 className="fw-bolder mb-0">
$200.22
                      </h4>
                    </div>
                  </div>
                </td>
                <td className="align-middle px-4 beds">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-primary-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-person-shelter text-primary-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
01
                    </h5>
                    <div className="d-flex align-items-center justify-content-center bg-success-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-bed text-success-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0">
01
                    </h5>
                  </div>
                </td>
                <td className="align-middle px-4 guest">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-warning-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-user text-warning-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
01
                    </h5>
                    <div className="d-flex align-items-center justify-content-center bg-info-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-baby text-info-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0">
00
                    </h5>
                  </div>
                </td>
                <td className="align-middle px-4 bathRooms">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-danger-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-bath text-danger-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
01
                    </h5>
                  </div>
                </td>
                <td className="align-middle ps-4 amenities">
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
wifi
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
tv
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
common area
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
bathtub
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Heating
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Telephone
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Television
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
common area
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Kettle
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
iron
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Coffee maker
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
refrigerator
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Room service
                    </span>
                    <a href="#!" className="fw-bold fs-9">
+7 More
                    </a>
                  </div>
                </td>
                <td className="align-middle text-end ps-4 totalRooms">
                  <h2 className="text-body-secondary">
15
                  </h2>
                </td>
                <td className="align-middle ps-4">
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
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"name\":\"Double bed\",\"category\":\"Corner Room\",\"price\":290.55,\"img\":\"/img/hotels/23.png\",\"bedRooms\":\"01\",\"beds\":\"02\",\"guest\":\"04\",\"child\":\"00\",\"bathRooms\":\"02\",\"totalRooms\":\"08\",\"amenities\":[\"wifi\",\"tv\",\"common area\",\"bathtub\",\"Heating\",\"Telephone\",\"Television\",\"common area\",\"Kettle\",\"iron\",\"Coffee maker\",\"refrigerator\",\"Room service\",\"Coffee maker\",\"refrigerator\",\"Room service\",\"common area\",\"bathtub\",\"Heating\"]}"} />
                  </div>
                </td>
                <td className="align-middle py-4 name">
                  <div className="d-flex align-items-center gap-3">
                    <a href="#!">
                      <PhoenixImage src="/assets/img/hotels/23.png" alt="" className="rounded-1 border border-translucent" width={80} />
                    </a>
                    <div>
                      <a href="#!" className="fs-8 fw-bolder text-body-emphasis text-nowrap">
Double bed
                      </a>
                      <h6 className="fw-seibold text-body text-nowrap mt-1 mb-2">
                        <span className="fa-solid fa-border-all me-2">                        </span>
Corner Room
                      </h6>
                      <h4 className="fw-bolder mb-0">
$290.55
                      </h4>
                    </div>
                  </div>
                </td>
                <td className="align-middle px-4 beds">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-primary-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-person-shelter text-primary-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
01
                    </h5>
                    <div className="d-flex align-items-center justify-content-center bg-success-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-bed text-success-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0">
02
                    </h5>
                  </div>
                </td>
                <td className="align-middle px-4 guest">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-warning-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-user text-warning-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
04
                    </h5>
                    <div className="d-flex align-items-center justify-content-center bg-info-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-baby text-info-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0">
00
                    </h5>
                  </div>
                </td>
                <td className="align-middle px-4 bathRooms">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-danger-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-bath text-danger-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
02
                    </h5>
                  </div>
                </td>
                <td className="align-middle ps-4 amenities">
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
wifi
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
tv
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
common area
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
bathtub
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Heating
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Telephone
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Television
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
common area
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Kettle
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
iron
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Coffee maker
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
refrigerator
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Room service
                    </span>
                    <a href="#!" className="fw-bold fs-9">
+6 More
                    </a>
                  </div>
                </td>
                <td className="align-middle text-end ps-4 totalRooms">
                  <h2 className="text-body-secondary">
08
                  </h2>
                </td>
                <td className="align-middle ps-4">
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
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"name\":\"Twin XL bed\",\"category\":\"Ocean View Room\",\"price\":550.75,\"img\":\"/img/hotels/24.png\",\"bedRooms\":\"01\",\"beds\":\"02\",\"guest\":\"04\",\"child\":\"01\",\"bathRooms\":\"02\",\"totalRooms\":\"06\",\"amenities\":[\"wifi\",\"tv\",\"common area\",\"bathtub\",\"Heating\",\"Telephone\",\"Television\",\"common area\",\"Kettle\",\"iron\",\"Coffee maker\",\"refrigerator\",\"Room service\",\"Coffee maker\",\"refrigerator\",\"Room service\"]}"} />
                  </div>
                </td>
                <td className="align-middle py-4 name">
                  <div className="d-flex align-items-center gap-3">
                    <a href="#!">
                      <PhoenixImage src="/assets/img/hotels/24.png" alt="" className="rounded-1 border border-translucent" width={80} />
                    </a>
                    <div>
                      <a href="#!" className="fs-8 fw-bolder text-body-emphasis text-nowrap">
Twin XL bed
                      </a>
                      <h6 className="fw-seibold text-body text-nowrap mt-1 mb-2">
                        <span className="fa-solid fa-border-all me-2">                        </span>
Ocean View Room
                      </h6>
                      <h4 className="fw-bolder mb-0">
$550.75
                      </h4>
                    </div>
                  </div>
                </td>
                <td className="align-middle px-4 beds">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-primary-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-person-shelter text-primary-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
01
                    </h5>
                    <div className="d-flex align-items-center justify-content-center bg-success-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-bed text-success-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0">
02
                    </h5>
                  </div>
                </td>
                <td className="align-middle px-4 guest">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-warning-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-user text-warning-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
04
                    </h5>
                    <div className="d-flex align-items-center justify-content-center bg-info-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-baby text-info-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0">
01
                    </h5>
                  </div>
                </td>
                <td className="align-middle px-4 bathRooms">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-danger-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-bath text-danger-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
02
                    </h5>
                  </div>
                </td>
                <td className="align-middle ps-4 amenities">
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
wifi
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
tv
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
common area
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
bathtub
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Heating
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Telephone
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Television
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
common area
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Kettle
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
iron
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Coffee maker
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
refrigerator
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Room service
                    </span>
                    <a href="#!" className="fw-bold fs-9">
+3 More
                    </a>
                  </div>
                </td>
                <td className="align-middle text-end ps-4 totalRooms">
                  <h2 className="text-body-secondary">
06
                  </h2>
                </td>
                <td className="align-middle ps-4">
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
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"name\":\"Quad Bed\",\"category\":\"Standard Room\",\"price\":550.65,\"img\":\"/img/hotels/20.png\",\"bedRooms\":\"02\",\"beds\":\"04\",\"guest\":\"04\",\"child\":\"00\",\"bathRooms\":\"02\",\"totalRooms\":50,\"amenities\":[\"wifi\",\"tv\",\"common area\",\"bathtub\",\"Heating\",\"Telephone\",\"Television\",\"common area\",\"Kettle\",\"iron\",\"Coffee maker\",\"refrigerator\",\"Room service\",\"Coffee maker\",\"refrigerator\",\"Room service\",\"tv\"]}"} />
                  </div>
                </td>
                <td className="align-middle py-4 name">
                  <div className="d-flex align-items-center gap-3">
                    <a href="#!">
                      <PhoenixImage src="/assets/img/hotels/20.png" alt="" className="rounded-1 border border-translucent" width={80} />
                    </a>
                    <div>
                      <a href="#!" className="fs-8 fw-bolder text-body-emphasis text-nowrap">
Quad Bed
                      </a>
                      <h6 className="fw-seibold text-body text-nowrap mt-1 mb-2">
                        <span className="fa-solid fa-border-all me-2">                        </span>
Standard Room
                      </h6>
                      <h4 className="fw-bolder mb-0">
$550.65
                      </h4>
                    </div>
                  </div>
                </td>
                <td className="align-middle px-4 beds">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-primary-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-person-shelter text-primary-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
02
                    </h5>
                    <div className="d-flex align-items-center justify-content-center bg-success-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-bed text-success-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0">
04
                    </h5>
                  </div>
                </td>
                <td className="align-middle px-4 guest">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-warning-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-user text-warning-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
04
                    </h5>
                    <div className="d-flex align-items-center justify-content-center bg-info-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-baby text-info-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0">
00
                    </h5>
                  </div>
                </td>
                <td className="align-middle px-4 bathRooms">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-danger-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-bath text-danger-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
02
                    </h5>
                  </div>
                </td>
                <td className="align-middle ps-4 amenities">
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
wifi
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
tv
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
common area
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
bathtub
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Heating
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Telephone
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Television
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
common area
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Kettle
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
iron
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Coffee maker
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
refrigerator
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Room service
                    </span>
                    <a href="#!" className="fw-bold fs-9">
+4 More
                    </a>
                  </div>
                </td>
                <td className="align-middle text-end ps-4 totalRooms">
                  <h2 className="text-body-secondary">
50
                  </h2>
                </td>
                <td className="align-middle ps-4">
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
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"name\":\"Executive Suite\",\"category\":\"Standard Room\",\"price\":750.67,\"img\":\"/img/hotels/21.png\",\"bedRooms\":\"01\",\"beds\":\"01\",\"guest\":\"02\",\"child\":\"01\",\"bathRooms\":\"01\",\"totalRooms\":22,\"amenities\":[\"wifi\",\"tv\",\"common area\",\"bathtub\",\"Heating\",\"Telephone\",\"Television\",\"common area\",\"Kettle\",\"iron\",\"Coffee maker\",\"refrigerator\",\"Room service\",\"Coffee maker\",\"refrigerator\",\"Room service\",\"wifi\",\"tv\",\"common area\",\"bathtub\",\"Heating\",\"Telephone\",\"Television\",\"wifi\",\"tv\",\"common area\",\"bathtub\",\"Heating\",\"Telephone\",\"Television\"]}"} />
                  </div>
                </td>
                <td className="align-middle py-4 name">
                  <div className="d-flex align-items-center gap-3">
                    <a href="#!">
                      <PhoenixImage src="/assets/img/hotels/21.png" alt="" className="rounded-1 border border-translucent" width={80} />
                    </a>
                    <div>
                      <a href="#!" className="fs-8 fw-bolder text-body-emphasis text-nowrap">
Executive Suite
                      </a>
                      <h6 className="fw-seibold text-body text-nowrap mt-1 mb-2">
                        <span className="fa-solid fa-border-all me-2">                        </span>
Standard Room
                      </h6>
                      <h4 className="fw-bolder mb-0">
$750.67
                      </h4>
                    </div>
                  </div>
                </td>
                <td className="align-middle px-4 beds">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-primary-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-person-shelter text-primary-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
01
                    </h5>
                    <div className="d-flex align-items-center justify-content-center bg-success-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-bed text-success-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0">
01
                    </h5>
                  </div>
                </td>
                <td className="align-middle px-4 guest">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-warning-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-user text-warning-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
02
                    </h5>
                    <div className="d-flex align-items-center justify-content-center bg-info-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-baby text-info-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0">
01
                    </h5>
                  </div>
                </td>
                <td className="align-middle px-4 bathRooms">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-center bg-danger-subtle rounded me-2" style={{"height":"24px","width":"24px"} as CSSProperties}>
                      <span className="fa-solid fa-bath text-danger-darker">                      </span>
                    </div>
                    <h5 className="text-body-emphasis fw-semibold mb-0 me-3">
01
                    </h5>
                  </div>
                </td>
                <td className="align-middle ps-4 amenities">
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
wifi
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
tv
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
common area
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
bathtub
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Heating
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Telephone
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Television
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
common area
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Kettle
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
iron
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Coffee maker
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
refrigerator
                    </span>
                    <span className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10">
Room service
                    </span>
                    <a href="#!" className="fw-bold fs-9">
+17 More
                    </a>
                  </div>
                </td>
                <td className="align-middle text-end ps-4 totalRooms">
                  <h2 className="text-body-secondary">
22
                  </h2>
                </td>
                <td className="align-middle ps-4">
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
        <div className="row align-items-center py-2 g-0">
          <div className="pagination d-none">          </div>
          <div className="col d-flex fs-9">
            <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info>            </p>
            <a href="#!" className="fw-semibold"  data-list-view={"*"}>
View all              <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>              </span>
            </a>
            <a href="#!" className="fw-semibold d-none"  data-list-view={"less"}>
View Less
            </a>
          </div>
          <div className="col-auto d-flex">
            <button className="btn btn-link px-1 me-1" type="button" title="Previous" data-list-pagination={"prev"}>
              <span className="fas fa-chevron-left me-2">              </span>
Previous
            </button>
            <button className="btn btn-link px-1 ms-1" type="button" title="Next" data-list-pagination={"next"}>
Next
              <span className="fas fa-chevron-right ms-2">              </span>
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
