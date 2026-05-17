'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function AdvanceTables() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Advance Tables
    </h2>

    <p className="text-body-tertiary lead mb-2">
Phoenix uses 
      <b>
List.Js
      </b>
 for advance table. List.Js is a Tiny, invisible and simple, yet powerful and incredibly fast vanilla JavaScript library that adds search, sort, filters and flexibility to plain HTML lists, tables, or anything.
    </p>
    <a href="https://listjs.com/" className="btn btn-link p-0"  target="_blank">
Documentation for List.js      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="mb-9">
            <div className="card shadow-none border mb-3" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Example
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#example-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="example-code" aria-expanded="false">
                        <span className="me-2" data-feather={"code"}>                        </span>View code
                      </a>
                      <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                        <span className="me-2" data-feather={"eye"}>                        </span>Hide code
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="example-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div id=\\\"tableExample\\\" data-list='{\\\"valueNames\\\":[\\\"name\\\",\\\"email\\\",\\\"age\\\"],\\\"page\\\":5,\\\"pagination\\\":true}'> <div class=\\\"table-responsive\\\"> <table class=\\\"table table-sm fs-9 mb-0\\\"> <thead> <tr> <th class=\\\"sort border-top border-translucent ps-3\\\" data-sort=\\\"name\\\">Name</th> <th class=\\\"sort border-top border-translucent\\\" data-sort=\\\"email\\\">Email</th> <th class=\\\"sort border-top border-translucent\\\" data-sort=\\\"age\\\">Age</th> <th class=\\\"sort text-end align-middle pe-0 border-top border-translucent\\\" scope=\\\"col\\\">ACTION</th> </tr> </thead> <tbody class=\\\"list\\\"><tr> <td class=\\\"align-middle ps-3 name\\\">Anna</td> <td class=\\\"align-middle email\\\">anna@example.com</td> <td class=\\\"align-middle age\\\">18</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Homer</td> <td class=\\\"align-middle email\\\">homer@example.com</td> <td class=\\\"align-middle age\\\">35</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Oscar</td> <td class=\\\"align-middle email\\\">oscar@example.com</td> <td class=\\\"align-middle age\\\">52</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Emily</td> <td class=\\\"align-middle email\\\">emily@example.com</td> <td class=\\\"align-middle age\\\">30</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Jara</td> <td class=\\\"align-middle email\\\">jara@example.com</td> <td class=\\\"align-middle age\\\">25</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Clark</td> <td class=\\\"align-middle email\\\">clark@example.com</td> <td class=\\\"align-middle age\\\">39</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Jennifer</td> <td class=\\\"align-middle email\\\">jennifer@example.com</td> <td class=\\\"align-middle age\\\">52</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Tony</td> <td class=\\\"align-middle email\\\">tony@example.com</td> <td class=\\\"align-middle age\\\">30</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Tom</td> <td class=\\\"align-middle email\\\">tom@example.com</td> <td class=\\\"align-middle age\\\">25</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Michael</td> <td class=\\\"align-middle email\\\">michael@example.com</td> <td class=\\\"align-middle age\\\">39</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Antony</td> <td class=\\\"align-middle email\\\">antony@example.com</td> <td class=\\\"align-middle age\\\">39</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Raymond</td> <td class=\\\"align-middle email\\\">raymond@example.com</td> <td class=\\\"align-middle age\\\">52</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Marie</td> <td class=\\\"align-middle email\\\">marie@example.com</td> <td class=\\\"align-middle age\\\">30</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Cohen</td> <td class=\\\"align-middle email\\\">cohen@example.com</td> <td class=\\\"align-middle age\\\">25</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Rowen</td> <td class=\\\"align-middle email\\\">rowen@example.com</td> <td class=\\\"align-middle age\\\">39</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">John</td> <td class=\\\"align-middle email\\\">john@example.com</td> <td class=\\\"align-middle age\\\">25</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Emily</td> <td class=\\\"align-middle email\\\">emily@example.com</td> <td class=\\\"align-middle age\\\">31</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Alice</td> <td class=\\\"align-middle email\\\">alice@example.com</td> <td class=\\\"align-middle age\\\">42</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">David</td> <td class=\\\"align-middle email\\\">david@example.com</td> <td class=\\\"align-middle age\\\">29</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Sullivan Benton</td> <td class=\\\"align-middle email\\\">sullivan@example.com</td> <td class=\\\"align-middle age\\\">23</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Uriah Nunez</td> <td class=\\\"align-middle email\\\">uriah@example.com</td> <td class=\\\"align-middle age\\\">32</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Terry Lynch</td> <td class=\\\"align-middle email\\\">terry@example.com</td> <td class=\\\"align-middle age\\\">45</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Lailah Green</td> <td class=\\\"align-middle email\\\">lailah@example.com</td> <td class=\\\"align-middle age\\\">25</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Phillip Mack</td> <td class=\\\"align-middle email\\\">phillip@example.com</td> <td class=\\\"align-middle age\\\">21</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Whitney Sawyer</td> <td class=\\\"align-middle email\\\">whitney@example.com</td> <td class=\\\"align-middle age\\\">12</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Jaliyah Ritter</td> <td class=\\\"align-middle email\\\">jaliyah@example.com</td> <td class=\\\"align-middle age\\\">12</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Clayton Arnold</td> <td class=\\\"align-middle email\\\">clayton@example.com</td> <td class=\\\"align-middle age\\\">52</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Jett Donovan</td> <td class=\\\"align-middle email\\\">jett@example.com</td> <td class=\\\"align-middle age\\\">31</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Javion Christensen</td> <td class=\\\"align-middle email\\\">javion@example.com</td> <td class=\\\"align-middle age\\\">25</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Brittany Griffin</td> <td class=\\\"align-middle email\\\">brittany@example.com</td> <td class=\\\"align-middle age\\\">41</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Dustin Middleton</td> <td class=\\\"align-middle email\\\">dustin@example.com</td> <td class=\\\"align-middle age\\\">45</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Janessa Mann</td> <td class=\\\"align-middle email\\\">janessa@example.com</td> <td class=\\\"align-middle age\\\">65</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Evangeline Santos</td> <td class=\\\"align-middle email\\\">evangeline@example.com</td> <td class=\\\"align-middle age\\\">32</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Parker Todd</td> <td class=\\\"align-middle email\\\">parker@example.com</td> <td class=\\\"align-middle age\\\">41</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Jaxson Gill</td> <td class=\\\"align-middle email\\\">jaxson@example.com</td> <td class=\\\"align-middle age\\\">33</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Lucille</td> <td class=\\\"align-middle email\\\">lucille@example.com</td> <td class=\\\"align-middle age\\\">34</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Terrell</td> <td class=\\\"align-middle email\\\">terrell@example.com</td> <td class=\\\"align-middle age\\\">35</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Shayna</td> <td class=\\\"align-middle email\\\">shayna@example.com</td> <td class=\\\"align-middle age\\\">36</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Alvaro</td> <td class=\\\"align-middle email\\\">alvaro@example.com</td> <td class=\\\"align-middle age\\\">37</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Clay</td> <td class=\\\"align-middle email\\\">clay@example.com</td> <td class=\\\"align-middle age\\\">37</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Oscar</td> <td class=\\\"align-middle email\\\">oscar@example.com</td> <td class=\\\"align-middle age\\\">37</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Tabitha</td> <td class=\\\"align-middle email\\\">tabitha@example.com</td> <td class=\\\"align-middle age\\\">37</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Jordon</td> <td class=\\\"align-middle email\\\">jordon@example.com</td> <td class=\\\"align-middle age\\\">37</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> </tbody> </table> </div> <div class=\\\"d-flex flex-between-center pt-3\\\"> <div class=\\\"pagination d-none\\\"></div> <p class=\\\"mb-0 fs-9\\\"> <span class=\\\"d-none d-sm-inline-block\\\" data-list-info=\\\"data-list-info\\\"></span> <span class=\\\"d-none d-sm-inline-block\\\"> &mdash; </span> <a class=\\\"fw-semibold\\\" href=\\\"#!\\\" data-list-view=\\\"*\\\"> View all <span class=\\\"fas fa-angle-right ms-1\\\" data-fa-transform=\\\"down-1\\\"></span> </a><a class=\\\"fw-semibold d-none\\\" href=\\\"#!\\\" data-list-view=\\\"less\\\"> View Less <span class=\\\"fas fa-angle-right ms-1\\\" data-fa-transform=\\\"down-1\\\"></span> </a> </p> <div class=\\\"d-flex\\\"> <button class=\\\"btn btn-sm btn-primary\\\" type=\\\"button\\\" data-list-pagination=\\\"prev\\\"><span>Previous</span></button> <button class=\\\"btn btn-sm btn-primary px-4 ms-2\\\" type=\\\"button\\\" data-list-pagination=\\\"next\\\"><span>Next</span></button> </div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div id="tableExample" data-list={"{\"valueNames\":[\"name\",\"email\",\"age\"],\"page\":5,\"pagination\":true}"}>
                    <div className="table-responsive">
                      <table className="table table-sm fs-9 mb-0">
                        <thead>
                          <tr>
                            <th className="sort border-top border-translucent ps-3" data-sort={"name"}>
