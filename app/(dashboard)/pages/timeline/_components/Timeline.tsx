'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Timeline() {
  return (
    <div suppressHydrationWarning>

    <nav className="mb-3 breadcrumb-sticky-top" aria-label="breadcrumb">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <a href="#!">
Pages
          </a>
        </li>
        <li className="breadcrumb-item active">
Timeline
        </li>
      </ol>
    </nav>

    <h2 className="text-bold mb-5 page-title-sticky-top">
Timeline
    </h2>

    <div className="row gx-xl-8 gx-xxl-11">
      <div className="col-xl-5 p-xxl-7">
        <div className="ms-xxl-3 d-none d-xl-block position-sticky" style={{"top":"30%"} as CSSProperties}>
          <PhoenixImage src="/assets/img/spot-illustrations/timeline.png" alt="" className="d-dark-none img-fluid" />
          <PhoenixImage src="/assets/img/spot-illustrations/timeline-dark.png" alt="" className="d-light-none img-fluid" />
        </div>
      </div>
      <div className="col-xl-7 scrollbar">
        <div>
          <h4 className="py-3 border-y mb-5 ms-8">
Today
          </h4>
          <div className="timeline-basic mb-9">
            <div className="timeline-item">
              <div className="row g-3">
                <div className="col-auto">
                  <div className="timeline-item-bar position-relative">
                    <div className="icon-item icon-item-md rounded-7 border border-translucent">
                      <span className="fa-solid fa-clipboard text-success fs-9">                      </span>
                    </div>
                    <span className="timeline-bar border-end border-dashed">                    </span>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex mb-2">
                      <h6 className="lh-sm mb-0 me-2 text-body-secondary timeline-item-title">
Assigned to serve as the 
                        <br className="d-sm-none" />
 project's director
                      </h6>
                    </div>
                    <p className="text-body-quaternary fs-9 mb-0 text-nowrap timeline-time">
                      <span className="fa-regular fa-clock me-1">                      </span>
4:33pm
                    </p>
                  </div>
                  <h6 className="fs-10 fw-normal mb-3">
by 
                    <a href="#!" className="fw-semibold">
John N. Ward
                    </a>
                  </h6>
                  <p className="fs-9 text-body-secondary w-sm-60 mb-5">
Utilizing best practices to better leverage our assets, we must engage in black sky leadership thinking, not the usual band-aid solution.
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="row g-3">
                <div className="col-auto">
                  <div className="timeline-item-bar position-relative">
                    <div className="icon-item icon-item-md rounded-7 border border-translucent">
                      <span className="fa-solid fa-envelope text-danger fs-9">                      </span>
                    </div>
                    <span className="timeline-bar border-end border-dashed">                    </span>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex mb-2">
                      <h6 className="lh-sm mb-0 me-2 text-body-secondary timeline-item-title">
Quary about purchased 
                        <br className="d-sm-none" />
 soccer socks
                      </h6>
                    </div>
                    <p className="text-body-quaternary fs-9 mb-0 text-nowrap timeline-time">
                      <span className="fa-regular fa-clock me-1">                      </span>
6:30pm
                    </p>
                  </div>
                  <h6 className="fs-10 fw-normal mb-3">
by 
                    <a href="#!" className="fw-semibold">
Edward Hopper
                    </a>
                  </h6>
                  <p className="fs-9 text-body-secondary w-sm-60 mb-5">
I’ve come across your posts and found some favorable deals on your page. I’ve added a load of products to the cart and I don’t know the payment options you avail. Also, can you enlighten me about any discount.
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="row g-3">
                <div className="col-auto">
                  <div className="timeline-item-bar position-relative">
                    <div className="icon-item icon-item-md rounded-7 border border-translucent">
                      <span className="fa-solid fa-video text-info fs-9">                      </span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex mb-2">
                      <h6 className="lh-sm mb-0 me-2 text-body-secondary timeline-item-title">
Onboarding Meeting
                      </h6>
                    </div>
                    <p className="text-body-quaternary fs-9 mb-0 text-nowrap timeline-time">
                      <span className="fa-regular fa-clock me-1">                      </span>
9:33pm
                    </p>
                  </div>
                  <h6 className="fs-10 fw-normal false">
by 
                    <a href="#!" className="fw-semibold">
John N. Ward
                    </a>
                  </h6>
                  <p className="fs-9 text-body-secondary w-sm-60 mb-0">                  </p>
                </div>
              </div>
            </div>
          </div>
          <h4 className="py-3 border-y mb-5 ms-8">
15 October, 2022
          </h4>
          <div className="timeline-basic mb-9">
            <div className="timeline-item">
              <div className="row g-3">
                <div className="col-auto">
                  <div className="timeline-item-bar position-relative">
                    <div className="icon-item icon-item-md rounded-7 border border-translucent">
                      <span className="fa-solid fa-swatchbook text-primary fs-9">                      </span>
                    </div>
                    <span className="timeline-bar border-end border-dashed">                    </span>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex mb-2">
                      <h6 className="lh-sm mb-0 me-2 text-body-secondary timeline-item-title">
Designing the dungeon
                      </h6>
                    </div>
                    <p className="text-body-quaternary fs-9 mb-0 text-nowrap timeline-time">
                      <span className="fa-regular fa-clock me-1">                      </span>
1:30pm
                    </p>
                  </div>
                  <h6 className="fs-10 fw-normal mb-3">
by 
                    <a href="#!" className="fw-semibold">
John N. Ward
                    </a>
                  </h6>
                  <p className="fs-9 text-body-secondary w-sm-60 mb-5">
To get off the runway and paradigm shift, we should take brass tacks with above-the-board actionable analytics, ramp up with viral partnering, not the usual goat rodeo putting socks on an octopus. 
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="row g-3">
                <div className="col-auto">
                  <div className="timeline-item-bar position-relative">
                    <div className="icon-item icon-item-md rounded-7 border border-translucent">
                      <span className="fa-solid fa-skull-crossbones text-danger fs-9">                      </span>
                    </div>
                    <span className="timeline-bar border-end border-dashed">                    </span>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex mb-2">
                      <h6 className="lh-sm mb-0 me-2 text-body-secondary timeline-item-title">
How to take the headache 
                        <br className="d-sm-none" />
 out of Order
                      </h6>
                    </div>
                    <p className="text-body-quaternary fs-9 mb-0 text-nowrap timeline-time">
                      <span className="fa-regular fa-clock me-1">                      </span>
8:32pm
                    </p>
                  </div>
                  <h6 className="fs-10 fw-normal mb-3">
by 
                    <a href="#!" className="fw-semibold">
Edward Hopper
                    </a>
                  </h6>
                  <p className="fs-9 text-body-secondary w-sm-60 mb-5">
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="row g-3">
                <div className="col-auto">
                  <div className="timeline-item-bar position-relative">
                    <div className="icon-item icon-item-md rounded-7 border border-translucent">
                      <span className="fa-solid fa-stethoscope text-primary fs-9">                      </span>
                    </div>
                    <span className="timeline-bar border-end border-dashed">                    </span>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex mb-2">
                      <h6 className="lh-sm mb-0 me-2 text-body-secondary timeline-item-title">
Mandatory routine checkup
                      </h6>
                    </div>
                    <p className="text-body-quaternary fs-9 mb-0 text-nowrap timeline-time">
                      <span className="fa-regular fa-clock me-1">                      </span>
9:30pm
                    </p>
                  </div>
                  <h6 className="fs-10 fw-normal mb-3">
by 
                    <a href="#!" className="fw-semibold">
Eye before Thy Hospital
                    </a>
                  </h6>
                  <p className="fs-9 text-body-secondary w-sm-60 mb-5">
To get the bitter butter out and take the better butter into the bitter dough to make a bitter bread and broad donut, not the usual yellow butter, but the white butterless butter.
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="row g-3">
                <div className="col-auto">
                  <div className="timeline-item-bar position-relative">
                    <div className="icon-item icon-item-md rounded-7 border border-translucent">
                      <span className="fa-solid fa-utensils text-success fs-9">                      </span>
                    </div>
                    <span className="timeline-bar border-end border-dashed">                    </span>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex mb-2">
                      <h6 className="lh-sm mb-0 me-2 text-body-secondary timeline-item-title">
Making bad butter better
                      </h6>
                    </div>
                    <p className="text-body-quaternary fs-9 mb-0 text-nowrap timeline-time">
                      <span className="fa-regular fa-clock me-1">                      </span>
8:30pm
                    </p>
                  </div>
                  <h6 className="fs-10 fw-normal mb-3">
by 
                    <a href="#!" className="fw-semibold">
Edward Hopper
                    </a>
                  </h6>
                  <p className="fs-9 text-body-secondary w-sm-60 mb-5">
Check how long a fish might live out of water and if you can check the pulse to see if it's alive or not though it's okay to eat fish cause they don't have any feelings.
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="row g-3">
                <div className="col-auto">
                  <div className="timeline-item-bar position-relative">
                    <div className="icon-item icon-item-md rounded-7 border border-translucent">
                      <span className="fa-solid fa-rocket text-info fs-9">                      </span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex mb-2">
                      <h6 className="lh-sm mb-0 me-2 text-body-secondary timeline-item-title">
Launching Phoenix
                      </h6>
                    </div>
                    <p className="text-body-quaternary fs-9 mb-0 text-nowrap timeline-time">
                      <span className="fa-regular fa-clock me-1">                      </span>
10:33pm
                    </p>
                  </div>
                  <h6 className="fs-10 fw-normal false">
by 
                    <a href="#!" className="fw-semibold">
John N. Ward
                    </a>
                  </h6>
                  <p className="fs-9 text-body-secondary w-sm-60 mb-0">                  </p>
                </div>
              </div>
            </div>
          </div>
          <h4 className="py-3 border-y mb-5 ms-8">
20 October, 2022
          </h4>
          <div className="timeline-basic mb-9">
            <div className="timeline-item">
              <div className="row g-3">
                <div className="col-auto">
                  <div className="timeline-item-bar position-relative">
                    <div className="icon-item icon-item-md rounded-7 border border-translucent">
                      <span className="fa-solid fa-screwdriver-wrench text-warning fs-9">                      </span>
                    </div>
                    <span className="timeline-bar border-end border-dashed">                    </span>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex mb-2">
                      <h6 className="lh-sm mb-0 me-2 text-body-secondary timeline-item-title">
To take the ants out
                      </h6>
                    </div>
                    <p className="text-body-quaternary fs-9 mb-0 text-nowrap timeline-time">
                      <span className="fa-regular fa-clock me-1">                      </span>
8:32pm
                    </p>
                  </div>
                  <h6 className="fs-10 fw-normal mb-3">
by 
                    <a href="#!" className="fw-semibold">
Edward Hopper
                    </a>
                  </h6>
                  <p className="fs-9 text-body-secondary w-sm-60 mb-5">
Many ants are crawling into my PC and now they live in there to get highly skilled in web development and programming language that will make them earn better than the humans so that they’ll be able to buy off all the sugar out of the market.
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="row g-3">
                <div className="col-auto">
                  <div className="timeline-item-bar position-relative">
                    <div className="icon-item icon-item-md rounded-7 border border-translucent">
                      <span className="fa-solid fa-paperclip text-info fs-9">                      </span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex mb-2">
                      <h6 className="lh-sm mb-0 me-2 text-body-secondary timeline-item-title">
Added file
                      </h6>
                      <h6 className="mb-0 fs-9">
                        <span className="fa-solid fa-file-pdf me-1 text-body-tertiary">                        </span>
                        <a href="#!">
Readme.pdf
                        </a>
                      </h6>
                    </div>
                    <p className="text-body-quaternary fs-9 mb-0 text-nowrap timeline-time">
                      <span className="fa-regular fa-clock me-1">                      </span>
10:33pm
                    </p>
                  </div>
                  <h6 className="fs-10 fw-normal false">
by 
                    <a href="#!" className="fw-semibold">
John N. Ward
                    </a>
                  </h6>
                  <p className="fs-9 text-body-secondary w-sm-60 mb-0">                  </p>
                </div>
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
