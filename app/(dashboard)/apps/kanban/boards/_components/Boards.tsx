'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Boards() {
  return (
    <div suppressHydrationWarning>

    <div className="mb-9">
      <div className="border-bottom border-translucent mx-n4 mx-lg-n6 px-4 px-lg-6 pb-5">
        <div className="row justify-content-between gy-4">
          <div className="col-auto">
            <h2>
Kanban Boards 
              <span className="text-body-tertiary fw-semibold">
(8)
              </span>
            </h2>
          </div>
          <div className="col-auto d-flex flex-wrap gap-2">
            <button className="btn px-4 btn-phoenix-primary d-flex">
              <span className="fa-solid fa-filter me-1">              </span>
              <span>
Filter
              </span>
            </button>
            <select className="form-select w-auto" id="select-deals">
              <option>
Sort by - Last visited
              </option>
              <option>
Sort by - Name (A - Z)
              </option>
              <option>
Sort by - Name (Z - A)
              </option>
              <option>
Sort by - Category
              </option>
              <option>
 Sort by - Date created
              </option>
            </select>
            <div className="search-box">
              <form className="position-relative">
                <input className="form-control search-input search" type="search" placeholder="Search by name" aria-label="Search" />
                <span className="fas fa-search search-box-icon">                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap gap-3 border-bottom border-translucent mx-n4 mx-lg-n6 px-4 px-lg-6 py-5">
        <PhoenixLink href="/apps/kanban/create-kanban-board" className="btn btn-primary px-3 px-sm-5 px-md-10">
          <span className="fas fa-plus me-2">          </span>Create New Board
        </PhoenixLink>
        <button className="btn btn-phoenix-primary px-3 px-sm-4 d-flex text-body">
          <span className="fa-solid fa-angles-down me-sm-2">          </span>
          <span className="d-none d-sm-block">
Import Bulk Tasks
          </span>
        </button>
        <PhoenixLink href="/apps/calendar" className="btn btn-phoenix-primary px-3 px-sm-4 d-flex text-body">
          <span className="fa-solid fa-calendar-xmark me-sm-2">          </span>          <span className="d-none d-sm-block white-space-nowrap">
Upcoming Deadlines
          </span>
        </PhoenixLink>
      </div>
      <div className="mx-n4 mx-lg-n6 px-4 px-lg-6 py-5 border-bottom border-translucent">
        <h4>
Most Recent Boards
        </h4>
        <p className="mb-4">
Boards you’ve visited recently. Can be private or public boards. 
          <a href="#!">
 Change preference
          </a>
        </p>
        <div className="swiper-theme-container kanban-boards-slider">
          <div className="swiper theme-slider" data-swiper={"{\"slidesPerView\":1,\"spaceBetween\":24,\"speed\":800,\"breakpoints\":{\"576\":{\"slidesPerView\":2},\"1200\":{\"slidesPerView\":3},\"1540\":{\"slidesPerView\":4}}}"}>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <PhoenixLink href="/apps/kanban/kanban" className="text-decoration-none">
                  <div className="card overflow-hidden bg-transparent h-100">
                    <div className="position-relative">
                      <div className="bg-info-darker" style={{"height":"128px"} as CSSProperties}>                      </div>
                      <div className="avatar-group position-absolute" style={{"bottom":"1rem","left":"1.5rem"} as CSSProperties}>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/1.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/2.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/3.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/4.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/avatar-placeholder.webp" alt="" className="rounded-circle " />
                        </div>
                      </div>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h3 className="text-body">
Issue Tickets
                        </h3>
                        <p className="text-body-tertiary mb-4">
Daily task
                        </p>
                      </div>
                      <div className="d-flex gap-4">
                        <h5 className="text-body">
                          <span className="fa-solid fa-list-check text-body-tertiary me-1">                          </span>
44
                        </h5>
                        <h5 className="text-body">
                          <span className="fa-solid fa-comment text-body-tertiary me-1">                          </span>
12
                        </h5>
                        <h5 className="text-body">
                          <span className="fa-solid fa-calendar-xmark text-body-tertiary me-1">                          </span>
3
                        </h5>
                      </div>
                    </div>
                  </div>
                </PhoenixLink>
              </div>
              <div className="swiper-slide">
                <PhoenixLink href="/apps/kanban/kanban" className="text-decoration-none">
                  <div className="card overflow-hidden bg-transparent h-100">
                    <div className="position-relative">
                      <PhoenixImage src="/assets/img/kanban/board-2.png" alt="" className="w-100" />
                      <div className="avatar-group position-absolute" style={{"bottom":"1rem","left":"1.5rem"} as CSSProperties}>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/5.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/6.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/7.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/8.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/9.webp" alt="" className="rounded-circle " />
                        </div>
                      </div>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h3 className="text-body">
Falcon React
                        </h3>
                        <p className="text-body-tertiary mb-4">
Production line
                        </p>
                      </div>
                      <div className="d-flex gap-4">
                        <h5 className="text-body">
                          <span className="fa-solid fa-list-check text-body-tertiary me-1">                          </span>
11
                        </h5>
                        <h5 className="text-body">
                          <span className="fa-solid fa-comment text-body-tertiary me-1">                          </span>
29
                        </h5>
                        <h5 className="text-body">
                          <span className="fa-solid fa-calendar-xmark text-body-tertiary me-1">                          </span>
9
                        </h5>
                      </div>
                    </div>
                  </div>
                </PhoenixLink>
              </div>
              <div className="swiper-slide">
                <PhoenixLink href="/apps/kanban/kanban" className="text-decoration-none">
                  <div className="card overflow-hidden bg-transparent h-100">
                    <div className="position-relative">
                      <PhoenixImage src="/assets/img/kanban/board-3.png" alt="" className="w-100" />
                      <div className="avatar-group position-absolute" style={{"bottom":"1rem","left":"1.5rem"} as CSSProperties}>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/10.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/11.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/12.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/13.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/avatar-placeholder.webp" alt="" className="rounded-circle " />
                        </div>
                      </div>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h3 className="text-body">
Rebuilding
                        </h3>
                        <p className="text-body-tertiary mb-4">
Production line
                        </p>
                      </div>
                      <div className="d-flex gap-4">
                        <h5 className="text-body">
                          <span className="fa-solid fa-list-check text-body-tertiary me-1">                          </span>
13
                        </h5>
                        <h5 className="text-body">
                          <span className="fa-solid fa-comment text-body-tertiary me-1">                          </span>
11
                        </h5>
                        <h5 className="text-body">
                          <span className="fa-solid fa-calendar-xmark text-body-tertiary me-1">                          </span>
15
                        </h5>
                      </div>
                    </div>
                  </div>
                </PhoenixLink>
              </div>
              <div className="swiper-slide">
                <PhoenixLink href="/apps/kanban/kanban" className="text-decoration-none">
                  <div className="card overflow-hidden bg-transparent h-100">
                    <div className="position-relative">
                      <PhoenixImage src="/assets/img/kanban/board-4.png" alt="" className="w-100" />
                      <div className="avatar-group position-absolute" style={{"bottom":"1rem","left":"1.5rem"} as CSSProperties}>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/14.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/15.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/16.webp" alt="" className="rounded-circle " />
                        </div>
                      </div>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h3 className="text-body">
ThemePro Devs
                        </h3>
                        <p className="text-body-tertiary mb-4">
Project Management
                        </p>
                      </div>
                      <div className="d-flex gap-4">
                        <h5 className="text-body">
                          <span className="fa-solid fa-list-check text-body-tertiary me-1">                          </span>
103
                        </h5>
                        <h5 className="text-body">
                          <span className="fa-solid fa-comment text-body-tertiary me-1">                          </span>
2
                        </h5>
                        <h5 className="text-body">
                          <span className="fa-solid fa-calendar-xmark text-body-tertiary me-1">                          </span>
20
                        </h5>
                      </div>
                    </div>
                  </div>
                </PhoenixLink>
              </div>
              <div className="swiper-slide">
                <PhoenixLink href="/apps/kanban/create-kanban-board" className="btn btn-phoenix-primary d-flex flex-center h-100 w-100 fs-7 fw-semibold text-truncate">
                  <span className="fa-solid fa-plus-circle fs-8 me-2">                  </span>Create New Board
                </PhoenixLink>
              </div>
            </div>
          </div>
          <div className="swiper-nav">
            <div className="swiper-button-next">
              <span className="fas fa-chevron-right fs-11">              </span>
            </div>
            <div className="swiper-button-prev">
              <span className="fas fa-chevron-left fs-11">              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-n4 mx-lg-n6 px-4 px-lg-6 py-5 border-bottom border-translucent">
        <h4>
Your Boards
        </h4>
        <p className="mb-4">
Boards where you are either an Admin or a Member.
        </p>
        <div className="swiper-theme-container kanban-boards-slider">
          <div className="swiper theme-slider" data-swiper={"{\"slidesPerView\":1,\"spaceBetween\":24,\"speed\":800,\"breakpoints\":{\"576\":{\"slidesPerView\":2},\"1200\":{\"slidesPerView\":3},\"1540\":{\"slidesPerView\":4}}}"}>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <PhoenixLink href="/apps/kanban/kanban" className="text-decoration-none">
                  <div className="card overflow-hidden bg-transparent h-100">
                    <div className="position-relative">
                      <PhoenixImage src="/assets/img/kanban/board-5.png" alt="" className="w-100" />
                      <div className="avatar-group position-absolute" style={{"bottom":"1rem","left":"1.5rem"} as CSSProperties}>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/14.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/19.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/68.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/69.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/avatar-placeholder.webp" alt="" className="rounded-circle " />
                        </div>
                      </div>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h3 className="text-body">
Post Tracking
                        </h3>
                        <p className="text-body-tertiary mb-4">
Deals Tracking
                        </p>
                      </div>
                      <div className="d-flex gap-4">
                        <h5 className="text-body">
                          <span className="fa-solid fa-list-check text-body-tertiary me-1">                          </span>
142
                        </h5>
                        <h5 className="text-body">
                          <span className="fa-solid fa-comment text-body-tertiary me-1">                          </span>
21
                        </h5>
                        <h5 className="text-body">
                          <span className="fa-solid fa-calendar-xmark text-body-tertiary me-1">                          </span>
100
                        </h5>
                      </div>
                    </div>
                  </div>
                </PhoenixLink>
              </div>
              <div className="swiper-slide">
                <PhoenixLink href="/apps/kanban/kanban" className="text-decoration-none">
                  <div className="card overflow-hidden bg-transparent h-100">
                    <div className="position-relative">
                      <PhoenixImage src="/assets/img/kanban/board-6.png" alt="" className="w-100" />
                      <div className="avatar-group position-absolute" style={{"bottom":"1rem","left":"1.5rem"} as CSSProperties}>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/17.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/18.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/19.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/20.webp" alt="" className="rounded-circle " />
                        </div>
                      </div>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h3 className="text-body">
Automation Team
                        </h3>
                        <p className="text-body-tertiary mb-4">
Remote team
                        </p>
                      </div>
                      <div className="d-flex gap-4">
                        <h5 className="text-body">
                          <span className="fa-solid fa-list-check text-body-tertiary me-1">                          </span>
6
                        </h5>
                        <h5 className="text-body">
                          <span className="fa-solid fa-comment text-body-tertiary me-1">                          </span>
761
                        </h5>
                        <h5 className="text-body">
                          <span className="fa-solid fa-calendar-xmark text-body-tertiary me-1">                          </span>
2
                        </h5>
                      </div>
                    </div>
                  </div>
                </PhoenixLink>
              </div>
              <div className="swiper-slide">
                <PhoenixLink href="/apps/kanban/kanban" className="text-decoration-none">
                  <div className="card overflow-hidden bg-transparent h-100">
                    <div className="position-relative">
                      <div className="bg-body-secondary" style={{"height":"128px"} as CSSProperties}>                      </div>
                      <div className="avatar-group position-absolute" style={{"bottom":"1rem","left":"1.5rem"} as CSSProperties}>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/21.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/19.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/22.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/23.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/avatar-placeholder.webp" alt="" className="rounded-circle " />
                        </div>
                      </div>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h3 className="text-body">
Phoenix Kanban
                        </h3>
                        <p className="text-body-tertiary mb-4">
Project Management
                        </p>
                      </div>
                      <div className="d-flex gap-4">
                        <h5 className="text-body">
                          <span className="fa-solid fa-list-check text-body-tertiary me-1">                          </span>
43
                        </h5>
                        <h5 className="text-body">
                          <span className="fa-solid fa-comment text-body-tertiary me-1">                          </span>
22
                        </h5>
                        <h5 className="text-body">
                          <span className="fa-solid fa-calendar-xmark text-body-tertiary me-1">                          </span>
17
                        </h5>
                      </div>
                    </div>
                  </div>
                </PhoenixLink>
              </div>
              <div className="swiper-slide">
                <PhoenixLink href="/apps/kanban/kanban" className="text-decoration-none">
                  <div className="card overflow-hidden bg-transparent h-100">
                    <div className="position-relative">
                      <PhoenixImage src="/assets/img/kanban/board-8.png" alt="" className="w-100" />
                      <div className="avatar-group position-absolute" style={{"bottom":"1rem","left":"1.5rem"} as CSSProperties}>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/24.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/19.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/avatar-placeholder.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/68.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/69.webp" alt="" className="rounded-circle " />
                        </div>
                      </div>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h3 className="text-body">
Reconciling Backlogs
                        </h3>
                        <p className="text-body-tertiary mb-4">
Meeting Agenda
                        </p>
                      </div>
                      <div className="d-flex gap-4">
                        <h5 className="text-body">
                          <span className="fa-solid fa-list-check text-body-tertiary me-1">                          </span>
23
                        </h5>
                        <h5 className="text-body">
                          <span className="fa-solid fa-comment text-body-tertiary me-1">                          </span>
111
                        </h5>
                        <h5 className="text-body">
                          <span className="fa-solid fa-calendar-xmark text-body-tertiary me-1">                          </span>
23
                        </h5>
                      </div>
                    </div>
                  </div>
                </PhoenixLink>
              </div>
              <div className="swiper-slide">
                <PhoenixLink href="/apps/kanban/create-kanban-board" className="btn btn-phoenix-primary d-flex flex-center h-100 w-100 fs-7 fw-semibold text-truncate">
                  <span className="fa-solid fa-plus-circle fs-8 me-2">                  </span>Create New Board
                </PhoenixLink>
              </div>
            </div>
          </div>
          <div className="swiper-nav">
            <div className="swiper-button-next">
              <span className="fas fa-chevron-right fs-11">              </span>
            </div>
            <div className="swiper-button-prev">
              <span className="fas fa-chevron-left fs-11">              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-n4 mx-lg-n6 px-4 px-lg-6 py-5 border-bottom border-translucent">
        <h4>
Private Boards
        </h4>
        <p className="mb-4">
Your eyes only
        </p>
        <div className="swiper-theme-container kanban-boards-slider">
          <div className="swiper theme-slider" data-swiper={"{\"slidesPerView\":1,\"spaceBetween\":24,\"speed\":800,\"breakpoints\":{\"576\":{\"slidesPerView\":2},\"1200\":{\"slidesPerView\":3},\"1540\":{\"slidesPerView\":4}}}"}>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <PhoenixLink href="/apps/kanban/kanban" className="text-decoration-none">
                  <div className="card overflow-hidden bg-transparent h-100">
                    <div className="position-relative">
                      <PhoenixImage src="/assets/img/kanban/board-9.png" alt="" className="w-100" />
                      <div className="avatar-group position-absolute" style={{"bottom":"1rem","left":"1.5rem"} as CSSProperties}>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/31.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/32.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/33.webp" alt="" className="rounded-circle " />
                        </div>
                        <div className="avatar avatar-m  border border-light-subtle rounded-circle">
                          <PhoenixImage src="/assets/img/team/34.webp" alt="" className="rounded-circle " />
                        </div>
                      </div>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h3 className="text-body">
Inventory update
                        </h3>
                        <p className="text-body-tertiary mb-4">
Shipping Process
                        </p>
                      </div>
                      <div className="d-flex gap-4">
                        <h5 className="text-body">
                          <span className="fa-solid fa-list-check text-body-tertiary me-1">                          </span>
68
                        </h5>
                        <h5 className="text-body">
                          <span className="fa-solid fa-comment text-body-tertiary me-1">                          </span>
31
                        </h5>
                        <h5 className="text-body">
                          <span className="fa-solid fa-calendar-xmark text-body-tertiary me-1">                          </span>
14
                        </h5>
                      </div>
                    </div>
                  </div>
                </PhoenixLink>
              </div>
              <div className="swiper-slide">
                <PhoenixLink href="/apps/kanban/create-kanban-board" className="btn btn-phoenix-primary d-flex flex-center h-100 w-100 fs-7 fw-semibold text-truncate">
                  <span className="fa-solid fa-plus-circle fs-8 me-2">                  </span>Create New Board
                </PhoenixLink>
              </div>
            </div>
          </div>
          <div className="swiper-nav">
            <div className="swiper-button-next">
              <span className="fas fa-chevron-right fs-11">              </span>
            </div>
            <div className="swiper-button-prev">
              <span className="fas fa-chevron-left fs-11">              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-phoenix-primary mt-4">
          <span className="fa-solid fa-box-archive me-2">          </span>
Open Archive
        </button>
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