Name
                            </th>
                            <th className="sort border-top border-translucent" data-sort={"email"}>
Email
                            </th>
                            <th className="sort border-top border-translucent" data-sort={"age"}>
Age
                            </th>
                            <th className="sort text-end align-middle pe-0 border-top border-translucent" scope="col">
ACTION
                            </th>
                          </tr>
                        </thead>
                        <tbody className="list"><tr>
                            <td className="align-middle ps-3 name">
Anna
                            </td>
                            <td className="align-middle email">
anna@example.com
                            </td>
                            <td className="align-middle age">
18
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Homer
                            </td>
                            <td className="align-middle email">
homer@example.com
                            </td>
                            <td className="align-middle age">
35
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Oscar
                            </td>
                            <td className="align-middle email">
oscar@example.com
                            </td>
                            <td className="align-middle age">
52
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Emily
                            </td>
                            <td className="align-middle email">
emily@example.com
                            </td>
                            <td className="align-middle age">
30
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Jara
                            </td>
                            <td className="align-middle email">
jara@example.com
                            </td>
                            <td className="align-middle age">
25
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Clark
                            </td>
                            <td className="align-middle email">
clark@example.com
                            </td>
                            <td className="align-middle age">
39
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Jennifer
                            </td>
                            <td className="align-middle email">
jennifer@example.com
                            </td>
                            <td className="align-middle age">
52
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Tony
                            </td>
                            <td className="align-middle email">
tony@example.com
                            </td>
                            <td className="align-middle age">
30
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Tom
                            </td>
                            <td className="align-middle email">
tom@example.com
                            </td>
                            <td className="align-middle age">
25
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Michael
                            </td>
                            <td className="align-middle email">
michael@example.com
                            </td>
                            <td className="align-middle age">
39
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Antony
                            </td>
                            <td className="align-middle email">
antony@example.com
                            </td>
                            <td className="align-middle age">
39
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Raymond
                            </td>
                            <td className="align-middle email">
raymond@example.com
                            </td>
                            <td className="align-middle age">
52
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Marie
                            </td>
                            <td className="align-middle email">
marie@example.com
                            </td>
                            <td className="align-middle age">
30
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Cohen
                            </td>
                            <td className="align-middle email">
cohen@example.com
                            </td>
                            <td className="align-middle age">
25
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Rowen
                            </td>
                            <td className="align-middle email">
rowen@example.com
                            </td>
                            <td className="align-middle age">
39
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
John
                            </td>
                            <td className="align-middle email">
john@example.com
                            </td>
                            <td className="align-middle age">
25
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Emily
                            </td>
                            <td className="align-middle email">
emily@example.com
                            </td>
                            <td className="align-middle age">
31
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Alice
                            </td>
                            <td className="align-middle email">
alice@example.com
                            </td>
                            <td className="align-middle age">
42
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
David
                            </td>
                            <td className="align-middle email">
david@example.com
                            </td>
                            <td className="align-middle age">
29
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Sullivan Benton
                            </td>
                            <td className="align-middle email">
sullivan@example.com
                            </td>
                            <td className="align-middle age">
23
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Uriah Nunez
                            </td>
                            <td className="align-middle email">
uriah@example.com
                            </td>
                            <td className="align-middle age">
32
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Terry Lynch
                            </td>
                            <td className="align-middle email">
terry@example.com
                            </td>
                            <td className="align-middle age">
45
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Lailah Green
                            </td>
                            <td className="align-middle email">
lailah@example.com
                            </td>
                            <td className="align-middle age">
25
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Phillip Mack
                            </td>
                            <td className="align-middle email">
phillip@example.com
                            </td>
                            <td className="align-middle age">
21
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Whitney Sawyer
                            </td>
                            <td className="align-middle email">
whitney@example.com
                            </td>
                            <td className="align-middle age">
12
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Jaliyah Ritter
                            </td>
                            <td className="align-middle email">
jaliyah@example.com
                            </td>
                            <td className="align-middle age">
12
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Clayton Arnold
                            </td>
                            <td className="align-middle email">
clayton@example.com
                            </td>
                            <td className="align-middle age">
52
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Jett Donovan
                            </td>
                            <td className="align-middle email">
jett@example.com
                            </td>
                            <td className="align-middle age">
31
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Javion Christensen
                            </td>
                            <td className="align-middle email">
javion@example.com
                            </td>
                            <td className="align-middle age">
25
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Brittany Griffin
                            </td>
                            <td className="align-middle email">
brittany@example.com
                            </td>
                            <td className="align-middle age">
41
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Dustin Middleton
                            </td>
                            <td className="align-middle email">
dustin@example.com
                            </td>
                            <td className="align-middle age">
45
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Janessa Mann
                            </td>
                            <td className="align-middle email">
janessa@example.com
                            </td>
                            <td className="align-middle age">
65
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Evangeline Santos
                            </td>
                            <td className="align-middle email">
evangeline@example.com
                            </td>
                            <td className="align-middle age">
32
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Parker Todd
                            </td>
                            <td className="align-middle email">
parker@example.com
                            </td>
                            <td className="align-middle age">
41
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Jaxson Gill
                            </td>
                            <td className="align-middle email">
jaxson@example.com
                            </td>
                            <td className="align-middle age">
33
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Lucille
                            </td>
                            <td className="align-middle email">
lucille@example.com
                            </td>
                            <td className="align-middle age">
34
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Terrell
                            </td>
                            <td className="align-middle email">
terrell@example.com
                            </td>
                            <td className="align-middle age">
35
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Shayna
                            </td>
                            <td className="align-middle email">
shayna@example.com
                            </td>
                            <td className="align-middle age">
36
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Alvaro
                            </td>
                            <td className="align-middle email">
alvaro@example.com
                            </td>
                            <td className="align-middle age">
37
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Clay
                            </td>
                            <td className="align-middle email">
clay@example.com
                            </td>
                            <td className="align-middle age">
37
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Oscar
                            </td>
                            <td className="align-middle email">
oscar@example.com
                            </td>
                            <td className="align-middle age">
37
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Tabitha
                            </td>
                            <td className="align-middle email">
tabitha@example.com
                            </td>
                            <td className="align-middle age">
37
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Jordon
                            </td>
                            <td className="align-middle email">
jordon@example.com
                            </td>
                            <td className="align-middle age">
37
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="d-flex flex-between-center pt-3">
                      <div className="pagination d-none">                      </div>
                      <p className="mb-0 fs-9">
                        <span className="d-none d-sm-inline-block" data-list-info>                        </span>
                        <span className="d-none d-sm-inline-block">
 — 
                        </span>
                        <a href="#!" className="fw-semibold"  data-list-view={"*"}>
 View all                           <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                          </span>
                        </a>
                        <a href="#!" className="fw-semibold d-none"  data-list-view={"less"}>
 View Less                           <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                          </span>
                        </a>
                      </p>
                      <div className="d-flex">
                        <button className="btn btn-sm btn-primary" type="button" data-list-pagination={"prev"}>
                          <span>
Previous
                          </span>
                        </button>
                        <button className="btn btn-sm btn-primary px-4 ms-2" type="button" data-list-pagination={"next"}>
                          <span>
