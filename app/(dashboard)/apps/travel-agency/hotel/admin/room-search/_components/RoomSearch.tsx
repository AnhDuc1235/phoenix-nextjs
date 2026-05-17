'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function RoomSearch() {
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
      <div className="row align-items-end mb-5 gy-3">
        <div className="col" style={{"maxWidth":"290px"} as CSSProperties}>
          <h2>
Rooms 
          </h2>
        </div>
        <div className="col-xl">
          <div className="row gx-2 gx-xl-3 gy-3">
            <div className="col-sm-auto order-1 order-sm-0 me-sm-2 d-xl-none">
              <button className="btn btn-lg btn-phoenix-secondary text-body-tertiary w-100" data-phoenix-toggle={"offcanvas"} data-phoenix-target={"#roomFilterOffcanvas"}>
                <span className="fa-solid fa-filter me-2">                </span>
Filter
              </button>
            </div>
            <div className="col col-sm-5 col-xxl-3">
              <div className="form-floating w-auto">
                <input className="form-control datetimepicker" id="checkIn" type="text" placeholder="H:i" data-options={"{\"disableMobile\":true,\"mode\":\"range\",\"minDate\":\"today\",\"dateFormat\":\"d-m-y\"}"} />
                <label htmlFor="checkIn">
Select time range
                </label>
                <span className="fa-solid fa-calendar-alt position-absolute top-0 end-0 mt-3 me-3">                </span>
              </div>
            </div>
            <div className="col col-sm-auto flex-grow-0">
              <button className="btn btn-lg btn-phoenix-primary px-xxl-6 text-nowrap">
                <span className="d-none d-xl-inline-block">
Update 
                </span>
                <span className="fa-solid fa-search fs-9 ms-xl-2">                </span>
              </button>
            </div>
            <div className="col col-sm-auto ms-auto flex-grow-0">
              <button className="btn btn-lg btn-phoenix-secondary ms-auto text-nowrap">
                <span className="d-none d-xl-inline-block">
Refresh 
                </span>
                <span className="fa-solid fa-rotate fs-9 ms-xl-2">                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row gx-6">
        <div className="col-xl-auto">
          <div className="phoenix-offcanvas-filter-xl phoenix-offcanvas phoenix-offcanvas-fixed bg-body scrollbar overflow-x-hidden" id="roomFilterOffcanvas" data-breakpoint={"xl"}>
            <div className="pe-1" data-collapse-all>
              <div className="d-flex align-items-center">
                <h3 className="text-body-highlight">
Filters
                </h3>
                <button className="btn btn-phoenix-secondary px-3 ms-auto me-2 me-xl-0" data-btn-collapse-all>
Collapse all
                </button>
                <button className="btn d-xl-none p-0" data-phoenix-dismiss={"offcanvas"}>
                  <span className="uil uil-times fs-8">                  </span>
                </button>
              </div>
              <a href="#collapsePriceRange" className="btn collapse-indicator px-0 py-2 d-flex align-items-center mt-3" data-bs-toggle={"collapse"}  role="button" aria-expanded="true" aria-controls="collapsePriceRange">
                <span className="fa-solid fa-caret-down toggle-icon text-body me-2">                </span>                <h5 className="text-body-highlight">
Price Range
                </h5>
              </a>
              <div className="collapse show" id="collapsePriceRange">
                <div className="border-bottom pb-4 pt-1">
                  <div className="noUi-target-primary noUi-handle-primary noUi-slider-slim noUi-handle-circle bg-primary-subtle px-2 mb-3" data-nouislider={"{\"range\":{\"min\":500,\"max\":2000},\"start\":[699,1299],\"connect\":true}"}>                  </div>
                  <div className="row g-2">
                    <div className="col-6">
                      <div className="form-floating">
                        <input className="form-control input-spin-none" type="number" name="price-range-min" id="price-range-min" placeholder="Min" defaultValue="699" />
                        <label htmlFor="price-range-min">
Min
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-floating">
                        <input className="form-control input-spin-none" type="number" name="price-range-max" id="price-range-max" placeholder="Max" defaultValue="1299" />
                        <label htmlFor="price-range-max">
Max
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#collapseAdult" className="btn collapse-indicator px-0 py-2 d-flex align-items-center mt-3" data-bs-toggle={"collapse"}  role="button" aria-expanded="true" aria-controls="collapseAdult">
                <span className="fa-solid fa-caret-down toggle-icon text-body me-2">                </span>                <h5 className="text-body-highlight">
Adult
                </h5>
              </a>
              <div className="collapse show" id="collapseAdult">
                <div className="border-bottom pb-4">
                  <div className="input-group gap-2" data-quantity>
                    <button className="btn btn-phoenix-primary px-3 rounded" data-type={"minus"}>
                      <span className="fa-solid fa-minus px-1">                      </span>
                    </button>
                    <input className="form-control form-control-lg border-translucent input-spin-none text-center rounded" id="adult" type="number" defaultValue="2" />
                    <button className="btn btn-phoenix-primary px-3 rounded" data-type={"plus"}>
                      <span className="fa-solid fa-plus px-1">                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <a href="#collapseChild" className="btn collapse-indicator px-0 py-2 d-flex align-items-center mt-3" data-bs-toggle={"collapse"}  role="button" aria-expanded="true" aria-controls="collapseChild">
                <span className="fa-solid fa-caret-down toggle-icon text-body me-2">                </span>                <h5 className="text-body-highlight">
