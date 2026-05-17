'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function AddRoom() {
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
      <h2 className="fs-5 mb-4 mb-xl-5">
Add New Room
      </h2>
      <div className="theme-wizard" data-theme-wizard data-wizard-modal-disabled>
        <div className="row gx-0 gx-xl-5">
          <div className="col-xl-4 order-xl-1">
            <div className="scrollbar mb-4">
              <ul className="nav justify-content-between flex-nowrap nav-wizard nav-wizard-vertical-xl">
                <li className="nav-item">
                  <a href="#add-room-wizard-tab1" className="nav-link active py-0 py-xl-3"  data-bs-toggle={"tab"} data-wizard-step={"1"}>
                    <div className="text-center d-inline-block d-xl-flex align-items-center gap-3">
                      <span className="nav-item-circle-parent">
                        <span className="nav-item-circle">
                          <span className="fa-solid fa-file nav-item-icon">                          </span>
                          <span className="fa-solid fa-check check-icon">                          </span>
                        </span>
                      </span>
                      <span className="nav-item-title fs-9 fs-xl-8">
Details
                      </span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#add-room-wizard-tab2" className="nav-link py-0 py-xl-3"  data-bs-toggle={"tab"} data-wizard-step={"2"}>
                    <div className="text-center d-inline-block d-xl-flex align-items-center gap-3">
                      <span className="nav-item-circle-parent">
                        <span className="nav-item-circle">
                          <span className="fa-solid fa-usd nav-item-icon">                          </span>
                          <span className="fa-solid fa-check check-icon">                          </span>
                        </span>
                      </span>
                      <span className="nav-item-title fs-9 fs-xl-8">
Pricing
                      </span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#add-room-wizard-tab3" className="nav-link py-0 py-xl-3"  data-bs-toggle={"tab"} data-wizard-step={"3"}>
                    <div className="text-center d-inline-block d-xl-flex align-items-center gap-3">
                      <span className="nav-item-circle-parent">
                        <span className="nav-item-circle">
                          <span className="fa-solid fa-grip nav-item-icon">                          </span>
                          <span className="fa-solid fa-check check-icon">                          </span>
                        </span>
                      </span>
                      <span className="nav-item-title fs-9 fs-xl-8">
Amenities
                      </span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#add-room-wizard-tab4" className="nav-link py-0 py-xl-3"  data-bs-toggle={"tab"} data-wizard-step={"4"}>
                    <div className="text-center d-inline-block d-xl-flex align-items-center gap-3">
                      <span className="nav-item-circle-parent">
                        <span className="nav-item-circle">
                          <span className="fa-solid fa-images nav-item-icon">                          </span>
                          <span className="fa-solid fa-check check-icon">                          </span>
                        </span>
                      </span>
                      <span className="nav-item-title fs-9 fs-xl-8">
Photos
                      </span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#add-room-wizard-tab5" className="nav-link py-0 py-xl-3"  data-bs-toggle={"tab"} data-wizard-step={"5"}>
                    <div className="text-center d-inline-block d-xl-flex align-items-center gap-3">
                      <span className="nav-item-circle-parent">
                        <span className="nav-item-circle">
                          <span className="fas fa-check">                          </span>
                        </span>
                      </span>
                      <span className="nav-item-title fs-9 fs-xl-8">
Done
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-8 flex-1">
            <div className="tab-content">
              <div className="tab-pane active" role="tabpanel" aria-labelledby="add-room-wizard-tab1" id="add-room-wizard-tab1">
                <div className="row g-0">
                  <div className="col-xxl-8">
                    <form id="addPropertyWizardForm1" data-wizard-form={"1"}>
                      <h3 className="mb-6">
Room Details
                      </h3>
                      <h4 className="mb-2">
Share your room details
                      </h4>
                      <p className="mb-4 text-body-tertiary">
Enjoy a comfortable stay in our well-appointed rooms with a variety of options to choose from.
                      </p>
                      <div className="row g-3 g-sm-4 mb-6">
                        <div className="col-sm-6 col-md-7">
                          <label className="mb-1 text-body-highlight fw-bold" htmlFor="room-category">
Room category
                          </label>
                          <select className="form-select" id="room-category">
                            <option>
King
                            </option>
                            <option>
Bridal suite
                            </option>
                            <option>
Single room
                            </option>
                          </select>
                        </div>
                        <div className="col-sm-6 col-md-5">
                          <label className="mb-1 text-body-highlight fw-bold" htmlFor="room-name">
Room name (Optional)
                          </label>
                          <input className="form-control" id="room-name" type="text" placeholder="Enter name" />
                        </div>
                      </div>
                      <div className="row gx-3 gx-sm-4 gy-3 mb-6">
                        <div className="col-6 col-sm-4">
                          <label className="mb-1 text-body-highlight fw-bold" htmlFor="bed-type">
Bed type
                          </label>
                          <select className="form-select" id="bed-type">
                            <option>
Twin bed
                            </option>
                            <option>
King bed
                            </option>
                            <option>
Queen bed
                            </option>
                            <option>
Single bed
                            </option>
                            <option>
Double bed
                            </option>
                            <option>
Twin XL bed
                            </option>
                            <option>
Quad Bed
                            </option>
                            <option>
Executive Suite
                            </option>
                            <option>
Bunk Bed
                            </option>
                          </select>
                        </div>
                        <div className="col-6 col-sm-4">
                          <label className="mb-1 text-body-highlight fw-bold" htmlFor="adult">
Adult
                          </label>
                          <div className="input-group" data-quantity>
                            <button className="btn border px-3 bg-body-emphasis bg-body-hover lh-1" data-type={"minus"}>
                              <span className="fa-solid fa-minus">                              </span>
                            </button>
                            <input className="form-control input-spin-none text-center" id="adult" type="number" defaultValue="2" />
                            <button className="btn border px-3 bg-body-emphasis bg-body-hover lh-1" data-type={"plus"}>
                              <span className="fa-solid fa-plus">                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4">
                          <label className="mb-1 text-body-highlight fw-bold" htmlFor="child-allow">
Children allowed
                          </label>
                          <div className="input-group" data-quantity>
                            <button className="btn border px-3 bg-body-emphasis bg-body-hover lh-1" data-type={"minus"}>
                              <span className="fa-solid fa-minus">                              </span>
                            </button>
                            <input className="form-control input-spin-none text-center" id="child-allow" type="number" defaultValue="2" />
                            <button className="btn border px-3 bg-body-emphasis bg-body-hover lh-1" data-type={"plus"}>
                              <span className="fa-solid fa-plus">                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4">
                          <label className="mb-1 text-body-highlight fw-bold" htmlFor="number-of-bed">
Number of bed
                          </label>
                          <div className="input-group" data-quantity>
                            <button className="btn border px-3 bg-body-emphasis bg-body-hover lh-1" data-type={"minus"}>
                              <span className="fa-solid fa-minus">                              </span>
                            </button>
                            <input className="form-control input-spin-none text-center" id="number-of-bed" type="number" defaultValue="2" />
                            <button className="btn border px-3 bg-body-emphasis bg-body-hover lh-1" data-type={"plus"}>
                              <span className="fa-solid fa-plus">                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4">
                          <label className="mb-1 text-body-highlight fw-bold" htmlFor="bathroom">
Bathroom
                          </label>
                          <div className="input-group" data-quantity>
                            <button className="btn border px-3 bg-body-emphasis bg-body-hover lh-1" data-type={"minus"}>
                              <span className="fa-solid fa-minus">                              </span>
                            </button>
                            <input className="form-control input-spin-none text-center" id="bathroom" type="number" defaultValue="2" />
                            <button className="btn border px-3 bg-body-emphasis bg-body-hover lh-1" data-type={"plus"}>
                              <span className="fa-solid fa-plus">                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4">
                          <label className="mb-1 text-body-highlight fw-bold" htmlFor="balcony">
