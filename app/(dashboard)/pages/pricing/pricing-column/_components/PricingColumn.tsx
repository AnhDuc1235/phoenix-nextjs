'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function PricingColumn() {
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
Pricing
        </li>
      </ol>
    </nav>

    <h2 className="mb-7">
Pricing
    </h2>

    <div className="row g-7 g-lg-11 mb-7">
      <div className="col-12 col-sm-6 col-xxl-3">
        <div className="d-flex flex-column justify-content-between h-100">
          <div>
            <PhoenixImage src="/assets/img/spot-illustrations/13.png" alt="" className="mb-4 d-dark-none" width={120} height={96} />
            <PhoenixImage src="/assets/img/spot-illustrations/dark_13.png" alt="" className="mb-4 d-light-none" width={120} height={96} />
            <div className="mb-sm-5">
              <h3 className="mb-2">
Learner
              </h3>
              <p className="text-body-secondary mb-0 pe-3">
For individuals who are interested in giving it a shot first.
              </p>
            </div>
          </div>
          <div>
            <div className="d-flex align-items-center mb-4">
              <h3 className="display-3 fw-bolder">
Free
              </h3>
            </div>
            <button className="btn btn-lg w-100 mb-6 btn-outline-primary">
Buy
            </button>
            <h5 className="mb-4">
What’s included
            </h5>
            <ul className="fa-ul" style={{"--fa-li-margin":"1.5em"} as CSSProperties}>
              <li className="text-body-secondary mb-2">
                <span className="fa-li">
                  <span className="fas fa-check text-primary">                  </span>
                </span>
Timeline
              </li>
              <li className="mb-2 text-body-quaternary">
                <span className="fa-li me-2 stack-icon-item">
                  <span className="fa-stack fs-11">
                    <span className="fas fa-circle fa-stack-2x text-body-quaternary text-opacity-50">                    </span>
                    <span className="fas fa-stack-1x fa-inverse fa-times text-body-tertiary">                    </span>
                  </span>
                </span>
Advanced Search
              </li>
              <li className="mb-2 text-body-quaternary">
                <span className="fa-li me-2 stack-icon-item">
                  <span className="fa-stack fs-11">
                    <span className="fas fa-circle fa-stack-2x text-body-quaternary text-opacity-50">                    </span>
                    <span className="fas fa-stack-1x fa-inverse fa-times text-body-tertiary">                    </span>
                  </span>
                </span>
Custom fields 
              </li>
              <li className="mb-2 text-body-quaternary">
                <span className="fa-li me-2 stack-icon-item">
                  <span className="fa-stack fs-11">
                    <span className="fas fa-circle fa-stack-2x text-body-quaternary text-opacity-50">                    </span>
                    <span className="fas fa-stack-1x fa-inverse fa-times text-body-tertiary">                    </span>
                  </span>
                </span>
Task dependencies
              </li>
              <li className="mb-2 text-body-quaternary">
                <span className="fa-li me-2 stack-icon-item">
                  <span className="fa-stack fs-11">
                    <span className="fas fa-circle fa-stack-2x text-body-quaternary text-opacity-50">                    </span>
                    <span className="fas fa-stack-1x fa-inverse fa-times text-body-tertiary">                    </span>
                  </span>
                </span>
{"Private teams & projects"}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-xxl-3">
        <div className="d-flex flex-column justify-content-between h-100">
          <div>
            <PhoenixImage src="/assets/img/spot-illustrations/14.png" alt="" className="mb-4 d-dark-none" width={120} height={96} />
            <PhoenixImage src="/assets/img/spot-illustrations/dark_14.png" alt="" className="mb-4 d-light-none" width={120} height={96} />
            <div className="mb-sm-5">
              <h3 className="mb-2">
Starter
              </h3>
              <p className="text-body-secondary mb-0 pe-3">
For teams that need to create project plans with confidence.
              </p>
            </div>
          </div>
          <div>
            <div className="d-flex align-items-center mb-4">
              <h3 className="display-3 fw-bolder">
