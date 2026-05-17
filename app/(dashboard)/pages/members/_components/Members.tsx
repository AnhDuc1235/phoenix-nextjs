'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Members() {
  return (
    <div suppressHydrationWarning>

    <nav className="mb-3" aria-label="breadcrumb">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <a href="#!">
Pages
          </a>
        </li>
        <li className="breadcrumb-item active">
Members
        </li>
      </ol>
    </nav>

    <h2 className="text-bold text-body-emphasis mb-5">
Members
    </h2>

    <div id="members" data-list={"{\"valueNames\":[\"customer\",\"email\",\"mobile_number\",\"city\",\"last_active\",\"joined\"],\"page\":10,\"pagination\":true}"}>
      <div className="row align-items-center justify-content-between g-3 mb-4">
        <div className="col col-auto">
          <div className="search-box">
            <form className="position-relative">
              <input className="form-control search-input search" type="search" placeholder="Search members" aria-label="Search" />
              <span className="fas fa-search search-box-icon">              </span>
            </form>
          </div>
        </div>
        <div className="col-auto">
          <div className="d-flex align-items-center">
            <button className="btn btn-link text-body me-4 px-0">
              <span className="fa-solid fa-file-export fs-9 me-2">              </span>
Export
            </button>
            <button className="btn btn-primary">
              <span className="fas fa-plus me-2">              </span>
Add member
            </button>
          </div>
        </div>
      </div>
      <div className="mx-n4 mx-lg-n6 px-4 px-lg-6 mb-9 bg-body-emphasis border-y mt-2 position-relative top-1">
        <div className="table-responsive scrollbar ms-n1 ps-1">
          <table className="table table-sm fs-9 mb-0">
            <thead>
              <tr>
                <th className="white-space-nowrap fs-9 align-middle ps-0">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" id="checkbox-bulk-members-select" type="checkbox" data-bulk-select={"{\"body\":\"members-table-body\"}"} />
                  </div>
                </th>
                <th className="sort align-middle" scope="col" data-sort={"customer"} style={{"width":"15%","minWidth":"200px"} as CSSProperties}>
CUSTOMER
                </th>
                <th className="sort align-middle" scope="col" data-sort={"email"} style={{"width":"15%","minWidth":"200px"} as CSSProperties}>
EMAIL
                </th>
                <th className="sort align-middle pe-3" scope="col" data-sort={"mobile_number"} style={{"width":"20%","minWidth":"200px"} as CSSProperties}>
MOBILE NUMBER
                </th>
                <th className="sort align-middle" scope="col" data-sort={"city"} style={{"width":"10%"} as CSSProperties}>
CITY
                </th>
                <th className="sort align-middle text-end" scope="col" data-sort={"last_active"} style={{"width":"21%","minWidth":"200px"} as CSSProperties}>
LAST ACTIVE
                </th>
                <th className="sort align-middle text-end pe-0" scope="col" data-sort={"joined"} style={{"width":"19%","minWidth":"200px"} as CSSProperties}>
JOINED
                </th>
              </tr>
            </thead>
            <tbody className="list" id="members-table-body"><tr className="hover-actions-trigger btn-reveal-trigger position-static">
                <td className="fs-9 align-middle ps-0 py-3">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/32.webp\",\"name\":\"Carry Anna\"},\"email\":\"annac34@gmail.com\",\"mobile\":\"+912346578\",\"city\":\"Budapest\",\"lastActive\":\"34 min ago\",\"joined\":\"Dec 12, 12:56 PM\"}"} />
                  </div>
                </td>
                <td className="customer align-middle white-space-nowrap">
                  <a href="#!" className="d-flex align-items-center text-body text-hover-1000">
                    <div className="avatar avatar-m">
                      <PhoenixImage src="/assets/img/team/32.webp" alt="" className="rounded-circle" />
                    </div>                    <h6 className="mb-0 ms-3 fw-semibold">
Carry Anna
                    </h6>
                  </a>
                </td>
                <td className="email align-middle white-space-nowrap">
                  <a href="mailto:annac34@gmail.com" className="fw-semibold">