Next
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Pagination with numbering
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Add 
                      <code>
 pagination 
                      </code>
 class for enabling number pagination. The following structure will enable number pagination with next and previous button.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#pagination-with-numbering-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="pagination-with-numbering-code" aria-expanded="false">
                        <span className="me-2" data-feather={"code"}>                        </span>View code
                      </a>
                      <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                        <span className="me-2" data-feather={"eye"}>                        </span>Hide code
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="pagination-with-numbering-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div id=\\\"tableExample2\\\" data-list='{\\\"valueNames\\\":[\\\"name\\\",\\\"email\\\",\\\"age\\\"],\\\"page\\\":5,\\\"pagination\\\":{\\\"innerWindow\\\":2,\\\"left\\\":1,\\\"right\\\":1}}'> <div class=\\\"table-responsive\\\"> <table class=\\\"table table-striped table-sm fs-9 mb-0\\\"> <thead> <tr> <th class=\\\"sort border-top border-translucent ps-3\\\" data-sort=\\\"name\\\">Name</th> <th class=\\\"sort border-top\\\" data-sort=\\\"email\\\">Email</th> <th class=\\\"sort border-top\\\" data-sort=\\\"age\\\">Age</th> <th class=\\\"sort text-end align-middle pe-0 border-top\\\" scope=\\\"col\\\">ACTION</th> </tr> </thead> <tbody class=\\\"list\\\"><tr> <td class=\\\"align-middle ps-3 name\\\">Anna</td> <td class=\\\"align-middle email\\\">anna@example.com</td> <td class=\\\"align-middle age\\\">18</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Homer</td> <td class=\\\"align-middle email\\\">homer@example.com</td> <td class=\\\"align-middle age\\\">35</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Oscar</td> <td class=\\\"align-middle email\\\">oscar@example.com</td> <td class=\\\"align-middle age\\\">52</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Emily</td> <td class=\\\"align-middle email\\\">emily@example.com</td> <td class=\\\"align-middle age\\\">30</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Jara</td> <td class=\\\"align-middle email\\\">jara@example.com</td> <td class=\\\"align-middle age\\\">25</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Clark</td> <td class=\\\"align-middle email\\\">clark@example.com</td> <td class=\\\"align-middle age\\\">39</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Jennifer</td> <td class=\\\"align-middle email\\\">jennifer@example.com</td> <td class=\\\"align-middle age\\\">52</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Tony</td> <td class=\\\"align-middle email\\\">tony@example.com</td> <td class=\\\"align-middle age\\\">30</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Tom</td> <td class=\\\"align-middle email\\\">tom@example.com</td> <td class=\\\"align-middle age\\\">25</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Michael</td> <td class=\\\"align-middle email\\\">michael@example.com</td> <td class=\\\"align-middle age\\\">39</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Antony</td> <td class=\\\"align-middle email\\\">antony@example.com</td> <td class=\\\"align-middle age\\\">39</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Raymond</td> <td class=\\\"align-middle email\\\">raymond@example.com</td> <td class=\\\"align-middle age\\\">52</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Marie</td> <td class=\\\"align-middle email\\\">marie@example.com</td> <td class=\\\"align-middle age\\\">30</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Cohen</td> <td class=\\\"align-middle email\\\">cohen@example.com</td> <td class=\\\"align-middle age\\\">25</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Rowen</td> <td class=\\\"align-middle email\\\">rowen@example.com</td> <td class=\\\"align-middle age\\\">39</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">John</td> <td class=\\\"align-middle email\\\">john@example.com</td> <td class=\\\"align-middle age\\\">25</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Emily</td> <td class=\\\"align-middle email\\\">emily@example.com</td> <td class=\\\"align-middle age\\\">31</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Alice</td> <td class=\\\"align-middle email\\\">alice@example.com</td> <td class=\\\"align-middle age\\\">42</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">David</td> <td class=\\\"align-middle email\\\">david@example.com</td> <td class=\\\"align-middle age\\\">29</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Sullivan Benton</td> <td class=\\\"align-middle email\\\">sullivan@example.com</td> <td class=\\\"align-middle age\\\">23</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Uriah Nunez</td> <td class=\\\"align-middle email\\\">uriah@example.com</td> <td class=\\\"align-middle age\\\">32</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Terry Lynch</td> <td class=\\\"align-middle email\\\">terry@example.com</td> <td class=\\\"align-middle age\\\">45</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Lailah Green</td> <td class=\\\"align-middle email\\\">lailah@example.com</td> <td class=\\\"align-middle age\\\">25</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Phillip Mack</td> <td class=\\\"align-middle email\\\">phillip@example.com</td> <td class=\\\"align-middle age\\\">21</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Whitney Sawyer</td> <td class=\\\"align-middle email\\\">whitney@example.com</td> <td class=\\\"align-middle age\\\">12</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Jaliyah Ritter</td> <td class=\\\"align-middle email\\\">jaliyah@example.com</td> <td class=\\\"align-middle age\\\">12</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Clayton Arnold</td> <td class=\\\"align-middle email\\\">clayton@example.com</td> <td class=\\\"align-middle age\\\">52</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Jett Donovan</td> <td class=\\\"align-middle email\\\">jett@example.com</td> <td class=\\\"align-middle age\\\">31</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Javion Christensen</td> <td class=\\\"align-middle email\\\">javion@example.com</td> <td class=\\\"align-middle age\\\">25</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Brittany Griffin</td> <td class=\\\"align-middle email\\\">brittany@example.com</td> <td class=\\\"align-middle age\\\">41</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Dustin Middleton</td> <td class=\\\"align-middle email\\\">dustin@example.com</td> <td class=\\\"align-middle age\\\">45</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Janessa Mann</td> <td class=\\\"align-middle email\\\">janessa@example.com</td> <td class=\\\"align-middle age\\\">65</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Evangeline Santos</td> <td class=\\\"align-middle email\\\">evangeline@example.com</td> <td class=\\\"align-middle age\\\">32</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Parker Todd</td> <td class=\\\"align-middle email\\\">parker@example.com</td> <td class=\\\"align-middle age\\\">41</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Jaxson Gill</td> <td class=\\\"align-middle email\\\">jaxson@example.com</td> <td class=\\\"align-middle age\\\">33</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Lucille</td> <td class=\\\"align-middle email\\\">lucille@example.com</td> <td class=\\\"align-middle age\\\">34</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Terrell</td> <td class=\\\"align-middle email\\\">terrell@example.com</td> <td class=\\\"align-middle age\\\">35</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Shayna</td> <td class=\\\"align-middle email\\\">shayna@example.com</td> <td class=\\\"align-middle age\\\">36</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Alvaro</td> <td class=\\\"align-middle email\\\">alvaro@example.com</td> <td class=\\\"align-middle age\\\">37</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Clay</td> <td class=\\\"align-middle email\\\">clay@example.com</td> <td class=\\\"align-middle age\\\">37</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Oscar</td> <td class=\\\"align-middle email\\\">oscar@example.com</td> <td class=\\\"align-middle age\\\">37</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Tabitha</td> <td class=\\\"align-middle email\\\">tabitha@example.com</td> <td class=\\\"align-middle age\\\">37</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Jordon</td> <td class=\\\"align-middle email\\\">jordon@example.com</td> <td class=\\\"align-middle age\\\">37</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> </tbody> </table> </div> <div class=\\\"d-flex justify-content-center mt-3\\\"> <button class=\\\"page-link\\\" data-list-pagination=\\\"prev\\\"><span class=\\\"fas fa-chevron-left\\\"></span></button> <ul class=\\\"mb-0 pagination\\\"></ul> <button class=\\\"page-link pe-0\\\" data-list-pagination=\\\"next\\\"><span class=\\\"fas fa-chevron-right\\\"></span></button> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div id="tableExample2" data-list={"{\"valueNames\":[\"name\",\"email\",\"age\"],\"page\":5,\"pagination\":{\"innerWindow\":2,\"left\":1,\"right\":1}}"}>
                    <div className="table-responsive">
                      <table className="table table-striped table-sm fs-9 mb-0">
                        <thead>
                          <tr>
                            <th className="sort border-top border-translucent ps-3" data-sort={"name"}>
Name
                            </th>
                            <th className="sort border-top" data-sort={"email"}>
Email
                            </th>
                            <th className="sort border-top" data-sort={"age"}>
Age
                            </th>
                            <th className="sort text-end align-middle pe-0 border-top" scope="col">
ACTION
                            </th>
                          </tr>
                        </thead>
                        <tbody className="list"><tr>
                            <td className="align-middle ps-3 name">
Anna
                            </td>
                            <td className="align-middle email">
anna@example.com
                            </td>
                            <td className="align-middle age">
18
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Homer
                            </td>
                            <td className="align-middle email">
homer@example.com
                            </td>
                            <td className="align-middle age">
35
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Oscar
                            </td>
                            <td className="align-middle email">
oscar@example.com
                            </td>
                            <td className="align-middle age">
52
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Emily
                            </td>
                            <td className="align-middle email">
emily@example.com
                            </td>
                            <td className="align-middle age">
30
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Jara
                            </td>
                            <td className="align-middle email">
jara@example.com
                            </td>
                            <td className="align-middle age">
25
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Clark
                            </td>
                            <td className="align-middle email">
clark@example.com
                            </td>
                            <td className="align-middle age">
39
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Jennifer
                            </td>
                            <td className="align-middle email">