Child
                </h5>
              </a>
              <div className="collapse show" id="collapseChild">
                <div className="border-bottom pb-4">
                  <div className="input-group gap-2" data-quantity>
                    <button className="btn btn-phoenix-primary px-3 rounded" data-type={"minus"}>
                      <span className="fa-solid fa-minus px-1">                      </span>
                    </button>
                    <input className="form-control form-control-lg border-translucent input-spin-none text-center rounded" id="child" type="number" defaultValue="2" />
                    <button className="btn btn-phoenix-primary px-3 rounded" data-type={"plus"}>
                      <span className="fa-solid fa-plus px-1">                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <a href="#collapseBedroom" className="btn collapse-indicator px-0 py-2 d-flex align-items-center mt-3" data-bs-toggle={"collapse"}  role="button" aria-expanded="true" aria-controls="collapseBedroom">
                <span className="fa-solid fa-caret-down toggle-icon text-body me-2">                </span>                <h5 className="text-body-highlight">
Bedroom
                </h5>
              </a>
              <div className="collapse show" id="collapseBedroom">
                <div className="border-bottom pb-4">
                  <div className="input-group gap-2" data-quantity>
                    <button className="btn btn-phoenix-primary px-3 rounded" data-type={"minus"}>
                      <span className="fa-solid fa-minus px-1">                      </span>
                    </button>
                    <input className="form-control form-control-lg border-translucent input-spin-none text-center rounded" id="bedroom" type="number" defaultValue="2" />
                    <button className="btn btn-phoenix-primary px-3 rounded" data-type={"plus"}>
                      <span className="fa-solid fa-plus px-1">                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <a href="#collapseNumOfBed" className="btn collapse-indicator px-0 py-2 d-flex align-items-center mt-3" data-bs-toggle={"collapse"}  role="button" aria-expanded="true" aria-controls="collapseNumOfBed">
                <span className="fa-solid fa-caret-down toggle-icon text-body me-2">                </span>                <h5 className="text-body-highlight">
Number of Bed
                </h5>
              </a>
              <div className="collapse show" id="collapseNumOfBed">
                <div className="border-bottom pb-4">
                  <div className="input-group gap-2" data-quantity>
                    <button className="btn btn-phoenix-primary px-3 rounded" data-type={"minus"}>
                      <span className="fa-solid fa-minus px-1">                      </span>
                    </button>
                    <input className="form-control form-control-lg border-translucent input-spin-none text-center rounded" id="numberOfBed" type="number" defaultValue="2" />
                    <button className="btn btn-phoenix-primary px-3 rounded" data-type={"plus"}>
                      <span className="fa-solid fa-plus px-1">                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <a href="#collapseBathroom" className="btn collapse-indicator px-0 py-2 d-flex align-items-center mt-3" data-bs-toggle={"collapse"}  role="button" aria-expanded="true" aria-controls="collapseBathroom">
                <span className="fa-solid fa-caret-down toggle-icon text-body me-2">                </span>                <h5 className="text-body-highlight">
Bathroom
                </h5>
              </a>
              <div className="collapse show" id="collapseBathroom">
                <div className="border-bottom pb-4">
                  <div className="input-group gap-2" data-quantity>
                    <button className="btn btn-phoenix-primary px-3 rounded" data-type={"minus"}>
                      <span className="fa-solid fa-minus px-1">                      </span>
                    </button>
                    <input className="form-control form-control-lg border-translucent input-spin-none text-center rounded" id="bathroom" type="number" defaultValue="2" />
                    <button className="btn btn-phoenix-primary px-3 rounded" data-type={"plus"}>
                      <span className="fa-solid fa-plus px-1">                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <a href="#collapseRoomCategory" className="btn collapse-indicator px-0 py-2 d-flex align-items-center mt-3" data-bs-toggle={"collapse"}  role="button" aria-expanded="false" aria-controls="collapseRoomCategory">
                <span className="fa-solid fa-caret-down toggle-icon text-body me-2">                </span>                <h5 className="text-body-highlight">
Room Category
                </h5>
              </a>
              <div className="collapse" id="collapseRoomCategory">
                <div className="border-bottom pb-4" data-list={"{\"valueNames\":[\"room\"]}"}>
                  <div className="search-box w-100">
                    <form className="position-relative">
                      <input className="form-control search-input search" type="search" placeholder="Search Room" aria-label="Search" />
                      <span className="fas fa-search search-box-icon">                      </span>
                    </form>
                  </div>
                  <div className="list">
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="Any" />
                      <label className="form-check-label fs-8 text-body-highlight room" htmlFor="Any">
Any
                      </label>
                    </div>
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="Deluxe-King-Room" />
                      <label className="form-check-label fs-8 text-body-highlight room" htmlFor="Deluxe-King-Room">
Deluxe King Room
                      </label>
                    </div>
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="Deluxe-Twin-Room" />
                      <label className="form-check-label fs-8 text-body-highlight room" htmlFor="Deluxe-Twin-Room">
Deluxe Twin Room
                      </label>
                    </div>
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="Junior-King-Suite" />
                      <label className="form-check-label fs-8 text-body-highlight room" htmlFor="Junior-King-Suite">