annac34@gmail.com
                  </a>
                </td>
                <td className="mobile_number align-middle white-space-nowrap">
                  <a href="tel:+912346578" className="fw-bold text-body-emphasis">
+912346578
                  </a>
                </td>
                <td className="city align-middle white-space-nowrap text-body">
Budapest
                </td>
                <td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">
34 min ago
                </td>
                <td className="joined align-middle white-space-nowrap text-body-tertiary text-end">
Dec 12, 12:56 PM
                </td>
              </tr>
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/avatar.webp\",\"name\":\"Milind Mikuja\",\"placeholder\":true},\"email\":\"mimiku@yahoo.com\",\"mobile\":\"+8801564768976\",\"city\":\"Manchester\",\"lastActive\":\"6 hours ago\",\"joined\":\"Dec 9, 2:28 PM\"}"} />
                  </div>
                </td>
                <td className="customer align-middle white-space-nowrap">
                  <a href="#!" className="d-flex align-items-center text-body text-hover-1000">
                    <div className="avatar avatar-m">
                      <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                    </div>                    <h6 className="mb-0 ms-3 fw-semibold">
Milind Mikuja
                    </h6>
                  </a>
                </td>
                <td className="email align-middle white-space-nowrap">
                  <a href="mailto:mimiku@yahoo.com" className="fw-semibold">
mimiku@yahoo.com
                  </a>
                </td>
                <td className="mobile_number align-middle white-space-nowrap">
                  <a href="tel:+8801564768976" className="fw-bold text-body-emphasis">
+8801564768976
                  </a>
                </td>
                <td className="city align-middle white-space-nowrap text-body">
Manchester
                </td>
                <td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">
6 hours ago
                </td>
                <td className="joined align-middle white-space-nowrap text-body-tertiary text-end">
Dec 9, 2:28 PM
                </td>
              </tr>
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/35.webp\",\"name\":\"Stanly Drinkwater\"},\"email\":\"stnlwasser@hotmail.com\",\"mobile\":\"+78675436798\",\"city\":\"Smallville\",\"lastActive\":\"43 min ago\",\"joined\":\"Dec 4, 12:56 PM\"}"} />
                  </div>
                </td>
                <td className="customer align-middle white-space-nowrap">
                  <a href="#!" className="d-flex align-items-center text-body text-hover-1000">
                    <div className="avatar avatar-m">
                      <PhoenixImage src="/assets/img/team/35.webp" alt="" className="rounded-circle" />
                    </div>                    <h6 className="mb-0 ms-3 fw-semibold">
Stanly Drinkwater
                    </h6>
                  </a>
                </td>
                <td className="email align-middle white-space-nowrap">
                  <a href="mailto:stnlwasser@hotmail.com" className="fw-semibold">
stnlwasser@hotmail.com
                  </a>
                </td>
                <td className="mobile_number align-middle white-space-nowrap">
                  <a href="tel:+78675436798" className="fw-bold text-body-emphasis">
+78675436798
                  </a>
                </td>
                <td className="city align-middle white-space-nowrap text-body">
Smallville
                </td>
                <td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">
43 min ago
                </td>
                <td className="joined align-middle white-space-nowrap text-body-tertiary text-end">
Dec 4, 12:56 PM
                </td>
              </tr>
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/57.webp\",\"name\":\"Josef Stravinsky\"},\"email\":\"Josefsky@sni.it\",\"mobile\":\"+118796567894\",\"city\":\"Metropolis\",\"lastActive\":\"2 hours ago\",\"joined\":\"Dec 1,  4:07 AM\"}"} />
                  </div>
                </td>
                <td className="customer align-middle white-space-nowrap">
                  <a href="#!" className="d-flex align-items-center text-body text-hover-1000">
                    <div className="avatar avatar-m">
                      <PhoenixImage src="/assets/img/team/57.webp" alt="" className="rounded-circle" />
                    </div>                    <h6 className="mb-0 ms-3 fw-semibold">
Josef Stravinsky
                    </h6>
                  </a>
                </td>
                <td className="email align-middle white-space-nowrap">
                  <a href="mailto:Josefsky@sni.it" className="fw-semibold">
