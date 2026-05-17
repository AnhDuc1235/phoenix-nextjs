'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function ComingSoon() {
  return (
    <div suppressHydrationWarning>

    <div className="row flex-center content-min-h pb-9 g-0">
      <div className="col-xxl-10">
        <div className="row align-items-xl-center g-2">
          <div className="col-xl-6 order-xl-1">
            <div className="d-flex flex-center">
              <div className="w-xl-100 animation">
                <div className="lottie d-dark-none" data-options={"{\"path\":\"assets/img/animated-icons/coming-soon-light.json\"}"}>                </div>
                <div className="lottie d-light-none" data-options={"{\"path\":\"assets/img/animated-icons/coming-soon-dark.json\"}"}>                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="d-flex justify-content-center mt-xl-15">
              <div className="text-container text-center text-xl-start">
                <PhoenixImage src="/assets/img/spot-illustrations/42.png" alt="" className="d-dark-none mb-5 mb-xl-10 w-75 w-lg-50 w-xl-75 w-xxl-100" />
                <PhoenixImage src="/assets/img/spot-illustrations/dark_42.png" alt="" className="d-light-none mb-5 mb-xl-10 w-75 w-lg-50 w-xl-75 w-xxl-100" />
                <h2 className="text-gray-800 fs-xl-6 mb-3">
This page is on the way !
                </h2>
                <p className="mb-6">
Our developers are on the last stage of developing this page. We're just ironing out the kinks. You'll receive it on the next update. Lets go!
                </p>
                <PhoenixLink href="/" className="btn btn-lg btn-primary">
                  <span className="fa-solid fa-chevron-left me-2">                  </span>Go to Homepage
                </PhoenixLink>
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
