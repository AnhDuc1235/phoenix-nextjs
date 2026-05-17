'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Layout() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Layout
    </h2>

    <p className="text-body-tertiary lead mb-2">
Give your forms some structure—from inline to horizontal to custom grid implementations—with our form layout options.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/forms/layout/" className="btn btn-link p-0"  target="_blank">
Forms Layout on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="mb-9">
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Basic form
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#basic-form-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="basic-form-code" aria-expanded="false">
                        <span className="me-2" data-feather={"code"}>                        </span>View code
                      </a>
                      <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                        <span className="me-2" data-feather={"eye"}>                        </span>Hide code
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="basic-form-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><form> <div class=\\\"mb-3\\\"> <label class=\\\"form-label\\\" for=\\\"basic-form-name\\\">Name</label> <input class=\\\"form-control\\\" id=\\\"basic-form-name\\\" type=\\\"text\\\" placeholder=\\\"Name\\\" /> </div> <div class=\\\"mb-3\\\"> <label class=\\\"form-label\\\" for=\\\"basic-form-email\\\">Email address</label> <input class=\\\"form-control\\\" id=\\\"basic-form-email\\\" type=\\\"email\\\" placeholder=\\\"name@example.com\\\" /> </div> <div class=\\\"mb-3\\\"> <label class=\\\"form-label\\\" for=\\\"basic-form-password\\\">Password</label> <input class=\\\"form-control\\\" id=\\\"basic-form-password\\\" type=\\\"password\\\" placeholder=\\\"Password\\\" /> </div> <div class=\\\"mb-3\\\"> <label class=\\\"form-label\\\" for=\\\"basic-form-dob\\\">Date of Birth</label> <input class=\\\"form-control\\\" id=\\\"basic-form-dob\\\" type=\\\"date\\\" /> </div> <div class=\\\"mb-3\\\"> <label class=\\\"form-label\\\" for=\\\"basic-form-gender\\\">Gender</label> <select class=\\\"form-select\\\" id=\\\"basic-form-gender\\\" aria-label=\\\"Default select example\\\"> <option selected=\\\"selected\\\">Select your gender</option> <option value=\\\"male\\\">Male</option> <option value=\\\"female\\\">Female</option> <option value=\\\"other\\\">Other</option> </select> </div> <div class=\\\"mb-3\\\"> <div class=\\\"form-check\\\"> <input class=\\\"form-check-input\\\" id=\\\"flexRadioDefault1\\\" type=\\\"radio\\\" name=\\\"flexRadioDefault\\\" /> <label class=\\\"form-check-label mb-0\\\" for=\\\"flexRadioDefault1\\\">Personal Account</label> </div> <div class=\\\"form-check\\\"> <input class=\\\"form-check-input\\\" id=\\\"flexRadioDefault2\\\" type=\\\"radio\\\" name=\\\"flexRadioDefault\\\" checked=\\\"checked\\\" /> <label class=\\\"form-check-label mb-0\\\" for=\\\"flexRadioDefault2\\\">Business Account</label> </div> </div> <div class=\\\"mb-3\\\"> <label class=\\\"form-label\\\">Upload Image</label> <input class=\\\"form-control\\\" type=\\\"file\\\" /> </div> <div class=\\\"mb-3\\\"> <label class=\\\"form-label\\\" for=\\\"basic-form-textarea\\\">Description</label> <textarea class=\\\"form-control\\\" id=\\\"basic-form-textarea\\\" rows=\\\"3\\\" placeholder=\\\"Description\\\" defaultValue=\"\" /> </div> <div class=\\\"mb-3 form-check\\\"> <input class=\\\"form-check-input\\\" id=\\\"basic-form-checkbox\\\" type=\\\"checkbox\\\" /> <label class=\\\"form-check-label\\\" for=\\\"basic-form-checkbox\\\">Remember me</label> </div> <button class=\\\"btn btn-primary\\\" type=\\\"submit\\\">Submit</button> </form></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <form>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="basic-form-name">
Name
                      </label>
                      <input className="form-control" id="basic-form-name" type="text" placeholder="Name" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="basic-form-email">
