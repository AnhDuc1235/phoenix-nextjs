'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function PricingGrid() {
  return (
    <div suppressHydrationWarning>

    <nav className="mb-3" aria-label="breadcrumb">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <a href="#!">
Pages
          </a>
        </li>
        <li className="breadcrumb-item active">
Pricing-grid
        </li>
      </ol>
    </nav>

    <div className="pb-9">
      <h2 className="mb-7">
Pricing
      </h2>
      <div className="row">
        <div className="col-xl-12 col-xxl-9 mb-1">
          <div className="tabs mb-7">
            <ul className="nav nav-underline fs-9 mb-3" id="nav-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-year-tab" data-bs-toggle={"pill"} data-bs-target={"#pills-year"} type="button" role="tab" aria-controls="pills-year" aria-selected="false">
Yearly
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-month-tab" data-bs-toggle={"pill"} data-bs-target={"#pills-month"} type="button" role="tab" aria-controls="pills-month" aria-selected="true">
Monthly
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-month" role="tabpanel" aria-labelledby="pills-month-tab">
                <div className="row g-3">
                  <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                    <div className="h-100">
                      <input className="card-form-check-input d-none" type="radio" name="pricingMonthly" id="startup" defaultChecked />
                      <div className="position-relative h-100">
                        <label className="stretched-link" htmlFor="startup">                        </label>
                        <div className="card h-100 overflow-hidden cursor-pointer">
                          <div className="bg-holder d-dark-none" style={{"backgroundImage":"url(../../assets/img/bg/8.png)","backgroundPosition":"left bottom","backgroundSize":"auto","bottom":"-1px"} as CSSProperties}>                          </div>
                          <div className="bg-holder d-light-none" style={{"backgroundImage":"url(../../assets/img/bg/8-dark.png)","backgroundPosition":"left bottom","backgroundSize":"auto","bottom":"-1px"} as CSSProperties}>                          </div>
                          <div className="card-body d-flex flex-column justify-content-between position-relative">
                            <div className="d-flex justify-content-between">
                              <div className="mb-5 mb-md-0 mb-lg-5 me-3">
                                <div className="d-sm-flex align-items-center mb-3">
                                  <h3 className="mb-0">
Startup
                                  </h3>
                                </div>
                                <p className="fs-9 text-body-tertiary">
For individuals who are interested 
                                  <br />
 in giving it a shot first.
                                </p>
                                <div className="d-flex align-items-end mb-md-5 mb-lg-0">
                                  <h4 className="fw-bolder me-1">
Free
                                  </h4>
                                  <h5 className="fs-9 fw-normal text-body-tertiary ms-1">
Forever
                                  </h5>
                                </div>
                              </div>
                              <PhoenixImage src="/assets/img/spot-illustrations/rocket.png" alt="" className="d-dark-none" width={54} height={54} />
                              <PhoenixImage src="/assets/img/spot-illustrations/rocket-dark.png" alt="" className="d-light-none" width={54} height={54} />
                            </div>
                            <div className="row flex-1 justify-content-end">
                              <div className="col-sm-8 col-md-12">
                                <div className="d-sm-flex d-md-block d-lg-flex justify-content-end align-items-end h-100">
                                  <ul className="list-unstyled mb-0 border-start-sm border-start-md-0 border-start-lg ps-sm-5 ps-md-0 ps-lg-5 border-translucent">
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
Up to 4 Members
                                      </span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
3 Collaboration projects
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                    <div className="h-100">
                      <input className="card-form-check-input d-none" type="radio" name="pricingMonthly" id="standard" />
                      <div className="position-relative h-100">
                        <label className="stretched-link" htmlFor="standard">                        </label>
                        <div className="card h-100 overflow-hidden cursor-pointer">
                          <div className="bg-holder d-dark-none" style={{"backgroundImage":"url(../../assets/img/bg/9.png)","backgroundPosition":"left bottom","backgroundSize":"auto","bottom":"-1px"} as CSSProperties}>                          </div>
                          <div className="bg-holder d-light-none" style={{"backgroundImage":"url(../../assets/img/bg/9-dark.png)","backgroundPosition":"left bottom","backgroundSize":"auto","bottom":"-1px"} as CSSProperties}>                          </div>
                          <div className="card-body d-flex flex-column justify-content-between position-relative">
                            <div className="d-flex justify-content-between">
                              <div className="mb-5 mb-md-0 mb-lg-5 me-3">
                                <div className="d-sm-flex align-items-center mb-3">
                                  <h3 className="mb-0">
Standard
                                  </h3>
                                </div>
                                <p className="fs-9 text-body-tertiary">
For teams that need to create 
                                  <br />
 project plans with confidence.
                                </p>
                                <div className="d-flex align-items-end mb-md-5 mb-lg-0">
                                  <h4 className="fw-bolder me-1">
$14.99
                                  </h4>
                                  <h5 className="fs-9 fw-normal text-body-tertiary ms-1">
Per month
                                  </h5>
                                </div>
                              </div>
                              <PhoenixImage src="/assets/img/spot-illustrations/bag-2.png" alt="" className="d-dark-none" width={54} height={54} />
                              <PhoenixImage src="/assets/img/spot-illustrations/bag-2-dark.png" alt="" className="d-light-none" width={54} height={54} />
                            </div>
                            <div className="row flex-1 justify-content-end">
                              <div className="col-sm-8 col-md-12">
                                <div className="d-sm-flex d-md-block d-lg-flex justify-content-end align-items-end h-100">
                                  <ul className="list-unstyled mb-0 border-start-sm border-start-md-0 border-start-lg ps-sm-5 ps-md-0 ps-lg-5 border-translucent">
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
Up to 8 Members
                                      </span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
{"Create & Share libraries"}
                                      </span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
10 Collaboration projects
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                    <div className="h-100">
                      <input className="card-form-check-input d-none pricing-plan-recommended" type="radio" name="pricingMonthly" id="businessPlus" />
                      <div className="position-relative h-100">
                        <label className="stretched-link" htmlFor="businessPlus">                        </label>
                        <div className="card h-100 overflow-hidden cursor-pointer bg-warning-subtle border-warning warning-boxshadow pricing-business-plus">
                          <div className="bg-holder d-dark-none" style={{"backgroundImage":"url(../../assets/img/bg/bg-11.png)","backgroundPosition":"left bottom","backgroundSize":"auto"} as CSSProperties}>                          </div>
                          <div className="bg-holder d-light-none" style={{"backgroundImage":"url(../../assets/img/bg/bg-11-dark.png)","backgroundPosition":"left bottom","backgroundSize":"auto"} as CSSProperties}>                          </div>
                          <div className="card-body d-flex flex-column justify-content-between position-relative">
                            <div className="d-flex justify-content-between">
                              <div className="mb-5 mb-md-0 mb-lg-5 me-3">
                                <div className="d-sm-flex d-md-block d-lg-flex align-items-center mb-3">
                                  <h3 className="mb-0">
Business Plus
                                  </h3>
                                  <span className="badge ms-sm-3 ms-md-0 ms-lg-3 text-uppercase fs-10 text-bg-warning">
recommended
                                  </span>
                                </div>
                                <p className="fs-9 text-body-tertiary">
For teams that need to manage 
                                  <br />
 work across initiatives.
                                </p>
                                <div className="d-flex align-items-end mb-md-5 mb-lg-0">
                                  <h4 className="fw-bolder me-1">
$49.99
                                  </h4>
                                  <h5 className="fs-9 fw-normal text-body-tertiary ms-1">
Per month
                                  </h5>
                                </div>
                              </div>
                              <PhoenixImage src="/assets/img/spot-illustrations/star.png" alt="" className="d-dark-none" width={54} height={54} />
                              <PhoenixImage src="/assets/img/spot-illustrations/star-dark.png" alt="" className="d-light-none" width={54} height={54} />
                            </div>
                            <div className="row flex-1 justify-content-end">
                              <div className="col-sm-8 col-md-12">
                                <div className="d-sm-flex d-md-block d-lg-flex justify-content-end align-items-end h-100">
                                  <ul className="list-unstyled mb-0 border-start-sm border-start-md-0 border-start-lg ps-sm-5 ps-md-0 ps-lg-5 border-warning-subtle">
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
Technical Supports
                                      </span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
Up to 20 Members
                                      </span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
{"Create & Share libraries"}
                                      </span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
                                        <span className="fw-bold">
Unlimited
                                        </span>
 Collaboration
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                    <div className="h-100">
                      <input className="card-form-check-input d-none" type="radio" name="pricingMonthly" id="enterprise" />
                      <div className="position-relative h-100">
                        <label className="stretched-link" htmlFor="enterprise">                        </label>
                        <div className="card h-100 overflow-hidden cursor-pointer">
                          <div className="bg-holder d-dark-none" style={{"backgroundImage":"url(../../assets/img/bg/10.png)","backgroundPosition":"left bottom","backgroundSize":"auto","bottom":"-1px"} as CSSProperties}>                          </div>
                          <div className="bg-holder d-light-none" style={{"backgroundImage":"url(../../assets/img/bg/10-dark.png)","backgroundPosition":"left bottom","backgroundSize":"auto","bottom":"-1px"} as CSSProperties}>                          </div>
                          <div className="card-body d-flex flex-column justify-content-between position-relative">
                            <div className="d-flex justify-content-between">
                              <div className="mb-5 mb-md-0 mb-lg-5 me-3">
                                <div className="d-sm-flex align-items-center mb-3">
                                  <h3 className="mb-0">
Enterprise
                                  </h3>
                                </div>
                                <p className="fs-9 text-body-tertiary">
For organizations that need 
                                  <br />
 additional security and support.
                                </p>
                                <div className="d-flex align-items-end mb-md-5 mb-lg-0">
                                  <h4 className="fw-bolder me-1">
$149.99
                                  </h4>
                                  <h5 className="fs-9 fw-normal text-body-tertiary ms-1">
Per month
                                  </h5>
                                </div>
                              </div>
                              <PhoenixImage src="/assets/img/spot-illustrations/shield-2.png" alt="" className="d-dark-none" width={54} height={54} />
                              <PhoenixImage src="/assets/img/spot-illustrations/shield-2-dark.png" alt="" className="d-light-none" width={54} height={54} />
                            </div>
                            <div className="row flex-1 justify-content-end">
                              <div className="col-sm-8 col-md-12">
                                <div className="d-sm-flex d-md-block d-lg-flex justify-content-end align-items-end h-100">
                                  <ul className="list-unstyled mb-0 border-start-sm border-start-md-0 border-start-lg ps-sm-5 ps-md-0 ps-lg-5 border-translucent">
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
24/7 VIP Support
                                      </span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
Automated analytics
                                      </span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
                                        <span className="fw-bold">
Unlimited
                                        </span>
 Members*
                                      </span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
{"Create & Share libraries"}
                                      </span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
Centralized billing
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-content" id="pills-tabContentYear">
              <div className="tab-pane fade" id="pills-year" role="tabpanel" aria-labelledby="pills-year-tab">
                <div className="row g-3">
                  <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                    <div className="h-100">
                      <input className="card-form-check-input d-none" type="radio" name="pricingYearly" id="startupYearly" defaultChecked />
                      <div className="position-relative h-100">
                        <label className="stretched-link" htmlFor="startupYearly">                        </label>
                        <div className="card h-100 overflow-hidden cursor-pointer">
                          <div className="bg-holder d-dark-none" style={{"backgroundImage":"url(../../assets/img/bg/8.png)","backgroundPosition":"left bottom","backgroundSize":"auto","bottom":"-1px"} as CSSProperties}>                          </div>
                          <div className="bg-holder d-light-none" style={{"backgroundImage":"url(../../assets/img/bg/8-dark.png)","backgroundPosition":"left bottom","backgroundSize":"auto","bottom":"-1px"} as CSSProperties}>                          </div>
                          <div className="card-body d-flex flex-column justify-content-between position-relative">
                            <div className="d-flex justify-content-between">
                              <div className="mb-5 mb-md-0 mb-lg-5 me-3">
                                <div className="d-sm-flex align-items-center mb-3">
                                  <h3 className="mb-0">
Startup
                                  </h3>
                                </div>
                                <p className="fs-9 text-body-tertiary">
For individuals who are interested 
                                  <br />
 in giving it a shot first.
                                </p>
                                <div className="d-flex align-items-end mb-md-5 mb-lg-0">
                                  <h4 className="fw-bolder me-1">
Free
                                  </h4>
                                  <h5 className="fs-9 fw-normal text-body-tertiary ms-1">
Forever
                                  </h5>
                                </div>
                              </div>
                              <PhoenixImage src="/assets/img/spot-illustrations/rocket.png" alt="" className="d-dark-none" width={54} height={54} />
                              <PhoenixImage src="/assets/img/spot-illustrations/rocket-dark.png" alt="" className="d-light-none" width={54} height={54} />
                            </div>
                            <div className="row flex-1 justify-content-end">
                              <div className="col-sm-8 col-md-12">
                                <div className="d-sm-flex d-md-block d-lg-flex justify-content-end align-items-end h-100">
                                  <ul className="list-unstyled mb-0 border-start-sm border-start-md-0 border-start-lg ps-sm-5 ps-md-0 ps-lg-5 border-translucent">
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
Up to 4 Members
                                      </span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
3 Collaboration projects
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                    <div className="h-100">
                      <input className="card-form-check-input d-none" type="radio" name="pricingYearly" id="standardYearly" />
                      <div className="position-relative h-100">
                        <label className="stretched-link" htmlFor="standardYearly">                        </label>
                        <div className="card h-100 overflow-hidden cursor-pointer">
                          <div className="bg-holder d-dark-none" style={{"backgroundImage":"url(../../assets/img/bg/9.png)","backgroundPosition":"left bottom","backgroundSize":"auto","bottom":"-1px"} as CSSProperties}>                          </div>
                          <div className="bg-holder d-light-none" style={{"backgroundImage":"url(../../assets/img/bg/9-dark.png)","backgroundPosition":"left bottom","backgroundSize":"auto","bottom":"-1px"} as CSSProperties}>                          </div>
                          <div className="card-body d-flex flex-column justify-content-between position-relative">
                            <div className="d-flex justify-content-between">
                              <div className="mb-5 mb-md-0 mb-lg-5 me-3">
                                <div className="d-sm-flex align-items-center mb-3">
                                  <h3 className="mb-0">
Standard
                                  </h3>
                                </div>
                                <p className="fs-9 text-body-tertiary">
For teams that need to create 
                                  <br />
 project plans with confidence.
                                </p>
                                <div className="d-flex align-items-end mb-md-5 mb-lg-0">
                                  <h4 className="fw-bolder me-1">
$179.88
                                  </h4>
                                  <h5 className="fs-9 fw-normal text-body-tertiary ms-1">
Per year
                                  </h5>
                                </div>
                              </div>
                              <PhoenixImage src="/assets/img/spot-illustrations/bag-2.png" alt="" className="d-dark-none" width={54} height={54} />
                              <PhoenixImage src="/assets/img/spot-illustrations/bag-2-dark.png" alt="" className="d-light-none" width={54} height={54} />
                            </div>
                            <div className="row flex-1 justify-content-end">
                              <div className="col-sm-8 col-md-12">
                                <div className="d-sm-flex d-md-block d-lg-flex justify-content-end align-items-end h-100">
                                  <ul className="list-unstyled mb-0 border-start-sm border-start-md-0 border-start-lg ps-sm-5 ps-md-0 ps-lg-5 border-translucent">
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
Up to 8 Members
                                      </span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
{"Create & Share libraries"}
                                      </span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
10 Collaboration projects
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                    <div className="h-100">
                      <input className="card-form-check-input d-none pricing-plan-recommended" type="radio" name="pricingYearly" id="businessPlusYearly" />
                      <div className="position-relative h-100">
                        <label className="stretched-link" htmlFor="businessPlusYearly">                        </label>
                        <div className="card h-100 overflow-hidden cursor-pointer bg-warning-subtle border-warning warning-boxshadow pricing-business-plus">
                          <div className="bg-holder d-dark-none" style={{"backgroundImage":"url(../../assets/img/bg/bg-11.png)","backgroundPosition":"left bottom","backgroundSize":"auto","bottom":"-1px"} as CSSProperties}>                          </div>
                          <div className="bg-holder d-light-none" style={{"backgroundImage":"url(../../assets/img/bg/bg-11-dark.png)","backgroundPosition":"left bottom","backgroundSize":"auto","bottom":"-1px"} as CSSProperties}>                          </div>
                          <div className="card-body d-flex flex-column justify-content-between position-relative">
                            <div className="d-flex justify-content-between">
                              <div className="mb-5 mb-md-0 mb-lg-5 me-3">
                                <div className="d-sm-flex align-items-center mb-3">
                                  <h3 className="mb-0">
Business Plus
                                  </h3>
                                  <span className="badge ms-sm-3 text-uppercase fs-10 text-bg-warning">
recommended
                                  </span>
                                </div>
                                <p className="fs-9 text-body-tertiary">
For teams that need to manage 
                                  <br />
 work across initiatives.
                                </p>
                                <div className="d-flex align-items-end mb-md-5 mb-lg-0">
                                  <h4 className="fw-bolder me-1">
$599.88
                                  </h4>
                                  <h5 className="fs-9 fw-normal text-body-tertiary ms-1">
Per year
                                  </h5>
                                </div>
                              </div>
                              <PhoenixImage src="/assets/img/spot-illustrations/star.png" alt="" className="d-dark-none" width={54} height={54} />
                              <PhoenixImage src="/assets/img/spot-illustrations/star-dark.png" alt="" className="d-light-none" width={54} height={54} />
                            </div>
                            <div className="row flex-1 justify-content-end">
                              <div className="col-sm-8 col-md-12">
                                <div className="d-sm-flex d-md-block d-lg-flex justify-content-end align-items-end h-100">
                                  <ul className="list-unstyled mb-0 border-start-sm border-start-md-0 border-start-lg ps-sm-5 ps-md-0 ps-lg-5 border-translucent">
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
Technical Supports
                                      </span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
Up to 20 Members
                                      </span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
{"Create & Share libraries"}
                                      </span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
                                        <span className="fw-bold">
Unlimited
                                        </span>
 Collaboration
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                    <div className="h-100">
                      <input className="card-form-check-input d-none" type="radio" name="pricingYearly" id="enterpriseYearly" />
                      <div className="position-relative h-100">
                        <label className="stretched-link" htmlFor="enterpriseYearly">                        </label>
                        <div className="card h-100 overflow-hidden cursor-pointer">
                          <div className="bg-holder d-dark-none" style={{"backgroundImage":"url(../../assets/img/bg/10.png)","backgroundPosition":"left bottom","backgroundSize":"auto","bottom":"-1px"} as CSSProperties}>                          </div>
                          <div className="bg-holder d-light-none" style={{"backgroundImage":"url(../../assets/img/bg/10-dark.png)","backgroundPosition":"left bottom","backgroundSize":"auto","bottom":"-1px"} as CSSProperties}>                          </div>
                          <div className="card-body d-flex flex-column justify-content-between position-relative">
                            <div className="d-flex justify-content-between">
                              <div className="mb-5 mb-md-0 mb-lg-5 me-3">
                                <div className="d-sm-flex align-items-center mb-3">
                                  <h3 className="mb-0">
Enterprise
                                  </h3>
                                </div>
                                <p className="fs-9 text-body-tertiary">
For organizations that need 
                                  <br />
 additional security and support.
                                </p>
                                <div className="d-flex align-items-end mb-md-5 mb-lg-0">
                                  <h4 className="fw-bolder me-1">
$1,799.88
                                  </h4>
                                  <h5 className="fs-9 fw-normal text-body-tertiary ms-1">
Per year
                                  </h5>
                                </div>
                              </div>
                              <PhoenixImage src="/assets/img/spot-illustrations/shield-2.png" alt="" className="d-dark-none" width={54} height={54} />
                              <PhoenixImage src="/assets/img/spot-illustrations/shield-2-dark.png" alt="" className="d-light-none" width={54} height={54} />
                            </div>
                            <div className="row flex-1 justify-content-end">
                              <div className="col-sm-8 col-md-12">
                                <div className="d-sm-flex d-md-block d-lg-flex justify-content-end align-items-end h-100">
                                  <ul className="list-unstyled mb-0 border-start-sm border-start-md-0 border-start-lg ps-sm-5 ps-md-0 ps-lg-5 border-translucent">
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
24/7 VIP Support
                                      </span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
Automated analytics
                                      </span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
                                        <span className="fw-bold">
Unlimited
                                        </span>
 Members*
                                      </span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
{"Create & Share libraries"}
                                      </span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                      <span className="uil uil-check-circle text-success me-2">                                      </span>
                                      <span className="text-body-tertiary fw-semibold">
Centralized billing
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-0">
Business Starter, Business Standard, and Business Plus plans can be purchased for a maximum of 300 users. There is no 
              <br className="d-none d-xl-block d-xxl-none" />
maximum user limit for Enterprise plans.
            </p>
            <p className="fw-semibold">
Phoenix customers may have access to additional features for a limited 
              <br className="d-none d-sm-block d-lg-none" />
promotional period.
            </p>
            <div className="d-grid d-sm-flex">
              <button className="btn btn-lg btn-primary d-sm-flex align-items-center mb-3 mb-sm-0 me-sm-3 px-sm-8">
Subscribe Now
                <span className="fas fa-angle-right ms-1">                </span>
              </button>
              <button className="btn btn-lg btn-outline-primary px-sm-7">
Start 7 days free Trial
              </button>
            </div>
          </div>
        </div>
        <div className="col col-xxl-3 mt-8">
          <h3 className="fw-semibold mb-3">
Included in our all packages
          </h3>
          <div className="row">
            <div className="col-md-6 col-xxl-12">
              <div className="rounded-3 py-2 px-3 bg-body-emphasis d-flex align-items-center mb-3">
                <span className="fas fa-check text-primary me-3 fs-9">                </span>
                <p className="mb-0 text-body-secondary">
Timeline
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xxl-12">
              <div className="rounded-3 py-2 px-3 bg-body-emphasis d-flex align-items-center mb-3">
                <span className="fas fa-check text-primary me-3 fs-9">                </span>
                <p className="mb-0 text-body-secondary">
Advanced Search
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xxl-12">
              <div className="rounded-3 py-2 px-3 bg-body-emphasis d-flex align-items-center mb-3">
                <span className="fas fa-check text-primary me-3 fs-9">                </span>
                <p className="mb-0 text-body-secondary">
Custom fields
                </p>
                <span className="badge badge-phoenix badge-phoenix-primary ms-2">
New
                </span>
              </div>
            </div>
            <div className="col-md-6 col-xxl-12">
              <div className="rounded-3 py-2 px-3 bg-body-emphasis d-flex align-items-center mb-3">
                <span className="fas fa-check text-primary me-3 fs-9">                </span>
                <p className="mb-0 text-body-secondary">
Task dependencies
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xxl-12">
              <div className="rounded-3 py-2 px-3 bg-body-emphasis d-flex align-items-center mb-3">
                <span className="fas fa-check text-primary me-3 fs-9">                </span>
                <p className="mb-0 text-body-secondary">
20TB of additional space 
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xxl-12">
              <div className="rounded-3 py-2 px-3 bg-body-emphasis d-flex align-items-center mb-3">
                <span className="fas fa-check text-primary me-3 fs-9">                </span>
                <p className="mb-0 text-body-secondary">
Bandwidth of Upto 1 Gbps
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xxl-12">
              <div className="rounded-3 py-2 px-3 bg-body-emphasis d-flex align-items-center mb-3">
                <span className="fas fa-check text-primary me-3 fs-9">                </span>
                <p className="mb-0 text-body-secondary">
{"Private teams & projects"}
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xxl-12">
              <div className="rounded-3 py-2 px-3 bg-body-emphasis d-flex align-items-center mb-3">
                <span className="fas fa-check text-primary me-3 fs-9">                </span>
                <p className="mb-0 text-body-secondary">
Customer Support and Training
                </p>
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
