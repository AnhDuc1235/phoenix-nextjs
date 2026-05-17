'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function ListView() {
  return (
    <div suppressHydrationWarning>

    <nav className="mb-3" aria-label="breadcrumb">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <a href="#!">
Page 1
          </a>
        </li>
        <li className="breadcrumb-item">
          <a href="#!">
Page 2
          </a>
        </li>
        <li className="breadcrumb-item active">
Default
        </li>
      </ol>
    </nav>

    <div className="mb-9" data-collapse-filemanager-sidebar>
      <h2 className="mb-4">
File Manager
      </h2>
      <div className="row gx-4">
        <div className="col-auto file-manager-sidebar">
          <div className="phoenix-offcanvas phoenix-offcanvas-fixed bg-body scrollbar overflow-x-hidden" id="fileManagerSideBar" data-breakpoint={"lg"}>
            <div className="d-flex flex-between-center">
              <h5 className="mb-2">
My Files
              </h5>
              <button className="btn p-0 fs-8 d-lg-none" data-phoenix-dismiss={"offcanvas"}>
                <span className="fa-solid fa-xmark" data-fa-transform={"up-3"}>                </span>
              </button>
            </div>
            <ul className="mb-0 treeview" id="treeviewExample">
              <li className="treeview-list-item">
                <a href="#treeviewExample-1-1" data-bs-toggle={"collapse"}  role="button" aria-expanded="false">
                  <p className="treeview-text text-nowrap">
                    <span className="fa-solid fa-folder treeview-icon">                    </span>
My Drive 
                  </p>
                </a>
                <ul className="collapse treeview-list" id="treeviewExample-1-1" data-show={"true"}>
                  <li className="treeview-list-item">
                    <a href="#treeviewExample-2-1" data-bs-toggle={"collapse"}  role="button" aria-expanded="false">
                      <p className="treeview-text text-nowrap">
                        <span className="fa-solid fa-folder treeview-icon">                        </span>
Illustrations
                        <span className="treeview-badge">
3
                        </span>
                        <span className="treeview-dot bg-danger">                        </span>
                      </p>
                    </a>
                    <ul className="collapse treeview-list" id="treeviewExample-2-1" data-show={"false"}>
                      <li className="treeview-list-item">
                        <div className="treeview-item">
                          <a href="#!" className="flex-1 ps-2 ms-2">
                            <p className="treeview-text text-nowrap">
                              <span className="treeview-icon fa-solid fa-file-lines">                              </span>
Read.txt 
                            </p>
                          </a>
                        </div>
                      </li>
                      <li className="treeview-list-item">
                        <div className="treeview-item">
                          <a href="#!" className="flex-1 ps-2 ms-2">
                            <p className="treeview-text text-nowrap">
                              <span className="treeview-icon fa-solid fa-image">                              </span>
error.jpg 
                            </p>
                          </a>
                        </div>
                      </li>
                      <li className="treeview-list-item">
                        <div className="treeview-item">
                          <a href="#!" className="flex-1 ps-2 ms-2">
                            <p className="treeview-text text-nowrap">
                              <span className="treeview-icon fa-solid fa-file-zipper">                              </span>
Illustration.zip 
                            </p>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="treeview-list-item">
                    <a href="#treeviewExample-2-2" data-bs-toggle={"collapse"}  role="button" aria-expanded="false">
                      <p className="treeview-text text-nowrap">
                        <span className="fa-solid fa-folder treeview-icon">                        </span>
UI Design 
                      </p>
                    </a>
                    <ul className="collapse treeview-list" id="treeviewExample-2-2" data-show={"false"}>
                      <li className="treeview-list-item">
                        <div className="treeview-item">
                          <a href="#!" className="flex-1 ps-2 ms-2">
                            <p className="treeview-text text-nowrap">
                              <span className="treeview-icon fa-solid fa-file-zipper">                              </span>
Pages.zip 
                            </p>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="treeview-list-item">
                    <a href="#treeviewExample-2-3" data-bs-toggle={"collapse"}  role="button" aria-expanded="false">
                      <p className="treeview-text text-nowrap">
                        <span className="fa-solid fa-folder treeview-icon text-info-light">                        </span>
Brand Identity 
                      </p>
                    </a>
                    <ul className="collapse treeview-list" id="treeviewExample-2-3" data-show={"false"}>
                      <li className="treeview-list-item">
                        <div className="treeview-item">
                          <a href="#!" className="flex-1 ps-2 ms-2">
                            <p className="treeview-text text-nowrap">
                              <span className="treeview-icon fa-solid fa-file-word">                              </span>
information.doc 
                            </p>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="treeview-list-item">
                    <a href="#treeviewExample-2-4" data-bs-toggle={"collapse"}  role="button" aria-expanded="false">
                      <p className="treeview-text text-nowrap">
                        <span className="fa-solid fa-folder treeview-icon">                        </span>
Source Code 
                      </p>
                    </a>
                    <ul className="collapse treeview-list" id="treeviewExample-2-4" data-show={"false"}>
                      <li className="treeview-list-item">
                        <div className="treeview-item">
                          <a href="#!" className="flex-1 ps-2 ms-2">
                            <p className="treeview-text text-nowrap">
                              <span className="treeview-icon fa-brands fa-html5">                              </span>
getting-started.html 
                            </p>
                          </a>
                        </div>
                      </li>
                      <li className="treeview-list-item">
                        <div className="treeview-item">
                          <a href="#!" className="flex-1 ps-2 ms-2">
                            <p className="treeview-text text-nowrap">
                              <span className="treeview-icon fa-solid fa-file-zipper">                              </span>
Source Code.zip 
                            </p>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="treeview-list-item">
                    <a href="#treeviewExample-2-5" data-bs-toggle={"collapse"}  role="button" aria-expanded="false">
                      <p className="treeview-text text-nowrap">
                        <span className="fa-solid fa-folder treeview-icon">                        </span>
Code Backup 
                      </p>
                    </a>
                    <ul className="collapse treeview-list" id="treeviewExample-2-5" data-show={"true"}>
                      <li className="treeview-list-item">
                        <a href="#treeviewExample-3-1" data-bs-toggle={"collapse"}  role="button" aria-expanded="false">
                          <p className="treeview-text text-nowrap">
                            <span className="fa-solid fa-folder treeview-icon">                            </span>
Files 
                          </p>
                        </a>
                        <ul className="collapse treeview-list" id="treeviewExample-3-1" data-show={"false"}>
                          <li className="treeview-list-item">
                            <div className="treeview-item">
                              <a href="#!" className="flex-1 ps-2 ms-2">
                                <p className="treeview-text text-nowrap">
                                  <span className="treeview-icon fa-solid fa-file-zipper">                                  </span>
main.zip 
                                </p>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="treeview-list-item">
                        <div className="treeview-item">
                          <a href="#!" className="flex-1 ps-2 ms-2">
                            <p className="treeview-text text-nowrap">
                              <span className="treeview-icon fa-solid fa-file">                              </span>
Report.docx 
                            </p>
                          </a>
                        </div>
                      </li>
                      <li className="treeview-list-item">
                        <div className="treeview-item">
                          <a href="#!" className="flex-1 ps-2 ms-2">
                            <p className="treeview-text text-nowrap">
                              <span className="treeview-icon fa-solid fa-file-zipper">                              </span>
backup.zip 
                            </p>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="treeview-list-item">
                    <a href="#treeviewExample-2-6" data-bs-toggle={"collapse"}  role="button" aria-expanded="false">
                      <p className="treeview-text text-nowrap">
                        <span className="fa-solid fa-folder treeview-icon">                        </span>
Landing 
                      </p>
                    </a>
                    <ul className="collapse treeview-list" id="treeviewExample-2-6" data-show={"true"}>
                      <li className="treeview-list-item">
                        <div className="treeview-item">
                          <a href="#!" className="flex-1 ps-2 ms-2">
                            <p className="treeview-text text-nowrap">
                              <span className="treeview-icon fa-solid fa-image">                              </span>
Landing.png 
                            </p>
                          </a>
                        </div>
                      </li>
                      <li className="treeview-list-item">
                        <a href="#treeviewExample-3-2" data-bs-toggle={"collapse"}  role="button" aria-expanded="false">
                          <p className="treeview-text text-nowrap">
                            <span className="fa-solid fa-folder treeview-icon">                            </span>
Images 
                          </p>
                        </a>
                        <ul className="collapse treeview-list" id="treeviewExample-3-2" data-show={"false"}>
                          <li className="treeview-list-item">
                            <div className="treeview-item">
                              <a href="#!" className="flex-1 ps-2 ms-2">
                                <p className="treeview-text text-nowrap">
                                  <span className="treeview-icon fa-solid fa-file-zipper">                                  </span>
images.zip 
                                </p>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="treeview-list-item">
                        <div className="treeview-item">
                          <a href="#!" className="flex-1 ps-2 ms-2">
                            <p className="treeview-text text-nowrap">
                              <span className="treeview-icon fa-brands fa-html5">                              </span>
index.html 
                            </p>
                          </a>
                        </div>
                      </li>
                      <li className="treeview-list-item">
                        <div className="treeview-item">
                          <a href="#!" className="flex-1 ps-2 ms-2">
                            <p className="treeview-text text-nowrap">
                              <span className="treeview-icon fa-brands fa-css3-alt">                              </span>
Style.css 
                            </p>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="treeview-list-item">
                    <a href="#treeviewExample-2-7" data-bs-toggle={"collapse"}  role="button" aria-expanded="false">
                      <p className="treeview-text text-nowrap">
                        <span className="fa-solid fa-folder treeview-icon">                        </span>
Travel
                        <span className="treeview-badge">
4
                        </span>
                        <span className="treeview-dot bg-danger">                        </span>
                      </p>
                    </a>
                    <ul className="collapse treeview-list" id="treeviewExample-2-7" data-show={"true"}>
                      <li className="treeview-list-item">
                        <a href="#treeviewExample-3-3" data-bs-toggle={"collapse"}  role="button" aria-expanded="false">
                          <p className="treeview-text text-nowrap">
                            <span className="fa-solid fa-folder treeview-icon">                            </span>
Files 
                          </p>
                        </a>
                        <ul className="collapse treeview-list" id="treeviewExample-3-3" data-show={"false"}>
                          <li className="treeview-list-item">
                            <div className="treeview-item">
                              <a href="#!" className="flex-1 ps-2 ms-2">
                                <p className="treeview-text text-nowrap">
                                  <span className="treeview-icon fa-solid fa-file-zipper">                                  </span>
main.zip 
                                </p>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="treeview-list-item">
                        <div className="treeview-item">
                          <a href="#!" className="flex-1 ps-2 ms-2">
                            <p className="treeview-text text-nowrap">
                              <span className="treeview-icon fa-brands fa-html5">                              </span>
index.html 
                            </p>
                          </a>
                        </div>
                      </li>
                      <li className="treeview-list-item">
                        <div className="treeview-item">
                          <a href="#!" className="flex-1 ps-2 ms-2">
                            <p className="treeview-text text-nowrap">
                              <span className="treeview-icon fa-brands fa-css3-alt">                              </span>
Style.css 
                            </p>
                          </a>
                        </div>
                      </li>
                      <li className="treeview-list-item">
                        <div className="treeview-item">
                          <a href="#!" className="flex-1 ps-2 ms-2">
                            <p className="treeview-text text-nowrap">
                              <span className="treeview-icon fa-solid fa-file-lines">                              </span>
Notes.txt 
                            </p>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="treeview-list-item">
                    <div className="treeview-item">
                      <a href="#!" className="flex-1 ps-2 ms-2">
                        <p className="treeview-text text-nowrap">
                          <span className="treeview-icon fa-brands fa-html5">                          </span>
Phoenix.html 
                        </p>
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="treeview-list-item">
                <div className="treeview-item">
                  <a href="#!" className="flex-1 ps-2 ms-2">
                    <p className="treeview-text text-nowrap">
                      <span className="treeview-icon fa-solid fa-share-nodes">                      </span>
Shared with me 
                    </p>
                  </a>
                </div>
              </li>
              <li className="treeview-list-item">
                <div className="treeview-item">
                  <a href="#!" className="flex-1 ps-2 ms-2">
                    <p className="treeview-text text-nowrap">
                      <span className="treeview-icon fa-solid fa-clock">                      </span>
Recent 
                    </p>
                  </a>
                </div>
              </li>
              <li className="treeview-list-item">
                <div className="treeview-item">
                  <a href="#!" className="flex-1 ps-2 ms-2">
                    <p className="treeview-text text-nowrap">
                      <span className="treeview-icon fa-solid fa-heart">                      </span>
Favourite 
                    </p>
                  </a>
                </div>
              </li>
              <li className="treeview-list-item">
                <div className="treeview-item">
                  <a href="#!" className="flex-1 ps-2 ms-2">
                    <p className="treeview-text text-nowrap">
                      <span className="treeview-icon fa-solid fa-circle-info">                      </span>
Spam 
                    </p>
                  </a>
                </div>
              </li>
              <li className="treeview-list-item">
                <div className="treeview-item">
                  <a href="#!" className="flex-1 ps-2 ms-2">
                    <p className="treeview-text text-nowrap">
                      <span className="treeview-icon fa-solid fa-trash">                      </span>
Trash 
                    </p>
                  </a>
                </div>
              </li>
              <li className="treeview-list-item">
                <div className="treeview-item">
                  <a href="#!" className="flex-1 ps-2 ms-2">
                    <p className="treeview-text text-nowrap">
                      <span className="treeview-icon fa-brands fa-google-drive">                      </span>
Google Drive 
                    </p>
                  </a>
                </div>
              </li>
              <li className="treeview-list-item">
                <div className="treeview-item">
                  <a href="#!" className="flex-1 ps-2 ms-2">
                    <p className="treeview-text text-nowrap">
                      <span className="treeview-icon fa-brands fa-dropbox">                      </span>
Dropbox 
                    </p>
                  </a>
                </div>
              </li>
              <li className="treeview-list-item">
                <div className="treeview-item">
                  <a href="#!" className="flex-1 ps-2 ms-2">
                    <p className="treeview-text text-nowrap">
                      <span className="treeview-icon fa-solid fa-cloud">                      </span>
One Drive 
                    </p>
                  </a>
                </div>
              </li>
            </ul>
            <a href="#collapseStorageDetails" className="btn collapse-indicator px-0 py-3 mt-3 d-flex flex-between-center" data-bs-toggle={"collapse"}  role="button" aria-expanded="false" aria-controls="collapseStorageDetails">
              <h5 className="mb-0 text-body-highlight">
Storage details
              </h5>              <span className="fa-solid fa-chevron-right toggle-icon storate-details-toggle fs-9 text-primary">              </span>
            </a>
            <div className="progress-stacked" style={{"height":"10px"} as CSSProperties}>
              <div className="progress h-100" role="progressbar" aria-label="Segment one" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{"width":"20%"} as CSSProperties}>
                <div className="progress-bar bg-primary-light">                </div>
              </div>
              <div className="progress h-100" role="progressbar" aria-label="Segment one" aria-valuenow={16} aria-valuemin={0} aria-valuemax={100} style={{"width":"16%"} as CSSProperties}>
                <div className="progress-bar bg-info-lighter">                </div>
              </div>
              <div className="progress h-100" role="progressbar" aria-label="Segment one" aria-valuenow={18} aria-valuemin={0} aria-valuemax={100} style={{"width":"18%"} as CSSProperties}>
                <div className="progress-bar bg-warning-lighter">                </div>
              </div>
              <div className="progress h-100" role="progressbar" aria-label="Segment one" aria-valuenow={12} aria-valuemin={0} aria-valuemax={100} style={{"width":"12%"} as CSSProperties}>
                <div className="progress-bar bg-danger-lighter">                </div>
              </div>
              <div className="progress h-100" role="progressbar" aria-label="Segment one" aria-valuenow={11} aria-valuemin={0} aria-valuemax={100} style={{"width":"11%"} as CSSProperties}>
                <div className="progress-bar bg-success-lighter">                </div>
              </div>
            </div>
            <h6 className="text-body mt-2 mb-0">