Email address
                      </label>
                      <input className="form-control" id="basic-form-email" type="email" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="basic-form-password">
Password
                      </label>
                      <input className="form-control" id="basic-form-password" type="password" placeholder="Password" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="basic-form-dob">
Date of Birth
                      </label>
                      <input className="form-control" id="basic-form-dob" type="date" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="basic-form-gender">
Gender
                      </label>
                      <select className="form-select" id="basic-form-gender" aria-label="Default select example">
                        <option>
Select your gender
                        </option>
                        <option value="male">
Male
                        </option>
                        <option value="female">
Female
                        </option>
                        <option value="other">
Other
                        </option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <div className="form-check">
                        <input className="form-check-input" id="flexRadioDefault1" type="radio" name="flexRadioDefault" />
                        <label className="form-check-label mb-0" htmlFor="flexRadioDefault1">
Personal Account
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" id="flexRadioDefault2" type="radio" name="flexRadioDefault" defaultChecked />
                        <label className="form-check-label mb-0" htmlFor="flexRadioDefault2">
Business Account
                        </label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
Upload Image
                      </label>
                      <input className="form-control" type="file" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="basic-form-textarea">
Description
                      </label>
                      <textarea className="form-control" id="basic-form-textarea" rows={3} placeholder="Description" defaultValue="" />
                    </div>
                    <div className="mb-3 form-check">
                      <input className="form-check-input" id="basic-form-checkbox" type="checkbox" />
                      <label className="form-check-label" htmlFor="basic-form-checkbox">
Remember me
                      </label>
                    </div>
                    <button className="btn btn-primary" type="submit">
Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Horizontal form
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#horizontal-form-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="horizontal-form-code" aria-expanded="false">
                        <span className="me-2" data-feather={"code"}>                        </span>View code
                      </a>
                      <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                        <span className="me-2" data-feather={"eye"}>                        </span>Hide code
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="horizontal-form-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><form> <div class=\\\"row mb-3\\\"> <label class=\\\"col-sm-2 col-form-label\\\" for=\\\"inputEmail3\\\">Email</label> <div class=\\\"col-sm-10\\\"> <input class=\\\"form-control\\\" id=\\\"inputEmail3\\\" type=\\\"email\\\" /> </div> </div> <div class=\\\"row mb-3\\\"> <label class=\\\"col-sm-2 col-form-label\\\" for=\\\"inputPassword3\\\">Password</label> <div class=\\\"col-sm-10\\\"> <input class=\\\"form-control\\\" id=\\\"inputPassword3\\\" type=\\\"password\\\" /> </div> </div> <fieldset> <div class=\\\"row mb-3\\\"> <label class=\\\"col-form-label col-sm-2 pt-0\\\">Radios</label> <div class=\\\"col-sm-10\\\"> <div class=\\\"form-check\\\"> <input class=\\\"form-check-input\\\" id=\\\"gridRadios1\\\" type=\\\"radio\\\" name=\\\"gridRadios\\\" value=\\\"option1\\\" checked=\\\"\\\" /> <label class=\\\"form-check-label\\\" for=\\\"gridRadios1\\\">First radio</label> </div> <div class=\\\"form-check\\\"> <input class=\\\"form-check-input\\\" id=\\\"gridRadios2\\\" type=\\\"radio\\\" name=\\\"gridRadios\\\" value=\\\"option2\\\" /> <label class=\\\"form-check-label\\\" for=\\\"gridRadios2\\\">Second radio</label> </div> <div class=\\\"form-check disabled\\\"> <input class=\\\"form-check-input\\\" id=\\\"gridRadios3\\\" type=\\\"radio\\\" name=\\\"gridRadios\\\" value=\\\"option3\\\" disabled=\\\"\\\" /> <label class=\\\"form-check-label\\\" for=\\\"gridRadios3\\\">Third disabled radio</label> </div> </div> </div> </fieldset> <div class=\\\"row mb-3\\\"> <div class=\\\"col-form-label col-sm-2 pt-0\\\">Checkbox</div> <div class=\\\"col-sm-10\\\"> <div class=\\\"form-check\\\"> <input class=\\\"form-check-input\\\" id=\\\"gridCheck1\\\" type=\\\"checkbox\\\" /> <label class=\\\"form-check-label\\\" for=\\\"gridCheck1\\\">Example checkbox</label> </div> </div> </div> <button class=\\\"btn btn-primary\\\" type=\\\"submit\\\">Sign in</button> </form></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <form>
                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label" htmlFor="inputEmail3">
