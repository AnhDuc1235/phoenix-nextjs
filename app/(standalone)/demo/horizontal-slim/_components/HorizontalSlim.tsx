'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function HorizontalSlim() {
  return (
    <div suppressHydrationWarning>

    <nav className="navbar navbar-top navbar-slim justify-content-between fixed-top navbar-expand-lg" id="navbarTopSlim" data-navbar-appearance={"darker"}>
      <div className="navbar-logo">
        <button className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle={"collapse"} data-bs-target={"#navbarTopCollapse"} aria-controls="navbarTopCollapse" aria-expanded="false" aria-label="Toggle Navigation">
          <span className="navbar-toggle-icon">
            <span className="toggle-line">            </span>
          </span>
        </button>
        <PhoenixLink href="/" className="navbar-brand navbar-brand">
phoenix           <span className="text-body-highlight d-none d-sm-inline">
slim
          </span>
        </PhoenixLink>
      </div>
      <div className="collapse navbar-collapse navbar-top-collapse order-1 order-lg-0 justify-content-center" id="navbarTopCollapse">
        <ul className="navbar-nav navbar-nav-top" data-dropdown-on-hover>
          <li className="nav-item dropdown">
            <a href="#!" className="nav-link dropdown-toggle lh-1"  role="button" data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"} aria-haspopup="true" aria-expanded="false">
              <span className="uil fs-8 me-2 uil-chart-pie">              </span>Home
            </a>
            <ul className="dropdown-menu navbar-dropdown-caret">
              <li>
                <PhoenixLink href="/" className="dropdown-item">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" data-feather={"shopping-cart"}>                    </span>
E commerce 
                  </div>
                </PhoenixLink>
              </li>
              <li>
                <PhoenixLink href="/dashboard/project-management" className="dropdown-item">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" data-feather={"clipboard"}>                    </span>
Project management 
                  </div>
                </PhoenixLink>
              </li>
              <li>
                <PhoenixLink href="/dashboard/crm" className="dropdown-item">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" data-feather={"phone"}>                    </span>
CRM 
                  </div>
                </PhoenixLink>
              </li>
              <li>
                <PhoenixLink href="/dashboard/travel-agency" className="dropdown-item">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" data-feather={"briefcase"}>                    </span>
Travel agency 
                  </div>
                </PhoenixLink>
              </li>
              <li>
                <PhoenixLink href="/dashboard/stock" className="dropdown-item">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" data-feather={"briefcase"}>                    </span>
Stock 
                  </div>
                </PhoenixLink>
              </li>
              <li>
                <PhoenixLink href="/apps/social/feed" className="dropdown-item">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" data-feather={"share-2"}>                    </span>
Social feed 
                  </div>
                </PhoenixLink>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a href="#!" className="nav-link dropdown-toggle lh-1"  role="button" data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"} aria-haspopup="true" aria-expanded="false">
              <span className="uil fs-8 me-2 uil-cube">              </span>Apps
            </a>
            <ul className="dropdown-menu navbar-dropdown-caret">
              <li className="dropdown">
                <a href="#" className="dropdown-item dropdown-toggle" id="e-commerce"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                    </span>
                    <span>
                      <span className="me-2 uil" data-feather={"shopping-cart"}>                      </span>
E commerce
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown">
                    <a href="#" className="dropdown-item dropdown-toggle" id="admin"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                      <div className="dropdown-item-wrapper">
                        <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                        </span>
                        <span>
                          <span className="me-2 uil">                          </span>
Admin
                        </span>
                      </div>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <PhoenixLink href="/apps/e-commerce/admin/add-product" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Add product 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/apps/e-commerce/admin/products" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Products 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/apps/e-commerce/admin/customers" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Customers 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/apps/e-commerce/admin/customer-details" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Customer details 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/apps/e-commerce/admin/orders" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Orders 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/apps/e-commerce/admin/order-details" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Order details 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/apps/e-commerce/admin/refund" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Refund 
                          </div>
                        </PhoenixLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-item dropdown-toggle" id="customer"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                      <div className="dropdown-item-wrapper">
                        <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                        </span>
                        <span>
                          <span className="me-2 uil">                          </span>
Customer
                        </span>
                      </div>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <PhoenixLink href="/apps/e-commerce/landing/homepage" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Homepage 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Product details 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/apps/e-commerce/landing/products-filter" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Products filter 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/apps/e-commerce/landing/cart" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Cart 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/apps/e-commerce/landing/checkout" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Checkout 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/apps/e-commerce/landing/shipping-info" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Shipping info 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/apps/e-commerce/landing/profile" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Profile 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/apps/e-commerce/landing/favourite-stores" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Favourite stores 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/apps/e-commerce/landing/wishlist" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Wishlist 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/apps/e-commerce/landing/order-tracking" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Order tracking 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/apps/e-commerce/landing/invoice" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Invoice 
                          </div>
                        </PhoenixLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-item dropdown-toggle" id="CRM"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                    </span>
                    <span>
                      <span className="me-2 uil" data-feather={"phone"}>                      </span>
CRM
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <PhoenixLink href="/apps/crm/analytics" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Analytics 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/apps/crm/deals" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Deals 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/apps/crm/deal-details" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Deal details 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/apps/crm/leads" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Leads 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/apps/crm/lead-details" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Lead details 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/apps/crm/reports" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Reports 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/apps/crm/report-details" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Report details 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/apps/crm/add-contact" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Add contact 
                      </div>
                    </PhoenixLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-item dropdown-toggle" id="project-management"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                    </span>
                    <span>
                      <span className="me-2 uil" data-feather={"clipboard"}>                      </span>
Project management
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <PhoenixLink href="/apps/project-management/create-new" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Create new 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/apps/project-management/project-list-view" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Project list view 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/apps/project-management/project-card-view" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Project card view 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/apps/project-management/project-board-view" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Project board view 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/apps/project-management/todo-list" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Todo list 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/apps/project-management/project-details" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Project details 
                      </div>
                    </PhoenixLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-item dropdown-toggle" id="travel-agency"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                    </span>
                    <span>
                      <span className="me-2 uil" data-feather={"briefcase"}>                      </span>
Travel agency
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <PhoenixLink href="/apps/travel-agency/landing" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Landing 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-item dropdown-toggle" id="hotel"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                      <div className="dropdown-item-wrapper">
                        <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                        </span>
                        <span>
                          <span className="me-2 uil">                          </span>
Hotel
                        </span>
                      </div>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="dropdown">
                        <a href="#" className="dropdown-item dropdown-toggle" id="admin"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                          <div className="dropdown-item-wrapper">
                            <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                            </span>
                            <span>
                              <span className="me-2 uil">                              </span>
Admin
                            </span>
                          </div>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <PhoenixLink href="/apps/travel-agency/hotel/admin/add-property" className="dropdown-item">
                              <div className="dropdown-item-wrapper">
                                <span className="me-2 uil">                                </span>
Add property 
                              </div>
                            </PhoenixLink>
                          </li>
                          <li>
                            <PhoenixLink href="/apps/travel-agency/hotel/admin/add-room" className="dropdown-item">
                              <div className="dropdown-item-wrapper">
                                <span className="me-2 uil">                                </span>
Add room 
                              </div>
                            </PhoenixLink>
                          </li>
                          <li>
                            <PhoenixLink href="/apps/travel-agency/hotel/admin/room-listing" className="dropdown-item">
                              <div className="dropdown-item-wrapper">
                                <span className="me-2 uil">                                </span>
Room listing 
                              </div>
                            </PhoenixLink>
                          </li>
                          <li>
                            <PhoenixLink href="/apps/travel-agency/hotel/admin/room-search" className="dropdown-item">
                              <div className="dropdown-item-wrapper">
                                <span className="me-2 uil">                                </span>
Search room 
                              </div>
                            </PhoenixLink>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropdown-item dropdown-toggle" id="customer"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                          <div className="dropdown-item-wrapper">
                            <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                            </span>
                            <span>
                              <span className="me-2 uil">                              </span>
Customer
                            </span>
                          </div>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <PhoenixLink href="/apps/travel-agency/hotel/customer/homepage" className="dropdown-item">
                              <div className="dropdown-item-wrapper">
                                <span className="me-2 uil">                                </span>
Homepage 
                              </div>
                            </PhoenixLink>
                          </li>
                          <li>
                            <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-details" className="dropdown-item">
                              <div className="dropdown-item-wrapper">
                                <span className="me-2 uil">                                </span>
Hotel details 
                              </div>
                            </PhoenixLink>
                          </li>
                          <li>
                            <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-compare" className="dropdown-item">
                              <div className="dropdown-item-wrapper">
                                <span className="me-2 uil">                                </span>
Hotel compare 
                              </div>
                            </PhoenixLink>
                          </li>
                          <li>
                            <PhoenixLink href="/apps/travel-agency/hotel/customer/checkout" className="dropdown-item">
                              <div className="dropdown-item-wrapper">
                                <span className="me-2 uil">                                </span>
Checkout 
                              </div>
                            </PhoenixLink>
                          </li>
                          <li>
                            <PhoenixLink href="/apps/travel-agency/hotel/customer/payment" className="dropdown-item">
                              <div className="dropdown-item-wrapper">
                                <span className="me-2 uil">                                </span>
Payment 
                              </div>
                            </PhoenixLink>
                          </li>
                          <li>
                            <PhoenixLink href="/apps/travel-agency/hotel/customer/gallery" className="dropdown-item">
                              <div className="dropdown-item-wrapper">
                                <span className="me-2 uil">                                </span>
Gallery 
                              </div>
                            </PhoenixLink>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-item dropdown-toggle" id="flight"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                      <div className="dropdown-item-wrapper">
                        <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                        </span>
                        <span>
                          <span className="me-2 uil">                          </span>
Flight
                        </span>
                      </div>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <PhoenixLink href="/apps/travel-agency/flight/homepage" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Homepage 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/apps/travel-agency/flight/booking" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Booking 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/apps/travel-agency/flight/payment" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Payment 
                          </div>
                        </PhoenixLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-item dropdown-toggle" id="trip"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                      <div className="dropdown-item-wrapper">
                        <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                        </span>
                        <span>
                          <span className="me-2 uil">                          </span>
Trip
                        </span>
                      </div>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <PhoenixLink href="/apps/travel-agency/trip/homepage" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Homepage 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/apps/travel-agency/trip/trip-details" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Trip details 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/apps/travel-agency/trip/checkout" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Checkout 
                          </div>
                        </PhoenixLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-item dropdown-toggle" id="stock"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                    </span>
                    <span>
                      <span className="me-2 uil" data-feather={"dollar-sign"}>                      </span>
Stock
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <PhoenixLink href="/apps/stock/stock-details" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Stock details 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/apps/stock/portfolio" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Portfolio 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/apps/stock/watchlist" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Watchlist 
                      </div>
                    </PhoenixLink>
                  </li>
                </ul>
              </li>
              <li>
                <PhoenixLink href="/apps/chat" className="dropdown-item">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" data-feather={"message-square"}>                    </span>
Chat 
                  </div>
                </PhoenixLink>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-item dropdown-toggle" id="email"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                    </span>
                    <span>
                      <span className="me-2 uil" data-feather={"mail"}>                      </span>
Email
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <PhoenixLink href="/apps/email/inbox" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Inbox 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/apps/email/email-detail" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Email detail 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/apps/email/compose" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Compose 
                      </div>
                    </PhoenixLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-item dropdown-toggle" id="events"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                    </span>
                    <span>
                      <span className="me-2 uil" data-feather={"bookmark"}>                      </span>
Events
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <PhoenixLink href="/apps/events/create-an-event" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Create an event 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/apps/events/event-detail" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Event detail 
                      </div>
                    </PhoenixLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-item dropdown-toggle" id="kanban"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                    </span>
                    <span>
                      <span className="me-2 uil" data-feather={"trello"}>                      </span>
Kanban
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <PhoenixLink href="/apps/kanban/kanban" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Kanban 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/apps/kanban/boards" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Boards 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/apps/kanban/create-kanban-board" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Create board 
                      </div>
                    </PhoenixLink>
                  </li>
                </ul>
              </li>
              <li>
                <PhoenixLink href="/apps/gantt-chart" className="dropdown-item">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 fa-solid fa-chart-gantt ">                    </span>
Gantt chart 
                  </div>
                </PhoenixLink>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-item dropdown-toggle" id="social"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                    </span>
                    <span>
                      <span className="me-2 uil" data-feather={"share-2"}>                      </span>
Social
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <PhoenixLink href="/apps/social/profile" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Profile 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/apps/social/settings" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Settings 
                      </div>
                    </PhoenixLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-item dropdown-toggle" id="gallery"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                    </span>
                    <span>
                      <span className="me-2 uil" data-feather={"image"}>                      </span>
Gallery
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <PhoenixLink href="/apps/gallery/album" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Album 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/apps/gallery/gallery-column" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Gallery column 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/apps/gallery/gallery-grid" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Gallery grid 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/apps/gallery/grid-with-title" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Grid with title 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/apps/gallery/gallery-masonry" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Gallery masonry 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/apps/gallery/gallery-slider" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Gallery slider 
                      </div>
                    </PhoenixLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-item dropdown-toggle" id="file-manager"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                    </span>
                    <span>
                      <span className="me-2 uil" data-feather={"folder"}>                      </span>
File manager
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <PhoenixLink href="/apps/file-manager/grid-view" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Grid view 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/apps/file-manager/list-view" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
List view 
                      </div>
                    </PhoenixLink>
                  </li>
                </ul>
              </li>
              <li>
                <PhoenixLink href="/apps/calendar" className="dropdown-item">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" data-feather={"calendar"}>                    </span>
Calendar 
                  </div>
                </PhoenixLink>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a href="#!" className="nav-link dropdown-toggle lh-1"  role="button" data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"} aria-haspopup="true" aria-expanded="false">
              <span className="uil fs-8 me-2 uil-files-landscapes-alt">              </span>Pages
            </a>
            <ul className="dropdown-menu navbar-dropdown-caret">
              <li>
                <PhoenixLink href="/pages/starter" className="dropdown-item">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" data-feather={"compass"}>                    </span>
Starter 
                  </div>
                </PhoenixLink>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-item dropdown-toggle" id="faq"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                    </span>
                    <span>
                      <span className="me-2 uil" data-feather={"help-circle"}>                      </span>
Faq
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <PhoenixLink href="/pages/faq/faq-accordion" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Faq accordion 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/pages/faq/faq-tab" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Faq tab 
                      </div>
                    </PhoenixLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-item dropdown-toggle" id="landing"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                    </span>
                    <span>
                      <span className="me-2 uil" data-feather={"globe"}>                      </span>
Landing
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <PhoenixLink href="/pages/landing/default" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Default 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/pages/landing/alternate" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Alternate 
                      </div>
                    </PhoenixLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-item dropdown-toggle" id="pricing"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                    </span>
                    <span>
                      <span className="me-2 uil" data-feather={"tag"}>                      </span>
Pricing
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <PhoenixLink href="/pages/pricing/pricing-column" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Pricing column 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/pages/pricing/pricing-grid" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Pricing grid 
                      </div>
                    </PhoenixLink>
                  </li>
                </ul>
              </li>
              <li>
                <PhoenixLink href="/pages/notifications" className="dropdown-item">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" data-feather={"bell"}>                    </span>
Notifications 
                  </div>
                </PhoenixLink>
              </li>
              <li>
                <PhoenixLink href="/pages/members" className="dropdown-item">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" data-feather={"users"}>                    </span>
Members 
                  </div>
                </PhoenixLink>
              </li>
              <li>
                <PhoenixLink href="/pages/timeline" className="dropdown-item">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" data-feather={"clock"}>                    </span>
Timeline 
                  </div>
                </PhoenixLink>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-item dropdown-toggle" id="errors"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                    </span>
                    <span>
                      <span className="me-2 uil" data-feather={"alert-triangle"}>                      </span>
Errors
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <PhoenixLink href="/pages/errors/404" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
404 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/pages/errors/403" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
403 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/pages/errors/500" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
500 
                      </div>
                    </PhoenixLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-item dropdown-toggle" id="authentication"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                    </span>
                    <span>
                      <span className="me-2 uil" data-feather={"lock"}>                      </span>
Authentication
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown">
                    <a href="#" className="dropdown-item dropdown-toggle" id="simple"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                      <div className="dropdown-item-wrapper">
                        <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                        </span>
                        <span>
                          <span className="me-2 uil">                          </span>
Simple
                        </span>
                      </div>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <PhoenixLink href="/pages/authentication/simple/sign-in" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Sign in 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/pages/authentication/simple/sign-up" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Sign up 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/pages/authentication/simple/sign-out" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Sign out 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/pages/authentication/simple/forgot-password" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Forgot password 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/pages/authentication/simple/reset-password" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Reset password 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/pages/authentication/simple/lock-screen" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Lock screen 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/pages/authentication/simple/2FA" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
2FA 
                          </div>
                        </PhoenixLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-item dropdown-toggle" id="split"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                      <div className="dropdown-item-wrapper">
                        <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                        </span>
                        <span>
                          <span className="me-2 uil">                          </span>
Split
                        </span>
                      </div>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <PhoenixLink href="/pages/authentication/split/sign-in" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Sign in 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/pages/authentication/split/sign-up" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Sign up 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/pages/authentication/split/sign-out" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Sign out 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/pages/authentication/split/forgot-password" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Forgot password 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/pages/authentication/split/reset-password" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Reset password 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/pages/authentication/split/lock-screen" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Lock screen 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/pages/authentication/split/2FA" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
2FA 
                          </div>
                        </PhoenixLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-item dropdown-toggle" id="Card"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                      <div className="dropdown-item-wrapper">
                        <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                        </span>
                        <span>
                          <span className="me-2 uil">                          </span>
Card
                        </span>
                      </div>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <PhoenixLink href="/pages/authentication/card/sign-in" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Sign in 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/pages/authentication/card/sign-up" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Sign up 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/pages/authentication/card/sign-out" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Sign out 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/pages/authentication/card/forgot-password" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Forgot password 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/pages/authentication/card/reset-password" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Reset password 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/pages/authentication/card/lock-screen" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
Lock screen 
                          </div>
                        </PhoenixLink>
                      </li>
                      <li>
                        <PhoenixLink href="/pages/authentication/card/2FA" className="dropdown-item">
                          <div className="dropdown-item-wrapper">
                            <span className="me-2 uil">                            </span>
2FA 
                          </div>
                        </PhoenixLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-item dropdown-toggle" id="layouts"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                    </span>
                    <span>
                      <span className="me-2 uil" data-feather={"layout"}>                      </span>
Layouts
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <PhoenixLink href="/demo/vertical-sidenav" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Vertical sidenav 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/demo/dark-mode" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Dark mode 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/demo/sidenav-collapse" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Sidenav collapse 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/demo/darknav" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Darknav 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/demo/topnav-slim" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Topnav slim 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/demo/navbar-horizontal" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Navbar horizontal 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/demo/horizontal-slim" className="dropdown-item active">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Horizontal slim 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/demo/combo-nav" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Combo nav 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/demo/combo-nav-slim" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Combo nav slim 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/demo/dual-nav" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Dual nav 
                      </div>
                    </PhoenixLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a href="#!" className="nav-link dropdown-toggle lh-1"  role="button" data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"} aria-haspopup="true" aria-expanded="false">
              <span className="uil fs-8 me-2 uil-puzzle-piece">              </span>Modules
            </a>
            <ul className="dropdown-menu navbar-dropdown-caret dropdown-menu-card py-0">
              <div className="border-0 scrollbar" style={{"maxHeight":"60vh"} as CSSProperties}>
                <div className="px-3 pt-4 pb-3 img-dropdown">
                  <div className="row gx-4 gy-5">
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="dropdown-item-group">
                        <span className="me-2" data-feather={"file-text"} style={{"strokeWidth":"2"} as CSSProperties}>                        </span>
                        <h6 className="dropdown-item-title">
Forms 
                        </h6>
                      </div>
                      <PhoenixLink href="/modules/forms/basic/form-control" className="dropdown-link">
Form control
                      </PhoenixLink>
                      <PhoenixLink href="/modules/forms/basic/input-group" className="dropdown-link">
Input group
                      </PhoenixLink>
                      <PhoenixLink href="/modules/forms/basic/select" className="dropdown-link">
Select
                      </PhoenixLink>
                      <PhoenixLink href="/modules/forms/basic/checks" className="dropdown-link">
Checks
                      </PhoenixLink>
                      <PhoenixLink href="/modules/forms/basic/range" className="dropdown-link">
Range
                      </PhoenixLink>
                      <PhoenixLink href="/modules/forms/basic/floating-labels" className="dropdown-link">
Floating labels
                      </PhoenixLink>
                      <PhoenixLink href="/modules/forms/basic/layout" className="dropdown-link">
Layout
                      </PhoenixLink>
                      <PhoenixLink href="/modules/forms/advance/advance-select" className="dropdown-link">
Advance select
                      </PhoenixLink>
                      <PhoenixLink href="/modules/forms/advance/date-picker" className="dropdown-link">
Date picker
                      </PhoenixLink>
                      <PhoenixLink href="/modules/forms/advance/editor" className="dropdown-link">
Editor
                      </PhoenixLink>
                      <PhoenixLink href="/modules/forms/advance/file-uploader" className="dropdown-link">
File uploader
                      </PhoenixLink>
                      <PhoenixLink href="/modules/forms/advance/range" className="dropdown-link">
Range
                      </PhoenixLink>
                      <PhoenixLink href="/modules/forms/advance/rating" className="dropdown-link">
Rating
                      </PhoenixLink>
                      <PhoenixLink href="/modules/forms/advance/emoji-button" className="dropdown-link">
Emoji button
                      </PhoenixLink>
                      <PhoenixLink href="/modules/forms/validation" className="dropdown-link">
Validation
                      </PhoenixLink>
                      <PhoenixLink href="/modules/forms/wizard" className="dropdown-link">
Wizard
                      </PhoenixLink>
                      <div className="dropdown-item-group mt-5">
                        <span className="me-2" data-feather={"grid"} style={{"strokeWidth":"2"} as CSSProperties}>                        </span>
                        <h6 className="dropdown-item-title">
Icons 
                        </h6>
                      </div>
                      <PhoenixLink href="/modules/icons/feather" className="dropdown-link">
Feather
                      </PhoenixLink>
                      <PhoenixLink href="/modules/icons/font-awesome" className="dropdown-link">
Font awesome
                      </PhoenixLink>
                      <PhoenixLink href="/modules/icons/unicons" className="dropdown-link">
Unicons
                      </PhoenixLink>
                      <div className="dropdown-item-group mt-5">
                        <span className="me-2" data-feather={"bar-chart-2"} style={{"strokeWidth":"2"} as CSSProperties}>                        </span>
                        <h6 className="dropdown-item-title">
ECharts 
                        </h6>
                      </div>
                      <PhoenixLink href="/modules/echarts/line-charts" className="dropdown-link">
Line charts
                      </PhoenixLink>
                      <PhoenixLink href="/modules/echarts/bar-charts" className="dropdown-link">
Bar charts
                      </PhoenixLink>
                      <PhoenixLink href="/modules/echarts/candlestick-charts" className="dropdown-link">
Candlestick charts
                      </PhoenixLink>
                      <PhoenixLink href="/modules/echarts/geo-map" className="dropdown-link">
Geo map
                      </PhoenixLink>
                      <PhoenixLink href="/modules/echarts/scatter-charts" className="dropdown-link">
Scatter charts
                      </PhoenixLink>
                      <PhoenixLink href="/modules/echarts/pie-charts" className="dropdown-link">
Pie charts
                      </PhoenixLink>
                      <PhoenixLink href="/modules/echarts/gauge-chart" className="dropdown-link">
Gauge chart
                      </PhoenixLink>
                      <PhoenixLink href="/modules/echarts/radar-charts" className="dropdown-link">
Radar charts
                      </PhoenixLink>
                      <PhoenixLink href="/modules/echarts/heatmap-charts" className="dropdown-link">
Heatmap charts
                      </PhoenixLink>
                      <PhoenixLink href="/modules/echarts/how-to-use" className="dropdown-link">
How to use
                      </PhoenixLink>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="dropdown-item-group">
                        <span className="me-2" data-feather={"package"} style={{"strokeWidth":"2"} as CSSProperties}>                        </span>
                        <h6 className="dropdown-item-title">
Components 
                        </h6>
                      </div>
                      <PhoenixLink href="/modules/components/accordion" className="dropdown-link">
Accordion
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/avatar" className="dropdown-link">
Avatar
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/alerts" className="dropdown-link">
Alerts
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/badge" className="dropdown-link">
Badge
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/breadcrumb" className="dropdown-link">
Breadcrumb
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/button" className="dropdown-link">
Buttons
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/calendar" className="dropdown-link">
Calendar
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/card" className="dropdown-link">
Card
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/carousel/bootstrap" className="dropdown-link">
Bootstrap
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/carousel/swiper" className="dropdown-link">
Swiper
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/collapse" className="dropdown-link">
Collapse
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/dropdown" className="dropdown-link">
Dropdown
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/dhtmlx-gantt" className="dropdown-link">
Dhtmlx gantt
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/list-group" className="dropdown-link">
List group
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/modal" className="dropdown-link">
Modals
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/navs-and-tabs/navs" className="dropdown-link">
Navs
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/navs-and-tabs/navbar" className="dropdown-link">
Navbar
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/navs-and-tabs/tabs" className="dropdown-link">
Tabs
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/offcanvas" className="dropdown-link">
Offcanvas
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/progress-bar" className="dropdown-link">
Progress bar
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/placeholder" className="dropdown-link">
Placeholder
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/pagination" className="dropdown-link">
Pagination
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/popovers" className="dropdown-link">
Popovers
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/scrollspy" className="dropdown-link">
Scrollspy
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/sortable" className="dropdown-link">
Sortable
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/spinners" className="dropdown-link">
Spinners
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/toast" className="dropdown-link">
Toast
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/tooltips" className="dropdown-link">
Tooltips
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/typed-text" className="dropdown-link">
Typed text
                      </PhoenixLink>
                      <PhoenixLink href="/modules/components/chat-widget" className="dropdown-link">
Chat widget
                      </PhoenixLink>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                      <div className="dropdown-item-group">
                        <span className="me-2" data-feather={"columns"} style={{"strokeWidth":"2"} as CSSProperties}>                        </span>
                        <h6 className="dropdown-item-title">
Tables 
                        </h6>
                      </div>
                      <PhoenixLink href="/modules/tables/basic-tables" className="dropdown-link">
Basic tables
                      </PhoenixLink>
                      <PhoenixLink href="/modules/tables/advance-tables" className="dropdown-link">
Advance tables
                      </PhoenixLink>
                      <PhoenixLink href="/modules/tables/bulk-select" className="dropdown-link">
Bulk Select
                      </PhoenixLink>
                      <div className="dropdown-item-group mt-5">
                        <span className="me-2" data-feather={"tool"} style={{"strokeWidth":"2"} as CSSProperties}>                        </span>
                        <h6 className="dropdown-item-title">
Utilities 
                        </h6>
                      </div>
                      <PhoenixLink href="/modules/utilities/background" className="dropdown-link">
Background
                      </PhoenixLink>
                      <PhoenixLink href="/modules/utilities/borders" className="dropdown-link">
Borders
                      </PhoenixLink>
                      <PhoenixLink href="/modules/utilities/colors" className="dropdown-link">
Colors
                      </PhoenixLink>
                      <PhoenixLink href="/modules/utilities/display" className="dropdown-link">
Display
                      </PhoenixLink>
                      <PhoenixLink href="/modules/utilities/flex" className="dropdown-link">
Flex
                      </PhoenixLink>
                      <PhoenixLink href="/modules/utilities/stacks" className="dropdown-link">
Stacks
                      </PhoenixLink>
                      <PhoenixLink href="/modules/utilities/float" className="dropdown-link">
Float
                      </PhoenixLink>
                      <PhoenixLink href="/modules/utilities/grid" className="dropdown-link">
Grid
                      </PhoenixLink>
                      <PhoenixLink href="/modules/utilities/interactions" className="dropdown-link">
Interactions
                      </PhoenixLink>
                      <PhoenixLink href="/modules/utilities/opacity" className="dropdown-link">
Opacity
                      </PhoenixLink>
                      <PhoenixLink href="/modules/utilities/overflow" className="dropdown-link">
Overflow
                      </PhoenixLink>
                      <PhoenixLink href="/modules/utilities/position" className="dropdown-link">
Position
                      </PhoenixLink>
                      <PhoenixLink href="/modules/utilities/shadows" className="dropdown-link">
Shadows
                      </PhoenixLink>
                      <PhoenixLink href="/modules/utilities/sizing" className="dropdown-link">
Sizing
                      </PhoenixLink>
                      <PhoenixLink href="/modules/utilities/spacing" className="dropdown-link">
Spacing
                      </PhoenixLink>
                      <PhoenixLink href="/modules/utilities/typography" className="dropdown-link">
Typography
                      </PhoenixLink>
                      <PhoenixLink href="/modules/utilities/vertical-align" className="dropdown-link">
Vertical align
                      </PhoenixLink>
                      <PhoenixLink href="/modules/utilities/visibility" className="dropdown-link">
Visibility
                      </PhoenixLink>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a href="#!" className="nav-link dropdown-toggle lh-1"  role="button" data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"} aria-haspopup="true" aria-expanded="false">
              <span className="uil fs-8 me-2 uil-document-layout-right">              </span>Documentation
            </a>
            <ul className="dropdown-menu navbar-dropdown-caret">
              <li>
                <PhoenixLink href="/documentation/getting-started" className="dropdown-item">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" data-feather={"life-buoy"}>                    </span>
Getting started 
                  </div>
                </PhoenixLink>
              </li>
              <li className="dropdown dropdown-inside">
                <a href="#" className="dropdown-item dropdown-toggle" id="customization"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                    </span>
                    <span>
                      <span className="me-2 uil" data-feather={"settings"}>                      </span>
Customization
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <PhoenixLink href="/documentation/customization/configuration" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Configuration 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/documentation/customization/styling" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Styling 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/documentation/customization/color" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Color 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/documentation/customization/dark-mode" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Dark mode 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/documentation/customization/plugin" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Plugin 
                      </div>
                    </PhoenixLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-inside">
                <a href="#" className="dropdown-item dropdown-toggle" id="layouts-doc"  data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"}>
                  <div className="dropdown-item-wrapper">
                    <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon">                    </span>
                    <span>
                      <span className="me-2 uil" data-feather={"table"}>                      </span>
Layouts doc
                    </span>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <PhoenixLink href="/documentation/layouts/vertical-navbar" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Vertical navbar 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/documentation/layouts/horizontal-navbar" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Horizontal navbar 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/documentation/layouts/combo-navbar" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Combo navbar 
                      </div>
                    </PhoenixLink>
                  </li>
                  <li>
                    <PhoenixLink href="/documentation/layouts/dual-nav" className="dropdown-item">
                      <div className="dropdown-item-wrapper">
                        <span className="me-2 uil">                        </span>
Dual nav 
                      </div>
                    </PhoenixLink>
                  </li>
                </ul>
              </li>
              <li>
                <PhoenixLink href="/documentation/gulp" className="dropdown-item">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 fa-brands fa-gulp ms-1 me-1 fa-lg">                    </span>
Gulp 
                  </div>
                </PhoenixLink>
              </li>
              <li>
                <PhoenixLink href="/documentation/design-file" className="dropdown-item">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" data-feather={"figma"}>                    </span>
Design file 
                  </div>
                </PhoenixLink>
              </li>
              <li>
                <PhoenixLink href="/changelog" className="dropdown-item">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" data-feather={"git-merge"}>                    </span>
Changelog 
                  </div>
                </PhoenixLink>
              </li>
              <li>
                <PhoenixLink href="/showcase" className="dropdown-item">
                  <div className="dropdown-item-wrapper">
                    <span className="me-2 uil" data-feather={"monitor"}>                    </span>
Showcase 
                  </div>
                </PhoenixLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav navbar-nav-icons flex-row">
        <li className="nav-item">
          <div className="theme-control-toggle fa-ion-wait pe-2 theme-control-toggle-slim">
            <input className="form-check-input ms-0 theme-control-toggle-input" id="themeControlToggle" type="checkbox" data-theme-control={"phoenixTheme"} defaultValue="dark" />
            <label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggle" data-bs-toggle={"tooltip"} data-bs-placement={"left"} title="Switch theme">
              <span className="d-none d-sm-flex flex-center" style={{"height":"16px","width":"16px"} as CSSProperties}>
                <span className="me-1 icon" data-feather={"moon"}>                </span>
              </span>
              <span className="fs-9 fw-bold">
Dark
              </span>
            </label>
            <label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggle" data-bs-toggle={"tooltip"} data-bs-placement={"left"} title="Switch theme">
              <span className="d-none d-sm-flex flex-center" style={{"height":"16px","width":"16px"} as CSSProperties}>
                <span className="me-1 icon" data-feather={"sun"}>                </span>
              </span>
              <span className="fs-9 fw-bold">
Light
              </span>
            </label>
          </div>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link"  data-bs-toggle={"modal"} data-bs-target={"#searchBoxModal"}>
            <span className="d-inline-block" style={{"height":"12px","width":"12px"} as CSSProperties}>
              <span data-feather={"search"} style={{"height":"12px","width":"12px"} as CSSProperties}>              </span>
            </span>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a href="#" className="nav-link" id="navbarDropdownNotification"  role="button" data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"} aria-haspopup="true" aria-expanded="false">
            <span className="d-inline-block" style={{"height":"12px","width":"12px"} as CSSProperties}>
              <span data-feather={"bell"} style={{"height":"12px","width":"12px"} as CSSProperties}>              </span>
            </span>
          </a>
          <div className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret" id="navbarDropdownNotfication" aria-labelledby="navbarDropdownNotfication">
            <div className="card position-relative border-0">
              <div className="card-header p-2">
                <div className="d-flex justify-content-between">
                  <h5 className="text-body-emphasis mb-0">
Notifications
                  </h5>
                  <button className="btn btn-link p-0 fs-9 fw-normal" type="button">
Mark all as read
                  </button>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="scrollbar-overlay" style={{"height":"27rem"} as CSSProperties}>
                  <div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
                    <div className="d-flex align-items-center justify-content-between position-relative">
                      <div className="d-flex">
                        <div className="avatar avatar-m status-online me-3">
                          <PhoenixImage src="/assets/img/team/40x40/30.webp" alt="" className="rounded-circle" />
                        </div>
                        <div className="flex-1 me-sm-3">
                          <h4 className="fs-9 text-body-emphasis">
Jessie Samson
                          </h4>
                          <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                            <span className="me-1 fs-10">
💬
                            </span>
Mentioned you in a comment.
                            <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
10m
                            </span>
                          </p>
                          <p className="text-body-secondary fs-9 mb-0">
                            <span className="me-1 fas fa-clock">                            </span>
                            <span className="fw-bold">
10:41 AM 
                            </span>
August 7,2021
                          </p>
                        </div>
                      </div>
                      <div className="dropdown notification-dropdown">
                        <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                          <span className="fas fa-ellipsis-h fs-10 text-body">                          </span>
                        </button>
                        <div className="dropdown-menu py-2">
                          <a href="#!" className="dropdown-item">
Mark as unread
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                    <div className="d-flex align-items-center justify-content-between position-relative">
                      <div className="d-flex">
                        <div className="avatar avatar-m status-online me-3">
                          <div className="avatar-name rounded-circle">
                            <span>
J
                            </span>
                          </div>
                        </div>
                        <div className="flex-1 me-sm-3">
                          <h4 className="fs-9 text-body-emphasis">
Jane Foster
                          </h4>
                          <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                            <span className="me-1 fs-10">
📅
                            </span>
Created an event.
                            <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
20m
                            </span>
                          </p>
                          <p className="text-body-secondary fs-9 mb-0">
                            <span className="me-1 fas fa-clock">                            </span>
                            <span className="fw-bold">
10:20 AM 
                            </span>
August 7,2021
                          </p>
                        </div>
                      </div>
                      <div className="dropdown notification-dropdown">
                        <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                          <span className="fas fa-ellipsis-h fs-10 text-body">                          </span>
                        </button>
                        <div className="dropdown-menu py-2">
                          <a href="#!" className="dropdown-item">
Mark as unread
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                    <div className="d-flex align-items-center justify-content-between position-relative">
                      <div className="d-flex">
                        <div className="avatar avatar-m status-online me-3">
                          <PhoenixImage src="/assets/img/team/40x40/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                        </div>
                        <div className="flex-1 me-sm-3">
                          <h4 className="fs-9 text-body-emphasis">
Jessie Samson
                          </h4>
                          <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                            <span className="me-1 fs-10">
👍
                            </span>
Liked your comment.
                            <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
1h
                            </span>
                          </p>
                          <p className="text-body-secondary fs-9 mb-0">
                            <span className="me-1 fas fa-clock">                            </span>
                            <span className="fw-bold">
9:30 AM 
                            </span>
August 7,2021
                          </p>
                        </div>
                      </div>
                      <div className="dropdown notification-dropdown">
                        <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                          <span className="fas fa-ellipsis-h fs-10 text-body">                          </span>
                        </button>
                        <div className="dropdown-menu py-2">
                          <a href="#!" className="dropdown-item">
Mark as unread
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                    <div className="d-flex align-items-center justify-content-between position-relative">
                      <div className="d-flex">
                        <div className="avatar avatar-m status-online me-3">
                          <PhoenixImage src="/assets/img/team/40x40/57.webp" alt="" className="rounded-circle" />
                        </div>
                        <div className="flex-1 me-sm-3">
                          <h4 className="fs-9 text-body-emphasis">
Kiera Anderson
                          </h4>
                          <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                            <span className="me-1 fs-10">
💬
                            </span>
Mentioned you in a comment.
                            <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">                            </span>
                          </p>
                          <p className="text-body-secondary fs-9 mb-0">
                            <span className="me-1 fas fa-clock">                            </span>
                            <span className="fw-bold">
9:11 AM 
                            </span>
August 7,2021
                          </p>
                        </div>
                      </div>
                      <div className="dropdown notification-dropdown">
                        <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                          <span className="fas fa-ellipsis-h fs-10 text-body">                          </span>
                        </button>
                        <div className="dropdown-menu py-2">
                          <a href="#!" className="dropdown-item">
Mark as unread
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                    <div className="d-flex align-items-center justify-content-between position-relative">
                      <div className="d-flex">
                        <div className="avatar avatar-m status-online me-3">
                          <PhoenixImage src="/assets/img/team/40x40/59.webp" alt="" className="rounded-circle" />
                        </div>
                        <div className="flex-1 me-sm-3">
                          <h4 className="fs-9 text-body-emphasis">
Herman Carter
                          </h4>
                          <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                            <span className="me-1 fs-10">
👤
                            </span>
Tagged you in a comment.
                            <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">                            </span>
                          </p>
                          <p className="text-body-secondary fs-9 mb-0">
                            <span className="me-1 fas fa-clock">                            </span>
                            <span className="fw-bold">
10:58 PM 
                            </span>
August 7,2021
                          </p>
                        </div>
                      </div>
                      <div className="dropdown notification-dropdown">
                        <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                          <span className="fas fa-ellipsis-h fs-10 text-body">                          </span>
                        </button>
                        <div className="dropdown-menu py-2">
                          <a href="#!" className="dropdown-item">
Mark as unread
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-2 px-sm-3 py-3 notification-card position-relative read ">
                    <div className="d-flex align-items-center justify-content-between position-relative">
                      <div className="d-flex">
                        <div className="avatar avatar-m status-online me-3">
                          <PhoenixImage src="/assets/img/team/40x40/58.webp" alt="" className="rounded-circle" />
                        </div>
                        <div className="flex-1 me-sm-3">
                          <h4 className="fs-9 text-body-emphasis">
Benjamin Button
                          </h4>
                          <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                            <span className="me-1 fs-10">
👍
                            </span>
Liked your comment.
                            <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">                            </span>
                          </p>
                          <p className="text-body-secondary fs-9 mb-0">
                            <span className="me-1 fas fa-clock">                            </span>
                            <span className="fw-bold">
10:18 AM 
                            </span>
August 7,2021
                          </p>
                        </div>
                      </div>
                      <div className="dropdown notification-dropdown">
                        <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                          <span className="fas fa-ellipsis-h fs-10 text-body">                          </span>
                        </button>
                        <div className="dropdown-menu py-2">
                          <a href="#!" className="dropdown-item">
Mark as unread
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer p-0 border-top border-translucent border-0">
                <div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85">
                  <PhoenixLink href="/pages/notifications" className="fw-bolder">
Notification history
                  </PhoenixLink>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a href="#" className="nav-link" id="navbarDropdownNindeDots"  role="button" data-bs-toggle={"dropdown"} aria-haspopup="true" data-bs-auto-close={"outside"} aria-expanded="false">
            <svg width={10} height={10} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2" cy="2" r="2" fill="currentColor">              </circle>
              <circle cx="2" cy="8" r="2" fill="currentColor">              </circle>
              <circle cx="2" cy="14" r="2" fill="currentColor">              </circle>
              <circle cx="8" cy="8" r="2" fill="currentColor">              </circle>
              <circle cx="8" cy="14" r="2" fill="currentColor">              </circle>
              <circle cx="14" cy="8" r="2" fill="currentColor">              </circle>
              <circle cx="14" cy="14" r="2" fill="currentColor">              </circle>
              <circle cx="8" cy="2" r="2" fill="currentColor">              </circle>
              <circle cx="14" cy="2" r="2" fill="currentColor">              </circle>
            </svg>
          </a>
          <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nine-dots shadow border" aria-labelledby="navbarDropdownNindeDots">
            <div className="card bg-body-emphasis position-relative border-0">
              <div className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar" style={{"height":"20rem"} as CSSProperties}>
                <div className="row text-center align-items-center gx-0 gy-0">
                  <div className="col-4">
                    <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                      <PhoenixImage src="/assets/img/nav-icons/behance.webp" alt="" width={30} />                      <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Behance
                      </p>
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                      <PhoenixImage src="/assets/img/nav-icons/google-cloud.webp" alt="" width={30} />                      <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Cloud
                      </p>
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                      <PhoenixImage src="/assets/img/nav-icons/slack.webp" alt="" width={30} />                      <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Slack
                      </p>
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                      <PhoenixImage src="/assets/img/nav-icons/gitlab.webp" alt="" width={30} />                      <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Gitlab
                      </p>
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                      <PhoenixImage src="/assets/img/nav-icons/bitbucket.webp" alt="" width={30} />                      <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
BitBucket
                      </p>
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                      <PhoenixImage src="/assets/img/nav-icons/google-drive.webp" alt="" width={30} />                      <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Drive
                      </p>
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                      <PhoenixImage src="/assets/img/nav-icons/trello.webp" alt="" width={30} />                      <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Trello
                      </p>
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                      <PhoenixImage src="/assets/img/nav-icons/figma.webp" alt="" width={20} />                      <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Figma
                      </p>
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                      <PhoenixImage src="/assets/img/nav-icons/twitter.webp" alt="" width={30} />                      <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Twitter
                      </p>
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                      <PhoenixImage src="/assets/img/nav-icons/pinterest.webp" alt="" width={30} />                      <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Pinterest
                      </p>
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                      <PhoenixImage src="/assets/img/nav-icons/ln.webp" alt="" width={30} />                      <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Linkedin
                      </p>
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                      <PhoenixImage src="/assets/img/nav-icons/google-maps.webp" alt="" width={30} />                      <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Maps
                      </p>
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                      <PhoenixImage src="/assets/img/nav-icons/google-photos.webp" alt="" width={30} />                      <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Photos
                      </p>
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                      <PhoenixImage src="/assets/img/nav-icons/spotify.webp" alt="" width={30} />                      <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Spotify
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a href="#!" className="nav-link lh-1 pe-0 white-space-nowrap" id="navbarDropdownUser"  role="button" data-bs-toggle={"dropdown"} aria-haspopup="true" data-bs-auto-close={"outside"} aria-expanded="false">
Olivia             <span className="d-inline-block" style={{"height":"10.2px","width":"10.2px"} as CSSProperties}>
              <span className="fa-solid fa-chevron-down fs-10">              </span>
            </span>
          </a>
          <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border" aria-labelledby="navbarDropdownUser">
            <div className="card position-relative border-0">
              <div className="card-body p-0">
                <div className="text-center pt-4 pb-3">
                  <div className="avatar avatar-xl ">
                    <PhoenixImage src="/assets/img/team/72x72/57.webp" alt="" className="rounded-circle " />
                  </div>
                  <h6 className="mt-2 text-body-emphasis">
Jerry Seinfield
                  </h6>
                </div>
                <div className="mb-3 mx-3">
                  <input className="form-control form-control-sm" id="statusUpdateInput" type="text" placeholder="Update your status" />
                </div>
              </div>
              <div className="overflow-auto scrollbar" style={{"height":"10rem"} as CSSProperties}>
                <ul className="nav d-flex flex-column mb-2 pb-1">
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-block">
                      <span className="me-2 text-body align-bottom" data-feather={"user"}>                      </span>                      <span>
Profile
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-block">
                      <span className="me-2 text-body align-bottom" data-feather={"pie-chart"}>                      </span>Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-block">
                      <span className="me-2 text-body align-bottom" data-feather={"lock"}>                      </span>{"Posts & Activity"}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-block">
                      <span className="me-2 text-body align-bottom" data-feather={"settings"}>                      </span>{"Settings & Privacy "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-block">
                      <span className="me-2 text-body align-bottom" data-feather={"help-circle"}>                      </span>Help Center
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-block">
                      <span className="me-2 text-body align-bottom" data-feather={"globe"}>                      </span>Language
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-footer p-0 border-top border-translucent">
                <ul className="nav d-flex flex-column my-3">
                  <li className="nav-item">
                    <a href="#!" className="nav-link px-3 d-block">
                      <span className="me-2 text-body align-bottom" data-feather={"user-plus"}>                      </span>Add another account
                    </a>
                  </li>
                </ul>
                <hr />
                <div className="px-3">
                  <a href="#!" className="btn btn-phoenix-secondary d-flex flex-center w-100">
                    <span className="me-2" data-feather={"log-out"}>                    </span>Sign out
                  </a>
                </div>
                <div className="my-2 text-center fw-bold fs-10 text-body-quaternary">
                  <a href="#!" className="text-body-quaternary me-1">
Privacy policy
                  </a>
•
                  <a href="#!" className="text-body-quaternary mx-1">
Terms
                  </a>
•
                  <a href="#!" className="text-body-quaternary ms-1">
Cookies
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>

    <div className="content">
      <div className="row gy-3 mb-6 justify-content-between">
        <div className="col-md-9 col-auto">
          <h2 className="mb-2 text-body-emphasis">
Projects Dashboard
          </h2>
          <h5 className="text-body-tertiary fw-semibold">
Here’s what’s going on at your business right now
          </h5>
        </div>
        <div className="col-md-3 col-auto">
          <div className="flatpickr-input-container">
            <input className="form-control ps-6 datetimepicker" id="datepicker" type="text" data-options={"{\"dateFormat\":\"M j, Y\",\"disableMobile\":true,\"defaultDate\":\"Mar 1, 2022\"}"} />
            <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary">            </span>
          </div>
        </div>
      </div>
      <div className="row mb-3 gy-6">
        <div className="col-12 col-xxl-2">
          <div className="row align-items-center g-3 g-xxl-0 h-100 align-content-between">
            <div className="col-12 col-sm-6 col-md-3 col-lg-6 col-xl-3 col-xxl-12">
              <div className="d-flex align-items-center">
                <span className="fs-4 lh-1 uil uil-books text-primary-dark">                </span>
                <div className="ms-2">
                  <div className="d-flex align-items-end">
                    <h2 className="mb-0 me-2">
32
                    </h2>
                    <span className="fs-7 fw-semibold text-body">
Projects
                    </span>
                  </div>
                  <p className="text-body-secondary fs-9 mb-0">
Awating processing
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 col-lg-6 col-xl-3 col-xxl-12">
              <div className="d-flex align-items-center">
                <span className="fs-4 lh-1 uil uil-users-alt text-success-dark">                </span>
                <div className="ms-2">
                  <div className="d-flex align-items-end">
                    <h2 className="mb-0 me-2">
94
                    </h2>
                    <span className="fs-7 fw-semibold text-body">
Members
                    </span>
                  </div>
                  <p className="text-body-secondary fs-9 mb-0">
Working hard
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 col-lg-6 col-xl-3 col-xxl-12">
              <div className="d-flex align-items-center">
                <span className="fs-4 lh-1 uil uil-invoice text-warning-dark">                </span>
                <div className="ms-2">
                  <div className="d-flex align-items-end">
                    <h2 className="mb-0 me-2">
23
                    </h2>
                    <span className="fs-7 fw-semibold text-body">
Invoices
                    </span>
                  </div>
                  <p className="text-body-secondary fs-9 mb-0">
Soon to be cleared
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 col-lg-6 col-xl-3 col-xxl-12">
              <div className="d-flex align-items-center">
                <span className="fs-4 lh-1 uil uil-refresh text-danger-dark">                </span>
                <div className="ms-2">
                  <div className="d-flex align-items-end">
                    <h2 className="mb-0 me-2">
3
                    </h2>
                    <span className="fs-7 fw-semibold text-body">
Refunds
                    </span>
                  </div>
                  <p className="text-body-secondary fs-9 mb-0">
Fresh start
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6 col-xxl-5">
          <div className="mx-xxl-0">
            <h3>
Project: zero Roadmap
            </h3>
            <p className="text-body-tertiary">
Phase 2 is now ongoing
            </p>
            <div className="gantt-zero-roadmap">
              <div className="row g-2 flex-between-center mb-3">
                <div className="col-12 col-sm-auto">
                  <div className="d-flex">
                    <div className="d-flex align-items-end me-3">
                      <label className="form-check-label mb-0 me-2 lh-1 text-body" htmlFor="progress">
Progress
                      </label>
                      <div className="form-check form-switch min-h-auto mb-0">
                        <input className="form-check-input" id="progress" type="checkbox" defaultChecked data-gantt-progress />
                      </div>
                    </div>
                    <div className="d-flex align-items-end flex-1">
                      <label className="form-check-label mb-0 me-2 lh-1 text-body" htmlFor="links">
Links
                      </label>
                      <div className="form-check form-switch min-h-auto flex-1 mb-0">
                        <input className="form-check-input" id="links" type="checkbox" defaultChecked data-gantt-links />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-auto">
                  <div className="btn-group" role="group" data-gantt-scale>
                    <input className="btn-check" id="weekView" type="radio" name="scaleView" defaultValue="week" defaultChecked />
                    <label className="btn btn-phoenix-secondary bg-body-highlight-hover fs-10 py-1 mb-0" htmlFor="weekView">
Week
                    </label>
                    <input className="btn-check" id="monthView" type="radio" name="scaleView" defaultValue="month" />
                    <label className="btn btn-phoenix-secondary bg-body-highlight-hover fs-10 py-1 mb-0" htmlFor="monthView">
Month
                    </label>
                    <input className="btn-check" id="yearView" type="radio" name="scaleView" defaultValue="year" />
                    <label className="btn btn-phoenix-secondary bg-body-highlight-hover fs-10 py-1 mb-0" htmlFor="yearView">
Year
                    </label>
                  </div>
                </div>
              </div>
              <div className="gantt-zero-roadmap-chart">              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6 col-xxl-5">
          <div className="card border h-100 w-100 overflow-hidden">
            <div className="bg-holder d-block bg-card" style={{"backgroundImage":"url(../assets/img/spot-illustrations/32.png)","backgroundPosition":"top right"} as CSSProperties}>            </div>
            <div className="d-dark-none">
              <div className="bg-holder d-none d-sm-block d-xl-none d-xxl-block bg-card" style={{"backgroundImage":"url(../assets/img/spot-illustrations/21.png)","backgroundPosition":"bottom right","backgroundSize":"auto"} as CSSProperties}>              </div>
            </div>
            <div className="d-light-none">
              <div className="bg-holder d-none d-sm-block d-xl-none d-xxl-block bg-card" style={{"backgroundImage":"url(../assets/img/spot-illustrations/dark_21.png)","backgroundPosition":"bottom right","backgroundSize":"auto"} as CSSProperties}>              </div>
            </div>
            <div className="card-body px-5 position-relative">
              <div className="badge badge-phoenix fs-10 badge-phoenix-warning mb-4">
                <span className="fw-bold">
Coming soon
                </span>
                <span className="fa-solid fa-award ms-1">                </span>
              </div>
              <h3 className="mb-5">
Early bird gets the warm leads!
              </h3>
              <p className="text-body-tertiary fw-semibold">
Phoenix CRM Dashboard is coming to 
                <br className="d-none d-sm-block" />
market soon for fulfilling your every 
                <br className="d-none d-sm-block" />
CRM related needs. 
              </p>
            </div>
            <div className="card-footer border-0 py-0 px-5 z-1">
              <p className="text-body-tertiary fw-semibold">
Follow 
                <a href="https://themewagon.com/">
ThemeWagon 
                </a>
at 
                <br className="d-none d-xxl-block" />
Bootstrap Marketplace for updates.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis pt-7 pb-3 border-y">
        <div className="row">
          <div className="col-12 col-xl-7 col-xxl-6">
            <div className="row g-3 mb-3">
              <div className="col-12 col-md-6">
                <h3 className="text-body-emphasis text-nowrap">
Issues Discovered
                </h3>
                <p className="text-body-tertiary mb-md-7">
Newly found and yet to be solved
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="mb-0 fw-bold">
Issue type 
                  </p>
                  <p className="mb-0 fs-9">
Total count 
                    <span className="fw-bold">
257
                    </span>
                  </p>
                </div>
                <hr className="bg-body-secondary mb-2 mt-2" />
                <div className="d-flex align-items-center mb-1">
                  <span className="d-inline-block bg-info-light bullet-item me-2">                  </span>
                  <p className="mb-0 fw-semibold text-body lh-sm flex-1">
Product design
                  </p>
                  <h5 className="mb-0 text-body">
78
                  </h5>
                </div>
                <div className="d-flex align-items-center mb-1">
                  <span className="d-inline-block bg-warning-light bullet-item me-2">                  </span>
                  <p className="mb-0 fw-semibold text-body lh-sm flex-1">
Development
                  </p>
                  <h5 className="mb-0 text-body">
63
                  </h5>
                </div>
                <div className="d-flex align-items-center mb-1">
                  <span className="d-inline-block bg-danger-light bullet-item me-2">                  </span>
                  <p className="mb-0 fw-semibold text-body lh-sm flex-1">
{"QA & Testing"}
                  </p>
                  <h5 className="mb-0 text-body">
56
                  </h5>
                </div>
                <div className="d-flex align-items-center mb-1">
                  <span className="d-inline-block bg-success-light bullet-item me-2">                  </span>
                  <p className="mb-0 fw-semibold text-body lh-sm flex-1">
Customer queries
                  </p>
                  <h5 className="mb-0 text-body">
36
                  </h5>
                </div>
                <div className="d-flex align-items-center">
                  <span className="d-inline-block bg-primary bullet-item me-2">                  </span>
                  <p className="mb-0 fw-semibold text-body lh-sm flex-1">
{"R & D"}
                  </p>
                  <h5 className="mb-0 text-body">
24
                  </h5>
                </div>
                <button className="btn btn-outline-primary mt-5">
See Details
                  <span className="fas fa-angle-right ms-2 fs-10 text-center">                  </span>
                </button>
              </div>
              <div className="col-12 col-md-6">
                <div className="position-relative mb-sm-4 mb-xl-0">
                  <div className="echart-issue-chart" style={{"minHeight":"390px","width":"100%"} as CSSProperties}>                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-5 col-xxl-6">
            <h3>
Project: eleven Progress
            </h3>
            <p className="text-body-tertiary mb-0 mb-xl-3">
{"Deadline & progress"}
            </p>
            <div className="echart-zero-burnout-chart" style={{"minHeight":"320px","width":"100%"} as CSSProperties}>            </div>
          </div>
        </div>
      </div>
      <div className="mx-lg-n4 mt-3">
        <div className="row g-3">
          <div className="col-12 col-xl-6 col-xxl-7">
            <div className="card todo-list h-100">
              <div className="card-header border-bottom-0 pb-0">
                <div className="row justify-content-between align-items-center mb-4">
                  <div className="col-auto">
                    <h3 className="text-body-emphasis">
To do
                    </h3>
                    <p className="mb-2 mb-md-0 mb-lg-2 text-body-tertiary">
Task assigned to me
                    </p>
                  </div>
                  <div className="col-auto w-100 w-md-auto">
                    <div className="row align-items-center g-0 justify-content-between">
                      <div className="col-12 col-sm-auto">
                        <div className="search-box w-100 mb-2 mb-sm-0" style={{"maxWidth":"30rem"} as CSSProperties}>
                          <form className="position-relative">
                            <input className="form-control search-input search" type="search" placeholder="Search tasks" aria-label="Search" />
                            <span className="fas fa-search search-box-icon">                            </span>
                          </form>
                        </div>
                      </div>
                      <div className="col-auto d-flex">
                        <p className="mb-0 ms-sm-3 fs-9 text-body-tertiary fw-bold">
                          <span className="fas fa-filter me-1 fw-extra-bold fs-10">                          </span>
23 tasks
                        </p>
                        <button className="btn btn-link p-0 ms-3 fs-9 text-primary fw-bold">
                          <span className="fas fa-sort me-1 fw-extra-bold fs-10">                          </span>
Sorting
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body py-0 scrollbar to-do-list-body">
                <div className="d-flex hover-actions-trigger py-3 border-translucent border-top">
                  <input className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-0" data-event-propagation-prevent />
                  <div className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer" data-bs-toggle={"modal"} data-bs-target={"#exampleModal"}>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                        <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
Designing the dungeon
                        </label>
                        <span className="badge badge-phoenix ms-auto fs-10 badge-phoenix-primary">
DRAFT
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="d-flex lh-1 align-items-center">
                        <a href="#!" className="text-body-tertiary fw-bold fs-10 me-2">
                          <span className="fas fa-paperclip me-1">                          </span>2
                        </a>
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
12 Nov, 2021
                        </p>
                        <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                          <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
12:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties} data-event-propagation-prevent>
                    <div className="hover-actions end-0" data-event-propagation-prevent>
                      <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1" data-event-propagation-prevent>
                        <span className="fas fa-edit">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0" data-event-propagation-prevent>
                        <span className="fas fa-trash">                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex hover-actions-trigger py-3 border-translucent border-top">
                  <input className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-1" data-event-propagation-prevent />
                  <div className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer" data-bs-toggle={"modal"} data-bs-target={"#exampleModal"}>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                        <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
Hiring a motion graphic designer
                        </label>
                        <span className="badge badge-phoenix ms-auto fs-10 badge-phoenix-warning">
URGENT
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="d-flex lh-1 align-items-center">
                        <a href="#!" className="text-body-tertiary fw-bold fs-10 me-2">
                          <span className="fas fa-paperclip me-1">                          </span>2
                        </a>
                        <a href="#!" className="text-warning fw-bold fs-10 me-2">
                          <span className="fas fa-tasks me-1">                          </span>3
                        </a>
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
12 Nov, 2021
                        </p>
                        <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                          <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
12:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties} data-event-propagation-prevent>
                    <div className="hover-actions end-0" data-event-propagation-prevent>
                      <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1" data-event-propagation-prevent>
                        <span className="fas fa-edit">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0" data-event-propagation-prevent>
                        <span className="fas fa-trash">                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex hover-actions-trigger py-3 border-translucent border-top">
                  <input className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-2" data-event-propagation-prevent />
                  <div className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer" data-bs-toggle={"modal"} data-bs-target={"#exampleModal"}>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                        <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