jennifer@example.com
                            </td>
                            <td className="align-middle age">
52
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Tony
                            </td>
                            <td className="align-middle email">
tony@example.com
                            </td>
                            <td className="align-middle age">
30
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Tom
                            </td>
                            <td className="align-middle email">
tom@example.com
                            </td>
                            <td className="align-middle age">
25
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Michael
                            </td>
                            <td className="align-middle email">
michael@example.com
                            </td>
                            <td className="align-middle age">
39
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Antony
                            </td>
                            <td className="align-middle email">
antony@example.com
                            </td>
                            <td className="align-middle age">
39
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Raymond
                            </td>
                            <td className="align-middle email">
raymond@example.com
                            </td>
                            <td className="align-middle age">
52
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Marie
                            </td>
                            <td className="align-middle email">
marie@example.com
                            </td>
                            <td className="align-middle age">
30
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Cohen
                            </td>
                            <td className="align-middle email">
cohen@example.com
                            </td>
                            <td className="align-middle age">
25
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Rowen
                            </td>
                            <td className="align-middle email">
rowen@example.com
                            </td>
                            <td className="align-middle age">
39
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
John
                            </td>
                            <td className="align-middle email">
john@example.com
                            </td>
                            <td className="align-middle age">
25
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Emily
                            </td>
                            <td className="align-middle email">
emily@example.com
                            </td>
                            <td className="align-middle age">
31
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Alice
                            </td>
                            <td className="align-middle email">
alice@example.com
                            </td>
                            <td className="align-middle age">
42
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
David
                            </td>
                            <td className="align-middle email">
david@example.com
                            </td>
                            <td className="align-middle age">
29
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Sullivan Benton
                            </td>
                            <td className="align-middle email">
sullivan@example.com
                            </td>
                            <td className="align-middle age">
23
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Uriah Nunez
                            </td>
                            <td className="align-middle email">
uriah@example.com
                            </td>
                            <td className="align-middle age">
32
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Terry Lynch
                            </td>
                            <td className="align-middle email">
terry@example.com
                            </td>
                            <td className="align-middle age">
45
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Lailah Green
                            </td>
                            <td className="align-middle email">
lailah@example.com
                            </td>
                            <td className="align-middle age">
25
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Phillip Mack
                            </td>
                            <td className="align-middle email">
phillip@example.com
                            </td>
                            <td className="align-middle age">
21
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Whitney Sawyer
                            </td>
                            <td className="align-middle email">
whitney@example.com
                            </td>
                            <td className="align-middle age">
12
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Jaliyah Ritter
                            </td>
                            <td className="align-middle email">
jaliyah@example.com
                            </td>
                            <td className="align-middle age">
12
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Clayton Arnold
                            </td>
                            <td className="align-middle email">
clayton@example.com
                            </td>
                            <td className="align-middle age">
52
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Jett Donovan
                            </td>
                            <td className="align-middle email">
jett@example.com
                            </td>
                            <td className="align-middle age">
31
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Javion Christensen
                            </td>
                            <td className="align-middle email">
javion@example.com
                            </td>
                            <td className="align-middle age">
25
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Brittany Griffin
                            </td>
                            <td className="align-middle email">
brittany@example.com
                            </td>
                            <td className="align-middle age">
41
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Dustin Middleton
                            </td>
                            <td className="align-middle email">
dustin@example.com
                            </td>
                            <td className="align-middle age">
45
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Janessa Mann
                            </td>
                            <td className="align-middle email">
janessa@example.com
                            </td>
                            <td className="align-middle age">
65
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Evangeline Santos
                            </td>
                            <td className="align-middle email">
evangeline@example.com
                            </td>
                            <td className="align-middle age">
32
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Parker Todd
                            </td>
                            <td className="align-middle email">
parker@example.com
                            </td>
                            <td className="align-middle age">
41
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Jaxson Gill
                            </td>
                            <td className="align-middle email">
jaxson@example.com
                            </td>
                            <td className="align-middle age">
33
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Lucille
                            </td>
                            <td className="align-middle email">
lucille@example.com
                            </td>
                            <td className="align-middle age">
34
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Terrell
                            </td>
                            <td className="align-middle email">
terrell@example.com
                            </td>
                            <td className="align-middle age">
35
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Shayna
                            </td>
                            <td className="align-middle email">
shayna@example.com
                            </td>
                            <td className="align-middle age">
36
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Alvaro
                            </td>
                            <td className="align-middle email">
alvaro@example.com
                            </td>
                            <td className="align-middle age">
37
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Clay
                            </td>
                            <td className="align-middle email">
clay@example.com
                            </td>
                            <td className="align-middle age">
37
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Oscar
                            </td>
                            <td className="align-middle email">
oscar@example.com
                            </td>
                            <td className="align-middle age">
37
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Tabitha
                            </td>
                            <td className="align-middle email">
tabitha@example.com
                            </td>
                            <td className="align-middle age">
37
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Jordon
                            </td>
                            <td className="align-middle email">
jordon@example.com
                            </td>
                            <td className="align-middle age">
37
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                      <button className="page-link" data-list-pagination={"prev"}>
                        <span className="fas fa-chevron-left">                        </span>
                      </button>
                      <ul className="mb-0 pagination">                      </ul>
                      <button className="page-link pe-0" data-list-pagination={"next"}>
                        <span className="fas fa-chevron-right">                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border mb-3" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Search Example
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Add 
                      <code>
