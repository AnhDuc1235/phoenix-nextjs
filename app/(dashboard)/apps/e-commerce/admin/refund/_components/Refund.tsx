'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Refund() {
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

    <div className="mb-9">
      <h2 className="mb-2">
Refund
      </h2>
      <div className="row align-items-center mb-3 gx-3 gy-2">
        <div className="col-12 col-sm-auto">
          <p className="text-body-secondary lh-sm mb-0">
Order : 
            <a href="#!" className="fw-bold ms-1">
#349
            </a>
          </p>
        </div>
        <div className="col-12 col-sm-auto flex-grow-1">
          <div className="row align-items-center flex-wrap gy-1">
            <div className="col-auto flex-grow-1">
              <p className="text-body-secondary lh-sm mb-0">
Customer ID : 
                <a href="#!" className="fw-bold ms-1">
2364847
                </a>
              </p>
            </div>
            <div className="col-auto">
              <div className="dropdown">
                <button className="btn dropdown-toggle dropdown-caret-none px-0 text-body" type="button" data-bs-toggle={"dropdown"} aria-expanded="false">
More action
                  <span className="fas fa-chevron-down ms-2 fs-10">                  </span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a href="#" className="dropdown-item">
Action
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
Another action
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
Something else here
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
Cancel
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row gx-5">
        <div className="col-12 col-xl-8 col-xxl-9">
          <div id="orderTable" data-list={"{\"valueNames\":[\"products\",\"color\",\"size\",\"price\",\"quantity\",\"total\"],\"page\":10}"}>
            <div className="table-responsive scrollbar">
              <table className="table fs-9 mb-0 border-top border-translucent">
                <thead>
                  <tr>
                    <th className="sort white-space-nowrap align-middle fs-10" scope="col">                    </th>
                    <th className="sort white-space-nowrap align-middle" scope="col" style={{"minWidth":"400px"} as CSSProperties} data-sort={"products"}>
PRODUCTS
                    </th>
                    <th className="sort align-middle ps-4" scope="col" data-sort={"color"} style={{"width":"150px"} as CSSProperties}>
COLOR
                    </th>
                    <th className="sort align-middle ps-4" scope="col" data-sort={"size"} style={{"width":"300px"} as CSSProperties}>
SIZE
                    </th>
                    <th className="sort align-middle text-end ps-4" scope="col" data-sort={"price"} style={{"width":"150px"} as CSSProperties}>
PRICE
                    </th>
                    <th className="sort align-middle text-end ps-4" scope="col" data-sort={"quantity"} style={{"width":"200px"} as CSSProperties}>
QUANTITY
                    </th>
                    <th className="sort align-middle text-end ps-4" scope="col" data-sort={"total"} style={{"width":"250px"} as CSSProperties}>
TOTAL
                    </th>
                  </tr>
                </thead>
                <tbody className="list" id="order-table-body"><tr className="hover-actions-trigger btn-reveal-trigger position-static">
                    <td className="align-middle white-space-nowrap py-2">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block border border-translucent rounded-2">
                        <PhoenixImage src="/assets/img/products/1.png" alt="" width={53} />
                      </PhoenixLink>
                    </td>
                    <td className="products align-middle py-0">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-2 mb-0">
{"Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends, Carbon/Graphite, One Size (S & L Bands)"}
                      </PhoenixLink>
                    </td>
                    <td className="color align-middle white-space-nowrap text-body py-0 ps-4">
Pure matte black
                    </td>
                    <td className="size align-middle white-space-nowrap text-body-tertiary fw-semibold py-0 ps-4">
42
                    </td>
                    <td className="price align-middle text-body fw-semibold text-end py-0 ps-4">
$57
                    </td>
                    <td className="quantity align-middle text-end py-0 ps-4 text-body-tertiary">
4
                    </td>
                    <td className="total align-middle fw-bold text-body-highlight text-end py-0 ps-4">
$228
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle white-space-nowrap py-2">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block border border-translucent rounded-2">
                        <PhoenixImage src="/assets/img/products/2.png" alt="" width={53} />
                      </PhoenixLink>
                    </td>
                    <td className="products align-middle py-0">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-2 mb-0">
iPhone 13 pro max-Pacific Blue-128GB storage
                      </PhoenixLink>
                    </td>
                    <td className="color align-middle white-space-nowrap text-body py-0 ps-4">
Glossy black
                    </td>
                    <td className="size align-middle white-space-nowrap text-body-tertiary fw-semibold py-0 ps-4">
XL
                    </td>
                    <td className="price align-middle text-body fw-semibold text-end py-0 ps-4">
$199
                    </td>
                    <td className="quantity align-middle text-end py-0 ps-4 text-body-tertiary">
2
                    </td>
                    <td className="total align-middle fw-bold text-body-highlight text-end py-0 ps-4">
$398
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle white-space-nowrap py-2">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block border border-translucent rounded-2">
                        <PhoenixImage src="/assets/img/products/3.png" alt="" width={53} />
                      </PhoenixLink>
                    </td>
                    <td className="products align-middle py-0">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-2 mb-0">
