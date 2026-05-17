'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Customers() {
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
      <div className="row g-2 mb-4">
        <div className="col-auto">
          <h2 className="mb-0">
Customers
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
New 
            </span>            <span className="text-body-tertiary fw-semibold">
(6)
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <span>
Abandoned checkouts 
            </span>            <span className="text-body-tertiary fw-semibold">
(17)
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <span>
Locals 
            </span>            <span className="text-body-tertiary fw-semibold">
(6,810)
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <span>
Email subscribers 
            </span>            <span className="text-body-tertiary fw-semibold">
(8)
            </span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <span>
Top reviews 
            </span>            <span className="text-body-tertiary fw-semibold">
(2)
            </span>
          </a>
        </li>
      </ul>
      <div id="products" data-list={"{\"valueNames\":[\"customer\",\"email\",\"total-orders\",\"total-spent\",\"city\",\"last-seen\",\"last-order\"],\"page\":10,\"pagination\":true}"}>
        <div className="mb-4">
          <div className="row g-3">
            <div className="col-auto">
              <div className="search-box">
                <form className="position-relative">
                  <input className="form-control search-input search" type="search" placeholder="Search customers" aria-label="Search" />
                  <span className="fas fa-search search-box-icon">                  </span>
                </form>
              </div>
            </div>
            <div className="col-auto scrollbar overflow-hidden-y flex-grow-1">
              <div className="btn-group position-static" role="group">
                <div className="btn-group position-static text-nowrap">
                  <button className="btn btn-phoenix-secondary px-7 flex-shrink-0" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
 Country
                    <span className="fas fa-angle-down ms-2">                    </span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#" className="dropdown-item">
US
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dropdown-item">
Uk
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dropdown-item">
Australia
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="btn-group position-static text-nowrap">
                  <button className="btn btn-sm btn-phoenix-secondary px-7 flex-shrink-0" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
 VIP
                    <span className="fas fa-angle-down ms-2">                    </span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#" className="dropdown-item">
VIP 1
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dropdown-item">
VIP 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dropdown-item">
VIP 3
                      </a>
                    </li>
                    <li>                    </li>
                  </ul>
                </div>
                <button className="btn btn-phoenix-secondary px-7 flex-shrink-0">
More filters
                </button>
              </div>
            </div>
            <div className="col-auto">
              <button className="btn btn-link text-body me-4 px-0">
                <span className="fa-solid fa-file-export fs-9 me-2">                </span>
Export
              </button>
              <button className="btn btn-primary">
                <span className="fas fa-plus me-2">                </span>
Add customer
              </button>
            </div>
          </div>
        </div>
        <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
          <div className="table-responsive scrollbar-overlay mx-n1 px-1">
            <table className="table table-sm fs-9 mb-0">
              <thead>
                <tr>
                  <th className="white-space-nowrap fs-9 align-middle ps-0">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" id="checkbox-bulk-customers-select" type="checkbox" data-bulk-select={"{\"body\":\"customers-table-body\"}"} />
                    </div>
                  </th>
                  <th className="sort align-middle pe-5" scope="col" data-sort={"customer"} style={{"width":"10%"} as CSSProperties}>
CUSTOMER
                  </th>
                  <th className="sort align-middle pe-5" scope="col" data-sort={"email"} style={{"width":"20%"} as CSSProperties}>
EMAIL
                  </th>
                  <th className="sort align-middle text-end" scope="col" data-sort={"total-orders"} style={{"width":"10%"} as CSSProperties}>
ORDERS
                  </th>
                  <th className="sort align-middle text-end ps-3" scope="col" data-sort={"total-spent"} style={{"width":"10%"} as CSSProperties}>
TOTAL SPENT
                  </th>
                  <th className="sort align-middle ps-7" scope="col" data-sort={"city"} style={{"width":"25%"} as CSSProperties}>
CITY
                  </th>
                  <th className="sort align-middle text-end" scope="col" data-sort={"last-seen"} style={{"width":"15%"} as CSSProperties}>
LAST SEEN
                  </th>
                  <th className="sort align-middle text-end pe-0" scope="col" data-sort={"last-order"} style={{"width":"10%","minWidth":"150px"} as CSSProperties}>