Junior King Suite
                      </label>
                    </div>
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="One-Bedroom-Deluxe-Suite" />
                      <label className="form-check-label fs-8 text-body-highlight room" htmlFor="One-Bedroom-Deluxe-Suite">
One-Bedroom Deluxe Suite
                      </label>
                    </div>
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="One-Bedroom-Executive-Suite" />
                      <label className="form-check-label fs-8 text-body-highlight room" htmlFor="One-Bedroom-Executive-Suite">
One-Bedroom Executive Suite
                      </label>
                    </div>
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="Presidential-Suite" />
                      <label className="form-check-label fs-8 text-body-highlight room" htmlFor="Presidential-Suite">
Presidential Suite
                      </label>
                    </div>
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="Club-King-Room" />
                      <label className="form-check-label fs-8 text-body-highlight room" htmlFor="Club-King-Room">
Club King Room
                      </label>
                    </div>
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="Twin-Room" />
                      <label className="form-check-label fs-8 text-body-highlight room" htmlFor="Twin-Room">
Twin Room
                      </label>
                    </div>
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="Club-Twin-Room" />
                      <label className="form-check-label fs-8 text-body-highlight room" htmlFor="Club-Twin-Room">
Club Twin Room
                      </label>
                    </div>
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="Premium-King-Room" />
                      <label className="form-check-label fs-8 text-body-highlight room" htmlFor="Premium-King-Room">
Premium King Room
                      </label>
                    </div>
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="Deluxe-King-Suite" />
                      <label className="form-check-label fs-8 text-body-highlight room" htmlFor="Deluxe-King-Suite">
Deluxe King Suite
                      </label>
                    </div>
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="Executive-King-Suite" />
                      <label className="form-check-label fs-8 text-body-highlight room" htmlFor="Executive-King-Suite">
Executive King Suite
                      </label>
                    </div>
                  </div>
                  <a href="#!" className="mt-2 fw-bold d-inline-block">
Show more items
                  </a>
                </div>
              </div>
              <a href="#collapseBedType" className="btn collapse-indicator px-0 py-2 d-flex align-items-center mt-3" data-bs-toggle={"collapse"}  role="button" aria-expanded="false" aria-controls="collapseBedType">
                <span className="fa-solid fa-caret-down toggle-icon text-body me-2">                </span>                <h5 className="text-body-highlight">
Bed Type
                </h5>
              </a>
              <div className="collapse" id="collapseBedType">
                <div className="border-bottom pb-4" data-list={"{\"valueNames\":[\"bed\"]}"}>
                  <div className="search-box w-100">
                    <form className="position-relative">
                      <input className="form-control search-input search" type="search" placeholder="Search Room" aria-label="Search" />
                      <span className="fas fa-search search-box-icon">                      </span>
                    </form>
                  </div>
                  <div className="list">
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="Cribs" />
                      <label className="form-check-label fs-8 text-body-highlight bed" htmlFor="Cribs">
Cribs
                      </label>
                    </div>
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="Double-beds" />
                      <label className="form-check-label fs-8 text-body-highlight bed" htmlFor="Double-beds">
Double beds
                      </label>
                    </div>
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="King-bed" />
                      <label className="form-check-label fs-8 text-body-highlight bed" htmlFor="King-bed">
King bed
                      </label>
                    </div>
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="Queen-bed" />
                      <label className="form-check-label fs-8 text-body-highlight bed" htmlFor="Queen-bed">
Queen bed
                      </label>
                    </div>
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="Rollaway-bed" />
                      <label className="form-check-label fs-8 text-body-highlight bed" htmlFor="Rollaway-bed">
Rollaway bed
                      </label>
                    </div>
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="Sofa-bed" />
                      <label className="form-check-label fs-8 text-body-highlight bed" htmlFor="Sofa-bed">
Sofa bed
                      </label>
                    </div>
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="Twin-bed" />
                      <label className="form-check-label fs-8 text-body-highlight bed" htmlFor="Twin-bed">
Twin bed
                      </label>
                    </div>
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="Futon" />
                      <label className="form-check-label fs-8 text-body-highlight bed" htmlFor="Futon">
Futon
                      </label>
                    </div>
                  </div>
                  <a href="#!" className="mt-2 fw-bold d-inline-block">
Show more items
                  </a>
                </div>
              </div>
              <a href="#collapseAmenities" className="btn collapse-indicator px-0 py-2 d-flex align-items-center mt-3" data-bs-toggle={"collapse"}  role="button" aria-expanded="false" aria-controls="collapseAmenities">
                <span className="fa-solid fa-caret-down toggle-icon text-body me-2">                </span>                <h5 className="text-body-highlight">
Amenities
                </h5>
              </a>
              <div className="collapse" id="collapseAmenities">
                <div data-list={"{\"valueNames\":[\"amenities\"]}"}>
                  <div className="search-box w-100">
                    <form className="position-relative">
                      <input className="form-control search-input search" type="search" placeholder="Search Room" aria-label="Search" />
                      <span className="fas fa-search search-box-icon">                      </span>
                    </form>
                  </div>
                  <div className="list">
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="Wifi" />
                      <label className="form-check-label fs-8 text-body-highlight amenities" htmlFor="Wifi">
Wifi
                      </label>
                    </div>
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="Washer" />
                      <label className="form-check-label fs-8 text-body-highlight amenities" htmlFor="Washer">