search
                      </code>
 class for enable data searching. The following structure will enable search feature.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#search-example-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="search-example-code" aria-expanded="false">
                        <span className="me-2" data-feather={"code"}>                        </span>View code
                      </a>
                      <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                        <span className="me-2" data-feather={"eye"}>                        </span>Hide code
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="search-example-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div id=\\\"tableExample3\\\" data-list='{\\\"valueNames\\\":[\\\"name\\\",\\\"email\\\",\\\"age\\\"],\\\"page\\\":5,\\\"pagination\\\":true}'> <div class=\\\"search-box mb-3 mx-auto\\\"> <form class=\\\"position-relative\\\"> <input class=\\\"form-control search-input search form-control-sm\\\" type=\\\"search\\\" placeholder=\\\"Search\\\" aria-label=\\\"Search\\\" /> <span class=\\\"fas fa-search search-box-icon\\\"></span> </form> </div> <div class=\\\"table-responsive\\\"> <table class=\\\"table table-striped table-sm fs-9 mb-0\\\"> <thead> <tr> <th class=\\\"sort border-top border-translucent ps-3\\\" data-sort=\\\"name\\\">Name</th> <th class=\\\"sort border-top\\\" data-sort=\\\"email\\\">Email</th> <th class=\\\"sort border-top\\\" data-sort=\\\"age\\\">Age</th> <th class=\\\"sort text-end align-middle pe-0 border-top\\\" scope=\\\"col\\\">ACTION</th> </tr> </thead> <tbody class=\\\"list\\\"><tr> <td class=\\\"align-middle ps-3 name\\\">Anna</td> <td class=\\\"align-middle email\\\">anna@example.com</td> <td class=\\\"align-middle age\\\">18</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Homer</td> <td class=\\\"align-middle email\\\">homer@example.com</td> <td class=\\\"align-middle age\\\">35</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Oscar</td> <td class=\\\"align-middle email\\\">oscar@example.com</td> <td class=\\\"align-middle age\\\">52</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Emily</td> <td class=\\\"align-middle email\\\">emily@example.com</td> <td class=\\\"align-middle age\\\">30</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Jara</td> <td class=\\\"align-middle email\\\">jara@example.com</td> <td class=\\\"align-middle age\\\">25</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Clark</td> <td class=\\\"align-middle email\\\">clark@example.com</td> <td class=\\\"align-middle age\\\">39</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Jennifer</td> <td class=\\\"align-middle email\\\">jennifer@example.com</td> <td class=\\\"align-middle age\\\">52</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Tony</td> <td class=\\\"align-middle email\\\">tony@example.com</td> <td class=\\\"align-middle age\\\">30</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Tom</td> <td class=\\\"align-middle email\\\">tom@example.com</td> <td class=\\\"align-middle age\\\">25</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Michael</td> <td class=\\\"align-middle email\\\">michael@example.com</td> <td class=\\\"align-middle age\\\">39</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Antony</td> <td class=\\\"align-middle email\\\">antony@example.com</td> <td class=\\\"align-middle age\\\">39</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Raymond</td> <td class=\\\"align-middle email\\\">raymond@example.com</td> <td class=\\\"align-middle age\\\">52</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Marie</td> <td class=\\\"align-middle email\\\">marie@example.com</td> <td class=\\\"align-middle age\\\">30</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Cohen</td> <td class=\\\"align-middle email\\\">cohen@example.com</td> <td class=\\\"align-middle age\\\">25</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Rowen</td> <td class=\\\"align-middle email\\\">rowen@example.com</td> <td class=\\\"align-middle age\\\">39</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">John</td> <td class=\\\"align-middle email\\\">john@example.com</td> <td class=\\\"align-middle age\\\">25</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Emily</td> <td class=\\\"align-middle email\\\">emily@example.com</td> <td class=\\\"align-middle age\\\">31</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Alice</td> <td class=\\\"align-middle email\\\">alice@example.com</td> <td class=\\\"align-middle age\\\">42</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">David</td> <td class=\\\"align-middle email\\\">david@example.com</td> <td class=\\\"align-middle age\\\">29</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Sullivan Benton</td> <td class=\\\"align-middle email\\\">sullivan@example.com</td> <td class=\\\"align-middle age\\\">23</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Uriah Nunez</td> <td class=\\\"align-middle email\\\">uriah@example.com</td> <td class=\\\"align-middle age\\\">32</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Terry Lynch</td> <td class=\\\"align-middle email\\\">terry@example.com</td> <td class=\\\"align-middle age\\\">45</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Lailah Green</td> <td class=\\\"align-middle email\\\">lailah@example.com</td> <td class=\\\"align-middle age\\\">25</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Phillip Mack</td> <td class=\\\"align-middle email\\\">phillip@example.com</td> <td class=\\\"align-middle age\\\">21</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Whitney Sawyer</td> <td class=\\\"align-middle email\\\">whitney@example.com</td> <td class=\\\"align-middle age\\\">12</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Jaliyah Ritter</td> <td class=\\\"align-middle email\\\">jaliyah@example.com</td> <td class=\\\"align-middle age\\\">12</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Clayton Arnold</td> <td class=\\\"align-middle email\\\">clayton@example.com</td> <td class=\\\"align-middle age\\\">52</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Jett Donovan</td> <td class=\\\"align-middle email\\\">jett@example.com</td> <td class=\\\"align-middle age\\\">31</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Javion Christensen</td> <td class=\\\"align-middle email\\\">javion@example.com</td> <td class=\\\"align-middle age\\\">25</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Brittany Griffin</td> <td class=\\\"align-middle email\\\">brittany@example.com</td> <td class=\\\"align-middle age\\\">41</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Dustin Middleton</td> <td class=\\\"align-middle email\\\">dustin@example.com</td> <td class=\\\"align-middle age\\\">45</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Janessa Mann</td> <td class=\\\"align-middle email\\\">janessa@example.com</td> <td class=\\\"align-middle age\\\">65</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Evangeline Santos</td> <td class=\\\"align-middle email\\\">evangeline@example.com</td> <td class=\\\"align-middle age\\\">32</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Parker Todd</td> <td class=\\\"align-middle email\\\">parker@example.com</td> <td class=\\\"align-middle age\\\">41</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Jaxson Gill</td> <td class=\\\"align-middle email\\\">jaxson@example.com</td> <td class=\\\"align-middle age\\\">33</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Lucille</td> <td class=\\\"align-middle email\\\">lucille@example.com</td> <td class=\\\"align-middle age\\\">34</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Terrell</td> <td class=\\\"align-middle email\\\">terrell@example.com</td> <td class=\\\"align-middle age\\\">35</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Shayna</td> <td class=\\\"align-middle email\\\">shayna@example.com</td> <td class=\\\"align-middle age\\\">36</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Alvaro</td> <td class=\\\"align-middle email\\\">alvaro@example.com</td> <td class=\\\"align-middle age\\\">37</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Clay</td> <td class=\\\"align-middle email\\\">clay@example.com</td> <td class=\\\"align-middle age\\\">37</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Oscar</td> <td class=\\\"align-middle email\\\">oscar@example.com</td> <td class=\\\"align-middle age\\\">37</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Tabitha</td> <td class=\\\"align-middle email\\\">tabitha@example.com</td> <td class=\\\"align-middle age\\\">37</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Jordon</td> <td class=\\\"align-middle email\\\">jordon@example.com</td> <td class=\\\"align-middle age\\\">37</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> </tbody> </table> </div> <div class=\\\"d-flex justify-content-between mt-3\\\"><span class=\\\"d-none d-sm-inline-block\\\" data-list-info=\\\"data-list-info\\\"></span> <div class=\\\"d-flex\\\"> <button class=\\\"page-link\\\" data-list-pagination=\\\"prev\\\"><span class=\\\"fas fa-chevron-left\\\"></span></button> <ul class=\\\"mb-0 pagination\\\"></ul> <button class=\\\"page-link pe-0\\\" data-list-pagination=\\\"next\\\"><span class=\\\"fas fa-chevron-right\\\"></span></button> </div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div id="tableExample3" data-list={"{\"valueNames\":[\"name\",\"email\",\"age\"],\"page\":5,\"pagination\":true}"}>
                    <div className="search-box mb-3 mx-auto">
                      <form className="position-relative">
                        <input className="form-control search-input search form-control-sm" type="search" placeholder="Search" aria-label="Search" />
                        <span className="fas fa-search search-box-icon">                        </span>
                      </form>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-striped table-sm fs-9 mb-0">
                        <thead>
                          <tr>
                            <th className="sort border-top border-translucent ps-3" data-sort={"name"}>
Name
                            </th>
                            <th className="sort border-top" data-sort={"email"}>
Email
                            </th>
                            <th className="sort border-top" data-sort={"age"}>
Age
                            </th>
                            <th className="sort text-end align-middle pe-0 border-top" scope="col">
ACTION
                            </th>
                          </tr>
                        </thead>
                        <tbody className="list"><tr>
                            <td className="align-middle ps-3 name">
Anna
                            </td>
                            <td className="align-middle email">
anna@example.com
                            </td>
                            <td className="align-middle age">
18
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Homer
                            </td>
                            <td className="align-middle email">
homer@example.com
                            </td>
                            <td className="align-middle age">
35
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Oscar
                            </td>
                            <td className="align-middle email">
oscar@example.com
                            </td>
                            <td className="align-middle age">
52
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Emily
                            </td>
                            <td className="align-middle email">
emily@example.com
                            </td>
                            <td className="align-middle age">
30
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Jara
                            </td>
                            <td className="align-middle email">
jara@example.com
                            </td>
                            <td className="align-middle age">
25
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Clark
                            </td>
                            <td className="align-middle email">
clark@example.com
                            </td>
                            <td className="align-middle age">
39
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Jennifer
                            </td>
                            <td className="align-middle email">
jennifer@example.com
                            </td>
                            <td className="align-middle age">
52
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Tony
                            </td>
                            <td className="align-middle email">
tony@example.com
                            </td>
                            <td className="align-middle age">
30
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Tom
                            </td>
                            <td className="align-middle email">
tom@example.com
                            </td>
                            <td className="align-middle age">
25
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Michael
                            </td>
                            <td className="align-middle email">
michael@example.com
                            </td>
                            <td className="align-middle age">
39
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Antony
                            </td>
                            <td className="align-middle email">
antony@example.com
                            </td>
                            <td className="align-middle age">
39
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Raymond
                            </td>
                            <td className="align-middle email">
raymond@example.com
                            </td>
                            <td className="align-middle age">
52
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Marie
                            </td>
                            <td className="align-middle email">
marie@example.com
                            </td>
                            <td className="align-middle age">
30
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Cohen
                            </td>
                            <td className="align-middle email">
cohen@example.com
                            </td>
                            <td className="align-middle age">
25
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Rowen
                            </td>
                            <td className="align-middle email">
rowen@example.com
                            </td>
                            <td className="align-middle age">
39
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
John
                            </td>
                            <td className="align-middle email">
john@example.com
                            </td>
                            <td className="align-middle age">
25
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Emily
                            </td>
                            <td className="align-middle email">
emily@example.com
                            </td>
                            <td className="align-middle age">
31
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Alice
                            </td>
                            <td className="align-middle email">
alice@example.com
                            </td>
                            <td className="align-middle age">
42
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
David
                            </td>
                            <td className="align-middle email">
david@example.com
                            </td>
                            <td className="align-middle age">
29
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Sullivan Benton
                            </td>
                            <td className="align-middle email">
sullivan@example.com
                            </td>
                            <td className="align-middle age">
23
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Uriah Nunez
                            </td>
                            <td className="align-middle email">
uriah@example.com
                            </td>
                            <td className="align-middle age">
