'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Profile() {
  return (
    <div suppressHydrationWarning>

    <div className="pb-9">
      <div className="card mb-5">
        <div className="card-header d-flex justify-content-center align-items-end position-relative mb-7 mb-xxl-0" style={{"minHeight":"214px"} as CSSProperties}>
          <div className="hover-actions-trigger position-static">
            <div className="bg-holder rounded-top" style={{"backgroundImage":"url(../../assets/img/generic/cover-photo.png)"} as CSSProperties}>            </div>
            <input className="d-none" id="upload-cover-image" type="file" />
            <label className="cover-image-file-input" htmlFor="upload-cover-image">            </label>
            <div className="hover-actions end-0 bottom-0 pe-1 pb-2 text-white">
              <span className="fa-solid fa-camera me-2 overlay-icon">              </span>
            </div>
          </div>
          <input className="d-none" id="upload-porfile-picture" type="file" />
          <div className="hoverbox feed-profile" style={{"width":"150px","height":"150px"} as CSSProperties}>
            <div className="hoverbox-content rounded-circle d-flex flex-center z-1" style={{"--phoenix-bg-opacity":".56"} as CSSProperties}>
              <span className="fa-solid fa-camera fs-3 text-secondary-light">              </span>
            </div>
            <div className="position-relative bg-body-quaternary rounded-circle cursor-pointer d-flex flex-center mb-xxl-7">
              <div className="avatar avatar-5xl">
                <PhoenixImage src="/assets/img/team/9.webp" alt="" className="rounded-circle rounded-circle img-thumbnail shadow-sm border-0" />
              </div>
              <label className="w-100 h-100 position-absolute z-1" htmlFor="upload-porfile-picture">              </label>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row justify-content-xl-between">
            <div className="col-auto">
              <div className="d-flex flex-wrap mb-3 align-items-center">
                <h2 className="me-2">
Erza Bridgest
                </h2>
                <span className="fw-semibold fs-7 text-body-emphasis">
u/hansolo
                </span>
              </div>
              <div className="mb-5">
                <div className="d-md-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <span className="fa-solid fa-user-group fs-9 text-body-tertiary me-2 me-lg-1 me-xl-2">                    </span>
                    <a href="#!" className="text-body-emphasis">
                      <span className="fs-7 fw-bold text-body-tertiary text-opacity-85 text-body-emphasis-hover">
1297 
                        <span className="fw-semibold ms-1 me-4">
Followers
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="fa-solid fa-user-check fs-9 text-body-tertiary me-2 me-lg-1 me-xl-2">                    </span>
                    <a href="#!" className="text-body-emphasis">
                      <span className="fs-7 fw-bold text-body-tertiary text-opacity-85 text-body-emphasis-hover">
3971 
                        <span className="fw-semibold ms-1 me-4">
Following
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="fa-solid fa-location-dot fs-9 text-body-tertiary me-2 me-lg-1 me-xl-2">                    </span>
                    <a href="#!" className="text-body-emphasis">
                      <span className="fs-7 fw-semibold text-body-tertiary text-opacity-85 text-body-emphasis-hover">
Vancouver, Lothal
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <p className="fs-6 text-body-secondary">
“Whenever you find yourself on the side of the majority, it is time to pause and reflect.”
              </p>
            </div>
            <div className="col-auto">
              <div className="row g-2">
                <div className="col-auto order-xxl-2">
                  <button className="btn btn-primary lh-1">
                    <span className="fa-solid fa-user-plus me-2">                    </span>
Follow Request
                  </button>
                </div>
                <div className="col-auto order-xxl-1">
                  <button className="btn btn-phoenix-primary lh-1">
                    <span className="fa-solid fa-message me-2">                    </span>
Send Message
                  </button>
                </div>
                <div className="col-auto">
                  <div className="position-static">
                    <button className="btn btn-phoenix-secondary lh-1" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                      <span className="fa-solid fa-chevron-down me-2">                      </span>
 More
                    </button>
                    <div className="dropdown-menu dropdown-menu-end py-2">
                      <a href="#!" className="dropdown-item d-xl-none">
                        <span className="fa-solid fa-user-group text-body-secondary me-2">                        </span>                        <span>
Followers
                        </span>
                      </a>
                      <a href="#!" className="dropdown-item d-xl-none">
                        <span className="fa-solid fa-users text-body-secondary me-2">                        </span>                        <span>
Communities
                        </span>
                      </a>
                      <a href="#!" className="dropdown-item d-xl-none">
                        <span className="fa-solid fa-photo-film text-body-secondary me-2">                        </span>                        <span>
Media Files
                        </span>
                      </a>
                      <a href="#!" className="dropdown-item d-xl-none">
                        <span className="fa-solid fa-calendar-days fs-8 text-body-secondary me-2">                        </span>                        <span>
 Events
                        </span>
                      </a>
                      <a href="#!" className="dropdown-item d-xl-none">
                        <span className="fa-solid fa-dice text-body-secondary me-2">                        </span>                        <span>
Games
                        </span>
                      </a>
                      <a href="#!" className="dropdown-item d-xl-none">
                        <span className="fa-solid fa-user-gear text-body-secondary me-2">                        </span>                        <span>
Settings
                        </span>
                      </a>
                      <a href="#!" className="dropdown-item">
                        <span className="fa-solid fa-bell-slash text-body-secondary me-2">                        </span>                        <span>
Mute Conversation
                        </span>
                      </a>
                      <a href="#!" className="dropdown-item">
                        <span className="fa-solid fa-gear text-body-secondary me-2">                        </span>                        <span>
Manage Settings
                        </span>
                      </a>
                      <a href="#!" className="dropdown-item">
                        <span className="fa-solid fa-hand-holding-heart text-body-secondary me-2">                        </span>                        <span>
Get help
                        </span>
                      </a>
                      <a href="#!" className="dropdown-item">
                        <span className="fa-solid fa-flag text-body-secondary me-2">                        </span>                        <span>
Report Account
                        </span>
                      </a>
                      <a href="#!" className="dropdown-item">
                        <span className="fa-solid fa-ban text-body-secondary me-2">                        </span>                        <span>
Block Account
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row gy-3 gx-5 gx-xxl-6">
        <div className="col-xl-4 d-none d-xl-block">
          <div className="mb-8">
            <div className="row g-0">
              <div className="col-6 border-1 border-bottom border-translucent border-end py-2">
                <a href="#!" className="btn btn-link ps-2 fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block">
                  <span className="fa-solid fa-user-group me-2 mb-2 mb-xxl-0">                  </span>Followers
                </a>
              </div>
              <div className="col-6 border-1 border-bottom border-translucent py-2">
                <a href="#!" className="btn btn-link fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block">
                  <span className="fa-solid fa-users me-2 mb-2 mb-xxl-0">                  </span>Communities
                </a>
              </div>
              <div className="col-6 border-1 border-bottom border-translucent border-end py-2">
                <a href="#!" className="btn btn-link ps-2 fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block">
                  <span className="fa-solid fa-photo-film me-2 mb-2 mb-xxl-0">                  </span>Media Files
                </a>
              </div>
              <div className="col-6 border-1 border-bottom border-translucent py-2">
                <a href="#!" className="btn btn-link fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block">
                  <span className="fa-solid fa-calendar-days me-2 mb-2 mb-xxl-0">                  </span>Events
                </a>
              </div>
              <div className="col-6 border-1 border-end border-translucent py-2">
                <a href="#!" className="btn btn-link ps-2 fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block">
                  <span className="fa-solid fa-dice me-2 mb-2 mb-xxl-0">                  </span>Games
                </a>
              </div>
              <div className="col-6 border-1 py-2">
                <a href="#!" className="btn btn-link fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block">
                  <span className="fa-solid fa-user-gear me-2 mb-2 mb-xxl-0">                  </span>Settings 
                </a>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="d-flex pb-4 align-items-end">
              <h3 className="flex-1 mb-0">
Photos
              </h3>
              <a href="#!" className="fw-bold fs-9 me-4">
Albums
              </a>
              <a href="#!" className="fw-bold fs-9">
See all
              </a>
            </div>
            <div className="row g-3">
              <div className="col-4">
                <PhoenixLink href="/assets/img/gallery/11.png" data-gallery={"gallery-photos"}>
                  <PhoenixImage src="/assets/img/gallery/11.png" alt="" className="w-100 rounded-3" />
                </PhoenixLink>
              </div>
              <div className="col-4">
                <PhoenixLink href="/assets/img/gallery/12.png" data-gallery={"gallery-photos"}>
                  <PhoenixImage src="/assets/img/gallery/12.png" alt="" className="w-100 rounded-3" />
                </PhoenixLink>
              </div>
              <div className="col-4">
                <PhoenixLink href="/assets/img/gallery/13.png" data-gallery={"gallery-photos"}>
                  <PhoenixImage src="/assets/img/gallery/13.png" alt="" className="w-100 rounded-3" />
                </PhoenixLink>
              </div>
              <div className="col-4">
                <PhoenixLink href="/assets/img/gallery/14.png" data-gallery={"gallery-photos"}>
                  <PhoenixImage src="/assets/img/gallery/14.png" alt="" className="w-100 rounded-3" />
                </PhoenixLink>
              </div>
              <div className="col-4">
                <PhoenixLink href="/assets/img/gallery/15.png" data-gallery={"gallery-photos"}>
                  <PhoenixImage src="/assets/img/gallery/15.png" alt="" className="w-100 rounded-3" />
                </PhoenixLink>
              </div>
              <div className="col-4">
                <PhoenixLink href="/assets/img/gallery/16.png" data-gallery={"gallery-photos"}>
                  <PhoenixImage src="/assets/img/gallery/16.png" alt="" className="w-100 rounded-3" />
                </PhoenixLink>
              </div>
            </div>
          </div>
          <div className="d-flex pb-4 align-items-end border-bottom border-translucent border-dashed">
            <h3 className="flex-1 mb-0">
You and Erza
            </h3>
            <a href="#!" className="fw-bold fs-9">
See details
            </a>
          </div>
          <div className="row g-0 mb-5 mb-lg-0">
            <div className="col-12 border-1 border-bottom border-translucent py-2">
              <a href="#!" className="btn btn-link px-0 fs-8 text-body-secondary text-primary-hover fw-semibold d-flex">
                <span className="fa-solid fa-user-group me-2 mb-2 mb-xxl-0">                </span>432 Common Followers
              </a>
            </div>
            <div className="col-12 border-1 border-bottom border-translucent py-2">
              <a href="#!" className="btn btn-link px-0 fs-8 text-body-secondary text-primary-hover fw-semibold d-flex">
                <span className="fa-solid fa-users me-2 mb-2 mb-xxl-0">                </span>21 Communities
              </a>
            </div>
            <div className="col-12 border-1 border-bottom border-translucent py-2">
              <a href="#!" className="btn btn-link px-0 fs-8 text-body-secondary text-primary-hover fw-semibold d-flex">
                <span className="fa-solid fa-tags me-2 mb-2 mb-xxl-0">                </span>12 Tagged Images
              </a>
            </div>
            <div className="col-12 border-1 border-bottom border-translucent py-2">
              <a href="#!" className="btn btn-link px-0 fs-8 text-body-secondary text-primary-hover fw-semibold d-flex">
                <span className="fa-solid fa-calendar-days me-2 mb-2 mb-xxl-0">                </span>3 Common Events
              </a>
            </div>
            <div className="col-12 border-1 border-bottom border-translucent py-2">
              <a href="#!" className="btn btn-link px-0 fs-8 text-body-secondary text-primary-hover fw-semibold d-flex">
                <span className="fa-solid fa-location-dot me-2 mb-2 mb-xxl-0">                </span>45 Common Check-ins
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-8">
          <div className="mb-9">
            <div className="mb-5">
              <div className="card mb-4">
                <div className="card-body p-3 p-sm-4">
                  <div className="border-bottom border-translucent mb-3">
                    <div className="d-flex align-items-center mb-3">
                      <PhoenixLink href="/apps/social/profile">
                        <div className="avatar avatar-xl  me-2">
                          <PhoenixImage src="/assets/img/team/9.webp" alt="" className="rounded-circle " />
                        </div>
                      </PhoenixLink>
                      <div className="flex-1">
                        <PhoenixLink href="/apps/social/profile" className="fw-bold mb-0 text-body-emphasis">
Erza Bridgest
                        </PhoenixLink>
                        <p className="fs-10 mb-0 text-body-tertiary text-opacity-85 fw-semibold">
35 mins ago
                          <span className="fa-solid fa-circle text-body-quaternary text-opacity-50" data-fa-transform={"shrink-10 down-2"}>                          </span>
Mustafar, British Columbia
                          <span className="fa-solid fa-circle text-body-quaternary text-opacity-50" data-fa-transform={"shrink-10 down-2"}>                          </span>
                          <span className="fa-solid fa-earth-americas text-body">                          </span>
                        </p>
                      </div>
                      <div className="btn-reveal-trigger">
                        <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none d-flex btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                          <span className="fas fa-ellipsis-h">                          </span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end py-2">
                          <a href="#!" className="dropdown-item">
Edit
                          </a>
                          <a href="#!" className="dropdown-item text-danger">
Delete
                          </a>
                          <a href="#!" className="dropdown-item">
Download
                          </a>
                          <a href="#!" className="dropdown-item">
Report abuse
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="text-body-secondary">
Melancholy is sadness that has taken on lightness.
                    </p>
                    <div className="row g-1 mb-5">
                      <div className="col-3">
                        <PhoenixLink href="/assets/img/gallery/22.png" data-gallery={"gallery-posts-0"}>
                          <PhoenixImage src="/assets/img/gallery/22.png" alt="..." className="rounded h-100 w-100" />
                        </PhoenixLink>
                      </div>
                      <div className="col-3">
                        <PhoenixLink href="/assets/img/gallery/23.png" data-gallery={"gallery-posts-0"}>
                          <PhoenixImage src="/assets/img/gallery/23.png" alt="..." className="rounded h-100 w-100" />
                        </PhoenixLink>
                      </div>
                      <div className="col-6">
                        <PhoenixLink href="/assets/img/gallery/24.png" data-gallery={"gallery-posts-0"}>
                          <PhoenixImage src="/assets/img/gallery/24.png" alt="..." className="rounded h-100 w-100" />
                        </PhoenixLink>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-link p-0 me-3 fs-10 fw-bolder" type="button">
                      <span className="fa-solid fa-heart me-1">                      </span>
345 Likes 
                    </button>
                    <button className="btn btn-link text-body p-0 fs-10 me-3 fw-bolder" type="button">
                      <span className="fa-solid fa-comment me-1">                      </span>
45 Comments 
                    </button>
                    <button className="btn btn-link text-body p-0 fs-10 me-2 fw-bolder" type="button">
                      <span className="fa-solid fa-share me-1">                      </span>
56 shares 
                    </button>
                  </div>
                </div>
                <div className="bg-body-highlight border-top border-translucent p-3 p-sm-4">
                  <div className="d-flex align-items-start">
                    <PhoenixLink href="/apps/social/profile">
                      <div className="avatar avatar-m  me-2">
                        <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                      </div>
                    </PhoenixLink>
                    <div className="flex-1">
                      <div className="d-flex align-items-center">
                        <PhoenixLink href="/apps/social/profile" className="fw-bold mb-0 text-body-emphasis">
Mamur Fechetti
                        </PhoenixLink>
                        <span className="text-body-tertiary text-opacity-85 fw-semibold fs-10 ms-2">
35 mins ago
                        </span>
                      </div>
                      <p className="mb-0">
How long did it take to create this? It appears that you quickly produced the second one.
                      </p>
                      <button className="btn btn-link p-0 text-body fw-bolder mb-2" type="button">
                        <span className="fa-solid fa-reply fs-10 me-1">                        </span>
                        <span className="fw-bold fs-10">
Reply
                        </span>
                      </button>
                      <div className="d-flex align-items-start mb-3">
                        <PhoenixLink href="/apps/social/profile">
                          <div className="avatar avatar-m  me-2">
                            <PhoenixImage src="/assets/img/team/62.webp" alt="" className="rounded-circle " />
                          </div>
                        </PhoenixLink>
                        <div className="flex-1">
                          <div className="d-flex align-items-center">
                            <PhoenixLink href="/apps/social/profile" className="fw-bold mb-0 text-body-emphasis">
Zingko Kudobum
                            </PhoenixLink>
                            <span className="text-body-tertiary text-opacity-85 fw-semibold fs-10 ms-2">
5 mins ago
                            </span>
                          </div>
                          <p className="mb-0">
I am so clever that sometimes I don't understand a single word of what I am saying.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <PhoenixLink href="/apps/social/profile">
                      <div className="avatar avatar-m  me-2">
                        <PhoenixImage src="/assets/img/team/9.webp" alt="" className="rounded-circle " />
                      </div>
                    </PhoenixLink>
                    <div className="flex-1">
                      <input className="form-control" type="text" placeholder="Add comment" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="card mb-4">
                <div className="card-body p-3 p-sm-4">
                  <div className="border-bottom border-translucent mb-3">
                    <div className="d-flex align-items-center mb-3">
                      <PhoenixLink href="/apps/social/profile">
                        <div className="avatar avatar-xl  me-2">
                          <PhoenixImage src="/assets/img/team/9.webp" alt="" className="rounded-circle " />
                        </div>
                      </PhoenixLink>
                      <div className="flex-1">
                        <PhoenixLink href="/apps/social/profile" className="fw-bold mb-0 text-body-emphasis">
Erza Bridgest
                        </PhoenixLink>
                        <p className="fs-10 mb-0 text-body-tertiary text-opacity-85 fw-semibold">
3 days ago
                          <span className="fa-solid fa-circle text-body-quaternary text-opacity-50" data-fa-transform={"shrink-10 down-2"}>                          </span>
Lothal, USA
                          <span className="fa-solid fa-circle text-body-quaternary text-opacity-50" data-fa-transform={"shrink-10 down-2"}>                          </span>
                          <span className="fa-solid fa-earth-americas text-body">                          </span>
                        </p>
                      </div>
                      <div className="btn-reveal-trigger">
                        <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none d-flex btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                          <span className="fas fa-ellipsis-h">                          </span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end py-2">
                          <a href="#!" className="dropdown-item">
Edit
                          </a>
                          <a href="#!" className="dropdown-item text-danger">
Delete
                          </a>
                          <a href="#!" className="dropdown-item">
Download
                          </a>
                          <a href="#!" className="dropdown-item">
Report abuse
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="text-body-secondary">
A guy enters a bakery while carrying a 25-pound haddock. He asks the baker if he makes fish cakes. The rather perplexed baker responds in the negative. The guy responds "That's unfortunate.Today is his birthday"
                    </p>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-link p-0 me-3 fs-10 fw-bolder" type="button">
                      <span className="fa-solid fa-heart me-1">                      </span>
23 Likes 
                    </button>
                    <button className="btn btn-link text-body p-0 fs-10 me-3 fw-bolder" type="button">
                      <span className="fa-solid fa-comment me-1">                      </span>
9 Comments 
                    </button>
                    <button className="btn btn-link text-body p-0 fs-10 me-2 fw-bolder" type="button">
                      <span className="fa-solid fa-share me-1">                      </span>
3 shares 
                    </button>
                  </div>
                </div>
                <div className="bg-body-highlight border-top border-translucent p-3 p-sm-4">
                  <div className="d-flex align-items-center">
                    <PhoenixLink href="/apps/social/profile">
                      <div className="avatar avatar-m  me-2">
                        <PhoenixImage src="/assets/img/team/20.webp" alt="" className="rounded-circle " />
                      </div>
                    </PhoenixLink>
                    <div className="flex-1">
                      <input className="form-control" type="text" placeholder="Add comment" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="card mb-4">
                <div className="card-body p-3 p-sm-4">
                  <div className="border-bottom border-translucent mb-3">
                    <div className="d-flex align-items-center mb-3">
                      <PhoenixLink href="/apps/social/profile">
                        <div className="avatar avatar-xl  me-2">
                          <PhoenixImage src="/assets/img/team/9.webp" alt="" className="rounded-circle " />
                        </div>
                      </PhoenixLink>
                      <div className="flex-1">
                        <PhoenixLink href="/apps/social/profile" className="fw-bold mb-0 text-body-emphasis">
Zingko Kudobum
                        </PhoenixLink>
                        <p className="fs-10 mb-0 text-body-tertiary text-opacity-85 fw-semibold">
35 mins ago
                          <span className="fa-solid fa-circle text-body-quaternary text-opacity-50" data-fa-transform={"shrink-10 down-2"}>                          </span>
Consett, UK
                          <span className="fa-solid fa-circle text-body-quaternary text-opacity-50" data-fa-transform={"shrink-10 down-2"}>                          </span>
                          <span className="fa-solid fa-earth-americas text-body">                          </span>
                        </p>
                      </div>
                      <div className="btn-reveal-trigger">
                        <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none d-flex btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                          <span className="fas fa-ellipsis-h">                          </span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end py-2">
                          <a href="#!" className="dropdown-item">
Edit
                          </a>
                          <a href="#!" className="dropdown-item text-danger">
Delete
                          </a>
                          <a href="#!" className="dropdown-item">
Download
                          </a>
                          <a href="#!" className="dropdown-item">
Report abuse
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="text-body-secondary">
Fear can hold you prisoner. Hope can set you free. - King
                    </p>
                    <div className="row g-1 mb-5">
                      <div className="col-3">
                        <PhoenixLink href="/assets/img/gallery/25.png" data-gallery={"gallery-posts-2"}>
                          <PhoenixImage src="/assets/img/gallery/25.png" alt="..." className="rounded h-100 w-100" />
                        </PhoenixLink>
                      </div>
                      <div className="col-3">
                        <PhoenixLink href="/assets/img/gallery/26.png" data-gallery={"gallery-posts-2"}>
                          <PhoenixImage src="/assets/img/gallery/26.png" alt="..." className="rounded h-100 w-100" />
                        </PhoenixLink>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-link p-0 me-3 fs-10 fw-bolder" type="button">
                      <span className="fa-solid fa-heart me-1">                      </span>
345 Likes 
                    </button>
                    <button className="btn btn-link text-body p-0 fs-10 me-3 fw-bolder" type="button">
                      <span className="fa-solid fa-comment me-1">                      </span>
45 Comments 
                    </button>
                    <button className="btn btn-link text-body p-0 fs-10 me-2 fw-bolder" type="button">
                      <span className="fa-solid fa-share me-1">                      </span>
56 shares 
                    </button>
                  </div>
                </div>
                <div className="bg-body-highlight border-top border-translucent p-3 p-sm-4">
                  <div className="d-flex align-items-start">
                    <PhoenixLink href="/apps/social/profile">
                      <div className="avatar avatar-m  me-2">
                        <PhoenixImage src="/assets/img/team/14.webp" alt="" className="rounded-circle " />
                      </div>
                    </PhoenixLink>
                    <div className="flex-1">
                      <div className="d-flex align-items-center">
                        <PhoenixLink href="/apps/social/profile" className="fw-bold mb-0 text-body-emphasis">
Sutanuka Gomez
                        </PhoenixLink>
                        <span className="text-body-tertiary text-opacity-85 fw-semibold fs-10 ms-2">
35 mins ago
                        </span>
                      </div>
                      <p className="mb-0">
Time is the best teacher; Unfortunately it kills all its students!
                      </p>
                      <button className="btn btn-link p-0 text-body fw-bolder mb-2" type="button">
                        <span className="fa-solid fa-reply fs-10 me-1">                        </span>
                        <span className="fw-bold fs-10">
Reply
                        </span>
                      </button>
                      <div className="d-flex align-items-start mb-3">
                        <PhoenixLink href="/apps/social/profile">
                          <div className="avatar avatar-m  me-2">
                            <PhoenixImage src="/assets/img/team/27.webp" alt="" className="rounded-circle " />
                          </div>
                        </PhoenixLink>
                        <div className="flex-1">
                          <div className="d-flex align-items-center">
                            <PhoenixLink href="/apps/social/profile" className="fw-bold mb-0 text-body-emphasis">
Zingko Kudobum
                            </PhoenixLink>
                            <span className="text-body-tertiary text-opacity-85 fw-semibold fs-10 ms-2">
5 mins ago
                            </span>
                          </div>
                          <p className="mb-0">
If you’re too open-minded, your brains will fall out.!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <PhoenixLink href="/apps/social/profile">
                      <div className="avatar avatar-m  me-2">
                        <PhoenixImage src="/assets/img/team/14.webp" alt="" className="rounded-circle " />
                      </div>
                    </PhoenixLink>
                    <div className="flex-1">
                      <input className="form-control" type="text" placeholder="Add comment" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a href="#!" className="btn btn-link fs-8 p-0">
Load more
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="navbar-bottom d-xl-none">
      <div className="nav">
        <PhoenixLink href="/apps/social/feed" className="nav-link" aria-current="page">
          <span className="fa-solid fa-home nav-icon">          </span>          <span className="nav-label">
Home
          </span>
        </PhoenixLink>
        <PhoenixLink href="/apps/social/profile" className="nav-link">
          <span className="fa-solid fa-user nav-icon">          </span>          <span className="nav-label">
Profile
          </span>
        </PhoenixLink>
        <a href="#!" className="nav-link">
          <span className="fa-solid fa-image nav-icon">          </span>          <span className="nav-label">
Photos
          </span>
        </a>
        <PhoenixLink href="/apps/chat" className="nav-link">
          <span className="fa-solid fa-message nav-icon">          </span>          <span className="nav-label">
Messages
          </span>
        </PhoenixLink>
        <PhoenixLink href="/apps/events/event-detail" className="nav-link">
          <span className="fa-solid fa-calendar-days nav-icon">          </span>          <span className="nav-label">
Events
          </span>
        </PhoenixLink>
      </div>
    </div>

    <footer className="footer d-none d-xl-block position-absolute">
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