Washer
                      </label>
                    </div>
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="Kitchen" />
                      <label className="form-check-label fs-8 text-body-highlight amenities" htmlFor="Kitchen">
Kitchen
                      </label>
                    </div>
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="Dryer" />
                      <label className="form-check-label fs-8 text-body-highlight amenities" htmlFor="Dryer">
Dryer
                      </label>
                    </div>
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="Air-conditioning" />
                      <label className="form-check-label fs-8 text-body-highlight amenities" htmlFor="Air-conditioning">
Air conditioning
                      </label>
                    </div>
                    <div className="form-check mt-3">
                      <input className="form-check-input" type="checkbox" defaultValue="" id="Heating" />
                      <label className="form-check-label fs-8 text-body-highlight amenities" htmlFor="Heating">
Heating
                      </label>
                    </div>
                  </div>
                  <a href="#!" className="mt-2 fw-bold d-inline-block">
Show more items
                  </a>
                </div>
              </div>
              <div className="sticky-bottom bg-body pt-4 pb-4 pb-xl-0">
                <button className="btn btn-phoenix-secondary me-2">
Reset
                </button>
                <button className="btn btn-primary px-7">
Apply
                </button>
              </div>
            </div>
          </div>
          <div className="phoenix-offcanvas-backdrop d-xl-none" data-phoenix-backdrop>          </div>
        </div>
        <div className="col w-xl-25">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row gx-4 justify-content-between">
                <div className="col-auto mb-4">
                  <div className="d-flex gap-3">
                    <a href="#!">
                      <PhoenixImage src="/assets/img/hotels/70.png" alt="" className="rounded-1 border border-translucent" width={108} />
                    </a>
                    <div>
                      <a href="#!" className="fs-8 fw-bolder text-body-emphasis text-nowrap">
Double Bed
                      </a>
                      <h6 className="fw-semibold text-body text-nowrap mt-1 mb-2">
                        <span className="fa-solid fa-border-all me-2">                        </span>
Presidential Suite
                      </h6>
                      <div className="d-flex align-items-baseline gap-1 mb-3">
                        <h6 className="mb-0 fw-semibold">
Available:
                        </h6>
                        <h4 className="text-warning-dark fw-bolder mb-0">
20
                          <span className="fs-9 text-body-tertiary fw-bold">
 / 100
                          </span>
                        </h4>
                      </div>
                      <h4 className="fw-bolder mb-0">
$699.67
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-auto d-flex gap-5 gap-md-6 order-1 order-xxl-0 mb-4">
                  <div>
                    <h6 className="mb-3 fw-bolder text-body-tertiary text-uppercase">
                      <span className="d-none d-sm-inline-block">
No. of 
                      </span>
 Beds
                    </h6>
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-sm-flex align-items-center gap-2">
                        <div className="d-flex align-items-center justify-content-center bg-primary-subtle rounded mb-2 mb-sm-0" style={{"height":"24px","width":"24px"} as CSSProperties}>
                          <span className="fa-solid fa-person-shelter text-primary-darker">                          </span>
                        </div>
                        <h5 className="text-body fw-semibold mb-0">
01
                        </h5>
                      </div>
                      <div className="d-sm-flex align-items-center gap-2">
                        <div className="d-flex align-items-center justify-content-center bg-success-subtle rounded mb-2 mb-sm-0" style={{"height":"24px","width":"24px"} as CSSProperties}>
                          <span className="fa-solid fa-bed text-success-darker">                          </span>
                        </div>
                        <h5 className="text-body fw-semibold mb-0">
02
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-3 fw-bolder text-body-tertiary text-uppercase">
                      <span className="d-none d-sm-inline-block">
No. of 
                      </span>
 guests
                    </h6>
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-sm-flex align-items-center gap-2">
                        <div className="d-flex align-items-center justify-content-center bg-warning-subtle rounded mb-2 mb-sm-0" style={{"height":"24px","width":"24px"} as CSSProperties}>
                          <span className="fa-solid fa-user text-warning-darker">                          </span>
                        </div>
                        <h5 className="text-body fw-semibold mb-0">
02
                        </h5>
                      </div>
                      <div className="d-sm-flex align-items-center gap-2">
                        <div className="d-flex align-items-center justify-content-center bg-info-subtle rounded mb-2 mb-sm-0" style={{"height":"24px","width":"24px"} as CSSProperties}>
                          <span className="fa-solid fa-baby text-info-darker">                          </span>
                        </div>
                        <h5 className="text-body fw-semibold mb-0">
01
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-3 fw-bolder text-body-tertiary text-uppercase">
Bathroom
                    </h6>
                    <div className="d-sm-flex align-items-center gap-2">
                      <div className="d-flex align-items-center justify-content-center bg-danger-subtle rounded mb-2 mb-sm-0" style={{"height":"24px","width":"24px"} as CSSProperties}>
                        <span className="fa-solid fa-bath text-danger-darker">                        </span>
                      </div>
                      <h5 className="text-body fw-semibold mb-0 me-3">
01
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-auto mb-4">
                  <a href="#collapseRoomAvailableOnDates-0" className="btn btn-phoenix-info collapse-indicator me-2 px-3 d-xxl-block mb-xxl-2" data-bs-toggle={"collapse"}  role="button" aria-expanded="true" aria-controls="collapseRoomAvailableOnDates-0">
                    <span className="fa-solid fa-calendar me-2">                    </span>                    <span className="collapse-show">