Daily Meetings Purpose, participants
                        </label>
                        <span className="badge badge-phoenix ms-auto fs-10 badge-phoenix-info">
ON PROCESS
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="d-flex lh-1 align-items-center">
                        <a href="#!" className="text-body-tertiary fw-bold fs-10 me-2">
                          <span className="fas fa-paperclip me-1">                          </span>4
                        </a>
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
12 Dec, 2021
                        </p>
                        <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                          <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
05:00 AM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties} data-event-propagation-prevent>
                    <div className="hover-actions end-0" data-event-propagation-prevent>
                      <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1" data-event-propagation-prevent>
                        <span className="fas fa-edit">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0" data-event-propagation-prevent>
                        <span className="fas fa-trash">                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex hover-actions-trigger py-3 border-translucent border-top">
                  <input className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-3" data-event-propagation-prevent />
                  <div className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer" data-bs-toggle={"modal"} data-bs-target={"#exampleModal"}>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                        <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
Finalizing the geometric shapes
                        </label>
                      </div>
                    </div>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="d-flex lh-1 align-items-center">
                        <a href="#!" className="text-body-tertiary fw-bold fs-10 me-2">
                          <span className="fas fa-paperclip me-1">                          </span>3
                        </a>
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
12 Nov, 2021
                        </p>
                        <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                          <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
12:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties} data-event-propagation-prevent>
                    <div className="hover-actions end-0" data-event-propagation-prevent>
                      <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1" data-event-propagation-prevent>
                        <span className="fas fa-edit">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0" data-event-propagation-prevent>
                        <span className="fas fa-trash">                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex hover-actions-trigger py-3 border-translucent border-top">
                  <input className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-4" data-event-propagation-prevent />
                  <div className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer" data-bs-toggle={"modal"} data-bs-target={"#exampleModal"}>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                        <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
Daily meeting with team members
                        </label>
                      </div>
                    </div>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="d-flex lh-1 align-items-center">
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
1 Nov, 2021
                        </p>
                        <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                          <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
12:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties} data-event-propagation-prevent>
                    <div className="hover-actions end-0" data-event-propagation-prevent>
                      <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1" data-event-propagation-prevent>
                        <span className="fas fa-edit">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0" data-event-propagation-prevent>
                        <span className="fas fa-trash">                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex hover-actions-trigger py-3 border-translucent border-top">
                  <input className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-5" data-event-propagation-prevent />
                  <div className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer" data-bs-toggle={"modal"} data-bs-target={"#exampleModal"}>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                        <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
Daily Standup Meetings
                        </label>
                      </div>
                    </div>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="d-flex lh-1 align-items-center">
                        <a href="#!" className="text-warning fw-bold fs-10 me-2">
                          <span className="fas fa-tasks me-1">                          </span>4
                        </a>
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
13 Nov, 2021
                        </p>
                        <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                          <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
10:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties} data-event-propagation-prevent>
                    <div className="hover-actions end-0" data-event-propagation-prevent>
                      <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1" data-event-propagation-prevent>
                        <span className="fas fa-edit">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0" data-event-propagation-prevent>
                        <span className="fas fa-trash">                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex hover-actions-trigger py-3 border-translucent border-top">
                  <input className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-6" data-event-propagation-prevent />
                  <div className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer" data-bs-toggle={"modal"} data-bs-target={"#exampleModal"}>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                        <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
Procrastinate for a month
                        </label>
                        <span className="badge badge-phoenix ms-auto fs-10 badge-phoenix-info">
ON PROCESS
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="d-flex lh-1 align-items-center">
                        <a href="#!" className="text-body-tertiary fw-bold fs-10 me-2">
                          <span className="fas fa-paperclip me-1">                          </span>3
                        </a>
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
12 Nov, 2021
                        </p>
                        <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                          <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
12:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties} data-event-propagation-prevent>
                    <div className="hover-actions end-0" data-event-propagation-prevent>
                      <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1" data-event-propagation-prevent>
                        <span className="fas fa-edit">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0" data-event-propagation-prevent>
                        <span className="fas fa-trash">                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex hover-actions-trigger py-3 border-translucent border-top">
                  <input className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-7" data-event-propagation-prevent />
                  <div className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer" data-bs-toggle={"modal"} data-bs-target={"#exampleModal"}>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                        <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
warming up
                        </label>
                        <span className="badge badge-phoenix ms-auto fs-10 badge-phoenix-secondary">
CLOSE
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="d-flex lh-1 align-items-center">
                        <a href="#!" className="text-body-tertiary fw-bold fs-10 me-2">
                          <span className="fas fa-paperclip me-1">                          </span>3
                        </a>
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
12 Nov, 2021
                        </p>
                        <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                          <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
12:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties} data-event-propagation-prevent>
                    <div className="hover-actions end-0" data-event-propagation-prevent>
                      <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1" data-event-propagation-prevent>
                        <span className="fas fa-edit">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0" data-event-propagation-prevent>
                        <span className="fas fa-trash">                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex hover-actions-trigger py-3 border-translucent border-top">
                  <input className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-8" data-event-propagation-prevent />
                  <div className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer" data-bs-toggle={"modal"} data-bs-target={"#exampleModal"}>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                        <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
Make ready for release
                        </label>
                      </div>
                    </div>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="d-flex lh-1 align-items-center">
                        <a href="#!" className="text-body-tertiary fw-bold fs-10 me-2">
                          <span className="fas fa-paperclip me-1">                          </span>2
                        </a>
                        <a href="#!" className="text-warning fw-bold fs-10 me-2">
                          <span className="fas fa-tasks me-1">                          </span>2
                        </a>
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
2o Nov, 2021
                        </p>
                        <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                          <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
1:00 AM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties} data-event-propagation-prevent>
                    <div className="hover-actions end-0" data-event-propagation-prevent>
                      <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1" data-event-propagation-prevent>
                        <span className="fas fa-edit">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0" data-event-propagation-prevent>
                        <span className="fas fa-trash">                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex hover-actions-trigger py-3 border-translucent border-top">
                  <input className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-9" data-event-propagation-prevent />
                  <div className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer" data-bs-toggle={"modal"} data-bs-target={"#exampleModal"}>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                        <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
Modify the component
                        </label>
                      </div>
                    </div>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="d-flex lh-1 align-items-center">
                        <a href="#!" className="text-body-tertiary fw-bold fs-10 me-2">
                          <span className="fas fa-paperclip me-1">                          </span>4
                        </a>
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
22 Nov, 2021
                        </p>
                        <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                          <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
1:00 AM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties} data-event-propagation-prevent>
                    <div className="hover-actions end-0" data-event-propagation-prevent>
                      <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1" data-event-propagation-prevent>
                        <span className="fas fa-edit">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0" data-event-propagation-prevent>
                        <span className="fas fa-trash">                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex hover-actions-trigger py-3 border-translucent border-top border-bottom">
                  <input className="form-check-input form-check-input-todolist flex-shrink-0 my-1 me-2 form-check-input-undefined" type="checkbox" id="checkbox-todo-10" data-event-propagation-prevent />
                  <div className="row justify-content-between align-items-md-center btn-reveal-trigger border-translucent gx-0 flex-1 cursor-pointer" data-bs-toggle={"modal"} data-bs-target={"#exampleModal"}>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="mb-1 mb-md-0 d-flex align-items-center lh-1">
                        <label className="form-check-label mb-1 mb-md-0 mb-xl-1 mb-xxl-0 fs-8 me-2 line-clamp-1 text-body cursor-pointer">
Delete overlapping tasks and articles
                        </label>
                        <span className="badge badge-phoenix ms-auto fs-10 badge-phoenix-secondary">
CLOSE
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-md-auto col-xl-12 col-xxl-auto">
                      <div className="d-flex lh-1 align-items-center">
                        <a href="#!" className="text-body-tertiary fw-bold fs-10 me-2">
                          <span className="fas fa-paperclip me-1">                          </span>2
                        </a>
                        <p className="text-body-tertiary fs-10 mb-md-0 me-2 me-md-3 me-xl-2 me-xxl-3 mb-0">
25 Nov, 2021
                        </p>
                        <div className="hover-md-hide hover-xl-show hover-xxl-hide">
                          <p className="text-body-tertiary fs-10 fw-bold mb-md-0 mb-0 ps-md-3 ps-xl-0 ps-xxl-3 border-start-md border-xl-0 border-start-xxl">
1:00 AM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-block d-xl-none d-xxl-block end-0 position-absolute" style={{"top":"23%"} as CSSProperties} data-event-propagation-prevent>
                    <div className="hover-actions end-0" data-event-propagation-prevent>
                      <button className="btn btn-phoenix-secondary btn-icon me-1 fs-10 text-body px-0 me-1" data-event-propagation-prevent>
                        <span className="fas fa-edit">                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary btn-icon fs-10 text-danger px-0" data-event-propagation-prevent>
                        <span className="fas fa-trash">                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-hidden="true">
                  <div className="modal-dialog modal-xl">
                    <div className="modal-content bg-body overflow-hidden">
                      <div className="modal-header justify-content-between px-6 py-5 pe-sm-5 px-md-6 dark__bg-gray-1100">
                        <h3 className="text-body-highlight fw-bolder mb-0">
Designing the Dungeon Blueprint
                        </h3>
                        <button className="btn btn-phoenix-secondary btn-icon btn-icon-xl flex-shrink-0" type="button" data-bs-dismiss={"modal"} aria-label="Close">
                          <span className="fa-solid fa-xmark">                          </span>
                        </button>
                      </div>
                      <div className="modal-body bg-body-highlight px-6 py-0">
                        <div className="row gx-14">
                          <div className="col-12 col-lg-7 border-end-lg">
                            <div className="py-6">
                              <div className="mb-7">
                                <div className="d-flex align-items-center mb-3">
                                  <h4 className="text-body me-3">
Description
                                  </h4>
                                  <a href="#!" className="btn btn-link text-decoration-none p-0">
                                    <span className="fa-solid fa-pen">                                    </span>
                                  </a>
                                </div>
                                <p className="text-body-highlight mb-0">