$14.99
              </h3>
              <h5 className="fs-8 fw-normal ms-1">
/ month
              </h5>
            </div>
            <button className="btn btn-lg w-100 mb-6 btn-outline-primary">
Buy
            </button>
            <h5 className="mb-4">
What’s included
            </h5>
            <ul className="fa-ul" style={{"--fa-li-margin":"1.5em"} as CSSProperties}>
              <li className="text-body-secondary mb-2">
                <span className="fa-li">
                  <span className="fas fa-check text-primary">                  </span>
                </span>
Timeline
              </li>
              <li className="mb-2 text-body">
                <span className="fa-li me-2 stack-icon-item">
                  <span className="fa-stack fs-11">
                    <span className="fas fa-circle fa-stack-2x text-success">                    </span>
                    <span className="fas fa-stack-1x fa-inverse fa-check text-white dark__text-dark">                    </span>
                  </span>
                </span>
Advanced Search
              </li>
              <li className="mb-2 text-body-quaternary">
                <span className="fa-li me-2 stack-icon-item">
                  <span className="fa-stack fs-11">
                    <span className="fas fa-circle fa-stack-2x text-body-quaternary text-opacity-50">                    </span>
                    <span className="fas fa-stack-1x fa-inverse fa-times text-body-tertiary">                    </span>
                  </span>
                </span>
Custom fields 
              </li>
              <li className="mb-2 text-body-quaternary">
                <span className="fa-li me-2 stack-icon-item">
                  <span className="fa-stack fs-11">
                    <span className="fas fa-circle fa-stack-2x text-body-quaternary text-opacity-50">                    </span>
                    <span className="fas fa-stack-1x fa-inverse fa-times text-body-tertiary">                    </span>
                  </span>
                </span>
Task dependencies
              </li>
              <li className="mb-2 text-body-quaternary">
                <span className="fa-li me-2 stack-icon-item">
                  <span className="fa-stack fs-11">
                    <span className="fas fa-circle fa-stack-2x text-body-quaternary text-opacity-50">                    </span>
                    <span className="fas fa-stack-1x fa-inverse fa-times text-body-tertiary">                    </span>
                  </span>
                </span>
{"Private teams & projects"}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-xxl-3">
        <div className="d-flex flex-column justify-content-between h-100">
          <div>
            <PhoenixImage src="/assets/img/spot-illustrations/15.png" alt="" className="mb-4 d-dark-none" width={120} height={96} />
            <PhoenixImage src="/assets/img/spot-illustrations/dark_15.png" alt="" className="mb-4 d-light-none" width={120} height={96} />
            <div className="mb-sm-5">
              <h3 className="mb-2">
Team
              </h3>
              <p className="text-body-secondary mb-0 pe-3">
For teams that need to manage work across initiatives.
              </p>
            </div>
          </div>
          <div>
            <div className="d-flex align-items-center mb-4">
              <h3 className="display-3 fw-bolder">
$49.99
              </h3>
              <h5 className="fs-8 fw-normal ms-1">
/ month
              </h5>
            </div>
            <button className="btn btn-lg w-100 mb-6 btn-primary">
Buy
            </button>
            <h5 className="mb-4">
What’s included
            </h5>
            <ul className="fa-ul" style={{"--fa-li-margin":"1.5em"} as CSSProperties}>
              <li className="text-body-secondary mb-2">
                <span className="fa-li">
                  <span className="fas fa-check text-primary">                  </span>
                </span>
Timeline
              </li>
              <li className="mb-2 text-body">
                <span className="fa-li me-2 stack-icon-item">
                  <span className="fa-stack fs-11">
                    <span className="fas fa-circle fa-stack-2x text-success">                    </span>
                    <span className="fas fa-stack-1x fa-inverse fa-check text-white dark__text-dark">                    </span>
                  </span>
                </span>
Advanced Search
              </li>
              <li className="mb-2 text-body">
                <span className="fa-li me-2 stack-icon-item">
                  <span className="fa-stack fs-11">
                    <span className="fas fa-circle fa-stack-2x text-success">                    </span>
                    <span className="fas fa-stack-1x fa-inverse fa-check text-white dark__text-dark">                    </span>
                  </span>
                </span>