Show Dates
                    </span>                    <span className="collapse-hide">
Hide Dates
                    </span>
                  </a>
                  <a href="#!" className="btn btn-primary px-5 px-md-7 px-xxl-5 flex-1">
Book now
                  </a>
                </div>
                <div className="col-12">
                  <div className="collapse show" id="collapseRoomAvailableOnDates-0">
                    <div className="px-4 py-3 border border-translucent rounded mb-4 bg-body-highlight">
                      <div className="swiper-theme-container px-4">
                        <div className="swiper theme-slider" data-swiper={"{\"spaceBetween\":24,\"slidesPerView\":\"auto\",\"centeredSlide\":true,\"grabCursor\":true,\"breakpoints\":{\"768\":{\"spaceBetween\":32},\"1540\":{\"spaceBetween\":48}}}"}>
                          <div className="swiper-wrapper">
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
10 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-success">
09 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
11 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-success">
06 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
12 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-warning">
03 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
13 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$699.00
                                </h6>
                                <h6 className="text-danger">
N/A
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
14 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-success">
10 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
15 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-success">
08 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
16 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$499.00
                                </h6>
                                <h6 className="text-success">
12 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
17 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-success">
09 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
18 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-success">
10 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
19 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-warning">
02 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7">
                                <h6 className="mb-3 fw-bolder text-body">
20 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-warning">
04 units
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-nav">
                          <div className="swiper-button-next">
                            <span className="fas fa-chevron-right text-primary" data-fa-transform={"shrink-3"}>                            </span>
                          </div>
                          <div className="swiper-button-prev">
                            <span className="fas fa-chevron-left text-primary" data-fa-transform={"shrink-3"}>                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 border border-translucent rounded">
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
wifi
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
tv
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
common area
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
bathtub
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
Heating
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
Telephone
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
Television
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
common area
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
Kettle
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
iron
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
Coffee maker
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
refrigerator
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
Room service
                </a>
                <a href="#!" className="fw-bold pe-0 fs-9 text-nowrap">
+ 7 more
                </a>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <div className="row gx-4 justify-content-between">
                <div className="col-auto mb-4">
                  <div className="d-flex gap-3">
                    <a href="#!">
                      <PhoenixImage src="/assets/img/hotels/71.png" alt="" className="rounded-1 border border-translucent" width={108} />
                    </a>
                    <div>
                      <a href="#!" className="fs-8 fw-bolder text-body-emphasis text-nowrap">
Queen bed
                      </a>
                      <h6 className="fw-semibold text-body text-nowrap mt-1 mb-2">
                        <span className="fa-solid fa-border-all me-2">                        </span>
Deluxe Room
                      </h6>
                      <div className="d-flex align-items-baseline gap-1 mb-3">
                        <h6 className="mb-0 fw-semibold">
Available:
                        </h6>
                        <h4 className="text-warning-dark fw-bolder mb-0">
25
                          <span className="fs-9 text-body-tertiary fw-bold">
 / 77
                          </span>
                        </h4>
                      </div>
                      <h4 className="fw-bolder mb-0">
$400.5
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-auto d-flex gap-5 gap-md-6 order-1 order-xxl-0 mb-4">
                  <div>
                    <h6 className="mb-3 fw-bolder text-body-tertiary text-uppercase">
                      <span className="d-none d-sm-inline-block">
No. of 
                      </span>
 Beds
                    </h6>
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-sm-flex align-items-center gap-2">
                        <div className="d-flex align-items-center justify-content-center bg-primary-subtle rounded mb-2 mb-sm-0" style={{"height":"24px","width":"24px"} as CSSProperties}>
                          <span className="fa-solid fa-person-shelter text-primary-darker">                          </span>
                        </div>
                        <h5 className="text-body fw-semibold mb-0">
02
                        </h5>
                      </div>
                      <div className="d-sm-flex align-items-center gap-2">
                        <div className="d-flex align-items-center justify-content-center bg-success-subtle rounded mb-2 mb-sm-0" style={{"height":"24px","width":"24px"} as CSSProperties}>
                          <span className="fa-solid fa-bed text-success-darker">                          </span>
                        </div>
                        <h5 className="text-body fw-semibold mb-0">
02
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-3 fw-bolder text-body-tertiary text-uppercase">
                      <span className="d-none d-sm-inline-block">
No. of 
                      </span>
 guests
                    </h6>
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-sm-flex align-items-center gap-2">
                        <div className="d-flex align-items-center justify-content-center bg-warning-subtle rounded mb-2 mb-sm-0" style={{"height":"24px","width":"24px"} as CSSProperties}>
                          <span className="fa-solid fa-user text-warning-darker">                          </span>
                        </div>
                        <h5 className="text-body fw-semibold mb-0">
02
                        </h5>
                      </div>
                      <div className="d-sm-flex align-items-center gap-2">
                        <div className="d-flex align-items-center justify-content-center bg-info-subtle rounded mb-2 mb-sm-0" style={{"height":"24px","width":"24px"} as CSSProperties}>
                          <span className="fa-solid fa-baby text-info-darker">                          </span>
                        </div>
                        <h5 className="text-body fw-semibold mb-0">
