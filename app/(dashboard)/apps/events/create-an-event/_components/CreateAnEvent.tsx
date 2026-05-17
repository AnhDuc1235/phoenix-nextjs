'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function CreateAnEvent() {
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

    <form className="mb-9">
      <div className="row justify-content-between align-items-end g-3 mb-5">
        <div className="col-12 col-sm-auto col-xl-8">
          <h2 className="mb-0">
Create an Event
          </h2>
        </div>
        <div className="col-12 col-sm-auto col-xl-4">
          <div className="d-flex">
            <button className="btn btn-phoenix-primary px-5 me-2">
Save
            </button>
            <PhoenixLink href="/apps/events/event-detail" className="btn btn-primary px-5 w-100 text-nowrap">
Publish event
            </PhoenixLink>
          </div>
        </div>
      </div>
      <div className="row g-5">
        <div className="col-xl-8">
          <div className="row gx-3 gy-4">
            <h4 className="fs-7 mb-0">
Event Details
            </h4>
            <div className="col-sm-6 col-md-12">
              <div className="form-floating">
                <input className="form-control" id="floatingEventInput" type="text" placeholder="Event title" />
                <label htmlFor="floatingEventInput">
Event title
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="form-floating">
                <select className="form-select" id="floatingSelectTask">
                  <option>
Select event type
                  </option>
                  <option value="1">
technical
                  </option>
                  <option value="2">
external
                  </option>
                  <option value="3">
organizational
                  </option>
                </select>
                <label htmlFor="floatingSelectTask">
type
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="form-floating">
                <select className="form-select" id="floatingSelectPrivacy">
                  <option>
Select topic
                  </option>
                  <option value="1">
Data select topic One
                  </option>
                  <option value="2">
Data select topic Two
                  </option>
                  <option value="3">
Data select topic Three
                  </option>
                </select>
                <label htmlFor="floatingSelectPrivacy">
topic
                </label>
              </div>
            </div>
            <div className="col-12 mt-4">
              <div className="form-check form-check-inline">
                <input className="form-check-input" id="inlineRadio1" type="radio" name="inlineRadioOptions" defaultValue="option1" defaultChecked />
                <label className="form-check-label" htmlFor="inlineRadio1">
Online
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" id="inlineRadio2" type="radio" name="inlineRadioOptions" defaultValue="option2" />
                <label className="form-check-label" htmlFor="inlineRadio2">
Offline
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" id="inlineRadio3" type="radio" name="inlineRadioOptions" defaultValue="option3" />
                <label className="form-check-label" htmlFor="inlineRadio3">
Both
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-md-12 mt-md-0 mt-lg-1">
              <div className="form-floating">
                <input className="form-control" id="floatingVenueInput" type="text" placeholder="Venue" />
                <label htmlFor="floatingVenueInput">
Venue
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="form-floating">
                <select className="form-select" id="floatingSelectCountry">
                  <option>
Select Country
                  </option>
                  <option value="1">
Country One
                  </option>
                  <option value="2">
Country Two
                  </option>
                  <option value="3">
Country Three
                  </option>
                </select>
                <label htmlFor="floatingSelectCountry">
Country
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="form-floating">
                <select className="form-select" id="floatingSelectState">
                  <option>
Select State 
                  </option>
                  <option value="1">
One
                  </option>
                  <option value="2">
Two
                  </option>
                  <option value="3">
Three
                  </option>
                </select>
                <label htmlFor="floatingSelectState">
 State
                </label>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="form-floating">
                <select className="form-select" id="floatingSelectCity">
                  <option>
Select city
                  </option>
                  <option value="1">
Data Privacy One
                  </option>
                  <option value="2">
Data Privacy Two
                  </option>
                  <option value="3">
Data Privacy Three
                  </option>
                </select>
                <label htmlFor="floatingSelectCity">
City
                </label>
              </div>
            </div>
            <h4 className="fs-7 mt-7">
Schedule
            </h4>
            <div className="col-sm-6">
              <div className="flatpickr-input-container">
                <div className="form-floating">
                  <input className="form-control datetimepicker" id="startDatepicker" type="text" placeholder="start date" data-options={"{\"disableMobile\":true}"} />
                  <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary">                  </span>
                  <label className="ps-6" htmlFor="startDatepicker">