Email
                      </label>
                      <div className="col-sm-10">
                        <input className="form-control" id="inputEmail3" type="email" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label" htmlFor="inputPassword3">
Password
                      </label>
                      <div className="col-sm-10">
                        <input className="form-control" id="inputPassword3" type="password" />
                      </div>
                    </div>
                    <fieldset>
                      <div className="row mb-3">
                        <label className="col-form-label col-sm-2 pt-0">
Radios
                        </label>
                        <div className="col-sm-10">
                          <div className="form-check">
                            <input className="form-check-input" id="gridRadios1" type="radio" name="gridRadios" defaultValue="option1" defaultChecked />
                            <label className="form-check-label" htmlFor="gridRadios1">
First radio
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" id="gridRadios2" type="radio" name="gridRadios" defaultValue="option2" />
                            <label className="form-check-label" htmlFor="gridRadios2">
Second radio
                            </label>
                          </div>
                          <div className="form-check disabled">
                            <input className="form-check-input" id="gridRadios3" type="radio" name="gridRadios" defaultValue="option3" disabled />
                            <label className="form-check-label" htmlFor="gridRadios3">
Third disabled radio
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <div className="row mb-3">
                      <div className="col-form-label col-sm-2 pt-0">
Checkbox
                      </div>
                      <div className="col-sm-10">
                        <div className="form-check">
                          <input className="form-check-input" id="gridCheck1" type="checkbox" />
                          <label className="form-check-label" htmlFor="gridCheck1">
Example checkbox
                          </label>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-primary" type="submit">
Sign in
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Horizontal form label sizing
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#horizontal-form-label-sizing-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="horizontal-form-label-sizing-code" aria-expanded="false">
                        <span className="me-2" data-feather={"code"}>                        </span>View code
                      </a>
                      <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                        <span className="me-2" data-feather={"eye"}>                        </span>Hide code
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="horizontal-form-label-sizing-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"row mb-3\\\"> <label class=\\\"col-sm-2 col-form-label col-form-label-sm\\\" for=\\\"colFormLabelSm\\\">Email</label> <div class=\\\"col-sm-10\\\"> <input class=\\\"form-control form-control-sm\\\" id=\\\"colFormLabelSm\\\" type=\\\"email\\\" placeholder=\\\"col-form-label-sm\\\" /> </div> </div> <div class=\\\"row mb-3\\\"> <label class=\\\"col-sm-2 col-form-label\\\" for=\\\"colFormLabel\\\">Email</label> <div class=\\\"col-sm-10\\\"> <input class=\\\"form-control\\\" id=\\\"colFormLabel\\\" type=\\\"email\\\" placeholder=\\\"col-form-label\\\" /> </div> </div> <div class=\\\"row\\\"> <label class=\\\"col-sm-2 col-form-label col-form-label-lg\\\" for=\\\"colFormLabelLg\\\">Email</label> <div class=\\\"col-sm-10\\\"> <input class=\\\"form-control form-control-lg\\\" id=\\\"colFormLabelLg\\\" type=\\\"email\\\" placeholder=\\\"col-form-label-lg\\\" /> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label col-form-label-sm" htmlFor="colFormLabelSm">
Email
                    </label>
                    <div className="col-sm-10">
                      <input className="form-control form-control-sm" id="colFormLabelSm" type="email" placeholder="col-form-label-sm" />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label" htmlFor="colFormLabel">
Email
                    </label>
                    <div className="col-sm-10">
                      <input className="form-control" id="colFormLabel" type="email" placeholder="col-form-label" />
                    </div>
                  </div>
                  <div className="row">
                    <label className="col-sm-2 col-form-label col-form-label-lg" htmlFor="colFormLabelLg">