01
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-3 fw-bolder text-body-tertiary text-uppercase">
Bathroom
                    </h6>
                    <div className="d-sm-flex align-items-center gap-2">
                      <div className="d-flex align-items-center justify-content-center bg-danger-subtle rounded mb-2 mb-sm-0" style={{"height":"24px","width":"24px"} as CSSProperties}>
                        <span className="fa-solid fa-bath text-danger-darker">                        </span>
                      </div>
                      <h5 className="text-body fw-semibold mb-0 me-3">
02
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-auto mb-4">
                  <a href="#collapseRoomAvailableOnDates-1" className="btn btn-phoenix-info collapse-indicator me-2 px-3 d-xxl-block mb-xxl-2" data-bs-toggle={"collapse"}  role="button" aria-expanded="false" aria-controls="collapseRoomAvailableOnDates-1">
                    <span className="fa-solid fa-calendar me-2">                    </span>                    <span className="collapse-show">
Show Dates
                    </span>                    <span className="collapse-hide">
Hide Dates
                    </span>
                  </a>
                  <a href="#!" className="btn btn-primary px-5 px-md-7 px-xxl-5 flex-1">
Book now
                  </a>
                </div>
                <div className="col-12">
                  <div className="collapse" id="collapseRoomAvailableOnDates-1">
                    <div className="px-4 py-3 border border-translucent rounded mb-4 bg-body-highlight">
                      <div className="swiper-theme-container px-4">
                        <div className="swiper theme-slider" data-swiper={"{\"spaceBetween\":24,\"slidesPerView\":\"auto\",\"centeredSlide\":true,\"grabCursor\":true,\"breakpoints\":{\"768\":{\"spaceBetween\":32},\"1540\":{\"spaceBetween\":48}}}"}>
                          <div className="swiper-wrapper">
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
10 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-success">
09 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
11 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-success">
06 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
12 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-warning">
03 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
13 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$699.00
                                </h6>
                                <h6 className="text-danger">
N/A
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
14 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-success">
10 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
15 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-success">
08 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
16 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$499.00
                                </h6>
                                <h6 className="text-success">
12 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
17 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-success">
09 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
18 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-success">
10 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
19 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-warning">
02 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7">
                                <h6 className="mb-3 fw-bolder text-body">
20 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-warning">
04 units
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-nav">
                          <div className="swiper-button-next">
                            <span className="fas fa-chevron-right text-primary" data-fa-transform={"shrink-3"}>                            </span>
                          </div>
                          <div className="swiper-button-prev">
                            <span className="fas fa-chevron-left text-primary" data-fa-transform={"shrink-3"}>                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 border border-translucent rounded">
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
wifi
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
tv
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
common area
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
bathtub
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
Heating
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
Telephone
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
Television
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
common area
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
Kettle
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
iron
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
Coffee maker
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
refrigerator
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
Room service
                </a>
                <a href="#!" className="fw-bold pe-0 fs-9 text-nowrap">
+ 7 more
                </a>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <div className="row gx-4 justify-content-between">
                <div className="col-auto mb-4">
                  <div className="d-flex gap-3">
                    <a href="#!">
                      <PhoenixImage src="/assets/img/hotels/72.png" alt="" className="rounded-1 border border-translucent" width={108} />
                    </a>
                    <div>
                      <a href="#!" className="fs-8 fw-bolder text-body-emphasis text-nowrap">
Twin bed
                      </a>
                      <h6 className="fw-semibold text-body text-nowrap mt-1 mb-2">
                        <span className="fa-solid fa-border-all me-2">                        </span>
Family Room
                      </h6>
                      <div className="d-flex align-items-baseline gap-1 mb-3">
                        <h6 className="mb-0 fw-semibold">
Available:
                        </h6>
                        <h4 className="text-warning-dark fw-bolder mb-0">
8
                          <span className="fs-9 text-body-tertiary fw-bold">
 / 12
                          </span>
                        </h4>
                      </div>
                      <h4 className="fw-bolder mb-0">
$600.41
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-auto d-flex gap-5 gap-md-6 order-1 order-xxl-0 mb-4">
                  <div>
                    <h6 className="mb-3 fw-bolder text-body-tertiary text-uppercase">
                      <span className="d-none d-sm-inline-block">
No. of 
                      </span>
 Beds
                    </h6>
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-sm-flex align-items-center gap-2">
                        <div className="d-flex align-items-center justify-content-center bg-primary-subtle rounded mb-2 mb-sm-0" style={{"height":"24px","width":"24px"} as CSSProperties}>
                          <span className="fa-solid fa-person-shelter text-primary-darker">                          </span>
                        </div>
                        <h5 className="text-body fw-semibold mb-0">
03
                        </h5>
                      </div>
                      <div className="d-sm-flex align-items-center gap-2">
                        <div className="d-flex align-items-center justify-content-center bg-success-subtle rounded mb-2 mb-sm-0" style={{"height":"24px","width":"24px"} as CSSProperties}>
                          <span className="fa-solid fa-bed text-success-darker">                          </span>
                        </div>
                        <h5 className="text-body fw-semibold mb-0">
05
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-3 fw-bolder text-body-tertiary text-uppercase">
                      <span className="d-none d-sm-inline-block">
No. of 
                      </span>
 guests
                    </h6>
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-sm-flex align-items-center gap-2">
                        <div className="d-flex align-items-center justify-content-center bg-warning-subtle rounded mb-2 mb-sm-0" style={{"height":"24px","width":"24px"} as CSSProperties}>
                          <span className="fa-solid fa-user text-warning-darker">                          </span>
                        </div>
                        <h5 className="text-body fw-semibold mb-0">
