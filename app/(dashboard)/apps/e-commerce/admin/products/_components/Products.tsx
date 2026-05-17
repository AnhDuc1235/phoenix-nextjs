'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Products() {
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
      <div className="row g-3 mb-4">
        <div className="col-auto">
          <h2 className="mb-0">
Products
          </h2>
        </div>
      </div>
      <ul className="nav nav-links mb-3 mb-lg-2 mx-n3">
        <li className="nav-item">
          <a href="#" className="nav-link" aria-current="page">
            <span>
All 
            </span>            <span className="text-body-tertiary fw-semibold">
(68817)
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <span>
Published 
            </span>            <span className="text-body-tertiary fw-semibold">
(70348)
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <span>
Drafts 
            </span>            <span className="text-body-tertiary fw-semibold">
(17)
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <span>
On discount 
            </span>            <span className="text-body-tertiary fw-semibold">
(810)
            </span>
          </a>
        </li>
      </ul>
      <div id="products" data-list={"{\"valueNames\":[\"product\",\"price\",\"category\",\"tags\",\"vendor\",\"time\"],\"page\":10,\"pagination\":true}"}>
        <div className="mb-4">
          <div className="d-flex flex-wrap gap-3">
            <div className="search-box">
              <form className="position-relative">
                <input className="form-control search-input search" type="search" placeholder="Search products" aria-label="Search" />
                <span className="fas fa-search search-box-icon">                </span>
              </form>
            </div>
            <div className="scrollbar overflow-hidden-y">
              <div className="btn-group position-static" role="group">
                <div className="btn-group position-static text-nowrap">
                  <button className="btn btn-phoenix-secondary px-7 flex-shrink-0" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
 Category
                    <span className="fas fa-angle-down ms-2">                    </span>
                  </button>
                  <ul className="dropdown-menu">
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
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a href="#" className="dropdown-item">
Separated link
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="btn-group position-static text-nowrap">
                  <button className="btn btn-sm btn-phoenix-secondary px-7 flex-shrink-0" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
 Vendor
                    <span className="fas fa-angle-down ms-2">                    </span>
                  </button>
                  <ul className="dropdown-menu">
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
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a href="#" className="dropdown-item">
Separated link
                      </a>
                    </li>
                  </ul>
                </div>
                <button className="btn btn-sm btn-phoenix-secondary px-7 flex-shrink-0">
More filters
                </button>
              </div>
            </div>
            <div className="ms-xxl-auto">
              <button className="btn btn-link text-body me-4 px-0">
                <span className="fa-solid fa-file-export fs-9 me-2">                </span>
Export
              </button>
              <button className="btn btn-primary" id="addBtn">
                <span className="fas fa-plus me-2">                </span>
Add product
              </button>
            </div>
          </div>
        </div>
        <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
          <div className="table-responsive scrollbar mx-n1 px-1">
            <table className="table fs-9 mb-0">
              <thead>
                <tr>
                  <th className="white-space-nowrap fs-9 align-middle ps-0" style={{"maxWidth":"20px","width":"18px"} as CSSProperties}>
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" id="checkbox-bulk-products-select" type="checkbox" data-bulk-select={"{\"body\":\"products-table-body\"}"} />
                    </div>
                  </th>
                  <th className="sort white-space-nowrap align-middle fs-10" scope="col" style={{"width":"70px"} as CSSProperties}>                  </th>
                  <th className="sort white-space-nowrap align-middle ps-4" scope="col" style={{"width":"350px"} as CSSProperties} data-sort={"product"}>
PRODUCT NAME
                  </th>
                  <th className="sort align-middle text-end ps-4" scope="col" data-sort={"price"} style={{"width":"150px"} as CSSProperties}>
PRICE
                  </th>
                  <th className="sort align-middle ps-4" scope="col" data-sort={"category"} style={{"width":"150px"} as CSSProperties}>
CATEGORY
                  </th>
                  <th className="sort align-middle ps-3" scope="col" data-sort={"tags"} style={{"width":"250px"} as CSSProperties}>
TAGS
                  </th>
                  <th className="sort align-middle fs-8 text-center ps-4" scope="col" style={{"width":"125px"} as CSSProperties}>                  </th>
                  <th className="sort align-middle ps-4" scope="col" data-sort={"vendor"} style={{"width":"200px"} as CSSProperties}>