Josefsky@sni.it
                  </a>
                </td>
                <td className="mobile_number align-middle white-space-nowrap">
                  <a href="tel:+118796567894" className="fw-bold text-body-emphasis">
+118796567894
                  </a>
                </td>
                <td className="city align-middle white-space-nowrap text-body">
Metropolis
                </td>
                <td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">
2 hours ago
                </td>
                <td className="joined align-middle white-space-nowrap text-body-tertiary text-end">
Dec 1, 4:07 AM
                </td>
              </tr>
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/58.webp\",\"name\":\"Igor Borvibson\"},\"email\":\"vibigorr@technext.it\",\"mobile\":\"+65899655678\",\"city\":\"Central city\",\"lastActive\":\"5 days ago\",\"joined\":\"Nov 28, 7:28 PM\"}"} />
                  </div>
                </td>
                <td className="customer align-middle white-space-nowrap">
                  <a href="#!" className="d-flex align-items-center text-body text-hover-1000">
                    <div className="avatar avatar-m">
                      <PhoenixImage src="/assets/img/team/58.webp" alt="" className="rounded-circle" />
                    </div>                    <h6 className="mb-0 ms-3 fw-semibold">
Igor Borvibson
                    </h6>
                  </a>
                </td>
                <td className="email align-middle white-space-nowrap">
                  <a href="mailto:vibigorr@technext.it" className="fw-semibold">
vibigorr@technext.it
                  </a>
                </td>
                <td className="mobile_number align-middle white-space-nowrap">
                  <a href="tel:+65899655678" className="fw-bold text-body-emphasis">
+65899655678
                  </a>
                </td>
                <td className="city align-middle white-space-nowrap text-body">
Central city
                </td>
                <td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">
5 days ago
                </td>
                <td className="joined align-middle white-space-nowrap text-body-tertiary text-end">
Nov 28, 7:28 PM
                </td>
              </tr>
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/59.webp\",\"name\":\"Katerina Karenin\"},\"email\":\"karkat99@gmail.com\",\"mobile\":\"+00564327890\",\"city\":\"Gotham\",\"lastActive\":\"2 weeks ago\",\"joined\":\"Nov 24, 10:16 AM\"}"} />
                  </div>
                </td>
                <td className="customer align-middle white-space-nowrap">
                  <a href="#!" className="d-flex align-items-center text-body text-hover-1000">
                    <div className="avatar avatar-m">
                      <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle" />
                    </div>                    <h6 className="mb-0 ms-3 fw-semibold">
Katerina Karenin
                    </h6>
                  </a>
                </td>
                <td className="email align-middle white-space-nowrap">
                  <a href="mailto:karkat99@gmail.com" className="fw-semibold">
karkat99@gmail.com
                  </a>
                </td>
                <td className="mobile_number align-middle white-space-nowrap">
                  <a href="tel:+00564327890" className="fw-bold text-body-emphasis">
+00564327890
                  </a>
                </td>
                <td className="city align-middle white-space-nowrap text-body">
Gotham
                </td>
                <td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">
2 weeks ago
                </td>
                <td className="joined align-middle white-space-nowrap text-body-tertiary text-end">
Nov 24, 10:16 AM
                </td>
              </tr>
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"\",\"name\":\"Roy Anderson\"},\"email\":\"andersonroy@netflix.chill\",\"mobile\":\"+55890776\",\"city\":\"Vancouver\",\"lastActive\":\"4 days ago\",\"joined\":\"Nov 18, 5:43 PM\"}"} />
                  </div>
                </td>
                <td className="customer align-middle white-space-nowrap">
                  <a href="#!" className="d-flex align-items-center text-body text-hover-1000">
                    <div className="avatar avatar-m">
                      <div className="avatar-name rounded-circle">
                        <span>
R
                        </span>
                      </div>
                    </div>                    <h6 className="mb-0 ms-3 fw-semibold">
Roy Anderson
                    </h6>
                  </a>
                </td>
                <td className="email align-middle white-space-nowrap">
                  <a href="mailto:andersonroy@netflix.chill" className="fw-semibold">