LAST ORDER
                  </th>
                </tr>
              </thead>
              <tbody className="list" id="customers-table-body"><tr className="hover-actions-trigger btn-reveal-trigger position-static">
                  <td className="fs-9 align-middle ps-0 py-3">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/32.webp\",\"name\":\"Carry Anna\"},\"email\":\"annac34@gmail.com\",\"city\":\"Budapest\",\"totalOrders\":89,\"totalSpent\":23987,\"lastSeen\":\"34 min ago\",\"lastOrder\":\"Dec 12, 12:56 PM\"}"} />
                    </div>
                  </td>
                  <td className="customer align-middle white-space-nowrap pe-5">
                    <PhoenixLink href="/apps/e-commerce/admin/customer-details" className="d-flex align-items-center text-body-emphasis">
                      <div className="avatar avatar-m">
                        <PhoenixImage src="/assets/img/team/32.webp" alt="" className="rounded-circle" />
                      </div>                      <p className="mb-0 ms-3 text-body-emphasis fw-bold">
Carry Anna
                      </p>
                    </PhoenixLink>
                  </td>
                  <td className="email align-middle white-space-nowrap pe-5">
                    <a href="mailto:annac34@gmail.com" className="fw-semibold">
annac34@gmail.com
                    </a>
                  </td>
                  <td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">
89
                  </td>
                  <td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">
$ 23987
                  </td>
                  <td className="city align-middle white-space-nowrap text-body-highlight ps-7">
Budapest
                  </td>
                  <td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">
34 min ago
                  </td>
                  <td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">
Dec 12, 12:56 PM
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/avatar.webp\",\"name\":\"Milind Mikuja\",\"placeholder\":true},\"email\":\"mimiku@yahoo.com\",\"city\":\"Manchester\",\"totalOrders\":76,\"totalSpent\":21567,\"lastSeen\":\"6 hours ago\",\"lastOrder\":\"Dec 9, 2:28 PM\"}"} />
                    </div>
                  </td>
                  <td className="customer align-middle white-space-nowrap pe-5">
                    <PhoenixLink href="/apps/e-commerce/admin/customer-details" className="d-flex align-items-center text-body-emphasis">
                      <div className="avatar avatar-m">
                        <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                      </div>                      <p className="mb-0 ms-3 text-body-emphasis fw-bold">
Milind Mikuja
                      </p>
                    </PhoenixLink>
                  </td>
                  <td className="email align-middle white-space-nowrap pe-5">
                    <a href="mailto:mimiku@yahoo.com" className="fw-semibold">
mimiku@yahoo.com
                    </a>
                  </td>
                  <td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">
76
                  </td>
                  <td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">
$ 21567
                  </td>
                  <td className="city align-middle white-space-nowrap text-body-highlight ps-7">
Manchester
                  </td>
                  <td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">
6 hours ago
                  </td>
                  <td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">
Dec 9, 2:28 PM
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/35.webp\",\"name\":\"Stanly Drinkwater\"},\"email\":\"stnlwasser@hotmail.com\",\"city\":\"Smallville\",\"totalOrders\":69,\"totalSpent\":19872,\"lastSeen\":\"43 min ago\",\"lastOrder\":\"Dec 4, 12:56 PM\"}"} />
                    </div>
                  </td>
                  <td className="customer align-middle white-space-nowrap pe-5">
                    <PhoenixLink href="/apps/e-commerce/admin/customer-details" className="d-flex align-items-center text-body-emphasis">
                      <div className="avatar avatar-m">
                        <PhoenixImage src="/assets/img/team/35.webp" alt="" className="rounded-circle" />
                      </div>                      <p className="mb-0 ms-3 text-body-emphasis fw-bold">
Stanly Drinkwater
                      </p>
                    </PhoenixLink>
                  </td>
                  <td className="email align-middle white-space-nowrap pe-5">
                    <a href="mailto:stnlwasser@hotmail.com" className="fw-semibold">
stnlwasser@hotmail.com
                    </a>
                  </td>
                  <td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">
69
                  </td>
                  <td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">
$ 19872
                  </td>
                  <td className="city align-middle white-space-nowrap text-body-highlight ps-7">
