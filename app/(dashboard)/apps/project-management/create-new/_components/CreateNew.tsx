'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function CreateNew() {
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

    <h2 className="mb-4">
Create a project
    </h2>

    <div className="row">
      <div className="col-xl-9">
        <form className="row g-3 mb-6">
          <div className="col-sm-6 col-md-8">
            <div className="form-floating">
              <input className="form-control" id="floatingInputGrid" type="text" placeholder="Project title" />
              <label htmlFor="floatingInputGrid">
Project title
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="form-floating">
              <select className="form-select" id="floatingSelectTask">
                <option>
Select task view
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
Defult task view
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="form-floating">
              <select className="form-select" id="floatingSelectPrivacy">
                <option>
Select privacy
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
              <label htmlFor="floatingSelectPrivacy">
Project privacy
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="form-floating">
              <select className="form-select" id="floatingSelectTeam">
                <option>
Select team
                </option>
                <option value="1">
Team One
                </option>
                <option value="2">
Team Two
                </option>
                <option value="3">
Team Three
                </option>
              </select>
              <label htmlFor="floatingSelectTeam">
Team 
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="form-floating">
              <select className="form-select" id="floatingSelectAssignees">
                <option>
Select assignees 
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
              <label htmlFor="floatingSelectAssignees">
People 
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="form-floating">
              <select className="form-select" id="floatingSelectAdmin">
                <option>
Select admin
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
              <label htmlFor="floatingSelectAdmin">
Project Lead
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="flatpickr-input-container">
              <div className="form-floating">
                <input className="form-control datetimepicker" id="floatingInputStartDate" type="text" placeholder="end date" data-options={"{\"disableMobile\":true}"} />
                <label className="ps-6" htmlFor="floatingInputStartDate">
Start date
                </label>
                <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary">                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="flatpickr-input-container">
              <div className="form-floating">
                <input className="form-control datetimepicker" id="floatingInputDeadline" type="text" placeholder="deadline" data-options={"{\"disableMobile\":true}"} />
                <label className="ps-6" htmlFor="floatingInputDeadline">
Deadline
                </label>
                <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary">                </span>
              </div>
            </div>
          </div>
          <div className="col-12 gy-6">
            <div className="form-floating">
              <textarea className="form-control" id="floatingProjectOverview" placeholder="Leave a comment here" style={{"height":"100px"} as CSSProperties} defaultValue="" />
              <label htmlFor="floatingProjectOverview">
project overview
              </label>
            </div>
          </div>
          <div className="col-md-6 gy-6">
            <div className="form-floating">
              <select className="form-select" id="floatingSelectClient">
                <option>
Select client
                </option>
                <option value="1">
Client One
                </option>
                <option value="2">
Client Two
                </option>
                <option value="3">
Client Three
                </option>
              </select>
              <label htmlFor="floatingSelectClient">
client
              </label>
            </div>
          </div>
          <div className="col-md-6 gy-6">
            <div className="form-floating">
              <input className="form-control" id="floatingInputBudget" type="text" placeholder="Budget" />
              <label htmlFor="floatingInputBudget">
Budget
              </label>
            </div>
          </div>
          <div className="col-12 gy-6">
            <div className="form-floating form-floating-advance-select">
              <label>
Add tags
              </label>
              <select className="form-select" id="organizerMultiple" data-choices multiple data-options={"{\"removeItemButton\":true,\"placeholder\":true}"}>
                <option>
Stupidity
                </option>
                <option>
Jerry
                </option>
                <option>
Not_the_mouse
                </option>
                <option>
Rick
                </option>
                <option>
Biology
                </option>
                <option>
Neurology
                </option>
                <option>
Brainlessness
                </option>
              </select>
            </div>
          </div>
          <div className="col-12 gy-6">
            <div className="row g-3 justify-content-end">
              <div className="col-auto">
                <button className="btn btn-phoenix-primary px-5">
Cancel
                </button>
              </div>
              <div className="col-auto">
                <button className="btn btn-primary px-5 px-sm-15">
Create Project
                </button>
              </div>
            </div>
          </div>
        </form>
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
