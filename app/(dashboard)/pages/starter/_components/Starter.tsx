'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Starter() {
  return (
    <div suppressHydrationWarning>

    <div className="d-flex flex-center content-min-h">
      <div className="text-center py-9">
        <PhoenixImage src="/assets/img/spot-illustrations/2.png" alt="" className="img-fluid mb-7 d-dark-none" width={470} />
        <PhoenixImage src="/assets/img/spot-illustrations/dark_2.png" alt="" className="img-fluid mb-7 d-light-none" width={470} />
        <h1 className="text-body-secondary fw-normal mb-5">
Create Something Beautiful.
        </h1>
        <PhoenixLink href="/documentation/getting-started" className="btn btn-lg btn-primary">
Getting Started
        </PhoenixLink>
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