Smallville
                  </td>
                  <td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">
43 min ago
                  </td>
                  <td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">
Dec 4, 12:56 PM
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/57.webp\",\"name\":\"Josef Stravinsky\"},\"email\":\"Josefsky@sni.it\",\"city\":\"Metropolis\",\"totalOrders\":67,\"totalSpent\":17996,\"lastSeen\":\"2 hours ago\",\"lastOrder\":\"Dec 1,  4:07 AM\"}"} />
                    </div>
                  </td>
                  <td className="customer align-middle white-space-nowrap pe-5">
                    <PhoenixLink href="/apps/e-commerce/admin/customer-details" className="d-flex align-items-center text-body-emphasis">
                      <div className="avatar avatar-m">
                        <PhoenixImage src="/assets/img/team/57.webp" alt="" className="rounded-circle" />
                      </div>                      <p className="mb-0 ms-3 text-body-emphasis fw-bold">
Josef Stravinsky
                      </p>
                    </PhoenixLink>
                  </td>
                  <td className="email align-middle white-space-nowrap pe-5">
                    <a href="mailto:Josefsky@sni.it" className="fw-semibold">
Josefsky@sni.it
                    </a>
                  </td>
                  <td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">
67
                  </td>
                  <td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">
$ 17996
                  </td>
                  <td className="city align-middle white-space-nowrap text-body-highlight ps-7">
Metropolis
                  </td>
                  <td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">
2 hours ago
                  </td>
                  <td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">
Dec 1, 4:07 AM
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/58.webp\",\"name\":\"Igor Borvibson\"},\"email\":\"vibigorr@technext.it\",\"city\":\"Central city\",\"totalOrders\":61,\"totalSpent\":16785,\"lastSeen\":\"5 days ago\",\"lastOrder\":\"Nov 28, 7:28 PM\"}"} />
                    </div>
                  </td>
                  <td className="customer align-middle white-space-nowrap pe-5">
                    <PhoenixLink href="/apps/e-commerce/admin/customer-details" className="d-flex align-items-center text-body-emphasis">
                      <div className="avatar avatar-m">
                        <PhoenixImage src="/assets/img/team/58.webp" alt="" className="rounded-circle" />
                      </div>                      <p className="mb-0 ms-3 text-body-emphasis fw-bold">
Igor Borvibson
                      </p>
                    </PhoenixLink>
                  </td>
                  <td className="email align-middle white-space-nowrap pe-5">
                    <a href="mailto:vibigorr@technext.it" className="fw-semibold">
vibigorr@technext.it
                    </a>
                  </td>
                  <td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">
61
                  </td>
                  <td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">
$ 16785
                  </td>
                  <td className="city align-middle white-space-nowrap text-body-highlight ps-7">
Central city
                  </td>
                  <td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">
5 days ago
                  </td>
                  <td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">
Nov 28, 7:28 PM
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/59.webp\",\"name\":\"Katerina Karenin\"},\"email\":\"karkat99@gmail.com\",\"city\":\"Gotham\",\"totalOrders\":58,\"totalSpent\":14956,\"lastSeen\":\"2 weeks ago\",\"lastOrder\":\"Nov 24, 10:16 AM\"}"} />
                    </div>
                  </td>
                  <td className="customer align-middle white-space-nowrap pe-5">
                    <PhoenixLink href="/apps/e-commerce/admin/customer-details" className="d-flex align-items-center text-body-emphasis">
                      <div className="avatar avatar-m">
                        <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle" />
                      </div>                      <p className="mb-0 ms-3 text-body-emphasis fw-bold">
Katerina Karenin
                      </p>
                    </PhoenixLink>
                  </td>
                  <td className="email align-middle white-space-nowrap pe-5">
                    <a href="mailto:karkat99@gmail.com" className="fw-semibold">
karkat99@gmail.com
                    </a>
                  </td>
                  <td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">
58
                  </td>
                  <td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">
$ 14956
                  </td>
                  <td className="city align-middle white-space-nowrap text-body-highlight ps-7">
Gotham
                  </td>
                  <td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">
2 weeks ago
                  </td>
                  <td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">
