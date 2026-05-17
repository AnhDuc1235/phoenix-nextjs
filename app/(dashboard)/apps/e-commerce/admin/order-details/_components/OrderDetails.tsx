'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function OrderDetails() {
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
      <h2 className="mb-0">
Order 
        <span>
#349
        </span>
      </h2>
      <div className="d-sm-flex flex-between-center mb-3">
        <p className="text-body-secondary lh-sm mb-0 mt-2 mt-sm-0">
Customer ID : 
          <a href="#!" className="fw-bold">
 2364847
          </a>
        </p>
        <div className="d-flex">
          <button className="btn btn-link pe-3 ps-0 text-body">
            <span className="fas fa-print me-2">            </span>
Print
          </button>
          <button className="btn btn-link px-3 text-body">
            <span className="fas fa-undo me-2">            </span>
Refund
          </button>
          <div className="dropdown">
            <button className="btn text-body dropdown-toggle dropdown-caret-none ps-3 pe-0" type="button" data-bs-toggle={"dropdown"} aria-expanded="false">
More action
              <span className="fas fa-chevron-down ms-2">              </span>
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
            </ul>
          </div>
        </div>
      </div>
      <div className="row g-5 gy-7">
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
          <div className="row gx-4 gy-6 g-xl-7 justify-content-sm-center justify-content-xl-start">
            <div className="col-12 col-sm-auto">
              <h4 className="mb-5">
Billing details
              </h4>
              <div className="row g-4 flex-sm-column">
                <div className="col-6 col-sm-12">
                  <div className="d-flex align-items-center mb-1">
                    <span className="me-2" data-feather={"user"} style={{"strokeWidth":"2.5"} as CSSProperties}>                    </span>
                    <h6 className="mb-0">
Customer
                    </h6>
                  </div>
                  <a href="#!" className="d-block fs-9 ms-4">
Shatinon Mekalan
                  </a>
                </div>
                <div className="col-6 col-sm-12">
                  <div className="d-flex align-items-center mb-1">
                    <span className="me-2" data-feather={"mail"} style={{"strokeWidth":"2.5"} as CSSProperties}>                    </span>
                    <h6 className="mb-0">
Email
                    </h6>
                  </div>
                  <a href="mailto:shatinon@jeemail.com:" className="d-block fs-9 ms-4">
shatinon@jeemail.com
                  </a>
                </div>
                <div className="col-6 col-sm-12 order-sm-1">
                  <div className="d-flex align-items-center mb-1">
                    <span className="me-2" data-feather={"home"} style={{"strokeWidth":"2.5"} as CSSProperties}>                    </span>
                    <h6 className="mb-0">
Address
                    </h6>
                  </div>
                  <div className="ms-4">
                    <p className="text-body-secondary mb-0 fs-9">
Shatinon Mekalan
                    </p>
                    <p className="text-body-secondary mb-0 fs-9">
Vancouver, British Columbia,
                      <br className="d-none d-sm-block" />
Canada
                    </p>
                  </div>
                </div>
                <div className="col-6 col-sm-12">
                  <div className="d-flex align-items-center mb-1">
                    <span className="me-2" data-feather={"phone"} style={{"strokeWidth":"2.5"} as CSSProperties}>                    </span>
                    <h6 className="mb-0">
Phone
                    </h6>
                  </div>
                  <a href="tel:+1234567890" className="d-block fs-9 ms-4">
+1234567890
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-auto">
              <h4 className="mb-5">
Shipping details
              </h4>
              <div className="row g-4 flex-sm-column">
                <div className="col-6 col-sm-12">
                  <div className="d-flex align-items-center mb-1">
                    <span className="me-2" data-feather={"mail"} style={{"strokeWidth":"2.5"} as CSSProperties}>                    </span>
                    <h6 className="mb-0">
Email
                    </h6>
                  </div>
                  <a href="mailto:shatinon@jeemail.com:" className="d-block fs-9 ms-4">
