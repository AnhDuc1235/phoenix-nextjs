'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/phoenix/PhoenixImage';
import PhoenixLink from '@/components/phoenix/PhoenixLink';

export default function DashboardChrome() {
  return (
    <>
    <nav className="navbar navbar-vertical navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
        <div className="navbar-vertical-content">
          <ul className="navbar-nav flex-column" id="navbarVerticalNav">
            <li className="nav-item">
              <div className="nav-item-wrapper">
                <a href="#nv-home" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="true" aria-controls="nv-home">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"pie-chart"}>                      </span>
                    </span>
                    <span className="nav-link-text">
Home
                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent show" data-bs-parent={"#navbarVerticalCollapse"} id="nv-home">
                    <li className="collapsed-nav-item-title d-none">
Home 
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/index.html" className="nav-link active">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
E commerce
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/dashboard/project-management.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Project management
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/dashboard/crm.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
CRM
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/dashboard/travel-agency.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Travel agency
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/dashboard/stock.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Stock
                          </span>
                          <span className="badge ms-2 badge badge-phoenix badge-phoenix-warning ">
new
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/social/feed.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Social feed
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <p className="navbar-vertical-label">
Apps 
              </p>
              <hr className="navbar-vertical-line" />
              <div className="nav-item-wrapper">
                <a href="#nv-e-commerce" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-e-commerce">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"shopping-cart"}>                      </span>
                    </span>
                    <span className="nav-link-text">
E commerce
                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-e-commerce">
                    <li className="collapsed-nav-item-title d-none">
E commerce 
                    </li>
                    <li className="nav-item">
                      <a href="#nv-admin" className="nav-link dropdown-indicator"  data-bs-toggle={"collapse"} aria-expanded="true" aria-controls="nv-admin">
                        <div className="d-flex align-items-center">
                          <div className="dropdown-indicator-icon-wrapper">
                            <span className="fas fa-caret-right dropdown-indicator-icon">                            </span>
                          </div>
                          <span className="nav-link-text">
Admin
                          </span>
                        </div>
                      </a>
                      <div className="parent-wrapper">
                        <ul className="nav collapse parent show" data-bs-parent={"#e-commerce"} id="nv-admin">
                          <li className="nav-item">
                            <PhoenixLink href="/apps/e-commerce/admin/add-product.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Add product
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/apps/e-commerce/admin/products.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Products
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/apps/e-commerce/admin/customers.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Customers
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/apps/e-commerce/admin/customer-details.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Customer details
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/apps/e-commerce/admin/orders.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Orders
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/apps/e-commerce/admin/order-details.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Order details
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/apps/e-commerce/admin/refund.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Refund
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a href="#nv-customer" className="nav-link dropdown-indicator"  data-bs-toggle={"collapse"} aria-expanded="true" aria-controls="nv-customer">
                        <div className="d-flex align-items-center">
                          <div className="dropdown-indicator-icon-wrapper">
                            <span className="fas fa-caret-right dropdown-indicator-icon">                            </span>
                          </div>
                          <span className="nav-link-text">
Customer
                          </span>
                        </div>
                      </a>
                      <div className="parent-wrapper">
                        <ul className="nav collapse parent show" data-bs-parent={"#e-commerce"} id="nv-customer">
                          <li className="nav-item">
                            <PhoenixLink href="/apps/e-commerce/landing/homepage.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Homepage
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/apps/e-commerce/landing/product-details.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Product details
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/apps/e-commerce/landing/products-filter.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Products filter
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/apps/e-commerce/landing/cart.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Cart
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/apps/e-commerce/landing/checkout.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Checkout
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/apps/e-commerce/landing/shipping-info.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Shipping info
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/apps/e-commerce/landing/profile.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Profile
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/apps/e-commerce/landing/favourite-stores.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Favourite stores
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/apps/e-commerce/landing/wishlist.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Wishlist
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/apps/e-commerce/landing/order-tracking.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Order tracking
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/apps/e-commerce/landing/invoice.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Invoice
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <a href="#nv-CRM" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-CRM">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"phone"}>                      </span>
                    </span>
                    <span className="nav-link-text">
CRM
                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-CRM">
                    <li className="collapsed-nav-item-title d-none">
CRM 
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/crm/analytics.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Analytics
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/crm/deals.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Deals
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/crm/deal-details.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Deal details
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/crm/leads.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Leads
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/crm/lead-details.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Lead details
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/crm/reports.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Reports
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/crm/report-details.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Report details
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/crm/add-contact.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Add contact
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <a href="#nv-project-management" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-project-management">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"clipboard"}>                      </span>
                    </span>
                    <span className="nav-link-text">
Project management
                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-project-management">
                    <li className="collapsed-nav-item-title d-none">
Project management 
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/project-management/create-new.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Create new
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/project-management/project-list-view.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Project list view
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/project-management/project-card-view.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Project card view
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/project-management/project-board-view.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Project board view
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/project-management/todo-list.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Todo list
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/project-management/project-details.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Project details
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <a href="#nv-travel-agency" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-travel-agency">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"briefcase"}>                      </span>
                    </span>
                    <span className="nav-link-text">
Travel agency
                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-travel-agency">
                    <li className="collapsed-nav-item-title d-none">
Travel agency 
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/travel-agency/landing.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Landing
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <a href="#nv-hotel" className="nav-link dropdown-indicator"  data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-hotel">
                        <div className="d-flex align-items-center">
                          <div className="dropdown-indicator-icon-wrapper">
                            <span className="fas fa-caret-right dropdown-indicator-icon">                            </span>
                          </div>
                          <span className="nav-link-text">
Hotel
                          </span>
                        </div>
                      </a>
                      <div className="parent-wrapper">
                        <ul className="nav collapse parent" data-bs-parent={"#travel-agency"} id="nv-hotel">
                          <li className="nav-item">
                            <a href="#nv-hotel-admin" className="nav-link dropdown-indicator"  data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-hotel-admin">
                              <div className="d-flex align-items-center">
                                <div className="dropdown-indicator-icon-wrapper">
                                  <span className="fas fa-caret-right dropdown-indicator-icon">                                  </span>
                                </div>
                                <span className="nav-link-text">
Admin
                                </span>
                              </div>
                            </a>
                            <div className="parent-wrapper">
                              <ul className="nav collapse parent" data-bs-parent={"#hotel"} id="nv-hotel-admin">
                                <li className="nav-item">
                                  <PhoenixLink href="/apps/travel-agency/hotel/admin/add-property.html" className="nav-link">
                                    <div className="d-flex align-items-center">
                                      <span className="nav-link-text">
Add property
                                      </span>
                                    </div>
                                  </PhoenixLink>
                                </li>
                                <li className="nav-item">
                                  <PhoenixLink href="/apps/travel-agency/hotel/admin/add-room.html" className="nav-link">
                                    <div className="d-flex align-items-center">
                                      <span className="nav-link-text">
Add room
                                      </span>
                                    </div>
                                  </PhoenixLink>
                                </li>
                                <li className="nav-item">
                                  <PhoenixLink href="/apps/travel-agency/hotel/admin/room-listing.html" className="nav-link">
                                    <div className="d-flex align-items-center">
                                      <span className="nav-link-text">
Room listing
                                      </span>
                                    </div>
                                  </PhoenixLink>
                                </li>
                                <li className="nav-item">
                                  <PhoenixLink href="/apps/travel-agency/hotel/admin/room-search.html" className="nav-link">
                                    <div className="d-flex align-items-center">
                                      <span className="nav-link-text">
Search room
                                      </span>
                                    </div>
                                  </PhoenixLink>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a href="#nv-hotel-customer" className="nav-link dropdown-indicator"  data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-hotel-customer">
                              <div className="d-flex align-items-center">
                                <div className="dropdown-indicator-icon-wrapper">
                                  <span className="fas fa-caret-right dropdown-indicator-icon">                                  </span>
                                </div>
                                <span className="nav-link-text">
Customer
                                </span>
                              </div>
                            </a>
                            <div className="parent-wrapper">
                              <ul className="nav collapse parent" data-bs-parent={"#hotel"} id="nv-hotel-customer">
                                <li className="nav-item">
                                  <PhoenixLink href="/apps/travel-agency/hotel/customer/homepage.html" className="nav-link">
                                    <div className="d-flex align-items-center">
                                      <span className="nav-link-text">
Homepage
                                      </span>
                                    </div>
                                  </PhoenixLink>
                                </li>
                                <li className="nav-item">
                                  <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-details.html" className="nav-link">
                                    <div className="d-flex align-items-center">
                                      <span className="nav-link-text">
Hotel details
                                      </span>
                                    </div>
                                  </PhoenixLink>
                                </li>
                                <li className="nav-item">
                                  <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-compare.html" className="nav-link">
                                    <div className="d-flex align-items-center">
                                      <span className="nav-link-text">
Hotel compare
                                      </span>
                                    </div>
                                  </PhoenixLink>
                                </li>
                                <li className="nav-item">
                                  <PhoenixLink href="/apps/travel-agency/hotel/customer/checkout.html" className="nav-link">
                                    <div className="d-flex align-items-center">
                                      <span className="nav-link-text">
Checkout
                                      </span>
                                    </div>
                                  </PhoenixLink>
                                </li>
                                <li className="nav-item">
                                  <PhoenixLink href="/apps/travel-agency/hotel/customer/payment.html" className="nav-link">
                                    <div className="d-flex align-items-center">
                                      <span className="nav-link-text">
Payment
                                      </span>
                                    </div>
                                  </PhoenixLink>
                                </li>
                                <li className="nav-item">
                                  <PhoenixLink href="/apps/travel-agency/hotel/customer/gallery.html" className="nav-link">
                                    <div className="d-flex align-items-center">
                                      <span className="nav-link-text">
Gallery
                                      </span>
                                    </div>
                                  </PhoenixLink>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a href="#nv-flight" className="nav-link dropdown-indicator"  data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-flight">
                        <div className="d-flex align-items-center">
                          <div className="dropdown-indicator-icon-wrapper">
                            <span className="fas fa-caret-right dropdown-indicator-icon">                            </span>
                          </div>
                          <span className="nav-link-text">
Flight
                          </span>
                        </div>
                      </a>
                      <div className="parent-wrapper">
                        <ul className="nav collapse parent" data-bs-parent={"#travel-agency"} id="nv-flight">
                          <li className="nav-item">
                            <PhoenixLink href="/apps/travel-agency/flight/homepage.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Homepage
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/apps/travel-agency/flight/booking.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Booking
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/apps/travel-agency/flight/payment.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Payment
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a href="#nv-trip" className="nav-link dropdown-indicator"  data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-trip">
                        <div className="d-flex align-items-center">
                          <div className="dropdown-indicator-icon-wrapper">
                            <span className="fas fa-caret-right dropdown-indicator-icon">                            </span>
                          </div>
                          <span className="nav-link-text">
Trip
                          </span>
                        </div>
                      </a>
                      <div className="parent-wrapper">
                        <ul className="nav collapse parent" data-bs-parent={"#travel-agency"} id="nv-trip">
                          <li className="nav-item">
                            <PhoenixLink href="/apps/travel-agency/trip/homepage.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Homepage
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/apps/travel-agency/trip/trip-details.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Trip details
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/apps/travel-agency/trip/checkout.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Checkout
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <a href="#nv-stock" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-stock">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"dollar-sign"}>                      </span>
                    </span>
                    <span className="nav-link-text">
Stock
                    </span>
                    <span className="badge ms-2 badge badge-phoenix badge-phoenix-warning nav-link-badge">
new
                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-stock">
                    <li className="collapsed-nav-item-title d-none">
Stock 
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/stock/stock-details.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Stock details
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/stock/portfolio.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Portfolio
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/stock/watchlist.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Watchlist
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <PhoenixLink href="/apps/chat.html" className="nav-link label-1"  role="button" data-bs-toggle={""} aria-expanded="false">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span data-feather={"message-square"}>                      </span>
                    </span>
                    <span className="nav-link-text-wrapper">
                      <span className="nav-link-text">
Chat
                      </span>
                    </span>
                  </div>
                </PhoenixLink>
              </div>
              <div className="nav-item-wrapper">
                <a href="#nv-email" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-email">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"mail"}>                      </span>
                    </span>
                    <span className="nav-link-text">
Email
                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-email">
                    <li className="collapsed-nav-item-title d-none">
Email 
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/email/inbox.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Inbox
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/email/email-detail.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Email detail
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/email/compose.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Compose
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <a href="#nv-events" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-events">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"bookmark"}>                      </span>
                    </span>
                    <span className="nav-link-text">
Events
                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-events">
                    <li className="collapsed-nav-item-title d-none">
Events 
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/events/create-an-event.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Create an event
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/events/event-detail.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Event detail
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <a href="#nv-kanban" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-kanban">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"trello"}>                      </span>
                    </span>
                    <span className="nav-link-text">
Kanban
                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-kanban">
                    <li className="collapsed-nav-item-title d-none">
Kanban 
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/kanban/kanban.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Kanban
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/kanban/boards.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Boards
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/kanban/create-kanban-board.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Create board
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <PhoenixLink href="/apps/gantt-chart.html" className="nav-link label-1"  role="button" data-bs-toggle={""} aria-expanded="false">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fa-solid fa-chart-gantt ">                      </span>
                    </span>
                    <span className="nav-link-text-wrapper">
                      <span className="nav-link-text">
Gantt chart
                      </span>
                    </span>
                    <span className="badge ms-2 badge badge-phoenix badge-phoenix-warning nav-link-badge">
new
                    </span>
                  </div>
                </PhoenixLink>
              </div>
              <div className="nav-item-wrapper">
                <a href="#nv-social" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-social">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"share-2"}>                      </span>
                    </span>
                    <span className="nav-link-text">
Social
                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-social">
                    <li className="collapsed-nav-item-title d-none">
Social 
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/social/profile.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Profile
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/social/settings.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Settings
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <a href="#nv-gallery" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-gallery">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"image"}>                      </span>
                    </span>
                    <span className="nav-link-text">
Gallery
                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-gallery">
                    <li className="collapsed-nav-item-title d-none">
Gallery 
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/gallery/album.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Album
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/gallery/gallery-column.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Gallery column
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/gallery/gallery-grid.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Gallery grid
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/gallery/grid-with-title.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Grid with title
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/gallery/gallery-masonry.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Gallery masonry
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/gallery/gallery-slider.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Gallery slider
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <a href="#nv-file-manager" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-file-manager">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"folder"}>                      </span>
                    </span>
                    <span className="nav-link-text">
File manager
                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-file-manager">
                    <li className="collapsed-nav-item-title d-none">
File manager 
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/file-manager/grid-view.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Grid view
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/apps/file-manager/list-view.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
List view
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <PhoenixLink href="/apps/calendar.html" className="nav-link label-1"  role="button" data-bs-toggle={""} aria-expanded="false">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span data-feather={"calendar"}>                      </span>
                    </span>
                    <span className="nav-link-text-wrapper">
                      <span className="nav-link-text">
Calendar
                      </span>
                    </span>
                  </div>
                </PhoenixLink>
              </div>
            </li>
            <li className="nav-item">
              <p className="navbar-vertical-label">
Pages 
              </p>
              <hr className="navbar-vertical-line" />
              <div className="nav-item-wrapper">
                <PhoenixLink href="/pages/starter.html" className="nav-link label-1"  role="button" data-bs-toggle={""} aria-expanded="false">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span data-feather={"compass"}>                      </span>
                    </span>
                    <span className="nav-link-text-wrapper">
                      <span className="nav-link-text">
Starter
                      </span>
                    </span>
                  </div>
                </PhoenixLink>
              </div>
              <div className="nav-item-wrapper">
                <a href="#nv-faq" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-faq">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"help-circle"}>                      </span>
                    </span>
                    <span className="nav-link-text">
Faq
                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-faq">
                    <li className="collapsed-nav-item-title d-none">
Faq 
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/pages/faq/faq-accordion.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Faq accordion
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/pages/faq/faq-tab.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Faq tab
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <a href="#nv-landing" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-landing">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"globe"}>                      </span>
                    </span>
                    <span className="nav-link-text">
Landing
                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-landing">
                    <li className="collapsed-nav-item-title d-none">
Landing 
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/pages/landing/default.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Default
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/pages/landing/alternate.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Alternate
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <a href="#nv-pricing" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-pricing">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"tag"}>                      </span>
                    </span>
                    <span className="nav-link-text">
Pricing
                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-pricing">
                    <li className="collapsed-nav-item-title d-none">
Pricing 
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/pages/pricing/pricing-column.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Pricing column
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/pages/pricing/pricing-grid.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Pricing grid
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <PhoenixLink href="/pages/notifications.html" className="nav-link label-1"  role="button" data-bs-toggle={""} aria-expanded="false">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span data-feather={"bell"}>                      </span>
                    </span>
                    <span className="nav-link-text-wrapper">
                      <span className="nav-link-text">
Notifications
                      </span>
                    </span>
                  </div>
                </PhoenixLink>
              </div>
              <div className="nav-item-wrapper">
                <PhoenixLink href="/pages/members.html" className="nav-link label-1"  role="button" data-bs-toggle={""} aria-expanded="false">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span data-feather={"users"}>                      </span>
                    </span>
                    <span className="nav-link-text-wrapper">
                      <span className="nav-link-text">
Members
                      </span>
                    </span>
                  </div>
                </PhoenixLink>
              </div>
              <div className="nav-item-wrapper">
                <PhoenixLink href="/pages/timeline.html" className="nav-link label-1"  role="button" data-bs-toggle={""} aria-expanded="false">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span data-feather={"clock"}>                      </span>
                    </span>
                    <span className="nav-link-text-wrapper">
                      <span className="nav-link-text">
Timeline
                      </span>
                    </span>
                  </div>
                </PhoenixLink>
              </div>
              <div className="nav-item-wrapper">
                <a href="#nv-errors" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-errors">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"alert-triangle"}>                      </span>
                    </span>
                    <span className="nav-link-text">
Errors
                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-errors">
                    <li className="collapsed-nav-item-title d-none">
Errors 
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/pages/errors/404.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
404
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/pages/errors/403.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
403
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/pages/errors/500.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
500
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <a href="#nv-authentication" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-authentication">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"lock"}>                      </span>
                    </span>
                    <span className="nav-link-text">
Authentication
                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-authentication">
                    <li className="collapsed-nav-item-title d-none">
Authentication 
                    </li>
                    <li className="nav-item">
                      <a href="#nv-simple" className="nav-link dropdown-indicator"  data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-simple">
                        <div className="d-flex align-items-center">
                          <div className="dropdown-indicator-icon-wrapper">
                            <span className="fas fa-caret-right dropdown-indicator-icon">                            </span>
                          </div>
                          <span className="nav-link-text">
Simple
                          </span>
                        </div>
                      </a>
                      <div className="parent-wrapper">
                        <ul className="nav collapse parent" data-bs-parent={"#authentication"} id="nv-simple">
                          <li className="nav-item">
                            <PhoenixLink href="/pages/authentication/simple/sign-in.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Sign in
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/pages/authentication/simple/sign-up.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Sign up
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/pages/authentication/simple/sign-out.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Sign out
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/pages/authentication/simple/forgot-password.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Forgot password
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/pages/authentication/simple/reset-password.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Reset password
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/pages/authentication/simple/lock-screen.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Lock screen
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/pages/authentication/simple/2FA.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
2FA
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a href="#nv-split" className="nav-link dropdown-indicator"  data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-split">
                        <div className="d-flex align-items-center">
                          <div className="dropdown-indicator-icon-wrapper">
                            <span className="fas fa-caret-right dropdown-indicator-icon">                            </span>
                          </div>
                          <span className="nav-link-text">
Split
                          </span>
                        </div>
                      </a>
                      <div className="parent-wrapper">
                        <ul className="nav collapse parent" data-bs-parent={"#authentication"} id="nv-split">
                          <li className="nav-item">
                            <PhoenixLink href="/pages/authentication/split/sign-in.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Sign in
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/pages/authentication/split/sign-up.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Sign up
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/pages/authentication/split/sign-out.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Sign out
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/pages/authentication/split/forgot-password.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Forgot password
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/pages/authentication/split/reset-password.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Reset password
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/pages/authentication/split/lock-screen.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Lock screen
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/pages/authentication/split/2FA.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
2FA
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a href="#nv-Card" className="nav-link dropdown-indicator"  data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-Card">
                        <div className="d-flex align-items-center">
                          <div className="dropdown-indicator-icon-wrapper">
                            <span className="fas fa-caret-right dropdown-indicator-icon">                            </span>
                          </div>
                          <span className="nav-link-text">
Card
                          </span>
                        </div>
                      </a>
                      <div className="parent-wrapper">
                        <ul className="nav collapse parent" data-bs-parent={"#authentication"} id="nv-Card">
                          <li className="nav-item">
                            <PhoenixLink href="/pages/authentication/card/sign-in.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Sign in
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/pages/authentication/card/sign-up.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Sign up
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/pages/authentication/card/sign-out.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Sign out
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/pages/authentication/card/forgot-password.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Forgot password
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/pages/authentication/card/reset-password.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Reset password
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/pages/authentication/card/lock-screen.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Lock screen
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/pages/authentication/card/2FA.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
2FA
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <a href="#nv-layouts" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-layouts">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"layout"}>                      </span>
                    </span>
                    <span className="nav-link-text">
Layouts
                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-layouts">
                    <li className="collapsed-nav-item-title d-none">
Layouts 
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/demo/vertical-sidenav.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Vertical sidenav
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/demo/dark-mode.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Dark mode
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/demo/sidenav-collapse.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Sidenav collapse
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/demo/darknav.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Darknav
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/demo/topnav-slim.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Topnav slim
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/demo/navbar-horizontal.html" className="nav-link"  target="_blank">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Navbar horizontal
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/demo/horizontal-slim.html" className="nav-link"  target="_blank">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Horizontal slim
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/demo/combo-nav.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Combo nav
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/demo/combo-nav-slim.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Combo nav slim
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/demo/dual-nav.html" className="nav-link"  target="_blank">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Dual nav
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <p className="navbar-vertical-label">
Modules 
              </p>
              <hr className="navbar-vertical-line" />
              <div className="nav-item-wrapper">
                <a href="#nv-forms" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-forms">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"file-text"}>                      </span>
                    </span>
                    <span className="nav-link-text">
Forms
                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-forms">
                    <li className="collapsed-nav-item-title d-none">
Forms 
                    </li>
                    <li className="nav-item">
                      <a href="#nv-basic" className="nav-link dropdown-indicator"  data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-basic">
                        <div className="d-flex align-items-center">
                          <div className="dropdown-indicator-icon-wrapper">
                            <span className="fas fa-caret-right dropdown-indicator-icon">                            </span>
                          </div>
                          <span className="nav-link-text">
Basic
                          </span>
                        </div>
                      </a>
                      <div className="parent-wrapper">
                        <ul className="nav collapse parent" data-bs-parent={"#forms"} id="nv-basic">
                          <li className="nav-item">
                            <PhoenixLink href="/modules/forms/basic/form-control.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Form control
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/modules/forms/basic/input-group.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Input group
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/modules/forms/basic/select.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Select
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/modules/forms/basic/checks.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Checks
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/modules/forms/basic/range.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Range
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/modules/forms/basic/floating-labels.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Floating labels
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/modules/forms/basic/layout.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Layout
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a href="#nv-advance" className="nav-link dropdown-indicator"  data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-advance">
                        <div className="d-flex align-items-center">
                          <div className="dropdown-indicator-icon-wrapper">
                            <span className="fas fa-caret-right dropdown-indicator-icon">                            </span>
                          </div>
                          <span className="nav-link-text">
Advance
                          </span>
                        </div>
                      </a>
                      <div className="parent-wrapper">
                        <ul className="nav collapse parent" data-bs-parent={"#forms"} id="nv-advance">
                          <li className="nav-item">
                            <PhoenixLink href="/modules/forms/advance/advance-select.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Advance select
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/modules/forms/advance/date-picker.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Date picker
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/modules/forms/advance/editor.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Editor
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/modules/forms/advance/file-uploader.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
File uploader
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/modules/forms/advance/range.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Range
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/modules/forms/advance/rating.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Rating
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/modules/forms/advance/emoji-button.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Emoji button
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/forms/validation.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Validation
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/forms/wizard.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Wizard
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <a href="#nv-icons" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-icons">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"grid"}>                      </span>
                    </span>
                    <span className="nav-link-text">
Icons
                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-icons">
                    <li className="collapsed-nav-item-title d-none">
Icons 
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/icons/feather.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Feather
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/icons/font-awesome.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Font awesome
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/icons/unicons.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Unicons
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <a href="#nv-tables" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-tables">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"columns"}>                      </span>
                    </span>
                    <span className="nav-link-text">
Tables
                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-tables">
                    <li className="collapsed-nav-item-title d-none">
Tables 
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/tables/basic-tables.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Basic tables
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/tables/advance-tables.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Advance tables
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/tables/bulk-select.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Bulk Select
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <a href="#nv-ECharts" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-ECharts">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"bar-chart-2"}>                      </span>
                    </span>
                    <span className="nav-link-text">
ECharts
                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-ECharts">
                    <li className="collapsed-nav-item-title d-none">
ECharts 
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/echarts/line-charts.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Line charts
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/echarts/bar-charts.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Bar charts
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/echarts/candlestick-charts.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Candlestick charts
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/echarts/geo-map.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Geo map
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/echarts/scatter-charts.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Scatter charts
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/echarts/pie-charts.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Pie charts
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/echarts/gauge-chart.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Gauge chart
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/echarts/radar-charts.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Radar charts
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/echarts/heatmap-charts.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Heatmap charts
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/echarts/how-to-use.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
How to use
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <a href="#nv-components" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-components">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"package"}>                      </span>
                    </span>
                    <span className="nav-link-text">
Components
                    </span>
                    <span className="fa-solid fa-circle text-info ms-1 new-page-indicator" style={{"fontSize":"6px"} as CSSProperties}>                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-components">
                    <li className="collapsed-nav-item-title d-none">
Components 
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/components/accordion.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Accordion
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/components/avatar.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Avatar
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/components/alerts.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Alerts
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/components/badge.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Badge
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/components/breadcrumb.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Breadcrumb
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/components/button.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Buttons
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/components/calendar.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Calendar
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/components/card.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Card
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <a href="#nv-carousel" className="nav-link dropdown-indicator"  data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-carousel">
                        <div className="d-flex align-items-center">
                          <div className="dropdown-indicator-icon-wrapper">
                            <span className="fas fa-caret-right dropdown-indicator-icon">                            </span>
                          </div>
                          <span className="nav-link-text">
Carousel
                          </span>
                        </div>
                      </a>
                      <div className="parent-wrapper">
                        <ul className="nav collapse parent" data-bs-parent={"#components"} id="nv-carousel">
                          <li className="nav-item">
                            <PhoenixLink href="/modules/components/carousel/bootstrap.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Bootstrap
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/modules/components/carousel/swiper.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Swiper
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/components/collapse.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Collapse
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/components/dropdown.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Dropdown
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/components/dhtmlx-gantt.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Dhtmlx gantt
                          </span>
                          <span className="badge ms-2 badge badge-phoenix badge-phoenix-warning ">
new
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/components/list-group.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
List group
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/components/modal.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Modals
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <a href="#nv-navs-_and_-Tabs" className="nav-link dropdown-indicator"  data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-navs-_and_-Tabs">
                        <div className="d-flex align-items-center">
                          <div className="dropdown-indicator-icon-wrapper">
                            <span className="fas fa-caret-right dropdown-indicator-icon">                            </span>
                          </div>
                          <span className="nav-link-text">
{"Navs & Tabs"}
                          </span>
                        </div>
                      </a>
                      <div className="parent-wrapper">
                        <ul className="nav collapse parent" data-bs-parent={"#components"} id="nv-navs-_and_-Tabs">
                          <li className="nav-item">
                            <PhoenixLink href="/modules/components/navs-and-tabs/navs.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Navs
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/modules/components/navs-and-tabs/navbar.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Navbar
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                          <li className="nav-item">
                            <PhoenixLink href="/modules/components/navs-and-tabs/tabs.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Tabs
                                </span>
                              </div>
                            </PhoenixLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/components/offcanvas.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Offcanvas
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/components/progress-bar.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Progress bar
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/components/placeholder.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Placeholder
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/components/pagination.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Pagination
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/components/popovers.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Popovers
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/components/scrollspy.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Scrollspy
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/components/sortable.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Sortable
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/components/spinners.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Spinners
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/components/toast.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Toast
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/components/tooltips.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Tooltips
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/components/typed-text.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Typed text
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/components/chat-widget.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Chat widget
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <a href="#nv-utilities" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-utilities">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"tool"}>                      </span>
                    </span>
                    <span className="nav-link-text">
Utilities
                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-utilities">
                    <li className="collapsed-nav-item-title d-none">
Utilities 
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/utilities/background.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Background
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/utilities/borders.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Borders
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/utilities/colors.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Colors
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/utilities/display.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Display
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/utilities/flex.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Flex
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/utilities/stacks.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Stacks
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/utilities/float.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Float
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/utilities/grid.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Grid
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/utilities/interactions.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Interactions
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/utilities/opacity.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Opacity
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/utilities/overflow.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Overflow
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/utilities/position.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Position
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/utilities/shadows.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Shadows
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/utilities/sizing.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Sizing
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/utilities/spacing.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Spacing
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/utilities/typography.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Typography
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/utilities/vertical-align.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Vertical align
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/modules/utilities/visibility.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Visibility
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <PhoenixLink href="/widgets.html" className="nav-link label-1"  role="button" data-bs-toggle={""} aria-expanded="false">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span data-feather={"server"}>                      </span>
                    </span>
                    <span className="nav-link-text-wrapper">
                      <span className="nav-link-text">
Widgets
                      </span>
                    </span>
                  </div>
                </PhoenixLink>
              </div>
              <div className="nav-item-wrapper">
                <a href="#nv-multi-level" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-multi-level">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"layers"}>                      </span>
                    </span>
                    <span className="nav-link-text">
Multi level
                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-multi-level">
                    <li className="collapsed-nav-item-title d-none">
Multi level 
                    </li>
                    <li className="nav-item">
                      <a href="#nv-level-two" className="nav-link dropdown-indicator"  data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-level-two">
                        <div className="d-flex align-items-center">
                          <div className="dropdown-indicator-icon-wrapper">
                            <span className="fas fa-caret-right dropdown-indicator-icon">                            </span>
                          </div>
                          <span className="nav-link-text">
Level two
                          </span>
                        </div>
                      </a>
                      <div className="parent-wrapper">
                        <ul className="nav collapse parent" data-bs-parent={"#multi-level"} id="nv-level-two">
                          <li className="nav-item">
                            <a href="#!.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Item 1
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#!.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Item 2
                                </span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a href="#nv-level-three" className="nav-link dropdown-indicator"  data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-level-three">
                        <div className="d-flex align-items-center">
                          <div className="dropdown-indicator-icon-wrapper">
                            <span className="fas fa-caret-right dropdown-indicator-icon">                            </span>
                          </div>
                          <span className="nav-link-text">
Level three
                          </span>
                        </div>
                      </a>
                      <div className="parent-wrapper">
                        <ul className="nav collapse parent" data-bs-parent={"#multi-level"} id="nv-level-three">
                          <li className="nav-item">
                            <a href="#!.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Item 3
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#nv-item-4" className="nav-link dropdown-indicator"  data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-item-4">
                              <div className="d-flex align-items-center">
                                <div className="dropdown-indicator-icon-wrapper">
                                  <span className="fas fa-caret-right dropdown-indicator-icon">                                  </span>
                                </div>
                                <span className="nav-link-text">
Item 4
                                </span>
                              </div>
                            </a>
                            <div className="parent-wrapper">
                              <ul className="nav collapse parent" data-bs-parent={"#level-three"} id="nv-item-4">
                                <li className="nav-item">
                                  <a href="#!.html" className="nav-link">
                                    <div className="d-flex align-items-center">
                                      <span className="nav-link-text">
Item 5
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="#!.html" className="nav-link">
                                    <div className="d-flex align-items-center">
                                      <span className="nav-link-text">
Item 6
                                      </span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a href="#nv-level-four" className="nav-link dropdown-indicator"  data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-level-four">
                        <div className="d-flex align-items-center">
                          <div className="dropdown-indicator-icon-wrapper">
                            <span className="fas fa-caret-right dropdown-indicator-icon">                            </span>
                          </div>
                          <span className="nav-link-text">
Level four
                          </span>
                        </div>
                      </a>
                      <div className="parent-wrapper">
                        <ul className="nav collapse parent" data-bs-parent={"#multi-level"} id="nv-level-four">
                          <li className="nav-item">
                            <a href="#!.html" className="nav-link">
                              <div className="d-flex align-items-center">
                                <span className="nav-link-text">
Item 6
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#nv-item-7" className="nav-link dropdown-indicator"  data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-item-7">
                              <div className="d-flex align-items-center">
                                <div className="dropdown-indicator-icon-wrapper">
                                  <span className="fas fa-caret-right dropdown-indicator-icon">                                  </span>
                                </div>
                                <span className="nav-link-text">
Item 7
                                </span>
                              </div>
                            </a>
                            <div className="parent-wrapper">
                              <ul className="nav collapse parent" data-bs-parent={"#level-four"} id="nv-item-7">
                                <li className="nav-item">
                                  <a href="#!.html" className="nav-link">
                                    <div className="d-flex align-items-center">
                                      <span className="nav-link-text">
Item 8
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a href="#nv-item-9" className="nav-link dropdown-indicator"  data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-item-9">
                                    <div className="d-flex align-items-center">
                                      <div className="dropdown-indicator-icon-wrapper">
                                        <span className="fas fa-caret-right dropdown-indicator-icon">                                        </span>
                                      </div>
                                      <span className="nav-link-text">
Item 9
                                      </span>
                                    </div>
                                  </a>
                                  <div className="parent-wrapper">
                                    <ul className="nav collapse parent" data-bs-parent={"#item-7"} id="nv-item-9">
                                      <li className="nav-item">
                                        <a href="#!.html" className="nav-link">
                                          <div className="d-flex align-items-center">
                                            <span className="nav-link-text">
Item 10
                                            </span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="nav-item">
                                        <a href="#!.html" className="nav-link">
                                          <div className="d-flex align-items-center">
                                            <span className="nav-link-text">
Item 11
                                            </span>
                                          </div>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <p className="navbar-vertical-label">
Documentation 
              </p>
              <hr className="navbar-vertical-line" />
              <div className="nav-item-wrapper">
                <PhoenixLink href="/documentation/getting-started.html" className="nav-link label-1"  role="button" data-bs-toggle={""} aria-expanded="false">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span data-feather={"life-buoy"}>                      </span>
                    </span>
                    <span className="nav-link-text-wrapper">
                      <span className="nav-link-text">
Getting started
                      </span>
                    </span>
                  </div>
                </PhoenixLink>
              </div>
              <div className="nav-item-wrapper">
                <a href="#nv-customization" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-customization">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"settings"}>                      </span>
                    </span>
                    <span className="nav-link-text">
Customization
                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-customization">
                    <li className="collapsed-nav-item-title d-none">
Customization 
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/documentation/customization/configuration.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Configuration
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/documentation/customization/styling.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Styling
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/documentation/customization/color.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Color
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/documentation/customization/dark-mode.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Dark mode
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/documentation/customization/plugin.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Plugin
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <a href="#nv-layouts-doc" className="nav-link dropdown-indicator label-1"  role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-layouts-doc">
                  <div className="d-flex align-items-center">
                    <div className="dropdown-indicator-icon-wrapper">
                      <span className="fas fa-caret-right dropdown-indicator-icon">                      </span>
                    </div>
                    <span className="nav-link-icon">
                      <span data-feather={"table"}>                      </span>
                    </span>
                    <span className="nav-link-text">
Layouts doc
                    </span>
                  </div>
                </a>
                <div className="parent-wrapper label-1">
                  <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-layouts-doc">
                    <li className="collapsed-nav-item-title d-none">
Layouts doc 
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/documentation/layouts/vertical-navbar.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Vertical navbar
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/documentation/layouts/horizontal-navbar.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Horizontal navbar
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/documentation/layouts/combo-navbar.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Combo navbar
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                    <li className="nav-item">
                      <PhoenixLink href="/documentation/layouts/dual-nav.html" className="nav-link">
                        <div className="d-flex align-items-center">
                          <span className="nav-link-text">
Dual nav
                          </span>
                        </div>
                      </PhoenixLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav-item-wrapper">
                <PhoenixLink href="/documentation/gulp.html" className="nav-link label-1"  role="button" data-bs-toggle={""} aria-expanded="false">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span className="fa-brands fa-gulp ms-1 me-1 fa-lg">                      </span>
                    </span>
                    <span className="nav-link-text-wrapper">
                      <span className="nav-link-text">
Gulp
                      </span>
                    </span>
                  </div>
                </PhoenixLink>
              </div>
              <div className="nav-item-wrapper">
                <PhoenixLink href="/documentation/design-file.html" className="nav-link label-1"  role="button" data-bs-toggle={""} aria-expanded="false">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span data-feather={"figma"}>                      </span>
                    </span>
                    <span className="nav-link-text-wrapper">
                      <span className="nav-link-text">
Design file
                      </span>
                    </span>
                  </div>
                </PhoenixLink>
              </div>
              <div className="nav-item-wrapper">
                <PhoenixLink href="/changelog.html" className="nav-link label-1"  role="button" data-bs-toggle={""} aria-expanded="false">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span data-feather={"git-merge"}>                      </span>
                    </span>
                    <span className="nav-link-text-wrapper">
                      <span className="nav-link-text">
Changelog
                      </span>
                    </span>
                  </div>
                </PhoenixLink>
              </div>
              <div className="nav-item-wrapper">
                <PhoenixLink href="/showcase.html" className="nav-link label-1"  role="button" data-bs-toggle={""} aria-expanded="false">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                      <span data-feather={"monitor"}>                      </span>
                    </span>
                    <span className="nav-link-text-wrapper">
                      <span className="nav-link-text">
Showcase
                      </span>
                    </span>
                  </div>
                </PhoenixLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-vertical-footer">
        <button className="btn navbar-vertical-toggle border-0 fw-semibold w-100 white-space-nowrap d-flex align-items-center">
          <span className="uil uil-left-arrow-to-left fs-8">          </span>
          <span className="uil uil-arrow-from-right fs-8">          </span>
          <span className="navbar-vertical-footer-text ms-2">
Collapsed View
          </span>
        </button>
      </div>
    </nav>

    <nav className="navbar navbar-top fixed-top navbar-expand" id="navbarDefault">
      <div className="collapse navbar-collapse justify-content-between">
        <div className="navbar-logo">
          <button className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent" type="button" data-bs-toggle={"collapse"} data-bs-target={"#navbarVerticalCollapse"} aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation">
            <span className="navbar-toggle-icon">
              <span className="toggle-line">              </span>
            </span>
          </button>
          <PhoenixLink href="/index.html" className="navbar-brand me-1 me-sm-3">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <PhoenixImage src="/assets/img/icons/logo.png" alt="phoenix" width={27} />
                <h5 className="logo-text ms-2 d-none d-sm-block">
phoenix
                </h5>
              </div>
            </div>
          </PhoenixLink>
        </div>
        <div className="search-box navbar-top-search-box d-none d-lg-block" data-list={"{\"valueNames\":[\"title\"]}"} style={{"width":"25rem"} as CSSProperties}>
          <form className="position-relative" data-bs-toggle={"search"} data-bs-display={"static"}>
            <input className="form-control search-input fuzzy-search rounded-pill form-control-sm" type="search" placeholder="Search..." aria-label="Search" />
            <span className="fas fa-search search-box-icon">            </span>
          </form>
          <div className="btn-close position-absolute end-0 top-50 translate-middle cursor-pointer shadow-none" data-bs-dismiss={"search"}>
            <button className="btn btn-link p-0" aria-label="Close">            </button>
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
                  <PhoenixLink href="/apps/e-commerce/landing/product-details.html" className="dropdown-item">
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-body-highlight title">
                        <span className="fa-solid fa-clock-rotate-left" data-fa-transform={"shrink-2"}>                        </span>
 Store Macbook
                      </div>
                    </div>
                  </PhoenixLink>
                  <PhoenixLink href="/apps/e-commerce/landing/product-details.html" className="dropdown-item">
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-body-highlight title">
                        <span className="fa-solid fa-clock-rotate-left" data-fa-transform={"shrink-2"}>                        </span>
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
                  <PhoenixLink href="/apps/e-commerce/landing/product-details.html" className="dropdown-item py-2 d-flex align-items-center">
                    <div className="file-thumbnail me-2">
                      <PhoenixImage src="/assets/img/products/60x60/3.png" alt="" className="h-100 w-100 object-fit-cover rounded-3" />
                    </div>                    <div className="flex-1">
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
                  <PhoenixLink href="/apps/e-commerce/landing/product-details.html" className="dropdown-item py-2 d-flex align-items-center">
                    <div className="file-thumbnail me-2">
                      <PhoenixImage src="/assets/img/products/60x60/3.png" alt="" className="img-fluid" />
                    </div>                    <div className="flex-1">
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
                  <PhoenixLink href="/apps/e-commerce/landing/product-details.html" className="dropdown-item">
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-body-highlight title">
                        <span className="fa-solid fa-link text-body" data-fa-transform={"shrink-2"}>                        </span>
 Support MacBook House
                      </div>
                    </div>
                  </PhoenixLink>
                  <PhoenixLink href="/apps/e-commerce/landing/product-details.html" className="dropdown-item">
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-body-highlight title">
                        <span className="fa-solid fa-link text-body" data-fa-transform={"shrink-2"}>                        </span>
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
                  <PhoenixLink href="/apps/e-commerce/landing/product-details.html" className="dropdown-item">
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-body-highlight title">
                        <span className="fa-solid fa-file-zipper text-body" data-fa-transform={"shrink-2"}>                        </span>
 Library MacBook folder.rar
                      </div>
                    </div>
                  </PhoenixLink>
                  <PhoenixLink href="/apps/e-commerce/landing/product-details.html" className="dropdown-item">
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-body-highlight title">
                        <span className="fa-solid fa-file-lines text-body" data-fa-transform={"shrink-2"}>                        </span>
 Feature MacBook extensions.txt
                      </div>
                    </div>
                  </PhoenixLink>
                  <PhoenixLink href="/apps/e-commerce/landing/product-details.html" className="dropdown-item">
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-body-highlight title">
                        <span className="fa-solid fa-image text-body" data-fa-transform={"shrink-2"}>                        </span>
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
                  <PhoenixLink href="/pages/members.html" className="dropdown-item py-2 d-flex align-items-center">
                    <div className="avatar avatar-l status-online  me-2 text-body">
                      <PhoenixImage src="/assets/img/team/40x40/10.webp" alt="" className="rounded-circle " />
                    </div>                    <div className="flex-1">
                      <h6 className="mb-0 text-body-highlight title">
Carry Anna
                      </h6>
                      <p className="fs-10 mb-0 d-flex text-body-tertiary">
anna@technext.it
                      </p>
                    </div>
                  </PhoenixLink>
                  <PhoenixLink href="/pages/members.html" className="dropdown-item py-2 d-flex align-items-center">
                    <div className="avatar avatar-l  me-2 text-body">
                      <PhoenixImage src="/assets/img/team/40x40/12.webp" alt="" className="rounded-circle " />
                    </div>                    <div className="flex-1">
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
                  <PhoenixLink href="/apps/e-commerce/landing/product-details.html" className="dropdown-item">
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-body-highlight title">
                        <span className="fa-brands fa-firefox-browser text-body" data-fa-transform={"shrink-2"}>                        </span>
 Search in the Web MacBook
                      </div>
                    </div>
                  </PhoenixLink>
                  <PhoenixLink href="/apps/e-commerce/landing/product-details.html" className="dropdown-item">
                    <div className="d-flex align-items-center">
                      <div className="fw-normal text-body-highlight title">
                        <span className="fa-brands fa-chrome text-body" data-fa-transform={"shrink-2"}>                        </span>
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
        <ul className="navbar-nav navbar-nav-icons flex-row">
          <li className="nav-item">
            <div className="theme-control-toggle fa-icon-wait px-2">
              <input className="form-check-input ms-0 theme-control-toggle-input" type="checkbox" data-theme-control={"phoenixTheme"} value="dark" id="themeControlToggle" />
              <label className="mb-0 theme-control-toggle-label theme-control-toggle-light" htmlFor="themeControlToggle" data-bs-toggle={"tooltip"} data-bs-placement={"left"} data-bs-title={"Switch theme"} style={{"height":"32px","width":"32px"} as CSSProperties}>
                <span className="icon" data-feather={"moon"}>                </span>
              </label>
              <label className="mb-0 theme-control-toggle-label theme-control-toggle-dark" htmlFor="themeControlToggle" data-bs-toggle={"tooltip"} data-bs-placement={"left"} data-bs-title={"Switch theme"} style={{"height":"32px","width":"32px"} as CSSProperties}>
                <span className="icon" data-feather={"sun"}>                </span>
              </label>
            </div>
          </li>
          <li className="nav-item d-lg-none">
            <a href="#" className="nav-link"  data-bs-toggle={"modal"} data-bs-target={"#searchBoxModal"}>
              <span data-feather={"search"} style={{"height":"19px","width":"19px","marginBottom":"2px"} as CSSProperties}>              </span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link"  style={{"minWidth":"2.25rem"} as CSSProperties} role="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false" data-bs-auto-close={"outside"}>
              <span className="d-block" style={{"height":"20px","width":"20px"} as CSSProperties}>
                <span data-feather={"bell"} style={{"height":"20px","width":"20px"} as CSSProperties}>                </span>
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
                              <span className="me-1 fas fa-clock">                              </span>
                              <span className="fw-bold">
10:41 AM 
                              </span>
August 7,2021
                            </p>
                          </div>
                        </div>
                        <div className="dropdown notification-dropdown">
                          <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10 text-body">                            </span>
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
                              <span className="me-1 fas fa-clock">                              </span>
                              <span className="fw-bold">
10:20 AM 
                              </span>
August 7,2021
                            </p>
                          </div>
                        </div>
                        <div className="dropdown notification-dropdown">
                          <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10 text-body">                            </span>
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
                              <span className="me-1 fas fa-clock">                              </span>
                              <span className="fw-bold">
9:30 AM 
                              </span>
August 7,2021
                            </p>
                          </div>
                        </div>
                        <div className="dropdown notification-dropdown">
                          <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10 text-body">                            </span>
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
                              <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">                              </span>
                            </p>
                            <p className="text-body-secondary fs-9 mb-0">
                              <span className="me-1 fas fa-clock">                              </span>
                              <span className="fw-bold">
9:11 AM 
                              </span>
August 7,2021
                            </p>
                          </div>
                        </div>
                        <div className="dropdown notification-dropdown">
                          <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10 text-body">                            </span>
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
                              <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">                              </span>
                            </p>
                            <p className="text-body-secondary fs-9 mb-0">
                              <span className="me-1 fas fa-clock">                              </span>
                              <span className="fw-bold">
10:58 PM 
                              </span>
August 7,2021
                            </p>
                          </div>
                        </div>
                        <div className="dropdown notification-dropdown">
                          <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10 text-body">                            </span>
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
                              <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">                              </span>
                            </p>
                            <p className="text-body-secondary fs-9 mb-0">
                              <span className="me-1 fas fa-clock">                              </span>
                              <span className="fw-bold">
10:18 AM 
                              </span>
August 7,2021
                            </p>
                          </div>
                        </div>
                        <div className="dropdown notification-dropdown">
                          <button className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle={"dropdown"} data-boundary={"window"} aria-haspopup="true" aria-expanded="false" data-bs-reference={"parent"}>
                            <span className="fas fa-ellipsis-h fs-10 text-body">                            </span>
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
                    <PhoenixLink href="/pages/notifications.html" className="fw-bolder">
Notification history
                    </PhoenixLink>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link" id="navbarDropdownNindeDots"  role="button" data-bs-toggle={"dropdown"} aria-haspopup="true" data-bs-auto-close={"outside"} aria-expanded="false">
              <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="2" fill="currentColor">                </circle>
                <circle cx="2" cy="8" r="2" fill="currentColor">                </circle>
                <circle cx="2" cy="14" r="2" fill="currentColor">                </circle>
                <circle cx="8" cy="8" r="2" fill="currentColor">                </circle>
                <circle cx="8" cy="14" r="2" fill="currentColor">                </circle>
                <circle cx="14" cy="8" r="2" fill="currentColor">                </circle>
                <circle cx="14" cy="14" r="2" fill="currentColor">                </circle>
                <circle cx="8" cy="2" r="2" fill="currentColor">                </circle>
                <circle cx="14" cy="2" r="2" fill="currentColor">                </circle>
              </svg>
            </a>
            <div className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nine-dots shadow border" aria-labelledby="navbarDropdownNindeDots">
              <div className="card bg-body-emphasis position-relative border-0">
                <div className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar" style={{"height":"20rem"} as CSSProperties}>
                  <div className="row text-center align-items-center gx-0 gy-0">
                    <div className="col-4">
                      <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                        <PhoenixImage src="/assets/img/nav-icons/behance.webp" alt="" width={30} />                        <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Behance
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                        <PhoenixImage src="/assets/img/nav-icons/google-cloud.webp" alt="" width={30} />                        <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Cloud
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                        <PhoenixImage src="/assets/img/nav-icons/slack.webp" alt="" width={30} />                        <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Slack
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                        <PhoenixImage src="/assets/img/nav-icons/gitlab.webp" alt="" width={30} />                        <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Gitlab
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                        <PhoenixImage src="/assets/img/nav-icons/bitbucket.webp" alt="" width={30} />                        <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
BitBucket
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                        <PhoenixImage src="/assets/img/nav-icons/google-drive.webp" alt="" width={30} />                        <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Drive
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                        <PhoenixImage src="/assets/img/nav-icons/trello.webp" alt="" width={30} />                        <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Trello
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                        <PhoenixImage src="/assets/img/nav-icons/figma.webp" alt="" width={20} />                        <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Figma
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                        <PhoenixImage src="/assets/img/nav-icons/twitter.webp" alt="" width={30} />                        <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Twitter
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                        <PhoenixImage src="/assets/img/nav-icons/pinterest.webp" alt="" width={30} />                        <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Pinterest
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                        <PhoenixImage src="/assets/img/nav-icons/ln.webp" alt="" width={30} />                        <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Linkedin
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                        <PhoenixImage src="/assets/img/nav-icons/google-maps.webp" alt="" width={30} />                        <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Maps
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                        <PhoenixImage src="/assets/img/nav-icons/google-photos.webp" alt="" width={30} />                        <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
Photos
                        </p>
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="#!" className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3">
                        <PhoenixImage src="/assets/img/nav-icons/spotify.webp" alt="" width={30} />                        <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
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
            <a href="#!" className="nav-link lh-1 pe-0" id="navbarDropdownUser"  role="button" data-bs-toggle={"dropdown"} data-bs-auto-close={"outside"} aria-haspopup="true" aria-expanded="false">
              <div className="avatar avatar-l ">
                <PhoenixImage src="/assets/img/team/40x40/57.webp" alt="" className="rounded-circle " />
              </div>
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
                        <span className="me-2 text-body align-bottom" data-feather={"user"}>                        </span>                        <span>
Profile
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#!" className="nav-link px-3 d-block">
                        <span className="me-2 text-body align-bottom" data-feather={"pie-chart"}>                        </span>Dashboard
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#!" className="nav-link px-3 d-block">
                        <span className="me-2 text-body align-bottom" data-feather={"lock"}>                        </span>{"Posts & Activity"}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#!" className="nav-link px-3 d-block">
                        <span className="me-2 text-body align-bottom" data-feather={"settings"}>                        </span>{"Settings & Privacy "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#!" className="nav-link px-3 d-block">
                        <span className="me-2 text-body align-bottom" data-feather={"help-circle"}>                        </span>Help Center
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#!" className="nav-link px-3 d-block">
                        <span className="me-2 text-body align-bottom" data-feather={"globe"}>                        </span>Language
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-footer p-0 border-top border-translucent">
                  <ul className="nav d-flex flex-column my-3">
                    <li className="nav-item">
                      <a href="#!" className="nav-link px-3 d-block">
                        <span className="me-2 text-body align-bottom" data-feather={"user-plus"}>                        </span>Add another account
                      </a>
                    </li>
                  </ul>
                  <hr />
                  <div className="px-3">
                    <a href="#!" className="btn btn-phoenix-secondary d-flex flex-center w-100">
                      <span className="me-2" data-feather={"log-out"}>                      </span>Sign out
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
      </div>
    </nav>

    </>
  );
}
