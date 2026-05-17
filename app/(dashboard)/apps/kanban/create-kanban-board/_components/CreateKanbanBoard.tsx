'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function CreateKanbanBoard() {
  return (
    <div suppressHydrationWarning>

    <div className="d-flex align-items-center">
      <PhoenixImage src="/assets/img/kanban/board.png" alt="" className="me-3" />
      <h1 className="mb-0 text-body-emphasis fw-semibold">
Phoenix Kanban
      </h1>
    </div>

    <p className="mt-3">
Create a Kanban board by following 
      <br className="d-md-none" />
the steps below
    </p>

    <div className="kanban-create-board row">
      <div className="col-xxl-5 col-xl-6 col-12 pb-8 order-1 order-xl-0">
        <div className="theme-wizard theme-wizard-progress" data-theme-wizard data-create-board data-wizard-modal-disabled>
          <div className="mt-6 border-bottom-0">
            <p className="mb-0 text-body-secondary">
Step: 
              <span data-kanban-step>
1
              </span>
            </p>
            <ul className="nav justify-content-between nav-wizard nav-wizard-progress">
              <li className="nav-item">
                <a href="#create-board-tab1" className="nav-link active fw-semibold"  data-bs-toggle={"tab"} data-wizard-step={"1"}>

                </a>
              </li>
              <li className="nav-item">
                <a href="#create-board-tab2" className="nav-link fw-semibold"  data-bs-toggle={"tab"} data-wizard-step={"2"}>

                </a>
              </li>
              <li className="nav-item">
                <a href="#create-board-tab3" className="nav-link fw-semibold"  data-bs-toggle={"tab"} data-wizard-step={"3"}>

                </a>
              </li>
              <li className="nav-item">
                <a href="#create-board-tab4" className="nav-link fw-semibold"  data-bs-toggle={"tab"} data-wizard-step={"4"}>

                </a>
              </li>
              <li className="nav-item">
                <a href="#create-board-tab5" className="nav-link fw-semibold"  data-bs-toggle={"tab"} data-wizard-step={"5"}>

                </a>
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <div className="pt-4 pb-0">
              <div className="tab-content">
                <div className="tab-pane active" role="tabpanel" aria-labelledby="create-board-tab1" id="create-board-tab1">
                  <p className="mb-4">
This will be the 
                    <b>
Name
                    </b>
{" and description of your Kanban board. You and other admins can edit the name in future. The name can contain letters, numbers & punctuation. "}
                  </p>
                  <form id="createBoardForm1" noValidate data-wizard-form={"1"}>
                    <div className="form-floating">
                      <input className="form-control" type="text" name="create-board-name" id="create-boardwizard-name" placeholder="Event title" defaultValue="New Kanban Board" />
                      <label htmlFor="create-boardwizard-name">
BOARD NAME
                      </label>
                    </div>
                    <div className="form-floating mt-4">
                      <select className="form-select" name="create-board-type" id="create-boardwizard-type">
                        <option disabled value="">
Select event type
                        </option>
                        <option value="1">
technical
                        </option>
                        <option value="2">
external
                        </option>
                        <option value="3">
organizational
                        </option>
                      </select>
                      <label htmlFor="create-boardwizard-type">
BOARD TYPE
                      </label>
                    </div>
                    <div className="form-floating mt-4">
                      <textarea className="form-control" placeholder="Leave a comment here" name="create-board-message" id="create-board-wizard-des" style={{"height":"128px"} as CSSProperties} defaultValue="" />
                      <label htmlFor="create-board-wizard-des">
DESCRIPTION (OPTIONAL)
                      </label>
                    </div>
                  </form>
                </div>
                <div className="tab-pane" role="tabpanel" aria-labelledby="create-board-tab2" id="create-board-tab2">
                  <p className="mb-4">
These will be the 
                    <b>
Columns
                    </b>
 of your Kanban board. They represent discrete stages in work process. Columns can be Edited, Removed, Rearranged or Added in future.
                  </p>
                  <form id="createBoardForm2" noValidate data-wizard-form={"2"}>
                    <div className="kanban-column-item">
                      <div className="kanban-column-input-container flex-grow-1">
                        <div className="form-floating position-relative">
                          <input className="form-control" type="text" name="column1" placeholder="column1" defaultValue="Unassaigned" id="create-board-wizard-column1" />
                          <span className="fa-solid fa-bars kanban-column-icon text-body-tertiary fs-9">                          </span>
                          <label className="ps-6" htmlFor="create-board-wizard-column1">
COLUMN 1
                          </label>
                          <span className="fa-solid fa-circle-xmark text-body-tertiary text-opacity-50 position-absolute top-50 end-0 translate-middle-y me-2">                          </span>
                        </div>
                      </div>
                      <div className="ms-3">
                        <input className="kanban-color-picker" type="color" name="column1Color" defaultValue="#6E7891" id="create-board-wizard-color-column1" />
                      </div>
                    </div>
                    <div className="kanban-column-item">
                      <div className="kanban-column-input-container flex-grow-1">
                        <div className="form-floating position-relative">
                          <input className="form-control" type="text" name="column2" placeholder="column2" defaultValue="To Do" id="create-board-wizard-column2" />
                          <span className="fa-solid fa-bars kanban-column-icon text-body-tertiary fs-9">                          </span>
                          <label className="ps-6" htmlFor="create-board-wizard-column2">
COLUMN 2
                          </label>
                          <span className="fa-solid fa-circle-xmark text-body-tertiary text-opacity-50 position-absolute top-50 end-0 translate-middle-y me-2">                          </span>
                        </div>
                      </div>
                      <div className="ms-3">
                        <input className="kanban-color-picker" type="color" name="column2color" defaultValue="#25B003" id="create-board-wizard-color-column2" />
                      </div>
                    </div>
                    <div className="kanban-column-item">
                      <div className="kanban-column-input-container flex-grow-1">
                        <div className="form-floating position-relative">
                          <input className="form-control" type="text" name="column3" placeholder="column3" defaultValue="Doing" id="create-board-wizard-column3" />
                          <span className="fa-solid fa-bars kanban-column-icon text-body-tertiary fs-9">                          </span>
                          <label className="ps-6" htmlFor="create-board-wizard-column3">
COLUMN 3
                          </label>
                          <span className="fa-solid fa-circle-xmark text-body-tertiary text-opacity-50 position-absolute top-50 end-0 translate-middle-y me-2">                          </span>
                        </div>
                      </div>
                      <div className="ms-3">
                        <input className="kanban-color-picker" type="color" name="column3Color" defaultValue="#EC1F00" id="create-board-wizard-color-column3" />
                      </div>
                    </div>
                  </form>
                  <div className="d-grid">
                    <button className="btn btn-lg btn-phoenix-secondary fs-9 bg-body-highlight">
                      <span className="fas fa-plus me-2" data-fa-transform={"shrink-3"}>                      </span>
Add New Column
                    </button>
                  </div>
                </div>
                <div className="tab-pane" role="tabpanel" aria-labelledby="create-board-tab3" id="create-board-tab3">
                  <p className="mb-4">
Select a 
                    <b>
Background
                    </b>
 Colour or Image. This will also be thumbnail for your Kanban board. 
                  </p>
                  <form id="createBoardForm3" noValidate data-wizard-form={"3"}>
                    <ul className="nav nav-underline fs-9 border-bottom" id="myTab" role="tablist">
                      <li className="nav-item">
                        <a href="#tab-color" className="nav-link" id="color-tab" data-bs-toggle={"tab"}  role="tab" aria-controls="tab-color" aria-selected="true">
                          <span className="fas fa-palette me-2">                          </span>Solid color
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#tab-bg" className="nav-link" id="bg-tab" data-bs-toggle={"tab"}  role="tab" aria-controls="tab-bg" aria-selected="false">
                          <span className="fas fa-envelope me-2">                          </span>Image
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content mt-10" id="myTabContent">
                      <div className="tab-pane fade show active" id="tab-color" role="tabpanel" aria-labelledby="color-tab">
                        <div className="d-flex flex-wrap gap-3">
                          <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="#ffffff" defaultChecked name="board-bg" id="color0" />
                          <label className="btn btn-primary kanban-swatch-label kanban-swatch-btn-shadow" htmlFor="color0" style={{"backgroundColor":"#ffffff"} as CSSProperties}>                          </label>
                          <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="#F5F8FF" name="board-bg" id="color1" />
                          <label className="btn btn-primary kanban-swatch-label kanban-swatch-btn-shadow" htmlFor="color1" style={{"backgroundColor":"#F5F8FF"} as CSSProperties}>                          </label>
                          <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="#EFF2F6" name="board-bg" id="color2" />
                          <label className="btn btn-primary kanban-swatch-label kanban-swatch-btn-shadow" htmlFor="color2" style={{"backgroundColor":"#EFF2F6"} as CSSProperties}>                          </label>
                          <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="#E3E6ED" name="board-bg" id="color3" />
                          <label className="btn btn-primary kanban-swatch-label kanban-swatch-btn-shadow" htmlFor="color3" style={{"backgroundColor":"#E3E6ED"} as CSSProperties}>                          </label>
                          <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="#CBD0DD" name="board-bg" id="color4" />
                          <label className="btn btn-primary kanban-swatch-label kanban-swatch-btn-shadow" htmlFor="color4" style={{"backgroundColor":"#CBD0DD"} as CSSProperties}>                          </label>
                          <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="#85A9FF" name="board-bg" id="color5" />
                          <label className="btn btn-primary kanban-swatch-label kanban-swatch-btn-shadow" htmlFor="color5" style={{"backgroundColor":"#85A9FF"} as CSSProperties}>                          </label>
                          <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="#60C6FF" name="board-bg" id="color6" />
                          <label className="btn btn-primary kanban-swatch-label kanban-swatch-btn-shadow" htmlFor="color6" style={{"backgroundColor":"#60C6FF"} as CSSProperties}>                          </label>
                          <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="#90D67F" name="board-bg" id="color7" />
                          <label className="btn btn-primary kanban-swatch-label kanban-swatch-btn-shadow" htmlFor="color7" style={{"backgroundColor":"#90D67F"} as CSSProperties}>                          </label>
                          <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="#F48270" name="board-bg" id="color8" />
                          <label className="btn btn-primary kanban-swatch-label kanban-swatch-btn-shadow" htmlFor="color8" style={{"backgroundColor":"#F48270"} as CSSProperties}>                          </label>
                          <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="#FFCC85" name="board-bg" id="color9" />
                          <label className="btn btn-primary kanban-swatch-label kanban-swatch-btn-shadow" htmlFor="color9" style={{"backgroundColor":"#FFCC85"} as CSSProperties}>                          </label>
                          <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="#3874FF" name="board-bg" id="color10" />
                          <label className="btn btn-primary kanban-swatch-label kanban-swatch-btn-shadow" htmlFor="color10" style={{"backgroundColor":"#3874FF"} as CSSProperties}>                          </label>
                          <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="#0097EB" name="board-bg" id="color11" />
                          <label className="btn btn-primary kanban-swatch-label kanban-swatch-btn-shadow" htmlFor="color11" style={{"backgroundColor":"#0097EB"} as CSSProperties}>                          </label>
                          <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="#25B003" name="board-bg" id="color12" />
                          <label className="btn btn-primary kanban-swatch-label kanban-swatch-btn-shadow" htmlFor="color12" style={{"backgroundColor":"#25B003"} as CSSProperties}>                          </label>
                          <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="#EC1F00" name="board-bg" id="color13" />
                          <label className="btn btn-primary kanban-swatch-label kanban-swatch-btn-shadow" htmlFor="color13" style={{"backgroundColor":"#EC1F00"} as CSSProperties}>                          </label>
                          <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="#E5780B" name="board-bg" id="color14" />
                          <label className="btn btn-primary kanban-swatch-label kanban-swatch-btn-shadow" htmlFor="color14" style={{"backgroundColor":"#E5780B"} as CSSProperties}>                          </label>
                          <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="#004DFF" name="board-bg" id="color15" />
                          <label className="btn btn-primary kanban-swatch-label kanban-swatch-btn-shadow" htmlFor="color15" style={{"backgroundColor":"#004DFF"} as CSSProperties}>                          </label>
                          <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="#0080C7" name="board-bg" id="color16" />
                          <label className="btn btn-primary kanban-swatch-label kanban-swatch-btn-shadow" htmlFor="color16" style={{"backgroundColor":"#0080C7"} as CSSProperties}>                          </label>
                          <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="#23890B" name="board-bg" id="color17" />
                          <label className="btn btn-primary kanban-swatch-label kanban-swatch-btn-shadow" htmlFor="color17" style={{"backgroundColor":"#23890B"} as CSSProperties}>                          </label>
                          <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="#CC1B00" name="board-bg" id="color18" />
                          <label className="btn btn-primary kanban-swatch-label kanban-swatch-btn-shadow" htmlFor="color18" style={{"backgroundColor":"#CC1B00"} as CSSProperties}>                          </label>
                          <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="#D6700A" name="board-bg" id="color19" />
                          <label className="btn btn-primary kanban-swatch-label kanban-swatch-btn-shadow" htmlFor="color19" style={{"backgroundColor":"#D6700A"} as CSSProperties}>                          </label>
                          <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="#000000" name="board-bg" id="color20" />
                          <label className="btn btn-primary kanban-swatch-label kanban-swatch-btn-shadow" htmlFor="color20" style={{"backgroundColor":"#000000"} as CSSProperties}>                          </label>
                          <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="#222834" name="board-bg" id="color21" />
                          <label className="btn btn-primary kanban-swatch-label kanban-swatch-btn-shadow" htmlFor="color21" style={{"backgroundColor":"#222834"} as CSSProperties}>                          </label>
                          <input className="btn-check" data-custom-color-radio style={{"display":"none"} as CSSProperties} type="radio" defaultValue="#eeeeee" name="board-bg" />
                          <input className="btn-check" data-custom-color-input type="color" id="customColorInput" />
                          <label className="btn btn-outline-secondary align-self-start rounded-pill kanban-swatch-btn-shadow" htmlFor="customColorInput">
                            <span className="fas fa-plus me-2" data-fa-transform={"shrink-3"}>                            </span>
CUSTOM COLOR
                          </label>
                          <input className="btn-check kanban-swatch-radio" type="radio" data-random-color name="board-bg" defaultValue="" id="Randomcolor" />
                          <label className="btn btn-outline-danger align-self-start rounded-pill kanban-swatch-btn-shadow" htmlFor="Randomcolor">
                            <span className="fa-solid fa-shuffle me-2" data-fa-transform={"shrink-3"}>                            </span>
RANDOM
                          </label>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tab-bg" role="tabpanel" aria-labelledby="bg-tab">
                        <div className="row g-3 mb-4">
                          <div className="col-6">
                            <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="assets/img/kanban/bg1.jpg" defaultChecked name="board-img" id="img0" />
                            <label className="kanban-radio-bg-image w-100" htmlFor="img0">
                              <PhoenixImage src="/assets/img/kanban/bg1.jpg" alt="" className="me-2 cursor-pointer rounded-3 object-fit-cover w-100" />
                            </label>
                          </div>
                          <div className="col-6">
                            <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="assets/img/kanban/bg2.jpg" name="board-img" id="img1" />
                            <label className="kanban-radio-bg-image w-100" htmlFor="img1">
                              <PhoenixImage src="/assets/img/kanban/bg2.jpg" alt="" className="me-2 cursor-pointer rounded-3 object-fit-cover w-100" />
                            </label>
                          </div>
                          <div className="col-6">
                            <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="assets/img/kanban/bg3.jpg" name="board-img" id="img2" />
                            <label className="kanban-radio-bg-image w-100" htmlFor="img2">
                              <PhoenixImage src="/assets/img/kanban/bg3.jpg" alt="" className="me-2 cursor-pointer rounded-3 object-fit-cover w-100" />
                            </label>
                          </div>
                          <div className="col-6">
                            <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="assets/img/kanban/bg4.jpg" name="board-img" id="img3" />
                            <label className="kanban-radio-bg-image w-100" htmlFor="img3">
                              <PhoenixImage src="/assets/img/kanban/bg4.jpg" alt="" className="me-2 cursor-pointer rounded-3 object-fit-cover w-100" />
                            </label>
                          </div>
                          <div className="col-6">
                            <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="assets/img/kanban/bg5.jpg" name="board-img" id="img4" />
                            <label className="kanban-radio-bg-image w-100" htmlFor="img4">
                              <PhoenixImage src="/assets/img/kanban/bg5.jpg" alt="" className="me-2 cursor-pointer rounded-3 object-fit-cover w-100" />
                            </label>
                          </div>
                          <div className="col-6">
                            <input className="btn-check kanban-swatch-radio" type="radio" defaultValue="assets/img/kanban/bg6.jpg" name="board-img" id="img5" />
                            <label className="kanban-radio-bg-image w-100" htmlFor="img5">
                              <PhoenixImage src="/assets/img/kanban/bg6.jpg" alt="" className="me-2 cursor-pointer rounded-3 object-fit-cover w-100" />
                            </label>
                          </div>
                          <div className="col-12">
                            <input className="btn-check kanban-swatch-radio" type="radio" name="board-custom-image" id="boardCustomImage" />
                            <div className="dropzone dropzone-single p-0 w-100" id="dropzone" data-dropzone data-options={"{\"url\":\"valid/url\",\"maxFiles\":1,\"maxFilesize\":5,\"acceptedFiles\":\"image/*\",\"dictDefaultMessage\":\"Choose or Drop a file here\"}"}>
                              <div className="fallback">
                                <input type="file" name="file" />
                              </div>
                              <div className="dz-message text-body-tertiary text-opacity-85 text-center py-0" data-dz-message>
                                <div className="dz-message-text py-3">
or, Add a custom background
                                  <br />
                                  <PhoenixImage src="/assets/img/icons/image-icon.png" alt="" className="mt-3" width={30} />
                                </div>
                                <button className="btn dz-upload-btn border-0 position-absolute z-5 bg-black bg-opacity-50 text-white mt-3 ms-3 px-3" data-dz-message>
Change Picture
                                  <span className="fa-solid fa-camera fs-10 ms-1">                                  </span>
                                </button>
                              </div>
                              <div className="dz-preview m-0">
                                <div className="rounded-2 position-relative" style={{"height":"144px"} as CSSProperties}>
                                  <input className="btn-check kanban-swatch-radio kanban-custom-bg-radio" type="radio" defaultValue="kanban-custom-bg" name="board-img" id="kanban-custom-bg" />
                                  <label className="kanban-radio-bg-image w-100 h-100" htmlFor="kanban-custom-bg">
                                    <PhoenixImage src="/assets/img/icons/file-bg.png" alt="..." className="rounded-2 w-100 h-100 object-fit-cover" />
                                  </label>
                                  <button className="btn border-0 position-absolute top-0 end-0 z-5 bg-black bg-opacity-50 text-white mt-3 me-3 px-3 cursor-pointer" data-dz-remove>
                                    <span className="fa-solid fa-xmark cursor-pointer">                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="tab-pane" role="tabpanel" aria-labelledby="create-board-tab4" id="create-board-tab4">
                  <p className="mb-4">
These will be the 
                    <b>
Tags
                    </b>
{" for your tasks/cards of your Kanban board. Tags are labels to allow easy & simpler classification of tasks."}
                  </p>
                  <form id="createBoardForm4" noValidate data-wizard-form={"4"}>
                    <input className="d-none" name="tag1" defaultValue={"{&quot;icon&quot;:&quot;package&quot;,&quot;color&quot;:&quot;primary&quot;,&quot;text&quot;:&quot;Feature&quot;}"} />
                    <div className="position-relative kanban-tag">
                      <span className="badge badge-phoenix d-flex flex-between-center mb-5 fs-9 px-4 py-2 kanban-tag-badge badge-phoenix-primary">
                        <span className="badge-label text-capitalize lh-base">
Feature
                        </span>
                        <span className="ms-1" data-feather={"package"} style={{"height":"15.8px","width":"12.8px"} as CSSProperties}>                        </span>
                      </span>
                      <div className="position-absolute top-0 end-0 d-flex">
                        <button className="btn btn-phoenix-secondary fs-9 bg-transparent lh-1 kanban-tag-action-icons me-1" type="button">
                          <span className="fas fa-pencil" data-fa-transform={"shrink-5"}>                          </span>
                        </button>
                        <button className="btn btn-phoenix-danger fs-9 bg-transparent lh-1 kanban-tag-action-icons" type="button">
                          <span className="fas fa-trash" data-fa-transform={"shrink-5"}>                          </span>
                        </button>
                      </div>
                    </div>
                    <input className="d-none" name="tag2" defaultValue={"{&quot;icon&quot;:&quot;check&quot;,&quot;color&quot;:&quot;success&quot;,&quot;text&quot;:&quot;Completed&quot;}"} />
                    <div className="position-relative kanban-tag">
                      <span className="badge badge-phoenix d-flex flex-between-center mb-5 fs-9 px-4 py-2 kanban-tag-badge badge-phoenix-success">
                        <span className="badge-label text-capitalize lh-base">
Completed
                        </span>
                        <span className="ms-1" data-feather={"check"} style={{"height":"15.8px","width":"12.8px"} as CSSProperties}>                        </span>
                      </span>
                      <div className="position-absolute top-0 end-0 d-flex">
                        <button className="btn btn-phoenix-secondary fs-9 bg-transparent lh-1 kanban-tag-action-icons me-1" type="button">
                          <span className="fas fa-pencil" data-fa-transform={"shrink-5"}>                          </span>
                        </button>
                        <button className="btn btn-phoenix-danger fs-9 bg-transparent lh-1 kanban-tag-action-icons" type="button">
                          <span className="fas fa-trash" data-fa-transform={"shrink-5"}>                          </span>
                        </button>
                      </div>
                    </div>
                    <input className="d-none" name="tag3" defaultValue={"{&quot;icon&quot;:&quot;alert-triangle&quot;,&quot;color&quot;:&quot;warning&quot;,&quot;text&quot;:&quot;issue&quot;}"} />
                    <div className="position-relative kanban-tag">
                      <span className="badge badge-phoenix d-flex flex-between-center mb-5 fs-9 px-4 py-2 kanban-tag-badge badge-phoenix-warning">
                        <span className="badge-label text-capitalize lh-base">
issue
                        </span>
                        <span className="ms-1" data-feather={"alert-triangle"} style={{"height":"15.8px","width":"12.8px"} as CSSProperties}>                        </span>
                      </span>
                      <div className="position-absolute top-0 end-0 d-flex">
                        <button className="btn btn-phoenix-secondary fs-9 bg-transparent lh-1 kanban-tag-action-icons me-1" type="button">
                          <span className="fas fa-pencil" data-fa-transform={"shrink-5"}>                          </span>
                        </button>
                        <button className="btn btn-phoenix-danger fs-9 bg-transparent lh-1 kanban-tag-action-icons" type="button">
                          <span className="fas fa-trash" data-fa-transform={"shrink-5"}>                          </span>
                        </button>
                      </div>
                    </div>
                    <input className="d-none" name="tag4" defaultValue={"{&quot;icon&quot;:&quot;alert-octagon&quot;,&quot;color&quot;:&quot;danger&quot;,&quot;text&quot;:&quot;bug&quot;}"} />
                    <div className="position-relative kanban-tag">
                      <span className="badge badge-phoenix d-flex flex-between-center mb-5 fs-9 px-4 py-2 kanban-tag-badge badge-phoenix-danger">
                        <span className="badge-label text-capitalize lh-base">
bug
                        </span>
                        <span className="ms-1" data-feather={"alert-octagon"} style={{"height":"15.8px","width":"12.8px"} as CSSProperties}>                        </span>
                      </span>
                      <div className="position-absolute top-0 end-0 d-flex">
                        <button className="btn btn-phoenix-secondary fs-9 bg-transparent lh-1 kanban-tag-action-icons me-1" type="button">
                          <span className="fas fa-pencil" data-fa-transform={"shrink-5"}>                          </span>
                        </button>
                        <button className="btn btn-phoenix-danger fs-9 bg-transparent lh-1 kanban-tag-action-icons" type="button">
                          <span className="fas fa-trash" data-fa-transform={"shrink-5"}>                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="d-grid">
                    <button className="btn btn-phoenix-secondary fs-9 bg-body-highlight py-2 lh-base">
                      <span className="fas fa-plus me-2" data-fa-transform={"shrink-3"}>                      </span>
Create Custom Tag
                    </button>
                  </div>
                </div>
                <div className="tab-pane" role="tabpanel" aria-labelledby="create-board-tab5" id="create-board-tab5">
                  <p className="mb-4">
 Add 
                    <b>
Members
                    </b>
 or 
                    <b>
Guests
                    </b>
 to your Kanban board. They can add, edit, or move tasks in your board. Tasks can also be assigned to them.
                    <br />
                    <a href="#!" className="mb-4">
Learn more
                    </a>
                  </p>
                  <form className="kanban-radio-collapse" id="createBoardForm5" noValidate data-wizard-form={"5"}>
                    <div className="mb-4 form-check">
                      <input className="form-check-input" type="radio" defaultChecked name="accessType" defaultValue="type1" id="accessType1" data-bs-toggle={"collapse"} data-bs-target={"#collapseOne"} aria-controls="collapseOne" />
                      <label className="form-check-label" htmlFor="accessType1">
Anyone with shareable link can access
                      </label>
                      <div className="collapse accordion-collapse show" id="collapseOne" role="tabpanel" aria-labelledby="accessType1" data-bs-parent={"#createBoardForm5"} aria-expanded="true">
                        <div className="row g-3 mt-2">
                          <div className="col-md-9">
                            <div className="form-floating position-relative">
                              <input className="form-control" id="invite-link" type="text" name="shareableLink" defaultValue="https://themewagon.com/phoenix" placeholder="Shareable link" />
                              <label htmlFor="invite-link">
SHAREABLE LINK
                              </label>
                              <button className="btn btn-link position-absolute top-50 end-0 translate-middle-y text-body-quaternary text-opacity-75" id="dataCopy" type="button" data-copy={"#invite-link"} data-bs-placement={"top"} title="click to copy">
                                <span className="fa-regular fa-paste fa-lg">                                </span>
                              </button>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-floating">
                              <select className="form-select" id="guestSelect" name="role">
                                <option value="guest">
Guest
                                </option>
                                <option value="member">
Member
                                </option>
                              </select>
                              <label htmlFor="guestSelect">
ADD AS
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 form-check">
                      <input className="form-check-input" type="radio" defaultValue="type2" name="accessType" id="accessType2" data-bs-toggle={"collapse"} data-bs-target={"#collapseTwo"} aria-controls="collapseTwo" />
                      <label className="form-check-label" htmlFor="accessType2">
Only invited people can access
                      </label>
                      <div className="collapse accordion-collapse" id="collapseTwo" role="tabpanel" aria-labelledby="accessType2" data-bs-parent={"#createBoardForm5"}>
                        <div className="row g-3 mt-2">
                          <div className="col-md-9">
                            <div className="form-floating">
                              <input className="form-control" id="floatingEventInput" type="text" name="user" placeholder="Event title" />
                              <label htmlFor="floatingEventInput">
ADD PEOPLE (ID OR EMAIL)
                              </label>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-floating">
                              <select className="form-select" id="memberSelect">
                                <option value="member">
Member
                                </option>
                                <option value="admin">
Admin
                                </option>
                                <option value="developer">
Developer
                                </option>
                              </select>
                              <label htmlFor="memberSelect">
ADD AS
                              </label>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-floating">
                              <textarea className="form-control" placeholder="Leave a ME here" name="message" id="create-board-wizard-message" style={{"height":"128px"} as CSSProperties} defaultValue="" />
                              <label htmlFor="create-board-wizard-message">
ADD A MESSAGE (OPTIONAL)
                              </label>
                            </div>
                            <div className="d-grid mt-3">
                              <button className="btn btn-outline-primary">
Invite
                                <span className="fa-solid fa-envelope ms-2" data-fa-transform={"shrink-3"}>                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-top-0 mt-1">
                      <div className="d-flex pager wizard list-inline mb-0">
                        <button className="btn btn-link ps-0" type="button" data-board-prev-btn>
                          <span className="fas fa-chevron-left me-1" data-fa-transform={"shrink-3"}>                          </span>
Previous
                        </button>
                        <div className="flex-1 text-end">
                          <button className="btn btn-primary px-6 px-sm-6" type="submit">
Submit
                            <span className="fas fa-chevron-right ms-1" data-fa-transform={"shrink-3"}>                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="border-top-0 mt-10" data-wizard-footer>
            <div className="d-flex pager wizard list-inline mb-0">
              <button className="d-none btn btn-link ps-0" type="button" data-wizard-prev-btn>
                <span className="fas fa-chevron-left me-1" data-fa-transform={"shrink-3"}>                </span>
Previous
              </button>
              <div className="flex-1 text-end">
                <button className="btn btn-primary px-6 px-sm-6" type="submit" data-wizard-next-btn>
Next
                  <span className="fas fa-chevron-right ms-1" data-fa-transform={"shrink-3"}>                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-7 col-xl-6 col-12 text-center kanban-board-bg">
        <PhoenixImage src="/assets/img/kanban/board-ligth.png" alt="" className="d-dark-none mt-5 position-sticky" />
        <PhoenixImage src="/assets/img/kanban/board-dark.png" alt="" className="d-light-none position-sticky" />
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