32
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Terry Lynch
                            </td>
                            <td className="align-middle email">
terry@example.com
                            </td>
                            <td className="align-middle age">
45
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Lailah Green
                            </td>
                            <td className="align-middle email">
lailah@example.com
                            </td>
                            <td className="align-middle age">
25
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Phillip Mack
                            </td>
                            <td className="align-middle email">
phillip@example.com
                            </td>
                            <td className="align-middle age">
21
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Whitney Sawyer
                            </td>
                            <td className="align-middle email">
whitney@example.com
                            </td>
                            <td className="align-middle age">
12
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Jaliyah Ritter
                            </td>
                            <td className="align-middle email">
jaliyah@example.com
                            </td>
                            <td className="align-middle age">
12
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Clayton Arnold
                            </td>
                            <td className="align-middle email">
clayton@example.com
                            </td>
                            <td className="align-middle age">
52
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Jett Donovan
                            </td>
                            <td className="align-middle email">
jett@example.com
                            </td>
                            <td className="align-middle age">
31
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Javion Christensen
                            </td>
                            <td className="align-middle email">
javion@example.com
                            </td>
                            <td className="align-middle age">
25
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Brittany Griffin
                            </td>
                            <td className="align-middle email">
brittany@example.com
                            </td>
                            <td className="align-middle age">
41
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Dustin Middleton
                            </td>
                            <td className="align-middle email">
dustin@example.com
                            </td>
                            <td className="align-middle age">
45
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Janessa Mann
                            </td>
                            <td className="align-middle email">
janessa@example.com
                            </td>
                            <td className="align-middle age">
65
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Evangeline Santos
                            </td>
                            <td className="align-middle email">
evangeline@example.com
                            </td>
                            <td className="align-middle age">
32
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Parker Todd
                            </td>
                            <td className="align-middle email">
parker@example.com
                            </td>
                            <td className="align-middle age">
41
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Jaxson Gill
                            </td>
                            <td className="align-middle email">
jaxson@example.com
                            </td>
                            <td className="align-middle age">
33
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Lucille
                            </td>
                            <td className="align-middle email">
lucille@example.com
                            </td>
                            <td className="align-middle age">
34
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Terrell
                            </td>
                            <td className="align-middle email">
terrell@example.com
                            </td>
                            <td className="align-middle age">
35
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Shayna
                            </td>
                            <td className="align-middle email">
shayna@example.com
                            </td>
                            <td className="align-middle age">
36
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Alvaro
                            </td>
                            <td className="align-middle email">
alvaro@example.com
                            </td>
                            <td className="align-middle age">
37
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Clay
                            </td>
                            <td className="align-middle email">
clay@example.com
                            </td>
                            <td className="align-middle age">
37
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Oscar
                            </td>
                            <td className="align-middle email">
oscar@example.com
                            </td>
                            <td className="align-middle age">
37
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Tabitha
                            </td>
                            <td className="align-middle email">
tabitha@example.com
                            </td>
                            <td className="align-middle age">
37
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Jordon
                            </td>
                            <td className="align-middle email">
jordon@example.com
                            </td>
                            <td className="align-middle age">
37
                            </td>
                            <td className="align-middle white-space-nowrap text-end pe-0">
                              <div className="btn-reveal-trigger position-static">
                                <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                  <span className="fas fa-ellipsis-h fs-10">                                  </span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end py-2">
                                  <a href="#!" className="dropdown-item">
View
                                  </a>
                                  <a href="#!" className="dropdown-item">
Export
                                  </a>
                                  <div className="dropdown-divider">                                  </div>
                                  <a href="#!" className="dropdown-item text-danger">
Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                      <span className="d-none d-sm-inline-block" data-list-info>                      </span>
                      <div className="d-flex">
                        <button className="page-link" data-list-pagination={"prev"}>
                          <span className="fas fa-chevron-left">                          </span>
                        </button>
                        <ul className="mb-0 pagination">                        </ul>
                        <button className="page-link pe-0" data-list-pagination={"next"}>
                          <span className="fas fa-chevron-right">                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border mb-3" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Filter Example
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#filter-example-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="filter-example-code" aria-expanded="false">
                        <span className="me-2" data-feather={"code"}>                        </span>View code
                      </a>
                      <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                        <span className="me-2" data-feather={"eye"}>                        </span>Hide code
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="filter-example-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div id=\\\"tableExample4\\\" data-list='{\\\"valueNames\\\":[\\\"name\\\",\\\"email\\\",\\\"payment\\\"],\\\"page\\\":5,\\\"pagination\\\":true,\\\"filter\\\":{\\\"key\\\":\\\"payment\\\"}}'> <div class=\\\"row justify-content-end g-0\\\"> <div class=\\\"col-auto px-3\\\"> <select class=\\\"form-select form-select-sm mb-3\\\" data-list-filter=\\\"data-list-filter\\\"> <option selected=\\\"\\\" value=\\\"\\\">Select payment status</option> <option value=\\\"Pending\\\">Pending</option> <option value=\\\"Success\\\">Success</option> <option value=\\\"Blocked\\\">Blocked</option> </select> </div> </div> <div class=\\\"table-responsive\\\"> <table class=\\\"table table-sm fs-9 mb-0\\\"> <thead> <tr class=\\\"bg-body-highlight\\\"><th class=\\\"sort border-top border-translucent ps-3\\\" data-sort=\\\"name\\\">Customer</th> <th class=\\\"sort border-top border-translucent\\\" data-sort=\\\"email\\\">Email</th> <th class=\\\"sort border-top border-translucent text-end pe-3\\\" data-sort=\\\"payment\\\">Payment</th> </tr> </thead> <tbody class=\\\"list\\\"><tr> <td class=\\\"align-middle ps-3 name\\\">Sylvia Plath</td> <td class=\\\"align-middle email\\\">john@gmail.com</td> <td class=\\\"align-middle payment text-end py-3 pe-3\\\"> <div class=\\\"badge badge-phoenix fs-10 badge-phoenix-success\\\"><span class=\\\"fw-bold\\\">Success</span><span class=\\\"ms-1 fas fa-check\\\"></span></div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Homer</td> <td class=\\\"align-middle email\\\">sylvia@mail.ru</td> <td class=\\\"align-middle payment text-end py-3 pe-3\\\"> <div class=\\\"badge badge-phoenix fs-10 badge-phoenix-warning\\\"><span class=\\\"fw-bold\\\">Pending</span><span class=\\\"ms-1 fas fa-stream\\\"></span></div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Edgar Allan Poe</td> <td class=\\\"align-middle email\\\">edgar@yahoo.com</td> <td class=\\\"align-middle payment text-end py-3 pe-3\\\"> <div class=\\\"badge badge-phoenix fs-10 badge-phoenix-secondary\\\"><span class=\\\"fw-bold\\\">Blocked</span><span class=\\\"ms-1 fas fa-ban\\\"></span></div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">William Butler Yeats</td> <td class=\\\"align-middle email\\\">william@gmail.com</td> <td class=\\\"align-middle payment text-end py-3 pe-3\\\"> <div class=\\\"badge badge-phoenix fs-10 badge-phoenix-success\\\"><span class=\\\"fw-bold\\\">Success</span><span class=\\\"ms-1 fas fa-check\\\"></span></div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Rabindranath Tagore</td> <td class=\\\"align-middle email\\\">tagore@twitter.com</td> <td class=\\\"align-middle payment text-end py-3 pe-3\\\"> <div class=\\\"badge badge-phoenix fs-10 badge-phoenix-warning\\\"><span class=\\\"fw-bold\\\">Pending</span><span class=\\\"ms-1 fas fa-stream\\\"></span></div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Emily Dickinson</td> <td class=\\\"align-middle email\\\">emily@gmail.com</td> <td class=\\\"align-middle payment text-end py-3 pe-3\\\"> <div class=\\\"badge badge-phoenix fs-10 badge-phoenix-secondary\\\"><span class=\\\"fw-bold\\\">Blocked</span><span class=\\\"ms-1 fas fa-ban\\\"></span></div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Giovanni Boccaccio</td> <td class=\\\"align-middle email\\\">giovanni@outlook.com</td> <td class=\\\"align-middle payment text-end py-3 pe-3\\\"> <div class=\\\"badge badge-phoenix fs-10 badge-phoenix-warning\\\"><span class=\\\"fw-bold\\\">Pending</span><span class=\\\"ms-1 fas fa-stream\\\"></span></div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Oscar Wilde</td> <td class=\\\"align-middle email\\\">oscar@hotmail.com</td> <td class=\\\"align-middle payment text-end py-3 pe-3\\\"> <div class=\\\"badge badge-phoenix fs-10 badge-phoenix-success\\\"><span class=\\\"fw-bold\\\">Success</span><span class=\\\"ms-1 fas fa-check\\\"></span></div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">John Doe</td> <td class=\\\"align-middle email\\\">doe@gmail.com</td> <td class=\\\"align-middle payment text-end py-3 pe-3\\\"> <div class=\\\"badge badge-phoenix fs-10 badge-phoenix-success\\\"><span class=\\\"fw-bold\\\">Success</span><span class=\\\"ms-1 fas fa-check\\\"></span></div> </td> </tr> <tr> <td class=\\\"align-middle ps-3 name\\\">Emma Watson</td> <td class=\\\"align-middle email\\\">emma@gmail.com</td> <td class=\\\"align-middle payment text-end py-3 pe-3\\\"> <div class=\\\"badge badge-phoenix fs-10 badge-phoenix-warning\\\"><span class=\\\"fw-bold\\\">Pending</span><span class=\\\"ms-1 fas fa-stream\\\"></span></div> </td> </tr> </tbody> </table> </div> <div class=\\\"d-flex justify-content-between mt-3\\\"><span class=\\\"d-none d-sm-inline-block\\\" data-list-info=\\\"data-list-info\\\"></span> <div class=\\\"d-flex\\\"> <button class=\\\"page-link\\\" data-list-pagination=\\\"prev\\\"><span class=\\\"fas fa-chevron-left\\\"></span></button> <ul class=\\\"mb-0 pagination\\\"></ul> <button class=\\\"page-link pe-0\\\" data-list-pagination=\\\"next\\\"><span class=\\\"fas fa-chevron-right\\\"></span></button> </div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div id="tableExample4" data-list={"{\"valueNames\":[\"name\",\"email\",\"payment\"],\"page\":5,\"pagination\":true,\"filter\":{\"key\":\"payment\"}}"}>
                    <div className="row justify-content-end g-0">
                      <div className="col-auto px-3">
                        <select className="form-select form-select-sm mb-3" data-list-filter>
                          <option value="">