Balcony
                          </label>
                          <div className="input-group" data-quantity>
                            <button className="btn border px-3 bg-body-emphasis bg-body-hover lh-1" data-type={"minus"}>
                              <span className="fa-solid fa-minus">                              </span>
                            </button>
                            <input className="form-control input-spin-none text-center" id="balcony" type="number" defaultValue="2" />
                            <button className="btn border px-3 bg-body-emphasis bg-body-hover lh-1" data-type={"plus"}>
                              <span className="fa-solid fa-plus">                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="row g-3 g-sm-4">
                        <div className="col-6">
                          <label className="mb-1 text-body-highlight fw-bold" htmlFor="room-of-this-type">
Room of this type
                          </label>
                          <div className="input-group" data-quantity>
                            <button className="btn border px-3 bg-body-emphasis bg-body-hover lh-1" data-type={"minus"}>
                              <span className="fa-solid fa-minus">                              </span>
                            </button>
                            <input className="form-control input-spin-none text-center" id="room-of-this-type" type="number" defaultValue="2" />
                            <button className="btn border px-3 bg-body-emphasis bg-body-hover lh-1" data-type={"plus"}>
                              <span className="fa-solid fa-plus">                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="col-6">
                          <label className="mb-1 text-body-highlight fw-bold">
Room size (OPT)
                          </label>
                          <div className="input-group">
                            <input className="form-control form-icon-input" id="room-size" type="text" placeholder="Size" />
                            <button className="btn px-3 bg-body-emphasis bg-body-hover rounded rounded-start-0 border" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                              <span className="me-2">
sq. m
                              </span>
                              <span className="fa-solid fa-chevron-down fs-10">                              </span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a href="#!" className="dropdown-item">
sq. m
                                </a>
                              </li>
                              <li>
                                <a href="#!" className="dropdown-item">
sq. ft
                                </a>
                              </li>
                              <li>
                                <a href="#!" className="dropdown-item">
sq. in
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <h4 className="mt-7 mb-2">
Sleeping arrangements
                      </h4>
                      <p className="mb-4 text-body-tertiary">
Sleep well in our comfortable rooms with modern amenities.
                      </p>
                      <div className="row gx-3 gx-sm-4 gy-3">
                        <div className="col-6 col-sm-4">
                          <label className="mb-1 text-body-highlight fw-bold" htmlFor="single-bed">
Single bed
                          </label>
                          <div className="input-group" data-quantity>
                            <button className="btn border px-3 bg-body-emphasis bg-body-hover lh-1" data-type={"minus"}>
                              <span className="fa-solid fa-minus">                              </span>
                            </button>
                            <input className="form-control input-spin-none text-center" id="single-bed" type="number" defaultValue="2" />
                            <button className="btn border px-3 bg-body-emphasis bg-body-hover lh-1" data-type={"plus"}>
                              <span className="fa-solid fa-plus">                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4">
                          <label className="mb-1 text-body-highlight fw-bold" htmlFor="double-bed">
Double bed
                          </label>
                          <div className="input-group" data-quantity>
                            <button className="btn border px-3 bg-body-emphasis bg-body-hover lh-1" data-type={"minus"}>
                              <span className="fa-solid fa-minus">                              </span>
                            </button>
                            <input className="form-control input-spin-none text-center" id="double-bed" type="number" defaultValue="2" />
                            <button className="btn border px-3 bg-body-emphasis bg-body-hover lh-1" data-type={"plus"}>
                              <span className="fa-solid fa-plus">                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4">
                          <label className="mb-1 text-body-highlight fw-bold" htmlFor="queen-bed">
Queen bed
                          </label>
                          <div className="input-group" data-quantity>
                            <button className="btn border px-3 bg-body-emphasis bg-body-hover lh-1" data-type={"minus"}>
                              <span className="fa-solid fa-minus">                              </span>
                            </button>
                            <input className="form-control input-spin-none text-center" id="queen-bed" type="number" defaultValue="2" />
                            <button className="btn border px-3 bg-body-emphasis bg-body-hover lh-1" data-type={"plus"}>
                              <span className="fa-solid fa-plus">                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4">
                          <label className="mb-1 text-body-highlight fw-bold" htmlFor="king-bed">
King bed
                          </label>
                          <div className="input-group" data-quantity>
                            <button className="btn border px-3 bg-body-emphasis bg-body-hover lh-1" data-type={"minus"}>
                              <span className="fa-solid fa-minus">                              </span>
                            </button>
                            <input className="form-control input-spin-none text-center" id="king-bed" type="number" defaultValue="2" />
                            <button className="btn border px-3 bg-body-emphasis bg-body-hover lh-1" data-type={"plus"}>
                              <span className="fa-solid fa-plus">                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4">
                          <label className="mb-1 text-body-highlight fw-bold" htmlFor="sofa-bed">
Sofa bed
                          </label>
                          <div className="input-group" data-quantity>
                            <button className="btn border px-3 bg-body-emphasis bg-body-hover lh-1" data-type={"minus"}>
                              <span className="fa-solid fa-minus">                              </span>
                            </button>
                            <input className="form-control input-spin-none text-center" id="sofa-bed" type="number" defaultValue="2" />
                            <button className="btn border px-3 bg-body-emphasis bg-body-hover lh-1" data-type={"plus"}>
                              <span className="fa-solid fa-plus">                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4">
                          <label className="mb-1 text-body-highlight fw-bold" htmlFor="extra-bed">
Extra bed
                          </label>
                          <div className="input-group" data-quantity>
                            <button className="btn border px-3 bg-body-emphasis bg-body-hover lh-1" data-type={"minus"}>
                              <span className="fa-solid fa-minus">                              </span>
                            </button>
                            <input className="form-control input-spin-none text-center" id="extra-bed" type="number" defaultValue="2" />
                            <button className="btn border px-3 bg-body-emphasis bg-body-hover lh-1" data-type={"plus"}>
                              <span className="fa-solid fa-plus">                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="tab-pane" role="tabpanel" aria-labelledby="add-room-wizard-tab2" id="add-room-wizard-tab2">
                <div className="row g-0">
                  <div className="col-xxl-8">
                    <form id="addPropertyWizardForm2" data-wizard-form={"2"}>
                      <h3 className="mb-6">
Pricing
                      </h3>
                      <h4 className="mb-2">
Base price per night
                      </h4>
                      <p className="mb-5 text-body-tertiary">
Get a great value stay with us, starting at our base price per night.
                      </p>
                      <div className="nav nav-tabs mb-2" id="day-week-pricing" role="tablist">
                        <div className="form-check form-check-inline me-3">
                          <input className="form-check-input active" type="radio" id="all-day-tab" name="dayWeekPricing" defaultChecked data-bs-toggle={"tab"} data-bs-target={"#allDayPricing"} aria-controls="allDayPricing" aria-selected="true" />
                          <label className="form-check-label" htmlFor="all-day-tab">
Across all days
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" id="day-of-week-tab" name="dayWeekPricing" data-bs-toggle={"tab"} data-bs-target={"#dayOfWeekPricing"} aria-controls="dayOfWeekPricing" aria-selected="true" />
                          <label className="form-check-label" htmlFor="day-of-week-tab">
By day of week
                          </label>
                        </div>
                      </div>
                      <div className="tab-content">
                        <div className="tab-pane fade show active" id="allDayPricing" role="tabpanel" aria-labelledby="all-day-tab" tabIndex={0}>
                          <div className="row gx-2 w-sm-60">
                            <div className="col-8">
                              <div className="form-floating">
                                <input className="form-control" type="text" name="room-price" id="room-price" placeholder="Room price" />
                                <label htmlFor="room-price">
Room price
                                </label>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="form-floating">
                                <select className="form-select" name="room-price-currency" id="room-price-currency">
                                  <option value="1">
USD
                                  </option>
                                  <option value="2">
EUR
                                  </option>
                                  <option value="2">
BDT
                                  </option>
                                </select>
                                <label htmlFor="room-price-currency">
Currency
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="dayOfWeekPricing" role="tabpanel" aria-labelledby="day-of-week-tab" tabIndex={0}>
                          <div className="card bg-body-highlight">
                            <div className="card-body">
                              <div className="row gx-2 justify-content-between">
                                <div className="col col-sm-auto">
                                  <label className="mb-1 text-body-highlight fw-bold fs-9" htmlFor="date">