07
                        </h5>
                      </div>
                      <div className="d-sm-flex align-items-center gap-2">
                        <div className="d-flex align-items-center justify-content-center bg-info-subtle rounded mb-2 mb-sm-0" style={{"height":"24px","width":"24px"} as CSSProperties}>
                          <span className="fa-solid fa-baby text-info-darker">                          </span>
                        </div>
                        <h5 className="text-body fw-semibold mb-0">
01
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-3 fw-bolder text-body-tertiary text-uppercase">
Bathroom
                    </h6>
                    <div className="d-sm-flex align-items-center gap-2">
                      <div className="d-flex align-items-center justify-content-center bg-danger-subtle rounded mb-2 mb-sm-0" style={{"height":"24px","width":"24px"} as CSSProperties}>
                        <span className="fa-solid fa-bath text-danger-darker">                        </span>
                      </div>
                      <h5 className="text-body fw-semibold mb-0 me-3">
03
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-auto mb-4">
                  <a href="#collapseRoomAvailableOnDates-2" className="btn btn-phoenix-info collapse-indicator me-2 px-3 d-xxl-block mb-xxl-2" data-bs-toggle={"collapse"}  role="button" aria-expanded="false" aria-controls="collapseRoomAvailableOnDates-2">
                    <span className="fa-solid fa-calendar me-2">                    </span>                    <span className="collapse-show">
Show Dates
                    </span>                    <span className="collapse-hide">
Hide Dates
                    </span>
                  </a>
                  <a href="#!" className="btn btn-primary px-5 px-md-7 px-xxl-5 flex-1">
Book now
                  </a>
                </div>
                <div className="col-12">
                  <div className="collapse" id="collapseRoomAvailableOnDates-2">
                    <div className="px-4 py-3 border border-translucent rounded mb-4 bg-body-highlight">
                      <div className="swiper-theme-container px-4">
                        <div className="swiper theme-slider" data-swiper={"{\"spaceBetween\":24,\"slidesPerView\":\"auto\",\"centeredSlide\":true,\"grabCursor\":true,\"breakpoints\":{\"768\":{\"spaceBetween\":32},\"1540\":{\"spaceBetween\":48}}}"}>
                          <div className="swiper-wrapper">
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
10 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-success">
09 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
11 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-success">
06 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
12 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-warning">
03 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
13 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$699.00
                                </h6>
                                <h6 className="text-danger">
N/A
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
14 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-success">
10 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
15 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-success">
08 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
16 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$499.00
                                </h6>
                                <h6 className="text-success">
12 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
17 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-success">
09 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
18 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-success">
10 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
19 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-warning">
02 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7">
                                <h6 className="mb-3 fw-bolder text-body">
20 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-warning">
04 units
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-nav">
                          <div className="swiper-button-next">
                            <span className="fas fa-chevron-right text-primary" data-fa-transform={"shrink-3"}>                            </span>
                          </div>
                          <div className="swiper-button-prev">
                            <span className="fas fa-chevron-left text-primary" data-fa-transform={"shrink-3"}>                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 border border-translucent rounded">
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
wifi
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
tv
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
common area
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
bathtub
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
Heating
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
Telephone
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
Television
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
common area
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
Kettle
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
iron
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
Coffee maker
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
refrigerator
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
Room service
                </a>
                <a href="#!" className="fw-bold pe-0 fs-9 text-nowrap">
+ 7 more
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="row gx-4 justify-content-between">
                <div className="col-auto mb-4">
                  <div className="d-flex gap-3">
                    <a href="#!">
                      <PhoenixImage src="/assets/img/hotels/73.png" alt="" className="rounded-1 border border-translucent" width={108} />
                    </a>
                    <div>
                      <a href="#!" className="fs-8 fw-bolder text-body-emphasis text-nowrap">
Single bed
                      </a>
                      <h6 className="fw-semibold text-body text-nowrap mt-1 mb-2">
                        <span className="fa-solid fa-border-all me-2">                        </span>
Honeymoon Suite
                      </h6>
                      <div className="d-flex align-items-baseline gap-1 mb-3">
                        <h6 className="mb-0 fw-semibold">
Available:
                        </h6>
                        <h4 className="text-warning-dark fw-bolder mb-0">
5
                          <span className="fs-9 text-body-tertiary fw-bold">
 / 15
                          </span>
                        </h4>
                      </div>
                      <h4 className="fw-bolder mb-0">
$350.8
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-auto d-flex gap-5 gap-md-6 order-1 order-xxl-0 mb-4">
                  <div>
                    <h6 className="mb-3 fw-bolder text-body-tertiary text-uppercase">
                      <span className="d-none d-sm-inline-block">
No. of 
                      </span>
 Beds
                    </h6>
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-sm-flex align-items-center gap-2">
                        <div className="d-flex align-items-center justify-content-center bg-primary-subtle rounded mb-2 mb-sm-0" style={{"height":"24px","width":"24px"} as CSSProperties}>
                          <span className="fa-solid fa-person-shelter text-primary-darker">                          </span>
                        </div>
                        <h5 className="text-body fw-semibold mb-0">