Email
                    </label>
                    <div className="col-sm-10">
                      <input className="form-control form-control-lg" id="colFormLabelLg" type="email" placeholder="col-form-label-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Form grid
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#form-grid-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="form-grid-code" aria-expanded="false">
                        <span className="me-2" data-feather={"code"}>                        </span>View code
                      </a>
                      <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                        <span className="me-2" data-feather={"eye"}>                        </span>Hide code
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="form-grid-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"row\\\"> <div class=\\\"col\\\"> <input class=\\\"form-control\\\" type=\\\"text\\\" placeholder=\\\"First name\\\" aria-label=\\\"First name\\\" /> </div> <div class=\\\"col\\\"> <input class=\\\"form-control\\\" type=\\\"text\\\" placeholder=\\\"Last name\\\" aria-label=\\\"Last name\\\" /> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="row">
                    <div className="col">
                      <input className="form-control" type="text" placeholder="First name" aria-label="First name" />
                    </div>
                    <div className="col">
                      <input className="form-control" type="text" placeholder="Last name" aria-label="Last name" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Form Grid Layout
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#form-grid-layout-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="form-grid-layout-code" aria-expanded="false">
                        <span className="me-2" data-feather={"code"}>                        </span>View code
                      </a>
                      <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                        <span className="me-2" data-feather={"eye"}>                        </span>Hide code
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="form-grid-layout-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><form class=\\\"row g-3\\\"> <div class=\\\"col-md-6\\\"> <label class=\\\"form-label\\\" for=\\\"inputEmail4\\\">Email</label> <input class=\\\"form-control\\\" id=\\\"inputEmail4\\\" type=\\\"email\\\" /> </div> <div class=\\\"col-md-6\\\"> <label class=\\\"form-label\\\" for=\\\"inputPassword4\\\">Password</label> <input class=\\\"form-control\\\" id=\\\"inputPassword4\\\" type=\\\"password\\\" /> </div> <div class=\\\"col-12\\\"> <label class=\\\"form-label\\\" for=\\\"inputAddress\\\">Address</label> <input class=\\\"form-control\\\" id=\\\"inputAddress\\\" type=\\\"text\\\" placeholder=\\\"1234 Main St\\\" /> </div> <div class=\\\"col-12\\\"> <label class=\\\"form-label\\\" for=\\\"inputAddress2\\\">Address 2</label> <input class=\\\"form-control\\\" id=\\\"inputAddress2\\\" type=\\\"text\\\" placeholder=\\\"Apartment, studio, or floor\\\" /> </div> <div class=\\\"col-md-6\\\"> <label class=\\\"form-label\\\" for=\\\"inputCity\\\">City</label> <input class=\\\"form-control\\\" id=\\\"inputCity\\\" type=\\\"text\\\" /> </div> <div class=\\\"col-md-4\\\"> <label class=\\\"form-label\\\" for=\\\"inputState\\\">State</label> <select class=\\\"form-select\\\" id=\\\"inputState\\\"> <option selected=\\\"selected\\\">Choose...</option> <option>...</option> </select> </div> <div class=\\\"col-md-2\\\"> <label class=\\\"form-label\\\" for=\\\"inputZip\\\">Zip</label> <input class=\\\"form-control\\\" id=\\\"inputZip\\\" type=\\\"text\\\" /> </div> <div class=\\\"col-12\\\"> <div class=\\\"form-check\\\"> <input class=\\\"form-check-input\\\" id=\\\"gridCheck\\\" type=\\\"checkbox\\\" /> <label class=\\\"form-check-label\\\" for=\\\"gridCheck\\\">Check me out</label> </div> </div> <div class=\\\"col-12\\\"> <button class=\\\"btn btn-primary\\\" type=\\\"submit\\\">Sign in</button> </div> </form></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <form className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="inputEmail4">
Email
                      </label>
                      <input className="form-control" id="inputEmail4" type="email" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="inputPassword4">
Password
                      </label>
                      <input className="form-control" id="inputPassword4" type="password" />
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="inputAddress">
Address
                      </label>
                      <input className="form-control" id="inputAddress" type="text" placeholder="1234 Main St" />
                    </div>
                    <div className="col-12">
                      <label className="form-label" htmlFor="inputAddress2">