Date
                                  </label>
                                  <div className="form-icon-container">
                                    <input className="form-control datetimepicker form-icon-input" id="date" type="text" placeholder="Start date" data-options={"{\"disableMobile\":true,\"mode\":\"range\",\"minDate\":\"today\",\"dateFormat\":\"d-m-y\"}"} />
                                    <span className="fa-solid fa-calendar-alt form-icon fs-9 text-body-tertiary" data-fa-transform={"up-1"}>                                    </span>
                                  </div>
                                </div>
                                <div className="col-auto">
                                  <label className="mb-1 text-body-highlight fw-bold fs-9" htmlFor="day-of-week-currency">
Currency
                                  </label>
                                  <select className="form-select" name="day-of-week-currency" id="day-of-week-currency">
                                    <option value="1">
USD
                                    </option>
                                    <option value="2">
EUR
                                    </option>
                                    <option value="2">
BDT
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <hr className="mb-2" />
                              <div className="row g-2">
                                <div className="col-4 col-sm">
                                  <label className="mb-1 text-body-highlight fw-bold fs-9" htmlFor="sunday">
Sunday
                                  </label>
                                  <input className="form-control input-spin-none" id="sunday" type="number" defaultValue="100" />
                                </div>
                                <div className="col-4 col-sm">
                                  <label className="mb-1 text-body-highlight fw-bold fs-9" htmlFor="monday">
Monday
                                  </label>
                                  <input className="form-control input-spin-none" id="monday" type="number" defaultValue="100" />
                                </div>
                                <div className="col-4 col-sm">
                                  <label className="mb-1 text-body-highlight fw-bold fs-9" htmlFor="tuesday">
Tuesday
                                  </label>
                                  <input className="form-control input-spin-none" id="tuesday" type="number" defaultValue="100" />
                                </div>
                                <div className="col-4 col-sm">
                                  <label className="mb-1 text-body-highlight fw-bold fs-9" htmlFor="wednesday">
Wednesday
                                  </label>
                                  <input className="form-control input-spin-none" id="wednesday" type="number" defaultValue="100" />
                                </div>
                                <div className="col-4 col-sm">
                                  <label className="mb-1 text-body-highlight fw-bold fs-9" htmlFor="thursday">
Thursday
                                  </label>
                                  <input className="form-control input-spin-none" id="thursday" type="number" defaultValue="100" />
                                </div>
                                <div className="col-4 col-sm">
                                  <label className="mb-1 text-body-highlight fw-bold fs-9" htmlFor="friday">
Friday
                                  </label>
                                  <input className="form-control input-spin-none" id="friday" type="number" defaultValue="100" />
                                </div>
                                <div className="col-4 col-sm">
                                  <label className="mb-1 text-body-highlight fw-bold fs-9" htmlFor="saturday">
Saturday
                                  </label>
                                  <input className="form-control input-spin-none" id="saturday" type="number" defaultValue="100" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <label className="mb-2 mt-5 lh-1 text-body-highlight fw-bold">
How many people are included in the base rate?
                      </label>
                      <div className="form-floating w-sm-60">
                        <select className="form-select" name="people-select" id="people-select">
                          <option value="1">
05 People
                          </option>
                          <option value="2">
10 People
                          </option>
                          <option value="2">
15 People
                          </option>
                        </select>
                        <label htmlFor="people-select">
Select
                        </label>
                      </div>
                      <div className="d-flex align-items-center gap-2 mt-7">
                        <label className="fs-7 fw-bold text-body-emphasis" htmlFor="extraBedSwitch">
Extra bed option
                        </label>
                        <div className="form-check form-switch mb-0">
                          <input className="form-check-input" id="extraBedSwitch" type="checkbox" role="button" data-bs-toggle={"collapse"} data-bs-target={"#extraBedCollapse"} aria-expanded="false" aria-controls="extraBedCollapse" aria-pressed="true" />
                        </div>
                      </div>
                      <p className="fs-9 text-body-tertiary mb-0">
Can you provide extra bed
                      </p>
                      <div className="collapse" id="extraBedCollapse">
                        <div className="mt-4">
                          <div className="row gx-3">
                            <div className="col-6 col-sm-4 col-xxl-5">
                              <label className="mb-1 text-body-highlight fw-bold" htmlFor="number-of-bed-pricing">
Number of bed
                              </label>
                              <div className="input-group gap-1" data-quantity>
                                <button className="btn btn-phoenix-primary px-3 bg-body-emphasis bg-body-hover rounded" data-type={"minus"}>
-
                                </button>
                                <input className="form-control flex-1 border-translucent input-spin-none text-center rounded" id="number-of-bed-pricing" type="number" defaultValue="2" />
                                <button className="btn btn-phoenix-primary px-3 bg-body-emphasis bg-body-hover rounded" data-type={"plus"}>
+
                                </button>
                              </div>
                            </div>
                            <div className="col-6 col-sm-4 col-xxl-5">
                              <label className="mb-1 text-body-highlight fw-bold" htmlFor="pricing-bed-type">
Bed type
                              </label>
                              <select className="form-select" id="pricing-bed-type">
                                <option>
Twin bed
                                </option>
                                <option>
King bed
                                </option>
                                <option>
Queen bed
                                </option>
                                <option>
Single bed
                                </option>
                                <option>
Double bed
                                </option>
                                <option>
Twin XL bed
                                </option>
                                <option>
Quad Bed
                                </option>
                                <option>
Quad Bed
                                </option>
                                <option>
Executive Suite
                                </option>
                                <option>
Bunk Bed
                                </option>
                              </select>
                            </div>
                          </div>
                          <h5 className="mt-4 mb-3">
Check the box(es) if you can accommodate the following guests in extra beds.
                          </h5>
                          <div className="row gx-2 gy-0 align-items-center mb-3">
                            <div className="col-12 col-sm-auto">
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="age-range-1" />
                                <label className="form-check-label text-body-emphasis" htmlFor="age-range-1">
02-06 year olds
                                </label>
                              </div>
                            </div>
                            <div className="col-auto">
                              <div className="form-floating">
                                <input className="form-control" type="text" name="room-price" id="room-price-1" placeholder="Room price" />
                                <label htmlFor="room-price-1">
Room price
                                </label>
                              </div>
                            </div>
                            <div className="col-auto">
                              <div className="form-floating">
                                <select className="form-select" name="room-price-currency" id="room-price-currency-1">
                                  <option value="1">
USD
                                  </option>
                                  <option value="2">
EUR
                                  </option>
                                  <option value="2">
BDT
                                  </option>
                                </select>
                                <label htmlFor="room-price-currency-1">
Currency
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="row gx-2 gy-0 align-items-center mb-3">
                            <div className="col-12 col-sm-auto">
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="age-range-2" />
                                <label className="form-check-label text-body-emphasis" htmlFor="age-range-2">
07-12 year olds
                                </label>
                              </div>
                            </div>
                            <div className="col-auto">
                              <div className="form-floating">
                                <input className="form-control" type="text" name="room-price" id="room-price-2" placeholder="Room price" />
                                <label htmlFor="room-price-2">
Room price
                                </label>
                              </div>
                            </div>
                            <div className="col-auto">
                              <div className="form-floating">
                                <select className="form-select" name="room-price-currency" id="room-price-currency-2">
                                  <option value="1">
USD
                                  </option>
                                  <option value="2">
EUR
                                  </option>
                                  <option value="2">
BDT
                                  </option>
                                </select>
                                <label htmlFor="room-price-currency-2">
Currency
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="row gx-2 gy-0 align-items-center mb-3">
                            <div className="col-12 col-sm-auto">
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="age-range-3" />
                                <label className="form-check-label text-body-emphasis" htmlFor="age-range-3">
12-16 year olds
                                </label>
                              </div>
                            </div>
                            <div className="col-auto">
                              <div className="form-floating">
                                <input className="form-control" type="text" name="room-price" id="room-price-3" placeholder="Room price" />
                                <label htmlFor="room-price-3">
Room price
                                </label>
                              </div>
                            </div>
                            <div className="col-auto">
                              <div className="form-floating">
                                <select className="form-select" name="room-price-currency" id="room-price-currency-3">
                                  <option value="1">
