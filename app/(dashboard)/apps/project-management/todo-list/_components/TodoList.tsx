'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function TodoList() {
  return (
    <div suppressHydrationWarning>

    <div className="mb-9">
      <h2 className="mb-4">
Todo list
        <span className="text-body-tertiary fw-normal">
(23)
        </span>
      </h2>
      <div className="row align-items-center g-3 mb-3">
        <div className="col-sm-auto">
          <div className="search-box">
            <form className="position-relative">
              <input className="form-control search-input search" type="search" placeholder="Search tasks" aria-label="Search" />
              <span className="fas fa-search search-box-icon">              </span>
            </form>
          </div>
        </div>
        <div className="col-sm-auto">
          <div className="d-flex">
            <a href="#!" className="btn btn-link p-0 ms-sm-3 fs-9 text-body-tertiary fw-bold">
              <span className="fas fa-filter me-1 fw-extra-bold fs-10">              </span>23 tasks
            </a>
            <a href="#!" className="btn btn-link p-0 ms-3 fs-9 text-body-tertiary fw-bold">
              <span className="fas fa-sort me-1 fw-extra-bold fs-10">              </span>Sorting
            </a>
          </div>
        </div>
      </div>
      <div className="mb-4 todo-list">
        <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 cursor-pointer border-top" data-todo-offcanvas-toogle data-todo-offcanvas-target={"todoOffcanvas-1"}>
          <div className="col-12 col-md-auto flex-1">
            <div>
              <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                <input className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-0" data-event-propagation-prevent />
                <label className="form-check-label mb-0 fs-8 me-2 line-clamp-1 flex-grow-1 flex-md-grow-0 cursor-pointer">
Designing the dungeon
                </label>
                <span className="badge badge-phoenix fs-10 badge-phoenix-primary">
DRAFT
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-auto">
            <div className="d-flex ms-4 lh-1 align-items-center">
              <button className="btn btn-link p-0 text-body-tertiary fs-10 me-2">
                <span className="fas fa-paperclip me-1">                </span>
2
              </button>
              <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 mb-0">
12 Nov, 2021
              </p>
              <div className="d-none d-md-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties}>
                <div className="hover-actions end-0">
                  <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0" data-event-propagation-prevent>
                    <span className="fas fa-edit">                    </span>
                  </button>
                  <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                    <span className="fas fa-trash">                    </span>
                  </button>
                </div>
              </div>
              <div className="hover-md-hide hover-lg-show hover-xl-hide">
                <p className="text-body-tertiary fs-10 ps-md-3 border-start-md fw-bold mb-md-0 mb-0">
12:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas offcanvas-end content-offcanvas offcanvas-backdrop-transparent border-start shadow-none bg-body-highlight" tabIndex={-1} data-todo-content-offcanvas id="todoOffcanvas-1">
          <div className="offcanvas-body p-0">
            <div className="p-5 p-md-6">
              <div className="d-flex flex-between-center align-items-start gap-5 mb-4">
                <h2 className="fw-bold fs-6 mb-0 text-body-highlight">
Designing the dungeon
                </h2>
                <button className="btn btn-phoenix-secondary btn-icon px-2" type="button" data-bs-dismiss={"offcanvas"} aria-label="Close">
                  <span className="fa-solid fa-xmark">                  </span>
                </button>
              </div>
              <div className="mb-6">
                <div className="d-flex align-items-center mb-3">
                  <h4 className="text-body me-3">
Description
                  </h4>
                  <a href="#!" className="btn btn-link text-decoration-none p-0">
                    <span className="fa-solid fa-pen">                    </span>
                  </a>
                </div>
                <p className="text-body-highlight mb-0">
The female circus horse-rider is a recurring subject in Chagall’s work. In 1926 the art dealer Ambroise Vollard invited Chagall to make a project based on the circus. They visited Paris’s historic Cirque d’Hiver Bouglione together; Vollard lent Chagall his private box seats. Chagall completed 19 gouaches Chagall’s work. In 1926 the art dealer Ambroise Vollard invited Chagall to make a project based on the circus.
                </p>
              </div>
              <h4 className="mb-3">
Subtasks
              </h4>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask01" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask01">
Study Dragons
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask02" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask02">
Procrastinate a bit
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top border-bottom mb-3">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask03" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask03">
Staring at the notebook for 5 mins
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <a href="#!" className="fw-bold fs-9">
                <span className="fas fa-plus me-1">                </span>Add subtask
              </a>
            </div>
            <div className="mb-6">
              <div className="px-5 px-md-6">
                <h4 className="mb-3">
Files
                </h4>
              </div>
              <div className="border-top px-5 px-md-6 py-4">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div className="d-flex mb-1">
                      <span className="fa-solid fa-image me-2 text-body-tertiary fs-9">                      </span>
                      <p className="text-body-highlight mb-0 lh-1">
Silly_sight_1.png
                      </p>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                  <div className="d-flex fs-9 text-body-tertiary mb-2 flex-wrap">
                    <span>
768 kb
                    </span>
                    <span className="text-body-quaternary mx-1">
| 
                    </span>
                    <a href="#!">
Shantinan Mekalan 
                    </a>
                    <span className="text-body-quaternary mx-1">
| 
                    </span>
                    <span className="text-nowrap">
21st Dec, 12:56 PM
                    </span>
                  </div>
                  <PhoenixImage src="/assets/img/generic/40.png" alt="" className="rounded-2" />
                </div>
              </div>
              <div className="border-top px-5 px-md-6 py-4">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div>
                      <div className="d-flex align-items-center mb-1">
                        <span className="fa-solid fa-image me-2 fs-9 text-body-tertiary">                        </span>
                        <p className="text-body-highlight mb-0 lh-1">
All_images.zip
                        </p>
                      </div>
                      <div className="d-flex fs-9 text-body-tertiary mb-0 flex-wrap">
                        <span>
12.8 mb
                        </span>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <a href="#!">
Yves Tanguy 
                        </a>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <span className="text-nowrap">
19th Dec, 08:56 PM
                        </span>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                </div>
              </div>
              <div className="border-top px-5 px-md-6 py-4 border-bottom">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div>
                      <div className="d-flex align-items-center mb-1 flex-wrap">
                        <span className="fa-solid fa-file-lines me-2 fs-9 text-body-tertiary">                        </span>
                        <p className="text-body-highlight mb-0 lh-1">
Project.txt
                        </p>
                      </div>
                      <div className="d-flex fs-9 text-body-tertiary mb-0 flex-wrap">
                        <span>
123 kb
                        </span>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <a href="#!">
Shantinan Mekalan 
                        </a>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <span className="text-nowrap">
12th Dec, 12:56 PM
                        </span>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                </div>
              </div>
              <div className="px-5 px-md-6 my-3">
                <label className="btn btn-link p-0" htmlFor="customFile">
                  <span className="fas fa-plus me-1">                  </span>
Add file(s)
                </label>
                <input className="d-none" id="customFile" type="file" />
              </div>
            </div>
            <div className="px-5 px-md-6">
              <h4 className="mb-4 text-body-emphasis">
Others Information
              </h4>
              <h5 className="text-body-highlight mb-2">
Status
              </h5>
              <select className="form-select mb-4" aria-label="Default select example">
                <option>
Select
                </option>
                <option value="1">
One
                </option>
                <option value="2">
Two
                </option>
                <option value="3">
Three
                </option>
              </select>
              <h5 className="text-body-highlight mb-2">
Due Date
              </h5>
              <div className="flatpickr-input-container mb-4">
                <input className="form-control datetimepicker ps-6" type="text" placeholder="Set the due date" data-options={"{\"disableMobile\":true}"} />
                <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary">                </span>
              </div>
              <h5 className="text-body-highlight mb-2">
Reminder
              </h5>
              <div className="flatpickr-input-container mb-4">
                <input className="form-control datetimepicker ps-6" type="text" placeholder="Reminder" data-options={"{\"enableTime\":true,\"noCalendar\":true,\"dateFormat\":\"H:i\",\"disableMobile\":true,\"static\":true}"} />
                <span className="uil uil-bell-school flatpickr-icon text-body-tertiary">                </span>
              </div>
              <h5 className="text-body-highlight mb-2">
Tag
              </h5>
              <div className="choices-select-container mb-6">
                <select className="form-select" data-choices multiple data-options={"{\"removeItemButton\":true,\"placeholder\":true}"}>
                  <option value="">
Select organizer...
                  </option>
                  <option>
Massachusetts Institute of Technology
                  </option>
                  <option>
University of Chicago
                  </option>
                  <option>
GSAS Open Labs At Harvard
                  </option>
                  <option>
California Institute of Technology
                  </option>
                </select>
                <span className="uil uil-tag-alt choices-icon text-body-tertiary" style={{"top":"26%"} as CSSProperties}>                </span>
              </div>
              <div className="text-end mb-9">
                <button className="btn btn-phoenix-danger">
Delete Task
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 cursor-pointer border-top" data-todo-offcanvas-toogle data-todo-offcanvas-target={"todoOffcanvas-2"}>
          <div className="col-12 col-md-auto flex-1">
            <div>
              <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                <input className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-1" data-event-propagation-prevent />
                <label className="form-check-label mb-0 fs-8 me-2 line-clamp-1 flex-grow-1 flex-md-grow-0 cursor-pointer">
Hiring a motion graphic designer
                </label>
                <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
URGENT
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-auto">
            <div className="d-flex ms-4 lh-1 align-items-center">
              <button className="btn btn-link p-0 text-body-tertiary fs-10 me-2">
                <span className="fas fa-paperclip me-1">                </span>
2
              </button>
              <button className="btn btn-link p-0 text-warning fs-10 me-2">
                <span className="fas fa-tasks me-1">                </span>
3
              </button>
              <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 mb-0">
12 Nov, 2021
              </p>
              <div className="d-none d-md-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties}>
                <div className="hover-actions end-0">
                  <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0" data-event-propagation-prevent>
                    <span className="fas fa-edit">                    </span>
                  </button>
                  <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                    <span className="fas fa-trash">                    </span>
                  </button>
                </div>
              </div>
              <div className="hover-md-hide hover-lg-show hover-xl-hide">
                <p className="text-body-tertiary fs-10 ps-md-3 border-start-md fw-bold mb-md-0 mb-0">
12:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas offcanvas-end content-offcanvas offcanvas-backdrop-transparent border-start shadow-none bg-body-highlight" tabIndex={-1} data-todo-content-offcanvas id="todoOffcanvas-2">
          <div className="offcanvas-body p-0">
            <div className="p-5 p-md-6">
              <div className="d-flex flex-between-center align-items-start gap-5 mb-4">
                <h2 className="fw-bold fs-6 mb-0 text-body-highlight">
Hiring a motion graphic designer
                </h2>
                <button className="btn btn-phoenix-secondary btn-icon px-2" type="button" data-bs-dismiss={"offcanvas"} aria-label="Close">
                  <span className="fa-solid fa-xmark">                  </span>
                </button>
              </div>
              <div className="mb-6">
                <div className="d-flex align-items-center mb-3">
                  <h4 className="text-body me-3">
Description
                  </h4>
                  <a href="#!" className="btn btn-link text-decoration-none p-0">
                    <span className="fa-solid fa-pen">                    </span>
                  </a>
                </div>
                <p className="text-body-highlight mb-0">
The female circus horse-rider is a recurring subject in Chagall’s work. In 1926 the art dealer Ambroise Vollard invited Chagall to make a project based on the circus. They visited Paris’s historic Cirque d’Hiver Bouglione together; Vollard lent Chagall his private box seats. Chagall completed 19 gouaches Chagall’s work. In 1926 the art dealer Ambroise Vollard invited Chagall to make a project based on the circus.
                </p>
              </div>
              <h4 className="mb-3">
Subtasks
              </h4>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask11" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask11">
Study Dragons
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask12" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask12">
Procrastinate a bit
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top border-bottom mb-3">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask13" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask13">
Staring at the notebook for 5 mins
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <a href="#!" className="fw-bold fs-9">
                <span className="fas fa-plus me-1">                </span>Add subtask
              </a>
            </div>
            <div className="mb-6">
              <div className="px-5 px-md-6">
                <h4 className="mb-3">
Files
                </h4>
              </div>
              <div className="border-top px-5 px-md-6 py-4">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div className="d-flex mb-1">
                      <span className="fa-solid fa-image me-2 text-body-tertiary fs-9">                      </span>
                      <p className="text-body-highlight mb-0 lh-1">
Silly_sight_1.png
                      </p>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                  <div className="d-flex fs-9 text-body-tertiary mb-2 flex-wrap">
                    <span>
768 kb
                    </span>
                    <span className="text-body-quaternary mx-1">
| 
                    </span>
                    <a href="#!">
Shantinan Mekalan 
                    </a>
                    <span className="text-body-quaternary mx-1">
| 
                    </span>
                    <span className="text-nowrap">
21st Dec, 12:56 PM
                    </span>
                  </div>
                  <PhoenixImage src="/assets/img/generic/40.png" alt="" className="rounded-2" />
                </div>
              </div>
              <div className="border-top px-5 px-md-6 py-4">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div>
                      <div className="d-flex align-items-center mb-1">
                        <span className="fa-solid fa-image me-2 fs-9 text-body-tertiary">                        </span>
                        <p className="text-body-highlight mb-0 lh-1">
All_images.zip
                        </p>
                      </div>
                      <div className="d-flex fs-9 text-body-tertiary mb-0 flex-wrap">
                        <span>
12.8 mb
                        </span>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <a href="#!">
Yves Tanguy 
                        </a>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <span className="text-nowrap">
19th Dec, 08:56 PM
                        </span>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                </div>
              </div>
              <div className="border-top px-5 px-md-6 py-4 border-bottom">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div>
                      <div className="d-flex align-items-center mb-1 flex-wrap">
                        <span className="fa-solid fa-file-lines me-2 fs-9 text-body-tertiary">                        </span>
                        <p className="text-body-highlight mb-0 lh-1">
Project.txt
                        </p>
                      </div>
                      <div className="d-flex fs-9 text-body-tertiary mb-0 flex-wrap">
                        <span>
123 kb
                        </span>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <a href="#!">
Shantinan Mekalan 
                        </a>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <span className="text-nowrap">
12th Dec, 12:56 PM
                        </span>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                </div>
              </div>
              <div className="px-5 px-md-6 my-3">
                <label className="btn btn-link p-0" htmlFor="customFile">
                  <span className="fas fa-plus me-1">                  </span>
Add file(s)
                </label>
                <input className="d-none" id="customFile" type="file" />
              </div>
            </div>
            <div className="px-5 px-md-6">
              <h4 className="mb-4 text-body-emphasis">
Others Information
              </h4>
              <h5 className="text-body-highlight mb-2">
Status
              </h5>
              <select className="form-select mb-4" aria-label="Default select example">
                <option>
Select
                </option>
                <option value="1">
One
                </option>
                <option value="2">
Two
                </option>
                <option value="3">
Three
                </option>
              </select>
              <h5 className="text-body-highlight mb-2">
Due Date
              </h5>
              <div className="flatpickr-input-container mb-4">
                <input className="form-control datetimepicker ps-6" type="text" placeholder="Set the due date" data-options={"{\"disableMobile\":true}"} />
                <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary">                </span>
              </div>
              <h5 className="text-body-highlight mb-2">
Reminder
              </h5>
              <div className="flatpickr-input-container mb-4">
                <input className="form-control datetimepicker ps-6" type="text" placeholder="Reminder" data-options={"{\"enableTime\":true,\"noCalendar\":true,\"dateFormat\":\"H:i\",\"disableMobile\":true,\"static\":true}"} />
                <span className="uil uil-bell-school flatpickr-icon text-body-tertiary">                </span>
              </div>
              <h5 className="text-body-highlight mb-2">
Tag
              </h5>
              <div className="choices-select-container mb-6">
                <select className="form-select" data-choices multiple data-options={"{\"removeItemButton\":true,\"placeholder\":true}"}>
                  <option value="">
Select organizer...
                  </option>
                  <option>
Massachusetts Institute of Technology
                  </option>
                  <option>
University of Chicago
                  </option>
                  <option>
GSAS Open Labs At Harvard
                  </option>
                  <option>
California Institute of Technology
                  </option>
                </select>
                <span className="uil uil-tag-alt choices-icon text-body-tertiary" style={{"top":"26%"} as CSSProperties}>                </span>
              </div>
              <div className="text-end mb-9">
                <button className="btn btn-phoenix-danger">
Delete Task
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 cursor-pointer border-top" data-todo-offcanvas-toogle data-todo-offcanvas-target={"todoOffcanvas-3"}>
          <div className="col-12 col-md-auto flex-1">
            <div>
              <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                <input className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-2" data-event-propagation-prevent />
                <label className="form-check-label mb-0 fs-8 me-2 line-clamp-1 flex-grow-1 flex-md-grow-0 cursor-pointer">
Daily Meetings Purpose, participants
                </label>
                <span className="badge badge-phoenix fs-10 badge-phoenix-info">
ON PROCESS
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-auto">
            <div className="d-flex ms-4 lh-1 align-items-center">
              <button className="btn btn-link p-0 text-body-tertiary fs-10 me-2">
                <span className="fas fa-paperclip me-1">                </span>
4
              </button>
              <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 mb-0">
12 Dec, 2021
              </p>
              <div className="d-none d-md-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties}>
                <div className="hover-actions end-0">
                  <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0" data-event-propagation-prevent>
                    <span className="fas fa-edit">                    </span>
                  </button>
                  <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                    <span className="fas fa-trash">                    </span>
                  </button>
                </div>
              </div>
              <div className="hover-md-hide hover-lg-show hover-xl-hide">
                <p className="text-body-tertiary fs-10 ps-md-3 border-start-md fw-bold mb-md-0 mb-0">
05:00 AM
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas offcanvas-end content-offcanvas offcanvas-backdrop-transparent border-start shadow-none bg-body-highlight" tabIndex={-1} data-todo-content-offcanvas id="todoOffcanvas-3">
          <div className="offcanvas-body p-0">
            <div className="p-5 p-md-6">
              <div className="d-flex flex-between-center align-items-start gap-5 mb-4">
                <h2 className="fw-bold fs-6 mb-0 text-body-highlight">
Daily Meetings Purpose, participants
                </h2>
                <button className="btn btn-phoenix-secondary btn-icon px-2" type="button" data-bs-dismiss={"offcanvas"} aria-label="Close">
                  <span className="fa-solid fa-xmark">                  </span>
                </button>
              </div>
              <div className="mb-6">
                <div className="d-flex align-items-center mb-3">
                  <h4 className="text-body me-3">
Description
                  </h4>
                  <a href="#!" className="btn btn-link text-decoration-none p-0">
                    <span className="fa-solid fa-pen">                    </span>
                  </a>
                </div>
                <p className="text-body-highlight mb-0">
The female circus horse-rider is a recurring subject in Chagall’s work. In 1926 the art dealer Ambroise Vollard invited Chagall to make a project based on the circus. They visited Paris’s historic Cirque d’Hiver Bouglione together; Vollard lent Chagall his private box seats. Chagall completed 19 gouaches Chagall’s work. In 1926 the art dealer Ambroise Vollard invited Chagall to make a project based on the circus.
                </p>
              </div>
              <h4 className="mb-3">
Subtasks
              </h4>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask21" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask21">
Study Dragons
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask22" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask22">
Procrastinate a bit
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top border-bottom mb-3">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask23" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask23">
Staring at the notebook for 5 mins
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <a href="#!" className="fw-bold fs-9">
                <span className="fas fa-plus me-1">                </span>Add subtask
              </a>
            </div>
            <div className="mb-6">
              <div className="px-5 px-md-6">
                <h4 className="mb-3">
Files
                </h4>
              </div>
              <div className="border-top px-5 px-md-6 py-4">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div className="d-flex mb-1">
                      <span className="fa-solid fa-image me-2 text-body-tertiary fs-9">                      </span>
                      <p className="text-body-highlight mb-0 lh-1">
Silly_sight_1.png
                      </p>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                  <div className="d-flex fs-9 text-body-tertiary mb-2 flex-wrap">
                    <span>
768 kb
                    </span>
                    <span className="text-body-quaternary mx-1">
| 
                    </span>
                    <a href="#!">
Shantinan Mekalan 
                    </a>
                    <span className="text-body-quaternary mx-1">
| 
                    </span>
                    <span className="text-nowrap">
21st Dec, 12:56 PM
                    </span>
                  </div>
                  <PhoenixImage src="/assets/img/generic/40.png" alt="" className="rounded-2" />
                </div>
              </div>
              <div className="border-top px-5 px-md-6 py-4">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div>
                      <div className="d-flex align-items-center mb-1">
                        <span className="fa-solid fa-image me-2 fs-9 text-body-tertiary">                        </span>
                        <p className="text-body-highlight mb-0 lh-1">
All_images.zip
                        </p>
                      </div>
                      <div className="d-flex fs-9 text-body-tertiary mb-0 flex-wrap">
                        <span>
12.8 mb
                        </span>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <a href="#!">
Yves Tanguy 
                        </a>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <span className="text-nowrap">
19th Dec, 08:56 PM
                        </span>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                </div>
              </div>
              <div className="border-top px-5 px-md-6 py-4 border-bottom">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div>
                      <div className="d-flex align-items-center mb-1 flex-wrap">
                        <span className="fa-solid fa-file-lines me-2 fs-9 text-body-tertiary">                        </span>
                        <p className="text-body-highlight mb-0 lh-1">
Project.txt
                        </p>
                      </div>
                      <div className="d-flex fs-9 text-body-tertiary mb-0 flex-wrap">
                        <span>
123 kb
                        </span>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <a href="#!">
Shantinan Mekalan 
                        </a>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <span className="text-nowrap">
12th Dec, 12:56 PM
                        </span>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                </div>
              </div>
              <div className="px-5 px-md-6 my-3">
                <label className="btn btn-link p-0" htmlFor="customFile">
                  <span className="fas fa-plus me-1">                  </span>
Add file(s)
                </label>
                <input className="d-none" id="customFile" type="file" />
              </div>
            </div>
            <div className="px-5 px-md-6">
              <h4 className="mb-4 text-body-emphasis">
Others Information
              </h4>
              <h5 className="text-body-highlight mb-2">
Status
              </h5>
              <select className="form-select mb-4" aria-label="Default select example">
                <option>
Select
                </option>
                <option value="1">
One
                </option>
                <option value="2">
Two
                </option>
                <option value="3">
Three
                </option>
              </select>
              <h5 className="text-body-highlight mb-2">
Due Date
              </h5>
              <div className="flatpickr-input-container mb-4">
                <input className="form-control datetimepicker ps-6" type="text" placeholder="Set the due date" data-options={"{\"disableMobile\":true}"} />
                <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary">                </span>
              </div>
              <h5 className="text-body-highlight mb-2">
Reminder
              </h5>
              <div className="flatpickr-input-container mb-4">
                <input className="form-control datetimepicker ps-6" type="text" placeholder="Reminder" data-options={"{\"enableTime\":true,\"noCalendar\":true,\"dateFormat\":\"H:i\",\"disableMobile\":true,\"static\":true}"} />
                <span className="uil uil-bell-school flatpickr-icon text-body-tertiary">                </span>
              </div>
              <h5 className="text-body-highlight mb-2">
Tag
              </h5>
              <div className="choices-select-container mb-6">
                <select className="form-select" data-choices multiple data-options={"{\"removeItemButton\":true,\"placeholder\":true}"}>
                  <option value="">
Select organizer...
                  </option>
                  <option>
Massachusetts Institute of Technology
                  </option>
                  <option>
University of Chicago
                  </option>
                  <option>
GSAS Open Labs At Harvard
                  </option>
                  <option>
California Institute of Technology
                  </option>
                </select>
                <span className="uil uil-tag-alt choices-icon text-body-tertiary" style={{"top":"26%"} as CSSProperties}>                </span>
              </div>
              <div className="text-end mb-9">
                <button className="btn btn-phoenix-danger">
Delete Task
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 cursor-pointer border-top" data-todo-offcanvas-toogle data-todo-offcanvas-target={"todoOffcanvas-4"}>
          <div className="col-12 col-md-auto flex-1">
            <div>
              <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                <input className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-3" data-event-propagation-prevent />
                <label className="form-check-label mb-0 fs-8 me-2 line-clamp-1 flex-grow-1 flex-md-grow-0 cursor-pointer">
Finalizing the geometric shapes
                </label>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-auto">
            <div className="d-flex ms-4 lh-1 align-items-center">
              <button className="btn btn-link p-0 text-body-tertiary fs-10 me-2">
                <span className="fas fa-paperclip me-1">                </span>
3
              </button>
              <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 mb-0">
12 Nov, 2021
              </p>
              <div className="d-none d-md-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties}>
                <div className="hover-actions end-0">
                  <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0" data-event-propagation-prevent>
                    <span className="fas fa-edit">                    </span>
                  </button>
                  <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                    <span className="fas fa-trash">                    </span>
                  </button>
                </div>
              </div>
              <div className="hover-md-hide hover-lg-show hover-xl-hide">
                <p className="text-body-tertiary fs-10 ps-md-3 border-start-md fw-bold mb-md-0 mb-0">
12:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas offcanvas-end content-offcanvas offcanvas-backdrop-transparent border-start shadow-none bg-body-highlight" tabIndex={-1} data-todo-content-offcanvas id="todoOffcanvas-4">
          <div className="offcanvas-body p-0">
            <div className="p-5 p-md-6">
              <div className="d-flex flex-between-center align-items-start gap-5 mb-4">
                <h2 className="fw-bold fs-6 mb-0 text-body-highlight">
Finalizing the geometric shapes
                </h2>
                <button className="btn btn-phoenix-secondary btn-icon px-2" type="button" data-bs-dismiss={"offcanvas"} aria-label="Close">
                  <span className="fa-solid fa-xmark">                  </span>
                </button>
              </div>
              <div className="mb-6">
                <div className="d-flex align-items-center mb-3">
                  <h4 className="text-body me-3">
Description
                  </h4>
                  <a href="#!" className="btn btn-link text-decoration-none p-0">
                    <span className="fa-solid fa-pen">                    </span>
                  </a>
                </div>
                <p className="text-body-highlight mb-0">
The female circus horse-rider is a recurring subject in Chagall’s work. In 1926 the art dealer Ambroise Vollard invited Chagall to make a project based on the circus. They visited Paris’s historic Cirque d’Hiver Bouglione together; Vollard lent Chagall his private box seats. Chagall completed 19 gouaches Chagall’s work. In 1926 the art dealer Ambroise Vollard invited Chagall to make a project based on the circus.
                </p>
              </div>
              <h4 className="mb-3">
Subtasks
              </h4>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask31" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask31">
Study Dragons
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask32" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask32">
Procrastinate a bit
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top border-bottom mb-3">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask33" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask33">
Staring at the notebook for 5 mins
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <a href="#!" className="fw-bold fs-9">
                <span className="fas fa-plus me-1">                </span>Add subtask
              </a>
            </div>
            <div className="mb-6">
              <div className="px-5 px-md-6">
                <h4 className="mb-3">
Files
                </h4>
              </div>
              <div className="border-top px-5 px-md-6 py-4">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div className="d-flex mb-1">
                      <span className="fa-solid fa-image me-2 text-body-tertiary fs-9">                      </span>
                      <p className="text-body-highlight mb-0 lh-1">
Silly_sight_1.png
                      </p>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                  <div className="d-flex fs-9 text-body-tertiary mb-2 flex-wrap">
                    <span>
768 kb
                    </span>
                    <span className="text-body-quaternary mx-1">
| 
                    </span>
                    <a href="#!">
Shantinan Mekalan 
                    </a>
                    <span className="text-body-quaternary mx-1">
| 
                    </span>
                    <span className="text-nowrap">
21st Dec, 12:56 PM
                    </span>
                  </div>
                  <PhoenixImage src="/assets/img/generic/40.png" alt="" className="rounded-2" />
                </div>
              </div>
              <div className="border-top px-5 px-md-6 py-4">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div>
                      <div className="d-flex align-items-center mb-1">
                        <span className="fa-solid fa-image me-2 fs-9 text-body-tertiary">                        </span>
                        <p className="text-body-highlight mb-0 lh-1">
All_images.zip
                        </p>
                      </div>
                      <div className="d-flex fs-9 text-body-tertiary mb-0 flex-wrap">
                        <span>
12.8 mb
                        </span>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <a href="#!">
Yves Tanguy 
                        </a>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <span className="text-nowrap">
19th Dec, 08:56 PM
                        </span>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                </div>
              </div>
              <div className="border-top px-5 px-md-6 py-4 border-bottom">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div>
                      <div className="d-flex align-items-center mb-1 flex-wrap">
                        <span className="fa-solid fa-file-lines me-2 fs-9 text-body-tertiary">                        </span>
                        <p className="text-body-highlight mb-0 lh-1">
Project.txt
                        </p>
                      </div>
                      <div className="d-flex fs-9 text-body-tertiary mb-0 flex-wrap">
                        <span>
123 kb
                        </span>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <a href="#!">
Shantinan Mekalan 
                        </a>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <span className="text-nowrap">
12th Dec, 12:56 PM
                        </span>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                </div>
              </div>
              <div className="px-5 px-md-6 my-3">
                <label className="btn btn-link p-0" htmlFor="customFile">
                  <span className="fas fa-plus me-1">                  </span>
Add file(s)
                </label>
                <input className="d-none" id="customFile" type="file" />
              </div>
            </div>
            <div className="px-5 px-md-6">
              <h4 className="mb-4 text-body-emphasis">
Others Information
              </h4>
              <h5 className="text-body-highlight mb-2">
Status
              </h5>
              <select className="form-select mb-4" aria-label="Default select example">
                <option>
Select
                </option>
                <option value="1">
One
                </option>
                <option value="2">
Two
                </option>
                <option value="3">
Three
                </option>
              </select>
              <h5 className="text-body-highlight mb-2">
Due Date
              </h5>
              <div className="flatpickr-input-container mb-4">
                <input className="form-control datetimepicker ps-6" type="text" placeholder="Set the due date" data-options={"{\"disableMobile\":true}"} />
                <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary">                </span>
              </div>
              <h5 className="text-body-highlight mb-2">
Reminder
              </h5>
              <div className="flatpickr-input-container mb-4">
                <input className="form-control datetimepicker ps-6" type="text" placeholder="Reminder" data-options={"{\"enableTime\":true,\"noCalendar\":true,\"dateFormat\":\"H:i\",\"disableMobile\":true,\"static\":true}"} />
                <span className="uil uil-bell-school flatpickr-icon text-body-tertiary">                </span>
              </div>
              <h5 className="text-body-highlight mb-2">
Tag
              </h5>
              <div className="choices-select-container mb-6">
                <select className="form-select" data-choices multiple data-options={"{\"removeItemButton\":true,\"placeholder\":true}"}>
                  <option value="">
Select organizer...
                  </option>
                  <option>
Massachusetts Institute of Technology
                  </option>
                  <option>
University of Chicago
                  </option>
                  <option>
GSAS Open Labs At Harvard
                  </option>
                  <option>
California Institute of Technology
                  </option>
                </select>
                <span className="uil uil-tag-alt choices-icon text-body-tertiary" style={{"top":"26%"} as CSSProperties}>                </span>
              </div>
              <div className="text-end mb-9">
                <button className="btn btn-phoenix-danger">
Delete Task
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 cursor-pointer border-top" data-todo-offcanvas-toogle data-todo-offcanvas-target={"todoOffcanvas-5"}>
          <div className="col-12 col-md-auto flex-1">
            <div>
              <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                <input className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-4" data-event-propagation-prevent />
                <label className="form-check-label mb-0 fs-8 me-2 line-clamp-1 flex-grow-1 flex-md-grow-0 cursor-pointer">
Daily meeting with team members
                </label>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-auto">
            <div className="d-flex ms-4 lh-1 align-items-center">
              <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 mb-0">
1 Nov, 2021
              </p>
              <div className="d-none d-md-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties}>
                <div className="hover-actions end-0">
                  <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0" data-event-propagation-prevent>
                    <span className="fas fa-edit">                    </span>
                  </button>
                  <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                    <span className="fas fa-trash">                    </span>
                  </button>
                </div>
              </div>
              <div className="hover-md-hide hover-lg-show hover-xl-hide">
                <p className="text-body-tertiary fs-10 ps-md-3 border-start-md fw-bold mb-md-0 mb-0">
12:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas offcanvas-end content-offcanvas offcanvas-backdrop-transparent border-start shadow-none bg-body-highlight" tabIndex={-1} data-todo-content-offcanvas id="todoOffcanvas-5">
          <div className="offcanvas-body p-0">
            <div className="p-5 p-md-6">
              <div className="d-flex flex-between-center align-items-start gap-5 mb-4">
                <h2 className="fw-bold fs-6 mb-0 text-body-highlight">
Daily meeting with team members
                </h2>
                <button className="btn btn-phoenix-secondary btn-icon px-2" type="button" data-bs-dismiss={"offcanvas"} aria-label="Close">
                  <span className="fa-solid fa-xmark">                  </span>
                </button>
              </div>
              <div className="mb-6">
                <div className="d-flex align-items-center mb-3">
                  <h4 className="text-body me-3">
Description
                  </h4>
                  <a href="#!" className="btn btn-link text-decoration-none p-0">
                    <span className="fa-solid fa-pen">                    </span>
                  </a>
                </div>
                <p className="text-body-highlight mb-0">
The female circus horse-rider is a recurring subject in Chagall’s work. In 1926 the art dealer Ambroise Vollard invited Chagall to make a project based on the circus. They visited Paris’s historic Cirque d’Hiver Bouglione together; Vollard lent Chagall his private box seats. Chagall completed 19 gouaches Chagall’s work. In 1926 the art dealer Ambroise Vollard invited Chagall to make a project based on the circus.
                </p>
              </div>
              <h4 className="mb-3">
Subtasks
              </h4>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask41" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask41">
Study Dragons
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask42" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask42">
Procrastinate a bit
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top border-bottom mb-3">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask43" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask43">
Staring at the notebook for 5 mins
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <a href="#!" className="fw-bold fs-9">
                <span className="fas fa-plus me-1">                </span>Add subtask
              </a>
            </div>
            <div className="mb-6">
              <div className="px-5 px-md-6">
                <h4 className="mb-3">
Files
                </h4>
              </div>
              <div className="border-top px-5 px-md-6 py-4">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div className="d-flex mb-1">
                      <span className="fa-solid fa-image me-2 text-body-tertiary fs-9">                      </span>
                      <p className="text-body-highlight mb-0 lh-1">
Silly_sight_1.png
                      </p>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                  <div className="d-flex fs-9 text-body-tertiary mb-2 flex-wrap">
                    <span>
768 kb
                    </span>
                    <span className="text-body-quaternary mx-1">
| 
                    </span>
                    <a href="#!">
Shantinan Mekalan 
                    </a>
                    <span className="text-body-quaternary mx-1">
| 
                    </span>
                    <span className="text-nowrap">
21st Dec, 12:56 PM
                    </span>
                  </div>
                  <PhoenixImage src="/assets/img/generic/40.png" alt="" className="rounded-2" />
                </div>
              </div>
              <div className="border-top px-5 px-md-6 py-4">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div>
                      <div className="d-flex align-items-center mb-1">
                        <span className="fa-solid fa-image me-2 fs-9 text-body-tertiary">                        </span>
                        <p className="text-body-highlight mb-0 lh-1">
All_images.zip
                        </p>
                      </div>
                      <div className="d-flex fs-9 text-body-tertiary mb-0 flex-wrap">
                        <span>
12.8 mb
                        </span>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <a href="#!">
Yves Tanguy 
                        </a>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <span className="text-nowrap">
19th Dec, 08:56 PM
                        </span>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                </div>
              </div>
              <div className="border-top px-5 px-md-6 py-4 border-bottom">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div>
                      <div className="d-flex align-items-center mb-1 flex-wrap">
                        <span className="fa-solid fa-file-lines me-2 fs-9 text-body-tertiary">                        </span>
                        <p className="text-body-highlight mb-0 lh-1">
Project.txt
                        </p>
                      </div>
                      <div className="d-flex fs-9 text-body-tertiary mb-0 flex-wrap">
                        <span>
123 kb
                        </span>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <a href="#!">
Shantinan Mekalan 
                        </a>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <span className="text-nowrap">
12th Dec, 12:56 PM
                        </span>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                </div>
              </div>
              <div className="px-5 px-md-6 my-3">
                <label className="btn btn-link p-0" htmlFor="customFile">
                  <span className="fas fa-plus me-1">                  </span>
Add file(s)
                </label>
                <input className="d-none" id="customFile" type="file" />
              </div>
            </div>
            <div className="px-5 px-md-6">
              <h4 className="mb-4 text-body-emphasis">
Others Information
              </h4>
              <h5 className="text-body-highlight mb-2">
Status
              </h5>
              <select className="form-select mb-4" aria-label="Default select example">
                <option>
Select
                </option>
                <option value="1">
One
                </option>
                <option value="2">
Two
                </option>
                <option value="3">
Three
                </option>
              </select>
              <h5 className="text-body-highlight mb-2">
Due Date
              </h5>
              <div className="flatpickr-input-container mb-4">
                <input className="form-control datetimepicker ps-6" type="text" placeholder="Set the due date" data-options={"{\"disableMobile\":true}"} />
                <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary">                </span>
              </div>
              <h5 className="text-body-highlight mb-2">
Reminder
              </h5>
              <div className="flatpickr-input-container mb-4">
                <input className="form-control datetimepicker ps-6" type="text" placeholder="Reminder" data-options={"{\"enableTime\":true,\"noCalendar\":true,\"dateFormat\":\"H:i\",\"disableMobile\":true,\"static\":true}"} />
                <span className="uil uil-bell-school flatpickr-icon text-body-tertiary">                </span>
              </div>
              <h5 className="text-body-highlight mb-2">
Tag
              </h5>
              <div className="choices-select-container mb-6">
                <select className="form-select" data-choices multiple data-options={"{\"removeItemButton\":true,\"placeholder\":true}"}>
                  <option value="">
Select organizer...
                  </option>
                  <option>
Massachusetts Institute of Technology
                  </option>
                  <option>
University of Chicago
                  </option>
                  <option>
GSAS Open Labs At Harvard
                  </option>
                  <option>
California Institute of Technology
                  </option>
                </select>
                <span className="uil uil-tag-alt choices-icon text-body-tertiary" style={{"top":"26%"} as CSSProperties}>                </span>
              </div>
              <div className="text-end mb-9">
                <button className="btn btn-phoenix-danger">
Delete Task
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 cursor-pointer border-top" data-todo-offcanvas-toogle data-todo-offcanvas-target={"todoOffcanvas-6"}>
          <div className="col-12 col-md-auto flex-1">
            <div>
              <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                <input className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-5" data-event-propagation-prevent />
                <label className="form-check-label mb-0 fs-8 me-2 line-clamp-1 flex-grow-1 flex-md-grow-0 cursor-pointer">
Daily Standup Meetings
                </label>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-auto">
            <div className="d-flex ms-4 lh-1 align-items-center">
              <button className="btn btn-link p-0 text-warning fs-10 me-2">
                <span className="fas fa-tasks me-1">                </span>
4
              </button>
              <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 mb-0">
13 Nov, 2021
              </p>
              <div className="d-none d-md-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties}>
                <div className="hover-actions end-0">
                  <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0" data-event-propagation-prevent>
                    <span className="fas fa-edit">                    </span>
                  </button>
                  <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                    <span className="fas fa-trash">                    </span>
                  </button>
                </div>
              </div>
              <div className="hover-md-hide hover-lg-show hover-xl-hide">
                <p className="text-body-tertiary fs-10 ps-md-3 border-start-md fw-bold mb-md-0 mb-0">
10:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas offcanvas-end content-offcanvas offcanvas-backdrop-transparent border-start shadow-none bg-body-highlight" tabIndex={-1} data-todo-content-offcanvas id="todoOffcanvas-6">
          <div className="offcanvas-body p-0">
            <div className="p-5 p-md-6">
              <div className="d-flex flex-between-center align-items-start gap-5 mb-4">
                <h2 className="fw-bold fs-6 mb-0 text-body-highlight">
Daily Standup Meetings
                </h2>
                <button className="btn btn-phoenix-secondary btn-icon px-2" type="button" data-bs-dismiss={"offcanvas"} aria-label="Close">
                  <span className="fa-solid fa-xmark">                  </span>
                </button>
              </div>
              <div className="mb-6">
                <div className="d-flex align-items-center mb-3">
                  <h4 className="text-body me-3">
Description
                  </h4>
                  <a href="#!" className="btn btn-link text-decoration-none p-0">
                    <span className="fa-solid fa-pen">                    </span>
                  </a>
                </div>
                <p className="text-body-highlight mb-0">
The female circus horse-rider is a recurring subject in Chagall’s work. In 1926 the art dealer Ambroise Vollard invited Chagall to make a project based on the circus. They visited Paris’s historic Cirque d’Hiver Bouglione together; Vollard lent Chagall his private box seats. Chagall completed 19 gouaches Chagall’s work. In 1926 the art dealer Ambroise Vollard invited Chagall to make a project based on the circus.
                </p>
              </div>
              <h4 className="mb-3">
Subtasks
              </h4>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask51" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask51">
Study Dragons
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask52" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask52">
Procrastinate a bit
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top border-bottom mb-3">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask53" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask53">
Staring at the notebook for 5 mins
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <a href="#!" className="fw-bold fs-9">
                <span className="fas fa-plus me-1">                </span>Add subtask
              </a>
            </div>
            <div className="mb-6">
              <div className="px-5 px-md-6">
                <h4 className="mb-3">
Files
                </h4>
              </div>
              <div className="border-top px-5 px-md-6 py-4">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div className="d-flex mb-1">
                      <span className="fa-solid fa-image me-2 text-body-tertiary fs-9">                      </span>
                      <p className="text-body-highlight mb-0 lh-1">
Silly_sight_1.png
                      </p>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                  <div className="d-flex fs-9 text-body-tertiary mb-2 flex-wrap">
                    <span>
768 kb
                    </span>
                    <span className="text-body-quaternary mx-1">
| 
                    </span>
                    <a href="#!">
Shantinan Mekalan 
                    </a>
                    <span className="text-body-quaternary mx-1">
| 
                    </span>
                    <span className="text-nowrap">
21st Dec, 12:56 PM
                    </span>
                  </div>
                  <PhoenixImage src="/assets/img/generic/40.png" alt="" className="rounded-2" />
                </div>
              </div>
              <div className="border-top px-5 px-md-6 py-4">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div>
                      <div className="d-flex align-items-center mb-1">
                        <span className="fa-solid fa-image me-2 fs-9 text-body-tertiary">                        </span>
                        <p className="text-body-highlight mb-0 lh-1">
All_images.zip
                        </p>
                      </div>
                      <div className="d-flex fs-9 text-body-tertiary mb-0 flex-wrap">
                        <span>
12.8 mb
                        </span>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <a href="#!">
Yves Tanguy 
                        </a>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <span className="text-nowrap">
19th Dec, 08:56 PM
                        </span>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                </div>
              </div>
              <div className="border-top px-5 px-md-6 py-4 border-bottom">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div>
                      <div className="d-flex align-items-center mb-1 flex-wrap">
                        <span className="fa-solid fa-file-lines me-2 fs-9 text-body-tertiary">                        </span>
                        <p className="text-body-highlight mb-0 lh-1">
Project.txt
                        </p>
                      </div>
                      <div className="d-flex fs-9 text-body-tertiary mb-0 flex-wrap">
                        <span>
123 kb
                        </span>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <a href="#!">
Shantinan Mekalan 
                        </a>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <span className="text-nowrap">
12th Dec, 12:56 PM
                        </span>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                </div>
              </div>
              <div className="px-5 px-md-6 my-3">
                <label className="btn btn-link p-0" htmlFor="customFile">
                  <span className="fas fa-plus me-1">                  </span>
Add file(s)
                </label>
                <input className="d-none" id="customFile" type="file" />
              </div>
            </div>
            <div className="px-5 px-md-6">
              <h4 className="mb-4 text-body-emphasis">
Others Information
              </h4>
              <h5 className="text-body-highlight mb-2">
Status
              </h5>
              <select className="form-select mb-4" aria-label="Default select example">
                <option>
Select
                </option>
                <option value="1">
One
                </option>
                <option value="2">
Two
                </option>
                <option value="3">
Three
                </option>
              </select>
              <h5 className="text-body-highlight mb-2">
Due Date
              </h5>
              <div className="flatpickr-input-container mb-4">
                <input className="form-control datetimepicker ps-6" type="text" placeholder="Set the due date" data-options={"{\"disableMobile\":true}"} />
                <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary">                </span>
              </div>
              <h5 className="text-body-highlight mb-2">
Reminder
              </h5>
              <div className="flatpickr-input-container mb-4">
                <input className="form-control datetimepicker ps-6" type="text" placeholder="Reminder" data-options={"{\"enableTime\":true,\"noCalendar\":true,\"dateFormat\":\"H:i\",\"disableMobile\":true,\"static\":true}"} />
                <span className="uil uil-bell-school flatpickr-icon text-body-tertiary">                </span>
              </div>
              <h5 className="text-body-highlight mb-2">
Tag
              </h5>
              <div className="choices-select-container mb-6">
                <select className="form-select" data-choices multiple data-options={"{\"removeItemButton\":true,\"placeholder\":true}"}>
                  <option value="">
Select organizer...
                  </option>
                  <option>
Massachusetts Institute of Technology
                  </option>
                  <option>
University of Chicago
                  </option>
                  <option>
GSAS Open Labs At Harvard
                  </option>
                  <option>
California Institute of Technology
                  </option>
                </select>
                <span className="uil uil-tag-alt choices-icon text-body-tertiary" style={{"top":"26%"} as CSSProperties}>                </span>
              </div>
              <div className="text-end mb-9">
                <button className="btn btn-phoenix-danger">
Delete Task
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 cursor-pointer border-top" data-todo-offcanvas-toogle data-todo-offcanvas-target={"todoOffcanvas-7"}>
          <div className="col-12 col-md-auto flex-1">
            <div>
              <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                <input className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-6" data-event-propagation-prevent />
                <label className="form-check-label mb-0 fs-8 me-2 line-clamp-1 flex-grow-1 flex-md-grow-0 cursor-pointer">
Procrastinate for a month
                </label>
                <span className="badge badge-phoenix fs-10 badge-phoenix-info">
ON PROCESS
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-auto">
            <div className="d-flex ms-4 lh-1 align-items-center">
              <button className="btn btn-link p-0 text-body-tertiary fs-10 me-2">
                <span className="fas fa-paperclip me-1">                </span>
3
              </button>
              <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 mb-0">
12 Nov, 2021
              </p>
              <div className="d-none d-md-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties}>
                <div className="hover-actions end-0">
                  <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0" data-event-propagation-prevent>
                    <span className="fas fa-edit">                    </span>
                  </button>
                  <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                    <span className="fas fa-trash">                    </span>
                  </button>
                </div>
              </div>
              <div className="hover-md-hide hover-lg-show hover-xl-hide">
                <p className="text-body-tertiary fs-10 ps-md-3 border-start-md fw-bold mb-md-0 mb-0">
12:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas offcanvas-end content-offcanvas offcanvas-backdrop-transparent border-start shadow-none bg-body-highlight" tabIndex={-1} data-todo-content-offcanvas id="todoOffcanvas-7">
          <div className="offcanvas-body p-0">
            <div className="p-5 p-md-6">
              <div className="d-flex flex-between-center align-items-start gap-5 mb-4">
                <h2 className="fw-bold fs-6 mb-0 text-body-highlight">
Procrastinate for a month
                </h2>
                <button className="btn btn-phoenix-secondary btn-icon px-2" type="button" data-bs-dismiss={"offcanvas"} aria-label="Close">
                  <span className="fa-solid fa-xmark">                  </span>
                </button>
              </div>
              <div className="mb-6">
                <div className="d-flex align-items-center mb-3">
                  <h4 className="text-body me-3">
Description
                  </h4>
                  <a href="#!" className="btn btn-link text-decoration-none p-0">
                    <span className="fa-solid fa-pen">                    </span>
                  </a>
                </div>
                <p className="text-body-highlight mb-0">
The female circus horse-rider is a recurring subject in Chagall’s work. In 1926 the art dealer Ambroise Vollard invited Chagall to make a project based on the circus. They visited Paris’s historic Cirque d’Hiver Bouglione together; Vollard lent Chagall his private box seats. Chagall completed 19 gouaches Chagall’s work. In 1926 the art dealer Ambroise Vollard invited Chagall to make a project based on the circus.
                </p>
              </div>
              <h4 className="mb-3">
Subtasks
              </h4>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask61" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask61">
Study Dragons
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask62" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask62">
Procrastinate a bit
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top border-bottom mb-3">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask63" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask63">
Staring at the notebook for 5 mins
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <a href="#!" className="fw-bold fs-9">
                <span className="fas fa-plus me-1">                </span>Add subtask
              </a>
            </div>
            <div className="mb-6">
              <div className="px-5 px-md-6">
                <h4 className="mb-3">
Files
                </h4>
              </div>
              <div className="border-top px-5 px-md-6 py-4">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div className="d-flex mb-1">
                      <span className="fa-solid fa-image me-2 text-body-tertiary fs-9">                      </span>
                      <p className="text-body-highlight mb-0 lh-1">
Silly_sight_1.png
                      </p>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                  <div className="d-flex fs-9 text-body-tertiary mb-2 flex-wrap">
                    <span>
768 kb
                    </span>
                    <span className="text-body-quaternary mx-1">
| 
                    </span>
                    <a href="#!">
Shantinan Mekalan 
                    </a>
                    <span className="text-body-quaternary mx-1">
| 
                    </span>
                    <span className="text-nowrap">
21st Dec, 12:56 PM
                    </span>
                  </div>
                  <PhoenixImage src="/assets/img/generic/40.png" alt="" className="rounded-2" />
                </div>
              </div>
              <div className="border-top px-5 px-md-6 py-4">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div>
                      <div className="d-flex align-items-center mb-1">
                        <span className="fa-solid fa-image me-2 fs-9 text-body-tertiary">                        </span>
                        <p className="text-body-highlight mb-0 lh-1">
All_images.zip
                        </p>
                      </div>
                      <div className="d-flex fs-9 text-body-tertiary mb-0 flex-wrap">
                        <span>
12.8 mb
                        </span>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <a href="#!">
Yves Tanguy 
                        </a>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <span className="text-nowrap">
19th Dec, 08:56 PM
                        </span>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                </div>
              </div>
              <div className="border-top px-5 px-md-6 py-4 border-bottom">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div>
                      <div className="d-flex align-items-center mb-1 flex-wrap">
                        <span className="fa-solid fa-file-lines me-2 fs-9 text-body-tertiary">                        </span>
                        <p className="text-body-highlight mb-0 lh-1">
Project.txt
                        </p>
                      </div>
                      <div className="d-flex fs-9 text-body-tertiary mb-0 flex-wrap">
                        <span>
123 kb
                        </span>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <a href="#!">
Shantinan Mekalan 
                        </a>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <span className="text-nowrap">
12th Dec, 12:56 PM
                        </span>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                </div>
              </div>
              <div className="px-5 px-md-6 my-3">
                <label className="btn btn-link p-0" htmlFor="customFile">
                  <span className="fas fa-plus me-1">                  </span>
Add file(s)
                </label>
                <input className="d-none" id="customFile" type="file" />
              </div>
            </div>
            <div className="px-5 px-md-6">
              <h4 className="mb-4 text-body-emphasis">
Others Information
              </h4>
              <h5 className="text-body-highlight mb-2">
Status
              </h5>
              <select className="form-select mb-4" aria-label="Default select example">
                <option>
Select
                </option>
                <option value="1">
One
                </option>
                <option value="2">
Two
                </option>
                <option value="3">
Three
                </option>
              </select>
              <h5 className="text-body-highlight mb-2">
Due Date
              </h5>
              <div className="flatpickr-input-container mb-4">
                <input className="form-control datetimepicker ps-6" type="text" placeholder="Set the due date" data-options={"{\"disableMobile\":true}"} />
                <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary">                </span>
              </div>
              <h5 className="text-body-highlight mb-2">
Reminder
              </h5>
              <div className="flatpickr-input-container mb-4">
                <input className="form-control datetimepicker ps-6" type="text" placeholder="Reminder" data-options={"{\"enableTime\":true,\"noCalendar\":true,\"dateFormat\":\"H:i\",\"disableMobile\":true,\"static\":true}"} />
                <span className="uil uil-bell-school flatpickr-icon text-body-tertiary">                </span>
              </div>
              <h5 className="text-body-highlight mb-2">
Tag
              </h5>
              <div className="choices-select-container mb-6">
                <select className="form-select" data-choices multiple data-options={"{\"removeItemButton\":true,\"placeholder\":true}"}>
                  <option value="">
Select organizer...
                  </option>
                  <option>
Massachusetts Institute of Technology
                  </option>
                  <option>
University of Chicago
                  </option>
                  <option>
GSAS Open Labs At Harvard
                  </option>
                  <option>
California Institute of Technology
                  </option>
                </select>
                <span className="uil uil-tag-alt choices-icon text-body-tertiary" style={{"top":"26%"} as CSSProperties}>                </span>
              </div>
              <div className="text-end mb-9">
                <button className="btn btn-phoenix-danger">
Delete Task
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 cursor-pointer border-top" data-todo-offcanvas-toogle data-todo-offcanvas-target={"todoOffcanvas-8"}>
          <div className="col-12 col-md-auto flex-1">
            <div>
              <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                <input className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-7" data-event-propagation-prevent />
                <label className="form-check-label mb-0 fs-8 me-2 line-clamp-1 flex-grow-1 flex-md-grow-0 cursor-pointer">
warming up
                </label>
                <span className="badge badge-phoenix fs-10 badge-phoenix-secondary">
CLOSE
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-auto">
            <div className="d-flex ms-4 lh-1 align-items-center">
              <button className="btn btn-link p-0 text-body-tertiary fs-10 me-2">
                <span className="fas fa-paperclip me-1">                </span>
3
              </button>
              <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 mb-0">
12 Nov, 2021
              </p>
              <div className="d-none d-md-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties}>
                <div className="hover-actions end-0">
                  <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0" data-event-propagation-prevent>
                    <span className="fas fa-edit">                    </span>
                  </button>
                  <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                    <span className="fas fa-trash">                    </span>
                  </button>
                </div>
              </div>
              <div className="hover-md-hide hover-lg-show hover-xl-hide">
                <p className="text-body-tertiary fs-10 ps-md-3 border-start-md fw-bold mb-md-0 mb-0">
12:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas offcanvas-end content-offcanvas offcanvas-backdrop-transparent border-start shadow-none bg-body-highlight" tabIndex={-1} data-todo-content-offcanvas id="todoOffcanvas-8">
          <div className="offcanvas-body p-0">
            <div className="p-5 p-md-6">
              <div className="d-flex flex-between-center align-items-start gap-5 mb-4">
                <h2 className="fw-bold fs-6 mb-0 text-body-highlight">
warming up
                </h2>
                <button className="btn btn-phoenix-secondary btn-icon px-2" type="button" data-bs-dismiss={"offcanvas"} aria-label="Close">
                  <span className="fa-solid fa-xmark">                  </span>
                </button>
              </div>
              <div className="mb-6">
                <div className="d-flex align-items-center mb-3">
                  <h4 className="text-body me-3">
Description
                  </h4>
                  <a href="#!" className="btn btn-link text-decoration-none p-0">
                    <span className="fa-solid fa-pen">                    </span>
                  </a>
                </div>
                <p className="text-body-highlight mb-0">
The female circus horse-rider is a recurring subject in Chagall’s work. In 1926 the art dealer Ambroise Vollard invited Chagall to make a project based on the circus. They visited Paris’s historic Cirque d’Hiver Bouglione together; Vollard lent Chagall his private box seats. Chagall completed 19 gouaches Chagall’s work. In 1926 the art dealer Ambroise Vollard invited Chagall to make a project based on the circus.
                </p>
              </div>
              <h4 className="mb-3">
Subtasks
              </h4>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask71" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask71">
Study Dragons
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask72" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask72">
Procrastinate a bit
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top border-bottom mb-3">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask73" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask73">
Staring at the notebook for 5 mins
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <a href="#!" className="fw-bold fs-9">
                <span className="fas fa-plus me-1">                </span>Add subtask
              </a>
            </div>
            <div className="mb-6">
              <div className="px-5 px-md-6">
                <h4 className="mb-3">
Files
                </h4>
              </div>
              <div className="border-top px-5 px-md-6 py-4">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div className="d-flex mb-1">
                      <span className="fa-solid fa-image me-2 text-body-tertiary fs-9">                      </span>
                      <p className="text-body-highlight mb-0 lh-1">
Silly_sight_1.png
                      </p>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                  <div className="d-flex fs-9 text-body-tertiary mb-2 flex-wrap">
                    <span>
768 kb
                    </span>
                    <span className="text-body-quaternary mx-1">
| 
                    </span>
                    <a href="#!">
Shantinan Mekalan 
                    </a>
                    <span className="text-body-quaternary mx-1">
| 
                    </span>
                    <span className="text-nowrap">
21st Dec, 12:56 PM
                    </span>
                  </div>
                  <PhoenixImage src="/assets/img/generic/40.png" alt="" className="rounded-2" />
                </div>
              </div>
              <div className="border-top px-5 px-md-6 py-4">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div>
                      <div className="d-flex align-items-center mb-1">
                        <span className="fa-solid fa-image me-2 fs-9 text-body-tertiary">                        </span>
                        <p className="text-body-highlight mb-0 lh-1">
All_images.zip
                        </p>
                      </div>
                      <div className="d-flex fs-9 text-body-tertiary mb-0 flex-wrap">
                        <span>
12.8 mb
                        </span>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <a href="#!">
Yves Tanguy 
                        </a>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <span className="text-nowrap">
19th Dec, 08:56 PM
                        </span>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                </div>
              </div>
              <div className="border-top px-5 px-md-6 py-4 border-bottom">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div>
                      <div className="d-flex align-items-center mb-1 flex-wrap">
                        <span className="fa-solid fa-file-lines me-2 fs-9 text-body-tertiary">                        </span>
                        <p className="text-body-highlight mb-0 lh-1">
Project.txt
                        </p>
                      </div>
                      <div className="d-flex fs-9 text-body-tertiary mb-0 flex-wrap">
                        <span>
123 kb
                        </span>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <a href="#!">
Shantinan Mekalan 
                        </a>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <span className="text-nowrap">
12th Dec, 12:56 PM
                        </span>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                </div>
              </div>
              <div className="px-5 px-md-6 my-3">
                <label className="btn btn-link p-0" htmlFor="customFile">
                  <span className="fas fa-plus me-1">                  </span>
Add file(s)
                </label>
                <input className="d-none" id="customFile" type="file" />
              </div>
            </div>
            <div className="px-5 px-md-6">
              <h4 className="mb-4 text-body-emphasis">
Others Information
              </h4>
              <h5 className="text-body-highlight mb-2">
Status
              </h5>
              <select className="form-select mb-4" aria-label="Default select example">
                <option>
Select
                </option>
                <option value="1">
One
                </option>
                <option value="2">
Two
                </option>
                <option value="3">
Three
                </option>
              </select>
              <h5 className="text-body-highlight mb-2">
Due Date
              </h5>
              <div className="flatpickr-input-container mb-4">
                <input className="form-control datetimepicker ps-6" type="text" placeholder="Set the due date" data-options={"{\"disableMobile\":true}"} />
                <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary">                </span>
              </div>
              <h5 className="text-body-highlight mb-2">
Reminder
              </h5>
              <div className="flatpickr-input-container mb-4">
                <input className="form-control datetimepicker ps-6" type="text" placeholder="Reminder" data-options={"{\"enableTime\":true,\"noCalendar\":true,\"dateFormat\":\"H:i\",\"disableMobile\":true,\"static\":true}"} />
                <span className="uil uil-bell-school flatpickr-icon text-body-tertiary">                </span>
              </div>
              <h5 className="text-body-highlight mb-2">
Tag
              </h5>
              <div className="choices-select-container mb-6">
                <select className="form-select" data-choices multiple data-options={"{\"removeItemButton\":true,\"placeholder\":true}"}>
                  <option value="">
Select organizer...
                  </option>
                  <option>
Massachusetts Institute of Technology
                  </option>
                  <option>
University of Chicago
                  </option>
                  <option>
GSAS Open Labs At Harvard
                  </option>
                  <option>
California Institute of Technology
                  </option>
                </select>
                <span className="uil uil-tag-alt choices-icon text-body-tertiary" style={{"top":"26%"} as CSSProperties}>                </span>
              </div>
              <div className="text-end mb-9">
                <button className="btn btn-phoenix-danger">
Delete Task
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between align-items-md-center hover-actions-trigger btn-reveal-trigger border-translucent py-3 gx-0 cursor-pointer border-top" data-todo-offcanvas-toogle data-todo-offcanvas-target={"todoOffcanvas-9"}>
          <div className="col-12 col-md-auto flex-1">
            <div>
              <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1">
                <input className="form-check-input flex-shrink-0 form-check-line-through mt-0 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-8" data-event-propagation-prevent />
                <label className="form-check-label mb-0 fs-8 me-2 line-clamp-1 flex-grow-1 flex-md-grow-0 cursor-pointer">
Make ready for release
                </label>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-auto">
            <div className="d-flex ms-4 lh-1 align-items-center">
              <button className="btn btn-link p-0 text-body-tertiary fs-10 me-2">
                <span className="fas fa-paperclip me-1">                </span>
2
              </button>
              <button className="btn btn-link p-0 text-warning fs-10 me-2">
                <span className="fas fa-tasks me-1">                </span>
2
              </button>
              <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 mb-0">
2o Nov, 2021
              </p>
              <div className="d-none d-md-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties}>
                <div className="hover-actions end-0">
                  <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0" data-event-propagation-prevent>
                    <span className="fas fa-edit">                    </span>
                  </button>
                  <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0">
                    <span className="fas fa-trash">                    </span>
                  </button>
                </div>
              </div>
              <div className="hover-md-hide hover-lg-show hover-xl-hide">
                <p className="text-body-tertiary fs-10 ps-md-3 border-start-md fw-bold mb-md-0 mb-0">
1:00 AM
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas offcanvas-end content-offcanvas offcanvas-backdrop-transparent border-start shadow-none bg-body-highlight" tabIndex={-1} data-todo-content-offcanvas id="todoOffcanvas-9">
          <div className="offcanvas-body p-0">
            <div className="p-5 p-md-6">
              <div className="d-flex flex-between-center align-items-start gap-5 mb-4">
                <h2 className="fw-bold fs-6 mb-0 text-body-highlight">
Make ready for release
                </h2>
                <button className="btn btn-phoenix-secondary btn-icon px-2" type="button" data-bs-dismiss={"offcanvas"} aria-label="Close">
                  <span className="fa-solid fa-xmark">                  </span>
                </button>
              </div>
              <div className="mb-6">
                <div className="d-flex align-items-center mb-3">
                  <h4 className="text-body me-3">
Description
                  </h4>
                  <a href="#!" className="btn btn-link text-decoration-none p-0">
                    <span className="fa-solid fa-pen">                    </span>
                  </a>
                </div>
                <p className="text-body-highlight mb-0">
The female circus horse-rider is a recurring subject in Chagall’s work. In 1926 the art dealer Ambroise Vollard invited Chagall to make a project based on the circus. They visited Paris’s historic Cirque d’Hiver Bouglione together; Vollard lent Chagall his private box seats. Chagall completed 19 gouaches Chagall’s work. In 1926 the art dealer Ambroise Vollard invited Chagall to make a project based on the circus.
                </p>
              </div>
              <h4 className="mb-3">
Subtasks
              </h4>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask81" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask81">
Study Dragons
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask82" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask82">
Procrastinate a bit
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top border-bottom mb-3">
                <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                  <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtask83" />
                  <label className="form-check-label mb-0 fs-8" htmlFor="subtask83">
Staring at the notebook for 5 mins
                  </label>
                </div>
                <div className="hover-actions end-0">
                  <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                    <span className="fa-solid fa-pencil">                    </span>
                  </button>
                  <button className="btn btn-sm text-body-tertiary px-0">
                    <span className="fa-solid fa-xmark fs-8">                    </span>
                  </button>
                </div>
              </div>
              <a href="#!" className="fw-bold fs-9">
                <span className="fas fa-plus me-1">                </span>Add subtask
              </a>
            </div>
            <div className="mb-6">
              <div className="px-5 px-md-6">
                <h4 className="mb-3">
Files
                </h4>
              </div>
              <div className="border-top px-5 px-md-6 py-4">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div className="d-flex mb-1">
                      <span className="fa-solid fa-image me-2 text-body-tertiary fs-9">                      </span>
                      <p className="text-body-highlight mb-0 lh-1">
Silly_sight_1.png
                      </p>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                  <div className="d-flex fs-9 text-body-tertiary mb-2 flex-wrap">
                    <span>
768 kb
                    </span>
                    <span className="text-body-quaternary mx-1">
| 
                    </span>
                    <a href="#!">
Shantinan Mekalan 
                    </a>
                    <span className="text-body-quaternary mx-1">
| 
                    </span>
                    <span className="text-nowrap">
21st Dec, 12:56 PM
                    </span>
                  </div>
                  <PhoenixImage src="/assets/img/generic/40.png" alt="" className="rounded-2" />
                </div>
              </div>
              <div className="border-top px-5 px-md-6 py-4">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div>
                      <div className="d-flex align-items-center mb-1">
                        <span className="fa-solid fa-image me-2 fs-9 text-body-tertiary">                        </span>
                        <p className="text-body-highlight mb-0 lh-1">
All_images.zip
                        </p>
                      </div>
                      <div className="d-flex fs-9 text-body-tertiary mb-0 flex-wrap">
                        <span>
12.8 mb
                        </span>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <a href="#!">
Yves Tanguy 
                        </a>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <span className="text-nowrap">
19th Dec, 08:56 PM
                        </span>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                </div>
              </div>
              <div className="border-top px-5 px-md-6 py-4 border-bottom">
                <div className="me-n3">
                  <div className="d-flex flex-between-center">
                    <div>
                      <div className="d-flex align-items-center mb-1 flex-wrap">
                        <span className="fa-solid fa-file-lines me-2 fs-9 text-body-tertiary">                        </span>
                        <p className="text-body-highlight mb-0 lh-1">
Project.txt
                        </p>
                      </div>
                      <div className="d-flex fs-9 text-body-tertiary mb-0 flex-wrap">
                        <span>
123 kb
                        </span>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <a href="#!">
Shantinan Mekalan 
                        </a>
                        <span className="text-body-quaternary mx-1">
| 
                        </span>
                        <span className="text-nowrap">
12th Dec, 12:56 PM
                        </span>
                      </div>
                    </div>
                    <div className="btn-reveal-trigger">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h">                        </span>
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
                </div>
              </div>
              <div className="px-5 px-md-6 my-3">
                <label className="btn btn-link p-0" htmlFor="customFile">
                  <span className="fas fa-plus me-1">                  </span>
Add file(s)
                </label>
                <input className="d-none" id="customFile" type="file" />
              </div>
            </div>
            <div className="px-5 px-md-6">
              <h4 className="mb-4 text-body-emphasis">
Others Information
              </h4>
              <h5 className="text-body-highlight mb-2">
Status
              </h5>
              <select className="form-select mb-4" aria-label="Default select example">
                <option>
Select
                </option>
                <option value="1">
One
                </option>
                <option value="2">
Two
                </option>
                <option value="3">
Three
                </option>
              </select>
              <h5 className="text-body-highlight mb-2">
Due Date
              </h5>
              <div className="flatpickr-input-container mb-4">
                <input className="form-control datetimepicker ps-6" type="text" placeholder="Set the due date" data-options={"{\"disableMobile\":true}"} />
                <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary">                </span>
              </div>
              <h5 className="text-body-highlight mb-2">
Reminder
              </h5>
              <div className="flatpickr-input-container mb-4">
                <input className="form-control datetimepicker ps-6" type="text" placeholder="Reminder" data-options={"{\"enableTime\":true,\"noCalendar\":true,\"dateFormat\":\"H:i\",\"disableMobile\":true,\"static\":true}"} />
                <span className="uil uil-bell-school flatpickr-icon text-body-tertiary">                </span>
              </div>
              <h5 className="text-body-highlight mb-2">
Tag
              </h5>
              <div className="choices-select-container mb-6">
                <select className="form-select" data-choices multiple data-options={"{\"removeItemButton\":true,\"placeholder\":true}"}>
                  <option value="">
Select organizer...
                  </option>
                  <option>
Massachusetts Institute of Technology
                  </option>
                  <option>
University of Chicago
                  </option>
                  <option>
GSAS Open Labs At Harvard
                  </option>
                  <option>
California Institute of Technology
                  </option>
                </select>
                <span className="uil uil-tag-alt choices-icon text-body-tertiary" style={{"top":"26%"} as CSSProperties}>                </span>
              </div>
              <div className="text-end mb-9">
                <button className="btn btn-phoenix-danger">
Delete Task
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#!" className="fw-bold fs-9 mt-4">
        <span className="fas fa-plus me-1">        </span>Add new task
      </a>
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