andersonroy@netflix.chill
                  </a>
                </td>
                <td className="mobile_number align-middle white-space-nowrap">
                  <a href="tel:+55890776" className="fw-bold text-body-emphasis">
+55890776
                  </a>
                </td>
                <td className="city align-middle white-space-nowrap text-body">
Vancouver
                </td>
                <td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">
4 days ago
                </td>
                <td className="joined align-middle white-space-nowrap text-body-tertiary text-end">
Nov 18, 5:43 PM
                </td>
              </tr>
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/31.webp\",\"name\":\"Martina scorcese\"},\"email\":\"cesetina1@gmail.com\",\"mobile\":\"+666611896\",\"city\":\"Viena\",\"lastActive\":\"6 min ago\",\"joined\":\"Nov 18, 2:09 AM\"}"} />
                  </div>
                </td>
                <td className="customer align-middle white-space-nowrap">
                  <a href="#!" className="d-flex align-items-center text-body text-hover-1000">
                    <div className="avatar avatar-m">
                      <PhoenixImage src="/assets/img/team/31.webp" alt="" className="rounded-circle" />
                    </div>                    <h6 className="mb-0 ms-3 fw-semibold">
Martina scorcese
                    </h6>
                  </a>
                </td>
                <td className="email align-middle white-space-nowrap">
                  <a href="mailto:cesetina1@gmail.com" className="fw-semibold">
cesetina1@gmail.com
                  </a>
                </td>
                <td className="mobile_number align-middle white-space-nowrap">
                  <a href="tel:+666611896" className="fw-bold text-body-emphasis">
+666611896
                  </a>
                </td>
                <td className="city align-middle white-space-nowrap text-body">
Viena
                </td>
                <td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">
6 min ago
                </td>
                <td className="joined align-middle white-space-nowrap text-body-tertiary text-end">
Nov 18, 2:09 AM
                </td>
              </tr>
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/33.webp\",\"name\":\"Luis Bunuel\"},\"email\":\"luisuel@live.com\",\"mobile\":\"+55786534\",\"city\":\"Bangalore\",\"lastActive\":\"56 min ago\",\"joined\":\"Nov 16, 3:22 PM\"}"} />
                  </div>
                </td>
                <td className="customer align-middle white-space-nowrap">
                  <a href="#!" className="d-flex align-items-center text-body text-hover-1000">
                    <div className="avatar avatar-m">
                      <PhoenixImage src="/assets/img/team/33.webp" alt="" className="rounded-circle" />
                    </div>                    <h6 className="mb-0 ms-3 fw-semibold">
Luis Bunuel
                    </h6>
                  </a>
                </td>
                <td className="email align-middle white-space-nowrap">
                  <a href="mailto:luisuel@live.com" className="fw-semibold">
luisuel@live.com
                  </a>
                </td>
                <td className="mobile_number align-middle white-space-nowrap">
                  <a href="tel:+55786534" className="fw-bold text-body-emphasis">
+55786534
                  </a>
                </td>
                <td className="city align-middle white-space-nowrap text-body">
Bangalore
                </td>
                <td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">
56 min ago
                </td>
                <td className="joined align-middle white-space-nowrap text-body-tertiary text-end">
Nov 16, 3:22 PM
                </td>
              </tr>
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/34.webp\",\"name\":\"Jean Renoir\"},\"email\":\"renoirjean1836@gmail.com\",\"mobile\":\"+8801765458767\",\"city\":\"Chittagong\",\"lastActive\":\"Yesterday\",\"joined\":\"Nov 09, 8:49 AM\"}"} />
                  </div>
                </td>
                <td className="customer align-middle white-space-nowrap">
                  <a href="#!" className="d-flex align-items-center text-body text-hover-1000">
                    <div className="avatar avatar-m">
                      <PhoenixImage src="/assets/img/team/34.webp" alt="" className="rounded-circle" />
                    </div>                    <h6 className="mb-0 ms-3 fw-semibold">
Jean Renoir
                    </h6>
                  </a>
                </td>
                <td className="email align-middle white-space-nowrap">
                  <a href="mailto:renoirjean1836@gmail.com" className="fw-semibold">