USD
                                  </option>
                                  <option value="2">
EUR
                                  </option>
                                  <option value="2">
BDT
                                  </option>
                                </select>
                                <label htmlFor="room-price-currency-3">
Currency
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="row gx-2 gy-0 align-items-center">
                            <div className="col-12 col-sm-auto">
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="age-range-4" />
                                <label className="form-check-label text-body-emphasis me-5" htmlFor="age-range-4">
For adults
                                </label>
                              </div>
                            </div>
                            <div className="col-auto">
                              <div className="form-floating">
                                <input className="form-control" type="text" name="room-price" id="room-price-4" placeholder="Room price" />
                                <label htmlFor="room-price-4">
Room price
                                </label>
                              </div>
                            </div>
                            <div className="col-auto">
                              <div className="form-floating">
                                <select className="form-select" name="room-price-currency" id="room-price-currency-4">
                                  <option value="1">
USD
                                  </option>
                                  <option value="2">
EUR
                                  </option>
                                  <option value="2">
BDT
                                  </option>
                                </select>
                                <label htmlFor="room-price-currency-4">
Currency
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h4 className="mb-2 mt-7">
Breakfast
                      </h4>
                      <p className="mb-4 text-body-tertiary">
Do you own multiple hotels, or are you part of a property management company or group?
                      </p>
                      <div className="nav nav-tabs mb-2" id="breakfastTab" role="tablist">
                        <div className="form-check form-check-inline me-3">
                          <input className="form-check-input active" type="radio" id="breakfast-included-tab" name="breakfast-radio" defaultChecked data-bs-toggle={"tab"} data-bs-target={"#breakfastInCluded"} aria-controls="breakfastInCluded" aria-selected="true" />
                          <label className="form-check-label" htmlFor="breakfast-included-tab">
Yes, it's included in the price
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" id="breakfast-not-included-tab" name="breakfast-radio" data-bs-toggle={"tab"} data-bs-target={"#breakfastNotIncluded"} aria-controls="breakfastNotIncluded" aria-selected="true" />
                          <label className="form-check-label" htmlFor="breakfast-not-included-tab">
No
                          </label>
                        </div>
                      </div>
                      <div className="tab-content">
                        <div className="tab-pane fade show active w-sm-60" id="breakfastInCluded" role="tabpanel" aria-labelledby="breakfast-included-tab" tabIndex={0}>
                          <h5 className="text-body-highlight my-4">
What type of food is available for breakfast for guests?
                          </h5>
                          <div className="form-floating">
                            <select className="form-select" name="breakfast-type-1" id="breakfast-type-1">
                              <option value="1">
Continental breakfast
                              </option>
                              <option value="2">
Option 2
                              </option>
                              <option value="2">
Option 3
                              </option>
                            </select>
                            <label htmlFor="breakfast-type-1">
Option 1
                            </label>
                          </div>
                          <div className="form-floating my-2">
                            <select className="form-select" name="breakfast-type-2" id="breakfast-type-2">
                              <option value="1">
American breakfast
                              </option>
                              <option value="2">
Option 2
                              </option>
                              <option value="2">
Option 3
                              </option>
                            </select>
                            <label htmlFor="breakfast-type-2">
Option 2
                            </label>
                          </div>
                          <div className="form-floating">
                            <select className="form-select" name="breakfast-type-3" id="breakfast-type-3">
                              <option value="1">
Option 1
                              </option>
                              <option value="2">
Option 2
                              </option>
                              <option value="2">
Option 3
                              </option>
                            </select>
                            <label htmlFor="breakfast-type-3">
Option 3
                            </label>
                          </div>
                          <div className="text-center mt-4">
                            <a href="#!" className="fw-bold fs-9">
                              <span className="fa-solid fa-plus me-2">                              </span>Add more
                            </a>
                          </div>
                        </div>
                        <div className="tab-pane" id="breakfastNotIncluded" role="tabpanel" aria-labelledby="breakfast-not-included-tab" tabIndex={0}>                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="tab-pane" role="tabpanel" aria-labelledby="add-room-wizard-tab3" id="add-room-wizard-tab3">
                <div className="row g-0">
                  <div className="col-xxl-8">
                    <form id="addPropertyWizardForm3" noValidate data-wizard-form={"3"}>
                      <div className="d-sm-flex flex-between-center gap-3">
                        <h3 className="mb-4 mb-sm-0">
Amenities
                        </h3>
                        <div className="row g-3">
                          <div className="col-sm-auto flex-sm-fill">
                            <div className="form-floating">
                              <input className="form-control" type="text" name="add-room-wizard-search-amenities" id="add-room-wizardwizard-search-amenities" placeholder="Search amenities" defaultValue="" />
                              <label htmlFor="add-room-wizardwizard-search-amenities">
Search amenities
                              </label>
                              <span className="fa-solid fa-search position-absolute text-body-quaternary fs-9 end-0 top-0 mt-3 me-3" data-fa-transform={"down-2"}>                              </span>
                            </div>
                          </div>
                          <div className="col-sm-auto">
                            <button className="btn btn-phoenix-primary w-100 h-100 fs-8">
                              <span className="fa-solid fa-plus me-2">                              </span>
Add amenity
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-button-arrow-icon accordion mt-2" id="generalAmenitiesAccordion">
                        <div className="accordion-item px-0 py-3">
                          <h5 className="accordion-header">
                            <button className="accordion-button py-0 text-body-highlight" type="button" data-bs-toggle={"collapse"} data-bs-target={"#popularAmenities"} aria-expanded="true" aria-controls="popularAmenities">
                              <span className="circle-icon-item border border-primary text-primary me-3">
                                <span className="fa-solid fa-fire">                                </span>
                              </span>
                              <span className="flex-1">
Popular amenities
                              </span>
                            </button>
                          </h5>
                          <div className="accordion-collapse collapse ms-md-9 show" id="popularAmenities" data-bs-parent={"#generalAmenitiesAccordion"}>
                            <div className="form-price-tier border p-3 rounded-2 my-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="wifi" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="wifi">