Nov 24, 10:16 AM
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"\",\"name\":\"Roy Anderson\"},\"email\":\"andersonroy@netflix.chill\",\"city\":\"Vancouver\",\"totalOrders\":52,\"totalSpent\":12509,\"lastSeen\":\"4 days ago\",\"lastOrder\":\"Nov 18, 5:43 PM\"}"} />
                    </div>
                  </td>
                  <td className="customer align-middle white-space-nowrap pe-5">
                    <PhoenixLink href="/apps/e-commerce/admin/customer-details" className="d-flex align-items-center text-body-emphasis">
                      <div className="avatar avatar-m">
                        <div className="avatar-name rounded-circle">
                          <span>
R
                          </span>
                        </div>
                      </div>                      <p className="mb-0 ms-3 text-body-emphasis fw-bold">
Roy Anderson
                      </p>
                    </PhoenixLink>
                  </td>
                  <td className="email align-middle white-space-nowrap pe-5">
                    <a href="mailto:andersonroy@netflix.chill" className="fw-semibold">
andersonroy@netflix.chill
                    </a>
                  </td>
                  <td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">
52
                  </td>
                  <td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">
$ 12509
                  </td>
                  <td className="city align-middle white-space-nowrap text-body-highlight ps-7">
Vancouver
                  </td>
                  <td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">
4 days ago
                  </td>
                  <td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">
Nov 18, 5:43 PM
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/31.webp\",\"name\":\"Martina scorcese\"},\"email\":\"cesetina1@gmail.com\",\"city\":\"Viena\",\"totalOrders\":49,\"totalSpent\":11003,\"lastSeen\":\"6 min ago\",\"lastOrder\":\"Nov 18, 2:09 AM\"}"} />
                    </div>
                  </td>
                  <td className="customer align-middle white-space-nowrap pe-5">
                    <PhoenixLink href="/apps/e-commerce/admin/customer-details" className="d-flex align-items-center text-body-emphasis">
                      <div className="avatar avatar-m">
                        <PhoenixImage src="/assets/img/team/31.webp" alt="" className="rounded-circle" />
                      </div>                      <p className="mb-0 ms-3 text-body-emphasis fw-bold">
Martina scorcese
                      </p>
                    </PhoenixLink>
                  </td>
                  <td className="email align-middle white-space-nowrap pe-5">
                    <a href="mailto:cesetina1@gmail.com" className="fw-semibold">
cesetina1@gmail.com
                    </a>
                  </td>
                  <td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">
49
                  </td>
                  <td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">
$ 11003
                  </td>
                  <td className="city align-middle white-space-nowrap text-body-highlight ps-7">
Viena
                  </td>
                  <td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">
6 min ago
                  </td>
                  <td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">
Nov 18, 2:09 AM
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/33.webp\",\"name\":\"Luis Bunuel\"},\"email\":\"luisuel@live.com\",\"city\":\"Bangalore\",\"totalOrders\":44,\"totalSpent\":7897,\"lastSeen\":\"56 min ago\",\"lastOrder\":\"Nov 16, 3:22 PM\"}"} />
                    </div>
                  </td>
                  <td className="customer align-middle white-space-nowrap pe-5">
                    <PhoenixLink href="/apps/e-commerce/admin/customer-details" className="d-flex align-items-center text-body-emphasis">
                      <div className="avatar avatar-m">
                        <PhoenixImage src="/assets/img/team/33.webp" alt="" className="rounded-circle" />
                      </div>                      <p className="mb-0 ms-3 text-body-emphasis fw-bold">
Luis Bunuel
                      </p>
                    </PhoenixLink>
                  </td>
                  <td className="email align-middle white-space-nowrap pe-5">
                    <a href="mailto:luisuel@live.com" className="fw-semibold">
luisuel@live.com
                    </a>
                  </td>
                  <td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">
44
                  </td>
                  <td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">
$ 7897
                  </td>
                  <td className="city align-middle white-space-nowrap text-body-highlight ps-7">
Bangalore
                  </td>
                  <td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">
56 min ago
                  </td>
                  <td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">
