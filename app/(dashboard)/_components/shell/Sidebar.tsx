'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Sidebar() {
  return (
    <>
      <nav className="navbar navbar-vertical navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
          <div className="navbar-vertical-content">
            <ul className="navbar-nav flex-column" id="navbarVerticalNav">
              <li className="nav-item">
                <div className="nav-item-wrapper">
                  <a href="#nv-home" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="true" aria-controls="nv-home">
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
                        <PhoenixLink href="/" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              E commerce
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/dashboard/project-management" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Project management
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/dashboard/crm" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              CRM
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/dashboard/travel-agency" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Travel agency
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/dashboard/stock" className="nav-link">
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
                        <PhoenixLink href="/apps/social/feed" className="nav-link">
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
                  <a href="#nv-e-commerce" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-e-commerce">
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
                        <a href="#nv-admin" className="nav-link dropdown-indicator" data-bs-toggle={"collapse"} aria-expanded="true" aria-controls="nv-admin">
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
                              <PhoenixLink href="/apps/e-commerce/admin/add-product" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Add product
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/apps/e-commerce/admin/products" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Products
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/apps/e-commerce/admin/customers" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Customers
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/apps/e-commerce/admin/customer-details" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Customer details
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/apps/e-commerce/admin/orders" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Orders
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/apps/e-commerce/admin/order-details" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Order details
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/apps/e-commerce/admin/refund" className="nav-link">
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
                        <a href="#nv-customer" className="nav-link dropdown-indicator" data-bs-toggle={"collapse"} aria-expanded="true" aria-controls="nv-customer">
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
                              <PhoenixLink href="/apps/e-commerce/landing/homepage" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Homepage
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/apps/e-commerce/landing/product-details" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Product details
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/apps/e-commerce/landing/products-filter" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Products filter
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/apps/e-commerce/landing/cart" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Cart
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/apps/e-commerce/landing/checkout" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Checkout
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/apps/e-commerce/landing/shipping-info" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Shipping info
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/apps/e-commerce/landing/profile" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Profile
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/apps/e-commerce/landing/favourite-stores" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Favourite stores
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/apps/e-commerce/landing/wishlist" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Wishlist
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/apps/e-commerce/landing/order-tracking" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Order tracking
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/apps/e-commerce/landing/invoice" className="nav-link">
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
                  <a href="#nv-CRM" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-CRM">
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
                        <PhoenixLink href="/apps/crm/analytics" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Analytics
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/apps/crm/deals" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Deals
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/apps/crm/deal-details" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Deal details
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/apps/crm/leads" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Leads
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/apps/crm/lead-details" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Lead details
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/apps/crm/reports" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Reports
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/apps/crm/report-details" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Report details
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/apps/crm/add-contact" className="nav-link">
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
                  <a href="#nv-project-management" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-project-management">
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
                        <PhoenixLink href="/apps/project-management/create-new" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Create new
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/apps/project-management/project-list-view" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Project list view
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/apps/project-management/project-card-view" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Project card view
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/apps/project-management/project-board-view" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Project board view
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/apps/project-management/todo-list" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Todo list
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/apps/project-management/project-details" className="nav-link">
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
                  <a href="#nv-travel-agency" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-travel-agency">
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
                        <PhoenixLink href="/apps/travel-agency/landing" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Landing
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <a href="#nv-hotel" className="nav-link dropdown-indicator" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-hotel">
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
                              <a href="#nv-hotel-admin" className="nav-link dropdown-indicator" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-hotel-admin">
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
                                    <PhoenixLink href="/apps/travel-agency/hotel/admin/add-property" className="nav-link">
                                      <div className="d-flex align-items-center">
                                        <span className="nav-link-text">
                                          Add property
                                        </span>
                                      </div>
                                    </PhoenixLink>
                                  </li>
                                  <li className="nav-item">
                                    <PhoenixLink href="/apps/travel-agency/hotel/admin/add-room" className="nav-link">
                                      <div className="d-flex align-items-center">
                                        <span className="nav-link-text">
                                          Add room
                                        </span>
                                      </div>
                                    </PhoenixLink>
                                  </li>
                                  <li className="nav-item">
                                    <PhoenixLink href="/apps/travel-agency/hotel/admin/room-listing" className="nav-link">
                                      <div className="d-flex align-items-center">
                                        <span className="nav-link-text">
                                          Room listing
                                        </span>
                                      </div>
                                    </PhoenixLink>
                                  </li>
                                  <li className="nav-item">
                                    <PhoenixLink href="/apps/travel-agency/hotel/admin/room-search" className="nav-link">
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
                              <a href="#nv-hotel-customer" className="nav-link dropdown-indicator" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-hotel-customer">
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
                                    <PhoenixLink href="/apps/travel-agency/hotel/customer/homepage" className="nav-link">
                                      <div className="d-flex align-items-center">
                                        <span className="nav-link-text">
                                          Homepage
                                        </span>
                                      </div>
                                    </PhoenixLink>
                                  </li>
                                  <li className="nav-item">
                                    <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-details" className="nav-link">
                                      <div className="d-flex align-items-center">
                                        <span className="nav-link-text">
                                          Hotel details
                                        </span>
                                      </div>
                                    </PhoenixLink>
                                  </li>
                                  <li className="nav-item">
                                    <PhoenixLink href="/apps/travel-agency/hotel/customer/hotel-compare" className="nav-link">
                                      <div className="d-flex align-items-center">
                                        <span className="nav-link-text">
                                          Hotel compare
                                        </span>
                                      </div>
                                    </PhoenixLink>
                                  </li>
                                  <li className="nav-item">
                                    <PhoenixLink href="/apps/travel-agency/hotel/customer/checkout" className="nav-link">
                                      <div className="d-flex align-items-center">
                                        <span className="nav-link-text">
                                          Checkout
                                        </span>
                                      </div>
                                    </PhoenixLink>
                                  </li>
                                  <li className="nav-item">
                                    <PhoenixLink href="/apps/travel-agency/hotel/customer/payment" className="nav-link">
                                      <div className="d-flex align-items-center">
                                        <span className="nav-link-text">
                                          Payment
                                        </span>
                                      </div>
                                    </PhoenixLink>
                                  </li>
                                  <li className="nav-item">
                                    <PhoenixLink href="/apps/travel-agency/hotel/customer/gallery" className="nav-link">
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
                        <a href="#nv-flight" className="nav-link dropdown-indicator" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-flight">
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
                              <PhoenixLink href="/apps/travel-agency/flight/homepage" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Homepage
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/apps/travel-agency/flight/booking" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Booking
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/apps/travel-agency/flight/payment" className="nav-link">
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
                        <a href="#nv-trip" className="nav-link dropdown-indicator" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-trip">
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
                              <PhoenixLink href="/apps/travel-agency/trip/homepage" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Homepage
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/apps/travel-agency/trip/trip-details" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Trip details
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/apps/travel-agency/trip/checkout" className="nav-link">
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
                  <a href="#nv-stock" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-stock">
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
                        <PhoenixLink href="/apps/stock/stock-details" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Stock details
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/apps/stock/portfolio" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Portfolio
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/apps/stock/watchlist" className="nav-link">
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
                  <PhoenixLink href="/apps/chat" className="nav-link label-1" role="button" data-bs-toggle={""} aria-expanded="false">
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
                  <a href="#nv-email" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-email">
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
                        <PhoenixLink href="/apps/email/inbox" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Inbox
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/apps/email/email-detail" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Email detail
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/apps/email/compose" className="nav-link">
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
                  <a href="#nv-events" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-events">
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
                        <PhoenixLink href="/apps/events/create-an-event" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Create an event
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/apps/events/event-detail" className="nav-link">
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
                  <a href="#nv-kanban" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-kanban">
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
                        <PhoenixLink href="/apps/kanban/kanban" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Kanban
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/apps/kanban/boards" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Boards
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/apps/kanban/create-kanban-board" className="nav-link">
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
                  <PhoenixLink href="/apps/gantt-chart" className="nav-link label-1" role="button" data-bs-toggle={""} aria-expanded="false">
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
                  <a href="#nv-social" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-social">
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
                        <PhoenixLink href="/apps/social/profile" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Profile
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/apps/social/settings" className="nav-link">
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
                  <a href="#nv-gallery" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-gallery">
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
                        <PhoenixLink href="/apps/gallery/album" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Album
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/apps/gallery/gallery-column" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Gallery column
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/apps/gallery/gallery-grid" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Gallery grid
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/apps/gallery/grid-with-title" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Grid with title
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/apps/gallery/gallery-masonry" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Gallery masonry
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/apps/gallery/gallery-slider" className="nav-link">
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
                  <a href="#nv-file-manager" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-file-manager">
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
                        <PhoenixLink href="/apps/file-manager/grid-view" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Grid view
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/apps/file-manager/list-view" className="nav-link">
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
                  <PhoenixLink href="/apps/calendar" className="nav-link label-1" role="button" data-bs-toggle={""} aria-expanded="false">
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
                  <PhoenixLink href="/pages/starter" className="nav-link label-1" role="button" data-bs-toggle={""} aria-expanded="false">
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
                  <a href="#nv-faq" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-faq">
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
                        <PhoenixLink href="/pages/faq/faq-accordion" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Faq accordion
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/pages/faq/faq-tab" className="nav-link">
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
                  <a href="#nv-landing" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-landing">
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
                        <PhoenixLink href="/pages/landing/default" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Default
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/pages/landing/alternate" className="nav-link">
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
                  <a href="#nv-pricing" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-pricing">
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
                        <PhoenixLink href="/pages/pricing/pricing-column" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Pricing column
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/pages/pricing/pricing-grid" className="nav-link">
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
                  <PhoenixLink href="/pages/notifications" className="nav-link label-1" role="button" data-bs-toggle={""} aria-expanded="false">
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
                  <PhoenixLink href="/pages/members" className="nav-link label-1" role="button" data-bs-toggle={""} aria-expanded="false">
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
                  <PhoenixLink href="/pages/timeline" className="nav-link label-1" role="button" data-bs-toggle={""} aria-expanded="false">
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
                  <a href="#nv-errors" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-errors">
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
                        <PhoenixLink href="/pages/errors/404" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              404
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/pages/errors/403" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              403
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/pages/errors/500" className="nav-link">
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
                  <a href="#nv-authentication" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-authentication">
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
                        <a href="#nv-simple" className="nav-link dropdown-indicator" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-simple">
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
                              <PhoenixLink href="/pages/authentication/simple/sign-in" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Sign in
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/pages/authentication/simple/sign-up" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Sign up
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/pages/authentication/simple/sign-out" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Sign out
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/pages/authentication/simple/forgot-password" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Forgot password
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/pages/authentication/simple/reset-password" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Reset password
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/pages/authentication/simple/lock-screen" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Lock screen
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/pages/authentication/simple/2FA" className="nav-link">
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
                        <a href="#nv-split" className="nav-link dropdown-indicator" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-split">
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
                              <PhoenixLink href="/pages/authentication/split/sign-in" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Sign in
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/pages/authentication/split/sign-up" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Sign up
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/pages/authentication/split/sign-out" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Sign out
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/pages/authentication/split/forgot-password" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Forgot password
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/pages/authentication/split/reset-password" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Reset password
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/pages/authentication/split/lock-screen" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Lock screen
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/pages/authentication/split/2FA" className="nav-link">
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
                        <a href="#nv-Card" className="nav-link dropdown-indicator" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-Card">
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
                              <PhoenixLink href="/pages/authentication/card/sign-in" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Sign in
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/pages/authentication/card/sign-up" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Sign up
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/pages/authentication/card/sign-out" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Sign out
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/pages/authentication/card/forgot-password" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Forgot password
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/pages/authentication/card/reset-password" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Reset password
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/pages/authentication/card/lock-screen" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Lock screen
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/pages/authentication/card/2FA" className="nav-link">
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
                  <a href="#nv-layouts" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-layouts">
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
                        <PhoenixLink href="/demo/vertical-sidenav" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Vertical sidenav
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/demo/dark-mode" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Dark mode
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/demo/sidenav-collapse" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Sidenav collapse
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/demo/darknav" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Darknav
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/demo/topnav-slim" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Topnav slim
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/demo/navbar-horizontal" className="nav-link" target="_blank">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Navbar horizontal
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/demo/horizontal-slim" className="nav-link" target="_blank">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Horizontal slim
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/demo/combo-nav" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Combo nav
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/demo/combo-nav-slim" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Combo nav slim
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/demo/dual-nav" className="nav-link" target="_blank">
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
                  <a href="#nv-forms" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-forms">
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
                        <a href="#nv-basic" className="nav-link dropdown-indicator" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-basic">
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
                              <PhoenixLink href="/modules/forms/basic/form-control" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Form control
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/modules/forms/basic/input-group" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Input group
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/modules/forms/basic/select" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Select
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/modules/forms/basic/checks" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Checks
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/modules/forms/basic/range" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Range
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/modules/forms/basic/floating-labels" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Floating labels
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/modules/forms/basic/layout" className="nav-link">
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
                        <a href="#nv-advance" className="nav-link dropdown-indicator" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-advance">
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
                              <PhoenixLink href="/modules/forms/advance/advance-select" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Advance select
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/modules/forms/advance/date-picker" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Date picker
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/modules/forms/advance/editor" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Editor
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/modules/forms/advance/file-uploader" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    File uploader
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/modules/forms/advance/range" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Range
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/modules/forms/advance/rating" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Rating
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/modules/forms/advance/emoji-button" className="nav-link">
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
                        <PhoenixLink href="/modules/forms/validation" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Validation
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/forms/wizard" className="nav-link">
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
                  <a href="#nv-icons" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-icons">
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
                        <PhoenixLink href="/modules/icons/feather" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Feather
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/icons/font-awesome" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Font awesome
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/icons/unicons" className="nav-link">
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
                  <a href="#nv-tables" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-tables">
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
                        <PhoenixLink href="/modules/tables/basic-tables" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Basic tables
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/tables/advance-tables" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Advance tables
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/tables/bulk-select" className="nav-link">
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
                  <a href="#nv-ECharts" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-ECharts">
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
                        <PhoenixLink href="/modules/echarts/line-charts" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Line charts
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/echarts/bar-charts" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Bar charts
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/echarts/candlestick-charts" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Candlestick charts
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/echarts/geo-map" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Geo map
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/echarts/scatter-charts" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Scatter charts
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/echarts/pie-charts" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Pie charts
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/echarts/gauge-chart" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Gauge chart
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/echarts/radar-charts" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Radar charts
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/echarts/heatmap-charts" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Heatmap charts
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/echarts/how-to-use" className="nav-link">
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
                  <a href="#nv-components" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-components">
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
                      <span className="fa-solid fa-circle text-info ms-1 new-page-indicator" style={{ "fontSize": "6px" } as CSSProperties}>                    </span>
                    </div>
                  </a>
                  <div className="parent-wrapper label-1">
                    <ul className="nav collapse parent" data-bs-parent={"#navbarVerticalCollapse"} id="nv-components">
                      <li className="collapsed-nav-item-title d-none">
                        Components
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/components/accordion" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Accordion
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/components/avatar" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Avatar
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/components/alerts" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Alerts
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/components/badge" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Badge
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/components/breadcrumb" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Breadcrumb
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/components/button" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Buttons
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/components/calendar" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Calendar
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/components/card" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Card
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <a href="#nv-carousel" className="nav-link dropdown-indicator" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-carousel">
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
                              <PhoenixLink href="/modules/components/carousel/bootstrap" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Bootstrap
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/modules/components/carousel/swiper" className="nav-link">
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
                        <PhoenixLink href="/modules/components/collapse" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Collapse
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/components/dropdown" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Dropdown
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/components/dhtmlx-gantt" className="nav-link">
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
                        <PhoenixLink href="/modules/components/list-group" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              List group
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/components/modal" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Modals
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <a href="#nv-navs-_and_-Tabs" className="nav-link dropdown-indicator" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-navs-_and_-Tabs">
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
                              <PhoenixLink href="/modules/components/navs-and-tabs/navs" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Navs
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/modules/components/navs-and-tabs/navbar" className="nav-link">
                                <div className="d-flex align-items-center">
                                  <span className="nav-link-text">
                                    Navbar
                                  </span>
                                </div>
                              </PhoenixLink>
                            </li>
                            <li className="nav-item">
                              <PhoenixLink href="/modules/components/navs-and-tabs/tabs" className="nav-link">
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
                        <PhoenixLink href="/modules/components/offcanvas" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Offcanvas
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/components/progress-bar" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Progress bar
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/components/placeholder" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Placeholder
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/components/pagination" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Pagination
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/components/popovers" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Popovers
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/components/scrollspy" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Scrollspy
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/components/sortable" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Sortable
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/components/spinners" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Spinners
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/components/toast" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Toast
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/components/tooltips" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Tooltips
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/components/typed-text" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Typed text
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/components/chat-widget" className="nav-link">
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
                  <a href="#nv-utilities" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-utilities">
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
                        <PhoenixLink href="/modules/utilities/background" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Background
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/utilities/borders" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Borders
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/utilities/colors" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Colors
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/utilities/display" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Display
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/utilities/flex" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Flex
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/utilities/stacks" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Stacks
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/utilities/float" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Float
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/utilities/grid" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Grid
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/utilities/interactions" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Interactions
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/utilities/opacity" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Opacity
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/utilities/overflow" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Overflow
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/utilities/position" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Position
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/utilities/shadows" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Shadows
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/utilities/sizing" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Sizing
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/utilities/spacing" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Spacing
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/utilities/typography" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Typography
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/utilities/vertical-align" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Vertical align
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/modules/utilities/visibility" className="nav-link">
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
                  <PhoenixLink href="/widgets" className="nav-link label-1" role="button" data-bs-toggle={""} aria-expanded="false">
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
                  <a href="#nv-multi-level" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-multi-level">
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
                        <a href="#nv-level-two" className="nav-link dropdown-indicator" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-level-two">
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
                        <a href="#nv-level-three" className="nav-link dropdown-indicator" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-level-three">
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
                              <a href="#nv-item-4" className="nav-link dropdown-indicator" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-item-4">
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
                        <a href="#nv-level-four" className="nav-link dropdown-indicator" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-level-four">
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
                              <a href="#nv-item-7" className="nav-link dropdown-indicator" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-item-7">
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
                                    <a href="#nv-item-9" className="nav-link dropdown-indicator" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-item-9">
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
                  <PhoenixLink href="/documentation/getting-started" className="nav-link label-1" role="button" data-bs-toggle={""} aria-expanded="false">
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
                  <a href="#nv-customization" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-customization">
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
                        <PhoenixLink href="/documentation/customization/configuration" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Configuration
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/documentation/customization/styling" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Styling
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/documentation/customization/color" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Color
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/documentation/customization/dark-mode" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Dark mode
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/documentation/customization/plugin" className="nav-link">
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
                  <a href="#nv-layouts-doc" className="nav-link dropdown-indicator label-1" role="button" data-bs-toggle={"collapse"} aria-expanded="false" aria-controls="nv-layouts-doc">
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
                        <PhoenixLink href="/documentation/layouts/vertical-navbar" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Vertical navbar
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/documentation/layouts/horizontal-navbar" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Horizontal navbar
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/documentation/layouts/combo-navbar" className="nav-link">
                          <div className="d-flex align-items-center">
                            <span className="nav-link-text">
                              Combo navbar
                            </span>
                          </div>
                        </PhoenixLink>
                      </li>
                      <li className="nav-item">
                        <PhoenixLink href="/documentation/layouts/dual-nav" className="nav-link">
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
                  <PhoenixLink href="/documentation/gulp" className="nav-link label-1" role="button" data-bs-toggle={""} aria-expanded="false">
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
                  <PhoenixLink href="/documentation/design-file" className="nav-link label-1" role="button" data-bs-toggle={""} aria-expanded="false">
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
                  <PhoenixLink href="/changelog" className="nav-link label-1" role="button" data-bs-toggle={""} aria-expanded="false">
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
                  <PhoenixLink href="/showcase" className="nav-link label-1" role="button" data-bs-toggle={""} aria-expanded="false">
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

    </>
  );
}