Wifi
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="wifi-free" name="Wifi-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="wifi-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="wifi-paid" name="Wifi-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="wifi-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="wifi-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="wifi-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="wifi-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="wifi-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="wifi-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="wifi-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2 mb-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="breakfast" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="breakfast">
Breakfast
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="breakfast-free" name="Breakfast-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="breakfast-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="breakfast-paid" name="Breakfast-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="breakfast-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="breakfast-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="breakfast-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="breakfast-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="breakfast-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="breakfast-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="breakfast-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2 mb-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="gym" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="gym">
Gym
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="gym-free" name="Gym-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="gym-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="gym-paid" name="Gym-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="gym-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="gym-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="gym-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="gym-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="gym-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="gym-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="gym-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2 mb-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="swimming" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="swimming">
Swimming pool
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="swimming-free" name="Swimming pool-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="swimming-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="swimming-paid" name="Swimming pool-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="swimming-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="swimming-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="swimming-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="swimming-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="swimming-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="swimming-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="swimming-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2 mb-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="in-room" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="in-room">
In-room coffee/tea
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="in-room-free" name="In-room coffee/tea-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="in-room-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="in-room-paid" name="In-room coffee/tea-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="in-room-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="in-room-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="in-room-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="in-room-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="in-room-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="in-room-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="in-room-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2 mb-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="daily-housekeeping" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="daily-housekeeping">
Daily housekeeping
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="daily-housekeeping-free" name="Daily housekeeping-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="daily-housekeeping-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="daily-housekeeping-paid" name="Daily housekeeping-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="daily-housekeeping-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="daily-housekeeping-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="daily-housekeeping-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="daily-housekeeping-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="daily-housekeeping-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="daily-housekeeping-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="daily-housekeeping-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2 mb-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="bar" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="bar">
Bar / Lounge
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="bar-free" name="Bar / Lounge-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="bar-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="bar-paid" name="Bar / Lounge-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="bar-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="bar-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="bar-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="bar-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="bar-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="bar-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="bar-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2 mb-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="laundry" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="laundry">
Laundry
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="laundry-free" name="Laundry-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="laundry-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="laundry-paid" name="Laundry-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="laundry-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="laundry-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="laundry-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="laundry-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="laundry-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="laundry-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="laundry-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2 mb-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="newspaper" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="newspaper">
Newspaper
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="newspaper-free" name="Newspaper-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="newspaper-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="newspaper-paid" name="Newspaper-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="newspaper-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="newspaper-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="newspaper-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="newspaper-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="newspaper-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="newspaper-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="newspaper-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2 mb-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="bicycle" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="bicycle">
Bicycle
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="bicycle-free" name="Bicycle-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="bicycle-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="bicycle-paid" name="Bicycle-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="bicycle-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="bicycle-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="bicycle-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="bicycle-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="bicycle-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="bicycle-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="bicycle-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2 mb-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="air" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="air">
Air conditioning
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="air-free" name="Air conditioning-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="air-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="air-paid" name="Air conditioning-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="air-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="air-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="air-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="air-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="air-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="air-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="air-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2 mb-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="games" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="games">
Games room
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="games-free" name="Games room-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="games-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="games-paid" name="Games room-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="games-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="games-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="games-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="games-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="games-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="games-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="games-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="beach" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="beach">
Beach view
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="beach-free" name="Beach view-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="beach-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="beach-paid" name="Beach view-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="beach-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="beach-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="beach-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="beach-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="beach-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="beach-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="beach-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item px-0 py-3">
                          <h5 className="accordion-header">
                            <button className="accordion-button py-0 text-body-highlight collapsed" type="button" data-bs-toggle={"collapse"} data-bs-target={"#foodAndDrink"} aria-expanded="false" aria-controls="foodAndDrink">
                              <span className="circle-icon-item border border-primary text-primary me-3">
                                <span className="fa-solid fa-utensils">                                </span>
                              </span>
                              <span className="flex-1 me-2">
{"Food & Drink"}
                              </span>
                            </button>
                          </h5>
                          <div className="accordion-collapse collapse ms-md-9" id="foodAndDrink" data-bs-parent={"#generalAmenitiesAccordion"}>
                            <div className="form-price-tier border p-3 rounded-2 my-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="restaurants" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="restaurants">
Restaurants
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="restaurants-free" name="Restaurants-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="restaurants-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="restaurants-paid" name="Restaurants-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="restaurants-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="restaurants-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="restaurants-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="restaurants-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="restaurants-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="restaurants-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="restaurants-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2 mb-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="bars" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="bars">
Bars
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="bars-free" name="Bars-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="bars-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="bars-paid" name="Bars-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="bars-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="bars-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="bars-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="bars-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="bars-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="bars-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="bars-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2 mb-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="in-room-dining" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="in-room-dining">
In-Room Dining
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="in-room-dining-free" name="In-Room Dining-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="in-room-dining-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="in-room-dining-paid" name="In-Room Dining-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="in-room-dining-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="in-room-dining-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="in-room-dining-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="in-room-dining-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="in-room-dining-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="in-room-dining-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="in-room-dining-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2 mb-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="family-friendly-dining" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="family-friendly-dining">
Family-Friendly Dining
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="family-friendly-dining-free" name="Family-Friendly Dining-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="family-friendly-dining-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="family-friendly-dining-paid" name="Family-Friendly Dining-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="family-friendly-dining-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="family-friendly-dining-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="family-friendly-dining-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="family-friendly-dining-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="family-friendly-dining-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="family-friendly-dining-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="family-friendly-dining-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="breakfast-buffet" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="breakfast-buffet">
Breakfast Buffet
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="breakfast-buffet-free" name="Breakfast Buffet-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="breakfast-buffet-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="breakfast-buffet-paid" name="Breakfast Buffet-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="breakfast-buffet-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="breakfast-buffet-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="breakfast-buffet-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="breakfast-buffet-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="breakfast-buffet-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="breakfast-buffet-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="breakfast-buffet-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item px-0 py-3">
                          <h5 className="accordion-header">
                            <button className="accordion-button py-0 text-body-highlight collapsed" type="button" data-bs-toggle={"collapse"} data-bs-target={"#outdoorAndView"} aria-expanded="false" aria-controls="outdoorAndView">
                              <span className="circle-icon-item border border-primary text-primary me-3">
                                <span className="fa-solid fa-umbrella-beach">                                </span>
                              </span>
                              <span className="flex-1 me-2">
{"Outdoor & View"}
                              </span>
                            </button>
                          </h5>
                          <div className="accordion-collapse collapse ms-md-9" id="outdoorAndView" data-bs-parent={"#generalAmenitiesAccordion"}>
                            <div className="form-price-tier border p-3 rounded-2 my-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="garden-or-courtyard" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="garden-or-courtyard">
Garden or Courtyard
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="garden-or-courtyard-free" name="Garden or Courtyard-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="garden-or-courtyard-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="garden-or-courtyard-paid" name="Garden or Courtyard-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="garden-or-courtyard-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="garden-or-courtyard-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="garden-or-courtyard-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="garden-or-courtyard-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="garden-or-courtyard-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="garden-or-courtyard-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="garden-or-courtyard-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2 mb-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="scenic-views" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="scenic-views">
Scenic Views
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="scenic-views-free" name="Scenic Views-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="scenic-views-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="scenic-views-paid" name="Scenic Views-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="scenic-views-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="scenic-views-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="scenic-views-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="scenic-views-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="scenic-views-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="scenic-views-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="scenic-views-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2 mb-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="sunbathing-areas" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="sunbathing-areas">
Sunbathing Areas
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="sunbathing-areas-free" name="Sunbathing Areas-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="sunbathing-areas-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="sunbathing-areas-paid" name="Sunbathing Areas-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="sunbathing-areas-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="sunbathing-areas-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="sunbathing-areas-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="sunbathing-areas-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="sunbathing-areas-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="sunbathing-areas-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="sunbathing-areas-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="outdoor-lounge-areas" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="outdoor-lounge-areas">
Outdoor Lounge Areas
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="outdoor-lounge-areas-free" name="Outdoor Lounge Areas-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="outdoor-lounge-areas-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="outdoor-lounge-areas-paid" name="Outdoor Lounge Areas-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="outdoor-lounge-areas-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="outdoor-lounge-areas-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="outdoor-lounge-areas-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="outdoor-lounge-areas-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="outdoor-lounge-areas-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="outdoor-lounge-areas-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="outdoor-lounge-areas-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item px-0 py-3">
                          <h5 className="accordion-header">
                            <button className="accordion-button py-0 text-body-highlight collapsed" type="button" data-bs-toggle={"collapse"} data-bs-target={"#intertainment"} aria-expanded="false" aria-controls="intertainment">
                              <span className="circle-icon-item border border-primary text-primary me-3">
                                <span className="fa-solid fa-cart-shopping">                                </span>
                              </span>
                              <span className="flex-1 me-2">
{"Entertainment & Family Services"}
                              </span>
                            </button>
                          </h5>
                          <div className="accordion-collapse collapse ms-md-9" id="intertainment" data-bs-parent={"#generalAmenitiesAccordion"}>
                            <div className="form-price-tier border p-3 rounded-2 my-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="game-room" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="game-room">