Address 2
                      </label>
                      <input className="form-control" id="inputAddress2" type="text" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="inputCity">
City
                      </label>
                      <input className="form-control" id="inputCity" type="text" />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label" htmlFor="inputState">
State
                      </label>
                      <select className="form-select" id="inputState">
                        <option>
Choose...
                        </option>
                        <option>
...
                        </option>
                      </select>
                    </div>
                    <div className="col-md-2">
                      <label className="form-label" htmlFor="inputZip">
Zip
                      </label>
                      <input className="form-control" id="inputZip" type="text" />
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" id="gridCheck" type="checkbox" />
                        <label className="form-check-label" htmlFor="gridCheck">
Check me out
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary" type="submit">
Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Grid - Column Sizing
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#grid---column-sizing-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="grid---column-sizing-code" aria-expanded="false">
                        <span className="me-2" data-feather={"code"}>                        </span>View code
                      </a>
                      <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                        <span className="me-2" data-feather={"eye"}>                        </span>Hide code
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="grid---column-sizing-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"row g-3\\\"> <div class=\\\"col-sm-7\\\"> <input class=\\\"form-control\\\" type=\\\"text\\\" placeholder=\\\"City\\\" aria-label=\\\"City\\\" /> </div> <div class=\\\"col-sm\\\"> <input class=\\\"form-control\\\" type=\\\"text\\\" placeholder=\\\"State\\\" aria-label=\\\"State\\\" /> </div> <div class=\\\"col-sm\\\"> <input class=\\\"form-control\\\" type=\\\"text\\\" placeholder=\\\"Zip\\\" aria-label=\\\"Zip\\\" /> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="row g-3">
                    <div className="col-sm-7">
                      <input className="form-control" type="text" placeholder="City" aria-label="City" />
                    </div>
                    <div className="col-sm">
                      <input className="form-control" type="text" placeholder="State" aria-label="State" />
                    </div>
                    <div className="col-sm">
                      <input className="form-control" type="text" placeholder="Zip" aria-label="Zip" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Grid - Auto Sizing
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#grid---auto-sizing-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="grid---auto-sizing-code" aria-expanded="false">
                        <span className="me-2" data-feather={"code"}>                        </span>View code
                      </a>
                      <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                        <span className="me-2" data-feather={"eye"}>                        </span>Hide code
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="grid---auto-sizing-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><form class=\\\"row gy-2 gx-3 align-items-center\\\"> <div class=\\\"col-auto\\\"> <label class=\\\"visually-hidden\\\" for=\\\"autoSizingInput\\\">Name</label> <input class=\\\"form-control\\\" id=\\\"autoSizingInput\\\" type=\\\"text\\\" placeholder=\\\"Jane Doe\\\" /> </div> <div class=\\\"col-auto\\\"> <label class=\\\"visually-hidden\\\" for=\\\"autoSizingInputGroup\\\">Username</label> <div class=\\\"input-group\\\"> <div class=\\\"input-group-text\\\">@</div> <input class=\\\"form-control\\\" id=\\\"autoSizingInputGroup\\\" type=\\\"text\\\" placeholder=\\\"Username\\\" /> </div> </div> <div class=\\\"col-auto\\\"> <label class=\\\"visually-hidden\\\" for=\\\"autoSizingSelect\\\">Preference</label> <select class=\\\"form-select\\\" id=\\\"autoSizingSelect\\\"> <option selected=\\\"selected\\\">Choose...</option> <option value=\\\"1\\\">One</option> <option value=\\\"2\\\">Two</option> <option value=\\\"3\\\">Three</option> </select> </div> <div class=\\\"col-auto\\\"> <div class=\\\"form-check mb-0\\\"> <input class=\\\"form-check-input\\\" id=\\\"autoSizingCheck\\\" type=\\\"checkbox\\\" /> <label class=\\\"form-check-label mb-0\\\" for=\\\"autoSizingCheck\\\">Remember me</label> </div> </div> <div class=\\\"col-auto\\\"> <button class=\\\"btn btn-primary\\\" type=\\\"submit\\\">Submit</button> </div> </form></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <form className="row gy-2 gx-3 align-items-center">
                    <div className="col-auto">
                      <label className="visually-hidden" htmlFor="autoSizingInput">