Start date
                  </label>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-floating">
                <input className="form-control datetimepicker" id="timepickerEvent" type="text" placeholder="H:i" data-options={"{\"enableTime\":true,\"noCalendar\":true,\"dateFormat\":\"H:i\",\"disableMobile\":true}"} />
                <label htmlFor="timepickerEvent">
Start Time
                </label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="flatpickr-input-container">
                <div className="form-floating">
                  <input className="form-control datetimepicker" id="endDatepicker" type="text" placeholder="end date" data-options={"{\"disableMobile\":true}"} />
                  <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary">                  </span>
                  <label className="ps-6" htmlFor="endDatepicker">
End date
                  </label>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-floating">
                <input className="form-control datetimepicker" id="timepickerEvent2" type="text" placeholder="H:i" data-options={"{\"enableTime\":true,\"noCalendar\":true,\"dateFormat\":\"H:i\",\"disableMobile\":true}"} />
                <label htmlFor="timepickerEvent2">
End Time
                </label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-floating">
                <select className="form-select" id="floatingSelectTimeZone">
                  <option>
Select time zone
                  </option>
                  <option value="1">
Data Privacy One
                  </option>
                  <option value="2">
Data Privacy Two
                  </option>
                  <option value="3">
Data Privacy Three
                  </option>
                </select>
                <label htmlFor="floatingSelectTimeZone">
Time zone
                </label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="flatpickr-input-container">
                <div className="form-floating">
                  <input className="form-control datetimepicker" id="datepicker" type="text" placeholder="registration deadline" data-options={"{\"disableMobile\":true}"} />
                  <label htmlFor="datepicker">
Registration deadline
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12 gy-6">
              <div className="form-floating">
                <textarea className="form-control" id="floatingProjectDescription" placeholder="Leave a comment here" style={{"height":"128px"} as CSSProperties} defaultValue="" />
                <label htmlFor="floatingProjectDescription">
Description
                </label>
              </div>
            </div>
            <div className="col-sm-6 gy-6">
              <div className="form-floating">
                <input className="form-control" id="floatingOrganizersInput" type="text" placeholder="ORGANIZERS" />
                <label htmlFor="floatingOrganizersInput">
ORGANIZERS
                </label>
              </div>
            </div>
            <div className="col-sm-6 gy-6">
              <div className="form-floating">
                <input className="form-control" id="floatingSponsorsInput" type="text" placeholder="SPONSORS" />
                <label htmlFor="floatingSponsorsInput">
SPONSORS
                </label>
              </div>
            </div>
            <div className="col-12 gy-6">
              <div className="dropzone dropzone-multiple p-0 mb-5" id="my-awesome-dropzone" data-dropzone>
                <div className="fallback">
                  <input name="file" type="file" multiple />
                </div>
                <div className="dz-preview d-flex flex-wrap">
                  <div className="border border-translucent bg-body-emphasis rounded-3 d-flex flex-center position-relative me-2 mb-2" style={{"height":"80px","width":"80px"} as CSSProperties}>
                    <PhoenixImage src="/assets/img/products/23.png" alt="..." className="dz-image" />
                    <a href="#!" className="dz-remove text-body-quaternary"  data-dz-remove>
                      <span data-feather={"x"}>                      </span>
                    </a>
                  </div>
                </div>
                <div className="dz-message text-body-tertiary text-center" data-dz-message>
 Drag your photo here 
                  <span className="text-body-secondary">
or 
                  </span>
                  <button className="btn btn-link p-0" type="button">
Browse from device 
                  </button>
                  <br />
                  <PhoenixImage src="/assets/img/icons/image-icon.png" alt="" className="mt-3 me-2" width={40} />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div style={{"--phoenix-choices-inner-min-height":"128px"} as CSSProperties}>
                <select className="form-select mb-3" data-choices multiple data-options={"{\"removeItemButton\":true,\"placeholder\":true}"}>
                  <option value="">
Add tags
                  </option>
                  <option value="MUSIC">
Music
                  </option>
                  <option value="CONCEERT">
CONCEERT
                  </option>
                  <option value="GREATEST SHOW ON EARTH">
GREATEST SHOW ON EARTH 
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="border-bottom border-translucent pb-6 mb-6">
            <h4 className="fs-7 mb-4">
Privacy
            </h4>
            <div className="form-check mb-2">
              <input className="form-check-input" id="exampleRadios1" type="radio" name="exampleRadios" defaultValue="option1" defaultChecked />
              <label className="form-check-label fw-normal" htmlFor="exampleRadios1">