Game Room
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="game-room-free" name="Game Room-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="game-room-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="game-room-paid" name="Game Room-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="game-room-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="game-room-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="game-room-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="game-room-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="game-room-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="game-room-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="game-room-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2 mb-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="play-area" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="play-area">
Children's Play Area
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="play-area-free" name={"Children's Play Area-radio"} defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="play-area-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="play-area-paid" name={"Children's Play Area-radio"} defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="play-area-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="play-area-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="play-area-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="play-area-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="play-area-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="play-area-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="play-area-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2 mb-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="sports-facilities" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="sports-facilities">
Sports Facilities
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="sports-facilities-free" name="Sports Facilities-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="sports-facilities-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="sports-facilities-paid" name="Sports Facilities-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="sports-facilities-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="sports-facilities-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="sports-facilities-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="sports-facilities-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="sports-facilities-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="sports-facilities-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="sports-facilities-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="babysitting-services" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="babysitting-services">
Babysitting Services
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="babysitting-services-free" name="Babysitting Services-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="babysitting-services-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="babysitting-services-paid" name="Babysitting Services-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="babysitting-services-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="babysitting-services-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="babysitting-services-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="babysitting-services-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="babysitting-services-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="babysitting-services-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="babysitting-services-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item px-0 py-3">
                          <h5 className="accordion-header">
                            <button className="accordion-button py-0 text-body-highlight collapsed" type="button" data-bs-toggle={"collapse"} data-bs-target={"#mediaAndTechnology"} aria-expanded="false" aria-controls="mediaAndTechnology">
                              <span className="circle-icon-item border border-primary text-primary me-3">
                                <span className="fa-solid fa-video">                                </span>
                              </span>
                              <span className="flex-1 me-2">
{"Media & Technology"}
                              </span>
                            </button>
                          </h5>
                          <div className="accordion-collapse collapse ms-md-9" id="mediaAndTechnology" data-bs-parent={"#generalAmenitiesAccordion"}>
                            <div className="form-price-tier border p-3 rounded-2 my-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="high-speed-internet" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="high-speed-internet">
High-Speed Internet
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="high-speed-internet-free" name="High-Speed Internet-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="high-speed-internet-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="high-speed-internet-paid" name="High-Speed Internet-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="high-speed-internet-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="high-speed-internet-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="high-speed-internet-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="high-speed-internet-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="high-speed-internet-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="high-speed-internet-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="high-speed-internet-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2 mb-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="business-center" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="business-center">
Business Center
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="business-center-free" name="Business Center-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="business-center-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="business-center-paid" name="Business Center-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="business-center-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="business-center-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="business-center-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="business-center-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="business-center-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="business-center-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="business-center-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2 mb-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="video-conferencing" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="video-conferencing">
Video Conferencing Facilities
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="video-conferencing-free" name="Video Conferencing Facilities-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="video-conferencing-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="video-conferencing-paid" name="Video Conferencing Facilities-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="video-conferencing-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="video-conferencing-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="video-conferencing-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="video-conferencing-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="video-conferencing-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="video-conferencing-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="video-conferencing-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="vr" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="vr">
Virtual Reality (VR) Experiences
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="vr-free" name="Virtual Reality (VR) Experiences-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="vr-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="vr-paid" name="Virtual Reality (VR) Experiences-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="vr-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="vr-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="vr-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="vr-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="vr-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="vr-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="vr-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item px-0 py-3">
                          <h5 className="accordion-header">
                            <button className="accordion-button py-0 text-body-highlight collapsed" type="button" data-bs-toggle={"collapse"} data-bs-target={"#accessibility"} aria-expanded="false" aria-controls="accessibility">
                              <span className="circle-icon-item border border-primary text-primary me-3">
                                <span className="fa-solid fa-universal-access">                                </span>
                              </span>
                              <span className="flex-1 me-2">
Accessibility
                              </span>
                            </button>
                          </h5>
                          <div className="accordion-collapse collapse ms-md-9" id="accessibility" data-bs-parent={"#generalAmenitiesAccordion"}>
                            <div className="form-price-tier border p-3 rounded-2 my-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="accessible-common-areas" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="accessible-common-areas">
Accessible Common Areas
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="accessible-common-areas-free" name="Accessible Common Areas-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="accessible-common-areas-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="accessible-common-areas-paid" name="Accessible Common Areas-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="accessible-common-areas-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="accessible-common-areas-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="accessible-common-areas-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="accessible-common-areas-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="accessible-common-areas-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="accessible-common-areas-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="accessible-common-areas-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2 mb-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="accessible-parking-spaces" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="accessible-parking-spaces">
Accessible Parking Spaces
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="accessible-parking-spaces-free" name="Accessible Parking Spaces-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="accessible-parking-spaces-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="accessible-parking-spaces-paid" name="Accessible Parking Spaces-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="accessible-parking-spaces-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="accessible-parking-spaces-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="accessible-parking-spaces-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="accessible-parking-spaces-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="accessible-parking-spaces-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="accessible-parking-spaces-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="accessible-parking-spaces-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2 mb-3" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="accessible-fitness-center" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="accessible-fitness-center">
Accessible Fitness Center
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="accessible-fitness-center-free" name="Accessible Fitness Center-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="accessible-fitness-center-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="accessible-fitness-center-paid" name="Accessible Fitness Center-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="accessible-fitness-center-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="accessible-fitness-center-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="accessible-fitness-center-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="accessible-fitness-center-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="accessible-fitness-center-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="accessible-fitness-center-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="accessible-fitness-center-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form-price-tier border p-3 rounded-2" data-form-price-tier>
                              <div className="d-sm-flex align-items-center gap-3">
                                <div className="form-check form-switch mb-0">
                                  <input className="form-check-input" id="accessible-swimmings-pool" type="checkbox" data-price-toggle />
                                  <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="accessible-swimmings-pool">
Accessible Swimming Pool
                                  </label>
                                </div>
                                <div className="pricings ms-auto mt-2 mt-sm-0">
                                  <div className="form-check form-check-inline me-3 mb-0">
                                    <input className="form-check-input" type="radio" id="accessible-swimmings-pool-free" name="Accessible Swimming Pool-radio" defaultValue="free" data-pricing />
                                    <label className="form-check-label" htmlFor="accessible-swimmings-pool-free">
Free
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline me-0 mb-0">
                                    <input className="form-check-input" type="radio" id="accessible-swimmings-pool-paid" name="Accessible Swimming Pool-radio" defaultValue="paid" data-pricing />
                                    <label className="form-check-label" htmlFor="accessible-swimmings-pool-paid">
Paid
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="collapse" data-pricing-collapse>
                                <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="accessible-swimmings-pool-option1" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="accessible-swimmings-pool-option1">
Option 1
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="accessible-swimmings-pool-option2" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="accessible-swimmings-pool-option2">
Option 2
                                    </label>
                                  </div>
                                  <div className="form-check mb-4">
                                    <input className="form-check-input" id="accessible-swimmings-pool-option3" type="checkbox" />
                                    <label className="form-check-label fw-normal fs-8 fw-semibold" htmlFor="accessible-swimmings-pool-option3">
Option 3
                                    </label>
                                  </div>
                                  <button className="btn btn-link p-0">
                                    <span className="fa-solid fa-plus me-2">                                    </span>
Additional Condition
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="tab-pane" role="tabpanel" aria-labelledby="add-room-wizard-tab4" id="add-room-wizard-tab4">
                <div className="row g-0">
                  <div className="col-xxl-8">
                    <form id="addPropertyWizardForm4" noValidate data-wizard-form={"4"}>
                      <h3 className="mb-6">
Add room picture
                      </h3>
                      <div className="dropzone dropzone-multiple p-0 mb-5" id="my-awesome-dropzone" data-dropzone>
                        <div className="fallback">
                          <input name="file" type="file" multiple />
                        </div>
                        <div className="dz-message text-body-tertiary text-opacity-85" data-dz-message>
Drag your photo here
                          <span className="text-body-secondary px-1">
or
                          </span>
                          <button className="btn btn-link p-0" type="button">
Browse from device
                          </button>
                          <br />
                          <PhoenixImage src="/assets/img/icons/image-icon.png" alt="" className="mt-3 me-2" width={40} />
                        </div>
                        <div className="dz-preview d-flex flex-wrap mt-3">
                          <div className="rounded-2 overflow-hidden me-2 mb-2 position-relative" style={{"height":"140px","width":"200px"} as CSSProperties}>
                            <PhoenixImage src="/assets/img/products/23.png" alt="..." className="w-100 h-100 object-fit-cover" />
                            <button className="btn dropdown-toggle dropdown-caret-none px-3 text-body bg-body dz-remove w-auto h-auto py-0 border" type="button" data-bs-toggle={"dropdown"} aria-expanded="false" style={{"top":"16px","right":"16px"} as CSSProperties}>
                              <span className="fa-solid fa-ellipsis">                              </span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end py-1">
                              <li>
                                <a href="#!" className="dropdown-item"  data-dz-remove>