Apple MacBook Pro 13 inch-M1-8/256GB-space
                      </PhoenixLink>
                    </td>
                    <td className="color align-middle white-space-nowrap text-body py-0 ps-4">
Glossy black
                    </td>
                    <td className="size align-middle white-space-nowrap text-body-tertiary fw-semibold py-0 ps-4">
L
                    </td>
                    <td className="price align-middle text-body fw-semibold text-end py-0 ps-4">
$600
                    </td>
                    <td className="quantity align-middle text-end py-0 ps-4 text-body-tertiary">
1
                    </td>
                    <td className="total align-middle fw-bold text-body-highlight text-end py-0 ps-4">
$600
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle white-space-nowrap py-2">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block border border-translucent rounded-2">
                        <PhoenixImage src="/assets/img/products/4.png" alt="" width={53} />
                      </PhoenixLink>
                    </td>
                    <td className="products align-middle py-0">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-2 mb-0">
Apple iMac 24" 4K Retina Display M1 8 Core CPU, 7 Core GPU, 256GB SSD, Green (MJV83ZP/A) 2021
                      </PhoenixLink>
                    </td>
                    <td className="color align-middle white-space-nowrap text-body py-0 ps-4">
Gray
                    </td>
                    <td className="size align-middle white-space-nowrap text-body-tertiary fw-semibold py-0 ps-4">
22
                    </td>
                    <td className="price align-middle text-body fw-semibold text-end py-0 ps-4">
$250
                    </td>
                    <td className="quantity align-middle text-end py-0 ps-4 text-body-tertiary">
2
                    </td>
                    <td className="total align-middle fw-bold text-body-highlight text-end py-0 ps-4">
$500
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle white-space-nowrap py-2">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block border border-translucent rounded-2">
                        <PhoenixImage src="/assets/img/products/5.png" alt="" width={53} />
                      </PhoenixLink>
                    </td>
                    <td className="products align-middle py-0">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-2 mb-0">
Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset
                      </PhoenixLink>
                    </td>
                    <td className="color align-middle white-space-nowrap text-body py-0 ps-4">
Black
                    </td>
                    <td className="size align-middle white-space-nowrap text-body-tertiary fw-semibold py-0 ps-4">
L
                    </td>
                    <td className="price align-middle text-body fw-semibold text-end py-0 ps-4">
$49
                    </td>
                    <td className="quantity align-middle text-end py-0 ps-4 text-body-tertiary">
3
                    </td>
                    <td className="total align-middle fw-bold text-body-highlight text-end py-0 ps-4">
$147
                    </td>
                  </tr>
                  <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="align-middle white-space-nowrap py-2">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block border border-translucent rounded-2">
                        <PhoenixImage src="/assets/img/products/6.png" alt="" width={53} />
                      </PhoenixLink>
                    </td>
                    <td className="products align-middle py-0">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-2 mb-0">
PlayStation 5 DualSense Wireless Controller
                      </PhoenixLink>
                    </td>
                    <td className="color align-middle white-space-nowrap text-body py-0 ps-4">
Green Golden
                    </td>
                    <td className="size align-middle white-space-nowrap text-body-tertiary fw-semibold py-0 ps-4">
Regular
                    </td>
                    <td className="price align-middle text-body fw-semibold text-end py-0 ps-4">
$65
                    </td>
                    <td className="quantity align-middle text-end py-0 ps-4 text-body-tertiary">
2
                    </td>
                    <td className="total align-middle fw-bold text-body-highlight text-end py-0 ps-4">
$130
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="d-flex flex-between-center py-3 border-bottom border-translucent mb-6">
            <p className="text-body-emphasis fw-semibold lh-sm mb-0">
Items subtotal :
            </p>
            <p className="text-body-emphasis fw-bold lh-sm mb-0">
$1690
            </p>
          </div>
        </div>
        <div className="col-12 col-xl-4 col-xxl-3">
          <div className="row">
            <div className="col-12">
              <div className="card mb-3">
                <div className="card-body">
                  <h3 className="card-title mb-4">
Summary
                  </h3>
                  <div>
                    <div className="d-flex justify-content-between">
                      <p className="text-body fw-semibold">
Items subtotal :
                      </p>
                      <p className="text-body-emphasis fw-semibold">
$691
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-body fw-semibold">
Discount :
                      </p>
                      <p className="text-danger fw-semibold">
-$59
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-body fw-semibold">
Tax :
                      </p>
                      <p className="text-body-emphasis fw-semibold">
$126.20
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-body fw-semibold">
Subtotal :
                      </p>
                      <p className="text-body-emphasis fw-semibold">
$665
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-body fw-semibold">
Shipping Cost :
                      </p>
                      <p className="text-body-emphasis fw-semibold">
$30
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between border-top border-translucent border-dashed pt-4">
                    <h4 className="mb-0">
Total :
                    </h4>
                    <h4 className="mb-0">
$695.20
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title mb-4">
Refund Amount
                  </h4>
                  <input className="form-control mb-4" id="refundInput" type="text" placeholder="Amount" />
                  <button className="btn btn-primary w-100">
Refund $500
                  </button>
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
