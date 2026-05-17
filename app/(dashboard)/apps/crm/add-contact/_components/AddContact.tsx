'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function AddContact() {
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

    <div className="border-bottom border-translucent mb-7 mx-n3 px-2 mx-lg-n6 px-lg-6">
      <div className="row">
        <div className="col-xl-9">
          <div className="d-sm-flex justify-content-between">
            <h2 className="mb-4">
Create a new lead
            </h2>
            <div className="d-flex mb-3">
              <button className="btn btn-phoenix-primary me-2 px-6">
Cancel
              </button>
              <button className="btn btn-primary">
Create lead
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-xl-9">
        <div className="d-flex align-items-end position-relative mb-7">
          <input className="d-none" id="upload-avatar" type="file" />
          <div className="hoverbox" style={{"width":"150px","height":"150px"} as CSSProperties}>
            <div className="hoverbox-content rounded-circle d-flex flex-center z-1" style={{"--phoenix-bg-opacity":".56"} as CSSProperties}>
              <span className="fa-solid fa-camera fs-1 text-body-quaternary">              </span>
            </div>
            <div className="position-relative bg-body-quaternary rounded-circle cursor-pointer d-flex flex-center mb-xxl-7">
              <div className="avatar avatar-5xl">
                <PhoenixImage src="/assets/img/team/150x150/58.webp" alt="" className="rounded-circle" />
              </div>
              <label className="w-100 h-100 position-absolute z-1" htmlFor="upload-avatar">              </label>
            </div>
          </div>
        </div>
        <h4 className="mb-3">
Lead Information 
        </h4>
        <form className="row g-3 mb-9">
          <div className="col-sm-6 col-md-4">
            <div className="form-floating">
              <select className="form-select" id="floatingSelectOwner">
                <option>
 Max Ernst
                </option>
                <option value="1">
Ernst
                </option>
                <option value="2">
Max 
                </option>
              </select>
              <label htmlFor="floatingSelectOwner">
Lead owner
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="form-floating">
              <input className="form-control" id="floatingInputFirstname" type="text" placeholder="First name" />
              <label htmlFor="floatingInputFirstname">
First name
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="form-floating">
              <input className="form-control" id="floatingInputLastname" type="text" placeholder="Last name" />
              <label htmlFor="floatingInputLastname">
Last name
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="form-floating">
              <input className="form-control" id="floatingInputCompany" type="text" placeholder="Company" />
              <label htmlFor="floatingInputCompany">
Company
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="form-floating">
              <input className="form-control" id="floatingInputTitle" type="text" placeholder="title" />
              <label htmlFor="floatingInputTitle">
Title
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="form-floating">
              <input className="form-control" id="floatingInputEmail" type="text" placeholder="email" />
              <label htmlFor="floatingInputEmail">
Email
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="form-floating">
              <input className="form-control" id="floatingInputAlternativeEmail" type="text" placeholder="alternative email" />
              <label htmlFor="floatingInputAlternativeEmail">
Alternative Email
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="form-floating">
              <input className="form-control" id="floatingInputPhone" type="tel" placeholder="phone" pattern={"[0-9]{3}-[0-9]{2}-[0-9]{3}"} />
              <label htmlFor="floatingInputPhone">
Phone
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="form-floating">
              <input className="form-control" id="floatingInputWebsite" type="text" placeholder="website" />
              <label htmlFor="floatingInputWebsite">
Website
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="form-floating">
              <input className="form-control" id="floatingInputLinkedin" type="text" placeholder="linkedin" />
              <label htmlFor="floatingInputLinkedin">
linkedin
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="form-floating">
              <input className="form-control" id="floatingInputSkype" type="text" placeholder="skype" />
              <label htmlFor="floatingInputSkype">
Skype id
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="form-floating">
              <input className="form-control" id="floatingInputTwitter" type="text" placeholder="twitter" />
              <label htmlFor="floatingInputTwitter">
Twitter 
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="form-floating">
              <input className="form-control" id="floatingInputEmployees" type="text" placeholder="employees" />
              <label htmlFor="floatingInputEmployees">
Number of employees
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="form-floating">
              <input className="form-control" id="floatingInputRevenue" type="text" placeholder="revenue" />
              <label htmlFor="floatingInputRevenue">
Annual revenue 
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="form-floating">
              <select className="form-select" id="floatingSelectIndustry">
                <option>
Large Enterprise
                </option>
                <option value="1">
Manufacturing
                </option>
                <option value="2">
Education
                </option>
                <option value="3">
Technology
                </option>
              </select>
              <label htmlFor="floatingSelectIndustry">
industry
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="form-floating">
              <select className="form-select" id="floatingSelectStatus">
                <option>
New
                </option>
                <option value="1">
suspended
                </option>
                <option value="2">
ongoing
                </option>
                <option value="3">
Current
                </option>
              </select>
              <label htmlFor="floatingSelectStatus">
Lead status 
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="form-floating">
              <select className="form-select" id="floatingSelectLeadSource">
                <option>
Advertisement
                </option>
                <option value="1">
Advertisement One
                </option>
                <option value="2">
Advertisement Two
                </option>
                <option value="3">
Consulting
                </option>
              </select>
              <label htmlFor="floatingSelectLeadSource">
lead source
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="form-floating">
              <select className="form-select" id="floatingSelectRating">
                <option>
 Active
                </option>
                <option value="1">
Inactive
                </option>
                <option value="2">
Active
                </option>
              </select>
              <label htmlFor="floatingSelectRating">
rating
              </label>
            </div>
          </div>
          <h4 className="mt-6">
Address Information
          </h4>
          <div className="col-sm-6 col-md-4">
            <div className="form-floating">
              <input className="form-control" id="floatingInputStreet" type="text" placeholder="street" />
              <label htmlFor="floatingInputStreet">
Street
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="form-floating">
              <select className="form-select" id="floatingSelectCity">
                <option>
 Neo centrola
                </option>
                <option value="1">
London
                </option>
                <option value="2">
New York 
                </option>
              </select>
              <label htmlFor="floatingSelectCity">
City
              </label>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="form-floating">
              <select className="form-select" id="floatingSelectState">
                <option>
 Qualimando
                </option>
                <option value="1">
Sovereign
                </option>
                <option value="2">
Northeastern United States
                </option>
              </select>
              <label htmlFor="floatingSelectState">
State
              </label>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-floating">
              <select className="form-select" id="floatingSelectCountry">
                <option>
 United Empire of Brekania
                </option>
                <option value="1">
UK
                </option>
                <option value="2">
USA
                </option>
              </select>
              <label htmlFor="floatingSelectCountry">
Country
              </label>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-floating">
              <input className="form-control" id="floatingInputZipcode" type="text" placeholder="zip code" />
              <label htmlFor="floatingInputZipcode">
zip code
              </label>
            </div>
          </div>
          <h4 className="mt-6">
Description
          </h4>
          <div className="col-12">
            <div className="form-floating">
              <textarea className="form-control" id="floatingProjectOverview" placeholder="Leave a comment here" style={{"height":"128px"} as CSSProperties} defaultValue="" />
              <label htmlFor="floatingProjectOverview">
Lead description
              </label>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-end mt-6">
            <button className="btn btn-primary">
Create lead
            </button>
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
