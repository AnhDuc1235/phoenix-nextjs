'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Feed() {
  return (
    <div suppressHydrationWarning>

    <div className="pb-10">
      <div className="row gy-3 gx-5 gx-xxl-6">
        <div className="col-lg-5 col-xl-4 d-none d-lg-block">
          <div className="card mb-5">
            <div className="card-header hover-actions-trigger position-relative mb-7" style={{"minHeight":"130px"} as CSSProperties}>
              <div className="bg-holder rounded-top" style={{"backgroundImage":"linear-gradient(0deg, #000000 -3%, rgba(0, 0, 0, 0) 83%), url(../../assets/img/generic/59.png)"} as CSSProperties}>
                <input className="d-none" id="upload-feed-cover-image" type="file" />
                <label className="cover-image-file-input" htmlFor="upload-feed-cover-image">                </label>
                <div className="hover-actions end-0 bottom-0 pe-1 pb-2 text-white dark__text-gray-1100">
                  <span className="fa-solid fa-camera me-2 overlay-icon">                  </span>
                </div>
              </div>
              <input className="d-none" id="upload-feed-porfile-picture" type="file" />
              <label className="avatar avatar-4xl status-online feed-avatar-profile cursor-pointer" htmlFor="upload-feed-porfile-picture">
                <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle img-thumbnail shadow-sm border-0" width={200} />
              </label>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex flex-wrap mb-3 align-items-center">
                    <h3 className="me-2">
Ansolo Lazinatov
                    </h3>
                    <span className="fw-normal fs-8">
u/hansolo
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-center flex-wrap">
                      <div className="d-flex me-4 mb-2">
                        <span className="fa-solid fa-user-group fs-10 me-2 me-lg-1 me-xl-2">                        </span>
                        <h6 className="d-inline-block mb-0">
1297 
                          <span className="fw-semibold">
Followers
                          </span>
                        </h6>
                      </div>
                      <div className="d-flex mb-2">
                        <span className="fa-solid fa-user-check fs-10 me-2 me-lg-1 me-xl-2">                        </span>
                        <h6 className="d-block d-xl-inline-block mb-0">
 3971 
                          <span className="fw-semibold">
Following
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <p className="fw-semibold mb-0">
About me
                    <a href="#!">
                      <span className="fa-solid fa-pencil fs-10 text-body-quaternary ms-3">                      </span>
                    </a>
                  </p>
                  <p className="text-body-tertiary mb-0">
“Le capitalisme exploite. Et le capitalisme exploite les gens de couleur. Comme il exploite les hommes. Ou comme il exploite les femmes.” 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-6 border-1 border-bottom border-translucent border-end py-2">
              <a href="#!" className="btn btn-link ps-2 fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block">
                <span className="fa-solid fa-user-group me-2 mb-2 mb-xxl-0">                </span>Followers
              </a>
            </div>
            <div className="col-6 border-1 border-bottom border-translucent py-2">
              <a href="#!" className="btn btn-link fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block">
                <span className="fa-solid fa-users me-2 mb-2 mb-xxl-0">                </span>Communities
              </a>
            </div>
            <div className="col-6 border-1 border-bottom border-translucent border-end py-2">
              <a href="#!" className="btn btn-link ps-2 fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block">
                <span className="fa-solid fa-photo-film me-2 mb-2 mb-xxl-0">                </span>Media Files
              </a>
            </div>
            <div className="col-6 border-1 border-bottom border-translucent py-2">
              <a href="#!" className="btn btn-link fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block">
                <span className="fa-solid fa-calendar-days me-2 mb-2 mb-xxl-0">                </span>Events
              </a>
            </div>
            <div className="col-6 border-1 border-end border-translucent py-2">
              <a href="#!" className="btn btn-link ps-2 fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block">
                <span className="fa-solid fa-dice me-2 mb-2 mb-xxl-0">                </span>Games
              </a>
            </div>
            <div className="col-6 border-1 py-2">
              <a href="#!" className="btn btn-link fs-8 text-body-secondary text-primary-hover fw-semibold d-flex flex-column d-xxl-inline-block">
                <span className="fa-solid fa-user-gear me-2 mb-2 mb-xxl-0">                </span>Settings 
              </a>
            </div>
          </div>
          <div className="mb-8 mt-6">
            <div className="d-flex flex-between-center pb-3 border-bottom border-translucent border-dashed">
              <h3 className="mb-0">
Messages
                <span className="text-body-tertiary ms-2 fw-normal">
(97)
                </span>
              </h3>
              <div className="btn-reveal-trigger">
                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none d-flex btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                  <span className="fas fa-ellipsis-h">                  </span>
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
            <div className="d-flex py-3 align-items-center border-bottom border-translucent border-dashed">
              <div className="me-2">
                <div className="avatar avatar-m status-online ">
                  <PhoenixImage src="/assets/img/team/35.webp" alt="" className="rounded-circle " />
                </div>
              </div>
              <PhoenixLink href="/apps/chat" className="text-decoration-none flex-1">
                <h5>
Stanly Drinkwater
                </h5>                <p className="text-body-tertiary fw-semibold fs-9 mb-0 lh-sm line-clamp-1">
When you gonna pay me back, don’t leave me hanging
                </p>
              </PhoenixLink>
            </div>
            <div className="d-flex py-3 align-items-center border-bottom border-translucent border-dashed">
              <div className="me-2">
                <div className="avatar avatar-m status-online ">
                  <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                </div>
              </div>
              <PhoenixLink href="/apps/chat" className="text-decoration-none flex-1">
                <h5>
Milind Mikuja
                </h5>                <p className="text-body-tertiary fw-semibold fs-9 mb-0 lh-sm line-clamp-1">
But the mare fact that she said that makes
                </p>
              </PhoenixLink>
            </div>
            <div className="d-flex py-3 align-items-center border-bottom border-translucent border-dashed">
              <div className="me-2">
                <div className="avatar avatar-m status-online ">
                  <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                </div>
              </div>
              <PhoenixLink href="/apps/chat" className="text-decoration-none flex-1">
                <h5>
Josef Stravinsky
                </h5>                <p className="text-body-tertiary fw-semibold fs-9 mb-0 lh-sm line-clamp-1">
Oi Cult.
                </p>
              </PhoenixLink>
            </div>
            <div className="d-flex py-3 align-items-center border-bottom border-translucent border-dashed">
              <div className="me-2">
                <div className="avatar avatar-m status-online ">
                  <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle " />
                </div>
              </div>
              <PhoenixLink href="/apps/chat" className="text-decoration-none flex-1">
                <h5>
Martina scorcese
                </h5>                <p className="text-body-tertiary fw-semibold fs-9 mb-0 lh-sm line-clamp-1">
Thanks for that. Sincerely.
                </p>
              </PhoenixLink>
            </div>
            <div className="d-flex py-3 align-items-center border-bottom border-translucent border-dashed">
              <div className="me-2">
                <div className="avatar avatar-m status-online ">
                  <PhoenixImage src="/assets/img/team/57.webp" alt="" className="rounded-circle " />
                </div>
              </div>
              <PhoenixLink href="/apps/chat" className="text-decoration-none flex-1">
                <h5>
Meekona Zikon
                </h5>                <p className="text-body-tertiary fw-semibold fs-9 mb-0 lh-sm line-clamp-1">
I am Outside, Come here, Lets smoke...
                </p>
              </PhoenixLink>
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
          <div className="d-flex pb-4 border-bottom border-dashed align-items-end">
            <h3 className="flex-1 mb-0">
Events
            </h3>
            <a href="#!" className="fw-bold fs-9">
See more
            </a>
          </div>
          <div className="py-3 border-bottom border-translucent border-dashed">
            <div className="d-flex flex-between-center">
              <p className="text-warning fs-10 mb-0 fw-bold mb-1">
MON, FEB 21- MARCH 23
              </p>
              <div className="btn-reveal-trigger">
                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none d-flex btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                  <span className="fas fa-ellipsis-h">                  </span>
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
            <a href="#!" className="text-primary-hover text-body-highlight fw-bold mb-2 line-clamp-1 me-5 lh-base">
Master Class on FILM Studies THESIS on Makers
            </a>
            <p className="text-body-secondary fs-9 mb-2">
Organized by 
              <br />
              <a href="#!" className="fw-bold text-primary">
IAFM- International Academy of Film and Media
              </a>
            </p>
            <p className="fs-10 text-body-tertiary text-opacity-85">
64 people going
            </p>
            <p className="fs-9 text-body-tertiary fw-bold mb-1">
              <span className="fa-solid fa-clock text-body-secondary me-1">              </span>
12.30PM - 10PM
            </p>
            <p className="fs-9 text-body-tertiary fw-bold mb-0">
              <span className="fa-solid fa-map-marker-alt text-body-secondary me-1">              </span>
Tavern on the Greend, New York
            </p>
          </div>
          <div className="py-3 border-bottom border-translucent border-dashed">
            <div className="d-flex flex-between-center">
              <p className="text-warning fs-10 mb-0 fw-bold mb-1">
MON, FEB 21- MARCH 23
              </p>
              <div className="btn-reveal-trigger">
                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none d-flex btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                  <span className="fas fa-ellipsis-h">                  </span>
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
            <a href="#!" className="text-primary-hover text-body-highlight fw-bold mb-2 line-clamp-1 me-5 lh-base">
Master Class on FILM Studies 'ANALYSIS of Cinema'
            </a>
            <p className="text-body-secondary fs-9 mb-2">
Organized by 
              <br />
              <a href="#!" className="fw-bold text-primary">
IAFM- International Academy of Film and Media
              </a>
            </p>
            <p className="fs-10 text-body-tertiary text-opacity-85">
64 people going
            </p>
            <p className="fs-9 text-body-tertiary fw-bold mb-1">
              <span className="fa-solid fa-clock text-body-secondary me-1">              </span>
12.30PM - 10PM
            </p>
            <p className="fs-9 text-body-tertiary fw-bold mb-0">
              <span className="fa-solid fa-map-marker-alt text-body-secondary me-1">              </span>
Tavern on the Greend, New York
            </p>
          </div>
          <div className="py-3 border-bottom border-translucent border-dashed">
            <div className="d-flex flex-between-center">
              <p className="text-warning fs-10 mb-0 fw-bold mb-1">
MON, FEB 21- MARCH 23
              </p>
              <div className="btn-reveal-trigger">
                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none d-flex btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                  <span className="fas fa-ellipsis-h">                  </span>
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
            <a href="#!" className="text-primary-hover text-body-highlight fw-bold mb-2 line-clamp-1 me-5 lh-base">
Witnessing History in Making Photographs
            </a>
            <p className="text-body-secondary fs-9 mb-2">
Organized by 
              <br />
              <a href="#!" className="fw-bold text-primary">
IAFM- International Academy of Film and Media
              </a>
            </p>
            <p className="fs-10 text-body-tertiary text-opacity-85">
64 people going
            </p>
            <p className="fs-9 text-body-tertiary fw-bold mb-1">
              <span className="fa-solid fa-clock text-body-secondary me-1">              </span>
12.30PM - 10PM
            </p>
            <p className="fs-9 text-body-tertiary fw-bold mb-0">
              <span className="fa-solid fa-map-marker-alt text-body-secondary me-1">              </span>
Tavern on the Greend, New York
            </p>
          </div>
        </div>
        <div className="col-lg-7 col-xl-8">
          <div className="card d-flex flex-column mb-5">
            <textarea className="form-control border-translucent rounded-bottom-0 border-0 flex-1 fs-8" rows={7} placeholder="Write something..." defaultValue="" />
            <div className="card-footer p-3">
              <div className="d-flex justify-content-between align-items-center">
                <button className="btn p-0 me-3">
                  <span className="fa-solid fa-image fs-8">                  </span>
                </button>
                <button className="btn p-0 me-3">
                  <span className="fa-solid fa-calendar-alt fs-8">                  </span>
                </button>
                <button className="btn p-0 me-3">
                  <span className="fa-solid fa-map-marker-alt fs-8">                  </span>
                </button>
                <button className="btn p-0 me-3">
                  <span className="fa-solid fa-tag fs-8">                  </span>
                </button>
                <div className="dropdown me-3 d-inline-block flex-1">
                  <button className="btn p-0 dropdown-toggle dropdown-caret-none d-flex align-items-center" type="button" data-bs-toggle={"dropdown"} aria-expanded="false">
                    <span className="fa-solid fa-globe-asia fs-8 me-1">                    </span>
                    <span className="me-1 lh-base d-none d-sm-block">
Public
                    </span>
                    <span className="fa-solid fa-caret-down fs-10 text-body-quaternary">                    </span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#" className="dropdown-item">
Public
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dropdown-item">
Private
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dropdown-item">
Draft
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="d-flex align-items-center">
                  <button className="btn btn-primary btn-sm px-6 px-sm-8">
Post
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-9">
            <div className="mb-5">
              <div className="card mb-4">
                <div className="card-body p-3 p-sm-4">
                  <div className="border-bottom border-translucent mb-3">
                    <div className="d-flex align-items-center mb-3">
                      <PhoenixLink href="/apps/social/profile">
                        <div className="avatar avatar-xl  me-2">
                          <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle " />
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
Some paintings I love
                    </p>
                    <div className="row g-1 mb-5">
                      <div className="col-3">
                        <PhoenixLink href="/assets/img/gallery/17.png" data-gallery={"gallery-posts-0"}>
                          <PhoenixImage src="/assets/img/gallery/17.png" alt="..." className="rounded h-100 w-100" />
                        </PhoenixLink>
                      </div>
                      <div className="col-3">
                        <PhoenixLink href="/assets/img/gallery/18.png" data-gallery={"gallery-posts-0"}>
                          <PhoenixImage src="/assets/img/gallery/18.png" alt="..." className="rounded h-100 w-100" />
                        </PhoenixLink>
                      </div>
                      <div className="col-6">
                        <PhoenixLink href="/assets/img/gallery/19.png" data-gallery={"gallery-posts-0"}>
                          <PhoenixImage src="/assets/img/gallery/19.png" alt="..." className="rounded h-100 w-100" />
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
56 Shares 
                    </button>
                  </div>
                </div>
                <div className="bg-body-highlight border-top border-translucent p-3 p-sm-4">
                  <div className="d-flex align-items-start">
                    <PhoenixLink href="/apps/social/profile">
                      <div className="avatar avatar-m  me-2">
                        <PhoenixImage src="/assets/img/team/23.webp" alt="" className="rounded-circle " />
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
                        <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle " />
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
                          <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                        </div>
                      </PhoenixLink>
                      <div className="flex-1">
                        <PhoenixLink href="/apps/social/profile" className="fw-bold mb-0 text-body-emphasis">
Zingko Kudobum
                        </PhoenixLink>
                        <p className="fs-10 mb-0 text-body-tertiary text-opacity-85 fw-semibold">
35 mins ago 
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
3 Shares 
                    </button>
                  </div>
                </div>
                <div className="bg-body-highlight border-top border-translucent p-3 p-sm-4">
                  <div className="d-flex align-items-center">
                    <PhoenixLink href="/apps/social/profile">
                      <div className="avatar avatar-m  me-2">
                        <PhoenixImage src="/assets/img/team/61.webp" alt="" className="rounded-circle " />
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
                          <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle " />
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
Some paintings I love
                    </p>
                    <div className="row g-1 mb-5">
                      <div className="col-3">
                        <PhoenixLink href="/assets/img/gallery/20.png" data-gallery={"gallery-posts-2"}>
                          <PhoenixImage src="/assets/img/gallery/20.png" alt="..." className="rounded h-100 w-100" />
                        </PhoenixLink>
                      </div>
                      <div className="col-3">
                        <PhoenixLink href="/assets/img/gallery/21.png" data-gallery={"gallery-posts-2"}>
                          <PhoenixImage src="/assets/img/gallery/21.png" alt="..." className="rounded h-100 w-100" />
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
56 Shares 
                    </button>
                  </div>
                </div>
                <div className="bg-body-highlight border-top border-translucent p-3 p-sm-4">
                  <div className="d-flex align-items-start">
                    <PhoenixLink href="/apps/social/profile">
                      <div className="avatar avatar-m  me-2">
                        <PhoenixImage src="/assets/img/team/23.webp" alt="" className="rounded-circle " />
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
If you’re too open-minded, your brains will fall out.!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <PhoenixLink href="/apps/social/profile">
                      <div className="avatar avatar-m  me-2">
                        <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle " />
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

    <div className="navbar-bottom d-lg-none">
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

    <footer className="footer d-none d-lg-block position-absolute">
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