renoirjean1836@gmail.com
                  </a>
                </td>
                <td className="mobile_number align-middle white-space-nowrap">
                  <a href="tel:+8801765458767" className="fw-bold text-body-emphasis">
+8801765458767
                  </a>
                </td>
                <td className="city align-middle white-space-nowrap text-body">
Chittagong
                </td>
                <td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">
Yesterday
                </td>
                <td className="joined align-middle white-space-nowrap text-body-tertiary text-end">
Nov 09, 8:49 AM
                </td>
              </tr>
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/29.webp\",\"name\":\"Ricky Antony\"},\"email\":\"ricky@example.com\",\"mobile\":\"+2012001851\",\"city\":\"New Jersey\",\"lastActive\":\"1 hour ago\",\"joined\":\"Oct 19, 8:00 AM\"}"} />
                  </div>
                </td>
                <td className="customer align-middle white-space-nowrap">
                  <a href="#!" className="d-flex align-items-center text-body text-hover-1000">
                    <div className="avatar avatar-m">
                      <PhoenixImage src="/assets/img/team/29.webp" alt="" className="rounded-circle" />
                    </div>                    <h6 className="mb-0 ms-3 fw-semibold">
Ricky Antony
                    </h6>
                  </a>
                </td>
                <td className="email align-middle white-space-nowrap">
                  <a href="mailto:ricky@example.com" className="fw-semibold">
ricky@example.com
                  </a>
                </td>
                <td className="mobile_number align-middle white-space-nowrap">
                  <a href="tel:+2012001851" className="fw-bold text-body-emphasis">
+2012001851
                  </a>
                </td>
                <td className="city align-middle white-space-nowrap text-body">
New Jersey
                </td>
                <td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">
1 hour ago
                </td>
                <td className="joined align-middle white-space-nowrap text-body-tertiary text-end">
Oct 19, 8:00 AM
                </td>
              </tr>
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/3.webp\",\"name\":\"Emma Watson\"},\"email\":\"emma@example.com\",\"mobile\":\"+2122288403\",\"city\":\"New York\",\"lastActive\":\"6 hours ago\",\"joined\":\"Oct 15, 12:00 PM\"}"} />
                  </div>
                </td>
                <td className="customer align-middle white-space-nowrap">
                  <a href="#!" className="d-flex align-items-center text-body text-hover-1000">
                    <div className="avatar avatar-m">
                      <PhoenixImage src="/assets/img/team/3.webp" alt="" className="rounded-circle" />
                    </div>                    <h6 className="mb-0 ms-3 fw-semibold">
Emma Watson
                    </h6>
                  </a>
                </td>
                <td className="email align-middle white-space-nowrap">
                  <a href="mailto:emma@example.com" className="fw-semibold">
emma@example.com
                  </a>
                </td>
                <td className="mobile_number align-middle white-space-nowrap">
                  <a href="tel:+2122288403" className="fw-bold text-body-emphasis">
+2122288403
                  </a>
                </td>
                <td className="city align-middle white-space-nowrap text-body">
New York
                </td>
                <td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">
6 hours ago
                </td>
                <td className="joined align-middle white-space-nowrap text-body-tertiary text-end">
Oct 15, 12:00 PM
                </td>
              </tr>
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/avatar.webp\",\"name\":\"Jennifer Schramm\",\"placeholder\":true},\"email\":\"jennifer@example.com\",\"mobile\":\"+8283829631\",\"city\":\"Charlotte\",\"lastActive\":\"12 hours ago\",\"joined\":\"Oct 12, 11:00 AM\"}"} />
                  </div>
                </td>
                <td className="customer align-middle white-space-nowrap">
                  <a href="#!" className="d-flex align-items-center text-body text-hover-1000">
                    <div className="avatar avatar-m">
                      <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                    </div>                    <h6 className="mb-0 ms-3 fw-semibold">
Jennifer Schramm
                    </h6>
                  </a>
                </td>
                <td className="email align-middle white-space-nowrap">
                  <a href="mailto:jennifer@example.com" className="fw-semibold">