The female circus horse-rider is a recurring subject in Chagall’s work. In 1926 the art dealer Ambroise Vollard invited Chagall to make a project based on the circus. They visited Paris’s historic Cirque d’Hiver Bouglione together; Vollard lent Chagall his private box seats. Chagall completed 19 gouaches Chagall’s work. In 1926 the art dealer Ambroise Vollard invited Chagall to make a project based on the circus.
                                </p>
                              </div>
                              <div className="mb-7">
                                <h4 className="mb-3">
Subtasks
                                </h4>
                                <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top">
                                  <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                                    <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtaskundefined1" />
                                    <label className="form-check-label mb-0 fs-8" htmlFor="subtaskundefined1">
Study Dragons
                                    </label>
                                  </div>
                                  <div className="hover-actions end-0">
                                    <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                                      <span className="fa-solid fa-pencil">                                      </span>
                                    </button>
                                    <button className="btn btn-sm text-body-tertiary px-0">
                                      <span className="fa-solid fa-xmark fs-8">                                      </span>
                                    </button>
                                  </div>
                                </div>
                                <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top">
                                  <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                                    <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtaskundefined2" />
                                    <label className="form-check-label mb-0 fs-8" htmlFor="subtaskundefined2">
Procrastinate a bit
                                    </label>
                                  </div>
                                  <div className="hover-actions end-0">
                                    <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                                      <span className="fa-solid fa-pencil">                                      </span>
                                    </button>
                                    <button className="btn btn-sm text-body-tertiary px-0">
                                      <span className="fa-solid fa-xmark fs-8">                                      </span>
                                    </button>
                                  </div>
                                </div>
                                <div className="d-flex flex-between-center hover-actions-trigger py-3 border-top border-bottom mb-3">
                                  <div className="form-check mb-1 mb-md-0 d-flex align-items-center lh-1 min-h-auto">
                                    <input className="subtask-checkbox form-check-input form-check-line-through mt-0 me-3" type="checkbox" id="subtaskundefined3" />
                                    <label className="form-check-label mb-0 fs-8" htmlFor="subtaskundefined3">
Staring at the notebook for 5 mins
                                    </label>
                                  </div>
                                  <div className="hover-actions end-0">
                                    <button className="btn btn-sm me-1 fs-10 text-body-tertiary px-0 me-3">
                                      <span className="fa-solid fa-pencil">                                      </span>
                                    </button>
                                    <button className="btn btn-sm text-body-tertiary px-0">
                                      <span className="fa-solid fa-xmark fs-8">                                      </span>
                                    </button>
                                  </div>
                                </div>
                                <a href="#!" className="fw-bold fs-9">
                                  <span className="fas fa-plus me-1">                                  </span>Add subtask
                                </a>
                              </div>
                              <div className="mb-3">
                                <div>
                                  <h4 className="mb-3">
Files
                                  </h4>
                                </div>
                                <div className="border-top px-0 pt-4 pb-3">
                                  <div className="me-n3">
                                    <div className="d-flex flex-between-center">
                                      <div className="d-flex mb-1">
                                        <span className="fa-solid fa-image me-2 text-body-tertiary fs-9">                                        </span>
                                        <p className="text-body-highlight mb-0 lh-1">
Silly_sight_1.png
                                        </p>
                                      </div>
                                      <div className="btn-reveal-trigger">
                                        <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                          <span className="fas fa-ellipsis-h">                                          </span>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end py-2">
                                          <a href="#!" className="dropdown-item">
Edit
                                          </a>
                                          <a href="#!" className="dropdown-item text-danger">
Delete
                                          </a>
                                          <a href="#!" className="dropdown-item">
Download
                                          </a>
                                          <a href="#!" className="dropdown-item">
Report abuse
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="d-flex fs-9 text-body-tertiary mb-2 flex-wrap">
                                      <span>
768 kb
                                      </span>
                                      <span className="text-body-quaternary mx-1">
| 
                                      </span>
                                      <a href="#!">
Shantinan Mekalan 
                                      </a>
                                      <span className="text-body-quaternary mx-1">
| 
                                      </span>
                                      <span className="text-nowrap">
21st Dec, 12:56 PM
                                      </span>
                                    </div>
                                    <PhoenixImage src="/assets/img/generic/40.png" alt="" className="rounded-2" />
                                  </div>
                                </div>
                                <div className="border-top px-0 pt-4 pb-3">
                                  <div className="me-n3">
                                    <div className="d-flex flex-between-center">
                                      <div>
                                        <div className="d-flex align-items-center mb-1">
                                          <span className="fa-solid fa-image me-2 fs-9 text-body-tertiary">                                          </span>
                                          <p className="text-body-highlight mb-0 lh-1">
All_images.zip
                                          </p>
                                        </div>
                                        <div className="d-flex fs-9 text-body-tertiary mb-0 flex-wrap">
                                          <span>
12.8 mb
                                          </span>
                                          <span className="text-body-quaternary mx-1">
| 
                                          </span>
                                          <a href="#!">
Yves Tanguy 
                                          </a>
                                          <span className="text-body-quaternary mx-1">
| 
                                          </span>
                                          <span className="text-nowrap">
19th Dec, 08:56 PM
                                          </span>
                                        </div>
                                      </div>
                                      <div className="btn-reveal-trigger">
                                        <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                          <span className="fas fa-ellipsis-h">                                          </span>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end py-2">
                                          <a href="#!" className="dropdown-item">
Edit
                                          </a>
                                          <a href="#!" className="dropdown-item text-danger">
Delete
                                          </a>
                                          <a href="#!" className="dropdown-item">
Download
                                          </a>
                                          <a href="#!" className="dropdown-item">
Report abuse
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="border-top px-0 pt-4 pb-3 border-bottom">
                                  <div className="me-n3">
                                    <div className="d-flex flex-between-center">
                                      <div>
                                        <div className="d-flex align-items-center mb-1 flex-wrap">
                                          <span className="fa-solid fa-file-lines me-2 fs-9 text-body-tertiary">                                          </span>
                                          <p className="text-body-highlight mb-0 lh-1">
Project.txt
                                          </p>
                                        </div>
                                        <div className="d-flex fs-9 text-body-tertiary mb-0 flex-wrap">
                                          <span>
123 kb
                                          </span>
                                          <span className="text-body-quaternary mx-1">
| 
                                          </span>
                                          <a href="#!">
Shantinan Mekalan 
                                          </a>
                                          <span className="text-body-quaternary mx-1">
| 
                                          </span>
                                          <span className="text-nowrap">
12th Dec, 12:56 PM
                                          </span>
                                        </div>
                                      </div>
                                      <div className="btn-reveal-trigger">
                                        <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                                          <span className="fas fa-ellipsis-h">                                          </span>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end py-2">
                                          <a href="#!" className="dropdown-item">
Edit
                                          </a>
                                          <a href="#!" className="dropdown-item text-danger">
Delete
                                          </a>
                                          <a href="#!" className="dropdown-item">
Download
                                          </a>
                                          <a href="#!" className="dropdown-item">
Report abuse
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-3">
                                  <label className="btn btn-link p-0" htmlFor="customFile">
                                    <span className="fas fa-plus me-1">                                    </span>
Add file(s)
                                  </label>
                                  <input className="d-none" id="customFile" type="file" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-lg-5">
                            <div className="py-6">
                              <h4 className="mb-4 text-body-emphasis">
Others Information
                              </h4>
                              <h5 className="text-body-highlight mb-2">
Status
                              </h5>
                              <select className="form-select mb-4" aria-label="Default select example">
                                <option>
Select
                                </option>
                                <option value="1">
One
                                </option>
                                <option value="2">
Two
                                </option>
                                <option value="3">
Three
                                </option>
                              </select>
                              <h5 className="text-body-highlight mb-2">
Due Date
                              </h5>
                              <div className="flatpickr-input-container mb-4">
                                <input className="form-control datetimepicker ps-6" type="text" placeholder="Set the due date" data-options={"{\"disableMobile\":true}"} />
                                <span className="uil uil-calendar-alt flatpickr-icon text-body-tertiary">                                </span>
                              </div>
                              <h5 className="text-body-highlight mb-2">
Reminder
                              </h5>
                              <div className="flatpickr-input-container mb-4">
                                <input className="form-control datetimepicker ps-6" type="text" placeholder="Reminder" data-options={"{\"enableTime\":true,\"noCalendar\":true,\"dateFormat\":\"H:i\",\"disableMobile\":true,\"static\":true}"} />
                                <span className="uil uil-bell-school flatpickr-icon text-body-tertiary">                                </span>
                              </div>
                              <h5 className="text-body-highlight mb-2">
Tag
                              </h5>
                              <div className="choices-select-container mb-6">
                                <select className="form-select" data-choices multiple data-options={"{\"removeItemButton\":true,\"placeholder\":true}"}>
                                  <option value="">
Select organizer...
                                  </option>
                                  <option>
Massachusetts Institute of Technology
                                  </option>
                                  <option>
University of Chicago
                                  </option>
                                  <option>
GSAS Open Labs At Harvard
                                  </option>
                                  <option>
California Institute of Technology
                                  </option>
                                </select>
                                <span className="uil uil-tag-alt choices-icon text-body-tertiary" style={{"top":"26%"} as CSSProperties}>                                </span>
                              </div>
                              <div className="text-end mb-9">
                                <button className="btn btn-phoenix-danger">
Delete Task
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer border-0">
                <a href="#!" className="fw-bold fs-9 mt-4">
                  <span className="fas fa-plus me-1">                  </span>Add new task
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-xxl-5">
            <div className="card h-100">
              <div className="card-body">
                <div className="card-title mb-1">
                  <h3 className="text-body-emphasis">
Activity
                  </h3>
                </div>
                <p className="text-body-tertiary mb-4">
Recent activity across all projects
                </p>
                <div className="timeline-vertical timeline-with-details">
                  <div className="timeline-item position-relative">
                    <div className="row g-md-3">
                      <div className="col-12 col-md-auto d-flex">
                        <div className="timeline-item-date order-1 order-md-0 me-md-4">
                          <p className="fs-10 fw-semibold text-body-tertiary text-opacity-85 text-end">
01 DEC, 2023
                            <br className="d-none d-md-block" />
 10:30 AM
                          </p>
                        </div>
                        <div className="timeline-item-bar position-md-relative me-3 me-md-0">
                          <div className="icon-item icon-item-sm rounded-7 shadow-none bg-primary-subtle">
                            <span className="fa-solid fa-chess text-primary-dark fs-10">                            </span>
                          </div>
                          <span className="timeline-bar border-end border-dashed">                          </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="timeline-item-content ps-6 ps-md-3">
                          <h5 className="fs-9 lh-sm">
Phoenix Template: Unleashing Creative Possibilities
                          </h5>
                          <p className="fs-9">
by 
                            <a href="#!" className="fw-semibold">
Shantinon Mekalan
                            </a>
                          </p>
                          <p className="fs-9 text-body-secondary mb-5">
Discover limitless creativity with the Phoenix template! Our latest update offers an array of innovative features and design options.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item position-relative">
                    <div className="row g-md-3">
                      <div className="col-12 col-md-auto d-flex">
                        <div className="timeline-item-date order-1 order-md-0 me-md-4">
                          <p className="fs-10 fw-semibold text-body-tertiary text-opacity-85 text-end">
05 DEC, 2023
                            <br className="d-none d-md-block" />
 12:30 AM
                          </p>
                        </div>
                        <div className="timeline-item-bar position-md-relative me-3 me-md-0">
                          <div className="icon-item icon-item-sm rounded-7 shadow-none bg-primary-subtle">
                            <span className="fa-solid fa-dove text-primary-dark fs-10">                            </span>
                          </div>
                          <span className="timeline-bar border-end border-dashed">                          </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="timeline-item-content ps-6 ps-md-3">
                          <h5 className="fs-9 lh-sm">
Empower Your Digital Presence: The Phoenix Template Unveiled
                          </h5>
                          <p className="fs-9">
by 
                            <a href="#!" className="fw-semibold">
Bookworm22
                            </a>
                          </p>
                          <p className="fs-9 text-body-secondary mb-5">
Unveiling the Phoenix template, a game-changer for your digital presence. With its powerful features and sleek design,
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item position-relative">
                    <div className="row g-md-3">
                      <div className="col-12 col-md-auto d-flex">
                        <div className="timeline-item-date order-1 order-md-0 me-md-4">
                          <p className="fs-10 fw-semibold text-body-tertiary text-opacity-85 text-end">
15 DEC, 2023
                            <br className="d-none d-md-block" />
 2:30 AM
                          </p>
                        </div>
                        <div className="timeline-item-bar position-md-relative me-3 me-md-0">
                          <div className="icon-item icon-item-sm rounded-7 shadow-none bg-primary-subtle">
                            <span className="fa-solid fa-dungeon text-primary-dark fs-10">                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="timeline-item-content ps-6 ps-md-3">
                          <h5 className="fs-9 lh-sm">
Phoenix Template: Simplified Design, Maximum Impact
                          </h5>
                          <p className="fs-9">
by 
                            <a href="#!" className="fw-semibold">
Sharuka Nijibum
                            </a>
                          </p>
                          <p className="fs-9 text-body-secondary mb-0">
Introducing the Phoenix template, where simplified design meets maximum impact. Elevate your digital presence with its sleek and intuitive features.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis pt-6 border-top">
            <div id="projectSummary" data-list={"{\"valueNames\":[\"project\",\"assignees\",\"start\",\"deadline\",\"calculation\",\"projectprogress\",\"status\",\"action\"],\"page\":6,\"pagination\":true}"}>
              <div className="row align-items-end justify-content-between pb-4 g-3">
                <div className="col-auto">
                  <h3>
Projects
                  </h3>
                  <p className="text-body-tertiary lh-sm mb-0">
Brief summary of all projects
                  </p>
                </div>
              </div>
              <div className="table-responsive ms-n1 ps-1 scrollbar">
                <table className="table fs-9 mb-0 border-top border-translucent">
                  <thead>
                    <tr>
                      <th className="sort white-space-nowrap align-middle ps-0" scope="col" data-sort={"project"} style={{"width":"30%"} as CSSProperties}>
PROJECT NAME
                      </th>
                      <th className="sort align-middle ps-3" scope="col" data-sort={"assignees"} style={{"width":"10%"} as CSSProperties}>
Assignees
                      </th>
                      <th className="sort align-middle ps-3" scope="col" data-sort={"start"} style={{"width":"10%"} as CSSProperties}>
START DATE
                      </th>
                      <th className="sort align-middle ps-3" scope="col" data-sort={"deadline"} style={{"width":"15%"} as CSSProperties}>
DEADLINE
                      </th>
                      <th className="sort align-middle ps-3" scope="col" data-sort={"calculation"} style={{"width":"12%"} as CSSProperties}>
CALCULATION
                      </th>
                      <th className="sort align-middle ps-3" scope="col" data-sort={"projectprogress"} style={{"width":"5%"} as CSSProperties}>
PROGRESS
                      </th>
                      <th className="align-middle ps-8" scope="col" data-sort={"status"} style={{"width":"10%"} as CSSProperties}>
STATUS
                      </th>
                      <th className="sort align-middle text-end" scope="col" style={{"width":"10%"} as CSSProperties}>                      </th>
                    </tr>
                  </thead>
                  <tbody className="list" id="project-summary-table-body"><tr className="position-static">
                      <td className="align-middle time white-space-nowrap ps-0 project">
                        <a href="#" className="fw-bold fs-8">