Name
                      </label>
                      <input className="form-control" id="autoSizingInput" type="text" placeholder="Jane Doe" />
                    </div>
                    <div className="col-auto">
                      <label className="visually-hidden" htmlFor="autoSizingInputGroup">
Username
                      </label>
                      <div className="input-group">
                        <div className="input-group-text">
@
                        </div>
                        <input className="form-control" id="autoSizingInputGroup" type="text" placeholder="Username" />
                      </div>
                    </div>
                    <div className="col-auto">
                      <label className="visually-hidden" htmlFor="autoSizingSelect">
Preference
                      </label>
                      <select className="form-select" id="autoSizingSelect">
                        <option>
Choose...
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
                    </div>
                    <div className="col-auto">
                      <div className="form-check mb-0">
                        <input className="form-check-input" id="autoSizingCheck" type="checkbox" />
                        <label className="form-check-label mb-0" htmlFor="autoSizingCheck">
Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-auto">
                      <button className="btn btn-primary" type="submit">
Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Gutters
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#gutters-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="gutters-code" aria-expanded="false">
                        <span className="me-2" data-feather={"code"}>                        </span>View code
                      </a>
                      <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                        <span className="me-2" data-feather={"eye"}>                        </span>Hide code
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="gutters-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"row g-3\\\"> <div class=\\\"col\\\"> <input class=\\\"form-control\\\" type=\\\"text\\\" placeholder=\\\"First name\\\" aria-label=\\\"First name\\\" /> </div> <div class=\\\"col\\\"> <input class=\\\"form-control\\\" type=\\\"text\\\" placeholder=\\\"Last name\\\" aria-label=\\\"Last name\\\" /> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="row g-3">
                    <div className="col">
                      <input className="form-control" type="text" placeholder="First name" aria-label="First name" />
                    </div>
                    <div className="col">
                      <input className="form-control" type="text" placeholder="Last name" aria-label="Last name" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Inline forms
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#inline-forms-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="inline-forms-code" aria-expanded="false">
                        <span className="me-2" data-feather={"code"}>                        </span>View code
                      </a>
                      <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                        <span className="me-2" data-feather={"eye"}>                        </span>Hide code
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="inline-forms-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><form class=\\\"row row-cols-lg-5 g-3 align-items-center\\\"> <div class=\\\"col-12\\\"> <label class=\\\"sr-only\\\" for=\\\"inlineFormInputName\\\">Name</label> <input class=\\\"form-control\\\" id=\\\"inlineFormInputName\\\" type=\\\"text\\\" placeholder=\\\"Jane Doe\\\" /> </div> <div class=\\\"col-12\\\"> <label class=\\\"sr-only\\\" for=\\\"inlineFormInputGroupUsername\\\">Username</label> <div class=\\\"input-group\\\"> <div class=\\\"input-group-text\\\">@</div> <input class=\\\"form-control\\\" id=\\\"inlineFormInputGroupUsername\\\" type=\\\"text\\\" placeholder=\\\"Username\\\" /> </div> </div> <div class=\\\"col-12\\\"> <label class=\\\"sr-only\\\" for=\\\"inlineFormSelectPref\\\">Preference</label> <select class=\\\"form-select\\\" id=\\\"inlineFormSelectPref\\\"> <option selected=\\\"\\\">Choose...</option> <option value=\\\"1\\\">One</option> <option value=\\\"2\\\">Two</option> <option value=\\\"3\\\">Three</option> </select> </div> <div class=\\\"col-12\\\"> <div class=\\\"form-check mb-0\\\"> <input class=\\\"form-check-input\\\" id=\\\"inlineFormCheck\\\" type=\\\"checkbox\\\" /> <label class=\\\"mb-0 form-check-label\\\" for=\\\"inlineFormCheck\\\">Remember me</label> </div> </div> <div class=\\\"col-12\\\"> <button class=\\\"btn btn-primary\\\" type=\\\"submit\\\">Submit</button> </div> </form></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <form className="row row-cols-lg-5 g-3 align-items-center">
                    <div className="col-12">
                      <label className="sr-only" htmlFor="inlineFormInputName">
