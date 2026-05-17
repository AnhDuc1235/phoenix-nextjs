'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Feather() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Feather Icons
    </h2>

    <p className="text-body-tertiary lead mb-2">
Simply beautiful open source icons
    </p>
    <a href="https://feathericons.com/" className="btn btn-link p-0"  target="_blank">
Feather Icons Documentation      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mb-9">
      <div className="card shadow-none border my-5" data-component-card>
        <div className="card-header p-4 border-bottom bg-body">
          <div className="row g-3 justify-content-between align-items-end">
            <div className="col-12 col-md">
              <h4 className="text-body mb-0" data-anchor>
Example
              </h4>
              <p className="mb-0 mt-2 text-body-secondary">
You can use these icons with color and font-size helper classes like the example below:
              </p>
            </div>
            <div className="col col-md-auto">
              <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                <a href="#example-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="example-code" aria-expanded="false">
                  <span className="me-2" data-feather={"code"}>                  </span>View code
                </a>
                <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                  <span className="me-2" data-feather={"eye"}>                  </span>Hide code
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="collapse code-collapse" id="example-code">
            <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><span class=\\\"text-danger\\\" data-feather=\\\"bell\\\" style=\\\"height: 70px; width: 70px;\\\"></span></code>"}
            </pre>
          </div>
          <div className="p-4 code-to-copy">
            <span className="text-danger" data-feather={"bell"} style={{"height":"70px","width":"70px"} as CSSProperties}>            </span>
          </div>
        </div>
      </div>
      <div className="card border mb-3" data-list={"{\"valueNames\":[\"icon-list-item\"]}"}>
        <div className="card-header border-bottom bg-body">
          <div className="row flex-between-center g-2">
            <div className="col-auto">
              <h4 className="mb-0">