VENDOR
                  </th>
                  <th className="sort align-middle ps-4" scope="col" data-sort={"time"} style={{"width":"50px"} as CSSProperties}>
PUBLISHED ON
                  </th>
                  <th className="sort text-end align-middle pe-0 ps-4" scope="col">                  </th>
                </tr>
              </thead>
              <tbody className="list" id="products-table-body"><tr className="position-static">
                  <td className="fs-9 align-middle">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends, Carbon/Graphite, One Size (S & L Bands...\",\"productImage\":\"/products/1.png\",\"price\":\"$39\",\"category\":\"Plants\",\"tags\":[\"Health\",\"Exercise\",\"Discipline\",\"Lifestyle\",\"Fitness\"],\"star\":false,\"vendor\":\"Blue Olive Plant sellers. Inc\",\"publishedOn\":\"Nov 12, 10:45 PM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block border border-translucent rounded-2">
                      <PhoenixImage src="/assets/img/products/1.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="product align-middle ps-4">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-3 mb-0">
{"Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends, Carbon/Graphite, One Size (S & ..."}
                    </PhoenixLink>
                  </td>
                  <td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">
$39
                  </td>
                  <td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">
Plants
                  </td>
                  <td className="tags align-middle review pb-2 ps-3" style={{"minWidth":"225px"} as CSSProperties}>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Health
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Exercise
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Discipline
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Lifestyle
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Fitness
                      </span>
                    </a>
                  </td>
                  <td className="align-middle review fs-8 text-center ps-4">
                    <div className="d-toggle-container">
                      <div className="d-block-hover">
                        <span className="fas fa-star text-warning">                        </span>
                      </div>
                      <div className="d-none-hover">
                        <span className="far fa-star text-warning">                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="vendor align-middle text-start fw-semibold ps-4">
                    <a href="#!">
Blue Olive Plant sellers. Inc
                    </a>
                  </td>
                  <td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">
Nov 12, 10:45 PM
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-10">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
View
                        </a>
                        <a href="#!" className="dropdown-item">
Export
                        </a>
                        <div className="dropdown-divider">                        </div>
                        <a href="#!" className="dropdown-item text-danger">
Remove
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="position-static"><td className="fs-9 align-middle">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"iPhone 13 pro max-Pacific Blue-128GB storage\",\"productImage\":\"/products/2.png\",\"price\":\"$87\",\"category\":\"Furniture\",\"tags\":[\"Class\",\"Camera\",\"Discipline\",\"invincible\",\"Pro\",\"Swag\"],\"star\":true,\"vendor\":\"Beatrice Furnitures\",\"publishedOn\":\"Nov 11, 7:36 PM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block border border-translucent rounded-2">
                      <PhoenixImage src="/assets/img/products/2.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="product align-middle ps-4">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-3 mb-0">
iPhone 13 pro max-Pacific Blue-128GB storage
                    </PhoenixLink>
                  </td>
                  <td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">
$87
                  </td>
                  <td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">
Furniture
                  </td>
                  <td className="tags align-middle review pb-2 ps-3" style={{"minWidth":"225px"} as CSSProperties}>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Class
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Camera
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Discipline
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
invincible
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Pro
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Swag
                      </span>
                    </a>
                  </td>
                  <td className="align-middle review fs-8 text-center ps-4">
                    <span className="fas fa-star text-warning">                    </span>
                  </td>
                  <td className="vendor align-middle text-start fw-semibold ps-4">
                    <a href="#!">
Beatrice Furnitures
                    </a>
                  </td>
                  <td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">
Nov 11, 7:36 PM
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-10">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
View
                        </a>
                        <a href="#!" className="dropdown-item">
Export
                        </a>
                        <div className="dropdown-divider">                        </div>
                        <a href="#!" className="dropdown-item text-danger">
Remove
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="position-static"><td className="fs-9 align-middle">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"Apple MacBook Pro 13 inch-M1-8/256GB-space\",\"productImage\":\"/products/3.png\",\"price\":\"$9\",\"category\":\"Plants\",\"tags\":[\"Efficiency\",\"Handy\",\"Apple\",\"Creativity\",\"Gray\"],\"star\":false,\"vendor\":\"PlantPlanet\",\"publishedOn\":\"Nov 11, 8:16 AM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block border border-translucent rounded-2">
                      <PhoenixImage src="/assets/img/products/3.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="product align-middle ps-4">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-3 mb-0">
Apple MacBook Pro 13 inch-M1-8/256GB-space
                    </PhoenixLink>
                  </td>
                  <td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">
$9
                  </td>
                  <td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">
Plants
                  </td>
                  <td className="tags align-middle review pb-2 ps-3" style={{"minWidth":"225px"} as CSSProperties}>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Efficiency
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Handy
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Apple
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Creativity
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Gray
                      </span>
                    </a>
                  </td>
                  <td className="align-middle review fs-8 text-center ps-4">
                    <div className="d-toggle-container">
                      <div className="d-block-hover">
                        <span className="fas fa-star text-warning">                        </span>
                      </div>
                      <div className="d-none-hover">
                        <span className="far fa-star text-warning">                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="vendor align-middle text-start fw-semibold ps-4">
                    <a href="#!">
PlantPlanet
                    </a>
                  </td>
                  <td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">
Nov 11, 8:16 AM
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-10">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
View
                        </a>
                        <a href="#!" className="dropdown-item">
Export
                        </a>
                        <div className="dropdown-divider">                        </div>
                        <a href="#!" className="dropdown-item text-danger">
Remove
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="position-static"><td className="fs-9 align-middle">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"Apple iMac 24\\\" 4K Retina Display M1 8 Core CPU...\",\"productImage\":\"/products/4.png\",\"price\":\"$8 - $58\",\"category\":\"Toys\",\"tags\":[\"Color\",\"Stunning\",\"Retina\",\"Green\",\"PC killer\"],\"star\":false,\"vendor\":\"Kizzstore\",\"publishedOn\":\"Nov 8, 6:39 PM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block border border-translucent rounded-2">
                      <PhoenixImage src="/assets/img/products/4.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="product align-middle ps-4">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-3 mb-0">
Apple iMac 24" 4K Retina Display M1 8 Core CPU...
                    </PhoenixLink>
                  </td>
                  <td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">
$8 - $58
                  </td>
                  <td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">
Toys
                  </td>
                  <td className="tags align-middle review pb-2 ps-3" style={{"minWidth":"225px"} as CSSProperties}>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Color
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Stunning
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Retina
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Green
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
PC killer
                      </span>
                    </a>
                  </td>
                  <td className="align-middle review fs-8 text-center ps-4">
                    <div className="d-toggle-container">
                      <div className="d-block-hover">
                        <span className="fas fa-star text-warning">                        </span>
                      </div>
                      <div className="d-none-hover">
                        <span className="far fa-star text-warning">                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="vendor align-middle text-start fw-semibold ps-4">
                    <a href="#!">
Kizzstore
                    </a>
                  </td>
                  <td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">
Nov 8, 6:39 PM
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-10">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
View
                        </a>
                        <a href="#!" className="dropdown-item">
Export
                        </a>
                        <div className="dropdown-divider">                        </div>
                        <a href="#!" className="dropdown-item text-danger">
Remove
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="position-static"><td className="fs-9 align-middle">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset\",\"productImage\":\"/products/5.png\",\"price\":\"$120\",\"category\":\"Fashion\",\"tags\":[\"Music\",\"Audio\",\"Meeting\",\"Record\",\"Sound\"],\"star\":false,\"vendor\":\"Inertia Fashion\",\"publishedOn\":\"Nov 8, 5:32 PM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block border border-translucent rounded-2">
                      <PhoenixImage src="/assets/img/products/5.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="product align-middle ps-4">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-3 mb-0">
Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset
                    </PhoenixLink>
                  </td>
                  <td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">
$120
                  </td>
                  <td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">
Fashion
                  </td>
                  <td className="tags align-middle review pb-2 ps-3" style={{"minWidth":"225px"} as CSSProperties}>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Music
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Audio
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Meeting
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Record
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Sound
                      </span>
                    </a>
                  </td>
                  <td className="align-middle review fs-8 text-center ps-4">
                    <div className="d-toggle-container">
                      <div className="d-block-hover">
                        <span className="fas fa-star text-warning">                        </span>
                      </div>
                      <div className="d-none-hover">
                        <span className="far fa-star text-warning">                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="vendor align-middle text-start fw-semibold ps-4">
                    <a href="#!">
Inertia Fashion
                    </a>
                  </td>
                  <td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">
Nov 8, 5:32 PM
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-10">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
View
                        </a>
                        <a href="#!" className="dropdown-item">
Export
                        </a>
                        <div className="dropdown-divider">                        </div>
                        <a href="#!" className="dropdown-item text-danger">
Remove
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="position-static"><td className="fs-9 align-middle">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"PlayStation 5 DualSense Wireless Controller\",\"productImage\":\"/products/6.png\",\"price\":\"$239\",\"category\":\"Gadgets\",\"tags\":[\"Game\",\"Control\",\"Nav\",\"Playstation\",\"Wireless\"],\"star\":false,\"vendor\":\"FutureTech Inc\",\"publishedOn\":\"Nov 6, 11:34 PM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block border border-translucent rounded-2">
                      <PhoenixImage src="/assets/img/products/6.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="product align-middle ps-4">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-3 mb-0">
PlayStation 5 DualSense Wireless Controller
                    </PhoenixLink>
                  </td>
                  <td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">
$239
                  </td>
                  <td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">
Gadgets
                  </td>
                  <td className="tags align-middle review pb-2 ps-3" style={{"minWidth":"225px"} as CSSProperties}>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Game
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Control
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Nav
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Playstation
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Wireless
                      </span>
                    </a>
                  </td>
                  <td className="align-middle review fs-8 text-center ps-4">
                    <div className="d-toggle-container">
                      <div className="d-block-hover">
                        <span className="fas fa-star text-warning">                        </span>
                      </div>
                      <div className="d-none-hover">
                        <span className="far fa-star text-warning">                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="vendor align-middle text-start fw-semibold ps-4">
                    <a href="#!">
FutureTech Inc
                    </a>
                  </td>
                  <td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">
Nov 6, 11:34 PM
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-10">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
View
                        </a>
                        <a href="#!" className="dropdown-item">
Export
                        </a>
                        <div className="dropdown-divider">                        </div>
                        <a href="#!" className="dropdown-item text-danger">
Remove
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="position-static"><td className="fs-9 align-middle">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray\",\"productImage\":\"/products/7.png\",\"price\":\"$4\",\"category\":\"Food\",\"tags\":[\"Ipad\",\"Pro\",\"Creativity\",\"Thunderbolt\",\"Space\"],\"star\":false,\"vendor\":\"Maimuna’s Bakery\",\"publishedOn\":\"Nov 1, 7:45 AM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block border border-translucent rounded-2">
                      <PhoenixImage src="/assets/img/products/7.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="product align-middle ps-4">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-3 mb-0">
2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray
                    </PhoenixLink>
                  </td>
                  <td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">
$4
                  </td>
                  <td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">
Food
                  </td>
                  <td className="tags align-middle review pb-2 ps-3" style={{"minWidth":"225px"} as CSSProperties}>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Ipad
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Pro
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Creativity
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Thunderbolt
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Space
                      </span>
                    </a>
                  </td>
                  <td className="align-middle review fs-8 text-center ps-4">
                    <div className="d-toggle-container">
                      <div className="d-block-hover">
                        <span className="fas fa-star text-warning">                        </span>
                      </div>
                      <div className="d-none-hover">
                        <span className="far fa-star text-warning">                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="vendor align-middle text-start fw-semibold ps-4">
                    <a href="#!">
Maimuna’s Bakery
                    </a>
                  </td>
                  <td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">
Nov 1, 7:45 AM
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-10">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
View
                        </a>
                        <a href="#!" className="dropdown-item">
Export
                        </a>
                        <div className="dropdown-divider">                        </div>
                        <a href="#!" className="dropdown-item text-danger">
Remove
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="position-static"><td className="fs-9 align-middle">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"Amazon Basics Matte Black Wired Keyboard - US Layout (QWERTY)\",\"productImage\":\"/products/8.png\",\"price\":\"$98\",\"category\":\"Fashion\",\"tags\":[\"Keyboard\",\"Smooth\",\"Butter\",\"RGB\",\"Black\"],\"star\":false,\"vendor\":\"Green fashion\",\"publishedOn\":\"Nov 3, 12:27 PM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block border border-translucent rounded-2">
                      <PhoenixImage src="/assets/img/products/8.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="product align-middle ps-4">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-3 mb-0">
Amazon Basics Matte Black Wired Keyboard - US Layout (QWERTY)
                    </PhoenixLink>
                  </td>
                  <td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">
$98
                  </td>
                  <td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">
Fashion
                  </td>
                  <td className="tags align-middle review pb-2 ps-3" style={{"minWidth":"225px"} as CSSProperties}>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Keyboard
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Smooth
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Butter
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
RGB
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Black
                      </span>
                    </a>
                  </td>
                  <td className="align-middle review fs-8 text-center ps-4">
                    <div className="d-toggle-container">
                      <div className="d-block-hover">
                        <span className="fas fa-star text-warning">                        </span>
                      </div>
                      <div className="d-none-hover">
                        <span className="far fa-star text-warning">                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="vendor align-middle text-start fw-semibold ps-4">
                    <a href="#!">
Green fashion
                    </a>
                  </td>
                  <td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">
Nov 3, 12:27 PM
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-10">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
View
                        </a>
                        <a href="#!" className="dropdown-item">
Export
                        </a>
                        <div className="dropdown-divider">                        </div>
                        <a href="#!" className="dropdown-item text-danger">
Remove
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="position-static"><td className="fs-9 align-middle">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"Apple Magic Mouse (Wireless, Rechargable) - Silver\",\"productImage\":\"/products/10.png\",\"price\":\"$568\",\"category\":\"Fashion\",\"tags\":[\"Apple\",\"Wireless\",\"Battery\",\"Magic\",\"Performance\"],\"star\":false,\"vendor\":\"Eastacy\",\"publishedOn\":\"Nov 1, 9:39 AM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block border border-translucent rounded-2">
                      <PhoenixImage src="/assets/img/products/10.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="product align-middle ps-4">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-3 mb-0">
Apple Magic Mouse (Wireless, Rechargable) - Silver
                    </PhoenixLink>
                  </td>
                  <td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">
$568
                  </td>
                  <td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">
Fashion
                  </td>
                  <td className="tags align-middle review pb-2 ps-3" style={{"minWidth":"225px"} as CSSProperties}>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Apple
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Wireless
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Battery
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Magic
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Performance
                      </span>
                    </a>
                  </td>
                  <td className="align-middle review fs-8 text-center ps-4">
                    <div className="d-toggle-container">
                      <div className="d-block-hover">
                        <span className="fas fa-star text-warning">                        </span>
                      </div>
                      <div className="d-none-hover">
                        <span className="far fa-star text-warning">                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="vendor align-middle text-start fw-semibold ps-4">
                    <a href="#!">
Eastacy
                    </a>
                  </td>
                  <td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">
Nov 1, 9:39 AM
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-10">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
View
                        </a>
                        <a href="#!" className="dropdown-item">
Export
                        </a>
                        <div className="dropdown-divider">                        </div>
                        <a href="#!" className="dropdown-item text-danger">
Remove
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="position-static"><td className="fs-9 align-middle">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"HORI Racing Wheel Apex for PlayStation 4_3, and PC\",\"productImage\":\"/products/12.png\",\"price\":\"$17\",\"category\":\"Drinks\",\"tags\":[\"Steering\",\"Gaming\",\"PS4/3\",\"Racing\",\"Apex\"],\"star\":false,\"vendor\":\"BrewerBro\",\"publishedOn\":\"Oct 30, 3:49 PM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block border border-translucent rounded-2">
                      <PhoenixImage src="/assets/img/products/12.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="product align-middle ps-4">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-3 mb-0">
HORI Racing Wheel Apex for PlayStation 4_3, and PC
                    </PhoenixLink>
                  </td>
                  <td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">
$17
                  </td>
                  <td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">
Drinks
                  </td>
                  <td className="tags align-middle review pb-2 ps-3" style={{"minWidth":"225px"} as CSSProperties}>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Steering
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Gaming
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
PS4/3
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Racing
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Apex
                      </span>
                    </a>
                  </td>
                  <td className="align-middle review fs-8 text-center ps-4">
                    <div className="d-toggle-container">
                      <div className="d-block-hover">
                        <span className="fas fa-star text-warning">                        </span>
                      </div>
                      <div className="d-none-hover">
                        <span className="far fa-star text-warning">                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="vendor align-middle text-start fw-semibold ps-4">
                    <a href="#!">
BrewerBro
                    </a>
                  </td>
                  <td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">
Oct 30, 3:49 PM
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-10">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
View
                        </a>
                        <a href="#!" className="dropdown-item">
Export
                        </a>
                        <div className="dropdown-divider">                        </div>
                        <a href="#!" className="dropdown-item text-danger">
Remove
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="position-static"><td className="fs-9 align-middle">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"Apple Pencil (2nd Generation)\",\"productImage\":\"/products/21.png\",\"price\":\"$28\",\"category\":\"Fashion\",\"tags\":[\"Apple\",\"Creativity\",\"Color\",\"Stunning\",\"Apex\"],\"star\":false,\"vendor\":\"Eastacy\",\"publishedOn\":\"Nov 25, 5:00 PM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block border border-translucent rounded-2">
                      <PhoenixImage src="/assets/img/products/21.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="product align-middle ps-4">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-3 mb-0">
Apple Pencil (2nd Generation)
                    </PhoenixLink>
                  </td>
                  <td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">
$28
                  </td>
                  <td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">
Fashion
                  </td>
                  <td className="tags align-middle review pb-2 ps-3" style={{"minWidth":"225px"} as CSSProperties}>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Apple
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Creativity
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Color
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Stunning
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Apex
                      </span>
                    </a>
                  </td>
                  <td className="align-middle review fs-8 text-center ps-4">
                    <div className="d-toggle-container">
                      <div className="d-block-hover">
                        <span className="fas fa-star text-warning">                        </span>
                      </div>
                      <div className="d-none-hover">
                        <span className="far fa-star text-warning">                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="vendor align-middle text-start fw-semibold ps-4">
                    <a href="#!">
Eastacy
                    </a>
                  </td>
                  <td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">
Nov 25, 5:00 PM
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-10">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
View
                        </a>
                        <a href="#!" className="dropdown-item">
Export
                        </a>
                        <div className="dropdown-divider">                        </div>
                        <a href="#!" className="dropdown-item text-danger">
Remove
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="position-static"><td className="fs-9 align-middle">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"Apple AirPods (2nd Generation)\",\"productImage\":\"/products/16.png\",\"price\":\"$20\",\"category\":\"Fashion\",\"tags\":[\"Music\",\"Audio\",\"Meeting\",\"Record\",\"Sound\"],\"star\":true,\"vendor\":\"FutureTech Inc\",\"publishedOn\":\"Sep 20, 1:00 PM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block border border-translucent rounded-2">
                      <PhoenixImage src="/assets/img/products/16.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="product align-middle ps-4">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-3 mb-0">
Apple AirPods (2nd Generation)
                    </PhoenixLink>
                  </td>
                  <td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">
$20
                  </td>
                  <td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">
Fashion
                  </td>
                  <td className="tags align-middle review pb-2 ps-3" style={{"minWidth":"225px"} as CSSProperties}>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Music
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Audio
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Meeting
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Record
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Sound
                      </span>
                    </a>
                  </td>
                  <td className="align-middle review fs-8 text-center ps-4">
                    <span className="fas fa-star text-warning">                    </span>
                  </td>
                  <td className="vendor align-middle text-start fw-semibold ps-4">
                    <a href="#!">
FutureTech Inc
                    </a>
                  </td>
                  <td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">
Sep 20, 1:00 PM
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-10">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
View
                        </a>
                        <a href="#!" className="dropdown-item">
Export
                        </a>
                        <div className="dropdown-divider">                        </div>
                        <a href="#!" className="dropdown-item text-danger">
Remove
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="position-static"><td className="fs-9 align-middle">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"Xbox Series S\",\"productImage\":\"/products/17.png\",\"price\":\"$30\",\"category\":\"Gadget\",\"tags\":[\"Lifestyle\",\"Audio\",\"Magic\",\"Performance\",\"Apex\"],\"star\":false,\"vendor\":\"FutureTech Inc\",\"publishedOn\":\"Oct 18, 3:40 PM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block border border-translucent rounded-2">
                      <PhoenixImage src="/assets/img/products/17.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="product align-middle ps-4">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-3 mb-0">
Xbox Series S
                    </PhoenixLink>
                  </td>
                  <td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">
$30
                  </td>
                  <td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">
Gadget
                  </td>
                  <td className="tags align-middle review pb-2 ps-3" style={{"minWidth":"225px"} as CSSProperties}>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Lifestyle
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Audio
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Magic
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Performance
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Apex
                      </span>
                    </a>
                  </td>
                  <td className="align-middle review fs-8 text-center ps-4">
                    <div className="d-toggle-container">
                      <div className="d-block-hover">
                        <span className="fas fa-star text-warning">                        </span>
                      </div>
                      <div className="d-none-hover">
                        <span className="far fa-star text-warning">                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="vendor align-middle text-start fw-semibold ps-4">
                    <a href="#!">
FutureTech Inc
                    </a>
                  </td>
                  <td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">
Oct 18, 3:40 PM
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-10">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
View
                        </a>
                        <a href="#!" className="dropdown-item">
Export
                        </a>
                        <div className="dropdown-divider">                        </div>
                        <a href="#!" className="dropdown-item text-danger">
Remove
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="position-static"><td className="fs-9 align-middle">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"Seagate Portable 2TB External Hard Drive Portable HDD\",\"productImage\":\"/products/18.png\",\"price\":\"$50\",\"category\":\"Accessories\",\"tags\":[\"Portable\",\"Gaming\",\"Magic\",\"Performance\",\"Black\"],\"star\":false,\"vendor\":\"Kizzstore\",\"publishedOn\":\"Sep 20, 1:00 PM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block border border-translucent rounded-2">
                      <PhoenixImage src="/assets/img/products/18.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="product align-middle ps-4">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-3 mb-0">
Seagate Portable 2TB External Hard Drive Portable HDD
                    </PhoenixLink>
                  </td>
                  <td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">
$50
                  </td>
                  <td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">
Accessories
                  </td>
                  <td className="tags align-middle review pb-2 ps-3" style={{"minWidth":"225px"} as CSSProperties}>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Portable
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Gaming
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Magic
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Performance
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Black
                      </span>
                    </a>
                  </td>
                  <td className="align-middle review fs-8 text-center ps-4">
                    <div className="d-toggle-container">
                      <div className="d-block-hover">
                        <span className="fas fa-star text-warning">                        </span>
                      </div>
                      <div className="d-none-hover">
                        <span className="far fa-star text-warning">                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="vendor align-middle text-start fw-semibold ps-4">
                    <a href="#!">
Kizzstore
                    </a>
                  </td>
                  <td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">
Sep 20, 1:00 PM
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-10">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
View
                        </a>
                        <a href="#!" className="dropdown-item">
Export
                        </a>
                        <div className="dropdown-divider">                        </div>
                        <a href="#!" className="dropdown-item text-danger">
Remove
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="position-static"><td className="fs-9 align-middle">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"Intel Core i9-11900K Desktop Processor 8 Cores up to 5.3 GHz Unlocked\",\"productImage\":\"/products/19.png\",\"price\":\"$80\",\"category\":\"Accessories\",\"tags\":[\"Intel\",\"Gaming\",\"Apex\",\"Performance\",\"Lifestyle\"],\"star\":true,\"vendor\":\"BrewerBro\",\"publishedOn\":\"Dec 01, 12:00 PM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block border border-translucent rounded-2">
                      <PhoenixImage src="/assets/img/products/19.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="product align-middle ps-4">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-3 mb-0">
Intel Core i9-11900K Desktop Processor 8 Cores up to 5.3 GHz Unlocked
                    </PhoenixLink>
                  </td>
                  <td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">
$80
                  </td>
                  <td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">
Accessories
                  </td>
                  <td className="tags align-middle review pb-2 ps-3" style={{"minWidth":"225px"} as CSSProperties}>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Intel
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Gaming
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Apex
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Performance
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Lifestyle
                      </span>
                    </a>
                  </td>
                  <td className="align-middle review fs-8 text-center ps-4">
                    <span className="fas fa-star text-warning">                    </span>
                  </td>
                  <td className="vendor align-middle text-start fw-semibold ps-4">
                    <a href="#!">
BrewerBro
                    </a>
                  </td>
                  <td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">
Dec 01, 12:00 PM
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-10">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
View
                        </a>
                        <a href="#!" className="dropdown-item">
Export
                        </a>
                        <div className="dropdown-divider">                        </div>
                        <a href="#!" className="dropdown-item text-danger">
Remove
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="position-static"><td className="fs-9 align-middle">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"product\":\"ASUS TUF Gaming F15 Gaming Laptop\",\"productImage\":\"/products/20.png\",\"price\":\"$150\",\"category\":\"Computer\",\"tags\":[\"Gaming\",\"Battery\",\"Performance\",\"Wireless\"],\"star\":false,\"vendor\":\"Kizzstore\",\"publishedOn\":\"Dec 01, 12:00 PM\"}"} />
                    </div>
                  </td>
                  <td className="align-middle white-space-nowrap py-0">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="d-block border border-translucent rounded-2">
                      <PhoenixImage src="/assets/img/products/20.png" alt="" width={53} />
                    </PhoenixLink>
                  </td>
                  <td className="product align-middle ps-4">
                    <PhoenixLink href="/apps/e-commerce/landing/product-details" className="fw-semibold line-clamp-3 mb-0">