Select payment status
                          </option>
                          <option value="Pending">
Pending
                          </option>
                          <option value="Success">
Success
                          </option>
                          <option value="Blocked">
Blocked
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-sm fs-9 mb-0">
                        <thead>
                          <tr className="bg-body-highlight"><th className="sort border-top border-translucent ps-3" data-sort={"name"}>
Customer
                            </th>
                            <th className="sort border-top border-translucent" data-sort={"email"}>
Email
                            </th>
                            <th className="sort border-top border-translucent text-end pe-3" data-sort={"payment"}>
Payment
                            </th>
                          </tr>
                        </thead>
                        <tbody className="list"><tr>
                            <td className="align-middle ps-3 name">
Sylvia Plath
                            </td>
                            <td className="align-middle email">
john@gmail.com
                            </td>
                            <td className="align-middle payment text-end py-3 pe-3">
                              <div className="badge badge-phoenix fs-10 badge-phoenix-success">
                                <span className="fw-bold">
Success
                                </span>
                                <span className="ms-1 fas fa-check">                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Homer
                            </td>
                            <td className="align-middle email">
sylvia@mail.ru
                            </td>
                            <td className="align-middle payment text-end py-3 pe-3">
                              <div className="badge badge-phoenix fs-10 badge-phoenix-warning">
                                <span className="fw-bold">
Pending
                                </span>
                                <span className="ms-1 fas fa-stream">                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Edgar Allan Poe
                            </td>
                            <td className="align-middle email">
edgar@yahoo.com
                            </td>
                            <td className="align-middle payment text-end py-3 pe-3">
                              <div className="badge badge-phoenix fs-10 badge-phoenix-secondary">
                                <span className="fw-bold">
Blocked
                                </span>
                                <span className="ms-1 fas fa-ban">                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
William Butler Yeats
                            </td>
                            <td className="align-middle email">
william@gmail.com
                            </td>
                            <td className="align-middle payment text-end py-3 pe-3">
                              <div className="badge badge-phoenix fs-10 badge-phoenix-success">
                                <span className="fw-bold">
Success
                                </span>
                                <span className="ms-1 fas fa-check">                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Rabindranath Tagore
                            </td>
                            <td className="align-middle email">
tagore@twitter.com
                            </td>
                            <td className="align-middle payment text-end py-3 pe-3">
                              <div className="badge badge-phoenix fs-10 badge-phoenix-warning">
                                <span className="fw-bold">
Pending
                                </span>
                                <span className="ms-1 fas fa-stream">                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Emily Dickinson
                            </td>
                            <td className="align-middle email">
emily@gmail.com
                            </td>
                            <td className="align-middle payment text-end py-3 pe-3">
                              <div className="badge badge-phoenix fs-10 badge-phoenix-secondary">
                                <span className="fw-bold">
Blocked
                                </span>
                                <span className="ms-1 fas fa-ban">                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Giovanni Boccaccio
                            </td>
                            <td className="align-middle email">
giovanni@outlook.com
                            </td>
                            <td className="align-middle payment text-end py-3 pe-3">
                              <div className="badge badge-phoenix fs-10 badge-phoenix-warning">
                                <span className="fw-bold">
Pending
                                </span>
                                <span className="ms-1 fas fa-stream">                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Oscar Wilde
                            </td>
                            <td className="align-middle email">
oscar@hotmail.com
                            </td>
                            <td className="align-middle payment text-end py-3 pe-3">
                              <div className="badge badge-phoenix fs-10 badge-phoenix-success">
                                <span className="fw-bold">
Success
                                </span>
                                <span className="ms-1 fas fa-check">                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
John Doe
                            </td>
                            <td className="align-middle email">
doe@gmail.com
                            </td>
                            <td className="align-middle payment text-end py-3 pe-3">
                              <div className="badge badge-phoenix fs-10 badge-phoenix-success">
                                <span className="fw-bold">
Success
                                </span>
                                <span className="ms-1 fas fa-check">                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="align-middle ps-3 name">
Emma Watson
                            </td>
                            <td className="align-middle email">
emma@gmail.com
                            </td>
                            <td className="align-middle payment text-end py-3 pe-3">
                              <div className="badge badge-phoenix fs-10 badge-phoenix-warning">
                                <span className="fw-bold">
Pending
                                </span>
                                <span className="ms-1 fas fa-stream">                                </span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                      <span className="d-none d-sm-inline-block" data-list-info>                      </span>
                      <div className="d-flex">
                        <button className="page-link" data-list-pagination={"prev"}>
                          <span className="fas fa-chevron-left">                          </span>
                        </button>
                        <ul className="mb-0 pagination">                        </ul>
                        <button className="page-link pe-0" data-list-pagination={"next"}>
                          <span className="fas fa-chevron-right">                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Docs
                    </h4>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="docs-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p>Integrate List in Phoenix by following these easy steps: </p> <ul> <li>Set unique ID and add <code>data-list </code>attribute to the wrapper element and list your column in <code>valueNames </code>property. <pre class=\\\"my-1\\\"><code class=\\\"language-html\\\">&lt;div id=&quot;tableExample&quot; data-list='{&quot;valueNames&quot;:[&quot;name&quot;,&quot;email&quot;,&quot;age&quot;]}'&gt; &lt;!-- Your list content will go here--&gt; &lt;/div&gt;</code></pre> </li> <li>To enable sorting in your column, add <code>data-sort </code>attribute and assign column name to the attribute. <pre class=\\\"my-1\\\"><code class=\\\"language-html\\\">&lt;th class=&quot;sort&quot; data-sort=&quot;name&quot;&gt;Customer&lt;/th&gt;</code></pre> </li> <li>Add <code>list </code>class to the content wrapper element. <pre class=\\\"my-1\\\"><code class=\\\"language-html\\\">&lt;tbody class=&quot;list&quot;&gt; &lt;!-- Your value will go here--&gt; &lt;/tbody&gt;</code></pre> </li> <li>Then wrap your value with column name as a class. For example, if your column name is <code>name </code>then the value will look like this: <pre class=\\\"my-1\\\"><code class=\\\"language-html\\\">&lt;td class=&quot;name&quot;&gt;John Doe&lt;/td&gt;</code></pre> </li> <li>To add pagination add <code>.pagination </code>class inside your wrapper element</li> <li>To enable button pagination add <code>data-list-pagination='prev' </code>and <code>data-list-pagination='next' </code>to the \\\"Prev\\\" and \\\"Next\\\" buttons respectively.</li> <li>To see the list info, add <code>data-list-info</code> attribute to a DOM element inside your wrapper element.</li> </ul></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <p>