Custom fields
                <span className="badge badge-phoenix badge-phoenix-primary ms-2 fs-10">
New
                </span>
              </li>
              <li className="mb-2 text-body-quaternary">
                <span className="fa-li me-2 stack-icon-item">
                  <span className="fa-stack fs-11">
                    <span className="fas fa-circle fa-stack-2x text-body-quaternary text-opacity-50">                    </span>
                    <span className="fas fa-stack-1x fa-inverse fa-times text-body-tertiary">                    </span>
                  </span>
                </span>
Task dependencies
              </li>
              <li className="mb-2 text-body-quaternary">
                <span className="fa-li me-2 stack-icon-item">
                  <span className="fa-stack fs-11">
                    <span className="fas fa-circle fa-stack-2x text-body-quaternary text-opacity-50">                    </span>
                    <span className="fas fa-stack-1x fa-inverse fa-times text-body-tertiary">                    </span>
                  </span>
                </span>
{"Private teams & projects"}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-xxl-3">
        <div className="d-flex flex-column justify-content-between h-100">
          <div>
            <PhoenixImage src="/assets/img/spot-illustrations/16.png" alt="" className="mb-4 d-dark-none" width={120} height={96} />
            <PhoenixImage src="/assets/img/spot-illustrations/dark_16.png" alt="" className="mb-4 d-light-none" width={120} height={96} />
            <div className="mb-sm-5">
              <h3 className="mb-2">
Industry
              </h3>
              <p className="text-body-secondary mb-0 pe-3">
For organizations that need additional security and support.
              </p>
            </div>
          </div>
          <div>
            <div className="d-flex align-items-center mb-4">
              <h3 className="display-3 fw-bolder">
$149.99
              </h3>
              <h5 className="fs-8 fw-normal ms-1">
/ month
              </h5>
            </div>
            <button className="btn btn-lg w-100 mb-6 btn-outline-primary">
Buy
            </button>
            <h5 className="mb-4">
What’s included
            </h5>
            <ul className="fa-ul" style={{"--fa-li-margin":"1.5em"} as CSSProperties}>
              <li className="text-body-secondary mb-2">
                <span className="fa-li">
                  <span className="fas fa-check text-primary">                  </span>
                </span>
Timeline
              </li>
              <li className="mb-2 text-body">
                <span className="fa-li me-2 stack-icon-item">
                  <span className="fa-stack fs-11">
                    <span className="fas fa-circle fa-stack-2x text-success">                    </span>
                    <span className="fas fa-stack-1x fa-inverse fa-check text-white dark__text-dark">                    </span>
                  </span>
                </span>
Advanced Search
              </li>
              <li className="mb-2 text-body">
                <span className="fa-li me-2 stack-icon-item">
                  <span className="fa-stack fs-11">
                    <span className="fas fa-circle fa-stack-2x text-success">                    </span>
                    <span className="fas fa-stack-1x fa-inverse fa-check text-white dark__text-dark">                    </span>
                  </span>
                </span>
Custom fields
                <span className="badge badge-phoenix badge-phoenix-primary ms-2 fs-10">
New
                </span>
              </li>
              <li className="mb-2 text-body">
                <span className="fa-li me-2 stack-icon-item">
                  <span className="fa-stack fs-11">
                    <span className="fas fa-circle fa-stack-2x text-success">                    </span>
                    <span className="fas fa-stack-1x fa-inverse fa-check text-white dark__text-dark">                    </span>
                  </span>
                </span>
Task dependencies
              </li>
              <li className="mb-2 text-body">
                <span className="fa-li me-2 stack-icon-item">
                  <span className="fa-stack fs-11">
                    <span className="fas fa-circle fa-stack-2x text-success">                    </span>
                    <span className="fas fa-stack-1x fa-inverse fa-check text-white dark__text-dark">                    </span>
                  </span>
                </span>
{"Private teams & projects"}
              </li>
            </ul>
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