Used: 45.8 GB (92%) of the 50 GB.
            </h6>
            <div className="collapse" id="collapseStorageDetails">
              <div className="pt-4">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div className="square-icon-box bg-primary-subtle">
                    <span className="fa-solid fa-file-pdf text-primary-darker">                    </span>
                  </div>
                  <div>
                    <h6 className="text-body">
Images
                    </h6>
                    <h6 className="mb-0 text-body fw-semibold">
22k Files - Used
                    </h6>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div className="square-icon-box bg-info-subtle">
                    <span className="fa-solid fa-video text-info-darker">                    </span>
                  </div>
                  <div>
                    <h6 className="text-body">
Videos
                    </h6>
                    <h6 className="mb-0 text-body fw-semibold">
534 Files - Used
                    </h6>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div className="square-icon-box bg-warning-subtle">
                    <span className="fa-solid fa-music text-warning-darker">                    </span>
                  </div>
                  <div>
                    <h6 className="text-body">
Audio
                    </h6>
                    <h6 className="mb-0 text-body fw-semibold">
55 Files - Used
                    </h6>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div className="square-icon-box bg-danger-subtle">
                    <span className="fa-solid fa-file text-danger-darker">                    </span>
                  </div>
                  <div>
                    <h6 className="text-body">
Documents
                    </h6>
                    <h6 className="mb-0 text-body fw-semibold">
