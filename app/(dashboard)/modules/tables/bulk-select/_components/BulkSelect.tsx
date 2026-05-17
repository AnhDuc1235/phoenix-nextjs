'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function BulkSelect() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Bulk Select
    </h2>

    <p className="text-body-tertiary lead mb-2">
Bulk select allows users to check multiple checkboxes at once and toggles a UI for bulk actions to be performed for the selected items.
    </p>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="mb-9">
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
{"<code class=\"language-html\"><h5>Bulk select consist of this following parts: </h5> <ul> <li>The main checkbox, which is used for checking all the other checkboxes, the attribute <code>data-bulk-select</code> is used to define that item.</li> <li>Three(3) elements can be hooked with bulk select: <code>body</code>, <code>actions</code>, <code>replacedElement</code>. <pre><code class=\\\"language-html\\\">&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; data-bulk-select='{&quot;body&quot;:&quot;bulk-select-body&quot;,&quot;actions&quot;:&quot;bulk-select-actions&quot;,&quot;replacedElement&quot;:&quot;bulk-select-replace-element&quot;}' /&gt;</code></pre> <p class=\\\"mb-0\\\">These ids definded in these keys are used to hook the respective elements.</p> </li> <li><code>body:</code> The target checkboxes are wrapped using a unique id defined in <code>body</code>. In this example <code>bulk-select-body</code>. Every targeted checkbox within this wrapper is marked with the data attribute <code>data-bulk-select-row.</code>You will get the value passed in this attribute as return value of <code>getSelectedRows </code>method in JS.</li> <li><code>actions:</code> The target actions are wrapped using a unique id defined in <code>actions</code>. The element with this id (in <code>example bulk-select-actions</code>) will be toggled by checking the main checkbox.</li> <li><code>replacedElement:</code> The target replaced element with action are wrapped using a unique id defined in <code>replacedElement</code>. Bulk select actions will be replaced with the content of this element with this id (in example <code>bulk-select-replace-element</code>)</li> </ul> <h5>Javascript</h5> <ul> <li><code>getInstance: </code>Static method which allows you to get the <strong>BulkSelect </strong>instance associated to a DOM element, you can use it like this: <code>window.phoenix.BulkSelect.getInstance(element)</code></li> <li><code>getSelectedRows: </code>Get the selected rows data by invoking <code>getSelectedRows </code>method on the <code>BulkSelect </code>instance <div class=\\\"border border-translucent rounded-2 p-3 bg-primary-subtle\\\"><code>const bulkSelectEl = document.getElementById('bulk-select-example');</code><br /><code>const bulkSelectInstance = window.phoenix.BulkSelect.getInstance(bulkSelectEl);</code></div> </li> </ul></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <h5>
Bulk select consist of this following parts: 
                  </h5>
                  <ul>
                    <li>
The main checkbox, which is used for checking all the other checkboxes, the attribute 
                      <code>
data-bulk-select
                      </code>
 is used to define that item.
                    </li>
                    <li>
Three(3) elements can be hooked with bulk select: 
                      <code>
body
                      </code>
, 
                      <code>
actions
                      </code>
, 
                      <code>
replacedElement
                      </code>
. 
                      <pre>
{"<code class=\"language-html\"><input class=\\\"form-check-input\\\" type=\\\"checkbox\\\" data-bulk-select='{\\\"body\\\":\\\"bulk-select-body\\\",\\\"actions\\\":\\\"bulk-select-actions\\\",\\\"replacedElement\\\":\\\"bulk-select-replace-element\\\"}' /></code>"}
                      </pre>
                      <p className="mb-0">
These ids definded in these keys are used to hook the respective elements.
                      </p>
                    </li>
                    <li>
                      <code>
body:
                      </code>
 The target checkboxes are wrapped using a unique id defined in 
                      <code>
body
                      </code>
. In this example 
                      <code>
bulk-select-body
                      </code>
. Every targeted checkbox within this wrapper is marked with the data attribute 
                      <code>
data-bulk-select-row.
                      </code>
You will get the value passed in this attribute as return value of 
                      <code>
getSelectedRows 
                      </code>
method in JS.
                    </li>
                    <li>
                      <code>
actions:
                      </code>
 The target actions are wrapped using a unique id defined in 
                      <code>
actions
                      </code>
. The element with this id (in 
                      <code>
example bulk-select-actions
                      </code>
) will be toggled by checking the main checkbox.
                    </li>
                    <li>
                      <code>
replacedElement:
                      </code>
 The target replaced element with action are wrapped using a unique id defined in 
                      <code>
replacedElement
                      </code>
. Bulk select actions will be replaced with the content of this element with this id (in example 
                      <code>
bulk-select-replace-element
                      </code>
)
                    </li>
                  </ul>
                  <h5>
Javascript
                  </h5>
                  <ul>
                    <li>
                      <code>
getInstance: 
                      </code>
Static method which allows you to get the 
                      <strong>
BulkSelect 
                      </strong>
instance associated to a DOM element, you can use it like this: 
                      <code>
window.phoenix.BulkSelect.getInstance(element)
                      </code>
                    </li>
                    <li>
                      <code>
getSelectedRows: 
                      </code>
Get the selected rows data by invoking 
                      <code>
getSelectedRows 
                      </code>
method on the 
                      <code>
BulkSelect 
                      </code>
instance 
                      <div className="border border-translucent rounded-2 p-3 bg-primary-subtle">
                        <code>
const bulkSelectEl = document.getElementById('bulk-select-example');
                        </code>
                        <br />
                        <code>
const bulkSelectInstance = window.phoenix.BulkSelect.getInstance(bulkSelectEl);
                        </code>
                      </div>
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
{"<code class=\"language-html\"><div class=\\\"d-flex align-items-center justify-content-end my-3\\\"> <div id=\\\"bulk-select-replace-element\\\"> <button class=\\\"btn btn-phoenix-success btn-sm\\\" type=\\\"button\\\"><span class=\\\"fas fa-plus\\\" data-fa-transform=\\\"shrink-3 down-2\\\"></span><span class=\\\"ms-1\\\">New</span></button> </div> <div class=\\\"d-none ms-3\\\" id=\\\"bulk-select-actions\\\"> <div class=\\\"d-flex\\\"> <select class=\\\"form-select form-select-sm\\\" aria-label=\\\"Bulk actions\\\"> <option selected=\\\"selected\\\">Bulk actions</option> <option value=\\\"Delete\\\">Delete</option> <option value=\\\"Archive\\\">Archive</option> </select> <button class=\\\"btn btn-phoenix-danger btn-sm ms-2\\\" type=\\\"button\\\">Apply</button> </div> </div> </div> <div id=\\\"tableExample\\\" data-list='{\\\"valueNames\\\":[\\\"name\\\",\\\"email\\\",\\\"age\\\"],\\\"page\\\":5,\\\"pagination\\\":true}'> <div class=\\\"table-responsive mx-n1 px-1\\\"> <table class=\\\"table table-sm border-top border-translucent fs-9 mb-0\\\"> <thead> <tr> <th class=\\\"white-space-nowrap fs-9 align-middle ps-0\\\" style=\\\"max-width:20px; width:18px;\\\"> <div class=\\\"form-check mb-0 fs-8\\\"> <input class=\\\"form-check-input\\\" id=\\\"bulk-select-example\\\" type=\\\"checkbox\\\" data-bulk-select='{\\\"body\\\":\\\"bulk-select-body\\\",\\\"actions\\\":\\\"bulk-select-actions\\\",\\\"replacedElement\\\":\\\"bulk-select-replace-element\\\"}' /> </div> </th> <th class=\\\"sort align-middle ps-3\\\" data-sort=\\\"name\\\">Name</th> <th class=\\\"sort align-middle\\\" data-sort=\\\"email\\\">Email</th> <th class=\\\"sort align-middle\\\" data-sort=\\\"age\\\">Age</th> <th class=\\\"sort text-end align-middle pe-0\\\" scope=\\\"col\\\">ACTION</th> </tr> </thead> <tbody class=\\\"list\\\" id=\\\"bulk-select-body\\\"><tr> <td class=\\\"fs-9 align-middle\\\"> <div class=\\\"form-check mb-0 fs-8\\\"> <input class=\\\"form-check-input\\\" type=\\\"checkbox\\\" data-bulk-select-row=\\\"{&quot;name&quot;:&quot;Anna&quot;,&quot;email&quot;:&quot;anna@example.com&quot;,&quot;age&quot;:18}\\\" /> </div> </td> <td class=\\\"align-middle ps-3 name\\\">Anna</td> <td class=\\\"align-middle email\\\">anna@example.com</td> <td class=\\\"align-middle age\\\">18</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"fs-9 align-middle\\\"> <div class=\\\"form-check mb-0 fs-8\\\"> <input class=\\\"form-check-input\\\" type=\\\"checkbox\\\" data-bulk-select-row=\\\"{&quot;name&quot;:&quot;Homer&quot;,&quot;email&quot;:&quot;homer@example.com&quot;,&quot;age&quot;:35}\\\" /> </div> </td> <td class=\\\"align-middle ps-3 name\\\">Homer</td> <td class=\\\"align-middle email\\\">homer@example.com</td> <td class=\\\"align-middle age\\\">35</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"fs-9 align-middle\\\"> <div class=\\\"form-check mb-0 fs-8\\\"> <input class=\\\"form-check-input\\\" type=\\\"checkbox\\\" data-bulk-select-row=\\\"{&quot;name&quot;:&quot;Oscar&quot;,&quot;email&quot;:&quot;oscar@example.com&quot;,&quot;age&quot;:52}\\\" /> </div> </td> <td class=\\\"align-middle ps-3 name\\\">Oscar</td> <td class=\\\"align-middle email\\\">oscar@example.com</td> <td class=\\\"align-middle age\\\">52</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"fs-9 align-middle\\\"> <div class=\\\"form-check mb-0 fs-8\\\"> <input class=\\\"form-check-input\\\" type=\\\"checkbox\\\" data-bulk-select-row=\\\"{&quot;name&quot;:&quot;Emily&quot;,&quot;email&quot;:&quot;emily@example.com&quot;,&quot;age&quot;:30}\\\" /> </div> </td> <td class=\\\"align-middle ps-3 name\\\">Emily</td> <td class=\\\"align-middle email\\\">emily@example.com</td> <td class=\\\"align-middle age\\\">30</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"fs-9 align-middle\\\"> <div class=\\\"form-check mb-0 fs-8\\\"> <input class=\\\"form-check-input\\\" type=\\\"checkbox\\\" data-bulk-select-row=\\\"{&quot;name&quot;:&quot;Jara&quot;,&quot;email&quot;:&quot;jara@example.com&quot;,&quot;age&quot;:25}\\\" /> </div> </td> <td class=\\\"align-middle ps-3 name\\\">Jara</td> <td class=\\\"align-middle email\\\">jara@example.com</td> <td class=\\\"align-middle age\\\">25</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"fs-9 align-middle\\\"> <div class=\\\"form-check mb-0 fs-8\\\"> <input class=\\\"form-check-input\\\" type=\\\"checkbox\\\" data-bulk-select-row=\\\"{&quot;name&quot;:&quot;Clark&quot;,&quot;email&quot;:&quot;clark@example.com&quot;,&quot;age&quot;:39}\\\" /> </div> </td> <td class=\\\"align-middle ps-3 name\\\">Clark</td> <td class=\\\"align-middle email\\\">clark@example.com</td> <td class=\\\"align-middle age\\\">39</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"fs-9 align-middle\\\"> <div class=\\\"form-check mb-0 fs-8\\\"> <input class=\\\"form-check-input\\\" type=\\\"checkbox\\\" data-bulk-select-row=\\\"{&quot;name&quot;:&quot;Jennifer&quot;,&quot;email&quot;:&quot;jennifer@example.com&quot;,&quot;age&quot;:52}\\\" /> </div> </td> <td class=\\\"align-middle ps-3 name\\\">Jennifer</td> <td class=\\\"align-middle email\\\">jennifer@example.com</td> <td class=\\\"align-middle age\\\">52</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"fs-9 align-middle\\\"> <div class=\\\"form-check mb-0 fs-8\\\"> <input class=\\\"form-check-input\\\" type=\\\"checkbox\\\" data-bulk-select-row=\\\"{&quot;name&quot;:&quot;Tony&quot;,&quot;email&quot;:&quot;tony@example.com&quot;,&quot;age&quot;:30}\\\" /> </div> </td> <td class=\\\"align-middle ps-3 name\\\">Tony</td> <td class=\\\"align-middle email\\\">tony@example.com</td> <td class=\\\"align-middle age\\\">30</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"fs-9 align-middle\\\"> <div class=\\\"form-check mb-0 fs-8\\\"> <input class=\\\"form-check-input\\\" type=\\\"checkbox\\\" data-bulk-select-row=\\\"{&quot;name&quot;:&quot;Tom&quot;,&quot;email&quot;:&quot;tom@example.com&quot;,&quot;age&quot;:25}\\\" /> </div> </td> <td class=\\\"align-middle ps-3 name\\\">Tom</td> <td class=\\\"align-middle email\\\">tom@example.com</td> <td class=\\\"align-middle age\\\">25</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"fs-9 align-middle\\\"> <div class=\\\"form-check mb-0 fs-8\\\"> <input class=\\\"form-check-input\\\" type=\\\"checkbox\\\" data-bulk-select-row=\\\"{&quot;name&quot;:&quot;Michael&quot;,&quot;email&quot;:&quot;michael@example.com&quot;,&quot;age&quot;:39}\\\" /> </div> </td> <td class=\\\"align-middle ps-3 name\\\">Michael</td> <td class=\\\"align-middle email\\\">michael@example.com</td> <td class=\\\"align-middle age\\\">39</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"fs-9 align-middle\\\"> <div class=\\\"form-check mb-0 fs-8\\\"> <input class=\\\"form-check-input\\\" type=\\\"checkbox\\\" data-bulk-select-row=\\\"{&quot;name&quot;:&quot;Antony&quot;,&quot;email&quot;:&quot;antony@example.com&quot;,&quot;age&quot;:39}\\\" /> </div> </td> <td class=\\\"align-middle ps-3 name\\\">Antony</td> <td class=\\\"align-middle email\\\">antony@example.com</td> <td class=\\\"align-middle age\\\">39</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"fs-9 align-middle\\\"> <div class=\\\"form-check mb-0 fs-8\\\"> <input class=\\\"form-check-input\\\" type=\\\"checkbox\\\" data-bulk-select-row=\\\"{&quot;name&quot;:&quot;Raymond&quot;,&quot;email&quot;:&quot;raymond@example.com&quot;,&quot;age&quot;:52}\\\" /> </div> </td> <td class=\\\"align-middle ps-3 name\\\">Raymond</td> <td class=\\\"align-middle email\\\">raymond@example.com</td> <td class=\\\"align-middle age\\\">52</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"fs-9 align-middle\\\"> <div class=\\\"form-check mb-0 fs-8\\\"> <input class=\\\"form-check-input\\\" type=\\\"checkbox\\\" data-bulk-select-row=\\\"{&quot;name&quot;:&quot;Marie&quot;,&quot;email&quot;:&quot;marie@example.com&quot;,&quot;age&quot;:30}\\\" /> </div> </td> <td class=\\\"align-middle ps-3 name\\\">Marie</td> <td class=\\\"align-middle email\\\">marie@example.com</td> <td class=\\\"align-middle age\\\">30</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"fs-9 align-middle\\\"> <div class=\\\"form-check mb-0 fs-8\\\"> <input class=\\\"form-check-input\\\" type=\\\"checkbox\\\" data-bulk-select-row=\\\"{&quot;name&quot;:&quot;Cohen&quot;,&quot;email&quot;:&quot;cohen@example.com&quot;,&quot;age&quot;:25}\\\" /> </div> </td> <td class=\\\"align-middle ps-3 name\\\">Cohen</td> <td class=\\\"align-middle email\\\">cohen@example.com</td> <td class=\\\"align-middle age\\\">25</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> <tr> <td class=\\\"fs-9 align-middle\\\"> <div class=\\\"form-check mb-0 fs-8\\\"> <input class=\\\"form-check-input\\\" type=\\\"checkbox\\\" data-bulk-select-row=\\\"{&quot;name&quot;:&quot;Rowen&quot;,&quot;email&quot;:&quot;rowen@example.com&quot;,&quot;age&quot;:39}\\\" /> </div> </td> <td class=\\\"align-middle ps-3 name\\\">Rowen</td> <td class=\\\"align-middle email\\\">rowen@example.com</td> <td class=\\\"align-middle age\\\">39</td> <td class=\\\"align-middle white-space-nowrap text-end pe-0\\\"> <div class=\\\"btn-reveal-trigger position-static\\\"> <button class=\\\"btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" data-boundary=\\\"window\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\" data-bs-reference=\\\"parent\\\"><span class=\\\"fas fa-ellipsis-h fs-10\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">View</a><a class=\\\"dropdown-item\\\" href=\\\"#!\\\">Export</a> <div class=\\\"dropdown-divider\\\"></div><a class=\\\"dropdown-item text-danger\\\" href=\\\"#!\\\">Remove</a> </div> </div> </td> </tr> </tbody> </table> </div> <div class=\\\"d-flex flex-between-center pt-3 mb-3\\\"> <div class=\\\"pagination d-none\\\"></div> <p class=\\\"mb-0 fs-9\\\"> <span class=\\\"d-none d-sm-inline-block\\\" data-list-info=\\\"data-list-info\\\"></span> <span class=\\\"d-none d-sm-inline-block\\\"> &mdash; </span> <a class=\\\"fw-semibold\\\" href=\\\"#!\\\" data-list-view=\\\"*\\\"> View all <span class=\\\"fas fa-angle-right ms-1\\\" data-fa-transform=\\\"down-1\\\"></span> </a><a class=\\\"fw-semibold d-none\\\" href=\\\"#!\\\" data-list-view=\\\"less\\\"> View Less <span class=\\\"fas fa-angle-right ms-1\\\" data-fa-transform=\\\"down-1\\\"></span> </a> </p> <div class=\\\"d-flex\\\"> <button class=\\\"btn btn-sm btn-primary\\\" type=\\\"button\\\" data-list-pagination=\\\"prev\\\"><span>Previous</span></button> <button class=\\\"btn btn-sm btn-primary px-4 ms-2\\\" type=\\\"button\\\" data-list-pagination=\\\"next\\\"><span>Next</span></button> </div> </div> <p class=\\\"mb-2\\\">Click the button to get selected rows</p> <button class=\\\"btn btn-warning\\\" data-selected-rows=\\\"data-selected-rows\\\">Get Selected Rows</button> <pre id=\\\"selectedRows\\\"></pre> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="d-flex align-items-center justify-content-end my-3">
                    <div id="bulk-select-replace-element">
                      <button className="btn btn-phoenix-success btn-sm" type="button">
                        <span className="fas fa-plus" data-fa-transform={"shrink-3 down-2"}>                        </span>
                        <span className="ms-1">
New
                        </span>
                      </button>
                    </div>
                    <div className="d-none ms-3" id="bulk-select-actions">
                      <div className="d-flex">
                        <select className="form-select form-select-sm" aria-label="Bulk actions">
                          <option>
Bulk actions
                          </option>
                          <option value="Delete">
Delete
                          </option>
                          <option value="Archive">
Archive
                          </option>
                        </select>
                        <button className="btn btn-phoenix-danger btn-sm ms-2" type="button">
Apply
                        </button>
                      </div>
                    </div>
                  </div>
                  <div id="tableExample" data-list={"{\"valueNames\":[\"name\",\"email\",\"age\"],\"page\":5,\"pagination\":true}"}>
                    <div className="table-responsive mx-n1 px-1">
                      <table className="table table-sm border-top border-translucent fs-9 mb-0">
                        <thead>
                          <tr>
                            <th className="white-space-nowrap fs-9 align-middle ps-0" style={{"maxWidth":"20px","width":"18px"} as CSSProperties}>
                              <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" id="bulk-select-example" type="checkbox" data-bulk-select={"{\"body\":\"bulk-select-body\",\"actions\":\"bulk-select-actions\",\"replacedElement\":\"bulk-select-replace-element\"}"} />
                              </div>
                            </th>
                            <th className="sort align-middle ps-3" data-sort={"name"}>
Name
                            </th>
                            <th className="sort align-middle" data-sort={"email"}>
Email
                            </th>
                            <th className="sort align-middle" data-sort={"age"}>
Age
                            </th>
                            <th className="sort text-end align-middle pe-0" scope="col">
ACTION
                            </th>
                          </tr>
                        </thead>
                        <tbody className="list" id="bulk-select-body"><tr>
                            <td className="fs-9 align-middle">
                              <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox" data-bulk-select-row={"{&quot;name&quot;:&quot;Anna&quot;,&quot;email&quot;:&quot;anna@example.com&quot;,&quot;age&quot;:18}"} />
                              </div>
                            </td>
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
                            <td className="fs-9 align-middle">
                              <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox" data-bulk-select-row={"{&quot;name&quot;:&quot;Homer&quot;,&quot;email&quot;:&quot;homer@example.com&quot;,&quot;age&quot;:35}"} />
                              </div>
                            </td>
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
                            <td className="fs-9 align-middle">
                              <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox" data-bulk-select-row={"{&quot;name&quot;:&quot;Oscar&quot;,&quot;email&quot;:&quot;oscar@example.com&quot;,&quot;age&quot;:52}"} />
                              </div>
                            </td>
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
                            <td className="fs-9 align-middle">
                              <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox" data-bulk-select-row={"{&quot;name&quot;:&quot;Emily&quot;,&quot;email&quot;:&quot;emily@example.com&quot;,&quot;age&quot;:30}"} />
                              </div>
                            </td>
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
                            <td className="fs-9 align-middle">
                              <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox" data-bulk-select-row={"{&quot;name&quot;:&quot;Jara&quot;,&quot;email&quot;:&quot;jara@example.com&quot;,&quot;age&quot;:25}"} />
                              </div>
                            </td>
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
                            <td className="fs-9 align-middle">
                              <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox" data-bulk-select-row={"{&quot;name&quot;:&quot;Clark&quot;,&quot;email&quot;:&quot;clark@example.com&quot;,&quot;age&quot;:39}"} />
                              </div>
                            </td>
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
                            <td className="fs-9 align-middle">
                              <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox" data-bulk-select-row={"{&quot;name&quot;:&quot;Jennifer&quot;,&quot;email&quot;:&quot;jennifer@example.com&quot;,&quot;age&quot;:52}"} />
                              </div>
                            </td>
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
                            <td className="fs-9 align-middle">
                              <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox" data-bulk-select-row={"{&quot;name&quot;:&quot;Tony&quot;,&quot;email&quot;:&quot;tony@example.com&quot;,&quot;age&quot;:30}"} />
                              </div>
                            </td>
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
                            <td className="fs-9 align-middle">
                              <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox" data-bulk-select-row={"{&quot;name&quot;:&quot;Tom&quot;,&quot;email&quot;:&quot;tom@example.com&quot;,&quot;age&quot;:25}"} />
                              </div>
                            </td>
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
                            <td className="fs-9 align-middle">
                              <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox" data-bulk-select-row={"{&quot;name&quot;:&quot;Michael&quot;,&quot;email&quot;:&quot;michael@example.com&quot;,&quot;age&quot;:39}"} />
                              </div>
                            </td>
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
                            <td className="fs-9 align-middle">
                              <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox" data-bulk-select-row={"{&quot;name&quot;:&quot;Antony&quot;,&quot;email&quot;:&quot;antony@example.com&quot;,&quot;age&quot;:39}"} />
                              </div>
                            </td>
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
                            <td className="fs-9 align-middle">
                              <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox" data-bulk-select-row={"{&quot;name&quot;:&quot;Raymond&quot;,&quot;email&quot;:&quot;raymond@example.com&quot;,&quot;age&quot;:52}"} />
                              </div>
                            </td>
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
                            <td className="fs-9 align-middle">
                              <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox" data-bulk-select-row={"{&quot;name&quot;:&quot;Marie&quot;,&quot;email&quot;:&quot;marie@example.com&quot;,&quot;age&quot;:30}"} />
                              </div>
                            </td>
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
                            <td className="fs-9 align-middle">
                              <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox" data-bulk-select-row={"{&quot;name&quot;:&quot;Cohen&quot;,&quot;email&quot;:&quot;cohen@example.com&quot;,&quot;age&quot;:25}"} />
                              </div>
                            </td>
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
                            <td className="fs-9 align-middle">
                              <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox" data-bulk-select-row={"{&quot;name&quot;:&quot;Rowen&quot;,&quot;email&quot;:&quot;rowen@example.com&quot;,&quot;age&quot;:39}"} />
                              </div>
                            </td>
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
                        </tbody>
                      </table>
                    </div>
                    <div className="d-flex flex-between-center pt-3 mb-3">
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
                    <p className="mb-2">
Click the button to get selected rows
                    </p>
                    <button className="btn btn-warning" data-selected-rows>
Get Selected Rows
                    </button>
                    <pre id="selectedRows">                    </pre>
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
                <a href="#docs" className="nav-link">
Docs
                </a>
              </li>
              <li className="nav-item">
                <a href="#example" className="nav-link">
Example
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