Integrate List in Phoenix by following these easy steps: 
                  </p>
                  <ul>
                    <li>
Set unique ID and add 
                      <code>
data-list 
                      </code>
attribute to the wrapper element and list your column in 
                      <code>
valueNames 
                      </code>
property. 
                      <pre className="my-1">
{"<code class=\"language-html\"><div id=\\\"tableExample\\\" data-list='{\\\"valueNames\\\":[\\\"name\\\",\\\"email\\\",\\\"age\\\"]}'> <!-- Your list content will go here--> </div></code>"}
                      </pre>
                    </li>
                    <li>
To enable sorting in your column, add 
                      <code>
data-sort 
                      </code>
attribute and assign column name to the attribute. 
                      <pre className="my-1">
{"<code class=\"language-html\"><th class=\\\"sort\\\" data-sort=\\\"name\\\">Customer</th></code>"}
                      </pre>
                    </li>
                    <li>
Add 
                      <code>
list 
                      </code>
class to the content wrapper element. 
                      <pre className="my-1">
{"<code class=\"language-html\"><tbody class=\\\"list\\\"> <!-- Your value will go here--> </tbody></code>"}
                      </pre>
                    </li>
                    <li>
Then wrap your value with column name as a class. For example, if your column name is 
                      <code>
name 
                      </code>
then the value will look like this: 
                      <pre className="my-1">
{"<code class=\"language-html\"><td class=\\\"name\\\">John Doe</td></code>"}
                      </pre>
                    </li>
                    <li>
To add pagination add 
                      <code>
.pagination 
                      </code>
class inside your wrapper element
                    </li>
                    <li>
To enable button pagination add 
                      <code>
data-list-pagination='prev' 
                      </code>
and 
                      <code>
data-list-pagination='next' 
                      </code>
to the "Prev" and "Next" buttons respectively.
                    </li>
                    <li>
To see the list info, add 
                      <code>
data-list-info
                      </code>
 attribute to a DOM element inside your wrapper element.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card shadow-none border mb-3" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Ajax Table
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#ajax-table-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="ajax-table-code" aria-expanded="false">
                        <span className="me-2" data-feather={"code"}>                        </span>View code
                      </a>
                      <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                        <span className="me-2" data-feather={"eye"}>                        </span>Hide code
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="ajax-table-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"table-list\\\" id=\\\"advanceAjaxTable\\\"> <div class=\\\"table-responsive scrollbar mb-3\\\"> <table class=\\\"table table-sm fs-9 mb-0 overflow-hidden\\\"> <thead class=\\\"text-body\\\"><tr> <th class=\\\"sort ps-3 pe-1 align-middle white-space-nowrap\\\" data-sort=\\\"orderId\\\" style=\\\"min-width: 4.5rem;\\\">Order</th> <th class=\\\"sort pe-1 align-middle white-space-nowrap\\\" data-sort=\\\"customer\\\" style=\\\"min-width: 8.5rem\\\">Customer</th> <th class=\\\"sort pe-1 align-middle white-space-nowrap pe-7\\\" data-sort=\\\"date\\\">Date</th> <th class=\\\"sort pe-1 align-middle white-space-nowrap\\\" data-sort=\\\"address\\\" style=\\\"min-width: 12.5rem;\\\">Ship To</th> <th class=\\\"sort pe-1 align-middle white-space-nowrap\\\" data-sort=\\\"deliveryType\\\" style=\\\"min-width: 7rem\\\">Delivery Type</th> <th class=\\\"sort pe-1 align-middle white-space-nowrap text-center\\\" data-sort=\\\"status\\\">Status</th> <th class=\\\"sort pe-1 align-middle white-space-nowrap text-end\\\" data-sort=\\\"amount\\\">Amount</th> <th class=\\\"no-sort\\\"></th> </tr> </thead> <tbody class=\\\"list\\\"></tbody> </table> </div> <div class=\\\"d-flex justify-content-center mt-3\\\"> <button class=\\\"page-link\\\" data-list-pagination=\\\"prev\\\"><span class=\\\"fas fa-chevron-left\\\"></span></button> <ul class=\\\"mb-0 pagination\\\"></ul> <button class=\\\"page-link pe-0\\\" data-list-pagination=\\\"next\\\"><span class=\\\"fas fa-chevron-right\\\"> </span></button> </div> </div> <div class=\\\"p-3\\\"> <h4 class=\\\"mb-3\\\">How to use</h4> <p>If you are using Gulp based workflow, follow these easy steps:</p> <ul> <li>Give your table a unique ID.</li> <li>Use the <code>advanceAjaxTableInit() </code>function from <code>src/js/theme/advance-ajax-table.js </code>in a new JS file and update the ID.</li> <li>Import and invoke the function in your script file.</li> </ul> <p>If you are not using Gulp based workflow:</p> <ul> <li>Give your table a unique ID.</li> <li>Find the <code>advanceAjaxTableInit() </code>function from <code>public/assets/js/pages/advance-ajax-table.js, </code>copy the code, and update the ID in a new function.</li> </ul> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="table-list" id="advanceAjaxTable">
                    <div className="table-responsive scrollbar mb-3">
                      <table className="table table-sm fs-9 mb-0 overflow-hidden">
                        <thead className="text-body"><tr>
                            <th className="sort ps-3 pe-1 align-middle white-space-nowrap" data-sort={"orderId"} style={{"minWidth":"4.5rem"} as CSSProperties}>
Order
                            </th>
                            <th className="sort pe-1 align-middle white-space-nowrap" data-sort={"customer"} style={{"minWidth":"8.5rem"} as CSSProperties}>
Customer
                            </th>
                            <th className="sort pe-1 align-middle white-space-nowrap pe-7" data-sort={"date"}>
Date
                            </th>
                            <th className="sort pe-1 align-middle white-space-nowrap" data-sort={"address"} style={{"minWidth":"12.5rem"} as CSSProperties}>
Ship To
                            </th>
                            <th className="sort pe-1 align-middle white-space-nowrap" data-sort={"deliveryType"} style={{"minWidth":"7rem"} as CSSProperties}>
Delivery Type
                            </th>
                            <th className="sort pe-1 align-middle white-space-nowrap text-center" data-sort={"status"}>
Status
                            </th>
                            <th className="sort pe-1 align-middle white-space-nowrap text-end" data-sort={"amount"}>
Amount
                            </th>
                            <th className="no-sort">                            </th>
                          </tr>
                        </thead>
                        <tbody className="list"></tbody>
                      </table>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                      <button className="page-link" data-list-pagination={"prev"}>
                        <span className="fas fa-chevron-left">                        </span>
                      </button>
                      <ul className="mb-0 pagination">                      </ul>
                      <button className="page-link pe-0" data-list-pagination={"next"}>
                        <span className="fas fa-chevron-right">                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="mb-3">
How to use
                    </h4>
                    <p>
If you are using Gulp based workflow, follow these easy steps:
                    </p>
                    <ul>
                      <li>
Give your table a unique ID.
                      </li>
                      <li>
Use the 
                        <code>
advanceAjaxTableInit() 
                        </code>
function from 
                        <code>
src/js/theme/advance-ajax-table.js 
                        </code>
in a new JS file and update the ID.
                      </li>
                      <li>
Import and invoke the function in your script file.
                      </li>
                    </ul>
                    <p>
If you are not using Gulp based workflow:
                    </p>
                    <ul>
                      <li>
Give your table a unique ID.
                      </li>
                      <li>
Find the 
                        <code>
advanceAjaxTableInit() 
                        </code>
function from 
                        <code>
public/assets/js/pages/advance-ajax-table.js, 
                        </code>
copy the code, and update the ID in a new function.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-2">
          <div className="position-sticky mt-xl-4" style={{"top":"80px"} as CSSProperties}>
            <h5 className="lh-1">
On this page 
            </h5>
            <hr />
            <ul className="nav nav-vertical flex-column doc-nav" data-doc-nav>
              <li className="nav-item">
                <a href="#example" className="nav-link">
Example
                </a>
              </li>
              <li className="nav-item">
                <a href="#pagination-with-numbering" className="nav-link">
Pagination with numbering
                </a>
              </li>
              <li className="nav-item">
                <a href="#search-example" className="nav-link">
Search Example
                </a>
              </li>
              <li className="nav-item">
                <a href="#filter-example" className="nav-link">
Filter Example
                </a>
              </li>
              <li className="nav-item">
                <a href="#docs" className="nav-link">
Docs
                </a>
              </li>
            </ul>
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