65k Files - Used
                    </h6>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div className="square-icon-box bg-success-subtle">
                    <span className="fa-solid fa-rectangle-list text-success-darker">                    </span>
                  </div>
                  <div>
                    <h6 className="text-body">
Others
                    </h6>
                    <h6 className="mb-0 text-body fw-semibold">
12k Files - Used
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <div className="text-center">
              <PhoenixImage src="/assets/img/spot-illustrations/45.png" alt="" className="d-dark-none img-fluid" width={98} />
              <PhoenixImage src="/assets/img/spot-illustrations/dark_45.png" alt="" className="d-light-none img-fluid" width={98} />
              <h5 className="mt-3 text-body fw-bolder">
Upgrade to Pro
              </h5>
              <h6 className="mb-3 text-body-tertiary fw-normal">
Expand your storage capacity with our upgraded storage options.
              </h6>
              <button className="btn btn-sm btn-primary w-100">
Upgrade Now
              </button>
            </div>
          </div>
          <div className="phoenix-offcanvas-backdrop d-lg-none" data-phoenix-backdrop>          </div>
        </div>
        <div className="col my-files">
          <div className="row g-3 flex-between-center">
            <div className="col-auto d-flex gap-2">
              <button className="btn btn-phoenix-secondary btn-square d-lg-none" data-phoenix-toggle={"offcanvas"} data-phoenix-target={"#fileManagerSideBar"}>
                <span className="fa-solid fa-bars">                </span>
              </button>
              <button className="btn btn-phoenix-secondary btn-square d-none d-lg-block d-xl-none" data-toggle-sidebar>
                <span className="fa-solid fa-bars">                </span>
              </button>
              <button className="btn btn-primary px-sm-6">
                <span className="fa-solid fa-cloud-arrow-up me-2">                </span>