Nov 16, 3:22 PM
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/34.webp\",\"name\":\"Jean Renoir\"},\"email\":\"renoirjean1836@gmail.com\",\"city\":\"Chittagong\",\"totalOrders\":37,\"totalSpent\":7781,\"lastSeen\":\"Yesterday\",\"lastOrder\":\"Nov 09, 8:49 AM\"}"} />
                    </div>
                  </td>
                  <td className="customer align-middle white-space-nowrap pe-5">
                    <PhoenixLink href="/apps/e-commerce/admin/customer-details" className="d-flex align-items-center text-body-emphasis">
                      <div className="avatar avatar-m">
                        <PhoenixImage src="/assets/img/team/34.webp" alt="" className="rounded-circle" />
                      </div>                      <p className="mb-0 ms-3 text-body-emphasis fw-bold">
Jean Renoir
                      </p>
                    </PhoenixLink>
                  </td>
                  <td className="email align-middle white-space-nowrap pe-5">
                    <a href="mailto:renoirjean1836@gmail.com" className="fw-semibold">
renoirjean1836@gmail.com
                    </a>
                  </td>
                  <td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">
37
                  </td>
                  <td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">
$ 7781
                  </td>
                  <td className="city align-middle white-space-nowrap text-body-highlight ps-7">
Chittagong
                  </td>
                  <td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">
Yesterday
                  </td>
                  <td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">
Nov 09, 8:49 AM
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/29.webp\",\"name\":\"Ricky Antony\"},\"email\":\"ricky@example.com\",\"city\":\"New Jersey\",\"totalOrders\":33,\"totalSpent\":7825,\"lastSeen\":\"1 hour ago\",\"lastOrder\":\"Oct 19, 8:00 AM\"}"} />
                    </div>
                  </td>
                  <td className="customer align-middle white-space-nowrap pe-5">
                    <PhoenixLink href="/apps/e-commerce/admin/customer-details" className="d-flex align-items-center text-body-emphasis">
                      <div className="avatar avatar-m">
                        <PhoenixImage src="/assets/img/team/29.webp" alt="" className="rounded-circle" />
                      </div>                      <p className="mb-0 ms-3 text-body-emphasis fw-bold">
Ricky Antony
                      </p>
                    </PhoenixLink>
                  </td>
                  <td className="email align-middle white-space-nowrap pe-5">
                    <a href="mailto:ricky@example.com" className="fw-semibold">
ricky@example.com
                    </a>
                  </td>
                  <td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">
33
                  </td>
                  <td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">
$ 7825
                  </td>
                  <td className="city align-middle white-space-nowrap text-body-highlight ps-7">
New Jersey
                  </td>
                  <td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">
1 hour ago
                  </td>
                  <td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">
Oct 19, 8:00 AM
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/3.webp\",\"name\":\"Emma Watson\"},\"email\":\"emma@example.com\",\"city\":\"New York\",\"totalOrders\":45,\"totalSpent\":18975,\"lastSeen\":\"6 hours ago\",\"lastOrder\":\"Oct 15, 12:00 PM\"}"} />
                    </div>
                  </td>
                  <td className="customer align-middle white-space-nowrap pe-5">
                    <PhoenixLink href="/apps/e-commerce/admin/customer-details" className="d-flex align-items-center text-body-emphasis">
                      <div className="avatar avatar-m">
                        <PhoenixImage src="/assets/img/team/3.webp" alt="" className="rounded-circle" />
                      </div>                      <p className="mb-0 ms-3 text-body-emphasis fw-bold">
Emma Watson
                      </p>
                    </PhoenixLink>
                  </td>
                  <td className="email align-middle white-space-nowrap pe-5">
                    <a href="mailto:emma@example.com" className="fw-semibold">
emma@example.com
                    </a>
                  </td>
                  <td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">
45
                  </td>
                  <td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">
$ 18975
                  </td>
                  <td className="city align-middle white-space-nowrap text-body-highlight ps-7">
New York
                  </td>
                  <td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">
6 hours ago
                  </td>
                  <td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">
