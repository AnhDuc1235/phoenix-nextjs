'use client';

import { useEffect } from 'react';

export default function PhoenixNavbarInit() {
  useEffect(() => {
    const cfg = window.config?.config;
    if (!cfg) return;

    const navbarTop = document.querySelector('.navbar-top');
    if (navbarTop && cfg.phoenixNavbarTopStyle === 'darker') {
      navbarTop.setAttribute('data-navbar-appearance', 'darker');
    }

    const navbarVertical = document.querySelector('.navbar-vertical');
    if (navbarVertical && cfg.phoenixNavbarVerticalStyle === 'darker') {
      navbarVertical.setAttribute('data-navbar-appearance', 'darker');
    }
  }, []);

  return null;
}