Icons List
              </h4>
            </div>
            <div className="col-auto col-sm-6">
              <div className="text-end">
                <input className="form-control d-inline-block rounded-3 search" type="search" placeholder="Search" style={{"width":"250px"} as CSSProperties} />
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row list" id="icon-list">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
activity
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"activity"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="activity" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
airplay
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"airplay"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="airplay" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
alert-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"alert-circle"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="alert-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
alert-octagon
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"alert-octagon"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="alert-octagon" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
alert-triangle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"alert-triangle"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="alert-triangle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
align-center
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"align-center"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="align-center" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
align-justify
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"align-justify"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="align-justify" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
align-left
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"align-left"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="align-left" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
align-right
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"align-right"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="align-right" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
anchor
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"anchor"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="anchor" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
aperture
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"aperture"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="aperture" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
archive
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"archive"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="archive" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
arrow-down-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"arrow-down-circle"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="arrow-down-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
arrow-down-left
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"arrow-down-left"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="arrow-down-left" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
arrow-down-right
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"arrow-down-right"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="arrow-down-right" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
arrow-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"arrow-down"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="arrow-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
arrow-left-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"arrow-left-circle"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="arrow-left-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
arrow-left
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"arrow-left"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="arrow-left" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
arrow-right-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"arrow-right-circle"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="arrow-right-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
arrow-right
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"arrow-right"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="arrow-right" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
arrow-up-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"arrow-up-circle"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="arrow-up-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
arrow-up-left
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"arrow-up-left"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="arrow-up-left" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
arrow-up-right
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"arrow-up-right"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="arrow-up-right" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
arrow-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"arrow-up"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="arrow-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
at-sign
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"at-sign"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="at-sign" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
award
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"award"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="award" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
bar-chart-2
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"bar-chart-2"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="bar-chart-2" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
bar-chart
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"bar-chart"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="bar-chart" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
battery-charging
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"battery-charging"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="battery-charging" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
battery
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"battery"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="battery" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
bell-off
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"bell-off"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="bell-off" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
bell
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"bell"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="bell" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
bluetooth
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"bluetooth"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="bluetooth" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
bold
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"bold"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="bold" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
book-open
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"book-open"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="book-open" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
book
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"book"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="book" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
bookmark
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"bookmark"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="bookmark" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
box
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"box"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="box" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
briefcase
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"briefcase"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="briefcase" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
calendar
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"calendar"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="calendar" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
camera-off
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"camera-off"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="camera-off" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
camera
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"camera"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="camera" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
cast
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"cast"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="cast" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
check-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"check-circle"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="check-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
check-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"check-square"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="check-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
check
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"check"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="check" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
chevron-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"chevron-down"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="chevron-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
chevron-left
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"chevron-left"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="chevron-left" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
chevron-right
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"chevron-right"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="chevron-right" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
chevron-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"chevron-up"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="chevron-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
chevrons-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"chevrons-down"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="chevrons-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
chevrons-left
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"chevrons-left"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="chevrons-left" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
chevrons-right
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"chevrons-right"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="chevrons-right" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
chevrons-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"chevrons-up"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="chevrons-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
chrome
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"chrome"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="chrome" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"circle"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
clipboard
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"clipboard"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="clipboard" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
clock
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"clock"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="clock" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
cloud-drizzle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"cloud-drizzle"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="cloud-drizzle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
cloud-lightning
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"cloud-lightning"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="cloud-lightning" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
cloud-off
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"cloud-off"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="cloud-off" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
cloud-rain
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"cloud-rain"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="cloud-rain" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
cloud-snow
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"cloud-snow"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="cloud-snow" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
cloud
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"cloud"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="cloud" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
code
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"code"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="code" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
codepen
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"codepen"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="codepen" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
codesandbox
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"codesandbox"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="codesandbox" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
coffee
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"coffee"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="coffee" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
columns
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"columns"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="columns" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
command
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"command"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="command" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
compass
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"compass"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="compass" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
copy
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"copy"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="copy" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
corner-down-left
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"corner-down-left"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="corner-down-left" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
corner-down-right
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"corner-down-right"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="corner-down-right" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
corner-left-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"corner-left-down"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="corner-left-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
corner-left-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"corner-left-up"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="corner-left-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
corner-right-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"corner-right-down"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="corner-right-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
corner-right-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"corner-right-up"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="corner-right-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
corner-up-left
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"corner-up-left"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="corner-up-left" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
corner-up-right
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"corner-up-right"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="corner-up-right" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
cpu
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"cpu"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="cpu" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
credit-card
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"credit-card"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="credit-card" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
crop
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"crop"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="crop" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
crosshair
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"crosshair"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="crosshair" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
database
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"database"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="database" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
delete
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"delete"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="delete" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
disc
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"disc"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="disc" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
divide-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"divide-circle"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="divide-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
divide-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"divide-square"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="divide-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
divide
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"divide"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="divide" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
dollar-sign
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"dollar-sign"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="dollar-sign" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
download-cloud
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"download-cloud"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="download-cloud" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
download
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"download"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="download" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
dribbble
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"dribbble"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="dribbble" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
droplet
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"droplet"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="droplet" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
edit-2
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"edit-2"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="edit-2" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
edit-3
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"edit-3"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="edit-3" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
edit
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"edit"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="edit" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
external-link
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"external-link"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="external-link" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
eye-off
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"eye-off"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="eye-off" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
eye
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"eye"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="eye" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
facebook
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"facebook"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="facebook" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fast-forward
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"fast-forward"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fast-forward" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
feather
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"feather"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="feather" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
figma
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"figma"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="figma" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
file-minus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"file-minus"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="file-minus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
file-plus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"file-plus"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="file-plus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
file-text
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"file-text"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="file-text" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
file
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"file"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="file" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
film
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"film"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="film" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
filter
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"filter"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="filter" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
flag
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"flag"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="flag" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
folder-minus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"folder-minus"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="folder-minus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
folder-plus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"folder-plus"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="folder-plus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
folder
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"folder"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="folder" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
framer
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"framer"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="framer" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
frown
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"frown"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="frown" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
gift
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"gift"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="gift" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
git-branch
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"git-branch"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="git-branch" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
git-commit
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"git-commit"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="git-commit" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
git-merge
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"git-merge"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="git-merge" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
git-pull-request
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"git-pull-request"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="git-pull-request" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
github
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"github"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="github" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
gitlab
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"gitlab"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="gitlab" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
globe
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"globe"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="globe" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
grid
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"grid"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="grid" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
hard-drive
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"hard-drive"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="hard-drive" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
hash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"hash"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="hash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
headphones
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"headphones"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="headphones" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
heart
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"heart"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="heart" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
help-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"help-circle"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="help-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
hexagon
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"hexagon"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="hexagon" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
home
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"home"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="home" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
image
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"image"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="image" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
inbox
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"inbox"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="inbox" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
info
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"info"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="info" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
instagram
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"instagram"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="instagram" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
italic
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"italic"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="italic" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
key
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"key"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="key" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
layers
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"layers"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="layers" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
layout
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"layout"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="layout" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
life-buoy
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"life-buoy"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="life-buoy" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
link-2
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"link-2"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="link-2" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
link
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"link"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="link" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
linkedin
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"linkedin"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="linkedin" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
list
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"list"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="list" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
loader
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"loader"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="loader" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
lock
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"lock"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="lock" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
log-in
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"log-in"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="log-in" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
log-out
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"log-out"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="log-out" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
mail
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"mail"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="mail" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
map-pin
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"map-pin"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="map-pin" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
map
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"map"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="map" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
maximize-2
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"maximize-2"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="maximize-2" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
maximize
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"maximize"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="maximize" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
meh
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"meh"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="meh" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
menu
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"menu"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="menu" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
message-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"message-circle"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="message-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
message-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"message-square"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="message-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
mic-off
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"mic-off"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="mic-off" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
mic
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"mic"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="mic" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
minimize-2
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"minimize-2"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="minimize-2" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
minimize
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"minimize"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="minimize" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
minus-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"minus-circle"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="minus-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
minus-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"minus-square"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="minus-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
minus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"minus"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="minus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
monitor
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"monitor"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="monitor" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
moon
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"moon"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="moon" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
more-horizontal
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"more-horizontal"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="more-horizontal" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
more-vertical
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"more-vertical"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="more-vertical" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
mouse-pointer
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"mouse-pointer"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="mouse-pointer" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
move
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"move"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="move" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
music
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"music"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="music" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
navigation-2
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"navigation-2"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="navigation-2" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
navigation
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"navigation"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="navigation" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
octagon
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"octagon"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="octagon" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
package
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"package"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="package" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
paperclip
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"paperclip"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="paperclip" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
pause-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"pause-circle"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="pause-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
pause
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"pause"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="pause" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
pen-tool
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"pen-tool"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="pen-tool" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
percent
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"percent"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="percent" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
phone-call
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"phone-call"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="phone-call" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
phone-forwarded
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"phone-forwarded"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="phone-forwarded" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
phone-incoming
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"phone-incoming"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="phone-incoming" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
phone-missed
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"phone-missed"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="phone-missed" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
phone-off
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"phone-off"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="phone-off" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
phone-outgoing
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"phone-outgoing"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="phone-outgoing" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
phone
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"phone"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="phone" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
pie-chart
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"pie-chart"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="pie-chart" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
play-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"play-circle"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="play-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
play
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"play"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="play" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
plus-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"plus-circle"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="plus-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
plus-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"plus-square"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="plus-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
plus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"plus"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="plus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
pocket
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"pocket"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="pocket" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
power
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"power"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="power" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
printer
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"printer"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="printer" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
radio
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"radio"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="radio" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
refresh-ccw
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"refresh-ccw"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="refresh-ccw" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
refresh-cw
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"refresh-cw"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="refresh-cw" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
repeat
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"repeat"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="repeat" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
rewind
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"rewind"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="rewind" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
rotate-ccw
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"rotate-ccw"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="rotate-ccw" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
rotate-cw
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"rotate-cw"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="rotate-cw" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
rss
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"rss"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="rss" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
save
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"save"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="save" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
scissors
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"scissors"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="scissors" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
search
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"search"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="search" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
send
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"send"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="send" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
server
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"server"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="server" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
settings
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"settings"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="settings" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
share-2
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"share-2"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="share-2" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
share
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"share"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="share" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
shield-off
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"shield-off"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="shield-off" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
shield
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"shield"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="shield" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
shopping-bag
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"shopping-bag"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="shopping-bag" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
shopping-cart
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"shopping-cart"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="shopping-cart" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
shuffle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"shuffle"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="shuffle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
sidebar
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"sidebar"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="sidebar" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
skip-back
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"skip-back"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="skip-back" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
skip-forward
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"skip-forward"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="skip-forward" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
slack
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"slack"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="slack" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
slash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"slash"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="slash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
sliders
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"sliders"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="sliders" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
smartphone
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"smartphone"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="smartphone" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
smile
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"smile"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="smile" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
speaker
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"speaker"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="speaker" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"square"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
star
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"star"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="star" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
stop-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"stop-circle"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="stop-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
sun
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"sun"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="sun" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
sunrise
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"sunrise"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="sunrise" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
sunset
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"sunset"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="sunset" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
tablet
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"tablet"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="tablet" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
tag
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"tag"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="tag" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
target
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"target"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="target" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
terminal
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"terminal"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="terminal" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
thermometer
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"thermometer"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="thermometer" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
thumbs-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"thumbs-down"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="thumbs-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
thumbs-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"thumbs-up"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="thumbs-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
toggle-left
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"toggle-left"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="toggle-left" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
toggle-right
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"toggle-right"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="toggle-right" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
tool
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"tool"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="tool" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
trash-2
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"trash-2"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="trash-2" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
trash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"trash"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="trash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
trello
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"trello"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="trello" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
trending-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"trending-down"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="trending-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
trending-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"trending-up"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="trending-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
triangle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"triangle"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="triangle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
truck
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"truck"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="truck" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
tv
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"tv"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="tv" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
twitch
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"twitch"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="twitch" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
twitter
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"twitter"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="twitter" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
type
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"type"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="type" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
umbrella
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"umbrella"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="umbrella" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
underline
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"underline"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="underline" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
unlock
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"unlock"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="unlock" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
upload-cloud
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"upload-cloud"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="upload-cloud" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
upload
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"upload"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="upload" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
user-check
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"user-check"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="user-check" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
user-minus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"user-minus"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="user-minus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
user-plus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"user-plus"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="user-plus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
user-x
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"user-x"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="user-x" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
user
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"user"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="user" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
users
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"users"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="users" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
video-off
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"video-off"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="video-off" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
video
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"video"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="video" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
voicemail
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"voicemail"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="voicemail" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
volume-1
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"volume-1"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="volume-1" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
volume-2
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"volume-2"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="volume-2" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
volume-x
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"volume-x"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="volume-x" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
volume
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"volume"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="volume" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
watch
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"watch"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="watch" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
wifi-off
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"wifi-off"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="wifi-off" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
wifi
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"wifi"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="wifi" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
wind
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"wind"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="wind" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
x-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"x-circle"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="x-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
x-octagon
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"x-octagon"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="x-octagon" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
x-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"x-square"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="x-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
x
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"x"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="x" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
youtube
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"youtube"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="youtube" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
zap-off
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"zap-off"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="zap-off" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
zap
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"zap"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="zap" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
zoom-in
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"zoom-in"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="zoom-in" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
zoom-out
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5" data-feather={"zoom-out"}>                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="zoom-out" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="position-fixed bottom-0 end-0 p-3" style={{"zIndex":"1050"} as CSSProperties}>
      <div className="toast align-items-center text-white bg-dark border-0" id="icon-copied-toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="d-flex" data-bs-theme={"dark"}>
          <div className="toast-body p-3">          </div>
          <button className="btn-close me-2 m-auto" type="button" data-bs-dismiss={"toast"} aria-label="Close">          </button>
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
