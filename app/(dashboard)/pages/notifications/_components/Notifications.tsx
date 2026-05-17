'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Notifications() {
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
Notifications
        </li>
      </ol>
    </nav>

    <h2 className="mb-5">
Notifications
    </h2>

    <h5 className="text-body-emphasis mb-3">
Today
    </h5>

    <div className="mx-n4 mx-lg-n6 mb-5 border-bottom">
      <div className="d-flex align-items-center justify-content-between py-3 px-lg-6 px-4 notification-card border-top read">
        <div className="d-flex">
          <div className="avatar avatar-xl me-3">
            <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle" />
          </div>
          <div className="me-3 flex-1 mt-2">
            <h4 className="fs-9 text-body-emphasis">
Jessie Samson
            </h4>
            <p className="fs-9 text-body-highlight">
              <span className="me-1">
💬
              </span>
Mentioned you in a comment
              <span className="fw-bold">
 "Well done! Proud of you ❤️ " 
              </span>
              <span className="ms-2 text-body-tertiary text-opacity-85 fw-bold fs-10">
10m
              </span>
            </p>
            <p className="text-body-secondary fs-9 mb-0">
              <span className="me-1 fas fa-clock">              </span>
              <span className="fw-bold">
10:41 AM 
              </span>
August 7,2021
            </p>
          </div>
        </div>
        <div className="dropdown">
          <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
            <span className="fas fa-ellipsis-h fs-10 text-body">            </span>
          </button>
          <div className="dropdown-menu dropdown-menu-end py-2">
            <a href="#!" className="dropdown-item">
Mark as unread
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between py-3 px-lg-6 px-4 notification-card border-top unread">
        <div className="d-flex">
          <div className="avatar avatar-xl me-3">
            <div className="avatar-name rounded-circle">
              <span>
J
              </span>
            </div>
          </div>
          <div className="me-3 flex-1 mt-2">
            <h4 className="fs-9 text-body-emphasis">
Jane Foster
            </h4>
            <p className="fs-9 text-body-highlight">
              <span className="me-1">
📅
              </span>
Created an event
              <span className="fw-bold">
 Rome holidays
              </span>
              <span className="ms-2 text-body-tertiary text-opacity-85 fw-bold fs-10">
20m
              </span>
            </p>
            <p className="text-body-secondary fs-9 mb-0">
              <span className="me-1 fas fa-clock">              </span>
              <span className="fw-bold">
10:20 AM 
              </span>
August 7,2021
            </p>
          </div>
        </div>
        <div className="dropdown">
          <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
            <span className="fas fa-ellipsis-h fs-10 text-body">            </span>
          </button>
          <div className="dropdown-menu dropdown-menu-end py-2">
            <a href="#!" className="dropdown-item">
Mark as unread
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between py-3 px-lg-6 px-4 notification-card border-top unread">
        <div className="d-flex">
          <div className="avatar avatar-xl me-3">
            <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
          </div>
          <div className="me-3 flex-1 mt-2">
            <h4 className="fs-9 text-body-emphasis">
Jessie Samson
            </h4>
            <p className="fs-9 text-body-highlight">
              <span className="me-1">
👍
              </span>
Liked your comment
              <span className="fw-bold">
 "Amazing Works️"
              </span>
              <span className="ms-2 text-body-tertiary text-opacity-85 fw-bold fs-10">
1h
              </span>
            </p>
            <p className="text-body-secondary fs-9 mb-0">
              <span className="me-1 fas fa-clock">              </span>
              <span className="fw-bold">
9:30 AM 
              </span>
August 7,2021
            </p>
          </div>
        </div>
        <div className="dropdown">
          <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
            <span className="fas fa-ellipsis-h fs-10 text-body">            </span>
          </button>
          <div className="dropdown-menu dropdown-menu-end py-2">
            <a href="#!" className="dropdown-item">
Mark as unread
            </a>
          </div>
        </div>
      </div>
    </div>

    <h5 className="text-semibold text-body-emphasis mb-3">
Yesterday
    </h5>

    <div className="mx-n4 mx-lg-n6 mb-9 border-bottom">
      <div className="d-flex align-items-center justify-content-between py-3 px-lg-6 px-4 notification-card border-top unread">
        <div className="d-flex">
          <div className="avatar avatar-xl me-3">
            <PhoenixImage src="/assets/img/team/57.webp" alt="" className="rounded-circle" />
          </div>
          <div className="me-3 flex-1 mt-2">
            <h4 className="fs-9 text-body-emphasis">
Kiera Anderson
            </h4>
            <p className="fs-9 text-body-highlight">
              <span className="me-1">
💬
              </span>
Mentioned you in a comment
              <span className="fw-bold">
 "This is too good to be true!"
              </span>
              <span className="ms-2 text-body-tertiary text-opacity-85 fw-bold fs-10">              </span>
            </p>
            <p className="text-body-secondary fs-9 mb-0">
              <span className="me-1 fas fa-clock">              </span>
              <span className="fw-bold">