Upload
              </button>
              <button className="btn btn-link text-body-secondary px-2" type="button" data-bs-toggle={"modal"} data-bs-target={"#addFolderModal"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                <span className="fa-solid fa-add me-2">                </span>
Add New Folder
              </button>
            </div>
            <div className="col-auto d-flex gap-2">
              <div className="search-box">
                <form className="position-relative">
                  <input className="form-control search-input search" type="search" placeholder="Search by name" aria-label="Search" />
                  <span className="fas fa-search search-box-icon">                  </span>
                </form>
              </div>
              <select className="form-select w-auto">
                <option value="1">
Last 7 days
                </option>
                <option value="1">
Last 15 days
                </option>
                <option value="1">
Last 30 days
                </option>
              </select>
              <button className="btn btn-phoenix-primary btn-square" type="button" data-bs-toggle={"modal"} data-bs-target={"#fileFilterModal"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                <span className="fa-solid fa-filter">                </span>
              </button>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body pb-5">
              <h4 className="mb-3">
Recent Files
              </h4>
              <div className="row g-3">
                <div className="col-sm-6 col-xl-6 col-xxl-3">
                  <div className="position-relative">
                    <div className="img-zoom-hover mask-image-none overflow-hidden border rounded-3">
                      <div className="position-relative">
                        <div className="mask-image-recent-file overflow-hidden">
                          <div className="ratio ratio-16x9">
                            <PhoenixImage src="/assets/img/file-manager/1.png" alt="" className="w-100 h-100 object-fit-cover" />
                          </div>
                          <span className="badge badge-phoenix fs-10 position-absolute top-0 start-0 mt-3 ms-3 badge-phoenix-warning">
Edited 5 min ago
                          </span>
                        </div>
                      </div>
                      <div className="bg-body p-3 pe-2 d-flex justify-content-between align-items-start rounded-bottom-3">
                        <div className="w-75">
                          <PhoenixLink href="/assets/img/generic/67.pdf" className="text-body-highlight fw-bold mb-2 stretched-link d-block text-truncate"  data-gallery={"recent-file"} data-width={"90%"} data-height={"90vh"}>
Verification Letter.pdf
                          </PhoenixLink>
                          <h6 className="mb-0 fw-semibold text-body-tertiary">
8.8 mb
                          </h6>
                        </div>
                        <div className="dropdown position-static z-5">
                          <button className="btn btn-square-sm position-relative mt-n1" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-v" data-fa-transform={"shrink-2"}>                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Share
                            </a>
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Download
                            </a>
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Duplicate
                            </a>
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Move
                            </a>
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Rename
                            </a>
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Move to Bin
                            </a>
                            <hr className="dropdown-divider" />
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none text-danger">
Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-6 col-xxl-3">
                  <div className="position-relative" data-play-on-container-hover>
                    <div className="img-zoom-hover mask-image-none overflow-hidden border rounded-3">
                      <div className="position-relative">
                        <div className="mask-image-recent-file overflow-hidden">
                          <div className="video-container rounded-3 h-100 ratio ratio-16x9">
                            <video className="video d-block h-100 w-100 object-fit-cover" muted data-play-on-hover poster="../../assets/video/2.png">
                              <source src="/assets/video/2.mp4" type="video/mp4" />
                            </video>
                          </div>
                          <span className="badge badge-phoenix fs-10 position-absolute top-0 start-0 mt-3 ms-3 badge-phoenix-info">
Upload 6 min ago
                          </span>
                        </div>
                        <button className="btn p-0 circle-icon-item-md position-absolute top-50 start-50 translate-middle bg-body-emphasis bg-opacity-50 z-5" data-bs-theme={"light"} data-video-controller>
                          <span className="play-icon pointer-events-none">
                            <span className="fa-solid fa-play text-body-secondary fs-9" data-fa-transform={"down-1"}>                            </span>
                          </span>
                          <span className="pause-icon pointer-events-none">
                            <span className="fa-solid fa-pause text-body-secondary fs-9" data-fa-transform={"down-1"}>                            </span>
                          </span>
                        </button>
                      </div>
                      <div className="bg-body p-3 pe-2 d-flex justify-content-between align-items-start rounded-bottom-3">
                        <div className="w-75">
                          <PhoenixLink href="/assets/video/2.mp4" className="text-body-highlight fw-bold mb-2 stretched-link d-block text-truncate"  data-gallery={"recent-file"} data-width={""} data-height={""}>
Travel Tales.mp4
                          </PhoenixLink>
                          <h6 className="mb-0 fw-semibold text-body-tertiary">
65 mb
                          </h6>
                        </div>
                        <div className="dropdown position-static z-5">
                          <button className="btn btn-square-sm position-relative mt-n1" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-v" data-fa-transform={"shrink-2"}>                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Share
                            </a>
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Download
                            </a>
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Duplicate
                            </a>
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Move
                            </a>
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Rename
                            </a>
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Move to Bin
                            </a>
                            <hr className="dropdown-divider" />
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none text-danger">
Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-6 col-xxl-3">
                  <div className="position-relative">
                    <div className="img-zoom-hover mask-image-none overflow-hidden border rounded-3">
                      <div className="position-relative">
                        <div className="mask-image-recent-file overflow-hidden">
                          <div className="ratio ratio-16x9">
                            <PhoenixImage src="/assets/img/file-manager/2.png" alt="" className="w-100 h-100 object-fit-cover" />
                          </div>
                          <span className="badge badge-phoenix fs-10 position-absolute top-0 start-0 mt-3 ms-3 badge-phoenix-info">
Upload 6 min ago
                          </span>
                        </div>
                      </div>
                      <div className="bg-body p-3 pe-2 d-flex justify-content-between align-items-start rounded-bottom-3">
                        <div className="w-75">
                          <PhoenixLink href="/assets/img/file-manager/2.png" className="text-body-highlight fw-bold mb-2 stretched-link d-block text-truncate"  data-gallery={"recent-file"} data-width={""} data-height={""}>
Mountain During.jpg
                          </PhoenixLink>
                          <h6 className="mb-0 fw-semibold text-body-tertiary">
5.8 mb
                          </h6>
                        </div>
                        <div className="dropdown position-static z-5">
                          <button className="btn btn-square-sm position-relative mt-n1" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-v" data-fa-transform={"shrink-2"}>                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Share
                            </a>
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Download
                            </a>
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Duplicate
                            </a>
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Move
                            </a>
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Rename
                            </a>
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Move to Bin
                            </a>
                            <hr className="dropdown-divider" />
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none text-danger">
Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-6 col-xxl-3">
                  <div className="position-relative" data-play-on-container-hover>
                    <div className="img-zoom-hover mask-image-none overflow-hidden border rounded-3">
                      <div className="position-relative">
                        <div className="mask-image-recent-file overflow-hidden">
                          <div className="video-container rounded-3 h-100 ratio ratio-16x9">
                            <video className="video d-block h-100 w-100 object-fit-cover" muted data-play-on-hover poster="../../assets/video/3.png">
                              <source src="/assets/video/3.mp4" type="video/mp4" />
                            </video>
                          </div>
                          <span className="badge badge-phoenix fs-10 position-absolute top-0 start-0 mt-3 ms-3 badge-phoenix-info">
Upload 8 min ago
                          </span>
                        </div>
                        <button className="btn p-0 circle-icon-item-md position-absolute top-50 start-50 translate-middle bg-body-emphasis bg-opacity-50 z-5" data-bs-theme={"light"} data-video-controller>
                          <span className="play-icon pointer-events-none">
                            <span className="fa-solid fa-play text-body-secondary fs-9" data-fa-transform={"down-1"}>                            </span>
                          </span>
                          <span className="pause-icon pointer-events-none">
                            <span className="fa-solid fa-pause text-body-secondary fs-9" data-fa-transform={"down-1"}>                            </span>
                          </span>
                        </button>
                      </div>
                      <div className="bg-body p-3 pe-2 d-flex justify-content-between align-items-start rounded-bottom-3">
                        <div className="w-75">
                          <PhoenixLink href="/assets/video/3.mp4" className="text-body-highlight fw-bold mb-2 stretched-link d-block text-truncate"  data-gallery={"recent-file"} data-width={""} data-height={""}>
Cinematic Adventures.mp4
                          </PhoenixLink>
                          <h6 className="mb-0 fw-semibold text-body-tertiary">
54 mb
                          </h6>
                        </div>
                        <div className="dropdown position-static z-5">
                          <button className="btn btn-square-sm position-relative mt-n1" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-v" data-fa-transform={"shrink-2"}>                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Share
                            </a>
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Download
                            </a>
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Duplicate
                            </a>
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Move
                            </a>
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Rename
                            </a>
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Move to Bin
                            </a>
                            <hr className="dropdown-divider" />
                            <a href="#" className="dropdown-item fw-semibold text-decoration-none text-danger">
Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="collapse" id="collapseRecentFiles">
                <div className="mt-3">
                  <div className="row g-3">
                    <div className="col-sm-6 col-xl-6 col-xxl-3">
                      <div className="position-relative" data-play-on-container-hover>
                        <div className="img-zoom-hover mask-image-none overflow-hidden border rounded-3">
                          <div className="position-relative">
                            <div className="mask-image-recent-file overflow-hidden">
                              <div className="video-container rounded-3 h-100 ratio ratio-16x9">
                                <video className="video d-block h-100 w-100 object-fit-cover" muted data-play-on-hover poster="../../assets/video/1.png">
                                  <source src="/assets/video/1.mp4" type="video/mp4" />
                                </video>
                              </div>
                              <span className="badge badge-phoenix fs-10 position-absolute top-0 start-0 mt-3 ms-3 badge-phoenix-info">
Upload 6 min ago
                              </span>
                            </div>
                            <button className="btn p-0 circle-icon-item-md position-absolute top-50 start-50 translate-middle bg-body-emphasis bg-opacity-50 z-5" data-bs-theme={"light"} data-video-controller>
                              <span className="play-icon pointer-events-none">
                                <span className="fa-solid fa-play text-body-secondary fs-9" data-fa-transform={"down-1"}>                                </span>
                              </span>
                              <span className="pause-icon pointer-events-none">
                                <span className="fa-solid fa-pause text-body-secondary fs-9" data-fa-transform={"down-1"}>                                </span>
                              </span>
                            </button>
                          </div>
                          <div className="bg-body p-3 pe-2 d-flex justify-content-between align-items-start rounded-bottom-3">
                            <div className="w-75">
                              <PhoenixLink href="/assets/video/1.mp4" className="text-body-highlight fw-bold mb-2 stretched-link d-block text-truncate"  data-gallery={"recent-file"} data-width={""} data-height={""}>
Travel Tales.mp4
                              </PhoenixLink>
                              <h6 className="mb-0 fw-semibold text-body-tertiary">
65 mb
                              </h6>
                            </div>
                            <div className="dropdown position-static z-5">
                              <button className="btn btn-square-sm position-relative mt-n1" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-v" data-fa-transform={"shrink-2"}>                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Share
                                </a>
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Download
                                </a>
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Duplicate
                                </a>
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Move
                                </a>
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Rename
                                </a>
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Move to Bin
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none text-danger">
Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xl-6 col-xxl-3">
                      <div className="position-relative">
                        <div className="img-zoom-hover mask-image-none overflow-hidden border rounded-3">
                          <div className="position-relative">
                            <div className="mask-image-recent-file overflow-hidden">
                              <div className="ratio ratio-16x9">
                                <PhoenixImage src="/assets/img/file-manager/6.png" alt="" className="w-100 h-100 object-fit-cover" />
                              </div>
                              <span className="badge badge-phoenix fs-10 position-absolute top-0 start-0 mt-3 ms-3 badge-phoenix-info">
Upload 6 min ago
                              </span>
                            </div>
                          </div>
                          <div className="bg-body p-3 pe-2 d-flex justify-content-between align-items-start rounded-bottom-3">
                            <div className="w-75">
                              <PhoenixLink href="/assets/img/file-manager/6.png" className="text-body-highlight fw-bold mb-2 stretched-link d-block text-truncate"  data-gallery={"recent-file"} data-width={""} data-height={""}>
Hot air balloons.png
                              </PhoenixLink>
                              <h6 className="mb-0 fw-semibold text-body-tertiary">
5.8 mb
                              </h6>
                            </div>
                            <div className="dropdown position-static z-5">
                              <button className="btn btn-square-sm position-relative mt-n1" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-v" data-fa-transform={"shrink-2"}>                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Share
                                </a>
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Download
                                </a>
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Duplicate
                                </a>
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Move
                                </a>
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Rename
                                </a>
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Move to Bin
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none text-danger">
Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xl-6 col-xxl-3">
                      <div className="position-relative">
                        <div className="img-zoom-hover mask-image-none overflow-hidden border rounded-3">
                          <div className="position-relative">
                            <div className="mask-image-recent-file overflow-hidden">
                              <div className="ratio ratio-16x9">
                                <PhoenixImage src="/assets/img/file-manager/7.png" alt="" className="w-100 h-100 object-fit-cover" />
                              </div>
                              <span className="badge badge-phoenix fs-10 position-absolute top-0 start-0 mt-3 ms-3 badge-phoenix-warning">
Edited 5 min ago
                              </span>
                            </div>
                          </div>
                          <div className="bg-body p-3 pe-2 d-flex justify-content-between align-items-start rounded-bottom-3">
                            <div className="w-75">
                              <PhoenixLink href="/assets/img/file-manager/7.png" className="text-body-highlight fw-bold mb-2 stretched-link d-block text-truncate"  data-gallery={"recent-file"} data-width={""} data-height={""}>
Aurora Borealis.jpg
                              </PhoenixLink>
                              <h6 className="mb-0 fw-semibold text-body-tertiary">
10 mb
                              </h6>
                            </div>
                            <div className="dropdown position-static z-5">
                              <button className="btn btn-square-sm position-relative mt-n1" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-v" data-fa-transform={"shrink-2"}>                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Share
                                </a>
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Download
                                </a>
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Duplicate
                                </a>
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Move
                                </a>
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Rename
                                </a>
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Move to Bin
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none text-danger">
Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xl-6 col-xxl-3">
                      <div className="position-relative" data-play-on-container-hover>
                        <div className="img-zoom-hover mask-image-none overflow-hidden border rounded-3">
                          <div className="position-relative">
                            <div className="mask-image-recent-file overflow-hidden">
                              <div className="video-container rounded-3 h-100 ratio ratio-16x9">
                                <video className="video d-block h-100 w-100 object-fit-cover" muted data-play-on-hover poster="../../assets/video/4.png">
                                  <source src="/assets/video/4.mp4" type="video/mp4" />
                                </video>
                              </div>
                              <span className="badge badge-phoenix fs-10 position-absolute top-0 start-0 mt-3 ms-3 badge-phoenix-info">
Upload 8 min ago
                              </span>
                            </div>
                            <button className="btn p-0 circle-icon-item-md position-absolute top-50 start-50 translate-middle bg-body-emphasis bg-opacity-50 z-5" data-bs-theme={"light"} data-video-controller>
                              <span className="play-icon pointer-events-none">
                                <span className="fa-solid fa-play text-body-secondary fs-9" data-fa-transform={"down-1"}>                                </span>
                              </span>
                              <span className="pause-icon pointer-events-none">
                                <span className="fa-solid fa-pause text-body-secondary fs-9" data-fa-transform={"down-1"}>                                </span>
                              </span>
                            </button>
                          </div>
                          <div className="bg-body p-3 pe-2 d-flex justify-content-between align-items-start rounded-bottom-3">
                            <div className="w-75">
                              <PhoenixLink href="/assets/video/4.mp4" className="text-body-highlight fw-bold mb-2 stretched-link d-block text-truncate"  data-gallery={"recent-file"} data-width={""} data-height={""}>
Cinematic Adventures.mp4
                              </PhoenixLink>
                              <h6 className="mb-0 fw-semibold text-body-tertiary">
54 mb
                              </h6>
                            </div>
                            <div className="dropdown position-static z-5">
                              <button className="btn btn-square-sm position-relative mt-n1" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-v" data-fa-transform={"shrink-2"}>                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Share
                                </a>
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Download
                                </a>
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Duplicate
                                </a>
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Move
                                </a>
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Rename
                                </a>
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none">
Move to Bin
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item fw-semibold text-decoration-none text-danger">
Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#collapseRecentFiles" className="btn collapse-indicator bg-body-emphasis fs-10 py-1 border rounded-1 px-3 position-absolute start-50 translate-middle-x" style={{"bottom":"-11px"} as CSSProperties} data-bs-toggle={"collapse"}  role="button" aria-expanded="false" aria-controls="collapseRecentFiles">
                <span className="collapse-show">
VIEW MORE
                </span>                <span className="collapse-hide">
VIEW LESS
                </span>                <span className="fa-solid fa-chevron-down toggle-icon fs-10 ms-2">                </span>
              </a>
            </div>
          </div>
          <div className="card mt-5">
            <div className="card-header py-3 px-4">
              <div className="row g-3 flex-between-center">
                <div className="col-auto">
                  <h5 className="mb-0">
My Files
                  </h5>
                </div>
                <div className="col-auto d-flex">
                  <PhoenixLink href="/apps/file-manager/grid-view" className="btn btn-phoenix-secondary btn-square me-2"  data-bs-toggle={"tooltip"} data-bs-title={"Grid view"}>
                    <span className="fa-solid fa-table-cells-large">                    </span>
                  </PhoenixLink>
                  <PhoenixLink href="/apps/file-manager/list-view" className="border-primary text-primary btn btn-phoenix-secondary btn-square"  data-bs-toggle={"tooltip"} data-bs-title={"List view"}>
                    <span className="fa-solid fa-list">                    </span>
                  </PhoenixLink>
                  <select className="form-select mx-2 mx-sm-3">
                    <option>
Sort by - Date created
                    </option>
                    <option>
Sort by - Name
                    </option>
                    <option>
Sort by - Size
                    </option>
                  </select>
                  <div className="form-check form-switch d-flex align-items-center">
                    <input className="form-check-input" type="checkbox" role="switch" id="viewAsGroup" data-bs-toggle={"tooltip"} data-bs-title={"View as group"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body pt-0">
              <div className="myfiles-action-bar mx-n4 mb-4">
                <h6 className="mb-0" id="file-manager-replace-element">
Total 12 items
                </h6>
                <div className="d-none" id="file-manager-actions">
                  <div className="d-flex align-items-center">
                    <button className="btn p-0 text-body-secondary fs-8 me-2 me-sm-3" data-remove-bulk-check>
                      <span className="fa-solid fa-xmark" data-fa-transform={"down-1"}>                      </span>
                    </button>
                    <h6 className="mb-0 me-4 text-nowrap" data-files-selected>
0 Item Selected
                    </h6>
                    <div className="d-flex gap-1 gap-sm-2">
                      <button className="btn btn-phoenix-secondary fs-10 btn-square-sm d-none d-sm-block" data-bs-toggle={"tooltip"} data-bs-title={"Download"}>
                        <span className="fa-solid fa-download">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fs-10 btn-square-sm d-none d-sm-block" data-bs-toggle={"tooltip"} data-bs-title={"Delete"}>
                        <span className="fa-solid fa-trash">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fs-10 btn-square-sm d-none d-sm-block" data-bs-toggle={"tooltip"} data-bs-title={"Share"}>
                        <span className="fa-solid fa-share-nodes">                        </span>
                      </button>
                      <div className="dropdown">
                        <button className="btn btn-phoenix-secondary btn-square-sm" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                          <span className="fa-solid fa-ellipsis">                          </span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a href="#" className="dropdown-item fw-semibold">
Share
                          </a>
                          <a href="#" className="dropdown-item fw-semibold">
Download
                          </a>
                          <a href="#" className="dropdown-item fw-semibold">
Duplicate
                          </a>
                          <a href="#" className="dropdown-item fw-semibold">
Move
                          </a>
                          <a href="#" className="dropdown-item fw-semibold">
Rename
                          </a>
                          <a href="#" className="dropdown-item fw-semibold">
Move to Bin
                          </a>
                          <hr className="dropdown-divider" />
                          <a href="#" className="dropdown-item fw-semibold text-danger">
Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-phoenix-secondary fs-10 btn-square-sm d-none d-xxl-block" data-toggle-file-details data-bs-toggle={"tooltip"} data-bs-title>
                  <span className="fa-solid fa-info-circle">                  </span>
                </button>
                <button className="btn btn-phoenix-secondary fs-10 btn-square-sm d-xxl-none" data-toggle-file-details data-bs-toggle={"tooltip"} data-bs-title data-phoenix-toggle={"offcanvas"} data-phoenix-target={"#fileDetailsOffcanvas"}>
                  <span className="fa-solid fa-info-circle">                  </span>
                </button>
              </div>
              <div className="row gx-xxl-9" id="bulk-select-body">
                <div className="col my-files-table">
                  <div className="table-responsive ms-n1 ps-1 me-n1 pe-1 scrollbar" data-files-container data-list={"{\"valueNames\":[\"name\",\"shared\",\"modified\",\"file-size\"]}"}>
                    <table className="table fs-9 mb-0">
                      <thead>
                        <tr>
                          <th className="ps-0 pt-0 white-space-nowrap align-middle d-flex align-items-center" scope="col">
                            <div className="form-check mb-0 fs-8">
                              <input className="form-check-input" id="bulk-select-file-manager" type="checkbox" data-bulk-select={"{\"body\":\"bulk-select-body\",\"actions\":\"bulk-select-actions\",\"replacedElement\":\"bulk-select-replace-element\"}"} />
                            </div>
                            <span className="sort ms-8" data-sort={"name"}>
NAME
                            </span>
                          </th>
                          <th className="sort pt-0 align-middle" scope="col" data-sort={"shared"} style={{"minWidth":"150px"} as CSSProperties}>
SHARED
                          </th>
                          <th className="sort pt-0 align-middle" scope="col" data-sort={"modified"} style={{"minWidth":"150px"} as CSSProperties}>
LAST MODIFIED
                          </th>
                          <th className="sort pt-0 align-middle" scope="col" style={{"maxWidth":"130px"} as CSSProperties} data-sort={"file-size"}>
FILE SIZE
                          </th>
                          <th className="sort pt-0 text-end pe-0 align-middle" scope="col">                          </th>
                        </tr>
                      </thead>
                      <tbody className="list" id="table-latest-review-body"><tr className="user-select-none">
                          <td className="align-middle white-space-nowrap py-0">
                            <div className="underline-on-hover d-flex align-items-center position-relative gap-3">
                              <input className="form-check-input fs-8 mt-0" type="checkbox" id="1" data-bulk-select-row data-file={"1"} />
                              <label className="square-icon-box border border-translucent overflow-hidden stretched-link" htmlFor="1" data-file={"1"}>
                                <span className="fa-solid fa-folder fs-9 text-body-tertiary">                                </span>
                              </label>
                              <a href="#!" className="fw-semibold text-body-highlight name">
Illustrations
                              </a>
                            </div>
                          </td>
                          <td className="align-middle shared white-space-nowrap ps-3">
                            <div className="avatar-group avatar-group-dense">
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/2.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/2.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Kristine Cadena
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/4.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/4.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Adrian
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/3.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/3.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Charles
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Jennifer Schramm
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/r.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/r.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Roy Anderson
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle modified time white-space-nowrap fw-semibold text-body-tertiary">
2 hours ago
                          </td>
                          <td className="align-middle file-size white-space-nowrap fw-semibold text-body-tertiary">
20 Items
                          </td>
                          <td className="align-middle text-end time white-space-nowrap">
                            <div className="btn-reveal-trigger">
                              <button className="btn btn-sm btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h text-body-tertiary">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#" className="dropdown-item fw-semibold">
Share
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Download
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Duplicate
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Rename
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move to Bin
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item fw-semibold text-danger">
Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="user-select-none"><td className="align-middle white-space-nowrap py-0">
                            <div className="underline-on-hover d-flex align-items-center position-relative gap-3">
                              <input className="form-check-input fs-8 mt-0" type="checkbox" id="2" data-bulk-select-row data-file={"2"} />
                              <label className="square-icon-box border border-translucent overflow-hidden stretched-link" htmlFor="2" data-file={"2"} data-file-thumbnail={"img/file-manager/9.png"}>
                                <PhoenixImage src="/assets/img/file-manager/9.png" alt="" className="w-100 h-100 pointer-events-none" />
                              </label>
                              <a href="#!" className="fw-semibold text-body-highlight name">
Retro Ring.jpg
                              </a>
                            </div>
                          </td>
                          <td className="align-middle shared white-space-nowrap ps-3">
                            <div className="avatar-group avatar-group-dense">
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/10.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/10.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Raymond Mims
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/11.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/11.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Jonathan
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/12.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/12.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Jack
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/13.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/13.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Jessica
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle modified time white-space-nowrap fw-semibold text-body-tertiary">
10 July, 2023
                          </td>
                          <td className="align-middle file-size white-space-nowrap fw-semibold text-body-tertiary">
980 KB
                          </td>
                          <td className="align-middle text-end time white-space-nowrap">
                            <div className="btn-reveal-trigger">
                              <button className="btn btn-sm btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h text-body-tertiary">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#" className="dropdown-item fw-semibold">
Share
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Download
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Duplicate
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Rename
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move to Bin
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item fw-semibold text-danger">
Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="user-select-none"><td className="align-middle white-space-nowrap py-0">
                            <div className="underline-on-hover d-flex align-items-center position-relative gap-3">
                              <input className="form-check-input fs-8 mt-0" type="checkbox" id="3" data-bulk-select-row data-file={"3"} />
                              <label className="square-icon-box border border-translucent overflow-hidden stretched-link" htmlFor="3" data-file={"3"}>
                                <span className="fa-solid fa-folder fs-9 text-info-light">                                </span>
                              </label>
                              <a href="#!" className="fw-semibold text-body-highlight name">
Brand Identity
                              </a>
                            </div>
                          </td>
                          <td className="align-middle shared white-space-nowrap ps-3">
                            <div className="avatar-group avatar-group-dense">
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/7.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/7.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Carl
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/21.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/21.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Robert Allan
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/3.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/3.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Charles
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/4.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/4.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Adrian
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/28.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/28.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Sarah Gill
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle modified time white-space-nowrap fw-semibold text-body-tertiary">
2 hours ago
                          </td>
                          <td className="align-middle file-size white-space-nowrap fw-semibold text-body-tertiary">
16 Items
                          </td>
                          <td className="align-middle text-end time white-space-nowrap">
                            <div className="btn-reveal-trigger">
                              <button className="btn btn-sm btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h text-body-tertiary">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#" className="dropdown-item fw-semibold">
Share
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Download
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Duplicate
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Rename
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move to Bin
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item fw-semibold text-danger">
Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="user-select-none"><td className="align-middle white-space-nowrap py-0">
                            <div className="underline-on-hover d-flex align-items-center position-relative gap-3">
                              <input className="form-check-input fs-8 mt-0" type="checkbox" id="4" data-bulk-select-row data-file={"4"} />
                              <label className="square-icon-box border border-translucent overflow-hidden stretched-link" htmlFor="4" data-file={"4"} data-file-thumbnail={"video/2.mp4"}>
                                <PhoenixImage src="/assets/video/2.png" alt="" className="w-100 h-100 pointer-events-none" />
                              </label>
                              <a href="#!" className="fw-semibold text-body-highlight name">
World in Motion.mp4
                              </a>
                            </div>
                          </td>
                          <td className="align-middle shared white-space-nowrap ps-3">
                            <div className="avatar-group avatar-group-dense">
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/1.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/1.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
William Grant
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/2.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/2.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Kristine Cadena
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/3.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/3.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Charles
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle modified time white-space-nowrap fw-semibold text-body-tertiary">
15 July, 2023
                          </td>
                          <td className="align-middle file-size white-space-nowrap fw-semibold text-body-tertiary">
18 MB
                          </td>
                          <td className="align-middle text-end time white-space-nowrap">
                            <div className="btn-reveal-trigger">
                              <button className="btn btn-sm btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h text-body-tertiary">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#" className="dropdown-item fw-semibold">
Share
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Download
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Duplicate
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Rename
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move to Bin
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item fw-semibold text-danger">
Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="user-select-none"><td className="align-middle white-space-nowrap py-0">
                            <div className="underline-on-hover d-flex align-items-center position-relative gap-3">
                              <input className="form-check-input fs-8 mt-0" type="checkbox" id="5" data-bulk-select-row data-file={"5"} />
                              <label className="square-icon-box border border-translucent overflow-hidden stretched-link" htmlFor="5" data-file={"5"}>
                                <span className="fa-solid fa-folder fs-9 text-body-tertiary">                                </span>
                              </label>
                              <a href="#!" className="fw-semibold text-body-highlight name">
UI Design
                              </a>
                            </div>
                          </td>
                          <td className="align-middle shared white-space-nowrap ps-3">
                            <div className="avatar-group avatar-group-dense">
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/5.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/5.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Luke Davies
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/6.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/6.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Sophie Grant
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/12.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/12.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Jack
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/23.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/23.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
William Ellison
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Jennifer Schramm
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle modified time white-space-nowrap fw-semibold text-body-tertiary">
20 September, 2023
                          </td>
                          <td className="align-middle file-size white-space-nowrap fw-semibold text-body-tertiary">
10 Items
                          </td>
                          <td className="align-middle text-end time white-space-nowrap">
                            <div className="btn-reveal-trigger">
                              <button className="btn btn-sm btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h text-body-tertiary">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#" className="dropdown-item fw-semibold">
Share
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Download
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Duplicate
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Rename
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move to Bin
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item fw-semibold text-danger">
Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="user-select-none"><td className="align-middle white-space-nowrap py-0">
                            <div className="underline-on-hover d-flex align-items-center position-relative gap-3">
                              <input className="form-check-input fs-8 mt-0" type="checkbox" id="6" data-bulk-select-row data-file={"6"} />
                              <label className="square-icon-box border border-translucent overflow-hidden stretched-link" htmlFor="6" data-file={"6"} data-file-thumbnail={"img/file-manager/11.png"}>
                                <PhoenixImage src="/assets/img/file-manager/11.png" alt="" className="w-100 h-100 pointer-events-none" />
                              </label>
                              <a href="#!" className="fw-semibold text-body-highlight name">
Classic Clicks.png
                              </a>
                            </div>
                          </td>
                          <td className="align-middle shared white-space-nowrap ps-3">
                            <div className="avatar-group avatar-group-dense">
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/1.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/1.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
William Grant
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/2.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/2.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Kristine Cadena
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/3.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/3.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Charles
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Jennifer Schramm
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <div className="avatar avatar-s  rounded-circle">
                                <div className="avatar-name rounded-circle ">
                                  <span>
+2
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle modified time white-space-nowrap fw-semibold text-body-tertiary">
2 hours ago
                          </td>
                          <td className="align-middle file-size white-space-nowrap fw-semibold text-body-tertiary">
564 KB
                          </td>
                          <td className="align-middle text-end time white-space-nowrap">
                            <div className="btn-reveal-trigger">
                              <button className="btn btn-sm btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h text-body-tertiary">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#" className="dropdown-item fw-semibold">
Share
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Download
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Duplicate
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Rename
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move to Bin
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item fw-semibold text-danger">
Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="user-select-none"><td className="align-middle white-space-nowrap py-0">
                            <div className="underline-on-hover d-flex align-items-center position-relative gap-3">
                              <input className="form-check-input fs-8 mt-0" type="checkbox" id="7" data-bulk-select-row data-file={"7"} />
                              <label className="square-icon-box border border-translucent overflow-hidden stretched-link" htmlFor="7" data-file={"7"}>
                                <span className="fa-solid fa-folder fs-9 text-body-tertiary">                                </span>
                              </label>
                              <a href="#!" className="fw-semibold text-body-highlight name">
Source Code
                              </a>
                            </div>
                          </td>
                          <td className="align-middle shared white-space-nowrap ps-3">
                            <div className="avatar-group avatar-group-dense">
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/21.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/21.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Robert Allan
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/27.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/27.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Molly William
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/28.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/28.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Sarah Gill
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Jennifer Schramm
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle modified time white-space-nowrap fw-semibold text-body-tertiary">
21 September, 2023
                          </td>
                          <td className="align-middle file-size white-space-nowrap fw-semibold text-body-tertiary">
21 Items
                          </td>
                          <td className="align-middle text-end time white-space-nowrap">
                            <div className="btn-reveal-trigger">
                              <button className="btn btn-sm btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h text-body-tertiary">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#" className="dropdown-item fw-semibold">
Share
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Download
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Duplicate
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Rename
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move to Bin
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item fw-semibold text-danger">
Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="user-select-none"><td className="align-middle white-space-nowrap py-0">
                            <div className="underline-on-hover d-flex align-items-center position-relative gap-3">
                              <input className="form-check-input fs-8 mt-0" type="checkbox" id="8" data-bulk-select-row data-file={"8"} />
                              <label className="square-icon-box border border-translucent overflow-hidden stretched-link" htmlFor="8" data-file={"8"}>
                                <span className="fa-solid fa-folder fs-9 text-body-tertiary">                                </span>
                              </label>
                              <a href="#!" className="fw-semibold text-body-highlight name">
Code Backup
                              </a>
                            </div>
                          </td>
                          <td className="align-middle shared white-space-nowrap ps-3">
                            <div className="avatar-group avatar-group-dense">
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/18.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/18.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Rose Berry
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/22.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/22.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Tim Anderson
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/23.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/23.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
William Ellison
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/34.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/34.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Jean Renoir
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/35.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/35.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Stanly Drinkwater
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle modified time white-space-nowrap fw-semibold text-body-tertiary">
21 September, 2023
                          </td>
                          <td className="align-middle file-size white-space-nowrap fw-semibold text-body-tertiary">
19 Items
                          </td>
                          <td className="align-middle text-end time white-space-nowrap">
                            <div className="btn-reveal-trigger">
                              <button className="btn btn-sm btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h text-body-tertiary">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#" className="dropdown-item fw-semibold">
Share
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Download
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Duplicate
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Rename
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move to Bin
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item fw-semibold text-danger">
Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="user-select-none"><td className="align-middle white-space-nowrap py-0">
                            <div className="underline-on-hover d-flex align-items-center position-relative gap-3">
                              <input className="form-check-input fs-8 mt-0" type="checkbox" id="9" data-bulk-select-row data-file={"9"} />
                              <label className="square-icon-box border border-translucent overflow-hidden stretched-link" htmlFor="9" data-file={"9"}>
                                <span className="fa-solid fa-file-excel fs-9 text-body-tertiary">                                </span>
                              </label>
                              <a href="#!" className="fw-semibold text-body-highlight name">
Trip List.xls
                              </a>
                            </div>
                          </td>
                          <td className="align-middle shared white-space-nowrap ps-3">
                            <div className="avatar-group avatar-group-dense">
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/24.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/24.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Warren
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/23.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/23.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
William Ellison
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/3.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/3.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Charles
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Jennifer Schramm
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <div className="avatar avatar-s  rounded-circle">
                                <div className="avatar-name rounded-circle ">
                                  <span>
+3
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle modified time white-space-nowrap fw-semibold text-body-tertiary">
2 hours ago
                          </td>
                          <td className="align-middle file-size white-space-nowrap fw-semibold text-body-tertiary">
553 KB
                          </td>
                          <td className="align-middle text-end time white-space-nowrap">
                            <div className="btn-reveal-trigger">
                              <button className="btn btn-sm btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h text-body-tertiary">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#" className="dropdown-item fw-semibold">
Share
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Download
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Duplicate
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Rename
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move to Bin
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item fw-semibold text-danger">
Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="user-select-none"><td className="align-middle white-space-nowrap py-0">
                            <div className="underline-on-hover d-flex align-items-center position-relative gap-3">
                              <input className="form-check-input fs-8 mt-0" type="checkbox" id="10" data-bulk-select-row data-file={"10"} />
                              <label className="square-icon-box border border-translucent overflow-hidden stretched-link" htmlFor="10" data-file={"10"}>
                                <span className="fa-solid fa-file-zipper fs-9 text-body-tertiary">                                </span>
                              </label>
                              <a href="#!" className="fw-semibold text-body-highlight name">
Archive.zip
                              </a>
                            </div>
                          </td>
                          <td className="align-middle shared white-space-nowrap ps-3">
                            <div className="avatar-group avatar-group-dense">
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/16.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/16.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Nicola Allan
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/19.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/19.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Ansolo Lazinatov
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/3.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/3.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Charles
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Jennifer Schramm
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <div className="avatar avatar-s  rounded-circle">
                                <div className="avatar-name rounded-circle ">
                                  <span>
+8
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle modified time white-space-nowrap fw-semibold text-body-tertiary">
10 July, 2023
                          </td>
                          <td className="align-middle file-size white-space-nowrap fw-semibold text-body-tertiary">
12 MB
                          </td>
                          <td className="align-middle text-end time white-space-nowrap">
                            <div className="btn-reveal-trigger">
                              <button className="btn btn-sm btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h text-body-tertiary">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#" className="dropdown-item fw-semibold">
Share
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Download
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Duplicate
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Rename
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move to Bin
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item fw-semibold text-danger">
Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="user-select-none"><td className="align-middle white-space-nowrap py-0">
                            <div className="underline-on-hover d-flex align-items-center position-relative gap-3">
                              <input className="form-check-input fs-8 mt-0" type="checkbox" id="11" data-bulk-select-row data-file={"11"} />
                              <label className="square-icon-box border border-translucent overflow-hidden stretched-link" htmlFor="11" data-file={"11"} data-file-thumbnail={"img/file-manager/12.png"}>
                                <PhoenixImage src="/assets/img/file-manager/12.png" alt="" className="w-100 h-100 pointer-events-none" />
                              </label>
                              <a href="#!" className="fw-semibold text-body-highlight name">
Worldly Wonders.jpg
                              </a>
                            </div>
                          </td>
                          <td className="align-middle shared white-space-nowrap ps-3">
                            <div className="avatar-group avatar-group-dense">
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/1.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/1.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
William Grant
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/2.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/2.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Kristine Cadena
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle modified time white-space-nowrap fw-semibold text-body-tertiary">
10 September, 2023
                          </td>
                          <td className="align-middle file-size white-space-nowrap fw-semibold text-body-tertiary">
990 KB
                          </td>
                          <td className="align-middle text-end time white-space-nowrap">
                            <div className="btn-reveal-trigger">
                              <button className="btn btn-sm btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h text-body-tertiary">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#" className="dropdown-item fw-semibold">
Share
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Download
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Duplicate
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Rename
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move to Bin
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item fw-semibold text-danger">
Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="user-select-none"><td className="align-middle white-space-nowrap py-0">
                            <div className="underline-on-hover d-flex align-items-center position-relative gap-3">
                              <input className="form-check-input fs-8 mt-0" type="checkbox" id="12" data-bulk-select-row data-file={"12"} />
                              <label className="square-icon-box border border-translucent overflow-hidden stretched-link" htmlFor="12" data-file={"12"}>
                                <span className="fa-solid fa-file-csv fs-9 text-body-tertiary">                                </span>
                              </label>
                              <a href="#!" className="fw-semibold text-body-highlight name">
Phoenix Logs.csv
                              </a>
                            </div>
                          </td>
                          <td className="align-middle shared white-space-nowrap ps-3">
                            <div className="avatar-group avatar-group-dense">
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/1.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/1.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
William Grant
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/2.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/2.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Kristine Cadena
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/3.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/3.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Charles
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle modified time white-space-nowrap fw-semibold text-body-tertiary">
2 hours ago
                          </td>
                          <td className="align-middle file-size white-space-nowrap fw-semibold text-body-tertiary">
546 KB
                          </td>
                          <td className="align-middle text-end time white-space-nowrap">
                            <div className="btn-reveal-trigger">
                              <button className="btn btn-sm btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h text-body-tertiary">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#" className="dropdown-item fw-semibold">
Share
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Download
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Duplicate
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Rename
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move to Bin
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item fw-semibold text-danger">
Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="user-select-none"><td className="align-middle white-space-nowrap py-0">
                            <div className="underline-on-hover d-flex align-items-center position-relative gap-3">
                              <input className="form-check-input fs-8 mt-0" type="checkbox" id="13" data-bulk-select-row data-file={"13"} />
                              <label className="square-icon-box border border-translucent overflow-hidden stretched-link" htmlFor="13" data-file={"13"}>
                                <span className="fa-solid fa-file-invoice fs-9 text-body-tertiary">                                </span>
                              </label>
                              <a href="#!" className="fw-semibold text-body-highlight name">
Notes.xlx
                              </a>
                            </div>
                          </td>
                          <td className="align-middle shared white-space-nowrap ps-3">
                            <div className="avatar-group avatar-group-dense">
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/9.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/9.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Michael Jenkins
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Ansolo Lazinatov
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/32.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/32.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Jennifer Schramm
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Kristine Cadena
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle modified time white-space-nowrap fw-semibold text-body-tertiary">
2 hours ago
                          </td>
                          <td className="align-middle file-size white-space-nowrap fw-semibold text-body-tertiary">
698 KB
                          </td>
                          <td className="align-middle text-end time white-space-nowrap">
                            <div className="btn-reveal-trigger">
                              <button className="btn btn-sm btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h text-body-tertiary">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#" className="dropdown-item fw-semibold">
Share
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Download
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Duplicate
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Rename
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move to Bin
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item fw-semibold text-danger">
Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="user-select-none"><td className="align-middle white-space-nowrap py-0">
                            <div className="underline-on-hover d-flex align-items-center position-relative gap-3">
                              <input className="form-check-input fs-8 mt-0" type="checkbox" id="14" data-bulk-select-row data-file={"14"} />
                              <label className="square-icon-box border border-translucent overflow-hidden stretched-link" htmlFor="14" data-file={"14"} data-file-thumbnail={"video/3.mp4"}>
                                <PhoenixImage src="/assets/video/3.png" alt="" className="w-100 h-100 pointer-events-none" />
                              </label>
                              <a href="#!" className="fw-semibold text-body-highlight name">
Moving Escapes.mp4
                              </a>
                            </div>
                          </td>
                          <td className="align-middle shared white-space-nowrap ps-3">
                            <div className="avatar-group avatar-group-dense">
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/9.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/9.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Michael Jenkins
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Ansolo Lazinatov
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/32.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/32.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Jennifer Schramm
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Kristine Cadena
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle modified time white-space-nowrap fw-semibold text-body-tertiary">
4 hours ago
                          </td>
                          <td className="align-middle file-size white-space-nowrap fw-semibold text-body-tertiary">
12 MB
                          </td>
                          <td className="align-middle text-end time white-space-nowrap">
                            <div className="btn-reveal-trigger">
                              <button className="btn btn-sm btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h text-body-tertiary">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#" className="dropdown-item fw-semibold">
Share
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Download
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Duplicate
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Rename
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move to Bin
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item fw-semibold text-danger">
Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="user-select-none"><td className="align-middle white-space-nowrap py-0">
                            <div className="underline-on-hover d-flex align-items-center position-relative gap-3">
                              <input className="form-check-input fs-8 mt-0" type="checkbox" id="15" data-bulk-select-row data-file={"15"} />
                              <label className="square-icon-box border border-translucent overflow-hidden stretched-link" htmlFor="15" data-file={"15"}>
                                <span className="fa-solid fa-file-pdf fs-9 text-body-tertiary">                                </span>
                              </label>
                              <a href="#!" className="fw-semibold text-body-highlight name">
API Documentation.pdf
                              </a>
                            </div>
                          </td>
                          <td className="align-middle shared white-space-nowrap ps-3">
                            <div className="avatar-group avatar-group-dense">
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/10.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/10.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Michael Jenkins
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/26.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/26.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Ansolo Lazinatov
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/21.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/21.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Jennifer Schramm
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/12.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/12.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Kristine Cadena
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle modified time white-space-nowrap fw-semibold text-body-tertiary">
10 July, 2023
                          </td>
                          <td className="align-middle file-size white-space-nowrap fw-semibold text-body-tertiary">
4 MB
                          </td>
                          <td className="align-middle text-end time white-space-nowrap">
                            <div className="btn-reveal-trigger">
                              <button className="btn btn-sm btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h text-body-tertiary">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#" className="dropdown-item fw-semibold">
Share
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Download
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Duplicate
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Rename
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move to Bin
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item fw-semibold text-danger">
Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="user-select-none"><td className="align-middle white-space-nowrap py-0 border-bottom-0">
                            <div className="underline-on-hover d-flex align-items-center position-relative gap-3">
                              <input className="form-check-input fs-8 mt-0" type="checkbox" id="16" data-bulk-select-row data-file={"16"} />
                              <label className="square-icon-box border border-translucent overflow-hidden stretched-link" htmlFor="16" data-file={"16"} data-file-thumbnail={"img/file-manager/13.png"}>
                                <PhoenixImage src="/assets/img/file-manager/13.png" alt="" className="w-100 h-100 pointer-events-none" />
                              </label>
                              <a href="#!" className="fw-semibold text-body-highlight name">
Vintage Car.jpg
                              </a>
                            </div>
                          </td>
                          <td className="align-middle shared white-space-nowrap ps-3 border-bottom-0">
                            <div className="avatar-group avatar-group-dense">
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/10.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/10.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Michael Jenkins
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/26.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/26.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Ansolo Lazinatov
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/21.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/21.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Jennifer Schramm
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                              <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                                <div className="avatar avatar-s  rounded-circle border border-light-subtle">
                                  <PhoenixImage src="/assets/img/team/12.webp" alt="" className="rounded-circle " />
                                </div>
                              </a>
                              <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                                <div className="position-relative">
                                  <div className="bg-holder z-n1" style={{"backgroundImage":"url(../../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                                  </div>
                                  <div className="p-3">
                                    <div className="text-end">
                                      <button className="btn p-0 me-2">
                                        <span className="fa-solid fa-user-plus text-white">                                        </span>
                                      </button>
                                      <button className="btn p-0">
                                        <span className="fa-solid fa-ellipsis text-white">                                        </span>
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                        <PhoenixImage src="/assets/img/team/12.webp" alt="" className="rounded-circle border border-light-subtle" />
                                      </div>
                                      <h6 className="text-white">
Kristine Cadena
                                      </h6>
                                      <p className="text-light text-opacity-50 fw-semibold fs-10 mb-2">
@tyrion222
                                      </p>
                                      <div className="d-flex flex-center mb-3">
                                        <h6 className="text-white mb-0">
224 
                                          <span className="fw-normal text-light text-opacity-75">
connections
                                          </span>
                                        </h6>
                                        <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                        </span>
                                        <h6 className="text-white mb-0">
23 
                                          <span className="fw-normal text-light text-opacity-75">
mutual
                                          </span>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-body-emphasis">
                                  <div className="p-3 border-bottom border-translucent">
                                    <div className="d-flex justify-content-between">
                                      <div className="d-flex">
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-phone">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                          <span className="fa-solid fa-message">                                          </span>
                                        </button>
                                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                          <span className="fa-solid fa-video">                                          </span>
                                        </button>
                                      </div>
                                      <button className="btn btn-phoenix-primary">
                                        <span className="fa-solid fa-envelope me-2">                                        </span>
Send Email
                                      </button>
                                    </div>
                                  </div>
                                  <ul className="nav d-flex flex-column py-3 border-bottom">
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                        </span>                                        <span className="text-body-highlight flex-1">
Assigned Projects
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                        <span className="me-2 text-body" data-feather={"pie-chart"}>                                        </span>                                        <span className="text-body-highlight flex-1">
View activiy
                                        </span>                                        <span className="fa-solid fa-chevron-right fs-11">                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="p-3 d-flex justify-content-between">
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none">
Details 
                                  </a>
                                  <a href="#!" className="btn btn-link p-0 text-decoration-none text-danger">
Unassign 
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle modified time white-space-nowrap fw-semibold text-body-tertiary border-bottom-0">
15 July, 2023
                          </td>
                          <td className="align-middle file-size white-space-nowrap fw-semibold text-body-tertiary border-bottom-0">
980 KB
                          </td>
                          <td className="align-middle text-end time white-space-nowrap border-bottom-0">
                            <div className="btn-reveal-trigger">
                              <button className="btn btn-sm btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                <span className="fas fa-ellipsis-h text-body-tertiary">                                </span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end py-2">
                                <a href="#" className="dropdown-item fw-semibold">
Share
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Download
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Duplicate
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Rename
                                </a>
                                <a href="#" className="dropdown-item fw-semibold">
Move to Bin
                                </a>
                                <hr className="dropdown-divider" />
                                <a href="#" className="dropdown-item fw-semibold text-danger">
Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-auto px-0 px-xxl-5 border-start-xxl border-translucent" data-details-container>
                  <div className="phoenix-offcanvas file-details-offcanvas scrollbar overflow-x-hidden bg-body-emphasis" id="fileDetailsOffcanvas" data-breakpoint={"xxl"}>
                    <button className="btn p-0 fs-8 d-xxl-none position-absolute top-0 end-0 mt-4 me-4" data-phoenix-dismiss={"offcanvas"}>
                      <span className="fa-solid fa-xmark">                      </span>
                    </button>
                    <div data-file-details>
                      <div className="text-center px-4">
                        <PhoenixImage src="/assets/img/spot-illustrations/46.png" alt="" className="d-dark-none img-fluid" />
                        <PhoenixImage src="/assets/img/spot-illustrations/dark_46.png" alt="" className="d-light-none img-fluid" />
                        <h5 className="mt-4">
Select an item to view more information
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="phoenix-offcanvas-backdrop d-xxl-none" data-phoenix-backdrop>                  </div>
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