Name
                      </label>
                      <input className="form-control" id="inlineFormInputName" type="text" placeholder="Jane Doe" />
                    </div>
                    <div className="col-12">
                      <label className="sr-only" htmlFor="inlineFormInputGroupUsername">
Username
                      </label>
                      <div className="input-group">
                        <div className="input-group-text">
@
                        </div>
                        <input className="form-control" id="inlineFormInputGroupUsername" type="text" placeholder="Username" />
                      </div>
                    </div>
                    <div className="col-12">
                      <label className="sr-only" htmlFor="inlineFormSelectPref">
Preference
                      </label>
                      <select className="form-select" id="inlineFormSelectPref">
                        <option>
Choose...
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
                    </div>
                    <div className="col-12">
                      <div className="form-check mb-0">
                        <input className="form-check-input" id="inlineFormCheck" type="checkbox" />
                        <label className="mb-0 form-check-label" htmlFor="inlineFormCheck">
Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary" type="submit">
Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Utilities
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#utilities-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="utilities-code" aria-expanded="false">
                        <span className="me-2" data-feather={"code"}>                        </span>View code
                      </a>
                      <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                        <span className="me-2" data-feather={"eye"}>                        </span>Hide code
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="utilities-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"mb-3\\\"> <label class=\\\"form-label\\\" for=\\\"formGroupExampleInput\\\">Example label</label> <input class=\\\"form-control\\\" id=\\\"formGroupExampleInput\\\" type=\\\"text\\\" placeholder=\\\"Example input placeholder\\\" /> </div> <div class=\\\"mb-3\\\"> <label class=\\\"form-label\\\" for=\\\"formGroupExampleInput2\\\">Another label</label> <input class=\\\"form-control\\\" id=\\\"formGroupExampleInput2\\\" type=\\\"text\\\" placeholder=\\\"Another input placeholder\\\" /> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="formGroupExampleInput">
Example label
                    </label>
                    <input className="form-control" id="formGroupExampleInput" type="text" placeholder="Example input placeholder" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="formGroupExampleInput2">
Another label
                    </label>
                    <input className="form-control" id="formGroupExampleInput2" type="text" placeholder="Another input placeholder" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-2">
          <div className="position-sticky mt-xl-4" style={{"top":"80px"} as CSSProperties}>
            <h5 className="lh-1">
On this page 
            </h5>
            <hr />
            <ul className="nav nav-vertical flex-column doc-nav" data-doc-nav>
              <li className="nav-item">
                <a href="#basic-form" className="nav-link">
Basic form
                </a>
              </li>
              <li className="nav-item">
                <a href="#horizontal-form" className="nav-link">
Horizontal form
                </a>
              </li>
              <li className="nav-item">
                <a href="#horizontal-form-label-sizing" className="nav-link">
Horizontal form label sizing
                </a>
              </li>
              <li className="nav-item">
                <a href="#form-grid" className="nav-link">
Form grid
                </a>
              </li>
              <li className="nav-item">
                <a href="#form-grid-layout" className="nav-link">
Form Grid Layout
                </a>
              </li>
              <li className="nav-item">
                <a href="#grid-column-sizing" className="nav-link">
Grid - Column Sizing
                </a>
              </li>
              <li className="nav-item">
                <a href="#grid-auto-sizing" className="nav-link">
Grid - Auto Sizing
                </a>
              </li>
              <li className="nav-item">
                <a href="#gutters" className="nav-link">
Gutters
                </a>
              </li>
              <li className="nav-item">
                <a href="#utilities" className="nav-link">
Utilities
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="position-fixed bottom-0 end-0 p-3" style={{"zIndex":"1050"} as CSSProperties}>
      <div className="toast align-items-center text-white bg-dark border-0" id="icon-copied-toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="d-flex" data-bs-theme={"dark"}>
          <div className="toast-body p-3">          </div>
          <button className="btn-close me-2 m-auto" type="button" data-bs-dismiss={"toast"} aria-label="Close">          </button>
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