shatinon@jeemail.com
                  </a>
                </div>
                <div className="col-6 col-sm-12">
                  <div className="d-flex align-items-center mb-1">
                    <span className="me-2" data-feather={"phone"} style={{"strokeWidth":"2.5"} as CSSProperties}>                    </span>
                    <h6 className="mb-0">
Phone
                    </h6>
                  </div>
                  <a href="tel:+1234567890" className="d-block fs-9 ms-4">
+1234567890
                  </a>
                </div>
                <div className="col-6 col-sm-12 order-sm-1">
                  <div className="d-flex align-items-center mb-1">
                    <span className="me-2" data-feather={"home"} style={{"strokeWidth":"2.5"} as CSSProperties}>                    </span>
                    <h6 className="mb-0">
Address
                    </h6>
                  </div>
                  <div className="ms-4">
                    <p className="text-body-secondary mb-0 fs-9">
Shatinon Mekalan
                    </p>
                    <p className="text-body-secondary mb-0 fs-9">
Vancouver, British Columbia 
                      <br />
Canada
                    </p>
                  </div>
                </div>
                <div className="col-6 col-sm-12">
                  <div className="d-flex align-items-center mb-1">
                    <span className="me-2" data-feather={"calendar"} style={{"strokeWidth":"2.5"} as CSSProperties}>                    </span>
                    <h6 className="mb-0">
Shipping Date
                    </h6>
                  </div>
                  <p className="mb-0 text-body-secondary fs-9 ms-4">
12 Nov, 2021
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-auto">
              <h4 className="mb-5">
Other details
              </h4>
              <div className="row g-4 flex-sm-column">
                <div className="col-6 col-sm-12">
                  <div className="d-flex align-items-center mb-1">
                    <span className="me-2" data-feather={"shopping-bag"} style={{"strokeWidth":"2.5"} as CSSProperties}>                    </span>
                    <h6 className="mb-0">
Gift order
                    </h6>
                  </div>
                  <p className="mb-0 text-body-secondary fs-9 ms-4">
Yes
                  </p>
                </div>
                <div className="col-6 col-sm-12">
                  <div className="d-flex align-items-center mb-1">
                    <span className="me-2" data-feather={"package"} style={{"strokeWidth":"2.5"} as CSSProperties}>                    </span>
                    <h6 className="mb-0">
Wraping
                    </h6>
                  </div>
                  <p className="mb-0 text-body-secondary fs-9 ms-4">
Magic wrapper
                  </p>
                </div>
                <div className="col-6 col-sm-12">
                  <div className="d-flex align-items-center mb-1">
                    <span className="me-2" data-feather={"file-text"} style={{"strokeWidth":"2.5"} as CSSProperties}>                    </span>
                    <h6 className="mb-0">
Recipient
                    </h6>
                  </div>
                  <p className="mb-0 text-body-secondary fs-9 ms-4">
Monjito Shiniga
                  </p>
                </div>
                <div className="col-6 col-sm-12">
                  <div className="d-flex align-items-center mb-1">
                    <span className="me-2" data-feather={"mail"} style={{"strokeWidth":"2.5"} as CSSProperties}>                    </span>
                    <h6 className="mb-0">
Gift Meaasge
                    </h6>
                  </div>
                  <div className="ms-4">
                    <p className="text-body-secondary fs-9 mb-0">
Happy Birthday Shiniga 
                      <br />
Lots of Love Buga Buga!!
                    </p>
                    <p className="mb-0 text-body-secondary fs-9">
Yours, 
                      <br />
Mekalan
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
                  <h3 className="card-title mb-4">
Order Status
                  </h3>
                  <h6 className="mb-2">
Payment status
                  </h6>
                  <select className="form-select mb-4" aria-label="delivery type">
                    <option value="cod">
Processing
                    </option>
                    <option value="card">
Canceled
                    </option>
                    <option value="paypal">
Completed
                    </option>
                  </select>
                  <h6 className="mb-2">
Fulfillment status
                  </h6>
                  <select className="form-select" aria-label="delivery type">
                    <option value="cod">
Unfulfilled
                    </option>
                    <option value="card">
Fulfilled
                    </option>
                    <option value="paypal">
Pending
                    </option>
                  </select>
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