Making the Butterflies shoot each other dead
                        </a>
                      </td>
                      <td className="align-middle white-space-nowrap assignees ps-3">
                        <div className="avatar-group avatar-group-dense">
                          <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                            <div className="avatar avatar-s  rounded-circle">
                              <PhoenixImage src="/assets/img/team/9.webp" alt="" className="rounded-circle " />
                            </div>
                          </a>
                          <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                            <div className="position-relative">
                              <div className="bg-holder z-n1" style={{"backgroundImage":"url(../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                              </div>
                              <div className="p-3">
                                <div className="text-end">
                                  <button className="btn p-0 me-2">
                                    <span className="fa-solid fa-user-plus text-white">                                    </span>
                                  </button>
                                  <button className="btn p-0">
                                    <span className="fa-solid fa-ellipsis text-white">                                    </span>
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
                                    <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                    </span>
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
                                      <span className="fa-solid fa-phone">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                      <span className="fa-solid fa-message">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                      <span className="fa-solid fa-video">                                      </span>
                                    </button>
                                  </div>
                                  <button className="btn btn-phoenix-primary">
                                    <span className="fa-solid fa-envelope me-2">                                    </span>
Send Email
                                  </button>
                                </div>
                              </div>
                              <ul className="nav d-flex flex-column py-3 border-bottom">
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                    </span>                                    <span className="text-body-highlight flex-1">
Assigned Projects
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body" data-feather={"pie-chart"}>                                    </span>                                    <span className="text-body-highlight flex-1">
View activiy
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
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
                            <div className="avatar avatar-s  rounded-circle">
                              <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle " />
                            </div>
                          </a>
                          <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                            <div className="position-relative">
                              <div className="bg-holder z-n1" style={{"backgroundImage":"url(../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                              </div>
                              <div className="p-3">
                                <div className="text-end">
                                  <button className="btn p-0 me-2">
                                    <span className="fa-solid fa-user-plus text-white">                                    </span>
                                  </button>
                                  <button className="btn p-0">
                                    <span className="fa-solid fa-ellipsis text-white">                                    </span>
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
                                    <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                    </span>
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
                                      <span className="fa-solid fa-phone">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                      <span className="fa-solid fa-message">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                      <span className="fa-solid fa-video">                                      </span>
                                    </button>
                                  </div>
                                  <button className="btn btn-phoenix-primary">
                                    <span className="fa-solid fa-envelope me-2">                                    </span>
Send Email
                                  </button>
                                </div>
                              </div>
                              <ul className="nav d-flex flex-column py-3 border-bottom">
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                    </span>                                    <span className="text-body-highlight flex-1">
Assigned Projects
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body" data-feather={"pie-chart"}>                                    </span>                                    <span className="text-body-highlight flex-1">
View activiy
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
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
                            <div className="avatar avatar-s  rounded-circle">
                              <PhoenixImage src="/assets/img/team/32.webp" alt="" className="rounded-circle " />
                            </div>
                          </a>
                          <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                            <div className="position-relative">
                              <div className="bg-holder z-n1" style={{"backgroundImage":"url(../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                              </div>
                              <div className="p-3">
                                <div className="text-end">
                                  <button className="btn p-0 me-2">
                                    <span className="fa-solid fa-user-plus text-white">                                    </span>
                                  </button>
                                  <button className="btn p-0">
                                    <span className="fa-solid fa-ellipsis text-white">                                    </span>
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
                                    <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                    </span>
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
                                      <span className="fa-solid fa-phone">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                      <span className="fa-solid fa-message">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                      <span className="fa-solid fa-video">                                      </span>
                                    </button>
                                  </div>
                                  <button className="btn btn-phoenix-primary">
                                    <span className="fa-solid fa-envelope me-2">                                    </span>
Send Email
                                  </button>
                                </div>
                              </div>
                              <ul className="nav d-flex flex-column py-3 border-bottom">
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                    </span>                                    <span className="text-body-highlight flex-1">
Assigned Projects
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body" data-feather={"pie-chart"}>                                    </span>                                    <span className="text-body-highlight flex-1">
View activiy
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
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
                            <div className="avatar avatar-s  rounded-circle">
                              <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                            </div>
                          </a>
                          <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                            <div className="position-relative">
                              <div className="bg-holder z-n1" style={{"backgroundImage":"url(../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                              </div>
                              <div className="p-3">
                                <div className="text-end">
                                  <button className="btn p-0 me-2">
                                    <span className="fa-solid fa-user-plus text-white">                                    </span>
                                  </button>
                                  <button className="btn p-0">
                                    <span className="fa-solid fa-ellipsis text-white">                                    </span>
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
                                    <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                    </span>
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
                                      <span className="fa-solid fa-phone">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                      <span className="fa-solid fa-message">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                      <span className="fa-solid fa-video">                                      </span>
                                    </button>
                                  </div>
                                  <button className="btn btn-phoenix-primary">
                                    <span className="fa-solid fa-envelope me-2">                                    </span>
Send Email
                                  </button>
                                </div>
                              </div>
                              <ul className="nav d-flex flex-column py-3 border-bottom">
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                    </span>                                    <span className="text-body-highlight flex-1">
Assigned Projects
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body" data-feather={"pie-chart"}>                                    </span>                                    <span className="text-body-highlight flex-1">
View activiy
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
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
                      <td className="align-middle white-space-nowrap start ps-3">
                        <p className="mb-0 fs-9 text-body">
Dec 12, 2018
                        </p>
                      </td>
                      <td className="align-middle white-space-nowrap deadline ps-3">
                        <p className="mb-0 fs-9 text-body">
Dec 12, 2026
                        </p>
                      </td>
                      <td className="align-middle white-space-nowrap calculation ps-3">
                        <p className="fw-bold text-body-emphasis fs-9 mb-0">
$4
                        </p>
                        <p className="fw-semibold fs-10 text-body-tertiary mb-0">
Cost
                        </p>
                      </td>
                      <td className="align-middle white-space-nowrap ps-3 projectprogress">
                        <p className="text-body-secondary fs-10 mb-0">
145 / 145
                        </p>
                        <div className="progress" style={{"height":"3px"} as CSSProperties}>
                          <div className="progress-bar bg-success" style={{"width":"100%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} role="progressbar">                          </div>
                        </div>
                      </td>
                      <td className="align-middle white-space-nowrap ps-8">
                        <div className="progress progress-stack mt-3" style={{"height":"3px"} as CSSProperties}>
                          <div className="progress-bar bg-info" style={{"width":"30%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} role="progressbar" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Active">                          </div>
                          <div className="progress-bar bg-danger" style={{"width":"5%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Damage" role="progressbar">                          </div>
                          <div className="progress-bar bg-warning" style={{"width":"45%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Pending" role="progressbar">                          </div>
                          <div className="progress-bar bg-success" style={{"width":"15%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Done" role="progressbar">                          </div>
                        </div>
                      </td>
                      <td className="align-middle text-end white-space-nowrap pe-0 action">
                        <div className="btn-reveal-trigger position-static">
                          <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10">                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end py-2">
                            <a href="#!" className="dropdown-item">
View
                            </a>
                            <a href="#!" className="dropdown-item">
Export
                            </a>
                            <div className="dropdown-divider">                            </div>
                            <a href="#!" className="dropdown-item text-danger">
Remove
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="position-static"><td className="align-middle time white-space-nowrap ps-0 project">
                        <a href="#" className="fw-bold fs-8">
Project Doughnut Dungeon
                        </a>
                      </td>
                      <td className="align-middle white-space-nowrap assignees ps-3">
                        <div className="avatar-group avatar-group-dense">
                          <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                            <div className="avatar avatar-s  rounded-circle">
                              <PhoenixImage src="/assets/img/team/22.webp" alt="" className="rounded-circle " />
                            </div>
                          </a>
                          <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                            <div className="position-relative">
                              <div className="bg-holder z-n1" style={{"backgroundImage":"url(../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                              </div>
                              <div className="p-3">
                                <div className="text-end">
                                  <button className="btn p-0 me-2">
                                    <span className="fa-solid fa-user-plus text-white">                                    </span>
                                  </button>
                                  <button className="btn p-0">
                                    <span className="fa-solid fa-ellipsis text-white">                                    </span>
                                  </button>
                                </div>
                                <div className="text-center">
                                  <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                    <PhoenixImage src="/assets/img/team/22.webp" alt="" className="rounded-circle border border-light-subtle" />
                                  </div>
                                  <h6 className="text-white">
Woodrow Burton
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
                                    <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                    </span>
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
                                      <span className="fa-solid fa-phone">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                      <span className="fa-solid fa-message">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                      <span className="fa-solid fa-video">                                      </span>
                                    </button>
                                  </div>
                                  <button className="btn btn-phoenix-primary">
                                    <span className="fa-solid fa-envelope me-2">                                    </span>
Send Email
                                  </button>
                                </div>
                              </div>
                              <ul className="nav d-flex flex-column py-3 border-bottom">
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                    </span>                                    <span className="text-body-highlight flex-1">
Assigned Projects
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body" data-feather={"pie-chart"}>                                    </span>                                    <span className="text-body-highlight flex-1">
View activiy
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
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
                            <div className="avatar avatar-s  rounded-circle">
                              <PhoenixImage src="/assets/img/team/28.webp" alt="" className="rounded-circle " />
                            </div>
                          </a>
                          <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                            <div className="position-relative">
                              <div className="bg-holder z-n1" style={{"backgroundImage":"url(../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                              </div>
                              <div className="p-3">
                                <div className="text-end">
                                  <button className="btn p-0 me-2">
                                    <span className="fa-solid fa-user-plus text-white">                                    </span>
                                  </button>
                                  <button className="btn p-0">
                                    <span className="fa-solid fa-ellipsis text-white">                                    </span>
                                  </button>
                                </div>
                                <div className="text-center">
                                  <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                    <PhoenixImage src="/assets/img/team/28.webp" alt="" className="rounded-circle border border-light-subtle" />
                                  </div>
                                  <h6 className="text-white">
Ashley Garrett
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
                                    <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                    </span>
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
                                      <span className="fa-solid fa-phone">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                      <span className="fa-solid fa-message">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                      <span className="fa-solid fa-video">                                      </span>
                                    </button>
                                  </div>
                                  <button className="btn btn-phoenix-primary">
                                    <span className="fa-solid fa-envelope me-2">                                    </span>
Send Email
                                  </button>
                                </div>
                              </div>
                              <ul className="nav d-flex flex-column py-3 border-bottom">
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                    </span>                                    <span className="text-body-highlight flex-1">
Assigned Projects
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body" data-feather={"pie-chart"}>                                    </span>                                    <span className="text-body-highlight flex-1">
View activiy
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
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
                            <div className="avatar avatar-s">
                              <div className="avatar-name rounded-circle">
                                <span>
R
                                </span>
                              </div>
                            </div>
                          </a>
                          <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                            <div className="position-relative">
                              <div className="bg-holder z-n1" style={{"backgroundImage":"url(../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                              </div>
                              <div className="p-3">
                                <div className="text-end">
                                  <button className="btn p-0 me-2">
                                    <span className="fa-solid fa-user-plus text-white">                                    </span>
                                  </button>
                                  <button className="btn p-0">
                                    <span className="fa-solid fa-ellipsis text-white">                                    </span>
                                  </button>
                                </div>
                                <div className="text-center">
                                  <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                    <div className="avatar-name rounded-circle">
                                      <span>
R
                                      </span>
                                    </div>
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
                                    <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                    </span>
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
                                      <span className="fa-solid fa-phone">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                      <span className="fa-solid fa-message">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                      <span className="fa-solid fa-video">                                      </span>
                                    </button>
                                  </div>
                                  <button className="btn btn-phoenix-primary">
                                    <span className="fa-solid fa-envelope me-2">                                    </span>
Send Email
                                  </button>
                                </div>
                              </div>
                              <ul className="nav d-flex flex-column py-3 border-bottom">
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                    </span>                                    <span className="text-body-highlight flex-1">
Assigned Projects
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body" data-feather={"pie-chart"}>                                    </span>                                    <span className="text-body-highlight flex-1">
View activiy
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
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
                      <td className="align-middle white-space-nowrap start ps-3">
                        <p className="mb-0 fs-9 text-body">
Jan 9, 2019
                        </p>
                      </td>
                      <td className="align-middle white-space-nowrap deadline ps-3">
                        <p className="mb-0 fs-9 text-body">
Dec 9, 2022
                        </p>
                      </td>
                      <td className="align-middle white-space-nowrap calculation ps-3">
                        <button className="btn btn-phoenix-secondary btn-square-sm">
                          <span className="fas fa-plus">                          </span>
                        </button>
                      </td>
                      <td className="align-middle white-space-nowrap ps-3 projectprogress">
                        <p className="text-body-secondary fs-10 mb-0">
148 / 223
                        </p>
                        <div className="progress" style={{"height":"3px"} as CSSProperties}>
                          <div className="progress-bar bg-success" style={{"width":"66.3677130044843%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} role="progressbar">                          </div>
                        </div>
                      </td>
                      <td className="align-middle white-space-nowrap ps-8">
                        <div className="progress progress-stack mt-3" style={{"height":"3px"} as CSSProperties}>
                          <div className="progress-bar bg-info" style={{"width":"20%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} role="progressbar" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Active">                          </div>
                          <div className="progress-bar bg-danger" style={{"width":"15%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Damage" role="progressbar">                          </div>
                          <div className="progress-bar bg-warning" style={{"width":"45%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Pending" role="progressbar">                          </div>
                          <div className="progress-bar bg-success" style={{"width":"30%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Done" role="progressbar">                          </div>
                        </div>
                      </td>
                      <td className="align-middle text-end white-space-nowrap pe-0 action">
                        <div className="btn-reveal-trigger position-static">
                          <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10">                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end py-2">
                            <a href="#!" className="dropdown-item">
View
                            </a>
                            <a href="#!" className="dropdown-item">
Export
                            </a>
                            <div className="dropdown-divider">                            </div>
                            <a href="#!" className="dropdown-item text-danger">
Remove
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="position-static"><td className="align-middle time white-space-nowrap ps-0 project">
                        <a href="#" className="fw-bold fs-8">
The Chewing Gum Attack
                        </a>
                      </td>
                      <td className="align-middle white-space-nowrap assignees ps-3">
                        <div className="avatar-group avatar-group-dense">
                          <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                            <div className="avatar avatar-s  rounded-circle">
                              <PhoenixImage src="/assets/img/team/34.webp" alt="" className="rounded-circle " />
                            </div>
                          </a>
                          <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                            <div className="position-relative">
                              <div className="bg-holder z-n1" style={{"backgroundImage":"url(../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                              </div>
                              <div className="p-3">
                                <div className="text-end">
                                  <button className="btn p-0 me-2">
                                    <span className="fa-solid fa-user-plus text-white">                                    </span>
                                  </button>
                                  <button className="btn p-0">
                                    <span className="fa-solid fa-ellipsis text-white">                                    </span>
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
                                    <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                    </span>
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
                                      <span className="fa-solid fa-phone">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                      <span className="fa-solid fa-message">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                      <span className="fa-solid fa-video">                                      </span>
                                    </button>
                                  </div>
                                  <button className="btn btn-phoenix-primary">
                                    <span className="fa-solid fa-envelope me-2">                                    </span>
Send Email
                                  </button>
                                </div>
                              </div>
                              <ul className="nav d-flex flex-column py-3 border-bottom">
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                    </span>                                    <span className="text-body-highlight flex-1">
Assigned Projects
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body" data-feather={"pie-chart"}>                                    </span>                                    <span className="text-body-highlight flex-1">
View activiy
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
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
                            <div className="avatar avatar-s  rounded-circle">
                              <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle " />
                            </div>
                          </a>
                          <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                            <div className="position-relative">
                              <div className="bg-holder z-n1" style={{"backgroundImage":"url(../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                              </div>
                              <div className="p-3">
                                <div className="text-end">
                                  <button className="btn p-0 me-2">
                                    <span className="fa-solid fa-user-plus text-white">                                    </span>
                                  </button>
                                  <button className="btn p-0">
                                    <span className="fa-solid fa-ellipsis text-white">                                    </span>
                                  </button>
                                </div>
                                <div className="text-center">
                                  <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                    <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle border border-light-subtle" />
                                  </div>
                                  <h6 className="text-white">
Katerina Karenin
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
                                    <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                    </span>
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
                                      <span className="fa-solid fa-phone">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                      <span className="fa-solid fa-message">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                      <span className="fa-solid fa-video">                                      </span>
                                    </button>
                                  </div>
                                  <button className="btn btn-phoenix-primary">
                                    <span className="fa-solid fa-envelope me-2">                                    </span>
Send Email
                                  </button>
                                </div>
                              </div>
                              <ul className="nav d-flex flex-column py-3 border-bottom">
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                    </span>                                    <span className="text-body-highlight flex-1">
Assigned Projects
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body" data-feather={"pie-chart"}>                                    </span>                                    <span className="text-body-highlight flex-1">
View activiy
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
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
                      <td className="align-middle white-space-nowrap start ps-3">
                        <p className="mb-0 fs-9 text-body">
Sep 4, 2019
                        </p>
                      </td>
                      <td className="align-middle white-space-nowrap deadline ps-3">
                        <p className="mb-0 fs-9 text-body">
Dec 4, 2021
                        </p>
                      </td>
                      <td className="align-middle white-space-nowrap calculation ps-3">
                        <p className="fw-bold text-body-emphasis fs-9 mb-0">
$657k
                        </p>
                        <p className="fw-semibold fs-10 text-body-tertiary mb-0">
Estimation
                        </p>
                      </td>
                      <td className="align-middle white-space-nowrap ps-3 projectprogress">
                        <p className="text-body-secondary fs-10 mb-0">
277 / 539
                        </p>
                        <div className="progress" style={{"height":"3px"} as CSSProperties}>
                          <div className="progress-bar bg-success" style={{"width":"51.39146567717996%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} role="progressbar">                          </div>
                        </div>
                      </td>
                      <td className="align-middle white-space-nowrap ps-8">
                        <div className="progress progress-stack mt-3" style={{"height":"3px"} as CSSProperties}>
                          <div className="progress-bar bg-info" style={{"width":"10%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} role="progressbar" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Active">                          </div>
                          <div className="progress-bar bg-danger" style={{"width":"10%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Damage" role="progressbar">                          </div>
                          <div className="progress-bar bg-warning" style={{"width":"35%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Pending" role="progressbar">                          </div>
                          <div className="progress-bar bg-success" style={{"width":"45%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Done" role="progressbar">                          </div>
                        </div>
                      </td>
                      <td className="align-middle text-end white-space-nowrap pe-0 action">
                        <div className="btn-reveal-trigger position-static">
                          <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10">                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end py-2">
                            <a href="#!" className="dropdown-item">
View
                            </a>
                            <a href="#!" className="dropdown-item">
Export
                            </a>
                            <div className="dropdown-divider">                            </div>
                            <a href="#!" className="dropdown-item text-danger">
Remove
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="position-static"><td className="align-middle time white-space-nowrap ps-0 project">
                        <a href="#" className="fw-bold fs-8">
Execution of Micky the foul mouse
                        </a>
                      </td>
                      <td className="align-middle white-space-nowrap assignees ps-3">
                        <div className="avatar-group avatar-group-dense">
                          <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                            <div className="avatar avatar-s  rounded-circle">
                              <PhoenixImage src="/assets/img/team/1.webp" alt="" className="rounded-circle " />
                            </div>
                          </a>
                          <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                            <div className="position-relative">
                              <div className="bg-holder z-n1" style={{"backgroundImage":"url(../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                              </div>
                              <div className="p-3">
                                <div className="text-end">
                                  <button className="btn p-0 me-2">
                                    <span className="fa-solid fa-user-plus text-white">                                    </span>
                                  </button>
                                  <button className="btn p-0">
                                    <span className="fa-solid fa-ellipsis text-white">                                    </span>
                                  </button>
                                </div>
                                <div className="text-center">
                                  <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                    <PhoenixImage src="/assets/img/team/1.webp" alt="" className="rounded-circle border border-light-subtle" />
                                  </div>
                                  <h6 className="text-white">
Luis Bunuel
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
                                    <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                    </span>
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
                                      <span className="fa-solid fa-phone">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                      <span className="fa-solid fa-message">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                      <span className="fa-solid fa-video">                                      </span>
                                    </button>
                                  </div>
                                  <button className="btn btn-phoenix-primary">
                                    <span className="fa-solid fa-envelope me-2">                                    </span>
Send Email
                                  </button>
                                </div>
                              </div>
                              <ul className="nav d-flex flex-column py-3 border-bottom">
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                    </span>                                    <span className="text-body-highlight flex-1">
Assigned Projects
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body" data-feather={"pie-chart"}>                                    </span>                                    <span className="text-body-highlight flex-1">
View activiy
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
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
                            <div className="avatar avatar-s  rounded-circle">
                              <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                            </div>
                          </a>
                          <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                            <div className="position-relative">
                              <div className="bg-holder z-n1" style={{"backgroundImage":"url(../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                              </div>
                              <div className="p-3">
                                <div className="text-end">
                                  <button className="btn p-0 me-2">
                                    <span className="fa-solid fa-user-plus text-white">                                    </span>
                                  </button>
                                  <button className="btn p-0">
                                    <span className="fa-solid fa-ellipsis text-white">                                    </span>
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
                                    <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                    </span>
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
                                      <span className="fa-solid fa-phone">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                      <span className="fa-solid fa-message">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                      <span className="fa-solid fa-video">                                      </span>
                                    </button>
                                  </div>
                                  <button className="btn btn-phoenix-primary">
                                    <span className="fa-solid fa-envelope me-2">                                    </span>
Send Email
                                  </button>
                                </div>
                              </div>
                              <ul className="nav d-flex flex-column py-3 border-bottom">
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                    </span>                                    <span className="text-body-highlight flex-1">
Assigned Projects
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body" data-feather={"pie-chart"}>                                    </span>                                    <span className="text-body-highlight flex-1">
View activiy
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
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
                            <div className="avatar avatar-s  rounded-circle">
                              <PhoenixImage src="/assets/img/team/5.webp" alt="" className="rounded-circle " />
                            </div>
                          </a>
                          <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                            <div className="position-relative">
                              <div className="bg-holder z-n1" style={{"backgroundImage":"url(../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                              </div>
                              <div className="p-3">
                                <div className="text-end">
                                  <button className="btn p-0 me-2">
                                    <span className="fa-solid fa-user-plus text-white">                                    </span>
                                  </button>
                                  <button className="btn p-0">
                                    <span className="fa-solid fa-ellipsis text-white">                                    </span>
                                  </button>
                                </div>
                                <div className="text-center">
                                  <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                    <PhoenixImage src="/assets/img/team/5.webp" alt="" className="rounded-circle border border-light-subtle" />
                                  </div>
                                  <h6 className="text-white">
Ricky Antony
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
                                    <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                    </span>
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
                                      <span className="fa-solid fa-phone">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                      <span className="fa-solid fa-message">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                      <span className="fa-solid fa-video">                                      </span>
                                    </button>
                                  </div>
                                  <button className="btn btn-phoenix-primary">
                                    <span className="fa-solid fa-envelope me-2">                                    </span>
Send Email
                                  </button>
                                </div>
                              </div>
                              <ul className="nav d-flex flex-column py-3 border-bottom">
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                    </span>                                    <span className="text-body-highlight flex-1">
Assigned Projects
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body" data-feather={"pie-chart"}>                                    </span>                                    <span className="text-body-highlight flex-1">
View activiy
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
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
                            <div className="avatar avatar-s  rounded-circle">
                              <PhoenixImage src="/assets/img/team/11.webp" alt="" className="rounded-circle " />
                            </div>
                          </a>
                          <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                            <div className="position-relative">
                              <div className="bg-holder z-n1" style={{"backgroundImage":"url(../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                              </div>
                              <div className="p-3">
                                <div className="text-end">
                                  <button className="btn p-0 me-2">
                                    <span className="fa-solid fa-user-plus text-white">                                    </span>
                                  </button>
                                  <button className="btn p-0">
                                    <span className="fa-solid fa-ellipsis text-white">                                    </span>
                                  </button>
                                </div>
                                <div className="text-center">
                                  <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                    <PhoenixImage src="/assets/img/team/11.webp" alt="" className="rounded-circle border border-light-subtle" />
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
                                    <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                    </span>
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
                                      <span className="fa-solid fa-phone">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                      <span className="fa-solid fa-message">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                      <span className="fa-solid fa-video">                                      </span>
                                    </button>
                                  </div>
                                  <button className="btn btn-phoenix-primary">
                                    <span className="fa-solid fa-envelope me-2">                                    </span>
Send Email
                                  </button>
                                </div>
                              </div>
                              <ul className="nav d-flex flex-column py-3 border-bottom">
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                    </span>                                    <span className="text-body-highlight flex-1">
Assigned Projects
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body" data-feather={"pie-chart"}>                                    </span>                                    <span className="text-body-highlight flex-1">
View activiy
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
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
                      <td className="align-middle white-space-nowrap start ps-3">
                        <p className="mb-0 fs-9 text-body">
Nov 1, 2019
                        </p>
                      </td>
                      <td className="align-middle white-space-nowrap deadline ps-3">
                        <p className="mb-0 fs-9 text-body">
Dec 1, 2024
                        </p>
                      </td>
                      <td className="align-middle white-space-nowrap calculation ps-3">
                        <button className="btn btn-phoenix-secondary btn-square-sm">
                          <span className="fas fa-plus">                          </span>
                        </button>
                      </td>
                      <td className="align-middle white-space-nowrap ps-3 projectprogress">
                        <p className="text-body-secondary fs-10 mb-0">
16 / 56
                        </p>
                        <div className="progress" style={{"height":"3px"} as CSSProperties}>
                          <div className="progress-bar bg-success" style={{"width":"28.57142857142857%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} role="progressbar">                          </div>
                        </div>
                      </td>
                      <td className="align-middle white-space-nowrap ps-8">
                        <div className="progress progress-stack mt-3" style={{"height":"3px"} as CSSProperties}>
                          <div className="progress-bar bg-info" style={{"width":"45%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} role="progressbar" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Active">                          </div>
                          <div className="progress-bar bg-danger" style={{"width":"15%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Damage" role="progressbar">                          </div>
                          <div className="progress-bar bg-warning" style={{"width":"20%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Pending" role="progressbar">                          </div>
                          <div className="progress-bar bg-success" style={{"width":"20%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Done" role="progressbar">                          </div>
                        </div>
                      </td>
                      <td className="align-middle text-end white-space-nowrap pe-0 action">
                        <div className="btn-reveal-trigger position-static">
                          <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10">                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end py-2">
                            <a href="#!" className="dropdown-item">
View
                            </a>
                            <a href="#!" className="dropdown-item">
Export
                            </a>
                            <div className="dropdown-divider">                            </div>
                            <a href="#!" className="dropdown-item text-danger">
Remove
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="position-static"><td className="align-middle time white-space-nowrap ps-0 project">
                        <a href="#" className="fw-bold fs-8">
Harnessing stupidity from Jerry
                        </a>
                      </td>
                      <td className="align-middle white-space-nowrap assignees ps-3">
                        <div className="avatar-group avatar-group-dense">
                          <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                            <div className="avatar avatar-s  rounded-circle">
                              <PhoenixImage src="/assets/img/team/21.webp" alt="" className="rounded-circle " />
                            </div>
                          </a>
                          <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                            <div className="position-relative">
                              <div className="bg-holder z-n1" style={{"backgroundImage":"url(../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                              </div>
                              <div className="p-3">
                                <div className="text-end">
                                  <button className="btn p-0 me-2">
                                    <span className="fa-solid fa-user-plus text-white">                                    </span>
                                  </button>
                                  <button className="btn p-0">
                                    <span className="fa-solid fa-ellipsis text-white">                                    </span>
                                  </button>
                                </div>
                                <div className="text-center">
                                  <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                    <PhoenixImage src="/assets/img/team/21.webp" alt="" className="rounded-circle border border-light-subtle" />
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
                                    <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                    </span>
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
                                      <span className="fa-solid fa-phone">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                      <span className="fa-solid fa-message">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                      <span className="fa-solid fa-video">                                      </span>
                                    </button>
                                  </div>
                                  <button className="btn btn-phoenix-primary">
                                    <span className="fa-solid fa-envelope me-2">                                    </span>
Send Email
                                  </button>
                                </div>
                              </div>
                              <ul className="nav d-flex flex-column py-3 border-bottom">
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                    </span>                                    <span className="text-body-highlight flex-1">
Assigned Projects
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body" data-feather={"pie-chart"}>                                    </span>                                    <span className="text-body-highlight flex-1">
View activiy
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
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
                            <div className="avatar avatar-s  rounded-circle">
                              <PhoenixImage src="/assets/img/team/23.webp" alt="" className="rounded-circle " />
                            </div>
                          </a>
                          <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                            <div className="position-relative">
                              <div className="bg-holder z-n1" style={{"backgroundImage":"url(../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                              </div>
                              <div className="p-3">
                                <div className="text-end">
                                  <button className="btn p-0 me-2">
                                    <span className="fa-solid fa-user-plus text-white">                                    </span>
                                  </button>
                                  <button className="btn p-0">
                                    <span className="fa-solid fa-ellipsis text-white">                                    </span>
                                  </button>
                                </div>
                                <div className="text-center">
                                  <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                    <PhoenixImage src="/assets/img/team/23.webp" alt="" className="rounded-circle border border-light-subtle" />
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
                                    <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                    </span>
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
                                      <span className="fa-solid fa-phone">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                      <span className="fa-solid fa-message">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                      <span className="fa-solid fa-video">                                      </span>
                                    </button>
                                  </div>
                                  <button className="btn btn-phoenix-primary">
                                    <span className="fa-solid fa-envelope me-2">                                    </span>
Send Email
                                  </button>
                                </div>
                              </div>
                              <ul className="nav d-flex flex-column py-3 border-bottom">
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                    </span>                                    <span className="text-body-highlight flex-1">
Assigned Projects
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body" data-feather={"pie-chart"}>                                    </span>                                    <span className="text-body-highlight flex-1">
View activiy
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
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
                            <div className="avatar avatar-s  rounded-circle">
                              <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle " />
                            </div>
                          </a>
                          <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                            <div className="position-relative">
                              <div className="bg-holder z-n1" style={{"backgroundImage":"url(../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                              </div>
                              <div className="p-3">
                                <div className="text-end">
                                  <button className="btn p-0 me-2">
                                    <span className="fa-solid fa-user-plus text-white">                                    </span>
                                  </button>
                                  <button className="btn p-0">
                                    <span className="fa-solid fa-ellipsis text-white">                                    </span>
                                  </button>
                                </div>
                                <div className="text-center">
                                  <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                    <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle border border-light-subtle" />
                                  </div>
                                  <h6 className="text-white">
Ricky Antony
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
                                    <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                    </span>
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
                                      <span className="fa-solid fa-phone">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                      <span className="fa-solid fa-message">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                      <span className="fa-solid fa-video">                                      </span>
                                    </button>
                                  </div>
                                  <button className="btn btn-phoenix-primary">
                                    <span className="fa-solid fa-envelope me-2">                                    </span>
Send Email
                                  </button>
                                </div>
                              </div>
                              <ul className="nav d-flex flex-column py-3 border-bottom">
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                    </span>                                    <span className="text-body-highlight flex-1">
Assigned Projects
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body" data-feather={"pie-chart"}>                                    </span>                                    <span className="text-body-highlight flex-1">
View activiy
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
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
                      <td className="align-middle white-space-nowrap start ps-3">
                        <p className="mb-0 fs-9 text-body">
Dec 28, 2019
                        </p>
                      </td>
                      <td className="align-middle white-space-nowrap deadline ps-3">
                        <p className="mb-0 fs-9 text-body">
Nov 28, 2021
                        </p>
                      </td>
                      <td className="align-middle white-space-nowrap calculation ps-3">
                        <button className="btn btn-phoenix-secondary btn-square-sm">
                          <span className="fas fa-plus">                          </span>
                        </button>
                      </td>
                      <td className="align-middle white-space-nowrap ps-3 projectprogress">
                        <p className="text-body-secondary fs-10 mb-0">
169 / 394
                        </p>
                        <div className="progress" style={{"height":"3px"} as CSSProperties}>
                          <div className="progress-bar bg-success" style={{"width":"42.89340101522843%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} role="progressbar">                          </div>
                        </div>
                      </td>
                      <td className="align-middle white-space-nowrap ps-8">
                        <div className="progress progress-stack mt-3" style={{"height":"3px"} as CSSProperties}>
                          <div className="progress-bar bg-info" style={{"width":"25%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} role="progressbar" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Active">                          </div>
                          <div className="progress-bar bg-danger" style={{"width":"35%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Damage" role="progressbar">                          </div>
                          <div className="progress-bar bg-warning" style={{"width":"20%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Pending" role="progressbar">                          </div>
                          <div className="progress-bar bg-success" style={{"width":"15%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Done" role="progressbar">                          </div>
                        </div>
                      </td>
                      <td className="align-middle text-end white-space-nowrap pe-0 action">
                        <div className="btn-reveal-trigger position-static">
                          <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10">                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end py-2">
                            <a href="#!" className="dropdown-item">
View
                            </a>
                            <a href="#!" className="dropdown-item">
Export
                            </a>
                            <div className="dropdown-divider">                            </div>
                            <a href="#!" className="dropdown-item text-danger">
Remove
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="position-static"><td className="align-middle time white-space-nowrap ps-0 project">
                        <a href="#" className="fw-bold fs-8">
Water resistant mosquito killer gun
                        </a>
                      </td>
                      <td className="align-middle white-space-nowrap assignees ps-3">
                        <div className="avatar-group avatar-group-dense">
                          <a href="#" className="dropdown-toggle dropdown-caret-none d-inline-block"  role="button" data-bs-toggle={"dropdown"} aria-expanded="false" data-bs-auto-close={"outside"}>
                            <div className="avatar avatar-s  rounded-circle">
                              <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                            </div>
                          </a>
                          <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                            <div className="position-relative">
                              <div className="bg-holder z-n1" style={{"backgroundImage":"url(../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                              </div>
                              <div className="p-3">
                                <div className="text-end">
                                  <button className="btn p-0 me-2">
                                    <span className="fa-solid fa-user-plus text-white">                                    </span>
                                  </button>
                                  <button className="btn p-0">
                                    <span className="fa-solid fa-ellipsis text-white">                                    </span>
                                  </button>
                                </div>
                                <div className="text-center">
                                  <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                    <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle border border-light-subtle" />
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
                                    <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                    </span>
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
                                      <span className="fa-solid fa-phone">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                      <span className="fa-solid fa-message">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                      <span className="fa-solid fa-video">                                      </span>
                                    </button>
                                  </div>
                                  <button className="btn btn-phoenix-primary">
                                    <span className="fa-solid fa-envelope me-2">                                    </span>
Send Email
                                  </button>
                                </div>
                              </div>
                              <ul className="nav d-flex flex-column py-3 border-bottom">
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                    </span>                                    <span className="text-body-highlight flex-1">
Assigned Projects
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body" data-feather={"pie-chart"}>                                    </span>                                    <span className="text-body-highlight flex-1">
View activiy
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
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
                            <div className="avatar avatar-s  rounded-circle">
                              <PhoenixImage src="/assets/img/team/avatar.webp" alt="" className="rounded-circle avatar-placeholder" />
                            </div>
                          </a>
                          <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                            <div className="position-relative">
                              <div className="bg-holder z-n1" style={{"backgroundImage":"url(../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                              </div>
                              <div className="p-3">
                                <div className="text-end">
                                  <button className="btn p-0 me-2">
                                    <span className="fa-solid fa-user-plus text-white">                                    </span>
                                  </button>
                                  <button className="btn p-0">
                                    <span className="fa-solid fa-ellipsis text-white">                                    </span>
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
                                    <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                    </span>
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
                                      <span className="fa-solid fa-phone">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                      <span className="fa-solid fa-message">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                      <span className="fa-solid fa-video">                                      </span>
                                    </button>
                                  </div>
                                  <button className="btn btn-phoenix-primary">
                                    <span className="fa-solid fa-envelope me-2">                                    </span>
Send Email
                                  </button>
                                </div>
                              </div>
                              <ul className="nav d-flex flex-column py-3 border-bottom">
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                    </span>                                    <span className="text-body-highlight flex-1">
Assigned Projects
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body" data-feather={"pie-chart"}>                                    </span>                                    <span className="text-body-highlight flex-1">
View activiy
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
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
                            <div className="avatar avatar-s  rounded-circle">
                              <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle " />
                            </div>
                          </a>
                          <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                            <div className="position-relative">
                              <div className="bg-holder z-n1" style={{"backgroundImage":"url(../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                              </div>
                              <div className="p-3">
                                <div className="text-end">
                                  <button className="btn p-0 me-2">
                                    <span className="fa-solid fa-user-plus text-white">                                    </span>
                                  </button>
                                  <button className="btn p-0">
                                    <span className="fa-solid fa-ellipsis text-white">                                    </span>
                                  </button>
                                </div>
                                <div className="text-center">
                                  <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                    <PhoenixImage src="/assets/img/team/59.webp" alt="" className="rounded-circle border border-light-subtle" />
                                  </div>
                                  <h6 className="text-white">
Katerina Karenin
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
                                    <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                    </span>
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
                                      <span className="fa-solid fa-phone">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                      <span className="fa-solid fa-message">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                      <span className="fa-solid fa-video">                                      </span>
                                    </button>
                                  </div>
                                  <button className="btn btn-phoenix-primary">
                                    <span className="fa-solid fa-envelope me-2">                                    </span>
Send Email
                                  </button>
                                </div>
                              </div>
                              <ul className="nav d-flex flex-column py-3 border-bottom">
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                    </span>                                    <span className="text-body-highlight flex-1">
Assigned Projects
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body" data-feather={"pie-chart"}>                                    </span>                                    <span className="text-body-highlight flex-1">
View activiy
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
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
                            <div className="avatar avatar-s  rounded-circle">
                              <PhoenixImage src="/assets/img/team/31.webp" alt="" className="rounded-circle " />
                            </div>
                          </a>
                          <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                            <div className="position-relative">
                              <div className="bg-holder z-n1" style={{"backgroundImage":"url(../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                              </div>
                              <div className="p-3">
                                <div className="text-end">
                                  <button className="btn p-0 me-2">
                                    <span className="fa-solid fa-user-plus text-white">                                    </span>
                                  </button>
                                  <button className="btn p-0">
                                    <span className="fa-solid fa-ellipsis text-white">                                    </span>
                                  </button>
                                </div>
                                <div className="text-center">
                                  <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                    <PhoenixImage src="/assets/img/team/31.webp" alt="" className="rounded-circle border border-light-subtle" />
                                  </div>
                                  <h6 className="text-white">
Martina scorcese
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
                                    <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                    </span>
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
                                      <span className="fa-solid fa-phone">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                      <span className="fa-solid fa-message">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                      <span className="fa-solid fa-video">                                      </span>
                                    </button>
                                  </div>
                                  <button className="btn btn-phoenix-primary">
                                    <span className="fa-solid fa-envelope me-2">                                    </span>
Send Email
                                  </button>
                                </div>
                              </div>
                              <ul className="nav d-flex flex-column py-3 border-bottom">
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                    </span>                                    <span className="text-body-highlight flex-1">
Assigned Projects
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body" data-feather={"pie-chart"}>                                    </span>                                    <span className="text-body-highlight flex-1">
View activiy
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
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
                            <div className="avatar avatar-s">
                              <div className="avatar-name rounded-circle">
                                <span>
R
                                </span>
                              </div>
                            </div>
                          </a>
                          <div className="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" style={{"width":"320px"} as CSSProperties}>
                            <div className="position-relative">
                              <div className="bg-holder z-n1" style={{"backgroundImage":"url(../assets/img/bg/bg-32.png)","backgroundSize":"auto"} as CSSProperties}>                              </div>
                              <div className="p-3">
                                <div className="text-end">
                                  <button className="btn p-0 me-2">
                                    <span className="fa-solid fa-user-plus text-white">                                    </span>
                                  </button>
                                  <button className="btn p-0">
                                    <span className="fa-solid fa-ellipsis text-white">                                    </span>
                                  </button>
                                </div>
                                <div className="text-center">
                                  <div className="avatar avatar-xl status-online position-relative me-2 me-sm-0 me-xl-2 mb-2">
                                    <div className="avatar-name rounded-circle">
                                      <span>
R
                                      </span>
                                    </div>
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
                                    <span className="fa-solid fa-circle text-body-tertiary mx-1" data-fa-transform={"shrink-10 up-2"}>                                    </span>
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
                                      <span className="fa-solid fa-phone">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg me-2">
                                      <span className="fa-solid fa-message">                                      </span>
                                    </button>
                                    <button className="btn btn-phoenix-secondary btn-icon btn-icon-lg">
                                      <span className="fa-solid fa-video">                                      </span>
                                    </button>
                                  </div>
                                  <button className="btn btn-phoenix-primary">
                                    <span className="fa-solid fa-envelope me-2">                                    </span>
Send Email
                                  </button>
                                </div>
                              </div>
                              <ul className="nav d-flex flex-column py-3 border-bottom">
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body d-inline-block" data-feather={"clipboard"}>                                    </span>                                    <span className="text-body-highlight flex-1">
Assigned Projects
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="#!" className="nav-link px-3 d-flex flex-between-center">
                                    <span className="me-2 text-body" data-feather={"pie-chart"}>                                    </span>                                    <span className="text-body-highlight flex-1">
View activiy
                                    </span>                                    <span className="fa-solid fa-chevron-right fs-11">                                    </span>
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
                      <td className="align-middle white-space-nowrap start ps-3">
                        <p className="mb-0 fs-9 text-body">
Feb 24, 2020
                        </p>
                      </td>
                      <td className="align-middle white-space-nowrap deadline ps-3">
                        <p className="mb-0 fs-9 text-body">
Nov 24, 2021
                        </p>
                      </td>
                      <td className="align-middle white-space-nowrap calculation ps-3">
                        <p className="fw-bold text-body-emphasis fs-9 mb-0">
$55k
                        </p>
                        <p className="fw-semibold fs-10 text-body-tertiary mb-0">
Budget
                        </p>
                      </td>
                      <td className="align-middle white-space-nowrap ps-3 projectprogress">
                        <p className="text-body-secondary fs-10 mb-0">
600 / 600
                        </p>
                        <div className="progress" style={{"height":"3px"} as CSSProperties}>
                          <div className="progress-bar bg-success" style={{"width":"100%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} role="progressbar">                          </div>
                        </div>
                      </td>
                      <td className="align-middle white-space-nowrap ps-8">
                        <div className="progress progress-stack mt-3" style={{"height":"3px"} as CSSProperties}>
                          <div className="progress-bar bg-info" style={{"width":"24%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} role="progressbar" data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Active">                          </div>
                          <div className="progress-bar bg-danger" style={{"width":"5%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Damage" role="progressbar">                          </div>
                          <div className="progress-bar bg-warning" style={{"width":"35%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Pending" role="progressbar">                          </div>
                          <div className="progress-bar bg-success" style={{"width":"35%"} as CSSProperties} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Done" role="progressbar">                          </div>
                        </div>
                      </td>
                      <td className="align-middle text-end white-space-nowrap pe-0 action">
                        <div className="btn-reveal-trigger position-static">
                          <button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10">                            </span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end py-2">
                            <a href="#!" className="dropdown-item">
View
                            </a>
                            <a href="#!" className="dropdown-item">
Export
                            </a>
                            <div className="dropdown-divider">                            </div>
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
                  <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info>                  </p>
                  <a href="#!" className="fw-semibold"  data-list-view={"*"}>
View all                    <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                    </span>
                  </a>
                  <a href="#!" className="fw-semibold d-none"  data-list-view={"less"}>
View Less                    <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                    </span>
                  </a>
                </div>
                <div className="col-auto d-flex">
                  <button className="page-link" data-list-pagination={"prev"}>
                    <span className="fas fa-chevron-left">                    </span>
                  </button>
                  <ul className="mb-0 pagination">                  </ul>
                  <button className="page-link pe-0" data-list-pagination={"next"}>
                    <span className="fas fa-chevron-right">                    </span>
                  </button>
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
              <span className="d-none d-sm-inline-block">              </span>
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

    <div className="modal fade" id="searchBoxModal" tabIndex={-1} aria-hidden="true" data-bs-backdrop={"true"} data-phoenix-modal style={{"--phoenix-backdrop-opacity":"1"} as CSSProperties}>
      <div className="modal-dialog">
        <div className="modal-content mt-15 rounded-pill">
          <div className="modal-body p-0">
            <div className="search-box navbar-top-search-box" data-list={"{\"valueNames\":[\"title\"]}"} style={{"width":"auto"} as CSSProperties}>
              <form className="position-relative" data-bs-toggle={"search"} data-bs-display={"static"}>
                <input className="form-control search-input fuzzy-search rounded-pill form-control-lg" type="search" placeholder="Search..." aria-label="Search" />
                <span className="fas fa-search search-box-icon">                </span>
              </form>
              <div className="btn-close position-absolute end-0 top-50 translate-middle cursor-pointer shadow-none" data-bs-dismiss={"search"}>
                <button className="btn btn-link p-0" aria-label="Close">                </button>
              </div>
              <div className="dropdown-menu border start-0 py-0 overflow-hidden w-100">
                <div className="scrollbar-overlay" style={{"maxHeight":"30rem"} as CSSProperties}>
                  <div className="list pb-3">
                    <h6 className="dropdown-header text-body-highlight fs-10 py-2">
24 
                      <span className="text-body-quaternary">
results
                      </span>
                    </h6>
                    <hr className="my-0" />
                    <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
Recently Searched 
                    </h6>
                    <div className="py-2">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-solid fa-clock-rotate-left" data-fa-transform={"shrink-2"}>                            </span>
 Store Macbook
                          </div>
                        </div>
                      </PhoenixLink>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-solid fa-clock-rotate-left" data-fa-transform={"shrink-2"}>                            </span>
 MacBook Air - 13″
                          </div>
                        </div>
                      </PhoenixLink>
                    </div>
                    <hr className="my-0" />
                    <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
Products
                    </h6>
                    <div className="py-2">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item py-2 d-flex align-items-center">
                        <div className="file-thumbnail me-2">
                          <PhoenixImage src="/assets/img/products/60x60/3.png" alt="" className="h-100 w-100 object-fit-cover rounded-3" />
                        </div>                        <div className="flex-1">
                          <h6 className="mb-0 text-body-highlight title">
MacBook Air - 13″
                          </h6>
                          <p className="fs-10 mb-0 d-flex text-body-tertiary">
                            <span className="fw-medium text-body-tertiary text-opactity-85">
8GB Memory - 1.6GHz - 128GB Storage
                            </span>
                          </p>
                        </div>
                      </PhoenixLink>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item py-2 d-flex align-items-center">
                        <div className="file-thumbnail me-2">
                          <PhoenixImage src="/assets/img/products/60x60/3.png" alt="" className="img-fluid" />
                        </div>                        <div className="flex-1">
                          <h6 className="mb-0 text-body-highlight title">
MacBook Pro - 13″
                          </h6>
                          <p className="fs-10 mb-0 d-flex text-body-tertiary">
                            <span className="fw-medium text-body-tertiary text-opactity-85">
30 Sep at 12:30 PM
                            </span>
                          </p>
                        </div>
                      </PhoenixLink>
                    </div>
                    <hr className="my-0" />
                    <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
Quick Links
                    </h6>
                    <div className="py-2">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-solid fa-link text-body" data-fa-transform={"shrink-2"}>                            </span>
 Support MacBook House
                          </div>
                        </div>
                      </PhoenixLink>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-solid fa-link text-body" data-fa-transform={"shrink-2"}>                            </span>
 Store MacBook″
                          </div>
                        </div>
                      </PhoenixLink>
                    </div>
                    <hr className="my-0" />
                    <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
Files
                    </h6>
                    <div className="py-2">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-solid fa-file-zipper text-body" data-fa-transform={"shrink-2"}>                            </span>
 Library MacBook folder.rar
                          </div>
                        </div>
                      </PhoenixLink>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-solid fa-file-lines text-body" data-fa-transform={"shrink-2"}>                            </span>
 Feature MacBook extensions.txt
                          </div>
                        </div>
                      </PhoenixLink>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-solid fa-image text-body" data-fa-transform={"shrink-2"}>                            </span>
 MacBook Pro_13.jpg
                          </div>
                        </div>
                      </PhoenixLink>
                    </div>
                    <hr className="my-0" />
                    <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
Members
                    </h6>
                    <div className="py-2">
                      <PhoenixLink href="/pages/members" className="dropdown-item py-2 d-flex align-items-center">
                        <div className="avatar avatar-l status-online  me-2 text-body">
                          <PhoenixImage src="/assets/img/team/40x40/10.webp" alt="" className="rounded-circle " />
                        </div>                        <div className="flex-1">
                          <h6 className="mb-0 text-body-highlight title">
Carry Anna
                          </h6>
                          <p className="fs-10 mb-0 d-flex text-body-tertiary">
anna@technext.it
                          </p>
                        </div>
                      </PhoenixLink>
                      <PhoenixLink href="/pages/members" className="dropdown-item py-2 d-flex align-items-center">
                        <div className="avatar avatar-l  me-2 text-body">
                          <PhoenixImage src="/assets/img/team/40x40/12.webp" alt="" className="rounded-circle " />
                        </div>                        <div className="flex-1">
                          <h6 className="mb-0 text-body-highlight title">
John Smith
                          </h6>
                          <p className="fs-10 mb-0 d-flex text-body-tertiary">
smith@technext.it
                          </p>
                        </div>
                      </PhoenixLink>
                    </div>
                    <hr className="my-0" />
                    <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
Related Searches
                    </h6>
                    <div className="py-2">
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-brands fa-firefox-browser text-body" data-fa-transform={"shrink-2"}>                            </span>
 Search in the Web MacBook
                          </div>
                        </div>
                      </PhoenixLink>
                      <PhoenixLink href="/apps/e-commerce/landing/product-details" className="dropdown-item">
                        <div className="d-flex align-items-center">
                          <div className="fw-normal text-body-highlight title">
                            <span className="fa-brands fa-chrome text-body" data-fa-transform={"shrink-2"}>                            </span>
 Store MacBook″
                          </div>
                        </div>
                      </PhoenixLink>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="fallback fw-bold fs-7 d-none">
No Result Found.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="support-chat-container">
      <div className="container-fluid support-chat">
        <div className="card bg-body-emphasis">
          <div className="card-header d-flex flex-between-center px-4 py-3 border-bottom border-translucent">
            <h5 className="mb-0 d-flex align-items-center gap-2">
Demo widget
              <span className="fa-solid fa-circle text-success fs-11">              </span>
            </h5>
            <div className="btn-reveal-trigger">
              <button className="btn btn-link p-0 dropdown-toggle dropdown-caret-none transition-none d-flex" type="button" id="support-chat-dropdown" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                <span className="fas fa-ellipsis-h text-body">                </span>
              </button>
              <div className="dropdown-menu dropdown-menu-end py-2" aria-labelledby="support-chat-dropdown">
                <a href="#!" className="dropdown-item">
Request a callback
                </a>
                <a href="#!" className="dropdown-item">
Search in chat
                </a>
                <a href="#!" className="dropdown-item">
Show history
                </a>
                <a href="#!" className="dropdown-item">
Report to Admin
                </a>
                <a href="#!" className="dropdown-item btn-support-chat">
Close Support
                </a>
              </div>
            </div>
          </div>
          <div className="card-body chat p-0">
            <div className="d-flex flex-column-reverse scrollbar h-100 p-3">
              <div className="text-end mt-6">
                <a href="#!" className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3">
                  <p className="mb-0 fw-semibold fs-9">
I need help with something
                  </p>                  <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3">                  </span>
                </a>
                <a href="#!" className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3">
                  <p className="mb-0 fw-semibold fs-9">
I can’t reorder a product I previously ordered
                  </p>                  <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3">                  </span>
                </a>
                <a href="#!" className="mb-2 d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3">
                  <p className="mb-0 fw-semibold fs-9">
How do I place an order?
                  </p>                  <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3">                  </span>
                </a>
                <a href="#!" className="false d-inline-flex align-items-center text-decoration-none text-body-emphasis bg-body-hover rounded-pill border border-primary py-2 ps-4 pe-3">
                  <p className="mb-0 fw-semibold fs-9">
My payment method not working
                  </p>                  <span className="fa-solid fa-paper-plane text-primary fs-9 ms-3">                  </span>
                </a>
              </div>
              <div className="text-center mt-auto">
                <div className="avatar avatar-3xl status-online">
                  <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle border border-3 border-light-subtle" />
                </div>
                <h5 className="mt-2 mb-3">
Eric
                </h5>
                <p className="text-center text-body-emphasis mb-0">
Ask us anything – we’ll get back to you here or by email within 24 hours.
                </p>
              </div>
            </div>
          </div>
          <div className="card-footer d-flex align-items-center gap-2 border-top border-translucent ps-3 pe-4 py-3">
            <div className="d-flex align-items-center flex-1 gap-3 border border-translucent rounded-pill px-4">
              <input className="form-control outline-none border-0 flex-1 fs-9 px-0" type="text" placeholder="Write message" />
              <label className="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0" htmlFor="supportChatPhotos">
                <span className="fa-solid fa-image">                </span>
              </label>
              <input className="d-none" type="file" accept="image/*" id="supportChatPhotos" />
              <label className="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0" htmlFor="supportChatAttachment">
                <span className="fa-solid fa-paperclip">                </span>
              </label>
              <input className="d-none" type="file" id="supportChatAttachment" />
            </div>
            <button className="btn p-0 border-0 send-btn">
              <span className="fa-solid fa-paper-plane fs-9">              </span>
            </button>
          </div>
        </div>
      </div>
      <button className="btn btn-support-chat p-0 border border-translucent">
        <span className="fs-8 btn-text text-primary text-nowrap">
Chat demo
        </span>
        <span className="ping-icon-wrapper mt-n4 ms-n6 mt-sm-0 ms-sm-2 position-absolute position-sm-relative">
          <span className="ping-icon-bg">          </span>
          <span className="fa-solid fa-circle ping-icon">          </span>
        </span>
        <span className="fa-solid fa-headset text-primary fs-8 d-sm-none">        </span>
        <span className="fa-solid fa-chevron-down text-primary fs-7">        </span>
      </button>
    </div>

    </div>
  );
}