Remove
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="tab-pane" role="tabpanel" aria-labelledby="add-room-wizard-tab5" id="add-room-wizard-tab5">
                <div className="row g-0">
                  <div className="col-xxl-10">
                    <h3 className="mb-2">
We’re building your listing
                    </h3>
                    <p className="mb-5 text-body-tertiary">
We're working on getting your property set up and ready for guests. Stay tuned for updates and start accepting bookings soon!
                    </p>
                    <div className="alert alert-subtle-success alert-dismissible fade show mb-5" role="alert">
                      <p className="mb-0 flex-1 fw-semibold fs-9 fs-sm-8">
Congratulations on your successful listing! Join a community of hospitality professionals as a host. Your hard work will turn your home into a sought-after destination. We anticipate hearing about your achievements.
                      </p>
                      <button className="btn-close" type="button" data-bs-dismiss={"alert"} aria-label="Close">                      </button>
                    </div>
                    <h4 className="text-body mb-3">
 Room information
                      <a href="#!" className="fs-9 mx-2">
Edit
                      </a>
                    </h4>
                    <div className="row gx-7 gx-xl-4 gx-xxl-7">
                      <div className="col-md-7 col-xxl-6">
                        <table className="table table-borderless mb-0">
                          <tbody>
                            <tr>
                              <th className="p-0" style={{"width":"155px"} as CSSProperties}>                              </th>
                              <th className="p-0" style={{"width":"16px"} as CSSProperties}>                              </th>
                              <th className="p-0">                              </th>
                            </tr>
                            <tr>
                              <td className="text-nowrap py-2">
                                <div className="d-flex gap-2">
                                  <span className="fs-9 fa-solid fa-border-all">                                  </span>
                                  <h5 className="mb-0">
Room type
                                  </h5>
                                </div>
                              </td>
                              <td className="py-2 pe-1 px-sm-3">
                                <h5 className="fw-normal mb-0">
:
                                </h5>
                              </td>
                              <td className="py-2">
                                <h5 className="fw-normal mb-0 text-body-secondary">
Presidential suite
                                </h5>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-nowrap py-2">
                                <div className="d-flex gap-2">
                                  <span className="fs-9 fa-solid fa-file-pen">                                  </span>
                                  <h5 className="mb-0">
Room name
                                  </h5>
                                </div>
                              </td>
                              <td className="py-2 pe-1 px-sm-3">
                                <h5 className="fw-normal mb-0">
:
                                </h5>
                              </td>
                              <td className="py-2">
                                <h5 className="fw-normal mb-0 text-body-secondary">
Kempinski Jakarta
                                </h5>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-nowrap py-2">
                                <div className="d-flex gap-2">
                                  <span className="fs-9 fa-solid fa-file-pen">                                  </span>
                                  <h5 className="mb-0">
Bedroom’s
                                  </h5>
                                </div>
                              </td>
                              <td className="py-2 pe-1 px-sm-3">
                                <h5 className="fw-normal mb-0">
:
                                </h5>
                              </td>
                              <td className="py-2">
                                <h5 className="fw-normal mb-0 text-body-secondary">
01
                                </h5>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-nowrap py-2">
                                <div className="d-flex gap-2">
                                  <span className="fs-9 fa-solid fa-bed">                                  </span>
                                  <h5 className="mb-0">
Number of beds
                                  </h5>
                                </div>
                              </td>
                              <td className="py-2 pe-1 px-sm-3">
                                <h5 className="fw-normal mb-0">
:
                                </h5>
                              </td>
                              <td className="py-2">
                                <h5 className="fw-normal mb-0 text-body-secondary">
01
                                </h5>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-nowrap py-2">
                                <div className="d-flex gap-2">
                                  <span className="fs-9 fa-solid fa-person-shelter">                                  </span>
                                  <h5 className="mb-0">
Room size
                                  </h5>
                                </div>
                              </td>
                              <td className="py-2 pe-1 px-sm-3">
                                <h5 className="fw-normal mb-0">
:
                                </h5>
                              </td>
                              <td className="py-2">
                                <h5 className="fw-normal mb-0 text-body-secondary">
2.13 x 3.66 sq.m
                                </h5>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-md-5 col-xxl-6">
                        <table className="table table-borderless mb-0">
                          <tbody>
                            <tr>
                              <th className="p-0" style={{"width":"155px"} as CSSProperties}>                              </th>
                              <th className="p-0" style={{"width":"16px"} as CSSProperties}>                              </th>
                              <th className="p-0">                              </th>
                            </tr>
                            <tr>
                              <td className="text-nowrap py-2">
                                <div className="d-flex gap-2">
                                  <span className="fs-9 fa-solid fa-user">                                  </span>
                                  <h5 className="mb-0">
Adults
                                  </h5>
                                </div>
                              </td>
                              <td className="py-2 pe-1 px-sm-3">
                                <h5 className="fw-normal mb-0">
:
                                </h5>
                              </td>
                              <td className="py-2">
                                <h5 className="fw-normal mb-0 text-body-secondary">
02
                                </h5>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-nowrap py-2">
                                <div className="d-flex gap-2">
                                  <span className="fs-9 fa-solid fa-children">                                  </span>
                                  <h5 className="mb-0">
Childs
                                  </h5>
                                </div>
                              </td>
                              <td className="py-2 pe-1 px-sm-3">
                                <h5 className="fw-normal mb-0">
:
                                </h5>
                              </td>
                              <td className="py-2">
                                <h5 className="fw-normal mb-0 text-body-secondary">
01
                                </h5>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-nowrap py-2">
                                <div className="d-flex gap-2">
                                  <span className="fs-9 fa-solid fa-bath">                                  </span>
                                  <h5 className="mb-0">
Bathroom’s
                                  </h5>
                                </div>
                              </td>
                              <td className="py-2 pe-1 px-sm-3">
                                <h5 className="fw-normal mb-0">
:
                                </h5>
                              </td>
                              <td className="py-2">
                                <h5 className="fw-normal mb-0 text-body-secondary">
02
                                </h5>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-nowrap py-2">
                                <div className="d-flex gap-2">
                                  <span className="fs-9 fa-solid fa-person-booth">                                  </span>
                                  <h5 className="mb-0">
Balcony
                                  </h5>
                                </div>
                              </td>
                              <td className="py-2 pe-1 px-sm-3">
                                <h5 className="fw-normal mb-0">
:
                                </h5>
                              </td>
                              <td className="py-2">
                                <h5 className="fw-normal mb-0 text-body-secondary">
01
                                </h5>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <h4 className="text-body mb-4 mt-5">
Pricing
                      <a href="#!" className="fs-9 mx-2">
Edit
                      </a>
                    </h4>
                    <h6 className="mb-2">
Across all days
                    </h6>
                    <h3 className="mb-0">
$894
                    </h3>
                    <h4 className="text-body mb-3 mt-7">
Amenities
                      <a href="#!" className="fs-9 mx-2">
Edit
                      </a>
                    </h4>
                    <div className="row gx-7 gx-xl-4 gx-xxl-7">
                      <div className="col-md-7 col-xxl-6">
                        <table className="table table-borderless mb-0">
                          <tbody>
                            <tr>
                              <th className="p-0" style={{"width":"155px"} as CSSProperties}>                              </th>
                              <th className="p-0" style={{"width":"16px"} as CSSProperties}>                              </th>
                              <th className="p-0">                              </th>
                            </tr>
                            <tr>
                              <td className="text-nowrap py-2">
                                <div className="d-flex gap-2">
                                  <span className="fs-9 fa-solid fa-wifi">                                  </span>
                                  <h5 className="mb-0">
Wifi
                                  </h5>
                                </div>
                              </td>
                              <td className="py-2 pe-1 px-sm-3">
                                <h5 className="fw-normal mb-0">
:
                                </h5>
                              </td>
                              <td className="py-2">
                                <h5 className="fw-normal mb-0 text-body-secondary">
Free
                                </h5>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-nowrap py-2">
                                <div className="d-flex gap-2">
                                  <span className="fs-9 fa-solid fa-utensils">                                  </span>
                                  <h5 className="mb-0">