ASUS TUF Gaming F15 Gaming Laptop
                    </PhoenixLink>
                  </td>
                  <td className="price align-middle white-space-nowrap text-end fw-bold text-body-tertiary ps-4">
$150
                  </td>
                  <td className="category align-middle white-space-nowrap text-body-quaternary fs-9 ps-4 fw-semibold">
Computer
                  </td>
                  <td className="tags align-middle review pb-2 ps-3" style={{"minWidth":"225px"} as CSSProperties}>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Gaming
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Battery
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Performance
                      </span>
                    </a>
                    <a href="#!" className="text-decoration-none">
                      <span className="badge badge-tag me-2 mb-2">
Wireless
                      </span>
                    </a>
                  </td>
                  <td className="align-middle review fs-8 text-center ps-4">
                    <div className="d-toggle-container">
                      <div className="d-block-hover">
                        <span className="fas fa-star text-warning">                        </span>
                      </div>
                      <div className="d-none-hover">
                        <span className="far fa-star text-warning">                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="vendor align-middle text-start fw-semibold ps-4">
                    <a href="#!">
Kizzstore
                    </a>
                  </td>
                  <td className="time align-middle white-space-nowrap text-body-tertiary text-opacity-85 ps-4">
Dec 01, 12:00 PM
                  </td>
                  <td className="align-middle white-space-nowrap text-end pe-0 ps-4 btn-reveal-trigger">
                    <div className="btn-reveal-trigger position-static">
                      <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                        <span className="fas fa-ellipsis-h fs-10">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end py-2">
                        <a href="#!" className="dropdown-item">
View
                        </a>
                        <a href="#!" className="dropdown-item">
Export
                        </a>
                        <div className="dropdown-divider">                        </div>
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
          <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
            <div className="col-auto d-flex">
              <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info>              </p>
              <a href="#!" className="fw-semibold"  data-list-view={"*"}>
View all                <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                </span>
              </a>
              <a href="#!" className="fw-semibold d-none"  data-list-view={"less"}>
View Less                <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                </span>
              </a>
            </div>
            <div className="col-auto d-flex">
              <button className="page-link" data-list-pagination={"prev"}>
                <span className="fas fa-chevron-left">                </span>
              </button>
              <ul className="mb-0 pagination">              </ul>
              <button className="page-link pe-0" data-list-pagination={"next"}>
                <span className="fas fa-chevron-right">                </span>
              </button>
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