01
                        </h5>
                      </div>
                      <div className="d-sm-flex align-items-center gap-2">
                        <div className="d-flex align-items-center justify-content-center bg-success-subtle rounded mb-2 mb-sm-0" style={{"height":"24px","width":"24px"} as CSSProperties}>
                          <span className="fa-solid fa-bed text-success-darker">                          </span>
                        </div>
                        <h5 className="text-body fw-semibold mb-0">
01
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-3 fw-bolder text-body-tertiary text-uppercase">
                      <span className="d-none d-sm-inline-block">
No. of 
                      </span>
 guests
                    </h6>
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-sm-flex align-items-center gap-2">
                        <div className="d-flex align-items-center justify-content-center bg-warning-subtle rounded mb-2 mb-sm-0" style={{"height":"24px","width":"24px"} as CSSProperties}>
                          <span className="fa-solid fa-user text-warning-darker">                          </span>
                        </div>
                        <h5 className="text-body fw-semibold mb-0">
02
                        </h5>
                      </div>
                      <div className="d-sm-flex align-items-center gap-2">
                        <div className="d-flex align-items-center justify-content-center bg-info-subtle rounded mb-2 mb-sm-0" style={{"height":"24px","width":"24px"} as CSSProperties}>
                          <span className="fa-solid fa-baby text-info-darker">                          </span>
                        </div>
                        <h5 className="text-body fw-semibold mb-0">
00
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-3 fw-bolder text-body-tertiary text-uppercase">
Bathroom
                    </h6>
                    <div className="d-sm-flex align-items-center gap-2">
                      <div className="d-flex align-items-center justify-content-center bg-danger-subtle rounded mb-2 mb-sm-0" style={{"height":"24px","width":"24px"} as CSSProperties}>
                        <span className="fa-solid fa-bath text-danger-darker">                        </span>
                      </div>
                      <h5 className="text-body fw-semibold mb-0 me-3">
01
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-auto mb-4">
                  <a href="#collapseRoomAvailableOnDates-3" className="btn btn-phoenix-info collapse-indicator me-2 px-3 d-xxl-block mb-xxl-2" data-bs-toggle={"collapse"}  role="button" aria-expanded="false" aria-controls="collapseRoomAvailableOnDates-3">
                    <span className="fa-solid fa-calendar me-2">                    </span>                    <span className="collapse-show">
Show Dates
                    </span>                    <span className="collapse-hide">
Hide Dates
                    </span>
                  </a>
                  <a href="#!" className="btn btn-primary px-5 px-md-7 px-xxl-5 flex-1">
Book now
                  </a>
                </div>
                <div className="col-12">
                  <div className="collapse" id="collapseRoomAvailableOnDates-3">
                    <div className="px-4 py-3 border border-translucent rounded mb-4 bg-body-highlight">
                      <div className="swiper-theme-container px-4">
                        <div className="swiper theme-slider" data-swiper={"{\"spaceBetween\":24,\"slidesPerView\":\"auto\",\"centeredSlide\":true,\"grabCursor\":true,\"breakpoints\":{\"768\":{\"spaceBetween\":32},\"1540\":{\"spaceBetween\":48}}}"}>
                          <div className="swiper-wrapper">
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
10 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-success">
09 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
11 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-success">
06 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
12 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-warning">
03 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
13 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$699.00
                                </h6>
                                <h6 className="text-danger">
N/A
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
14 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-success">
10 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
15 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-success">
08 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
16 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$499.00
                                </h6>
                                <h6 className="text-success">
12 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
17 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-success">
09 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
18 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-success">
10 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7 border-end">
                                <h6 className="mb-3 fw-bolder text-body">
19 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-warning">
02 units
                                </h6>
                              </div>
                            </div>
                            <div className="swiper-slide w-auto">
                              <div className="text-center pe-4 pe-md-5 pe-xl-7">
                                <h6 className="mb-3 fw-bolder text-body">
20 March
                                </h6>
                                <h6 className="mb-2 text-body-highlight fw-semibold">
$599.00
                                </h6>
                                <h6 className="text-warning">
04 units
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-nav">
                          <div className="swiper-button-next">
                            <span className="fas fa-chevron-right text-primary" data-fa-transform={"shrink-3"}>                            </span>
                          </div>
                          <div className="swiper-button-prev">
                            <span className="fas fa-chevron-left text-primary" data-fa-transform={"shrink-3"}>                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 border border-translucent rounded">
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
wifi
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
tv
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
common area
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
bathtub
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
Heating
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
Telephone
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
Television
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
common area
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
Kettle
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
iron
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
Coffee maker
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
refrigerator
                </a>
                <a href="#!" className="badge badge-phoenix bg-primary-subtle text-body-highlight py-1 fs-10 me-2">
Room service
                </a>
                <a href="#!" className="fw-bold pe-0 fs-9 text-nowrap">
+ 7 more
                </a>
              </div>
            </div>
          </div>
          <div className="border p-3 rounded-3 mt-5 d-flex flex-end-center gap-3 gap-sm-6 flex-wrap">
            <h2 className="text-body mb-0">
              <span className="fs-9 text-body-tertiary fw-bold me-2">
Total :
              </span>
04
            </h2>
            <a href="#!" className="btn btn-primary px-sm-7">
Confirm Booking              <span className="fa-solid fa-chevron-right ms-2">              </span>
            </a>
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