Restaurant
                                  </h5>
                                </div>
                              </td>
                              <td className="py-2 pe-1 px-sm-3">
                                <h5 className="fw-normal mb-0">
:
                                </h5>
                              </td>
                              <td className="py-2">
                                <h5 className="fw-normal mb-0 text-body-secondary">
{"Launch & Dinner"}
                                </h5>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-nowrap py-2">
                                <div className="d-flex gap-2">
                                  <span className="fs-9 fa-solid fa-person-swimming">                                  </span>
                                  <h5 className="mb-0">
Pool
                                  </h5>
                                </div>
                              </td>
                              <td className="py-2 pe-1 px-sm-3">
                                <h5 className="fw-normal mb-0">
:
                                </h5>
                              </td>
                              <td className="py-2">
                                <h5 className="fw-normal mb-0 text-body-secondary">
Paid
                                </h5>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-nowrap py-2">
                                <div className="d-flex gap-2">
                                  <span className="fs-9 fa-solid fa-ban-smoking">                                  </span>
                                  <h5 className="mb-0">
No smoking
                                  </h5>
                                </div>
                              </td>
                              <td className="py-2 pe-1 px-sm-3">
                                <h5 className="fw-normal mb-0">
:
                                </h5>
                              </td>
                              <td className="py-2">
                                <h5 className="fw-normal mb-0 text-body-secondary">
Available
                                </h5>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-nowrap py-2">
                                <div className="d-flex gap-2">
                                  <span className="fs-9 fa-solid fa-square-parking">                                  </span>
                                  <h5 className="mb-0">
Parking
                                  </h5>
                                </div>
                              </td>
                              <td className="py-2 pe-1 px-sm-3">
                                <h5 className="fw-normal mb-0">
:
                                </h5>
                              </td>
                              <td className="py-2">
                                <h5 className="fw-normal mb-0 text-body-secondary">
Paid
                                </h5>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-nowrap py-2">
                                <div className="d-flex gap-2">
                                  <span className="fs-9 fa-solid fa-umbrella-beach">                                  </span>
                                  <h5 className="mb-0">
Beach view
                                  </h5>
                                </div>
                              </td>
                              <td className="py-2 pe-1 px-sm-3">
                                <h5 className="fw-normal mb-0">
:
                                </h5>
                              </td>
                              <td className="py-2">
                                <h5 className="fw-normal mb-0 text-body-secondary">
Available
                                </h5>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-nowrap py-2">
                                <div className="d-flex gap-2">
                                  <span className="fs-9 fa-solid fa-person-booth">                                  </span>
                                  <h5 className="mb-0">
Balcony
                                  </h5>
                                </div>
                              </td>
                              <td className="py-2 pe-1 px-sm-3">
                                <h5 className="fw-normal mb-0">
:
                                </h5>
                              </td>
                              <td className="py-2">
                                <h5 className="fw-normal mb-0 text-body-secondary">
Sea View
                                </h5>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-md-5 col-xxl-6">
                        <table className="table table-borderless mb-0">
                          <tbody>
                            <tr>
                              <th className="p-0" style={{"width":"155px"} as CSSProperties}>                              </th>
                              <th className="p-0" style={{"width":"16px"} as CSSProperties}>                              </th>
                              <th className="p-0">                              </th>
                            </tr>
                            <tr>
                              <td className="text-nowrap py-2">
                                <div className="d-flex gap-2">
                                  <span className="fs-9 fa-solid fa-wine-glass">                                  </span>
                                  <h5 className="mb-0">
Hotel bar
                                  </h5>
                                </div>
                              </td>
                              <td className="py-2 pe-1 px-sm-3">
                                <h5 className="fw-normal mb-0">
:
                                </h5>
                              </td>
                              <td className="py-2">
                                <h5 className="fw-normal mb-0 text-body-secondary">
Paid
                                </h5>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-nowrap py-2">
                                <div className="d-flex gap-2">
                                  <span className="fs-9 fa-solid fa-people-roof">                                  </span>
                                  <h5 className="mb-0">
Common areas
                                  </h5>
                                </div>
                              </td>
                              <td className="py-2 pe-1 px-sm-3">
                                <h5 className="fw-normal mb-0">
:
                                </h5>
                              </td>
                              <td className="py-2">
                                <h5 className="fw-normal mb-0 text-body-secondary">
Available
                                </h5>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-nowrap py-2">
                                <div className="d-flex gap-2">
                                  <span className="fs-9 fa-solid fa-table-tennis-paddle-ball">                                  </span>
                                  <h5 className="mb-0">
Tennis courts
                                  </h5>
                                </div>
                              </td>
                              <td className="py-2 pe-1 px-sm-3">
                                <h5 className="fw-normal mb-0">
:
                                </h5>
                              </td>
                              <td className="py-2">
                                <h5 className="fw-normal mb-0 text-body-secondary">
Free
                                </h5>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-nowrap py-2">
                                <div className="d-flex gap-2">
                                  <span className="fs-9 fa-solid fa-snowflake">                                  </span>
                                  <h5 className="mb-0">
Air conditioning
                                  </h5>
                                </div>
                              </td>
                              <td className="py-2 pe-1 px-sm-3">
                                <h5 className="fw-normal mb-0">
:
                                </h5>
                              </td>
                              <td className="py-2">
                                <h5 className="fw-normal mb-0 text-body-secondary">
Available
                                </h5>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-nowrap py-2">
                                <div className="d-flex gap-2">
                                  <span className="fs-9 fa-solid fa-bath">                                  </span>
                                  <h5 className="mb-0">
Bathtub
                                  </h5>
                                </div>
                              </td>
                              <td className="py-2 pe-1 px-sm-3">
                                <h5 className="fw-normal mb-0">
:
                                </h5>
                              </td>
                              <td className="py-2">
                                <h5 className="fw-normal mb-0 text-body-secondary">
Available
                                </h5>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-nowrap py-2">
                                <div className="d-flex gap-2">
                                  <span className="fs-9 fa-solid fa-tv">                                  </span>
                                  <h5 className="mb-0">
Flat-screen TV
                                  </h5>
                                </div>
                              </td>
                              <td className="py-2 pe-1 px-sm-3">
                                <h5 className="fw-normal mb-0">
:
                                </h5>
                              </td>
                              <td className="py-2">
                                <h5 className="fw-normal mb-0 text-body-secondary">
Paid
                                </h5>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <h4 className="text-body mb-4 mt-7">
Picture
                      <a href="#!" className="fs-9 mx-2">
Edit
                      </a>
                    </h4>
                    <div className="row g-3">
                      <div className="col-sm-4">
                        <PhoenixImage src="/assets/img/gallery/59.png" alt="" className="rounded-2 w-100 object-fit-cover" height={160} />
                      </div>
                      <div className="col-sm-4">
                        <PhoenixImage src="/assets/img/gallery/60.png" alt="" className="rounded-2 w-100 object-fit-cover" height={160} />
                      </div>
                      <div className="col-sm-4">
                        <PhoenixImage src="/assets/img/gallery/61.png" alt="" className="rounded-2 w-100 object-fit-cover" height={160} />
                      </div>
                      <div className="col-sm-4">
                        <PhoenixImage src="/assets/img/gallery/62.png" alt="" className="rounded-2 w-100 object-fit-cover" height={160} />
                      </div>
                      <div className="col-sm-4">
                        <PhoenixImage src="/assets/img/gallery/63.png" alt="" className="rounded-2 w-100 object-fit-cover" height={160} />
                      </div>
                    </div>
                    <div className="mt-6 d-flex flex-wrap gap-2">
                      <button className="btn btn-phoenix-danger" type="button">
Discard
                      </button>
                      <button className="btn btn-phoenix-primary" type="button">
Save draft
                      </button>
                      <button className="btn btn-primary px-6 px-sm-11" type="submit">
Open for Booking
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 d-flex flex-wrap gap-2" data-wizard-footer>
              <button className="btn btn-phoenix-danger" type="button">
Discard
              </button>
              <button className="btn btn-phoenix-primary" type="button">
Save draft
              </button>
              <button className="btn btn-primary px-6 px-sm-11" type="submit" data-wizard-next-btn>
Continue
              </button>
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
