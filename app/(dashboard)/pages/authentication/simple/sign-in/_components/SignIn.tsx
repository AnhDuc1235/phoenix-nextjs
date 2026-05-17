'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function SignIn() {
  return (
    <div suppressHydrationWarning>

    <div className="container">
      <div className="row flex-center min-vh-100 py-5">
        <div className="col-sm-10 col-md-8 col-lg-5 col-xl-5 col-xxl-3">
          <PhoenixLink href="/" className="d-flex flex-center text-decoration-none mb-4">
            <div className="d-flex align-items-center fw-bolder fs-3 d-inline-block">
              <PhoenixImage src="/assets/img/icons/logo.png" alt="phoenix" width={58} />
            </div>
          </PhoenixLink>
          <div className="text-center mb-7">
            <h3 className="text-body-highlight">
Sign In
            </h3>
            <p className="text-body-tertiary">
Get access to your account
            </p>
          </div>
          <button className="btn btn-phoenix-secondary w-100 mb-3">
            <span className="fab fa-google text-danger me-2 fs-9">            </span>
Sign in with google
          </button>
          <button className="btn btn-phoenix-secondary w-100">
            <span className="fab fa-facebook text-primary me-2 fs-9">            </span>
Sign in with facebook
          </button>
          <div className="position-relative">
            <hr className="bg-body-secondary mt-5 mb-4" />
            <div className="divider-content-center">
or use email
            </div>
          </div>
          <div className="mb-3 text-start">
            <label className="form-label" htmlFor="email">
Email address
            </label>
            <div className="form-icon-container">
              <input className="form-control form-icon-input" id="email" type="email" placeholder="name@example.com" />
              <span className="fas fa-user text-body fs-9 form-icon">              </span>
            </div>
          </div>
          <div className="mb-3 text-start">
            <label className="form-label" htmlFor="password">
Password
            </label>
            <div className="form-icon-container" data-password>
              <input className="form-control form-icon-input pe-6" id="password" type="password" placeholder="Password" data-password-input />
              <span className="fas fa-key text-body fs-9 form-icon">              </span>
              <button className="btn px-3 py-0 h-100 position-absolute top-0 end-0 fs-7 text-body-tertiary" data-password-toggle>
                <span className="uil uil-eye show">                </span>
                <span className="uil uil-eye-slash hide">                </span>
              </button>
            </div>
          </div>
          <div className="row flex-between-center mb-7">
            <div className="col-auto">
              <div className="form-check mb-0">
                <input className="form-check-input" id="basic-checkbox" type="checkbox" defaultChecked />
                <label className="form-check-label mb-0" htmlFor="basic-checkbox">
Remember me
                </label>
              </div>
            </div>
            <div className="col-auto">
              <PhoenixLink href="/pages/authentication/simple/forgot-password" className="fs-9 fw-semibold">
Forgot Password?
              </PhoenixLink>
            </div>
          </div>
          <button className="btn btn-primary w-100 mb-3">
Sign In
          </button>
          <div className="text-center">
            <PhoenixLink href="/pages/authentication/simple/sign-up" className="fs-9 fw-bold">
Create an account
            </PhoenixLink>
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