Oct 15, 12:00 PM
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/avatar.webp\",\"name\":\"Jennifer Schramm\",\"placeholder\":true},\"email\":\"jennifer@example.com\",\"city\":\"Charlotte\",\"totalOrders\":39,\"totalSpent\":8967,\"lastSeen\":\"12 hours ago\",\"lastOrder\":\"Oct 12, 11:00 AM\"}"} />
                    </div>
                  </td>
                  <td className="customer align-middle white-space-nowrap pe-5">
                    <PhoenixLink href="/apps/e-commerce/admin/customer-details" className="d-flex align-items-center text-body-emphasis">
                      <div className="avatar avatar-m">
                        <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                      </div>                      <p className="mb-0 ms-3 text-body-emphasis fw-bold">
Jennifer Schramm
                      </p>
                    </PhoenixLink>
                  </td>
                  <td className="email align-middle white-space-nowrap pe-5">
                    <a href="mailto:jennifer@example.com" className="fw-semibold">
jennifer@example.com
                    </a>
                  </td>
                  <td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">
39
                  </td>
                  <td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">
$ 8967
                  </td>
                  <td className="city align-middle white-space-nowrap text-body-highlight ps-7">
Charlotte
                  </td>
                  <td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">
12 hours ago
                  </td>
                  <td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">
Oct 12, 11:00 AM
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/32.webp\",\"name\":\"Raymond Mims\"},\"email\":\"raymond@example.com\",\"city\":\"Artesia\",\"totalOrders\":30,\"totalSpent\":14587,\"lastSeen\":\"2 day ago\",\"lastOrder\":\"Oct 10, 8:30 AM\"}"} />
                    </div>
                  </td>
                  <td className="customer align-middle white-space-nowrap pe-5">
                    <PhoenixLink href="/apps/e-commerce/admin/customer-details" className="d-flex align-items-center text-body-emphasis">
                      <div className="avatar avatar-m">
                        <PhoenixImage src="/assets/img/team/32.webp" alt="" className="rounded-circle" />
                      </div>                      <p className="mb-0 ms-3 text-body-emphasis fw-bold">
Raymond Mims
                      </p>
                    </PhoenixLink>
                  </td>
                  <td className="email align-middle white-space-nowrap pe-5">
                    <a href="mailto:raymond@example.com" className="fw-semibold">
raymond@example.com
                    </a>
                  </td>
                  <td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">
30
                  </td>
                  <td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">
$ 14587
                  </td>
                  <td className="city align-middle white-space-nowrap text-body-highlight ps-7">
Artesia
                  </td>
                  <td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">
2 day ago
                  </td>
                  <td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">
Oct 10, 8:30 AM
                  </td>
                </tr>
                <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                    <div className="form-check mb-0 fs-8">
                      <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/25.webp\",\"name\":\"Michael Jenkins\"},\"email\":\"jenkins@example.com\",\"city\":\"Philadelphia\",\"totalOrders\":43,\"totalSpent\":45697,\"lastSeen\":\"12 hours ago\",\"lastOrder\":\"Oct 3, 8:30 AM\"}"} />
                    </div>
                  </td>
                  <td className="customer align-middle white-space-nowrap pe-5">
                    <PhoenixLink href="/apps/e-commerce/admin/customer-details" className="d-flex align-items-center text-body-emphasis">
                      <div className="avatar avatar-m">
                        <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle" />
                      </div>                      <p className="mb-0 ms-3 text-body-emphasis fw-bold">
Michael Jenkins
                      </p>
                    </PhoenixLink>
                  </td>
                  <td className="email align-middle white-space-nowrap pe-5">
                    <a href="mailto:jenkins@example.com" className="fw-semibold">
jenkins@example.com
                    </a>
                  </td>
                  <td className="total-orders align-middle white-space-nowrap fw-semibold text-end text-body-highlight">
43
                  </td>
                  <td className="total-spent align-middle white-space-nowrap fw-bold text-end ps-3 text-body-emphasis">
$ 45697
                  </td>
                  <td className="city align-middle white-space-nowrap text-body-highlight ps-7">
Philadelphia
                  </td>
                  <td className="last-seen align-middle white-space-nowrap text-body-tertiary text-end">
12 hours ago
                  </td>
                  <td className="last-order align-middle white-space-nowrap text-body-tertiary text-end">
Oct 3, 8:30 AM
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
