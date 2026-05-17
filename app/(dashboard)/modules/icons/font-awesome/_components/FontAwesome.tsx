'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function FontAwesome() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Font Awesome
    </h2>

    <p className="text-body-tertiary lead mb-2">
Get vector icons and social logos on your website with Font Awesome, the web's most popular icon set and toolkit.
    </p>
    <a href="https://fontawesome.com/" className="btn btn-link p-0"  target="_blank">
Font Awesome Documentation      <span className="ms-1" data-feather={"chevron-right"}>      </span>
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
{"<code class=\"language-html\"><span class=\\\"fas fa-bell text-danger fs-3\\\"></span></code>"}
            </pre>
          </div>
          <div className="p-4 code-to-copy">
            <span className="fas fa-bell text-danger fs-3">            </span>
          </div>
        </div>
      </div>
      <div className="card border mb-3">
        <div className="card-body">
          <div className="row list" id="icon-list">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-address-book
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-address-book">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-address-book" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-address-card
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-address-card">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-address-card" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-angry
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-angry">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-angry" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-arrow-alt-circle-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-arrow-alt-circle-down">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-arrow-alt-circle-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-arrow-alt-circle-left
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-arrow-alt-circle-left">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-arrow-alt-circle-left" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-arrow-alt-circle-right
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-arrow-alt-circle-right">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-arrow-alt-circle-right" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-arrow-alt-circle-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-arrow-alt-circle-up">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-arrow-alt-circle-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-bell
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-bell">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-bell" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-bell-slash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-bell-slash">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-bell-slash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-bookmark
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-bookmark">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-bookmark" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-building
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-building">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-building" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-calendar
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-calendar">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-calendar" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-calendar-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-calendar-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-calendar-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-calendar-check
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-calendar-check">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-calendar-check" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-calendar-minus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-calendar-minus">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-calendar-minus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-calendar-plus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-calendar-plus">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-calendar-plus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-calendar-times
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-calendar-times">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-calendar-times" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-caret-square-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-caret-square-down">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-caret-square-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-caret-square-left
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-caret-square-left">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-caret-square-left" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-caret-square-right
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-caret-square-right">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-caret-square-right" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-caret-square-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-caret-square-up">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-caret-square-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-chart-bar
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-chart-bar">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-chart-bar" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-check-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-check-circle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-check-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-check-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-check-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-check-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-circle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-clipboard
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-clipboard">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-clipboard" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-clock
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-clock">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-clock" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-clone
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-clone">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-clone" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-closed-captioning
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-closed-captioning">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-closed-captioning" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-comment
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-comment">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-comment" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-comment-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-comment-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-comment-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-comment-dots
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-comment-dots">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-comment-dots" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-comments
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-comments">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-comments" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-compass
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-compass">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-compass" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-copy
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-copy">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-copy" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-copyright
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-copyright">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-copyright" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-credit-card
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-credit-card">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-credit-card" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-dizzy
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-dizzy">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-dizzy" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-dot-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-dot-circle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-dot-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-edit
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-edit">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-edit" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-envelope
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-envelope">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-envelope" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-envelope-open
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-envelope-open">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-envelope-open" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-eye
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-eye">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-eye" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-eye-slash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-eye-slash">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-eye-slash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-file
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-file">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-file" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-file-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-file-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-file-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-file-archive
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-file-archive">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-file-archive" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-file-audio
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-file-audio">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-file-audio" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-file-code
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-file-code">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-file-code" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-file-excel
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-file-excel">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-file-excel" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-file-image
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-file-image">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-file-image" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-file-pdf
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-file-pdf">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-file-pdf" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-file-powerpoint
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-file-powerpoint">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-file-powerpoint" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-file-video
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-file-video">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-file-video" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-file-word
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-file-word">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-file-word" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-flag
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-flag">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-flag" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-flushed
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-flushed">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-flushed" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-folder
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-folder">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-folder" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-folder-open
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-folder-open">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-folder-open" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-frown
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-frown">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-frown" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-frown-open
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-frown-open">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-frown-open" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-futbol
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-futbol">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-futbol" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-gem
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-gem">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-gem" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-grimace
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-grimace">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-grimace" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-grin
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-grin">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-grin" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-grin-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-grin-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-grin-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-grin-beam
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-grin-beam">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-grin-beam" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-grin-beam-sweat
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-grin-beam-sweat">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-grin-beam-sweat" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-grin-hearts
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-grin-hearts">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-grin-hearts" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-grin-squint
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-grin-squint">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-grin-squint" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-grin-squint-tears
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-grin-squint-tears">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-grin-squint-tears" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-grin-stars
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-grin-stars">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-grin-stars" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-grin-tears
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-grin-tears">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-grin-tears" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-grin-tongue
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-grin-tongue">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-grin-tongue" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-grin-tongue-squint
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-grin-tongue-squint">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-grin-tongue-squint" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-grin-tongue-wink
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-grin-tongue-wink">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-grin-tongue-wink" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-grin-wink
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-grin-wink">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-grin-wink" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-hand-lizard
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-hand-lizard">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-hand-lizard" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-hand-paper
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-hand-paper">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-hand-paper" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-hand-peace
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-hand-peace">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-hand-peace" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-hand-point-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-hand-point-down">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-hand-point-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-hand-point-left
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-hand-point-left">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-hand-point-left" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-hand-point-right
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-hand-point-right">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-hand-point-right" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-hand-point-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-hand-point-up">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-hand-point-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-hand-pointer
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-hand-pointer">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-hand-pointer" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-hand-rock
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-hand-rock">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-hand-rock" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-hand-scissors
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-hand-scissors">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-hand-scissors" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-hand-spock
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-hand-spock">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-hand-spock" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-handshake
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-handshake">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-handshake" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-hdd
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-hdd">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-hdd" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-heart
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-heart">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-heart" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-hospital
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-hospital">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-hospital" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-hourglass
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-hourglass">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-hourglass" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-id-badge
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-id-badge">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-id-badge" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-id-card
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-id-card">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-id-card" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-image
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-image">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-image" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-images
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-images">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-images" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-keyboard
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-keyboard">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-keyboard" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-kiss
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-kiss">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-kiss" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-kiss-beam
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-kiss-beam">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-kiss-beam" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-kiss-wink-heart
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-kiss-wink-heart">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-kiss-wink-heart" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-laugh
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-laugh">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-laugh" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-laugh-beam
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-laugh-beam">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-laugh-beam" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-laugh-squint
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-laugh-squint">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-laugh-squint" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-laugh-wink
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-laugh-wink">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-laugh-wink" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-lemon
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-lemon">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-lemon" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-life-ring
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-life-ring">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-life-ring" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-lightbulb
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-lightbulb">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-lightbulb" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-list-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-list-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-list-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-map
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-map">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-map" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-meh
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-meh">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-meh" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-meh-blank
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-meh-blank">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-meh-blank" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-meh-rolling-eyes
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-meh-rolling-eyes">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-meh-rolling-eyes" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-minus-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-minus-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-minus-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-money-bill-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-money-bill-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-money-bill-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-moon
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-moon">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-moon" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-newspaper
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-newspaper">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-newspaper" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-object-group
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-object-group">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-object-group" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-object-ungroup
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-object-ungroup">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-object-ungroup" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-paper-plane
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-paper-plane">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-paper-plane" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-pause-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-pause-circle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-pause-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-play-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-play-circle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-play-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-plus-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-plus-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-plus-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-question-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-question-circle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-question-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-registered
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-registered">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-registered" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-sad-cry
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-sad-cry">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-sad-cry" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-sad-tear
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-sad-tear">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-sad-tear" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-save
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-save">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-save" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-share-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-share-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-share-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-smile
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-smile">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-smile" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-smile-beam
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-smile-beam">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-smile-beam" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-smile-wink
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-smile-wink">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-smile-wink" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-snowflake
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-snowflake">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-snowflake" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-star
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-star">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-star" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-star-half
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-star-half">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-star-half" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-sticky-note
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-sticky-note">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-sticky-note" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-stop-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-stop-circle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-stop-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-sun
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-sun">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-sun" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-surprise
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-surprise">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-surprise" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-thumbs-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-thumbs-down">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-thumbs-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-thumbs-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-thumbs-up">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-thumbs-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-times-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-times-circle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-times-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-tired
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-tired">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-tired" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-trash-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-trash-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-trash-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-user
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-user">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-user" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-user-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-user-circle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-user-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-window-close
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-window-close">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-window-close" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-window-maximize
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-window-maximize">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-window-maximize" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-window-minimize
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-window-minimize">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-window-minimize" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
far fa-window-restore
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 far fa-window-restore">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="far fa-window-restore" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-500px
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-500px">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-500px" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-accessible-icon
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-accessible-icon">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-accessible-icon" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-accusoft
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-accusoft">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-accusoft" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-acquisitions-incorporated
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-acquisitions-incorporated">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-acquisitions-incorporated" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-adn
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-adn">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-adn" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-adobe
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-adobe">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-adobe" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-adversal
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-adversal">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-adversal" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-affiliatetheme
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-affiliatetheme">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-affiliatetheme" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-airbnb
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-airbnb">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-airbnb" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-algolia
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-algolia">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-algolia" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-alipay
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-alipay">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-alipay" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-amazon
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-amazon">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-amazon" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-amazon-pay
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-amazon-pay">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-amazon-pay" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-amilia
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-amilia">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-amilia" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-android
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-android">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-android" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-angellist
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-angellist">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-angellist" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-angrycreative
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-angrycreative">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-angrycreative" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-angular
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-angular">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-angular" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-app-store
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-app-store">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-app-store" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-app-store-ios
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-app-store-ios">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-app-store-ios" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-apper
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-apper">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-apper" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-apple
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-apple">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-apple" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-apple-pay
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-apple-pay">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-apple-pay" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-artstation
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-artstation">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-artstation" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-asymmetrik
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-asymmetrik">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-asymmetrik" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-atlassian
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-atlassian">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-atlassian" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-audible
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-audible">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-audible" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-autoprefixer
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-autoprefixer">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-autoprefixer" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-avianex
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-avianex">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-avianex" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-aviato
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-aviato">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-aviato" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-aws
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-aws">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-aws" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-bandcamp
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-bandcamp">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-bandcamp" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-battle-net
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-battle-net">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-battle-net" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-behance
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-behance">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-behance" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-behance-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-behance-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-behance-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-bimobject
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-bimobject">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-bimobject" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-bitbucket
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-bitbucket">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-bitbucket" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-bitcoin
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-bitcoin">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-bitcoin" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-bity
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-bity">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-bity" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-black-tie
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-black-tie">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-black-tie" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-blackberry
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-blackberry">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-blackberry" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-blogger
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-blogger">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-blogger" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-blogger-b
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-blogger-b">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-blogger-b" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-bluetooth
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-bluetooth">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-bluetooth" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-bluetooth-b
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-bluetooth-b">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-bluetooth-b" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-bootstrap
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-bootstrap">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-bootstrap" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-btc
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-btc">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-btc" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-buffer
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-buffer">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-buffer" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-buromobelexperte
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-buromobelexperte">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-buromobelexperte" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-buy-n-large
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-buy-n-large">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-buy-n-large" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-buysellads
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-buysellads">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-buysellads" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-canadian-maple-leaf
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-canadian-maple-leaf">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-canadian-maple-leaf" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-cc-amazon-pay
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-cc-amazon-pay">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-cc-amazon-pay" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-cc-amex
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-cc-amex">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-cc-amex" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-cc-apple-pay
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-cc-apple-pay">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-cc-apple-pay" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-cc-diners-club
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-cc-diners-club">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-cc-diners-club" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-cc-discover
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-cc-discover">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-cc-discover" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-cc-jcb
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-cc-jcb">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-cc-jcb" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-cc-mastercard
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-cc-mastercard">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-cc-mastercard" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-cc-paypal
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-cc-paypal">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-cc-paypal" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-cc-stripe
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-cc-stripe">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-cc-stripe" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-cc-visa
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-cc-visa">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-cc-visa" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-centercode
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-centercode">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-centercode" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-centos
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-centos">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-centos" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-chrome
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-chrome">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-chrome" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-chromecast
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-chromecast">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-chromecast" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-cloudscale
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-cloudscale">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-cloudscale" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-cloudsmith
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-cloudsmith">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-cloudsmith" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-cloudversify
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-cloudversify">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-cloudversify" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-codepen
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-codepen">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-codepen" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-codiepie
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-codiepie">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-codiepie" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-confluence
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-confluence">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-confluence" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-connectdevelop
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-connectdevelop">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-connectdevelop" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-contao
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-contao">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-contao" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-cotton-bureau
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-cotton-bureau">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-cotton-bureau" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-cpanel
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-cpanel">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-cpanel" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-creative-commons
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-creative-commons">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-creative-commons" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-creative-commons-by
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-creative-commons-by">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-creative-commons-by" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-creative-commons-nc
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-creative-commons-nc">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-creative-commons-nc" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-creative-commons-nc-eu
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-creative-commons-nc-eu">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-creative-commons-nc-eu" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-creative-commons-nc-jp
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-creative-commons-nc-jp">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-creative-commons-nc-jp" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-creative-commons-nd
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-creative-commons-nd">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-creative-commons-nd" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-creative-commons-pd
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-creative-commons-pd">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-creative-commons-pd" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-creative-commons-pd-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-creative-commons-pd-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-creative-commons-pd-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-creative-commons-remix
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-creative-commons-remix">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-creative-commons-remix" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-creative-commons-sa
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-creative-commons-sa">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-creative-commons-sa" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-creative-commons-sampling
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-creative-commons-sampling">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-creative-commons-sampling" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-creative-commons-sampling-plus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-creative-commons-sampling-plus">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-creative-commons-sampling-plus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-creative-commons-share
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-creative-commons-share">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-creative-commons-share" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-creative-commons-zero
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-creative-commons-zero">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-creative-commons-zero" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-critical-role
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-critical-role">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-critical-role" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-css3
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-css3">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-css3" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-css3-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-css3-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-css3-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-cuttlefish
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-cuttlefish">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-cuttlefish" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-d-and-d
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-d-and-d">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-d-and-d" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-d-and-d-beyond
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-d-and-d-beyond">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-d-and-d-beyond" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-dailymotion
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-dailymotion">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-dailymotion" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-dashcube
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-dashcube">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-dashcube" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-delicious
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-delicious">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-delicious" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-deploydog
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-deploydog">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-deploydog" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-deskpro
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-deskpro">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-deskpro" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-dev
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-dev">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-dev" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-deviantart
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-deviantart">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-deviantart" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-dhl
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-dhl">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-dhl" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-diaspora
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-diaspora">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-diaspora" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-digg
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-digg">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-digg" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-digital-ocean
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-digital-ocean">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-digital-ocean" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-discord
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-discord">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-discord" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-discourse
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-discourse">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-discourse" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-dochub
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-dochub">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-dochub" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-docker
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-docker">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-docker" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-draft2digital
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-draft2digital">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-draft2digital" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-dribbble
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-dribbble">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-dribbble" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-dribbble-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-dribbble-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-dribbble-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-dropbox
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-dropbox">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-dropbox" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-drupal
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-drupal">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-drupal" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-dyalog
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-dyalog">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-dyalog" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-earlybirds
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-earlybirds">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-earlybirds" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-ebay
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-ebay">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-ebay" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-edge
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-edge">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-edge" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-elementor
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-elementor">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-elementor" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-ello
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-ello">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-ello" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-ember
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-ember">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-ember" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-empire
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-empire">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-empire" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-envira
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-envira">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-envira" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-erlang
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-erlang">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-erlang" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-ethereum
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-ethereum">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-ethereum" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-etsy
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-etsy">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-etsy" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-evernote
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-evernote">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-evernote" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-expeditedssl
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-expeditedssl">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-expeditedssl" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-facebook
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-facebook">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-facebook" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-facebook-f
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-facebook-f">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-facebook-f" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-facebook-messenger
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-facebook-messenger">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-facebook-messenger" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-facebook-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-facebook-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-facebook-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-fantasy-flight-games
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-fantasy-flight-games">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-fantasy-flight-games" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-fedex
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-fedex">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-fedex" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-fedora
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-fedora">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-fedora" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-figma
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-figma">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-figma" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-firefox
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-firefox">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-firefox" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-firefox-browser
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-firefox-browser">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-firefox-browser" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-first-order
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-first-order">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-first-order" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-first-order-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-first-order-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-first-order-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-firstdraft
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-firstdraft">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-firstdraft" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-flickr
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-flickr">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-flickr" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-flipboard
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-flipboard">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-flipboard" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-fly
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-fly">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-fly" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-font-awesome
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-font-awesome">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-font-awesome" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-font-awesome-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-font-awesome-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-font-awesome-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-font-awesome-flag
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-font-awesome-flag">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-font-awesome-flag" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-fonticons
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-fonticons">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-fonticons" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-fonticons-fi
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-fonticons-fi">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-fonticons-fi" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-fort-awesome
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-fort-awesome">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-fort-awesome" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-fort-awesome-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-fort-awesome-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-fort-awesome-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-forumbee
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-forumbee">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-forumbee" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-foursquare
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-foursquare">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-foursquare" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-free-code-camp
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-free-code-camp">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-free-code-camp" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-freebsd
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-freebsd">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-freebsd" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-fulcrum
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-fulcrum">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-fulcrum" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-galactic-republic
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-galactic-republic">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-galactic-republic" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-galactic-senate
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-galactic-senate">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-galactic-senate" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-get-pocket
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-get-pocket">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-get-pocket" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-gg
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-gg">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-gg" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-gg-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-gg-circle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-gg-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-git
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-git">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-git" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-git-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-git-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-git-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-git-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-git-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-git-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-github
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-github">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-github" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-github-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-github-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-github-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-github-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-github-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-github-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-gitkraken
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-gitkraken">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-gitkraken" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-gitlab
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-gitlab">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-gitlab" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-gitter
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-gitter">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-gitter" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-glide
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-glide">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-glide" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-glide-g
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-glide-g">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-glide-g" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-gofore
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-gofore">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-gofore" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-goodreads
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-goodreads">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-goodreads" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-goodreads-g
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-goodreads-g">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-goodreads-g" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-google
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-google">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-google" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-google-drive
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-google-drive">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-google-drive" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-google-play
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-google-play">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-google-play" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-google-plus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-google-plus">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-google-plus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-google-plus-g
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-google-plus-g">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-google-plus-g" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-google-plus-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-google-plus-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-google-plus-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-google-wallet
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-google-wallet">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-google-wallet" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-gratipay
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-gratipay">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-gratipay" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-grav
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-grav">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-grav" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-gripfire
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-gripfire">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-gripfire" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-grunt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-grunt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-grunt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-gulp
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-gulp">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-gulp" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-hacker-news
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-hacker-news">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-hacker-news" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-hacker-news-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-hacker-news-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-hacker-news-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-hackerrank
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-hackerrank">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-hackerrank" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-hips
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-hips">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-hips" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-hire-a-helper
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-hire-a-helper">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-hire-a-helper" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-hooli
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-hooli">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-hooli" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-hornbill
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-hornbill">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-hornbill" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-hotjar
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-hotjar">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-hotjar" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-houzz
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-houzz">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-houzz" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-html5
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-html5">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-html5" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-hubspot
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-hubspot">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-hubspot" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-ideal
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-ideal">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-ideal" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-imdb
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-imdb">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-imdb" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-instagram
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-instagram">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-instagram" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-instagram-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-instagram-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-instagram-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-intercom
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-intercom">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-intercom" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-internet-explorer
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-internet-explorer">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-internet-explorer" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-invision
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-invision">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-invision" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-ioxhost
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-ioxhost">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-ioxhost" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-itch-io
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-itch-io">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-itch-io" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-itunes
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-itunes">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-itunes" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-itunes-note
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-itunes-note">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-itunes-note" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-java
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-java">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-java" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-jedi-order
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-jedi-order">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-jedi-order" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-jenkins
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-jenkins">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-jenkins" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-jira
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-jira">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-jira" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-joget
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-joget">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-joget" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-joomla
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-joomla">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-joomla" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-js
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-js">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-js" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-js-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-js-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-js-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-jsfiddle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-jsfiddle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-jsfiddle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-kaggle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-kaggle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-kaggle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-keybase
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-keybase">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-keybase" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-keycdn
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-keycdn">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-keycdn" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-kickstarter
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-kickstarter">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-kickstarter" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-kickstarter-k
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-kickstarter-k">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-kickstarter-k" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-korvue
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-korvue">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-korvue" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-laravel
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-laravel">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-laravel" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-lastfm
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-lastfm">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-lastfm" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-lastfm-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-lastfm-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-lastfm-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-leanpub
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-leanpub">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-leanpub" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-less
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-less">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-less" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-line
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-line">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-line" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-linkedin
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-linkedin">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-linkedin" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-linkedin-in
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-linkedin-in">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-linkedin-in" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-linode
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-linode">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-linode" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-linux
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-linux">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-linux" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-lyft
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-lyft">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-lyft" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-magento
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-magento">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-magento" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-mailchimp
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-mailchimp">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-mailchimp" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-mandalorian
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-mandalorian">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-mandalorian" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-markdown
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-markdown">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-markdown" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-mastodon
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-mastodon">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-mastodon" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-maxcdn
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-maxcdn">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-maxcdn" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-mdb
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-mdb">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-mdb" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-medapps
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-medapps">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-medapps" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-medium
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-medium">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-medium" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-medium-m
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-medium-m">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-medium-m" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-medrt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-medrt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-medrt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-meetup
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-meetup">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-meetup" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-megaport
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-megaport">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-megaport" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-mendeley
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-mendeley">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-mendeley" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-microblog
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-microblog">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-microblog" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-microsoft
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-microsoft">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-microsoft" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-mix
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-mix">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-mix" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-mixcloud
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-mixcloud">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-mixcloud" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-mixer
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-mixer">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-mixer" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-mizuni
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-mizuni">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-mizuni" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-modx
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-modx">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-modx" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-monero
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-monero">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-monero" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-napster
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-napster">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-napster" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-neos
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-neos">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-neos" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-nimblr
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-nimblr">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-nimblr" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-node
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-node">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-node" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-node-js
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-node-js">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-node-js" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-npm
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-npm">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-npm" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-ns8
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-ns8">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-ns8" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-nutritionix
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-nutritionix">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-nutritionix" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-odnoklassniki
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-odnoklassniki">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-odnoklassniki" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-odnoklassniki-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-odnoklassniki-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-odnoklassniki-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-old-republic
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-old-republic">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-old-republic" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-opencart
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-opencart">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-opencart" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-openid
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-openid">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-openid" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-opera
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-opera">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-opera" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-optin-monster
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-optin-monster">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-optin-monster" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-orcid
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-orcid">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-orcid" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-osi
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-osi">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-osi" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-page4
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-page4">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-page4" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-pagelines
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-pagelines">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-pagelines" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-palfed
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-palfed">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-palfed" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-patreon
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-patreon">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-patreon" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-paypal
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-paypal">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-paypal" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-penny-arcade
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-penny-arcade">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-penny-arcade" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-periscope
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-periscope">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-periscope" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-phabricator
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-phabricator">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-phabricator" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-phoenix-framework
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-phoenix-framework">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-phoenix-framework" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-phoenix-squadron
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-phoenix-squadron">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-phoenix-squadron" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-php
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-php">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-php" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-pied-piper
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-pied-piper">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-pied-piper" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-pied-piper-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-pied-piper-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-pied-piper-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-pied-piper-hat
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-pied-piper-hat">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-pied-piper-hat" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-pied-piper-pp
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-pied-piper-pp">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-pied-piper-pp" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-pied-piper-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-pied-piper-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-pied-piper-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-pinterest
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-pinterest">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-pinterest" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-pinterest-p
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-pinterest-p">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-pinterest-p" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-pinterest-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-pinterest-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-pinterest-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-playstation
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-playstation">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-playstation" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-product-hunt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-product-hunt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-product-hunt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-pushed
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-pushed">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-pushed" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-python
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-python">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-python" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-qq
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-qq">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-qq" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-quinscape
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-quinscape">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-quinscape" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-quora
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-quora">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-quora" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-r-project
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-r-project">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-r-project" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-raspberry-pi
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-raspberry-pi">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-raspberry-pi" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-ravelry
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-ravelry">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-ravelry" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-react
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-react">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-react" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-reacteurope
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-reacteurope">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-reacteurope" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-readme
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-readme">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-readme" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-rebel
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-rebel">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-rebel" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-red-river
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-red-river">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-red-river" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-reddit
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-reddit">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-reddit" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-reddit-alien
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-reddit-alien">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-reddit-alien" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-reddit-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-reddit-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-reddit-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-redhat
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-redhat">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-redhat" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-renren
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-renren">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-renren" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-replyd
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-replyd">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-replyd" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-researchgate
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-researchgate">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-researchgate" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-resolving
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-resolving">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-resolving" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-rev
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-rev">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-rev" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-rocketchat
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-rocketchat">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-rocketchat" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-rockrms
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-rockrms">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-rockrms" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-safari
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-safari">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-safari" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-salesforce
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-salesforce">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-salesforce" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-sass
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-sass">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-sass" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-schlix
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-schlix">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-schlix" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-scribd
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-scribd">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-scribd" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-searchengin
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-searchengin">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-searchengin" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-sellcast
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-sellcast">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-sellcast" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-sellsy
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-sellsy">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-sellsy" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-servicestack
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-servicestack">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-servicestack" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-shirtsinbulk
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-shirtsinbulk">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-shirtsinbulk" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-shopify
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-shopify">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-shopify" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-shopware
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-shopware">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-shopware" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-simplybuilt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-simplybuilt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-simplybuilt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-sistrix
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-sistrix">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-sistrix" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-sith
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-sith">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-sith" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-sketch
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-sketch">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-sketch" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-skyatlas
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-skyatlas">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-skyatlas" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-skype
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-skype">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-skype" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-slack
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-slack">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-slack" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-slack-hash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-slack-hash">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-slack-hash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-slideshare
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-slideshare">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-slideshare" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-snapchat
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-snapchat">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-snapchat" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-snapchat-ghost
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-snapchat-ghost">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-snapchat-ghost" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-snapchat-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-snapchat-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-snapchat-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-soundcloud
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-soundcloud">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-soundcloud" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-sourcetree
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-sourcetree">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-sourcetree" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-speakap
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-speakap">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-speakap" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-speaker-deck
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-speaker-deck">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-speaker-deck" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-spotify
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-spotify">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-spotify" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-squarespace
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-squarespace">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-squarespace" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-stack-exchange
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-stack-exchange">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-stack-exchange" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-stack-overflow
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-stack-overflow">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-stack-overflow" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-stackpath
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-stackpath">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-stackpath" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-staylinked
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-staylinked">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-staylinked" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-steam
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-steam">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-steam" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-steam-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-steam-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-steam-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-steam-symbol
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-steam-symbol">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-steam-symbol" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-sticker-mule
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-sticker-mule">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-sticker-mule" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-strava
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-strava">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-strava" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-stripe
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-stripe">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-stripe" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-stripe-s
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-stripe-s">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-stripe-s" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-studiovinari
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-studiovinari">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-studiovinari" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-stumbleupon
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-stumbleupon">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-stumbleupon" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-stumbleupon-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-stumbleupon-circle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-stumbleupon-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-superpowers
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-superpowers">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-superpowers" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-supple
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-supple">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-supple" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-suse
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-suse">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-suse" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-swift
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-swift">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-swift" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-symfony
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-symfony">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-symfony" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-teamspeak
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-teamspeak">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-teamspeak" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-telegram
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-telegram">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-telegram" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-telegram-plane
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-telegram-plane">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-telegram-plane" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-tencent-weibo
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-tencent-weibo">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-tencent-weibo" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-the-red-yeti
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-the-red-yeti">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-the-red-yeti" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-themeco
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-themeco">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-themeco" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-themeisle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-themeisle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-themeisle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-think-peaks
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-think-peaks">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-think-peaks" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-trade-federation
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-trade-federation">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-trade-federation" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-trello
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-trello">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-trello" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-tripadvisor
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-tripadvisor">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-tripadvisor" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-tumblr
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-tumblr">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-tumblr" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-tumblr-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-tumblr-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-tumblr-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-twitch
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-twitch">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-twitch" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-twitter
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-twitter">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-twitter" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-twitter-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-twitter-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-twitter-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-typo3
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-typo3">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-typo3" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-uber
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-uber">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-uber" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-ubuntu
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-ubuntu">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-ubuntu" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-uikit
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-uikit">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-uikit" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-umbraco
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-umbraco">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-umbraco" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-uniregistry
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-uniregistry">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-uniregistry" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-unity
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-unity">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-unity" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-untappd
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-untappd">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-untappd" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-ups
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-ups">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-ups" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-usb
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-usb">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-usb" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-usps
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-usps">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-usps" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-ussunnah
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-ussunnah">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-ussunnah" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-vaadin
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-vaadin">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-vaadin" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-viacoin
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-viacoin">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-viacoin" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-viadeo
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-viadeo">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-viadeo" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-viadeo-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-viadeo-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-viadeo-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-viber
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-viber">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-viber" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-vimeo
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-vimeo">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-vimeo" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-vimeo-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-vimeo-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-vimeo-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-vimeo-v
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-vimeo-v">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-vimeo-v" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-vine
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-vine">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-vine" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-vk
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-vk">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-vk" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-vnv
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-vnv">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-vnv" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-vuejs
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-vuejs">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-vuejs" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-waze
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-waze">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-waze" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-weebly
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-weebly">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-weebly" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-weibo
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-weibo">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-weibo" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-weixin
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-weixin">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-weixin" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-whatsapp
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-whatsapp">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-whatsapp" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-whatsapp-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-whatsapp-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-whatsapp-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-whmcs
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-whmcs">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-whmcs" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-wikipedia-w
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-wikipedia-w">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-wikipedia-w" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-windows
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-windows">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-windows" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-wix
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-wix">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-wix" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-wizards-of-the-coast
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-wizards-of-the-coast">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-wizards-of-the-coast" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-wolf-pack-battalion
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-wolf-pack-battalion">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-wolf-pack-battalion" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-wordpress
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-wordpress">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-wordpress" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-wordpress-simple
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-wordpress-simple">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-wordpress-simple" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-wpbeginner
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-wpbeginner">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-wpbeginner" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-wpexplorer
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-wpexplorer">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-wpexplorer" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-wpforms
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-wpforms">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-wpforms" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-wpressr
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-wpressr">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-wpressr" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-xbox
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-xbox">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-xbox" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-xing
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-xing">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-xing" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-xing-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-xing-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-xing-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-y-combinator
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-y-combinator">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-y-combinator" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-yahoo
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-yahoo">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-yahoo" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-yammer
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-yammer">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-yammer" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-yandex
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-yandex">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-yandex" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-yandex-international
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-yandex-international">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-yandex-international" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-yarn
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-yarn">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-yarn" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-yelp
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-yelp">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-yelp" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-yoast
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-yoast">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-yoast" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-youtube
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-youtube">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-youtube" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-youtube-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-youtube-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-youtube-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fab fa-zhihu
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fab fa-zhihu">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fab fa-zhihu" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-ad
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-ad">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-ad" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-address-book
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-address-book">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-address-book" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-address-card
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-address-card">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-address-card" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-adjust
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-adjust">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-adjust" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-air-freshener
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-air-freshener">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-air-freshener" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-align-center
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-align-center">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-align-center" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-align-justify
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-align-justify">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-align-justify" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-align-left
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-align-left">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-align-left" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-align-right
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-align-right">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-align-right" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-allergies
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-allergies">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-allergies" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-ambulance
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-ambulance">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-ambulance" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-american-sign-language-interpreting
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-american-sign-language-interpreting">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-american-sign-language-interpreting" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-anchor
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-anchor">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-anchor" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-angle-double-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-angle-double-down">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-angle-double-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-angle-double-left
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-angle-double-left">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-angle-double-left" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-angle-double-right
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-angle-double-right">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-angle-double-right" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-angle-double-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-angle-double-up">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-angle-double-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-angle-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-angle-down">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-angle-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-angle-left
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-angle-left">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-angle-left" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-angle-right
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-angle-right">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-angle-right" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-angle-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-angle-up">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-angle-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-angry
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-angry">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-angry" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-ankh
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-ankh">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-ankh" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-apple-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-apple-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-apple-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-archive
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-archive">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-archive" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-archway
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-archway">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-archway" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-arrow-alt-circle-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-arrow-alt-circle-down">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-arrow-alt-circle-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-arrow-alt-circle-left
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-arrow-alt-circle-left">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-arrow-alt-circle-left" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-arrow-alt-circle-right
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-arrow-alt-circle-right">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-arrow-alt-circle-right" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-arrow-alt-circle-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-arrow-alt-circle-up">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-arrow-alt-circle-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-arrow-circle-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-arrow-circle-down">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-arrow-circle-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-arrow-circle-left
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-arrow-circle-left">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-arrow-circle-left" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-arrow-circle-right
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-arrow-circle-right">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-arrow-circle-right" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-arrow-circle-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-arrow-circle-up">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-arrow-circle-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-arrow-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-arrow-down">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-arrow-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-arrow-left
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-arrow-left">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-arrow-left" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-arrow-right
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-arrow-right">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-arrow-right" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-arrow-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-arrow-up">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-arrow-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-arrows-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-arrows-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-arrows-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-arrows-alt-h
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-arrows-alt-h">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-arrows-alt-h" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-arrows-alt-v
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-arrows-alt-v">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-arrows-alt-v" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-assistive-listening-systems
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-assistive-listening-systems">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-assistive-listening-systems" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-asterisk
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-asterisk">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-asterisk" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-at
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-at">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-at" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-atlas
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-atlas">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-atlas" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-atom
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-atom">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-atom" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-audio-description
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-audio-description">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-audio-description" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-award
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-award">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-award" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-baby
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-baby">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-baby" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-baby-carriage
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-baby-carriage">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-baby-carriage" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-backspace
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-backspace">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-backspace" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-backward
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-backward">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-backward" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-bacon
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-bacon">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-bacon" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-bahai
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-bahai">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-bahai" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-balance-scale
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-balance-scale">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-balance-scale" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-balance-scale-left
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-balance-scale-left">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-balance-scale-left" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-balance-scale-right
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-balance-scale-right">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-balance-scale-right" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-ban
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-ban">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-ban" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-band-aid
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-band-aid">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-band-aid" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-barcode
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-barcode">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-barcode" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-bars
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-bars">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-bars" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-baseball-ball
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-baseball-ball">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-baseball-ball" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-basketball-ball
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-basketball-ball">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-basketball-ball" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-bath
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-bath">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-bath" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-battery-empty
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-battery-empty">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-battery-empty" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-battery-full
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-battery-full">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-battery-full" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-battery-half
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-battery-half">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-battery-half" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-battery-quarter
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-battery-quarter">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-battery-quarter" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-battery-three-quarters
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-battery-three-quarters">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-battery-three-quarters" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-bed
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-bed">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-bed" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-beer
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-beer">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-beer" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-bell
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-bell">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-bell" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-bell-slash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-bell-slash">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-bell-slash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-bezier-curve
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-bezier-curve">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-bezier-curve" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-bible
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-bible">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-bible" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-bicycle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-bicycle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-bicycle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-biking
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-biking">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-biking" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-binoculars
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-binoculars">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-binoculars" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-biohazard
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-biohazard">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-biohazard" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-birthday-cake
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-birthday-cake">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-birthday-cake" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-blender
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-blender">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-blender" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-blender-phone
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-blender-phone">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-blender-phone" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-blind
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-blind">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-blind" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-blog
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-blog">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-blog" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-bold
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-bold">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-bold" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-bolt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-bolt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-bolt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-bomb
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-bomb">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-bomb" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-bone
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-bone">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-bone" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-bong
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-bong">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-bong" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-book
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-book">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-book" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-book-dead
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-book-dead">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-book-dead" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-book-medical
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-book-medical">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-book-medical" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-book-open
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-book-open">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-book-open" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-book-reader
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-book-reader">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-book-reader" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-bookmark
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-bookmark">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-bookmark" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-border-all
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-border-all">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-border-all" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-border-none
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-border-none">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-border-none" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-border-style
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-border-style">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-border-style" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-bowling-ball
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-bowling-ball">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-bowling-ball" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-box
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-box">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-box" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-box-open
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-box-open">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-box-open" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-box-tissue
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-box-tissue">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-box-tissue" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-boxes
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-boxes">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-boxes" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-braille
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-braille">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-braille" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-brain
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-brain">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-brain" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-bread-slice
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-bread-slice">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-bread-slice" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-briefcase
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-briefcase">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-briefcase" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-briefcase-medical
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-briefcase-medical">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-briefcase-medical" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-broadcast-tower
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-broadcast-tower">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-broadcast-tower" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-broom
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-broom">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-broom" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-brush
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-brush">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-brush" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-bug
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-bug">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-bug" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-building
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-building">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-building" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-bullhorn
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-bullhorn">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-bullhorn" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-bullseye
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-bullseye">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-bullseye" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-burn
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-burn">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-burn" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-bus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-bus">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-bus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-bus-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-bus-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-bus-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-business-time
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-business-time">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-business-time" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-calculator
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-calculator">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-calculator" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-calendar
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-calendar">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-calendar" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-calendar-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-calendar-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-calendar-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-calendar-check
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-calendar-check">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-calendar-check" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-calendar-day
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-calendar-day">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-calendar-day" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-calendar-minus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-calendar-minus">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-calendar-minus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-calendar-plus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-calendar-plus">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-calendar-plus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-calendar-times
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-calendar-times">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-calendar-times" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-calendar-week
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-calendar-week">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-calendar-week" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-camera
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-camera">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-camera" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-camera-retro
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-camera-retro">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-camera-retro" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-campground
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-campground">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-campground" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-candy-cane
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-candy-cane">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-candy-cane" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-cannabis
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-cannabis">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-cannabis" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-capsules
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-capsules">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-capsules" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-car
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-car">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-car" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-car-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-car-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-car-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-car-battery
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-car-battery">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-car-battery" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-car-crash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-car-crash">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-car-crash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-car-side
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-car-side">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-car-side" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-caravan
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-caravan">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-caravan" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-caret-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-caret-down">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-caret-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-caret-left
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-caret-left">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-caret-left" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-caret-right
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-caret-right">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-caret-right" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-caret-square-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-caret-square-down">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-caret-square-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-caret-square-left
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-caret-square-left">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-caret-square-left" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-caret-square-right
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-caret-square-right">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-caret-square-right" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-caret-square-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-caret-square-up">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-caret-square-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-caret-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-caret-up">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-caret-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-carrot
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-carrot">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-carrot" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-cart-arrow-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-cart-arrow-down">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-cart-arrow-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-cart-plus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-cart-plus">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-cart-plus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-cash-register
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-cash-register">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-cash-register" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-cat
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-cat">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-cat" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-certificate
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-certificate">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-certificate" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-chair
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-chair">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-chair" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-chalkboard
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-chalkboard">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-chalkboard" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-chalkboard-teacher
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-chalkboard-teacher">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-chalkboard-teacher" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-charging-station
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-charging-station">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-charging-station" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-chart-area
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-chart-area">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-chart-area" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-chart-bar
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-chart-bar">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-chart-bar" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-chart-line
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-chart-line">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-chart-line" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-chart-pie
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-chart-pie">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-chart-pie" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-check
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-check">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-check" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-check-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-check-circle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-check-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-check-double
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-check-double">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-check-double" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-check-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-check-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-check-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-cheese
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-cheese">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-cheese" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-chess
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-chess">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-chess" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-chess-bishop
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-chess-bishop">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-chess-bishop" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-chess-board
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-chess-board">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-chess-board" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-chess-king
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-chess-king">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-chess-king" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-chess-knight
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-chess-knight">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-chess-knight" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-chess-pawn
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-chess-pawn">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-chess-pawn" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-chess-queen
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-chess-queen">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-chess-queen" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-chess-rook
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-chess-rook">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-chess-rook" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-chevron-circle-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-chevron-circle-down">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-chevron-circle-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-chevron-circle-left
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-chevron-circle-left">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-chevron-circle-left" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-chevron-circle-right
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-chevron-circle-right">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-chevron-circle-right" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-chevron-circle-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-chevron-circle-up">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-chevron-circle-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-chevron-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-chevron-down">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-chevron-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-chevron-left
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-chevron-left">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-chevron-left" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-chevron-right
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-chevron-right">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-chevron-right" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-chevron-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-chevron-up">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-chevron-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-child
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-child">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-child" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-church
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-church">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-church" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-circle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-circle-notch
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-circle-notch">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-circle-notch" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-city
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-city">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-city" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-clinic-medical
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-clinic-medical">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-clinic-medical" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-clipboard
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-clipboard">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-clipboard" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-clipboard-check
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-clipboard-check">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-clipboard-check" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-clipboard-list
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-clipboard-list">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-clipboard-list" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-clock
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-clock">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-clock" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-clone
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-clone">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-clone" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-closed-captioning
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-closed-captioning">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-closed-captioning" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-cloud
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-cloud">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-cloud" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-cloud-download-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-cloud-download-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-cloud-download-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-cloud-meatball
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-cloud-meatball">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-cloud-meatball" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-cloud-moon
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-cloud-moon">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-cloud-moon" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-cloud-moon-rain
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-cloud-moon-rain">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-cloud-moon-rain" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-cloud-rain
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-cloud-rain">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-cloud-rain" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-cloud-showers-heavy
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-cloud-showers-heavy">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-cloud-showers-heavy" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-cloud-sun
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-cloud-sun">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-cloud-sun" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-cloud-sun-rain
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-cloud-sun-rain">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-cloud-sun-rain" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-cloud-upload-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-cloud-upload-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-cloud-upload-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-cocktail
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-cocktail">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-cocktail" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-code
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-code">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-code" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-code-branch
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-code-branch">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-code-branch" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-coffee
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-coffee">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-coffee" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-cog
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-cog">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-cog" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-cogs
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-cogs">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-cogs" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-coins
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-coins">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-coins" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-columns
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-columns">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-columns" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-comment
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-comment">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-comment" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-comment-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-comment-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-comment-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-comment-dollar
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-comment-dollar">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-comment-dollar" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-comment-dots
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-comment-dots">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-comment-dots" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-comment-medical
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-comment-medical">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-comment-medical" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-comment-slash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-comment-slash">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-comment-slash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-comments
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-comments">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-comments" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-comments-dollar
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-comments-dollar">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-comments-dollar" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-compact-disc
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-compact-disc">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-compact-disc" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-compass
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-compass">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-compass" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-compress
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-compress">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-compress" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-compress-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-compress-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-compress-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-compress-arrows-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-compress-arrows-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-compress-arrows-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-concierge-bell
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-concierge-bell">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-concierge-bell" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-cookie
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-cookie">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-cookie" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-cookie-bite
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-cookie-bite">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-cookie-bite" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-copy
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-copy">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-copy" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-copyright
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-copyright">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-copyright" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-couch
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-couch">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-couch" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-credit-card
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-credit-card">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-credit-card" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-crop
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-crop">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-crop" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-crop-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-crop-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-crop-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-cross
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-cross">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-cross" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-crosshairs
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-crosshairs">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-crosshairs" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-crow
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-crow">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-crow" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-crown
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-crown">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-crown" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-crutch
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-crutch">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-crutch" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-cube
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-cube">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-cube" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-cubes
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-cubes">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-cubes" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-cut
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-cut">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-cut" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-database
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-database">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-database" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-deaf
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-deaf">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-deaf" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-democrat
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-democrat">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-democrat" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-desktop
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-desktop">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-desktop" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-dharmachakra
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-dharmachakra">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-dharmachakra" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-diagnoses
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-diagnoses">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-diagnoses" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-dice
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-dice">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-dice" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-dice-d20
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-dice-d20">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-dice-d20" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-dice-d6
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-dice-d6">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-dice-d6" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-dice-five
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-dice-five">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-dice-five" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-dice-four
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-dice-four">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-dice-four" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-dice-one
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-dice-one">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-dice-one" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-dice-six
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-dice-six">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-dice-six" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-dice-three
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-dice-three">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-dice-three" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-dice-two
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-dice-two">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-dice-two" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-digital-tachograph
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-digital-tachograph">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-digital-tachograph" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-directions
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-directions">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-directions" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-disease
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-disease">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-disease" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-divide
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-divide">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-divide" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-dizzy
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-dizzy">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-dizzy" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-dna
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-dna">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-dna" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-dog
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-dog">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-dog" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-dollar-sign
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-dollar-sign">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-dollar-sign" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-dolly
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-dolly">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-dolly" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-dolly-flatbed
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-dolly-flatbed">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-dolly-flatbed" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-donate
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-donate">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-donate" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-door-closed
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-door-closed">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-door-closed" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-door-open
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-door-open">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-door-open" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-dot-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-dot-circle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-dot-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-dove
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-dove">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-dove" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-download
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-download">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-download" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-drafting-compass
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-drafting-compass">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-drafting-compass" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-dragon
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-dragon">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-dragon" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-draw-polygon
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-draw-polygon">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-draw-polygon" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-drum
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-drum">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-drum" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-drum-steelpan
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-drum-steelpan">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-drum-steelpan" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-drumstick-bite
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-drumstick-bite">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-drumstick-bite" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-dumbbell
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-dumbbell">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-dumbbell" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-dumpster
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-dumpster">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-dumpster" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-dumpster-fire
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-dumpster-fire">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-dumpster-fire" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-dungeon
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-dungeon">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-dungeon" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-edit
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-edit">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-edit" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-egg
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-egg">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-egg" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-eject
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-eject">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-eject" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-ellipsis-h
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-ellipsis-h">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-ellipsis-h" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-ellipsis-v
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-ellipsis-v">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-ellipsis-v" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-envelope
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-envelope">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-envelope" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-envelope-open
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-envelope-open">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-envelope-open" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-envelope-open-text
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-envelope-open-text">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-envelope-open-text" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-envelope-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-envelope-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-envelope-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-equals
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-equals">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-equals" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-eraser
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-eraser">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-eraser" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-ethernet
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-ethernet">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-ethernet" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-euro-sign
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-euro-sign">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-euro-sign" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-exchange-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-exchange-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-exchange-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-exclamation
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-exclamation">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-exclamation" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-exclamation-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-exclamation-circle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-exclamation-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-exclamation-triangle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-exclamation-triangle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-exclamation-triangle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-expand
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-expand">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-expand" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-expand-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-expand-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-expand-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-expand-arrows-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-expand-arrows-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-expand-arrows-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-external-link-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-external-link-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-external-link-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-external-link-square-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-external-link-square-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-external-link-square-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-eye
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-eye">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-eye" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-eye-dropper
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-eye-dropper">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-eye-dropper" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-eye-slash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-eye-slash">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-eye-slash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-fan
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-fan">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-fan" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-fast-backward
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-fast-backward">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-fast-backward" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-fast-forward
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-fast-forward">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-fast-forward" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-faucet
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-faucet">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-faucet" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-fax
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-fax">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-fax" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-feather
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-feather">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-feather" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-feather-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-feather-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-feather-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-female
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-female">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-female" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-fighter-jet
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-fighter-jet">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-fighter-jet" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-file
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-file">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-file" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-file-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-file-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-file-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-file-archive
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-file-archive">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-file-archive" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-file-audio
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-file-audio">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-file-audio" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-file-code
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-file-code">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-file-code" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-file-contract
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-file-contract">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-file-contract" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-file-csv
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-file-csv">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-file-csv" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-file-download
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-file-download">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-file-download" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-file-excel
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-file-excel">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-file-excel" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-file-export
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-file-export">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-file-export" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-file-image
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-file-image">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-file-image" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-file-import
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-file-import">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-file-import" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-file-invoice
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-file-invoice">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-file-invoice" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-file-invoice-dollar
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-file-invoice-dollar">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-file-invoice-dollar" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-file-medical
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-file-medical">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-file-medical" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-file-medical-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-file-medical-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-file-medical-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-file-pdf
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-file-pdf">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-file-pdf" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-file-powerpoint
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-file-powerpoint">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-file-powerpoint" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-file-prescription
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-file-prescription">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-file-prescription" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-file-signature
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-file-signature">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-file-signature" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-file-upload
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-file-upload">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-file-upload" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-file-video
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-file-video">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-file-video" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-file-word
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-file-word">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-file-word" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-fill
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-fill">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-fill" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-fill-drip
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-fill-drip">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-fill-drip" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-film
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-film">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-film" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-filter
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-filter">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-filter" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-fingerprint
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-fingerprint">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-fingerprint" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-fire
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-fire">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-fire" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-fire-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-fire-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-fire-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-fire-extinguisher
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-fire-extinguisher">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-fire-extinguisher" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-first-aid
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-first-aid">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-first-aid" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-fish
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-fish">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-fish" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-fist-raised
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-fist-raised">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-fist-raised" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-flag
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-flag">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-flag" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-flag-checkered
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-flag-checkered">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-flag-checkered" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-flag-usa
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-flag-usa">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-flag-usa" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-flask
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-flask">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-flask" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-flushed
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-flushed">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-flushed" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-folder
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-folder">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-folder" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-folder-minus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-folder-minus">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-folder-minus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-folder-open
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-folder-open">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-folder-open" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-folder-plus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-folder-plus">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-folder-plus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-font
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-font">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-font" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-football-ball
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-football-ball">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-football-ball" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-forward
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-forward">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-forward" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-frog
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-frog">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-frog" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-frown
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-frown">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-frown" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-frown-open
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-frown-open">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-frown-open" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-funnel-dollar
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-funnel-dollar">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-funnel-dollar" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-futbol
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-futbol">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-futbol" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-gamepad
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-gamepad">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-gamepad" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-gas-pump
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-gas-pump">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-gas-pump" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-gavel
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-gavel">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-gavel" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-gem
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-gem">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-gem" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-genderless
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-genderless">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-genderless" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-ghost
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-ghost">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-ghost" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-gift
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-gift">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-gift" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-gifts
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-gifts">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-gifts" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-glass-cheers
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-glass-cheers">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-glass-cheers" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-glass-martini
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-glass-martini">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-glass-martini" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-glass-martini-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-glass-martini-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-glass-martini-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-glass-whiskey
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-glass-whiskey">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-glass-whiskey" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-glasses
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-glasses">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-glasses" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-globe
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-globe">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-globe" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-globe-africa
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-globe-africa">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-globe-africa" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-globe-americas
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-globe-americas">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-globe-americas" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-globe-asia
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-globe-asia">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-globe-asia" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-globe-europe
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-globe-europe">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-globe-europe" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-golf-ball
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-golf-ball">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-golf-ball" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-gopuram
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-gopuram">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-gopuram" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-graduation-cap
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-graduation-cap">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-graduation-cap" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-greater-than
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-greater-than">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-greater-than" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-greater-than-equal
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-greater-than-equal">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-greater-than-equal" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-grimace
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-grimace">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-grimace" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-grin
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-grin">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-grin" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-grin-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-grin-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-grin-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-grin-beam
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-grin-beam">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-grin-beam" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-grin-beam-sweat
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-grin-beam-sweat">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-grin-beam-sweat" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-grin-hearts
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-grin-hearts">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-grin-hearts" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-grin-squint
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-grin-squint">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-grin-squint" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-grin-squint-tears
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-grin-squint-tears">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-grin-squint-tears" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-grin-stars
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-grin-stars">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-grin-stars" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-grin-tears
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-grin-tears">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-grin-tears" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-grin-tongue
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-grin-tongue">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-grin-tongue" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-grin-tongue-squint
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-grin-tongue-squint">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-grin-tongue-squint" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-grin-tongue-wink
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-grin-tongue-wink">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-grin-tongue-wink" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-grin-wink
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-grin-wink">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-grin-wink" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-grip-horizontal
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-grip-horizontal">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-grip-horizontal" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-grip-lines
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-grip-lines">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-grip-lines" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-grip-lines-vertical
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-grip-lines-vertical">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-grip-lines-vertical" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-grip-vertical
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-grip-vertical">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-grip-vertical" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-guitar
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-guitar">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-guitar" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-h-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-h-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-h-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hamburger
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hamburger">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hamburger" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hammer
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hammer">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hammer" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hamsa
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hamsa">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hamsa" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hand-holding
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hand-holding">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hand-holding" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hand-holding-heart
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hand-holding-heart">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hand-holding-heart" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hand-holding-medical
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hand-holding-medical">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hand-holding-medical" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hand-holding-usd
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hand-holding-usd">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hand-holding-usd" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hand-holding-water
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hand-holding-water">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hand-holding-water" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hand-lizard
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hand-lizard">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hand-lizard" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hand-middle-finger
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hand-middle-finger">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hand-middle-finger" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hand-paper
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hand-paper">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hand-paper" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hand-peace
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hand-peace">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hand-peace" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hand-point-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hand-point-down">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hand-point-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hand-point-left
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hand-point-left">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hand-point-left" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hand-point-right
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hand-point-right">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hand-point-right" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hand-point-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hand-point-up">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hand-point-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hand-pointer
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hand-pointer">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hand-pointer" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hand-rock
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hand-rock">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hand-rock" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hand-scissors
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hand-scissors">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hand-scissors" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hand-sparkles
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hand-sparkles">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hand-sparkles" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hand-spock
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hand-spock">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hand-spock" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hands
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hands">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hands" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hands-helping
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hands-helping">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hands-helping" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hands-wash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hands-wash">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hands-wash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-handshake
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-handshake">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-handshake" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-handshake-alt-slash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-handshake-alt-slash">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-handshake-alt-slash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-handshake-slash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-handshake-slash">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-handshake-slash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hanukiah
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hanukiah">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hanukiah" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hard-hat
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hard-hat">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hard-hat" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hashtag
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hashtag">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hashtag" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hat-cowboy
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hat-cowboy">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hat-cowboy" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hat-cowboy-side
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hat-cowboy-side">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hat-cowboy-side" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hat-wizard
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hat-wizard">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hat-wizard" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hdd
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hdd">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hdd" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-head-side-cough
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-head-side-cough">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-head-side-cough" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-head-side-cough-slash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-head-side-cough-slash">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-head-side-cough-slash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-head-side-mask
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-head-side-mask">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-head-side-mask" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-head-side-virus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-head-side-virus">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-head-side-virus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-heading
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-heading">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-heading" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-headphones
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-headphones">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-headphones" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-headphones-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-headphones-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-headphones-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-headset
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-headset">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-headset" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-heart
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-heart">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-heart" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-heart-broken
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-heart-broken">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-heart-broken" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-heartbeat
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-heartbeat">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-heartbeat" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-helicopter
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-helicopter">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-helicopter" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-highlighter
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-highlighter">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-highlighter" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hiking
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hiking">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hiking" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hippo
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hippo">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hippo" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-history
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-history">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-history" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hockey-puck
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hockey-puck">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hockey-puck" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-holly-berry
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-holly-berry">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-holly-berry" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-home
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-home">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-home" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-horse
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-horse">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-horse" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-horse-head
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-horse-head">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-horse-head" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hospital
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hospital">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hospital" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hospital-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hospital-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hospital-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hospital-symbol
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hospital-symbol">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hospital-symbol" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hospital-user
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hospital-user">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hospital-user" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hot-tub
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hot-tub">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hot-tub" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hotdog
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hotdog">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hotdog" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hotel
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hotel">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hotel" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hourglass
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hourglass">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hourglass" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hourglass-end
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hourglass-end">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hourglass-end" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hourglass-half
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hourglass-half">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hourglass-half" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hourglass-start
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hourglass-start">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hourglass-start" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-house-damage
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-house-damage">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-house-damage" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-house-user
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-house-user">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-house-user" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-hryvnia
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-hryvnia">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-hryvnia" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-i-cursor
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-i-cursor">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-i-cursor" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-ice-cream
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-ice-cream">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-ice-cream" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-icicles
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-icicles">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-icicles" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-icons
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-icons">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-icons" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-id-badge
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-id-badge">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-id-badge" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-id-card
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-id-card">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-id-card" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-id-card-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-id-card-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-id-card-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-igloo
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-igloo">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-igloo" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-image
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-image">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-image" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-images
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-images">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-images" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-inbox
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-inbox">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-inbox" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-indent
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-indent">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-indent" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-industry
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-industry">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-industry" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-infinity
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-infinity">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-infinity" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-info
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-info">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-info" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-info-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-info-circle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-info-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-italic
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-italic">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-italic" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-jedi
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-jedi">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-jedi" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-joint
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-joint">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-joint" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-journal-whills
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-journal-whills">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-journal-whills" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-kaaba
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-kaaba">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-kaaba" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-key
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-key">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-key" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-keyboard
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-keyboard">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-keyboard" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-khanda
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-khanda">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-khanda" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-kiss
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-kiss">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-kiss" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-kiss-beam
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-kiss-beam">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-kiss-beam" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-kiss-wink-heart
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-kiss-wink-heart">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-kiss-wink-heart" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-kiwi-bird
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-kiwi-bird">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-kiwi-bird" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-landmark
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-landmark">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-landmark" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-language
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-language">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-language" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-laptop
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-laptop">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-laptop" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-laptop-code
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-laptop-code">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-laptop-code" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-laptop-house
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-laptop-house">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-laptop-house" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-laptop-medical
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-laptop-medical">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-laptop-medical" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-laugh
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-laugh">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-laugh" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-laugh-beam
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-laugh-beam">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-laugh-beam" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-laugh-squint
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-laugh-squint">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-laugh-squint" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-laugh-wink
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-laugh-wink">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-laugh-wink" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-layer-group
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-layer-group">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-layer-group" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-leaf
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-leaf">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-leaf" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-lemon
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-lemon">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-lemon" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-less-than
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-less-than">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-less-than" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-less-than-equal
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-less-than-equal">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-less-than-equal" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-level-down-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-level-down-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-level-down-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-level-up-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-level-up-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-level-up-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-life-ring
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-life-ring">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-life-ring" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-lightbulb
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-lightbulb">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-lightbulb" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-link
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-link">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-link" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-lira-sign
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-lira-sign">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-lira-sign" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-list
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-list">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-list" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-list-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-list-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-list-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-list-ol
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-list-ol">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-list-ol" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-list-ul
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-list-ul">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-list-ul" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-location-arrow
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-location-arrow">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-location-arrow" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-lock
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-lock">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-lock" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-lock-open
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-lock-open">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-lock-open" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-long-arrow-alt-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-long-arrow-alt-down">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-long-arrow-alt-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-long-arrow-alt-left
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-long-arrow-alt-left">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-long-arrow-alt-left" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-long-arrow-alt-right
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-long-arrow-alt-right">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-long-arrow-alt-right" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-long-arrow-alt-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-long-arrow-alt-up">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-long-arrow-alt-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-low-vision
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-low-vision">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-low-vision" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-luggage-cart
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-luggage-cart">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-luggage-cart" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-lungs
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-lungs">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-lungs" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-lungs-virus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-lungs-virus">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-lungs-virus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-magic
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-magic">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-magic" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-magnet
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-magnet">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-magnet" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-mail-bulk
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-mail-bulk">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-mail-bulk" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-male
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-male">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-male" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-map
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-map">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-map" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-map-marked
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-map-marked">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-map-marked" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-map-marked-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-map-marked-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-map-marked-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-map-marker
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-map-marker">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-map-marker" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-map-marker-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-map-marker-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-map-marker-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-map-pin
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-map-pin">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-map-pin" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-map-signs
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-map-signs">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-map-signs" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-marker
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-marker">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-marker" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-mars
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-mars">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-mars" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-mars-double
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-mars-double">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-mars-double" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-mars-stroke
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-mars-stroke">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-mars-stroke" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-mars-stroke-h
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-mars-stroke-h">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-mars-stroke-h" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-mars-stroke-v
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-mars-stroke-v">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-mars-stroke-v" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-mask
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-mask">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-mask" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-medal
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-medal">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-medal" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-medkit
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-medkit">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-medkit" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-meh
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-meh">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-meh" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-meh-blank
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-meh-blank">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-meh-blank" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-meh-rolling-eyes
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-meh-rolling-eyes">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-meh-rolling-eyes" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-memory
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-memory">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-memory" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-menorah
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-menorah">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-menorah" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-mercury
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-mercury">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-mercury" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-meteor
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-meteor">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-meteor" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-microchip
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-microchip">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-microchip" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-microphone
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-microphone">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-microphone" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-microphone-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-microphone-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-microphone-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-microphone-alt-slash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-microphone-alt-slash">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-microphone-alt-slash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-microphone-slash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-microphone-slash">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-microphone-slash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-microscope
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-microscope">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-microscope" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-minus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-minus">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-minus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-minus-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-minus-circle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-minus-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-minus-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-minus-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-minus-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-mitten
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-mitten">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-mitten" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-mobile
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-mobile">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-mobile" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-mobile-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-mobile-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-mobile-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-money-bill
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-money-bill">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-money-bill" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-money-bill-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-money-bill-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-money-bill-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-money-bill-wave
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-money-bill-wave">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-money-bill-wave" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-money-bill-wave-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-money-bill-wave-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-money-bill-wave-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-money-check
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-money-check">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-money-check" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-money-check-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-money-check-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-money-check-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-monument
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-monument">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-monument" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-moon
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-moon">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-moon" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-mortar-pestle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-mortar-pestle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-mortar-pestle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-mosque
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-mosque">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-mosque" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-motorcycle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-motorcycle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-motorcycle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-mountain
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-mountain">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-mountain" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-mouse
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-mouse">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-mouse" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-mouse-pointer
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-mouse-pointer">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-mouse-pointer" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-mug-hot
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-mug-hot">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-mug-hot" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-music
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-music">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-music" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-network-wired
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-network-wired">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-network-wired" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-neuter
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-neuter">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-neuter" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-newspaper
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-newspaper">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-newspaper" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-not-equal
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-not-equal">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-not-equal" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-notes-medical
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-notes-medical">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-notes-medical" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-object-group
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-object-group">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-object-group" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-object-ungroup
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-object-ungroup">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-object-ungroup" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-oil-can
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-oil-can">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-oil-can" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-om
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-om">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-om" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-otter
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-otter">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-otter" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-outdent
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-outdent">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-outdent" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-pager
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-pager">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-pager" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-paint-brush
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-paint-brush">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-paint-brush" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-paint-roller
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-paint-roller">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-paint-roller" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-palette
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-palette">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-palette" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-pallet
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-pallet">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-pallet" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-paper-plane
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-paper-plane">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-paper-plane" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-paperclip
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-paperclip">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-paperclip" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-parachute-box
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-parachute-box">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-parachute-box" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-paragraph
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-paragraph">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-paragraph" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-parking
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-parking">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-parking" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-passport
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-passport">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-passport" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-pastafarianism
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-pastafarianism">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-pastafarianism" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-paste
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-paste">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-paste" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-pause
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-pause">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-pause" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-pause-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-pause-circle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-pause-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-paw
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-paw">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-paw" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-peace
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-peace">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-peace" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-pen
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-pen">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-pen" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-pen-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-pen-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-pen-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-pen-fancy
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-pen-fancy">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-pen-fancy" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-pen-nib
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-pen-nib">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-pen-nib" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-pen-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-pen-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-pen-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-pencil-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-pencil-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-pencil-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-pencil-ruler
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-pencil-ruler">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-pencil-ruler" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-people-arrows
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-people-arrows">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-people-arrows" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-people-carry
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-people-carry">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-people-carry" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-pepper-hot
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-pepper-hot">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-pepper-hot" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-percent
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-percent">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-percent" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-percentage
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-percentage">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-percentage" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-person-booth
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-person-booth">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-person-booth" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-phone
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-phone">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-phone" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-phone-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-phone-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-phone-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-phone-slash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-phone-slash">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-phone-slash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-phone-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-phone-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-phone-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-phone-square-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-phone-square-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-phone-square-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-phone-volume
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-phone-volume">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-phone-volume" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-photo-video
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-photo-video">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-photo-video" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-piggy-bank
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-piggy-bank">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-piggy-bank" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-pills
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-pills">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-pills" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-pizza-slice
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-pizza-slice">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-pizza-slice" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-place-of-worship
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-place-of-worship">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-place-of-worship" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-plane
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-plane">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-plane" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-plane-arrival
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-plane-arrival">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-plane-arrival" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-plane-departure
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-plane-departure">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-plane-departure" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-plane-slash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-plane-slash">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-plane-slash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-play
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-play">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-play" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-play-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-play-circle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-play-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-plug
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-plug">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-plug" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-plus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-plus">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-plus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-plus-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-plus-circle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-plus-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-plus-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-plus-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-plus-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-podcast
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-podcast">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-podcast" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-poll
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-poll">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-poll" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-poll-h
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-poll-h">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-poll-h" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-poo
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-poo">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-poo" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-poo-storm
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-poo-storm">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-poo-storm" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-poop
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-poop">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-poop" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-portrait
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-portrait">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-portrait" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-pound-sign
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-pound-sign">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-pound-sign" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-power-off
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-power-off">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-power-off" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-pray
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-pray">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-pray" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-praying-hands
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-praying-hands">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-praying-hands" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-prescription
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-prescription">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-prescription" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-prescription-bottle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-prescription-bottle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-prescription-bottle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-prescription-bottle-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-prescription-bottle-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-prescription-bottle-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-print
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-print">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-print" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-procedures
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-procedures">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-procedures" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-project-diagram
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-project-diagram">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-project-diagram" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-pump-medical
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-pump-medical">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-pump-medical" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-pump-soap
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-pump-soap">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-pump-soap" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-puzzle-piece
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-puzzle-piece">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-puzzle-piece" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-qrcode
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-qrcode">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-qrcode" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-question
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-question">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-question" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-question-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-question-circle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-question-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-quidditch
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-quidditch">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-quidditch" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-quote-left
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-quote-left">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-quote-left" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-quote-right
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-quote-right">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-quote-right" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-quran
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-quran">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-quran" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-radiation
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-radiation">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-radiation" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-radiation-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-radiation-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-radiation-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-rainbow
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-rainbow">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-rainbow" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-random
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-random">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-random" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-receipt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-receipt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-receipt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-record-vinyl
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-record-vinyl">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-record-vinyl" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-recycle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-recycle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-recycle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-redo
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-redo">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-redo" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-redo-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-redo-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-redo-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-registered
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-registered">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-registered" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-remove-format
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-remove-format">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-remove-format" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-reply
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-reply">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-reply" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-reply-all
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-reply-all">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-reply-all" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-republican
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-republican">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-republican" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-restroom
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-restroom">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-restroom" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-retweet
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-retweet">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-retweet" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-ribbon
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-ribbon">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-ribbon" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-ring
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-ring">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-ring" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-road
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-road">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-road" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-robot
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-robot">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-robot" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-rocket
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-rocket">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-rocket" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-route
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-route">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-route" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-rss
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-rss">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-rss" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-rss-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-rss-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-rss-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-ruble-sign
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-ruble-sign">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-ruble-sign" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-ruler
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-ruler">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-ruler" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-ruler-combined
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-ruler-combined">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-ruler-combined" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-ruler-horizontal
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-ruler-horizontal">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-ruler-horizontal" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-ruler-vertical
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-ruler-vertical">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-ruler-vertical" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-running
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-running">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-running" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-rupee-sign
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-rupee-sign">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-rupee-sign" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sad-cry
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sad-cry">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sad-cry" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sad-tear
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sad-tear">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sad-tear" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-satellite
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-satellite">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-satellite" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-satellite-dish
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-satellite-dish">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-satellite-dish" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-save
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-save">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-save" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-school
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-school">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-school" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-screwdriver
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-screwdriver">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-screwdriver" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-scroll
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-scroll">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-scroll" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sd-card
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sd-card">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sd-card" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-search
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-search">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-search" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-search-dollar
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-search-dollar">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-search-dollar" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-search-location
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-search-location">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-search-location" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-search-minus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-search-minus">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-search-minus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-search-plus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-search-plus">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-search-plus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-seedling
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-seedling">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-seedling" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-server
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-server">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-server" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-shapes
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-shapes">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-shapes" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-share
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-share">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-share" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-share-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-share-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-share-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-share-alt-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-share-alt-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-share-alt-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-share-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-share-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-share-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-shekel-sign
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-shekel-sign">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-shekel-sign" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-shield-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-shield-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-shield-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-shield-virus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-shield-virus">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-shield-virus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-ship
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-ship">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-ship" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-shipping-fast
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-shipping-fast">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-shipping-fast" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-shoe-prints
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-shoe-prints">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-shoe-prints" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-shopping-bag
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-shopping-bag">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-shopping-bag" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-shopping-basket
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-shopping-basket">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-shopping-basket" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-shopping-cart
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-shopping-cart">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-shopping-cart" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-shower
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-shower">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-shower" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-shuttle-van
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-shuttle-van">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-shuttle-van" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sign
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sign">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sign" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sign-in-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sign-in-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sign-in-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sign-language
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sign-language">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sign-language" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sign-out-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sign-out-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sign-out-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-signal
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-signal">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-signal" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-signature
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-signature">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-signature" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sim-card
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sim-card">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sim-card" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sitemap
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sitemap">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sitemap" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-skating
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-skating">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-skating" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-skiing
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-skiing">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-skiing" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-skiing-nordic
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-skiing-nordic">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-skiing-nordic" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-skull
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-skull">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-skull" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-skull-crossbones
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-skull-crossbones">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-skull-crossbones" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-slash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-slash">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-slash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sleigh
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sleigh">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sleigh" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sliders-h
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sliders-h">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sliders-h" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-smile
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-smile">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-smile" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-smile-beam
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-smile-beam">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-smile-beam" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-smile-wink
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-smile-wink">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-smile-wink" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-smog
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-smog">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-smog" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-smoking
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-smoking">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-smoking" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-smoking-ban
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-smoking-ban">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-smoking-ban" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sms
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sms">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sms" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-snowboarding
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-snowboarding">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-snowboarding" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-snowflake
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-snowflake">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-snowflake" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-snowman
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-snowman">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-snowman" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-snowplow
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-snowplow">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-snowplow" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-soap
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-soap">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-soap" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-socks
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-socks">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-socks" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-solar-panel
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-solar-panel">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-solar-panel" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sort
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sort">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sort" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sort-alpha-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sort-alpha-down">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sort-alpha-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sort-alpha-down-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sort-alpha-down-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sort-alpha-down-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sort-alpha-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sort-alpha-up">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sort-alpha-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sort-alpha-up-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sort-alpha-up-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sort-alpha-up-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sort-amount-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sort-amount-down">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sort-amount-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sort-amount-down-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sort-amount-down-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sort-amount-down-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sort-amount-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sort-amount-up">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sort-amount-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sort-amount-up-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sort-amount-up-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sort-amount-up-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sort-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sort-down">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sort-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sort-numeric-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sort-numeric-down">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sort-numeric-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sort-numeric-down-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sort-numeric-down-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sort-numeric-down-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sort-numeric-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sort-numeric-up">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sort-numeric-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sort-numeric-up-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sort-numeric-up-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sort-numeric-up-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sort-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sort-up">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sort-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-spa
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-spa">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-spa" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-space-shuttle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-space-shuttle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-space-shuttle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-spell-check
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-spell-check">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-spell-check" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-spider
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-spider">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-spider" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-spinner
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-spinner">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-spinner" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-splotch
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-splotch">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-splotch" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-spray-can
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-spray-can">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-spray-can" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-square-full
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-square-full">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-square-full" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-square-root-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-square-root-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-square-root-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-stamp
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-stamp">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-stamp" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-star
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-star">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-star" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-star-and-crescent
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-star-and-crescent">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-star-and-crescent" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-star-half
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-star-half">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-star-half" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-star-half-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-star-half-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-star-half-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-star-of-david
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-star-of-david">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-star-of-david" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-star-of-life
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-star-of-life">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-star-of-life" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-step-backward
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-step-backward">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-step-backward" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-step-forward
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-step-forward">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-step-forward" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-stethoscope
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-stethoscope">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-stethoscope" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sticky-note
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sticky-note">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sticky-note" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-stop
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-stop">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-stop" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-stop-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-stop-circle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-stop-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-stopwatch
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-stopwatch">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-stopwatch" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-stopwatch-20
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-stopwatch-20">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-stopwatch-20" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-store
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-store">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-store" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-store-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-store-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-store-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-store-alt-slash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-store-alt-slash">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-store-alt-slash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-store-slash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-store-slash">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-store-slash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-stream
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-stream">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-stream" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-street-view
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-street-view">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-street-view" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-strikethrough
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-strikethrough">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-strikethrough" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-stroopwafel
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-stroopwafel">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-stroopwafel" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-subscript
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-subscript">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-subscript" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-subway
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-subway">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-subway" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-suitcase
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-suitcase">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-suitcase" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-suitcase-rolling
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-suitcase-rolling">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-suitcase-rolling" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sun
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sun">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sun" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-superscript
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-superscript">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-superscript" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-surprise
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-surprise">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-surprise" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-swatchbook
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-swatchbook">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-swatchbook" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-swimmer
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-swimmer">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-swimmer" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-swimming-pool
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-swimming-pool">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-swimming-pool" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-synagogue
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-synagogue">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-synagogue" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sync
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sync">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sync" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-sync-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-sync-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-sync-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-syringe
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-syringe">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-syringe" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-table
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-table">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-table" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-table-tennis
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-table-tennis">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-table-tennis" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-tablet
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-tablet">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-tablet" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-tablet-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-tablet-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-tablet-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-tablets
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-tablets">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-tablets" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-tachometer-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-tachometer-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-tachometer-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-tag
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-tag">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-tag" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-tags
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-tags">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-tags" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-tape
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-tape">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-tape" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-tasks
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-tasks">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-tasks" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-taxi
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-taxi">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-taxi" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-teeth
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-teeth">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-teeth" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-teeth-open
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-teeth-open">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-teeth-open" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-temperature-high
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-temperature-high">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-temperature-high" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-temperature-low
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-temperature-low">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-temperature-low" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-tenge
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-tenge">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-tenge" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-terminal
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-terminal">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-terminal" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-text-height
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-text-height">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-text-height" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-text-width
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-text-width">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-text-width" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-th
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-th">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-th" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-th-large
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-th-large">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-th-large" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-th-list
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-th-list">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-th-list" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-theater-masks
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-theater-masks">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-theater-masks" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-thermometer
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-thermometer">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-thermometer" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-thermometer-empty
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-thermometer-empty">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-thermometer-empty" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-thermometer-full
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-thermometer-full">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-thermometer-full" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-thermometer-half
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-thermometer-half">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-thermometer-half" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-thermometer-quarter
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-thermometer-quarter">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-thermometer-quarter" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-thermometer-three-quarters
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-thermometer-three-quarters">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-thermometer-three-quarters" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-thumbs-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-thumbs-down">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-thumbs-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-thumbs-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-thumbs-up">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-thumbs-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-thumbtack
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-thumbtack">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-thumbtack" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-ticket-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-ticket-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-ticket-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-times
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-times">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-times" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-times-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-times-circle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-times-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-tint
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-tint">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-tint" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-tint-slash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-tint-slash">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-tint-slash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-tired
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-tired">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-tired" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-toggle-off
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-toggle-off">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-toggle-off" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-toggle-on
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-toggle-on">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-toggle-on" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-toilet
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-toilet">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-toilet" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-toilet-paper
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-toilet-paper">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-toilet-paper" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-toilet-paper-slash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-toilet-paper-slash">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-toilet-paper-slash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-toolbox
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-toolbox">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-toolbox" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-tools
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-tools">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-tools" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-tooth
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-tooth">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-tooth" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-torah
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-torah">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-torah" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-torii-gate
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-torii-gate">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-torii-gate" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-tractor
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-tractor">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-tractor" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-trademark
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-trademark">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-trademark" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-traffic-light
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-traffic-light">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-traffic-light" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-trailer
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-trailer">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-trailer" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-train
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-train">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-train" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-tram
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-tram">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-tram" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-transgender
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-transgender">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-transgender" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-transgender-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-transgender-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-transgender-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-trash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-trash">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-trash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-trash-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-trash-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-trash-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-trash-restore
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-trash-restore">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-trash-restore" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-trash-restore-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-trash-restore-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-trash-restore-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-tree
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-tree">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-tree" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-trophy
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-trophy">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-trophy" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-truck
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-truck">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-truck" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-truck-loading
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-truck-loading">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-truck-loading" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-truck-monster
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-truck-monster">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-truck-monster" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-truck-moving
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-truck-moving">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-truck-moving" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-truck-pickup
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-truck-pickup">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-truck-pickup" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-tshirt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-tshirt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-tshirt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-tty
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-tty">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-tty" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-tv
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-tv">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-tv" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-umbrella
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-umbrella">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-umbrella" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-umbrella-beach
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-umbrella-beach">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-umbrella-beach" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-underline
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-underline">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-underline" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-undo
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-undo">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-undo" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-undo-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-undo-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-undo-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-universal-access
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-universal-access">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-universal-access" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-university
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-university">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-university" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-unlink
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-unlink">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-unlink" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-unlock
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-unlock">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-unlock" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-unlock-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-unlock-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-unlock-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-upload
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-upload">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-upload" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-user
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-user">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-user" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-user-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-user-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-user-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-user-alt-slash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-user-alt-slash">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-user-alt-slash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-user-astronaut
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-user-astronaut">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-user-astronaut" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-user-check
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-user-check">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-user-check" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-user-circle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-user-circle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-user-circle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-user-clock
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-user-clock">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-user-clock" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-user-cog
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-user-cog">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-user-cog" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-user-edit
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-user-edit">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-user-edit" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-user-friends
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-user-friends">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-user-friends" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-user-graduate
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-user-graduate">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-user-graduate" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-user-injured
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-user-injured">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-user-injured" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-user-lock
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-user-lock">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-user-lock" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-user-md
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-user-md">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-user-md" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-user-minus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-user-minus">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-user-minus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-user-ninja
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-user-ninja">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-user-ninja" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-user-nurse
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-user-nurse">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-user-nurse" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-user-plus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-user-plus">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-user-plus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-user-secret
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-user-secret">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-user-secret" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-user-shield
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-user-shield">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-user-shield" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-user-slash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-user-slash">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-user-slash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-user-tag
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-user-tag">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-user-tag" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-user-tie
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-user-tie">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-user-tie" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-user-times
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-user-times">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-user-times" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-users
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-users">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-users" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-users-cog
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-users-cog">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-users-cog" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-utensil-spoon
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-utensil-spoon">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-utensil-spoon" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-utensils
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-utensils">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-utensils" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-vector-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-vector-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-vector-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-venus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-venus">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-venus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-venus-double
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-venus-double">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-venus-double" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-venus-mars
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-venus-mars">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-venus-mars" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-vial
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-vial">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-vial" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-vials
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-vials">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-vials" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-video
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-video">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-video" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-video-slash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-video-slash">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-video-slash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-vihara
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-vihara">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-vihara" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-virus
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-virus">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-virus" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-virus-slash
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-virus-slash">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-virus-slash" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-viruses
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-viruses">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-viruses" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-voicemail
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-voicemail">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-voicemail" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-volleyball-ball
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-volleyball-ball">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-volleyball-ball" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-volume-down
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-volume-down">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-volume-down" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-volume-mute
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-volume-mute">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-volume-mute" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-volume-off
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-volume-off">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-volume-off" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-volume-up
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-volume-up">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-volume-up" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-vote-yea
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-vote-yea">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-vote-yea" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-vr-cardboard
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-vr-cardboard">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-vr-cardboard" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-walking
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-walking">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-walking" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-wallet
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-wallet">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-wallet" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-warehouse
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-warehouse">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-warehouse" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-water
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-water">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-water" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-wave-square
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-wave-square">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-wave-square" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-weight
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-weight">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-weight" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-weight-hanging
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-weight-hanging">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-weight-hanging" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-wheelchair
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-wheelchair">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-wheelchair" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-wifi
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-wifi">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-wifi" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-wind
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-wind">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-wind" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-window-close
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-window-close">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-window-close" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-window-maximize
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-window-maximize">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-window-maximize" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-window-minimize
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-window-minimize">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-window-minimize" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-window-restore
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-window-restore">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-window-restore" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-wine-bottle
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-wine-bottle">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-wine-bottle" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-wine-glass
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-wine-glass">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-wine-glass" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-wine-glass-alt
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-wine-glass-alt">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-wine-glass-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-won-sign
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-won-sign">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-won-sign" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-wrench
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-wrench">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-wrench" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-x-ray
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-x-ray">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-x-ray" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-yen-sign
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-yen-sign">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-yen-sign" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <span className="icon-list-item d-none">
fas fa-yin-yang
              </span>
              <div className="border rounded-2 p-3 mb-4 text-center bg-body-emphasis dark__bg-gray-1000 shadow-sm">
                <span className="text-body fs-5 fas fa-yin-yang">                </span>
                <input className="form-control form-control-sm mt-3 text-center w-100 text-dark dark__text-gray-100 bg-body-secondary dark__bg-gray-1100" type="text" readOnly defaultValue="fas fa-yin-yang" />
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
