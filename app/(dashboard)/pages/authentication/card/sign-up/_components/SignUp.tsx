'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function SignUp() {
  return (
    <div suppressHydrationWarning>

    <div className="container-fluid bg-body-tertiary dark__bg-gray-1200">
      <div className="bg-holder bg-auth-card-overlay" style={{"backgroundImage":"url(../../../assets/img/bg/37.png)"} as CSSProperties}>      </div>
      <div className="row flex-center position-relative min-vh-100 g-0 py-5">
        <div className="col-11 col-sm-10 col-xl-8">
          <div className="card border border-translucent auth-card">
            <div className="card-body pe-md-0">
              <div className="row align-items-center gx-0 gy-7">
                <div className="col-auto bg-body-highlight dark__bg-gray-1100 rounded-3 position-relative overflow-hidden auth-title-box">
                  <div className="bg-holder" style={{"backgroundImage":"url(../../../assets/img/bg/38.png)"} as CSSProperties}>                  </div>
                  <div className="position-relative px-4 px-lg-7 pt-7 pb-7 pb-sm-5 text-center text-md-start pb-lg-7 card-sign-up">
                    <h3 className="mb-3 text-body-emphasis fs-7">
Phoenix Authentication
                    </h3>
                    <p className="text-body-tertiary">
Give yourself some hassle-free development process with the uniqueness of Phoenix!
                    </p>
                    <ul className="list-unstyled mb-0 w-max-content w-md-auto">
                      <li className="d-flex align-items-center">
                        <span className="uil uil-check-circle text-success me-2">                        </span>
                        <span className="text-body-tertiary fw-semibold">
Fast
                        </span>
                      </li>
                      <li className="d-flex align-items-center">
                        <span className="uil uil-check-circle text-success me-2">                        </span>
                        <span className="text-body-tertiary fw-semibold">
Simple
                        </span>
                      </li>
                      <li className="d-flex align-items-center">
                        <span className="uil uil-check-circle text-success me-2">                        </span>
                        <span className="text-body-tertiary fw-semibold">
Responsive
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="position-relative z-n1 mb-6 d-none d-md-block text-center mt-md-15">
                    <PhoenixImage src="/assets/img/spot-illustrations/auth.png" alt="" className="auth-title-box-img d-dark-none" />
                    <PhoenixImage src="/assets/img/spot-illustrations/auth-dark.png" alt="" className="auth-title-box-img d-light-none" />
                  </div>
                </div>
                <div className="col mx-auto">
                  <div className="auth-form-box">
                    <div className="text-center mb-7">
                      <PhoenixLink href="/" className="d-flex flex-center text-decoration-none mb-4">
                        <div className="d-flex align-items-center fw-bolder fs-3 d-inline-block">
                          <PhoenixImage src="/assets/img/icons/logo.png" alt="phoenix" width={58} />
                        </div>
                      </PhoenixLink>
                      <h3 className="text-body-highlight">
Sign Up
                      </h3>
                      <p className="text-body-tertiary">
Create your account today
                      </p>
                    </div>
                    <button className="btn btn-phoenix-secondary w-100 mb-3">
                      <span className="fab fa-google text-danger me-2 fs-9">                      </span>
Sign up with google
                    </button>
                    <button className="btn btn-phoenix-secondary w-100">
                      <span className="fab fa-facebook text-primary me-2 fs-9">                      </span>
Sign up with facebook
                    </button>
                    <div className="position-relative mt-4">
                      <hr className="bg-body-secondary" />
                      <div className="divider-content-center bg-body-emphasis">
or use email
                      </div>
                    </div>
                    <form>
                      <div className="mb-3 text-start">
                        <label className="form-label" htmlFor="name">
Name
                        </label>
                        <input className="form-control" id="name" type="text" placeholder="Name" />
                      </div>
                      <div className="mb-3 text-start">
                        <label className="form-label" htmlFor="email">
Email address
                        </label>
                        <input className="form-control" id="email" type="email" placeholder="name@example.com" />
                      </div>
                      <div className="row g-3 mb-3">
                        <div className="col-sm-6">
                          <label className="form-label" htmlFor="password">
Password
                          </label>
                          <div className="position-relative" data-password>
                            <input className="form-control form-icon-input pe-6" id="password" type="password" placeholder="Password" data-password-input />
                            <button className="btn px-3 py-0 h-100 position-absolute top-0 end-0 fs-7 text-body-tertiary" data-password-toggle>
                              <span className="uil uil-eye show">                              </span>
                              <span className="uil uil-eye-slash hide">                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <label className="form-label" htmlFor="confirmPassword">
Confirm Password
                          </label>
                          <div className="position-relative" data-password>
                            <input className="form-control form-icon-input pe-6" id="confirmPassword" type="password" placeholder="Confirm Password" data-password-input />
                            <button className="btn px-3 py-0 h-100 position-absolute top-0 end-0 fs-7 text-body-tertiary" data-password-toggle>
                              <span className="uil uil-eye show">                              </span>
                              <span className="uil uil-eye-slash hide">                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="form-check mb-3">
                        <input className="form-check-input" id="termsService" type="checkbox" />
                        <label className="form-label fs-9 text-transform-none" htmlFor="termsService">
I accept the 
                          <a href="#!">
terms 
                          </a>
and 
                          <a href="#!">
privacy policy
                          </a>
                        </label>
                      </div>
                      <button className="btn btn-primary w-100 mb-3">
Sign up
                      </button>
                      <div className="text-center">
                        <PhoenixLink href="/pages/authentication/card/sign-in" className="fs-9 fw-bold">
Sign in to an existing account
                        </PhoenixLink>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className="support-chat-container">
      <div className="container-fluid support-chat">
        <div className="card bg-body-emphasis">
          <div className="card-header d-flex flex-between-center px-4 py-3 border-bottom border-translucent">
            <h5 className="mb-0 d-flex align-items-center gap-2">
Demo widget
              <span className="fa-solid fa-circle text-success fs-11">              </span>
            </h5>
            <div className="btn-reveal-trigger">
              <button className="btn btn-link p-0 dropdown-toggle dropdown-caret-none transition-none d-flex" type="button" id="support-chat-dropdown" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                <span className="fas fa-ellipsis-h text-body">                </span>
              </button>
              <div className="dropdown-menu dropdown-menu-end py-2" aria-labelledby="support-chat-dropdown">
                <a href="#!" className="dropdown-item">
Request a callback
                </a>
                <a href="#!" className="dropdown-item">
Search in chat
                </a>
                <a href="#!" className="dropdown-item">
Show history
                </a>
                <a href="#!" className="dropdown-item">
Report to Admin
                </a>
                <a href="#!" className="dropdown-item btn-support-chat">
Close Support
                </a>
              </div>
            </div>
          </div>
          <div className="card-body chat p-0">
            <div className="d-flex flex-column-reverse scrollbar h-100 p-3">
              <div className="text-end mt-6">
                <a href="#!" className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3">
                  <p className="mb-0 fw-semibold fs-9">
I need help with something
                  </p>                  <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3">                  </span>
                </a>
                <a href="#!" className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3">
                  <p className="mb-0 fw-semibold fs-9">
I can’t reorder a product I previously ordered
                  </p>                  <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3">                  </span>
                </a>
                <a href="#!" className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3">
                  <p className="mb-0 fw-semibold fs-9">
How do I place an order?
                  </p>                  <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3">                  </span>
                </a>
                <a href="#!" className="false d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3">
                  <p className="mb-0 fw-semibold fs-9">
My payment method not working
                  </p>                  <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3">                  </span>
                </a>
              </div>
              <div className="text-center mt-auto">
                <div className="avatar avatar-3xl status-online">
                  <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle border border-3 border-light-subtle" />
                </div>
                <h5 className="mt-2 mb-3">
Eric
                </h5>
                <p className="text-center text-body-emphasis mb-0">
Ask us anything – we’ll get back to you here or by email within 24 hours.
                </p>
              </div>
            </div>
          </div>
          <div className="card-footer d-flex align-items-center gap-2 border-top border-translucent ps-3 pe-4 py-3">
            <div className="d-flex align-items-center flex-1 gap-3 border border-translucent rounded-pill px-4">
              <input className="form-control outline-none border-0 flex-1 fs-9 px-0" type="text" placeholder="Write message" />
              <label className="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0" htmlFor="supportChatPhotos">
                <span className="fa-solid fa-image">                </span>
              </label>
              <input className="d-none" type="file" accept="image/*" id="supportChatPhotos" />
              <label className="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0" htmlFor="supportChatAttachment">
                <span className="fa-solid fa-paperclip">                </span>
              </label>
              <input className="d-none" type="file" id="supportChatAttachment" />
            </div>
            <button className="btn p-0 border-0 send-btn">
              <span className="fa-solid fa-paper-plane fs-9">              </span>
            </button>
          </div>
        </div>
      </div>
      <button className="btn btn-support-chat p-0 border border-translucent">
        <span className="fs-8 btn-text text-primary text-nowrap">
Chat demo
        </span>
        <span className="ping-icon-wrapper mt-n4 ms-n6 mt-sm-0 ms-sm-2 position-absolute position-sm-relative">
          <span className="ping-icon-bg">          </span>
          <span className="fa-solid fa-circle ping-icon">          </span>
        </span>
        <span className="fa-solid fa-headset text-primary fs-8 d-sm-none">        </span>
        <span className="fa-solid fa-chevron-down text-primary fs-7">        </span>
      </button>
    </div>

    </div>
  );
}