9:11 AM 
              </span>
August 7,2021
            </p>
          </div>
        </div>
        <div className="dropdown">
          <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
            <span className="fas fa-ellipsis-h fs-10 text-body">            </span>
          </button>
          <div className="dropdown-menu dropdown-menu-end py-2">
            <a href="#!" className="dropdown-item">
Mark as unread
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between py-3 px-lg-6 px-4 notification-card border-top unread">
        <div className="d-flex">
          <div className="avatar avatar-xl me-3">
            <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle" />
          </div>
          <div className="me-3 flex-1 mt-2">
            <h4 className="fs-9 text-body-emphasis">
Herman Carter
            </h4>
            <p className="fs-9 text-body-highlight">
              <span className="me-1">
👤
              </span>
Tagged you in a
              <span className="fw-bold">
 post
              </span>
              <span className="ms-2 text-body-tertiary text-opacity-85 fw-bold fs-10">              </span>
            </p>
            <p className="text-body-secondary fs-9 mb-0">
              <span className="me-1 fas fa-clock">              </span>
              <span className="fw-bold">
10:58 PM 
              </span>
August 7,2021
            </p>
          </div>
        </div>
        <div className="dropdown">
          <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
            <span className="fas fa-ellipsis-h fs-10 text-body">            </span>
          </button>
          <div className="dropdown-menu dropdown-menu-end py-2">
            <a href="#!" className="dropdown-item">
Mark as unread
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between py-3 px-lg-6 px-4 notification-card border-top read">
        <div className="d-flex">
          <div className="avatar avatar-xl me-3">
            <PhoenixImage src="/assets/img/team/58.webp" alt="" className="rounded-circle" />
          </div>
          <div className="me-3 flex-1 mt-2">
            <h4 className="fs-9 text-body-emphasis">
Benjamin Button
            </h4>
            <p className="fs-9 text-body-highlight">
              <span className="me-1">
👍
              </span>
Liked your comment
              <span className="fw-bold">
 "Welcome to the team️"
              </span>
              <span className="ms-2 text-body-tertiary text-opacity-85 fw-bold fs-10">              </span>
            </p>
            <p className="text-body-secondary fs-9 mb-0">
              <span className="me-1 fas fa-clock">              </span>
              <span className="fw-bold">
10:18 AM 
              </span>
August 7,2021
            </p>
          </div>
        </div>
        <div className="dropdown">
          <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
            <span className="fas fa-ellipsis-h fs-10 text-body">            </span>
          </button>
          <div className="dropdown-menu dropdown-menu-end py-2">
            <a href="#!" className="dropdown-item">
Mark as unread
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between py-3 px-lg-6 px-4 notification-card border-top read">
        <div className="d-flex">
          <div className="avatar avatar-xl me-3">
            <PhoenixImage src="/assets/img/team/60.webp" alt="" className="rounded-circle" />
          </div>
          <div className="me-3 flex-1 mt-2">
            <h4 className="fs-9 text-body-emphasis">
Aron Paul
            </h4>
            <p className="fs-9 text-body-highlight">
              <span className="me-1">
📷
              </span>
Tagged you in a
              <span className="fw-bold">
 photo
              </span>
              <span className="ms-2 text-body-tertiary text-opacity-85 fw-bold fs-10">              </span>
            </p>
            <p className="text-body-secondary fs-9 mb-0">
              <span className="me-1 fas fa-clock">              </span>
              <span className="fw-bold">
9:53 AM 
              </span>
August 7,2021
            </p>
          </div>
        </div>
        <div className="dropdown">
          <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
            <span className="fas fa-ellipsis-h fs-10 text-body">            </span>
          </button>
          <div className="dropdown-menu dropdown-menu-end py-2">
            <a href="#!" className="dropdown-item">
Mark as unread
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between py-3 px-lg-6 px-4 notification-card border-top read">
        <div className="d-flex">
          <div className="avatar avatar-xl me-3">
            <PhoenixImage src="/assets/img/team/34.webp" alt="" className="rounded-circle" />
          </div>
          <div className="me-3 flex-1 mt-2">
            <h4 className="fs-9 text-body-emphasis">
Rick Sanchez
            </h4>
            <p className="fs-9 text-body-highlight">
              <span className="me-1">
💬
              </span>
Mentioned you in a comment
              <span className="fw-bold">
 "You need to see these amazing photos️"
              </span>
              <span className="ms-2 text-body-tertiary text-opacity-85 fw-bold fs-10">              </span>
            </p>
            <p className="text-body-secondary fs-9 mb-0">
              <span className="me-1 fas fa-clock">              </span>
              <span className="fw-bold">
9:45 AM 
              </span>
August 7,2021
            </p>
          </div>
        </div>
        <div className="dropdown">
          <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
            <span className="fas fa-ellipsis-h fs-10 text-body">            </span>
          </button>
          <div className="dropdown-menu dropdown-menu-end py-2">
            <a href="#!" className="dropdown-item">
Mark as unread
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