jennifer@example.com
                  </a>
                </td>
                <td className="mobile_number align-middle white-space-nowrap">
                  <a href="tel:+8283829631" className="fw-bold text-body-emphasis">
+8283829631
                  </a>
                </td>
                <td className="city align-middle white-space-nowrap text-body">
Charlotte
                </td>
                <td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">
12 hours ago
                </td>
                <td className="joined align-middle white-space-nowrap text-body-tertiary text-end">
Oct 12, 11:00 AM
                </td>
              </tr>
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/32.webp\",\"name\":\"Raymond Mims\"},\"email\":\"raymond@example.com\",\"mobile\":\"+5624685646\",\"city\":\"Artesia\",\"lastActive\":\"2 day ago\",\"joined\":\"Oct 10, 8:30 AM\"}"} />
                  </div>
                </td>
                <td className="customer align-middle white-space-nowrap">
                  <a href="#!" className="d-flex align-items-center text-body text-hover-1000">
                    <div className="avatar avatar-m">
                      <PhoenixImage src="/assets/img/team/32.webp" alt="" className="rounded-circle" />
                    </div>                    <h6 className="mb-0 ms-3 fw-semibold">
Raymond Mims
                    </h6>
                  </a>
                </td>
                <td className="email align-middle white-space-nowrap">
                  <a href="mailto:raymond@example.com" className="fw-semibold">
raymond@example.com
                  </a>
                </td>
                <td className="mobile_number align-middle white-space-nowrap">
                  <a href="tel:+5624685646" className="fw-bold text-body-emphasis">
+5624685646
                  </a>
                </td>
                <td className="city align-middle white-space-nowrap text-body">
Artesia
                </td>
                <td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">
2 day ago
                </td>
                <td className="joined align-middle white-space-nowrap text-body-tertiary text-end">
Oct 10, 8:30 AM
                </td>
              </tr>
              <tr className="hover-actions-trigger btn-reveal-trigger position-static"><td className="fs-9 align-middle ps-0 py-3">
                  <div className="form-check mb-0 fs-8">
                    <input className="form-check-input" type="checkbox" data-bulk-select-row={"{\"customer\":{\"avatar\":\"/team/25.webp\",\"name\":\"Michael Jenkins\"},\"email\":\"jenkins@example.com\",\"mobile\":\"+3026138829\",\"city\":\"Philadelphia\",\"lastActive\":\"12 hours ago\",\"joined\":\"Oct 3, 8:30 AM\"}"} />
                  </div>
                </td>
                <td className="customer align-middle white-space-nowrap">
                  <a href="#!" className="d-flex align-items-center text-body text-hover-1000">
                    <div className="avatar avatar-m">
                      <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle" />
                    </div>                    <h6 className="mb-0 ms-3 fw-semibold">
Michael Jenkins
                    </h6>
                  </a>
                </td>
                <td className="email align-middle white-space-nowrap">
                  <a href="mailto:jenkins@example.com" className="fw-semibold">
jenkins@example.com
                  </a>
                </td>
                <td className="mobile_number align-middle white-space-nowrap">
                  <a href="tel:+3026138829" className="fw-bold text-body-emphasis">
+3026138829
                  </a>
                </td>
                <td className="city align-middle white-space-nowrap text-body">
Philadelphia
                </td>
                <td className="last_active align-middle text-end white-space-nowrap text-body-tertiary">
12 hours ago
                </td>
                <td className="joined align-middle white-space-nowrap text-body-tertiary text-end">
Oct 3, 8:30 AM
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
          <div className="col-auto d-flex">
            <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info>            </p>
            <a href="#!" className="fw-semibold"  data-list-view={"*"}>
View all              <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>              </span>
            </a>
            <a href="#!" className="fw-semibold d-none"  data-list-view={"less"}>
View Less              <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>              </span>
            </a>
          </div>
          <div className="col-auto d-flex">
            <button className="page-link" data-list-pagination={"prev"}>
              <span className="fas fa-chevron-left">              </span>
            </button>
            <ul className="mb-0 pagination">            </ul>
            <button className="page-link pe-0" data-list-pagination={"next"}>
              <span className="fas fa-chevron-right">              </span>
            </button>
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