On Phoenix, our distribution partners, and search engines,
                <br />
anybody can find the event 
              </label>
            </div>
            <div className="form-check mb-0">
              <input className="form-check-input" id="exampleRadios2" type="radio" name="exampleRadios" defaultValue="option2" />
              <label className="form-check-label fw-normal" htmlFor="exampleRadios2">
Only the individuals you select have access to it.
              </label>
            </div>
          </div>
          <div className="border-bottom border-translucent mb-6">
            <div className="form-check">
              <input className="form-check-input" id="flexChecked" type="checkbox" defaultChecked />
              <label className="form-check-label fw-bold fs-8 mb-5" htmlFor="flexChecked">
Show the number of available tickets
              </label>
            </div>
          </div>
          <h4 className="fs-7 mb-4">
Ticket pricing
          </h4>
          <div className="form-check form-check-inline">
            <input className="form-check-input" id="freeTicket" type="radio" name="ticketPricing" defaultValue="freeTicket" defaultChecked />
            <label className="form-check-label" htmlFor="freeTicket">
Free
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" id="paidTicket" type="radio" name="ticketPricing" defaultValue="paidTicket" />
            <label className="form-check-label" htmlFor="paidTicket">
Paid
            </label>
          </div>
          <div className="row g-3 mb-7 mt-1 border-bottom border-translucent pb-5">
            <div className="col-6 col col-xl-7">
              <h4 className="fs-9">
Option
              </h4>
            </div>
            <div className="col-6 col-xl-5">
              <h4 className="fs-9">
Price
              </h4>
            </div>
            <div className="col-6 col-xl-7">
              <input className="form-control" type="text" placeholder="Top Gallery" />
            </div>
            <div className="col-6 col-xl-5">
              <input className="form-control" type="number" placeholder="$0.0" />
            </div>
            <div className="col-6 col-xl-7">
              <input className="form-control" type="text" placeholder="VIP" />
            </div>
            <div className="col-6 col-xl-5">
              <input className="form-control" type="number" placeholder="$0.0" />
            </div>
            <div className="col-6 col-xl-7">
              <input className="form-control" type="text" placeholder="Front row" />
            </div>
            <div className="col-6 col-xl-5">
              <input className="form-control" type="number" placeholder="$0.0" />
            </div>
            <div className="col-12">
              <button className="btn btn-link p-0" type="button">
                <span className="fa-solid fa-plus me-2">                </span>
Add an option 
              </button>
            </div>
          </div>
          <h4 className="fs-7 mb-3">
Custom fields
          </h4>
          <div className="row g-3 mb-3">
            <div className="col-md-6 col-lg-12 col-xl-6">
              <label className="form-label" htmlFor="inputName">
Name
              </label>
              <input className="form-control" id="inputName" type="text" placeholder="Item name (e.g. Special T-shirt)" />
            </div>
            <div className="col-md-6 col-lg-12 col-xl-6">
              <label className="form-label" htmlFor="inputState1">
Type
              </label>
              <select className="form-select" id="inputState1">
                <option value="">
Choose...
                </option>
                <option value="">
Type One
                </option>
                <option value="">
Type Two
                </option>
              </select>
            </div>
            <div className="col-12">
              <label className="form-label" htmlFor="filedOptions">
Field options
              </label>
              <textarea className="form-control" id="filedOptions" placeholder="Description" rows={6} defaultValue="" />
            </div>
          </div>
          <div className="row g-3">
            <div className="col-md-6 col-lg-12 col-xl-6">
              <label className="form-label" htmlFor="inputName2">
Name
              </label>
              <input className="form-control" id="inputName2" type="text" placeholder="Item name (e.g. Special T-shirt)" />
            </div>
            <div className="col-md-6 col-lg-12 col-xl-6">
              <label className="form-label" htmlFor="inputState2">
Type
              </label>
              <select className="form-select" id="inputState2">
                <option value="">
Choose...
                </option>
                <option value="">
Type Three
                </option>
                <option value="">
Type Four
                </option>
              </select>
            </div>
            <div className="col-12">
              <label className="form-label" htmlFor="filedOptions2">
Field options
              </label>
              <textarea className="form-control" id="filedOptions2" placeholder="Description" rows={6} defaultValue="" />
            </div>
            <div className="col-12">
              <button className="btn btn-link p-0" type="button">
                <span className="fa-solid fa-plus me-2">                </span>
Add an item
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>

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
